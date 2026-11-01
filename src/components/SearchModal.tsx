import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = PRODUCTS.filter((p) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      (p.hindiName && p.hindiName.includes(q)) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 pb-12">
      <div className="relative w-full max-w-2xl bg-white border border-[#061507]/10 rounded-2xl shadow-2xl overflow-hidden text-[#263028]">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#061507]/10 flex items-center gap-3 bg-[#F9F7F2]">
          <Search className="w-5 h-5 text-[#061507] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by necklace, jhumka, kada, choker, ring..."
            className="flex-1 bg-transparent text-base sm:text-lg text-[#061507] placeholder-[#637066]/50 focus:outline-none font-serif tracking-wide"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#637066] hover:text-[#061507] text-xs uppercase"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#061507]/10 text-[#263028]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Tags */}
        {!query && (
          <div className="px-6 py-4 bg-white border-b border-[#061507]/[0.06] flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-[#061507] flex items-center gap-1 font-semibold whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-[#C39C69]" /> Popular:
            </span>
            {['Choker', 'Jhumkas', 'Elephant Kada', 'Bridal Set', 'Hasli'].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-3 py-1 rounded-full bg-[#F9F7F2] border border-[#061507]/10 text-[#263028] hover:border-[#061507] hover:text-[#061507] whitespace-nowrap transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 divide-y divide-[#061507]/[0.06] bg-white">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-[#637066] text-sm font-light">
              No jewellery pieces matched "{query}". Try browsing our categories.
            </div>
          ) : (
            filtered.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                onClick={onClose}
                className="py-3 first:pt-0 flex items-center justify-between group hover:bg-[#F9F7F2] rounded-lg px-2 -mx-2 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-md overflow-hidden bg-[#F4F1EA] border border-[#061507]/10 flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#061507] group-hover:text-[#C39C69] transition-colors font-medium">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#637066] tracking-wider uppercase">
                      {item.categoryLabel}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-serif text-base font-semibold text-[#061507]">
                    ₹{item.price.toLocaleString('en-IN')}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#637066] group-hover:text-[#061507] transform group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
