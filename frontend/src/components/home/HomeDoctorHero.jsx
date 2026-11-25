import React from 'react';
import { ChevronDown } from 'lucide-react';
import { doctorImages } from '../../data/imageConfig';

/**
 * 🏥 SECTION 1 — DOCTOR-FOCUSED HERO (FIRST SCREEN)
 * Precision calibrated to fill the first screen naturally with zero clipping.
 */
export const HomeDoctorHero = () => {
  const scrollToCarousel = () => {
    document.getElementById('explore-carousel')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-60px)] bg-gradient-to-b from-slate-50 via-white to-slate-50 flex flex-col justify-between py-6 sm:py-8 lg:py-10 select-none">
      {/* Ambient Backlight Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-blue-100/50 blur-3xl" />
      </div>

      {/* Main Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Doctor Identity & Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            
            {/* Doctor Name & Key Credentials */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Dr. Vatsal Khetan
              </h1>
              <p className="text-xs sm:text-sm font-bold text-sky-700 tracking-wide">
                MBBS, MS (Ortho), MRCS, FRCS (Edinburgh), M.Ch Knee (UK), IOC Dip Sports Med (Switzerland)
              </p>
            </div>

            {/* Strong Professional Headline */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-800 tracking-tight leading-snug">
              Pioneering Sub-Millimeter Robotic Joint Excellence &amp; Advanced Orthopaedic Care
            </h2>

            {/* Concise Supporting Introduction */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
              Bringing UK Royal College surgical governance, sub-millimeter robotic precision, and dedicated arthroscopic sports rehabilitation directly to Gorakhpur and Eastern Uttar Pradesh.
            </p>

          </div>

          {/* Right Column: Doctor Portrait Photo (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md flex flex-col items-center">
              
              {/* Doctor Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-sky-50 via-white to-slate-100 border border-slate-200/80 shadow-2xl p-4 sm:p-5 w-full flex items-center justify-center">
                <img
                  src={doctorImages.hero}
                  alt="Dr. Vatsal Khetan - Orthopaedic & Joint Replacement Surgeon"
                  className="w-full h-auto max-h-[340px] sm:max-h-[380px] lg:max-h-[420px] object-contain drop-shadow-xl select-none"
                  loading="eager"
                />

                {/* Floating Accreditation Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-[#00bcd4] flex items-center justify-center text-white font-black text-xs shadow-sm shrink-0">
                    FRCS
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-black text-slate-900 leading-tight truncate">
                      Dr. Vatsal Khetan
                    </span>
                    <span className="text-[10px] text-sky-700 font-bold leading-tight truncate mt-0.5">
                      Royal College Fellow (Edinburgh) &bull; M.Ch (UK)
                    </span>
                    <span className="text-[9px] text-slate-500 truncate">
                      Chief Orthopaedic &amp; Robotic Surgeon
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Pure Scroll Down Symbol (Bouncing Chevron) */}
      <div className="w-full flex justify-center pt-2 pb-1 shrink-0 z-10">
        <button
          onClick={scrollToCarousel}
          aria-label="Scroll to Navigation Carousel"
          className="p-2 text-slate-400 hover:text-sky-600 transition-colors cursor-pointer group"
        >
          <ChevronDown className="w-6 h-6 animate-bounce text-slate-400 group-hover:text-sky-600" />
        </button>
      </div>
    </section>
  );
};

export default HomeDoctorHero;
