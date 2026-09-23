import React, { useState } from 'react';
import { Container } from '../../components/Container/Container';
import { CheckCircle, Send, ShieldAlert } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: 'Structural Welding',
    projectScope: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setLoading(true);

    // Simulate clean submission handler
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="py-24 md:py-32 bg-[#030716] border-b border-white/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Form Intro & FAQ (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ffb400] mb-3 block">
                // Quotation Process
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6">
                Request a comprehensive technical quotation
              </h2>
              <p className="text-sm sm:text-base text-[#bfbfbf] leading-relaxed mb-8">
                Attach your CAD files, fabrication drawings, or technical specifications. Our certified welding inspectors and estimating engineers will review your bill of materials and deliver an itemized quote within 24 hours.
              </p>

              <div className="space-y-4 p-6 rounded-[10px] bg-[#101836]/50 border border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffb400]">
                  What happens next?
                </h4>
                <div className="space-y-3 text-xs text-[#bfbfbf]">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                    <span>Engineering team performs initial CAD feasibility check & material nesting.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                    <span>Formal price estimation with production lead times & NDT test schedules.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                    <span>Dedicated project engineer assigned to oversee quality execution.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#bfbfbf]">
              <span>Confidentiality guaranteed. All proprietary prints protected by strict mutual NDAs.</span>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-[12px] bg-[#101836]/40 border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#ffb400]/20 text-[#ffb400] flex items-center justify-center">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-display font-bold uppercase text-white">
                  Quotation Request Received
                </h3>
                <p className="text-sm text-[#bfbfbf] max-w-md">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our estimating engineering department has received your request and will contact you at <strong className="text-white">{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      serviceType: 'Structural Welding',
                      projectScope: '',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#030716] bg-[#ffb400] rounded-[6px] hover:bg-white transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 rounded-[6px] bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#bfbfbf] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Robert Smith"
                      className="w-full px-4 py-3 rounded-[6px] bg-white/5 border border-white/15 text-white text-sm focus:border-[#ffb400] focus:outline-hidden transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#bfbfbf] mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="r.smith@contractor.com"
                      className="w-full px-4 py-3 rounded-[6px] bg-white/5 border border-white/15 text-white text-sm focus:border-[#ffb400] focus:outline-hidden transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#bfbfbf] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-4 py-3 rounded-[6px] bg-white/5 border border-white/15 text-white text-sm focus:border-[#ffb400] focus:outline-hidden transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#bfbfbf] mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Apex Construction LLC"
                      className="w-full px-4 py-3 rounded-[6px] bg-white/5 border border-white/15 text-white text-sm focus:border-[#ffb400] focus:outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#bfbfbf] mb-2">
                    Primary Service Category
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[6px] bg-[#101836] border border-white/15 text-white text-sm focus:border-[#ffb400] focus:outline-hidden transition-colors cursor-pointer"
                  >
                    <option value="Structural Welding">Structural Steel Welding (AWS D1.1)</option>
                    <option value="Metal Fabrication">CNC Metal Fabrication & Laser Cutting</option>
                    <option value="Pipe Welding">High-Pressure Pipe Welding (ASME B31.3)</option>
                    <option value="Custom Fabrication">Custom Industrial Prototype & Skid</option>
                    <option value="Emergency Repair">Emergency On-Site Mobile Welding</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#bfbfbf] mb-2">
                    Project Specifications & Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe material grades, tolerances, estimated tonnage, and required delivery date..."
                    className="w-full px-4 py-3 rounded-[6px] bg-white/5 border border-white/15 text-white text-sm focus:border-[#ffb400] focus:outline-hidden transition-colors resize-y"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-[6px] bg-[#ffb400] text-[#030716] font-semibold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg cursor-pointer"
                  >
                    {loading ? (
                      <span>Processing Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Specification</span>
                      </>
                    )}
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
