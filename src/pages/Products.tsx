import React, { useEffect, useRef } from 'react';
import { SEO } from '../components/SEO/SEO';
import { ProductsHero } from '../sections/products/ProductsHero';
import { ProductGrid } from '../sections/products/ProductGrid';
import { CTA } from '../sections/home/CTA';
import { animatePageIn } from '../animations/pageTransitions';

export const Products: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      animatePageIn(pageRef.current);
    }
  }, []);

  return (
    <div ref={pageRef} className="w-full">
      <SEO
        title="Industrial Products & Fabricated Components"
        description="Browse our high-durability bar grating, custom welded flange beams, ASME pipe spools, pressure vessels, and modular equipment skids."
      />
      <ProductsHero />
      <ProductGrid />
      <CTA />
    </div>
  );
};
