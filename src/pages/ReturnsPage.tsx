import React from 'react';
import { RotateCcw, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export const ReturnsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#263028] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-10 pt-6">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C39C69] font-medium block">
            Quality Assurance & Trust
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#061507]">
            Returns & Exchanges
          </h1>
          <p className="text-sm text-[#637066] font-light">
            Due to the artisanal, hygiene-sensitive, and handcrafted nature of brass jewellery, our policies are designed to be fair, transparent, and direct.
          </p>
        </div>

        <div className="space-y-6 text-sm text-[#263028] leading-relaxed font-light">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-3">
            <h3 className="font-serif text-xl text-[#061507] font-medium flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
              Transit Damage Guarantee
            </h3>
            <p className="text-[#637066]">
              In the unlikely event that your jewellery arrives damaged in transit or with a manufacturing defect, we provide a <strong>100% complimentary replacement</strong>. Simply share an unboxing video or photographs on our official WhatsApp within 48 hours of delivery.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-3">
            <h3 className="font-serif text-xl text-[#061507] font-medium flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-[#C39C69]" />
              Size & Fit Exchange
            </h3>
            <p className="text-[#637066]">
              For rigid cuffs and openable kadas where size adjustments are needed, we accommodate exchanges for alternate sizes within 7 days of receipt, provided the piece is unworn and in its original velvet box.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-3">
            <h3 className="font-serif text-xl text-[#061507] font-medium flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#C39C69]" />
              Handcrafted Characteristics
            </h3>
            <p className="text-[#637066]">
              Because each piece is chiseled and assembled by hand, minor surface variations in engraving depth or stone seating occur naturally. These are normal marks of manual metalwork and do not affect structural durability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
