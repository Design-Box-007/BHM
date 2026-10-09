import React, { useState } from 'react';
import { Container } from '../../components/Container/Container';
import { siteConfig } from '../../data/site';
import { CheckCircle2, Mail, Phone, Clock, Send, ArrowUpRight } from 'lucide-react';

export const ContactHero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Custom Metal Fabrication',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-44 md:pb-24 bg-[#204268] border-b border-white/10 overflow-hidden text-white font-sans">
      {/* Subtle Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.08),_transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        {/* Top Header Row: GET IN TOUCH & Description */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-12 md:pb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-3 block">
              // Direct Engineering Support
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-white leading-none">
              Get In Touch
            </h1>
          </div>
          <div className="lg:max-w-md pb-1">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              Have a custom metal fabrication, precision cutting, machining, or welding project? Our engineering team is ready to assist you.
            </p>
          </div>
        </div>

        {/* Main Content: 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-8 sm:pt-12 md:pt-16 items-start">
          {/* =========================================================================
              LEFT COLUMN: CONTACT INFO & INDUSTRIAL IMAGE
             ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {/* Direct Contact Links */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-white/60 block">Email Us</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-white/80 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-white/60 block">Call Us</span>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-white/80 transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-white/60 block">Working Hours</span>
                  <span className="text-xs sm:text-sm font-medium text-white/90 block">
                    {siteConfig.businessHours.weekdays}
                  </span>
                </div>
              </div>
            </div>

            {/* Industrial Photo on Left */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/15 group relative bg-white/5">
              <img
                src="/images/hero-welder.jpg"
                alt="BHMI Steels Precision Fabrication Facility"
                className="w-full h-64 sm:h-72 lg:h-80 object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#204268]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-[11px] font-semibold text-white uppercase tracking-wider border border-white/20 inline-block mb-1">
                  BHMI Engineering Hub
                </span>
                <p className="text-xs text-white/90">
                  Precision steel fabrication, certified welding & CNC machining
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-white/60 block mb-3">
                Follow BHMI
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { name: 'Facebook', href: 'https://facebook.com' },
                  { name: 'Instagram', href: 'https://instagram.com' },
                  { name: 'Twitter', href: 'https://x.com' },
                  { name: 'LinkedIn', href: 'https://linkedin.com' },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider border border-white/25 rounded-full text-white hover:bg-white hover:text-[#204268] transition-all inline-flex items-center gap-1"
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-70" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: PROPER STRUCTURED CONTACT FORM
             ========================================================================= */}
          <div className="lg:col-span-7 bg-white/5 rounded-2xl border border-white/15 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-white/15 text-white flex items-center justify-center mx-auto border border-white/30">
                  <CheckCircle2 className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
                  Quotation Request Received
                </h3>
                <p className="text-sm text-white/80 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting BHMI Steels. Our technical estimating team will review your specifications and get back to you promptly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Custom Metal Fabrication',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#204268] bg-white rounded-lg hover:bg-white/90 transition-all shadow-md cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 pb-4 border-b border-white/10">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-tight">
                    Request a Fabrication Quotation
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 mt-1 font-sans">
                    Fill out the form below with your project details or drawings specifications.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                        Full Name <span className="text-white">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-white/15 focus:ring-1 focus:ring-white transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                        Email Address <span className="text-white">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. john@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-white/15 focus:ring-1 focus:ring-white transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Service Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +971 50 123 4567"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-white/15 focus:ring-1 focus:ring-white transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                        Required Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#204268] border border-white/20 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-sm cursor-pointer"
                      >
                        <option value="Custom Metal Fabrication" className="bg-[#204268] text-white">Custom Metal Fabrication</option>
                        <option value="Precision Metal Cutting" className="bg-[#204268] text-white">Precision Metal Cutting</option>
                        <option value="Industrial Blasting & Coating" className="bg-[#204268] text-white">Industrial Blasting & Coating</option>
                        <option value="Precision CNC Machining" className="bg-[#204268] text-white">Precision CNC Machining</option>
                        <option value="Interior & Home Décor" className="bg-[#204268] text-white">Interior & Home Décor</option>
                        <option value="Certified Welding Solutions" className="bg-[#204268] text-white">Certified Welding Solutions</option>
                        <option value="Other Fabrication Enquiry" className="bg-[#204268] text-white">Other Fabrication Enquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Message / Project Requirements */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                      Project Requirements & Dimensions <span className="text-white">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Please describe material grade, dimensions, quantities, timeline, or drawing specifications..."
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-white/15 focus:ring-1 focus:ring-white transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-white/60">
                      * Technical drawings can also be shared after initial enquiry
                    </span>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white text-[#204268] text-xs font-bold uppercase tracking-widest hover:bg-white/90 hover:shadow-lg transition-all duration-300 cursor-pointer disabled:opacity-50 shrink-0"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{loading ? 'Submitting...' : 'SUBMIT ENQUIRY'}</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
