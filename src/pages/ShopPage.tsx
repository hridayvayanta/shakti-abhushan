import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { CategoryType } from '../types';
import {
  Search,
  ArrowUpDown,
  Sparkles,
  SlidersHorizontal,
  X,
  Filter,
  Check,
  MessageCircle,
  RotateCcw
} from 'lucide-react';
import { useCart } from '../context/CartContext';

type PriceRangeType = 'all' | 'under-1500' | '1500-2500' | 'above-2500';
type CraftType = 'all' | 'temple' | 'polki' | 'carved';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { whatsAppNumber } = useCart();
  const initialCategory = (searchParams.get('category') as CategoryType) || 'all';

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<PriceRangeType>('all');
  const [selectedCraft, setSelectedCraft] = useState<CraftType>('all');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const handleCategoryChange = (cat: CategoryType) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setPriceRange('all');
    setSelectedCraft('all');
    setInStockOnly(false);
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    searchQuery.trim() !== '' ||
    priceRange !== 'all' ||
    selectedCraft !== 'all' ||
    inStockOnly;

  const categories: { id: CategoryType; label: string; count: number }[] = [
    { id: 'all', label: 'All Pieces', count: PRODUCTS.length },
    { id: 'necklaces', label: 'Necklaces & Chokers', count: PRODUCTS.filter((p) => p.category === 'necklaces').length },
    { id: 'earrings', label: 'Earrings & Jhumkas', count: PRODUCTS.filter((p) => p.category === 'earrings').length },
    { id: 'bangles', label: 'Bangles & Kadas', count: PRODUCTS.filter((p) => p.category === 'bangles').length },
    { id: 'rings', label: 'Rings & Accessories', count: PRODUCTS.filter((p) => p.category === 'rings').length },
    { id: 'sets', label: 'Bridal Sets', count: PRODUCTS.filter((p) => p.category === 'sets').length },
  ];

  const priceOptions: { id: PriceRangeType; label: string }[] = [
    { id: 'all', label: 'All Price Tiers' },
    { id: 'under-1500', label: 'Under ₹1,500' },
    { id: '1500-2500', label: '₹1,500 — ₹2,500' },
    { id: 'above-2500', label: 'Above ₹2,500' },
  ];

  const craftOptions: { id: CraftType; label: string }[] = [
    { id: 'all', label: 'All Heritage Crafts' },
    { id: 'temple', label: 'Temple & Meenakari' },
    { id: 'polki', label: 'Polki & Kundan Stones' },
    { id: 'carved', label: 'Hand-Carved & Filigree' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // 1. Category Filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;

      // 2. Price Range Filter
      if (priceRange === 'under-1500' && p.price >= 1500) return false;
      if (priceRange === '1500-2500' && (p.price < 1500 || p.price > 2500)) return false;
      if (priceRange === 'above-2500' && p.price <= 2500) return false;

      // 3. In Stock Only
      if (inStockOnly && !p.inStock) return false;

      // 4. Craftsmanship / Style
      if (selectedCraft === 'temple') {
        const text = (p.name + p.description + p.materials.join(' ')).toLowerCase();
        if (!text.includes('meenakari') && !text.includes('temple') && !text.includes('rajwada')) return false;
      } else if (selectedCraft === 'polki') {
        const text = (p.name + p.description + p.materials.join(' ')).toLowerCase();
        if (!text.includes('polki') && !text.includes('kundan') && !text.includes('emerald') && !text.includes('pearl')) return false;
      } else if (selectedCraft === 'carved') {
        const text = (p.name + p.description + p.materials.join(' ')).toLowerCase();
        if (!text.includes('filigree') && !text.includes('carved') && !text.includes('kada') && !text.includes('hammered')) return false;
      }

      // 5. Search Query
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
  }, [selectedCategory, searchQuery, priceRange, selectedCraft, inStockOnly, sortBy]);

  // Sidebar Component JSX
  const SidebarContent = () => (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="space-y-2">
        <label className="text-[11px] uppercase tracking-wider font-semibold text-[#C39C69] block">
          Search Atelier
        </label>
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#637066]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Jhumka, choker, kada..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#F9F7F2] border border-[#061507]/10 text-xs text-[#263028] placeholder-[#637066]/60 focus:outline-none focus:border-[#C39C69]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#637066] hover:text-[#061507]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-2.5 pt-4 border-t border-[#061507]/[0.08]">
        <label className="text-[11px] uppercase tracking-wider font-semibold text-[#C39C69] block">
          Categories
        </label>
        <div className="space-y-1">
          {categories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all text-left ${
                  active
                    ? 'bg-[#061507] text-[#D7AD76] font-semibold shadow-sm'
                    : 'text-[#263028] hover:bg-[#F9F7F2]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                    active
                      ? 'bg-[#C39C69] text-[#061507]'
                      : 'bg-[#F0EBE1] text-[#637066]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-2.5 pt-4 border-t border-[#061507]/[0.08]">
        <label className="text-[11px] uppercase tracking-wider font-semibold text-[#C39C69] block">
          Price Range
        </label>
        <div className="space-y-1">
          {priceOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setPriceRange(opt.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all text-left ${
                priceRange === opt.id
                  ? 'bg-[#061507] text-[#D7AD76] font-semibold'
                  : 'text-[#263028] hover:bg-[#F9F7F2]'
              }`}
            >
              <span>{opt.label}</span>
              {priceRange === opt.id && <Check className="w-3.5 h-3.5 text-[#D7AD76]" />}
            </button>
          ))}
        </div>
      </div>

      {/* Craftsmanship */}
      <div className="space-y-2.5 pt-4 border-t border-[#061507]/[0.08]">
        <label className="text-[11px] uppercase tracking-wider font-semibold text-[#C39C69] block">
          Craft & Stone Setting
        </label>
        <div className="space-y-1">
          {craftOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedCraft(opt.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all text-left ${
                selectedCraft === opt.id
                  ? 'bg-[#061507] text-[#D7AD76] font-semibold'
                  : 'text-[#263028] hover:bg-[#F9F7F2]'
              }`}
            >
              <span>{opt.label}</span>
              {selectedCraft === opt.id && <Check className="w-3.5 h-3.5 text-[#D7AD76]" />}
            </button>
          ))}
        </div>
      </div>

      {/* In-Stock Toggle */}
      <div className="pt-4 border-t border-[#061507]/[0.08]">
        <label className="flex items-center justify-between cursor-pointer p-2 rounded-xl hover:bg-[#F9F7F2]">
          <span className="text-xs text-[#263028]">In Stock Only</span>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="w-4 h-4 rounded text-[#061507] accent-[#C39C69] cursor-pointer"
          />
        </label>
      </div>

      {/* Reset Action */}
      {hasActiveFilters && (
        <button
          onClick={resetAllFilters}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#C39C69]/40 text-xs font-semibold text-[#C39C69] hover:bg-[#C39C69]/10 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All Filters</span>
        </button>
      )}

      {/* Concierge Help Box in Sidebar */}
      <div className="p-4 rounded-2xl bg-[#061507] text-[#F9F7F2] space-y-2 border border-[#C39C69]/30">
        <div className="flex items-center gap-2 text-[#D7AD76] text-[11px] font-semibold uppercase tracking-wider">
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
          <span>Bridal Consultation</span>
        </div>
        <p className="text-[11px] text-[#F9F7F2]/75 leading-relaxed font-light">
          Need styling assistance or custom brass sizing? Chat live with our Jaipur atelier concierge.
        </p>
        <a
          href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
            'Hello Shakti Abhushan! I am browsing your jewellery collection and would like personal styling assistance.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-1 text-[11px] font-semibold text-[#D7AD76] hover:underline"
        >
          Open WhatsApp Concierge →
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#263028] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pt-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C39C69] font-medium block">
            Atelier Catalogue • सम्पूर्ण संग्रह
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#061507] tracking-tight">
            Handcrafted Indian Brass
          </h1>
          <p className="text-sm text-[#637066] font-light leading-relaxed">
            Every piece is forged in solid brass with an antique gold micron finish. Filter by category, craftsmanship, and tier. Direct orders confirmed on WhatsApp.
          </p>
        </div>

        {/* Mobile Filter Trigger Button & Active Summary */}
        <div className="lg:hidden flex items-center justify-between gap-3 p-3 bg-white rounded-2xl border border-[#061507]/[0.08] shadow-card-soft">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#061507] text-[#D7AD76] text-xs font-semibold uppercase tracking-wider"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters & Categories {hasActiveFilters ? '• Active' : ''}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#637066] font-mono">
              {filteredProducts.length} pieces
            </span>
          </div>
        </div>

        {/* 2-Column Responsive Layout: Sticky Sidebar (3 cols) + Product Grid (9 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Sidebar (3 columns) */}
          <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-28 bg-white p-6 rounded-3xl border border-[#061507]/[0.08] shadow-card-soft">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#061507]/[0.08]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#061507]">
                <Filter className="w-4 h-4 text-[#C39C69]" />
                <span>Filters & Search</span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={resetAllFilters}
                  className="text-[11px] text-[#C39C69] hover:underline"
                >
                  Clear all
                </button>
              )}
            </div>
            <SidebarContent />
          </aside>

          {/* Main Products Area (9 columns) */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Top Toolbar: Sorting & Active Filters Tag Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#061507]/[0.08] shadow-card-soft">
              
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-[#637066] font-mono">
                  Showing {filteredProducts.length} pieces
                </span>

                {/* Active Filter Tags */}
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#C39C69]/15 text-[#C39C69] text-[11px] font-medium">
                    {categories.find((c) => c.id === selectedCategory)?.label}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => handleCategoryChange('all')} />
                  </span>
                )}
                {priceRange !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#C39C69]/15 text-[#C39C69] text-[11px] font-medium">
                    {priceOptions.find((p) => p.id === priceRange)?.label}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setPriceRange('all')} />
                  </span>
                )}
                {selectedCraft !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#C39C69]/15 text-[#C39C69] text-[11px] font-medium">
                    {craftOptions.find((c) => c.id === selectedCraft)?.label}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCraft('all')} />
                  </span>
                )}
                {inStockOnly && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#C39C69]/15 text-[#C39C69] text-[11px] font-medium">
                    In Stock Only
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setInStockOnly(false)} />
                  </span>
                )}
              </div>

              {/* Sort Selection */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="text-xs text-[#637066] font-medium flex items-center gap-1">
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#C39C69]" />
                  <span>Sort:</span>
                </span>
                <select
                  value={sortBy}
                  onChange={(e: any) => setSortBy(e.target.value)}
                  aria-label="Sort products"
                  className="px-3.5 py-1.5 rounded-xl bg-[#F9F7F2] border border-[#061507]/10 text-xs text-[#061507] focus:outline-none focus:border-[#C39C69] font-medium cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Alphabetical</option>
                </select>
              </div>
            </div>

            {/* Product Card Grid */}
            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center space-y-4 bg-white rounded-3xl border border-[#061507]/[0.08] shadow-card-soft">
                <Sparkles className="w-8 h-8 text-[#C39C69] mx-auto" />
                <h3 className="font-serif text-2xl text-[#061507]">
                  No pieces matched your selection
                </h3>
                <p className="text-xs text-[#637066] max-w-sm mx-auto">
                  Try adjusting your search criteria, price range, or category filter to discover our brass ornaments.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="px-6 py-2.5 rounded-full bg-[#061507] text-[#D7AD76] hover:bg-[#0A1B0D] text-xs uppercase tracking-widest font-semibold transition-all shadow-sm"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
                {filteredProducts.map((product, idx) => (
                  <ProductCard key={product.id} product={product} index={idx} />
                ))}
              </div>
            )}

          </main>

        </div>

      </div>

      {/* Mobile Slide-Out Filter Sidebar Drawer */}
      {mobileFilterOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Filter Options"
          className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm flex justify-end animate-fade-in"
        >
          <div className="w-full max-w-sm bg-white h-full overflow-y-auto p-6 space-y-6 shadow-2xl border-l border-[#C39C69]/30">
            <div className="flex items-center justify-between pb-4 border-b border-[#061507]/10">
              <div className="flex items-center gap-2 font-serif text-xl text-[#061507]">
                <Filter className="w-4 h-4 text-[#C39C69]" />
                <span>Filters & Search</span>
              </div>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 rounded-full text-[#637066] hover:bg-black/5"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <SidebarContent />

            <div className="pt-4 border-t border-[#061507]/10">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 rounded-full bg-[#061507] text-[#D7AD76] font-semibold text-xs uppercase tracking-widest hover:bg-[#0A1B0D] transition-colors shadow-md"
              >
                Apply Filters ({filteredProducts.length} pieces)
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
