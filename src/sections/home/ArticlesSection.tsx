import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import { ArrowUpRight } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const articles = [
    {
      id: 'welding-safety-large-job-sites',
      date: 'Dec 24',
      title: 'How to ensure welding safety on large job sites successfully today',
      category: 'Safety Protocols',
    },
    {
      id: 'advanced-pipe-welding-standards',
      date: 'Nov 18',
      title: 'Quality and precision in advanced industrial pipe welding systems',
      category: 'NDT Testing',
    },
    {
      id: 'structural-integrity-high-stress',
      date: 'Oct 30',
      title: 'Mastering structural integrity and load resistance in high-stress steel',
      category: 'Structural Engineering',
    },
    {
      id: 'robotic-cnc-welding-trends',
      date: 'Sep 15',
      title: 'The future of automated robotic welding and CNC metal fabrication',
      category: 'Automation',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#fcf8f2] text-[#030716] border-b border-black/10">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#686e86] mb-2 block">
              // Articles
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#030716]">
              Expert welding articles
            </h2>
          </div>
          <Button to="/services" variant="dark-border" icon="arrow-right">
            View all
          </Button>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Big Featured Image Card (4.5 cols) */}
          <div className="lg:col-span-5">
            <Link
              to="/about"
              className="group block rounded-[12px] overflow-hidden bg-white border border-black/10 shadow-md hover:shadow-xl transition-all duration-300 p-4"
            >
              <div className="rounded-[8px] overflow-hidden aspect-[4/3] mb-4 bg-black">
                <img
                  src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
                  alt="Welding safety procedures"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-sans font-bold text-[#030716] group-hover:underline leading-snug">
                How to ensure welding safety on large job sites successfully today
              </h3>
            </Link>
          </div>

          {/* Right Column: Article List with Hover Card Effect (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            {articles.map((article, idx) => (
              <Link
                key={article.id}
                to="/about"
                className={`group flex items-center justify-between p-5 sm:p-6 rounded-[10px] transition-all duration-300 ${
                  idx === 0
                    ? 'bg-white border border-black/10 shadow-lg'
                    : 'bg-transparent hover:bg-white/70 hover:shadow-md border-b border-black/10'
                }`}
              >
                <div className="flex items-center gap-6 sm:gap-10">
                  <span className="text-xs font-mono font-semibold text-[#686e86] shrink-0">
                    {article.date}
                  </span>
                  <h4 className="text-sm sm:text-base font-sans font-bold text-[#030716] group-hover:underline">
                    {article.title}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-[#030716] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
