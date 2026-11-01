import React from 'react';
import { Link } from 'react-router-dom';
import { COLLECTIONS_DATA } from '../data/products';
import { ArrowRight } from 'lucide-react';

export const CategorySection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F9F7F2] border-b border-[#061507]/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12 sm:mb-16">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C39C69] font-medium block">
              Curated Chambers • संग्रह
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#061507]">
              Explore Our Collections
            </h2>
          </div>
          <Link
            to="/collections"
            className="text-xs uppercase tracking-widest text-[#061507] hover:text-[#C39C69] font-semibold flex items-center gap-1.5 border-b border-[#061507]/30 pb-0.5 transition-colors"
          >
            <span>View All Chambers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {COLLECTIONS_DATA.map((col, index) => (
            <Link
              key={col.id}
              to={`/shop?category=${col.id}`}
              className="group flex flex-col items-center text-center space-y-3 cursor-pointer"
            >
              {/* Image Container with Perspective Zoom */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-white shadow-card-soft group-hover:shadow-card-hover border border-[#061507]/[0.06] transition-all duration-500 transform group-hover:-translate-y-1">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Piece Counter Badge */}
                <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-white/90 text-[#061507] shadow-sm">
                  {col.count} Pieces
                </span>
              </div>

              {/* Title & Navigation Indicator */}
              <div className="space-y-0.5">
                <h3 className="font-serif text-lg sm:text-xl text-[#061507] group-hover:text-[#C39C69] transition-colors font-medium">
                  {col.name}
                </h3>
                <span className="text-[11px] font-mono text-[#637066] uppercase tracking-wider block">
                  {col.hindiTitle}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
