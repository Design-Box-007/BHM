import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { PageLoader } from '../components/PageLoader/PageLoader';
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop';
import { useLenis } from '../hooks/useLenis';

export const MainLayout: React.FC = () => {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <div className="relative min-h-screen flex flex-col bg-[#204268] text-white overflow-x-clip selection:bg-white selection:text-[#204268]">
      <PageLoader />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
