import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { assetUrl } from '../utils/assets';
import { hasIntroPlayedInSpaSession } from './CinematicLogoLoader';
import gsap from 'gsap';

export const HeroVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure video is played continuously and muted
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }

    const hasIntroRun = hasIntroPlayedInSpaSession;

    const triggerHeroAnimation = () => {
      gsap.fromTo(
        '.hero-anim-item',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.14,
          duration: 1.0,
          ease: 'power3.out',
        }
      );
    };

    if (hasIntroRun) {
      // Normal entrance on subsequent route visits
      const ctx = gsap.context(triggerHeroAnimation, heroContentRef);
      return () => ctx.revert();
    } else {
      // Coordinated with cinematic logo loading transition
      const handleReveal = () => {
        triggerHeroAnimation();
      };

      window.addEventListener('sa-intro-reveal', handleReveal, { once: true });

      // Fallback timer if event missed
      const fallbackTimer = setTimeout(() => {
        triggerHeroAnimation();
      }, 2200);

      return () => {
        window.removeEventListener('sa-intro-reveal', handleReveal);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  return (
    <section className="relative w-full h-[88vh] sm:h-[92vh] max-h-[960px] min-h-[580px] bg-[#061507] overflow-hidden flex items-center">
      
      {/* Background Video Layer - Plays continuously, muted, without buttons */}
      <video
        ref={videoRef}
        src={assetUrl('/videos/shakti-abhushan-hero.mp4')}
        poster={assetUrl('/videos/hero-poster.jpg')}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Cinematic Gradient Overlays: Deep Green Tint at Top, Light Sheen at Center */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />

      {/* Hero Headline & CTA Overlay */}
      <div
        ref={heroContentRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12"
      >
        <div className="max-w-2xl space-y-6 text-white">
          
          {/* Eyebrow */}
          <span className="hero-anim-item text-xs uppercase tracking-[0.3em] text-[#D7AD76] font-medium block">
            Handcrafted Indian Brass
          </span>

          {/* Headline */}
          <h1 className="hero-anim-item font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-[1.08] tracking-tight">
            Every Detail, <br />
            <span className="italic font-light text-[#D7AD76]">A Statement of Elegance.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-anim-item text-base sm:text-lg text-white/85 font-light leading-relaxed max-w-lg">
            Discover thoughtfully curated jewellery designed to make every moment special.
          </p>

          {/* CTA Buttons */}
          <div className="hero-anim-item pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="btn-primary px-9 py-4 rounded-full text-xs font-semibold tracking-widest uppercase flex items-center gap-3 bg-white text-[#061507] hover:bg-[#F9F7F2] shadow-xl hover:shadow-2xl transition-all"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/collections"
              className="px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              View Lookbook
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
