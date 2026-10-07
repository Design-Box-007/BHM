import React from 'react';

const ABOUT_IMG_05 = 'https://cdn.prod.website-files.com/69b7dbc434c7b9bb087b696d/69c62f595e6484d9076f1488_c239fa98c21d9facd13b570859fc5646_about%20img%2005.png';

// const ESTAB_BG_IMAGE = 'https://cdn.prod.website-files.com/69b7dbc434c7b9bb087b696d/6a05c3140474a7de9ec42014_Process%20Image%2001.jpg';

export const CompanyStory: React.FC = () => {
  return (
    <section className="about-3-section section-padding py-12 sm:py-20 md:py-32 bg-white text-[#204268] border-b border-[#204268]/10 overflow-hidden">
      <div className="w-layout-blockcontainer container w-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="about-3-section-wrap space-y-10 sm:space-y-16 md:space-y-24">
          {/* Top Row: about-3-grid */}
          <div className="about-3-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 xl:gap-28 items-start">
            {/* Section Pretitle Box */}
            <div className="section-pretitle-box lg:col-span-4">
              <div className="section-pretitle text-[14px] font-semibold uppercase tracking-wider text-[#204268]/70 font-sans">
                About BHM Steels
              </div>
            </div>

            {/* About 3 Title Box */}
            <div className="about-3-title-box lg:col-span-8 lg:pl-4 xl:pl-8">
              <div className="about-3-pretitle-box mb-4">
                <div className="about-3-pretitle text-[14px] font-semibold uppercase tracking-wider text-[#204268]/70 font-sans">
                  Certified Welding &amp; Metal Fabrication Experts
                </div>
              </div>
              <div className="section-title-block space-y-6 max-w-3xl">
                <p className="text-base sm:text-lg lg:text-xl text-[#204268]/90 font-sans font-normal leading-relaxed">
                  BHM Steels provides precision welding and metal fabrication solutions for industrial, commercial, construction, and custom projects across the UAE. We combine skilled workmanship, advanced fabrication capabilities, and rigorous quality standards to deliver steel solutions engineered for strength, accuracy, safety, and long-term performance.
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-[#204268]/80 font-sans font-normal leading-relaxed">
                  From structural steel fabrication and precision welding to metal cutting, CNC machining, blasting, and protective coating, our comprehensive capabilities allow us to handle projects from raw material preparation through to finished components. We work closely with clients to deliver custom metal solutions tailored to project drawings, specifications, dimensions, and application requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row: about-3-content-block */}
          <div className="about-3-content-block">
            <div className="about-3-inner-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 xl:gap-28 items-end">
              {/* Left Content Column */}
              <div className="about-3-left-content lg:col-span-4 flex flex-col items-start">
                <div className="rounded-[12px] overflow-hidden shadow-sm bg-white border border-[#204268]/15 mb-6 max-w-[420px] w-full group">
                  <img
                    src={ABOUT_IMG_05}
                    loading="lazy"
                    alt="About Image"
                    className="about-3-image w-full aspect-[1/1] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* <div className="about-3-desc-box mb-8 max-w-[420px]">
                  <p className="about-3-des text-[#204268]/80 text-[14px] sm:text-[15px] leading-[25px] font-normal font-sans">
                    We are a trusted provider of high-quality structural bonding and metal fabrication solutions, dedicated to delivering strength, and reliability in every project.
                  </p>
                </div> */}
                {/* <div className="about-3-btn-box">
                  <Link
                    to="/contact"
                    className="primary-button group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-[4px] border border-[#204268]/30 text-[#204268] text-[12px] font-bold uppercase tracking-wider hover:border-[#204268] hover:bg-[#204268] hover:text-white transition-all duration-300"
                  >
                    <span className="single-dot w-1.5 h-1.5 rounded-full bg-[#204268] group-hover:bg-white transition-colors"></span>
                    <span className="primary-button-text-wrap flex items-center">
                      <span className="primary-button-text">Connect today</span>
                    </span>
                    <span className="single-dot w-1.5 h-1.5 rounded-full bg-[#204268] group-hover:bg-white transition-colors"></span>
                  </Link>
                </div> */}
              </div>

              {/* Right Box: Estab 2015 Giant Masked Title */}
              {/* <div className="about-3-right-box lg:col-span-8 lg:pl-4 xl:pl-8 flex items-end justify-start">
                <h3
                  className="about-3-big-title uppercase font-black select-none tracking-tight leading-none inline-block font-display"
                  style={{
                    fontSize: 'clamp(58px, 8vw, 120px)',
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
