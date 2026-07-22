/**
 * Shared JSON-LD structured-data nodes.
 *
 * These resolve the `#organization` and `#website` @id references used by the
 * per-page WebPage/Breadcrumb schema, and give Google the machine-readable
 * local-business signals (address, geo, hours, phone) that power the local
 * pack, Maps, and the knowledge panel.
 */

const SITE = 'https://hawaiioman.com';

/**
 * FoodEstablishment (a LocalBusiness subtype) for the Muscat juice bar.
 * @id is `#organization` so existing WebPage.about references resolve to it.
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "@id": `${SITE}/#organization`,
  "name": "Hawaii Fresh Juice",
  "url": `${SITE}/`,
  "image": `${SITE}/assets/og-image.jpg`,
  "logo": `${SITE}/favicon.png`,
  "description":
    "100% natural, farm-to-bottle fresh fruit juices made from carefully selected local fruit. Juice bar in Al Wadi Al Kabir, Muscat, Oman.",
  "telephone": "+96879727401",
  "email": "jannajuices@gmail.com",
  "priceRange": "$",
  "servesCuisine": ["Fresh Juice", "Cold-Pressed Juice", "Beverages"],
  "currenciesAccepted": "OMR",
  "foundingDate": "2024-03",
  "founder": { "@type": "Person", "name": "Yasir Arafath" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Al Wadi Al Kabir",
    "addressLocality": "Muscat",
    "addressRegion": "Muscat",
    "addressCountry": "OM"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.5859,
    "longitude": 58.4059
  },
  "hasMap": "https://www.google.com/maps?q=23.5859,58.4059",
  "areaServed": { "@type": "City", "name": "Muscat" },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ]
} as const;

/**
 * WebSite node (@id `#website`) so WebPage.isPartOf references resolve.
 */
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  "url": `${SITE}/`,
  "name": "Hawaii Fresh Juice",
  "inLanguage": "en",
  "publisher": { "@id": `${SITE}/#organization` }
} as const;
