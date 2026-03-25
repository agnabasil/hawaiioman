import React from 'react';
import { Hero } from '../components/home/Hero';
import { Marquee } from '../components/ui/Marquee';
import { ProductHighlights } from '../components/home/ProductHighlights';
import { HeritageStrap } from '../components/home/HeritageStrap';

export const Home: React.FC = () => {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
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
        })}
      </script>
      <Hero />
      <Marquee />
      <ProductHighlights />
      <HeritageStrap />
    </>
  );
};
