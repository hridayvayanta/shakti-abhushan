import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { assetUrl } from '../utils/assets';

export const CinematicLogoLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(() => {
    // Show only on the first visit of a browsing session
    try {
      const hasSeen = sessionStorage.getItem('sa_intro_completed');
      if (hasSeen === 'true') return false;
      // Honor user's reduced-motion preference
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return false;
      }
      return true;
    } catch {
      return false;
    }
  });

  const overlayRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const logoImgRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const lightLineRef = useRef<HTMLDivElement>(null);
  const animationRanRef = useRef(false);

  useEffect(() => {
    if (!isVisible) return;

    // Prevent background scrolling and interaction conflicts during loader
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Locate the permanent header logo
    const targetHeaderLogo = document.getElementById('main-header-logo') as HTMLImageElement | null;
    if (targetHeaderLogo) {
      // Keep its exact layout dimensions in the header flow, but hide visibility
      targetHeaderLogo.style.visibility = 'hidden';
      targetHeaderLogo.style.opacity = '0';
    }

    const runTransition = () => {
      if (animationRanRef.current) return;
      animationRanRef.current = true;

      const overlay = overlayRef.current;
      const logoWrapper = logoWrapperRef.current;
      const logoImg = logoImgRef.current;
      const glow = glowRef.current;
      const lightLine = lightLineRef.current;
      const headerLogo = document.getElementById('main-header-logo') as HTMLImageElement | null;

      if (!overlay || !logoWrapper || !logoImg || !headerLogo) {
        if (headerLogo) {
          headerLogo.style.visibility = 'visible';
          headerLogo.style.opacity = '1';
        }
        document.body.style.overflow = previousOverflow || 'unset';
        setIsVisible(false);
        try {
          sessionStorage.setItem('sa_intro_completed', 'true');
        } catch {}
        return;
      }

      // Reset any transforms to ensure 100% accurate measurement of natural center
      gsap.set(logoWrapper, { clearProps: 'all' });
      gsap.set(logoImg, { clearProps: 'all' });

      // Measure target header logo and centered loader logo
      const targetRect = headerLogo.getBoundingClientRect();
      const currentRect = logoImg.getBoundingClientRect();

      const currentCenterX = currentRect.left + currentRect.width / 2;
      const currentCenterY = currentRect.top + currentRect.height / 2;
      const targetCenterX = targetRect.left + targetRect.width / 2;
      const targetCenterY = targetRect.top + targetRect.height / 2;

      const deltaX = targetCenterX - currentCenterX;
      const deltaY = targetCenterY - currentCenterY;
      const targetScale = targetRect.height / currentRect.height;

      // Set initial state for entrance animation
      gsap.set(logoWrapper, { opacity: 0, scale: 0.93, y: 12, x: 0 });
      gsap.set(glow, { opacity: 0, scale: 0.85 });
      gsap.set(lightLine, { scaleX: 0, opacity: 0 });

      // Single continuous master timeline
      const tl = gsap.timeline({
        onComplete: () => {
          // Seamless hand-off: Reveal permanent header logo at exact destination
          headerLogo.style.visibility = 'visible';
          headerLogo.style.opacity = '1';
          document.body.style.overflow = previousOverflow || 'unset';
          setIsVisible(false);
          try {
            sessionStorage.setItem('sa_intro_completed', 'true');
          } catch {}
          window.dispatchEvent(new CustomEvent('sa-intro-complete'));
        }
      });

      if (typeof window !== 'undefined') {
        (window as any).__sa_intro_tl = tl;
      }

      // Phase 1: Entrance (~0.5s)
      tl.to(logoWrapper, {
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0,
        duration: 0.55,
        ease: 'power2.out',
      })
      .to(
        glow,
        {
          opacity: 1,
          scale: 1.15,
          duration: 0.65,
          ease: 'power2.out',
        },
        '-=0.45'
      )
      .to(
        lightLine,
        {
          scaleX: 1,
          opacity: 0.85,
          duration: 0.45,
          ease: 'power2.out',
        },
        '-=0.35'
      )
      // Phase 2: Elegant Hold (~0.2s)
      .to({}, { duration: 0.22 })
      // Phase 3: Seamless Shared-Element Travel into Header (~0.85s)
      .to(
        logoWrapper,
        {
          x: deltaX,
          y: deltaY,
          scale: targetScale,
          duration: 0.85,
          ease: 'power3.inOut',
          transformOrigin: '50% 50%',
        },
        'travel'
      )
      .to(
        [glow, lightLine],
        {
          opacity: 0,
          duration: 0.25,
          ease: 'power2.in',
        },
        'travel'
      )
      // Reveal the website underneath as the green loading overlay transitions away
      .to(
        overlay,
        {
          opacity: 0,
          duration: 0.65,
          ease: 'power2.inOut',
          onStart: () => {
            window.dispatchEvent(new CustomEvent('sa-intro-reveal'));
          }
        },
        'travel+=0.2'
      )
      // Micro-synchronized hand-off at travel completion
      .set(headerLogo, { visibility: 'visible', opacity: 1 }, 'travel+=0.85')
      .set(logoWrapper, { opacity: 0 }, 'travel+=0.85');
    };

    // Ensure image and DOM are ready before measuring
    const logoImg = logoImgRef.current;
    if (logoImg && logoImg.complete) {
      requestAnimationFrame(() => {
        runTransition();
      });
    } else if (logoImg) {
      logoImg.onload = () => {
        requestAnimationFrame(() => {
          runTransition();
        });
      };
      const safetyTimer = setTimeout(() => {
        runTransition();
      }, 1500);
      return () => clearTimeout(safetyTimer);
    } else {
      runTransition();
    }

    return () => {
      document.body.style.overflow = previousOverflow || 'unset';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      role="status"
      aria-label="Loading Shakti Abhushan Atelier"
      className="fixed inset-0 z-50 bg-[#061507] flex items-center justify-center pointer-events-auto select-none overflow-hidden"
    >
      {/* Delicate Antique Gold Ambient Glow Bloom */}
      <div
        ref={glowRef}
        className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(195, 156, 105, 0.22) 0%, rgba(215, 173, 118, 0.08) 45%, transparent 70%)',
        }}
      />

      {/* Centered Shared-Element Logo Container */}
      <div
        ref={logoWrapperRef}
        className="relative z-10 flex flex-col items-center justify-center will-change-transform"
      >
        {/* Exact Official Shakti Abhushan Logo (Single Source of Truth) */}
        <img
          ref={logoImgRef}
          src={assetUrl('/brand/shakti-abhushan-logo.png')}
          alt="SHAKTI ABHUSHAN — शक्ति आभूषण"
          className="h-32 sm:h-44 md:h-52 w-auto object-contain filter drop-shadow-[0_12px_36px_rgba(0,0,0,0.85)] pointer-events-none"
        />

        {/* Delicate Antique Gold Light Line Reveal Accent */}
        <div
          ref={lightLineRef}
          className="w-24 sm:w-36 h-[1px] bg-gradient-to-r from-transparent via-[#D7AD76] to-transparent mt-5 pointer-events-none origin-center"
        />
      </div>
    </div>
  );
};
