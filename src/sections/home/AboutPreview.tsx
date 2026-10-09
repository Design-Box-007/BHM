import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import { ImageReveal } from '../../components/ImageReveal/ImageReveal';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutPreview: React.FC = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
  ];

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(10);
      return;
    }

    const obj = { val: 0 };
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: 10,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            setCount(Math.round(obj.val));
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-white text-[#204268] border-b border-[#204268]/10">
      <Container>
        {/* Section Title */}
        <div className="max-w-3xl mb-6 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#204268] leading-tight tracking-tight">
            About BHMI Steels
          </h2>
        </div>

        {/* 3-Column Asymmetric Content Grid on White Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          {/* Column 1: Image (4.5 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <ImageReveal
              src="images/about-company-grinder.jpg"
              alt="Precision metal fabrication at BHMI"
              aspectRatio="aspect-[4/3] lg:aspect-auto"
              className="h-full min-h-[320px] rounded-[10px]"
            />
          </div>

          {/* Column 2: Counter & Rating Box (3.5 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between p-8 rounded-[10px] bg-white border border-[#204268]/15">
            <div>
              <div ref={counterRef} className="relative inline-flex items-start">
                <span className="text-5xl sm:text-6xl font-display font-bold text-[#204268] tracking-tight">
                  {count}
                </span>
                <span className="text-2xl sm:text-3xl font-display font-bold text-[#204268] ml-1 -mt-1 select-none">
                  +
                </span>
              </div>
              <h3 className="mt-2 text-base font-semibold text-[#204268] font-sans">
                Years of experience
              </h3>
            </div>

            <div className="mt-8 pt-6 border-t border-[#204268]/10">
              <div className="flex items-center -space-x-3 mb-3">
                {avatars.map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt={`Client review avatar ${idx + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-[#204268]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#204268]" />
                  ))}
                </div>
                <span className="text-sm font-bold text-[#204268]">4.9 / 5</span>
              </div>
            </div>
          </div>

          {/* Column 3: Editorial Statement Card (4.5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-[10px] bg-white border border-[#204268]/20 text-[#204268] shadow-sm">
            <div className="space-y-4">
              <p className="text-sm sm:text-base leading-relaxed text-[#204268]/80 font-sans">
                BHMI Steels delivers precision steel fabrication and metalworking solutions, combining skilled craftsmanship, modern technology, and strict quality standards to create durable solutions for industrial and commercial projects.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#204268]/80 font-sans">
                BHMI Steels combines precision fabrication, quality workmanship, and advanced metalworking capabilities to deliver reliable solutions for diverse project requirements. From cutting, bending, welding, and CNC machining to blasting and coating, we provide comprehensive services with a strong focus on accuracy and durability. Our expertise supports construction, industrial, manufacturing, commercial, and architectural projects across the UAE. With a safety-focused approach and custom fabrication based on project drawings, dimensions, materials, and specifications, we deliver steel solutions built for long-term performance.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#204268]/10">
              <Button to="/about" variant="dark-border">
                More about us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
