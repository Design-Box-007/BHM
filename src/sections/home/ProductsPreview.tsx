import React from 'react';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import { products } from '../../data/products';
import { Shield } from 'lucide-react';

export const ProductsPreview: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-[#030716] border-b border-white/10">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ffb400] mb-3 block">
              // Industrial Products
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-white">
              Manufactured with zero compromise
            </h2>
          </div>
          <Button to="/products" variant="primary" icon="arrow-right">
            Explore all products
          </Button>
        </div>

        {/* 3 Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between rounded-[10px] border border-white/10 bg-[#101836]/40 hover:bg-[#101836] hover:border-[#ffb400]/40 transition-all duration-500 overflow-hidden"
            >
              {/* Image Container */}
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

              {/* Content Body */}
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

                {/* Specs Pill List */}
                <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                  <div className="flex justify-between text-[11px] text-[#bfbfbf]">
                    <span>Material:</span>
                    <span className="text-white font-medium">{product.material}</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-[#bfbfbf]">
                    <span>Tolerance:</span>
                    <span className="text-white font-mono">{product.tolerance}</span>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#bfbfbf]">
                    <Shield className="w-3.5 h-3.5 text-[#ffb400]" />
                    <span>ISO Traceable</span>
                  </div>
                  <Button to={`/products`} variant="text" icon="arrow-up-right" className="text-xs">
                    View Specs
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
