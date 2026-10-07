import React from 'react';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import { products } from '../../data/products';
import { Shield } from 'lucide-react';

export const ProductsPreview: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-[#204268] border-b border-white/10">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-3 block">
              // Industrial Products
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-white">
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
              className="group relative flex flex-col justify-between rounded-[10px] border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-500 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#204268]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#204268] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-[4px] bg-[#204268]/90 backdrop-blur-xs text-[10px] font-mono uppercase tracking-wider text-white border border-white/20">
                  {product.sku}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70 block mb-1">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-display font-bold uppercase text-white group-hover:text-white/90 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-xs text-white/80 leading-relaxed line-clamp-2">
                    {product.tagline}
                  </p>
                </div>

                {/* Specs Pill List */}
                <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                  <div className="flex justify-between text-[11px] text-white/70">
                    <span>Material:</span>
                    <span className="text-white font-medium">{product.material}</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-white/70">
                    <span>Tolerance:</span>
                    <span className="text-white font-mono">{product.tolerance}</span>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-white/80">
                    <Shield className="w-3.5 h-3.5 text-white" />
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
