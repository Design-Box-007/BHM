import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Container } from '../../components/Container/Container';
import { galleryItems, type GalleryItem } from '../../data/gallery';
import { ArrowLeft, ArrowRight, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles } from 'lucide-react';
import { clsx } from 'clsx';

export const GalleryGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeAlbumId, setActiveAlbumId] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ['All', 'Structural', 'Piping', 'Custom Fabrication', 'Industrial'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const activeAlbum: GalleryItem | undefined = activeAlbumId
    ? galleryItems.find((item) => item.id === activeAlbumId)
    : undefined;

  const currentAlbumImages = activeAlbum?.images?.length ? activeAlbum.images : (activeAlbum ? [activeAlbum.image] : []);

  const openAlbum = (id: string) => {
    setActiveAlbumId(id);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBackToGrid = () => {
    setActiveAlbumId(null);
    setLightboxIndex(null);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null && currentAlbumImages.length > 0) {
      setLightboxIndex((prev) => ((prev! + 1) % currentAlbumImages.length));
    }
  }, [lightboxIndex, currentAlbumImages.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null && currentAlbumImages.length > 0) {
      setLightboxIndex((prev) => (prev! === 0 ? currentAlbumImages.length - 1 : prev! - 1));
    }
  }, [lightboxIndex, currentAlbumImages.length]);

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
    <section ref={sectionRef} className="py-10 sm:py-16 md:py-24 bg-[#204268] border-b border-white/10 min-h-[600px] relative">
      <Container>
        {/* VIEW 1: Main Category Cards Layout */}
        {!activeAlbum && (
          <div className="animate-fadeIn">
            {/* Filter Pills Header */}
            <div className="flex flex-wrap items-center gap-3 mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-white/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={clsx(
                    'px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer font-sans',
                    selectedCategory === cat
                      ? 'bg-white text-[#204268] font-bold shadow-lg shadow-white/10 scale-105'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/20'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Cards 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openAlbum(item.id)}
                  className="group relative rounded-2xl p-7 md:p-8 bg-white/5 border border-white/15 hover:border-white/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl cursor-pointer transform hover:-translate-y-1"
                >
                  {/* Top Bar inside Card: Quote Icon & View Images Button */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      {/* Stylized Quotation Mark */}
                      <span className="text-3xl font-serif font-black text-white leading-none select-none">
                        &ldquo;&ldquo;
                      </span>

                      {/* View Images Pill Button */}
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 group-hover:bg-white text-white group-hover:text-[#204268] border border-white/30 text-xs font-semibold uppercase tracking-wider transition-all duration-300 font-sans">
                        View Images
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-white group-hover:text-white/90 transition-colors leading-snug mb-3">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-sm md:text-[15px] text-white/80 leading-relaxed font-normal mb-6 font-sans">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom Meta Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70 font-mono">
                    <span className="text-white font-sans uppercase font-medium tracking-wider text-[11px]">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5 text-white" />
                      {item.images?.length || 1} Photos
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: Specific Gallery Images Grid Layout */}
        {activeAlbum && (
          <div className="animate-fadeIn">
            {/* Top Navigation Bar with Back Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
              <button
                onClick={handleBackToGrid}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#204268] hover:bg-white/90 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer self-start transform hover:-translate-x-1 font-sans"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-white font-sans">
                  {activeAlbum.category}
                </span>
                <span className="text-xs text-white/70 font-mono">
                  {currentAlbumImages.length} Curated Images
                </span>
              </div>
            </div>

            {/* Album Header Summary */}
            <div className="mb-10 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase text-white tracking-tight mb-3">
                {activeAlbum.title}
              </h2>
              <p className="text-sm md:text-base text-white/80 leading-relaxed font-sans">
                {activeAlbum.description}
              </p>
            </div>

            {/* Photos 3-Column Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {currentAlbumImages.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="group relative rounded-2xl overflow-hidden bg-[#204268] border border-white/15 hover:border-white/50 shadow-xl cursor-pointer aspect-[4/3] transition-all duration-500 hover:shadow-2xl"
                >
                  <img
                    src={imgUrl}
                    alt={`${activeAlbum.title} - ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#204268]/90 via-[#204268]/20 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Top Enlarge Badge */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#204268]/80 border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>

                  {/* Bottom Photo Count Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="font-mono text-[11px] text-white/90 bg-[#204268]/90 px-2.5 py-1 rounded-[4px] border border-white/20">
                      Photo {idx + 1} of {currentAlbumImages.length}
                    </span>
                    <span className="text-white font-semibold uppercase tracking-wider text-[10px] flex items-center gap-1 font-sans">
                      <Sparkles className="w-3 h-3" /> View Full
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fullscreen Lightbox Modal (Matching Screenshot - Mounted to Body via Portal) */}
        {lightboxIndex !== null && activeAlbum && typeof document !== 'undefined' && createPortal(
          <div
            data-lenis-prevent
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-8 md:p-12 bg-black/80 backdrop-blur-md select-none overflow-hidden touch-none"
            onClick={closeLightbox}
          >
            {/* Top Right Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#242424]/90 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl hover:scale-105"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Nav Button */}
            {currentAlbumImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#242424]/90 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl hover:scale-105"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Right Nav Button */}
            {currentAlbumImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#242424]/90 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl hover:scale-105"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Centered Image Container */}
            <div
              className="relative z-20 max-w-[92vw] sm:max-w-[85vw] md:max-w-4xl max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentAlbumImages[lightboxIndex]}
                alt={activeAlbum.title}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xl block mx-auto transition-transform duration-300"
              />
            </div>
          </div>,
          document.body
        )}
      </Container>
    </section>
  );
};
