import React, { useEffect, useRef } from 'react';
import { SEO } from '../components/SEO/SEO';
import { Hero } from '../sections/home/Hero';
import { TrustSection } from '../sections/home/TrustSection';
import { AboutPreview } from '../sections/home/AboutPreview';
import { ServicesPreview } from '../sections/home/ServicesPreview';
import { GalleryPreview } from '../sections/home/GalleryPreview';
import { Testimonials } from '../sections/home/Testimonials';
import { CTA } from '../sections/home/CTA';
import { FaqsSection } from '../sections/home/FaqsSection';
import { animatePageIn } from '../animations/pageTransitions';

export const Home: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      animatePageIn(pageRef.current);
    }
  }, []);

  return (
    <div ref={pageRef} className="w-full">
      <SEO
        title="Precision Structural Bonding & Metal Fabrication Solutions"
        description="BHM delivers high-performance structural bonding, precision welding, and custom metal fabrication engineered for extreme durability, safety, and industrial excellence."
      />
      {/* 1. Hero Section with Watermark Marquee & Rotated Card */}
      <Hero />

      {/* 2. Trust Logos on White Background */}
      <TrustSection />

      {/* 3. About Section on White Background */}
      <AboutPreview />

      {/* 4. End-to-End Services on Warm Cream Background */}
      <ServicesPreview />

      {/* 5. Welding Projects on White Background */}
      <GalleryPreview />

      {/* 6. Client Feedback on Dark Background */}
      <Testimonials />

      {/* 7. CTA & Support on White Background */}
      <CTA />

      {/* 8. Expert Welding Articles on Warm Cream Background */}
      <FaqsSection />
    </div>
  );
};
