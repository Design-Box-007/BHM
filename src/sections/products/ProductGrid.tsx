import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Container } from '../../components/Container/Container';
import { products, type Product } from '../../data/products';
import { Search, X, SlidersHorizontal, ZoomIn } from 'lucide-react';
import { clsx } from 'clsx';

export const ProductGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeImageProduct, setActiveImageProduct] = useState<Product | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Exact website service categories
  const categories = useMemo(() => {
    const uniqueCats = Array.from(new Set(products.map((p) => p.category)));
    return [
      { label: 'All Categories', key: 'All Categories' },
      ...uniqueCats.map((cat) => ({ label: cat, key: cat })),
    ];
  }, []);

  // Calculate counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'All Categories': products.length,
    };
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter products based on search query and selected category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filtering
      const matchesCategory =
        selectedCategory === 'All Categories' || product.category === selectedCategory;

      // Search query filtering
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.sku.toLowerCase().includes(query) ||
        product.material.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tagline.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('All Categories');
    setSearchQuery('');
  };

  const closeImageModal = useCallback(() => {
    setActiveImageProduct(null);
  }, []);

  // Lock background screen scroll & support ESC key when lightbox modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeImageModal();
    };

    if (activeImageProduct) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const preventScroll = (e: Event) => {
        e.preventDefault();
      };

      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeImageProduct, closeImageModal]);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#f8fafc] text-slate-900 border-b border-[#204268]/15">
      <Container>
        {/* Mobile Filter & Search Toggle Bar */}
        <div className="lg:hidden mb-6 flex items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#204268] font-sans">
            <span className="w-1.5 h-3.5 bg-[#204268] rounded-full"></span>
            <span>Filter & Search</span>
          </div>
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#204268] text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-xs hover:bg-[#162e49] transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{mobileFilterOpen ? 'Close Filters' : 'Filters'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* =========================================================================
              LEFT COLUMN: SEARCH & CATEGORIES SIDEBAR (Website Services Categories)
             ========================================================================= */}
          <aside
            className={clsx(
              'lg:col-span-4 xl:col-span-3 lg:block',
              mobileFilterOpen ? 'block' : 'hidden lg:block'
            )}
          >
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm sticky top-28 space-y-7">
              {/* SEARCH SECTION */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-4 bg-[#204268] rounded-full"></span>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#204268] font-sans">
                    SEARCH
                  </h3>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-9 pr-8 py-2.5 bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#204268] focus:ring-1 focus:ring-[#204268] transition-all font-sans"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-[#204268] rounded-full cursor-pointer"
                      aria-label="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* CATEGORIES SECTION (Services Categories) */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-4 bg-[#204268] rounded-full"></span>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#204268] font-sans">
                    CATEGORIES
                  </h3>
                </div>

                <ul className="space-y-1.5 font-sans">
                  {categories.map((cat) => {
                    const isActive = selectedCategory === cat.key;
                    const count = categoryCounts[cat.key] || 0;

                    return (
                      <li key={cat.key}>
                        <button
                          onClick={() => {
                            setSelectedCategory(cat.key);
                            if (mobileFilterOpen) setMobileFilterOpen(false);
                          }}
                          className={clsx(
                            'w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer text-left',
                            isActive
                              ? 'bg-[#204268] text-white font-semibold shadow-sm'
                              : 'text-slate-700 hover:text-[#204268] hover:bg-[#204268]/5'
                          )}
                        >
                          <span className="truncate">{cat.label}</span>
                          <span
                            className={clsx(
                              'text-xs px-2 py-0.5 rounded-full ml-2 shrink-0 transition-colors font-sans',
                              isActive
                                ? 'bg-white/20 text-white font-bold'
                                : 'bg-slate-100 text-slate-500'
                            )}
                          >
                            {count}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Reset Filter Button */}
              {(selectedCategory !== 'All Categories' || searchQuery) && (
                <div className="pt-2 border-t border-slate-100">
                  <button
                    onClick={handleResetFilters}
                    className="w-full py-2 px-3 text-xs font-bold uppercase tracking-wider text-[#204268] hover:bg-[#204268]/5 border border-dashed border-[#204268]/30 rounded-lg transition-colors cursor-pointer text-center font-sans"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>
          </aside>

          {/* =========================================================================
              RIGHT COLUMN: PRODUCTS GRID (Only Image & Name)
             ========================================================================= */}
          <main className="lg:col-span-8 xl:col-span-9">
            {/* Header Result Count */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="text-xs sm:text-sm font-sans text-slate-500 font-medium">
                Showing 1–{filteredProducts.length} results
              </span>

              {searchQuery && (
                <span className="text-xs text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200 font-sans">
                  Search query: <strong className="text-[#204268]">"{searchQuery}"</strong>
                </span>
              )}
            </div>

            {/* Product Cards Grid: ONLY Image & Product Name */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setActiveImageProduct(product)}
                    className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#204268]/40 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
                  >
                    {/* 1. Product Image Box (Clicking opens modal) */}
                    <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#204268]/0 group-hover:bg-[#204268]/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 p-2.5 bg-white/95 rounded-full shadow-lg text-[#204268]">
                          <ZoomIn className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* 2. Product Name ONLY */}
                    <div className="p-4 sm:p-5 text-left">
                      <h3 className="text-sm sm:text-base font-display font-bold text-slate-900 group-hover:text-[#204268] transition-colors leading-snug">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-sm font-sans">
                <div className="w-14 h-14 bg-[#204268]/10 text-[#204268] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-[#204268] mb-2">
                  No products found
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6">
                  We couldn't find any products matching your current search or category filter. Try refining your keywords or resetting filters.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 bg-[#204268] hover:bg-[#162e49] text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
        </div>

        {/* =========================================================================
            PORTAL IMAGE LIGHTBOX MODAL: CENTERED WITHOUT ANY SCROLLING
           ========================================================================= */}
        {activeImageProduct &&
          createPortal(
            <div
              className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md transition-all duration-300 animate-fadeIn select-none overflow-hidden"
              onClick={closeImageModal}
              style={{ margin: 0, top: 0, left: 0, right: 0, bottom: 0 }}
            >
              {/* Close Button Floating in Top-Right */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeImageModal();
                }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200 cursor-pointer border border-white/20 shadow-2xl hover:scale-105"
                aria-label="Close image preview"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Centered Image Container - ONLY IMAGE, NO SCROLLBAR */}
              <div
                className="relative z-10 max-w-[92vw] sm:max-w-[88vw] md:max-w-5xl max-h-[88vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={activeImageProduct.image}
                  alt={activeImageProduct.name}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/15 block mx-auto transition-transform duration-300"
                />
              </div>
            </div>,
            document.body
          )}
      </Container>
    </section>
  );
};
