import React, { useState } from 'react';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import { products, type Product } from '../../data/products';
import { ShieldCheck, X, Check } from 'lucide-react';
import { clsx } from 'clsx';

export const ProductGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const categories = ['All', 'Structural Framing', 'Structural Flooring', 'Pressure Piping', 'Process Equipment', 'Modular Systems', 'Precision Hardware'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-24 md:py-32 bg-[#030716] border-b border-white/10">
      <Container>
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-16 pb-6 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={clsx(
                'px-4 py-2 rounded-[6px] text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer',
                selectedCategory === cat
                  ? 'bg-[#ffb400] text-[#030716] shadow-lg'
                  : 'bg-white/5 text-[#bfbfbf] hover:bg-white/10 hover:text-white border border-white/10'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between rounded-[10px] border border-white/10 bg-[#101836]/40 hover:bg-[#101836] hover:border-[#ffb400]/40 transition-all duration-500 overflow-hidden shadow-xl"
            >
              {/* Product Image */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#0c0d14]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030716] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-[4px] bg-[#030716]/80 backdrop-blur-xs text-[10px] font-mono uppercase tracking-wider text-[#ffb400] border border-white/10">
                  {product.sku}
                </span>
              </div>

              {/* Product Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#bfbfbf] block mb-1">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-display font-bold uppercase text-white group-hover:text-[#ffb400] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-xs text-[#bfbfbf] leading-relaxed line-clamp-2">
                    {product.tagline}
                  </p>
                </div>

                {/* Specs */}
                <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                  <div className="flex justify-between text-[11px] text-[#bfbfbf]">
                    <span>Material:</span>
                    <span className="text-white font-medium">{product.material}</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-[#bfbfbf]">
                    <span>Tolerance:</span>
                    <span className="text-white font-mono">{product.tolerance}</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-[#bfbfbf]">
                    <span>Finish:</span>
                    <span className="text-white">{product.finish}</span>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="text-xs font-bold uppercase tracking-wider text-[#ffb400] hover:text-white transition-colors cursor-pointer"
                  >
                    Inspect Full Specs →
                  </button>
                  <Button to="/contact" variant="outline" className="text-xs py-1.5 px-3">
                    Quote SKU
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal */}
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[12px] bg-[#030716] border border-white/20 p-6 sm:p-10 shadow-2xl text-white">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-1 rounded-[4px] bg-[#ffb400] text-[#030716] text-[10px] font-mono font-bold uppercase">
                  {activeModalProduct.sku}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#bfbfbf]">
                  {activeModalProduct.category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase text-white mb-4">
                {activeModalProduct.name}
              </h2>

              <p className="text-sm text-[#bfbfbf] leading-relaxed mb-6">
                {activeModalProduct.description}
              </p>

              {/* Technical Specifications Table */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffb400] mb-3">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-[8px] bg-white/5 border border-white/10">
                  {Object.entries(activeModalProduct.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center text-xs py-1 border-b border-white/5">
                      <span className="text-[#bfbfbf]">{key}:</span>
                      <span className="text-white font-medium">{val}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center text-xs py-1 border-b border-white/5">
                    <span className="text-[#bfbfbf]">Material Grade:</span>
                    <span className="text-white font-medium">{activeModalProduct.material}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1 border-b border-white/5">
                    <span className="text-[#bfbfbf]">Standard Tolerance:</span>
                    <span className="text-white font-mono">{activeModalProduct.tolerance}</span>
                  </div>
                </div>
              </div>

              {/* Engineering Features */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffb400] mb-3">
                  Key Quality Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalProduct.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#bfbfbf]">
                      <Check className="w-4 h-4 text-[#ffb400] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#bfbfbf]">
                  <ShieldCheck className="w-4 h-4 text-[#ffb400]" />
                  <span>Includes Material Test Report (MTR)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button onClick={() => setActiveModalProduct(null)} variant="outline">
                    Close
                  </Button>
                  <Button to="/contact" variant="primary" icon="arrow-right">
                    Request Pricing for {activeModalProduct.sku}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
