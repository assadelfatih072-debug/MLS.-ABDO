export interface StoredProgress {
  bookmarkedIds: number[];
  missedIds: number[];
  masteredIds: number[];
  practiceAnswers: Record<number, { selected: 'A' | 'B' | 'C' | 'D'; correct: boolean }>;
  recentExams: Array<{
    date: string;
    score: number;
    total: number;
    percentage: number;
    timeSpentSeconds: number;
  }>;
  settings: {
    soundEnabled: boolean;
    shuffleOptions: boolean;
  };
}

const STORAGE_KEY = 'medlab_quiz_progress_v1';

const defaultProgress: StoredProgress = {
  bookmarkedIds: [],
  missedIds: [],
  masteredIds: [],
  practiceAnswers: {},
  recentExams: [],
  settings: {
    soundEnabled: true,
    shuffleOptions: true,
  },
};

export function loadProgress(): StoredProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    return { ...defaultProgress, ...JSON.parse(raw) };
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(data: StoredProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
}

export function clearProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
