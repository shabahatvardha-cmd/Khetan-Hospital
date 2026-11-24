import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { DoctorStorySection } from '../components/sections/DoctorStorySection';
import { StatsCounterSection } from '../components/sections/StatsCounterSection';
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

      {/* 3. Surgical Excellence & Milestone Stats Counter Strip */}
      <StatsCounterSection />

      {/* 4. Clinical Specialties & Surgical Care — 6-Department Oreo Grid */}
      <CareSection onBookClick={onBookClick} />

      {/* 5. Patient Recovery Guides & Medical Blogs Showcase */}
      <ResourcesSection onBookClick={onBookClick} />

      {/* 6. Clinical Philosophy & Editorial Quote Banner */}
      <PhilosophySection />

      {/* 7. Surgical Care Journey — Step-by-Step Pathway */}
      <JourneyTimelineSection onBookClick={onBookClick} />

      {/* 8. Before Your Visit — Cashless Insurance & FAQs Accordion */}
      <VisitFaqSection onBookClick={onBookClick} />

      {/* 9. Interactive Appointment Booking Hub with Doctor Consultation Desk */}
      <BookingInvitationSection onBookClick={onBookClick} />
    </>
  );
};
