import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, MessageCircle, Compass } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const NotFoundPage: React.FC = () => {
  const { whatsAppNumber } = useCart();

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#F9F7F2] text-[#263028] px-4 py-16 sm:py-24">
      <div className="max-w-xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#061507]/[0.08]">
        
        {/* Emblem indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.25em] font-medium text-[#C39C69] bg-[#C39C69]/10 border border-[#C39C69]/25">
          <Compass className="w-3.5 h-3.5" />
          <span>Page Not Found • 404</span>
        </div>

        <div className="space-y-3">
          <h1 className="font-serif text-5xl sm:text-6xl text-[#061507] tracking-tight">
            This Piece Has Moved
          </h1>
          <p className="text-sm sm:text-base text-[#637066] max-w-md mx-auto leading-relaxed font-light pt-2">
            The jewellery showcase or page you are seeking may have been repositioned or retired from the current collection.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#061507] text-[#F9F7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#0A1B0D] transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Showroom</span>
          </Link>

          <Link
            to="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#061507]/20 text-[#061507] text-xs font-semibold tracking-wider uppercase hover:bg-[#061507]/5 transition-all"
          >
            <ShoppingBag className="w-4 h-4 text-[#C39C69]" />
            <span>Explore All Jewellery</span>
          </Link>
        </div>

        {/* WhatsApp concierge fallback */}
        <div className="pt-4 border-t border-[#061507]/[0.06] text-xs text-[#637066]">
          Looking for a specific heirloom design?{' '}
          <a
            href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
              'Hello Shakti Abhushan! I could not find a piece on your website and would like personal concierge assistance.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:underline inline-flex items-center gap-1 font-medium ml-1"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ask Our Concierge</span>
          </a>
        </div>
      </div>
    </div>
  );
};
