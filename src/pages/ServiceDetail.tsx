import React, { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../components/Container/Container';
import { services } from '../data/services';
import { SEO } from '../components/SEO/SEO';
import { animatePageIn } from '../animations/pageTransitions';
import { ArrowLeft } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pageRef = useRef<HTMLDivElement>(null);

  const service = services.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pageRef.current) {
      animatePageIn(pageRef.current);
    }
  }, [id]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div ref={pageRef} className="w-full bg-[#204268] text-white pt-32 sm:pt-36 md:pt-40 pb-20 md:pb-28 font-sans">
      <SEO
        title={`${service.title} | BHM Structural Solutions`}
        description={service.headline}
      />

      <Container>
        {/* Top Breadcrumb Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
          <span className="text-xs font-mono font-bold text-white border border-white/20 px-3 py-1 rounded-[4px] uppercase tracking-wider bg-white/5">
            Service // {service.number}
          </span>
        </div>

        {/* 1. Header Hero Area: Centered Title, Headline, Pill Tags */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-tight mb-4">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
            {service.headline}
          </p>

          {/* Pill Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {service.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-medium text-white shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 2. Hero Image Banner */}
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[560px] rounded-[16px] md:rounded-[22px] overflow-hidden border border-white/10 shadow-xl mb-16 md:mb-24 bg-white/5">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3. Section: Service Us (Overview & Capabilities Bullet List) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 md:pb-20 border-b border-white/10">
          {/* Left Column: "Service us ────" Label */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-wider text-white whitespace-nowrap">
                Service us
              </span>
              <div className="h-px bg-white/20 w-12" />
            </div>
          </div>

          {/* Right Column: Paragraph and 2-Column Bullet List */}
          <div className="lg:col-span-9 space-y-8">
            <p className="text-base sm:text-lg text-white/85 leading-relaxed font-normal">
              {service.serviceUsDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-8 pt-2">
              {service.serviceUsBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm sm:text-base text-white/80 font-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Section: 3-Step Process (Step 01, Step 02, Step 03) */}
        <div className="py-16 md:py-20 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {service.steps.map((step, sIdx) => (
              <div key={sIdx} className="flex flex-col">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-white/60 mb-3">
                  {step.number}
                </span>

                {/* Dot with horizontal rule line */}
                <div className="relative flex items-center mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
                  <div className="h-px bg-white/15 flex-1 ml-2" />
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-white/80 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Section: "Why choose our [Service Title]?" */}
        <div className="pt-16 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column (7 cols): Heading, Subtitle, 2-Column Bullets */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight tracking-tight mb-4">
                Why choose our {service.title.toLowerCase()}?
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 font-normal">
                Choose our {service.title.toLowerCase()} solutions for unmatched strength, precision, and structural reliability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6">
                {service.whyChooseBullets.map((item, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/85 font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (5 cols): Rounded Craftsmanship Media Image */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] rounded-[16px] overflow-hidden border border-white/10 shadow-lg group bg-white/5">
                <img
                  src={service.secondaryImage}
                  alt={`Why choose our ${service.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
