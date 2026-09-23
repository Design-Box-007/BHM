import React, { useEffect, useRef } from 'react';
import { SEO } from '../components/SEO/SEO';
import { GalleryHero } from '../sections/gallery/GalleryHero';
import { GalleryGrid } from '../sections/gallery/GalleryGrid';
import { CTA } from '../sections/home/CTA';
import { animatePageIn } from '../animations/pageTransitions';

export const Gallery: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      animatePageIn(pageRef.current);
    }
  }, []);

  return (
    <div ref={pageRef} className="w-full">
      <SEO
        title="Project Showcase & Industrial Gallery"
        description="View our extensive portfolio of high-precision structural steel projects, heavy piping loops, and custom architectural fabrications."
      />
      <GalleryHero />
      <GalleryGrid />
      <CTA />
    </div>
  );
};
