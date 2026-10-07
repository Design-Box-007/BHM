import React from 'react';
import { Container } from '../../components/Container/Container';
import { testimonials } from '../../data/testimonials';
import { Star } from 'lucide-react';
import { clsx } from 'clsx';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 md:py-24 lg:py-28 bg-[#204268] border-b border-white/10 overflow-hidden relative select-none">
      <Container>
        {/* Giant Section Header with Floating Tag Badge */}
        <div className="text-center relative mb-6 sm:mb-12 md:mb-20">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-white select-none">
              CLIENT FEEDBACK
            </h2>

            {/* Floating angled badge */}
            <div
              className="absolute -top-3 left-[30%] -translate-x-1/2 sm:-top-5 md:-top-6 px-3 sm:px-4 py-0.5 sm:py-1.5 bg-white text-[#204268] text-xs sm:text-[13px] md:text-sm font-display font-bold tracking-normal rounded-[6px] shadow-2xl z-30 pointer-events-none transform -rotate-[7deg] whitespace-nowrap border border-white/20"
            >
              Trusted by clients
            </div>
          </div>
        </div>

        {/* 4 Overlapping Cards Layout */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch lg:-space-x-8 xl:-space-x-10 max-w-[1400px] mx-auto pt-2 pb-6 sm:pb-8 lg:pb-12 px-2 sm:px-4">
          {testimonials.map((item, idx) => {
            const isLight = item.bgLight ?? (idx % 2 === 1);

            const cardTransforms = [
              'lg:-rotate-[3deg] lg:translate-y-8 z-10',
              'lg:rotate-[0.5deg] lg:-translate-y-8 z-20',
              'lg:rotate-[2.5deg] lg:translate-y-8 z-10',
              'lg:rotate-[2deg] lg:-translate-y-4 z-20',
            ];
            const baseTransformClass = cardTransforms[idx % cardTransforms.length];

            return (
              <div
                key={item.id}
                className={clsx(
                  'group relative flex flex-col justify-between p-5 sm:p-6 lg:p-8 rounded-[10px] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer w-full max-w-[385px] lg:w-[385px] lg:h-[500px] shrink-0 my-2.5 sm:my-3 lg:my-0',
                  baseTransformClass,
                  'hover:!-translate-y-1 sm:hover:!-translate-y-2 lg:hover:!-translate-y-20 lg:hover:!scale-[1.04] lg:hover:!rotate-0 lg:hover:!z-50',
                  isLight
                    ? 'bg-white text-[#204268] shadow-[0_12px_30px_rgba(0,0,0,0.25)] sm:shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] lg:hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
                    : 'bg-[#204268] text-white shadow-[0_12px_30px_rgba(0,0,0,0.4)] sm:shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)] lg:hover:shadow-[0_30px_70px_rgba(0,0,0,0.9)] border border-white/20'
                )}
              >
                {/* Top Header: 5 Stars & Quote Icon */}
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-5">
                    <div className={clsx("flex gap-1 sm:gap-1.5", isLight ? "text-[#204268]" : "text-white")}>
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className={clsx("w-3.5 h-3.5 sm:w-4 sm:h-4", isLight ? "fill-[#204268]" : "fill-white")}
                        />
                      ))}
                    </div>

                    {isLight && (
                      <svg
                        className="w-5 h-5 sm:w-7 sm:h-7 text-[#204268]/30 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    )}
                  </div>

                  {/* Testimonial Title */}
                  <h3
                    className={clsx(
                      'mb-2 sm:mb-3 font-display text-lg sm:text-xl font-bold leading-snug',
                      isLight ? 'text-[#204268]' : 'text-white'
                    )}
                  >
                    {item.title}
                  </h3>

                  {/* Testimonial Quote */}
                  <blockquote
                    className={clsx(
                      'italic font-normal font-sans text-xs sm:text-sm lg:text-base leading-relaxed',
                      isLight ? 'text-[#204268]/80' : 'text-white/80'
                    )}
                  >
                    “{item.quote}”
                  </blockquote>
                </div>

                {/* Bottom Header: Avatar, Name & Role */}
                <div className="mt-4 sm:mt-6 lg:mt-8 pt-2 flex items-center gap-3 sm:gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover shrink-0 shadow-sm"
                  />
                  <div className="flex flex-col">
                    <span
                      className={clsx(
                        'text-sm sm:text-[15px] font-bold tracking-tight font-display',
                        isLight ? 'text-[#204268]' : 'text-white'
                      )}
                    >
                      {item.name}
                    </span>
                    <span
                      className={clsx(
                        'text-[11px] sm:text-xs font-normal font-sans',
                        isLight ? 'text-[#204268]/70' : 'text-white/70'
                      )}
                    >
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
