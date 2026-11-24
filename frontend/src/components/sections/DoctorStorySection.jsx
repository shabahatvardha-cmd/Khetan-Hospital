import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  CheckCircle2, 
  ArrowUpRight, 
  BookOpen, 
  Clock, 
  ShieldCheck, 
  HeartHandshake 
} from 'lucide-react';
import { clinicInfo } from '../../data/clinicContent';

export const DoctorStorySection = ({ onBookClick }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Portrait & Visual Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo Card */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 bg-slate-100 group">
                <img 
                  src="/images/dr-vatsal-portrait.webp" 
                  alt="Dr. Vatsal Khetan - Senior Orthopaedic & Joint Replacement Surgeon" 
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Photo Caption Strip */}
                <div className="p-4 bg-gradient-to-r from-[#08284d] to-[#00458b] text-white flex items-center justify-between text-xs">
                  <div>
                    <span className="block font-bold">Dr. Vatsal Khetan</span>
                    <span className="block text-[10px] text-[#00b4d8]">Khetan Knee N Shoulder Clinic</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/20">
                    Betiahata, Gorakhpur
                  </span>
                </div>
              </div>

              {/* Floating Stat Badge 1 (Top-Right) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">EXPERIENCE</span>
                </div>
                <div className="text-xl font-extrabold text-[#08284d]">12+ Years</div>
                <div className="text-[10px] text-slate-500">UK &amp; India Fellowship</div>
              </div>

              {/* Floating Stat Badge 2 (Bottom-Left) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 space-y-1">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#00b4d8]" />
                  <span className="text-[10px] font-mono font-bold text-[#00b4d8] uppercase">KNEE SURGERIES</span>
                </div>
                <div className="text-xl font-extrabold text-[#08284d]">1,500+</div>
                <div className="text-[10px] text-slate-500">Joint Replacements</div>
              </div>

            </div>
          </div>

          {/* Right Column: Doctor Story, Credentials & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-[#0077b6] text-xs font-bold border border-cyan-100 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                ABOUT DR. VATSAL KHETAN &bull; CHIEF ORTHOPAEDIC SURGEON
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#08284d] tracking-tight mt-3 leading-tight">
                British NHS-Trained Excellence.<br />
                <span className="text-[#00b4d8]">Dedicated to Pain-Free Movement.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Dr. Vatsal Khetan is one of Gorakhpur's leading orthopaedic surgeons specializing in robotic knee replacement, keyhole shoulder arthroscopy, and complex trauma management. He graduated with his MBBS in 2013 and MS (Orthopaedics) in 2018 with distinction.
            </p>

            {/* Mentorship & Fellowships Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 hover:border-slate-200 transition-colors">
                <span className="text-[10px] font-mono font-bold text-[#0077b6] uppercase">ARTHROPLASTY MENTORSHIP</span>
                <h4 className="text-xs font-bold text-[#08284d]">Under Dr. Nilen Shah</h4>
                <p className="text-xs text-slate-600">
                  Advanced knee replacement, revision surgery, and patient alignment protocols.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 hover:border-slate-200 transition-colors">
                <span className="text-[10px] font-mono font-bold text-[#f37021] uppercase">SPORTS MEDICINE MENTORSHIP</span>
                <h4 className="text-xs font-bold text-[#08284d]">Under Dr. Anant Joshi (Sportsmed)</h4>
                <p className="text-xs text-slate-600">
                  Keyhole arthroscopy, ACL reconstructions, and athlete rehabilitation standards.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              He completed an <strong>M.Ch. in Knee Arthroplasty</strong> through Edge Hill University, trained at <strong>Rotherham NHS Foundation Trust Hospital (UK)</strong> and <strong>Wrightington Hospital</strong> (the historic birthplace of modern joint surgery), and achieved the prestigious <strong>FRCS (Trauma &amp; Orthopaedics)</strong> from the Royal College of Surgeons of Edinburgh.
            </p>

            {/* Checklist of Core Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-bold text-[#08284d]">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-blue-50/50">
                <CheckCircle2 className="w-4 h-4 text-[#00b4d8] flex-shrink-0" />
                <span>Joint Preservation Prioritized First</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-blue-50/50">
                <CheckCircle2 className="w-4 h-4 text-[#00b4d8] flex-shrink-0" />
                <span>Same-Day / 24-Hour Assisted Walking</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-blue-50/50">
                <CheckCircle2 className="w-4 h-4 text-[#00b4d8] flex-shrink-0" />
                <span>Zero-Error Sub-Millimeter Robotic Cuts</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-blue-50/50">
                <CheckCircle2 className="w-4 h-4 text-[#00b4d8] flex-shrink-0" />
                <span>100% Cashless TPA Hospitalization</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button 
                onClick={onBookClick}
                className="px-6 py-3 rounded-full bg-[#08284d] hover:bg-[#00458b] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>Consult Dr. Vatsal</span>
                <ArrowUpRight className="w-4 h-4 text-[#00b4d8]" />
              </button>

              <Link 
                to="/about"
                className="px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#08284d] text-xs font-bold transition-colors inline-flex items-center gap-1.5"
              >
                <span>Full Profile &amp; Degrees</span>
              </Link>

              <Link 
                to="/about/published-papers"
                className="text-xs font-bold text-[#0077b6] hover:text-[#08284d] transition-colors inline-flex items-center gap-1"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>10 Published Papers</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
