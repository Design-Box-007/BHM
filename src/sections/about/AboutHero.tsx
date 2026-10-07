import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ABOUT_BIG_IMAGE =
  'https://cdn.prod.website-files.com/69b7dbc434c7b9bb087b696d/69ba45c904276cd36bc5bbb9_ef5b9b0db68163bf84c2a5c45525066a_about%20big%20image.jpg';
const ABOUT_BIG_IMAGE_SRCSET = `
  https://cdn.prod.website-files.com/69b7dbc434c7b9bb087b696d/69ba45c904276cd36bc5bbb9_ef5b9b0db68163bf84c2a5c45525066a_about%20big%20image-p-500.jpg 500w,
  https://cdn.prod.website-files.com/69b7dbc434c7b9bb087b696d/69ba45c904276cd36bc5bbb9_ef5b9b0db68163bf84c2a5c45525066a_about%20big%20image-p-800.jpg 800w,
  https://cdn.prod.website-files.com/69b7dbc434c7b9bb087b696d/69ba45c904276cd36bc5bbb9_ef5b9b0db68163bf84c2a5c45525066a_about%20big%20image-p-1080.jpg 1080w,
  https://cdn.prod.website-files.com/69b7dbc434c7b9bb087b696d/69ba45c904276cd36bc5bbb9_ef5b9b0db68163bf84c2a5c45525066a_about%20big%20image-p-1600.jpg 1600w,
  https://cdn.prod.website-files.com/69b7dbc434c7b9bb087b696d/69ba45c904276cd36bc5bbb9_ef5b9b0db68163bf84c2a5c45525066a_about%20big%20image.jpg 1920w
`;

export const AboutHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageSectionRef = useRef<HTMLElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const imageSection = imageSectionRef.current;
    const imageBox = imageBoxRef.current;
    const img = imgRef.current;

    if (!container || !imageSection || !imageBox || !img) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Responsive values: Desktop matches exact 24.5% width, 256px height, -340px Y translation
      const isDesktop = window.innerWidth >= 1024;
      const initialWidth = isDesktop ? '24.5%' : '88%';
      const initialHeight = isDesktop ? 256 : 220;
      const initialY = isDesktop ? -340 : -180;
      const targetHeight = isDesktop ? Math.max(window.innerHeight, 766) : Math.min(window.innerHeight * 0.8, 540);

      // Set initial styles before scroll (exact reference state)
      gsap.set(imageBox, {
        width: initialWidth,
        height: initialHeight,
        y: initialY,
        // borderRadius: isDesktop ? '10px' : '8px',
      });

      // Scroll-driven parallax timeline that smoothly expands image on scroll down and reverts on scroll up
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageSection,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      tl.to(imageBox, {
        width: '100%',
        height: targetHeight,
        y: 0,
        borderRadius: '0px',
        ease: 'power2.inOut',
        duration: 1,
      });

      // Parallax inner zoom
      tl.to(
        img,
        {
          scale: 1.08,
          ease: 'none',
          duration: 1,
        },
        0
      );
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="about-hero-section-wrapper relative bg-[#204268] overflow-x-hidden">
      {/* 1. pagetitle-section */}
      <section className="pagetitle-section bg-[#204268] relative pt-28 pb-48 sm:pt-36 sm:pb-64 md:pt-48 md:pb-96 text-center overflow-hidden border-b border-white/10">
        {/* Atmosphere background overlay */}
        <div className="pagetitle-image-box about absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <img
            src="/images/about-hero-bg.jpg"
            alt="Dark industrial metal fabrication background"
            className="w-full h-full object-cover opacity-20 filter brightness-100 contrast-100"
          />
          <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-[#204268]/80 to-[#204268]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#204268]/80 via-transparent to-[#204268]" />
        </div>

        <div className="w-layout-blockcontainer container w-container max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="pagetitle-section-wrap about-pagetitle">
            {/* pagetitle-big-title-box */}
            <div className="pagetitle-big-title-box mb-3 sm:mb-5">
              <div className="pagetitle-title-box">
                <h1
                  className="pagetitle-big-title uppercase font-display font-bold text-white tracking-tight leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
                >
                  About Us
                </h1>
              </div>
            </div>

            {/* pagetitle-inner-title-box */}
            <div className="pagetitle-inner-title-box max-w-3xl mx-auto">
              <h2 className="pagetitle-inner-title text-base sm:text-lg md:text-xl font-medium text-white/90 leading-relaxed font-sans">
                Certified Welding &amp; Metal Fabrication Experts
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* 2. about-image-section */}
      <section
        ref={imageSectionRef}
        className="about-image-section relative w-full bg-[#204268] min-h-[10vh] flex flex-col justify-end"
      >
        <div className="w-layout-blockcontainer container-fluid padding-zero w-container w-full flex justify-center">
          <div
            ref={imageBoxRef}
            className="about-big-image-box relative overflow-hidden mx-auto bg-[#204268] shadow-2xl will-change-transform will-change-[width,height,border-radius]"
            style={{
              width: '24.5%',
              height: '256px',
              transform: 'translate3d(0px, -340px, 0px)',
            }}
          >
            <img
              ref={imgRef}
              src={ABOUT_BIG_IMAGE}
              srcSet={ABOUT_BIG_IMAGE_SRCSET}
              sizes="100vw"
              loading="eager"
              alt="About Big Image"
              className="about-big-image w-full h-full object-cover object-center will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#204268]/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
};
