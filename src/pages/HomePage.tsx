import React from 'react';
import { Link } from 'react-router-dom';
import { HeroVideoSection } from '../components/HeroVideoSection';
import { CategorySection } from '../components/CategorySection';
import { ShoppableReelsSection } from '../components/ShoppableReelsSection';
import { EditorialShowcaseSection } from '../components/EditorialShowcaseSection';
import { FaqSection } from '../components/FaqSection';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { ArrowRight, Sparkles, ShieldCheck, Truck, RotateCcw, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { assetUrl } from '../utils/assets';

export const HomePage: React.FC = () => {
  const { whatsAppNumber } = useCart();

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
                Popular Creations • लोकप्रिय आभूषण
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#061507]">
                Our Most Loved Pieces
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-xs uppercase tracking-widest text-[#061507] hover:text-[#C39C69] font-semibold flex items-center gap-1.5 border-b border-[#061507]/30 pb-0.5 transition-colors"
            >
              <span>Explore Atelier Catalogue</span>
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
            <div className="py-14 px-6 text-center space-y-4 max-w-xl mx-auto rounded-3xl bg-[#F9F7F2] border border-[#061507]/[0.08] shadow-card-soft">
              <Sparkles className="w-8 h-8 text-[#C39C69] mx-auto" />
              <h3 className="font-serif text-2xl sm:text-3xl text-[#061507]">
                Atelier Catalogue in Preparation
              </h3>
              <p className="text-xs sm:text-sm text-[#637066] font-light leading-relaxed max-w-md mx-auto">
                Our signature bridal chokers, temple jhumkas, and royal cuffs are currently being catalogued with verified pricing. For immediate availability, custom bridal inquiries, or bespoke orders, speak directly with our concierge.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
                    'Hello Shakti Abhushan! I am interested in viewing your handcrafted brass jewellery collection.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-3 px-8 rounded-full text-xs font-semibold tracking-wider inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
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
                  Latest Additions • नवीन आभूषण
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
                The Maison Heritage • हमारी परम्परा
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#061507] leading-tight">
                Rooted in Beauty. <br />
                <span className="italic font-light text-[#C39C69]">Made to Be Cherished.</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#637066] font-light leading-relaxed">
                <p>
                  SHAKTI ABHUSHAN works with hereditary brass metalsmiths across Rajasthan and Gujarat. We create jewellery with the weight, detail, and patina of antique royal ornaments, made in lead-free solid brass for longevity.
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

      {/* 8. CLIENT SERVICE PILLARS (Warm Ivory) */}
      <section className="py-16 bg-[#F9F7F2] border-b border-[#061507]/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#061507]/[0.06] shadow-sm">
              <div className="p-3 rounded-full bg-[#F9F7F2] text-[#061507] flex-shrink-0">
                <Truck className="w-5 h-5 text-[#C39C69]" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-[#061507] font-medium">Pan-India Insured Dispatch</h4>
                <p className="text-xs text-[#637066] mt-1 font-light leading-relaxed">
                  Complimentary domestic delivery across India. Dispatched within 24–48 hours in cushioned packaging.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#061507]/[0.06] shadow-sm">
              <div className="p-3 rounded-full bg-[#F9F7F2] text-[#061507] flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#C39C69]" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-[#061507] font-medium">Solid Brass Construction</h4>
                <p className="text-xs text-[#637066] mt-1 font-light leading-relaxed">
                  High-grade lead-free brass core with antique micron gold electroplate and anti-tarnish sealant.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#061507]/[0.06] shadow-sm">
              <div className="p-3 rounded-full bg-[#F9F7F2] text-[#061507] flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-[#061507] font-medium">WhatsApp Atelier Concierge</h4>
                <p className="text-xs text-[#637066] mt-1 font-light leading-relaxed">
                  Direct personal consultation for stock confirmation, custom bridal sets, and parcel tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CUSTOMER TRUST & FAQ (Section 11 - Warm Ivory) */}
      <FaqSection />
    </div>
  );
};
