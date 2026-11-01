import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'How does ordering on WhatsApp work?',
    a: 'Simply add your desired jewellery pieces to your shopping bag and click "Proceed to WhatsApp Checkout". A preformatted message with your items, quantities, and subtotal will open in your WhatsApp chat with our atelier. We verify live inventory, calculate local shipping, and share direct payment details.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Once your order is confirmed via WhatsApp, we accept UPI (Google Pay, PhonePe, Paytm), direct bank NEFT/IMPS transfers, and verified payment links. We do not require or store credit cards on this website.'
  },
  {
    q: 'What is the dispatch and delivery timeline?',
    a: 'Every piece is inspected, wrapped in velvet, and dispatched within 24 to 48 business hours. Domestic transit across India takes 3 to 5 business days for metro cities and 5 to 7 days for regional locations via insured couriers.'
  },
  {
    q: 'What materials are used in Shakti Abhushan jewellery?',
    a: 'Our jewellery is made from solid, lead-free and nickel-free brass alloy. Each piece is finished with an antique gold micron electroplate and sealed with a protective coat that guards against tarnishing and skin staining.'
  },
  {
    q: 'How do I care for my antique brass jewellery?',
    a: 'Store each piece individually in its provided velvet pouch. Keep away from water, perfumes, and lotions. After wearing, gently wipe down with a dry, lint-free microfiber cloth. Avoid abrasive liquid brass cleaners.'
  },
  {
    q: 'What is your policy on transit damage or returns?',
    a: 'In the rare event that an item arrives damaged in transit, share an unboxing photo or video with our WhatsApp team within 48 hours of delivery for an immediate complimentary replacement.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { whatsAppNumber } = useCart();

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#F9F7F2] border-t border-[#061507]/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C39C69] font-medium block">
            Customer Guidance • प्रश्न एवं उत्तर
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#061507]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#637066] font-light max-w-lg mx-auto">
            Everything you need to know about our handcrafted brass jewelry, ordering via WhatsApp, and delivery.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="divide-y divide-[#061507]/[0.08] border-y border-[#061507]/[0.08]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-5 sm:py-6">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#061507] group-hover:text-[#C39C69] transition-colors font-medium pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#637066] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180 text-[#C39C69]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-3 pr-6 text-sm text-[#637066] font-light leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp Assistance Banner */}
        <div className="p-6 rounded-2xl bg-white border border-[#061507]/[0.08] shadow-card-soft text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-xl text-[#061507]">Have a custom question or styling enquiry?</h4>
            <p className="text-xs text-[#637066] mt-0.5">Our atelier concierge responds directly on WhatsApp.</p>
          </div>
          <a
            href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
              'Hello Shakti Abhushan! I have a question regarding an order enquiry.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2.5 px-6 rounded-full text-xs font-semibold tracking-wider flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            Ask Concierge
          </a>
        </div>
      </div>
    </section>
  );
};
