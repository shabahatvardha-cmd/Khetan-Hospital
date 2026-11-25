import React from 'react';
import { useNavigation } from '../../context/NavigationContext';

/**
 * 🏥 Khetan Hospital - Single-Line Minimalist Footer
 * 
 * Strict Specification:
 * - One compact horizontal line on desktop
 * - Very small height (~32-36px), fits naturally into 100dvh homepage layout
 * - Clean wrapping on narrow mobile screens
 * - Links to main destinations
 */
export const Footer = () => {
  const { goToSection } = useNavigation();

  return (
    <footer className="w-full bg-white border-t border-slate-200/90 py-2.5 px-4 text-center text-[11px] text-slate-500 font-sans shrink-0 z-30 select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
        <span>&copy; {new Date().getFullYear()} Khetan Hospital</span>
        <span className="hidden sm:inline text-slate-300">|</span>
        <span>All Rights Reserved</span>
        <span className="hidden sm:inline text-slate-300">|</span>
        <button 
          onClick={() => goToSection('doctors')} 
          className="hover:text-slate-900 transition-colors cursor-pointer"
        >
          About
        </button>
        <span className="hidden sm:inline text-slate-300">|</span>
        <button 
          onClick={() => goToSection('services')} 
          className="hover:text-slate-900 transition-colors cursor-pointer"
        >
          Services
        </button>
        <span className="hidden sm:inline text-slate-300">|</span>
        <button 
          onClick={() => goToSection('locations')} 
          className="hover:text-slate-900 transition-colors cursor-pointer"
        >
          Locations
        </button>
        <span className="hidden sm:inline text-slate-300">|</span>
        <button 
          onClick={() => goToSection('contact')} 
          className="hover:text-slate-900 transition-colors cursor-pointer"
        >
          Contact
        </button>
      </div>
    </footer>
  );
};
