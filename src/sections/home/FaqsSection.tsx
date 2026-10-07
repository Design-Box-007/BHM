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
    question: 'What services does BHM Steels provide?',
    answer:
      'BHM Steels provides steel fabrication, metal cutting, precision welding, CNC machining, blasting and coating, and custom metalwork for industrial, commercial, construction, and architectural applications.',
  },
  {
    number: '02',
    question: 'Does BHM Steels provide custom steel fabrication?',
    answer:
      'Yes. We provide custom steel fabrication based on project drawings, dimensions, material specifications, design requirements, and application needs.',
  },
  {
    number: '03',
    question: 'What types of welding services do you offer?',
    answer:
      'Our welding capabilities include MIG, TIG, and ARC welding, along with structural welding, custom fabrication, heavy-duty welding, and on-site welding and assembly.',
  },
  {
    number: '04',
    question: 'Do you provide CNC metal cutting services?',
    answer:
      'Yes. Our precision metal cutting services include CNC plasma and laser cutting, steel plate cutting, section cutting, and dimensional cutting for accurate fabrication.',
  },
  {
    number: '05',
    question: 'What is included in your metal fabrication services?',
    answer:
      'Our metal fabrication process can include cutting, bending, forming, welding, machining, assembly, finishing, and surface treatment, depending on the project requirements.',
  },
  {
    number: '06',
    question: 'Does BHM Steels offer CNC machining?',
    answer:
      'Yes. We provide precision CNC machining, including turning, milling, drilling, and component finishing for applications requiring accurate dimensions and repeatable results.',
  },
  {
    number: '07',
    question: 'Do you provide blasting and protective coating?',
    answer:
      'Yes. Our blasting and coating services include surface preparation, abrasive blasting, corrosion protection, and industrial protective coatings for fabricated metal components.',
  },
  {
    number: '08',
    question: 'Can you handle large industrial fabrication projects?',
    answer:
      'Yes. BHM Steels supports industrial and heavy-duty fabrication projects, providing customized welding, structural steelwork, metal fabrication, machining, and finishing solutions based on project specifications.',
  },
  {
    number: '09',
    question: 'Do you provide custom metalwork for interiors and architectural projects?',
    answer:
      'Yes. We fabricate custom metal furniture, architectural metalwork, partitions, frames, decorative elements, fixtures, and other bespoke metal components for interior and architectural applications.',
  },
  {
    number: '10',
    question: 'Why choose BHM Steels for steel fabrication in the UAE?',
    answer:
      'BHM Steels combines precision engineering, skilled workmanship, advanced fabrication capabilities, quality control, safety-focused processes, and customized solutions to support industrial, commercial, construction, and architectural projects across the UAE.',
  },
];

export const FaqsSection: React.FC = () => {
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
              Frequently Asked Questions
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
                className={`transition-colors duration-200 ${isOpen ? 'bg-[#204268]/[0.02]' : 'bg-transparent'
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
                      className={`w-8 h-8 rounded-full border border-[#204268]/20 flex items-center justify-center text-[#204268] transition-all duration-300 ${isOpen
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
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-7' : 'grid-rows-[0fr] opacity-0 pb-0'
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
