import React from 'react';
import { Container } from '../../components/Container/Container';

export const TrustSection: React.FC = () => {
  const clients = [
    { name: 'Industrial', logo: 'Industrial' },
    { name: 'Construction', logo: 'Construction' },
    { name: 'Oil & Gas', logo: 'Oil & Gas' },
    { name: 'Manufacturing', logo: 'Manufacturing' },
    { name: 'Commercial', logo: 'Commercial' },
    { name: 'Architectural', logo: 'Architectural' },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white border-b border-[#204268]/10">
      <Container>
        {/* Title between 2 subtle lines */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-10 md:mb-12">
          <div className="h-px bg-[#204268]/15 flex-1 max-w-[120px] md:max-w-[200px]" />
          <h2 className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#204268]/70 text-center font-sans">
            Industries that trust our Welds
          </h2>
          <div className="h-px bg-[#204268]/15 flex-1 max-w-[120px] md:max-w-[200px]" />
        </div>

        {/* 6 Logo Cards Grid on White */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative flex flex-col items-center justify-center p-6 min-h-[110px] rounded-[10px] border border-[#204268]/15 bg-white hover:border-[#204268]/40 hover:shadow-md transition-all duration-300 select-none cursor-default text-center"
            >
              <span className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-[#204268] transition-colors">
                {client.logo}
              </span>
              {/* <span className="text-[10px] uppercase tracking-wider text-[#204268]/70 group-hover:text-[#204268] transition-colors mt-1 font-mono">
                {client.industry}
              </span> */}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
