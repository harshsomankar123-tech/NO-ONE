import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import type { Testimonial } from '../types';

export const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      rating: 5,
      quote: "Harsh engineered our complete digital platform and product catalogue infrastructure for NSB Pharmaceuticals. The website's lightning-fast performance, elegant pharmaceutical presentation, and responsive design across all devices have dramatically elevated our client trust and business inquiries.",
      author: "Bhunesh Somankar",
      role: "Founder & Director",
      company: "NSB Pharmaceuticals"
    },
    {
      id: '2',
      rating: 5,
      quote: "Harsh's contributions to the Catrobat open-source ecosystem demonstrated exceptional engineering rigor, clean code architecture, and profound technical passion. His problem-solving abilities and dedication to software craftsmanship have been truly outstanding.",
      author: "Prof. Dr. Wolfgang Slany",
      role: "Founder & Project Lead",
      company: "Catrobat (TU Graz)"
    },
    {
      id: '3',
      rating: 5,
      quote: "Harsh bridges deep technical engineering with flawless, calm user interfaces. From scalable web systems to high-performance mobile apps and AI agents, his execution and delivery speed are always first-rate.",
      author: "Jessica Sterling",
      role: "Director of Product",
      company: "Intelligent Systems"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-2 block font-medium">
              What Collaborators Say
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-zinc-950 tracking-tight">
              Trusted by Design Visionaries
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 flex items-center justify-center text-zinc-700 transition shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 flex items-center justify-center text-zinc-700 transition shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => {
            const isHighlighted = idx === currentIndex;
            return (
              <div
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                className={`cursor-pointer rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-white border-emerald-500/40 shadow-elevated ring-1 ring-emerald-500/20'
                    : 'bg-white/80 border-zinc-200/80 shadow-xs hover:border-zinc-300'
                }`}
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-emerald-600 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                    ))}
                  </div>

                  <p className="text-sm sm:text-[15px] text-zinc-700 font-normal leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-100">
                  <h4 className="text-sm font-semibold text-zinc-900 font-sans tracking-tight">
                    {t.author}
                  </h4>
                  <p className="text-xs text-zinc-500 font-mono mt-1">
                    {t.role} • <span className="text-emerald-700 font-semibold">{t.company}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
