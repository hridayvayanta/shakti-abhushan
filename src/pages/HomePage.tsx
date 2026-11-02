import React from 'react';
import { Link } from 'react-router-dom';
import { HeroVideoSection } from '../components/HeroVideoSection';
import { CategorySection } from '../components/CategorySection';
import { ShoppableReelsSection } from '../components/ShoppableReelsSection';
import { EditorialShowcaseSection } from '../components/EditorialShowcaseSection';
import { FaqSection } from '../components/FaqSection';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { assetUrl } from '../utils/assets';

export const HomePage: React.FC = () => {

  // Bestselling pieces (Section 06)
  const bestsellers = PRODUCTS.filter(
    (p) => p.badge === 'Bestseller' || p.badge === 'Signature Masterpiece'
  ).slice(0, 4);

  // New arrivals (Section 09)
  const newArrivals = PRODUCTS.slice(4, 8);

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#263028]">
      
      {/* 1. CINEMATIC VIDEO HERO SECTION (Section 04) */}
      <HeroVideoSection />

      {/* 2. SHOP BY CATEGORY SECTION (Section 05 - Warm Ivory) */}
      <CategorySection />

      {/* 3. BESTSELLING JEWELLERY SECTION (Section 06 - Pure White) */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#061507]/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12 sm:mb-16">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C39C69] font-medium block">
                Featured Jewellery
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#061507]">
                Our Most Loved Pieces
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-xs uppercase tracking-widest text-[#061507] hover:text-[#C39C69] font-semibold flex items-center gap-1.5 border-b border-[#061507]/30 pb-0.5 transition-colors"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Product Grid / Tasteful Empty State */}
          {bestsellers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {bestsellers.map((product, idx) => (
                <ProductCard key={product.id} product={product} index={idx} />
              ))}
            </div>
          ) : (
            <div className="py-14 px-6 text-center space-y-4 max-w-xl mx-auto rounded-3xl bg-[#F9F7F2] border border-[#061507]/[0.08]">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#061507]">
                Collection in Preparation
              </h3>
              <p className="text-xs sm:text-sm text-[#637066] font-light leading-relaxed max-w-md mx-auto">
                Our signature bridal chokers, temple jhumkas, and cuffs are currently being catalogued with verified pricing. For custom bridal inquiries or orders, connect directly with our team.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. LIVE-STYLE VIDEO / SHOP THE LOOK (Section 07 - Warm Ivory - Rendered when verified reels present) */}
      <ShoppableReelsSection />

      {/* 5. FULL-WIDTH EDITORIAL SHOWCASE (Section 08 - Pure White) */}
      <EditorialShowcaseSection />

      {/* 6. NEW ARRIVALS (Rendered when 4+ items available to fill grid) */}
      {newArrivals.length >= 4 && (
        <section className="py-20 sm:py-24 bg-[#F9F7F2] border-b border-[#061507]/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12 sm:mb-16">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C39C69] font-medium block">
                  Latest Additions
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#061507]">
                  Freshly Curated for You
                </h2>
              </div>
              <Link
                to="/shop"
                className="text-xs uppercase tracking-widest text-[#061507] hover:text-[#C39C69] font-semibold flex items-center gap-1.5 border-b border-[#061507]/30 pb-0.5 transition-colors"
              >
                <span>Explore New Designs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {newArrivals.map((product, idx) => (
                <ProductCard key={product.id} product={product} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. OUR STORY (Section 10 - Pure White) */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#061507]/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card-soft border border-[#061507]/[0.08]">
                <img
                  src={assetUrl('/products/model-portrait.jpg')}
                  alt="Shakti Abhushan Jewellery"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Brand Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C39C69] font-medium block">
                Our Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#061507] leading-tight">
                Rooted in Beauty. <br />
                <span className="italic font-light text-[#C39C69]">Made to Be Cherished.</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#637066] font-light leading-relaxed">
                <p>
                  SHAKTI ABHUSHAN works with hereditary brass metalsmiths across Rajasthan and Gujarat. We create jewellery with the weight, detail, and patina of traditional Indian ornaments, made in lead-free solid brass for longevity.
                </p>
                <p>
                  Each piece is shaped through traditional repoussé chiseling and finished with an antique gold micron electroplate that protects the metal without the harsh glare of modern plating.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/story"
                  className="btn-primary py-3.5 px-8 rounded-full text-xs font-semibold tracking-widest uppercase inline-flex items-center gap-2"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLIENT SERVICE PILLARS (Clean Editorial Layout) */}
      <section className="py-16 bg-[#F9F7F2] border-b border-[#061507]/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#061507]/10">
            <div className="py-6 md:py-0 md:px-8 first:pl-0 space-y-2">
              <h4 className="font-serif text-xl text-[#061507] font-medium">Pan-India Insured Dispatch</h4>
              <p className="text-xs text-[#637066] font-light leading-relaxed">
                Complimentary insured domestic delivery across all Indian pin codes, carefully encased in protective casing.
              </p>
            </div>

            <div className="py-6 md:py-0 md:px-8 space-y-2">
              <h4 className="font-serif text-xl text-[#061507] font-medium">Solid Brass Construction</h4>
              <p className="text-xs text-[#637066] font-light leading-relaxed">
                Lead-free, hypoallergenic solid brass core with antique micron gold electroplate and protective anti-tarnish seal.
              </p>
            </div>

            <div className="py-6 md:py-0 md:px-8 last:pr-0 space-y-2">
              <h4 className="font-serif text-xl text-[#061507] font-medium">Contact on WhatsApp</h4>
              <p className="text-xs text-[#637066] font-light leading-relaxed">
                Direct personal consultation for custom bridal sizing, order confirmations, and bespoke styling advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CUSTOMER TRUST & FAQ (Section 11 - Warm Ivory) */}
      <FaqSection />
    </div>
  );
};
