import React, { useState, useEffect, useCallback } from 'react';
import { saveScore, getLeaderboard } from '../firebase';
import type { LeaderboardEntry } from '../firebase';

interface QuizGamePageProps {
  onNavigate: (mode: 'study' | 'timeline' | 'game') => void;
}

// Types
interface FlashQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface CaseQuestion {
  id: string;
  situation: string;
  context: string;
  options: { text: string; points: number; explanation: string }[];
}

interface BossQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'hard' | 'extreme';
}

// HCM Quotes
const HCM_QUOTES = [
  '"Học để làm việc, làm người, làm cán bộ"',
  '"Không có gì quý hơn độc lập, tự do"',
  '"Đoàn kết, đoàn kết, đại đoàn kết"',
  '"Cần, Kiệm, Liêm, Chính, Chí công vô tư"',
  '"Việc gì có lợi cho dân, ta phải hết sức làm"',
  '"Một năm khởi đầu từ mùa xuân. Một đời khởi đầu từ tuổi trẻ"',
  '"Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong"',
  '"Nói đi đôi với làm"',
];

// Game Data
const FLASH_QUESTIONS: FlashQuestion[] = [
  { id: 'f1', question: 'Đảng Cộng sản Việt Nam được thành lập năm nào?', options: ['1925', '1930', '1945', '1954'], correctAnswer: 1 },
  { id: 'f2', question: 'Hồ Chí Minh rời Tổ quốc từ bến nào?', options: ['Bến Bạch Đằng', 'Bến Nhà Rồng', 'Bến Ninh Kiều', 'Bến Thành'], correctAnswer: 1 },
  { id: 'f3', question: '"Đảng ta là đạo đức, là văn minh" - ai nói?', options: ['Võ Nguyên Giáp', 'Hồ Chí Minh', 'Phạm Văn Đồng', 'Lê Duẩn'], correctAnswer: 1 },
  { id: 'f4', question: 'Tuyên ngôn Độc lập được đọc ngày nào?', options: ['19/8/1945', '2/9/1945', '22/12/1944', '7/5/1954'], correctAnswer: 1 },
  { id: 'f5', question: 'Tác phẩm "Đường Kách Mệnh" xuất bản năm?', options: ['1925', '1927', '1930', '1941'], correctAnswer: 1 },
  { id: 'f6', question: 'Phẩm chất đạo đức: Cần, Kiệm, Liêm, Chính và...?', options: ['Trung thực', 'Chí công vô tư', 'Khiêm tốn', 'Dũng cảm'], correctAnswer: 1 },
  { id: 'f7', question: 'Cách mạng Tháng Tám thành công năm?', options: ['1944', '1945', '1946', '1954'], correctAnswer: 1 },
  { id: 'f8', question: 'Mặt trận Việt Minh được thành lập năm?', options: ['1930', '1941', '1945', '1954'], correctAnswer: 1 },
  { id: 'f9', question: 'Bác Hồ đọc Luận cương Lênin năm nào?', options: ['1917', '1919', '1920', '1925'], correctAnswer: 2 },
  { id: 'f10', question: 'Chiến thắng Điện Biên Phủ năm?', options: ['1953', '1954', '1955', '1956'], correctAnswer: 1 },
  { id: 'f11', question: 'Bác Hồ qua đời ngày nào?', options: ['2/9/1969', '3/9/1969', '19/5/1969', '19/8/1969'], correctAnswer: 0 },
  { id: 'f12', question: '"Không có gì quý hơn..." - tiếp theo là gì?', options: ['Tổ quốc', 'Độc lập, tự do', 'Nhân dân', 'Hòa bình'], correctAnswer: 1 },
  { id: 'f13', question: 'Nguyễn Ái Quốc là bí danh của ai?', options: ['Võ Nguyên Giáp', 'Phạm Văn Đồng', 'Hồ Chí Minh', 'Trần Phú'], correctAnswer: 2 },
  { id: 'f14', question: 'Hội Việt Nam Cách mạng Thanh niên thành lập năm?', options: ['1920', '1925', '1927', '1930'], correctAnswer: 1 },
  { id: 'f15', question: 'Bác Hồ sinh ngày nào?', options: ['19/5/1890', '19/8/1890', '2/9/1890', '22/12/1890'], correctAnswer: 0 },
];

