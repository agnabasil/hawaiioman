import { JUICE_PRODUCTS } from '../data/mockData';
import { Link } from 'react-router-dom';

export const Products: React.FC = () => {
  return (
    <div className="py-12 px-6 md:px-12 max-w-[1400px] mx-auto relative min-h-screen">

      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-[-200px] w-[600px] h-[600px] bg-primary/5 blur-[80px] rounded-full -z-10 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-[20%] right-[-100px] w-[600px] h-[600px] bg-muted/5 blur-[80px] rounded-full -z-10 pointer-events-none hidden md:block"></div>

      {/* Product Grid */}
      <main className="w-full">
        <div className="mb-12">
          <h1 className="text-text-main font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
            Pure Flavors,<br />Grown in Oman.
          </h1>
          <p className="text-muted text-lg md:text-xl font-medium max-w-2xl">
            Explore our collection of fresh fruit juices. Every bottle is packed with locally sourced, organic sunshine from across the Sultanate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {JUICE_PRODUCTS.map((product) => {
            const content = (
              <>
                {product.badge && (
                  <div className={`absolute top-6 left-6 z-20 px-4 py-1 flex items-center justify-center rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
                    product.isComingSoon ? 'bg-muted text-white' : 'bg-accent text-text-main'
                  }`}>
                    {product.badge}
                  </div>
                )}

                <div className="h-80 w-full mb-6 bg-background-light rounded-xl flex items-center justify-center p-6 relative overflow-hidden">
                  <img
                    src={product.imageUrl}
                    onError={(e) => { e.currentTarget.src = product.fallbackUrl; }}
                    alt={product.name}
                    className={`object-contain h-full w-full relative z-10 transition-transform duration-500 ${
                      product.isComingSoon ? 'blur-md opacity-60' : 'group-hover:scale-105'
                    }`}
                  />
                  {product.isComingSoon && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/5">
                      <span className="bg-white/90 backdrop-blur-sm text-text-main font-bold py-2 px-6 rounded-full shadow-lg border border-white/20 uppercase tracking-widest text-xs">Coming Soon</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-grow text-center px-4">
                  <h4 className="text-2xl font-bold text-text-main font-display mb-2">{product.name}</h4>
                  <p className="text-muted text-sm mb-4 leading-relaxed line-clamp-3">{product.description}</p>
                  <div className="mt-auto border-t border-muted/10 pt-4 flex flex-wrap justify-center gap-2">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">Organic</span>
                  </div>
                </div>
              </>
            );

            const className = `block bg-surface rounded-2xl p-4 shadow-soft transition-all duration-300 flex flex-col h-full relative group ${
              product.isComingSoon ? 'cursor-default' : 'hover:shadow-[0_12px_40px_rgba(44,54,39,0.12)] hover:-translate-y-2 cursor-pointer'
            }`;

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
      </main>

    </div>
  );
};
