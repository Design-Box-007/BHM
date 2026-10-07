import React, { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../components/Container/Container';
import { galleryItems } from '../data/gallery';
import { SEO } from '../components/SEO/SEO';
import { CTA } from '../sections/home/CTA';
import { animatePageIn } from '../animations/pageTransitions';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Building,
  CheckCircle2,
  ShieldCheck,
  Award,
  ArrowRight,
} from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pageRef = useRef<HTMLDivElement>(null);

  const project = galleryItems.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pageRef.current) {
      animatePageIn(pageRef.current);
    }
  }, [id]);

  if (!project) {
    return <Navigate to="/gallery" replace />;
  }

  const otherProjects = galleryItems.filter((item) => item.id !== project.id).slice(0, 3);

  return (
    <div ref={pageRef} className="w-full bg-[#204268] min-h-screen text-white pt-24 md:pt-32 font-sans">
      <SEO
        title={`${project.title} | BHM Structural Bonding`}
        description={project.description}
      />

      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
          <span className="text-xs font-mono text-white border border-white/30 px-3 py-1 rounded-[4px] uppercase tracking-wider bg-white/5">
            {project.category}
          </span>
        </div>

        {/* Project Header */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-white mb-6">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-medium text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Hero Image */}
        <div className="relative w-full rounded-[16px] md:rounded-[24px] overflow-hidden border border-white/10 shadow-2xl mb-16 aspect-[16/9] md:aspect-[21/9] bg-[#204268]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#204268] via-transparent to-transparent opacity-60" />
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Main Case Study Story */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white mb-4">
                Project Overview & Execution
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-[12px] bg-white/5 border border-white/10">
              <h3 className="text-lg font-display font-bold uppercase text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-white" />
                Technical Highlights & Standards
              </h3>
              <ul className="space-y-3 text-sm text-white/80 font-normal">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>100% non-destructive testing (NDT) certification compliance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Certified under international structural bonding protocols.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Precision dimensional tolerances held within ±0.5mm across all structural intersections.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Full material traceability certificates and quality testing documentation provided.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Project Sidebar Meta */}
          <div className="lg:col-span-1">
            <div className="p-6 md:p-8 rounded-[12px] bg-white/5 border border-white/10 space-y-6 sticky top-28">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white/80 border-b border-white/10 pb-4">
                Project Information
              </h3>

              <div className="space-y-4 text-sm font-normal">
                <div>
                  <span className="text-xs uppercase text-white/60 block mb-1">Client</span>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Building className="w-4 h-4 text-white" />
                    <span>{project.client}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs uppercase text-white/60 block mb-1">Location</span>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <MapPin className="w-4 h-4 text-white" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs uppercase text-white/60 block mb-1">Year Completed</span>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Calendar className="w-4 h-4 text-white" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs uppercase text-white/60 block mb-1">Category</span>
                  <span className="inline-block px-2.5 py-1 bg-white/10 rounded-[4px] text-xs font-medium text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-[6px] bg-white text-[#204268] text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-colors"
                >
                  <span>Inquire About Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Recommendation Grid */}
        <div className="border-t border-white/10 pt-16 mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-display font-bold uppercase text-white">
              Related Industrial Projects
            </h3>
            <Link
              to="/gallery"
              className="text-xs font-bold uppercase tracking-wider text-white hover:underline"
            >
              View Full Gallery →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((item) => (
              <Link
                key={item.id}
                to={`/projects/${item.id}`}
                className="group relative rounded-[12px] overflow-hidden border border-white/10 bg-white/5 aspect-[16/10] shadow-lg hover:border-white/60 transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#204268] via-[#204268]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="text-[10px] font-mono uppercase text-white/70 block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-base font-display font-bold text-white group-hover:text-white/80 transition-colors">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <CTA />
    </div>
  );
};
