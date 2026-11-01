import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#263028] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8 pt-6">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C39C69] font-medium block">
            Maison Terms of Service
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#061507]">
            Terms & Conditions
          </h1>
          <p className="text-sm text-[#637066] font-mono">Last Updated: {new Date().getFullYear()}</p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-6 text-sm text-[#637066] leading-relaxed font-light">
          <section className="space-y-2">
            <h3 className="font-serif text-xl text-[#061507] font-medium">1. Brand Identity & Intellectual Property</h3>
            <p>
              The name "SHAKTI ABHUSHAN", our distinctive Devanagari lettering, royal crest, product photography, editorial video reels, and catalog descriptions are the intellectual property of Shakti Abhushan. Reproduction without written consent is prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-serif text-xl text-[#061507] font-medium">2. Handcrafted Characteristics</h3>
            <p>
              Our jewellery is handcrafted in high-grade brass with antique gold micron finishes. While we photograph pieces under balanced lighting to show accurate colors and textures, screen calibrations and manual finishing may produce minor variations in metal tone.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-serif text-xl text-[#061507] font-medium">3. Order Acceptance on WhatsApp</h3>
            <p>
              Placing an enquiry through our WhatsApp click-to-chat does not constitute a completed order. An order is formally confirmed only once our concierge verifies inventory availability, confirms delivery specifics, and receives agreed payment.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
