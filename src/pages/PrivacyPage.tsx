import React from 'react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#263028] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8 pt-6">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C39C69] font-medium block">
            Legal & Data Protection
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#061507]">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#637066] font-mono">Effective Date: {new Date().getFullYear()}</p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-6 text-sm text-[#637066] leading-relaxed font-light">
          <section className="space-y-2">
            <h3 className="font-serif text-xl text-[#061507] font-medium">1. Information We Collect</h3>
            <p>
              When you use our website, your cart contents and preferences are stored locally in your browser's local storage. When you proceed to order via WhatsApp, you communicate directly with our business concierge. We only collect details you voluntarily provide (such as your name, delivery address, and contact number) solely to fulfill your jewellery shipment.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-serif text-xl text-[#061507] font-medium">2. No Payment Card Storage</h3>
            <p>
              Shakti Abhushan does not process or store credit cards, debit cards, or banking passwords on this website. All commerce is conducted transparently via official direct messaging on WhatsApp.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-serif text-xl text-[#061507] font-medium">3. Data Confidentiality</h3>
            <p>
              We never sell, rent, or trade your contact information to third-party marketing brokers. Your information is shared only with our courier partners strictly for door-to-door delivery.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
