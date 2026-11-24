import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Phone, 
  Calendar, 
  ShieldCheck, 
  Award, 
  Cpu, 
  Clock, 
  CheckCircle2,
  Sparkles,
  CreditCard
} from 'lucide-react';
import { clinicInfo } from '../../data/clinicContent';

export const HeroSection = ({ onBookClick }) => {
  return (
    <div className="relative bg-gradient-to-b from-slate-50 via-blue-50/30 to-white overflow-hidden">
      
      {/* Background Decorative Mesh & Glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#00b4d8]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-0 -ml-20 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      {/* Main Hero Banner Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:pt-16 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clinical Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-[#0077b6] text-xs font-bold border border-blue-200/80 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-ping" />
              <span>KHETAN HOSPITAL &bull; LEADING ORTHOPAEDIC &amp; ROBOTIC CENTRE &bull; GORAKHPUR</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#08284d] tracking-tight leading-[1.12]">
              British-Trained Precision.<br />
              <span className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] bg-clip-text text-transparent">
                Pain-Free Mobility
              </span> At Every Step.
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Why travel to Delhi or Lucknow? <strong>Dr. Vatsal Khetan</strong> (FRCS Edinburgh, UK NHS Fellowship) brings world-class sub-millimeter robotic knee replacements, keyhole shoulder arthroscopy, and IOC sports injury care to <strong>Khetan Hospital</strong>, Bettiahata, Gorakhpur.
            </p>

            {/* Quick Check Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-[#08284d] font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>1,500+ Successful Knee Replacements</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Same-Day / 24-Hour Assisted Walking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Cashless TPA &amp; Insurance Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero-Infection Modular OT Standards</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button 
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-105 active:scale-98 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book OPD Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a 
                href={`tel:${clinicInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#08284d] text-xs sm:text-sm font-bold border border-slate-200 shadow-xs hover:border-[#00b4d8] hover:text-[#00b4d8] transition-all"
              >
                <Phone className="w-4 h-4 text-[#f37021]" />
                <span>Call: 9662365917</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-500 pt-1 font-mono">
              SK Pandey Complex, Beside Union Bank, Betiahata, Gorakhpur
            </p>
          </div>

          {/* Right Column: Hero Visual with Doctor Photo & Oreo Floating Stats Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Doctor Hero Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img 
                  src="/images/dr-vatsal-hero.webp" 
                  alt="Dr. Vatsal Khetan - Senior Orthopaedic & Joint Replacement Surgeon" 
                  className="w-full h-auto object-cover object-top hover:scale-102 transition-transform duration-500"
                  fetchPriority="high"
                />
                
                {/* Subtle Gradient Overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#08284d]/80 via-[#08284d]/30 to-transparent flex items-end p-5 text-white">
                  <div>
                    <h3 className="font-extrabold text-base">Dr. Vatsal Khetan</h3>
                    <p className="text-[11px] text-[#00b4d8] font-semibold">
                      MBBS, MS (Ortho), MRCS, FRCS (Edinburgh), M.Ch (UK)
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Oreo Milestone Badge (Top-Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f37021] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono font-bold text-slate-400 uppercase">EXPERIENCE</span>
                  <span className="block text-base font-extrabold text-[#08284d]">12+ Years</span>
                </div>
              </div>

              {/* Floating Oreo Milestone Badge (Bottom-Right) */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#00b4d8] flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono font-bold text-slate-400 uppercase">SURGICAL SUCCESS</span>
                  <span className="block text-base font-extrabold text-[#08284d]">10,000+ Surgeries</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 4 Floating Oreo Hospital Quick-Action Cards (Overlapping Hero) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Emergency Care */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-wider block">
                  24/7 HELPLINE
                </span>
                <h4 className="text-sm font-bold text-[#08284d]">Emergency &amp; Trauma</h4>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Rapid response for fractures, dislocations, and severe acute joint injuries.
            </p>
            <a 
              href="tel:9662365917" 
              className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700"
            >
              <span>Call 9662365917</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: British Qualifications */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0077b6] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0077b6] uppercase tracking-wider block">
                  UK FELLOWSHIP
                </span>
                <h4 className="text-sm font-bold text-[#08284d]">FRCS Edinburgh</h4>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Trained at Wrightington Hospital UK, the historic birthplace of modern joint surgery.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-1 text-xs font-bold text-[#0077b6] hover:text-[#08284d]"
            >
              <span>Meet Dr. Vatsal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: Robotic Joint Surgery */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#00b4d8] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#00b4d8] uppercase tracking-wider block">
                  ZERO-ERROR ALIGNMENT
                </span>
                <h4 className="text-sm font-bold text-[#08284d]">Robotic Knee Surgery</h4>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Sub-millimeter accuracy, minimal bone cut, and walking unassisted within weeks.
            </p>
            <Link 
              to="/services/robotic-knee-surgery" 
              className="inline-flex items-center gap-1 text-xs font-bold text-[#00b4d8] hover:text-[#0077b6]"
            >
              <span>Explore Robotics</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 4: Cashless Insurance */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wider block">
                  CASHLESS DESK
                </span>
                <h4 className="text-sm font-bold text-[#08284d]">Insurance &amp; TPAs</h4>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Fast-track pre-authorization with all major insurance providers &amp; transparent billing.
            </p>
            <button 
              onClick={onBookClick}
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
