import React from 'react';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';

export const ServicesCapabilities: React.FC = () => {
  const stats = [
    { value: '16+', label: 'Years Experience' },
    { value: '2k+', label: 'Projects Completed' },
    { value: '100+', label: 'Expert Welders' },
  ];

  const clients = [
    { name: 'APEX ENERGY', industry: 'CLIENT 01', logo: '⚡ APEX' },
    { name: 'NEXUS STEEL', industry: 'CLIENT 02', logo: '▲ NEXUS' },
    { name: 'VANGUARD', industry: 'CLIENT 03', logo: '■ VANGUARD' },
    { name: 'STATOIL', industry: 'CLIENT 04', logo: '● STATOIL' },
    { name: 'TITAN IND', industry: 'CLIENT 05', logo: '◆ TITAN' },
    { name: 'AETHEL', industry: 'CLIENT 06', logo: '✦ AETHEL' },
  ];

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-white text-[#204268] border-b border-[#204268]/10">
      <Container>
        {/* Top 2-Column: Content & Stats (Left) + Welder Framework Media (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-10 sm:mb-16 md:mb-24">
          {/* Left Column (7 cols): Headline, Stats, Subtext, Button */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#204268]/70 mb-4 font-sans">
              // ABOUT US
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#204268] leading-tight tracking-tight mb-8">
              Providing custom structural bonding solutions designed for strength, accuracy, and lasting durability worldwide.
            </h2>

            {/* 3 Stats in a Row */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 py-6 border-t border-b border-[#204268]/10 mb-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#204268] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-[#204268]/70 font-medium mt-1 font-sans">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base text-[#204268]/80 leading-relaxed mb-8 max-w-xl font-sans">
              Our precision-driven bonding & fabrication ensures every joint meets the highest industrial standards for safety, performance, and durability.
            </p>

            <div>
              <Button to="/about" variant="dark-border" icon="arrow-right">
                EXPLORE MORE
              </Button>
            </div>
          </div>

          {/* Right Column (5 cols): Welder Image with Rounded Corners */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] rounded-[16px] overflow-hidden border border-[#204268]/15 shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80"
                alt="Fabricating structural steel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Bottom Trust/Client Logos Bar */}
        <div>
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="h-px bg-[#204268]/15 flex-1 max-w-[120px] md:max-w-[200px]" />
            <h3 className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#204268]/70 text-center font-sans">
              Companies That Rely On Our Work
            </h3>
            <div className="h-px bg-[#204268]/15 flex-1 max-w-[120px] md:max-w-[200px]" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group relative flex flex-col items-center justify-center p-5 min-h-[90px] rounded-[10px] border border-[#204268]/15 bg-white hover:border-[#204268]/40 hover:shadow-md transition-all duration-300 select-none cursor-default text-center"
              >
                <span className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-[#204268] transition-colors">
                  {client.logo}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#204268]/70 group-hover:text-[#204268] transition-colors mt-1 font-mono">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
