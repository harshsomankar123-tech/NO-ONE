import React from 'react';
import { ArrowRight, Stethoscope, Rocket, CheckCircle2, Phone, Sparkles } from 'lucide-react';

interface DoctorsFoundersSectionProps {
  onOpenSchedule: () => void;
}

export const DoctorsFoundersSection: React.FC<DoctorsFoundersSectionProps> = ({ onOpenSchedule }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Banner Container in Light Black */}
        <div className="rounded-[2.5rem] bg-[#1c1e22] text-white border border-zinc-700/40 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24262c] border border-zinc-700/50 text-xs font-sans tracking-wide text-zinc-300 mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tailored Technology Solutions for Practice &amp; Enterprise Growth</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-[1.15] mb-5 max-w-4xl">
              Hii Doctors &amp; Founders — If you want to scale your business with technology, we engineer the systems you need.
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-3xl mb-12">
              Whether you are a healthcare professional modernizing your clinic and patient acquisition, or an ambitious founder shipping production web apps, mobile systems, and AI workflows — we turn your complex operational bottlenecks into sleek, profitable software.
            </p>

            {/* 2-Column Dedicated Offerings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              
              {/* Column 1: For Doctors & Healthcare */}
              <div className="bg-[#24262c]/90 rounded-3xl p-7 sm:p-9 border border-zinc-700/50 flex flex-col justify-between shadow-md">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1c1e22] border border-zinc-700/60 flex items-center justify-center text-emerald-400 mb-6 shadow-xs">
                    <Stethoscope className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold block mb-2">
                    Healthcare &amp; Clinical Practices
                  </span>
                  <h3 className="text-2xl font-serif text-white mb-4">
                    For Doctors &amp; Medical Leaders
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                    Turn patient searches into confirmed appointments with digital platforms designed for medical trust, regulatory adherence, and friction-free communication.
                  </p>

                  <ul className="space-y-3 mb-8 text-xs sm:text-sm text-zinc-300">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Clinic &amp; Hospital Portals:</strong> Automated appointment booking, doctor profiles, and telehealth gateways.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Pharmaceutical &amp; B2B Systems:</strong> WHO-GMP compliant portfolios with cold-chain telemetry and RFQ engines (as built for <a href="https://nsbpharamaceutical.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline hover:text-emerald-300">NSB Pharmaceutical</a>).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Local Healthcare SEO:</strong> Synchronized Schema markup to rank your clinic at the top of Google searches.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-zinc-700/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400">HIPAA &amp; WHO Standards Aware</span>
                  <button
                    onClick={onOpenSchedule}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition cursor-pointer"
                  >
                    <span>Request Clinic Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Column 2: For Founders & Startups */}
              <div className="bg-[#24262c]/90 rounded-3xl p-7 sm:p-9 border border-zinc-700/50 flex flex-col justify-between shadow-md">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1c1e22] border border-zinc-700/60 flex items-center justify-center text-amber-400 mb-6 shadow-xs">
                    <Rocket className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold block mb-2">
                    Startups, SaaS &amp; Commerce
                  </span>
                  <h3 className="text-2xl font-serif text-white mb-4">
                    For Founders &amp; Entrepreneurs
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                    Launch revenue-generating MVPs and scale robust production code without the burn rate of massive agency retainers.
                  </p>

                  <ul className="space-y-3 mb-8 text-xs sm:text-sm text-zinc-300">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>High-Performance Web Platforms:</strong> Sub-second React/Next.js architectures, payment gateways, and custom SaaS dashboards.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Published Mobile Applications:</strong> Production iOS &amp; Android store releases with 1M+ proven user architecture experience.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Autonomous AI Agents &amp; RAG:</strong> Intelligent support automation, custom domain copilots, and deterministic offline safety fallback.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-zinc-700/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400">Fast 2-Week MVP Delivery</span>
                  <button
                    onClick={onOpenSchedule}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition cursor-pointer"
                  >
                    <span>Discuss Founder MVP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom Callout & Direct Actions */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1c1e22] border border-zinc-700/50 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-serif text-white mb-1">
                  Ready to build or scale? We will solve it with technology.
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 font-light">
                  Direct roadmap consultation within 24 hours. No sales friction, only technical clarity.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={onOpenSchedule}
                  className="px-6 py-3 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-semibold tracking-tight transition shadow-lg cursor-pointer"
                >
                  Start Project Consultation
                </button>
                <a
                  href="tel:+916263565140"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#24262c] hover:bg-[#2c2f37] border border-zinc-700/60 text-white text-xs font-medium transition cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call +91 6263565140</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
