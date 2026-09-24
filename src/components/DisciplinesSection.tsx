import { ArrowRight, ExternalLink } from 'lucide-react';
import { AppIconsSlider } from './AppIconsSlider';

interface DisciplinesProps {
  onNavigateWeb: () => void;
  onNavigateApps: () => void;
}

export const DisciplinesSection = ({ onNavigateWeb, onNavigateApps }: DisciplinesProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-zinc-950 tracking-tight mb-4">
            Proven Track Record Across Web &amp; Mobile
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
            Delivering high-performance digital systems — from scalable enterprise web architectures to live published mobile applications with thousands of active users.
          </p>
        </div>

        {/* Two Featured Discipline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Web Development */}
          <div className="bg-white rounded-[2.5rem] border border-zinc-200/80 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-zinc-100 border border-zinc-800 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-zinc-950 transition-all">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[1.6] stroke-zinc-100 fill-none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="18" rx="3" />
                    <path d="M2 8h20" />
                    <circle cx="5.5" cy="5.5" r="0.75" fill="currentColor" />
                    <circle cx="8.5" cy="5.5" r="0.75" fill="currentColor" />
                    <circle cx="11.5" cy="5.5" r="0.75" fill="currentColor" />
                    <path d="M6 12h5" />
                    <path d="M6 15h11" />
                    <path d="M6 18h7" />
                  </svg>
                </div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-700 text-[11px] font-mono tracking-wider uppercase font-medium shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Production Websites</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-zinc-950 mb-3 tracking-tight">
                Web Development & Architecture
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-normal">
                Bespoke enterprise portals, responsive eCommerce platforms, and calm web applications. Engineered with sub-second page loads, accessible UI/UX, and robust full-stack logic.
              </p>

              {/* Highlights Chips */}
              <div className="space-y-2 mb-8 text-xs font-mono text-zinc-600">
                <div className="flex flex-wrap items-center gap-2 p-2 rounded-xl bg-zinc-50 border border-zinc-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-zinc-800">Featured:</span>
                  <a 
                    href="https://www.reditionpharma.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline flex items-center gap-1 font-medium"
                  >
                    Redition Pharma
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span>•</span>
                  <a 
                    href="https://nsbpharamaceutical.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline flex items-center gap-1"
                  >
                    NSB Pharma
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-zinc-50 border border-zinc-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-zinc-800">Tech Stack:</span>
                  <span>React, TypeScript, Next.js, Node.js, Tailwind, Vite</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-zinc-50 border border-zinc-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-zinc-800">Performance:</span>
                  <span>99+ Lighthouse Scores, SEO Optimized, Accessible</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-zinc-100 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-mono">
                Production-Grade Systems
              </span>
              <button
                onClick={onNavigateWeb}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-medium transition shadow-sm group/btn cursor-pointer"
              >
                <span>Explore Web Dev Page</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Mobile App Development */}
          <div className="bg-white rounded-[2.5rem] border border-zinc-200/80 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-zinc-100 border border-zinc-800 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-zinc-950 transition-all">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[1.6] stroke-zinc-100 fill-none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="3.5" />
                    <path d="M10 4.5h4" />
                    <rect x="8" y="7.5" width="8" height="5.5" rx="1.5" />
                    <path d="M8 15.5h8" />
                    <path d="M8 18h4" />
                  </svg>
                </div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-700 text-[11px] font-mono tracking-wider uppercase font-medium shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>1M+ Global Users • Mobile</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-zinc-950 mb-3 tracking-tight">
                Mobile App Engineering &amp; Architecture
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-normal">
                Cross-platform and native iOS &amp; Android applications engineered and published for over 1M+ users worldwide, including flagship platforms like Kiwix and Catrobat, alongside production client apps.
              </p>

              {/* Highlights Chips */}
              <div className="space-y-2 mb-8 text-xs font-mono text-zinc-600">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-zinc-50 border border-zinc-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-zinc-800">Featured Apps:</span>
                  <a 
                    href="https://play.google.com/store/search?q=kiwix&c=apps&hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline flex items-center gap-1 mr-2 font-medium"
                  >
                    Kiwix (1M+ Users)
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span>•</span>
                  <a 
                    href="https://play.google.com/store/search?q=catrobat&c=apps&hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline flex items-center gap-1 ml-2 font-medium"
                  >
                    Catrobat
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-zinc-50 border border-zinc-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-zinc-800">Google Play:</span>
                  <a 
                    href="https://play.google.com/store/apps/dev?id=6562992185267472185" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline flex items-center gap-1"
                  >
                    Verified Google Play Developer Account
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-zinc-50 border border-zinc-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-zinc-800">App Store:</span>
                  <a 
                    href="https://apps.apple.com/app/winkin/id6805588229" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline flex items-center gap-1 mr-2"
                  >
                    Winkin
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span>•</span>
                  <a 
                    href="https://apps.apple.com/app/siddhashram/id6803401033" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline flex items-center gap-1 ml-2"
                  >
                    Siddhashram
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-zinc-100 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-mono">
                Play Store &amp; App Store
              </span>
              <button
                onClick={onNavigateApps}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-medium transition shadow-sm group/btn cursor-pointer"
              >
                <span>Explore App Dev Page</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Live Apps Icons Interactive Slider */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm border border-zinc-200/80 rounded-[2.5rem] p-6 sm:p-8 shadow-xs">
          <AppIconsSlider />
        </div>

      </div>
    </section>
  );
};
