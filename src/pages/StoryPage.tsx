import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Compass, Shield, Feather } from 'lucide-react';
import { assetUrl } from '../utils/assets';

export const StoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#263028] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-5 max-w-3xl mx-auto pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium text-[#061507] border border-[#061507]/15 bg-white shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C39C69]" />
            <span>The Atelier Heritage • हमारी परम्परा</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#061507] tracking-tight leading-tight">
            Handcrafted Indian Brass: <br />
            <span className="italic font-light text-[#C39C69]">Weight, Form & Patina</span>
          </h1>

          <p className="text-sm sm:text-base text-[#637066] font-light leading-relaxed">
            SHAKTI ABHUSHAN works with hereditary brass metalsmiths in northern and western India. We design jewellery with the weight, detail, and patina of antique royal ornaments, made in solid brass for longevity.
          </p>
        </div>

        {/* Hero Editorial Photography */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-[#061507]/[0.08] shadow-card-soft">
          <img
            src={assetUrl('/products/model-heritage.jpg')}
            alt="Shakti Abhushan Handcrafted Brass Jewellery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white">
            <span className="font-serif text-base italic">Hand-forged brass finished with antique micron gold.</span>
            <span className="hidden sm:inline font-mono text-[#D7AD76]">Handcrafted in India</span>
          </div>
        </div>

        {/* Chapter 1: The Material */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#061507]/[0.08] shadow-card-soft">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C39C69] font-medium block mb-2">
                Chapter I
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#061507] leading-snug">
                Solid Brass Core
              </h2>
            </div>
            <div className="md:col-span-7 space-y-4 text-sm text-[#637066] font-light leading-relaxed">
              <p>
                Brass (पीतल - Peetal) has served Indian metalcraft for centuries in ceremonial vessels, temple bells, and royal adornments. It holds fine chisel marks cleanly, resists brittle fracture, and offers the substantial hand-feel of precious metal.
              </p>
              <p>
                We cast and forge using a lead-free, nickel-free brass alloy. Each piece receives an electroplated antique gold micron finish followed by a protective clear seal, preventing skin discoloration and protecting the deep crevices from tarnishing.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Pair */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden border border-[#061507]/[0.08] aspect-[4/3] bg-[#F4F1EA] shadow-card-soft">
            <img
              src={assetUrl('/products/choker-gold-detail.jpg')}
              alt="Repoussé Chisel Detail on Brass"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#061507]/[0.08] aspect-[4/3] bg-[#F4F1EA] shadow-card-soft">
            <img
              src={assetUrl('/products/model-portrait.jpg')}
              alt="Portrait of Shakti Abhushan Jewellery"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Chapter 2: The Craft */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#061507]/[0.08] shadow-card-soft">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C39C69] font-medium block mb-2">
                Chapter II
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#061507] leading-snug">
                Repoussé & Hand-Chiseling
              </h2>
            </div>
            <div className="md:col-span-7 space-y-4 text-sm text-[#637066] font-light leading-relaxed">
              <p>
                Our pieces are shaped using traditional repoussé and chasing techniques. Craftsmen support annealed sheet brass on a pitch block, hammering relief from the reverse side before detailing petals, scales, and borders with hardened steel punches from the front.
              </p>
              <p>
                This manual process creates three-dimensional volume without excessive solid metal weight, allowing chokers and cuffs to sit comfortably against the skin through weddings and celebrations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-10 rounded-3xl bg-[#061507] text-[#F9F7F2] border border-[#C39C69]/30 text-center space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl text-white">
            Browse the Atelier Catalogue
          </h3>
          <p className="text-xs text-[#F9F7F2]/75 max-w-md mx-auto">
            Explore our current collection of chokers, jhumkas, kadas, and statement rings with direct ordering on WhatsApp.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/shop"
              className="btn-primary px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center gap-2 bg-white text-[#061507] hover:bg-[#F9F7F2]"
            >
              <span>View All Pieces</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
