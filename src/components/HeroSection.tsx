import { ArrowRight, Mail, Phone } from 'lucide-react';
import { HeroVisualCard } from './HeroVisualCard';

interface HeroSectionProps {
  onStartProject: (email?: string) => void;
  onExploreWork: () => void;
  onNavigateWeb?: () => void;
  onNavigateApps?: () => void;
}

export const HeroSection = ({
  onStartProject,
  onExploreWork
}: HeroSectionProps) => {

  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse" />
                Harsh — Strategy, Web &amp; Mobile Engineering
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-serif font-normal text-zinc-950 tracking-[-0.03em] leading-[1.08] mb-6">
              Designing calm, <br className="hidden sm:inline" />
              intelligent systems that <br className="hidden sm:inline" />
              feel alive.
            </h1>

            {/* Subheading / Description */}
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl mb-8">
              Full-Stack Digital Product Architect &amp; Creative Technologist engineering production-grade web platforms and published mobile applications across Google Play and the Apple App Store.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <button
                onClick={() => onStartProject('')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold tracking-tight transition shadow-sm group cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={onExploreWork}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200/90 text-xs font-semibold tracking-tight transition shadow-2xs cursor-pointer"
              >
                <span>Explore Curated Works</span>
              </button>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <a
                href="mailto:harshsomankar123@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200/90 shadow-2xs hover:border-emerald-500/50 transition"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-700" />
                <span>harshsomankar123@gmail.com</span>
              </a>
              <a
                href="tel:+916263565140"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200/90 shadow-2xs hover:border-emerald-500/50 transition"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>+91 6263565140</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase Card */}
          <div className="lg:col-span-5">
            <HeroVisualCard onExploreWork={onExploreWork} />
          </div>

        </div>
      </div>
    </section>
  );
};
