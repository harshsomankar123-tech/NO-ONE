import { ArrowLeft, ExternalLink, ShieldCheck, Layers, Cpu, GitFork } from 'lucide-react';
import { AppIconsSlider } from '../components/AppIconsSlider';

interface AppDevPageProps {
  onBack: () => void;
  onOpenSchedule: () => void;
}

export const AppDevPage = ({ onBack, onOpenSchedule }: AppDevPageProps) => {
  const liveApps = [
    {
      title: 'Kiwix Android Ecosystem',
      platform: 'Google Play Store (Millions of Global Users)',
      url: 'https://play.google.com/store/search?q=kiwix&c=apps&hl=en',
      storeId: 'org.kiwix.kiwixmobile',
      desc: 'Lead Android engineer for Kiwix — the premier offline reader bringing Wikipedia, medical encyclopedias, and educational archives to millions in low-connectivity regions. Handled Android SDK 34 migrations, Kotlin Coroutines, and CI instrumentation test suite stabilization.',
      tags: ['Kotlin', 'Android SDK 34', 'ZIM Reader', 'Espresso', 'Coroutines', 'Performance'],
      metrics: 'Millions of Global Users',
      isFlagship: true,
      gradient: 'from-blue-600 via-sky-500 to-emerald-400',
      iconChar: 'K',
      imageSrc: '/app-kiwix.png'
    },
    {
      title: 'Catrobat Mobile Ecosystem (Pocket Code)',
      platform: 'Google Play Store (Educational Creative Coding)',
      url: 'https://play.google.com/store/search?q=catrobat&c=apps&hl=en',
      storeId: 'org.catrobat.catroid',
      desc: 'Lead Android engineer for Catrobat mobile applications — empowering millions of children, teens, and educators worldwide to learn visual programming, animation, and mobile game development directly on smartphones.',
      tags: ['Android', 'Visual Programming', 'Educational Tech', 'Global Scale', 'Community Ecosystem'],
      metrics: 'Global Scale',
      isFlagship: true,
      gradient: 'from-amber-500 via-orange-500 to-rose-500',
      iconChar: 'C',
      imageSrc: '/app-catrobat.png'
    },
    {
      title: 'Winkin',
      platform: 'iOS (Apple App Store) & Android',
      url: 'https://apps.apple.com/app/winkin/id6805588229',
      storeId: 'id6805588229',
      desc: 'Intuitive modern mobile application crafted with Flutter. Features rapid state synchronization, clean micro-interactions, and fluid 60fps performance.',
      tags: ['Flutter', 'Dart', 'iOS Xcode', 'REST API', 'Cross-Platform'],
      metrics: 'Live on Apple App Store',
      isAppStore: true,
      gradient: 'from-purple-600 via-indigo-600 to-pink-500',
      iconChar: 'W',
      imageSrc: '/app-winkin.png'
    },
    {
      title: 'Siddhashram Mobile Ecosystem',
      platform: 'iOS (Apple App Store) & Android (Play Store)',
      url: 'https://apps.apple.com/app/siddhashram/id6803401033',
      storeId: 'id6803401033',
      desc: 'Complete spiritual, media, and community mobile ecosystem. Features production Firebase Phone OTP & Google authentication, Cloud Firestore, Firebase Storage image pipelines, and signed Android Keystore release builds.',
      tags: ['Flutter 3.x', 'Firebase Auth', 'Cloud Firestore', 'Riverpod', 'Signed Keystore'],
      metrics: 'Live on Apple App Store & Google Play',
      isAppStore: true,
      gradient: 'from-amber-600 via-yellow-500 to-emerald-600',
      iconChar: 'S',
      imageSrc: '/app-siddhashram.png'
    },
    {
      title: 'IYKYK — On-Device Computer Vision App',
      platform: 'Android (Kotlin + Jetpack Compose)',
      url: 'https://github.com/harshsomankar123-tech/iykyk',
      storeId: 'com.example.iykyk',
      desc: 'On-device, privacy-preserving video and face processing Android application. Extracts normalized facial embeddings via embedded Google FaceNet TFLite (Inception-ResNet on VGGFace2), detects landmarks with Google ML Kit, clusters identities via HAC with co-occurrence constraints, and renders aesthetic story collages.',
      tags: ['Kotlin', 'Jetpack Compose', 'Google ML Kit', 'FaceNet TFLite', 'HAC Clustering', '<30MB RAM'],
      metrics: '100% Ground Truth Accuracy',
      isFlagship: true,
      gradient: 'from-emerald-600 via-teal-600 to-indigo-700',
      iconChar: 'I'
    },
    {
      title: 'Google Play Store Developer Account (15+ Apps)',
      platform: 'Google Play Console Developer Catalogue',
      url: 'https://play.google.com/store/apps/dev?id=6562992185267472185',
      storeId: '6562992185267472185',
      desc: 'Verified Google Play Developer account featuring over 15+ published Android applications spanning utility tools, community platforms, and healthcare companions.',
      tags: ['Android SDK', 'Gradle', 'Google Play Console', 'Target SDK 34', 'Kotlin/Flutter'],
      metrics: '15+ Published Production Apps',
      isPlayStore: true,
      gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
      iconChar: 'G'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcf9] text-zinc-900 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-6">
        {/* Navigation Breadcrumb & Badge */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-200/60">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-medium text-zinc-700 hover:text-zinc-950 transition py-1.5 px-3.5 rounded-full bg-white border border-zinc-200 shadow-2xs hover:bg-zinc-50"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>15+ Apps Live • 1M+ Users Worldwide</span>
          </div>
        </div>
        {/* Page Hero */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 block mb-3">
            Engineering Practice / Mobile Applications
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-zinc-950 tracking-tight leading-[1.1] mb-5">
            Mobile App Engineering &amp; Architecture
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            15+ mobile applications deployed to the Google Play Store and Apple App Store, including flagship Android systems like Kiwix and Catrobat serving millions of worldwide users.
          </p>
        </div>

        {/* Quick Access Store Portals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          
          {/* Kiwix */}
          <a
            href="https://play.google.com/store/search?q=kiwix&c=apps&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl border border-zinc-200/90 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-zinc-400 transition group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-800 text-[10px] font-sans font-semibold border border-zinc-200">
                  FEATURED • KIWIX
                </span>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-400 p-0.5 shrink-0 shadow-sm">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center overflow-hidden p-1">
                    <img src="/app-kiwix.png" alt="Kiwix" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-serif text-zinc-950 leading-tight">Kiwix Android</h3>
                  <span className="text-[11px] font-sans text-zinc-500 font-medium">1M+ Global Users</span>
                </div>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Offline reader for Wikipedia &amp; medical libraries. Millions of global downloads.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 mt-4 flex items-center justify-between text-xs font-sans text-zinc-800 font-medium">
              <span>Millions of Users</span>
              <span>Open Store ↗</span>
            </div>
          </a>

          {/* Catrobat */}
          <a
            href="https://play.google.com/store/search?q=catrobat&c=apps&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl border border-zinc-200/90 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-zinc-400 transition group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-800 text-[10px] font-sans font-semibold border border-zinc-200">
                  FEATURED • CATROBAT
                </span>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-rose-500 p-0.5 shrink-0 shadow-sm">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center overflow-hidden p-1">
                    <img src="/app-catrobat.png" alt="Catrobat" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-serif text-zinc-950 leading-tight">Catrobat Ecosystem</h3>
                  <span className="text-[11px] font-mono text-emerald-700 font-medium">Pocket Code</span>
                </div>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Visual programming for mobile (Pocket Code). Empowering global youth creators.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 mt-4 flex items-center justify-between text-xs font-mono text-emerald-800 font-medium">
              <span>Google Play</span>
              <span>Open Store ↗</span>
            </div>
          </a>

          {/* Winkin on App Store */}
          <a
            href="https://apps.apple.com/app/winkin/id6805588229"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl border border-zinc-200/80 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-emerald-500/50 transition group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-800 text-[10px] font-mono font-semibold">
                  APPLE APP STORE
                </span>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-emerald-700 transition" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 p-0.5 shrink-0 shadow-sm">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center overflow-hidden p-1">
                    <img src="/app-winkin.png" alt="Winkin" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-serif text-zinc-950 leading-tight">Winkin</h3>
                  <span className="text-[11px] font-mono text-zinc-600 font-medium">iOS Production</span>
                </div>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Published iOS app featuring fluid state transitions and bespoke interaction design.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 mt-4 flex items-center justify-between text-xs font-mono text-zinc-800 font-medium">
              <span>ID: 6805588229</span>
              <span>Open Store ↗</span>
            </div>
          </a>

          {/* Siddhashram on App Store */}
          <a
            href="https://apps.apple.com/app/siddhashram/id6803401033"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl border border-zinc-200/80 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-emerald-500/50 transition group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-800 text-[10px] font-mono font-semibold">
                  APPLE APP STORE
                </span>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-emerald-700 transition" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-emerald-600 p-0.5 shrink-0 shadow-sm">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center overflow-hidden p-1">
                    <img src="/app-siddhashram.png" alt="Siddhashram" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-serif text-zinc-950 leading-tight">Siddhashram</h3>
                  <span className="text-[11px] font-mono text-zinc-600 font-medium">iOS &amp; Android</span>
                </div>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Production Firebase ecosystem with Phone OTP, Cloud Firestore, and release keystores.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 mt-4 flex items-center justify-between text-xs font-mono text-zinc-800 font-medium">
              <span>ID: 6803401033</span>
              <span>Open Store ↗</span>
            </div>
          </a>

        </div>

        {/* Google Play Console Strip Banner */}
        <div className="p-6 bg-[#1c1e22] rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 mb-14 shadow-xl border border-zinc-700/40">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#24262c] border border-zinc-700/50 flex items-center justify-center shrink-0">
              <GitFork className="w-6 h-6 text-zinc-300" />
            </div>
            <div>
              <h4 className="text-lg font-serif font-medium text-white">Google Play Developer Account (15+ Apps)</h4>
              <p className="text-xs text-zinc-300 font-light">Explore our complete catalog of verified Android applications live on the store.</p>
            </div>
          </div>
          <a
            href="https://play.google.com/store/apps/dev?id=6562992185267472185"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-medium text-xs tracking-tight transition shrink-0 flex items-center gap-1.5 shadow-sm"
          >
            <span>View Developer Console</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Technical Architecture Highlights */}
        <div className="bg-white rounded-[2.5rem] border border-zinc-200/80 p-8 sm:p-12 shadow-sm mb-14">
          <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-800 font-semibold mb-3 block">
            Engineering Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-zinc-950 mb-6">
            Mobile Production Architecture Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-zinc-900 mb-1">State & Offline Architecture</h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                Reactive state management with Riverpod, Bloc, and Kotlin Coroutines. Offline-first SQLite local persistence and background cache invalidation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-zinc-900 mb-1">Enterprise Auth & Security</h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                Firebase Phone OTP, Apple Sign-In, Google 1-Tap. Granular Firestore Security Rules and signed Android release keystores.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-zinc-900 mb-1">Store Publishing & CI/CD</h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                Automated Google Play Console & App Store Connect pipelines, metadata localization, ASO, and crash-free session tracking.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed App Cards */}
        <h3 className="text-2xl font-serif text-zinc-950 mb-6">Featured Mobile Applications &amp; Systems</h3>
        <div className="space-y-6 mb-14">
          {liveApps.map((app, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-zinc-200/80 p-7 sm:p-9 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition group">
              <div className="max-w-2xl">
                <div className="flex items-start gap-4 mb-3">
                  {app.imageSrc ? (
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${app.gradient} p-0.5 shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                      <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center overflow-hidden p-1">
                        <img src={app.imageSrc} alt={app.title} className="w-full h-full object-contain" />
                      </div>
                    </div>
                  ) : (
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${app.gradient} text-white font-serif font-bold text-lg flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                      {app.iconChar}
                    </div>
                  )}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5 text-xs font-mono">
                      <span className={`px-2.5 py-0.5 rounded-full font-semibold ${
                        app.isFlagship 
                          ? 'bg-zinc-900 text-white border border-zinc-900 shadow-2xs' 
                          : 'bg-zinc-100 text-zinc-800'
                      }`}>
                        {app.metrics}
                      </span>
                      <span className="text-zinc-500">{app.platform}</span>
                    </div>
                    <h4 className="text-2xl font-serif text-zinc-950">{app.title}</h4>
                  </div>
                </div>

                <p className="text-sm text-zinc-600 leading-relaxed mb-4 font-normal pl-0 sm:pl-16">{app.desc}</p>
                <div className="flex flex-wrap gap-1.5 pl-0 sm:pl-16">
                  {app.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-zinc-50 text-zinc-600 text-xs font-mono border border-zinc-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-medium tracking-tight transition shadow-sm group/btn"
                >
                  <span>Open Store Page</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive App Icons Slider right before CTA strip */}
        <div className="mb-14 bg-zinc-50/70 border border-zinc-200/80 rounded-[2.5rem] p-6 sm:p-8">
          <AppIconsSlider />
        </div>

        {/* CTA Strip */}
        <div className="rounded-3xl bg-[#1c1e22] text-white p-8 sm:p-10 text-center border border-zinc-700/40 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-serif mb-3 text-white">Ready to ship or scale your mobile app?</h3>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto mb-6 font-light">
            From Android codebase modernization and performance tuning to launching new apps on Google Play Store and Apple App Store.
          </p>
          <button
            onClick={onOpenSchedule}
            className="px-6 py-3 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-semibold text-xs tracking-tight transition shadow-lg cursor-pointer"
          >
            Schedule Mobile App Consultation
          </button>
        </div>

      </div>
    </div>
  );
};
