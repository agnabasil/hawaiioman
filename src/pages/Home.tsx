import React from 'react';
import { Hero } from '../components/home/Hero';
import { Marquee } from '../components/ui/Marquee';
import { ProductHighlights } from '../components/home/ProductHighlights';
import { HeritageStrap } from '../components/home/HeritageStrap';
import { SEOHead } from '../components/SEOHead';

export const Home: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Hawaii Fresh Juice | Taste Oman in Every Sip"
        description="Authentic Omani freshness in every bottle. Hawaii Fresh Juice offers 100% natural, farm-to-bottle juices from carefully selected local fruits. Taste the bounty of Oman."
        canonical="https://hawaiioman.com/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://hawaiioman.com"
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://hawaiioman.com/#webpage",
            "url": "https://hawaiioman.com/",
            "name": "Hawaii Fresh Juice | Taste Oman in Every Sip",
            "isPartOf": { "@id": "https://hawaiioman.com/#website" },
            "about": { "@id": "https://hawaiioman.com/#organization" },
            "inLanguage": "en",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "p"]
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Hawaii Fresh Juice?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hawaii Fresh Juice is a certified Omani juice brand founded in March 2024 by Yasir Arafath. It makes 100% natural, farm-to-bottle fruit juices from carefully selected fruits sourced at local Omani markets, based in Al Wadi Al Kabir, Muscat, Sultanate of Oman."
                }
              },
              {
                "@type": "Question",
                "name": "Are Hawaii juices 100% natural?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Every Hawaii Fresh Juice is 100% organic with no artificial preservatives or additives, made farm-to-bottle from fresh fruit."
                }
              },
              {
                "@type": "Question",
                "name": "What juice flavors does Hawaii Fresh Juice offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Current flavors are Ginger Orange (signature), Ball Grape (seasonal), Pieces Mango (best seller), and Natural Lemon (new). Ice Bounty and Pieces Pineapple are coming soon."
                }
              },
              {
                "@type": "Question",
                "name": "How much does a Hawaii juice cost and what size is it?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Each juice comes in a 200 mL bottle priced at 0.200 OMR."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I buy Hawaii Fresh Juice in Oman?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hawaii Fresh Juice is available at the juice bar in Al Wadi Al Kabir, Muscat, and through select local retailers, groceries and schools across the Sultanate of Oman. Open Saturday to Thursday, 8:00 AM to 6:00 PM."
                }
              }
            ]
          }
        ]}
      />
      <Hero />
      <Marquee />
      <ProductHighlights />
      <HeritageStrap />
    </>
  );
};
