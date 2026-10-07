import React from 'react';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import { ImageReveal } from '../../components/ImageReveal/ImageReveal';

export const CTA: React.FC = () => {
  return (
    <section className="pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-24 md:pb-12 bg-white text-[#204268] border-b border-[#204268]/10 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8 sm:mb-12 md:mb-16">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#204268]/70 font-sans">
              // Call to action
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#204268] leading-tight">
              We build precision structural bonding solutions designed to perform under pressure.
            </h2>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Senior Bonding Engineer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#204268]/20 shadow-xs"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-[#204268] font-display">
                    Alex Johnson
                  </span>
                  <span className="text-xs text-[#204268]/70 font-sans">
                    Lead Engineer & Estimator
                  </span>
                </div>
              </div>

              <Button to="/contact" variant="secondary" icon="arrow-right">
                Contact us
              </Button>
            </div>
          </div>

          {/* Right Column: Industrial Site Photo (5 cols) */}
          <div className="lg:col-span-5">
            <ImageReveal
              src="images/process-01.jpg"
              alt="Heavy structural steel construction"
              aspectRatio="aspect-[16/10]"
              className="rounded-[12px] shadow-lg"
            />
          </div>
        </div>

        {/* Giant Watermark Outline Text at bottom of CTA */}
        <div className="text-center select-none opacity-10 pointer-events-none mt-12 overflow-hidden">
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase text-[#204268] tracking-tight whitespace-nowrap block">
            BHM BONDING PARTNER
          </span>
        </div>
      </Container>
    </section>
  );
};
