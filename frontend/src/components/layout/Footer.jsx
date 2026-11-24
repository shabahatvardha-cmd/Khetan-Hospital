import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  Activity, 
  ChevronRight,
  Award
} from 'lucide-react';
import { clinicInfo } from '../../data/clinicContent';

export const Footer = ({ onBookClick }) => {
  return (
    <footer className="bg-[#051c36] text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Top Emergency & Helpline Bar */}
      <div className="bg-[#08284d] border-b border-white/10 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-slate-200">
              Gorakhpur Clinic OPD Open Today &bull; Betiahata Road
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="tel:9662365917"
              className="inline-flex items-center gap-1.5 font-bold text-[#f37021] hover:text-orange-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Priority Hotline: +91 96623 65917</span>
            </a>
            <a 
              href="#top"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00b4d8]" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Hospital Branding & Doctor Creds (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00b4d8] to-[#08284d] text-white flex items-center justify-center font-black text-lg shadow-md border border-white/20">
                VK
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white tracking-tight">
                  Dr. Vatsal Khetan
                </h3>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#00b4d8] block">
                  Khetan Hospital
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Consultant Orthopedic &amp; Joint Replacement Surgeon. Fellow of the Royal College of Surgeons (FRCS Edinburgh, UK), MS Ortho, MRCS, and IOC Sports Medicine. Bringing sub-millimeter robotic surgery and British arthroplasty protocols to Eastern Uttar Pradesh.
            </p>

            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-3.5 h-3.5 text-[#f37021] shrink-0" />
                <span>FRCS (Tr &amp; Orth) — Royal College of Surgeons of Edinburgh</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>UK NHS Fellowship Training — Wrightington &amp; Rotherham</span>
              </div>
            </div>

            <div className="pt-3">
              <Link 
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00b4d8] hover:text-white transition-colors"
              >
                <span>Read Doctor's Complete Background</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Clinical Specialties (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00b4d8] mb-4">
              Clinical Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services/robotic-knee-surgery" className="text-slate-300 hover:text-white transition-colors block py-0.5">
                  Robotic Knee Replacement
                </Link>
              </li>
              <li>
                <Link to="/services/knee-replacement" className="text-slate-300 hover:text-white transition-colors block py-0.5">
                  Total Knee Replacement (TKR)
                </Link>
              </li>
              <li>
                <Link to="/services/hip-replacement" className="text-slate-300 hover:text-white transition-colors block py-0.5">
                  Hip Replacement &amp; AVN Care
                </Link>
              </li>
              <li>
                <Link to="/services/shoulder-replacement" className="text-slate-300 hover:text-white transition-colors block py-0.5">
                  Shoulder Surgery &amp; Keyhole Repair
                </Link>
              </li>
              <li>
                <Link to="/services/acl-surgery" className="text-slate-300 hover:text-white transition-colors block py-0.5">
                  ACL &amp; Sports Medicine
                </Link>
              </li>
              <li>
                <Link to="/services/trauma-surgery" className="text-slate-300 hover:text-white transition-colors block py-0.5">
                  Complex Trauma &amp; Fractures
                </Link>
              </li>
              <li className="pt-2">
                <Link to="/services" className="text-xs font-bold text-[#f37021] hover:text-orange-400 inline-flex items-center gap-1">
                  <span>View All 9 Services</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Outreach & Patient Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00b4d8] mb-4">
              Patient Care
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onBookClick} className="text-slate-300 hover:text-white transition-colors text-left py-0.5 cursor-pointer">
                  Book OPD Appointment
                </button>
              </li>
              <li>
                <Link to="/locations" className="text-slate-300 hover:text-white transition-colors block py-0.5">
                  Outreach Clinics (Deoria, Basti)
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-slate-300 hover:text-white transition-colors block py-0.5">
                  61 Health Blogs &amp; Guides
                </Link>
              </li>
              <li>
                <Link to="/about/published-papers" className="text-slate-300 hover:text-white transition-colors block py-0.5">
                  10 Published Research Papers
                </Link>
              </li>
              <li>
                <Link to="/about/memorable-moments" className="text-slate-300 hover:text-white transition-colors block py-0.5">
                  Fellowships &amp; Moments
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors block py-0.5">
                  Emergency Desk &amp; Maps
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: OPD Hours & Location (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00b4d8] mb-4">
              Clinic &amp; Timings
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f37021] shrink-0 mt-0.5" />
                <span>
                  SK Pandey Complex, Beside Union Bank of India, Betiahata Road, Gorakhpur, UP 273001
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#00b4d8] shrink-0 mt-0.5" />
                <div>
                  <strong>Mon - Sat OPD:</strong>
                  <div className="text-[11px] text-slate-300">
                    09:00 AM - 01:00 PM<br />
                    02:00 PM - 08:00 PM
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#00b4d8] shrink-0 mt-0.5" />
                <a href="mailto:drvatsalkhetan@gmail.com" className="hover:text-white transition-colors">
                  drvatsalkhetan@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#00b4d8] to-[#0096c7] hover:from-[#0096c7] hover:to-[#00b4d8] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md text-center"
              >
                Make an Appointment
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Insurance TPA Strip */}
      <div className="border-t border-white/5 py-4 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>100% Cashless TPA Support:</strong> Star Health &bull; Care &bull; HDFC ERGO &bull; ICICI Lombard &bull; Bajaj Allianz &bull; National Insurance &bull; All Corporate &amp; Govt TPAs
            </span>
          </div>
          <span className="text-[11px] text-slate-400">
            Dedicated Insurance Desk at Khetan Hospital, Betiahata
          </span>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>
            &copy; 2026 Dr. Vatsal Khetan &bull; Khetan Hospital. All rights reserved.
          </span>
          <span>
            Dedicated to Restoring Lifelong Pain-Free Mobility
          </span>
        </div>
        <p className="max-w-4xl mx-auto mt-4 text-[10px] text-slate-400 leading-relaxed">
          Medical Disclaimer: Information published on this website is for educational and appointment coordination purposes only. It is not intended as a substitute for professional clinical diagnosis and surgical evaluation by Dr. Vatsal Khetan.
        </p>
      </div>

    </footer>
  );
};
