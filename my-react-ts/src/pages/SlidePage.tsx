import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES_DATA } from '../constants';
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Gamepad2, 
  BookOpen,
  Quote
} from 'lucide-react';

interface SlidePageProps {
  onNavigate: (mode: 'study' | 'timeline' | 'game' | 'slide') => void;
}

const SlidePage: React.FC<SlidePageProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const totalSlides = SLIDES_DATA.length;

  const goToSlide = useCallback((index: number, dir: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 400);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1, 'next');
    }
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1, 'prev');
    }
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        onNavigate('study');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, onNavigate]);

  const slide = SLIDES_DATA[currentSlide];

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col">
      {/* Book texture background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d4c4a8' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")` 
        }}
      />

      {/* Top Navigation - Minimal */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-amber-200/50">
        <button
          onClick={() => onNavigate('study')}
          className="flex items-center gap-2 px-4 py-2 text-amber-800 hover:text-amber-950 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="hidden sm:inline font-serif">Trang chủ</span>
        </button>
        
        <div className="flex items-center gap-4">
          <span className="font-serif text-amber-700 text-lg">
            Trang {currentSlide + 1} / {totalSlides}
          </span>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => onNavigate('study')}
            className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors"
          >
            <BookOpen className="w-5 h-5" />
          </button>
          <button
            onClick={() => onNavigate('game')}
            className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors"
          >
            <Gamepad2 className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Book Content Area */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 md:py-12">
        <div 
          className={`w-full max-w-4xl transition-all duration-500 ${
            isAnimating 
              ? direction === 'next' 
                ? 'opacity-0 translate-x-8' 
                : 'opacity-0 -translate-x-8'
              : 'opacity-100 translate-x-0'
          }`}
        >
          {/* Book Page Layout */}
          <article className="relative">
            {/* Chapter Number */}
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-3 text-amber-600">
                <span className="h-px w-12 bg-amber-400"></span>
                <span className="font-serif text-base tracking-[0.3em] uppercase">Chương IV</span>
                <span className="h-px w-12 bg-amber-400"></span>
              </span>
            </div>

            {/* Title */}
            <header className="text-center mb-10">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-amber-950 leading-tight mb-4">
                {slide.title}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
            </header>

            {/* Two Column Layout for content + image */}
            <div className={`${slide.image ? 'md:flex md:gap-12 md:items-start' : ''}`}>
              {/* Image - Book illustration style */}
              {slide.image && (
                <figure className="md:w-2/5 mb-8 md:mb-0 flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="w-full rounded-sm shadow-lg"
                      style={{ 
                        filter: 'sepia(10%)',
                      }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300/f5f0e6/a38b5c?text=Hình+ảnh';
                      }}
                    />
                    {/* Vintage frame effect */}
                    <div className="absolute inset-0 border-4 border-amber-200/30 rounded-sm pointer-events-none"></div>
                  </div>
                  <figcaption className="text-center text-amber-600 text-sm italic mt-3 font-serif">
                    Minh họa
                  </figcaption>
                </figure>
              )}

              {/* Content - Book typography */}
              <div className={`${slide.image ? 'md:w-3/5' : 'max-w-2xl mx-auto'}`}>
                <div className="space-y-4 text-amber-900">
                  {slide.content.map((line, index) => {
                    if (line === '') return <div key={index} className="h-4"></div>;
                    
                    // Section headers (starts with emoji or uppercase)
                    if (line.startsWith('⚠️') || line.startsWith('🎯')) {
                      return (
                        <h3 key={index} className="font-serif text-xl md:text-2xl font-semibold text-amber-800 mt-6 mb-2">
                          {line}
                        </h3>
                      );
                    }
                    
                    // Sub-headers (ends with :)
                    if (line.endsWith(':') && !line.startsWith('✦') && !line.startsWith('✔')) {
                      return (
                        <h4 key={index} className="font-serif text-lg md:text-xl font-semibold text-amber-800 mt-4 mb-1">
                          {line}
                        </h4>
                      );
                    }
                    
                    // Bullet points
                    if (line.startsWith('✦') || line.startsWith('✔')) {
                      const isCheckmark = line.startsWith('✔');
                      return (
                        <div key={index} className="flex items-start gap-3 pl-2">
                          <span className={`mt-2.5 w-2 h-2 rounded-full flex-shrink-0 ${isCheckmark ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                          <p className="font-serif text-lg md:text-xl leading-relaxed text-amber-800">
                            {line.replace(/^[✦✔]\s*/, '')}
                          </p>
                        </div>
                      );
                    }
                    
                    // Indented text
                    if (line.startsWith('   ')) {
                      return (
                        <p key={index} className="font-serif text-lg md:text-xl leading-relaxed text-amber-700 italic pl-8">
                          {line.trim()}
                        </p>
                      );
                    }
                    
                    // Regular paragraph
                    return (
                      <p key={index} className="font-serif text-lg md:text-xl leading-relaxed text-amber-800">
                        {line}
                      </p>
                    );
                  })}
                </div>

                {/* Quote/Highlight - Book style */}
                {slide.highlight && (
                  <blockquote className="mt-10 relative">
                    <Quote className="absolute -top-2 -left-2 w-10 h-10 text-amber-300 opacity-60" />
                    <div className="pl-8 pr-4 py-5 border-l-2 border-amber-400 bg-gradient-to-r from-amber-50 to-transparent">
                      <p className="font-serif text-xl md:text-2xl italic text-amber-700 leading-relaxed">
                        {slide.highlight}
                      </p>
                    </div>
                    <Quote className="absolute -bottom-2 right-4 w-10 h-10 text-amber-300 opacity-60 rotate-180" />
                  </blockquote>
                )}
              </div>
            </div>

            {/* Page decoration */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2 text-amber-400">
                <span className="h-px w-16 bg-amber-300"></span>
                <span className="text-2xl">❧</span>
                <span className="h-px w-16 bg-amber-300"></span>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Bottom Navigation - Book style */}
      <footer className="border-t border-amber-200/50 px-6 py-5">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          {/* Previous */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 font-serif transition-all ${
              currentSlide === 0
                ? 'text-amber-300 cursor-not-allowed'
                : 'text-amber-700 hover:text-amber-900'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Trang trước</span>
          </button>

          {/* Page dots */}
          <div className="flex gap-2 items-center">
            {SLIDES_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index, index > currentSlide ? 'next' : 'prev')}
                className={`transition-all rounded-full ${
                  index === currentSlide
                    ? 'w-6 h-2 bg-amber-600'
                    : 'w-2 h-2 bg-amber-300 hover:bg-amber-400'
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`flex items-center gap-2 font-serif transition-all ${
              currentSlide === totalSlides - 1
                ? 'text-amber-300 cursor-not-allowed'
                : 'text-amber-700 hover:text-amber-900'
            }`}
          >
            <span className="hidden sm:inline">Trang sau</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Keyboard hint */}
        <p className="text-center text-amber-400 text-xs mt-4 hidden md:block font-serif">
          Dùng phím ← → để lật trang • ESC để thoát
        </p>
      </footer>

      {/* Custom font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        
        .font-serif {
          font-family: 'Crimson Text', 'Playfair Display', Georgia, serif;
        }
        
        h1, h2, h3 {
          font-family: 'Playfair Display', Georgia, serif;
        }
      `}</style>
    </div>
  );
};

export default SlidePage;
