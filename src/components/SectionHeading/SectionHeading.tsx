import React from 'react';
import { clsx } from 'clsx';

interface SectionHeadingProps {
  pretitle?: string;
  title: string;
  badge?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light';
  size?: 'normal' | 'large' | 'giant';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  pretitle,
  title,
  badge,
  description,
  align = 'left',
  theme = 'dark',
  size = 'large',
  className = '',
}) => {
  const isDark = theme === 'dark';

  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const titleSizes = {
    normal: 'text-3xl md:text-4xl lg:text-5xl font-semibold',
    large: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    giant: 'text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold uppercase font-display tracking-tight leading-none',
  };

  return (
    <div className={clsx('relative flex flex-col', alignClasses[align], className)}>
      {pretitle && (
        <div className="mb-3.5 flex items-center gap-2">
          <span className={clsx(
            'text-xs font-semibold uppercase tracking-wider',
            isDark ? 'text-[#ffb400]' : 'text-[#686e86]'
          )}>
            {pretitle}
          </span>
        </div>
      )}

      <div className="relative inline-block">
        <h2 className={clsx(
          'transition-colors duration-300',
          titleSizes[size],
          isDark ? 'text-white' : 'text-[#030716]'
        )}>
          {title}
        </h2>

        {badge && (
          <span className="absolute -top-3.5 -right-3 md:-top-5 md:-right-8 inline-block px-3 py-1 bg-[#ffb400] text-[#030716] text-[11px] md:text-xs font-bold uppercase tracking-wider rounded-[6px] shadow-lg transform -rotate-10 select-none z-10">
            {badge}
          </span>
        )}
      </div>

      {description && (
        <p className={clsx(
          'mt-5 max-w-2xl text-base md:text-lg leading-relaxed font-normal',
          isDark ? 'text-[#bfbfbf]' : 'text-[#686e86]'
        )}>
          {description}
        </p>
      )}
    </div>
  );
};
