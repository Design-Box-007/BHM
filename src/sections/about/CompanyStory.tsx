import React from 'react';
import { Link } from 'react-router-dom';

const ABOUT_IMG_05 =
  'https://cdn.prod.website-files.com/69b7dbc434c7b9bb087b696d/69c62f595e6484d9076f1488_c239fa98c21d9facd13b570859fc5646_about%20img%2005.png';

const ESTAB_BG_IMAGE =
  'https://cdn.prod.website-files.com/69b7dbc434c7b9bb087b696d/6a05c3140474a7de9ec42014_Process%20Image%2001.jpg';

export const CompanyStory: React.FC = () => {
  return (
    <section className="about-3-section section-padding py-20 sm:py-28 md:py-36 bg-white text-[#030716] border-b border-black/10 overflow-hidden">
      <div className="w-layout-blockcontainer container w-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="about-3-section-wrap space-y-16 md:space-y-24">
          {/* Top Row: about-3-grid */}
          <div className="about-3-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 xl:gap-28 items-start">
            {/* Section Pretitle Box */}
            <div className="section-pretitle-box lg:col-span-4">
              <div className="section-pretitle text-[14px] font-semibold uppercase tracking-wider text-[#686E86]">
                // About our company
              </div>
            </div>

            {/* About 3 Title Box */}
            <div className="about-3-title-box lg:col-span-8 lg:pl-4 xl:pl-8">
              <div className="about-3-pretitle-box mb-4">
                <div className="about-3-pretitle text-[14px] font-semibold uppercase tracking-wider text-[#686E86]">
                  Certified Welding &amp; Metal Fabrication Experts
                </div>
              </div>
              <div className="section-title-block">
                <div className="section-title-box">
                  <h2
                    className="section-title style-3 max-w-3xl"
                    style={{
                      fontFamily: '"Mona Sans", sans-serif',
                      fontSize: '34px',
                      lineHeight: '44px',
                      fontWeight: 500,
                      letterSpacing: 'normal',
                      color: '#030716',
                    }}
                  >
                    We deliver industrial-grade welding solutions for structural, commercial, and custom projects—engineered for safety, performance, and long-term reliability.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: about-3-content-block */}
          <div className="about-3-content-block">
            <div className="about-3-inner-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 xl:gap-28 items-end">
              {/* Left Content Column */}
              <div className="about-3-left-content lg:col-span-4 flex flex-col items-start">
                <div className="rounded-[12px] overflow-hidden shadow-sm bg-[#f0f2f5] mb-6 max-w-[420px] w-full group">
                  <img
                    src={ABOUT_IMG_05}
                    loading="lazy"
                    alt="About Image"
                    className="about-3-image w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="about-3-desc-box mb-8 max-w-[420px]">
                  <p className="about-3-des text-[#686E86] text-[14px] sm:text-[15px] leading-[25px] font-normal font-['Mona_Sans',sans-serif]">
                    We are a trusted provider of high-quality welding and metal fabrication solutions, dedicated to delivering strength, and reliability in every project.
                  </p>
                </div>
                <div className="about-3-btn-box">
                  <Link
                    to="/contact"
                    className="primary-button group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-[4px] border border-black/20 text-[#030716] text-[12px] font-bold uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <span className="single-dot w-1.5 h-1.5 rounded-full bg-[#686E86] group-hover:bg-white transition-colors"></span>
                    <span className="primary-button-text-wrap flex items-center">
                      <span className="primary-button-text">Connect today</span>
                    </span>
                    <span className="single-dot w-1.5 h-1.5 rounded-full bg-[#686E86] group-hover:bg-white transition-colors"></span>
                  </Link>
                </div>
              </div>

              {/* Right Box: Estab 2015 Giant Masked Title */}
              <div className="about-3-right-box lg:col-span-8 lg:pl-4 xl:pl-8 flex items-end justify-start">
                <h3
                  className="about-3-big-title uppercase font-black select-none tracking-tight leading-none inline-block"
                  style={{
                    fontFamily:
                      '"Mona Sans Condensed", "Mona Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontWeight: 900,
                    fontSize: 'clamp(58px, 8vw, 140px)',
                    letterSpacing: 'normal',
                    backgroundImage: `url("${ESTAB_BG_IMAGE}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  Estab: 2015
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
