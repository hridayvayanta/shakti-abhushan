import React from 'react';
import { Truck, ShieldCheck, Clock, MapPin, PackageCheck } from 'lucide-react';

export const ShippingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#263028] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-10 pt-6">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C39C69] font-medium block">
            Client Logistics • नौवहन नीति
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#061507]">
            Shipping & Delivery Policy
          </h1>
          <p className="text-sm text-[#637066] font-light">
            Clear, transparent policies for our handcrafted brass jewellery dispatch across India and internationally.
          </p>
        </div>

        <div className="space-y-6 text-sm text-[#263028] leading-relaxed font-light">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-3">
            <h3 className="font-serif text-xl text-[#061507] font-medium flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#C39C69]" />
              Order Dispatch Timelines
            </h3>
            <p className="text-[#637066]">
              Every Shakti Abhushan order is inspected by hand, packed into a cushioned jewellery box, and dispatched within <strong>24 to 48 business hours</strong> following confirmation via WhatsApp.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-3">
            <h3 className="font-serif text-xl text-[#061507] font-medium flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#C39C69]" />
              Domestic Delivery (Pan-India)
            </h3>
            <p className="text-[#637066]">
              We partner with trusted express couriers (Bluedart, Delhivery, DTDC). Metro deliveries typically arrive within 3 to 5 business days, while regional locations take 5 to 7 business days.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-3">
            <h3 className="font-serif text-xl text-[#061507] font-medium flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#C39C69]" />
              Insured Transit & Tamper-Proof Packaging
            </h3>
            <p className="text-[#637066]">
              All shipments are insured during transit. Pieces are securely encased in multi-layer bubble wrap, velvet pouch, and a sturdy outer corrugated shipping box.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-3">
            <h3 className="font-serif text-xl text-[#061507] font-medium flex items-center gap-2">
              <PackageCheck className="w-5 h-5 text-[#C39C69]" />
              Live Tracking on WhatsApp
            </h3>
            <p className="text-[#637066]">
              As soon as your shipment leaves our atelier, our concierge shares the official tracking link and AWB number directly to your WhatsApp chat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
