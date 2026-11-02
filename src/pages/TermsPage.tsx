import React from 'react';
import { Link } from 'react-router-dom';
import { LegalSidebar } from '../components/LegalSidebar';
import { FileText, Hammer, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#263028] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10 pt-4">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C39C69] font-medium block">
            Maison Agreements • नियम एवं शर्तें
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#061507] tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-[#637066] font-light leading-relaxed">
            Please review the atelier conditions governing your browsing experience, handcrafted jewellery characteristics, and WhatsApp order fulfillment.
          </p>
          <div className="text-xs text-[#C39C69] font-mono tracking-wider pt-1">
            Last Updated: {new Date().getFullYear()} • Jurisdiction: Jaipur, Rajasthan, India
          </div>
        </div>

        {/* 2-Column Grid: Sidebar + Comprehensive Policy Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Sticky Sidebar (4 columns on lg) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <LegalSidebar />
          </div>

          {/* Main Legal Content (8 columns on lg) */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-6">
              
              {/* Highlight Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-[#061507]/[0.08]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#061507]">
                    <Hammer className="w-4 h-4 text-[#C39C69]" />
                    <span>Artisanal Heritage</span>
                  </div>
                  <p className="text-[11px] text-[#637066] font-light">
                    Every piece is crafted by hereditary metalsmiths with natural patina variance.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#061507]">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp Verification</span>
                  </div>
                  <p className="text-[11px] text-[#637066] font-light">
                    Orders are verified by our concierge before payment and dispatch.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#061507]">
                    <ShieldCheck className="w-4 h-4 text-[#C39C69]" />
                    <span>Insured Transit</span>
                  </div>
                  <p className="text-[11px] text-[#637066] font-light">
                    100% complimentary insured transit protection across all Indian pin codes.
                  </p>
                </div>
              </div>

              {/* Section 1 */}
              <section className="space-y-2.5">
                <h2 className="font-serif text-2xl text-[#061507] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">01.</span>
                  <span>Brand Identity & Intellectual Property</span>
                </h2>
                <div className="text-sm text-[#637066] leading-relaxed font-light space-y-2">
                  <p>
                    The name <strong>SHAKTI ABHUSHAN</strong>, our distinctive Devanagari calligraphy ("शक्ति आभूषण"), the registered royal crest ornament, jewelry design compositions, editorial lookbook photography, video reels, and catalog descriptions are the exclusive intellectual property of Shakti Abhushan.
                  </p>
                  <p>
                    Reproduction, re-hosting, scraping, or commercial exploitation without prior written consent from the atelier is strictly prohibited under the Copyright Act, 1957 and Trade Marks Act, 1999.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="space-y-2.5 pt-4 border-t border-[#061507]/[0.06]">
                <h2 className="font-serif text-2xl text-[#061507] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">02.</span>
                  <span>Handcrafted Artisanal Characteristics</span>
                </h2>
                <div className="text-sm text-[#637066] leading-relaxed font-light space-y-2">
                  <p>
                    Our ornaments are forged in solid brass using authentic Indian metalsmithing traditions, including die-casting, repoussé engraving, Kundan setting, and multi-layer antique gold micron electroplating.
                  </p>
                  <p>
                    Because each creation is handcrafted rather than machine-stamped:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>Subtle variations in gold shade, antique oxidation accents, and stone matrix alignment are natural signatures of hereditary craftsmanship, not manufacturing flaws.</li>
                    <li>Digital photography is captured under controlled studio lighting; minor color tone differences may appear depending on your device screen calibration.</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-2.5 pt-4 border-t border-[#061507]/[0.06]">
                <h2 className="font-serif text-2xl text-[#061507] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">03.</span>
                  <span>Order Placement & WhatsApp Concierge Handoff</span>
                </h2>
                <div className="text-sm text-[#637066] leading-relaxed font-light space-y-2">
                  <p>
                    Submitting your shopping bag through our WhatsApp link generates a formal order enquiry with our atelier concierge team:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>An order is formally confirmed only once our concierge verifies real-time stock availability, confirms bangle or choker sizing, and generates your official invoice.</li>
                    <li>We reserve the right to cancel or decline an enquiry in the event of unforeseen inventory shortages or pricing typographical errors.</li>
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section className="space-y-2.5 pt-4 border-t border-[#061507]/[0.06]">
                <h2 className="font-serif text-2xl text-[#061507] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">04.</span>
                  <span>Pricing, Invoicing & Taxes</span>
                </h2>
                <div className="text-sm text-[#637066] leading-relaxed font-light space-y-2">
                  <p>
                    All prices displayed on this website are listed in Indian Rupees (₹ INR). Prices are inclusive of applicable Goods and Services Tax (GST) unless explicitly indicated otherwise.
                  </p>
                  <p>
                    Complimentary insured delivery is provided on all domestic shipments across India without surprise surcharges.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="space-y-2.5 pt-4 border-t border-[#061507]/[0.06]">
                <h2 className="font-serif text-2xl text-[#061507] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">05.</span>
                  <span>Transit, Delivery & Parcel Inspection</span>
                </h2>
                <div className="text-sm text-[#637066] leading-relaxed font-light space-y-2">
                  <p>
                    All parcels are dispatched in tamper-evident security packaging with registered courier tracking. Upon receiving the parcel:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>Do not accept parcels that show signs of severe external tampering, tearing, or unsealed tape.</li>
                    <li>We recommend clients record a continuous unboxing video when opening the parcel to swiftly assist in any rare shipping transit claim.</li>
                    <li>Any transit discrepancy must be reported within 48 hours of delivery to{' '}
                      <a href="mailto:care@shaktiabhushan.com" className="text-[#C39C69] underline font-medium">
                        care@shaktiabhushan.com
                      </a>.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 6 */}
              <section className="space-y-2.5 pt-4 border-t border-[#061507]/[0.06]">
                <h2 className="font-serif text-2xl text-[#061507] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">06.</span>
                  <span>Governing Law & Jurisdiction</span>
                </h2>
                <div className="text-sm text-[#637066] leading-relaxed font-light space-y-2">
                  <p>
                    These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms, orders, or transactions shall be subject to the exclusive jurisdiction of the competent courts in Jaipur, Rajasthan.
                  </p>
                </div>
              </section>

              {/* Cross-Link Card to Privacy Policy */}
              <div className="pt-6 border-t border-[#061507]/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F9F7F2] p-5 rounded-2xl">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-[#061507]">
                    Privacy & Data Governance
                  </h4>
                  <p className="text-xs text-[#637066] font-light">
                    Learn how we safeguard client confidentiality, delivery addresses, and WhatsApp order handoffs under India's DPDP Act, 2023.
                  </p>
                </div>
                <Link
                  to="/privacy"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#061507] text-[#D7AD76] hover:bg-[#0A1B0D] hover:text-white text-xs font-semibold tracking-wider uppercase transition-all shrink-0"
                >
                  <span>View Privacy Policy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
