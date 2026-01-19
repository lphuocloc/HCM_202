
export interface ContentSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  quotes?: string[];
}

export interface ChapterData {
  title: string;
  sections: ContentSection[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizResult {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
  highlight?: string;
  image?: string; // URL to historical image
}

export interface TimelinePeriod {
  id: string;
  period: string;
  theme: string;
  themeIcon: string;
  color: string;
  events: TimelineEvent[];
}

export interface Slide {
  id: number;
  icon: string;
  title: string;
  content: string[];
  highlight?: string;
  bgColor: string;
  image?: string;
  video?: string;
  isVideoSlide?: boolean;
}

// GAME INTERFACES
export interface GameScenario {
  id: string;
  title: string;
  description: string;
  scenario: string;
  choices: {
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  difficulty: "easy" | "medium" | "hard";
  points: number;
  topic: string;
}

export interface MatchingItem {
  id: string;
  term: string;
  definition: string;
}

export interface DebateTopic {
  id: string;
  topic: string;
  question: string;
  pros: string[];
  cons: string[];
  hoChiMinhPosition: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface Round1QuizData {
  roundName: string;
  totalQuestions: number;
  timeLimit: number;
  questions: QuizQuestion[];
  generatedAt: string;
}