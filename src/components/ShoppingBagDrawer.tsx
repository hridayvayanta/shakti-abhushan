import React from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { Link } from 'react-router-dom';

export const ShoppingBagDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems,
    setIsSummaryModalOpen
  } = useCart();
  const { info } = useToast();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#061507]/10 shadow-drawer flex flex-col transform transition-transform duration-500 ease-out text-[#263028]">
          
          {/* Drawer Top Header (Forest Green) */}
          <div className="p-5 sm:p-6 bg-[#061507] text-[#F9F7F2] flex items-center justify-between border-b border-[#C39C69]/25">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#D7AD76]" />
              <h2 className="font-serif text-2xl tracking-wide text-white">
                Shopping Bag
              </h2>
              <span className="text-xs font-mono text-[#D7AD76] ml-1">
                ({totalItems})
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-[#F9F7F2]/75 hover:text-[#D7AD76] transition-colors"
              title="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Bag Items List or Clean Empty State */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 divide-y divide-[#061507]/[0.06] bg-[#F9F7F2]">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-white border border-[#061507]/10 flex items-center justify-center mb-5 shadow-sm text-[#061507]">
                  <ShoppingBag className="w-7 h-7 text-[#C39C69]" />
                </div>
                <h3 className="font-serif text-2xl text-[#061507] mb-2 font-normal">
                  Your bag is empty
                </h3>
                <p className="text-xs text-[#637066] max-w-xs mb-8 leading-relaxed font-light">
                  Browse our handcrafted Indian brass jewellery, made in solid brass with antique gold patinas.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="btn-primary px-7 py-3 rounded-full text-xs tracking-widest font-semibold"
                >
                  Explore Catalogue
                </button>
              </div>
            ) : (
              <div className="space-y-4 pb-4">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedVariant || ''}`}
                    className="pt-4 first:pt-0 flex gap-4 items-start bg-white p-3 rounded-xl border border-[#061507]/[0.06] shadow-sm"
                  >
                    {/* Thumbnail */}
                    <Link
                      to={`/product/${item.product.id}`}
                      onClick={() => setIsCartOpen(false)}
                      className="w-20 h-20 rounded-lg overflow-hidden bg-[#F4F1EA] border border-[#061507]/[0.08] flex-shrink-0"
                    >
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.product.id}`}
                        onClick={() => setIsCartOpen(false)}
                        className="font-serif text-base text-[#061507] hover:text-[#C39C69] transition-colors truncate block font-medium"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-[11px] text-[#C39C69] font-medium tracking-wider uppercase mb-1">
                        Solid Brass • {item.product.weight}
                      </p>
                      {item.selectedVariant && (
                        <p className="text-[11px] text-[#637066] mb-1">
                          Option: {item.selectedVariant}
                        </p>
                      )}

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Stepper */}
                        <div className="flex items-center border border-[#061507]/15 rounded-full bg-white">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 px-2.5 text-[#263028]/70 hover:text-[#061507] text-xs transition-colors"
                            title="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono font-semibold text-[#061507]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 px-2.5 text-[#263028]/70 hover:text-[#061507] text-xs transition-colors"
                            title="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="font-serif text-base font-semibold text-[#061507]">
                            ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Delete button */}
                    <button
                      onClick={() => {
                        removeFromCart(item.product.id);
                        info('Item Removed', `${item.product.name} removed from your bag.`);
                      }}
                      className="p-1.5 text-[#637066] hover:text-red-500 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Checkout on WhatsApp */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 bg-white border-t border-[#061507]/[0.08] space-y-4">
              {/* Subtotal */}
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-[#637066]">
                  Subtotal
                </span>
                <span className="font-serif text-2xl font-bold text-[#061507]">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#F9F7F2] border border-[#061507]/[0.06] text-[11px] text-[#263028] leading-relaxed flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#061507] flex-shrink-0 mt-0.5" />
                <span>
                  Orders are placed directly with our atelier on <strong>WhatsApp</strong>. No online payment gateway needed.
                </span>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsSummaryModalOpen(true);
                }}
                className="btn-primary w-full py-3.5 rounded-full text-center text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                Proceed to WhatsApp Checkout
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-[11px] uppercase tracking-widest text-[#637066] hover:text-[#061507] transition-colors py-1"
              >
                Continue Browsing
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
