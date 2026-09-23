import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { X, ChevronDown, ArrowRight } from 'lucide-react';

// Character-by-character Split Rolling Text component matching Webflow gsap_split_letter animation
const SplitRollingText: React.FC<{ text: string; isActive?: boolean; isLight?: boolean }> = ({
  text,
  isActive = false,
  isLight = false,
}) => {
  const letters = text.split('');

  return (
    <span className="relative inline-block overflow-hidden h-[20px] leading-[20px] select-none">
      {/* Top text layer */}
      <span className="inline-flex" aria-label={text}>
        {letters.map((char, index) => (
          <span
            key={`top-${index}`}
            style={{
              transitionDelay: `${index * 35}ms`,
            }}
            className={clsx(
              "inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full font-sans uppercase text-sm font-semibold tracking-wider",
              isLight
                ? isActive
                  ? "text-[#030716]"
                  : "text-[#030716]/80 group-hover:text-[#030716]"
                : isActive
                  ? "text-white"
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
              "inline-block transform translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 font-sans uppercase text-sm font-semibold tracking-wider",
              isLight
                ? isActive
                  ? "text-[#ffb400]"
                  : "text-[#030716]"
                : isActive
                  ? "text-[#ffb400]"
                  : "text-white"
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

  const isServiceDetailPage = /^\/services?\/[^\/]+/.test(location.pathname);
  const isLight = isServiceDetailPage || scrolled;

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-black/5'
          : isServiceDetailPage
            ? 'bg-white/95 backdrop-blur-md border-b border-black/5'
            : 'bg-transparent'
      )}
    >
      {/* Top Navbar Bar */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 md:h-15">
          {/* Logo on Left: // Forgeon with discrete bottom line segment */}
          <div
            className={clsx(
              "flex items-center border-b h-full pr-8 shrink-0 transition-colors duration-300",
              isLight ? "border-black/15" : "border-white/20"
            )}
          >
            <Link
              to="/"
              className="flex items-center gap-2 group focus:outline-hidden"
              aria-label="Forgeon Home"
            >
              <span
                className={clsx(
                  "font-display text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-1.5 transition-colors duration-300",
                  isLight ? "text-[#030716]" : "text-white"
                )}
              >
                <span
                  className={clsx(
                    "font-sans font-light tracking-tighter transition-colors duration-300",
                    isLight ? "text-[#030716]" : "text-[#ffb400]"
                  )}
                >
                  //
                </span>
                <span>Forgeon</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links with generous gap and larger font */}
          <nav className="hidden lg:flex items-center justify-between flex-1 h-full px-6 gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  clsx(
                    'group relative h-full flex-1 inline-flex items-center justify-start gap-2.5 px-3 pb-0.5 text-sm font-semibold tracking-wider transition-all duration-500 border-b cursor-pointer',
                    isLight
                      ? isActive
                        ? 'text-[#030716] border-b-2 border-b-[#030716]'
                        : 'text-[#030716]/80 hover:text-[#030716] border-b-black/15 hover:border-b-black/50'
                      : isActive
                        ? 'text-white border-b-2 border-b-[#ffb400]'
                        : 'text-white/80 hover:text-white border-b-white/20 hover:border-b-white/60'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Unfilled Circle Indicator ○ with hover pop */}
                    <span
                      className={clsx(
                        'w-3 h-3 rounded-full border transition-all duration-500 shrink-0 group-hover:scale-110',
                        isLight
                          ? isActive
                            ? 'border-[#030716] bg-transparent'
                            : 'border-black/30 group-hover:border-[#030716]'
                          : isActive
                            ? 'border-[#ffb400] bg-transparent'
                            : 'border-white/60 group-hover:border-white'
                      )}
                    />

                    {/* Split Letter-by-Letter Rolling Text */}
                    <SplitRollingText text={link.label} isActive={isActive} isLight={isLight} />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Hamburger / Close Toggle Button on Desktop with its own line segment */}
          <div
            className={clsx(
              "flex items-center justify-end h-full border-b pl-8 shrink-0 transition-colors duration-300",
              isLight ? "border-black/15" : "border-white/20"
            )}
          >
            {/* Desktop Social Drawer Trigger */}
            <button
              onClick={() => setSocialDropdownOpen(!socialDropdownOpen)}
              className={clsx(
                "hidden lg:flex p-2.5 transition-colors focus:outline-hidden cursor-pointer",
                isLight ? "text-[#030716] hover:opacity-75" : "text-white hover:text-[#ffb400]"
              )}
              aria-label="Toggle Social Menu"
            >
              {socialDropdownOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <div className="flex flex-col items-end gap-1.5 w-6">
                  <span
                    className={clsx(
                      "w-6 h-[2px] rounded-full transition-all group-hover:w-6",
                      isLight ? "bg-[#030716]" : "bg-white"
                    )}
                  />
                  <span
                    className={clsx(
                      "w-4 h-[2px] rounded-full transition-all group-hover:w-6",
                      isLight ? "bg-[#030716]" : "bg-white"
                    )}
                  />
                  <span
                    className={clsx(
                      "w-6 h-[2px] rounded-full transition-all group-hover:w-6",
                      isLight ? "bg-[#030716]" : "bg-white"
                    )}
                  />
                </div>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={clsx(
                "flex lg:hidden p-2 transition-colors focus:outline-hidden cursor-pointer",
                isLight ? "text-[#030716] hover:opacity-75" : "text-white hover:text-[#ffb400]"
              )}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <div className="flex flex-col gap-1.5 w-6">
                  <span
                    className={clsx(
                      "w-6 h-[2px] rounded-full",
                      isLight ? "bg-[#030716]" : "bg-white"
                    )}
                  />
                  <span
                    className={clsx(
                      "w-6 h-[2px] rounded-full",
                      isLight ? "bg-[#030716]" : "bg-white"
                    )}
                  />
                  <span
                    className={clsx(
                      "w-6 h-[2px] rounded-full",
                      isLight ? "bg-[#030716]" : "bg-white"
                    )}
                  />
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
              isLight
                ? "bg-white/95 border-black/10 text-[#030716]"
                : "bg-[#1c202a]/95 border-white/10 text-white"
            )}
          >
            <div
              className={clsx(
                "flex flex-col divide-y",
                isLight ? "divide-black/10" : "divide-white/10"
              )}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "group flex items-center justify-between py-3.5 text-sm font-medium transition-colors",
                    isLight
                      ? "text-[#030716]/90 hover:text-[#030716]"
                      : "text-white/90 hover:text-[#ffb400]"
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
                      isLight
                        ? "text-black/40 group-hover:text-[#030716]"
                        : "text-white/50 group-hover:text-[#ffb400]"
                    )}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Floating White Menu Card */}
      {mobileMenuOpen && (
        <div className="block lg:hidden px-4 pt-2 pb-6 animate-fadeIn">
          <div className="w-full max-w-md mx-auto rounded-[16px] bg-white text-[#030716] shadow-2xl p-6 border border-black/10">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      'flex items-center gap-3 py-1 text-sm font-sans font-semibold uppercase tracking-wider transition-colors',
                      isActive ? 'text-[#030716]' : 'text-[#030716]/80 hover:text-[#030716]'
                    )
                  }
                >
                  {({ isActive }) => (
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        {/* Unfilled Circle Indicator ○ */}
                        <span
                          className={clsx(
                            'w-3.5 h-3.5 rounded-full border transition-all shrink-0',
                            isActive ? 'border-[#030716] bg-transparent' : 'border-[#030716]/60'
                          )}
                        />
                        <span
                          className={clsx(
                            'font-sans uppercase text-sm tracking-wider pb-0.5',
                            isActive && 'border-b-2 border-[#ffb400]'
                          )}
                        >
                          {link.label}
                        </span>
                      </div>
                    </div>
                  )}
                </NavLink>
              ))}

              {/* Collapsible Pages Dropdown matching Image 2 */}
              <div className="pt-1">
                <button
                  onClick={() => setMobilePagesDropdownOpen(!mobilePagesDropdownOpen)}
                  className="flex items-center justify-between w-full py-1 text-sm font-sans font-semibold uppercase tracking-wider text-[#030716] cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border border-[#030716]/60 shrink-0" />
                    <span>PAGES</span>
                  </div>
                  <ChevronDown
                    className={clsx(
                      'w-4 h-4 text-[#030716] transition-transform duration-300',
                      mobilePagesDropdownOpen && 'rotate-180'
                    )}
                  />
                </button>

                {mobilePagesDropdownOpen && (
                  <div className="pl-7 pt-2 flex flex-col space-y-2 text-xs font-medium text-[#686e86]">
                    <Link
                      to="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-1 hover:text-[#030716]"
                    >
                      Company Story
                    </Link>
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-1 hover:text-[#030716]"
                    >
                      Service Specifications
                    </Link>
                    <Link
                      to="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-1 hover:text-[#030716]"
                    >
                      Fabricated Products
                    </Link>
                    <Link
                      to="/gallery"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-1 hover:text-[#030716]"
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
