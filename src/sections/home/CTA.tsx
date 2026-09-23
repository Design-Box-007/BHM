import React from 'react';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import { ImageReveal } from '../../components/ImageReveal/ImageReveal';

export const CTA: React.FC = () => {
  return (
    <section className="pt-24 pb-12 bg-white text-[#030716] border-b border-black/10 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#686e86]">
              // Call to action
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#030716] leading-tight">
              We build precision welding solutions designed to perform under pressure.
            </h2>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Senior Welding Engineer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-black/10 shadow-xs"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-[#030716]">
                    Alex Johnson
                  </span>
                  <span className="text-xs text-[#686e86]">
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
              src="https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?auto=format&fit=crop&w=1000&q=80"
              alt="Heavy structural steel construction"
              aspectRatio="aspect-[16/10]"
              className="rounded-[12px] shadow-lg"
            />
          </div>
        </div>

        {/* Giant Watermark Outline Text at bottom of CTA */}
        <div className="text-center select-none opacity-10 pointer-events-none mt-12 overflow-hidden">
          <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-display font-black uppercase text-[#030716] tracking-tighter whitespace-nowrap block">
            FORGEON SUPPORT?
          </span>
        </div>
      </Container>
    </section>
  );
};
