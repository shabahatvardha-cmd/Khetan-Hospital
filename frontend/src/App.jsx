import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { DoctorStorySection } from './components/sections/DoctorStorySection';
import { CareSection } from './components/sections/CareSection';
import { ResourcesSection } from './components/sections/ResourcesSection';
import { PhilosophySection } from './components/sections/PhilosophySection';
import { JourneyTimelineSection } from './components/sections/JourneyTimelineSection';
import { VisitFaqSection } from './components/sections/VisitFaqSection';
import { BookingInvitationSection } from './components/sections/BookingInvitationSection';
import { Footer } from './components/layout/Footer';
import { AppointmentModal } from './components/common/AppointmentModal';
import { AdminDashboard } from './admin/AdminDashboard';

export default function App() {
  const [isAdminView, setIsAdminView] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  // If Admin View is toggled, render the Clinic Admin Dashboard
  if (isAdminView) {
    return <AdminDashboard onBackToPublicSite={() => setIsAdminView(false)} />;
  }

  // Otherwise, render the Complete Modern Website (Hostinger Horizons Aesthetic)
  return (
    <div id="top" className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-[#08284d] selection:text-white">
      
      {/* 1. Modern Glassmorphic Sticky Navbar (Hostinger Specs) */}
      <Navbar 
        onBookClick={() => setIsAppointmentModalOpen(true)}
        isAdminView={isAdminView}
        onToggleAdmin={() => setIsAdminView(!isAdminView)}
      />

      {/* Main Website Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Section with Doctor Photo, Soft Gradient Wash & Floating Badge */}
        <HeroSection onBookClick={() => setIsAppointmentModalOpen(true)} />

        {/* 3. Meet Dr. Vatsal Khetan — Two-Column Doctor Portrait & Story */}
        <DoctorStorySection onBookClick={() => setIsAppointmentModalOpen(true)} />

        {/* 4. Clinical Specialties & Surgical Care — 3-Tile Visual Grid */}
        <CareSection onBookClick={() => setIsAppointmentModalOpen(true)} />

        {/* 5. Patient Recovery Guides & Educational Rail */}
        <ResourcesSection onBookClick={() => setIsAppointmentModalOpen(true)} />

        {/* 6. Clinical Philosophy & Editorial Quote Banner */}
        <PhilosophySection />

        {/* 7. Surgical Care Journey — Step-by-Step Pathway */}
        <JourneyTimelineSection onBookClick={() => setIsAppointmentModalOpen(true)} />

        {/* 8. Before Your Visit — Cashless Insurance & FAQs Accordion */}
        <VisitFaqSection onBookClick={() => setIsAppointmentModalOpen(true)} />

        {/* 9. Booking Invitation Banner with Doctor Consultation Anchor */}
        <BookingInvitationSection onBookClick={() => setIsAppointmentModalOpen(true)} />

      </main>

      {/* 10. Modern Massive Wordmark Footer */}
      <Footer onBookClick={() => setIsAppointmentModalOpen(true)} />

      {/* 11. WhatsApp & REST API Appointment Modal */}
      <AppointmentModal 
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />

    </div>
  );
}
