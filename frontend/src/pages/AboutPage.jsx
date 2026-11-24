import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ArrowUpRight, BookOpen, Clock, Heart, Star, PhoneCall, ExternalLink } from 'lucide-react';
import { clinicInfo, careerTimeline, testimonials, insurancePartners } from '../data/clinicContent';

export const AboutPage = ({ onBookClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#08284d] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow text-orange-400 mb-3 block">
            ABOUT DR. VATSAL KHETAN · SURGEON & CLINICAL PROFILE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            British-Trained Precision.<br />
            <span className="text-[#f37021]">Dedicated to Lifelong Mobility.</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Leading Orthopaedic and Joint Replacement Surgeon in Gorakhpur. Knee Replacement &amp; Arthroscopy Specialist, Hip Replacement, Trauma and Sports Injuries Specialist.
          </p>
        </div>
      </section>

      {/* Main Profile Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Doctor Photo Card & Quick Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-4 shadow-lg border border-slate-200 overflow-hidden">
              <img 
                src="/images/dr-vatsal-portrait.webp" 
                alt="Dr. Vatsal Khetan - Orthopedic Surgeon" 
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-extrabold text-[#08284d]">Dr. Vatsal Khetan</h3>
                <p className="text-xs font-bold text-[#f37021] mt-1">
                  MBBS, MS (Ortho), MRCS, FRCS (Edinburgh), M.Ch. (UK), IOC Sports Med
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Founder &amp; Senior Consultant at Khetan Knee N Shoulder Clinic
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-center gap-2">
                  <a 
                    href={clinicInfo.socialLinks.googleReview} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-bold text-[#00458b] hover:text-[#f37021] transition-colors"
                  >
                    <span>Google 5-Star Reviews</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats Box */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                CLINICAL MILESTONES
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-blue-50/70 rounded-xl">
                  <span className="block text-2xl font-extrabold text-[#08284d]">{clinicInfo.stats.experienceYears}</span>
                  <span className="text-[11px] font-semibold text-slate-600">Years Clinical Practice</span>
                </div>
                <div className="p-3 bg-orange-50/70 rounded-xl">
                  <span className="block text-2xl font-extrabold text-[#f37021]">{clinicInfo.stats.kneeReplacements}</span>
                  <span className="text-[11px] font-semibold text-slate-600">Knee Replacements</span>
                </div>
                <div className="p-3 bg-emerald-50/70 rounded-xl">
                  <span className="block text-2xl font-extrabold text-emerald-700">{clinicInfo.stats.surgeries}</span>
                  <span className="text-[11px] font-semibold text-slate-600">Advanced Surgeries</span>
                </div>
                <div className="p-3 bg-purple-50/70 rounded-xl">
                  <span className="block text-2xl font-extrabold text-purple-700">{clinicInfo.stats.happyPatients}</span>
                  <span className="text-[11px] font-semibold text-slate-600">Satisfied Patients</span>
                </div>
              </div>
            </div>

            {/* Clinic OPD Timings Card */}
            <div className="bg-[#fff8e8] rounded-2xl p-5 border border-[#fde8bb] space-y-2">
              <span className="text-[11px] font-bold text-[#f37021] uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                OPD Consultation Timings
              </span>
              <p className="text-xs font-extrabold text-[#08284d]">{clinicInfo.timings.days}</p>
              <div className="text-xs text-slate-700 space-y-1">
                <div>Morning: <strong>{clinicInfo.timings.morning}</strong></div>
                <div>Evening: <strong>{clinicInfo.timings.evening}</strong></div>
                <div className="text-orange-800 text-[11px] pt-1">Sunday: {clinicInfo.timings.sunday}</div>
              </div>
              <p className="text-[11px] text-slate-500 pt-2 border-t border-orange-200">
                Location: {clinicInfo.address}
              </p>
            </div>
          </div>

          {/* Right Column: Bio & Training Story */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 space-y-5">
              <span className="eyebrow text-[#00458b]">PROFESSIONAL BACKGROUND</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#08284d]">
                Excellence Through Mentorship &amp; Global Training
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dr. Vatsal Khetan received his Bachelor of Medicine (MBBS) from Gujarat University in 2014 and completed his higher post-graduate education in Orthopaedics (MS Orthopaedics) in 2018. To further hone his surgical expertise, he trained under two of India's most renowned orthopaedic pioneers:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1.5">
                  <h4 className="text-xs font-bold text-[#08284d]">Under Dr. Nilen Shah</h4>
                  <p className="text-xs text-slate-600">
                    Extensive surgical fellowship in advanced knee replacement, partial knee arthroplasty, and revision procedures.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100 space-y-1.5">
                  <h4 className="text-xs font-bold text-[#08284d]">Under Dr. Anant Joshi (Sportsmed)</h4>
                  <p className="text-xs text-slate-600">
                    Specialized fellowship in sports medicine, keyhole arthroscopy, ACL reconstruction, and rotator cuff repairs.
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed pt-2">
                To acquire world-class international expertise, Dr. Khetan completed an <strong>M.Ch. in Knee Arthroplasty</strong> through Edge Hill University and trained at <strong>Rotherham NHS Foundation Trust Hospital (UK)</strong> and <strong>Wrightington Hospital</strong>, the birthplace of modern joint arthroplasty. He earned a <strong>Diploma in Sports Medicine</strong> from the International Olympic Committee (IOC, Switzerland) in 2022, and achieved the prestigious <strong>FRCS (Trauma &amp; Orthopaedic Surgery)</strong> from the Royal College of Surgeons in Edinburgh, Scotland.
              </p>
            </div>

            {/* Core Specialties */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 space-y-4">
              <span className="eyebrow text-[#f37021]">AREAS OF SPECIALIZATION</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Robotic Knee Replacement",
                  "Shoulder Arthroscopy & Rotator Cuff",
                  "ACL & Ligament Reconstruction",
                  "Hip Joint Replacement & AVN Care",
                  "Joint Preservation & High Tibial Osteotomy (HTO)",
                  "Minimally Invasive Fracture & Trauma Care",
                  "Sports Injury Rehabilitation",
                  "24/7 Orthopedic Emergency Management"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-bold text-[#08284d] p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance & Cashless TPA */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 space-y-4">
              <span className="eyebrow text-emerald-700">HASSLE-FREE HEALTHCARE</span>
              <h3 className="text-xl font-extrabold text-[#08284d]">
                {insurancePartners.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {insurancePartners.description}
              </p>
              <div className="space-y-2 pt-2">
                {insurancePartners.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="p-8 rounded-3xl bg-[#08284d] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-extrabold">Consult Dr. Vatsal Khetan</h4>
                <p className="text-xs text-slate-300 mt-1">Betiahata, Gorakhpur · Helpline: 9662365917</p>
              </div>
              <button 
                onClick={onBookClick}
                className="button-primary bg-[#f37021] text-white hover:bg-orange-600 flex-shrink-0"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* Professional Timeline */}
      <section className="bg-white border-y border-slate-200/80 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow text-[#00458b] block mb-2">CREDENTIALS &amp; MILESTONES</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#08284d]">
              Professional Career Timeline
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Verified clinical registrations, fellowships, and academic degrees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerTimeline.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#f37021]">{item.date}</span>
                  <span className="text-[11px] font-semibold text-slate-500 px-2 py-0.5 bg-white rounded-md border border-slate-200">
                    {item.issuer}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#08284d]">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow text-[#f37021] block mb-2">PATIENT STORIES</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#08284d]">
            हमारे मरीजों के विचार (Patient Experiences)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Real feedback from patients treated at Khetan Knee N Shoulder Clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between space-y-4">
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
                <h4 className="text-xs font-bold text-[#08284d]">{t.name}</h4>
                <span className="text-[11px] text-[#f37021] font-semibold">{t.treatment}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
