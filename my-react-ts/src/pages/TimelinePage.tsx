import React, { useState } from 'react';
import { TIMELINE_DATA } from '../constants';

interface TimelinePageProps {
  onNavigate: (mode: 'study' | 'timeline' | 'game' | 'slide') => void;
}

// Ship SVG Component - Clean sailboat design
const ShipIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Sail */}
    <path d="M24 8 L24 32 L38 32 C36 24 30 14 24 8Z" fill="#FFFFFF" stroke="#C4A77D" strokeWidth="1.5" />
    {/* Mast */}
    <line x1="24" y1="6" x2="24" y2="34" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
    {/* Flag */}
    <path d="M24 6 L24 10 L18 8 Z" fill="#E53935" />
    {/* Hull */}
    <path d="M10 34 L14 42 L34 42 L38 34 Z" fill="#6D4C41" stroke="#4E342E" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Hull stripe */}
    <line x1="13" y1="38" x2="35" y2="38" stroke="#8D6E63" strokeWidth="1.5" />
    {/* Water reflection */}
    <ellipse cx="24" cy="44" rx="16" ry="2" fill="#4FC3F7" opacity="0.3" />
  </svg>
);

// Icon Components
const BookIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const ClipboardIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const CompassIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </svg>
);

const MapIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

const AnchorIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8V4m0 4a2 2 0 100 4 2 2 0 000-4zm0 4v8m-4-4l4 4 4-4M6 12H4a8 8 0 0016 0h-2" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

// Period icons as SVG components
const periodIcons: { [key: number]: React.ReactNode } = {
  0: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 3.62 13.38 2.5 12 2.5S9.5 3.62 9.5 5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z" />
    </svg>
  ),
  1: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  2: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 23c-3.87 0-7-3.13-7-7 0-2.38 1.19-4.47 3-5.74V9c0-2.76 2.24-5 5-5s5 2.24 5 5v1.26c1.81 1.27 3 3.36 3 5.74 0 3.87-3.13 7-7 7z" />
    </svg>
  ),
  3: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
    </svg>
  ),
  4: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};


// Island positions (in percentages - same as island rendering)
const islandPositions = [
  { x: 6, y: 50 },   // 1890-1911
  { x: 24, y: 38 },  // 1911-1920
  { x: 46, y: 55 },  // 1920-1930
  { x: 70, y: 35 },  // 1930-1945
  { x: 92, y: 42 }, // 1945-1969
];

