import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import { services } from '../../data/services';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ServicesPreview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      if (!leftContentRef.current || !imageBoxRef.current) return;

      const serviceElements = leftContentRef.current.querySelectorAll<HTMLElement>('.service-item-block');
      const imageItems = imageBoxRef.current.querySelectorAll<HTMLElement>('.service-image-item');
      if (serviceElements.length <= 1 || imageItems.length <= 1) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: serviceElements[0],
          start: 'top top+=144px',
          endTrigger: serviceElements[serviceElements.length - 1],
          end: 'top top+=144px',
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 0; i < serviceElements.length - 1; i++) {
        const currentItem = serviceElements[i];
        const nextItem = serviceElements[i + 1];
        const distance = Math.max(1, nextItem.offsetTop - currentItem.offsetTop);
        const nextTargetY = -(imageItems[i + 1].offsetTop - imageItems[0].offsetTop);

        tl.to(imageBoxRef.current, {
          y: nextTargetY,
          ease: 'none',
          duration: distance,
        });
      }

      return () => {
        tl.kill();
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#fcf8f2] text-[#030716] border-b border-black/10"
    >
      <Container>
        {/* Top Header Row matching Reference: // OUR SERVICES | End-to-end welding services | • GET IN TOUCH • */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-16 lg:mb-20 pb-8 border-b border-black/10">
          {/* Left Tag */}
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#030716]/60 font-sans">
              // OUR SERVICES
            </span>
          </div>

          {/* Center Main Title */}
          <div className="lg:col-span-6 text-left lg:text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans text-[#030716] tracking-tight">
              End-to-end welding services
            </h2>
          </div>

          {/* Right CTA Button with Dots */}
          <div className="lg:col-span-3 flex justify-start lg:justify-end">
            <Button to="/contact" variant="dark-border">
              GET IN TOUCH
            </Button>
          </div>
        </div>

        {/* Master Content Block: Left Scrolling Content Box + Right Sticky Image Frame */}
        <div className="service-content-block flex flex-col lg:flex-row items-start gap-12 xl:gap-16 relative">
          {/* LEFT CONTENT COLUMN: Contains all service items that scroll naturally */}
          <div
            ref={leftContentRef}
            className="service-left-content-box w-full lg:flex-1 flex flex-col divide-y divide-black/10"
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="service-item-block py-14 lg:py-20 first:pt-0 last:pb-80 lg:last:pb-1 flex flex-col lg:flex-row items-start gap-8 lg:gap-1 xl:gap-16"
              >
                {/* Left Service Title: Scrolls naturally alongside the middle content */}
                <div className="service-card-catagory-block w-full lg:w-[200px] xl:w-[240px] shrink-0">
                  <Link
                    to={`/services/${service.id}`}
                    className="service-title font-['Mona_Sans',sans-serif] text-[24px] leading-[34px] font-medium tracking-normal text-[#030716] hover:underline underline-offset-4 decoration-2 transition-colors inline-block"
                  >
                    {service.title}
                  </Link>
                </div>

                {/* Middle Content Box: Headline and Bullet Items with Divider Lines */}
                <div className="service-card-text-contant-block flex-1 flex flex-col space-y-8 w-full max-w-[560px]">
                  <div className="service-card-title-block">
                    <Link
                      to={`/services/${service.id}`}
                      className="group/headline inline-block"
                    >
                      <h2 className="service-card-title text-lg sm:text-xl lg:text-2xl font-sans font-normal text-[#030716]/90 group-hover/headline:text-[#030716] leading-snug transition-colors">
                        {service.headline}
                      </h2>
                    </Link>
                  </div>

                  {/* Capabilities List with dots and divider lines */}
                  <div className="service-list-block">
                    <ul className="service-list-items-block flex flex-col border-t border-black/10">
                      {service.capabilities.map((cap, idx) => (
                        <li
                          key={idx}
                          className="service-list-ite py-4 border-b border-black/10 text-sm sm:text-base text-[#030716]/75 font-normal flex items-center gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#030716]/80 shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile-Only Image Display (Visible only below 1024px) */}
                  <Link
                    to={`/services/${service.id}`}
                    className="lg:hidden my-6 rounded-[16px] overflow-hidden border border-black/10 bg-[#fcf8f2] shadow-md aspect-[4/3] w-full block group"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-[16px] bg-[#fcf8f2] transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT STICKY IMAGE FRAME: Stays pinned at top-36 and smoothly translates images matching scroll progress */}
          <div className="service-image-wrap hidden lg:block lg:w-[288px] shrink-0 lg:sticky lg:top-80 self-start">
            <div className="w-[288px] h-[291px] rounded-[16px] overflow-hidden relative">
              {/* Scrubbed parallax sliding stack with gaps between cards */}
              <div
                ref={imageBoxRef}
                className="service-image-item-box w-full flex flex-col gap-2 xl:gap-2 will-change-transform"
              >
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="service-image-item w-[288px] h-[291px] shrink-0 rounded-[16px] overflow-hidden bg-[#fcf8f2] block group"
                  >
                    <img
                      loading="lazy"
                      src={service.image}
                      alt={service.title}
                      className="service-image w-full h-full object-cover rounded-[16px] transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
