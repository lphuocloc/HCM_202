
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