import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AppointmentModal } from './components/common/AppointmentModal';
import { FloatingActions } from './components/common/FloatingActions';
import { AdminDashboard } from './admin/AdminDashboard';

// Dedicated Route Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MemorableMomentsPage } from './pages/MemorableMomentsPage';
import { PublishedPapersPage } from './pages/PublishedPapersPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { LocationsPage } from './pages/LocationsPage';
import { BlogsPage } from './pages/BlogsPage';
import { ContactPage } from './pages/ContactPage';

// Helper component to scroll to top whenever route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isAdminView, setIsAdminView] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  // If Admin View is toggled, render the Clinic Admin CRM Dashboard
  if (isAdminView) {
    return <AdminDashboard onBackToPublicSite={() => setIsAdminView(false)} />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div id="top" className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-[#08284d] selection:text-white">
        
        {/* Sticky Header with Navigation Dropdowns */}
        <Navbar 
          onBookClick={() => setIsAppointmentModalOpen(true)}
          isAdminView={isAdminView}
          onToggleAdmin={() => setIsAdminView(!isAdminView)}
        />

        {/* Dynamic Multi-Page Router */}
        <main className="flex-1">
          <Routes>
            {/* 1. Home Page */}
            <Route path="/" element={<HomePage onBookClick={() => setIsAppointmentModalOpen(true)} />} />

            {/* 2. About Pages */}
            <Route path="/about" element={<AboutPage onBookClick={() => setIsAppointmentModalOpen(true)} />} />
            <Route path="/about/dr-vatsal-khetan" element={<AboutPage onBookClick={() => setIsAppointmentModalOpen(true)} />} />
            <Route path="/about/memorable-moments" element={<MemorableMomentsPage onBookClick={() => setIsAppointmentModalOpen(true)} />} />
            <Route path="/timeline" element={<MemorableMomentsPage onBookClick={() => setIsAppointmentModalOpen(true)} />} />
            <Route path="/about/published-papers" element={<PublishedPapersPage onBookClick={() => setIsAppointmentModalOpen(true)} />} />

            {/* 3. Services & Surgery Detail Pages */}
            <Route path="/services" element={<ServicesPage onBookClick={() => setIsAppointmentModalOpen(true)} />} />
            <Route path="/services/:slug" element={<ServiceDetailPage onBookClick={() => setIsAppointmentModalOpen(true)} />} />

            {/* 4. Outreach Locations */}
            <Route path="/locations" element={<LocationsPage onBookClick={() => setIsAppointmentModalOpen(true)} />} />
            <Route path="/locations/:city" element={<LocationsPage onBookClick={() => setIsAppointmentModalOpen(true)} />} />

            {/* 5. Patient Education & Blogs */}
            <Route path="/blogs" element={<BlogsPage onBookClick={() => setIsAppointmentModalOpen(true)} />} />
            <Route path="/blogs/:slug" element={<BlogsPage onBookClick={() => setIsAppointmentModalOpen(true)} />} />

            {/* 6. Contact & OPD Hours */}
            <Route path="/contact" element={<ContactPage onBookClick={() => setIsAppointmentModalOpen(true)} />} />
            <Route path="/contact-us" element={<ContactPage onBookClick={() => setIsAppointmentModalOpen(true)} />} />

            {/* Fallback */}
            <Route path="*" element={<HomePage onBookClick={() => setIsAppointmentModalOpen(true)} />} />
          </Routes>
        </main>

        {/* Site Footer */}
        <Footer onBookClick={() => setIsAppointmentModalOpen(true)} />

        {/* Global Appointment Booking Modal */}
        <AppointmentModal 
          isOpen={isAppointmentModalOpen}
          onClose={() => setIsAppointmentModalOpen(false)}
        />

        {/* Global Floating Action Buttons (WhatsApp, Emergency, Scroll-to-Top) */}
        <FloatingActions onBookClick={() => setIsAppointmentModalOpen(true)} />

      </div>
    </BrowserRouter>
  );
}
