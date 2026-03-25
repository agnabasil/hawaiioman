import { JUICE_PRODUCTS } from '../../data/mockData';
import { Link } from 'react-router-dom';

export const ProductHighlights: React.FC = () => {
  return (
    <section id="juices" className="py-24 md:py-32 bg-background-light relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-text-main mb-6">Our Juice Favorites</h2>
          <p className="text-muted font-body text-xl max-w-2xl mx-auto">
            Discover the refreshing bounty of Oman, bottled with love and local tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto z-10 relative">
          {JUICE_PRODUCTS.slice(0, 3).map((product) => {
            const content = (
              <>
                <div 
                  className="relative h-[320px] flex items-center justify-center p-12"
                  style={{ backgroundColor: product.bgColor }}
                >
                  {product.badge && (
                    <div className={`absolute top-4 left-4 font-bold text-[10px] uppercase tracking-widest py-1.5 px-3 rounded-full z-20 ${
                      product.isComingSoon ? 'bg-muted text-white' : (product.badgeType === 'accent' ? 'bg-accent text-text-main' : 'bg-primary text-surface')
                    }`}>
                      {product.badge}
                    </div>
                  )}
                  <img 
                    src={product.imageUrl} 
                    onError={(e) => { e.currentTarget.src = product.fallbackUrl; }}
                    alt={product.name} 
                    loading="lazy"
                    className={`product-img w-full h-full object-contain drop-shadow-xl transition-all duration-500 ${
                      product.isComingSoon ? 'blur-md opacity-60' : ''
                    }`}
                  />
                  {product.isComingSoon && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/5">
                      <span className="bg-white/90 backdrop-blur-sm text-text-main font-bold py-2 px-6 rounded-full shadow-lg border border-white/20 uppercase tracking-widest text-[10px]">Coming Soon</span>
                    </div>
                  )}
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display text-2xl font-bold text-text-main mb-2">{product.name}</h3>
                  <p className="font-body text-muted text-sm mb-8 leading-relaxed">{product.description}</p>
                </div>
              </>
            );

            const className = "product-card block group bg-surface rounded-card overflow-hidden shadow-soft flex flex-col border border-muted/5 transition-all duration-300";

            if (product.isComingSoon) {
              return (
                <div key={product.id} className={className}>
                  {content}
                </div>
              );
            }

            return (
              <Link key={product.id} to={`/products/${product.id}`} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
        
        <div className="mt-20 flex flex-col items-center gap-6">
          <p className="text-muted font-body text-base italic">Taste the heritage in every drop.</p>
          <Link to="/story" className="inline-flex items-center gap-3 border-b-2 border-primary text-primary font-bold text-sm uppercase tracking-widest py-2 hover:gap-5 transition-all duration-300">
            Discover Our Story
            <span className="material-symbols-outlined">trending_flat</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
