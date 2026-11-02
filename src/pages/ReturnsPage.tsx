import React from 'react';
import { RotateCcw, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { LegalSidebar } from '../components/LegalSidebar';

export const ReturnsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#263028] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10 pt-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C39C69] font-medium block">
            Returns & Exchanges
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#061507] tracking-tight">
            Returns & Exchanges Policy
          </h1>
          <p className="text-sm text-[#637066] font-light leading-relaxed">
            Our 7-day inspection and exchange policy ensures you shop with absolute peace of mind.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <LegalSidebar />
          </div>

          <div className="lg:col-span-8 space-y-6 text-sm leading-relaxed font-light">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#061507]/[0.08] space-y-3">
              <h3 className="font-serif text-xl text-[#061507] font-medium flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-[#C39C69]" />
                <span>7-Day Hassle-Free Exchange Window</span>
              </h3>
              <p className="text-[#637066]">
                If your jewellery piece does not meet your expectations or if you desire a different size or design, notify our WhatsApp concierge within <strong>7 days</strong> of delivery. We will arrange a reverse pickup or guide you on exchange options.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#061507]/[0.08] space-y-3">
              <h3 className="font-serif text-xl text-[#061507] font-medium flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                <span>Eligibility Criteria for Returns</span>
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-[#637066]">
                <li>Unworn and in their original pristine condition without scratches or perfume exposure.</li>
                <li>Housed in the original Shakti Abhushan presentation box with security barcode tags intact.</li>
                <li>Accompanied by the original digital order receipt or WhatsApp order verification.</li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#061507]/[0.08] space-y-3">
              <h3 className="font-serif text-xl text-[#061507] font-medium flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C39C69]" />
                <span>Damaged or Defective Deliveries</span>
              </h3>
              <p className="text-[#637066]">
                In the rare event that an item arrives damaged or tarnished due to transit rough-handling, share photo/video proof with our concierge within <strong>48 hours</strong> of delivery. We immediately dispatch an expedited replacement at no extra charge.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
