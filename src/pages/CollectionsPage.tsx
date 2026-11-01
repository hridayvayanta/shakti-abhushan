import React from 'react';
import { Link } from 'react-router-dom';
import { COLLECTIONS_DATA, PRODUCTS } from '../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CollectionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#263028] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C39C69] font-medium block">
            Category Directory • संग्रह
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#061507] tracking-tight">
            Curated Collections
          </h1>
          <p className="text-sm text-[#637066] font-light leading-relaxed">
            Explore our brass jewelry by category: collar chokers, temple jhumkas, carved cuffs, cocktail rings, and complete bridal ensembles.
          </p>
        </div>

        {/* Collections Stack */}
        <div className="space-y-12">
          {COLLECTIONS_DATA.map((col, index) => {
            const isEven = index % 2 === 0;
            const categoryProducts = PRODUCTS.filter((p) => p.category === col.id).slice(0, 3);

            return (
              <div
                key={col.id}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-[#061507]/[0.08] shadow-card-soft"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Info */}
                  <div className={`lg:col-span-5 space-y-5 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#C39C69] flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      {col.hindiTitle}
                    </span>
                    
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#061507]">
                      {col.name}
                    </h2>
                    
                    <p className="text-xs text-[#C39C69] uppercase tracking-wider font-semibold">
                      {col.subtitle}
                    </p>

                    <p className="text-sm text-[#637066] font-light leading-relaxed">
                      {col.description}
                    </p>

                    <div className="pt-2">
                      <Link
                        to={`/shop?category=${col.id}`}
                        className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs uppercase tracking-widest font-semibold"
                      >
                        <span>View {col.name} ({col.count})</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Preview Gallery */}
                  <div className={`lg:col-span-7 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {categoryProducts.map((p) => (
                        <Link
                          key={p.id}
                          to={`/product/${p.id}`}
                          className="group relative aspect-square rounded-xl overflow-hidden bg-[#F4F1EA] border border-[#061507]/[0.08] shadow-sm"
                        >
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                            <span className="font-serif text-xs truncate">{p.name}</span>
                            <span className="text-[10px] text-[#D7AD76] font-mono">₹{p.price.toLocaleString('en-IN')}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
