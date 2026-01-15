import React, { useCallback, useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { CHAPTER_IV_DATA } from '../constants';
import type { ContentSection } from '../types';

const StudyPage: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(CHAPTER_IV_DATA.sections[0].id);
  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [isLoadingAi, setIsLoadingAi] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  const currentSection = CHAPTER_IV_DATA.sections.find(s => s.id === activeSectionId) || CHAPTER_IV_DATA.sections[0];

  const fetchAiInsight = useCallback(async (section: ContentSection) => {
    setIsLoadingAi(true);
    setAiAnalysis('');
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        setAiAnalysis('❌ Vui lòng cấu hình VITE_GEMINI_API_KEY trong file .env.local và restart server');
        setIsLoadingAi(false);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Bạn là một giáo sư chuyên ngành Tư tưởng Hồ Chí Minh. 
      Dựa trên nội dung sau: "${section.subtitle}: ${section.content.join(' ')}", 
      hãy phân tích ngắn gọn ý nghĩa thực tiễn của tư tưởng này trong bối cảnh Việt Nam hiện nay. 
      Hãy trình bày bằng ngôn ngữ trang trọng, súc tích, mang hơi hướng cổ điển.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      setAiAnalysis(response.text || 'Không có phản hồi từ trí tuệ nhân tạo.');
    } catch (error) {
      console.error("AI Error:", error);
      const errorMessage = error instanceof Error ? error.message : 'Không thể kết nối với trí tuệ nhân tạo';
      setAiAnalysis(`Lỗi: ${errorMessage}`);
    } finally {
      setIsLoadingAi(false);
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <nav className="lg:col-span-1 space-y-4">
          <h3 className="heading-font font-bold text-[#8b7355] uppercase text-sm tracking-widest mb-4">Mục lục</h3>
          {CHAPTER_IV_DATA.sections.map((section, index) => {
            const prevSection = index > 0 ? CHAPTER_IV_DATA.sections[index - 1] : null;
            const showTitle = !prevSection || prevSection.title !== section.title;

            return (
              <div key={section.id}>
                {showTitle && (
                  <div className="text-xs font-bold text-[#8b7355] mt-4 mb-2 uppercase tracking-wide">
                    {section.title.split(':')[0]}
                  </div>
                )}
                <button
                  onClick={() => {
                    setActiveSectionId(section.id);
                    setAiAnalysis('');
                  }}
                  className={`w-full text-left p-3 rounded transition-all duration-300 border-l-4 ${activeSectionId === section.id
                    ? 'bg-[#e5dcc3] border-[#8b7355] text-[#4a3728] font-bold shadow-sm'
                    : 'border-transparent text-[#6d4c41] hover:bg-[#f0e6cf]'
                    }`}
                >
                  <div className="text-sm leading-tight">{section.subtitle}</div>
                </button>
              </div>
            );
          })}

          <div className="mt-8 pt-6 border-t border-[#d4c5a1]">
            <div className="text-xs italic text-[#8b7355]">"Dễ mười lần không dân cũng chịu, khó vạn lần dân liệu cũng xong."</div>
          </div>
        </nav>

        {/* Content Area */}
        <main className="lg:col-span-3 min-h-[500px]">
          <div className="animate-fadeIn">
            <h2 className="heading-font text-2xl md:text-3xl text-[#4a3728] font-bold mb-2">
              {currentSection.title}
            </h2>
            <h3 className="text-xl text-[#8b7355] font-semibold mb-6 italic">
              {currentSection.subtitle}
            </h3>

            <div className="space-y-6 text-[#2d1e12] leading-relaxed text-lg text-justify">
              {currentSection.content.map((p, i) => (
                <p key={i} className="first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
                  {p}
                </p>
              ))}
            </div>

            {currentSection.quotes && (
              <div className="mt-8 bg-[#fdfaf3] border-l-4 border-[#8b7355] p-6 italic text-[#4a3728] shadow-inner">
                {currentSection.quotes.map((quote, i) => (
                  <div key={i} className="mb-2">"{quote}"</div>
                ))}
              </div>
            )}

            {/* AI Interaction Section */}
            <div className="mt-12 pt-8 border-t-2 border-dashed border-[#d4c5a1]">
              <button
                onClick={() => fetchAiInsight(currentSection)}
                disabled={isLoadingAi}
                className="flex items-center gap-2 bg-[#8b7355] text-[#fdf6e3] px-6 py-2 rounded-full hover:bg-[#6d4c41] transition-colors shadow-md disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                {isLoadingAi ? 'Đang thỉnh giáo...' : 'Thỉnh giáo phân tích của Giáo sư AI'}
              </button>

              {aiAnalysis && (
                <div className="mt-6 bg-[#f4ecd8] p-6 rounded-lg border border-[#c5b38a] relative animate-slideUp">
                  <div className="absolute -top-3 left-6 bg-[#8b7355] text-white text-[10px] px-2 py-1 rounded uppercase tracking-tighter">Phân tích học thuật</div>
                  <div className="text-[#4a3728] leading-relaxed italic whitespace-pre-wrap">
                    {aiAnalysis}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Floating Search Feature */}
      <div className="fixed bottom-8 right-8 z-50">
        {!showSearch ? (
          <button
            onClick={() => setShowSearch(true)}
            className="bg-[#4a3728] text-[#f4ecd8] w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        ) : (
          <div className="bg-[#fdf6e3] p-4 rounded-xl shadow-2xl border-2 border-[#8b7355] w-80 animate-slideIn">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-[#4a3728]">Tra cứu tư liệu</span>
              <button onClick={() => { setShowSearch(false); setAiAnalysis(''); }} className="text-[#8b7355]">✕</button>
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Nhập câu hỏi của bạn..."
              className="w-full bg-[#f4ecd8] border border-[#d4c5a1] p-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#8b7355]"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const mockSection = {
                    id: 'search',
                    subtitle: 'Tra cứu',
                    title: 'Kết quả tra cứu',
                    content: [query]
                  };
                  fetchAiInsight(mockSection);
                }
              }}
            />
            <p className="text-[10px] mt-2 text-[#8b7355] italic">Nhấn Enter để gửi thắc mắc đến AI</p>
          </div>
        )}
      </div>
    </>
  );
};

export default StudyPage;
