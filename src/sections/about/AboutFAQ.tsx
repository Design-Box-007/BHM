import React, { useState } from 'react';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  number: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    number: '01',
    question: 'What does BHM Steels specialize in?',
    answer:
      'BHM Steels specializes in steel fabrication, precision welding, metal cutting, CNC machining, blasting and coating, and custom metalwork for industrial, commercial, construction, and architectural applications.',
  },
  {
    number: '02',
    question: 'Where does BHM Steels provide its services?',
    answer:
      'BHM Steels provides steel fabrication and metalworking solutions across the UAE, supporting projects based on their specific technical and fabrication requirements.',
  },
  {
    number: '03',
    question: 'What types of projects does BHM Steels handle?',
    answer:
      'We support industrial, construction, manufacturing, commercial, architectural, and interior projects, from custom metal components to larger fabrication requirements.',
  },
  {
    number: '04',
    question: 'Does BHM Steels provide custom fabrication?',
    answer:
      'Yes. Our custom metal fabrication services can be tailored to project drawings, dimensions, material specifications, design requirements, and application needs.',
  },
  {
    number: '05',
    question: 'What welding capabilities does BHM Steels offer?',
    answer:
      'We provide MIG, TIG, and ARC welding, including structural welding, heavy-duty fabrication, custom welding, and assembly solutions.',
  },
  {
    number: '06',
    question: 'Does BHM Steels offer complete fabrication services?',
    answer:
      'Yes. Our capabilities cover multiple stages of fabrication, including metal cutting, forming, welding, CNC machining, surface preparation, blasting, coating, and finishing.',
  },
  {
    number: '07',
    question: 'How does BHM Steels maintain fabrication quality?',
    answer:
      'We focus on precision, skilled workmanship, dimensional accuracy, material requirements, and quality control throughout the fabrication process to deliver reliable finished components.',
  },
  {
    number: '08',
    question: 'Can BHM Steels work from technical drawings?',
    answer:
      'Yes. Our fabrication team can work from technical drawings, dimensions, specifications, and project requirements to develop customized metal and steel components.',
  },
  {
    number: '09',
    question: 'Does BHM Steels handle architectural and interior metalwork?',
    answer:
      'Yes. We provide custom architectural metalwork, decorative metal components, furniture, partitions, frames, fixtures, and other interior fabrication solutions.',
  },
  {
    number: '10',
    question: 'Why choose BHM Steels for a fabrication project in the UAE?',
    answer:
      'BHM Steels combines precision engineering, skilled workmanship, advanced fabrication capabilities, comprehensive services, and customized project support to deliver durable metal solutions for diverse applications across the UAE.',
  },
];

export const AboutFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-white text-[#204268] border-b border-[#204268]/10">
      <Container>
        {/* Top Header Row matching site style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 sm:mb-10 md:mb-14 pb-4 sm:pb-6 md:pb-8 border-b border-[#204268]/10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#204268]/70 mb-2.5 block font-sans">
              // FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#204268] tracking-tight">
              Frequently Asked Questions About BHM Steels
            </h2>
          </div>
          <Button to="/contact" variant="dark-border">
            GET IN TOUCH
          </Button>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full max-w-4xl mx-auto divide-y divide-[#204268]/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.number}
                className={`transition-colors duration-200 ${
                  isOpen ? 'bg-[#204268]/[0.02]' : 'bg-transparent'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-6 sm:py-7 flex items-start justify-between gap-4 sm:gap-8 text-left cursor-pointer group select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 sm:gap-6 pr-2">
                    <span className="text-sm sm:text-base font-display font-bold text-[#204268]/50 group-hover:text-[#204268] transition-colors pt-0.5 shrink-0">
                      {faq.number}.
                    </span>
                    <h3 className="text-base sm:text-lg lg:text-xl font-display font-bold text-[#204268] group-hover:opacity-80 transition-opacity leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="shrink-0 pt-0.5">
                    <div
                      className={`w-8 h-8 rounded-full border border-[#204268]/20 flex items-center justify-center text-[#204268] transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#204268] text-white rotate-180'
                          : 'group-hover:border-[#204268] group-hover:bg-[#204268]/5'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Collapsible Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-7' : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                >
                  <div className="overflow-hidden pl-8 sm:pl-12 pr-4 sm:pr-12">
                    <p className="text-sm sm:text-base text-[#204268]/80 font-sans font-normal leading-relaxed">
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
