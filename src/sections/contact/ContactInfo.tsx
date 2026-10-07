import React from 'react';
import { Container } from '../../components/Container/Container';
import { siteConfig } from '../../data/site';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  const infoCards = [
    {
      icon: Phone,
      title: 'Telephone',
      label: 'Main Office & Dispatch',
      value: siteConfig.phone,
      action: `tel:${siteConfig.phoneRaw}`,
      subtext: '24/7 Emergency Line Available',
    },
    {
      icon: Mail,
      title: 'Email Estimates',
      label: 'Direct RFQs & Engineering',
      value: siteConfig.email,
      action: `mailto:${siteConfig.email}`,
      subtext: 'Replies within 4 business hours',
    },
    {
      icon: MapPin,
      title: 'Facility Location',
      label: 'Plant & Executive Office',
      value: siteConfig.address.full,
      action: 'https://maps.google.com',
      subtext: 'Visitors by prior appointment',
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      label: 'Workshop & Floor',
      value: siteConfig.businessHours.weekdays,
      subtext: siteConfig.businessHours.saturday,
    },
  ];

  return (
    <section className="py-20 bg-[#204268] border-b border-white/10 font-sans">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-[10px] bg-white/5 border border-white/10 flex flex-col justify-between hover:border-white/40 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="w-10 h-10 rounded-[6px] bg-white/10 border border-white/15 text-white flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/60 block mb-1">
                    {card.label}
                  </span>
                  <h3 className="text-xl font-display font-bold uppercase text-white mb-2">
                    {card.title}
                  </h3>
                  {card.action ? (
                    <a
                      href={card.action}
                      className="text-sm font-medium text-white/90 hover:text-white transition-colors leading-relaxed block"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-white/90 leading-relaxed">
                      {card.value}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-white/60">
                  {card.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
