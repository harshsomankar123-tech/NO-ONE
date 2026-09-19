import { useState } from 'react';
import { Headphones, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenSchedule?: () => void;
  activeSection: string;
  currentPage: 'home' | 'web' | 'apps' | 'agents';
  onNavigatePage: (page: 'home' | 'web' | 'apps' | 'agents') => void;
}

export const Navbar = ({
  activeSection,
  currentPage,
  onNavigatePage
}: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollTo = (id: string) => {
    if (currentPage !== 'home') {
      onNavigatePage('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full pt-4 pb-2 px-4 sm:px-6 lg:px-10 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => onNavigatePage('home')}
          className="group flex items-center gap-1.5 text-zinc-900 transition-opacity hover:opacity-80"
        >
          <span className="font-serif text-2xl tracking-tight italic font-medium">Harsh</span>
          <span className="text-zinc-400 font-sans text-xs flex items-center tracking-normal font-normal">
            <span className="mx-1">→</span> Studio
          </span>
        </button>

        {/* Center Pill Nav: Architectural Floating Dock */}
        <nav className="hidden md:flex items-center gap-0.5 bg-white/90 backdrop-blur-xl border border-zinc-200/80 rounded-full p-1 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.02]">
          <button
            onClick={() => onNavigatePage('home')}
            className={`relative flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all duration-150 ${
              currentPage === 'home' && activeSection !== 'impact' && activeSection !== 'philosophy' && activeSection !== 'about'
                ? 'bg-zinc-100 text-zinc-950 font-semibold border border-zinc-200/80 shadow-2xs'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/60 font-medium'
            }`}
          >
            {currentPage === 'home' && activeSection !== 'impact' && activeSection !== 'philosophy' && activeSection !== 'about' && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            )}
            Home
          </button>

          <button
            onClick={() => onNavigatePage('web')}
            className={`relative flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all duration-150 ${
              currentPage === 'web'
                ? 'bg-zinc-100 text-zinc-950 font-semibold border border-zinc-200/80 shadow-2xs'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/60 font-medium'
            }`}
          >
            {currentPage === 'web' && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            )}
            Web Dev
          </button>

          <button
            onClick={() => onNavigatePage('apps')}
            className={`relative flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all duration-150 ${
              currentPage === 'apps'
                ? 'bg-zinc-100 text-zinc-950 font-semibold border border-zinc-200/80 shadow-2xs'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/60 font-medium'
            }`}
          >
            {currentPage === 'apps' && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            )}
            App Dev
          </button>

          <button
            onClick={() => onNavigatePage('agents')}
            className={`relative flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all duration-150 ${
              currentPage === 'agents'
                ? 'bg-zinc-100 text-zinc-950 font-semibold border border-zinc-200/80 shadow-2xs'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/60 font-medium'
            }`}
          >
            {currentPage === 'agents' && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            )}
            AI Agents
          </button>

          {/* Architectural divider */}
          <span className="w-px h-3.5 bg-zinc-200 mx-1" aria-hidden="true" />

          <button
            onClick={() => scrollTo('impact')}
            className={`relative flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all duration-150 ${
              currentPage === 'home' && activeSection === 'impact'
                ? 'bg-zinc-100 text-zinc-950 font-semibold border border-zinc-200/80 shadow-2xs'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/60 font-medium'
            }`}
          >
            {currentPage === 'home' && activeSection === 'impact' && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            )}
            Scale
          </button>
          
          <button
            onClick={() => scrollTo('philosophy')}
            className={`relative flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all duration-150 ${
              currentPage === 'home' && activeSection === 'philosophy'
                ? 'bg-zinc-100 text-zinc-950 font-semibold border border-zinc-200/80 shadow-2xs'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/60 font-medium'
            }`}
          >
            {currentPage === 'home' && activeSection === 'philosophy' && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            )}
            Showcase
          </button>

          <button
            onClick={() => scrollTo('about')}
            className={`relative flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all duration-150 ${
              currentPage === 'home' && activeSection === 'about'
                ? 'bg-zinc-100 text-zinc-950 font-semibold border border-zinc-200/80 shadow-2xs'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/60 font-medium'
            }`}
          >
            {currentPage === 'home' && activeSection === 'about' && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            )}
            Contact
          </button>
        </nav>

        {/* Right CTA Button: Headphone Available link directly opening email */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:harshsomankar123@gmail.com?subject=What%20you%20need%20to%20build%20-%20Let's%20discuss&body=Hi%20Harsh,%0D%0A%0D%0AI'd%20like%20to%20discuss%20what%20I%20need%20built."
            className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-zinc-950 border border-zinc-200/90 hover:border-zinc-900 text-zinc-800 hover:text-white text-xs font-medium shadow-2xs hover:shadow-sm transition-all duration-200 cursor-pointer"
            title="What you need to build? Let's discuss"
          >
            <div className="relative flex items-center justify-center">
              <Headphones className="w-3.5 h-3.5 text-zinc-700 group-hover:text-emerald-400 transition-colors" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ring-1 ring-white group-hover:ring-zinc-950" />
            </div>
            <span className="tracking-tight font-sans transition-colors">
              Available
            </span>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-white border border-zinc-200/90 flex items-center justify-center text-zinc-700 hover:bg-zinc-100 transition shadow-2xs"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-2 mx-4 bg-white/95 backdrop-blur-xl border border-zinc-200/80 rounded-2xl p-3 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-1">
            {([
              { key: 'home' as const, label: 'Home' },
              { key: 'web' as const, label: 'Web Dev' },
              { key: 'apps' as const, label: 'App Dev' },
              { key: 'agents' as const, label: 'AI Agents' },
            ]).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => { onNavigatePage(key); setMobileOpen(false); }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  currentPage === key
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                }`}
              >
                {currentPage === key && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                )}
                {label}
              </button>
            ))}

            <span className="w-full h-px bg-zinc-100 my-1" />

            {([
              { id: 'impact', label: 'Scale' },
              { id: 'philosophy', label: 'Showcase' },
              { id: 'about', label: 'Contact' },
            ]).map(({ id, label }) => (
              <button
                key={id}
                onClick={() => { scrollTo(id); setMobileOpen(false); }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  currentPage === 'home' && activeSection === id
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                }`}
              >
                {currentPage === 'home' && activeSection === id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                )}
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
