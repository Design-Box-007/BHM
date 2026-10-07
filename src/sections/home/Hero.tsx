import React, { useRef, useEffect } from 'react';
import { siteConfig } from '../../data/site';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import { animateHeroSequence } from '../../animations/heroAnimations';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      animateHeroSequence(heroRef.current);
    }
  }, []);

  const marqueeWords = [
    'FABRICATION',
    'FABRICATION',
    'FABRICATION',
    'FABRICATION',
    'FABRICATION',
    'FABRICATION',
  ]

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] md:min-h-screen pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-44 md:pb-28 flex flex-col justify-between overflow-hidden bg-[#204268]"
      style={{
        backgroundImage: `linear-gradient(rgba(32, 66, 104, 0.80), rgba(32, 66, 104, 0.90)), url('/images/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Giant Marquee Watermark Running Behind Hero Content */}
      <div className="absolute top-1/3 left-0 right-0 z-0 pointer-events-none select-none opacity-25 overflow-hidden">
        <div className="flex w-max animate-marquee">
          <div className="flex items-center gap-12 shrink-0 pr-12">
            {marqueeWords.map((word, idx) => (
              <React.Fragment key={`bg-mq1-${idx}`}>
                <span className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white/40">
                  {word}
                </span>
                <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white/40 shrink-0" />
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center gap-12 shrink-0 pr-12" aria-hidden="true">
            {marqueeWords.map((word, idx) => (
              <React.Fragment key={`bg-mq2-${idx}`}>
                <span className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white/40">
                  {word}
                </span>
                <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white/40 shrink-0" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <Container className="relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Spacer Column: Preserves exact original center alignment for hero image */}
          <div className="lg:col-span-2 hidden lg:block" />

          {/* Center Column: Rotated Industrial Hero Image & Sticker */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            {/* Rotated Dark Navy Card Backdrop */}
            <div
              data-hero-overlay
              className="absolute w-[290px] sm:w-[360px] md:w-[410px] h-[380px] sm:h-[460px] md:h-[500px] rounded-[14px] bg-white/10 border border-white/20 shadow-2xl transform -rotate-5 transition-transform duration-700"
            />

            {/* Main Welder Photo Card */}
            <div
              data-hero-media
              className="relative z-10 w-[290px] sm:w-[360px] md:w-[410px] h-[380px] sm:h-[460px] md:h-[500px] rounded-[14px] overflow-hidden border border-white/20 shadow-2xl bg-[#204268] group"
            >
              <img
                src="/images/hero-welder.jpg"
                alt="Precision Industrial Structural Welding & Metal Fabrication"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#204268]/70 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Right Subtle Circle Button */}
              <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#204268]/80 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
                <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              </div>
            </div>

            {/* Rotated Floating Tag Badge: Quality commitment */}
            <div
              data-hero-badge
              className="absolute -top-3 -right-2 sm:-right-4 md:-right-6 z-20 px-4 py-1.5 bg-white text-[#204268] text-xs md:text-sm font-display font-bold uppercase tracking-wider rounded-[6px] shadow-2xl transform -rotate-8 select-none border border-white/20"
            >
              Quality commitment
            </div>
          </div>

          {/* Right Column: Title, Description, Button */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <h1
              data-hero-headline
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight tracking-tight"
            >
              {siteConfig.heroHeadline}
            </h1>

            <p
              data-hero-subtext
              className="mt-6 text-sm sm:text-base text-white/80 leading-relaxed max-w-lg font-sans"
            >
              {siteConfig.heroSubtext}
            </p>

            <div data-hero-cta className="mt-8 flex items-center gap-4">
              <Button to="/contact" variant="primary">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
