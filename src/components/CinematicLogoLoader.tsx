import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { assetUrl } from '../utils/assets';

// In-memory flag: ensures the loader plays on fresh page load or browser reload,
// but does NOT replay on subsequent route changes (e.g. clicking /shop, /product/1, /story, etc.)
export let hasIntroPlayedInSpaSession = false;

export const CinematicLogoLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(() => {
    // Clean out legacy sessionStorage blocker so user's current tab isn't locked out
    try {
      sessionStorage.removeItem('sa_intro_completed');
    } catch {}

    // Only skip if already played in the current SPA session (e.g. internal route changes)
    return !hasIntroPlayedInSpaSession;
  });

  const overlayRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const logoImgRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const lightLineRef = useRef<HTMLDivElement>(null);
  const animationRanRef = useRef(false);

  useEffect(() => {
    if (!isVisible) return;

    // Lock body scrolling during transition
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Locate the permanent header logo
    const targetHeaderLogo = document.getElementById('main-header-logo') as HTMLImageElement | null;
    if (targetHeaderLogo) {
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
        hasIntroPlayedInSpaSession = true;
        window.dispatchEvent(new CustomEvent('sa-intro-reveal'));
        return;
      }

      // Check if user has reduced-motion enabled
      const prefersReducedMotion =
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        // Reduced-motion: Gentle, dignified crossfade without rapid translation
        const tlReduced = gsap.timeline({
          onComplete: () => {
            headerLogo.style.visibility = 'visible';
            headerLogo.style.opacity = '1';
            document.body.style.overflow = previousOverflow || 'unset';
            setIsVisible(false);
            hasIntroPlayedInSpaSession = true;
            window.dispatchEvent(new CustomEvent('sa-intro-complete'));
          },
        });

        tlReduced
          .to(logoWrapper, { opacity: 1, duration: 0.5, ease: 'power2.out' })
          .to({}, { duration: 0.3 })
          .to(overlay, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onStart: () => {
              headerLogo.style.visibility = 'visible';
              headerLogo.style.opacity = '1';
              window.dispatchEvent(new CustomEvent('sa-intro-reveal'));
            },
          });
        return;
      }

      // Ensure transforms are cleared for initial measurement
      gsap.set(logoWrapper, { clearProps: 'all' });
      gsap.set(logoImg, { clearProps: 'all' });

      // Measure coordinates dynamically
      const targetRect = headerLogo.getBoundingClientRect();
      const currentRect = logoImg.getBoundingClientRect();

      const currentCenterX = currentRect.left + currentRect.width / 2;
      const currentCenterY = currentRect.top + currentRect.height / 2;
      const targetCenterX = targetRect.left + targetRect.width / 2;
      const targetCenterY = targetRect.top + targetRect.height / 2;

      const deltaX = targetCenterX - currentCenterX;
      const deltaY = targetCenterY - currentCenterY;
      const targetScale =
        targetRect.height && currentRect.height
          ? targetRect.height / currentRect.height
          : 0.45;

      // Set initial states for entrance
      gsap.set(logoWrapper, { opacity: 0, scale: 0.90, y: 16, x: 0 });
      gsap.set(glow, { opacity: 0, scale: 0.85 });
      gsap.set(lightLine, { scaleX: 0, opacity: 0 });

      // Master continuous timeline
      const tl = gsap.timeline({
        onComplete: () => {
          // Seamless micro-handoff: Reveal permanent header logo at exact destination
          headerLogo.style.visibility = 'visible';
          headerLogo.style.opacity = '1';
          document.body.style.overflow = previousOverflow || 'unset';
          setIsVisible(false);
          hasIntroPlayedInSpaSession = true;
          window.dispatchEvent(new CustomEvent('sa-intro-complete'));
        },
      });

      if (typeof window !== 'undefined') {
        (window as any).__sa_intro_tl = tl;
      }

      // Phase 1: Entrance (~0.65s)
      tl.to(logoWrapper, {
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0,
        duration: 0.65,
        ease: 'power2.out',
      })
      .to(
        glow,
        {
          opacity: 1,
          scale: 1.15,
          duration: 0.75,
          ease: 'power2.out',
        },
        '-=0.55'
      )
      .to(
        lightLine,
        {
          scaleX: 1,
          opacity: 0.85,
          duration: 0.55,
          ease: 'power2.out',
        },
        '-=0.45'
      )
      // Phase 2: Stately Luxury Hold (~0.35s)
      .to({}, { duration: 0.35 })
      // Phase 3: Seamless Shared-Element Travel into Header (~0.90s)
      .to(
        logoWrapper,
        {
          x: deltaX,
          y: deltaY,
          scale: targetScale,
          duration: 0.90,
          ease: 'power3.inOut',
          transformOrigin: '50% 50%',
        },
        'travel'
      )
      .to(
        [glow, lightLine],
        {
          opacity: 0,
          duration: 0.30,
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
          },
        },
        'travel+=0.25'
      )
      // Micro-synchronized hand-off at travel completion
      .set(headerLogo, { visibility: 'visible', opacity: 1 }, 'travel+=0.90')
      .set(logoWrapper, { opacity: 0 }, 'travel+=0.90');
    };

    // Ensure images are fully decoded and ready before layout calculations
    const logoImg = logoImgRef.current;
    const headerLogo = targetHeaderLogo;

    const prepareAndRun = async () => {
      try {
        if (logoImg && !logoImg.complete && logoImg.decode) {
          await logoImg.decode();
        }
        if (headerLogo && !headerLogo.complete && headerLogo.decode) {
          await headerLogo.decode();
        }
      } catch {
        // Continue even if decode rejected
      }
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          runTransition();
        });
      });
    };

    prepareAndRun();

    // Safety fallback timer if decode/image hangs
    const safetyTimer = setTimeout(() => {
      runTransition();
    }, 2000);

    return () => {
      clearTimeout(safetyTimer);
      document.body.style.overflow = previousOverflow || 'unset';
    };
  }, [isVisible]);

  // Support manual replay for review and testing
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).replayShaktiIntro = () => {
        hasIntroPlayedInSpaSession = false;
        animationRanRef.current = false;
        setIsVisible(true);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      role="status"
      aria-label="Loading Shakti Abhushan Atelier"
      className="fixed inset-0 z-[99999] bg-[#061507] flex items-center justify-center pointer-events-auto select-none overflow-hidden"
    >
      {/* Delicate Antique Gold Ambient Glow Bloom */}
      <div
        ref={glowRef}
        className="absolute w-80 h-80 sm:w-[460px] sm:h-[460px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(195, 156, 105, 0.28) 0%, rgba(215, 173, 118, 0.10) 45%, transparent 70%)',
        }}
      />

      {/* Centered Shared-Element Logo Container */}
      <div
        ref={logoWrapperRef}
        className="relative z-10 flex flex-col items-center justify-center will-change-transform"
        style={{ opacity: 0 }}
      >
        {/* Exact Official Shakti Abhushan Logo (Single Source of Truth) */}
        <img
          ref={logoImgRef}
          src={assetUrl('/brand/shakti-abhushan-logo.png')}
          alt="Shakti Abhushan"
          className="h-32 sm:h-44 md:h-52 w-auto object-contain filter drop-shadow-[0_12px_36px_rgba(0,0,0,0.85)] pointer-events-none"
        />

        {/* Delicate Antique Gold Light Line Reveal Accent */}
        <div
          ref={lightLineRef}
          className="w-28 sm:w-40 h-[1px] bg-gradient-to-r from-transparent via-[#D7AD76] to-transparent mt-5 pointer-events-none origin-center"
        />
      </div>
    </div>
  );
};
