import React from 'react';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-44 md:pb-24 bg-white text-[#204268] border-b border-[#204268]/10 overflow-hidden">
      {/* Background Subtle Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#204268]/5 via-transparent to-transparent pointer-events-none" />

      <Container className="relative z-10">
        {/* Top 2-Column Hero Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-8 sm:mb-12 md:mb-16">
          {/* Left Column: Rounded Service Media Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[540px] h-[300px] sm:h-[360px] md:h-[400px] rounded-[16px] overflow-hidden border border-[#204268]/15 shadow-xl bg-white group">
              <img
                src="/images/service-metal-fabrication.jpg"
                alt="Certified Industrial Welding and Metal Fabrication Services"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#204268]/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Title, Subtitle, and Button */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#204268] leading-tight tracking-tight">
              Certified structural bonding &amp; metal fabrication services
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-[#204268]/80 leading-relaxed max-w-xl font-sans font-normal">
              Delivering custom structural bonding solutions designed for strength, precision &amp; lasting durability.
            </p>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-[#204268]/80 leading-relaxed max-w-xl font-sans font-normal">
              At BHM Steels, we provide comprehensive fabrication services for industrial, commercial, construction, manufacturing, and architectural projects across the UAE. From precision metal cutting and structural welding to CNC machining, blasting, coating, and custom metalwork, our capabilities cover the complete fabrication process.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Button to="/contact" variant="dark-border" icon="arrow-right">
                JOIN US TODAY
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
