import { ArrowRight, Check } from 'lucide-react';

interface MeasurableImpactProps {
  onOpenSchedule?: () => void;
}

export const MeasurableImpact = ({ onOpenSchedule }: MeasurableImpactProps) => {
  return (
    <section id="impact" className="py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] bg-[#1c1e22] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-zinc-700/40">
          
          {/* Subtle Ambient Architecture Highlight */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-zinc-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-zinc-700/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Narrative & Service Offerings */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#24262c] border border-zinc-700/60 text-zinc-200 text-xs font-sans tracking-wide mb-6 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Scale &amp; Technical Architecture
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-white leading-[1.14] mb-6">
                Engineering High-Performance Systems That Drive Real Commercial Scale.
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
                From autonomous multi-agent workflows and enterprise healthcare portals to battle-tested mobile apps serving over a million users — we provide strategic technical architecture that turns technological complexity into commercial momentum.
              </p>

              {/* Core Capabilities - Clean Editorial Format */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#24262c] border border-zinc-700/60 text-zinc-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white">Autonomous AI Agents: </span>
                    <span className="text-sm text-zinc-300 font-light">
                      Intelligent multi-agent systems, automated workflows, and custom LLM reasoning pipelines.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#24262c] border border-zinc-700/60 text-zinc-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white">Production Web Platforms: </span>
                    <span className="text-sm text-zinc-300 font-light">
                      Sub-second response speeds, WHO-GMP verified pharmaceutical portals, and responsive enterprise systems.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#24262c] border border-zinc-700/60 text-zinc-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white">High-Concurrency Mobile Apps: </span>
                    <span className="text-sm text-zinc-300 font-light">
                      Published codebases with 1M+ active users across Android and iOS ecosystems (Kiwix, Winkin, Siddhashram).
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#24262c] border border-zinc-700/60 text-zinc-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white">Strategic Tech Consultancy: </span>
                    <span className="text-sm text-zinc-300 font-light">
                      Architecture modernization, telemetry pipelines, and lean engineering roadmaps that minimize burn.
                    </span>
                  </div>
                </div>
              </div>

              {onOpenSchedule && (
                <div>
                  <button
                    onClick={onOpenSchedule}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-semibold tracking-tight transition shadow-lg group cursor-pointer"
                  >
                    <span>Request Scale Consultancy</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Architectural Credentials & Proof Points */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Card 1: 1M+ End Users */}
              <div className="bg-[#24262c]/90 backdrop-blur-md rounded-2xl p-7 border border-zinc-700/50 flex flex-col justify-between shadow-xl hover:border-zinc-600 transition-colors">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-sans text-zinc-400 mb-5 pb-3 border-b border-zinc-700/40">
                    <span className="tracking-wider uppercase font-medium">Global Scale</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#2c2f37] border border-zinc-700 text-zinc-200 text-[10px] font-semibold">
                      VERIFIED
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-4xl sm:text-5xl font-serif font-normal text-white tracking-tight">
                      1,000,000+
                    </div>
                    <div className="text-xs font-sans text-zinc-300 uppercase tracking-wider mt-1.5 font-medium">
                      Active Users Worldwide
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed font-light mb-6">
                    Production mobile architectures deployed on Google Play &amp; App Store, engineered with offline persistence and sub-second sync.
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-700/40 flex flex-wrap gap-1.5 text-[10px] font-sans text-zinc-300">
                  <span className="px-2.5 py-1 rounded-md bg-[#2c2f37] border border-zinc-700/60 text-zinc-200">Google Play Dev</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#2c2f37] border border-zinc-700/60 text-zinc-200">Apple App Store</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#2c2f37] border border-zinc-700/60 text-zinc-200">Offline-First</span>
                </div>
              </div>

              {/* Card 2: Sub-Second Performance & Autonomous AI */}
              <div className="bg-[#24262c]/90 backdrop-blur-md rounded-2xl p-7 border border-zinc-700/50 flex flex-col justify-between shadow-xl hover:border-zinc-600 transition-colors">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-sans text-zinc-400 mb-5 pb-3 border-b border-zinc-700/40">
                    <span className="tracking-wider uppercase font-medium">High Efficiency</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#2c2f37] border border-zinc-700 text-zinc-200 text-[10px] font-semibold">
                      PRODUCTION
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-4xl sm:text-5xl font-serif font-normal text-white tracking-tight">
                      &lt; 1.0s
                    </div>
                    <div className="text-xs font-sans text-zinc-300 uppercase tracking-wider mt-1.5 font-medium">
                      Sub-Second Speeds
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed font-light mb-6">
                    Validated web portals and autonomous agent workflows designed with sub-second response times and 99+ Lighthouse scores.
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-700/40 flex flex-wrap gap-1.5 text-[10px] font-sans text-zinc-300">
                  <span className="px-2.5 py-1 rounded-md bg-[#2c2f37] border border-zinc-700/60 text-zinc-200">WHO-GMP Portal</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#2c2f37] border border-zinc-700/60 text-zinc-200">99+ Lighthouse</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#2c2f37] border border-zinc-700/60 text-zinc-200">RAG Pipelines</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
