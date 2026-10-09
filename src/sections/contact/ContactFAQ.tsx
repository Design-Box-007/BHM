import React, { useState } from 'react';
import { Container } from '../../components/Container/Container';
import { siteConfig } from '../../data/site';
import { Plus, Minus } from 'lucide-react';
import { clsx } from 'clsx';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: '1',
    question: 'How can I contact BHMI Steels?',
    answer:
      'You can contact BHMI Steels through the contact form, phone, email, or other contact details provided on our website. Our team will review your enquiry and respond with the relevant information.',
  },
  {
    id: '2',
    question: 'How can I request a steel fabrication quotation?',
    answer:
      'Submit your project requirements through our contact form, preferably including technical drawings, dimensions, material specifications, quantities, and project details. Our team can review the information and prepare a suitable quotation.',
  },
  {
    id: '3',
    question: 'What information should I provide when making an enquiry?',
    answer:
      'For a faster response, provide details such as the type of fabrication required, materials, dimensions, quantities, drawings, application, and expected project timeline.',
  },
  {
    id: '4',
    question: 'Can I send technical drawings with my enquiry?',
    answer:
      'Yes. Technical drawings and project specifications can be shared with our team to help us understand your fabrication, welding, machining, or metalworking requirements.',
  },
  {
    id: '5',
    question: 'Does BHMI Steels handle custom fabrication projects?',
    answer:
      'Yes. We accept enquiries for custom steel fabrication, precision welding, metal cutting, CNC machining, blasting and coating, and architectural metalwork.',
  },
  {
    id: '6',
    question: 'Does BHMI Steels provide services across the UAE?',
    answer:
      'Yes. We support industrial, commercial, construction, manufacturing, and architectural projects across the UAE, subject to project requirements and location.',
  },
  {
    id: '7',
    question: 'How quickly will BHMI Steels respond to my enquiry?',
    answer:
      'Our team will review your enquiry and respond as soon as possible. Providing complete project information can help us understand your requirements and respond more efficiently.',
  },
  {
    id: '8',
    question: 'Can I discuss my project requirements before requesting a quotation?',
    answer:
      'Yes. You can contact our team to discuss your steel fabrication, welding, CNC machining, metal cutting, or custom metalwork requirements before proceeding with a quotation.',
  },
  {
    id: '9',
    question: 'Can BHMI Steels handle large industrial fabrication requirements?',
    answer:
      'Yes. You can share your project scope, drawings, quantities, and technical specifications with our team so we can assess the fabrication requirements.',
  },
  {
    id: '10',
    question: 'How do I get started with BHMI Steels?',
    answer:
      'Simply send us your project requirements or contact our team. Share your drawings and specifications where available, and we will guide you through the next steps.',
  },
];

export const ContactFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-[#204268] text-white border-b border-white/10 overflow-hidden font-sans">
      <Container>
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-10 md:pb-14 border-b border-white/10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-3 block">
              // Still have questions?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/30 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#204268] transition-all duration-300"
            >
              + CALL FOR ENQUIRY +
            </a>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-white/10">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-6 sm:py-7 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between gap-6 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 pr-4">
                    <span className="text-sm sm:text-base font-mono font-bold text-white/50 group-hover:text-white transition-colors">
                      {faq.id.padStart(2, '0')}.
                    </span>
                    <span className="text-base sm:text-lg md:text-xl font-display font-bold text-white group-hover:text-white/80 transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <div className="shrink-0">
                    <span
                      className={clsx(
                        'inline-flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200',
                        isOpen
                          ? 'bg-white text-[#204268] border-white'
                          : 'border-white/20 text-white group-hover:border-white group-hover:bg-white/10'
                      )}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </div>
                </button>

                {/* Collapsible Answer */}
                <div
                  className={clsx(
                    'grid transition-all duration-300 ease-in-out overflow-hidden',
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                  )}
                >
                  <div className="overflow-hidden pl-7 sm:pl-9">
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl pr-6 font-normal">
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
