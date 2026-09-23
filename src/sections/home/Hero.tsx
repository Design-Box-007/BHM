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
    'TESTED FOR DURABILITY',
    'SAFETY-FIRST PROCESS',
    'STRUCTURAL WELDING',
    'TESTED FOR DURABILITY',
    'SAFETY-FIRST PROCESS',
    'STRUCTURAL WELDING',
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] md:min-h-screen pt-36 pb-20 md:pt-44 md:pb-28 flex flex-col justify-between overflow-hidden bg-[#030716]"
      style={{
        backgroundImage: `linear-gradient(rgba(3, 7, 22, 0.85), rgba(3, 7, 22, 0.95)), url('https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Giant Marquee Watermark Running Behind Hero Content */}
      <div className="absolute top-1/3 left-0 right-0 z-0 pointer-events-none select-none opacity-20 overflow-hidden">
        <div className="flex w-max animate-marquee">
          <div className="flex items-center gap-12 shrink-0 pr-12">
            {marqueeWords.map((word, idx) => (
              <React.Fragment key={`bg-mq1-${idx}`}>
                <span className="font-display text-7xl md:text-9xl lg:text-[140px] font-black uppercase tracking-tight text-white/30">
                  {word}
                </span>
                <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white/20 shrink-0" />
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center gap-12 shrink-0 pr-12" aria-hidden="true">
            {marqueeWords.map((word, idx) => (
              <React.Fragment key={`bg-mq2-${idx}`}>
                <span className="font-display text-7xl md:text-9xl lg:text-[140px] font-black uppercase tracking-tight text-white/30">
                  {word}
                </span>
                <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white/20 shrink-0" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <Container className="relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Since 2015 Text */}
          <div className="lg:col-span-2 hidden lg:flex flex-col justify-start">
            <div data-hero-tag className="text-xl md:text-2xl font-display font-bold uppercase text-white/90 tracking-wide">
              {siteConfig.established}
            </div>
          </div>

          {/* Center Column: Rotated Industrial Hero Image & Sticker */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            {/* Rotated Dark Navy Card Backdrop */}
            <div
              data-hero-overlay
              className="absolute w-[290px] sm:w-[360px] md:w-[410px] h-[380px] sm:h-[460px] md:h-[500px] rounded-[14px] bg-[#1a2138] border border-white/10 shadow-2xl transform -rotate-5 transition-transform duration-700"
            />

            {/* Main Welder Photo Card */}
            <div
              data-hero-media
              className="relative z-10 w-[290px] sm:w-[360px] md:w-[410px] h-[380px] sm:h-[460px] md:h-[500px] rounded-[14px] overflow-hidden border border-white/20 shadow-2xl bg-[#0c0d14] group"
            >
              <img
                src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
                alt="Precision Industrial Welder at Work"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030716]/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Right Subtle Circle Button */}
              <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffb400] animate-pulse" />
              </div>
            </div>

            {/* Rotated Floating Tag Badge: Quality commitment */}
            <div
              data-hero-badge
              className="absolute -top-3 -right-2 sm:-right-4 md:-right-6 z-20 px-4 py-1.5 bg-[#ffb400] text-[#030716] text-xs md:text-sm font-display font-bold uppercase tracking-wider rounded-[6px] shadow-2xl transform -rotate-8 select-none"
            >
              Quality commitment
            </div>
          </div>

          {/* Right Column: Title, Description, Button */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <div className="lg:hidden mb-4 text-sm font-display font-bold uppercase text-[#ffb400]">
              {siteConfig.established}
            </div>

            <h1
              data-hero-headline
              className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white leading-tight tracking-tight"
            >
              {siteConfig.heroHeadline}
            </h1>

            <p
              data-hero-subtext
              className="mt-6 text-sm sm:text-base text-[#bfbfbf] leading-relaxed max-w-lg"
            >
              {siteConfig.heroSubtext}
            </p>

            <div data-hero-cta className="mt-8 flex items-center gap-4">
              <Button to="/about" variant="primary">
                Explore more
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
