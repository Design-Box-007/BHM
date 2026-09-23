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
    <div className="relative min-h-screen flex flex-col bg-[#030716] text-[#686e86] overflow-x-clip selection:bg-[#ffb400] selection:text-[#030716]">
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
