import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { CategoryType } from '../types';
import { Search, ArrowUpDown, Sparkles } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as CategoryType) || 'all';

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');

  const handleCategoryChange = (cat: CategoryType) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const categories: { id: CategoryType; label: string; count: number }[] = [
    { id: 'all', label: 'All Pieces', count: PRODUCTS.length },
    { id: 'necklaces', label: 'Necklaces & Chokers', count: PRODUCTS.filter((p) => p.category === 'necklaces').length },
    { id: 'earrings', label: 'Earrings & Jhumkas', count: PRODUCTS.filter((p) => p.category === 'earrings').length },
    { id: 'bangles', label: 'Bangles & Kadas', count: PRODUCTS.filter((p) => p.category === 'bangles').length },
    { id: 'rings', label: 'Rings & Accessories', count: PRODUCTS.filter((p) => p.category === 'rings').length },
    { id: 'sets', label: 'Bridal Sets', count: PRODUCTS.filter((p) => p.category === 'sets').length },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesHindi = p.hindiName && p.hindiName.includes(q);
        const matchesCat = p.categoryLabel.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        if (!matchesName && !matchesHindi && !matchesCat && !matchesDesc) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#263028] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pt-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C39C69] font-medium block">
            Atelier Catalogue • सम्पूर्ण संग्रह
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#061507] tracking-tight">
            Handcrafted Indian Brass
          </h1>
          <p className="text-sm text-[#637066] font-light leading-relaxed">
            Every piece is forged in solid brass with an antique gold micron finish. Direct orders confirmed on WhatsApp.
          </p>
        </div>

        {/* Toolbar (White Background) */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#637066]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by necklace, jhumka, kada..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#F9F7F2] border border-[#061507]/10 text-xs text-[#263028] placeholder-[#637066]/50 focus:outline-none focus:border-[#061507]"
              />
            </div>

            {/* Sort Selection */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <div className="flex items-center gap-1.5 text-xs text-[#637066] font-medium whitespace-nowrap">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#061507]" />
                <span>Sort:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                aria-label="Sort products"
                className="px-4 py-2 rounded-full bg-[#F9F7F2] border border-[#061507]/10 text-xs text-[#061507] focus:outline-none focus:border-[#061507] font-medium"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-[#061507]/[0.06]">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all ${
                    active
                      ? 'bg-[#061507] text-[#F9F7F2] font-semibold shadow-sm'
                      : 'bg-[#F9F7F2] text-[#263028] hover:bg-[#061507]/5'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between text-xs text-[#637066] px-2 font-mono">
          <span>Showing {filteredProducts.length} pieces</span>
          <span>Prices in INR (₹)</span>
        </div>

        {/* Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center space-y-4 bg-white rounded-2xl border border-[#061507]/[0.08]">
            <Sparkles className="w-8 h-8 text-[#C39C69] mx-auto" />
            <h3 className="font-serif text-2xl text-[#061507]">No pieces matched your selection</h3>
            <p className="text-xs text-[#637066] max-w-sm mx-auto">
              Try adjusting your search criteria or resetting filters to browse our full collection.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="btn-primary px-6 py-2.5 rounded-full text-xs uppercase tracking-widest"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
