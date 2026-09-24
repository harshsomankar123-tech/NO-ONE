import { ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react';

interface WebDevPageProps {
  onBack: () => void;
  onOpenSchedule: () => void;
}

export const WebDevPage = ({ onBack, onOpenSchedule }: WebDevPageProps) => {
  const websites = [
    {
      title: 'Redition Pharma Ltd.',
      category: 'Healthcare & Institutional Formulations',
      url: 'https://www.reditionpharma.com/',
      status: 'Live in Production',
      desc: 'WHO-GMP & Schedule M certified institutional pharmaceutical platform engineered with interactive dosage monographs, real-time COA validation, cold-chain logistics telemetry, and an automated RFQ Trade Desk.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'WHO-GMP Schedule M', 'B2B Trade Desk', 'Cold-Chain'],
      metrics: '8+ Core Formulations • WHO-GMP Certified • Pan-India Logistics',
      image: '/redition-pharma.jpg'
    },
    {
      title: 'NSB Pharmaceutical',
      category: 'Healthcare & B2B Portal',
      url: 'https://nsbpharamaceutical.com/',
      status: 'Live in Production',
      desc: 'Clinically validated pharmaceutical portfolio and digital distribution portal with WHO-GMP certification, cold-chain telemetry, and automated B2B quote management.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'B2B RFQ'],
      metrics: '5 Formulations • WHO-GMP Certified',
      image: '/nsb-pharmaceutical.png'
    },
    {
      title: 'Rani Arts & Teak — Curators of Timeless Heritage',
      category: 'Heritage E-Commerce & Curations',
      url: 'https://raniartsandtick.netlify.app/',
      status: 'Live in Production',
      desc: 'Luxurious digital gallery celebrating over 50 years of heritage curation, fine Indian antiques, sacred brass idols, and handcrafted teak furniture.',
      tags: ['Since 1973', '5000+ Artifacts', '4.8★ Rating', 'Fine Teak', 'Netlify Edge'],
      metrics: '50+ Yrs Legacy • 5000+ Artifacts • 4.8★ Rating',
      image: '/rani-arts-tick.png'
    },
    {
      title: 'Rani Heritage Gallery — Original Showcase',
      category: 'Antique Curation & Fine Teak',
      url: 'https://rani-heritage-gallery-original.netlify.app/',
      status: 'Live in Production',
      desc: 'Curators of fine Indian antiques, sacred brass idols, and teak furniture enchanting customers since 1973 with high-craft storytelling.',
      tags: ['Enchanting Since 1973', 'Golden Ganesha', 'Handicrafts', 'Netlify Edge'],
      metrics: 'Since 1973 • Sacred Brass • Netlify Edge',
      image: '/rani-heritage-gallery.png'
    },
    {
      title: 'Hiver — AI Customer Support & Evaluation Pipeline',
      category: 'AI Agents & Multi-Turn RAG',
      url: 'https://github.com/harshsomankar123-tech/Hiver',
      status: 'Production Architecture',
      desc: 'Production-grade AI customer support agent for @AppleSupport. Combines live LLM synthesis (Gemini 2.5 Flash / GPT-4o-mini) with 0.55ms local deterministic fallback and calibrated LLM-as-a-Judge benchmarking.',
      tags: ['Dual-Mode RAG', 'Gemini 2.5 Flash', 'GPT-4o-mini', 'LLM-as-a-Judge', '0.55ms Fallback'],
      metrics: '0.847 Intent F1 • 5.0/5.0 Groundedness',
      image: ''
    },
    {
      title: 'IYKYK — On-Device Computer Vision Pipeline',
      category: 'Mobile & Computer Vision',
      url: 'https://github.com/harshsomankar123-tech/iykyk',
      status: 'Production System',
      desc: 'On-device, privacy-preserving video and face processing architecture utilizing Google ML Kit, embedded FaceNet TFLite (Inception-ResNet), and co-occurrence constrained agglomerative clustering.',
      tags: ['Kotlin', 'Jetpack Compose', 'FaceNet TFLite', 'ML Kit', '<30MB RAM'],
      metrics: '100% Benchmark Accuracy • < 30MB RAM',
      image: ''
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

          <div className="flex items-center gap-2 text-xs font-sans text-zinc-800 bg-zinc-50 px-3.5 py-1.5 rounded-full border border-zinc-200/90 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">Fully SEO Synchronised &amp; High-Performance Architecture</span>
          </div>
        </div>

        {/* Page Hero */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-sans uppercase tracking-widest text-zinc-500 block mb-3 font-semibold">
            Engineering Practice / Web
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-zinc-950 tracking-tight leading-[1.1] mb-5">
            Web Development &amp; Digital Architecture
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Custom web applications, responsive digital platforms, and enterprise portals engineered with rigorous performance budgets, intuitive calm interaction patterns, fully SEO synchronised indexing, and conversion-focused architectures.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white rounded-3xl border border-zinc-200/80 shadow-xs mb-14">
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-zinc-950">100%</div>
            <div className="text-xs text-zinc-600 font-sans mt-0.5 font-medium">Fully SEO Synchronised</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-zinc-950">99+</div>
            <div className="text-xs text-zinc-600 font-sans mt-0.5 font-medium">Lighthouse Performance Target</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-zinc-950">&lt; 0.8s</div>
            <div className="text-xs text-zinc-600 font-sans mt-0.5 font-medium">Sub-Second First Contentful Paint</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-zinc-950">Zero-Defect</div>
            <div className="text-xs text-zinc-600 font-sans mt-0.5 font-medium">Mobile &amp; Responsive Fidelity</div>
          </div>
        </div>

        {/* Featured Live Site 1: Redition Pharma Ltd. */}
        <div className="bg-white rounded-[2.5rem] border border-teal-500/30 p-8 sm:p-12 shadow-sm mb-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-mono font-medium mb-4 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
                Featured Live Deployment
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-zinc-950 mb-4 tracking-tight">
                Redition Pharma Ltd. — WHO-GMP Formulations &amp; Institutional Trade Desk
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6 font-normal">
                Institutional hospital supply and direct healthcare distribution platform engineered under revised Schedule M &amp; WHO-GMP standards. Features comprehensive dosage monographs, real-time COA verification, cold-chain telemetry, and automated B2B quote management.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">React / TypeScript</span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">WHO-GMP &amp; Schedule M</span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">COA Validation</span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">Institutional Trade Desk</span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">Cold-Chain Supply</span>
              </div>
              <a
                href="https://www.reditionpharma.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal-900 hover:bg-teal-800 text-white text-xs font-semibold tracking-tight transition shadow-md group"
              >
                <span>Launch reditionpharma.com</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="lg:col-span-5">
              <a 
                href="https://www.reditionpharma.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden border border-zinc-300 shadow-md group/img hover:shadow-lg transition"
              >
                <img
                  src="/redition-pharma.jpg"
                  alt="Redition Pharma Ltd. live platform screenshot"
                  className="w-full h-auto object-cover group-hover/img:scale-102 transition duration-500"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Featured Live Site 2: NSB Pharmaceutical */}
        <div className="bg-white rounded-[2.5rem] border border-emerald-500/30 p-8 sm:p-12 shadow-sm mb-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-mono font-medium mb-4 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Featured Live Deployment
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-zinc-950 mb-4 tracking-tight">
                NSB Pharmaceutical — Formulations Catalog & B2B Portal
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6 font-normal">
                Manufactured under stringent WHO-GMP guidelines, this digital healthcare platform provides hospitals, distributors, and clinics with instant access to drug monographs, cold-chain logistics, and automated RFQ quotes.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">React / TypeScript</span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">WHO-GMP Compliant</span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">B2B RFQ Engine</span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">Cold-Chain Ready</span>
              </div>
              <a
                href="https://nsbpharamaceutical.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-semibold tracking-tight transition shadow-md group"
              >
                <span>Launch nsbpharamaceutical.com</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="lg:col-span-5">
              <a 
                href="https://nsbpharamaceutical.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden border border-zinc-300 shadow-md group/img hover:shadow-lg transition"
              >
                <img
                  src="/nsb-pharmaceutical.png"
                  alt="NSB Pharmaceutical live platform screenshot"
                  className="w-full h-auto object-cover group-hover/img:scale-102 transition duration-500"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Featured Live Site 2: Rani Arts & Teak */}
        <div className="bg-white rounded-[2.5rem] border border-amber-500/30 p-8 sm:p-12 shadow-sm mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-mono font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping" />
                Featured Live Deployment
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-zinc-950 mb-4 tracking-tight">
                Rani Arts &amp; Teak — Curators of Timeless Indian Heritage
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6 font-normal">
                Discover expertly curated antiques, sacred brass idols, and handcrafted teak furniture that bring timeless grandeur to your space. Celebrating over 50 years of heritage curation and 5000+ artifacts with editorial presentation.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">50+ Years Legacy</span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">5000+ Artifacts Curated</span>
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/60 text-xs font-mono font-semibold">4.8★ Google Rating</span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">Brass Idols &amp; Sculptures</span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">Teak Furniture</span>
              </div>
              <a
                href="https://raniartsandtick.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold tracking-tight transition shadow-md group cursor-pointer"
              >
                <span>Launch raniartsandtick.netlify.app</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="lg:col-span-5">
              <a 
                href="https://raniartsandtick.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden border border-zinc-300 shadow-md group/img hover:shadow-lg transition cursor-pointer"
              >
                <img
                  src="/rani-arts-teak.png"
                  alt="Rani Arts & Teak Heritage Gallery screenshot"
                  className="w-full h-auto object-cover group-hover/img:scale-102 transition duration-500"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Featured Live Site 3: Rani Heritage Gallery (Original Showcase) */}
        <div className="bg-white rounded-[2.5rem] border border-orange-500/30 p-8 sm:p-12 shadow-sm mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-950 text-xs font-mono font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-ping" />
                Featured Live Deployment
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-zinc-950 mb-4 tracking-tight">
                Rani Heritage Gallery — Enchanting You Since 1973
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6 font-normal">
                Curators of sacred Indian antiques, consecrated brass idols, and handcrafted teak furniture. An immersive editorial showcase engineered with high-craft storytelling, gold-accented typography, and global Netlify Edge delivery.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">Enchanting Since 1973</span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">Golden Ganesha Showcase</span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">Sacred Brass Artwares</span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">Handcrafted Teak</span>
                <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-900 border border-orange-200/60 text-xs font-mono font-semibold">Netlify Edge</span>
              </div>
              <a
                href="https://rani-heritage-gallery-original.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold tracking-tight transition shadow-md group cursor-pointer"
              >
                <span>Launch rani-heritage-gallery-original.netlify.app</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="lg:col-span-5">
              <a 
                href="https://rani-heritage-gallery-original.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden border border-zinc-300 shadow-md group/img hover:shadow-lg transition cursor-pointer"
              >
                <img
                  src="/rani-heritage-gallery.png"
                  alt="Rani Heritage Gallery original live showcase screenshot"
                  className="w-full h-auto object-cover group-hover/img:scale-102 transition duration-500"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Full SEO Synchronization Banner & Architecture */}
        <div className="mb-14 p-8 sm:p-10 rounded-[2.5rem] bg-[#1c1e22] text-white border border-zinc-700/40 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24262c] border border-zinc-700/50 text-xs font-sans tracking-wide text-zinc-300 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Comprehensive Search Engine Optimization
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-white mb-4 tracking-tight">
              Architected for Full SEO Synchronization &amp; Global Discoverability.
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light mb-8">
              Every website and digital portal we engineer is built from the foundation up with complete SEO synchronization — ensuring search engines index your brand effortlessly and rank your content at peak visibility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-[#24262c]/90 rounded-2xl p-6 border border-zinc-700/50 shadow-xs">
                <div className="text-white font-serif text-lg mb-2">01 / Structured Data (JSON-LD)</div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Automated Schema.org markup for Google rich snippets, Organization profiles, product catalogs, and search cards.
                </p>
              </div>

              <div className="bg-[#24262c]/90 rounded-2xl p-6 border border-zinc-700/50 shadow-xs">
                <div className="text-white font-serif text-lg mb-2">02 / OpenGraph &amp; Social Cards</div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Pixel-perfect metadata previews synchronized across X (Twitter), LinkedIn, WhatsApp, Facebook, and iMessage.
                </p>
              </div>

              <div className="bg-[#24262c]/90 rounded-2xl p-6 border border-zinc-700/50 shadow-xs">
                <div className="text-white font-serif text-lg mb-2">03 / Core Web Vitals &amp; Crawl Maps</div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  99+ Lighthouse performance scores, sub-second LCP, zero CLS, automated dynamic XML sitemaps, and robots configuration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Web Projects Grid */}
        <h3 className="text-2xl font-serif text-zinc-950 mb-6">Select Web Systems &amp; Portals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {websites.slice(3).map((w, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-zinc-200/80 p-7 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-zinc-500">{w.category}</span>
                  <span className="text-emerald-700 font-medium">{w.status}</span>
                </div>
                <h4 className="text-xl font-serif text-zinc-950 mb-2">{w.title}</h4>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-normal">{w.desc}</p>
              </div>
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">{w.metrics}</span>
                {w.url && w.url !== '#' ? (
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-zinc-900 hover:text-emerald-700 flex items-center gap-1 transition"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={onOpenSchedule}
                    className="text-xs font-semibold text-zinc-900 hover:text-emerald-700 flex items-center gap-1 transition"
                  >
                    <span>Inquire study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="rounded-3xl bg-[#1c1e22] text-white p-8 sm:p-10 text-center border border-zinc-700/40 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-serif mb-3">Ready to build your next web application?</h3>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto mb-6">
            From modern SaaS interfaces to high-traffic pharmaceutical and e-commerce portals.
          </p>
          <button
            onClick={onOpenSchedule}
            className="px-6 py-3 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-semibold text-xs tracking-tight transition shadow-lg cursor-pointer"
          >
            Start a Web Project
          </button>
        </div>

      </div>
    </div>
  );
};
