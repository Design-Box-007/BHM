import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Project consultation',
    description: 'We understand your welding needs, materials, and project requirements.',
    image: '/images/process-01.jpg',
    alt: 'Project consultation and metal cutting',
  },
  {
    number: '02',
    title: 'Planning & design',
    description: 'Strategic planning and thoughtful design solutions tailored to create functional',
    image: '/images/process-02.jpg',
    alt: 'Planning and design metal fabricator',
  },
  {
    number: '03',
    title: 'Welding & fabrication',
    description: 'High-precision metal fabrication and code-certified welding with ultrasonic inspection.',
    image: '/images/process-03.jpg',
    alt: 'Welding and fabrication steel joining with sparks',
  },
  {
    number: '04',
    title: 'Inspection & delivery',
    description: 'Thorough inspection and timely delivery ensuring every project quality.',
    image: '/images/process-04.jpg',
    alt: 'Inspection and delivery precision TIG welding',
  },
];

export const MissionVision: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
        onUpdate: (self) => {
          const p = self.progress;
          let stepIndex = 0;
          if (p < 0.3) {
            stepIndex = 0;
          } else if (p < 0.5) {
            stepIndex = 1;
          } else if (p < 0.7) {
            stepIndex = 2;
          } else {
            stepIndex = 3;
          }
          setActiveStep(stepIndex);
        },
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[380vh] bg-[#fbf8f1] border-b border-black/10">
      {/* Sticky Fullscreen Frame */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#fbf8f1]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* Left Column: Pre-title & Giant Dynamic Number (Centered with active image) */}
            <div className="lg:col-span-3 flex flex-col justify-center items-start self-center">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#686E86] mb-6 sm:mb-10">
                // OUR PROCESS
              </span>

              {/* Dynamic Number Display: e.g. 01 /04, 02 /04 ... */}
              <div className="flex items-baseline select-none">
                <div className="relative h-[90px] sm:h-[110px] md:h-[130px] overflow-hidden">
                  <span
                    key={activeStep}
                    className="block font-['Mona_Sans_Condensed',_'Mona_Sans',_sans-serif] font-black text-[#030716] leading-none transition-all duration-500 transform translate-y-0"
                    style={{
                      fontSize: 'clamp(68px, 9vw, 130px)',
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {processSteps[activeStep].number}
                  </span>
                </div>
                <span className="font-['Mona_Sans',sans-serif] font-bold text-[#030716] text-3xl sm:text-4xl md:text-5xl ml-1">
                  /04
                </span>
              </div>
            </div>

            {/* Middle Column: Vertical Scrolling Parallax Image Stack (Active image centered, next image peeking below) */}
            <div className="lg:col-span-5 xl:col-span-6 flex justify-center items-start self-center relative overflow-hidden h-[460px] sm:h-[520px] md:h-[570px] -mb-[130px] sm:-mb-[150px] md:-mb-[170px]">
              <div
                className="w-full max-w-[580px] flex flex-col items-center transition-transform duration-700 ease-out space-y-6 will-change-transform"
                style={{
                  transform: `translateY(-${activeStep * (390 + 24)}px)`,
                }}
              >
                {processSteps.map((step, idx) => {
                  const isActive = idx === activeStep;
                  const isNext = idx === activeStep + 1;
                  return (
                    <div
                      key={idx}
                      className={`w-full h-[290px] sm:h-[340px] md:h-[370px] lg:h-[390px] rounded-[18px] overflow-hidden shadow-xl bg-[#e5e7eb] border border-black/5 shrink-0 transition-all duration-700 ${isActive
                        ? 'opacity-100 scale-100 shadow-2xl z-10'
                        : isNext
                          ? 'opacity-40 scale-98 shadow-md z-0'
                          : 'opacity-15 scale-95 z-0'
                        }`}
                    >
                      <img
                        src={step.image}
                        alt={step.alt}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Progressive Step Names (Centered with active image) */}
            <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-center space-y-6 self-center pl-0 lg:pl-2">
              {processSteps.map((step, idx) => {
                const isRevealed = idx <= activeStep;
                const isActive = idx === activeStep;

                if (!isRevealed) return null;

                return (
                  <div
                    key={idx}
                    className="transition-all duration-500 ease-in-out animate-fadeIn"
                  >
                    {/* Step Title */}
                    <h3
                      className={`font-['Mona_Sans',sans-serif] tracking-tight transition-all duration-300 ${isActive
                        ? 'text-[#030716] text-2xl sm:text-3xl font-medium sm:font-bold opacity-100'
                        : 'text-[#686E86]/75 text-xl sm:text-2xl font-normal opacity-70'
                        }`}
                    >
                      {step.title}
                    </h3>

                    {/* Step Description (Only visible for the current active step) */}
                    {isActive && (
                      <div className="mt-2.5 transition-all duration-300">
                        <p className="text-[#686E86] text-[14px] sm:text-[15px] leading-[24px] font-normal font-['Mona_Sans',sans-serif] max-w-sm">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
