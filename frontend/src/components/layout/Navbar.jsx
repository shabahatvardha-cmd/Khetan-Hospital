import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Clock,
  ChevronDown,
  Menu,
  X,
  Plus,
  ArrowRight
} from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { clinicInfo, mainNavigation } from '../../data/navigationData';

/**
 * 🏥 Khetan Hospital - Synchronized Navigation Bar
 * 
 * Strict Specification:
 * 1. Contains exactly the same six main destinations:
 *    HOME | SERVICES | DOCTORS | BLOGS | LOCATIONS | CONTACT
 * 2. Synchronized with the 3D card carousel via useNavigation()
 * 3. When carousel moves, the corresponding navbar item automatically highlights.
 * 4. When visitor clicks a navbar item:
 *    - On homepage: moves carousel smoothly to that card and highlights it.
 *    - On inner pages: navigates to that section's route.
 * 5. Compact height (~72-80px) to keep homepage strictly within 100dvh.
 * 6. Active state is derived from current route on inner pages, and from centered card on homepage.
 */
export const Navbar = ({ onBookClick }) => {
  const { activeSectionId, isHomePage, goToSection } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Quick sub-routes for hover menus on inner pages
  const subDropdowns = {
    services: [
      { title: 'Robotic Knee Replacement', href: '/services/robotic-knee-surgery' },
      { title: 'Total Knee Replacement (TKR)', href: '/services/knee-replacement' },
      { title: 'Hip Replacement (MIS & AVN)', href: '/services/hip-replacement' },
      { title: 'Shoulder Surgery & Cuff Repair', href: '/services/shoulder-replacement' },
      { title: 'ACL & Sports Arthroscopy', href: '/services/acl-surgery' },
      { title: 'Spine & Lumbar Surgery', href: '/services/spine-surgery' },
      { title: 'View All Specialties →', href: '/services' }
    ],
    doctors: [
      { title: 'Dr. Vatsal Khetan (FRCS Edinburgh)', href: '/about' },
      { title: 'Fellowship Timeline & Moments', href: '/about/memorable-moments' },
      { title: 'Published Research Papers', href: '/about/published-papers' }
    ]
  };

  const handleItemClick = (sectionId) => {
    goToSection(sectionId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header ref={navRef} className="w-full sticky top-0 z-[100] bg-white border-b border-slate-200/90 shadow-2xs select-none shrink-0">
      
      {/* Main Synchronized Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <Link 
          to="/" 
          onClick={() => handleItemClick('home')}
          className="flex items-center gap-2.5 group shrink-0 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-[#00bcd4] text-white flex items-center justify-center font-black shadow-xs group-hover:scale-105 transition-transform">
            <Plus className="w-5 h-5 stroke-[3]" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-none">
              KHETAN <span className="font-light text-slate-600">HOSPITAL</span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold text-slate-500 tracking-wider uppercase leading-tight mt-0.5">
              Orthopedic &amp; Robotic Joint Care
            </span>
          </div>
        </Link>

        {/* Desktop 6 Synchronized Navigation Items */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {mainNavigation.map((item) => {
            const isActive = activeSectionId === item.id;
            const hasDropdown = !isHomePage && subDropdowns[item.id];
            const isHovered = activeDropdown === item.id;

            return (
              <div 
                key={item.id} 
                className="relative py-1"
                onMouseEnter={() => hasDropdown && setActiveDropdown(item.id)}
                onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                    isActive
                      ? 'text-sky-700 bg-sky-50 shadow-2xs font-extrabold border-b-2 border-sky-500'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-semibold'
                  }`}
                >
                  <span>{item.label}</span>
                  {hasDropdown && (
                    <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isHovered ? 'rotate-180 text-sky-600' : ''}`} />
                  )}
                </button>

                {/* Submenu on Inner Pages (Hover) */}
                {hasDropdown && isHovered && (
                  <div className="absolute top-full left-0 pt-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 px-1 ring-1 ring-black/5">
                      {subDropdowns[item.id].map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                        >
                          <span className="truncate">{sub.title}</span>
                          <ArrowRight className="w-3 h-3 text-slate-400 shrink-0 ml-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Hamburger */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onBookClick}
            className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00bcd4] hover:bg-[#00acc1] text-white shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
          >
            Book OPD
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-sky-600 hover:bg-slate-100 transition-colors md:hidden cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2 animate-in slide-in-from-top-2 duration-150 shadow-lg">
          {mainNavigation.map((item) => {
            const isActive = activeSectionId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-between ${
                  isActive
                    ? 'text-sky-700 bg-sky-50 border-l-4 border-sky-500 font-extrabold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="text-[10px] text-sky-600 font-normal">Active</span>}
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-2.5 rounded-full text-xs font-bold uppercase bg-[#00bcd4] text-white shadow-xs text-center cursor-pointer"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
