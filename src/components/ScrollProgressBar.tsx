import React, { useState, useEffect } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page reading progress"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-black/10"
    >
      <div
        className="h-full bg-gradient-to-r from-[#C39C69] via-[#E2C38E] to-[#C39C69] transition-all duration-150 ease-out shadow-[0_0_8px_rgba(215,173,118,0.7)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
