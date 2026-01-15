import React, { useState } from 'react';
import { CHAPTER_IV_DATA } from './constants';
import { StudyPage, TimelinePage, QuizGamePage } from './pages';

type PageMode = 'study' | 'timeline' | 'game';

const App: React.FC = () => {
  const [pageMode, setPageMode] = useState<PageMode>('study');

  // Full page modes
  if (pageMode === 'timeline') {
    return <TimelinePage onNavigate={(mode: PageMode) => setPageMode(mode)} />;
  }
  
  if (pageMode === 'game') {
    return <QuizGamePage onNavigate={(mode: PageMode) => setPageMode(mode)} />;
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
          <div className="flex justify-center gap-3 mt-8 flex-wrap">
            <button
              onClick={() => setPageMode('study')}
              className={`px-5 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                pageMode === 'study'
                  ? 'bg-[#8b7355] text-[#fdf6e3] shadow-lg'
                  : 'bg-[#e5dcc3] text-[#6d4c41] hover:bg-[#d4c5a1]'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Học tập
            </button>
            <button
              onClick={() => setPageMode('timeline')}
              className={`px-5 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                pageMode === 'timeline'
                  ? 'bg-[#8b7355] text-[#fdf6e3] shadow-lg'
                  : 'bg-[#e5dcc3] text-[#6d4c41] hover:bg-[#d4c5a1]'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Hải trình
            </button>
            <button
              onClick={() => setPageMode('game')}
              className={`px-5 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                pageMode === 'game'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200'
              }`}
            >
              <span className="text-lg">🎮</span>
              Game
            </button>
          </div>
        </header>

        {/* Page Content */}
        <StudyPage />

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
