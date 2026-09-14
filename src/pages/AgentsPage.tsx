import { ArrowLeft, ExternalLink, ShieldCheck, Bot, Activity, Layers } from 'lucide-react';

interface AgentsPageProps {
  onBack: () => void;
  onOpenSchedule: () => void;
}

export const AgentsPage = ({ onBack, onOpenSchedule }: AgentsPageProps) => {
  const agentCapabilities = [
    {
      title: 'Multi-Turn Dialogue Orchestration',
      icon: Bot,
      desc: 'Stateful conversational memory retaining context across 6+ turns. Handles disambiguation, clarifications, and interactive diagnostic troubleshooting without context degradation.'
    },
    {
      title: 'Strict RAG & Zero-Hallucination Grounding',
      icon: Layers,
      desc: 'Hybrid BM25 and vector knowledge retrieval over verified official documentation. Injects factual evidence directly into prompt context, guaranteeing 5.0/5.0 Groundedness.'
    },
    {
      title: 'Operational Safety & Risk Escalation',
      icon: ShieldCheck,
      desc: 'Deterministic safety classifiers intercepting battery hazards, security breaches, and fraudulent queries, routing immediately to audited escalation protocols.'
    },
    {
      title: 'Calibrated LLM-as-a-Judge Benchmarks',
      icon: Activity,
      desc: 'Rigorous 4-dimensional evaluation pipelines calibrated against human expert annotations (Cohen’s Kappa κ = 0.627, Pearson r = 0.928) for reproducible quality gates.'
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
            <span>Autonomous AI Agents &amp; RAG Systems</span>
          </div>
        </div>

        {/* Page Hero */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 block mb-3">
            Engineering Practice / AI Agents &amp; Evaluation
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-zinc-950 tracking-tight leading-[1.1] mb-5">
            Autonomous AI Agents &amp; Evaluation Systems
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Production-grade multi-turn customer support agents, retrieval-augmented generation (RAG) pipelines, and statistically calibrated LLM evaluation benchmarks engineered for enterprise reliability and zero hallucinations.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white rounded-3xl border border-zinc-200/80 shadow-xs mb-14">
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-emerald-800">0.847</div>
            <div className="text-xs text-zinc-500 font-sans mt-0.5">Intent Macro F1 Score</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-zinc-950">5.0 / 5.0</div>
            <div className="text-xs text-zinc-500 font-sans mt-0.5">LLM Judge Groundedness</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-emerald-800">0.55 ms</div>
            <div className="text-xs text-zinc-500 font-sans mt-0.5">Deterministic Offline Latency</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-zinc-950">0.627 κ</div>
            <div className="text-xs text-zinc-500 font-sans mt-0.5">Cohen's Kappa Agreement</div>
          </div>
        </div>

        {/* Featured Flagship Project: Hiver */}
        <div className="bg-white rounded-[2.5rem] border border-emerald-500/30 p-8 sm:p-12 shadow-sm mb-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-mono font-medium mb-4 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Featured Flagship System
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif text-zinc-950 mb-3 tracking-tight">
                Hiver — Production AI Support Agent &amp; Evaluation Pipeline
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6 font-normal">
                An end-to-end multi-turn AI customer support agent for <strong className="text-zinc-900 font-semibold">@AppleSupport</strong> that converts real-world customer tweets into grounded, brand-aligned, and safe resolutions. Features dual-mode execution (Google Gemini 2.5 Flash &amp; OpenAI GPT-4o-mini + sub-millisecond local failover) and calibrated LLM-as-a-Judge benchmarking across 200 Golden Set examples.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Dual-Mode Architecture', 'Google Gemini 2.5 Flash', 'OpenAI GPT-4o-mini', 'BM25 RAG', 'LLM-as-a-Judge', 'Safety Escalations', '0.55ms Latency'].map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/harshsomankar123-tech/Hiver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold tracking-tight transition shadow-md group"
                >
                  <span>Explore Hiver Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <button
                  onClick={onOpenSchedule}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200/90 text-xs font-semibold tracking-tight transition shadow-2xs cursor-pointer"
                >
                  <span>Consult on Agent Architecture</span>
                </button>
              </div>
            </div>

            {/* Right Telemetry Graphic */}
            <div className="lg:col-span-5">
              <div className="bg-[#1c1e22] rounded-2xl border border-zinc-700/40 p-6 text-white shadow-xl">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-700/50 text-xs font-mono">
                  <span className="text-emerald-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    GOLDEN EVAL BENCHMARK
                  </span>
                  <span className="text-zinc-500">200 EXAMPLES</span>
                </div>

                <div className="space-y-3.5 font-mono text-xs">
                  <div>
                    <div className="flex justify-between text-zinc-300 mb-1">
                      <span>Intent Classification Macro F1</span>
                      <span className="text-emerald-400 font-bold">0.847 (+16x lift)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-[85%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-zinc-300 mb-1">
                      <span>RAG Groundedness (Zero Hallucination)</span>
                      <span className="text-emerald-400 font-bold">5.0 / 5.0 (100%)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-zinc-300 mb-1">
                      <span>Human-Judge Calibration (Pearson r)</span>
                      <span className="text-emerald-400 font-bold">r = 0.928</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-[93%]" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-zinc-700/50 text-[11px] font-mono">
                  <div className="bg-[#24262c] rounded-xl p-2.5 border border-zinc-700/50">
                    <span className="text-zinc-400 block text-[9px]">OFFLINE FALLBACK</span>
                    <span className="text-white font-semibold">0.55 ms Latency</span>
                  </div>
                  <div className="bg-[#24262c] rounded-xl p-2.5 border border-zinc-700/50">
                    <span className="text-zinc-400 block text-[9px]">SAFETY ESCALATION</span>
                    <span className="text-emerald-400 font-semibold">100% Risk Intercept</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Agent Capabilities */}
        <h3 className="text-2xl font-serif text-zinc-950 mb-6">Core Agent Capabilities &amp; Architecture</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {agentCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl border border-zinc-200/80 p-7 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-800 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-serif text-zinc-950 mb-2">{cap.title}</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">{cap.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="rounded-3xl bg-[#1c1e22] text-white p-8 sm:p-10 text-center border border-zinc-700/40 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-serif mb-3 text-white">Ready to architect or deploy your AI Agent system?</h3>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto mb-6 font-light">
            From multi-turn support agents and RAG pipelines to rigorous LLM evaluation benchmarks and operational guardrails.
          </p>
          <button
            onClick={onOpenSchedule}
            className="px-6 py-3 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-semibold text-xs tracking-tight transition shadow-lg cursor-pointer"
          >
            Schedule AI Agent Consultation
          </button>
        </div>

      </div>
    </div>
  );
};
