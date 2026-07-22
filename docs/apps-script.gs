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
 * Mirrors the client-side validation in src/pages/Contact.tsx so junk that
 * bypasses the browser (bots POSTing straight to /exec) is rejected here too.
 */

// Practical email check: catches typos/junk without rejecting valid addresses.
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function doPost(e) {
  try {
    var p = (e && e.parameter) || {};
    var name    = String(p.name    || '').trim();
    var email   = String(p.email   || '').trim();
    var message = String(p.message || '').trim();
    var company = String(p.company || '').trim(); // honeypot (hidden field)

    // Honeypot filled => bot. Return "success" so it gets no signal, but store nothing.
    if (company) {
      return _json({ result: 'success' });
    }

    // Server-side validation. Bots that POST directly bypass the browser checks,
    // so re-validate everything here.
    if (name.length < 2) {
      return _json({ result: 'error', message: 'invalid name' });
    }
    if (!EMAIL_REGEX.test(email) || email.length > 254) {
      return _json({ result: 'error', message: 'invalid email' });
    }
    if (message.length < 5 || message.length > 5000) {
      return _json({ result: 'error', message: 'invalid message' });
    }

    // Junk heuristic: link-spam. Tune the threshold as needed.
    var linkCount = (message.match(/https?:\/\//gi) || []).length;
    if (linkCount > 2) {
      return _json({ result: 'error', message: 'too many links' });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([new Date(), name, email, message]);

    return _json({ result: 'success' });
  } catch (err) {
    return _json({ result: 'error', message: 'server error: ' + err });
  }
}

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
