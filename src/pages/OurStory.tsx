import React from 'react';
import { SEOHead } from '../components/SEOHead';

export const OurStory: React.FC = () => {
  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24 relative mt-10">
      <SEOHead
        title="Our Story"
        description="Hawaii Fresh Juice was founded in Muscat, Oman with a mission to make fresh, high-quality fruit juices accessible and affordable. Learn about our farm-to-bottle journey."
        canonical="https://hawaiioman.com/story"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Our Story - Hawaii Fresh Juice",
            "description": "The founding story of Hawaii Fresh Juice, an Omani juice brand.",
            "url": "https://hawaiioman.com/story"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hawaiioman.com" },
              { "@type": "ListItem", "position": 2, "name": "Our Story", "item": "https://hawaiioman.com/story" }
            ]
          }
        ]}
      />

      {/* Decorative Background Blobs */}
      <div className="absolute rounded-full bg-primary opacity-5 blur-[60px] w-[600px] h-[600px] top-0 left-[-200px] -z-10"></div>
      <div className="absolute rounded-full bg-accent opacity-5 blur-[60px] w-[800px] h-[800px] top-[40%] right-[-300px] -z-10"></div>
      <div className="absolute rounded-full bg-muted opacity-10 blur-[60px] w-[500px] h-[500px] bottom-10 left-[10%] -z-10"></div>

      {/* Hero Section */}
      <section className="w-full px-4 md:px-10 max-w-[1200px] mx-auto animate-fade-in-up">
        <div className="relative w-full min-h-[600px] md:min-h-[700px] py-16 md:py-24 rounded-[3rem] overflow-hidden shadow-soft flex items-center justify-center bg-background-dark">
          {/* Background Image */}
          <div
            className="absolute inset-0 background-attachment-fixed bg-center bg-no-repeat bg-cover opacity-60"
            style={{ backgroundImage: "url('/images/story-hero.png')" }}
          >
            <div className="absolute inset-0 bg-text-main/40 mix-blend-multiply"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 bg-surface/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Our Origins
            </span>
            <h1 className="text-surface font-display text-4xl md:text-7xl font-black leading-tight tracking-tight mb-6 drop-shadow-lg">
              Rooted in Oman
            </h1>
            <div className="text-surface space-y-6 drop-shadow-md">
              <p className="text-lg md:text-xl font-medium leading-relaxed">
                Hawaii Juices was founded with a simple mission: to make fresh, high-quality fruit juices accessible and affordable for everyone. Inspired by a new beginning in Muscat post-pandemic, our founder's vision for natural, trustworthy juices grew from small restaurant kitchen experiments into a certified Omani success story.
              </p>
              <p className="text-lg md:text-xl font-medium leading-relaxed">
                Launched in March 2024 with a commitment to freshness and consistency, we take pride in delivering carefully crafted juices made from selected fruits—honest, fresh, and made for everyday enjoyment.
              </p>
              <p className="text-xl md:text-2xl font-display font-black italic text-accent mt-4">
                "We believe in keeping it real."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="w-full px-6 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="max-w-4xl relative text-center py-12">
          <span className="material-symbols-outlined absolute top-0 left-0 text-muted/20 text-[120px] md:text-[180px] leading-none transform -translate-x-1/4 -translate-y-1/4 z-0 select-none">
            format_quote
          </span>
          <h2 className="text-text-main font-display text-3xl md:text-5xl font-bold leading-tight relative z-10 px-8 md:px-16">
            "We didn't just want to make juice. We wanted to create something honest and trustworthy—a fresh start that everyone could enjoy every single day."
          </h2>

          <div className="mt-8 flex flex-col items-center gap-2 relative z-10">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-surface shadow-md mb-2">
              <img
                src="/images/founder.png"
                alt="Yasir Arafath - CEO & Founder of Hawaii Fresh Juice"
                className="w-full h-full object-cover object-[center_20%]"
                width={96}
                height={96}
                loading="lazy"
              />
            </div>
            <span className="text-text-main font-display font-bold text-lg">Yasir Arafath</span>
            <span className="text-muted text-sm font-medium uppercase tracking-wider">CEO &amp; Founder</span>
          </div>
        </div>
      </section>
    </div>
  );
};
