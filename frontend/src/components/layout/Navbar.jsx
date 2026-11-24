import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  MessageCircle,
  LayoutDashboard,
  ShieldCheck
} from 'lucide-react';
import { clinicInfo } from '../../data/clinicContent';

export const Navbar = ({ onBookClick, onToggleAdmin, isAdminView }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  const navItems = [
    { title: 'Home', href: '/' },
    { 
      title: 'About Doctor', 
      href: '/about',
      dropdown: [
        { title: 'About Dr. Vatsal Khetan', href: '/about', desc: 'FRCS Edinburgh & UK NHS credentials' },
        { title: 'Memorable Moments & Timeline', href: '/about/memorable-moments', desc: 'Wrightington UK, athletes & mentors' },
        { title: 'Published Research Papers', href: '/about/published-papers', desc: '10 peer-reviewed international publications' }
      ]
    },
    { 
      title: 'Treatments & Services', 
      href: '/services',
      dropdown: [
        { title: 'Robotic Knee Surgery', href: '/services/robotic-knee-surgery', desc: 'Sub-millimeter robotic precision' },
        { title: 'Total Knee Replacement (TKR)', href: '/services/knee-replacement', desc: '20+ year high longevity implants' },
        { title: 'Hip Replacement (THA & MIS)', href: '/services/hip-replacement', desc: 'Ceramic low-wear bearings' },
        { title: 'Shoulder Replacement & Arthroscopy', href: '/services/shoulder-replacement', desc: 'Reverse & anatomical surgery' },
        { title: 'ACL & Ligament Reconstruction', href: '/services/acl-surgery', desc: 'IOC sports medicine protocol' },
        { title: 'Knee Keyhole Arthroscopy', href: '/services/knee-arthroscopy', desc: 'Day-care meniscus & cartilage repair' },
        { title: 'View All Services', href: '/services', desc: 'Complete orthopaedic surgical portfolio' }
      ]
    },
    { 
      title: 'Locations', 
      href: '/locations',
      dropdown: [
        { title: 'Main Clinic — Betiahata, Gorakhpur', href: '/locations', desc: 'Daily OPD & Advanced OT facility' },
        { title: 'Deoria Outreach Centre', href: '/locations', desc: 'Weekly specialized joint consultation' },
        { title: 'Basti Outreach Centre', href: '/locations', desc: 'Outreach joint pain evaluations' },
        { title: 'Kushinagar Outreach Centre', href: '/locations', desc: 'Arthritis & ACL screening camps' },
        { title: 'Bettiah & Siwan (Bihar)', href: '/locations', desc: 'Border regional patient care' }
      ]
    },
    { title: 'Health Blogs', href: '/blogs' },
    { title: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* 1. Oreo Top Contact & Emergency Bar */}
      <div className="bg-[#08284d] text-white text-[11px] py-2 px-4 hidden md:block border-b border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Location & Hours */}
          <div className="flex items-center space-x-6">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <strong>OPD Open:</strong> Betiahata, Gorakhpur
            </span>
            <span className="text-white/20">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#00b4d8]" />
              Mon - Sat: 9:00 AM - 1:00 PM &bull; 2:00 PM - 8:00 PM
            </span>
          </div>

          {/* Right: Phone, Email & WhatsApp */}
          <div className="flex items-center space-x-5">
            <a 
              href="mailto:drvatsalkhetan@gmail.com"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-[#00b4d8]" />
              <span>drvatsalkhetan@gmail.com</span>
            </a>

            <span className="text-white/20">|</span>

            <a 
              href={`https://wa.me/919662365917?text=Hello%20Dr.%20Vatsal%20Khetan%20Clinic,%20I%20would%20like%20to%20book%20an%20OPD%20appointment.`}
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>

            <span className="text-white/20">|</span>

            <a 
              href={`tel:9662365917`}
              className="inline-flex items-center gap-1.5 font-bold text-[#f37021] hover:text-orange-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Emergency: 9662365917</span>
            </a>

            {/* Doctor Portal Switcher */}
            <button
              onClick={onToggleAdmin}
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition-all ${
                isAdminView
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-3 h-3 text-[#f37021]" />
              <span>{isAdminView ? '← Public View' : 'Doctor Portal'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Oreo Hospital Main Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo / Brand Name */}
          <Link 
            to="/" 
            className="flex items-center gap-3.5 flex-shrink-0 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#08284d] to-[#00458b] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-xl tracking-tight text-[#00b4d8]">VK</span>
            </div>
            <div>
              <span className="block text-base sm:text-lg font-extrabold text-[#08284d] tracking-tight leading-tight group-hover:text-[#00458b] transition-colors">
                Khetan Knee N Shoulder Clinic
              </span>
              <span className="block text-[10.5px] font-semibold text-[#00b4d8] tracking-wide uppercase">
                Dr. Vatsal Khetan &bull; FRCS (Edinburgh) &bull; M.Ch (UK)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-semibold text-xs text-[#08284d]">
            {navItems.map((item, idx) => {
              const isActive = location.pathname === item.href;

              if (item.dropdown) {
                return (
                  <div 
                    key={idx}
                    className="relative group py-6"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link 
                      to={item.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                        isActive 
                          ? 'text-[#00b4d8] font-bold bg-blue-50/60' 
                          : 'hover:text-[#00b4d8] hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.title ? 'rotate-180 text-[#00b4d8]' : 'text-slate-400'
                      }`} />
                    </Link>

                    {/* Smooth Dropdown Flyout */}
                    {activeDropdown === item.title && (
                      <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        {item.dropdown.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            to={sub.href}
                            className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                          >
                            <span className="block text-xs font-bold text-[#08284d] group-hover/item:text-[#00b4d8]">
                              {sub.title}
                            </span>
                            <span className="block text-[10px] text-slate-500 font-normal mt-0.5">
                              {sub.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  to={item.href}
                  className={`px-3 py-2 rounded-xl transition-all ${
                    isActive 
                      ? 'text-[#00b4d8] font-bold bg-blue-50/60' 
                      : 'hover:text-[#00b4d8] hover:bg-slate-50'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Oreo Appointment CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white text-xs font-bold shadow-md hover:shadow-lg hover:brightness-105 active:scale-98 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Make an Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onBookClick}
              className="p-2 rounded-xl bg-[#00b4d8] text-white text-xs font-bold"
              aria-label="Book"
            >
              <Calendar className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-[#08284d] hover:bg-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-5 shadow-2xl space-y-3 animate-in slide-in-from-top-3 duration-200">
            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-slate-50 pb-2">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.title ? null : item.title)}
                      className="w-full flex items-center justify-between text-sm font-bold text-[#08284d] py-1.5"
                    >
                      <span>{item.title}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.title ? 'rotate-180 text-[#00b4d8]' : ''}`} />
                    </button>
                    {mobileExpanded === item.title && (
                      <div className="pl-3 pt-2 space-y-2">
                        {item.dropdown.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            to={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-xs text-slate-600 py-1 hover:text-[#00b4d8]"
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
                    className="block text-sm font-bold text-[#08284d] py-1.5 hover:text-[#00b4d8]"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 rounded-xl bg-[#00b4d8] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Now</span>
              </button>

              <a
                href="tel:9662365917"
                className="w-full py-2.5 rounded-xl bg-orange-50 text-[#f37021] font-bold text-xs flex items-center justify-center gap-2 border border-orange-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call Emergency: 9662365917</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
