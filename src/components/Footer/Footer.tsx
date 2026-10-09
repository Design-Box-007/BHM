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
    <footer className="relative bg-[#204268] text-white pt-12 pb-10 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16 border-t border-white/15 overflow-hidden">
      <Container>
        {/* Top 3-Column Widget Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 pb-8 sm:pb-12 md:pb-16 border-b border-white/15 items-stretch">
          {/* Column 1: Brand Info & Socials (4.5 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <Link to="/" className="inline-flex items-center group">
                <div className="bg-white px-3 py-1.5 rounded-[6px] shadow-sm flex items-center transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/images/bhm-logo.png"
                    alt="BHMI - Your all-in-one structural bonding partner"
                    className="h-9 w-auto object-contain"
                  />
                </div>
              </Link>

              <p className="text-sm text-white/80 leading-relaxed max-w-sm">
                From structural bonding to custom metal fabrication, we bring durability and precision to every project we handle.
              </p>

              <div className="pt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-white/80 transition-colors inline-block"
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
                  className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider border border-white/30 rounded-full text-white hover:bg-white hover:text-[#204268] transition-all inline-flex items-center gap-1.5"
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
                      ? 'bg-white/20 border-white/40 text-white font-bold'
                      : 'bg-white/10 hover:bg-white/20 border-white/15 hover:border-white/30 text-white/90 hover:text-white'
                  } border rounded-xl px-5 py-3.5 flex items-center justify-between text-xs sm:text-[13px] font-bold tracking-widest uppercase transition-all duration-200 group`}
                >
                  <span className={isActive ? 'underline decoration-1 underline-offset-4 text-white' : ''}>
                    {item.label}
                  </span>
                  <CornerUpRight
                    className={`w-3.5 h-3.5 ${
                      isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
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
                We build structural bonding solutions that perform under pressure
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Engineered to perform under pressure, our bonding solutions provide unmatched durability.
              </p>
            </div>

            <div className="text-xs text-white/70 leading-relaxed lg:ml-auto pt-4">
              <p>Copyright @ {new Date().getFullYear()} BHMI. All rights reserved.</p>
              <p>Structural Bonding & Metal Fabrication Partner</p>
            </div>
          </div>
        </div>

        {/* Bottom Giant Typography Banner: EMERGENCY BONDING / AVAILABLE with Badge */}
        <div className="pt-8 sm:pt-12 md:pt-16 pb-4 sm:pb-6 text-center select-none">
          <div className="relative inline-flex flex-col items-center">
            {/* Line 1: STRUCTURAL BONDING with Sticker */}
            <div className="relative inline-block">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-white leading-tight text-center">
                Structural Bonding
              </h2>

              {/* Sticker Pill Badge */}
              <div className="absolute -top-3 left-[28%] sm:left-[30%] md:left-[32%] -translate-y-1/2 transform -rotate-6 z-10 pointer-events-none">
                <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 bg-white text-[#204268] text-[11px] sm:text-xs md:text-sm font-bold font-sans tracking-tight rounded-full shadow-2xl border border-white/20 inline-block whitespace-nowrap">
                  Metal fabrication
                </span>
              </div>
            </div>

            {/* Line 2: AVAILABLE */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-white leading-tight text-center mt-1 sm:mt-2">
              Available 24/7
            </h2>
          </div>
        </div>
      </Container>
    </footer>
  );
};

