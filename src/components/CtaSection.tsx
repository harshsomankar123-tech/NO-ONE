import { Calendar, Copy, Check } from 'lucide-react';

interface CtaSectionProps {
  onOpenSchedule: () => void;
  onCopyEmail: () => void;
  hasCopied: boolean;
}

export const CtaSection = ({
  onOpenSchedule,
  onCopyEmail,
  hasCopied
}: CtaSectionProps) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] bg-[#1c1e22] text-white p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl border border-zinc-700/40 text-center">
          
          {/* Subtle Ambient Architectural Depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-zinc-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#24262c] border border-zinc-700/60 text-zinc-200 text-xs font-sans tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Where To Go From Here
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.12] mb-6">
              Have a vision, want to grow your business online, <br className="hidden sm:inline" />
              or make your technology better? Let's build it.
            </h2>

            {/* Subtitle */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10 font-light">
              Whether you need to scale your business online, modernize complex legacy systems, launch high-speed web platforms, or deploy autonomous AI agents and mobile apps — we engineer production-ready solutions with extreme efficiency and low cost.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenSchedule}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-semibold text-xs tracking-tight transition flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-zinc-900" />
                <span>Schedule an intro conversation</span>
              </button>

              <button
                onClick={onCopyEmail}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#24262c] hover:bg-[#2c2f37] border border-zinc-700/60 hover:border-zinc-600 text-zinc-200 font-medium text-xs tracking-tight transition flex items-center justify-center gap-2 cursor-pointer"
              >
                {hasCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Email copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>Copy email address</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
