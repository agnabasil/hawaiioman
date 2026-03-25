import React from 'react';
import { MARQUEE_ITEMS } from '../../data/mockData';

export const Marquee: React.FC = () => {
  return (
    <div className="bg-text-main py-6 border-y-4 border-primary w-full overflow-hidden flex whitespace-nowrap">
      <div className="flex w-max animate-marquee">
        {/* Render four times for seamless loop on all screen sizes */}
        {[1, 2, 3, 4].map((iter) => (
          <div key={iter} className="flex items-center gap-12 mx-6">
            {MARQUEE_ITEMS.map((item, i) => (
              <React.Fragment key={`${iter}-${i}`}>
                <span className="text-surface font-display text-2xl font-bold tracking-widest">{item}</span>
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
