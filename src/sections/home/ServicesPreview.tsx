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
      className="py-10 md:py-18 bg-white text-[#204268] border-b border-[#204268]/10"
    >
      <Container>
        {/* Top Header Row matching Reference: // OUR SERVICES | End-to-end bonding & welding services | • GET IN TOUCH • */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-8 sm:mb-12 lg:mb-16 pb-6 sm:pb-8 border-b border-[#204268]/10">
          {/* Left Tag */}
          {/* <div className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#204268]/70 font-sans">
              // OUR SERVICES
            </span>
          </div> */}

          {/* Center Main Title */}
          <div className="lg:col-span-9 text-left lg:text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#204268] tracking-tight">
              End-to-End Steel Fabrication & Metalworking Services
            </h2>
            <p className="text-[#204268]/70 font-sans text-sm sm:text-base lg:text-lg xl:text-lg font-normal leading-normal mt-3 max-w-[760px] mx-auto">
              From precision metal cutting and structural fabrication to CNC machining, welding, surface treatment, and custom metalwork, BHMI Steels provides comprehensive fabrication solutions tailored to demanding project requirements.
            </p>
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
            className="service-left-content-box w-full lg:flex-1 flex flex-col divide-y divide-[#204268]/10"
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="service-item-block pt-6 pb-4 sm:pt-8 sm:pb-6 lg:py-20 first:pt-0 last:pb-2 lg:last:pb-1 flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-1 xl:gap-16"
              >
                {/* Left Service Title: Scrolls naturally alongside the middle content */}
                <div className="service-card-catagory-block w-full lg:w-[200px] xl:w-[240px] shrink-0">
                  <Link
                    to={`/services/${service.id}`}
                    className="service-title font-display text-[20px] sm:text-[22px] leading-[28px] sm:leading-[30px] font-bold tracking-normal text-[#204268] hover:underline underline-offset-4 decoration-2 transition-colors inline-block"
                  >
                    {service.number ? `${service.number}. ` : ''}{service.title}
                  </Link>
                </div>

                {/* Middle Content Box: Headline, Description and Bullet Items with Divider Lines */}
                <div className="service-card-text-contant-block flex-1 flex flex-col space-y-4 sm:space-y-6 w-full max-w-[560px]">
                  <div className="service-card-title-block">
                    <Link
                      to={`/services/${service.id}`}
                      className="group/headline inline-block"
                    >
                      <h2 className="service-card-title text-base sm:text-lg lg:text-xl font-sans font-semibold text-[#204268] group-hover/headline:opacity-80 leading-snug transition-opacity">
                        {service.headline}
                      </h2>
                    </Link>
                    {service.description && (
                      <p className="text-[#204268]/75 font-sans text-sm sm:text-base leading-relaxed mt-2.5">
                        {service.description}
                      </p>
                    )}
                  </div>

                  {/* Capabilities List with dots and divider lines */}
                  <div className="service-list-block">
                    <ul className="service-list-items-block flex flex-col border-t border-[#204268]/10">
                      {service.capabilities.map((cap, idx) => (
                        <li
                          key={idx}
                          className="service-list-ite py-3 sm:py-4 border-b border-[#204268]/10 text-sm sm:text-base text-[#204268]/80 font-normal flex items-center gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#204268] shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile-Only Image Display (Visible only below 1024px) */}
                  <Link
                    to={`/services/${service.id}`}
                    className="lg:hidden mt-3 mb-1 sm:mt-5 sm:mb-2 rounded-[16px] overflow-hidden border border-[#204268]/10 bg-white shadow-md aspect-[4/3] w-full block group"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-[16px] bg-white transition-transform duration-500 group-hover:scale-105"
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
                    className="service-image-item w-[288px] h-[291px] shrink-0 rounded-[16px] overflow-hidden bg-white block group"
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
