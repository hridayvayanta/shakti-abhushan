import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { assetUrl } from '../utils/assets';

export const Footer: React.FC = () => {
  const { whatsAppNumber } = useCart();

  return (
    <footer className="bg-[#061507] text-[#F9F7F2] border-t border-[#C39C69]/25 pt-16 sm:pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#C39C69]/20">
          
          {/* Brand Identity: Official Logo Single Source of Truth */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block group" title="SHAKTI ABHUSHAN">
              <img
                src={assetUrl('/brand/shakti-abhushan-logo.png')}
                alt="SHAKTI ABHUSHAN"
                className="h-24 sm:h-28 w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-sm text-[#F9F7F2]/75 max-w-sm leading-relaxed font-light">
              SHAKTI ABHUSHAN specializes in handcrafted Indian brass jewellery. Hand-forged repoussé, antique gold micron finishes, and direct ordering via WhatsApp.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={`https://wa.me/${whatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#C39C69]/40 bg-[#0A1B0D] flex items-center justify-center text-[#25D366] hover:border-[#D7AD76] hover:scale-105 transition-all"
                title="WhatsApp Us"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#C39C69]/40 bg-[#0A1B0D] flex items-center justify-center text-[#E1306C] hover:border-[#D7AD76] hover:scale-105 transition-all"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:concierge@shaktiabhushan.com"
                className="w-10 h-10 rounded-full border border-[#C39C69]/40 bg-[#0A1B0D] flex items-center justify-center text-[#D7AD76] hover:border-[#D7AD76] hover:scale-105 transition-all"
                title="Email Atelier"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Shop Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C39C69] font-semibold mb-5">
              Shop Collections
            </h4>
            <ul className="space-y-3 text-sm text-[#F9F7F2]/75">
              <li>
                <Link to="/shop?category=necklaces" className="hover:text-[#D7AD76] transition-colors">
                  Necklaces & Chokers
                </Link>
              </li>
              <li>
                <Link to="/shop?category=earrings" className="hover:text-[#D7AD76] transition-colors">
                  Earrings & Jhumkas
                </Link>
              </li>
              <li>
                <Link to="/shop?category=bangles" className="hover:text-[#D7AD76] transition-colors">
                  Bangles & Kadas
                </Link>
              </li>
              <li>
                <Link to="/shop?category=rings" className="hover:text-[#D7AD76] transition-colors">
                  Rings & Accessories
                </Link>
              </li>
              <li>
                <Link to="/shop?category=sets" className="hover:text-[#D7AD76] transition-colors">
                  Bridal Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* The Maison */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C39C69] font-semibold mb-5">
              The Maison
            </h4>
            <ul className="space-y-3 text-sm text-[#F9F7F2]/75">
              <li>
                <Link to="/story" className="hover:text-[#D7AD76] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/care" className="hover:text-[#D7AD76] transition-colors">
                  Brass Care Guide
                </Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-[#D7AD76] transition-colors">
                  Curated Chambers
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
                    'Hello Shakti Abhushan! I would like to enquire about custom wedding orders.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D7AD76] transition-colors inline-flex items-center gap-1"
                >
                  Custom Orders <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Client Care & Policies */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C39C69] font-semibold mb-5">
              Client Care
            </h4>
            <ul className="space-y-3 text-sm text-[#F9F7F2]/75">
              <li>
                <Link to="/shipping" className="hover:text-[#D7AD76] transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-[#D7AD76] transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#D7AD76] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#D7AD76] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Verification */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#F9F7F2]/60 gap-4">
          <p>© {new Date().getFullYear()} SHAKTI ABHUSHAN. All rights reserved. Handcrafted Indian Brass Jewellery.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#D7AD76]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
              Official WhatsApp Commerce
            </span>
            <span>Insured Pan-India Transit</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
