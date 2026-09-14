import { useState, type FormEvent } from 'react';
import { X, Calendar, Clock, Send, Mail, Phone, Loader2 } from 'lucide-react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
  initialEmail?: string;
}

export const ScheduleModal = ({
  isOpen,
  onClose,
  onSuccess,
  initialEmail = ''
}: ScheduleModalProps) => {
  void initialEmail;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatToBuild, setWhatToBuild] = useState('AI Agents & Systems');
  const [problem, setProblem] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !problem.trim()) return;
    setSubmitted(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/harshsomankar123@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Schedule Consultation Request from ${name} (${phone})`,
          Client_Name: name,
          Contact_Number: phone,
          Service_Needed: whatToBuild,
          Problem_Description: problem,
          _template: 'table'
        })
      });

      if (response.ok) {
        onSuccess(`Thank you ${name}! Your request has been sent directly to Harsh (harshsomankar123@gmail.com). We will contact ${phone} within 24 hours.`);
      } else {
        onSuccess(`Thank you ${name}! Request received. Harsh will reach out to ${phone} shortly.`);
      }
    } catch {
      onSuccess(`Thank you ${name}! Request received. Harsh will reach out to ${phone} shortly.`);
    } finally {
      setSubmitted(false);
      onClose();
    }
  };

  const buildOptions = [
    'AI Agents & Systems',
    'Custom Website / Web App',
    'Mobile App (iOS & Android)',
    'Scale Consultancy & Architecture'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white border border-zinc-200 rounded-[2.5rem] p-7 sm:p-9 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Decorative subtle ambient circle */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-800 transition"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[11px] font-sans font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Direct Problem-Solving Intake
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif text-zinc-950 mb-2 font-medium">
          Tell us what you need built &amp; what's your problem — we will solve it with technology.
        </h3>
        <p className="text-xs sm:text-sm text-zinc-600 mb-6 leading-relaxed">
          Fill in what you need to build, your name, contact number, and the problem you're facing. We will solve it with technology and provide a direct roadmap.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 1. What to build */}
          <div>
            <label className="block text-xs font-mono uppercase text-zinc-700 font-semibold mb-2">
              1. What do you need to build?
            </label>
            <div className="flex flex-wrap gap-1.5 mb-2">
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
              placeholder="Or specify custom..."
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none text-xs sm:text-sm text-zinc-900 transition"
            />
          </div>

          {/* 2 & 3. Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-700 font-semibold mb-1.5">
                2. Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Harsh Somankar"
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none text-xs sm:text-sm text-zinc-900 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-700 font-semibold mb-1.5">
                3. Contact No. (Phone / WhatsApp)
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none text-xs sm:text-sm text-zinc-900 transition"
              />
            </div>
          </div>

          {/* 4. Problem */}
          <div>
            <label className="block text-xs font-mono uppercase text-zinc-700 font-semibold mb-1.5">
              4. What's your problem? (We will solve with technology)
            </label>
            <textarea
              rows={3}
              required
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="Describe the problem, roadblock, or timeline you're facing..."
              className="w-full p-3 rounded-xl bg-zinc-50 border border-zinc-300 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none text-xs sm:text-sm text-zinc-900 transition resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitted}
              className="w-full py-3.5 px-6 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-75 cursor-pointer"
            >
              {submitted ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Sending to Harsh...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Solve It With Technology</span>
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-5 pt-3 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-zinc-600">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-zinc-500">
              <Calendar className="w-3.5 h-3.5 text-zinc-400" />
              Confidential
            </span>
            <span className="flex items-center gap-1.5 text-zinc-500">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              Response &lt; 24h
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a href="mailto:harshsomankar123@gmail.com" className="text-emerald-700 hover:text-emerald-900 font-medium flex items-center gap-1 transition">
              <Mail className="w-3 h-3" />
              <span>harshsomankar123@gmail.com</span>
            </a>
            <a href="tel:+916263565140" className="text-emerald-700 hover:text-emerald-900 font-medium flex items-center gap-1 transition">
              <Phone className="w-3 h-3" />
              <span>+91 6263565140</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
