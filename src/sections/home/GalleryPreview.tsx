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
      const isMobile = window.innerWidth < 768;

      // Smoothly scale down earlier cards as each subsequent card approaches its sticky position
      cardRefs.current.forEach((cardEl, idx) => {
        if (idx === 0 || !cardEl) return;

        const stickyTop = isMobile ? 80 + idx * 18 : 95 + idx * 28;

        ScrollTrigger.create({
          trigger: cardEl,
          start: `top ${stickyTop + (isMobile ? 220 : 350)}px`,
          end: `top ${stickyTop}px`,
          scrub: 0.5,
          onUpdate: (self) => {
            const progress = self.progress;

            for (let prevIdx = 0; prevIdx < idx; prevIdx++) {
              const prevInner = cardInnerRefs.current[prevIdx];
              if (!prevInner) continue;

              const depth = idx - prevIdx;
              const factor = depth - 1 + progress;
              const targetScale = 1 - factor * (isMobile ? 0.025 : 0.035);
              const targetBrightness = 1 - factor * 0.05;

              gsap.set(prevInner, {
                scale: Math.max(0.88, targetScale),
                filter: `brightness(${Math.max(0.72, targetBrightness)})`,
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
    <section className="pt-20 pb-0 md:pt-28 md:pb-0 bg-white border-b border-[#204268]/10 overflow-visible">
      <Container>
        {/* Giant Section Header with Floating Tag Badge */}
        <div className="text-center relative mb-12 sm:mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-[#204268] select-none">
              Bonding Projects
            </h2>
            <div
              className="absolute -top-3 left-[18%] sm:-top-5 sm:left-[24%] md:left-[26%] px-4 sm:px-5 py-1.5 sm:py-2 bg-white text-[#204268] text-xs sm:text-sm font-display font-bold uppercase tracking-wider rounded-[6px] shadow-xl select-none z-10 pointer-events-none border border-[#204268]/20"
              style={{ transform: 'rotate(-10deg)' }}
            >
              Built for strength
            </div>
          </div>
        </div>

        {/* Stacked Cards Container with ample bottom scroll travel so last card stacks completely */}
        <div ref={containerRef} className="relative w-full max-w-[1248px] mx-auto pb-32 sm:pb-40 md:pb-52">
          {projects.map((project, index) => {
            const isLast = index === projects.length - 1;

            return (
              <div
                key={project.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`sticky ${isLast ? 'mb-12 sm:mb-16 md:mb-20' : 'mb-16 sm:mb-20 md:mb-28'}`}
                style={{
                  top: `calc(80px + ${index * 20}px)`,
                  zIndex: (index + 1) * 10,
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
                    to={`/gallery`}
                    className="group relative block w-full rounded-[18px] sm:rounded-[22px] overflow-hidden border border-[#204268]/20 bg-[#204268] shadow-[0_-8px_30px_rgba(32,66,104,0.3)] aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] transition-all duration-300 hover:shadow-2xl cursor-pointer"
                  >
                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Dark Vignette / Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#204268] via-[#204268]/40 to-transparent opacity-90" />

                    {/* Centered Overlay Content */}
                    <div className="absolute bottom-0 inset-x-0 p-5 sm:p-10 md:p-12 flex flex-col items-center justify-end text-center z-10">
                      <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-bold text-white transition-all duration-200 group-hover:underline decoration-white underline-offset-4 mb-2.5 sm:mb-4 tracking-normal">
                        {project.title}
                      </h2>

                      {/* Tag Pills */}
                      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
                        {project.tags.map((tag, tIdx) => (
                          <div
                            key={tIdx}
                            className="px-3 sm:px-4 py-0.5 sm:py-1.5 rounded-full border border-white/30 bg-[#204268]/60 backdrop-blur-xs text-[11px] sm:text-sm font-medium text-white shadow-sm"
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
