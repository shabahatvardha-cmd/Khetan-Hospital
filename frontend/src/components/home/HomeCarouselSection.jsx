import React from 'react';
import { ChevronDown } from 'lucide-react';
import { PerspectiveCarousel3D } from '../3d/PerspectiveCarousel3D';

/**
 * 🏥 SECTION 2 — INTERACTIVE 3D NAVIGATION CAROUSEL
 * Calibrated viewport section with zero clipping, full breathing room, and bottom scroll indicator.
 */
export const HomeCarouselSection = ({ onNextClick }) => {
  const scrollToNext = () => {
    if (onNextClick) {
      onNextClick();
    } else {
      document.getElementById('hospital-intro')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="explore-carousel"
      className="relative w-full min-h-[calc(100vh-60px)] flex flex-col justify-between items-center py-6 sm:py-8 bg-white border-t border-slate-200/90 select-none"
    >
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center shrink-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold tracking-wider uppercase mb-1.5">
          <span>Interactive Navigation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
          Explore Khetan Hospital
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl mx-auto">
          Drag, swipe, or use arrow keys to navigate our main hospital destinations.
        </p>
      </div>

      {/* 3D Carousel Stage */}
      <div className="relative w-full max-w-7xl mx-auto my-auto">
        <PerspectiveCarousel3D />
      </div>

      {/* Pure Scroll Down Symbol (Bouncing Chevron to Shutter Slide 1) */}
      <div className="w-full flex justify-center pt-2 pb-1 shrink-0">
        <button
          onClick={scrollToNext}
          aria-label="Scroll to Hospital Introduction"
          className="p-2 text-slate-400 hover:text-sky-600 transition-colors cursor-pointer group"
        >
          <ChevronDown className="w-6 h-6 animate-bounce text-slate-400 group-hover:text-sky-600" />
        </button>
      </div>
    </section>
  );
};

export default HomeCarouselSection;