const CASE_QUESTIONS: CaseQuestion[] = [
  {
    id: 'c1',
    situation: 'Bạn là cán bộ xã, phát hiện đồng nghiệp nhận hối lộ.',
    context: 'Đồng nghiệp này là bạn thân từ nhỏ.',
    options: [
      { text: 'Làm ngơ vì là bạn thân', points: 0, explanation: 'Sai - Đặt tình cảm cá nhân lên trên lợi ích tập thể.' },
      { text: 'Báo cáo lãnh đạo và khuyên bạn sửa sai', points: 20, explanation: '✅ Đúng tinh thần "Cần, Kiệm, Liêm, Chính".' },
      { text: 'Nhắc nhở riêng rồi chờ xem', points: 10, explanation: 'Tốt nhưng chưa đủ quyết liệt.' },
    ]
  },
  {
    id: 'c2',
    situation: 'Bạn được giao nhiệm vụ quan trọng nhưng thiếu kinh nghiệm.',
    context: 'Thời hạn gấp, bạn có thể từ chối.',
    options: [
      { text: 'Từ chối vì sợ thất bại', points: 0, explanation: 'Thiếu tinh thần dám nghĩ dám làm.' },
      { text: 'Nhận nhiệm vụ, học hỏi và xin ý kiến', points: 20, explanation: '✅ Đúng tinh thần học tập, kết hợp "hồng" và "chuyên".' },
      { text: 'Nhận và tự làm một mình', points: 10, explanation: 'Dũng cảm nhưng thiếu tinh thần tập thể.' },
    ]
  },
  {
    id: 'c3',
    situation: 'Lãnh đạo muốn chia quỹ dư cho nhân viên (không đúng quy định).',
    context: '"Ai cũng được hưởng" - lãnh đạo nói.',
    options: [
      { text: 'Đồng ý vì ai cũng được', points: 0, explanation: 'Vi phạm "Kiệm" - lãng phí.' },
      { text: 'Đề xuất dùng quỹ cho việc chung', points: 20, explanation: '✅ Đúng tinh thần "Chí công vô tư".' },
      { text: 'Góp ý nên xem xét lại', points: 10, explanation: 'Tốt nhưng cần đề xuất rõ phương án.' },
    ]
  },
  {
    id: 'c4',
    situation: 'Có người dân đến phản ánh vấn đề nhưng không thuộc thẩm quyền bạn.',
    context: 'Bạn đang rất bận, có thể chỉ sang phòng khác.',
    options: [
      { text: 'Bảo họ tự tìm phòng phù hợp', points: 0, explanation: 'Thiếu tinh thần "Việc gì có lợi cho dân phải hết sức làm".' },
      { text: 'Hướng dẫn tận tình và liên hệ giúp họ', points: 20, explanation: '✅ Đúng tinh thần phục vụ nhân dân.' },
      { text: 'Ghi nhận và hẹn trả lời sau', points: 10, explanation: 'Tốt nhưng chưa chủ động giải quyết.' },
    ]
  },
  {
    id: 'c5',
    situation: 'Bạn phát hiện mình làm sai trong báo cáo đã nộp.',
    context: 'Lỗi nhỏ, có thể không ai phát hiện.',
    options: [
      { text: 'Giữ im lặng, lỗi nhỏ thôi', points: 0, explanation: 'Thiếu trung thực - vi phạm "Chính".' },
      { text: 'Chủ động báo cáo và xin sửa lại', points: 20, explanation: '✅ Trung thực, dũng cảm nhận lỗi.' },
      { text: 'Sửa lén nếu có cơ hội', points: 10, explanation: 'Chưa minh bạch, thiếu thẳng thắn.' },
    ]
  },
];

const BOSS_QUESTIONS: BossQuestion[] = [
  { id: 'b1', question: 'Mối quan hệ giữa Đảng và Nhà nước theo HCM?', options: ['Đảng là Nhà nước', 'Đảng lãnh đạo Nhà nước, Nhà nước quản lý xã hội', 'Nhà nước điều hành Đảng', 'Độc lập hoàn toàn'], correctAnswer: 1, difficulty: 'hard' },
  { id: 'b2', question: 'Luận cương Lê-nin (1920) có nội dung chính về?', options: ['Đấu tranh giai cấp châu Âu', 'Vấn đề dân tộc và thuộc địa', 'Cách mạng công nghiệp', 'Chiến tranh thế giới'], correctAnswer: 1, difficulty: 'hard' },
  { id: 'b3', question: 'Di chúc HCM: "Đầu tiên là công việc đối với con người" nghĩa là?', options: ['Chăm lo vật chất', 'Bồi dưỡng thế hệ cách mạng cho đời sau', 'Phát triển kinh tế', 'Quan hệ quốc tế'], correctAnswer: 1, difficulty: 'extreme' },
  { id: 'b4', question: '"Dân tộc trên hết, Tổ quốc trên hết" thể hiện?', options: ['Dân tộc hẹp hòi', 'Đoàn kết dân tộc đặt lên hàng đầu', 'Bài ngoại', 'Từ chối hợp tác'], correctAnswer: 1, difficulty: 'hard' },
  { id: 'b5', question: 'Sự kết hợp nào tạo nên ĐCSVN theo HCM?', options: ['Mác + nông dân', 'Mác-Lênin + công nhân + yêu nước', 'Dân tộc + trí thức', 'Cần Vương + Duy Tân'], correctAnswer: 1, difficulty: 'extreme' },
];

