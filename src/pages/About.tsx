import React, { useEffect, useRef } from 'react';
import { SEO } from '../components/SEO/SEO';
import { AboutHero } from '../sections/about/AboutHero';
import { CompanyStory } from '../sections/about/CompanyStory';
import { MissionVision } from '../sections/about/MissionVision';
import { WhyChooseUs } from '../sections/about/WhyChooseUs';
import { CTA } from '../sections/home/CTA';
import { animatePageIn } from '../animations/pageTransitions';

export const About: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      animatePageIn(pageRef.current);
    }
  }, []);

  return (
    <div ref={pageRef} className="w-full">
      <SEO
        title="About Us — Engineering Heritage & Standards"
        description="Learn about Forgeon's decade of metallurgical mastery, certified AWS/ASME quality systems, and state-of-the-art metal fabrication facility."
      />
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <WhyChooseUs />
      <CTA />
    </div>
  );
};
