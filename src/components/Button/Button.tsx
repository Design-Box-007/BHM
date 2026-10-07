import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'dark-border' | 'white' | 'outline' | 'text';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: 'arrow-right' | 'arrow-up-right' | 'none';
  showDots?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  className,
  icon = 'none',
  showDots = true,
  type = 'button',
  disabled = false,
  target,
  rel,
}) => {
  const baseClasses = "group relative inline-flex items-center justify-center gap-2.5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-[5px] select-none cursor-pointer overflow-hidden";

  const variantClasses = {
    primary: "border border-white/30 text-white hover:border-white hover:text-[#204268] hover:bg-white bg-white/10 backdrop-blur-xs",
    secondary: "border border-[#204268]/30 text-[#204268] hover:border-[#204268] hover:bg-[#204268] hover:text-white bg-transparent",
    'dark-border': "border border-[#204268]/30 text-[#204268] hover:bg-[#204268] hover:text-white hover:border-[#204268] bg-transparent",
    white: "border border-white bg-white text-[#204268] hover:bg-white/90 hover:border-white hover:text-[#204268] shadow-sm",
    outline: "border border-white/30 text-white hover:border-white hover:bg-white hover:text-[#204268] bg-transparent",
    text: "border-transparent text-white hover:text-white/80 p-0 gap-1.5",
  };

  const dotClasses = {
    primary: "bg-white group-hover:bg-[#204268]",
    secondary: "bg-[#204268] group-hover:bg-white",
    'dark-border': "bg-[#204268] group-hover:bg-white",
    white: "bg-[#204268] group-hover:bg-[#204268]",
    outline: "bg-white group-hover:bg-[#204268]",
    text: "bg-white",
  };

  const content = (
    <>
      {showDots && variant !== 'text' && (
        <span className={clsx("w-1 h-1 rounded-full transition-colors duration-300", dotClasses[variant])} />
      )}
      
      {/* Rolling Text effect */}
      <span className="relative overflow-hidden inline-block h-[18px]">
        <span className="block transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute top-full left-0 block transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
          {children}
        </span>
      </span>

      {icon === 'arrow-right' && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {icon === 'arrow-up-right' && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}

      {showDots && variant !== 'text' && (
        <span className={clsx("w-1 h-1 rounded-full transition-colors duration-300", dotClasses[variant])} />
      )}
    </>
  );

  const combinedClasses = twMerge(baseClasses, variantClasses[variant], className);

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target={target} rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={clsx(combinedClasses, disabled && "opacity-50 cursor-not-allowed")}>
      {content}
    </button>
  );
};
