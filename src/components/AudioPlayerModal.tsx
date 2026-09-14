import { useState, useEffect, useRef } from 'react';
import { X, Volume2, VolumeX, Waves, Radio } from 'lucide-react';

interface AudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AudioPlayerModal = ({ isOpen, onClose }: AudioModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [frequencyMode, setFrequencyMode] = useState<'theta' | 'alpha' | 'deep'>('theta');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen && isPlaying) {
      stopAudio();
    }
  }, [isOpen]);

  const startAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.connect(ctx.destination);
      gainNodeRef.current = gain;

      // Base frequency tuned to calming harmonics (e.g. 174 Hz or 216 Hz)
      const baseFreq = frequencyMode === 'theta' ? 174 : frequencyMode === 'alpha' ? 216 : 108;

      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(baseFreq, ctx.currentTime);
      osc1.connect(gain);
      osc1.start();
      osc1Ref.current = osc1;

      // Subtle binaural harmonic detune (+4.5 Hz or +7.2 Hz)
      const osc2 = ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(baseFreq + (frequencyMode === 'theta' ? 4.5 : 7.2), ctx.currentTime);
      const gain2 = ctx.createGain();
      gain2.gain.setValueAtTime(0.04, ctx.currentTime);
      osc2.connect(gain2);
      gain2.connect(gain);
      osc2.start();
      osc2Ref.current = osc2;

      setIsPlaying(true);
    } catch {
      setIsPlaying(true);
    }
  };

  const stopAudio = () => {
    if (osc1Ref.current) {
      try { osc1Ref.current.stop(); } catch {}
      osc1Ref.current = null;
    }
    if (osc2Ref.current) {
      try { osc2Ref.current.stop(); } catch {}
      osc2Ref.current = null;
    }
    if (audioContextRef.current) {
      try { audioContextRef.current.close(); } catch {}
      audioContextRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  // Canvas visualizer animation
  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let phase = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      ctx.lineWidth = 2;
      
      // Draw 3 harmonic waves
      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        const alpha = isPlaying ? (w === 0 ? 0.9 : 0.4) : 0.2;
        ctx.strokeStyle = w === 0 ? `rgba(74, 222, 128, ${alpha})` : `rgba(167, 243, 208, ${alpha})`;

        const amplitude = isPlaying ? (30 - w * 7) : (10 - w * 2);
        const freq = (0.015 + w * 0.008);

        for (let x = 0; x < width; x++) {
          const y = centerY + Math.sin(x * freq + phase + w) * Math.cos(x * 0.004 + phase * 0.5) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Draw particle points
      if (isPlaying) {
        for (let p = 0; p < 8; p++) {
          const px = (width / 8) * p + ((phase * 20) % (width / 8));
          const py = centerY + Math.sin(px * 0.015 + phase) * 25;
          ctx.fillStyle = '#4ade80';
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      phase += isPlaying ? 0.035 : 0.008;
      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#1c1e22] border border-zinc-700/40 rounded-3xl p-7 text-white shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Radio className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-zinc-100">Aetherium Engine</h4>
              <p className="text-xs text-zinc-400">Ambient Spatial Audio Synthesizer</p>
            </div>
          </div>
          <button
            onClick={() => {
              stopAudio();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Visualizer Canvas */}
        <div className="relative w-full h-44 bg-zinc-900/90 rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center mb-6">
          <div className="absolute inset-0 bg-grid-dark opacity-30" />
          <canvas
            ref={canvasRef}
            width={600}
            height={180}
            className="w-full h-full object-cover relative z-10"
          />
          <div className="absolute top-3 left-4 text-[10px] font-mono tracking-widest text-emerald-400/80 flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-zinc-600'}`} />
            {isPlaying ? 'ACTIVE SYNTHESIS • 432Hz HARMONIC TUNING' : 'IDLE • CLICK PLAY TO LISTEN'}
          </div>
        </div>

        {/* Mode Selector */}
        <div className="flex gap-2 mb-6">
          {(['theta', 'alpha', 'deep'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => {
                setFrequencyMode(mode);
                if (isPlaying) {
                  stopAudio();
                  setTimeout(startAudio, 100);
                }
              }}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium capitalize transition border ${
                frequencyMode === mode
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {mode === 'theta' ? 'Theta Wave (174Hz)' : mode === 'alpha' ? 'Alpha Focus (216Hz)' : 'Deep Solfeggio (108Hz)'}
            </button>
          ))}
        </div>

        {/* Playback Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Waves className="w-4 h-4 text-emerald-400" />
            <span>Harmonic Resonance v2.4</span>
          </div>

          <button
            onClick={togglePlay}
            className={`py-3 px-6 rounded-full font-medium text-xs flex items-center gap-2 transition ${
              isPlaying
                ? 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
                : 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-semibold'
            }`}
          >
            {isPlaying ? (
              <>
                <VolumeX className="w-4 h-4" />
                <span>Pause Ambient Audio</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4" />
                <span>Play Serene Audio</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
