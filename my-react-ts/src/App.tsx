import React, { useState } from 'react';
import { CHAPTER_IV_DATA } from './constants';
import { StudyPage, TimelinePage, QuizGamePage, SlidePage } from './pages';
import { BookOpen, Map, Gamepad2, Presentation } from 'lucide-react';

type PageMode = 'study' | 'timeline' | 'game' | 'slide';

const App: React.FC = () => {
  const [pageMode, setPageMode] = useState<PageMode>('study');

  // Full page modes
  if (pageMode === 'timeline') {
    return <TimelinePage onNavigate={(mode: PageMode) => setPageMode(mode)} />;
  }

  if (pageMode === 'game') {
    return <QuizGamePage onNavigate={(mode: PageMode) => setPageMode(mode)} />;
  }

  if (pageMode === 'slide') {
    return <SlidePage onNavigate={(mode: PageMode) => setPageMode(mode)} />;
  }

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center relative">
      {/* Background Overlay for Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-[-1]"
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/parchment.png')` }}></div>

      {/* Main Container */}
      <div className="max-w-5xl w-full vintage-paper border-[12px] border-[#d4c5a1] p-6 md:p-12 relative overflow-hidden">

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#8b7355] opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#8b7355] opacity-40"></div>

        {/* Header */}
        <header className="text-center mb-12 border-b-2 border-[#8b7355] pb-8">
          <h1 className="heading-font text-3xl md:text-5xl font-bold text-[#4a3728] mb-4 uppercase tracking-tighter">
            Tư tưởng Hồ Chí Minh
          </h1>
          <p className="text-[#6d4c41] italic text-lg md:text-xl max-w-2xl mx-auto">
            "{CHAPTER_IV_DATA.title}"
          </p>

          {/* Navigation Tabs */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <button
              onClick={() => setPageMode('study')}
              className={`px-6 py-3.5 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2.5 ${pageMode === 'study'
                ? 'bg-[#8b7355] text-[#fdf6e3] shadow-lg'
                : 'bg-[#e5dcc3] text-[#6d4c41] hover:bg-[#d4c5a1]'
                }`}
            >
              <BookOpen className="w-6 h-6" />
              Học tập
            </button>
            <button
              onClick={() => setPageMode('timeline')}
              className="px-6 py-3.5 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2.5 bg-[#e5dcc3] text-[#6d4c41] hover:bg-[#d4c5a1]"
            >
              <Map className="w-6 h-6" />
              Hải trình
            </button>
            <button
              onClick={() => setPageMode('game')}
              className="px-6 py-3.5 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2.5 bg-[#e5dcc3] text-[#6d4c41] hover:bg-[#d4c5a1]"
            >
              <Gamepad2 className="w-6 h-6" />
              Game
            </button>
            <button
              onClick={() => setPageMode('slide')}
              className="px-6 py-3.5 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2.5 bg-[#e5dcc3] text-[#6d4c41] hover:bg-[#d4c5a1]"
            >
              <Presentation className="w-6 h-6" />
              Slide
            </button>
          </div>
        </header>

        {/* Page Content */}
        {pageMode === 'study' && <StudyPage />}

        {/* Footer info */}
        <footer className="mt-16 text-center border-t border-[#d4c5a1] pt-8 text-[#8b7355] text-sm italic">
          <p>© 2024 - Tài liệu học tập điện tử chuyên đề Tư tưởng Hồ Chí Minh</p>
          <p className="mt-2">"Học để làm việc, làm người, làm cán bộ. Học để phụng sự đoàn thể, giai cấp và nhân dân, Tổ quốc và nhân loại."</p>
        </footer>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slideUp { animation: slideUp 0.5s ease-out forwards; }
        .animate-slideIn { animation: slideIn 0.3s ease-out forwards; }
        .wave-animation { animation: wave 8s linear infinite; }
      `}</style>
    </div>
  );
};

export default App;
