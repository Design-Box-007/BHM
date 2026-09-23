import React from 'react';
import { Container } from '../../components/Container/Container';
import { testimonials } from '../../data/testimonials';
import { Star } from 'lucide-react';
import { clsx } from 'clsx';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-[#040817] border-b border-white/10 overflow-hidden relative select-none">
      <Container>
        {/* Giant Section Header with Floating Tag Badge */}
        <div className="text-center relative mb-20 sm:mb-28 lg:mb-32">
          <div className="relative inline-block">
            <h2
              className="uppercase font-bold text-white tracking-normal select-none"
              style={{
                fontFamily: '"Mona Sans Condensed", "Mona Sans", Arial, sans-serif',
                fontStretch: '75%',
                fontVariationSettings: '"wdth" 75',
                fontWeight: 700,
                letterSpacing: 'normal',
                fontSize: 'clamp(48px, 9.5vw, 140px)',
                lineHeight: 'clamp(48px, 9.5vw, 140px)',
              }}
            >
              CLIENT FEEDBACK
            </h2>

            {/* Floating angled yellow badge overlapping "NT FE" */}
            <div
              className="absolute -top-3 left-[30%] -translate-x-1/2 sm:-top-5 md:-top-6 px-3.5 sm:px-4 py-1 sm:py-1.5 bg-[#ffb400] text-[#030716] text-xs sm:text-[13px] md:text-sm font-bold tracking-normal rounded-[6px] shadow-2xl z-30 pointer-events-none transform -rotate-[7deg] whitespace-nowrap"
              style={{
                fontFamily: '"Mona Sans Condensed", "Mona Sans", Arial, sans-serif',
                fontStretch: '75%',
                fontVariationSettings: '"wdth" 75',
                fontWeight: 700,
              }}
            >
              Trusted by clients
            </div>
          </div>
        </div>

        {/* 4 Overlapping Cards Layout Matching the Reference Screenshot */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch lg:-space-x-8 xl:-space-x-10 max-w-[1400px] mx-auto pt-4 pb-12 px-4">
          {testimonials.map((item, idx) => {
            const isLight = item.bgLight ?? (idx % 2 === 1);

            // Exact positioning and overlapping rotations from the reference image
            // Card 0: Dark, tilted left, shifted down, behind Card 1
            // Card 1: White, straight/elevated, in front (z-20)
            // Card 2: Dark, tilted right, shifted down, behind Card 1 & Card 3
            // Card 3: White, tilted right slightly, elevated, in front (z-20)
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
                  'group relative flex flex-col justify-between p-7 lg:p-8 rounded-[10px] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer w-full max-w-[385px] lg:w-[385px] h-[500px] shrink-0 my-4 lg:my-0',
                  baseTransformClass,
                  // Hover interaction: comes forward, straightens, lifts up prominently
                  'hover:!-translate-y-16 lg:hover:!-translate-y-20 hover:!scale-[1.04] hover:!rotate-0 hover:!z-50',
                  isLight
                    ? 'bg-white text-[#030716] shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
                    : 'bg-[#0c1328] text-white shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.9)] border border-white/[0.08]'
                )}
                style={{
                  width: '385px',
                  height: '500px',
                  borderRadius: '10px',
                  fontFamily: '"Mona Sans Condensed", "Mona Sans", Arial, sans-serif',
                }}
              >
                {/* Top Header: 5 Stars & Quote Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex text-[#f59e0b] gap-1.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]"
                        />
                      ))}
                    </div>

                    {isLight && (
                      <svg
                        className="w-7 h-7 text-[#cbd5e1] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    )}
                  </div>

                  {/* Testimonial Title */}
                  <h3
                    className={clsx(
                      'mb-3',
                      isLight ? 'text-[#030716]' : 'text-white'
                    )}
                    style={{
                      fontFamily: '"Mona Sans", sans-serif',
                      fontSize: '24px',
                      lineHeight: '34px',
                      fontWeight: 500,
                      letterSpacing: 'normal',
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Testimonial Quote */}
                  <blockquote
                    className={clsx(
                      'italic font-normal',
                      isLight ? 'text-[#686E86]' : 'text-[#9aa4ba]'
                    )}
                    style={{
                      fontFamily: '"Mona Sans", sans-serif',
                      fontSize: '18px',
                      lineHeight: '28px',
                      fontWeight: 400,
                      letterSpacing: 'normal',
                    }}
                  >
                    “{item.quote}”
                  </blockquote>
                </div>

                {/* Bottom Header: Avatar, Name & Role */}
                <div className="mt-8 pt-2 flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover shrink-0 shadow-sm"
                  />
                  <div className="flex flex-col">
                    <span
                      className={clsx(
                        'text-[15px] font-bold tracking-tight',
                        isLight ? 'text-[#030716]' : 'text-white'
                      )}
                      style={{
                        fontFamily: '"Mona Sans Condensed", "Mona Sans", Arial, sans-serif',
                        fontStretch: '75%',
                        fontWeight: 700,
                      }}
                    >
                      {item.name}
                    </span>
                    <span
                      className={clsx(
                        'text-xs font-normal',
                        isLight ? 'text-[#64748b]' : 'text-[#8f9bb3]'
                      )}
                      style={{
                        fontFamily: '"Mona Sans Condensed", "Mona Sans", Arial, sans-serif',
                        fontStretch: '75%',
                      }}
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
