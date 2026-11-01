import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { assetUrl } from '../utils/assets';

export const Footer: React.FC = () => {
  const { whatsAppNumber } = useCart();

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#061507] text-[#F9F7F2] border-t border-[#C39C69]/25 pt-16 sm:pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#C39C69]/20">
          
          {/* Brand Identity: Official Logo Single Source of Truth */}
          <div className="lg:col-span-2 space-y-5">
            <Link
              to="/"
              onClick={handleLogoClick}
              className="inline-block group cursor-pointer"
              title="SHAKTI ABHUSHAN — Return to Home"
            >
              <img
                src={assetUrl('/brand/shakti-abhushan-logo.png')}
                alt="SHAKTI ABHUSHAN"
                className="h-20 sm:h-24 w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-sm text-[#F9F7F2]/75 max-w-sm leading-relaxed font-light">
              SHAKTI ABHUSHAN specializes in handcrafted Indian brass jewellery. Hand-forged repoussé, antique gold micron finishes, and direct ordering via WhatsApp concierge.
            </p>

            {/* Direct Contact Points: Clickable WhatsApp, Phone, Instagram, Email */}
            <div className="flex items-center gap-3.5 pt-2">
              <a
                href={`https://wa.me/${whatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#C39C69]/40 bg-[#0A1B0D] flex items-center justify-center text-[#25D366] hover:border-[#D7AD76] hover:scale-105 transition-all"
                title="WhatsApp Concierge"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+919876543210"
                className="w-10 h-10 rounded-full border border-[#C39C69]/40 bg-[#0A1B0D] flex items-center justify-center text-[#D7AD76] hover:border-[#D7AD76] hover:scale-105 transition-all"
                title="Call +91 98765 43210"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:care@shaktiabhushan.com?subject=Shakti%20Abhushan%20Jewellery%20Inquiry"
                className="w-10 h-10 rounded-full border border-[#C39C69]/40 bg-[#0A1B0D] flex items-center justify-center text-[#D7AD76] hover:border-[#D7AD76] hover:scale-105 transition-all"
                title="Email care@shaktiabhushan.com"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#C39C69]/40 bg-[#0A1B0D] flex items-center justify-center text-[#E1306C] hover:border-[#D7AD76] hover:scale-105 transition-all"
                title="Follow on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Shop Collections Links */}
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
                  Bridal & Festive Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* The Maison Heritage */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C39C69] font-semibold mb-5">
              The Maison
            </h4>
            <ul className="space-y-3 text-sm text-[#F9F7F2]/75">
              <li>
                <Link to="/story" className="hover:text-[#D7AD76] transition-colors">
                  Our Story & Heritage
                </Link>
              </li>
              <li>
                <Link to="/care" className="hover:text-[#D7AD76] transition-colors">
                  Brass Care Guide
                </Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-[#D7AD76] transition-colors">
                  Curated Collections
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
                    'Hello Shakti Abhushan! I would like to enquire about bespoke bridal orders and bridal consultations.'
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
                  7-Day Returns & Exchanges
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
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#F9F7F2]/60 gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} SHAKTI ABHUSHAN. All rights reserved. Handcrafted Indian Brass Jewellery.</p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href={`https://wa.me/${whatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#D7AD76] hover:underline"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
              Official WhatsApp Commerce
            </a>
            <span className="hidden sm:inline">•</span>
            <span>Insured Pan-India Transit</span>
            <span className="hidden sm:inline">•</span>
            <a href="tel:+919876543210" className="hover:text-[#D7AD76] transition-colors">
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
