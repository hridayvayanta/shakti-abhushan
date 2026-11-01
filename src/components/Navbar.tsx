import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  MessageCircle,
  Phone,
  Mail,
  Sun,
  Moon,
  Sparkles
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { assetUrl } from '../utils/assets';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const { totalItems, setIsCartOpen, whatsAppNumber } = useCart();
  const { isDark, toggleTheme } = useTheme();
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

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'New Arrivals', path: '/shop?sort=newest' },
    { name: 'Our Story', path: '/story' },
    { name: 'Care Guide', path: '/care' },
  ];

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Slim Announcement Bar */}
      <div className="bg-[#040D05] text-[#D7AD76] text-[11px] font-medium tracking-widest uppercase py-2 px-4 text-center border-b border-[#C39C69]/20 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
        <span>Complimentary Insured Shipping Across India</span>
        <span className="text-[#C39C69]/40 hidden md:inline">•</span>
        <span className="hidden md:inline text-[#F9F7F2]/90">
          Concierge Hotline:{' '}
          <a
            href="tel:+919876543210"
            className="text-[#D7AD76] hover:text-white underline underline-offset-2 transition-colors ml-1"
            title="Call Shakti Abhushan Concierge"
          >
            +91 98765 43210
          </a>
        </span>
        <span className="text-[#C39C69]/40 hidden lg:inline">•</span>
        <span className="hidden lg:inline text-[#F9F7F2]/90">
          <a
            href="mailto:care@shaktiabhushan.com?subject=Shakti%20Abhushan%20Inquiry"
            className="text-[#D7AD76] hover:text-white transition-colors"
            title="Email Atelier Concierge"
          >
            care@shaktiabhushan.com
          </a>
        </span>
      </div>

      {/* 2. Main Header: Deep Forest Green Background */}
      <header
        className={`sticky top-0 z-40 bg-[#061507] text-[#F9F7F2] border-b border-[#C39C69]/25 transition-all duration-300 ${
          isScrolled ? 'py-1.5 sm:py-2 shadow-xl backdrop-blur-md bg-[#061507]/95' : 'py-2 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Official Shakti Abhushan Logo (Clickable Single Source of Truth) */}
            <Link
              to="/"
              onClick={handleLogoClick}
              className="flex items-center gap-3.5 group py-1 cursor-pointer"
              title="SHAKTI ABHUSHAN — Home"
            >
              <img
                src={assetUrl('/brand/shakti-abhushan-logo.png')}
                alt="SHAKTI ABHUSHAN — शक्ति आभूषण"
                className={`w-auto object-contain transition-all duration-300 filter drop-shadow-md group-hover:scale-105 ${
                  isScrolled ? 'h-14 sm:h-16 lg:h-20' : 'h-18 sm:h-24 lg:h-28'
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

            {/* Right: Search, WhatsApp Concierge, Theme Toggle, Shopping Bag, Mobile Menu */}
            <div className="flex items-center space-x-3 sm:space-x-4 text-[#F9F7F2]">
              {/* Search Trigger */}
              <button
                onClick={onOpenSearch}
                aria-label="Search Jewellery"
                className="p-2 rounded-full hover:bg-white/10 text-[#F9F7F2]/90 hover:text-[#D7AD76] transition-colors"
                title="Search Jewellery"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Theme Toggle (Dark / Light) */}
              <button
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to Ivory Mahal Mode' : 'Switch to Darbar Night Mode'}
                title={isDark ? 'Switch to Ivory Mahal Mode' : 'Switch to Darbar Night Mode'}
                className="p-2 rounded-full hover:bg-white/10 text-[#F9F7F2]/90 hover:text-[#D7AD76] transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5 text-[#D7AD76]" /> : <Moon className="w-5 h-5" />}
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
                className="relative p-2 rounded-full hover:bg-white/10 text-[#F9F7F2] hover:text-[#D7AD76] transition-colors"
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
                aria-label="Toggle Mobile Navigation Menu"
                className="lg:hidden p-2 rounded-lg text-[#F9F7F2] hover:text-[#D7AD76] hover:bg-white/10 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Enhanced Mobile Drawer Menu with Staggered Loading Animations */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 lg:hidden bg-[#061507]/98 backdrop-blur-xl text-[#F9F7F2] flex flex-col pt-4 px-6 pb-8 overflow-y-auto animate-fade-in"
        >
          {/* Top Bar with Logo and Close */}
          <div className="flex items-center justify-between pb-4 border-b border-[#C39C69]/25 shrink-0">
            <Link
              to="/"
              onClick={handleLogoClick}
              className="inline-block"
              title="SHAKTI ABHUSHAN"
            >
              <img
                src={assetUrl('/brand/shakti-abhushan-logo.png')}
                alt="SHAKTI ABHUSHAN"
                className="h-16 w-auto object-contain filter drop-shadow-md"
              />
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme in menu"
                className="p-2 rounded-full border border-[#C39C69]/30 text-[#D7AD76] hover:bg-white/10"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full border border-[#C39C69]/30 text-[#F9F7F2] hover:text-[#D7AD76] hover:bg-white/10 transition-colors"
                aria-label="Close Navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Actions Bar (Search & Cart inside drawer) */}
          <div className="grid grid-cols-2 gap-3 py-4 border-b border-[#C39C69]/15 shrink-0">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 border border-[#C39C69]/20 text-xs font-medium text-[#F9F7F2] hover:border-[#D7AD76] transition-all"
            >
              <Search className="w-4 h-4 text-[#C39C69]" />
              <span>Search Catalog</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 border border-[#C39C69]/20 text-xs font-medium text-[#F9F7F2] hover:border-[#D7AD76] transition-all relative"
            >
              <ShoppingBag className="w-4 h-4 text-[#C39C69]" />
              <span>Bag ({totalItems})</span>
            </button>
          </div>

          {/* Staggered Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center space-y-4 py-6 text-center my-auto">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 60}ms` }}
                  className={`font-serif text-2xl sm:text-3xl tracking-widest transition-all duration-300 animate-slide-up flex items-center justify-center gap-2 ${
                    isActive
                      ? 'text-[#D7AD76] font-semibold'
                      : 'text-[#F9F7F2]/90 hover:text-[#D7AD76]'
                  }`}
                >
                  {isActive && <Sparkles className="w-4 h-4 text-[#C39C69]" />}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Contact & WhatsApp Buttons */}
          <div className="pt-4 border-t border-[#C39C69]/25 flex flex-col gap-3 shrink-0">
            <a
              href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
                'Hello Shakti Abhushan! I am reaching out from your website mobile menu for jewellery enquiries.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full text-center text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 bg-[#0A1B0D] border border-[#C39C69]/40 text-[#D7AD76] hover:bg-[#C39C69]/20 hover:border-[#D7AD76] shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp Concierge</span>
            </a>

            {/* Clickable Phone & Email Links */}
            <div className="grid grid-cols-2 gap-2 text-center text-xs pt-1">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 text-[#F9F7F2]/80 hover:text-[#D7AD76] transition-colors"
                title="Call Shakti Abhushan"
              >
                <Phone className="w-3.5 h-3.5 text-[#C39C69]" />
                <span>Call Us</span>
              </a>

              <a
                href="mailto:care@shaktiabhushan.com?subject=Shakti%20Abhushan%20Enquiry"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 text-[#F9F7F2]/80 hover:text-[#D7AD76] transition-colors"
                title="Email Shakti Abhushan"
              >
                <Mail className="w-3.5 h-3.5 text-[#C39C69]" />
                <span>Email Us</span>
              </a>
            </div>

            <p className="text-center text-[10px] text-[#F9F7F2]/50 uppercase tracking-widest pt-1">
              Tradition, Worn Beautifully • Handcrafted Indian Brass
            </p>
          </div>
        </div>
      )}
    </>
  );
};
