import React from 'react';
import { Phone } from 'lucide-react';

interface ServicesSectionProps {
  onOpenSchedule: () => void;
}

export const DoctorsFoundersSection: React.FC<ServicesSectionProps> = ({ onOpenSchedule }) => {
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
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#24262c] border border-zinc-700/50 text-xs font-sans tracking-wide text-zinc-300 mb-6 shadow-xs">
              <span>Full-Stack Engineering &amp; Strategic Digital Growth</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-[1.15] mb-5 max-w-4xl">
              If you want to scale your business with technology, we engineer the systems you need.
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-3xl mb-12">
              From commercial web platforms and published mobile applications to autonomous AI workflows and conversion architectures — we turn complex operational challenges into fast, profitable software.
            </p>

            {/* 4 Core Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              
              {/* Service 1: Web & SaaS Platforms */}
              <div className="bg-[#24262c]/90 rounded-3xl p-6 sm:p-7 border border-zinc-700/50 flex flex-col justify-between shadow-md hover:border-zinc-600/70 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1c1e22] border border-zinc-700/60 flex items-center justify-center mb-5 shadow-xs">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="18" rx="3" stroke="#34d399" strokeWidth="1.5" />
                      <path d="M2 8h20" stroke="#34d399" strokeWidth="1.5" />
                      <circle cx="5" cy="5.5" r="0.8" fill="#34d399" />
                      <circle cx="7.5" cy="5.5" r="0.8" fill="#34d399" />
                      <circle cx="10" cy="5.5" r="0.8" fill="#34d399" />
                      <path d="M8 13l-2.5 2.5L8 18" stroke="#34d399" strokeWidth="1.5" />
                      <path d="M16 13l2.5 2.5L16 18" stroke="#34d399" strokeWidth="1.5" />
                      <path d="M13 11.5l-2 9" stroke="#34d399" strokeWidth="1.2" opacity="0.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">Web &amp; SaaS Platforms</h3>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed mb-4">
                    Fast, conversion-focused web systems, customer portals, and custom SaaS dashboards built with sub-second React/Next.js architectures.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-700/40 text-[11px] font-mono text-zinc-400">
                  <span>e.g., nsbpharamaceutical.com</span>
                </div>
              </div>

              {/* Service 2: Mobile App Development */}
              <div className="bg-[#24262c]/90 rounded-3xl p-6 sm:p-7 border border-zinc-700/50 flex flex-col justify-between shadow-md hover:border-zinc-600/70 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1c1e22] border border-zinc-700/60 flex items-center justify-center mb-5 shadow-xs">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="3" stroke="#fbbf24" strokeWidth="1.5" />
                      <path d="M10 4.5h4" stroke="#fbbf24" strokeWidth="1.2" />
                      <rect x="7.5" y="7" width="3.5" height="3.5" rx="0.8" stroke="#fbbf24" strokeWidth="1" />
                      <rect x="13" y="7" width="3.5" height="3.5" rx="0.8" stroke="#fbbf24" strokeWidth="1" />
                      <rect x="7.5" y="12.5" width="3.5" height="3.5" rx="0.8" stroke="#fbbf24" strokeWidth="1" />
                      <rect x="13" y="12.5" width="3.5" height="3.5" rx="0.8" stroke="#fbbf24" strokeWidth="1" />
                      <path d="M10.5 19h3" stroke="#fbbf24" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">Mobile Applications</h3>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed mb-4">
                    Production iOS &amp; Android store releases with proven 1M+ user scale, offline-first caching, and reactive state management.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-700/40 text-[11px] font-mono text-zinc-400">
                  <span>Google Play &amp; App Store</span>
                </div>
              </div>

              {/* Service 3: AI Agents for All Problems */}
              <div className="bg-[#24262c]/90 rounded-3xl p-6 sm:p-7 border border-zinc-700/50 flex flex-col justify-between shadow-md hover:border-zinc-600/70 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1c1e22] border border-zinc-700/60 flex items-center justify-center mb-5 shadow-xs">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3C7.5 3 4 6.5 4 10c0 2.2 1.1 4.1 2.8 5.3.3.2.5.6.5 1v1.2c0 .8.7 1.5 1.5 1.5h6.4c.8 0 1.5-.7 1.5-1.5v-1.2c0-.4.2-.8.5-1C18.9 14.1 20 12.2 20 10c0-3.5-3.5-7-8-7z" stroke="#22d3ee" strokeWidth="1.5" />
                      <path d="M9.5 21h5" stroke="#22d3ee" strokeWidth="1.5" />
                      <circle cx="9" cy="9" r="1" fill="#22d3ee" />
                      <circle cx="15" cy="9" r="1" fill="#22d3ee" />
                      <circle cx="12" cy="12" r="1" fill="#22d3ee" />
                      <path d="M9 9l3 3" stroke="#22d3ee" strokeWidth="0.8" opacity="0.6" />
                      <path d="M15 9l-3 3" stroke="#22d3ee" strokeWidth="0.8" opacity="0.6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">AI Agents for All Problems</h3>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed mb-4">
                    Intelligent 24/7 conversational chatbots, customer support copilots, workflow automation, and custom domain agents that solve operational bottlenecks with zero hallucinations.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-700/40 text-[11px] font-mono text-zinc-400">
                  <span>Chatbots &amp; Workflow Automation</span>
                </div>
              </div>

              {/* Service 4: Custom Portals & SEO */}
              <div className="bg-[#24262c]/90 rounded-3xl p-6 sm:p-7 border border-zinc-700/50 flex flex-col justify-between shadow-md hover:border-zinc-600/70 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1c1e22] border border-zinc-700/60 flex items-center justify-center mb-5 shadow-xs">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="16" rx="2.5" stroke="#a78bfa" strokeWidth="1.5" />
                      <path d="M2 7h20" stroke="#a78bfa" strokeWidth="1.2" />
                      <rect x="4.5" y="9.5" width="6" height="3" rx="0.8" stroke="#a78bfa" strokeWidth="1" opacity="0.5" />
                      <rect x="4.5" y="14" width="4" height="2" rx="0.8" stroke="#a78bfa" strokeWidth="1" opacity="0.5" />
                      <circle cx="16" cy="14" r="2.5" stroke="#a78bfa" strokeWidth="1.3" />
                      <path d="M18 16l2.5 2.5" stroke="#a78bfa" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">Custom Portals &amp; SEO</h3>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed mb-4">
                    Client management portals, automated booking flows, and 100% SEO synchronization for first-page Google search dominance.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-700/40 text-[11px] font-mono text-zinc-400">
                  <span>100% SEO Synchronised</span>
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
