import React, { useEffect, useRef } from 'react';
import { SEO } from '../components/SEO/SEO';
import { ServicesHero } from '../sections/services/ServicesHero';
import { ServicesCapabilities } from '../sections/services/ServicesCapabilities';
import { ServicesPreview } from '../sections/home/ServicesPreview';
import { Testimonials } from '../sections/home/Testimonials';
import { ServicesCTA } from '../sections/services/ServicesCTA';
import { animatePageIn } from '../animations/pageTransitions';

export const Services: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      animatePageIn(pageRef.current);
    }
  }, []);

  return (
    <div ref={pageRef} className="w-full">
      <SEO
        title="Industrial Welding & Metal Fabrication Services"
        description="Certified structural welding, CNC metal fabrication, high-pressure pipe welding, and custom engineering solutions delivered with precision and reliability."
      />
      {/* 1. Services Hero with Top 2-Column Banner & Giant Watermark Typography */}
      <ServicesHero />

      {/* 2. Capabilities & About Summary with Stats and Partner Logos */}
      <ServicesCapabilities />

      {/* 3. Interactive End-to-End Services Section */}
      <ServicesPreview />

      {/* 4. Client Feedback Testimonials Cards */}
      <Testimonials />

      {/* 5. CTA Section with Contact Details & Craftsmanship Gallery */}
      <ServicesCTA />
    </div>
  );
};
