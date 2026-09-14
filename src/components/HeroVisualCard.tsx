// HeroVisualCard component for Harsh Somankar portrait
interface HeroVisualCardProps {
  onExploreWork?: () => void;
}

export const HeroVisualCard = ({ onExploreWork }: HeroVisualCardProps) => {
  // onExploreWork retained for prop compatibility
  void onExploreWork;

  return (
    <div className="relative w-full aspect-[4/4.6] sm:aspect-[4/4.8] lg:aspect-[4/4.7] rounded-[2.5rem] overflow-hidden shadow-elevated border border-black/5 group">
      {/* Harsh Somankar Portrait with Calm Editorial Color Grade */}
      <img
        src="/harsh-portrait.jpg"
        alt="Harsh Somankar — Principal & Systems Architect"
        className="w-full h-full object-cover object-[center_20%] transition duration-700 group-hover:scale-105"
        loading="eager"
      />

      {/* Subtle warm tone and contrast overlay to match calm editorial aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/20 pointer-events-none mix-blend-multiply opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

      {/* Floating High-Contrast Manifesto Badge at bottom of portrait */}
      <div className="absolute bottom-4 left-3.5 right-3.5 sm:bottom-6 sm:left-6 sm:right-6 bg-white border border-zinc-200/90 rounded-2xl p-4 sm:p-5 shadow-[0_12px_36px_rgba(0,0,0,0.18)] text-zinc-950 z-20 transition-all duration-200 hover:shadow-2xl">
        <p className="text-xs sm:text-sm font-sans leading-relaxed text-zinc-900 font-medium">
          “We engineer high-performance web platforms, published mobile apps, and autonomous AI agents at accessible cost with extreme efficiency — making technology better and helping businesses grow.”
        </p>
        <div className="mt-3 flex items-center gap-2 text-[11px] text-zinc-700 font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse shrink-0" />
          <span>Harsh Somankar — Founder &amp; Architect, Harsh Studio</span>
        </div>
      </div>
    </div>
  );
};
