import React from 'react';
import { Hero } from '../components/home/Hero';
import { Marquee } from '../components/ui/Marquee';
import { ProductHighlights } from '../components/home/ProductHighlights';
import { HeritageStrap } from '../components/home/HeritageStrap';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <ProductHighlights />
      <HeritageStrap />
    </>
  );
};
