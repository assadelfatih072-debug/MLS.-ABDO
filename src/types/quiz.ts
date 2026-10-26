export type QuestionCategory =
  | 'Biosafety & Containment'
  | 'Lab Glassware & Vessels'
  | 'Sterilization & Incubators'
  | 'Balances & Specimen Handling'
  | 'Microscopy & Centrifugation'
  | 'Lab Safety & Regulations'
  | 'Hazard Ratings & MSDS'
  | 'Parasitology & Pathogens'
  | 'Biological Staining'
  | 'Chemical First Aid'
  | 'Laboratory Mathematics';

export interface QuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  category: QuestionCategory;
  explanation: string;
  clinicalKey: string;
}

export type QuizMode = 'practice' | 'exam' | 'flashcard' | 'bank' | 'missed';

export interface ExamConfig {
  questionCount: number; // e.g. 20, 50, 100, 120
  timeLimitMinutes: number; // 0 for untimed, or e.g. 30, 60, 90
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  selectedCategory?: QuestionCategory | 'All';
}

export interface UserAnswerRecord {
  questionId: number;
  selectedOption: 'A' | 'B' | 'C' | 'D' | null;
  isCorrect: boolean;
  timeSpentSeconds: number;
  flagged?: boolean;
}

export interface QuizState {
  currentIndex: number;
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  flaggedQuestionIds: number[];
  revealedQuestionIds: number[];
  startTime: number;
  elapsedSeconds: number;
  isCompleted: boolean;
}
