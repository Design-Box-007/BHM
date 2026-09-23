import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../../data/site';
import { Container } from '../Container/Container';
import { CornerUpRight, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'SERVICE', path: '/services' },
    { label: 'PRODUCTS', path: '/products' },
    { label: 'CONTACTS', path: '/contact' },
    { label: 'LICENSES', path: '/about' },
  ];

  return (
    <footer className="relative bg-[#040817] text-white pt-20 pb-16 border-t border-white/10 overflow-hidden">
      <Container>
        {/* Top 3-Column Widget Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10 items-stretch">
          {/* Column 1: Brand Info & Socials (4.5 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <Link to="/" className="inline-flex items-center gap-2.5 group">
                <span className="text-white/60 font-mono font-bold text-2xl group-hover:text-[#ffb400] transition-colors">//</span>
                <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-white">
                  Forgeon
                </span>
              </Link>

              <p className="text-sm text-[#9da5b8] leading-relaxed max-w-sm">
                From structural welding to custom metal fabrication, we bring durability and precision to every project we handle.
              </p>

              <div className="pt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-[#ffb400] transition-colors inline-block"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Social Pills */}
            <div className="flex flex-wrap gap-2.5 pt-4">
              {[
                { name: 'FACEBOOK', href: 'https://facebook.com' },
                { name: 'INSTAGRAM', href: 'https://instagram.com' },
                { name: 'TWITTER', href: 'https://x.com' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider border border-white/20 rounded-full text-slate-200 hover:text-white hover:border-white hover:bg-white/5 transition-all inline-flex items-center gap-1.5"
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Stack Cards (3.5 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-2.5">
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`w-full ${
                    isActive
                      ? 'bg-[#141b34] border-white/20 text-white'
                      : 'bg-[#0d1224] hover:bg-[#141b34] border-white/5 hover:border-white/20 text-slate-200 hover:text-white'
                  } border rounded-xl px-5 py-3.5 flex items-center justify-between text-xs sm:text-[13px] font-bold tracking-widest uppercase transition-all duration-200 group`}
                >
                  <span className={isActive ? 'underline decoration-1 underline-offset-4 text-white' : ''}>
                    {item.label}
                  </span>
                  <CornerUpRight
                    className={`w-3.5 h-3.5 ${
                      isActive ? 'text-white' : 'text-white/40 group-hover:text-white'
                    } group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Column 3: Tagline & Copyright (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between text-left lg:text-right space-y-8">
            <div className="space-y-3 lg:ml-auto max-w-sm">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
                We build welding solutions that perform under pressure
              </h3>
              <p className="text-xs sm:text-sm text-[#8f96a8] leading-relaxed">
                Engineered to perform under pressure, our welding solutions.
              </p>
            </div>

            <div className="text-xs text-[#737c94] leading-relaxed lg:ml-auto pt-4">
              <p>Copyright @ {new Date().getFullYear()} Forgeon designed by</p>
              <p>ThemetechMount - powered by Webflow</p>
            </div>
          </div>
        </div>

        {/* Bottom Giant Typography Banner: EMERGENCY WELDING / AVAILABLE with Badge */}
        <div className="pt-16 pb-6 text-center select-none">
          <div className="relative inline-flex flex-col items-center">
            {/* Line 1: EMERGENCY WELDING with Sticker */}
            <div className="relative inline-block">
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] font-display font-black uppercase tracking-tight text-white leading-[0.9] text-center">
                Emergency Welding
              </h2>

              {/* Sticker Pill Badge */}
              <div className="absolute -top-3 left-[28%] sm:left-[30%] md:left-[32%] -translate-y-1/2 transform -rotate-6 z-10 pointer-events-none">
                <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 bg-[#ffb400] text-[#030716] text-[11px] sm:text-xs md:text-sm font-bold font-sans tracking-tight rounded-full shadow-2xl border border-black/10 inline-block whitespace-nowrap">
                  Metal fabrication
                </span>
              </div>
            </div>

            {/* Line 2: AVAILABLE */}
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] font-display font-black uppercase tracking-tight text-white leading-[0.9] text-center mt-1 sm:mt-2">
              Available
            </h2>
          </div>
        </div>
      </Container>
    </footer>
  );
};

