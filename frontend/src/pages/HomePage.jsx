import React, { useRef } from 'react';
import { HomeDoctorHero } from '../components/home/HomeDoctorHero';
import { HomeCarouselSection } from '../components/home/HomeCarouselSection';
import { HomeIntroSection } from '../components/home/HomeIntroSection';
import { Footer } from '../components/layout/Footer';

/**
 * 🏥 KHETAN HOSPITAL — MASTER HOMEPAGE FLOW
 * 
 * 1. Screen 1: Doctor-Focused Hero (Dr. Vatsal Khetan intro, credentials, portrait, scroll button)
 * 2. Screen 2: Interactive 3D Circular Carousel (6 destinations, drag/arrows, scroll button)
 * 3. Screen 3: Hospital Overview (Shutter Slide 1, sticky z-10)
 * 4. Screen 4: Comprehensive Hospital Footer (Shutter Slide 2, sticky z-20 - covers Slide 1 like a shutter)
 */
export const HomePage = ({ onBookClick }) => {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToIntro = () => {
    document.getElementById('hospital-intro')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative w-full bg-white text-slate-900 select-none">
      {/* 1. DOCTOR HERO (Screen 1) */}
      <HomeDoctorHero onBookClick={onBookClick} />

      {/* 2. INTERACTIVE 3D NAVIGATION CAROUSEL (Screen 2) */}
      <HomeCarouselSection onNextClick={scrollToIntro} />

      {/* 3. HOSPITAL OVERVIEW (Shutter Slide 1 - sticky z-10) */}
      <HomeIntroSection onNextClick={scrollToFooter} />

      {/* 4. COMPREHENSIVE HOSPITAL FOOTER (Shutter Slide 2 - sticky z-20, slides UP over Slide 1 like a shutter) */}
      <Footer ref={footerRef} />
    </div>
  );
};

export default HomePage;
