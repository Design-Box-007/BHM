import React, { useEffect, useRef } from 'react';
import { SEO } from '../components/SEO/SEO';
import { AboutHero } from '../sections/about/AboutHero';
import { CompanyStory } from '../sections/about/CompanyStory';
import { MissionVision } from '../sections/about/MissionVision';
import { WhyChooseUs } from '../sections/about/WhyChooseUs';
import { AboutFAQ } from '../sections/about/AboutFAQ';
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
        description="Learn about BHMI's decade of engineering mastery, certified quality standards, and state-of-the-art structural bonding and fabrication facility."
      />
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <WhyChooseUs />
      <AboutFAQ />
    </div>
  );
};
