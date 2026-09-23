import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export const PageLoader: React.FC = () => {
  const [percent, setPercent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsLoaded(true);
      return;
    }

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 20) + 10;
        return next > 100 ? 100 : next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percent === 100 && loaderRef.current) {
      const ctx = gsap.context(() => {
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
          delay: 0.2,
          onComplete: () => {
            setIsLoaded(true);
          },
        });
      }, loaderRef.current);

      return () => ctx.revert();
    }
  }, [percent]);

  if (isLoaded) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col justify-between p-8 md:p-14 bg-[#030716] text-white"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-[#ffb400] rounded-[3px]" />
          <span className="font-display text-lg tracking-wider font-bold">FORGEON</span>
        </div>
        <span className="text-xs uppercase tracking-widest text-[#bfbfbf]">
          PRECISION INDUSTRIAL SYSTEMS
        </span>
      </div>

      <div className="flex flex-col items-center justify-center text-center my-auto">
        <div className="text-8xl md:text-[140px] font-display font-bold text-white tracking-tight leading-none">
          {percent}%
        </div>
        <div className="w-48 h-[2px] bg-white/10 mt-6 overflow-hidden rounded-full">
          <div
            className="h-full bg-[#ffb400] transition-all duration-150 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-[#bfbfbf] uppercase tracking-wider">
        <span>EST. 2015</span>
        <span>STRUCTURAL INTEGRITY VERIFIED</span>
      </div>
    </div>
  );
};
