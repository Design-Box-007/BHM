import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { X, ChevronDown, ArrowRight } from 'lucide-react';

// Character-by-character Split Rolling Text component matching Webflow gsap_split_letter animation
const SplitRollingText: React.FC<{ text: string; isActive?: boolean; isScrolled?: boolean }> = ({
  text,
  isActive = false,
  isScrolled = false,
}) => {
  const letters = text.split('');

  return (
    <span className="relative inline-block overflow-hidden h-[20px] leading-[20px] select-none font-sans uppercase text-sm font-semibold tracking-wider">
      {/* Top text layer */}
      <span className="inline-flex" aria-label={text}>
        {letters.map((char, index) => (
          <span
            key={`top-${index}`}
            style={{
              transitionDelay: `${index * 35}ms`,
            }}
            className={clsx(
              "inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full",
              isScrolled
                ? isActive
                  ? "text-[#204268] font-bold"
                  : "text-[#204268]/80 group-hover:text-[#204268]"
                : isActive
                  ? "text-white font-bold"
                  : "text-white/80 group-hover:text-white"
            )}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>

      {/* Bottom text layer (slides up smoothly from below with letter stagger) */}
      <span className="absolute top-0 left-0 inline-flex" aria-hidden="true">
        {letters.map((char, index) => (
          <span
            key={`bot-${index}`}
            style={{
              transitionDelay: `${index * 35}ms`,
            }}
            className={clsx(
              "inline-block transform translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0",
              isScrolled ? "text-[#204268]" : "text-white"
            )}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </span>
  );
};

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [socialDropdownOpen, setSocialDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePagesDropdownOpen, setMobilePagesDropdownOpen] = useState(false);
  const location = useLocation();

  const isLightHeader = scrolled || location.pathname === '/services';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSocialDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT US', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'PRODUCTS', path: '/products' },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: 'f' },
    { name: 'Instagram', href: 'https://instagram.com', icon: '📷' },
    { name: 'Twitter', href: 'https://x.com', icon: '𝕏' },
    { name: 'Linkedin', href: 'https://linkedin.com', icon: 'in' },
  ];

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isLightHeader
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#204268]/15'
          : 'bg-transparent'
      )}
    >
      {/* Top Navbar Bar */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 md:h-18">
          {/* Logo on Left: BHM uploaded logo */}
          <div
            className={clsx(
              "flex items-center border-b h-full pr-8 shrink-0 transition-colors duration-300",
              isLightHeader ? "border-[#204268]/20" : "border-white/20"
            )}
          >
            <Link
              to="/"
              className="flex items-center group focus:outline-hidden"
              aria-label="BHM Home"
            >
              <div
                className={clsx(
                  "px-2.5 py-1 rounded-[6px] flex items-center transition-all duration-300 group-hover:scale-105",
                  isLightHeader ? "border-[#204268]/10 shadow-xs" : "bg-white shadow-sm"
                )}
              >
                <img
                  src="/images/bhm-logo.png"
                  alt="BHM - Your all-in-one structural bonding partner"
                  className="h-16 sm:h-16 w-auto object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links without circles beside each menu */}
          <nav className="hidden lg:flex items-center justify-between flex-1 h-full px-6 gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  clsx(
                    'group relative h-full flex-1 inline-flex items-center justify-center px-3 pb-0.5 text-sm font-semibold tracking-wider transition-all duration-300 border-b cursor-pointer',
                    isLightHeader
                      ? isActive
                        ? 'text-[#204268] border-b-2 border-b-[#204268]'
                        : 'text-[#204268]/80 hover:text-[#204268] border-b-[#204268]/20 hover:border-b-[#204268]/60'
                      : isActive
                        ? 'text-white border-b-2 border-b-white'
                        : 'text-white/80 hover:text-white border-b-white/20 hover:border-b-white/60'
                  )
                }
              >
                {({ isActive }) => (
                  <SplitRollingText text={link.label} isActive={isActive} isScrolled={isLightHeader} />
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Hamburger / Close Toggle Button on Desktop with its own line segment */}
          <div
            className={clsx(
              "flex items-center justify-end h-full border-b pl-8 shrink-0 transition-colors duration-300",
              isLightHeader ? "border-[#204268]/20" : "border-white/20"
            )}
          >
            {/* Desktop Social Drawer Trigger */}
            <button
              onClick={() => setSocialDropdownOpen(!socialDropdownOpen)}
              className={clsx(
                "hidden lg:flex p-2.5 transition-colors focus:outline-hidden cursor-pointer",
                isLightHeader
                  ? "text-[#204268] hover:text-[#204268]/70"
                  : "text-white hover:text-white/80"
              )}
              aria-label="Toggle Social Menu"
            >
              {socialDropdownOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <div className="flex flex-col items-end gap-1.5 w-6">
                  <span className={clsx("w-6 h-[2px] rounded-full transition-all group-hover:w-6", isLightHeader ? "bg-[#204268]" : "bg-white")} />
                  <span className={clsx("w-4 h-[2px] rounded-full transition-all group-hover:w-6", isLightHeader ? "bg-[#204268]" : "bg-white")} />
                  <span className={clsx("w-6 h-[2px] rounded-full transition-all group-hover:w-6", isLightHeader ? "bg-[#204268]" : "bg-white")} />
                </div>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={clsx(
                "flex lg:hidden p-2 transition-colors focus:outline-hidden cursor-pointer",
                isLightHeader
                  ? "text-[#204268] hover:text-[#204268]/70"
                  : "text-white hover:text-white/80"
              )}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <div className="flex flex-col gap-1.5 w-6">
                  <span className={clsx("w-6 h-[2px] rounded-full", isLightHeader ? "bg-[#204268]" : "bg-white")} />
                  <span className={clsx("w-6 h-[2px] rounded-full", isLightHeader ? "bg-[#204268]" : "bg-white")} />
                  <span className={clsx("w-6 h-[2px] rounded-full", isLightHeader ? "bg-[#204268]" : "bg-white")} />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Floating Social Drawer */}
      {socialDropdownOpen && (
        <div className="hidden lg:block absolute right-8 xl:right-24 top-24 z-50 animate-fadeIn">
          <div
            className={clsx(
              "w-[260px] rounded-[16px] backdrop-blur-md shadow-2xl p-6 border transition-colors",
              isLightHeader
                ? "bg-white text-[#204268] border-[#204268]/20"
                : "bg-[#204268]/95 border-white/20 text-white"
            )}
          >
            <div className={clsx("flex flex-col divide-y", isLightHeader ? "divide-[#204268]/10" : "divide-white/10")}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "group flex items-center justify-between py-3.5 text-sm font-medium transition-colors",
                    isLightHeader
                      ? "text-[#204268]/90 hover:text-[#204268]"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-5 text-center font-bold text-xs opacity-70 group-hover:opacity-100">
                      {social.icon}
                    </span>
                    <span>{social.name}</span>
                  </div>
                  <ArrowRight
                    className={clsx(
                      "w-4 h-4 transition-transform group-hover:translate-x-1",
                      isLightHeader ? "text-[#204268]/50 group-hover:text-[#204268]" : "text-white/50 group-hover:text-white"
                    )}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Floating Menu Card */}
      {mobileMenuOpen && (
        <div className="block lg:hidden px-4 pt-2 pb-6 animate-fadeIn">
          <div
            className={clsx(
              "w-full max-w-md mx-auto rounded-[16px] shadow-2xl p-6 border transition-colors",
              isLightHeader
                ? "bg-white text-[#204268] border-[#204268]/20"
                : "bg-[#204268] text-white border-white/20"
            )}
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      'flex items-center gap-3 py-1.5 text-sm font-sans font-semibold uppercase tracking-wider transition-colors',
                      isLightHeader
                        ? isActive
                          ? 'text-[#204268] font-bold'
                          : 'text-[#204268]/80 hover:text-[#204268]'
                        : isActive
                          ? 'text-white font-bold'
                          : 'text-white/80 hover:text-white'
                    )
                  }
                >
                  {({ isActive }) => (
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={clsx(
                          'font-sans uppercase text-sm tracking-wider pb-0.5',
                          isActive && (isLightHeader ? 'border-b-2 border-[#204268]' : 'border-b-2 border-white')
                        )}
                      >
                        {link.label}
                      </span>
                    </div>
                  )}
                </NavLink>
              ))}

              {/* Collapsible Pages Dropdown */}
              <div className={clsx("pt-2 border-t", isLightHeader ? "border-[#204268]/10" : "border-white/10")}>
                <button
                  onClick={() => setMobilePagesDropdownOpen(!mobilePagesDropdownOpen)}
                  className={clsx(
                    "flex items-center justify-between w-full py-1 text-sm font-sans font-semibold uppercase tracking-wider cursor-pointer",
                    isLightHeader ? "text-[#204268]" : "text-white"
                  )}
                >
                  <span>PAGES</span>
                  <ChevronDown
                    className={clsx(
                      'w-4 h-4 transition-transform duration-300',
                      isLightHeader ? "text-[#204268]" : "text-white",
                      mobilePagesDropdownOpen && 'rotate-180'
                    )}
                  />
                </button>

                {mobilePagesDropdownOpen && (
                  <div
                    className={clsx(
                      "pl-4 pt-3 flex flex-col space-y-2.5 text-xs font-medium",
                      isLightHeader ? "text-[#204268]/80" : "text-white/80"
                    )}
                  >
                    <Link
                      to="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className={clsx("py-1 transition-colors", isLightHeader ? "hover:text-[#204268]" : "hover:text-white")}
                    >
                      Company Story
                    </Link>
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className={clsx("py-1 transition-colors", isLightHeader ? "hover:text-[#204268]" : "hover:text-white")}
                    >
                      Service Specifications
                    </Link>
                    <Link
                      to="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className={clsx("py-1 transition-colors", isLightHeader ? "hover:text-[#204268]" : "hover:text-white")}
                    >
                      Fabricated Products
                    </Link>
                    <Link
                      to="/gallery"
                      onClick={() => setMobileMenuOpen(false)}
                      className={clsx("py-1 transition-colors", isLightHeader ? "hover:text-[#204268]" : "hover:text-white")}
                    >
                      Project Portfolio
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
