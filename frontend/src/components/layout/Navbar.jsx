import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Search, 
  Calendar, 
  ChevronDown, 
  Menu, 
  X,
  Activity,
  Heart,
  Plus
} from 'lucide-react';
import { clinicInfo } from '../../data/clinicContent';

export const Navbar = ({ onBookClick, onToggleAdmin, isAdminView }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navItems = [
    { title: 'Home', href: '/' },
    { 
      title: 'Services', 
      href: '/services',
      dropdown: [
        { title: 'Robotic Knee Replacement', href: '/services/robotic-knee-surgery', desc: 'Sub-millimeter robotic precision' },
        { title: 'Total Knee Replacement (TKR)', href: '/services/knee-replacement', desc: '20+ year high longevity implants' },
        { title: 'Hip Replacement (THA / MIS)', href: '/services/hip-replacement', desc: 'Ceramic low-wear bearings' },
        { title: 'Shoulder Surgery & Arthroscopy', href: '/services/shoulder-replacement', desc: 'Reverse & anatomical arthroplasty' },
        { title: 'ACL & Ligament Reconstruction', href: '/services/acl-surgery', desc: 'IOC sports medicine protocol' },
        { title: 'View All 9 Services', href: '/services', desc: 'Complete orthopaedic surgical portfolio' }
      ]
    },
    { 
      title: 'Departments', 
      href: '/services',
      dropdown: [
        { title: 'Robotic Arthroplasty', href: '/services/robotic-knee-surgery', desc: 'State-of-the-art navigation' },
        { title: 'Joint Reconstruction', href: '/services/hip-replacement', desc: 'British orthopaedic standards' },
        { title: 'Sports Medicine & Arthroscopy', href: '/services/acl-surgery', desc: 'Keyhole ligament & meniscus' },
        { title: 'Trauma & Emergency Fractures', href: '/services/trauma-surgery', desc: '24/7 complex fracture salvage' }
      ]
    },
    { title: 'Doctors', href: '/about' },
    { 
      title: 'Blog', 
      href: '/blogs',
      dropdown: [
        { title: 'All 61 Health Blogs', href: '/blogs', desc: 'Full patient recovery archive' },
        { title: 'Hip Recovery Guide', href: '/blogs', desc: 'Home rehab precautions' },
        { title: 'Robotic Surgery Benefits', href: '/blogs', desc: 'Sub-millimeter evidence' },
        { title: 'ACL Prevention & Rehab', href: '/blogs', desc: 'Sports injury protocols' }
      ]
    },
    { 
      title: 'Pages', 
      href: '/about',
      dropdown: [
        { title: 'About Dr. Vatsal Khetan', href: '/about', desc: 'FRCS Edinburgh & UK NHS credentials' },
        { title: 'Published Research Papers', href: '/about/published-papers', desc: '10 international peer-reviewed papers' },
        { title: 'Fellowship Timeline & Moments', href: '/about/memorable-moments', desc: 'Wrightington & Olympians' },
        { title: 'Outreach Locations', href: '/locations', desc: 'Deoria, Basti, Bihar centres' }
      ]
    },
    { title: 'Contact Us', href: '/contact' }
  ];

  return (
    <header className="w-full relative z-50">
      
      {/* 1. Top Bar (Oreo Template top thin line) */}
      <div className="bg-[#1e2229] text-slate-300 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:drvatsalkhetan@gmail.com" 
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-[#00c5dc]" />
              <span>drvatsalkhetan@gmail.com</span>
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a 
              href="tel:9662365917" 
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#00c5dc]" />
              <span>+91 96623 65917</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-emerald-400 font-semibold hidden md:inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Emergency OPD Open
            </span>
            <span className="text-white/20 hidden md:inline">|</span>
            <button
              onClick={onToggleAdmin}
              className="hover:text-white transition-colors text-[10.5px] cursor-pointer"
            >
              {isAdminView ? '← Public Portal' : 'Doctor Sign In'}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Cyan Brand Header (Exact Oreo Vibrant Cyan Bar) */}
      <div className="bg-[#00bcd4] text-white py-4 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Logo & Tagline */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#00bcd4] flex items-center justify-center font-black text-2xl shadow-md group-hover:scale-105 transition-transform">
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
              <MapPin className="w-5 h-5 text-white/80 shrink-0" />
              <div>
                <span className="block font-bold">Betiahata Road, Gorakhpur</span>
                <span className="text-[11px] text-white/80">SK Pandey Complex, Beside Union Bank</span>
              </div>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center justify-between mt-2 md:mt-0 pt-2 md:pt-0 border-t border-white/20 md:border-t-0">
            <span className="text-xs text-white/90">Betiahata, Gorakhpur</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Floating White Navigation Bar (Exact Oreo Floating Card) */}
      <div className="relative -mt-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 px-6 py-3.5 flex items-center justify-between gap-6">
          
          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-bold text-slate-700">
            {navItems.map((item, idx) => {
              const isActive = location.pathname === item.href;
              return (
                <div 
                  key={idx}
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`inline-flex items-center gap-1 transition-colors hover:text-[#00bcd4] ${
                      isActive ? 'text-[#00bcd4]' : ''
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.dropdown && (
                      <ChevronDown className="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.title && (
                    <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      {item.dropdown.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.href}
                          className="block px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors group/item"
                        >
                          <span className="block text-xs font-bold text-slate-800 group-hover/item:text-[#00bcd4] transition-colors">
                            {sub.title}
                          </span>
                          <span className="block text-[10px] text-slate-400">
                            {sub.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action: Search Bar & Orange Appointment CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Pill Input */}
            <div className="relative w-44 lg:w-48">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs py-1.5 pl-3 pr-8 rounded-full bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#00bcd4] transition-all"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Coral/Orange Oreo CTA Button */}
            <button
              onClick={onBookClick}
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff5722] hover:bg-[#e64a19] text-white shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 shrink-0"
            >
              Make Appointment
            </button>
          </div>

          {/* Mobile Direct Appointment Button */}
          <div className="flex sm:hidden w-full items-center justify-between">
            <span className="text-xs font-bold text-slate-800">Menu &amp; Booking</span>
            <button
              onClick={onBookClick}
              className="px-4 py-1.5 rounded-full text-xs font-bold uppercase bg-[#ff5722] text-white shadow-xs"
            >
              Book OPD
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 space-y-3 animate-in slide-in-from-top-3 duration-200">
            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-2">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.title ? null : item.title)}
                      className="w-full flex items-center justify-between text-xs font-bold text-slate-800 py-1.5"
                    >
                      <span>{item.title}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileExpanded === item.title ? 'rotate-180 text-[#00bcd4]' : ''}`} />
                    </button>
                    {mobileExpanded === item.title && (
                      <div className="pl-3 pt-1 space-y-1.5">
                        {item.dropdown.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            to={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-xs text-slate-600 py-1 hover:text-[#00bcd4]"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-bold text-slate-800 py-1.5 hover:text-[#00bcd4]"
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
                className="w-full py-2.5 rounded-full text-xs font-bold uppercase bg-[#ff5722] text-white shadow-md text-center"
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
