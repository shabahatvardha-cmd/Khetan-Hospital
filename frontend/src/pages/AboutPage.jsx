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
  ChevronRight
} from 'lucide-react';
import { clinicInfo, careerTimeline, testimonials, insurancePartners } from '../data/clinicContent';

export const AboutPage = ({ onBookClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Oreo Interior Breadcrumb Banner */}
      <section className="bg-[#edf1f5] border-b border-slate-200/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#00bcd4] inline-block rounded-full"></span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                About <span className="font-normal text-slate-600">Dr. Vatsal Khetan</span>
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1 pl-3.5">
              Chief Orthopaedic &amp; Robotic Joint Surgeon &bull; Khetan Hospital, Gorakhpur
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Profile Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Doctor Photo & Stats Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 overflow-hidden">
              <img 
                src="/images/dr-vatsal-portrait.webp" 
                alt="Dr. Vatsal Khetan - Orthopedic Surgeon" 
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-slate-900">Dr. Vatsal Khetan</h3>
                <p className="text-xs font-bold text-[#ff5722] mt-1">
                  MBBS &bull; MS (Ortho) &bull; MRCS &bull; FRCS (Edinburgh) &bull; M.Ch (UK)
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Founder &amp; Chief Surgeon at Khetan Hospital
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-center gap-2">
                  <a 
                    href={clinicInfo.socialLinks.googleReview} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-bold text-[#00bcd4] hover:text-[#ff5722] transition-colors"
                  >
                    <span>Google 5-Star Reviews</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats Box */}
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                CLINICAL MILESTONES
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-sky-50 rounded-xl">
                  <span className="block text-2xl font-extrabold text-[#00bcd4]">{clinicInfo.stats.experienceYears}</span>
                  <span className="text-[11px] font-semibold text-slate-600">Years Clinical Practice</span>
                </div>
                <div className="p-3 bg-orange-50 rounded-xl">
                  <span className="block text-2xl font-extrabold text-[#ff5722]">{clinicInfo.stats.kneeReplacements}</span>
                  <span className="text-[11px] font-semibold text-slate-600">Joint Replacements</span>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl">
                  <span className="block text-2xl font-extrabold text-emerald-600">{clinicInfo.stats.surgeries}</span>
                  <span className="text-[11px] font-semibold text-slate-600">Advanced Surgeries</span>
                </div>
                <div className="p-3 bg-purple-50 rounded-xl">
                  <span className="block text-2xl font-extrabold text-[#8c79b2]">{clinicInfo.stats.happyPatients}</span>
                  <span className="text-[11px] font-semibold text-slate-600">Satisfied Patients</span>
                </div>
              </div>
            </div>

            {/* OPD Hours Box */}
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#ff5722] uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>OPD CONSULTATION SCHEDULE</span>
              </div>
              <p className="text-xs font-bold text-slate-800">{clinicInfo.timings.days}</p>
              <div className="text-xs text-slate-600 space-y-1">
                <div>Morning: <strong>{clinicInfo.timings.morning}</strong></div>
                <div>Evening: <strong>{clinicInfo.timings.evening}</strong></div>
                <div className="text-[#ff5722] text-[11px] pt-1">Sunday: {clinicInfo.timings.sunday}</div>
              </div>
              <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                Location: {clinicInfo.address}
              </p>
            </div>
          </div>

          {/* Right Column: Bio, International Fellowships & Mentorship (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/80 space-y-5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#00bcd4] inline-block rounded-full"></span>
                <h3 className="text-lg font-bold text-slate-800">
                  Medical Qualifications &amp; Early Training
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dr. Vatsal Khetan received his Bachelor of Medicine (MBBS) from Gujarat University in 2014 and completed his post-graduate Master of Surgery (MS Orthopaedics) in 2018 with honors. To hone his surgical precision, he trained under two of India's most celebrated orthopaedic pioneers:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00bcd4] block">KNEE ARTHROPLASTY</span>
                  <h4 className="text-xs font-bold text-slate-800">Dr. Nilen Shah (Mumbai/Ahmedabad)</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Advanced sub-specialty immersion in robotic knee alignment, partial knee resurfacing, and high-longevity implants.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff5722] block">SPORTSMED MUMBAI</span>
                  <h4 className="text-xs font-bold text-slate-800">Dr. Anant Joshi (Mumbai)</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Specialized training in keyhole knee and shoulder arthroscopy, ACL reconstruction, and cartilage preservation.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-[#00bcd4] inline-block rounded-full"></span>
                  <h3 className="text-lg font-bold text-slate-800">
                    British Arthroplasty Credentials &amp; UK NHS Fellowships
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To acquire world-class international expertise, Dr. Khetan completed an <strong>M.Ch. in Knee Arthroplasty</strong> through Edge Hill University and trained at <strong>Rotherham NHS Foundation Trust Hospital (UK)</strong> and <strong>Wrightington Hospital</strong>, the historic birthplace of modern joint arthroplasty. He earned a <strong>Diploma in Sports Medicine</strong> from the International Olympic Committee (IOC, Switzerland) in 2022, and achieved the prestigious <strong>FRCS (Trauma &amp; Orthopaedics)</strong> from the Royal College of Surgeons of Edinburgh.
                </p>
              </div>
            </div>

            {/* Insurance Partners Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/80 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#00bcd4] inline-block rounded-full"></span>
                <h3 className="text-lg font-bold text-slate-800">
                  {insurancePartners.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {insurancePartners.description}
              </p>
              <div className="space-y-2 pt-1">
                {insurancePartners.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-slate-900">Consult Dr. Vatsal Khetan</h4>
                <p className="text-xs text-slate-500 mt-0.5">Khetan Hospital, Betiahata, Gorakhpur &bull; Helpline: 9662365917</p>
              </div>
              <button 
                onClick={onBookClick}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff5722] hover:bg-[#e64a19] text-white shadow-md transition-all shrink-0 cursor-pointer"
              >
                <span>Book Appointment</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Professional Timeline Section */}
      <section className="bg-white border-t border-slate-200/80 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#00bcd4] inline-block rounded-full"></span>
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                Professional <span className="font-normal text-slate-600">Career Timeline</span>
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1 pl-3.5">
              Verified clinical registrations, fellowships, and academic degrees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerTimeline.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#ff5722]">{item.date}</span>
                  <span className="text-[10px] font-semibold text-slate-500 px-2 py-0.5 bg-white rounded-md border border-slate-200">
                    {item.issuer}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Patient Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#00bcd4] inline-block rounded-full"></span>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
              Patient <span className="font-normal text-slate-600">Experiences &amp; Feedback</span>
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1 pl-3.5">
            Real feedback from patients treated at Khetan Hospital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-800">{t.name}</h4>
                <span className="text-[11px] text-[#ff5722] font-semibold">{t.treatment}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
