import React from 'react';
import { Truck, ShieldCheck, Clock, MapPin, PackageCheck, AlertCircle } from 'lucide-react';
import { LegalSidebar } from '../components/LegalSidebar';

export const ShippingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#263028] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10 pt-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C39C69] font-medium block">
            Client Logistics • नौवहन नीति
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#061507] tracking-tight">
            Shipping & Delivery Policy
          </h1>
          <p className="text-sm text-[#637066] font-light leading-relaxed">
            Transparent dispatch timelines, insured transit, and doorstep delivery for our handcrafted brass ornaments.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <LegalSidebar />
          </div>

          <div className="lg:col-span-8 space-y-6 text-sm leading-relaxed font-light">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-3">
              <h3 className="font-serif text-xl text-[#061507] font-medium flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#C39C69]" />
                <span>Order Dispatch Timelines (24 - 48 Hours)</span>
              </h3>
              <p className="text-[#637066]">
                Every Shakti Abhushan creation undergoes final visual inspection, ultrasonic cleaning, and velvet casing before dispatch. Orders are handed over to express courier hubs within <strong>24 to 48 business hours</strong> following confirmation via WhatsApp.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-3">
              <h3 className="font-serif text-xl text-[#061507] font-medium flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C39C69]" />
                <span>Complimentary Insured Domestic Delivery (Pan-India)</span>
              </h3>
              <p className="text-[#637066]">
                We provide 100% complimentary insured shipping on all orders across India. We partner with Tier-1 logistics networks (BlueDart, Delhivery, DTDC, and Speed Post). Metro deliveries typically arrive within 3 to 5 business days; regional and non-metro pin codes take 5 to 7 business days.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-3">
              <h3 className="font-serif text-xl text-[#061507] font-medium flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#25D366]" />
                <span>100% Insured Transit Protection</span>
              </h3>
              <p className="text-[#637066]">
                All shipments are fully insured against loss or damage in transit. Your jewellery is packaged in discreet, non-branded, tamper-evident security parcels with registered barcode tracking.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-3">
              <h3 className="font-serif text-xl text-[#061507] font-medium flex items-center gap-2">
                <PackageCheck className="w-5 h-5 text-[#C39C69]" />
                <span>Live Consignment Tracking</span>
              </h3>
              <p className="text-[#637066]">
                As soon as your shipment is dispatched, an official airway bill (AWB) number and direct tracking link are shared with you on WhatsApp so you can monitor your parcel's journey in real-time.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
