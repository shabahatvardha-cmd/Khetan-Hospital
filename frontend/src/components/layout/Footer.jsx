import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ChevronRight, 
  ArrowUp,
  MessageCircle,
  ShieldCheck,
  Award
} from 'lucide-react';
import { clinicInfo } from '../../data/clinicContent';

export const Footer = ({ onBookClick, onToggleAdmin, isAdminView }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06152b] text-slate-300 pt-20 pb-10 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Editorial Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800">
          
          {/* Column 1: Hospital Stature & Chief Surgeon Spotlight (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0ea5e9] to-[#00458b] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                KH
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbb387] block">
                  Centre of Orthopedic Excellence
                </span>
                <h3 className="text-base font-editorial font-bold text-white tracking-tight">
                  Khetan Hospital
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans-clean">
              For over 12+ years, Khetan Hospital has pioneered western surgical approaches in Eastern Uttar Pradesh &amp; Western Bihar. Renowned for sub-millimeter robotic joint arthroplasty, keyhole sports arthroscopy, and complex trauma reconstruction.
            </p>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#cbb387] block">
                Chief Orthopedic Surgeon
              </span>
              <h4 className="text-xs font-bold text-white">Dr. Vatsal Khetan</h4>
              <p className="text-[11px] text-slate-400">
                MBBS &bull; MS (Ortho) &bull; MRCS &bull; FRCS (Trauma &amp; Ortho, Edinburgh) &bull; M.Ch (UK) &bull; IOC Sports Med (Switzerland)
              </p>
            </div>
          </div>

          {/* Column 2: Surgical Specialties & Navigation (4 Cols split) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#cbb387]">
              Surgical Departments &amp; Links
            </h4>
            
            <div className="grid grid-cols-2 gap-4 text-xs text-slate-300">
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#cbb387]" />
                    <span>About Dr. Khetan</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#cbb387]" />
                    <span>Robotic Joint Surgery</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#cbb387]" />
                    <span>Hip Arthroplasty</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#cbb387]" />
                    <span>Shoulder Surgery</span>
                  </Link>
                </li>
                <li>
                  <Link to="/papers" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#cbb387]" />
                    <span>Published Papers (10)</span>
                  </Link>
                </li>
              </ul>

              <ul className="space-y-3">
                <li>
                  <Link to="/services" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#cbb387]" />
                    <span>Sports Medicine &amp; ACL</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#cbb387]" />
                    <span>Patient Recovery Guides</span>
                  </Link>
                </li>
                <li>
                  <button onClick={onBookClick} className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#cbb387]" />
                    <span>Book Appointment</span>
                  </button>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#cbb387]" />
                    <span>Hospital Desk</span>
                  </Link>
                </li>
                <li>
                  <Link to="/moments" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#cbb387]" />
                    <span>Clinical Moments</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Verified Contact & Hospital Desk (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#cbb387]">
              Hospital Location &amp; Desk
            </h4>

            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">
                  Vikas Nagar Bargadawa Gorakhpur, Gorakhpur, Uttar Pradesh, 273015
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <a href="tel:9662365917" className="font-bold text-white hover:text-[#38bdf8] transition-colors">
                  +91 96623 65917
                </a>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  24/7 Desk
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <a href="mailto:drvatsalkhetan@gmail.com" className="hover:text-[#38bdf8] transition-colors text-slate-400">
                  drvatsalkhetan@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Mon - Saturday: 9:00 AM - 8:00 PM</span>
                  <span className="block text-[11px] text-slate-400">Sunday: Emergency Trauma Services Only</span>
                </div>
              </li>
            </ul>

            {/* Cashless TPA Tag */}
            <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800">
              <strong className="text-slate-300">100% Cashless TPA Desk:</strong> Star Health &bull; Care &bull; HDFC ERGO &bull; ICICI Lombard &bull; All Major TPAs
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Navigation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} <strong>Khetan Hospital</strong>. All rights reserved.</span>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <span className="text-slate-400">Bargadawa, Gorakhpur</span>
            {onToggleAdmin && (
              <>
                <span className="text-slate-600">&bull;</span>
                <button 
                  onClick={onToggleAdmin}
                  className="hover:text-[#38bdf8] transition-colors text-[11px] underline cursor-pointer text-slate-500"
                >
                  {isAdminView ? '← Public Site' : 'Doctor Portal'}
                </button>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* WhatsApp Quick Link */}
            <a
              href="https://wa.me/919662365917?text=Hello%20Khetan%20Hospital,%20I%20have%20an%20inquiry."
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm inline-flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Priority WhatsApp</span>
            </a>

            {/* Scroll-to-top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#00458b] text-[#cbb387] hover:text-white flex items-center justify-center border border-slate-700 transition-all duration-200 cursor-pointer shadow-md"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
