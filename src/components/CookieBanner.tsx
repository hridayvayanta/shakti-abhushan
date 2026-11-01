import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sa_cookie_consent');
    if (!consent) {
      // Delay presentation slightly for polished experience
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (choice: 'all' | 'essential') => {
    localStorage.setItem('sa_cookie_consent', choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-[#061507]/95 border border-[#C39C69]/40 text-[#F9F7F2] p-5 rounded-2xl shadow-2xl backdrop-blur-md animate-fade-in"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-[#C39C69]/15 border border-[#C39C69]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#D7AD76]">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="flex-1 space-y-1.5">
          <h4 className="text-sm font-serif font-medium text-[#D7AD76] tracking-wide">
            Your Privacy & Shopping Experience
          </h4>
          <p className="text-xs text-[#F9F7F2]/75 leading-relaxed font-light">
            We use essential cookies to maintain your shopping bag and anonymous analytics to improve our atelier experience.{' '}
            <Link
              to="/privacy"
              className="text-[#D7AD76] underline underline-offset-2 hover:text-white transition-colors"
            >
              Learn more
            </Link>.
          </p>
        </div>
        <button
          onClick={() => handleAccept('essential')}
          className="text-[#F9F7F2]/60 hover:text-white p-1 -mr-1 transition-colors"
          aria-label="Close cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center justify-end gap-2.5 mt-4 pt-3 border-t border-[#C39C69]/15">
        <button
          onClick={() => handleAccept('essential')}
          className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#F9F7F2]/80 hover:text-white hover:bg-white/5 transition-all"
        >
          Essential Only
        </button>
        <button
          onClick={() => handleAccept('all')}
          className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#C39C69] text-[#061507] hover:bg-[#D7AD76] shadow-sm transition-all"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};
