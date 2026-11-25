import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  ShieldCheck, 
  Activity, 
  HelpCircle, 
  Sparkles, 
  ChevronRight,
  Phone
} from 'lucide-react';
import { allServices, clinicInfo } from '../data/clinicContent';
import { surgeryImages } from '../data/imageConfig';

export const ServiceDetailPage = ({ onBookClick }) => {
  const { slug } = useParams();
  
  // Match by slug or alias or partial string
  const service = allServices.find(s => 
    s.slug === slug || 
    s.aliases?.includes(slug) || 
    slug?.includes(s.slug) || 
    s.slug.includes(slug || '')
  ) || allServices[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Cinematic Editorial Header Banner */}
      <section className="bg-gradient-to-r from-[#06152b] via-[#07182e] to-[#0b2447] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-3">
            <Link to="/services" className="hover:text-white flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Specialties</span>
            </Link>
            <span>&bull;</span>
            <span className="text-[#cbb387]">{service.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight">
            {service.title}
          </h1>
          {service.tagline && (
            <p className="text-xs sm:text-sm text-[#cbb387] font-semibold mt-2 font-sans-clean">
              {service.tagline}
            </p>
          )}
        </div>
      </section>

      {/* 2. Main Content Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        
        {/* Overview & Philosophy with Procedure Image */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 relative h-72 lg:h-auto min-h-[300px] bg-slate-100 overflow-hidden">
            <img 
              src={surgeryImages[service.slug]?.image || "/images/surgeries/robotic-knee.jpg"} 
              alt={surgeryImages[service.slug]?.alt || service.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:hidden"></div>
          </div>
          
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-5 flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00458b] block">
              SURGICAL OVERVIEW &amp; PROTOCOL
            </span>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans-clean">
              {service.summary}
            </p>

            {service.philosophy && (
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 italic font-sans-clean">
                <strong className="text-slate-900 not-italic block mb-1">Chief Surgeon's Clinical Philosophy:</strong> 
                "{service.philosophy}"
              </div>
            )}
          </div>
        </div>

        {/* Why Patients Choose Dr. Vatsal Khetan */}
        {service.whyChoose && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-5 bg-[#00458b] inline-block rounded-full"></span>
              <h2 className="text-xl sm:text-2xl font-editorial font-bold text-slate-900">
                Why Patients in Gorakhpur Prefer Dr. Vatsal Khetan
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {service.whyChoose.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700 font-sans-clean">
                  <ShieldCheck className="w-4 h-4 text-[#00458b] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Banner */}
        <div className="bg-gradient-to-r from-[#06152b] via-[#07182e] to-[#0b2447] text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbb387] block">
              INDIVIDUALIZED SURGICAL ASSESSMENT
            </span>
            <h4 className="text-xl font-editorial font-bold text-white">
              Consult Dr. Vatsal Khetan for {service.title}
            </h4>
            <p className="text-xs text-slate-300">
              Khetan Hospital, Bargadawa, Gorakhpur &bull; Helpline: +91 96623 65917
            </p>
          </div>
          <button 
            onClick={onBookClick}
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#cbb387] to-[#dfca9f] hover:from-[#dfca9f] hover:to-[#cbb387] text-[#06152b] shadow-md transition-all shrink-0 cursor-pointer font-sans-clean font-extrabold"
          >
            <span>Book OPD Appointment</span>
          </button>
        </div>

      </section>

    </div>
  );
};
