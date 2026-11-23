import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  ShieldCheck, 
  LayoutDashboard,
  MapPin,
  Sparkles
} from 'lucide-react';
import { clinicInfo, navMenu } from '../../data/navigationData';

export const Navbar = ({ onBookClick, onToggleAdmin, isAdminView }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  return (
    <>
      {/* 1. Hostinger-Inspired Micro Status Bar */}
      <div className="bg-[#08284d] text-white text-[10.5px] py-1.5 px-4 hidden md:block border-b border-[#0f3563]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="eyebrow text-slate-300">
              <span className="status-dot"></span>
              OPD OPEN · BETIAHATA, GORAKHPUR
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-medium tracking-tight">
              {clinicInfo.timings}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`} 
              className="font-bold text-[#f37021] hover:text-orange-400 transition-colors flex items-center space-x-1"
            >
              <Phone className="w-3 h-3" />
              <span>Priority: {clinicInfo.phone}</span>
            </a>

            <span className="text-slate-700">|</span>

            {/* Portal Switcher Button */}
            <button
              onClick={onToggleAdmin}
              className={`flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition-all ${
                isAdminView
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-3 h-3 text-[#f37021]" />
              <span>{isAdminView ? '← Public View' : 'Doctor Portal'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Modern 90px Sticky Header (Hostinger Horizons Specification) */}
      <header className="site-header">
        
        {/* Brand / Logo */}
        <a 
          href="/" 
          className="flex items-center gap-3 flex-shrink-0 group py-1"
          aria-label="Dr. Vatsal Khetan Clinic"
        >
          <img 
            src="/logo.webp" 
            alt="Dr. Vatsal Khetan Logo" 
            className="h-8 sm:h-11 md:h-13 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav hidden lg:flex" aria-label="Main navigation">
          {navMenu.map((item, idx) => {
            if (item.dropdown) {
              return (
                <div 
                  key={idx}
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    className="flex items-center gap-1.5 focus:outline-none"
                    aria-expanded={activeDropdown === item.title}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === item.title ? 'rotate-180 text-[#f37021]' : 'text-slate-400'
                    }`} />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.title && (
                    <div 
                      className="absolute top-full left-0 pt-2 w-80 animate-in fade-in zoom-in-95 duration-150 z-50"
                    >
                      <div className="glass-dropdown rounded-2xl p-3 shadow-dropdown">
                        {item.dropdown.map((sub, sIdx) => (
                          <a
                            key={sIdx}
                            href={sub.href}
                            className="block p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#08284d] group-hover/item:text-[#f37021] transition-colors">
                                {sub.title}
                              </span>
                              {sub.tag && (
                                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-orange-100 text-[#f37021] font-semibold">
                                  {sub.tag}
                                </span>
                              )}
                            </div>
                            {sub.desc && (
                              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 font-normal lowercase first-letter:uppercase">
                                {sub.desc}
                              </p>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a 
                key={idx} 
                href={item.href}
              >
                {item.title}
              </a>
            );
          })}
        </nav>

        {/* Right Header Actions */}
        <div className="flex items-center gap-3">
          
          {/* Emergency / Phone Contact (Desktop) */}
          <a
            href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
            className="hidden xl:flex items-center gap-2 text-xs font-bold text-[#08284d] hover:text-[#f37021] transition-colors px-3 py-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#f37021]" />
            <span>{clinicInfo.phone}</span>
          </a>

          {/* Hostinger Modern Navy Pill Button */}
          <button 
            onClick={onBookClick}
            className="button-navy !min-h-[38px] sm:!min-h-[44px] !px-3 sm:!px-5 !py-1.5 sm:!py-2.5 !text-[10px] sm:!text-[11.5px] !gap-1.5 sm:!gap-3"
          >
            <span className="hidden sm:inline">Book Consultation</span>
            <span className="sm:hidden font-bold">Book Visit</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f37021]" />
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#08284d] hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] sm:top-[78px] bottom-0 bg-white/98 backdrop-blur-xl z-50 overflow-y-auto border-t border-slate-200/80 p-5 sm:p-6 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="space-y-4">
            
            {/* Quick Status Pill */}
            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between">
              <span className="eyebrow text-[#08284d]">
                <span className="status-dot"></span>
                OPD Open Today
              </span>
              <span className="text-[11px] font-semibold text-slate-600">
                Betiahata, Gorakhpur
              </span>
            </div>

            {/* Links */}
            <div className="space-y-1">
              {navMenu.map((item, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-2">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.title ? null : item.title)}
                        className="w-full flex items-center justify-between py-2 text-sm font-bold text-[#08284d]"
                      >
                        <span>{item.title}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.title ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileExpanded === item.title && (
                        <div className="pl-4 space-y-2 mt-2">
                          {item.dropdown.map((sub, sIdx) => (
                            <a
                              key={sIdx}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-xs font-medium text-slate-700 hover:text-[#f37021]"
                            >
                              {sub.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm font-bold text-[#08284d]"
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Booking CTA */}
            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="button-orange w-full !justify-center"
              >
                <span>Book OPD Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onToggleAdmin();
                }}
                className="w-full py-2.5 rounded-full text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-2"
              >
                <LayoutDashboard className="w-3.5 h-3.5 text-[#f37021]" />
                <span>{isAdminView ? 'Switch to Website' : 'Clinic Staff / Admin Portal'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
