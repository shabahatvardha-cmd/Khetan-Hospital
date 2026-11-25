import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { NavigationProvider } from './context/NavigationContext';
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

// Global Error Boundary to prevent full unmount on component exceptions
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Khetan Hospital Render Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              !
            </div>
            <h2 className="text-xl font-bold text-slate-800">Something went wrong</h2>
            <p className="text-xs text-slate-500 leading-relaxed font-mono bg-slate-50 p-3 rounded-lg border border-slate-200 text-left overflow-x-auto">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className="px-6 py-2.5 rounded-full bg-[#00bcd4] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#00acc1] transition-all cursor-pointer"
            >
              Refresh Application
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// AppShell provides natural full-page vertical layout for all routes including homepage
function AppShell({ onBookClick, isAppointmentModalOpen, setIsAppointmentModalOpen }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div
      id="top"
      className="min-h-screen flex flex-col bg-white font-sans text-slate-800 antialiased selection:bg-sky-900 selection:text-white"
    >
      {/* 1. Synchronized Header & Navigation */}
      <Navbar onBookClick={onBookClick} />

      {/* 2. Main Content Area */}
      <main className="flex-1 w-full">
        <Routes>
          {/* 1. Home Page (Master Redesign with Integrated Shutter Footer) */}
          <Route path="/" element={<HomePage onBookClick={onBookClick} />} />

          {/* 2. Doctors & About Pages */}
          <Route path="/about" element={<AboutPage onBookClick={onBookClick} />} />
          <Route path="/about/dr-vatsal-khetan" element={<AboutPage onBookClick={onBookClick} />} />
          <Route path="/about/memorable-moments" element={<MemorableMomentsPage onBookClick={onBookClick} />} />
          <Route path="/timeline" element={<MemorableMomentsPage onBookClick={onBookClick} />} />
          <Route path="/about/published-papers" element={<PublishedPapersPage onBookClick={onBookClick} />} />
          <Route path="/published-papers" element={<PublishedPapersPage onBookClick={onBookClick} />} />

          {/* 3. Services & Surgery Detail Pages */}
          <Route path="/services" element={<ServicesPage onBookClick={onBookClick} />} />
          <Route path="/services/:slug" element={<ServiceDetailPage onBookClick={onBookClick} />} />

          {/* 4. Outreach Locations */}
          <Route path="/locations" element={<LocationsPage onBookClick={onBookClick} />} />
          <Route path="/locations/:city" element={<LocationsPage onBookClick={onBookClick} />} />

          {/* 5. Patient Education & Blogs */}
          <Route path="/blogs" element={<BlogsPage onBookClick={onBookClick} />} />
          <Route path="/blogs/:slug" element={<BlogsPage onBookClick={onBookClick} />} />

          {/* 6. Contact & OPD Hours */}
          <Route path="/contact" element={<ContactPage onBookClick={onBookClick} />} />
          <Route path="/contact-us" element={<ContactPage onBookClick={onBookClick} />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage onBookClick={onBookClick} />} />
        </Routes>
      </main>

      {/* 3. Global Footer (Suppressed on Homepage to eliminate duplicate footer, since HomePage renders it as the shutter slide) */}
      {!isHomePage && <Footer />}

      {/* 4. Global Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />

      {/* 5. Global Floating Action Buttons */}
      <FloatingActions onBookClick={onBookClick} />
    </div>
  );
}

export default function App() {
  const [isAdminView, setIsAdminView] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  // If Admin View is toggled, render the Clinic Admin CRM Dashboard
  if (isAdminView) {
    return <AdminDashboard onBackToPublicSite={() => setIsAdminView(false)} />;
  }

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <NavigationProvider>
          <ScrollToTop />
          <AppShell
            onBookClick={() => setIsAppointmentModalOpen(true)}
            isAppointmentModalOpen={isAppointmentModalOpen}
            setIsAppointmentModalOpen={setIsAppointmentModalOpen}
          />
        </NavigationProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
