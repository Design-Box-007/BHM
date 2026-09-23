import React from 'react';
import { Container } from '../../components/Container/Container';

export const ProductsHero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 bg-[#030716] border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#101836]/50 via-[#030716] to-[#030716] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ffb400]/30 bg-[#ffb400]/10 text-[#ffb400] text-xs font-semibold uppercase tracking-widest mb-6">
            // Fabricated Components & Systems
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
            Industrial Fabricated Products Catalog
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[#bfbfbf] leading-relaxed max-w-2xl font-normal">
            Pre-engineered and custom fabricated steel products built for high-load durability, corrosion resistance, and complete traceability.
          </p>
        </div>
      </Container>
    </section>
  );
};
