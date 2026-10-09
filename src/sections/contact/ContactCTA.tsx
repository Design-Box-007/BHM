import React from 'react';
import { Container } from '../../components/Container/Container';
import { siteConfig } from '../../data/site';
import { Phone, Mail } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section className="pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-24 md:pb-14 bg-white text-[#204268] border-b border-[#204268]/10 overflow-hidden relative font-sans">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8 sm:mb-12 md:mb-16">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#204268]/60 mb-3 block">
                // Strong bonds start here
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#204268] leading-tight max-w-xl">
                We build reliable structural bonding solutions designed to perform under pressure
              </h2>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-6">
              {/* Contact Phone and Email Links without user avatar icon */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#204268]/10 text-[#204268] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#204268]/60">Call Us</span>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="text-xs sm:text-sm font-bold text-[#204268] hover:text-[#204268]/70 transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#204268]/10 text-[#204268] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#204268]/60">Email Us</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-xs sm:text-sm font-bold text-[#204268] hover:text-[#204268]/70 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Book a call button */}
              <div>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#204268] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#204268]/90 transition-all duration-300 shadow-md"
                >
                  + BOOK A CALL +
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Service Image from images folder (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-[16px] overflow-hidden shadow-xl border border-[#204268]/10 group">
              <img
                src="/images/service-metal-fabrication.jpg"
                alt="BHMI Structural Steel & Metal Fabrication Services"
                className="w-full h-64 sm:h-72 md:h-80 object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Giant Watermark Outline Text at bottom */}
        <div className="text-center select-none opacity-5 pointer-events-none mt-12 overflow-hidden">
          <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-display font-black uppercase text-[#204268] tracking-tighter whitespace-nowrap block">
            BHMI SUPPORT?
          </span>
        </div>
      </Container>
    </section>
  );
};
