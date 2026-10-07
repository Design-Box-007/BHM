import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';

export const ProductsHero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-44 md:pb-24 bg-[#204268] border-b border-white/10 overflow-hidden text-center">
      {/* Background with Subtle Industrial Texture and Gradient Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-screen scale-105 transition-transform duration-1000 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      
      {/* Theme Navy Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#204268]/95 via-[#204268]/85 to-[#204268]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.1),_transparent_70%)] pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center justify-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-tight mb-4">
          Product Gallery
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="inline-flex items-center gap-2 text-sm font-sans font-medium text-white/80" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white transition-colors duration-200">
            Home
          </Link>
          <span className="text-white/40">/</span>
          <span className="text-white font-semibold underline underline-offset-4 decoration-white/40">Products</span>
        </nav>
      </Container>
    </section>
  );
};
