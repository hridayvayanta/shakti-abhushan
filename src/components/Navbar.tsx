import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { assetUrl } from '../utils/assets';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const { totalItems, setIsCartOpen, whatsAppNumber } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'New Arrivals', path: '/shop?sort=newest' },
    { name: 'Our Story', path: '/story' },
    { name: 'Contact', path: '/care' },
  ];

  return (
    <>
      {/* 1. Slim Announcement Bar */}
      <div className="bg-[#040D05] text-[#D7AD76] text-[11px] font-medium tracking-widest uppercase py-2 px-4 text-center border-b border-[#C39C69]/20 flex items-center justify-center gap-3">
        <span>Complimentary Insured Shipping Across India</span>
        <span className="text-[#C39C69]/40 hidden sm:inline">•</span>
        <span className="hidden sm:inline text-[#F9F7F2]/90">Order Directly on WhatsApp</span>
      </div>

      {/* 2. Main Header: Deep Forest Green Background */}
      <header
        className={`sticky top-0 z-40 bg-[#061507] text-[#F9F7F2] border-b border-[#C39C69]/25 transition-all duration-300 ${
          isScrolled ? 'py-2 shadow-lg backdrop-blur-md bg-[#061507]/95' : 'py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Official Shakti Abhushan Logo (Single Source of Truth) */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              title="SHAKTI ABHUSHAN — Home"
            >
              <img
                src={assetUrl('/brand/shakti-abhushan-logo.png')}
                alt="SHAKTI ABHUSHAN"
                className={`w-auto object-contain transition-all duration-300 filter drop-shadow-sm group-hover:scale-105 ${
                  isScrolled ? 'h-10 sm:h-11' : 'h-11 sm:h-12'
                }`}
              />
            </Link>

            {/* Center Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-medium text-[#F9F7F2]/90">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative py-1 group transition-colors duration-200 ${
                      isActive ? 'text-[#D7AD76] font-semibold' : 'hover:text-[#D7AD76]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C39C69] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right: Search, WhatsApp Concierge, Shopping Bag, Mobile Menu */}
            <div className="flex items-center space-x-4 sm:space-x-5 text-[#F9F7F2]">
              {/* Search Trigger */}
              <button
                onClick={onOpenSearch}
                aria-label="Search"
                className="p-2 rounded-full hover:bg-white/5 text-[#F9F7F2]/90 hover:text-[#D7AD76] transition-colors"
                title="Search Jewellery"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* WhatsApp Concierge Action */}
              <a
                href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
                  'Hello Shakti Abhushan! I am browsing your jewellery collection and would like personal assistance.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase border border-[#C39C69]/40 bg-[#0A1B0D] text-[#D7AD76] hover:bg-[#C39C69]/20 hover:border-[#D7AD76] transition-all"
                title="Chat with Jewellery Concierge"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Concierge</span>
              </a>

              {/* Shopping Bag Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                aria-label="Shopping Bag"
                className="relative p-2 rounded-full hover:bg-white/5 text-[#F9F7F2] hover:text-[#D7AD76] transition-colors"
                title="View Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C39C69] text-[#061507] text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                className="lg:hidden p-2 rounded-lg text-[#F9F7F2] hover:text-[#D7AD76]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#061507] text-[#F9F7F2] flex flex-col pt-6 px-6 pb-8 border-b border-[#C39C69]/30">
          <div className="flex items-center justify-between pb-6 border-b border-[#C39C69]/20">
            <img
              src={assetUrl('/brand/shakti-abhushan-logo.png')}
              alt="SHAKTI ABHUSHAN"
              className="h-12 sm:h-14 w-auto object-contain filter drop-shadow-sm"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-[#F9F7F2] hover:text-[#D7AD76]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center space-y-6 text-center my-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl tracking-widest text-[#F9F7F2] hover:text-[#D7AD76] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#C39C69]/20 flex flex-col gap-3">
            <a
              href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
                'Hello Shakti Abhushan! I am reaching out from your website for jewellery enquiries.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-3 rounded-full text-center text-xs tracking-widest uppercase flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              Order on WhatsApp
            </a>
            <p className="text-center text-[10px] text-[#F9F7F2]/60 uppercase tracking-widest">
              Tradition, Worn Beautifully • Handcrafted Indian Brass
            </p>
          </div>
        </div>
      )}
    </>
  );
};
