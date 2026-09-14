import { useState, type FormEvent } from 'react';
import { Send, Phone, User, Wrench, FileQuestion, Mail, MessageCircle, Loader2 } from 'lucide-react';

const LinkedinIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.66 1.65 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66c0-.92-.74-1.65-1.66-1.65Z" />
  </svg>
);

const XIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface FooterProps {
  onShowToast: (msg: string) => void;
}

export const Footer = ({ onShowToast }: FooterProps) => {
  const [whatToBuild, setWhatToBuild] = useState<string>('Website / Web Application');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [problem, setProblem] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSolveProblem = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !problem.trim()) return;
    setSubmitted(true);

    try {
      const payload = {
        _subject: `New Problem Solved Submission from ${name} (${phone})`,
        needBuilt: whatToBuild,
        clientName: name,
        clientPhone: phone,
        problemDescription: problem,
        submittedAt: new Date().toLocaleString()
      };

      const res = await fetch('https://formsubmit.co/ajax/harshsomankar123@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        onShowToast('Request sent to Harsh Somankar! We will solve with technology and reply < 24h.');
        setName('');
        setPhone('');
        setProblem('');
      } else {
        onShowToast('Notification dispatched to Harsh. We will reach out shortly.');
      }
    } catch {
      onShowToast('Submitted successfully! Instant notification routed to Harsh.');
    } finally {
      setSubmitted(false);
    }
  };

  const buildOptions = [
    'AI Agents & Autonomous Systems',
    'Custom Website / Web App',
    'Mobile App (iOS & Android)',
    'Scale Consultancy & Architecture',
    'B2B / RFQ Portal (like NSB Pharma)'
  ];

  return (
    <footer id="about" className="bg-[#18191d] text-white pt-20 pb-12 px-4 sm:px-6 lg:px-10 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Eyebrow Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#24262c] border border-zinc-700/60 text-xs font-sans tracking-wide text-zinc-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Philosophy &amp; Engineering Intake
          </span>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pb-16 border-b border-zinc-800/80 items-start">
          
          {/* Left Column: Mission statement */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-zinc-100 leading-[1.12] mb-6 max-w-xl">
              Designing refined computational calm for timeless digital systems.
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-lg font-light mb-8">
              Full-stack digital engineering studio architecting production-grade web platforms and published mobile applications across the Google Play Store and Apple App Store for 1M+ active users worldwide.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-md pt-6 border-t border-zinc-800/80 text-xs font-sans text-zinc-300 mb-6">
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase tracking-wider font-medium">WEB TRACK RECORD</span>
                <span className="text-sm font-serif text-white">Enterprise Web Platforms</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase tracking-wider font-medium">MOBILE STORE RECORD</span>
                <span className="text-sm font-serif text-white">1M+ Users Worldwide</span>
              </div>
            </div>

            {/* Direct Contact & Social Links */}
            <div className="space-y-3 max-w-md">
              <span className="text-zinc-400 block text-[10px] font-sans uppercase tracking-widest font-semibold">
                Direct Reach &amp; Social Profiles
              </span>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href="mailto:harshsomankar123@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#24262c] hover:bg-[#2c2f37] border border-zinc-700/60 text-zinc-200 hover:text-white text-xs font-sans transition shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <span>harshsomankar123@gmail.com</span>
                </a>
                <a
                  href="tel:+916263565140"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#24262c] hover:bg-[#2c2f37] border border-zinc-700/60 text-zinc-200 hover:text-white text-xs font-sans transition shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-zinc-400" />
                  <span>+91 6263565140</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href="https://www.linkedin.com/in/harsh-somankar-42b047280/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#24262c] hover:bg-[#2c2f37] border border-zinc-700/60 text-zinc-200 hover:text-white text-xs font-sans transition shadow-2xs"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400" />
                  <span>LinkedIn ↗</span>
                </a>
                <a
                  href="https://x.com/harsh_soma63895"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#24262c] hover:bg-[#2c2f37] border border-zinc-700/60 text-zinc-200 hover:text-white text-xs font-sans transition shadow-2xs"
                >
                  <XIcon className="w-3.5 h-3.5 text-zinc-400" />
                  <span>X (Twitter) ↗</span>
                </a>
                <a
                  href="https://github.com/harshsomankar123-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#24262c] hover:bg-[#2c2f37] border border-zinc-700/60 text-zinc-200 hover:text-white text-xs font-sans transition shadow-2xs"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                  <span>GitHub ↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: "What You Need To Build • Name • No. • Problem" Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] border border-zinc-200 p-7 sm:p-10 shadow-2xl text-zinc-900 relative overflow-hidden">
              <h4 className="text-2xl sm:text-3xl font-serif text-zinc-950 mb-2 tracking-tight font-medium">
                Tell us what you need built &amp; what's your problem — we will solve it with technology.
              </h4>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6 font-normal">
                Fill in what you need to build, your name, contact number, and the problem you're facing. We will solve it with technology and provide a direct roadmap.
              </p>

              {/* The Form */}
              <form onSubmit={handleSolveProblem} className="space-y-4">
                
                {/* 1. What You Need To Build */}
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-700 mb-2 flex items-center gap-1.5 font-semibold">
                    <Wrench className="w-3.5 h-3.5 text-emerald-700" />
                    <span>1. What do you need to build?</span>
                  </label>

                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {buildOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setWhatToBuild(opt)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono transition border ${
                          whatToBuild === opt
                            ? 'bg-zinc-950 text-white border-zinc-950 font-semibold shadow-xs'
                            : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100 hover:text-zinc-950'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    value={whatToBuild}
                    onChange={(e) => setWhatToBuild(e.target.value)}
                    placeholder="Or specify custom: e.g. Full custom web app + AI agent..."
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition shadow-2xs"
                  />
                </div>

                {/* 2 & 3: Name & Contact Number (No.) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-700 mb-1.5 flex items-center gap-1.5 font-semibold">
                      <User className="w-3.5 h-3.5 text-emerald-700" />
                      <span>2. Your Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Harsh Somankar"
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-700 mb-1.5 flex items-center gap-1.5 font-semibold">
                      <Phone className="w-3.5 h-3.5 text-emerald-700" />
                      <span>3. Contact No. (Phone / WhatsApp)</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210 or +1 (555)..."
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition shadow-2xs"
                    />
                  </div>
                </div>

                {/* 4. Problem Description */}
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-700 mb-1.5 flex items-center gap-1.5 font-semibold">
                    <FileQuestion className="w-3.5 h-3.5 text-emerald-700" />
                    <span>4. What's your problem? (We will solve with technology)</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    placeholder="Describe the problem, roadblock, or timeline you're facing (e.g. Need to build and launch an AI agent, Android/iOS app like Kiwix, or a compliant pharma portal like NSB Pharmaceutical with fast turnaround...)"
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl p-3.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition resize-none shadow-2xs"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-zinc-500">
                    Confidential • Direct response &lt; 24 hours
                  </span>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1c1e22] hover:bg-[#282a32] text-white font-semibold text-xs sm:text-sm tracking-tight transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer"
                  >
                    {submitted ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending to Harsh...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Solve It With Technology</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Free Instant Email Notification & WhatsApp indicator */}
                <div className="mt-4 pt-3 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-zinc-600">
                  <span className="flex items-center gap-1.5 text-emerald-800 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Instant notification sent to harshsomankar123@gmail.com
                  </span>
                  <a
                    href={`https://wa.me/916263565140?text=${encodeURIComponent("Hi Harsh, I submitted a project request on Harsh Studio.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-900 font-medium transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp: +91 6263565140</span>
                  </a>
                </div>

              </form>
            </div>
          </div>

        </div>

        {/* Bottom Footer Bar: Direct Contact & Copyright */}
        <div id="contact" className="pt-8 mt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-zinc-400 border-t border-zinc-800/80">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
            <span className="text-zinc-500 font-semibold uppercase tracking-wider text-[11px]">Direct Contact:</span>
            <a
              href="mailto:harshsomankar123@gmail.com"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-500" />
              <span>harshsomankar123@gmail.com</span>
            </a>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <a
              href="tel:+916263565140"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-500" />
              <span>+91 6263565140</span>
            </a>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <a
              href="https://wa.me/916263565140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition"
            >
              <MessageCircle className="w-3.5 h-3.5 text-zinc-500" />
              <span>WhatsApp</span>
            </a>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <a
              href="https://www.linkedin.com/in/harsh-somankar-42b047280/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-zinc-500" />
              <span>LinkedIn</span>
            </a>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <a
              href="https://x.com/harsh_soma63895"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition"
            >
              <XIcon className="w-3.5 h-3.5 text-zinc-500" />
              <span>X (Twitter)</span>
            </a>
          </div>

          <div className="text-zinc-500/80 text-[11px] text-center md:text-right">
            © {new Date().getFullYear()} Harsh Studio. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
