import React from 'react';
import { Sparkles, Shield, RotateCcw, AlertTriangle, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CarePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#263028] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4 pt-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C39C69] font-medium block">
            Atelier Preservation Guide
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#061507]">
            Caring for Antique Brass Jewellery
          </h1>
          <p className="text-sm text-[#637066] max-w-xl mx-auto font-light leading-relaxed">
            Our jewelry is crafted from solid brass with an antique gold electroplate and protective seal. Follow these guidelines to keep your pieces clean and prevent tarnishing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F9F7F2] flex items-center justify-center text-[#061507]">
              <Droplet className="w-5 h-5 text-[#C39C69]" />
            </div>
            <h3 className="font-serif text-xl text-[#061507] font-medium">Keep Away from Moisture & Chemicals</h3>
            <p className="text-xs text-[#637066] leading-relaxed font-light">
              Always put your jewellery on <em>after</em> applying makeup, perfume, hairspray, and lotions. Chemicals in fragrances can tarnish antique seals and dull the metallic luster.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F9F7F2] flex items-center justify-center text-[#061507]">
              <Shield className="w-5 h-5 text-[#C39C69]" />
            </div>
            <h3 className="font-serif text-xl text-[#061507] font-medium">Velvet Pouch Storage</h3>
            <p className="text-xs text-[#637066] leading-relaxed font-light">
              Store each piece individually in its provided velvet pouch or airtight container. Never store brass pieces touching each other to prevent scratching and tangling of delicate ghunghroos.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F9F7F2] flex items-center justify-center text-[#061507]">
              <RotateCcw className="w-5 h-5 text-[#C39C69]" />
            </div>
            <h3 className="font-serif text-xl text-[#061507] font-medium">Post-Wear Gentle Microfiber Wipe</h3>
            <p className="text-xs text-[#637066] leading-relaxed font-light">
              After wearing, gently wipe down the piece with a soft, lint-free dry microfiber cloth. This removes natural skin oils and moisture before resting in your box.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#061507]/[0.08] shadow-card-soft space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F9F7F2] flex items-center justify-center text-[#061507]">
              <AlertTriangle className="w-5 h-5 text-[#C39C69]" />
            </div>
            <h3 className="font-serif text-xl text-[#061507] font-medium">Avoid Abrasive Liquid Polishes</h3>
            <p className="text-xs text-[#637066] leading-relaxed font-light">
              Do not use harsh commercial liquid dips (like Brasso) or toothpaste. Our antique patinas feature intentional shadowed crevices that chemical dips would artificially strip.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-white border border-[#061507]/[0.08] shadow-card-soft text-center space-y-4">
          <h4 className="font-serif text-2xl text-[#061507]">Have Questions Regarding Brass Restoration?</h4>
          <p className="text-xs text-[#637066] max-w-md mx-auto font-light">
            Our atelier provides guidance on polishing cloths and maintenance directly through WhatsApp.
          </p>
          <Link to="/shop" className="btn-primary inline-block px-7 py-3 rounded-full text-xs uppercase tracking-widest font-semibold">
            Explore Handcrafted Pieces
          </Link>
        </div>
      </div>
    </div>
  );
};
