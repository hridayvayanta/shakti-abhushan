import React from 'react';
import { Link } from 'react-router-dom';
import { LegalSidebar } from '../components/LegalSidebar';
import { ShieldCheck, Lock, EyeOff, Server, Database, ArrowRight } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] dark:bg-[#061507] text-[#263028] dark:text-[#F9F7F2] pt-12 pb-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-10 pt-4">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C39C69] font-medium block">
            Maison Governance • गोपनीयता नीति
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#061507] dark:text-[#F9F7F2] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#637066] dark:text-[#F9F7F2]/75 font-light leading-relaxed">
            Our solemn commitment to protecting client privacy, order confidentiality, and personal data across our digital showroom and WhatsApp atelier handoff.
          </p>
          <div className="text-xs text-[#C39C69] font-mono tracking-wider pt-1">
            Last Updated: {new Date().getFullYear()} • Compliant with Indian DPDP Act, 2023
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
            
            {/* Core Privacy Highlights Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0A1B0D] border border-[#061507]/[0.08] dark:border-[#C39C69]/25 shadow-card-soft space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-[#061507]/[0.08] dark:border-[#C39C69]/20">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#061507] dark:text-[#D7AD76]">
                    <EyeOff className="w-4 h-4 text-[#C39C69]" />
                    <span>Zero Data Selling</span>
                  </div>
                  <p className="text-[11px] text-[#637066] dark:text-[#F9F7F2]/70 font-light">
                    We never sell, rent, or trade client information to advertising networks.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#061507] dark:text-[#D7AD76]">
                    <Lock className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp Encrypted</span>
                  </div>
                  <p className="text-[11px] text-[#637066] dark:text-[#F9F7F2]/70 font-light">
                    Direct order communications are secured with end-to-end encryption.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#061507] dark:text-[#D7AD76]">
                    <ShieldCheck className="w-4 h-4 text-[#C39C69]" />
                    <span>DPDP Act 2023</span>
                  </div>
                  <p className="text-[11px] text-[#637066] dark:text-[#F9F7F2]/70 font-light">
                    Full alignment with Indian digital personal data protection statutory norms.
                  </p>
                </div>
              </div>

              {/* Section 1 */}
              <section className="space-y-2.5">
                <h2 className="font-serif text-2xl text-[#061507] dark:text-[#F9F7F2] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">01.</span>
                  <span>Information We Collect</span>
                </h2>
                <div className="text-sm text-[#637066] dark:text-[#F9F7F2]/80 leading-relaxed font-light space-y-2">
                  <p>
                    Shakti Abhushan operates an authentic, private jewellery shopping experience. When you explore our website, we do not require forced account registrations or intrusive profile creations.
                  </p>
                  <p>
                    We collect personal information solely when you voluntarily provide it through our WhatsApp Concierge handoff or contact channels:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li><strong className="text-[#061507] dark:text-white">Contact & Identity Details:</strong> Full name, telephone/WhatsApp number, and email address.</li>
                    <li><strong className="text-[#061507] dark:text-white">Dispatch & Delivery Address:</strong> Postal address, PIN code, landmark, and delivery recipient phone number for insured courier delivery.</li>
                    <li><strong className="text-[#061507] dark:text-white">Order Specifications:</strong> Selected brass jewellery pieces, custom sizing requirements (such as bangle circumference or necklace dori preferences), and order notes.</li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section className="space-y-2.5 pt-4 border-t border-[#061507]/[0.06] dark:border-[#C39C69]/15">
                <h2 className="font-serif text-2xl text-[#061507] dark:text-[#F9F7F2] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">02.</span>
                  <span>No Financial or Card Storage on Website</span>
                </h2>
                <div className="text-sm text-[#637066] dark:text-[#F9F7F2]/80 leading-relaxed font-light space-y-2">
                  <p>
                    Our website does not ask for, capture, or store bank account passwords, credit card CVVs, or debit card PINs. All commercial transactions are finalized transparently through our official WhatsApp business concierge using verified digital payments (UPI, verified bank transfers, or official payment links) that adhere to Reserve Bank of India (RBI) security frameworks.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-2.5 pt-4 border-t border-[#061507]/[0.06] dark:border-[#C39C69]/15">
                <h2 className="font-serif text-2xl text-[#061507] dark:text-[#F9F7F2] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">03.</span>
                  <span>Cookies & Local Browser Storage</span>
                </h2>
                <div className="text-sm text-[#637066] dark:text-[#F9F7F2]/80 leading-relaxed font-light space-y-2">
                  <p>
                    We employ modern browser local storage technologies solely to enhance your shopping journey:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li><strong className="text-[#061507] dark:text-white">Shopping Bag Persistence:</strong> Preserves items added to your bag during your session so you do not lose your selections when navigating pages.</li>
                    <li><strong className="text-[#061507] dark:text-white">Darbar Theme Preferences:</strong> Remembers your chosen viewing mode (Ivory Mahal Day Mode vs. Darbar Night Mode).</li>
                    <li><strong className="text-[#061507] dark:text-white">Cookie Consent State:</strong> Records your privacy choice so we do not repeatedly present consent banners once acknowledged.</li>
                  </ul>
                  <p className="text-xs pt-1">
                    You may clear your browser cookies and local storage at any time through your browser settings or via our footer Cookie Preferences tool.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="space-y-2.5 pt-4 border-t border-[#061507]/[0.06] dark:border-[#C39C69]/15">
                <h2 className="font-serif text-2xl text-[#061507] dark:text-[#F9F7F2] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">04.</span>
                  <span>Data Sharing with Insured Logistics Partners</span>
                </h2>
                <div className="text-sm text-[#637066] dark:text-[#F9F7F2]/80 leading-relaxed font-light space-y-2">
                  <p>
                    We share delivery details (client name, shipping address, and telephone number) exclusively with our verified courier and logistics partners (such as BlueDart, Delhivery, or Speed Post) strictly for the purpose of dispatching, tracking, and delivering your tamper-evident jewellery shipment.
                  </p>
                  <p>
                    These logistics carriers are contractually restricted from using your information for any secondary purpose.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="space-y-2.5 pt-4 border-t border-[#061507]/[0.06] dark:border-[#C39C69]/15">
                <h2 className="font-serif text-2xl text-[#061507] dark:text-[#F9F7F2] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">05.</span>
                  <span>Your Legal Rights under DPDP Act, 2023</span>
                </h2>
                <div className="text-sm text-[#637066] dark:text-[#F9F7F2]/80 leading-relaxed font-light space-y-2">
                  <p>
                    In accordance with the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000, clients possess full rights over their personal data:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li><strong className="text-[#061507] dark:text-white">Right to Access & Review:</strong> Request a copy of order history and address details stored in our records.</li>
                    <li><strong className="text-[#061507] dark:text-white">Right to Correction:</strong> Update or rectify inaccurate delivery addresses or contact details.</li>
                    <li><strong className="text-[#061507] dark:text-white">Right to Erasure:</strong> Request the deletion of your customer contact record from our concierge database once order fulfillment and warranty periods expire.</li>
                  </ul>
                  <p className="text-xs pt-1">
                    To exercise any of these rights, simply email our Data Grievance Desk at{' '}
                    <a href="mailto:care@shaktiabhushan.com" className="text-[#C39C69] underline font-medium">
                      care@shaktiabhushan.com
                    </a>.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section className="space-y-2.5 pt-4 border-t border-[#061507]/[0.06] dark:border-[#C39C69]/15">
                <h2 className="font-serif text-2xl text-[#061507] dark:text-[#F9F7F2] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">06.</span>
                  <span>Security & In-Transit Encryption</span>
                </h2>
                <div className="text-sm text-[#637066] dark:text-[#F9F7F2]/80 leading-relaxed font-light space-y-2">
                  <p>
                    All web communications between your device and the Shakti Abhushan digital showroom are strictly encrypted using TLS 1.3 over HTTPS, with HTTP Strict Transport Security (HSTS) and Content Security Policy directives to prevent tampering or interception.
                  </p>
                </div>
              </section>

              {/* Cross-Link Card to Terms & Conditions */}
              <div className="pt-6 border-t border-[#061507]/[0.08] dark:border-[#C39C69]/20 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F9F7F2] dark:bg-white/5 p-5 rounded-2xl">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-[#061507] dark:text-[#D7AD76]">
                    Maison Terms of Service
                  </h4>
                  <p className="text-xs text-[#637066] dark:text-[#F9F7F2]/70 font-light">
                    Review our handcrafted brass variances, order acceptance guidelines, and copyright policies.
                  </p>
                </div>
                <Link
                  to="/terms"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#061507] text-[#D7AD76] hover:bg-[#0A1B0D] hover:text-white text-xs font-semibold tracking-wider uppercase transition-all shrink-0"
                >
                  <span>View Terms & Conditions</span>
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
