import React from 'react';
import { Container } from '../../components/Container/Container';
import { siteConfig } from '../../data/site';
import { Phone } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section className="pt-24 pb-12 bg-[#f8f6f0] text-[#030716] border-b border-black/10 overflow-hidden relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#686e86] mb-3 block">
                // Strong welds start here
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#030716] leading-tight max-w-xl">
                We build reliable welding solutions designed to perform under pressure
              </h2>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-6">
              {/* Avatar + Contact Phone/Email */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Customer Support Representative"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#030716] text-white flex items-center justify-center border border-white">
                    <Phone className="w-2.5 h-2.5" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="text-xs font-bold text-[#030716] hover:text-[#ffb400] transition-colors"
                  >
                    01+ 123 456 7890
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-xs text-[#686e86] hover:text-[#030716] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Book a call button */}
              <div>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#030716] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#ffb400] hover:text-[#030716] transition-all duration-300"
                >
                  + BOOK A CALL +
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Industrial Welder/Cutter Photo (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-[16px] overflow-hidden shadow-xl border border-black/10">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                alt="Welding and metal fabrication worker"
                className="w-full h-64 sm:h-72 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Giant Watermark Outline Text at bottom */}
        <div className="text-center select-none opacity-10 pointer-events-none mt-12 overflow-hidden">
          <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-display font-black uppercase text-[#030716] tracking-tighter whitespace-nowrap block">
            FORGEON SUPPORT?
          </span>
        </div>
      </Container>
    </section>
  );
};
