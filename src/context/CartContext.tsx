import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedVariant?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  totalItems: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isSummaryModalOpen: boolean;
  setIsSummaryModalOpen: (open: boolean) => void;
  whatsAppNumber: string;
  setWhatsAppNumber: (num: string) => void;
  generateWhatsAppUrl: (customerName?: string, customerCity?: string, notes?: string) => string;
  getWhatsAppMessageText: (customerName?: string, customerCity?: string, notes?: string) => string;
}

// Configurable business WhatsApp number (defaults to test phone number)
export const DEFAULT_WHATSAPP_NUMBER =
  (import.meta.env.VITE_WHATSAPP_NUMBER as string) || '0000000000';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('shakti_abhushan_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [whatsAppNumber, setWhatsAppNumberState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('shakti_abhushan_wa_number');
      if (saved && saved !== '919876543210') return saved;
      return DEFAULT_WHATSAPP_NUMBER;
    } catch {
      return DEFAULT_WHATSAPP_NUMBER;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('shakti_abhushan_cart', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);

  const setWhatsAppNumber = (num: string) => {
    const cleaned = num.replace(/[^0-9]/g, '');
    setWhatsAppNumberState(cleaned);
    try {
      localStorage.setItem('shakti_abhushan_wa_number', cleaned);
    } catch (e) {
      console.error('Failed to save WhatsApp number', e);
    }
  };

  const addToCart = (product: Product, quantity: number = 1, selectedVariant?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedVariant === selectedVariant
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }
      return [...prev, { product, quantity, selectedVariant }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // Exact Section 14 Template:
  // Hello Shakti Abhushan! ✨
  // I would like to enquire about the following order:
  // 1. Product Name — Qty: 1 — ₹799
  // 2. Product Name — Qty: 2 — ₹1,198
  // Product Subtotal: ₹1,997
  // Please confirm product availability, delivery charges and payment details.
  // Thank you!
  const getWhatsAppMessageText = (customerName?: string, customerCity?: string, notes?: string): string => {
    let msg = `Hello Shakti Abhushan! ✨\n\n`;
    msg += `I would like to enquire about the following order:\n\n`;

    items.forEach((item, index) => {
      const variantStr = item.selectedVariant ? ` (${item.selectedVariant})` : '';
      const lineTotal = item.product.price * item.quantity;
      msg += `${index + 1}. ${item.product.name}${variantStr} — Qty: ${item.quantity} — ₹${lineTotal.toLocaleString('en-IN')}\n`;
    });

    msg += `\nProduct Subtotal: ₹${subtotal.toLocaleString('en-IN')}\n`;

    if (customerName) {
      msg += `\nName: ${customerName}`;
    }
    if (customerCity) {
      msg += `\nDelivery City / Pincode: ${customerCity}`;
    }
    if (notes) {
      msg += `\nNote: ${notes}`;
    }

    msg += `\n\nPlease confirm product availability, delivery charges and payment details.\n\nThank you!`;
    return msg;
  };

  const generateWhatsAppUrl = (customerName?: string, customerCity?: string, notes?: string): string => {
    const text = getWhatsAppMessageText(customerName, customerCity, notes);
    return `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        totalItems,
        isCartOpen,
        setIsCartOpen,
        isSummaryModalOpen,
        setIsSummaryModalOpen,
        whatsAppNumber,
        setWhatsAppNumber,
        generateWhatsAppUrl,
        getWhatsAppMessageText
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
