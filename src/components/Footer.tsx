import React from 'react';
import { Link } from 'react-router-dom';
import { assetUrl } from '../utils/assets';
import { Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#061507] text-[#F9F7F2] border-t border-[#C39C69]/25 pt-16 sm:pt-20 pb-16 sm:pb-20 relative overflow-hidden">
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
              SHAKTI ABHUSHAN creates handcrafted Indian brass jewellery, bringing the weight, detail, and patina of classic ornaments to modern celebrations.
            </p>
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

          {/* About Us */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C39C69] font-semibold mb-5">
              About Us
            </h4>
            <ul className="space-y-3 text-sm text-[#F9F7F2]/75">
              <li>
                <Link to="/story" className="hover:text-[#D7AD76] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/care" className="hover:text-[#D7AD76] transition-colors">
                  Jewellery Care Guide
                </Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-[#D7AD76] transition-colors">
                  Collections
                </Link>
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
              <li>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('sa-open-cookie-banner'))}
                  className="hover:text-[#D7AD76] transition-colors text-left"
                >
                  Cookie Preferences
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Verification */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#F9F7F2]/60 gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} SHAKTI ABHUSHAN. All rights reserved. Handcrafted Indian Brass Jewellery.</p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <span>Complimentary Insured Shipping Across India</span>
            <span className="hidden sm:inline">•</span>
            <span>Handcrafted in India</span>
          </div>
        </div>

        {/* Agency Colophon: Subtle, Prestigious Sign-Off */}
        <div className="pt-6 mt-6 border-t border-[#C39C69]/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#F9F7F2]/50 tracking-wider font-light">
          <div>
            Built & Managed by <span className="font-semibold text-[#D7AD76] tracking-widest uppercase">CAVENTRA</span>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="https://instagram.com/caventra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#D7AD76] transition-colors"
              title="Caventra on Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C39C69]" />
              <span>@caventra</span>
            </a>
            <span className="text-[#C39C69]/30">•</span>
            <a
              href="mailto:contact@caventra.com"
              className="inline-flex items-center gap-1.5 hover:text-[#D7AD76] transition-colors"
              title="Email Caventra"
            >
              <Mail className="w-3.5 h-3.5 text-[#C39C69]" />
              <span>contact@caventra.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
