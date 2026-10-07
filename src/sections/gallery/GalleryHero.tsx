import React from 'react';
import { Container } from '../../components/Container/Container';

export const GalleryHero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-44 md:pb-24 bg-[#204268] border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-[#204268] to-[#204268] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/10 text-white text-xs font-semibold uppercase tracking-widest mb-6 font-sans">
            // Structural & Industrial Portfolio
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-white leading-tight">
            Hallmark Bonding & Engineering Projects
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl font-normal font-sans">
            Explore a curated selection of complex metal fabrication, high-pressure process bonding, seismic steel framing, and custom architectural assemblies.
          </p>
        </div>
      </Container>
    </section>
  );
};
