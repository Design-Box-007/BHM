import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { galleryItems } from '../../data/gallery';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const GalleryPreview: React.FC = () => {
  const projects = galleryItems.slice(0, 4);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardInnerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Smoothly scale down earlier cards as each subsequent card approaches its sticky position
      cardRefs.current.forEach((cardEl, idx) => {
        if (idx === 0 || !cardEl) return;

        const stickyTop = 100 + idx * 35;

        ScrollTrigger.create({
          trigger: cardEl,
          start: `top ${stickyTop + 450}px`,
          end: `top ${stickyTop}px`,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;

            for (let prevIdx = 0; prevIdx < idx; prevIdx++) {
              const prevInner = cardInnerRefs.current[prevIdx];
              if (!prevInner) continue;

              const depth = idx - prevIdx;
              const factor = depth - 1 + progress;
              const targetScale = 1 - factor * 0.04;
              const targetBrightness = 1 - factor * 0.06;

              gsap.set(prevInner, {
                scale: Math.max(0.85, targetScale),
                filter: `brightness(${Math.max(0.7, targetBrightness)})`,
                transformOrigin: 'top center',
              });
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [projects]);

  return (
    <section className="pt-20 pb-0 md:pt-28 md:pb-0 bg-white border-b border-black/10 overflow-visible">
      <Container>
        {/* Giant Section Header with Floating Tag Badge (Matching Image 1) */}
        <div className="text-center relative mb-14 sm:mb-20">
          <div className="relative inline-block">
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black uppercase tracking-tight text-[#030716] select-none">
              Welding Projects
            </h2>
            <div
              className="absolute -top-3 left-[18%] sm:-top-5 sm:left-[24%] md:left-[26%] px-4 sm:px-5 py-1.5 sm:py-2 bg-[#ffb400] text-[#030716] text-xs sm:text-sm font-display font-bold uppercase tracking-wider rounded-[6px] shadow-xl select-none z-10 pointer-events-none"
              style={{ transform: 'rotate(-10deg)' }}
            >
              Built for strength
            </div>
          </div>
        </div>

        {/* Stacked Cards Container */}
        <div ref={containerRef} className="relative w-full max-w-[1248px] mx-auto pb-20 md:pb-28">
          {projects.map((project, index) => {
            const stickyTop = 100 + index * 35;

            return (
              <div
                key={project.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="sticky"
                style={{
                  top: `${stickyTop}px`,
                  zIndex: (index + 1) * 10
                }}
              >
                <div
                  ref={(el) => {
                    cardInnerRefs.current[index] = el;
                  }}
                  className="w-full will-change-transform"
                  style={{ transformOrigin: 'top center' }}
                >
                  <Link
                    to={`/projects/${project.id}`}
                    className="group relative block w-full rounded-[18px] sm:rounded-[22px] overflow-hidden border border-black/15 bg-[#0c0d14] shadow-[0_-10px_35px_rgba(0,0,0,0.35)] aspect-[16/9] md:aspect-[21/9] transition-all duration-300 hover:shadow-2xl cursor-pointer"
                  >
                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Dark Vignette / Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030716] via-[#030716]/35 to-transparent opacity-90" />

                    {/* Centered Overlay Content */}
                    <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 md:p-12 flex flex-col items-center justify-end text-center z-10">
                      {/* Project Title with exact reference website typography & hover underline */}
                      <h2
                        style={{
                          fontFamily: '"Mona Sans", sans-serif',
                          fontSize: '34px',
                          lineHeight: '44px',
                          fontWeight: 500,
                          letterSpacing: 'normal',
                          color: '#FFFFFF',
                        }}
                        className="transition-all duration-200 group-hover:underline group-hover:text-white decoration-white underline-offset-4 mb-3 sm:mb-4 tracking-normal"
                      >
                        {project.title}
                      </h2>

                      {/* Tag Pills */}
                      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                        {project.tags.map((tag, tIdx) => (
                          <div
                            key={tIdx}
                            className="px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-xs text-xs sm:text-sm font-medium text-white/90 shadow-sm"
                          >
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
