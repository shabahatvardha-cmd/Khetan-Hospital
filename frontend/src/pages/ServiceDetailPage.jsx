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

      {/* 1. Interior Header Banner */}
      <section className="bg-[#edf1f5] border-b border-slate-200/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#00bcd4] inline-block rounded-full"></span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                {service.title}
              </h1>
            </div>
            {service.tagline && (
              <p className="text-xs text-[#ff5722] font-semibold mt-1 pl-3.5">
                {service.tagline}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 2. Main Content Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">

        {/* Overview & Philosophy with Procedure Image */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[260px] bg-slate-100 overflow-hidden">
            <img
              src={surgeryImages[service.slug]?.image || "/images/surgeries/robotic-knee.jpg"}
              alt={surgeryImages[service.slug]?.alt || service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent lg:hidden"></div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 space-y-4 flex flex-col justify-center">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {service.summary}
            </p>

            {service.philosophy && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 italic">
                <strong className="text-slate-900 not-italic">Joint Preservation Philosophy:</strong> "{service.philosophy}"
              </div>
            )}
          </div>
        </div>

        {/* Why Patients Choose Dr. Vatsal Khetan */}
        {service.whyChoose && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/80 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-5 bg-[#00bcd4] inline-block rounded-full"></span>
              <h2 className="text-lg font-bold text-slate-800">
                Why Patients in Gorakhpur Prefer Dr. Vatsal Khetan
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {service.whyChoose.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#00bcd4] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Clinical Indications Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/80 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-5 bg-[#00bcd4] inline-block rounded-full"></span>
            <h2 className="text-lg font-bold text-slate-800">
              Symptoms &amp; Conditions Treated
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {service.indications.map((ind, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#ff5722] shrink-0 mt-0.5" />
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Procedure Steps (01, 02, 03, 04) */}
        {service.procedureSteps && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/80 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-5 bg-[#00bcd4] inline-block rounded-full"></span>
              <h2 className="text-lg font-bold text-slate-800">
                The Surgical Procedure: What to Expect
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {service.procedureSteps.map((step, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center font-mono font-bold text-sm shrink-0 shadow-xs">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recovery & Rehabilitation Protocol */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/80 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-5 bg-[#00bcd4] inline-block rounded-full"></span>
            <h2 className="text-lg font-bold text-slate-800">
              Post-Operative Recovery Timeline
            </h2>
          </div>
          <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-3.5">
            <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-700 leading-relaxed">
              {service.recovery}
            </p>
          </div>
        </div>

        {/* Clinical FAQs */}
        {service.faqs && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/80 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-5 bg-[#00bcd4] inline-block rounded-full"></span>
              <h2 className="text-lg font-bold text-slate-800">
                Frequently Asked Questions (Patient FAQs)
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#ff5722] shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Booking Invitation Card in Clean Oreo Style */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900">Consult Dr. Vatsal Khetan</h3>
            <p className="text-xs text-slate-500">
              Clinical evaluation, 3D imaging assessment &amp; personalized recovery planning.
            </p>
            <p className="text-xs text-[#ff5722] font-semibold pt-1">
              Bargadawa, Gorakhpur &bull; Helpline: 9662365917
            </p>
          </div>
          <button
            onClick={onBookClick}
            className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff5722] hover:bg-[#e64a19] text-white shadow-md transition-all shrink-0 cursor-pointer"
          >
            <span>Book Appointment</span>
          </button>
        </div>

      </section>

    </div>
  );
};
