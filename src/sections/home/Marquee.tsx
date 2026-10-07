import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'Tested for durability',
    'Safety-first process',
    'Structural Bonding',
    'Precision Metallurgy',
    'ASME & AWS Certified',
    'Custom Metal Fabrication',
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#204268] border-y border-white/15 py-6 select-none">
      <div className="flex w-max animate-marquee">
        {/* Repeating Block 1 */}
        <div className="flex items-center gap-8 md:gap-14 shrink-0 pr-8 md:pr-14">
          {items.map((item, idx) => (
            <React.Fragment key={`set1-${idx}`}>
              <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-white/40 transition-colors duration-300 hover:text-white">
                {item}
              </span>
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/50 shrink-0" />
            </React.Fragment>
          ))}
        </div>

        {/* Repeating Block 2 for seamless loop */}
        <div className="flex items-center gap-8 md:gap-14 shrink-0 pr-8 md:pr-14" aria-hidden="true">
          {items.map((item, idx) => (
            <React.Fragment key={`set2-${idx}`}>
              <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-white/40 transition-colors duration-300 hover:text-white">
                {item}
              </span>
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/50 shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
