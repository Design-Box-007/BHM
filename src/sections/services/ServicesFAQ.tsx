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
    question: 'What steel fabrication services does BHMI Steels provide?',
    answer:
      'BHMI Steels provides custom metal fabrication, precision metal cutting, welding, CNC machining, blasting and coating, and interior and architectural metalwork for industrial, commercial, construction, manufacturing, and architectural projects.',
  },
  {
    number: '02',
    question: 'Does BHMI Steels provide custom metal fabrication?',
    answer:
      'Yes. Our custom steel fabrication services are developed according to technical drawings, dimensions, material specifications, tolerances, and specific project requirements.',
  },
  {
    number: '03',
    question: 'What types of welding does BHMI Steels offer?',
    answer:
      'We provide MIG, TIG, and ARC welding for structural steel, industrial fabrication, commercial projects, custom metalwork, and heavy-duty applications.',
  },
  {
    number: '04',
    question: 'What metal cutting services are available?',
    answer:
      'Our precision metal cutting services include cutting steel plates, sheets, sections, pipes, and custom profiles to specified dimensions for fabrication and assembly.',
  },
  {
    number: '05',
    question: 'What is included in your CNC machining services?',
    answer:
      'Our CNC machining capabilities include processes such as CNC milling, turning, drilling, boring, and precision finishing for components requiring accurate dimensions and repeatable results.',
  },
  {
    number: '06',
    question: 'Why are blasting and coating important for steel?',
    answer:
      'Blasting and coating help prepare and protect steel surfaces. Blasting removes rust, scale, and contaminants, while protective coatings can help improve resistance to corrosion and environmental exposure.',
  },
  {
    number: '07',
    question: 'What industries do your fabrication services support?',
    answer:
      'We support construction, manufacturing, engineering, industrial, commercial, infrastructure, architectural, and interior projects with customized metal and steel fabrication solutions.',
  },
  {
    number: '08',
    question: 'Can BHMI Steels fabricate components from technical drawings?',
    answer:
      'Yes. We can work with technical drawings, dimensions, material specifications, design requirements, and project documentation to manufacture components according to the required specifications.',
  },
  {
    number: '09',
    question: 'Does BHMI Steels provide architectural and interior metalwork?',
    answer:
      'Yes. We fabricate custom metal furniture, partitions, frames, fixtures, decorative elements, architectural features, and other bespoke metal components for interior and architectural applications.',
  },
  {
    number: '10',
    question: 'Can BHMI Steels handle complete fabrication requirements?',
    answer:
      'Yes. Our integrated capabilities allow us to support multiple stages of a project, from metal cutting and fabrication to welding, CNC machining, surface preparation, blasting, coating, and finishing.',
  },
  {
    number: '11',
    question: 'Where does BHMI Steels provide fabrication services?',
    answer:
      'BHMI Steels provides steel fabrication and metalworking solutions across the UAE, supporting projects with customized fabrication and engineering requirements.',
  },
  {
    number: '12',
    question: 'How can I request a steel fabrication project?',
    answer:
      'You can contact BHMI Steels with your project drawings, specifications, dimensions, material requirements, quantities, and application details. Our team can review the requirements and determine the appropriate fabrication solution.',
  },
];

export const ServicesFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-white text-[#204268] border-b border-[#204268]/10">
      <Container>
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 sm:mb-10 md:mb-14 pb-4 sm:pb-6 md:pb-8 border-b border-[#204268]/10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#204268]/70 mb-2.5 block font-sans">
              // FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#204268] tracking-tight">
              Frequently Asked Questions – BHMI Steels Services
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
