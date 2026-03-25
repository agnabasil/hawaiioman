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
