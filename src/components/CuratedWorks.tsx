import { useState } from 'react';
import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

interface CuratedWorksProps {
  onOpenAudioModal?: () => void;
  onOpenSchedule?: () => void;
  onShowToast: (msg: string) => void;
}

export const CuratedWorks = ({
  onShowToast
}: CuratedWorksProps) => {
  const [filter, setFilter] = useState<'all' | 'pharma' | 'ai' | 'apps'>('all');

  return (
    <section id="works" className="pt-8 pb-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Curated Works & Systems
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-zinc-950 tracking-tight">
              Curated Works & Systems
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-2xl font-normal">
              High-fidelity engineering explorations across AI customer support pipelines, on-device mobile vision systems, and enterprise digital portals.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-100/80 rounded-full border border-zinc-200/60 self-start md:self-auto text-xs font-medium">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full transition ${
                filter === 'all'
                  ? 'bg-zinc-900 text-white shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              All Systems
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-4 py-1.5 rounded-full transition ${
                filter === 'ai'
                  ? 'bg-zinc-900 text-white shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              AI Agents & RAG
            </button>
            <button
              onClick={() => setFilter('apps')}
              className={`px-4 py-1.5 rounded-full transition ${
                filter === 'apps'
                  ? 'bg-zinc-900 text-white shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Mobile & Vision
            </button>
            <button
              onClick={() => setFilter('pharma')}
              className={`px-4 py-1.5 rounded-full transition ${
                filter === 'pharma'
                  ? 'bg-zinc-900 text-white shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Healthcare & Portals
            </button>
          </div>
        </div>

        {/* PRIMARY RECENT PROJECT: NSB Pharmaceutical (Live Website) */}
        {(filter === 'all' || filter === 'pharma') && (
          <div className="bg-white rounded-[2.5rem] border border-emerald-600/20 p-6 sm:p-9 lg:p-12 shadow-md hover:shadow-xl transition-all mb-10 group relative overflow-hidden">
            {/* Ambient subtle corner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50/70 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Details & Value */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200/80 text-zinc-800 text-xs font-mono font-medium shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    Recent Live Project
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-mono font-medium">
                    WHO-GMP Certified
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-200/60 text-zinc-600 text-xs font-mono font-medium">
                    B2B RFQ &amp; E-Commerce
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-zinc-950 mb-3 tracking-tight">
                  NSB Pharmaceutical — Clinical Formulations & Digital Portal
                </h3>

                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-8">
                  A clinically validated pharmaceutical portfolio and digital distribution portal engineered under stringent WHO-GMP guidelines for hospitals, clinics, and distributors. Features comprehensive monographs, cold-chain telemetry, and automated B2B quote management for core formulations including Histalin, Carlim, Lactolim, Vert-Go MD, and Meltolim.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-100 mb-8">
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif text-zinc-950">
                      5
                    </div>
                    <div className="text-xs text-zinc-500 mt-1">
                      Clinically Validated Formulations
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif text-emerald-800 font-medium">
                      100%
                    </div>
                    <div className="text-xs text-zinc-500 mt-1">
                      WHO-GMP Compliant Standards
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif text-zinc-950">
                      Multi-Tier
                    </div>
                    <div className="text-xs text-zinc-500 mt-1">
                      Cold-Chain B2B RFQ Ready
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://nsbpharamaceutical.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold tracking-tight transition shadow-md hover:shadow-lg group/btn cursor-pointer"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>

                  <button
                    onClick={() => onShowToast("NSB Pharmaceutical portfolio features 5 core formulations with WHO-GMP certification")}
                    className="text-xs font-medium text-zinc-600 hover:text-zinc-950 transition flex items-center gap-1.5"
                  >
                    <span>Explore Formulations Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                  </button>
                </div>
              </div>

              {/* Right Column: Screenshot in Browser Mockup */}
              <div className="lg:col-span-6 flex flex-col gap-3">
                <a
                  href="https://nsbpharamaceutical.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-2xl overflow-hidden bg-white border border-zinc-300/80 shadow-elevated group/preview transition-transform hover:-translate-y-1"
                >
                  {/* Browser Chrome Header */}
                  <div className="bg-zinc-100/95 border-b border-zinc-200 px-4 py-2.5 flex items-center justify-between text-xs text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                    </div>

                    <div className="bg-white px-4 py-1 rounded-md border border-zinc-200 text-[11px] font-mono text-zinc-600 flex items-center gap-1.5 shadow-xs max-w-xs truncate">
                      <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>nsbpharamaceutical.com</span>
                    </div>

                    <div className="w-6" />
                  </div>

                  {/* Screenshot Image */}
                  <div className="aspect-[16/10] overflow-hidden bg-zinc-50 relative">
                    <img
                      src="/nsb-pharmaceutical.png"
                      alt="NSB Pharmaceutical Formulations Catalog screenshot"
                      className="w-full h-full object-cover object-top transition duration-700 group-hover/preview:scale-103"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/preview:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover/preview:opacity-100 transition-opacity px-4 py-2 rounded-full bg-zinc-950/90 text-white text-xs font-medium backdrop-blur-sm flex items-center gap-2 shadow-lg">
                        <span>Open Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </a>

                {/* Formulations list chip footer */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-zinc-600">
                  <span className="text-zinc-400 text-[10px] uppercase tracking-wider">Catalog:</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-zinc-200 shadow-2xs font-medium">Histalin Syrup</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-zinc-200 shadow-2xs font-medium">Carlim Syrup</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-zinc-200 shadow-2xs font-medium">Lactolim Sachet</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-zinc-200 shadow-2xs font-medium">Vert-Go MD</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-zinc-200 shadow-2xs font-medium">Meltolim</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Featured Case Study: Rani Arts & Teak (Heritage Gallery) */}
        {(filter === 'all') && (
          <div className="bg-white rounded-[2.5rem] border border-amber-500/20 p-6 sm:p-9 lg:p-12 shadow-md hover:shadow-xl transition-all mb-10 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-50/50 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-100/80 text-amber-950 border border-amber-300/60 text-xs font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                    Heritage E-Commerce Live
                  </span>
                  <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-medium">
                    Since 1973
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/50 text-xs font-medium">
                    Antiques & Teak Furniture
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-zinc-950 mb-3 tracking-tight">
                  Rani Arts & Teak — Curators of Timeless Indian Heritage
                </h3>

                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-8">
                  Discover expertly curated antiques, sacred brass idols, and handcrafted teak furniture that bring timeless grandeur to your space. Celebrating over 50 years of heritage curation with editorial presentation.
                </p>

                {/* Metrics from live site */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-100 mb-8">
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif text-zinc-950">
                      50+
                    </div>
                    <div className="text-xs text-zinc-500 mt-1">
                      Years Legacy (Since 1973)
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif text-amber-900 font-medium">
                      5000+
                    </div>
                    <div className="text-xs text-zinc-500 mt-1">
                      Artifacts Curated
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif text-zinc-950">
                      4.8★
                    </div>
                    <div className="text-xs text-zinc-500 mt-1">
                      Google Rating
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://raniartsandtick.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold tracking-tight transition shadow-md hover:shadow-lg group/btn cursor-pointer"
                  >
                    <span>Explore Collection</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>

                  <button
                    onClick={() => onShowToast("Rani Arts & Teak showcases 5000+ artifacts and 50+ years of fine Indian heritage")}
                    className="text-xs font-medium text-zinc-600 hover:text-zinc-950 transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Explore Heritage Story</span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                  </button>
                </div>
              </div>

              {/* Right Column: Screenshot */}
              <div className="lg:col-span-6 flex flex-col gap-3">
                <a
                  href="https://raniartsandtick.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-2xl overflow-hidden bg-[#1c1e22] border border-zinc-700/40 shadow-elevated group/preview transition-transform hover:-translate-y-1 cursor-pointer"
                >
                  {/* Browser Chrome Header */}
                  <div className="bg-[#24262c] border-b border-zinc-700/50 px-4 py-2.5 flex items-center justify-between text-xs text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
                    </div>

                    <div className="bg-[#1c1e22] px-4 py-1 rounded-md border border-zinc-700/60 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5 shadow-xs max-w-xs truncate">
                      <ShieldCheck className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>raniartsandtick.netlify.app</span>
                    </div>

                    <div className="w-6" />
                  </div>

                  {/* Screenshot Image */}
                  <div className="aspect-[16/10] overflow-hidden bg-black relative">
                    <img
                      src="/rani-arts-teak.png"
                      alt="Rani Arts & Teak Heritage Gallery live platform screenshot"
                      className="w-full h-full object-cover object-center transition duration-700 group-hover/preview:scale-103"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/preview:bg-black/15 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover/preview:opacity-100 transition-opacity px-4 py-2 rounded-full bg-[#1c1e22]/95 text-white text-xs font-medium backdrop-blur-sm flex items-center gap-2 shadow-lg">
                        <span>Open Live Gallery</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </a>

                {/* Collections chip footer */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-zinc-600">
                  <span className="text-zinc-400 text-[10px] uppercase tracking-wider">Collections:</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-zinc-200 shadow-2xs font-medium">Antiques</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-zinc-200 shadow-2xs font-medium">Brass Idols</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-zinc-200 shadow-2xs font-medium">Teak Furniture</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-zinc-200 shadow-2xs font-medium">Heritage Decor</span>
                </div>
              </div>

            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Project 1: IYKYK — On-Device Computer Vision & Story Collage App */}
          {(filter === 'all' || filter === 'apps' || filter === 'ai') && (
            <div className="bg-white rounded-[2.5rem] border border-zinc-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group">
              <div>
                {/* Visual Preview Box */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-950 border border-zinc-800 p-5 flex flex-col justify-between mb-6 shadow-inner text-white">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ON-DEVICE CV • FACENET TFLITE
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">
                      STREAMING &lt; 30MB RAM
                    </span>
                  </div>

                  {/* Face Clustering & Landmark Telemetry Mockup */}
                  <div className="relative z-10 my-auto py-2">
                    <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-3">
                      {[
                        { id: '#1', label: 'Asian Girl', count: '4x' },
                        { id: '#2', label: 'Headset', count: '4x' },
                        { id: '#3', label: 'Glasses', count: '4x' },
                        { id: '#4', label: 'Dark Hijab', count: '4x' },
                        { id: '#5', label: 'Cream Hijab', count: '4x' }
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-zinc-900/90 border border-zinc-700/60 rounded-xl p-2 text-center group-hover:border-emerald-500/50 transition"
                        >
                          <div className="w-6 h-6 mx-auto rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[9px] font-mono text-emerald-300 font-bold mb-1">
                            {item.id}
                          </div>
                          <div className="text-[9px] font-medium text-zinc-300 truncate">{item.label}</div>
                          <div className="text-[8px] font-mono text-emerald-400">{item.count} app.</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                      <span>Euler-Z Deskew: Active</span>
                      <span className="text-emerald-400">HAC Distance: 0.48f</span>
                      <span>Laplacian: &gt;12f Valid</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 z-10 pt-2 border-t border-zinc-800/80">
                    <span>CO-OCCURRENCE CONSTRAINTS</span>
                    <span className="text-emerald-400 font-semibold">100% GROUND TRUTH MATCH</span>
                  </div>

                  {/* Grid background effect */}
                  <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Android • Jetpack Compose • Computer Vision
                </div>

                <h3 className="text-2xl font-serif text-zinc-950 mb-2">
                  IYKYK — On-Device Computer Vision &amp; Story Collage App
                </h3>

                <p className="text-sm text-zinc-600 leading-relaxed mb-5 font-normal">
                  An on-device, privacy-preserving Android application processing portrait video clips, extracting normalized embeddings via embedded Google FaceNet TFLite (Inception-ResNet), clustering unique individuals with co-occurrence constraints, and rendering aesthetic Bento-grid story collages.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Kotlin + Compose', 'Google ML Kit', 'FaceNet TFLite', 'HAC Clustering', '< 30MB RAM', 'Android 15 Ready'].map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 text-[11px] font-mono border border-zinc-200/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  100% Ground Truth Accuracy
                </span>
                <a
                  href="https://github.com/harshsomankar123-tech/iykyk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-zinc-950 hover:text-emerald-700 flex items-center gap-1 transition"
                >
                  <span>Explore on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Project 2: Hiver — Production AI Customer Support Agent & Eval Pipeline */}
          {(filter === 'all' || filter === 'ai') && (
            <div className="bg-white rounded-[2.5rem] border border-zinc-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group">
              <div>
                {/* Visual Chart / Telemetry Card */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#f8faf8] border border-zinc-200/70 p-5 flex flex-col justify-between mb-6 shadow-inner">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                        @AppleSupport Golden Eval Benchmark
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-serif text-zinc-900 font-medium">
                          0.847 Intent F1
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-medium">
                          +16x vs Base 0.049
                        </span>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-[10px] font-mono text-emerald-800 font-medium shadow-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      LLM-AS-A-JUDGE
                    </span>
                  </div>

                  {/* Benchmark Telemetry Metric Grid */}
                  <div className="grid grid-cols-3 gap-2.5 my-3">
                    <div className="bg-white rounded-xl p-2.5 border border-zinc-200/80 shadow-2xs">
                      <span className="text-[9px] font-mono uppercase text-zinc-400 block">Groundedness</span>
                      <span className="text-lg font-serif text-emerald-800 font-bold">5.0 / 5.0</span>
                      <span className="text-[9px] font-mono text-zinc-500 block mt-0.5">Zero Hallucination</span>
                    </div>

                    <div className="bg-white rounded-xl p-2.5 border border-zinc-200/80 shadow-2xs">
                      <span className="text-[9px] font-mono uppercase text-zinc-400 block">Cohen's Kappa (κ)</span>
                      <span className="text-lg font-serif text-zinc-900 font-bold">0.627</span>
                      <span className="text-[9px] font-mono text-zinc-500 block mt-0.5">Pearson r: 0.928</span>
                    </div>

                    <div className="bg-white rounded-xl p-2.5 border border-zinc-200/80 shadow-2xs">
                      <span className="text-[9px] font-mono uppercase text-zinc-400 block">Offline Fallback</span>
                      <span className="text-lg font-serif text-zinc-900 font-bold">0.55 ms</span>
                      <span className="text-[9px] font-mono text-zinc-500 block mt-0.5">Sub-ms Deterministic</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-t border-zinc-200/60 pt-2">
                    <span>DUAL-MODE: GEMINI 2.5 FLASH + GPT-4o</span>
                    <span className="text-emerald-800 font-semibold">100% ADJACENT SCORE MATCH</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  AI Agents &bull; Multi-Turn RAG &bull; LLM Benchmark
                </div>

                <h3 className="text-2xl font-serif text-zinc-950 mb-2">
                  Hiver — Production AI Customer Support Agent &amp; Eval Pipeline
                </h3>

                <p className="text-sm text-zinc-600 leading-relaxed mb-5 font-normal">
                  An end-to-end multi-turn AI customer support agent engineered for @AppleSupport. Integrates live LLM synthesis (Google Gemini 2.5 Flash / GPT-4o-mini) with sub-millisecond local deterministic fallback, strict BM25 RAG grounding, and calibrated LLM-as-a-Judge benchmarking.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Dual-Mode RAG', 'Gemini 2.5 Flash', 'GPT-4o-mini', 'LLM-as-a-Judge', '0.55ms Fallback', 'Safety Escalation'].map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 text-[11px] font-mono border border-zinc-200/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  0.847 Intent F1 &bull; 5.0/5.0 Groundedness
                </span>
                <a
                  href="https://github.com/harshsomankar123-tech/Hiver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-zinc-950 hover:text-emerald-700 flex items-center gap-1 transition"
                >
                  <span>Explore on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
