import React from 'react';
import { Link } from 'react-router-dom';
import { LegalSidebar } from '../components/LegalSidebar';
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  Server, 
  Database, 
  ArrowRight, 
  UserCheck, 
  AlertCircle, 
  Scale, 
  FileCheck2,
  Users
} from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#263028] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10 pt-4">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C39C69] font-medium block">
            Privacy & Data Governance
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#061507] tracking-tight">
            Privacy Policy & DPDP Governance
          </h1>
          <p className="text-sm text-[#637066] font-light leading-relaxed">
            Our commitment to client privacy, order confidentiality, and statutory alignment with India's <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>.
          </p>
          <div className="text-xs text-[#C39C69] font-mono tracking-wider pt-1 flex items-center justify-center gap-2 flex-wrap">
            <span>Statutory Reference: DPDP Act, 2023 (Act No. 22 of 2023)</span>
            <span>•</span>
            <span>Jurisdiction: Jaipur, Rajasthan, India</span>
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
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#061507]/[0.08] space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-[#061507]/[0.08]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#061507]">
                    <EyeOff className="w-4 h-4 text-[#C39C69]" />
                    <span>Zero Data Commercialization</span>
                  </div>
                  <p className="text-[11px] text-[#637066] font-light">
                    We never sell, rent, or trade client personal data or shopping history to ad brokers.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#061507]">
                    <Lock className="w-4 h-4 text-[#25D366]" />
                    <span>Encrypted Order Handoff</span>
                  </div>
                  <p className="text-[11px] text-[#637066] font-light">
                    Direct order communications are secured with end-to-end encrypted WhatsApp messaging.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#061507]">
                    <ShieldCheck className="w-4 h-4 text-[#C39C69]" />
                    <span>DPDP Act 2023 Aligned</span>
                  </div>
                  <p className="text-[11px] text-[#637066] font-light">
                    Comprehensive compliance with Indian statutory privacy, consent, and grievance rights.
                  </p>
                </div>
              </div>

              {/* Section 0: Statutory DPDP Act Notice (Section 5) */}
              <section className="space-y-2.5 p-4 rounded-2xl bg-[#F0EBE1]/60 border border-[#C39C69]/20">
                <div className="flex items-center gap-2 text-xs font-bold text-[#061507] uppercase tracking-wider">
                  <Scale className="w-4 h-4 text-[#C39C69]" />
                  <span>Statutory Notice under Section 5 of DPDP Act, 2023</span>
                </div>
                <p className="text-xs text-[#263028] leading-relaxed font-light">
                  <strong>Shakti Abhushan</strong> acts as the <em>Data Fiduciary</em> determining the purpose and means of processing your personal data. By browsing our digital showroom or interacting with our WhatsApp Concierge, you are acknowledged as the <em>Data Principal</em>. This notice precedes any collection of personal data, detailing our processing purposes, rights of correction and erasure, and institutional escalation avenues including the Data Protection Board of India.
                </p>
              </section>

              {/* Section 1: Information Collected & Purpose */}
              <section className="space-y-2.5">
                <h2 className="font-serif text-2xl text-[#061507] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">01.</span>
                  <span>Personal Data Collected & Specified Purposes (Sections 5 & 6)</span>
                </h2>
                <div className="text-sm text-[#637066] leading-relaxed font-light space-y-2">
                  <p>
                    In accordance with the <em>Data Minimization Principle</em> under Section 8 of the DPDP Act, Shakti Abhushan does not require forced user account creation or intrusive profiling. We collect only what is strictly necessary to fulfill your orders and inquiries:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs">
                    <li>
                      <strong className="text-[#061507]">Contact & Communication Identifiers:</strong> Name, WhatsApp telephone number, and optional email address.
                      <span className="block text-[11px] text-[#637066]/80">Purpose: Direct order coordination, quotation verification, and dispatch notifications.</span>
                    </li>
                    <li>
                      <strong className="text-[#061507]">Postal Transit & Shipping Details:</strong> Full postal address, city, state, postal PIN code, and recipient mobile contact.
                      <span className="block text-[11px] text-[#637066]/80">Purpose: Insured Pan-India courier transit and door-to-door delivery execution.</span>
                    </li>
                    <li>
                      <strong className="text-[#061507]">Artisanal Customization Records:</strong> Sizing preferences (e.g., bangle inner diameter, necklace dori adjustments) and bespoke styling inquiries.
                      <span className="block text-[11px] text-[#637066]/80">Purpose: Atelier crafting and quality verification before dispatch.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 2: Financial Credentials */}
              <section className="space-y-2.5 pt-4 border-t border-[#061507]/[0.06]">
                <h2 className="font-serif text-2xl text-[#061507] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">02.</span>
                  <span>Zero Financial Credential Retention</span>
                </h2>
                <div className="text-sm text-[#637066] leading-relaxed font-light space-y-2">
                  <p>
                    Our website does not capture, process, or store payment card numbers, CVVs, expiry dates, net banking passwords, or UPI PINs. All financial settlements are conducted through verified banking rails (UPI, direct NEFT/RTGS, or verified payment gateway links) regulated strictly under the Reserve Bank of India (RBI) Payment and Settlement Systems frameworks.
                  </p>
                </div>
              </section>

              {/* Section 3: Cookie & Local Storage */}
              <section className="space-y-2.5 pt-4 border-t border-[#061507]/[0.06]">
                <h2 className="font-serif text-2xl text-[#061507] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">03.</span>
                  <span>Cookies & Client-Side Local Storage (Consent Management)</span>
                </h2>
                <div className="text-sm text-[#637066] leading-relaxed font-light space-y-2">
                  <p>
                    We deploy minimal, strictly necessary client-side storage technologies to preserve your shopping experience:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li><strong className="text-[#061507]">Shopping Bag State:</strong> Preserves jewellery pieces placed in your bag across route navigation within your session.</li>
                    <li><strong className="text-[#061507]">Cookie Consent Record:</strong> Saves your affirmative choice ('Accept All' or 'Essential Only') so banners are not repetitively displayed.</li>
                  </ul>
                  <p className="text-xs pt-1">
                    Consent is completely voluntary and may be withdrawn at any time using the <em>Cookie Preferences</em> trigger in the website footer or by clearing your browser cache.
                  </p>
                </div>
              </section>

              {/* Section 4: Authorized Processors & Cross-Border Data */}
              <section className="space-y-2.5 pt-4 border-t border-[#061507]/[0.06]">
                <h2 className="font-serif text-2xl text-[#061507] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">04.</span>
                  <span>Authorized Data Processors & Logistics Partners</span>
                </h2>
                <div className="text-sm text-[#637066] leading-relaxed font-light space-y-2">
                  <p>
                    Under Section 8(2) of the DPDP Act, Shakti Abhushan engages verified <em>Data Processors</em> solely under strict confidentiality and purpose-limited agreements:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li><strong className="text-[#061507]">Insured Couriers (Blue Dart, Delhivery, India Post):</strong> Provided recipient name, address, and contact number solely for transit delivery and PIN code verification.</li>
                    <li><strong className="text-[#061507]">Meta Platforms / WhatsApp Business:</strong> Customer-initiated chat handoffs operate under WhatsApp’s end-to-end messaging security standards.</li>
                    <li><strong className="text-[#061507]">Cloud Infrastructure:</strong> High-security hosting nodes utilizing modern TLS 1.3 encryption for digital showroom delivery.</li>
                  </ul>
                </div>
              </section>

              {/* Section 5: Statutory Data Principal Rights */}
              <section className="space-y-2.5 pt-4 border-t border-[#061507]/[0.06]">
                <h2 className="font-serif text-2xl text-[#061507] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">05.</span>
                  <span>Your Statutory Rights under DPDP Act, 2023 (Statutory Rights)</span>
                </h2>
                <div className="text-sm text-[#637066] leading-relaxed font-light space-y-2">
                  <p>
                    As a Data Principal under Sections 11 through 14 of the Digital Personal Data Protection Act, you are entitled to the following legally enforceable rights:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-2xl bg-[#F9F7F2] border border-[#061507]/[0.06] space-y-1">
                      <div className="text-xs font-semibold text-[#061507] flex items-center gap-1.5">
                        <FileCheck2 className="w-3.5 h-3.5 text-[#C39C69]" />
                        <span>Right to Access & Summary (Section 11)</span>
                      </div>
                      <p className="text-[11px] text-[#637066] font-light leading-relaxed">
                        Request a summary of your personal data processed by us and the list of processors with whom data has been shared.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#F9F7F2] border border-[#061507]/[0.06] space-y-1">
                      <div className="text-xs font-semibold text-[#061507] flex items-center gap-1.5">
                        <UserCheck className="w-3.5 h-3.5 text-[#C39C69]" />
                        <span>Right to Correction & Updating (Section 12)</span>
                      </div>
                      <p className="text-[11px] text-[#637066] font-light leading-relaxed">
                        Correct inaccurate, incomplete, or outdated personal contact or delivery records.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#F9F7F2] border border-[#061507]/[0.06] space-y-1">
                      <div className="text-xs font-semibold text-[#061507] flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-[#C39C69]" />
                        <span>Right to Erasure (Right to be Forgotten)</span>
                      </div>
                      <p className="text-[11px] text-[#637066] font-light leading-relaxed">
                        Request erasure of your contact details once order fulfillment, warranty, and statutory tax audit obligations conclude.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#F9F7F2] border border-[#061507]/[0.06] space-y-1">
                      <div className="text-xs font-semibold text-[#061507] flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#C39C69]" />
                        <span>Right to Nominate (Section 14)</span>
                      </div>
                      <p className="text-[11px] text-[#637066] font-light leading-relaxed">
                        Nominate a legal representative to exercise your data rights in the unfortunate event of death or incapacity.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Children's Data Protection */}
              <section className="space-y-2.5 pt-4 border-t border-[#061507]/[0.06]">
                <h2 className="font-serif text-2xl text-[#061507] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">06.</span>
                  <span>Protection of Children's Personal Data (Section 9)</span>
                </h2>
                <div className="text-sm text-[#637066] leading-relaxed font-light space-y-2">
                  <p>
                    Shakti Abhushan is an artisanal luxury jewellery brand intended for adult individuals aged 18 and above. In strict compliance with Section 9 of the DPDP Act, 2023:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>We do not knowingly process personal data belonging to children (minors under 18 years of age) without verifiable parental or lawful guardian consent.</li>
                    <li>We never undertake behavioral tracking, user profiling, or targeted advertisements directed at children.</li>
                  </ul>
                </div>
              </section>

              {/* Section 7: Security & Data Retention Limits */}
              <section className="space-y-2.5 pt-4 border-t border-[#061507]/[0.06]">
                <h2 className="font-serif text-2xl text-[#061507] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">07.</span>
                  <span>Security Safeguards & Data Retention (Sections 8(5) & 8(7))</span>
                </h2>
                <div className="text-sm text-[#637066] leading-relaxed font-light space-y-2">
                  <p>
                    We implement reasonable technical, operational, and organizational security safeguards to prevent unauthorized access, alteration, or personal data breaches:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li><strong className="text-[#061507]">Cryptographic Security:</strong> TLS 1.3 encryption across all website data in transit, reinforced by strict Content Security Policies (CSP) and HSTS.</li>
                    <li><strong className="text-[#061507]">Storage Limitation:</strong> Personal shipping details are retained only for the duration required to complete order dispatch, warranty verification, and legal accounting obligations under the Central Goods and Services Tax Act (CGST), after which records are purged or anonymized.</li>
                    <li><strong className="text-[#061507]">Breach Notification:</strong> In the unlikely event of a personal data breach, Shakti Abhushan will promptly intimate the Data Protection Board of India and affected Data Principals in the form and manner prescribed under Section 8(6).</li>
                  </ul>
                </div>
              </section>

              {/* Section 8: Grievance Redressal & DPBI Escalation */}
              <section className="space-y-3 pt-4 border-t border-[#061507]/[0.06]">
                <h2 className="font-serif text-2xl text-[#061507] font-medium flex items-center gap-2">
                  <span className="text-[#C39C69] text-lg font-sans">08.</span>
                  <span>Grievance Redressal & Data Protection Board Escalation (Section 13)</span>
                </h2>
                <div className="text-sm text-[#637066] leading-relaxed font-light space-y-2">
                  <p>
                    In accordance with Section 8(9) and Section 13 of the DPDP Act, 2023, Shakti Abhushan has instituted a dedicated Grievance Redressal Desk. If you have any inquiries, wish to exercise statutory data rights, or have a grievance:
                  </p>

                  <div className="p-4 rounded-2xl bg-[#F0EBE1] text-[#061507] border border-[#061507]/[0.08] space-y-2 text-xs">
                    <div className="font-semibold text-[#061507] uppercase tracking-wider text-xs">
                      Designated Data Grievance Officer
                    </div>
                    <div className="space-y-1 font-light text-[#637066]">
                      <p><strong>Designation:</strong> Data Protection & Grievance Officer, Shakti Abhushan</p>
                      <p><strong>Location:</strong> Johari Bazaar Heritage District, Jaipur 302003, Rajasthan, India</p>
                      <p>
                        <strong>Communication:</strong> Inquiries may be addressed via official customer care or WhatsApp.
                      </p>
                      <p><strong>Statutory Turnaround:</strong> All verified Data Principal requests will be acknowledged within 48 hours and formally redressed within statutory timelines (not exceeding 30 days).</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F0EBE1] border border-[#061507]/[0.06] flex items-start gap-3 text-xs text-[#263028]">
                    <AlertCircle className="w-4 h-4 text-[#C39C69] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#061507] font-semibold">
                        Escalation to Data Protection Board of India (DPBI):
                      </strong>
                      Under Section 13(3) and Section 18 of the DPDP Act, 2023, if you are unsatisfied with the resolution provided by our Grievance Officer or do not receive a response within the prescribed period, you hold the statutory right to register an online complaint directly with the <strong>Data Protection Board of India (DPBI)</strong>.
                    </div>
                  </div>
                </div>
              </section>

              {/* Cross-Link Card to Terms & Conditions */}
              <div className="pt-6 border-t border-[#061507]/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F9F7F2] p-5 rounded-2xl">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-[#061507]">
                    Maison Terms of Service
                  </h4>
                  <p className="text-xs text-[#637066] font-light">
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
