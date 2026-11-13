import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Container } from '../../components/Container/Container';
import { galleryItems, type GalleryItem } from '../../data/gallery';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';

export const GalleryGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Structural', 'Custom Fabrication', 'Stainless Steel', 'Industrial'];

  const filteredItems: GalleryItem[] = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null && filteredItems.length > 0) {
      setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
    }
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null && filteredItems.length > 0) {
      setLightboxIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  // Lock background screen scroll when lightbox modal is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const preventScroll = (e: Event) => {
        e.preventDefault();
      };

      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
      };
    }
  }, [lightboxIndex]);

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-[#204268] border-b border-white/10 min-h-[600px] relative font-sans">
      <Container>
        {/* Filter Pills Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12 pb-6 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {categories.map((cat) => {
              const count = cat === 'All'
                ? galleryItems.length
                : galleryItems.filter((i) => i.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={clsx(
                    'px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer font-sans inline-flex items-center gap-2',
                    selectedCategory === cat
                      ? 'bg-white text-[#204268] font-bold shadow-lg shadow-white/10 scale-105'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/20'
                  )}
                >
                  <span>{cat}</span>
                  <span
                    className={clsx(
                      'text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-mono',
                      selectedCategory === cat
                        ? 'bg-[#204268] text-white'
                        : 'bg-white/20 text-white/90'
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* <div className="text-xs sm:text-sm font-mono text-white/70 self-start sm:self-auto">
            Showing <span className="text-white font-bold">{filteredItems.length}</span> Projects
          </div> */}
        </div>

        {/* Gallery Image Grid with Same Dimension (aspect-[4/3]) and Responsive Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/15 hover:border-white/50 shadow-xl cursor-pointer aspect-[4/3] transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1.5"
            >
              {/* Image with uniform aspect ratio */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Gradient Overlay for Text Legibility */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#204268] via-[#204268]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" /> */}

              {/* Top Bar: Category Pill & Zoom Badge */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-[#204268]/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold uppercase tracking-wider font-sans shadow-md">
                  {item.category}
                </span>

                <div className="w-9 h-9 rounded-full bg-[#204268]/85 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-md">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Bottom Card Content: Title & Description */}
              {/* <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 flex flex-col justify-end">
                <h3 className="text-lg sm:text-xl font-display font-bold uppercase tracking-tight text-white mb-1.5 leading-snug line-clamp-1 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal line-clamp-2 mb-2 font-sans">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-xs text-white/70 pt-2 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[11px] uppercase tracking-wider text-white font-semibold flex items-center gap-1 font-sans">
                    <Sparkles className="w-3 h-3 text-white" /> View Full Image
                  </span>
                  <span className="font-mono text-[11px] text-white/70">
                    {item.location}
                  </span>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal - Mounted to Body via Portal */}
        {lightboxIndex !== null && currentItem && typeof document !== 'undefined' && createPortal(
          <div
            data-lenis-prevent
            className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md select-none overflow-hidden touch-none"
            onClick={closeLightbox}
          >
            {/* Top Bar with Title, Category, Counter & Close */}
            <div
              className="absolute top-3 inset-x-3 sm:top-5 sm:inset-x-6 z-50 flex items-center justify-between pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 bg-[#1e293b]/90 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full pointer-events-auto">
                <span className="text-xs sm:text-sm font-display font-bold text-white uppercase tracking-wider">
                  {currentItem.title}
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/20 text-white font-sans uppercase">
                  {currentItem.category}
                </span>
                <span className="text-xs text-white/60 font-mono hidden sm:inline">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1e293b]/90 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl hover:scale-105 pointer-events-auto"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Left Nav Button */}
            {filteredItems.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1e293b]/90 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl hover:scale-105"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Right Nav Button */}
            {filteredItems.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1e293b]/90 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl hover:scale-105"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Centered Image Container */}
            <div
              className="relative z-20 max-w-[94vw] sm:max-w-[88vw] md:max-w-5xl max-h-[82vh] flex flex-col items-center justify-center pt-10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-w-full max-h-[76vh] sm:max-h-[80vh] w-auto h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xl block mx-auto transition-transform duration-300"
              />

              <p className="text-center text-xs sm:text-sm text-white/80 mt-3 max-w-xl px-4 line-clamp-2">
                {currentItem.description}
              </p>
            </div>
          </div>,
          document.body
        )}
      </Container>
    </section>
  );
};
