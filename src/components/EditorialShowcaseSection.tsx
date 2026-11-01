import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';
import { assetUrl } from '../utils/assets';

gsap.registerPlugin(ScrollTrigger);

export const EditorialShowcaseSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !frameRef.current || !imageRef.current) return;

      // Animate frame expanding from inset width to full width
      gsap.fromTo(
        frameRef.current,
        {
          borderRadius: '24px',
          width: '90%',
          scale: 0.96,
        },
        {
          borderRadius: '0px',
          width: '100%',
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'center center',
            scrub: 1,
          },
        }
      );

      // Subtle image zoom within frame
      gsap.fromTo(
        imageRef.current,
        { scale: 1.15 },
        {
          scale: 1.0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      );

      // Headline reveal
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 60%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-24 bg-white overflow-hidden flex flex-col items-center"
    >
      <div
        ref={frameRef}
        className="relative mx-auto h-[480px] sm:h-[580px] lg:h-[680px] overflow-hidden shadow-2xl transition-all"
        style={{ width: '92%' }}
      >
        {/* Lifestyle Background Photo */}
        <img
          ref={imageRef}
          src={assetUrl('/products/model-heritage.jpg')}
          alt="Shakti Abhushan Lifestyle Editorial"
          className="w-full h-full object-cover object-center"
        />

        {/* Subtle Darkening Gradient for Headline Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

        {/* Overlaid Editorial Content */}
        <div
          ref={textRef}
          className="absolute inset-0 p-8 sm:p-14 lg:p-20 flex flex-col justify-end max-w-4xl"
        >
          <div className="space-y-4 text-white">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D7AD76] font-mono block">
              Editorial Campaign • आभूषण कला
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Beauty in Every Detail.
            </h2>

            <p className="text-sm sm:text-base text-white/80 max-w-xl font-light leading-relaxed">
              Every brass piece is hammered and finished by hand, retaining the warmth, weight, and presence of authentic Indian royal adornment.
            </p>

            <div className="pt-2">
              <Link
                to="/shop"
                className="btn-primary inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs tracking-widest uppercase font-semibold border border-[#C39C69]"
              >
                <span>View Complete Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
