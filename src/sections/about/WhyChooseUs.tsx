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
    <section className="py-24 md:py-32 bg-[#030716] border-b border-white/10">
      <Container>
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#ffb400] mb-3 block">
            // Competitive Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white">
            Why leading contractors choose Forgeon
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-[10px] bg-[#101836]/50 border border-white/10 hover:border-[#ffb400]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-[8px] bg-white/5 border border-white/10 text-[#ffb400] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold uppercase text-white mb-3">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#bfbfbf] leading-relaxed">
                    {adv.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-mono text-[#ffb400]">
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
