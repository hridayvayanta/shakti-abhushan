import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShieldCheck,
  FileText,
  Truck,
  RotateCcw,
  Sparkles,
  MessageCircle,
  Phone,
  Mail,
  Lock
} from 'lucide-react';
import { useCart } from '../context/CartContext';

interface LegalSidebarProps {
  currentPath?: string;
}

export const LegalSidebar: React.FC<LegalSidebarProps> = () => {
  const location = useLocation();
  const { whatsAppNumber } = useCart();
  const current = location.pathname;

  const links = [
    { name: 'Privacy Policy', path: '/privacy', icon: ShieldCheck, desc: 'Data protection & confidentiality' },
    { name: 'Terms & Conditions', path: '/terms', icon: FileText, desc: 'Atelier terms & purchase guidelines' },
    { name: 'Shipping & Delivery', path: '/shipping', icon: Truck, desc: 'Insured Pan-India transit timelines' },
    { name: 'Returns & Exchanges', path: '/returns', icon: RotateCcw, desc: '7-day inspection & exchange policy' },
    { name: 'Brass Care Guide', path: '/care', icon: Sparkles, desc: 'Preserving antique micron gold lustre' },
  ];

  return (
    <aside className="space-y-6">
      {/* 1. Policy Navigation Directory */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#061507]/[0.08] shadow-card-soft">
        <h3 className="text-xs uppercase tracking-[0.25em] text-[#C39C69] font-semibold mb-4 flex items-center gap-2">
          <FileText className="w-3.5 h-3.5 text-[#D7AD76]" />
          <span>Legal & Atelier Policies</span>
        </h3>

        <nav className="space-y-1.5">
          {links.map((item) => {
            const isActive = current === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-start gap-3 p-3 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? 'bg-[#061507] text-[#F9F7F2] shadow-sm'
                    : 'text-[#263028] hover:bg-[#F9F7F2]'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    isActive
                      ? 'bg-[#C39C69] text-[#061507]'
                      : 'bg-[#F9F7F2] text-[#C39C69]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div
                    className={`text-xs font-semibold tracking-wide ${
                      isActive ? 'text-[#D7AD76]' : 'text-[#061507]'
                    }`}
                  >
                    {item.name}
                  </div>
                  <div
                    className={`text-[11px] truncate font-light ${
                      isActive ? 'text-[#F9F7F2]/75' : 'text-[#637066]'
                    }`}
                  >
                    {item.desc}
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 2. Concierge Legal & Order Desk */}
      <div className="bg-[#061507] text-[#F9F7F2] p-6 rounded-3xl border border-[#C39C69]/30 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-[#D7AD76] text-xs uppercase tracking-widest font-semibold">
          <Lock className="w-3.5 h-3.5 text-[#25D366]" />
          <span>Atelier Concierge Desk</span>
        </div>
        <p className="text-xs text-[#F9F7F2]/75 leading-relaxed font-light">
          Have questions regarding order verification, custom brass sizing, or privacy? Speak directly with our concierge.
        </p>

        <div className="space-y-2.5 pt-2 border-t border-[#C39C69]/20 text-xs">
          <a
            href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
              'Hello Shakti Abhushan! I have a question regarding your store policies.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-[#C39C69] text-[#061507] hover:bg-[#D7AD76] font-semibold text-xs transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#061507]" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2.5 p-2 rounded-xl text-[#F9F7F2]/80 hover:text-white hover:bg-white/5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D7AD76]" />
            <span>+91 98765 43210</span>
          </a>

          <a
            href="mailto:care@shaktiabhushan.com?subject=Policy%20Inquiry%20-%20Shakti%20Abhushan"
            className="flex items-center gap-2.5 p-2 rounded-xl text-[#F9F7F2]/80 hover:text-white hover:bg-white/5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#D7AD76]" />
            <span>care@shaktiabhushan.com</span>
          </a>
        </div>
      </div>

      {/* 3. Statutory Compliance Card */}
      <div className="p-4 rounded-2xl bg-[#F0EBE1] border border-[#061507]/[0.06] text-[11px] text-[#637066] leading-relaxed space-y-1.5">
        <div className="font-semibold text-[#061507] flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C39C69]" />
          <span>Statutory Compliance</span>
        </div>
        <p>
          Governed under the Indian Information Technology Act, 2000 and Digital Personal Data Protection Act (DPDP), 2023.
        </p>
      </div>
    </aside>
  );
};
