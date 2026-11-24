import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Clock,
  ChevronDown,
  Menu,
  X,
  Plus,
  ArrowRight
} from 'lucide-react';
import { SearchAutocomplete } from './SearchAutocomplete';

export const Navbar = ({ onBookClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  // Scroll listener to pin white bar at the top on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 75);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside listener to close dropdowns smoothly
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavLinkClick = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  // Engaging, simplified navigation menu with direct first-item routing and strictly 1-liner lists
  const navItems = [
    { title: 'Home', href: '/' },
    {
      title: 'Services',
      href: '/services/robotic-knee-surgery', // Direct routing to first item place on click
      dropdown: [
        { title: 'Robotic Knee Replacement', href: '/services/robotic-knee-surgery' },
        { title: 'Total Knee Replacement (TKR)', href: '/services/knee-replacement' },
        { title: 'Hip Replacement (MIS & AVN)', href: '/services/hip-replacement' },
        { title: 'Shoulder Surgery & Cuff Repair', href: '/services/shoulder-replacement' },
        { title: 'ACL & Sports Arthroscopy', href: '/services/acl-surgery' },
        { title: 'Trauma & Fracture Care', href: '/services/trauma-surgery' },
        { title: 'Spine & Lumbar Surgery', href: '/services/spine-surgery' },
        { title: 'View All 9 Specialties →', href: '/services' }
      ]
    },
    {
      title: 'Doctors',
      href: '/about', // Direct routing to Dr. Vatsal Khetan on click
      dropdown: [
        { title: 'Dr. Vatsal Khetan (FRCS Edinburgh)', href: '/about' },
        { title: 'Fellowship Timeline & Moments', href: '/about/memorable-moments' },
        { title: 'Published Research Papers', href: '/about/published-papers' }
      ]
    },
    {
      title: 'Blog',
      href: '/blogs', // Direct routing to all clinical articles on click
      dropdown: [
        { title: 'All Clinical Articles (61)', href: '/blogs' },
        { title: 'Knee & Joint Preservation', href: '/blogs?search=Knee' },
        { title: 'Robotic Surgery Outcomes', href: '/blogs?search=Robotic' },
        { title: 'Sports Medicine & ACL Rehab', href: '/blogs?search=ACL' },
        { title: 'Hip Replacement Precautions', href: '/blogs?search=Hip' }
      ]
    },
    {
      title: 'Locations',
      href: '/locations' // Direct routing to outreach OPD centres on click
    },
    { title: 'Contact Us', href: '/contact' }
  ];

  const checkIsActive = (item) => {
    if (item.href === '/') {
      return location.pathname === '/';
    }
    if (item.title === 'Services') {
      return location.pathname.startsWith('/services');
    }
    if (item.title === 'Doctors') {
      return location.pathname.startsWith('/about') || location.pathname === '/timeline';
    }
    if (item.title === 'Blog') {
      return location.pathname.startsWith('/blogs');
    }
    if (item.title === 'Locations') {
      return location.pathname.startsWith('/locations');
    }
    if (item.title === 'Contact Us') {
      return location.pathname.startsWith('/contact');
    }
    return location.pathname === item.href;
  };

  return (
    <header className="w-full relative z-50">

      {/* Main Cyan Brand Header */}
      <div className="bg-[#00bcd4] text-white py-4 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">

          {/* Logo & Tagline */}
          <Link to="/" onClick={handleNavLinkClick} className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#00bcd4] flex items-center justify-center font-black text-2xl shadow-md group-hover:scale-105 transition-transform shrink-0">
              <Plus className="w-7 h-7 stroke-[3]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-none">
                  KHETAN
                </span>
                <span className="text-2xl sm:text-3xl font-light text-white/90 leading-none">
                  HOSPITAL
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium text-white/85 tracking-widest uppercase block mt-1">
                Care Your Health &bull; Advanced Orthopedics &amp; Joint Replacement
              </span>
            </div>
          </Link>

          {/* Working Hours & Hospital Location Details */}
          <div className="hidden lg:flex items-center space-x-8 text-xs text-white">
            <div className="flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-white/80 shrink-0" />
              <div>
                <span className="block font-bold">Mon - Sat: 9:00 - 20:00</span>
                <span className="text-[11px] text-white/80">Sunday by Emergency Appointment</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-5 h-5 text-white/80 shrink-0" />
              <div>
                <span className="block font-bold">Emergency 24/7</span>
                <span className="text-[11px] text-white/80">Betiahata, Gorakhpur</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sticky White Navigation Bar */}
      <div
        ref={navRef}
        className={`w-full bg-white transition-all duration-300 border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 ${
          isScrolled
            ? 'fixed top-0 left-0 right-0 z-50 shadow-md py-2.5 bg-white/98 backdrop-blur-md animate-in slide-in-from-top-2 duration-200'
            : 'relative py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#00bcd4] hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Nav Links (Direct Click Navigation + Strictly 1-Liner Dropdowns) */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-bold text-slate-700">
            {navItems.map((item, idx) => {
              const isActive = checkIsActive(item);
              const isHovered = activeDropdown === item.title;

              return (
                <div
                  key={idx}
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {/* DIRECT CLICK LINK: Navigates immediately to first item destination! */}
                  <Link
                    to={item.href}
                    onClick={handleNavLinkClick}
                    className={`inline-flex items-center gap-1 transition-colors hover:text-[#00bcd4] py-1 cursor-pointer tracking-wider uppercase text-[11px] font-extrabold ${
                      isActive ? 'text-[#00bcd4]' : 'text-slate-700'
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.dropdown && (
                      <ChevronDown className={`w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform ${isHovered ? 'rotate-180 text-[#00bcd4]' : ''}`} />
                    )}
                  </Link>

                  {/* Clean, Engaging & Strictly 1-Liner Dropdown Menu */}
                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-0 pt-2 z-50 animate-in fade-in zoom-in-95 duration-150 ${
                        isHovered ? 'block' : 'hidden group-hover:block'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 px-1.5 ring-1 ring-black/5">
                        {item.dropdown.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            to={sub.href}
                            onClick={handleNavLinkClick}
                            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-sky-50 transition-colors group/item"
                          >
                            <span className="text-xs font-semibold text-slate-700 group-hover/item:text-[#00bcd4] group-hover/item:font-bold transition-colors truncate whitespace-nowrap">
                              {sub.title}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#00bcd4] group-hover/item:translate-x-0.5 transition-all shrink-0 ml-2" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action: Smart Interactive Search Bar & Appointment CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Smart Search Bar with Recent Searches & Live Autocomplete */}
            <SearchAutocomplete isMobile={false} onAfterNavigate={handleNavLinkClick} />

            {/* Coral/Orange CTA Button */}
            <button
              onClick={onBookClick}
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff5722] hover:bg-[#e64a19] text-white shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 shrink-0 cursor-pointer"
            >
              Make Appointment
            </button>
          </div>

          {/* Mobile Right Quick Action */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onBookClick}
              className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase bg-[#ff5722] text-white shadow-xs cursor-pointer"
            >
              Book OPD
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 space-y-4 animate-in slide-in-from-top-3 duration-200">
            {/* Smart Search Bar inside Mobile Menu */}
            <div className="pb-2">
              <SearchAutocomplete isMobile={true} onAfterNavigate={() => setMobileMenuOpen(false)} />
            </div>

            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-2">
                {item.dropdown ? (
                  <div>
                    <div className="flex items-center justify-between py-1.5">
                      {/* Direct Click Link on Title routes to first item */}
                      <Link
                        to={item.href}
                        onClick={handleNavLinkClick}
                        className={`text-xs font-bold uppercase tracking-wider ${
                          checkIsActive(item) ? 'text-[#00bcd4]' : 'text-slate-800 hover:text-[#00bcd4]'
                        }`}
                      >
                        {item.title}
                      </Link>
                      {/* Dropdown Expand Button */}
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.title ? null : item.title)}
                        className="p-1 rounded-lg text-slate-500 hover:bg-slate-100 cursor-pointer"
                        aria-label="Expand submenu"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.title ? 'rotate-180 text-[#00bcd4]' : ''}`} />
                      </button>
                    </div>

                    {mobileExpanded === item.title && (
                      <div className="pl-3 pt-1 space-y-1 pb-1">
                        {item.dropdown.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            to={sub.href}
                            onClick={handleNavLinkClick}
                            className="flex items-center justify-between py-2 px-2.5 rounded-xl text-xs text-slate-600 hover:bg-sky-50 hover:text-[#00bcd4] font-medium transition-colors"
                          >
                            <span className="truncate">{sub.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0 ml-2" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={handleNavLinkClick}
                    className={`block text-xs font-bold py-1.5 uppercase tracking-wider ${
                      checkIsActive(item) ? 'text-[#00bcd4]' : 'text-slate-800 hover:text-[#00bcd4]'
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-2.5 rounded-full text-xs font-bold uppercase bg-[#ff5722] text-white shadow-md text-center cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}

      </div>

    </header>
  );
};
