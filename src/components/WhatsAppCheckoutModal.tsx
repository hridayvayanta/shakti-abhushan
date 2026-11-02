import React, { useState } from 'react';
import { X, MessageCircle, Send, CheckCircle2, ShieldAlert, PhoneCall, Edit3 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import confetti from 'canvas-confetti';

export const WhatsAppCheckoutModal: React.FC = () => {
  const {
    items,
    subtotal,
    isSummaryModalOpen,
    setIsSummaryModalOpen,
    whatsAppNumber,
    setWhatsAppNumber,
    generateWhatsAppUrl,
    getWhatsAppMessageText
  } = useCart();
  const { success, error } = useToast();

  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [customerNote, setCustomerNote] = useState('');
  const [editingNumber, setEditingNumber] = useState(false);
  const [customPhone, setCustomPhone] = useState(whatsAppNumber);

  if (!isSummaryModalOpen) return null;

  const handleLaunchWhatsApp = () => {
    if (!customerName.trim()) {
      error('Customer Name Recommended', 'Adding your name helps our atelier prepare your bespoke parcel.');
    }

    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#061507', '#C39C69', '#D7AD76']
      });
    } catch {}

    success('Connecting to WhatsApp Concierge', 'Redirecting you to our official concierge with prefilled order details.');

    const url = generateWhatsAppUrl(customerName, customerCity, customerNote);
    window.open(url, '_blank');
  };

  const handleSavePhone = () => {
    if (!customPhone.trim() || customPhone.length < 10) {
      error('Invalid WhatsApp Number', 'Please enter a valid phone number (e.g. 0000000000).');
      return;
    }
    setWhatsAppNumber(customPhone);
    setEditingNumber(false);
    success('WhatsApp Number Updated', `Future enquiries will route to +${customPhone}`);
  };

  const rawMessage = getWhatsAppMessageText(customerName, customerCity, customerNote);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden text-[#263028] border border-[#061507]/10">
        
        {/* Modal Top Bar (Forest Green) */}
        <div className="p-6 bg-[#061507] text-[#F9F7F2] flex items-center justify-between border-b border-[#C39C69]/25">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-[#C39C69]/30">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#D7AD76] font-mono">
                Direct Atelier Handoff
              </span>
              <h3 className="font-serif text-2xl text-white font-normal">
                Order Review & WhatsApp Checkout
              </h3>
            </div>
          </div>
          <button
            onClick={() => setIsSummaryModalOpen(false)}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto bg-[#F9F7F2]">
          
          {/* Important Verification Notice */}
          <div className="p-4 rounded-xl bg-white border border-[#061507]/[0.08] shadow-sm flex gap-3 text-xs text-[#263028] leading-relaxed">
            <ShieldAlert className="w-5 h-5 text-[#061507] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#061507] block mb-0.5">How your order is confirmed:</strong>
              Clicking below opens your WhatsApp chat with our atelier with your prefilled order details. Our team confirms live stock availability, calculates delivery charges, and shares payment details with you.
            </div>
          </div>

          {/* Customer Optional Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#061507] mb-1.5 font-semibold">
                Your Name (Optional)
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Ananya Sen"
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#061507]/15 text-sm text-[#263028] placeholder-[#637066]/50 focus:outline-none focus:border-[#061507]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#061507] mb-1.5 font-semibold">
                Delivery City / Pin Code (Optional)
              </label>
              <input
                type="text"
                value={customerCity}
                onChange={(e) => setCustomerCity(e.target.value)}
                placeholder="e.g. Jaipur, Rajasthan — 302001"
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#061507]/15 text-sm text-[#263028] placeholder-[#637066]/50 focus:outline-none focus:border-[#061507]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#061507] mb-1.5 font-semibold">
              Special Customization or Gifting Note (Optional)
            </label>
            <textarea
              rows={2}
              value={customerNote}
              onChange={(e) => setCustomerNote(e.target.value)}
              placeholder="e.g. Please include an extra velvet pouch for gifting..."
              className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#061507]/15 text-sm text-[#263028] placeholder-[#637066]/50 focus:outline-none focus:border-[#061507]"
            />
          </div>

          {/* Configurable Business WhatsApp Number Setting */}
          <div className="p-3.5 rounded-lg bg-white border border-[#061507]/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-[#061507]" />
              <span className="text-[#637066]">Business WhatsApp Destination:</span>
              <strong className="text-[#061507] font-mono">+{whatsAppNumber}</strong>
            </div>
            {editingNumber ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={customPhone}
                  onChange={(e) => setCustomPhone(e.target.value)}
                  className="px-2 py-1 rounded bg-[#F9F7F2] text-xs font-mono text-[#061507] border border-[#061507]/30"
                  placeholder="e.g. 0000000000"
                />
                <button
                  onClick={handleSavePhone}
                  className="px-2.5 py-1 bg-[#061507] text-white font-semibold rounded text-xs"
                >
                  Save
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEditingNumber(true)}
                className="text-[11px] text-[#061507] hover:underline flex items-center gap-1 font-medium"
              >
                <Edit3 className="w-3 h-3" /> Change Number
              </button>
            )}
          </div>

          {/* Live Preview of Section 14 WhatsApp Message */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-[#061507] font-semibold">
                Formatted WhatsApp Message Preview
              </span>
              <span className="text-[11px] text-[#637066] font-mono">
                {items.length} items • ₹{subtotal.toLocaleString('en-IN')}
              </span>
            </div>
            <pre className="p-4 rounded-xl bg-white border border-[#061507]/10 text-xs font-mono text-[#263028] whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
              {rawMessage}
            </pre>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-6 bg-white border-t border-[#061507]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-xs text-[#637066] uppercase tracking-wider font-light">
              Calculated Subtotal
            </div>
            <div className="font-serif text-2xl font-bold text-[#061507]">
              ₹{subtotal.toLocaleString('en-IN')}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setIsSummaryModalOpen(false)}
              className="flex-1 sm:flex-none px-5 py-3 rounded-full text-xs uppercase tracking-widest text-[#637066] hover:text-[#061507]"
            >
              Back to Bag
            </button>
            <button
              onClick={handleLaunchWhatsApp}
              className="flex-1 sm:flex-none px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20"
            >
              <MessageCircle className="w-4 h-4" />
              Open WhatsApp to Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