const BADGES: { [key: string]: { name: string; icon: string; color: string } } = {
  speedster: { name: 'Tia Chớp', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
  perfectCombo: { name: 'Combo Master', icon: '🔥', color: 'from-red-400 to-pink-500' },
  wisePerson: { name: 'Người Hiểu Đạo', icon: '🧠', color: 'from-purple-400 to-indigo-500' },
  bossSlayer: { name: 'Chiến Thắng Boss', icon: '👑', color: 'from-amber-400 to-yellow-500' },
  perfectBoss: { name: 'Hoàn Hảo', icon: '💎', color: 'from-cyan-400 to-blue-500' },
};

// Floating shapes component - light version
const FloatingShapes = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className={`absolute rounded-full animate-float ${i % 3 === 0 ? 'w-16 h-16 bg-purple-200/30' : i % 3 === 1 ? 'w-10 h-10 bg-blue-200/30' : 'w-8 h-8 bg-pink-200/30'}`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${8 + Math.random() * 12}s`,
        }}
      />
    ))}
  </div>
);

type GamePhase = 'intro' | 'enter_name' | 'round1' | 'round1_result' | 'round2' | 'round2_result' | 'round3' | 'round3_result' | 'gameover' | 'leaderboard';

const QuizGamePage: React.FC<QuizGamePageProps> = ({ onNavigate }) => {
  const [phase, setPhase] = useState<GamePhase>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  
  const [flashQuestions, setFlashQuestions] = useState<FlashQuestion[]>([]);
  const [caseQuestions, setCaseQuestions] = useState<CaseQuestion[]>([]);
  const [bossQuestions, setBossQuestions] = useState<BossQuestion[]>([]);
  
  const [round1Score, setRound1Score] = useState(0);
  const [round2Score, setRound2Score] = useState(0);
  const [round3Score, setRound3Score] = useState(0);
  
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [comboBonus, setComboBonus] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [bossCorrect, setBossCorrect] = useState(0);
  const [bossGameOver, setBossGameOver] = useState(false);
  
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timeLeft > 0 && phase === 'round1') {
      interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && phase === 'round1') {
      finishRound1();
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft, phase]);

  useEffect(() => {
    const autoSave = async () => {
      if (phase === 'gameover' && playerName.trim() && !saved) {
        setIsSaving(true);
        const total = round1Score + round2Score + round3Score;
        const rankInfo = getRank(total);
        await saveScore({
          playerName: playerName.trim(),
          totalScore: total,
          flashScore: round1Score,
          caseScore: round2Score,
          bossScore: round3Score,
          rank: rankInfo.rank,
          badges: earnedBadges
        });
        setSaved(true);
        setIsSaving(false);
      }
    };
    autoSave();
  }, [phase, playerName, saved, round1Score, round2Score, round3Score, earnedBadges]);

  const loadLeaderboard = useCallback(async () => {
    setIsLoading(true);
    const data = await getLeaderboard(10);
    setLeaderboard(data);
    setIsLoading(false);
  }, []);

  const goToEnterName = () => setPhase('enter_name');

  const startGame = () => {
    if (!playerName.trim()) return;
    setRound1Score(0); setRound2Score(0); setRound3Score(0);
    setEarnedBadges([]); setCombo(0); setMaxCombo(0); setComboBonus(0);
    setCorrectAnswers(0); setTotalAnswered(0); setBossCorrect(0);
    setBossGameOver(false); setSaved(false);
    const shuffled = [...FLASH_QUESTIONS].sort(() => Math.random() - 0.5);
    setFlashQuestions(shuffled);
    setCurrentQuestion(0); setScore(0); setTimeLeft(60);
    setSelectedAnswer(null); setIsTimerRunning(true); setPhase('round1');
  };

  const finishRound1 = () => {
    setIsTimerRunning(false);
    setRound1Score(score + comboBonus);
    const badges: string[] = [];
    if (correctAnswers >= 7) badges.push('speedster');
    if (maxCombo >= 5) badges.push('perfectCombo');
    setEarnedBadges(badges);
    setPhase('round1_result');
  };

  const startRound2 = () => {
    setCaseQuestions([...CASE_QUESTIONS].sort(() => Math.random() - 0.5));
    setCurrentQuestion(0); setScore(0); setSelectedAnswer(null);
    setShowResult(false); setPhase('round2');
  };

  const finishRound2 = () => {
    setRound2Score(score);
    if (score >= 40 && !earnedBadges.includes('wisePerson')) {
      setEarnedBadges(prev => [...prev, 'wisePerson']);
    }
    setPhase('round2_result');
  };

  const startRound3 = () => {
    setBossQuestions([...BOSS_QUESTIONS].sort(() => Math.random() - 0.5));
    setCurrentQuestion(0); setScore(0); setBossCorrect(0);
    setBossGameOver(false); setSelectedAnswer(null);
    setShowResult(false); setPhase('round3');
  };

  const finishRound3 = (perfect: boolean) => {
    setRound3Score(score + (perfect ? 100 : 0));
    const newBadges = [...earnedBadges];
    if (!newBadges.includes('bossSlayer')) newBadges.push('bossSlayer');
    if (perfect && !newBadges.includes('perfectBoss')) newBadges.push('perfectBoss');
    setEarnedBadges(newBadges);
    setPhase('round3_result');
  };

  const handleRound1Answer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setTotalAnswered(prev => prev + 1);
    const isCorrect = index === flashQuestions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
      setScore(prev => prev + 10);
      const newCombo = combo + 1;
      setCombo(newCombo);
      if (newCombo > maxCombo) setMaxCombo(newCombo);
      if (newCombo === 5) { setComboBonus(prev => prev + 20); setCombo(0); }
    } else { setCombo(0); }
    setTimeout(() => {
      if (currentQuestion < flashQuestions.length - 1 && timeLeft > 0) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
      } else { finishRound1(); }
    }, 400);
  };

  const handleRound2Answer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    setScore(prev => prev + caseQuestions[currentQuestion].options[index].points);
  };

  const nextRound2Question = () => {
    if (currentQuestion < caseQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else { finishRound2(); }
  };

  const handleRound3Answer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    const isCorrect = index === bossQuestions[currentQuestion].correctAnswer;
    if (isCorrect) { setScore(prev => prev + 30); setBossCorrect(prev => prev + 1); }
    else { setBossGameOver(true); }
  };

  const nextRound3Question = () => {
    if (bossGameOver) { setRound3Score(0); setPhase('round3_result'); return; }
    if (currentQuestion < bossQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else { finishRound3(bossCorrect + 1 === 5); }
  };

  const getTotalScore = () => round1Score + round2Score + round3Score;

  const getRank = (total: number) => {
    if (total >= 250) return { rank: 'Chiến sĩ tiên phong', icon: '🥇', color: 'from-yellow-300 via-amber-400 to-yellow-500' };
    if (total >= 180) return { rank: 'Đảng viên mẫu mực', icon: '🥈', color: 'from-slate-300 via-gray-400 to-slate-500' };
    if (total >= 120) return { rank: 'Công dân tích cực', icon: '🥉', color: 'from-amber-500 via-orange-500 to-amber-600' };
    return { rank: 'Tập sự tìm hiểu', icon: '🎒', color: 'from-blue-400 via-cyan-400 to-blue-500' };
  };

  const getBackground = () => {
    switch (phase) {
      case 'round1': case 'round1_result':
        return 'bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-50';
      case 'round2': case 'round2_result':
        return 'bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-50';
      case 'round3': case 'round3_result':
        return 'bg-gradient-to-br from-rose-100 via-pink-100 to-red-50';
      case 'gameover':
        return 'bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-50';
      default:
        return 'bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50';
    }
  };

  // RENDER FUNCTIONS
  const renderIntro = () => (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center animate-fadeIn">
      {/* Logo Animation */}
      <div className="relative mb-8">
        <div className="text-9xl animate-bounce drop-shadow-2xl">🎮</div>
        <div className="absolute -inset-4 bg-purple-200/50 rounded-full blur-2xl animate-pulse" />
      </div>
      
      <h1 className="text-5xl md:text-7xl font-black text-gray-800 mb-3 tracking-tight">
        QUIZ <span className="text-purple-600">GAME</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-10 font-light">
        Thử thách kiến thức Tư tưởng Hồ Chí Minh
      </p>
      
      {/* Game Rules Card */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 mb-10 max-w-lg border border-gray-200 shadow-xl">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
          <span className="text-2xl">📋</span> 3 Vòng Thi Đấu
        </h3>
        <div className="space-y-4">
          {[
            { icon: '⚡', title: 'Flash Quiz', desc: '60 giây • +10đ/câu • +20đ combo', color: 'from-yellow-400 to-orange-500' },
            { icon: '🧠', title: 'Tình Huống', desc: 'Xử lý đạo đức • +20đ/+10đ/+0đ', color: 'from-purple-400 to-indigo-500' },
            { icon: '👹', title: 'Boss Quiz', desc: '5 câu khó • +30đ/câu • +100đ bonus', color: 'from-red-400 to-pink-500' },
          ].map((round, i) => (
            <div key={i} className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-all hover:scale-[1.02] border border-gray-100">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${round.color} flex items-center justify-center text-2xl shadow-lg`}>
                {round.icon}
              </div>
              <div className="text-left flex-1">
                <div className="font-bold text-gray-800 text-lg">{round.title}</div>
                <div className="text-sm text-gray-500">{round.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <button onClick={goToEnterName}
        className="group px-12 py-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-2xl font-bold rounded-2xl shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300">
        <span className="flex items-center gap-3">
          🚀 BẮT ĐẦU CHƠI
          <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </button>

      <button onClick={() => { loadLeaderboard(); setPhase('leaderboard'); }}
        className="mt-5 px-8 py-3 bg-white/80 backdrop-blur text-gray-700 font-bold rounded-xl hover:bg-white transition-all border border-gray-200 shadow-md">
        🏆 Bảng Xếp Hạng
      </button>
    </div>
  );

  const renderEnterName = () => (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center animate-fadeIn">
      <div className="relative mb-6">
        <div className="text-8xl">👤</div>
        <div className="absolute -inset-4 bg-purple-200/50 rounded-full blur-2xl" />
      </div>
      <h2 className="text-4xl font-bold text-gray-800 mb-2">Nhập Tên Của Bạn</h2>
      <p className="text-gray-500 mb-8">Tên sẽ được hiển thị trên bảng xếp hạng</p>
      
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md border border-gray-200 shadow-xl">
        <input
          type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && playerName.trim() && startGame()}
          placeholder="Tên của bạn..."
          className="w-full px-6 py-5 text-2xl bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-300 focus:border-purple-400 text-gray-800 text-center font-bold placeholder-gray-400 mb-6"
          maxLength={15} autoFocus
        />
        <button onClick={startGame} disabled={!playerName.trim()}
          className="w-full py-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xl font-bold rounded-2xl hover:shadow-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed">
          🎮 Bắt Đầu Game!
        </button>
      </div>
      
      <button onClick={() => setPhase('intro')} className="mt-8 text-gray-500 hover:text-gray-800 transition-colors">
        ← Quay lại
      </button>
    </div>
  );

  const renderRound1 = () => {
    if (flashQuestions.length === 0) return null;
    const q = flashQuestions[currentQuestion];
    const accuracy = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 100;
    const isLowTime = timeLeft <= 10;
    
    return (
      <div className="max-w-2xl mx-auto animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-3xl shadow-lg">⚡</div>
            <div>
              <div className="text-3xl font-black text-gray-800">{score + comboBonus}</div>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                {combo > 0 && <span className="text-orange-500 font-bold animate-pulse">🔥 x{combo}</span>}
                <span>📊 {accuracy}%</span>
              </div>
            </div>
          </div>
          <div className={`px-6 py-4 rounded-2xl font-black text-4xl shadow-lg transition-all ${isLowTime ? 'bg-red-500 text-white animate-pulse scale-110' : 'bg-white text-orange-500 border-2 border-orange-200'}`}>
            {timeLeft}
          </div>
        </div>

        {/* Combo Bar */}
        {combo > 0 && (
          <div className="mb-4 bg-orange-100 rounded-full p-1">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all shadow-inner"
              style={{ width: `${(combo / 5) * 100}%` }} />
            <div className="text-xs text-orange-600 text-center mt-1 font-bold">🔥 COMBO {combo}/5 → +20 BONUS!</div>
          </div>
        )}

        {/* Progress */}
        <div className="bg-gray-200 rounded-full h-2 mb-8">
          <div className="bg-gradient-to-r from-orange-400 to-amber-500 h-2 rounded-full transition-all" style={{ width: `${((currentQuestion + 1) / flashQuestions.length) * 100}%` }} />
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-6 border border-gray-200">
          <div className="text-sm text-orange-500 font-bold mb-3 flex items-center gap-2">
            <span className="bg-orange-100 px-3 py-1 rounded-full">Câu {currentQuestion + 1}/{flashQuestions.length}</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 leading-relaxed">{q.question}</h3>
        </div>

        {/* Options */}
        <div className="grid gap-4">
          {q.options.map((opt, i) => {
            const isSelected = selectedAnswer === i;
            const isCorrect = i === q.correctAnswer;
            let styles = 'bg-white hover:bg-gray-50 hover:scale-[1.02] border-gray-200';
            if (selectedAnswer !== null) {
              if (isCorrect) styles = 'bg-emerald-100 border-emerald-500 scale-[1.02]';
              else if (isSelected) styles = 'bg-red-100 border-red-500 scale-95 opacity-70';
            }
            return (
              <button key={i} onClick={() => handleRound1Answer(i)} disabled={selectedAnswer !== null}
                className={`p-5 rounded-2xl border-2 transition-all text-left shadow-md font-semibold text-gray-800 text-lg ${styles}`}>
                <span className="flex items-center gap-3">
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold ${isSelected ? 'bg-orange-500 text-white' : 'bg-gray-100'}`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderRound1Result = () => {
    const accuracy = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;
    return (
      <div className="max-w-md mx-auto text-center animate-fadeIn">
        <div className="text-8xl mb-4">⚡</div>
        <h2 className="text-4xl font-black text-gray-800 mb-4">Vòng 1 Hoàn Thành!</h2>
        <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-amber-500 rounded-3xl p-10 shadow-xl mb-8">
          <div className="text-8xl font-black text-white drop-shadow-lg">{round1Score}</div>
          <div className="text-white/90 text-xl">điểm</div>
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/30">
            <div><div className="text-3xl font-bold text-white">{correctAnswers}/{totalAnswered}</div><div className="text-xs text-white/70">Đúng</div></div>
            <div><div className="text-3xl font-bold text-white">{accuracy}%</div><div className="text-xs text-white/70">Accuracy</div></div>
            <div><div className="text-3xl font-bold text-white">{maxCombo}</div><div className="text-xs text-white/70">Max Combo</div></div>
          </div>
        </div>
        <button onClick={startRound2}
          className="w-full py-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-xl rounded-2xl hover:shadow-xl transition-all">
          🧠 Tiếp tục Vòng 2 →
        </button>
      </div>
    );
  };

  const renderRound2 = () => {
    if (caseQuestions.length === 0) return null;
    const q = caseQuestions[currentQuestion];
    return (
      <div className="max-w-3xl mx-auto animate-fadeIn">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-3xl shadow-lg">🧠</div>
            <div>
              <div className="text-3xl font-black text-gray-800">{score}</div>
              <div className="text-sm text-gray-500">điểm</div>
            </div>
          </div>
          <div className="bg-purple-100 px-5 py-2 rounded-full text-purple-700 font-bold border border-purple-200">{currentQuestion + 1}/{caseQuestions.length}</div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl mb-6">
          <div className="flex items-center gap-2 mb-4"><span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-bold">📋 Tình huống</span></div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{q.situation}</h3>
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-5 rounded-2xl border-l-4 border-purple-500">
            <p className="text-gray-600 italic flex items-center gap-2">💡 {q.context}</p>
          </div>
        </div>

        <div className="grid gap-4">
          {q.options.map((opt, i) => {
            const isSelected = selectedAnswer === i;
            let styles = 'bg-white/95 hover:bg-white hover:scale-[1.01] border-transparent';
            if (showResult) {
              if (opt.points === 20) styles = 'bg-emerald-50 border-emerald-500';
              else if (opt.points === 10) styles = 'bg-amber-50 border-amber-500';
              else if (isSelected) styles = 'bg-red-50 border-red-500';
            }
            return (
              <button key={i} onClick={() => handleRound2Answer(i)} disabled={showResult}
                className={`p-5 rounded-2xl border-3 transition-all text-left shadow-lg ${styles}`}>
                <div className="flex justify-between items-start gap-4">
                  <span className="font-semibold text-gray-800 text-lg">{opt.text}</span>
                  {showResult && (
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${opt.points === 20 ? 'bg-emerald-500 text-white' : opt.points === 10 ? 'bg-amber-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                      +{opt.points}
                    </span>
                  )}
                </div>
                {showResult && isSelected && <p className="mt-4 text-sm text-gray-600 bg-gray-100 p-4 rounded-xl">{opt.explanation}</p>}
              </button>
            );
          })}
        </div>

        {showResult && (
          <button onClick={nextRound2Question} className="mt-8 w-full py-5 bg-white text-purple-600 font-bold text-xl rounded-2xl hover:shadow-xl transition-all">
            {currentQuestion < caseQuestions.length - 1 ? 'Câu tiếp theo →' : '👹 Tiếp tục Vòng 3 →'}
          </button>
        )}
      </div>
    );
  };

  const renderRound2Result = () => (
    <div className="max-w-md mx-auto text-center animate-fadeIn">
      <div className="text-8xl mb-4">🧠</div>
      <h2 className="text-4xl font-black text-gray-800 mb-4">Vòng 2 Hoàn Thành!</h2>
      <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 rounded-3xl p-10 shadow-xl mb-6">
        <div className="text-8xl font-black text-white drop-shadow-lg">{round2Score}</div>
        <div className="text-white/90 text-xl">điểm</div>
      </div>
      <div className="bg-white rounded-2xl p-5 mb-8 border border-gray-200 shadow-md">
        <div className="text-gray-500 text-sm mb-1">Tổng điểm hiện tại</div>
        <div className="text-4xl font-black text-gray-800">{round1Score + round2Score}</div>
      </div>
      <button onClick={startRound3} className="w-full py-5 bg-gradient-to-r from-rose-500 to-red-600 text-white font-bold text-xl rounded-2xl hover:shadow-xl transition-all">
        👹 Tiếp tục BOSS QUIZ →
      </button>
    </div>
  );

  const renderRound3 = () => {
    if (bossQuestions.length === 0) return null;
    const q = bossQuestions[currentQuestion];
    
    if (bossGameOver && showResult) {
      return (
        <div className="max-w-md mx-auto text-center animate-fadeIn">
          <div className="text-9xl mb-4 animate-pulse">💀</div>
          <h2 className="text-5xl font-black text-gray-800 mb-4">DEFEATED!</h2>
          <p className="text-gray-600 mb-2">Boss đã đánh bại bạn!</p>
          <p className="text-3xl font-bold text-red-500 mb-8">0 điểm (Reset!)</p>
          <button onClick={nextRound3Question} className="w-full py-5 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-xl rounded-2xl shadow-lg">
            Xem kết quả tổng →
          </button>
        </div>
      );
    }
    
    return (
      <div className="max-w-3xl mx-auto animate-fadeIn">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center text-3xl shadow-lg animate-pulse">👹</div>
            <div>
              <div className="text-sm text-gray-500">{q.difficulty === 'extreme' ? '☠️ CỰC KHÓ' : '🔥 KHÓ'}</div>
              <div className="text-3xl font-black text-gray-800">{score}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500 mb-1">Boss HP</div>
            <div className="w-32 bg-gray-200 rounded-full h-4 overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 h-full transition-all" style={{ width: `${((bossQuestions.length - currentQuestion) / bossQuestions.length) * 100}%` }} />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mb-8">
          {bossQuestions.map((_, i) => (
            <div key={i} className={`text-3xl transition-all ${i < currentQuestion ? 'opacity-30 scale-75' : i === currentQuestion ? 'scale-125 animate-bounce' : 'opacity-50'}`}>
              {i < currentQuestion ? '✅' : i === currentQuestion ? '⚔️' : '💀'}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl mb-6 border-2 border-red-200">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">⚔️ Câu {currentQuestion + 1}/5</span>
            {q.difficulty === 'extreme' && <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">EXTREME</span>}
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{q.question}</h3>
        </div>

        <div className="grid gap-4">
          {q.options.map((opt, i) => {
            const isSelected = selectedAnswer === i;
            const isCorrect = i === q.correctAnswer;
            let styles = 'bg-white hover:bg-gray-50 hover:scale-[1.01] border-gray-200';
            if (showResult) {
              if (isCorrect) styles = 'bg-emerald-100 border-emerald-500';
              else if (isSelected) styles = 'bg-red-100 border-red-500 opacity-70';
            }
            return (
              <button key={i} onClick={() => handleRound3Answer(i)} disabled={showResult}
                className={`p-5 rounded-2xl border-2 transition-all text-left shadow-md font-semibold text-gray-800 text-lg ${styles}`}>
                {opt}
              </button>
            );
          })}
        </div>

        {showResult && !bossGameOver && (
          <button onClick={nextRound3Question} className="mt-8 w-full py-5 bg-gradient-to-r from-rose-500 to-red-600 text-white font-bold text-xl rounded-2xl hover:shadow-xl transition-all">
            {currentQuestion < bossQuestions.length - 1 ? '⚔️ Tiếp tục chiến đấu' : '👑 Chiến thắng Boss!'}
          </button>
        )}
      </div>
    );
  };

  const renderRound3Result = () => {
    const isPerfect = bossCorrect === 5;
    const isDefeated = bossGameOver;
    return (
      <div className="max-w-md mx-auto text-center animate-fadeIn">
        <div className="text-9xl mb-4">{isPerfect ? '👑' : isDefeated ? '💀' : '⚔️'}</div>
        <h2 className="text-4xl font-black text-gray-800 mb-4">
          {isPerfect ? 'PERFECT VICTORY!' : isDefeated ? 'DEFEATED!' : 'Vòng 3 Hoàn Thành!'}
        </h2>
        <div className={`rounded-3xl p-10 shadow-xl mb-8 ${isDefeated ? 'bg-gradient-to-br from-gray-600 to-gray-800' : 'bg-gradient-to-br from-red-500 via-pink-500 to-rose-600'}`}>
          <div className="text-8xl font-black text-white drop-shadow-lg">{round3Score}</div>
          <div className="text-white/90 text-xl">điểm</div>
          {isPerfect && <div className="mt-4 text-yellow-300 font-bold text-xl animate-pulse">💎 +100 BONUS!</div>}
          {isDefeated && <div className="mt-4 text-red-300 text-sm">⚠️ Sai = Reset về 0!</div>}
        </div>
        <button onClick={() => setPhase('gameover')} className="w-full py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xl rounded-2xl hover:shadow-xl transition-all">
          🏆 Xem Kết Quả →
        </button>
      </div>
    );
  };

  const renderGameOver = () => {
    const total = getTotalScore();
    const rankInfo = getRank(total);
    const quote = HCM_QUOTES[Math.floor(Math.random() * HCM_QUOTES.length)];
    return (
      <div className="max-w-lg mx-auto text-center animate-fadeIn">
        <div className="text-9xl mb-4 animate-bounce">{rankInfo.icon}</div>
        <h2 className={`text-3xl font-black bg-gradient-to-r ${rankInfo.color} bg-clip-text text-transparent mb-2`}>{rankInfo.rank}</h2>
        <div className="bg-emerald-100 rounded-full px-6 py-2 inline-block mb-6 border border-emerald-200">
          <span className="text-emerald-700 font-bold">👤 {playerName}</span>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-6 border border-gray-200">
          <div className="text-8xl font-black text-gray-800 mb-2">{total}</div>
          <div className="text-gray-500 mb-6">Tổng điểm</div>
          <div className="grid grid-cols-3 gap-4 border-t pt-6">
            <div><div className="text-3xl font-bold text-orange-500">{round1Score}</div><div className="text-xs text-gray-400">⚡ Flash</div></div>
            <div><div className="text-3xl font-bold text-purple-500">{round2Score}</div><div className="text-xs text-gray-400">🧠 Case</div></div>
            <div><div className="text-3xl font-bold text-red-500">{round3Score}</div><div className="text-xs text-gray-400">👹 Boss</div></div>
          </div>
          <div className="mt-6 pt-4 border-t">
            {isSaving ? <div className="text-blue-500 animate-pulse">⏳ Đang lưu...</div> : saved ? <div className="text-emerald-500">✅ Đã lưu!</div> : null}
          </div>
        </div>

        {earnedBadges.length > 0 && (
          <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-200 shadow-md">
            <div className="text-sm font-bold text-gray-600 mb-3">🏅 Huy hiệu</div>
            <div className="flex flex-wrap justify-center gap-2">
              {earnedBadges.map(b => (
                <span key={b} className={`px-4 py-2 bg-gradient-to-r ${BADGES[b].color} rounded-full text-sm text-white font-bold shadow-lg`}>
                  {BADGES[b].icon} {BADGES[b].name}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-5 mb-6 border border-amber-200">
          <div className="text-amber-600 text-sm mb-2 font-semibold">✨ Lời Bác dạy</div>
          <div className="italic text-gray-700">{quote}</div>
        </div>

        <button onClick={() => { loadLeaderboard(); setPhase('leaderboard'); }}
          className="w-full py-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-xl rounded-2xl hover:shadow-xl transition-all mb-4">
          🏆 Bảng Xếp Hạng
        </button>
        <button onClick={startGame} className="w-full py-4 bg-white text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition-all border border-gray-200 shadow-md">
          🔄 Chơi Lại
        </button>
      </div>
    );
  };

  const renderLeaderboard = () => (
    <div className="max-w-2xl mx-auto animate-fadeIn">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🏆</div>
        <h2 className="text-4xl font-black text-gray-800 mb-2">Bảng Xếp Hạng</h2>
        <button onClick={loadLeaderboard} disabled={isLoading} className="text-gray-500 hover:text-gray-800 text-sm underline disabled:opacity-50">
          {isLoading ? '⏳ Đang tải...' : '🔄 Làm mới'}
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
        {isLoading ? (
          <div className="p-16 text-center"><div className="text-6xl mb-4 animate-bounce">⏳</div><div className="text-gray-500">Đang tải...</div></div>
        ) : leaderboard.length === 0 ? (
          <div className="p-16 text-center"><div className="text-6xl mb-4">📭</div><div className="text-gray-500">Chưa có dữ liệu</div>
            <button onClick={loadLeaderboard} className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-xl">🔄 Thử lại</button>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {leaderboard.map((e, i) => (
              <div key={e.id} className={`p-5 flex items-center gap-4 ${i < 3 ? 'bg-gradient-to-r from-yellow-50 to-amber-50' : ''} ${e.playerName === playerName ? 'bg-emerald-50 border-l-4 border-emerald-500' : ''}`}>
                <div className="text-3xl w-12 text-center">{i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : <span className="text-gray-400 text-xl font-bold">{i + 1}</span>}</div>
                <div className="flex-1">
                  <div className="font-bold text-gray-800 text-lg flex items-center gap-2">
                    {e.playerName} {e.playerName === playerName && <span className="text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full">Bạn</span>}
                  </div>
                  <div className="text-xs text-gray-400">⚡{e.flashScore} 🧠{e.caseScore} 👹{e.bossScore}</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-gray-800">{e.totalScore}</div>
                  <div className="text-xs text-gray-400">{e.rank}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 flex gap-4 justify-center">
        <button onClick={goToEnterName} className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-2xl shadow-lg">🚀 Chơi Ngay</button>
        <button onClick={() => setPhase('intro')} className="px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl shadow-md border border-gray-200">← Menu</button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen w-full relative overflow-hidden ${getBackground()}`}>
      <FloatingShapes />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => ['intro', 'leaderboard', 'enter_name'].includes(phase) ? onNavigate('study') : setPhase('intro')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all font-medium border border-gray-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              {['intro', 'leaderboard', 'enter_name'].includes(phase) ? 'Trang chủ' : 'Menu'}
            </button>
            <h1 className="text-2xl font-black text-gray-800">🎮 Quiz Game</h1>
            {playerName && !['intro', 'enter_name', 'leaderboard'].includes(phase) ? (
              <div className="px-4 py-2 bg-purple-100 rounded-xl text-purple-700 font-medium border border-purple-200">👤 {playerName}</div>
            ) : <div className="w-32" />}
          </div>
        </nav>

        <div className="flex-1 p-6 md:p-10">
          {phase === 'intro' && renderIntro()}
          {phase === 'enter_name' && renderEnterName()}
          {phase === 'round1' && renderRound1()}
          {phase === 'round1_result' && renderRound1Result()}
          {phase === 'round2' && renderRound2()}
          {phase === 'round2_result' && renderRound2Result()}
          {phase === 'round3' && renderRound3()}
          {phase === 'round3_result' && renderRound3Result()}
          {phase === 'gameover' && renderGameOver()}
          {phase === 'leaderboard' && renderLeaderboard()}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
      `}</style>
    </div>
  );
};

export default QuizGamePage;
