import React, { useState, useEffect, useCallback } from 'react';
import { saveScore, getLeaderboard } from '../firebase';
import type { LeaderboardEntry } from '../firebase';
import { getRandomQuestions15 } from '../constants';
import { 
  Home, 
  BookOpen, 
  Trophy,
  Zap,
  Brain,
  Skull,
  ChevronRight,
  RotateCcw,
  User,
  Quote
} from 'lucide-react';

interface QuizGamePageProps {
  onNavigate: (mode: 'study' | 'timeline' | 'game' | 'slide') => void;
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

// Game Data - Load 15 random questions from constants
const FLASH_QUESTIONS: FlashQuestion[] = getRandomQuestions15().map(q => ({
  id: q.id,
  question: q.question,
  options: q.options,
  correctAnswer: q.correctAnswer,
}));

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

const BADGES: { [key: string]: { name: string; icon: string } } = {
  speedster: { name: 'Tia Chớp', icon: '⚡' },
  perfectCombo: { name: 'Combo Master', icon: '🔥' },
  wisePerson: { name: 'Người Hiểu Đạo', icon: '🧠' },
  bossSlayer: { name: 'Chiến Thắng Boss', icon: '👑' },
  perfectBoss: { name: 'Hoàn Hảo', icon: '💎' },
};

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
    if (total >= 250) return { rank: 'Chiến sĩ tiên phong', icon: '🥇' };
    if (total >= 180) return { rank: 'Đảng viên mẫu mực', icon: '🥈' };
    if (total >= 120) return { rank: 'Công dân tích cực', icon: '🥉' };
    return { rank: 'Tập sự tìm hiểu', icon: '🎒' };
  };

  // RENDER FUNCTIONS
  const renderIntro = () => (
    <article className="max-w-2xl mx-auto text-center animate-fadeIn">
      {/* Chapter decoration */}
      <div className="mb-8">
        <span className="inline-flex items-center gap-3 text-amber-600">
          <span className="h-px w-12 bg-amber-400"></span>
          <span className="font-serif text-base tracking-[0.3em] uppercase">Thử Thách</span>
          <span className="h-px w-12 bg-amber-400"></span>
        </span>
      </div>

      {/* Title */}
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-amber-100 text-amber-700 mb-6">
        <Trophy className="w-12 h-12" />
      </div>
      <h1 className="font-serif text-5xl md:text-6xl text-amber-950 mb-4">Quiz Game</h1>
      <p className="font-serif text-xl md:text-2xl text-amber-700 mb-10">Thử thách kiến thức Tư tưởng Hồ Chí Minh</p>

      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-10"></div>

      {/* Game Rules */}
      <div className="text-left mb-10">
        <h3 className="font-serif text-2xl md:text-3xl text-amber-800 mb-6 text-center">Ba vòng thi đấu</h3>
        <div className="space-y-4">
          {[
            { icon: <Zap className="w-7 h-7" />, title: 'Vòng 1: Flash Quiz', desc: '60 giây • +10đ mỗi câu đúng • +20đ combo 5 câu', color: 'bg-orange-100 text-orange-700' },
            { icon: <Brain className="w-7 h-7" />, title: 'Vòng 2: Tình Huống', desc: 'Xử lý đạo đức thực tế • +20đ / +10đ / +0đ', color: 'bg-violet-100 text-violet-700' },
            { icon: <Skull className="w-7 h-7" />, title: 'Vòng 3: Boss Quiz', desc: '5 câu khó • +30đ mỗi câu • +100đ bonus hoàn hảo', color: 'bg-rose-100 text-rose-700' },
          ].map((round, i) => (
            <div key={i} className="flex items-center gap-4 p-5 border border-amber-200 rounded-lg bg-amber-50/50">
              <div className={`w-14 h-14 rounded-full ${round.color} flex items-center justify-center`}>
                {round.icon}
              </div>
              <div className="flex-1">
                <div className="font-serif text-lg md:text-xl font-semibold text-amber-900">{round.title}</div>
                <div className="text-base text-amber-600">{round.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <button onClick={goToEnterName}
        className="w-full py-5 bg-amber-700 hover:bg-amber-800 text-white font-serif text-xl rounded-lg transition-all flex items-center justify-center gap-2 mb-4">
        Bắt đầu chơi <ChevronRight className="w-6 h-6" />
      </button>

      <button onClick={() => { loadLeaderboard(); setPhase('leaderboard'); }}
        className="w-full py-4 border border-amber-300 text-amber-700 font-serif text-lg rounded-lg hover:bg-amber-50 transition-all flex items-center justify-center gap-2">
        <Trophy className="w-6 h-6" /> Bảng xếp hạng
      </button>

      {/* Quote decoration */}
      <div className="mt-12 flex justify-center">
        <div className="flex items-center gap-2 text-amber-400">
          <span className="h-px w-16 bg-amber-300"></span>
          <span className="text-2xl">❧</span>
          <span className="h-px w-16 bg-amber-300"></span>
        </div>
      </div>
    </article>
  );

  const renderEnterName = () => (
    <article className="max-w-md mx-auto text-center animate-fadeIn">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 text-amber-700 mb-6">
        <User className="w-10 h-10" />
      </div>
      <h2 className="font-serif text-4xl text-amber-950 mb-2">Nhập tên của bạn</h2>
      <p className="font-serif text-lg text-amber-600 mb-8">Tên sẽ được hiển thị trên bảng xếp hạng</p>
      
      <input
        type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && playerName.trim() && startGame()}
        placeholder="Tên của bạn..."
        className="w-full px-6 py-5 text-2xl bg-amber-50 border-2 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-amber-900 text-center font-serif placeholder-amber-400 mb-6"
        maxLength={15} autoFocus
      />
      <button onClick={startGame} disabled={!playerName.trim()}
        className="w-full py-5 bg-amber-700 hover:bg-amber-800 text-white font-serif text-xl rounded-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed">
        Bắt đầu Game
      </button>
      
      <button onClick={() => setPhase('intro')} className="mt-6 text-lg text-amber-600 hover:text-amber-800 font-serif transition-colors">
        ← Quay lại
      </button>
    </article>
  );

  const renderRound1 = () => {
    if (flashQuestions.length === 0) return null;
    const q = flashQuestions[currentQuestion];
    const isLowTime = timeLeft <= 10;
    
    return (
      <article className="max-w-2xl mx-auto animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center">
              <Zap className="w-7 h-7" />
            </div>
            <div>
              <div className="font-serif text-3xl text-amber-900 font-bold">{score + comboBonus} điểm</div>
              {combo > 0 && <div className="text-orange-600 text-base font-serif">🔥 Combo x{combo}</div>}
            </div>
          </div>
          <div className={`px-6 py-4 rounded-lg font-serif text-4xl font-bold transition-all ${isLowTime ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-amber-100 text-amber-800'}`}>
            {timeLeft}s
          </div>
        </div>

        {/* Combo Bar */}
        {combo > 0 && (
          <div className="mb-4 bg-amber-100 rounded-full h-3 overflow-hidden">
            <div className="bg-orange-500 h-full transition-all" style={{ width: `${(combo / 5) * 100}%` }} />
          </div>
        )}

        {/* Progress */}
        <div className="text-center text-amber-600 font-serif text-base mb-4">
          Câu {currentQuestion + 1} / {flashQuestions.length}
        </div>
        <div className="bg-amber-200 rounded-full h-1.5 mb-8">
          <div className="bg-amber-600 h-1.5 rounded-full transition-all" style={{ width: `${((currentQuestion + 1) / flashQuestions.length) * 100}%` }} />
        </div>

        {/* Question */}
        <div className="mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-amber-900 leading-relaxed">{q.question}</h3>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {q.options.map((opt, i) => {
            const isSelected = selectedAnswer === i;
            const isCorrect = i === q.correctAnswer;
            let styles = 'border-amber-200 hover:border-amber-400 hover:bg-amber-50';
            if (selectedAnswer !== null) {
              if (isCorrect) styles = 'border-emerald-500 bg-emerald-50';
              else if (isSelected) styles = 'border-red-400 bg-red-50 opacity-70';
            }
            return (
              <button key={i} onClick={() => handleRound1Answer(i)} disabled={selectedAnswer !== null}
                className={`w-full p-5 rounded-lg border-2 transition-all text-left font-serif text-lg md:text-xl text-amber-800 ${styles}`}>
                <span className="flex items-center gap-4">
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-bold ${isSelected ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-700'}`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </span>
              </button>
            );
          })}
        </div>
      </article>
    );
  };

  const renderRound1Result = () => (
    <article className="max-w-md mx-auto text-center animate-fadeIn">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 text-orange-700 mb-6">
        <Zap className="w-10 h-10" />
      </div>
      <h2 className="font-serif text-4xl text-amber-950 mb-6">Vòng 1 Hoàn Thành!</h2>
      
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-8">
        <div className="font-serif text-7xl text-amber-800 font-bold">{round1Score}</div>
        <div className="text-xl text-amber-600 font-serif">điểm</div>
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-amber-200">
          <div><div className="font-serif text-2xl text-amber-800 font-bold">{correctAnswers}/{totalAnswered}</div><div className="text-sm text-amber-500">Đúng</div></div>
          <div><div className="font-serif text-2xl text-amber-800 font-bold">{totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0}%</div><div className="text-sm text-amber-500">Chính xác</div></div>
          <div><div className="font-serif text-2xl text-amber-800 font-bold">{maxCombo}</div><div className="text-sm text-amber-500">Max Combo</div></div>
        </div>
      </div>

      <button onClick={startRound2}
        className="w-full py-5 bg-violet-700 hover:bg-violet-800 text-white font-serif text-xl rounded-lg transition-all flex items-center justify-center gap-2">
        Tiếp tục Vòng 2 <ChevronRight className="w-6 h-6" />
      </button>
    </article>
  );

  const renderRound2 = () => {
    if (caseQuestions.length === 0) return null;
    const q = caseQuestions[currentQuestion];
    return (
      <article className="max-w-2xl mx-auto animate-fadeIn">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center">
              <Brain className="w-7 h-7" />
            </div>
            <div className="font-serif text-3xl text-amber-900 font-bold">{score} điểm</div>
          </div>
          <div className="text-lg text-amber-600 font-serif">{currentQuestion + 1}/{caseQuestions.length}</div>
        </div>

        <div className="mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-amber-900 mb-4">{q.situation}</h3>
          <blockquote className="pl-5 border-l-2 border-amber-400 bg-amber-50 p-5 rounded-r-lg">
            <p className="font-serif text-lg md:text-xl text-amber-700 italic">💡 {q.context}</p>
          </blockquote>
        </div>

        <div className="space-y-4">
          {q.options.map((opt, i) => {
            const isSelected = selectedAnswer === i;
            let styles = 'border-amber-200 hover:border-amber-400 hover:bg-amber-50';
            if (showResult) {
              if (opt.points === 20) styles = 'border-emerald-500 bg-emerald-50';
              else if (opt.points === 10) styles = 'border-amber-500 bg-amber-50';
              else if (isSelected) styles = 'border-red-400 bg-red-50';
            }
            return (
              <button key={i} onClick={() => handleRound2Answer(i)} disabled={showResult}
                className={`w-full p-5 rounded-lg border-2 transition-all text-left font-serif ${styles}`}>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-lg md:text-xl text-amber-800">{opt.text}</span>
                  {showResult && (
                    <span className={`px-3 py-1.5 rounded text-base font-bold ${opt.points === 20 ? 'bg-emerald-500 text-white' : opt.points === 10 ? 'bg-amber-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                      +{opt.points}
                    </span>
                  )}
                </div>
                {showResult && isSelected && <p className="mt-3 text-base text-amber-700 bg-amber-100 p-4 rounded">{opt.explanation}</p>}
              </button>
            );
          })}
        </div>

        {showResult && (
          <button onClick={nextRound2Question} className="mt-8 w-full py-5 bg-amber-700 hover:bg-amber-800 text-white font-serif text-xl rounded-lg transition-all flex items-center justify-center gap-2">
            {currentQuestion < caseQuestions.length - 1 ? 'Câu tiếp theo' : 'Tiếp tục Vòng 3'} <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </article>
    );
  };

  const renderRound2Result = () => (
    <article className="max-w-md mx-auto text-center animate-fadeIn">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-100 text-violet-700 mb-6">
        <Brain className="w-10 h-10" />
      </div>
      <h2 className="font-serif text-4xl text-amber-950 mb-6">Vòng 2 Hoàn Thành!</h2>
      
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-6">
        <div className="font-serif text-7xl text-amber-800 font-bold">{round2Score}</div>
        <div className="text-xl text-amber-600 font-serif">điểm</div>
      </div>

      <div className="bg-amber-100 rounded-lg p-5 mb-8">
        <div className="text-amber-600 text-base font-serif">Tổng điểm hiện tại</div>
        <div className="font-serif text-4xl text-amber-800 font-bold">{round1Score + round2Score}</div>
      </div>

      <button onClick={startRound3} className="w-full py-5 bg-rose-700 hover:bg-rose-800 text-white font-serif text-xl rounded-lg transition-all flex items-center justify-center gap-2">
        Tiếp tục Boss Quiz <ChevronRight className="w-6 h-6" />
      </button>
    </article>
  );

  const renderRound3 = () => {
    if (bossQuestions.length === 0) return null;
    const q = bossQuestions[currentQuestion];
    
    if (bossGameOver && showResult) {
      return (
        <article className="max-w-md mx-auto text-center animate-fadeIn">
          <div className="text-8xl mb-4">💀</div>
          <h2 className="font-serif text-5xl text-amber-950 mb-4">DEFEATED!</h2>
          <p className="text-xl text-amber-600 font-serif mb-2">Boss đã đánh bại bạn!</p>
          <p className="font-serif text-3xl text-red-600 mb-8">0 điểm (Reset!)</p>
          <button onClick={nextRound3Question} className="w-full py-5 bg-amber-800 text-white font-serif text-xl rounded-lg">
            Xem kết quả tổng →
          </button>
        </article>
      );
    }
    
    return (
      <article className="max-w-2xl mx-auto animate-fadeIn">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center">
              <Skull className="w-7 h-7" />
            </div>
            <div>
              <div className="font-serif text-3xl text-amber-900 font-bold">{score} điểm</div>
              <div className="text-rose-600 text-base font-serif">{q.difficulty === 'extreme' ? '☠️ Cực khó' : '🔥 Khó'}</div>
            </div>
          </div>
        </div>

        {/* Boss HP */}
        <div className="flex justify-center gap-4 mb-8">
          {bossQuestions.map((_, i) => (
            <div key={i} className={`text-3xl transition-all ${i < currentQuestion ? 'opacity-30' : i === currentQuestion ? 'scale-125' : 'opacity-50'}`}>
              {i < currentQuestion ? '✅' : i === currentQuestion ? '⚔️' : '💀'}
            </div>
          ))}
        </div>

        <div className="mb-8 border-l-4 border-rose-400 pl-5">
          <div className="text-rose-600 font-serif text-base mb-2">Câu {currentQuestion + 1}/5</div>
          <h3 className="font-serif text-2xl md:text-3xl text-amber-900">{q.question}</h3>
        </div>

        <div className="space-y-4">
          {q.options.map((opt, i) => {
            const isSelected = selectedAnswer === i;
            const isCorrect = i === q.correctAnswer;
            let styles = 'border-amber-200 hover:border-rose-400 hover:bg-rose-50';
            if (showResult) {
              if (isCorrect) styles = 'border-emerald-500 bg-emerald-50';
              else if (isSelected) styles = 'border-red-400 bg-red-50 opacity-70';
            }
            return (
              <button key={i} onClick={() => handleRound3Answer(i)} disabled={showResult}
                className={`w-full p-5 rounded-lg border-2 transition-all text-left font-serif text-lg md:text-xl text-amber-800 ${styles}`}>
                {opt}
              </button>
            );
          })}
        </div>

        {showResult && !bossGameOver && (
          <button onClick={nextRound3Question} className="mt-8 w-full py-5 bg-rose-700 hover:bg-rose-800 text-white font-serif text-xl rounded-lg transition-all flex items-center justify-center gap-2">
            {currentQuestion < bossQuestions.length - 1 ? 'Tiếp tục chiến đấu' : 'Chiến thắng Boss!'} <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </article>
    );
  };

  const renderRound3Result = () => {
    const isPerfect = bossCorrect === 5;
    const isDefeated = bossGameOver;
    return (
      <article className="max-w-md mx-auto text-center animate-fadeIn">
        <div className="text-8xl mb-4">{isPerfect ? '👑' : isDefeated ? '💀' : '⚔️'}</div>
        <h2 className="font-serif text-4xl text-amber-950 mb-6">
          {isPerfect ? 'PERFECT VICTORY!' : isDefeated ? 'DEFEATED!' : 'Vòng 3 Hoàn Thành!'}
        </h2>
        
        <div className={`rounded-lg p-8 mb-8 ${isDefeated ? 'bg-gray-100 border border-gray-300' : 'bg-amber-50 border border-amber-200'}`}>
          <div className="font-serif text-7xl text-amber-800 font-bold">{round3Score}</div>
          <div className="text-xl text-amber-600 font-serif">điểm</div>
          {isPerfect && <div className="mt-4 text-xl text-emerald-600 font-serif font-bold">💎 +100 BONUS!</div>}
          {isDefeated && <div className="mt-4 text-red-500 font-serif text-base">⚠️ Sai = Reset về 0!</div>}
        </div>

        <button onClick={() => setPhase('gameover')} className="w-full py-5 bg-emerald-700 hover:bg-emerald-800 text-white font-serif text-xl rounded-lg transition-all flex items-center justify-center gap-2">
          Xem Kết Quả <ChevronRight className="w-6 h-6" />
        </button>
      </article>
    );
  };

  const renderGameOver = () => {
    const total = getTotalScore();
    const rankInfo = getRank(total);
    const quote = HCM_QUOTES[Math.floor(Math.random() * HCM_QUOTES.length)];
    return (
      <article className="max-w-lg mx-auto text-center animate-fadeIn">
        <div className="text-8xl mb-4">{rankInfo.icon}</div>
        <h2 className="font-serif text-3xl text-amber-800 mb-2">{rankInfo.rank}</h2>
        <div className="bg-amber-100 rounded-full px-5 py-2 inline-block mb-6">
          <span className="text-lg text-amber-700 font-serif">👤 {playerName}</span>
        </div>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-6">
          <div className="font-serif text-7xl text-amber-800 font-bold mb-2">{total}</div>
          <div className="text-xl text-amber-600 font-serif mb-6">Tổng điểm</div>
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-amber-200">
            <div><div className="font-serif text-2xl text-orange-600 font-bold">{round1Score}</div><div className="text-sm text-amber-500">⚡ Flash</div></div>
            <div><div className="font-serif text-2xl text-violet-600 font-bold">{round2Score}</div><div className="text-sm text-amber-500">🧠 Case</div></div>
            <div><div className="font-serif text-2xl text-rose-600 font-bold">{round3Score}</div><div className="text-sm text-amber-500">👹 Boss</div></div>
          </div>
          <div className="mt-4 pt-4 border-t border-amber-200">
            {isSaving ? <div className="text-lg text-amber-600 font-serif animate-pulse">⏳ Đang lưu...</div> : saved ? <div className="text-lg text-emerald-600 font-serif">✅ Đã lưu!</div> : null}
          </div>
        </div>

        {earnedBadges.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <div className="text-base font-serif text-amber-700 mb-3">🏅 Huy hiệu đạt được</div>
            <div className="flex flex-wrap justify-center gap-3">
              {earnedBadges.map(b => (
                <span key={b} className="px-4 py-2 bg-amber-200 rounded-full text-base text-amber-800 font-serif">
                  {BADGES[b].icon} {BADGES[b].name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Quote */}
        <blockquote className="relative mb-8">
          <Quote className="absolute -top-2 -left-2 w-8 h-8 text-amber-300" />
          <div className="pl-8 pr-4 py-4 border-l-2 border-amber-400 bg-amber-50 text-left">
            <p className="font-serif text-lg md:text-xl text-amber-700 italic">{quote}</p>
          </div>
        </blockquote>

        <button onClick={() => { loadLeaderboard(); setPhase('leaderboard'); }}
          className="w-full py-5 bg-amber-700 hover:bg-amber-800 text-white font-serif text-xl rounded-lg transition-all flex items-center justify-center gap-2 mb-3">
          <Trophy className="w-6 h-6" /> Bảng Xếp Hạng
        </button>
        <button onClick={startGame} className="w-full py-4 border border-amber-300 text-amber-700 font-serif text-lg rounded-lg hover:bg-amber-50 transition-all flex items-center justify-center gap-2">
          <RotateCcw className="w-6 h-6" /> Chơi Lại
        </button>
      </article>
    );
  };

  const renderLeaderboard = () => (
    <article className="max-w-2xl mx-auto animate-fadeIn">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 text-amber-700 mb-4">
          <Trophy className="w-10 h-10" />
        </div>
        <h2 className="font-serif text-4xl text-amber-950 mb-2">Bảng Xếp Hạng</h2>
        <button onClick={loadLeaderboard} disabled={isLoading} className="text-amber-600 hover:text-amber-800 font-serif text-base underline disabled:opacity-50">
          {isLoading ? '⏳ Đang tải...' : '🔄 Làm mới'}
        </button>
      </div>

      <div className="border border-amber-200 rounded-lg overflow-hidden bg-amber-50/50">
        {isLoading ? (
          <div className="p-16 text-center"><div className="text-5xl mb-4 animate-bounce">⏳</div><div className="text-lg text-amber-600 font-serif">Đang tải...</div></div>
        ) : leaderboard.length === 0 ? (
          <div className="p-16 text-center"><div className="text-5xl mb-4">📭</div><div className="text-lg text-amber-600 font-serif">Chưa có dữ liệu</div>
            <button onClick={loadLeaderboard} className="mt-4 px-6 py-3 bg-amber-600 text-white rounded-lg font-serif text-lg">🔄 Thử lại</button>
          </div>
        ) : (
          <div className="divide-y divide-amber-200">
            {leaderboard.map((e, i) => (
              <div key={e.id} className={`p-5 flex items-center gap-4 ${i < 3 ? 'bg-amber-100/50' : ''} ${e.playerName === playerName ? 'bg-emerald-50 border-l-4 border-emerald-500' : ''}`}>
                <div className="text-3xl w-12 text-center font-serif">{i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : <span className="text-amber-400">{i + 1}</span>}</div>
                <div className="flex-1">
                  <div className="font-serif text-lg font-bold text-amber-900 flex items-center gap-2">
                    {e.playerName} {e.playerName === playerName && <span className="text-sm bg-emerald-500 text-white px-2 py-0.5 rounded">Bạn</span>}
                  </div>
                  <div className="text-sm text-amber-500 font-serif">⚡{e.flashScore} 🧠{e.caseScore} 👹{e.bossScore}</div>
                </div>
                <div className="text-right">
                  <div className="font-serif text-3xl font-bold text-amber-800">{e.totalScore}</div>
                  <div className="text-sm text-amber-500 font-serif">{e.rank}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 flex gap-4 justify-center">
        <button onClick={goToEnterName} className="px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-serif text-lg rounded-lg">Chơi Ngay</button>
        <button onClick={() => setPhase('intro')} className="px-8 py-4 border border-amber-300 text-amber-700 font-serif text-lg rounded-lg hover:bg-amber-50">← Menu</button>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col">
      {/* Book texture background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d4c4a8' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")` 
        }}
      />

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-5 border-b border-amber-200/50 relative z-10">
        <button
          onClick={() => ['intro', 'leaderboard', 'enter_name'].includes(phase) ? onNavigate('study') : setPhase('intro')}
          className="flex items-center gap-2 text-lg text-amber-700 hover:text-amber-900 font-serif transition-colors"
        >
          <Home className="w-6 h-6" />
          <span className="hidden sm:inline">{['intro', 'leaderboard', 'enter_name'].includes(phase) ? 'Trang chủ' : 'Menu'}</span>
        </button>
        
        <h1 className="font-serif text-2xl text-amber-800">🎮 Quiz Game</h1>

        <div className="flex items-center gap-4">
          {playerName && !['intro', 'enter_name', 'leaderboard'].includes(phase) && (
            <span className="text-amber-600 font-serif text-base">👤 {playerName}</span>
          )}
          <button onClick={() => onNavigate('slide')} className="text-amber-600 hover:text-amber-800 transition-colors">
            <BookOpen className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-1 p-6 md:p-10 relative z-10">
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

      {/* Custom fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        
        .font-serif {
          font-family: 'Crimson Text', 'Playfair Display', Georgia, serif;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
      `}</style>
    </div>
  );
};

export default QuizGamePage;
