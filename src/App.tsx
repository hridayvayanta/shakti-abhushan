import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { usePageMeta } from './utils/usePageMeta';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ShoppingBagDrawer } from './components/ShoppingBagDrawer';
import { WhatsAppCheckoutModal } from './components/WhatsAppCheckoutModal';
import { SearchModal } from './components/SearchModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { BackToTopButton } from './components/BackToTopButton';
import { CookieBanner } from './components/CookieBanner';
import { CinematicLogoLoader } from './components/CinematicLogoLoader';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { StoryPage } from './pages/StoryPage';
import { CarePage } from './pages/CarePage';
import { ShippingPage } from './pages/ShippingPage';
import { ReturnsPage } from './pages/ReturnsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  usePageMeta();

  useEffect(() => {
    // Ensure clean light mode permanently
    try {
      localStorage.removeItem('sa_theme');
      document.documentElement.classList.remove('dark');
    } catch {}
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F2] text-[#263028] font-sans selection:bg-[#C39C69] selection:text-white overflow-x-hidden w-full relative">
      {/* Cinematic Shared-Element Logo Loading Transition */}
      <CinematicLogoLoader />

      {/* Scroll Reading Progress Bar at the top */}
      <ScrollProgressBar />

      {/* Header (Forest Green) with Clickable Logo & Mobile Menu */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Body (Warm Ivory & Pure White alternating) */}
      <main className="flex-1 w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/care" element={<CarePage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/returns" element={<ReturnsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          {/* Custom Branded 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Drawers & Modals */}
      <ShoppingBagDrawer />
      <WhatsAppCheckoutModal />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Back to Top Floating Button */}
      <BackToTopButton />

      {/* Cookie Consent Banner */}
      <CookieBanner />

      {/* Footer (Forest Green) with Clickable Contacts, Verified Links & Copyright */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ToastProvider>
      <CartProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <AppContent />
        </BrowserRouter>
      </CartProvider>
    </ToastProvider>
  );
};

export default App;
