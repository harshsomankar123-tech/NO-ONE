import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DisciplinesSection } from './components/DisciplinesSection';
import { CuratedWorks } from './components/CuratedWorks';
import { MeasurableImpact } from './components/MeasurableImpact';
import { PillarsSection } from './components/PillarsSection';
import { Testimonials } from './components/Testimonials';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ScheduleModal } from './components/ScheduleModal';
import { AudioPlayerModal } from './components/AudioPlayerModal';
import { Toast } from './components/Toast';
import { WebDevPage } from './pages/WebDevPage';
import { AppDevPage } from './pages/AppDevPage';
import { AgentsPage } from './pages/AgentsPage';
import { DoctorsFoundersSection } from './components/DoctorsFoundersSection';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'web' | 'apps' | 'agents'>('home');
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [initialEmail, setInitialEmail] = useState('');
  const [hasCopied, setHasCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('works');

  // Handle URL hash routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('agent')) {
        setCurrentPage('agents');
        window.scrollTo(0, 0);
      } else if (hash.includes('web')) {
        setCurrentPage('web');
        window.scrollTo(0, 0);
      } else if (hash.includes('app')) {
        setCurrentPage('apps');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: 'home' | 'web' | 'apps' | 'agents') => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle active section on scroll in home
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = ['works', 'impact', 'philosophy', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleStartProject = (email?: string) => {
    if (email) setInitialEmail(email);
    setIsScheduleOpen(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('harshsomankar123@gmail.com');
    setHasCopied(true);
    setToastMessage('Copied harshsomankar123@gmail.com to clipboard');
    setTimeout(() => setHasCopied(false), 3000);
  };

  const handleExploreWork = () => {
    if (currentPage !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById('works');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById('works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9] text-zinc-900 font-sans selection:bg-emerald-900 selection:text-white relative">
      {/* Top Navbar */}
      <Navbar
        onOpenSchedule={() => setIsScheduleOpen(true)}
        activeSection={activeSection}
        currentPage={currentPage}
        onNavigatePage={navigateTo}
      />

      {/* Render Page View */}
      {currentPage === 'web' ? (
        <WebDevPage
          onBack={() => navigateTo('home')}
          onOpenSchedule={() => setIsScheduleOpen(true)}
        />
      ) : currentPage === 'apps' ? (
        <AppDevPage
          onBack={() => navigateTo('home')}
          onOpenSchedule={() => setIsScheduleOpen(true)}
        />
      ) : currentPage === 'agents' ? (
        <AgentsPage
          onBack={() => navigateTo('home')}
          onOpenSchedule={() => setIsScheduleOpen(true)}
        />
      ) : (
        <main>
          {/* Hero Section with Display Heading & Hero Card */}
          <HeroSection
            onStartProject={handleStartProject}
            onExploreWork={handleExploreWork}
            onNavigateWeb={() => navigateTo('web')}
            onNavigateApps={() => navigateTo('apps')}
          />

          {/* Disciplines Showcase: Web (30+ sites) & Mobile (15+ apps) */}
          <DisciplinesSection
            onNavigateWeb={() => navigateTo('web')}
            onNavigateApps={() => navigateTo('apps')}
          />

          {/* Dedicated Section: For Doctors & Founders */}
          <DoctorsFoundersSection
            onOpenSchedule={() => setIsScheduleOpen(true)}
          />

          {/* Curated Works & Systems (featuring NSB Pharmaceutical at top) */}
          <CuratedWorks
            onOpenAudioModal={() => setIsAudioModalOpen(true)}
            onOpenSchedule={() => setIsScheduleOpen(true)}
            onShowToast={(msg) => setToastMessage(msg)}
          />

          {/* Measurable Design Outcomes & Business Scale (Deep Emerald Section) */}
          <MeasurableImpact onOpenSchedule={() => setIsScheduleOpen(true)} />

          {/* The Three Pillars of Serene Software */}
          <PillarsSection />

          {/* Testimonials Carousel */}
          <Testimonials />

          {/* Call to Action Banner */}
          <CtaSection
            onOpenSchedule={() => setIsScheduleOpen(true)}
            onCopyEmail={handleCopyEmail}
            hasCopied={hasCopied}
          />
        </main>
      )}

      {/* Footer with Philosophy, Newsletter, and Live Clock */}
      <Footer onShowToast={(msg) => setToastMessage(msg)} />

      {/* Modals & Overlays */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        onSuccess={(msg) => setToastMessage(msg)}
        initialEmail={initialEmail}
      />

      <AudioPlayerModal
        isOpen={isAudioModalOpen}
        onClose={() => setIsAudioModalOpen(false)}
      />

      {/* Toast Feedback */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}

export default App;
