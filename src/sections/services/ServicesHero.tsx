import React from 'react';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-[#030716] border-b border-white/10 overflow-hidden">
      {/* Background Subtle Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#101836]/60 via-[#030716] to-[#030716] pointer-events-none" />

      <Container className="relative z-10">
        {/* Top 2-Column Hero Card Matching Reference Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 md:mb-24">
          {/* Left Column: Rounded Welder Media Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[540px] h-[300px] sm:h-[360px] md:h-[400px] rounded-[16px] overflow-hidden border border-white/20 shadow-2xl bg-[#0c0d14] group">
              <img
                src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
                alt="Certified Industrial Welding and Metal Fabrication"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030716]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Title, Subtitle, and Button */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white leading-tight tracking-tight">
              Certified welding & metal fabrication services
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-[#bfbfbf] leading-relaxed max-w-xl">
              Delivering custom structural welding solutions designed for strength, precision & lasting durability.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Button to="/contact" variant="primary" icon="arrow-right">
                JOIN US TODAY
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Giant Stacked Typography: OUR SERVICES (Solid + Outline) */}
        <div className="text-center select-none pt-4 overflow-hidden">
          <h2
            className="uppercase font-bold text-white tracking-tight"
            style={{
              fontFamily: '"Mona Sans Condensed", "Mona Sans", Arial, sans-serif',
              fontStretch: '75%',
              fontVariationSettings: '"wdth" 75',
              fontWeight: 800,
              fontSize: 'clamp(52px, 11vw, 160px)',
              lineHeight: '0.85',
              letterSpacing: '-0.02em',
            }}
          >
            OUR SERVICES
          </h2>
          <div
            className="uppercase font-bold tracking-tight select-none pointer-events-none text-transparent"
            style={{
              fontFamily: '"Mona Sans Condensed", "Mona Sans", Arial, sans-serif',
              fontStretch: '75%',
              fontVariationSettings: '"wdth" 75',
              fontWeight: 800,
              fontSize: 'clamp(52px, 11vw, 160px)',
              lineHeight: '0.85',
              letterSpacing: '-0.02em',
              WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.4)',
            }}
          >
            OUR SERVICES
          </div>
        </div>
      </Container>
    </section>
  );
};
