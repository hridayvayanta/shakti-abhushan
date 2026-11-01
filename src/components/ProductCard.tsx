import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { ShoppingBag, MessageCircle, Eye, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index?: number;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0, onQuickView }) => {
  const { addToCart, whatsAppNumber } = useCart();
  const { success } = useToast();
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    success('Added to Bag', `${product.name} has been added to your shopping bag.`);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex flex-col bg-white rounded-xl border border-[#061507]/[0.08] hover:border-[#C39C69]/50 shadow-card-soft hover:shadow-card-hover transition-all duration-300 overflow-hidden"
    >
      {/* Product Image Stage */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#F4F1EA]">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 rounded-sm text-[10px] uppercase font-mono tracking-wider font-semibold bg-[#061507] text-[#D7AD76] shadow-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Primary and Hover Image */}
        <Link to={`/product/${product.id}`} className="block w-full h-full relative">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
              product.images[1] ? 'group-hover:opacity-0 transition-opacity' : ''
            }`}
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} detail`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out group-hover:scale-105"
            />
          )}
        </Link>

        {/* Quick View Button on Hover */}
        <div className="absolute bottom-3 inset-x-3 z-10 flex items-center justify-center gap-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 py-2 px-3 rounded text-[11px] font-semibold uppercase tracking-wider bg-white/95 text-[#061507] hover:bg-[#061507] hover:text-[#F9F7F2] border border-[#061507]/15 shadow-sm flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </Link>

          <button
            onClick={handleAdd}
            aria-label="Add to bag"
            className={`p-2 rounded text-xs transition-all shadow-sm ${
              added
                ? 'bg-[#25D366] text-white'
                : 'bg-[#061507] hover:bg-[#0A1B0D] text-[#D7AD76]'
            }`}
            title="Add to Shopping Bag"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Details Section: Clean, Bright, High Contrast */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#C39C69] font-medium block">
            {product.categoryLabel}
          </span>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-serif text-lg text-[#061507] group-hover:text-[#C39C69] transition-colors leading-snug mt-1 font-medium">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-[#637066] line-clamp-1 mt-1 font-light">
            {product.tagline}
          </p>
        </div>

        {/* Pricing & Direct WhatsApp Action */}
        <div className="pt-3 border-t border-[#061507]/[0.06] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-xl font-semibold text-[#061507]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#637066] line-through font-light">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <a
            href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
              `Hello Shakti Abhushan! ✨ I would like to enquire about: ${product.name} (₹${product.price.toLocaleString('en-IN')}). Please confirm availability.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
            title="Enquire on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
