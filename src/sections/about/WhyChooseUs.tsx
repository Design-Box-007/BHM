import React from 'react';
import { Container } from '../../components/Container/Container';
import { ShieldCheck, Cpu, Clock, CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      icon: ShieldCheck,
      title: 'Certified AWS & ASME Standards',
      description: 'Full compliance with AWS D1.1, D1.5, ASME Section IX, and EN 1090-2 execution classes for mission-critical installations.',
    },
    {
      icon: Cpu,
      title: 'State-of-the-Art CNC Machinery',
      description: '12kW fiber laser cutting, 5-axis robotic beveling, and automated submerged-arc welding ensuring micron-level repeatability.',
    },
    {
      icon: CheckCircle,
      title: '100% Non-Destructive Testing',
      description: 'In-house ultrasonic, magnetic particle, dye penetrant, and radiographic inspection for flawless internal and surface soundness.',
    },
    {
      icon: Clock,
      title: 'Rapid Turnaround & On-Site Rigs',
      description: '24/7 emergency dispatch teams and mobile welding rigs capable of rapid deployment directly to industrial job sites.',
    },
  ];

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-white text-[#204268] border-b border-[#204268]/10">
      <Container>
        <div className="max-w-3xl mb-8 sm:mb-12 md:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#204268]/70 mb-3 block font-sans">
            // Competitive Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[#204268]">
            Why leading contractors choose BHM
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-[12px] bg-[#204268] text-white border border-[#204268] shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-[8px] bg-white/10 border border-white/20 text-white flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold uppercase text-white mb-3 leading-snug">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans font-normal">
                    {adv.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/15 text-[11px] font-mono text-white/70">
                  // ADVANTAGE 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
