export const PillarsSection = () => {
  return (
    <section id="philosophy" className="py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-800 font-semibold mb-3 block">
            Our Core Value • Direct Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-zinc-950 tracking-tight mb-4">
            Building Exceptional Products at Very Low Cost with Maximum Efficiency
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
            High-conviction digital engineering with zero agency bloat. We deliver production-grade websites, mobile applications, and AI systems faster, better, and at a fraction of traditional agency pricing.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Efficiency */}
          <div className="bg-white rounded-3xl border border-zinc-200/80 p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-zinc-100 border border-zinc-800 flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 group-hover:bg-zinc-950 transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[1.6] stroke-zinc-100 fill-none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
                </svg>
              </div>

              <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-medium mb-2">
                01 / Extreme Efficiency
              </div>

              <h3 className="text-2xl font-serif text-zinc-950 mb-3 tracking-tight">
                Rapid Turnaround &amp; Direct Execution
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-8">
                No middle management, no unnecessary meetings, and zero bureaucratic drag. You collaborate directly with a principal engineer who architects, writes code, and deploys with unmatched speed.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100 text-[11px] font-mono text-emerald-800 uppercase tracking-wider flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                3x Faster Delivery
              </span>
              <span className="text-zinc-400">Zero Red Tape</span>
            </div>
          </div>

          {/* Card 2: Low Cost */}
          <div className="bg-white rounded-3xl border border-zinc-200/80 p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-zinc-100 border border-zinc-800 flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 group-hover:bg-zinc-950 transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[1.6] stroke-zinc-100 fill-none" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>

              <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-medium mb-2">
                02 / Accessible Low Cost
              </div>

              <h3 className="text-2xl font-serif text-zinc-950 mb-3 tracking-tight">
                Enterprise Quality at Lean Budgets
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-8">
                We provide the exact same architectural rigor and design elegance of top-tier design studios at transparent, affordable rates. Premium software engineering made cost-effective for growing businesses.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100 text-[11px] font-mono text-emerald-800 uppercase tracking-wider flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Up to 70% Cost Savings
              </span>
              <span className="text-zinc-400">Honest Pricing</span>
            </div>
          </div>

          {/* Card 3: High Quality & ROI */}
          <div className="bg-white rounded-3xl border border-zinc-200/80 p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-zinc-100 border border-zinc-800 flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 group-hover:bg-zinc-950 transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[1.6] stroke-zinc-100 fill-none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="12" y1="2" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="5" y2="12" />
                  <line x1="19" y1="12" x2="22" y2="12" />
                </svg>
              </div>

              <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-medium mb-2">
                03 / Uncompromised Quality
              </div>

              <h3 className="text-2xl font-serif text-zinc-950 mb-3 tracking-tight">
                High Craft That Generates ROI
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-8">
                Low cost never means cutting corners. Every website, mobile application, and AI workflow is built with clean maintainable code, sub-second response times, and resilient architectures that scale smoothly.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100 text-[11px] font-mono text-emerald-800 uppercase tracking-wider flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Maximum Commercial ROI
              </span>
              <span className="text-zinc-400">Zero Technical Debt</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
