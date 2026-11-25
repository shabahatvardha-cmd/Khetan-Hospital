import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  GraduationCap, 
  BookOpen, 
  Sparkles, 
  Calendar,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { doctorImages } from '../../data/imageConfig';
import { clinicInfo } from '../../data/clinicContent';

export const DoctorStorySection = ({ onBookClick }) => {
  const [activeTab, setActiveTab] = useState('fellowships');

  const credentials = [
    {
      id: 'fellowships',
      label: 'UK Fellowships & NHS',
      title: 'Wrightington & UK NHS Surgical Immersion',
      desc: 'Completed specialized clinical immersion at Wrightington Hospital (UK)—the historic birthplace of modern hip arthroplasty—and Rotherham NHS Foundation Trust Hospital, mastering sub-millimeter component positioning and complex joint revision techniques.'
    },
    {
      id: 'royal-college',
      label: 'FRCS Edinburgh',
      title: 'Royal College of Surgeons of Edinburgh (UK)',
      desc: 'Achieved Fellowship of the Royal College of Surgeons (FRCS Ortho), the gold standard in UK surgical governance and clinical examination. Also holds the Master of Surgery in Knee Arthroplasty (M.Ch.) from Edge Hill University, UK.'
    },
    {
      id: 'sports-med',
      label: 'IOC Switzerland',
      title: 'Olympic Sports Medicine Diploma',
      desc: 'Awarded the prestigious Diploma in Sports Medicine by the International Olympic Committee (Lausanne, Switzerland). Underwent intensive sports arthroscopy fellowship training under Dr. Anant Joshi at Sportsmed Mumbai for athlete ligament repairs.'
    },
    {
      id: 'mentor-knee',
      label: 'Mentorship & Papers',
      title: 'Dr. Nilen Shah Mentorship & 10 Publications',
      desc: 'Trained in primary and complex revision knee arthroplasty under celebrated pioneer Dr. Nilen Shah. Has authored 10 peer-reviewed research papers published in Acta Orthopaedica Belgica, Bone & Joint Open, and Indian Journal of Orthopaedics.'
    }
  ];

  return (
    <section id="doctor-spotlight" className="relative py-20 sm:py-28 bg-[#051329] text-white overflow-hidden border-y border-white/10">
      
      {/* Background Architectural Ambient Lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00458b]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/15 border border-[#0ea5e9]/30 text-sky-300 text-[10px] font-bold uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5 text-sky-400" />
              <span>Executive Clinical Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Chief Surgeon <span className="font-editorial italic font-normal text-sky-200">Spotlight</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed font-normal">
            Bringing world-class British NHS joint arthroplasty standards, Olympic sports medicine, and sub-millimeter robotic precision directly to Gorakhpur.
          </p>
        </div>

        {/* Grand Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (5 Cols): Dramatic Large Scale Portrait with Verified Accreditations */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Background Ambient Glow Behind Doctor */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0ea5e9]/20 via-[#00458b]/30 to-transparent rounded-3xl blur-2xl pointer-events-none"></div>

            {/* Portrait Frame */}
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-gradient-to-b from-[#0a2347]/90 via-[#061833]/90 to-[#030d1c] border border-sky-400/20 shadow-2xl p-6 sm:p-8 flex flex-col items-center">
              
              {/* Uncropped Doctor Portrait in Scrub Suit */}
              <div className="relative w-full flex justify-center pt-2">
                <img 
                  src={doctorImages.portrait} 
                  alt="Dr. Vatsal Khetan - Senior Consultant Orthopaedic & Joint Replacement Surgeon" 
                  className="w-auto max-h-[460px] sm:max-h-[500px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] select-none"
                  loading="lazy"
                />
              </div>

              {/* Verified Signature Card Under Portrait */}
              <div className="w-full mt-6 pt-5 border-t border-white/10 text-center">
                <div className="text-lg font-black text-white tracking-wide">
                  Dr. Vatsal Khetan
                </div>
                <div className="text-xs font-bold text-sky-300 mt-1">
                  Senior Consultant Joint Replacement &amp; Sports Surgeon
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-1">
                  FRCS (Edinburgh) &bull; M.Ch Orth (UK) &bull; MS (Ortho)
                </div>
              </div>

              {/* Verified Verification Badge Floating Pill */}
              <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Royal College Fellowship (UK)</span>
              </div>

            </div>

          </div>

          {/* Right Column (7 Cols): Editorial Credential Architecture & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-sky-400 block mb-1">
                Clinical Director &bull; Khetan Hospital
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Pioneering Evidence-Based Orthopedics with British NHS Governance.
              </h3>
            </div>

            {/* Editorial Bio Paragraphs */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Dr. Vatsal Khetan is one of Eastern Uttar Pradesh's most extensively trained joint replacement and arthroscopic surgeons. After completing his MS in Orthopaedics (2018), he pursued rigorous multi-year fellowship training with celebrated national pioneers—<strong className="text-white font-semibold">Dr. Nilen Shah</strong> for advanced knee arthroplasty and <strong className="text-white font-semibold">Dr. Anant Joshi</strong> (Sportsmed Mumbai) for sports medicine.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              He achieved international distinction in the United Kingdom, completing an <strong className="text-white font-semibold">M.Ch. in Knee Arthroplasty</strong> (Edge Hill University), surgical rotations at <strong className="text-white font-semibold">Wrightington Hospital</strong> (the historic birthplace of modern hip arthroplasty), and earning the prestigious <strong className="text-white font-semibold">FRCS (Trauma &amp; Orthopaedics)</strong> from the Royal College of Surgeons of Edinburgh.
            </p>

            {/* Interactive Credential Navigation Pills */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2 mb-3">
                {credentials.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveTab(c.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === c.id
                        ? 'bg-[#0ea5e9] text-white shadow-lg shadow-sky-500/20'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              {/* Active Credential Detail Card */}
              {credentials.map((c) => {
                if (c.id !== activeTab) return null;
                return (
                  <div 
                    key={c.id}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md animate-in fade-in zoom-in-95 duration-200"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
                      <h4 className="text-sm font-bold text-white">{c.title}</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Surgeon Clinical Philosophy Quote */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-950/40 via-blue-950/20 to-transparent border-l-4 border-sky-400 text-xs sm:text-sm text-slate-200">
              <p className="font-editorial italic leading-relaxed text-sky-100">
                &ldquo;Our surgical philosophy prioritizes native joint preservation first. When replacement is required, sub-millimeter robotic precision reproduces your natural kinematics—empowering you to stand and walk within 24 hours.&rdquo;
              </p>
              <div className="mt-2 text-[11px] font-bold uppercase tracking-wider text-sky-400">
                &mdash; Dr. Vatsal Khetan, FRCS (Edinburgh)
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookClick}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#0ea5e9] to-[#00458b] hover:from-[#38bdf8] hover:to-[#003366] text-white shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer border border-sky-300/30"
              >
                Consult Dr. Vatsal Khetan
              </button>

              <Link
                to="/about"
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200 inline-flex items-center gap-2 group"
              >
                <span>Full Biography &amp; Research</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
