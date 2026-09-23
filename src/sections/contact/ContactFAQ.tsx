import React, { useState } from 'react';
import { Container } from '../../components/Container/Container';
import { siteConfig } from '../../data/site';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 'Q1',
    question: 'What types of welding services do you offer?',
    answer:
      'We offer comprehensive welding and metal fabrication solutions including MIG (GMAW), TIG (GTAW), Stick (SMAW), and Flux-Cored (FCAW) welding. Our capabilities span structural steel welding, ASME pressure vessel fabrication, high-pressure piping, sheet metal fabrication, precision CNC cutting, and custom component assembly.',
  },
  {
    id: 'Q2',
    question: 'Are your welders certified?',
    answer:
      'Yes, 100% of our welding personnel are fully certified to AWS (American Welding Society) D1.1, D1.2, and ASME Section IX standards. We maintain comprehensive Welder Performance Qualification Records (WPQR) and follow strict quality control protocols with certified welding inspectors (CWI).',
  },
  {
    id: 'Q3',
    question: 'Do you provide on-site welding services?',
    answer:
      'Yes, we deploy fully equipped mobile welding rigs for rapid on-site structural erection, heavy machinery repairs, plant shutdowns, pipeline tie-ins, and 24/7 emergency welding callouts across the region.',
  },
  {
    id: 'Q4',
    question: 'What industries do you serve?',
    answer:
      'We serve a diverse range of industries including industrial manufacturing, commercial construction & infrastructure, oil & gas, energy & power generation, maritime, aerospace ground support, and architectural metalwork.',
  },
];

export const ContactFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 sm:py-28 bg-white text-[#030716] border-b border-black/10 overflow-hidden">
      <Container>
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-black/10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#686e86] mb-3 block">
              // Still have questions?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#030716] tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <div>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-black/20 text-[#030716] text-xs font-semibold uppercase tracking-wider hover:bg-[#030716] hover:text-white transition-all duration-300"
            >
              + CALL FOR ENQUIRY +
            </a>
          </div>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-black/10">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-6 sm:py-8 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between gap-6 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 pr-4">
                    <span className="text-base sm:text-lg md:text-xl font-bold text-[#030716] group-hover:text-[#ffb400] transition-colors">
                      {faq.id}. {faq.question}
                    </span>
                  </div>

                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-black/15 text-[11px] font-semibold uppercase tracking-wider text-[#030716] group-hover:border-black group-hover:bg-[#030716] group-hover:text-white transition-all duration-200">
                      {isOpen ? '- CLOSE -' : '+ READ +'}
                    </span>
                  </div>
                </button>

                {/* Collapsible Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base text-[#686e86] leading-relaxed max-w-3xl pr-6">
                      {faq.answer}
                    </p>
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
