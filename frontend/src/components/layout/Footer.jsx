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
  HelpCircle
} from 'lucide-react';
import { clinicInfo } from '../../data/clinicContent';

export const Footer = ({ onBookClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#edf2f6] text-slate-700 pt-16 pb-8 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Oreo Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Column 1: About Hospitals (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
              About Khetan Hospital
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              The relentless service of Khetan Hospital in the past 12+ years has taken orthopedic healthcare to the most modern levels in the region catering to Eastern UP &amp; Western Bihar. A Healthcare Provider of Western Surgical Approach, Khetan Hospital is the region's most trusted centre for robotic joint replacement and sports medicine.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Led by Dr. Vatsal Khetan (FRCS Edinburgh, M.Ch UK, IOC Sports Med).
            </p>
          </div>

          {/* Column 2: Useful Links (4 Cols split into 2 sub-columns) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
              Useful Links
            </h4>
            
            <div className="grid grid-cols-2 gap-4 text-xs text-slate-600">
              <ul className="space-y-2.5">
                <li>
                  <Link to="/about" className="hover:text-[#00bcd4] transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#00bcd4] transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                    <span>Consultants</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#00bcd4] transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                    <span>Working Hours</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#00bcd4] transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                    <span>Procedures</span>
                  </Link>
                </li>
              </ul>

              <ul className="space-y-2.5">
                <li>
                  <Link to="/services" className="hover:text-[#00bcd4] transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                    <span>Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="hover:text-[#00bcd4] transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                    <span>Recovery Guides</span>
                  </Link>
                </li>
                <li>
                  <button onClick={onBookClick} className="hover:text-[#00bcd4] transition-colors flex items-center gap-1 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                    <span>Appointments</span>
                  </button>
                </li>
                <li>
                  <Link to="/blogs" className="hover:text-[#00bcd4] transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                    <span>Latest News</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Details (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
              Contact Details
            </h4>

            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>SK Pandey Complex, Beside Union Bank, Betiahata, Gorakhpur, UP 273001</span>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:drvatsalkhetan@gmail.com" className="hover:text-[#00bcd4] transition-colors">
                  drvatsalkhetan@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="tel:9662365917" className="font-bold text-[#ff5722] hover:underline">
                  +91 96623 65917
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block">Mon - Saturday: 9:00 AM - 8:00 PM</span>
                  <span className="block text-[11px] text-slate-400">Sunday: 10:00 AM - 2:00 PM (Emergency)</span>
                </div>
              </li>
            </ul>

            {/* Cashless TPA Tag */}
            <div className="pt-2 text-[11px] text-slate-500">
              <strong>Cashless TPA:</strong> Star Health &bull; Care &bull; HDFC ERGO &bull; ICICI Lombard &bull; All Corporate TPAs
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Copyright &copy; 2026 <strong>Khetan Hospital</strong>. All rights reserved.
          </div>

          {/* Oreo Centered Scroll-to-top Orange Dot Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-full bg-[#ff5722] hover:bg-[#e64a19] text-white flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

          {/* Oreo Support Pill */}
          <a
            href="https://wa.me/919662365917?text=Hello%20Khetan%20Hospital,%20I%20have%20an%20inquiry."
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#00bcd4] hover:bg-[#00acc1] text-white shadow-xs inline-flex items-center gap-1.5 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Support</span>
          </a>
        </div>

      </div>
    </footer>
  );
};
