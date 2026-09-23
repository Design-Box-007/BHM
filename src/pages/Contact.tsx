import React, { useEffect, useRef } from 'react';
import { SEO } from '../components/SEO/SEO';
import { ContactHero } from '../sections/contact/ContactHero';
import { ContactFAQ } from '../sections/contact/ContactFAQ';
import { ContactCTA } from '../sections/contact/ContactCTA';
import { animatePageIn } from '../animations/pageTransitions';

export const Contact: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      animatePageIn(pageRef.current);
    }
  }, []);

  return (
    <div ref={pageRef} className="w-full">
      <SEO
        title="Get In Touch - Contact & Fabrication Inquiries"
        description="Get in touch with our team for reliable welding and fabrication solutions. Whether you have a project inquiry or require immediate technical support."
      />
      <ContactHero />
      <ContactFAQ />
      <ContactCTA />
    </div>
  );
};
