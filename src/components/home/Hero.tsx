import React from 'react';
import { Link } from 'react-router';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10"></div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Hero Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            Sourced from Oman
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-text-main leading-[1.05] mb-8">
            Taste <span className="text-primary">Oman</span> <br />in every sip
          </h1>
          <p className="text-lg md:text-xl text-text-main/70 font-body max-w-lg mb-12 mx-auto lg:mx-0">
            Authentic Omani freshness in every bottle - crafted from carefully selected fruits sourced from trusted local markets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link to="/products" className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full shadow-[0_8px_20px_rgba(242,100,49,0.3)] hover:shadow-[0_12px_25px_rgba(242,100,49,0.4)] transition-all hover:-translate-y-1">
              Taste the Bounty
            </Link>
            <Link to="/story" className="bg-surface hover:bg-background-light text-text-main font-bold py-4 px-8 rounded-full border border-muted/20 hover:border-muted/40 transition-all">
              Our Heritage
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none">
          <div className="aspect-square relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/10 rounded-[4rem] rotate-6 animate-pulse"></div>
            <div className="absolute inset-4 border-2 border-primary/20 rounded-[3.5rem] -rotate-3"></div>
            <img
              src="/images/hero-orange-juice.png"
              onError={(e) => {
                e.currentTarget.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuCwntRX4mJinbpzgMu9ByE-3LxBDUwll6Ym90SZrZ690aeQtu2MpxvfpvVATIMj_bHnjvmBn368ZbGkK6x698aYQ2NoiXko_mlL84zc1qmRlFQmS9JExSKoysuEWUV1tPBweZM58g1fxr7pMO7iCQc03HBeURmHZhDiRtjExaskGEUpSm8uJdiAk70rBkLZJgfxNSp0fc4xhYareObau62VNc5Ffgkl4MH_g0le9igv9XtoR58RpUJYFtQU79DDl6Ytbkohm7trTajB";
              }}
              alt="Premium Omani Fresh Juice bottle - Hawaii Fresh Juice signature Ginger Orange blend"
              width={425}
              height={425}
              fetchPriority="high"
              className="relative z-10 w-[85%] h-auto object-contain animate-float drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
