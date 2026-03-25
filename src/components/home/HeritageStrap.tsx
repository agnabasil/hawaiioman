import React from 'react';
import { HERITAGE_ITEMS } from '../../data/mockData';

export const HeritageStrap: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-background-dark text-surface relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col items-center gap-12 text-center">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Crafted from Omani Soil</h2>
          <p className="text-muted/80 font-body text-lg md:text-xl leading-relaxed mb-10">
            At Hawaii Fresh Juice, we believe the best flavors come from our own earth. We partner with local markets across Oman to bring you fresh fruit juices that aren't just organic, but a tribute to the rich agricultural heritage of the Sultanate.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {HERITAGE_ITEMS.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
                <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
