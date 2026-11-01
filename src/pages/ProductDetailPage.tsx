import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { SHOPPABLE_VIDEOS } from '../data/videos';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { assetUrl } from '../utils/assets';
import {
  ShoppingBag,
  MessageCircle,
  ShieldCheck,
  Truck,
  RotateCcw,
  ChevronRight,
  Plus,
  Minus,
  Play,
  Layers,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, whatsAppNumber } = useCart();

  const product = PRODUCTS.find((p) => p.id === id);

  const [activeMedia, setActiveMedia] = useState<'image' | 'video'>('image');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Standard Antique Finish');
  const [addedNotice, setAddedNotice] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F9F7F2] text-[#263028] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-serif text-3xl mb-4 text-[#061507]">Jewellery Piece Not Found</h2>
        <p className="text-xs text-[#637066] mb-6">
          The requested creation may have moved or been retired from the catalogue.
        </p>
        <Link to="/shop" className="btn-primary px-7 py-3 rounded-full text-xs uppercase tracking-widest">
          Browse Catalogue
        </Link>
      </div>
    );
  }

  // Check if there is an associated video reel for this product
  const associatedVideo = SHOPPABLE_VIDEOS.find((v) => v.productId === product.id);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);

    try {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#061507', '#C39C69', '#D7AD76']
      });
    } catch {}
  };

  const handleInstantWhatsApp = () => {
    const text = `Hello Shakti Abhushan! ✨

I would like to enquire about the following order:

1. ${product.name} (${selectedVariant}) — Qty: ${quantity} — ₹${(product.price * quantity).toLocaleString('en-IN')}

Product Subtotal: ₹${(product.price * quantity).toLocaleString('en-IN')}

Please confirm product availability, delivery charges and payment details.

Thank you!`;

    window.open(`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-[#263028] pt-8 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-[#637066] uppercase tracking-widest pt-2">
          <Link to="/" className="hover:text-[#061507]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/shop" className="hover:text-[#061507]">Catalogue</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-[#061507]">
            {product.categoryLabel}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#061507] font-semibold truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* Main Product Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Visual Column: Gallery & Video */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Stage */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#F4F1EA] border border-[#061507]/[0.08] shadow-card-soft">
              {activeMedia === 'image' ? (
                <img
                  src={product.images[selectedImageIndex]}
                  alt={`${product.name} view ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />
              ) : (
                <video
                  src={associatedVideo?.videoUrl || assetUrl('/videos/shakti-abhushan-hero.mp4')}
                  poster={product.images[0]}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              )}

              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-sm text-[10px] uppercase font-mono tracking-wider font-semibold bg-[#061507] text-[#D7AD76] shadow-sm">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails Row (Images + Video Reel Preview) */}
            <div className="grid grid-cols-5 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedImageIndex(i);
                    setActiveMedia('image');
                  }}
                  className={`relative aspect-square rounded-xl overflow-hidden border transition-all ${
                    activeMedia === 'image' && selectedImageIndex === i
                      ? 'border-[#061507] ring-2 ring-[#061507]/20 scale-102'
                      : 'border-[#061507]/10 opacity-75 hover:opacity-100 bg-[#F4F1EA]'
                  }`}
                >
                  <img src={img} alt={`thumbnail ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}

              {/* Video Tab Thumbnail */}
              <button
                onClick={() => setActiveMedia('video')}
                className={`relative aspect-square rounded-xl overflow-hidden border transition-all flex flex-col items-center justify-center bg-[#061507] text-white ${
                  activeMedia === 'video'
                    ? 'border-[#D7AD76] ring-2 ring-[#D7AD76]/40 scale-102'
                    : 'border-[#061507]/20 opacity-80 hover:opacity-100'
                }`}
                title="View jewellery in motion video"
              >
                <Play className="w-6 h-6 text-[#D7AD76] mb-1" />
                <span className="text-[9px] uppercase font-mono tracking-wider text-white">Video</span>
              </button>
            </div>

            {/* Assurance Badges */}
            <div className="grid grid-cols-3 gap-3 pt-3">
              <div className="p-3.5 rounded-xl bg-[#F9F7F2] border border-[#061507]/[0.06] text-center">
                <ShieldCheck className="w-5 h-5 text-[#061507] mx-auto mb-1" />
                <span className="text-[11px] uppercase tracking-wider block text-[#263028] font-medium">Solid Brass Core</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F9F7F2] border border-[#061507]/[0.06] text-center">
                <Sparkles className="w-5 h-5 text-[#C39C69] mx-auto mb-1" />
                <span className="text-[11px] uppercase tracking-wider block text-[#263028] font-medium">Antique Gold Finish</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F9F7F2] border border-[#061507]/[0.06] text-center">
                <Truck className="w-5 h-5 text-[#061507] mx-auto mb-1" />
                <span className="text-[11px] uppercase tracking-wider block text-[#263028] font-medium">Insured Transit</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information, Pricing, Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Title & Tagline */}
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C39C69] font-medium block mb-1">
                {product.categoryLabel}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#061507] leading-tight font-medium">
                {product.name}
              </h1>
              {product.hindiName && (
                <p className="font-serif italic text-lg text-[#637066] mt-1">
                  {product.hindiName}
                </p>
              )}
              <p className="text-xs text-[#637066] mt-2 font-light leading-relaxed">
                {product.tagline}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-xl bg-[#F9F7F2] border border-[#061507]/[0.08] flex items-baseline justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#637066] block">
                  Price (All Taxes Included)
                </span>
                <span className="font-serif text-3xl font-bold text-[#061507]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#637066] line-through ml-3 font-light">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#25D366] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>Ready to Ship</span>
              </div>
            </div>

            {/* Variant / Option Selection */}
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider text-[#061507] font-semibold">
                Finish Option
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Standard Antique Finish', 'Lustre Polished Finish'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`py-2 px-3 rounded-lg text-xs tracking-wider transition-all border text-left ${
                      selectedVariant === v
                        ? 'border-[#061507] bg-[#061507] text-[#F9F7F2] font-semibold'
                        : 'border-[#061507]/15 bg-white text-[#263028] hover:border-[#061507]'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Bag */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4">
                {/* Stepper */}
                <div className="flex items-center border border-[#061507]/20 rounded-full bg-white px-3 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 text-[#263028] hover:text-[#061507]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-sm font-mono font-semibold text-[#061507]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 text-[#263028] hover:text-[#061507]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Primary Add to Bag */}
                <button
                  onClick={handleAddToCart}
                  className="btn-primary flex-1 py-3.5 px-6 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D7AD76]" />
                  <span>{addedNotice ? 'Added to Bag ✓' : 'Add to Shopping Bag'}</span>
                </button>
              </div>

              {/* Instant WhatsApp Checkout Button */}
              <button
                onClick={handleInstantWhatsApp}
                className="w-full py-3.5 px-6 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Buy Immediately via WhatsApp</span>
              </button>
            </div>

            {/* Accordions: Story, Specs, Care */}
            <div className="pt-4 divide-y divide-[#061507]/[0.08] border-t border-[#061507]/[0.08] space-y-4">
              
              {/* Product Details */}
              <div className="pt-4 space-y-2">
                <h4 className="font-serif text-lg text-[#061507] font-medium">
                  Product Description
                </h4>
                <p className="text-xs text-[#637066] leading-relaxed font-light">
                  {product.description}
                </p>
                <p className="text-xs text-[#061507] font-light leading-relaxed pt-1">
                  {product.story}
                </p>
              </div>

              {/* Specifications */}
              <div className="pt-4 space-y-2.5">
                <h4 className="font-serif text-lg text-[#061507] font-medium flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#C39C69]" />
                  Materials & Dimensions
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#F9F7F2] border border-[#061507]/[0.06]">
                    <span className="text-[#637066] block text-[10px] uppercase">Base Metal</span>
                    <span className="text-[#061507] font-medium">{product.materials[0]}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#F9F7F2] border border-[#061507]/[0.06]">
                    <span className="text-[#637066] block text-[10px] uppercase">Weight</span>
                    <span className="text-[#061507] font-medium">{product.weight}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#F9F7F2] border border-[#061507]/[0.06] col-span-2">
                    <span className="text-[#637066] block text-[10px] uppercase">Finish</span>
                    <span className="text-[#061507]">{product.finish}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#F9F7F2] border border-[#061507]/[0.06] col-span-2">
                    <span className="text-[#637066] block text-[10px] uppercase">Measurements</span>
                    <span className="text-[#061507]">{product.dimensions}</span>
                  </div>
                </div>
              </div>

              {/* Care Guidelines */}
              <div className="pt-4 space-y-2">
                <h4 className="font-serif text-lg text-[#061507] font-medium flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-[#C39C69]" />
                  Care Guidelines
                </h4>
                <ul className="space-y-1.5 text-xs text-[#637066] font-light">
                  {product.care.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#C39C69] mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Creations */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-[#061507]/[0.08] space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C39C69] font-medium block">
                  Complementary Pieces
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#061507]">
                  Complete The Look
                </h3>
              </div>
              <Link to="/shop" className="text-xs uppercase tracking-widest text-[#061507] hover:text-[#C39C69] font-semibold">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {relatedProducts.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
