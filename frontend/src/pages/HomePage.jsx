import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { DoctorStorySection } from '../components/sections/DoctorStorySection';
import { CareSection } from '../components/sections/CareSection';
import { ResourcesSection } from '../components/sections/ResourcesSection';
import { PhilosophySection } from '../components/sections/PhilosophySection';
import { JourneyTimelineSection } from '../components/sections/JourneyTimelineSection';
import { VisitFaqSection } from '../components/sections/VisitFaqSection';
import { BookingInvitationSection } from '../components/sections/BookingInvitationSection';

export const HomePage = ({ onBookClick }) => {
  return (
    <>
      {/* 1. Hero Banner */}
      <HeroSection onBookClick={onBookClick} />

      {/* 2. Meet Dr. Vatsal Khetan — Two-Column Doctor Portrait & Story */}
      <DoctorStorySection onBookClick={onBookClick} />

      {/* 3. Clinical Specialties & Surgical Care — 3-Tile Visual Grid */}
      <CareSection onBookClick={onBookClick} />

      {/* 4. Patient Recovery Guides & Educational Rail */}
      <ResourcesSection onBookClick={onBookClick} />

      {/* 5. Clinical Philosophy & Editorial Quote Banner */}
      <PhilosophySection />

      {/* 6. Surgical Care Journey — Step-by-Step Pathway */}
      <JourneyTimelineSection onBookClick={onBookClick} />

      {/* 7. Before Your Visit — Cashless Insurance & FAQs Accordion */}
      <VisitFaqSection onBookClick={onBookClick} />

      {/* 8. Booking Invitation Banner with Doctor Consultation Anchor */}
      <BookingInvitationSection onBookClick={onBookClick} />
    </>
  );
};
