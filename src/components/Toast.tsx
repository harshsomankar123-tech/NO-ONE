import { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export const Toast = ({ message, onClose, duration = 3500 }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-zinc-900/95 text-white px-5 py-3.5 rounded-full shadow-2xl backdrop-blur-md border border-white/10 animate-fade-in text-sm font-sans tracking-tight">
      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
        <CheckCircle2 className="w-3.5 h-3.5" />
      </div>
      <span>{message}</span>
      <button 
        onClick={onClose} 
        className="ml-2 text-zinc-400 hover:text-white transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