const TimelinePage: React.FC<TimelinePageProps> = ({ onNavigate }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [shipPosition, setShipPosition] = useState({ x: 2, y: 85 }); // Starting position (percentage)
  const [isShipMoving, setIsShipMoving] = useState(false);

  const selectedPeriodData = TIMELINE_DATA.find(p => p.id === selectedPeriod);

  const handleIslandClick = (periodId: string) => {
    if (selectedPeriod === periodId) {
      setSelectedPeriod(null);
      setSelectedEvent(null);
      // Return ship to start
      setIsShipMoving(true);
      setShipPosition({ x: 2, y: 85 });
      setTimeout(() => setIsShipMoving(false), 1500);
    } else {
      setSelectedPeriod(periodId);
      setSelectedEvent(null);
      // Move ship to selected island
      const periodIndex = TIMELINE_DATA.findIndex(p => p.id === periodId);
      if (periodIndex !== -1) {
        setIsShipMoving(true);
        const targetPos = islandPositions[periodIndex];
        // Position ship exactly at the island (slightly below for visual effect)
        setShipPosition({
          x: targetPos.x,
          y: targetPos.y + 18 // Slightly below the island
        });
        // Reset moving state after animation
        setTimeout(() => setIsShipMoving(false), 1500);
      }
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0"
        style={{
          background: 'linear-gradient(180deg, #d4e4ed 0%, #a8c5d8 30%, #6a9ab8 60%, #4a7a98 80%, #3a6a88 100%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">

        {/* Top Navigation */}
        <nav className="sticky top-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-sm border-b border-[#d4c5a1] shadow-sm">
          <div className="flex items-center justify-between px-4 py-2">
            {/* Back Button */}
            <button
              onClick={() => onNavigate('study')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#8b7355] text-white hover:bg-[#6d4c41] transition-colors text-sm font-medium"
            >
              <ArrowLeftIcon />
              <span className="hidden sm:inline">Trang chủ</span>
            </button>

            {/* Title */}
            <div className="flex items-center gap-2 text-[#4a3728]">
              <MapIcon />
              <h1 className="heading-font text-base md:text-lg font-bold">
                Bản Đồ Hải Trình Tư Tưởng
              </h1>
              <AnchorIcon />
            </div>

            {/* Right Navigation */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => onNavigate('study')}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#e5dcc3] text-[#6d4c41] hover:bg-[#d4c5a1] transition-colors text-xs"
              >
                <BookIcon />
                <span className="hidden sm:inline">Học</span>
              </button>
              <button
                onClick={() => onNavigate('game')}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#e5dcc3] text-[#6d4c41] hover:bg-[#d4c5a1] transition-colors text-xs"
              >
                <ClipboardIcon />
                <span className="hidden sm:inline">Ôn tập</span>
              </button>
            </div>
          </div>

          {/* Subtitle */}
          <div className="text-center pb-1.5 text-[#8b7355] text-[10px] italic">
            Cuộc hành trình vĩ đại từ Kim Liên đến khắp năm châu (1890 - 1969)
          </div>
        </nav>

        {/* Main Map Area */}
        <div className="flex-1 px-2 py-3">
          {/* Horizontal Scrollable Map */}
          <div className="overflow-x-auto pb-2">
            <div
              className="relative min-w-[1200px] h-[340px] rounded-xl overflow-hidden border-2 border-[#8b7355]/30"
              style={{
                background: 'linear-gradient(180deg, #7ab8d4 0%, #5a98b4 30%, #4a8aa8 60%, #3a7a98 100%)',
              }}
            >
              {/* Ocean waves overlay */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 12.5 5, 25 10 T 50 10 T 75 10 T 100 10' stroke='%23ffffff' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
                  backgroundSize: '100px 20px',
                  animation: 'oceanWave 6s linear infinite',
                }}
              />

              {/* Compass Rose */}
              <div className="absolute top-2 right-2 w-12 h-12 rounded-full bg-[#f5f0e8]/90 border-2 border-[#8b7355] shadow-lg flex items-center justify-center text-[#8b7355]">
                <CompassIcon />
              </div>

              {/* Map Title Banner */}
              <div className="absolute top-2 left-2 bg-[#f5f0e8]/95 px-3 py-2 rounded-lg border border-[#8b7355]/50 shadow">
                <div className="text-[11px] font-bold text-[#8b7355] uppercase tracking-wider">Hải trình lịch sử</div>
                <div className="heading-font text-sm font-bold text-[#4a3728]">1890 → 1969</div>
              </div>

              {/* Journey Path SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="25%" stopColor="#60a5fa" />
                    <stop offset="50%" stopColor="#f97316" />
                    <stop offset="75%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                {/* Main dashed path */}
                <path
                  d="M -150 420 Q -30 300, 72 190 C 130 150, 200 180, 288 144 S 420 180, 552 209 S 700 160, 840 133 S 980 150, 1104 155 L 1800 155"
                  stroke="url(#pathGradient)"
                  strokeWidth="6"
                  strokeDasharray="18 8"
                  fill="none"
                  opacity="0.9"
                  strokeLinecap="round"
                />
                {/* Arrow head at end */}
                <g transform="translate(1800, 152)">
                  {/* Arrow shadow */}
                  <polygon
                    points="0,-15 0,15 35,0"
                    fill="rgba(0,0,0,0.25)"
                    transform="translate(2, 2)"
                  />
                  {/* Arrow body */}
                  <polygon
                    points="0,-15 0,15 35,0"
                    fill="#8b5cf6"
                  />
                  {/* Arrow highlight */}
                  <polygon
                    points="0,-15 0,0 28,-5"
                    fill="#a78bfa"
                    opacity="0.5"
                  />
                  {/* Arrow outline */}
                  <polygon
                    points="0,-15 0,15 35,0"
                    fill="none"
                    stroke="#6d28d9"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>

              {/* Animated Ship */}
              <div
                className={`absolute z-20 transition-all ${isShipMoving ? 'duration-1500' : 'duration-300'} ease-in-out`}
                style={{
                  left: `${shipPosition.x}%`,
                  top: `${shipPosition.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className={`${isShipMoving ? 'animate-sailing' : 'animate-bobbing'}`}>
                  <ShipIcon className="w-12 h-12 drop-shadow-lg" />
                </div>
                {/* Ship wake/trail */}
                {isShipMoving && (
                  <div className="absolute top-6 -left-6 w-10 h-1.5 bg-gradient-to-l from-white/50 to-transparent rounded-full animate-wake" />
                )}
              </div>

              {/* Period Islands */}
              {TIMELINE_DATA.map((period, index) => {
                const positions = [
                  { x: 6, y: 50, size: 65 },
                  { x: 24, y: 38, size: 70 },
                  { x: 46, y: 55, size: 75 },
                  { x: 70, y: 35, size: 80 },
                  { x: 92, y: 42, size: 85 },
                ];

                const pos = positions[index];
                const isSelected = selectedPeriod === period.id;

                return (
                  <button
                    key={period.id}
                    onClick={() => handleIslandClick(period.id)}
                    className={`absolute transition-all duration-300 group ${isSelected ? 'z-30 scale-110' : 'z-10 hover:scale-105 hover:z-20'
                      }`}
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Island Glow */}
                    {isSelected && (
                      <div
                        className="absolute inset-0 rounded-full blur-lg opacity-60 animate-pulse"
                        style={{
                          backgroundColor: period.color,
                          width: pos.size * 1.4,
                          height: pos.size,
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    )}

                    {/* Island Shape */}
                    <div
                      className="relative"
                      style={{ width: pos.size, height: pos.size * 0.55 }}
                    >
                      <div
                        className="absolute inset-0 rounded-[45%_55%_50%_50%/55%_50%_50%_45%] shadow-xl"
                        style={{
                          background: `radial-gradient(ellipse at 40% 30%, ${period.color}cc 0%, ${period.color} 70%)`,
                          boxShadow: isSelected
                            ? `0 0 30px ${period.color}80, 0 8px 20px rgba(0,0,0,0.3)`
                            : '0 6px 15px rgba(0,0,0,0.25)',
                        }}
                      />

                      {/* Beach */}
                      <div
                        className="absolute inset-x-2 bottom-0 h-1.5 rounded-b-full opacity-40"
                        style={{ background: 'linear-gradient(to top, #f5deb3, transparent)' }}
                      />

                      {/* Center Icon */}
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white/40"
                        style={{ backgroundColor: period.color }}
                      >
                        {periodIcons[index]}
                      </div>

                      {/* Label */}
                      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#f5f0e8]/95 px-2 py-1 rounded text-[11px] font-bold shadow border border-[#8b7355]/30"
                        style={{ color: period.color }}
                      >
                        {period.period}
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* Decorative small islands */}
              <div className="absolute left-[15%] top-[75%] opacity-25">
                <svg className="w-5 h-5 text-[#5a7a5a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L8 8h8l-4-6zM8 8L4 14h8l-4-6z" />
                </svg>
              </div>
              <div className="absolute left-[35%] top-[80%] opacity-20">
                <svg className="w-4 h-4 text-[#7a7a7a]" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                </svg>
              </div>
              <div className="absolute left-[60%] top-[78%] opacity-25">
                <svg className="w-5 h-5 text-[#5a7a5a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L8 8h8l-4-6z" />
                </svg>
              </div>
              <div className="absolute left-[80%] top-[75%] opacity-20">
                <svg className="w-4 h-4 text-[#6a8a6a]" fill="currentColor" viewBox="0 0 24 24">
                  <ellipse cx="12" cy="12" rx="10" ry="6" />
                </svg>
              </div>

              {/* Legend */}
              <div className="absolute bottom-2 left-2 bg-[#f5f0e8]/90 px-2 py-1.5 rounded border border-[#8b7355]/30 shadow-sm">
                <div className="text-[9px] font-bold text-[#8b7355] uppercase tracking-wider mb-1">Chú thích</div>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                  {TIMELINE_DATA.map((period) => (
                    <button
                      key={period.id}
                      onClick={() => handleIslandClick(period.id)}
                      className="flex items-center gap-1 hover:opacity-70 transition-opacity"
                    >
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: period.color }} />
                      <span className="text-[8px] text-[#4a3728] font-medium">{period.period.replace(' – ', '-')}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Ship instruction */}
              <div className="absolute bottom-2 right-2 bg-[#f5f0e8]/90 px-3 py-1.5 rounded text-[10px] text-[#6d4c41] italic border border-[#d4c5a1]">
                Nhấn đảo để tàu di chuyển đến
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="text-center mt-1 text-[#6d4c41] text-[10px] flex items-center justify-center gap-2">
            <span>←</span>
            <span className="italic">Kéo ngang để khám phá bản đồ</span>
            <span>→</span>
          </div>

          {/* Selected Period Details */}
          {selectedPeriodData && (
            <div className="mt-3 animate-slideUp">
              <div
                className="rounded-xl p-3 border bg-white/95 backdrop-blur-sm shadow-lg"
                style={{ borderColor: selectedPeriodData.color }}
              >
                {/* Period Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b" style={{ borderColor: `${selectedPeriodData.color}30` }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow text-lg"
                    style={{ backgroundColor: selectedPeriodData.color }}
                  >
                    {periodIcons[TIMELINE_DATA.indexOf(selectedPeriodData)]}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider" style={{ color: selectedPeriodData.color }}>
                      {selectedPeriodData.period}
                    </div>
                    <h3 className="heading-font text-base md:text-lg font-bold text-[#4a3728]">
                      {selectedPeriodData.theme}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleIslandClick(selectedPeriodData.id)}
                    className="text-[#8b7355] hover:text-[#4a3728] p-1 rounded-lg hover:bg-[#f0e6cf] transition-colors"
                  >
                    <CloseIcon />
                  </button>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {selectedPeriodData.events.map((event, eventIndex) => {
                    const isEventSelected = selectedEvent === `${selectedPeriodData.id}-${eventIndex}`;

                    return (
                      <button
                        key={eventIndex}
                        onClick={() => setSelectedEvent(isEventSelected ? null : `${selectedPeriodData.id}-${eventIndex}`)}
                        className={`text-left p-2 rounded-lg border transition-all duration-200 ${isEventSelected ? 'bg-[#f4ecd8] shadow' : 'bg-[#fdfaf3] hover:bg-[#f4ecd8]'
                          }`}
                        style={{ borderColor: isEventSelected ? selectedPeriodData.color : '#e5dcc3' }}
                      >
                        <div className="flex items-start gap-1.5">
                          {/* Thumbnail or icon */}
                          {event.image ? (
                            <div
                              className="w-10 h-10 rounded-lg flex-shrink-0 shadow-sm overflow-hidden border"
                              style={{ borderColor: selectedPeriodData.color }}
                            >
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-white" style="background-color: ${selectedPeriodData.color}">${event.icon}</div>`;
                                }}
                              />
                            </div>
                          ) : (
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-sm text-lg"
                              style={{ backgroundColor: selectedPeriodData.color }}
                            >
                              {event.icon}
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1 mb-1">
                              <span
                                className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                                style={{ backgroundColor: `${selectedPeriodData.color}20`, color: selectedPeriodData.color }}
                              >
                                {event.year}
                              </span>
                            </div>
                            <h4 className="font-bold text-[#4a3728] text-xs">{event.title}</h4>
                            <p className="text-[#6d4c41] text-[11px] mt-1 line-clamp-2">{event.description}</p>

                            {isEventSelected && (
                              <div className="mt-1.5 pt-1.5 border-t border-[#e5dcc3] animate-slideUp">
                                {/* Historical Image */}
                                {event.image && (
                                  <div className="mb-2 rounded-lg overflow-hidden border border-[#d4c5a1] shadow-sm">
                                    <img
                                      src={event.image}
                                      alt={event.title}
                                      className="w-full h-24 object-cover"
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                      }}
                                    />
                                  </div>
                                )}
                                <ul className="space-y-1">
                                  {event.details.map((detail, i) => (
                                    <li key={i} className="flex items-start gap-1.5 text-[11px] text-[#4a3728]">
                                      <span style={{ color: selectedPeriodData.color }}>•</span>
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                                {event.highlight && (
                                  <div
                                    className="mt-2 p-1.5 rounded text-[11px] italic"
                                    style={{ backgroundColor: `${selectedPeriodData.color}15`, color: '#4a3728' }}
                                  >
                                    → {event.highlight}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                          <ChevronDownIcon />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Prompt */}
          {!selectedPeriod && (
            <div className="mt-3 text-center">
              <div className="inline-flex items-center gap-2 bg-[#f5f0e8]/90 px-3 py-1.5 rounded-lg border border-[#d4c5a1] shadow-sm">
                <ShipIcon className="w-8 h-8" />
                <p className="text-[#6d4c41] text-[10px]">
                  Nhấn vào đảo để con tàu di chuyển đến và khám phá chi tiết
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes oceanWave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100px); }
        }
        @keyframes bobbing {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-5px) rotate(2deg); }
        }
        @keyframes sailing {
          0% { transform: translateY(0) rotate(-3deg); }
          25% { transform: translateY(-8px) rotate(2deg); }
          50% { transform: translateY(-3px) rotate(-2deg); }
          75% { transform: translateY(-6px) rotate(3deg); }
          100% { transform: translateY(0) rotate(-2deg); }
        }
        @keyframes wake {
          0% { opacity: 0.6; width: 12px; }
          100% { opacity: 0; width: 40px; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-bobbing { animation: bobbing 3s ease-in-out infinite; }
        .animate-sailing { animation: sailing 0.8s ease-in-out infinite; }
        .animate-wake { animation: wake 1s ease-out infinite; }
        .animate-slideUp { animation: slideUp 0.3s ease-out forwards; }
        .duration-1500 { transition-duration: 1500ms; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .heading-font { font-family: 'Playfair Display', serif; }
      `}</style>
    </div>
  );
};

export default TimelinePage;
