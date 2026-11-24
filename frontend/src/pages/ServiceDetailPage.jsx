import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowUpRight, ArrowLeft, Clock, ShieldCheck, Activity } from 'lucide-react';
import { allServices } from '../data/clinicContent';

export const ServiceDetailPage = ({ onBookClick }) => {
  const { slug } = useParams();
  
  // Match by slug or partial slug
  const service = allServices.find(s => s.slug === slug || slug?.includes(s.slug) || s.slug.includes(slug || '')) || allServices[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#08284d] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Services &amp; Specialties</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="eyebrow bg-white/10 px-3 py-1 rounded-full text-slate-200">
              {service.category} SPECIALTY
            </span>
            <span className="eyebrow bg-orange-500/20 px-3 py-1 rounded-full text-orange-300 border border-orange-500/40">
              {service.tag}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {service.title}
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {service.summary}
          </p>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Clinical Indications Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
          <span className="eyebrow text-[#f37021]">WHEN IS THIS SURGERY NEEDED?</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#08284d]">
            Indications &amp; Patient Symptoms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {service.indications.map((ind, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Surgical Benefits & Modern Technique */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
          <span className="eyebrow text-[#00458b]">SURGICAL EXCELLENCE</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#08284d]">
            Technique, Precision &amp; Advantages
          </h2>
          <div className="space-y-3 pt-2">
            {service.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-xs sm:text-sm text-slate-800">
                <ShieldCheck className="w-5 h-5 text-[#00458b] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">{b}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery & Rehabilitation Protocol */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
          <span className="eyebrow text-emerald-700">RAPID RECOVERY</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#08284d]">
            Post-Operative Recovery Timeline
          </h2>
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-start gap-3.5">
            <Clock className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {service.recovery}
            </p>
          </div>
        </div>

        {/* Booking Card */}
        <div className="p-8 rounded-3xl bg-[#08284d] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-xl font-extrabold">Consult Dr. Vatsal Khetan</h3>
            <p className="text-xs text-slate-300">
              Evaluation, 3D imaging assessment &amp; personalized recovery planning.
            </p>
          </div>
          <button onClick={onBookClick} className="button-orange flex-shrink-0">
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </section>

    </div>
  );
};
