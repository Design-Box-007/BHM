import React from 'react';
import { Container } from '../../components/Container/Container';

export const TrustSection: React.FC = () => {
  const clients = [
    { name: 'APEX ENERGY', industry: 'CLIENT 01', logo: '⚡ APEX' },
    { name: 'NEXUS STEEL', industry: 'CLIENT 02', logo: '▲ NEXUS' },
    { name: 'VANGUARD', industry: 'CLIENT 03', logo: '■ VANGUARD' },
    { name: 'STATOIL', industry: 'CLIENT 04', logo: '● STATOIL' },
    { name: 'TITAN IND', industry: 'CLIENT 05', logo: '◆ TITAN' },
    { name: 'AETHEL', industry: 'CLIENT 06', logo: '✦ AETHEL' },
  ];

  return (
    <section className="py-20 bg-white border-b border-black/10">
      <Container>
        {/* Title between 2 subtle lines */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="h-px bg-black/15 flex-1 max-w-[120px] md:max-w-[200px]" />
          <h2 className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#686e86] text-center">
            Companies That Trust Our Welds
          </h2>
          <div className="h-px bg-black/15 flex-1 max-w-[120px] md:max-w-[200px]" />
        </div>

        {/* 6 Logo Cards Grid on White */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative flex flex-col items-center justify-center p-6 min-h-[110px] rounded-[10px] border border-black/10 bg-[#fbfbfe] hover:bg-white hover:border-black/30 hover:shadow-md transition-all duration-300 select-none cursor-default text-center"
            >
              <span className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-[#030716]/75 group-hover:text-[#030716] transition-colors">
                {client.logo}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#686e86] group-hover:text-[#ffb400] transition-colors mt-1 font-mono">
                {client.industry}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
