import React from 'react';
import { Award, Activity, ShieldCheck, Users, CheckCircle2 } from 'lucide-react';

export const StatsCounterSection = () => {
  const stats = [
    {
      icon: Award,
      value: "12+",
      label: "Years Clinical Experience",
      subtext: "UK NHS & Top Indian Fellowships",
      color: "from-sky-500 to-blue-600"
    },
    {
      icon: Activity,
      value: "1,500+",
      label: "Joint Replacements Done",
      subtext: "Robotic & Total Knee / Hip Arthroplasty",
      color: "from-teal-400 to-cyan-500"
    },
    {
      icon: ShieldCheck,
      value: "10,000+",
      label: "Surgeries Performed",
      subtext: "Keyhole Arthroscopy, Trauma & Sports",
      color: "from-orange-400 to-amber-500"
    },
    {
      icon: Users,
      value: "98%",
      label: "Positive Mobility Outcomes",
      subtext: "Documented Patient Recovery Rate",
      color: "from-emerald-400 to-teal-600"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#08284d] to-[#0c3668] text-white py-14 px-4 sm:px-6 lg:px-8 border-y border-white/10 relative overflow-hidden">
      {/* Background Subtle Medical Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-white/10 text-[#00b4d8] border border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00b4d8]" />
            PROVEN CLINICAL TRACK RECORD
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-3 text-white">
            Surgical Excellence Backed by Measurable Outcomes
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2">
            Delivering high-precision joint care and sports medicine across Gorakhpur and Eastern Uttar Pradesh.
          </p>
        </div>

        {/* 4 Counter Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white group-hover:text-[#00b4d8] transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-100 mt-2">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
