import React, { useState } from 'react';
import { Container } from '../../components/Container/Container';
import { CheckCircle2 } from 'lucide-react';

export const ContactHero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name && !formData.email && !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-[#030716] border-b border-white/10 overflow-hidden text-white">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#101836]/40 via-[#030716] to-[#030716] pointer-events-none" />

      <Container className="relative z-10">
        {/* Top Header Row: GET IN TOUCH & Description */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/10">
          <div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-display font-black uppercase tracking-tight text-white leading-none">
              Get In Touch
            </h1>
          </div>
          <div className="lg:max-w-xs xl:max-w-sm pb-1">
            <p className="text-sm sm:text-base text-[#bfbfbf] leading-relaxed font-normal">
              Get in touch with our team for reliable welding and fabrication solutions. Whether you have a project inquiry.
            </p>
          </div>
        </div>

        {/* Main Content: 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 sm:pt-16">
          {/* Left Column: Email, Timing Box, Image, Social Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 contact-title-box-2">
            <div className="section-title-block-2">
              {/* Email Link */}
              <a
                rel="noopener noreferrer"
                href="mailto:Info.support@gmail.com"
                className="font-['Mona_Sans',sans-serif] text-[24px] leading-[34px] font-medium tracking-normal text-white hover:text-[#ffb400] transition-colors block email-link"
              >
                Info.support@gmail.com
              </a>

              {/* Timing Box */}
              <div className="contact-timing-box mt-3">
                <div className="contact-timing text-[13px] text-[#bfbfbf]">
                  Mon-Fri: 09:00 - 18:00 (GMT)
                </div>
                <div className="contact-text text-[11px] text-[#686e86] mt-0.5" data-label="div.contact-text">
                  Time we are here
                </div>
              </div>

              {/* Image Box */}
              <div className="contact-image-box mt-8 rounded-[12px] overflow-hidden max-w-[420px] shadow-2xl" data-label="div.contact-image-box">
                <img
                  src="https://cdn.prod.website-files.com/69b7dbc434c7b9bb087b696d/69ca6879c32e896c9c8d09d2_011a469ff7999a8f8e34dcfeee456b12_Contact%20Image.png"
                  loading="lazy"
                  alt="Contact Image"
                  className="contact-image w-full h-auto object-cover rounded-[12px] transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Social List Box */}
            <div className="contact-info-box pt-2">
              <div className="contact-social-list flex flex-wrap items-center gap-6">
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="social-link-block group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#bfbfbf] hover:text-white transition-colors"
                >
                  <span className="social-text">Facebook</span>
                  <img
                    src="https://cdn.prod.website-files.com/69b7dbc434c7b9bb087b696d/69e217b713ce3674b5c8b5bf_arrow%20white.svg"
                    loading="lazy"
                    alt="Arrow icon"
                    className="arrow-icon w-2.5 h-2.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://twitter.com/"
                  target="_blank"
                  className="social-link-block group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#bfbfbf] hover:text-white transition-colors"
                >
                  <span className="social-text">Twitter</span>
                  <img
                    src="https://cdn.prod.website-files.com/69b7dbc434c7b9bb087b696d/69e217b713ce3674b5c8b5bf_arrow%20white.svg"
                    loading="lazy"
                    alt="Arrow icon"
                    className="arrow-icon w-2.5 h-2.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="social-link-block group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#bfbfbf] hover:text-white transition-colors"
                >
                  <span className="social-text">Instagram</span>
                  <img
                    src="https://cdn.prod.website-files.com/69b7dbc434c7b9bb087b696d/69e217b713ce3674b5c8b5bf_arrow%20white.svg"
                    loading="lazy"
                    alt="Arrow icon"
                    className="arrow-icon w-2.5 h-2.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Conversational Minimal Contact Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {submitted ? (
              <div className="py-16 px-8 rounded-[12px] bg-[#101836]/40 border border-white/10 text-center space-y-6">
                <div className="w-14 h-14 rounded-full bg-[#ffb400]/20 text-[#ffb400] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
                  Message Sent Successfully
                </h3>
                <p className="text-sm text-[#bfbfbf] max-w-md mx-auto">
                  Thank you for reaching out. A Forgeon engineering specialist will review your inquiry and respond promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', message: '' });
                  }}
                  className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#030716] bg-[#ffb400] rounded-[4px] hover:bg-white transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10 w-full max-w-2xl">
                {/* Field 1: Hello, I'm */}
                <div className="flex items-end gap-3 sm:gap-4">
                  <label htmlFor="name-input" className="shrink-0 font-['Mona_Sans',sans-serif] text-[20px] sm:text-[24px] leading-[34px] font-medium tracking-normal text-white whitespace-nowrap pb-1">
                    Hello, I'm
                  </label>
                  <div className="flex-1 border-b border-white/20 focus-within:border-white transition-colors">
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder=""
                      className="w-full bg-transparent border-none outline-none font-['Mona_Sans',sans-serif] text-[20px] sm:text-[24px] leading-[34px] font-medium tracking-normal text-white pb-1 px-1"
                    />
                  </div>
                </div>

                {/* Field 2: You can reach me at */}
                <div className="flex items-end gap-3 sm:gap-4">
                  <label htmlFor="email-input" className="shrink-0 font-['Mona_Sans',sans-serif] text-[20px] sm:text-[24px] leading-[34px] font-medium tracking-normal text-white whitespace-nowrap pb-1">
                    You can reach me at
                  </label>
                  <div className="flex-1 border-b border-white/20 focus-within:border-white transition-colors">
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder=""
                      className="w-full bg-transparent border-none outline-none font-['Mona_Sans',sans-serif] text-[20px] sm:text-[24px] leading-[34px] font-medium tracking-normal text-white pb-1 px-1"
                    />
                  </div>
                </div>

                {/* Field 3: or at */}
                <div className="flex items-end gap-3 sm:gap-4">
                  <label htmlFor="phone-input" className="shrink-0 font-['Mona_Sans',sans-serif] text-[20px] sm:text-[24px] leading-[34px] font-medium tracking-normal text-white whitespace-nowrap pb-1">
                    or at
                  </label>
                  <div className="flex-1 border-b border-white/20 focus-within:border-white transition-colors">
                    <input
                      id="phone-input"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full bg-transparent border-none outline-none font-['Mona_Sans',sans-serif] text-[20px] sm:text-[24px] leading-[34px] font-medium tracking-normal text-white pb-1 px-1"
                    />
                  </div>
                </div>

                {/* Field 4: Type here */}
                <div className="flex items-end gap-3 sm:gap-4">
                  <label htmlFor="message-input" className="shrink-0 font-['Mona_Sans',sans-serif] text-[20px] sm:text-[24px] leading-[34px] font-medium tracking-normal text-white whitespace-nowrap pb-1">
                    Type here
                  </label>
                  <div className="flex-1 border-b border-white/20 focus-within:border-white transition-colors">
                    <input
                      id="message-input"
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder=""
                      className="w-full bg-transparent border-none outline-none font-['Mona_Sans',sans-serif] text-[20px] sm:text-[24px] leading-[34px] font-medium tracking-normal text-white pb-1 px-1"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-10 py-3 rounded-[4px] border border-white/30 bg-transparent text-white text-xs font-bold uppercase tracking-widest hover:border-white hover:bg-white hover:text-[#030716] transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {loading ? 'Submitting...' : 'SUBMIT'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
