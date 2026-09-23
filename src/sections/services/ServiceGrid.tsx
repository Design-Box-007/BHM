import React from 'react';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import { ImageReveal } from '../../components/ImageReveal/ImageReveal';
import { services } from '../../data/services';
import { CheckCircle2, FileText } from 'lucide-react';

export const ServiceGrid: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#030716] border-b border-white/10">
      <Container>
        <div className="flex flex-col space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center p-8 sm:p-12 rounded-[12px] bg-[#101836]/30 border border-white/10"
              >
                {/* Media Column (5 cols) */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <ImageReveal
                    src={service.image}
                    alt={service.title}
                    aspectRatio="aspect-[4/3]"
                    overlay
                  />
                </div>

                {/* Content Column (7 cols) */}
                <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono font-bold text-[#ffb400]">
                        SERVICE // {service.number}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      <span className="text-xs uppercase tracking-wider text-[#bfbfbf]">
                        {service.category}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
                      {service.title}
                    </h2>

                    <p className="text-base text-[#ffb400]/90 font-medium mb-4">
                      {service.headline}
                    </p>

                    <p className="text-sm text-[#bfbfbf] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Capabilities grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2.5 text-xs text-white/90">
                          <CheckCircle2 className="w-4 h-4 text-[#ffb400] shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* Specs Table */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-[8px] bg-white/5 border border-white/10 mb-8">
                      {service.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex flex-col">
                          <span className="text-[10px] uppercase font-mono text-[#bfbfbf]">
                            {spec.label}
                          </span>
                          <span className="text-xs font-bold text-white mt-1">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Button to="/contact" variant="primary" icon="arrow-right">
                      Request Technical RFQ
                    </Button>
                    <div className="flex items-center gap-2 text-xs text-[#bfbfbf]">
                      <FileText className="w-4 h-4 text-[#ffb400]" />
                      <span>Mill Test Reports & WPS Included</span>
                    </div>
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
