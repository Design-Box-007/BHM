import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import { componentsData, type ComponentItem } from '../../data/components';
import {
  Search,
  X,
  ZoomIn,
  CheckCircle2,
  Layers,
  SlidersHorizontal,
  Shield,
  Ruler,
  Cpu
} from 'lucide-react';
import { clsx } from 'clsx';

export const ComponentsList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalItem, setActiveModalItem] = useState<ComponentItem | null>(null);

  const categories = useMemo(() => {
    return ['All', 'Machines', 'Accessories'];
  }, []);

  const filteredComponents = useMemo(() => {
    return componentsData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query) ||
        item.material.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tagline.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const closeModal = useCallback(() => {
    setActiveModalItem(null);
  }, []);

  // Lock scroll & support ESC key when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    if (activeModalItem) {
      const originalBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeModalItem, closeModal]);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#f8fafc] text-slate-900 border-b border-[#204268]/15">
      <Container>
        {/* Top Control Bar: Category Filters & Search Input */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#204268]/15 shadow-sm">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#204268]/70 mr-1 shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#204268]" />
                Section:
              </span>
              {categories.map((cat) => {
                const count =
                  cat === 'All'
                    ? componentsData.length
                    : componentsData.filter((c) => c.category === cat).length;
                const isSelected = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={clsx(
                      'px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shrink-0 inline-flex items-center gap-2',
                      isSelected
                        ? 'bg-[#204268] text-white shadow-xs'
                        : 'bg-[#204268]/5 text-[#204268]/80 hover:bg-[#204268]/10 hover:text-[#204268]'
                    )}
                  >
                    <span>{cat}</span>
                    <span
                      className={clsx(
                        'text-[10px] px-1.5 py-0.2 rounded-full font-bold',
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#204268]/10 text-[#204268]'
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Box */}
            <div className="relative min-w-[260px] sm:min-w-[320px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#204268]/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search machines or accessories..."
                className="w-full pl-9 pr-9 py-2.5 text-xs sm:text-sm rounded-xl border border-[#204268]/20 focus:border-[#204268] focus:outline-hidden bg-slate-50/50 text-[#204268] placeholder:text-[#204268]/40 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-[#204268]/50 hover:text-[#204268] cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Result Count / Status */}
          <div className="flex items-center justify-between text-xs text-[#204268]/70 px-1 mt-3">
            <span>
              Showing <strong className="text-[#204268] font-bold">{filteredComponents.length}</strong> of {componentsData.length} items
            </span>
            {(selectedCategory !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-[#204268] font-semibold underline underline-offset-2 hover:opacity-80 cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Alternating Components List: Left Image + Right Details, then Right Image + Left Content */}
        {filteredComponents.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-[#204268]/15 shadow-sm max-w-lg mx-auto my-12">
            <Layers className="w-12 h-12 text-[#204268]/30 mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold text-[#204268] mb-2">No items matched</h3>
            <p className="text-sm text-[#204268]/70 mb-6">
              Try altering your keywords or category filters to find the machine or accessory you need.
            </p>
            <Button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              variant="secondary"
            >
              Reset All Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {filteredComponents.map((component, index) => {
              // Alternating Layout:
              // Even index (0, 2, 4...) => Image on the LEFT, Details on the RIGHT
              // Odd index (1, 3, 5...)  => Image on the RIGHT, Details on the LEFT
              const isEven = index % 2 === 0;

              return (
                <div
                  key={component.id}
                  id={component.id}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl border border-[#204268]/15 shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden"
                >
                  {/* Top Color Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#204268]/20 via-[#204268] to-[#204268]/20" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
                    {/* Image Column */}
                    <div
                      className={clsx(
                        'lg:col-span-6 flex flex-col',
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      )}
                    >
                      <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-[#204268]/15 shadow-sm bg-gradient-to-br from-slate-50 to-slate-100 group/img flex items-center justify-center p-4 sm:p-6">
                        <img
                          src={component.image}
                          alt={component.name}
                          loading="lazy"
                          className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover/img:scale-105"
                        />

                        {/* Top Category Badge */}
                        <div className="absolute top-3.5 left-3.5 z-10">
                          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#204268] text-xs font-bold uppercase tracking-wider shadow-sm border border-[#204268]/10 inline-flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#204268]" />
                            {component.category}
                          </span>
                        </div>

                        {/* Code Pill */}
                        {/* <div className="absolute top-3.5 right-3.5 z-10">
                          <span className="px-2.5 py-1 rounded-md bg-[#204268] text-white text-[11px] font-mono font-bold tracking-wider shadow-xs">
                            {component.code}
                          </span>
                        </div> */}

                        {/* Quick View Button Hover Overlay */}
                        <div className="absolute inset-0 bg-[#204268]/40 backdrop-blur-xs opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                          <button
                            onClick={() => setActiveModalItem(component)}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-[#204268] text-xs font-bold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                          >
                            <ZoomIn className="w-4 h-4 text-[#204268]" />
                            <span>View Full Specification</span>
                          </button>
                        </div>
                      </div>

                      {/* Tags under image */}
                      <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                        {component.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-[#204268]/5 text-[#204268]/80 text-[11px] font-semibold uppercase tracking-wider border border-[#204268]/10"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Details Column */}
                    <div
                      className={clsx(
                        'lg:col-span-6 flex flex-col justify-center text-left',
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      )}
                    >
                      {/* Meta Pretitle */}
                      <div className="flex items-center gap-2.5 mb-2.5">
                        {/* <span className="text-xs font-bold uppercase tracking-widest text-[#204268]/70 font-sans">
                          // {component.code}
                        </span> */}
                        {component.badge && (
                          <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-sm bg-[#204268]/10 text-[#204268] border border-[#204268]/20">
                            {component.badge}
                          </span>
                        )}
                      </div>

                      {/* Component Title */}
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#204268] leading-tight tracking-tight mb-3">
                        {component.name}
                      </h3>

                      {/* Tagline */}
                      <p className="text-sm sm:text-base font-semibold text-[#204268]/90 mb-3 leading-relaxed">
                        {component.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#204268]/75 leading-relaxed mb-6 font-sans">
                        {component.description}
                      </p>

                      {/* Specifications Grid */}
                      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6 p-3.5 sm:p-4 rounded-xl bg-[#204268]/5 border border-[#204268]/10">
                        {component.specs.map((spec) => (
                          <div key={spec.label} className="flex flex-col">
                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#204268]/60">
                              {spec.label}
                            </span>
                            <span className="text-xs sm:text-[13px] font-bold text-[#204268] font-sans truncate">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Key Features Bullet List */}
                      <div className="space-y-2 mb-8">
                        {component.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#204268]/85 font-sans">
                            <CheckCircle2 className="w-4 h-4 text-[#204268] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Primary Actions: Inquire & Quick Modal View */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Button
                          to="/contact"
                          variant="secondary"
                          icon="arrow-right"
                          className="px-5 py-2.5"
                        >
                          Inquire About {component.category === 'Machines' ? 'Machine' : 'Accessory'}
                        </Button>

                        <button
                          onClick={() => setActiveModalItem(component)}
                          className="px-4 py-2.5 rounded-[5px] text-xs font-semibold uppercase tracking-wider text-[#204268] hover:text-[#204268] hover:bg-[#204268]/10 border border-[#204268]/20 transition-all duration-300 inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <ZoomIn className="w-3.5 h-3.5 text-[#204268]" />
                          <span>Detailed Specs</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 sm:mt-24 p-6 sm:p-8 rounded-2xl bg-[#204268] text-white border border-white/15 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">Full Material Quality</h4>
                <p className="text-xs text-white/75 mt-0.5">High-grade certified steel components &amp; machinery.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Ruler className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">Precision Fabrication</h4>
                <p className="text-xs text-white/75 mt-0.5">Tight-tolerance plate cutting, bending &amp; punching.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">Custom-Fit Solutions</h4>
                <p className="text-xs text-white/75 mt-0.5">Bespoke manufacturing tailored to project drawings.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Lightbox / Modal */}
      {activeModalItem &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#204268]/80 backdrop-blur-md animate-fadeIn"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white text-slate-900 shadow-2xl border border-[#204268]/20 p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-[#204268] text-slate-600 hover:text-white transition-colors cursor-pointer z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Modal Image */}
                <div className="md:col-span-6 rounded-xl overflow-hidden border border-[#204268]/15 bg-gradient-to-br from-slate-50 to-slate-100 p-4 flex items-center justify-center">
                  <img
                    src={activeModalItem.image}
                    alt={activeModalItem.name}
                    className="w-full max-h-[380px] object-contain"
                  />
                </div>

                {/* Modal Info */}
                <div className="md:col-span-6 flex flex-col space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#204268] text-white">
                      {activeModalItem.category}
                    </span>
                    {activeModalItem.badge && (
                      <span className="px-2 py-0.5 text-xs font-semibold rounded-md bg-[#204268]/10 text-[#204268]">
                        {activeModalItem.badge}
                      </span>
                    )}
                  </div>

                  <h3 id="modal-title" className="text-xl sm:text-2xl font-display font-bold text-[#204268] leading-snug">
                    {activeModalItem.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#204268]/80 leading-relaxed font-sans">
                    {activeModalItem.description}
                  </p>

                  <div className="divide-y divide-[#204268]/10 border-y border-[#204268]/10 text-xs font-sans">
                    <div className="py-2 flex justify-between">
                      <span className="text-[#204268]/60 font-medium">Material:</span>
                      <span className="text-[#204268] font-bold text-right">{activeModalItem.material}</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span className="text-[#204268]/60 font-medium">Standards:</span>
                      <span className="text-[#204268] font-bold text-right">{activeModalItem.standards}</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span className="text-[#204268]/60 font-medium">Finish:</span>
                      <span className="text-[#204268] font-bold text-right">{activeModalItem.finish}</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span className="text-[#204268]/60 font-medium">Tolerance:</span>
                      <span className="text-[#204268] font-bold text-right">{activeModalItem.tolerance}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <Button
                      to="/contact"
                      variant="secondary"
                      icon="arrow-right"
                      onClick={closeModal}
                      className="w-full justify-center"
                    >
                      Inquire About This {activeModalItem.category === 'Machines' ? 'Machine' : 'Accessory'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};
