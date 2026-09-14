import { useState, useRef, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface AppItem {
  id: string;
  name: string;
  category: string;
  platform: 'google-play' | 'app-store' | 'cross-platform';
  storeLabel: string;
  url: string;
  metrics: string;
  tag: string;
  gradient: string;
  imageSrc?: string;
  renderIcon: () => React.ReactNode;
}

export const AppIconsSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const apps: AppItem[] = [
    {
      id: 'kiwix',
      name: 'Kiwix Android',
      category: 'Offline Knowledge & Medical',
      platform: 'google-play',
      storeLabel: 'Google Play',
      url: 'https://play.google.com/store/search?q=kiwix&c=apps&hl=en',
      metrics: '1,000,000+ Users',
      tag: '1M+ Users',
      gradient: 'from-blue-600 via-sky-500 to-emerald-400',
      imageSrc: '/app-kiwix.png',
      renderIcon: () => (
        <svg viewBox="0 0 48 48" className="w-8 h-8 text-white" fill="none">
          <circle cx="24" cy="24" r="20" fill="currentColor" fillOpacity="0.2" />
          <path
            d="M 14,24 C 14,17 20,12 28,14 C 33,15 35,19 35,24 C 35,30 29,35 23,35 C 18,35 14,31 14,24 Z"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 20,24 C 20,21 24,19 28,21 C 30,22 31,24 30,27 C 29,30 26,30 23,29"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="28" cy="19" r="2" fill="white" />
        </svg>
      )
    },
    {
      id: 'catrobat',
      name: 'Catrobat Pocket Code',
      category: 'Visual Coding & Youth Tech',
      platform: 'google-play',
      storeLabel: 'Google Play',
      url: 'https://play.google.com/store/search?q=catrobat&c=apps&hl=en',
      metrics: 'Global Scale App',
      tag: 'Global Scale',
      gradient: 'from-amber-500 via-orange-500 to-rose-500',
      imageSrc: '/app-catrobat.png',
      renderIcon: () => (
        <svg viewBox="0 0 48 48" className="w-8 h-8 text-white" fill="none">
          {/* Origami cat head */}
          <polygon
            points="12,18 24,36 36,18 30,12 24,16 18,12"
            fill="white"
            fillOpacity="0.9"
          />
          <polygon points="12,18 18,12 18,22" fill="#ea580c" />
          <polygon points="36,18 30,12 30,22" fill="#ea580c" />
          <circle cx="20" cy="22" r="2" fill="#0f172a" />
          <circle cx="28" cy="22" r="2" fill="#0f172a" />
        </svg>
      )
    },
    {
      id: 'winkin',
      name: 'Winkin',
      category: 'Social & Fluid Interaction',
      platform: 'app-store',
      storeLabel: 'Apple App Store',
      url: 'https://apps.apple.com/app/winkin/id6805588229',
      metrics: 'ID: 6805588229',
      tag: 'iOS Live',
      gradient: 'from-purple-600 via-indigo-600 to-pink-500',
      imageSrc: '/app-winkin.png',
      renderIcon: () => (
        <svg viewBox="0 0 48 48" className="w-8 h-8 text-white" fill="none">
          <circle cx="24" cy="24" r="20" fill="white" fillOpacity="0.15" />
          <path
            d="M 16,22 Q 24,30 32,22"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Wink eye left */}
          <path
            d="M 17,16 Q 20,20 23,16"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Open eye right */}
          <circle cx="31" cy="16" r="2.5" fill="white" />
        </svg>
      )
    },
    {
      id: 'siddhashram',
      name: 'Siddhashram',
      category: 'Community, Audio & Streaming',
      platform: 'app-store',
      storeLabel: 'App Store & Play',
      url: 'https://apps.apple.com/app/siddhashram/id6803401033',
      metrics: 'ID: 6803401033',
      tag: 'Firebase Cloud',
      gradient: 'from-amber-600 via-yellow-500 to-emerald-600',
      imageSrc: '/app-siddhashram.png',
      renderIcon: () => (
        <svg viewBox="0 0 48 48" className="w-8 h-8 text-white" fill="none">
          <circle cx="24" cy="24" r="19" stroke="white" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="24" cy="24" r="14" fill="white" fillOpacity="0.25" />
          <path
            d="M 24,12 C 24,12 28,18 28,24 C 28,30 24,36 24,36 C 24,36 20,30 20,24 C 20,18 24,12 24,12 Z"
            fill="white"
          />
          <circle cx="24" cy="24" r="3" fill="#b45309" />
        </svg>
      )
    },
    {
      id: 'play-console',
      name: 'Google Play Portfolio',
      category: '15+ Verified Store Applications',
      platform: 'google-play',
      storeLabel: 'Google Play Dev',
      url: 'https://play.google.com/store/apps/dev?id=6562992185267472185',
      metrics: 'Developer Console',
      tag: '15+ Apps Catalog',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
      renderIcon: () => (
        <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
          {/* Stylized Google Play icon */}
          <path
            d="M 12,10 L 32,24 L 12,38 Z"
            fill="#34d399"
          />
          <path
            d="M 12,10 L 26,20 L 21,24 L 12,10 Z"
            fill="#60a5fa"
          />
          <path
            d="M 12,38 L 21,24 L 26,28 L 12,38 Z"
            fill="#f87171"
          />
          <path
            d="M 32,24 L 26,20 L 26,28 L 32,24 Z"
            fill="#fbbf24"
          />
        </svg>
      )
    },
    {
      id: 'telemetry',
      name: 'Aura Telemetry Dash',
      category: 'Offline Diagnostics & Sync',
      platform: 'cross-platform',
      storeLabel: 'Android SDK 34',
      url: 'https://play.google.com/store/apps/dev?id=6562992185267472185',
      metrics: 'Sub-second Sync',
      tag: 'SQLite Coroutines',
      gradient: 'from-emerald-700 via-emerald-600 to-teal-500',
      renderIcon: () => (
        <svg viewBox="0 0 48 48" className="w-8 h-8 text-white" fill="none">
          <circle cx="24" cy="24" r="20" fill="white" fillOpacity="0.1" />
          <path
            d="M 10,24 L 18,24 L 21,16 L 25,32 L 29,20 L 32,26 L 38,24"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="25" cy="32" r="2" fill="#4ade80" />
        </svg>
      )
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Check scroll bounds
  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 20);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full py-8">
      {/* Slider Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 px-1">
        <div>
          <h3 className="text-xl sm:text-2xl font-serif text-zinc-950 tracking-tight">
            Published Applications &amp; Mobile Ecosystems
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1 font-normal">
            Slide to explore live production apps across Google Play Store &amp; Apple App Store.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition ${
              canScrollLeft
                ? 'bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-300 shadow-xs cursor-pointer'
                : 'bg-zinc-50 text-zinc-300 border-zinc-200 cursor-not-allowed opacity-50'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition ${
              canScrollRight
                ? 'bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-300 shadow-xs cursor-pointer'
                : 'bg-zinc-50 text-zinc-300 border-zinc-200 cursor-not-allowed opacity-50'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Slider Track */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-4 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {apps.map((app) => (
          <a
            key={app.id}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-72 sm:w-80 snap-start bg-white rounded-3xl border border-zinc-200/90 p-5 shadow-xs hover:shadow-xl hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Accent Gradient Bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${app.gradient}`} />

            <div>
              {/* App Icon + Store Badge */}
              <div className="flex items-start justify-between mb-4">
                {/* Squircle App Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.gradient} p-0.5 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-[14px] flex items-center justify-center backdrop-blur-xs relative overflow-hidden bg-white">
                    {/* Gloss sheen overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/10 pointer-events-none z-10" />
                    {app.imageSrc ? (
                      <img
                        src={app.imageSrc}
                        alt={app.name}
                        className="w-full h-full object-contain p-1 rounded-[14px]"
                      />
                    ) : (
                      app.renderIcon()
                    )}
                  </div>
                </div>

                {/* Store Pill */}
                <div className="flex flex-col items-end gap-1">
                  <span className="px-2.5 py-1 rounded-full bg-zinc-100 group-hover:bg-emerald-100 group-hover:text-emerald-900 text-zinc-700 text-[10px] font-mono font-medium transition flex items-center gap-1">
                    <span>{app.storeLabel}</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 font-semibold">
                    {app.metrics}
                  </span>
                </div>
              </div>

              {/* App Title & Category */}
              <h4 className="text-lg font-serif text-zinc-950 mb-1 group-hover:text-emerald-900 transition flex items-center justify-between">
                <span>{app.name}</span>
                <span className="text-zinc-300 group-hover:text-emerald-600 transition text-sm">↗</span>
              </h4>
              <p className="text-xs text-zinc-600 font-normal leading-relaxed mb-4 line-clamp-2">
                {app.category}
              </p>
            </div>

            {/* Bottom Tag & Live Beacon */}
            <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
              <span className="px-2 py-0.5 rounded-md bg-zinc-50 border border-zinc-200/70 text-[10px] font-mono text-zinc-600">
                {app.tag}
              </span>
              <span className="text-[11px] font-mono text-emerald-800 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live on Store
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
