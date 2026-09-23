import React from 'react';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import { siteConfig } from '../../data/site';

export const ServicesCTA: React.FC = () => {
  const galleryThumbnails = [
    {
      src: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
      alt: 'Industrial welder with yellow hardhat sparking',
    },
    {
      src: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
      alt: 'Structural steel fabrication and torch cutting',
    },
    {
      src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80',
      alt: 'Precision metal welding sparks',
    },
    {
      src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
      alt: 'Overhead arc welding craftsmanship',
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      alt: 'Heavy duty welding seam and joint',
    },
  ];

  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-white text-[#030716] border-b border-black/10 overflow-hidden">
      <Container>
        {/* Top Header & Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          {/* Left Column (7 cols): Headline + CTA Button */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#030716] leading-tight tracking-tight mb-8 max-w-xl">
              Delivering precision welding solutions with quality and reliable results
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
                className="block text-base font-semibold text-[#030716] hover:text-[#ffb400] transition-colors"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-sm text-[#686e86] hover:text-[#030716] transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>

            <p className="text-xs sm:text-sm text-[#686e86] leading-relaxed pt-2">
              Every project is executed to meet the highest safety and quality standards. Our experienced team is ready to assist with your custom welding and fabrication needs.
            </p>
          </div>
        </div>

        {/* Bottom Row: 5 Image Thumbnails Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {galleryThumbnails.map((thumb, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] rounded-[10px] overflow-hidden border border-black/10 shadow-sm group bg-[#0c0d14]"
            >
              <img
                src={thumb.src}
                alt={thumb.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
