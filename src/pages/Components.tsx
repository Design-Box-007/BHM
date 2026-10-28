import React, { useEffect, useRef } from 'react';
import { SEO } from '../components/SEO/SEO';
import { ComponentsHero } from '../sections/components/ComponentsHero';
import { ComponentsList } from '../sections/components/ComponentsList';
import { CTA } from '../sections/home/CTA';
import { animatePageIn } from '../animations/pageTransitions';

export const Components: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      animatePageIn(pageRef.current);
    }
  }, []);

  return (
    <div ref={pageRef} className="w-full">
      <SEO
        title="Industrial Accessories & Machines | BHMI"
        description="Explore precision plate cutting, plate bending, and CNC punching machinery alongside high-durability steel accessories, brackets, frames, and fittings."
      />
      <ComponentsHero />
      <ComponentsList />
      <CTA />
    </div>
  );
};

export default Components;
