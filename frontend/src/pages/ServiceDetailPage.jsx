import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowLeft, 
  Clock, 
  ShieldCheck, 
  Activity, 
  HelpCircle, 
  Sparkles, 
  HeartHandshake, 
  Calendar 
} from 'lucide-react';
import { allServices, clinicInfo } from '../data/clinicContent';

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
      
      {/* Header Banner */}
      <section className="bg-[#08284d] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
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
          
          {service.tagline && (
            <p className="mt-2 text-sm sm:text-base font-semibold text-orange-400">
              {service.tagline}
            </p>
          )}

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            {service.summary}
          </p>

          {service.philosophy && (
            <div className="mt-5 p-4 rounded-2xl bg-white/5 border border-white/10 max-w-2xl text-xs sm:text-sm text-slate-200 italic">
              <strong>Joint Preservation First:</strong> "{service.philosophy}"
            </div>
          )}
        </div>
      </section>

      {/* Main Content Details */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Why Patients Choose Dr. Vatsal Khetan */}
        {service.whyChoose && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <span className="eyebrow text-[#00458b]">CLINICAL EXCELLENCE IN GORAKHPUR</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#08284d]">
              Why Patients in Gorakhpur Prefer Dr. Vatsal Khetan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {service.whyChoose.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-xs sm:text-sm text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-[#00458b] flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Clinical Indications Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
          <span className="eyebrow text-[#f37021]">WHEN IS THIS SURGERY NEEDED?</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#08284d]">
            Symptoms &amp; Conditions Treated
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

        {/* Procedure Steps (01, 02, 03, 04) */}
        {service.procedureSteps && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
            <div>
              <span className="eyebrow text-emerald-700">STEP-BY-STEP CLINICAL PROTOCOL</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#08284d]">
                The Surgical Procedure: What to Expect
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {service.procedureSteps.map((step, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-[#08284d] text-white flex items-center justify-center text-xs font-mono font-bold">
                      {step.step || idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-[#08284d]">{step.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-9">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Procedures / Variants Offered */}
        {service.proceduresOffered && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <span className="eyebrow text-[#00458b]">ADVANCED OPTIONS</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#08284d]">
              Specialized Procedures &amp; Options Offered
            </h2>
            <div className="space-y-3 pt-2">
              {service.proceduresOffered.map((opt, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800">
                  <Sparkles className="w-4 h-4 text-[#f37021] flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">{opt}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Life After Surgery (Lifestyle Transformation) */}
        {service.lifestyleAfter && (
          <div className="bg-[#08284d] text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
            <div>
              <span className="eyebrow text-orange-400">PATIENT OUTCOMES</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Life After Surgery (सर्जरी के बाद का नया जीवन)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Regain painless movement, restorative sleep, and independent mobility.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.lifestyleAfter.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-1.5">
                  <h4 className="text-sm font-bold text-[#f37021]">{item.title}</h4>
                  <p className="text-xs text-slate-200 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

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

        {/* Clinical FAQs */}
        {service.faqs && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-5">
            <div>
              <span className="eyebrow text-amber-600">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#08284d]">
                अक्सर पूछे जाने वाले सवाल (Patient FAQs)
              </h2>
            </div>
            
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <h4 className="text-xs sm:text-sm font-bold text-[#08284d] flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#f37021] flex-shrink-0 mt-0.5" />
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

        {/* Booking Invitation Card */}
        <div className="p-8 rounded-3xl bg-[#08284d] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-xl font-extrabold">Consult Dr. Vatsal Khetan</h3>
            <p className="text-xs text-slate-300">
              Evaluation, 3D imaging assessment &amp; personalized recovery planning.
            </p>
            <p className="text-xs text-orange-400 font-mono pt-1">
              Betiahata, Gorakhpur · Helpline: 9662365917
            </p>
          </div>
          <button 
            onClick={onBookClick}
            className="button-primary bg-[#f37021] text-white hover:bg-orange-600 flex-shrink-0"
          >
            <span>Book Appointment</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </section>

    </div>
  );
};
