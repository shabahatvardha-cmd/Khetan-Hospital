import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Plus, 
  ShieldCheck, 
  Award, 
  Mail, 
  Stethoscope, 
  ArrowRight 
} from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { clinicInfo, treatmentsData, outreachLocations } from '../../data/navigationData';

/**
 * 🏥 Khetan Hospital - Comprehensive Professional Hospital Footer (SHUTTER SLIDE 2)
 * On Homepage: Slides UP over the Hospital Intro section with z-20
 * and deep top drop-shadow, completing the shutter sequence.
 * On Inner Pages: Renders naturally at the bottom of the page.
 */
export const Footer = forwardRef((props, ref) => {
  const { isHomePage } = useNavigation();

  return (
    <footer 
      id="hospital-footer" 
      ref={ref}
      className={`w-full bg-[#051c36] text-white select-none shrink-0 ${
        isHomePage 
          ? 'sticky top-[58px] sm:top-[60px] z-20 min-h-[calc(100vh-58px)] sm:min-h-[calc(100vh-60px)] h-auto lg:h-[calc(100vh-60px)] scroll-mt-[58px] sm:scroll-mt-[60px] shadow-[0_-30px_70px_rgba(0,0,0,0.85)] border-t-2 border-sky-400 overflow-hidden' 
          : 'relative z-20 border-t-2 border-sky-600/40'
      } pt-8 sm:pt-10 pb-6 px-4 sm:px-6 lg:px-8 flex flex-col justify-between`}
    >
      <div className="max-w-7xl mx-auto w-full space-y-6 sm:space-y-8 my-auto">
        
        {/* Top Emergency & Helpline Banner */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#09294f] border border-sky-800/60 flex flex-col md:flex-row items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-9 h-9 rounded-xl bg-sky-500 text-slate-950 flex items-center justify-center font-black shadow-sm shrink-0">
              <Plus className="w-5 h-5 stroke-[3]" />
            </div>
            <div>
              <span className="text-sm sm:text-base font-black tracking-tight text-white block">
                KHETAN HOSPITAL &bull; GORAKHPUR
              </span>
              <span className="text-[10px] sm:text-[11px] text-sky-300 font-semibold">
                Purvanchal's Premier Centre for Sub-Millimeter Robotic Joint Reconstruction &amp; Trauma
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
              className="px-3.5 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {clinicInfo.phone}</span>
            </a>
            <a
              href="https://maps.google.com/?q=Khetan+Hospital+Gorakhpur"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 border border-slate-700"
            >
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-8 pb-6 border-b border-white/10">
          
          {/* Column 1: Hospital Leadership & Dr. Vatsal Khetan (4 Cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Surgical Governance &amp; Leadership</span>
            </h4>

            <div className="space-y-0.5">
              <h5 className="text-xs sm:text-sm font-bold text-white">Dr. Vatsal Khetan</h5>
              <p className="text-[10px] sm:text-[11px] text-sky-300 font-semibold leading-snug">
                MBBS, MS (Ortho), MRCS, FRCS (Edinburgh), M.Ch Knee (UK), IOC Dip Sports Med (Switzerland)
              </p>
            </div>

            <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
              Former UK NHS Arthroplasty specialist at Rotherham NHS Trust, bringing Royal College of Surgeons (Edinburgh) surgical standards and sub-millimeter robotic precision to Eastern Uttar Pradesh.
            </p>

            <div className="space-y-1 text-[11px] text-slate-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>Royal College of Surgeons (Edinburgh) Fellow</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>Ultra-Clean Laminar Airflow Modular Operation Theatres</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>Rapid Recovery &amp; Safe Same-Day Mobilization Pathways</span>
              </div>
            </div>
          </div>

          {/* Column 2: Advanced Clinical Specialties (3 Cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Surgical Specialties</span>
            </h4>

            <ul className="space-y-1 text-xs text-slate-300">
              {treatmentsData.slice(0, 6).map((t, idx) => (
                <li key={idx}>
                  <Link
                    to={`/services/${t.slug}`}
                    className="hover:text-sky-300 transition-colors flex items-center gap-1.5 group text-[11px]"
                  >
                    <ArrowRight className="w-2.5 h-2.5 text-sky-500 group-hover:translate-x-0.5 transition-transform" />
                    <span>{t.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-sky-400 hover:underline font-bold text-[11px] pt-0.5"
                >
                  <span>View All Procedures</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Purvanchal Outreach OPD Clinics (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Regional Clinics</span>
            </h4>

            <ul className="space-y-1 text-xs text-slate-300">
              {outreachLocations.slice(0, 5).map((loc, idx) => (
                <li key={idx} className="flex items-center justify-between text-[11px]">
                  <span className="font-medium text-white">{loc.city}</span>
                  <span className="text-[9px] text-slate-400">{loc.isMain ? 'Primary Hub' : 'Outreach'}</span>
                </li>
              ))}
              <li className="pt-0.5">
                <Link
                  to="/locations"
                  className="inline-flex items-center gap-1 text-sky-400 hover:underline font-bold text-[11px]"
                >
                  <span>Outreach Schedule</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Hospital OPD & Contact Facility (2.5 Cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>OPD &amp; Hospital Visit</span>
            </h4>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-start gap-1.5 text-[11px]">
                <MapPin className="w-3 h-3 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Vikas Nagar, Bargadawa, Gorakhpur, UP 273015
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-sky-400 shrink-0" />
                <a 
                  href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white font-bold text-sky-300 transition-colors text-[11px]"
                >
                  {clinicInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-sky-400 shrink-0" />
                <a 
                  href="mailto:drvatsalkhetan@gmail.com"
                  className="hover:text-white transition-colors text-[11px]"
                >
                  drvatsalkhetan@gmail.com
                </a>
              </div>

              <div className="p-2 rounded-xl bg-white/5 border border-white/10 mt-1 space-y-0.5 text-[10px]">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">Mon – Sat:</span>
                  <span className="text-sky-300 font-semibold">9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">Sunday:</span>
                  <span className="text-slate-400">Emergency &amp; Pre-booked</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Navigation Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] text-slate-400">
          <div>
            <p>
              &copy; {new Date().getFullYear()} Khetan Hospital &bull; All Rights Reserved.
            </p>
            <p className="text-[10px] text-slate-500 mt-0.5">
              Clinical and surgical care overseen by Dr. Vatsal Khetan (FRCS Edinburgh, M.Ch Knee UK).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <Link to="/about/dr-vatsal-khetan" className="hover:text-white transition-colors">
              Surgeon Profile
            </Link>
            <span>&bull;</span>
            <Link to="/about/published-papers" className="hover:text-white transition-colors">
              Published Research
            </Link>
            <span>&bull;</span>
            <Link to="/blogs" className="hover:text-white transition-colors">
              Patient Education
            </Link>
            <span>&bull;</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
