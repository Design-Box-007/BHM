import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'Tested for durability',
    'Safety-first process',
    'Structural Welding',
    'Precision Metallurgy',
    'ASME & AWS Certified',
    'Custom Metal Fabrication',
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#030716] border-y border-white/10 py-6 select-none">
      <div className="flex w-max animate-marquee">
        {/* Repeating Block 1 */}
        <div className="flex items-center gap-8 md:gap-14 shrink-0 pr-8 md:pr-14">
          {items.map((item, idx) => (
            <React.Fragment key={`set1-${idx}`}>
              <span className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white/20 transition-colors duration-300 hover:text-[#ffb400]">
                {item}
              </span>
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffb400] shrink-0" />
            </React.Fragment>
          ))}
        </div>

        {/* Repeating Block 2 for seamless loop */}
        <div className="flex items-center gap-8 md:gap-14 shrink-0 pr-8 md:pr-14" aria-hidden="true">
          {items.map((item, idx) => (
            <React.Fragment key={`set2-${idx}`}>
              <span className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white/20 transition-colors duration-300 hover:text-[#ffb400]">
                {item}
              </span>
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffb400] shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
