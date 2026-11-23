import React from 'react';
import { Plus, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { clinicInfo } from '../../data/navigationData';

export const VisitFaqSection = ({ onBookClick }) => {
  const faqs = [
    {
      q: "Where is the clinic located in Gorakhpur and what are the OPD hours?",
      a: "Khetan Knee N Shoulder Clinic is located at SK Pandey Complex, Beside Union Bank of India, Betiahata Road, Gorakhpur, UP 273001. Consultation timings are Monday to Saturday: 10:30 AM - 02:00 PM and 05:30 PM - 08:30 PM."
    },
    {
      q: "Do you accept health insurance and provide cashless TPA facilities?",
      a: "Yes. We support cashless hospitalization and reimbursement claims across major health insurance providers and Third Party Administrators (TPAs). Our dedicated desk helps you with pre-authorization and documentation."
    },
    {
      q: "What should I bring to my first orthopedic consultation?",
      a: "Please bring any recent Knee or Shoulder X-rays, MRI reports, blood work, a list of current medications, and previous surgical discharge summaries if applicable."
    },
    {
      q: "How soon can I walk after robotic knee replacement surgery?",
      a: "With advanced robotic alignment and modern multimodal pain management, most patients begin assisted walking and gentle knee bending within 24 hours of surgery."
    },
    {
      q: "Do I need open surgery for an ACL tear or rotator cuff injury?",
      a: "No. The vast majority of ACL reconstructions and rotator cuff repairs are performed using minimally invasive keyhole arthroscopy through tiny incisions, reducing recovery time and scarring."
    }
  ];

  return (
    <section id="your-visit" className="visit-section" aria-labelledby="visit-title">
      
      {/* 1. Left Column: Intro & Insurance Card */}
      <div className="visit-intro">
        <span className="eyebrow text-[#f37021]">
          05 / BEFORE WE SAY HELLO
        </span>

        <h2 id="visit-title">
          Less wondering.<br />
          <span>More peace of mind.</span>
        </h2>

        <p>
          A little preparation makes a big difference. Here’s everything you need to know before visiting our clinic in Betiahata.
        </p>

        {/* Insurance Note Box */}
        <div className="insurance-note">
          <span className="eyebrow text-[#00458b]">
            CASHLESS HEALTH INSURANCE & TPA
          </span>
          <p>
            We help you verify your policy benefits prior to planned procedures. Cashless eligibility and admission formalities are facilitated smoothly by our team.
          </p>
          <button 
            onClick={onBookClick}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00458b] hover:text-[#f37021] transition-colors"
          >
            <span>Book OPD Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Right Column: FAQs Accordion */}
      <div className="visit-faqs">
        {faqs.map((faq, idx) => (
          <details key={idx} className="group">
            <summary className="hover:text-[#f37021] transition-colors">
              <span>{faq.q}</span>
              <Plus className="w-5 h-5 text-[#f37021] transition-transform duration-200 group-open:rotate-45 flex-shrink-0 ml-4" />
            </summary>
            <p>{faq.a}</p>
          </details>
        ))}

        <p className="text-[11px] text-slate-400 pt-6">
          Need immediate assistance? Call our priority line: <strong>{clinicInfo.phone}</strong>.
        </p>
      </div>

    </section>
  );
};
