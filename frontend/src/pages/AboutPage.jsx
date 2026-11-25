import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  Heart, 
  Star, 
  PhoneCall, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { clinicInfo, careerTimeline, testimonials, insurancePartners } from '../data/clinicContent';
import { doctorImages } from '../data/imageConfig';

export const AboutPage = ({ onBookClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Cinematic Editorial Header Banner */}
      <section className="bg-gradient-to-r from-[#06152b] via-[#07182e] to-[#0b2447] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#cbb387] text-[10px] font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#cbb387]" />
            <span>Chief Orthopedic Surgeon Spotlight</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight">
            Dr. Vatsal Khetan &bull; <span className="italic font-normal text-slate-300">Executive Bio</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl font-sans-clean leading-relaxed">
            MBBS, MS (Ortho), MRCS, FRCS (Trauma &amp; Orthopaedics, Edinburgh), M.Ch Knee Arthroplasty (UK), IOC Sports Med (Switzerland). Pioneer of sub-millimeter robotic surgery in Eastern UP.
          </p>
        </div>
      </section>

      {/* 2. Main Profile Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Doctor Photo & Stats Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 overflow-hidden">
              <div className="bg-gradient-to-b from-slate-900 to-[#07182e] rounded-2xl p-6 flex justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.2),transparent_70%)] pointer-events-none"></div>
                <img 
                  src={doctorImages.portrait} 
                  alt="Dr. Vatsal Khetan - Orthopedic Surgeon" 
                  className="w-auto max-h-[460px] object-contain drop-shadow-2xl relative z-10"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-editorial font-bold text-slate-900">Dr. Vatsal Khetan</h3>
                <p className="text-xs font-bold text-[#00458b] mt-1 tracking-wide">
                  MBBS &bull; MS (Ortho) &bull; MRCS &bull; FRCS (Edinburgh) &bull; M.Ch (UK)
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Founder &amp; Chief Orthopedic Surgeon at Khetan Hospital
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-center gap-2">
                  <a 
                    href={clinicInfo.socialLinks.googleReview} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-bold text-[#00458b] hover:text-[#0ea5e9] transition-colors"
                  >
                    <span>Google 5-Star Reviews &amp; Patient Ratings</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats Box */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#00458b]">
                VERIFIED CLINICAL MILESTONES
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="block text-2xl font-editorial font-bold text-[#06152b]">{clinicInfo.stats.experienceYears}</span>
                  <span className="text-[11px] font-semibold text-slate-600">Years Clinical Practice</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="block text-2xl font-editorial font-bold text-[#00458b]">{clinicInfo.stats.kneeReplacements}</span>
                  <span className="text-[11px] font-semibold text-slate-600">Joint Replacements</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="block text-2xl font-editorial font-bold text-emerald-700">{clinicInfo.stats.surgeries}</span>
                  <span className="text-[11px] font-semibold text-slate-600">Advanced Surgeries</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="block text-2xl font-editorial font-bold text-[#cbb387]">10</span>
                  <span className="text-[11px] font-semibold text-slate-600">Published Papers</span>
                </div>
              </div>
            </div>

            {/* OPD Hours Box */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00458b] uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#0ea5e9]" />
                <span>OPD CONSULTATION SCHEDULE</span>
              </div>
              <p className="text-xs font-bold text-slate-800">{clinicInfo.timings.days}</p>
              <div className="text-xs text-slate-600 space-y-1">
                <div>Morning Session: <strong>{clinicInfo.timings.morning}</strong></div>
                <div>Evening Session: <strong>{clinicInfo.timings.evening}</strong></div>
                <div className="text-slate-500 text-[11px] pt-1">Sunday: Emergency Trauma Services Only</div>
              </div>
              <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 flex items-start gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#00458b] shrink-0 mt-0.5" />
                <span>{clinicInfo.address}</span>
              </p>
            </div>
          </div>

          {/* Right Column: Bio, International Fellowships & Mentorship (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#00458b] inline-block rounded-full"></span>
                <h3 className="text-xl font-editorial font-bold text-slate-900">
                  Medical Qualifications &amp; Early Mentorship
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans-clean">
                Dr. Vatsal Khetan earned his Bachelor of Medicine (MBBS) from Gujarat University in 2014 and completed his post-graduate Master of Surgery (MS Orthopaedics) in 2018 with academic distinction. To refine surgical technique and clinical decision-making, he trained under two of India's preeminent orthopedic masters:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00458b] block">KNEE ARTHROPLASTY</span>
                  <h4 className="text-xs font-bold text-slate-900">Dr. Nilen Shah (Mumbai/Ahmedabad)</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Advanced clinical immersion in sub-millimeter robotic alignment, unicompartmental knee resurfacing, and high-flexion implant biomechanics.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0ea5e9] block">SPORTSMED MUMBAI</span>
                  <h4 className="text-xs font-bold text-slate-900">Dr. Anant Joshi (Mumbai)</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Dedicated fellowship in athletic joint preservation, multi-ligament ACL reconstruction, and keyhole rotator cuff repair.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-[#00458b] inline-block rounded-full"></span>
                  <h3 className="text-xl font-editorial font-bold text-slate-900">
                    British Arthroplasty Credentials &amp; UK NHS Fellowships
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans-clean">
                  To establish international gold-standard care in Gorakhpur, Dr. Khetan completed an <strong>M.Ch. in Knee Arthroplasty</strong> through Edge Hill University and operated at <strong>Rotherham NHS Foundation Trust Hospital (UK)</strong> and <strong>Wrightington Hospital</strong> — globally venerated as the birthplace of modern joint arthroplasty pioneered by Sir John Charnley.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans-clean">
                  In 2022, he was awarded the prestigious <strong>Diploma in Sports Medicine</strong> from the International Olympic Committee (IOC, Switzerland) and was admitted as a Fellow of the Royal College of Surgeons of Edinburgh (<strong>FRCS Trauma &amp; Orthopaedics</strong>).
                </p>
              </div>
            </div>

            {/* Insurance Partners Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#00458b] inline-block rounded-full"></span>
                <h3 className="text-xl font-editorial font-bold text-slate-900">
                  {insurancePartners.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {insurancePartners.description}
              </p>
              <div className="space-y-2 pt-1">
                {insurancePartners.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#06152b] via-[#07182e] to-[#0b2447] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbb387] block">
                  PRIORITY CONSULTATION
                </span>
                <h4 className="text-lg font-editorial font-bold text-white mt-1">Consult Dr. Vatsal Khetan</h4>
                <p className="text-xs text-slate-300 mt-0.5">Khetan Hospital, Bargadawa, Gorakhpur &bull; Helpline: +91 96623 65917</p>
              </div>
              <button 
                onClick={onBookClick}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#cbb387] to-[#dfca9f] hover:from-[#dfca9f] hover:to-[#cbb387] text-[#06152b] shadow-md transition-all shrink-0 cursor-pointer font-sans-clean font-extrabold"
              >
                <span>Book OPD Appointment</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Professional Timeline Section */}
      <section className="bg-white border-t border-slate-200/80 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00458b] block mb-1">
              CHRONOLOGY OF EXCELLENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-slate-900 tracking-tight">
              Professional <span className="font-normal italic text-slate-500">Career Timeline</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Verified clinical registrations, British fellowships, and academic milestones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerTimeline.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00458b] transition-colors space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#00458b]">{item.date}</span>
                  <span className="text-[10px] font-semibold text-slate-600 px-2.5 py-0.5 bg-white rounded-md border border-slate-200 shadow-xs">
                    {item.issuer}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Patient Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#00458b] block mb-1">
            VERIFIED OUTCOMES
          </span>
          <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-slate-900 tracking-tight">
            Patient <span className="font-normal italic text-slate-500">Testimonials &amp; Mobility</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Real feedback from patients restored to painless walking at Khetan Hospital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic font-sans-clean">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                <span className="text-[11px] text-[#00458b] font-semibold">{t.treatment}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
