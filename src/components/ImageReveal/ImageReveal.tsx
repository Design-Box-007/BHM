import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clsx } from 'clsx';

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: string;
  overlay?: boolean;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspectRatio = 'aspect-[16/10]',
  overlay = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imageRef.current;
    if (!container || !img) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(container, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' });
      gsap.set(img, { scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        container,
        {
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.1,
          ease: 'power3.inOut',
        }
      ).fromTo(
        img,
        {
          scale: 1.25,
        },
        {
          scale: 1,
          duration: 1.4,
          ease: 'power3.out',
        },
        0
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx(
        'group relative overflow-hidden rounded-[10px] bg-[#0c0d14]',
        aspectRatio,
        className
      )}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        loading="lazy"
        className={clsx(
          'w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105',
          imgClassName
        )}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#030716]/90 via-[#030716]/30 to-transparent pointer-events-none" />
      )}
    </div>
  );
};
