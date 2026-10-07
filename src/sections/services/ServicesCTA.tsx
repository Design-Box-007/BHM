import React from 'react';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import { siteConfig } from '../../data/site';

export const ServicesCTA: React.FC = () => {
  const galleryThumbnails = [
    {
      src: '/images/process-01.jpg',
      alt: 'Project consultation and metal cutting',
    },
    {
      src: '/images/service-cnc-machining.jpg',
      alt: 'Precision CNC Machining',
    },
    {
      src: '/images/service-metal-fabrication.jpg',
      alt: 'Structural steel fabrication and welding',
    },
    {
      src: '/images/service-interior-decor.jpg',
      alt: 'Custom architectural metalwork and interiors',
    },
    {
      src: '/images/service-blasting-coating.jpg',
      alt: 'Industrial blasting and protective coating',
    },
  ];

  return (
    <section className="pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-24 md:pb-14 bg-white text-[#204268] border-b border-[#204268]/10 overflow-hidden">
      <Container>
        {/* Top Header & Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-8 sm:mb-12 md:mb-16">
          {/* Left Column (7 cols): Headline + CTA Button */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#204268] leading-tight tracking-tight mb-8 max-w-xl">
              Delivering precision structural bonding solutions with quality and reliable results
            </h2>

            <div>
              <Button to="/contact" variant="dark-border" icon="arrow-right">
                GET IN TOUCH
              </Button>
            </div>
          </div>

          {/* Right Column (5 cols): Phone, Email, Description */}
          <div className="lg:col-span-5 flex flex-col space-y-4 text-left">
            <div className="space-y-1">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="block text-base font-semibold text-[#204268] hover:opacity-80 transition-opacity font-sans"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-sm text-[#204268]/70 hover:text-[#204268] transition-colors font-sans"
              >
                {siteConfig.email}
              </a>
            </div>

            <p className="text-xs sm:text-sm text-[#204268]/80 leading-relaxed pt-2 font-sans">
              Every project is executed to meet the highest safety and quality standards. Our experienced team is ready to assist with your custom structural bonding and fabrication needs.
            </p>
          </div>
        </div>

        {/* Bottom Row: 5 Image Thumbnails Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {galleryThumbnails.map((thumb, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] rounded-[10px] overflow-hidden border border-[#204268]/15 shadow-sm group bg-[#204268]"
            >
              <img
                src={thumb.src}
                alt={thumb.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#204268]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
