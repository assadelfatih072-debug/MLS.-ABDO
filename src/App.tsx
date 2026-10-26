/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { QUESTIONS_DATA, CATEGORIES } from './data/questions';
import { QuizMode, Question } from './types/quiz';
import { loadProgress, saveProgress, clearProgress, StoredProgress } from './utils/storage';
import { sounds } from './utils/sound';
import { Header } from './components/Header';
import { PracticeView } from './components/PracticeView';
import { ExamView } from './components/ExamView';
import { FlashcardView } from './components/FlashcardView';
import { QuestionBankView } from './components/QuestionBankView';
import { MissedView } from './components/MissedView';
import { SettingsModal } from './components/SettingsModal';
import {
  ShieldCheck,
  FlaskConical,
  Flame,
  Scale,
  Microscope,
  AlertTriangle,
  FileWarning,
  Bug,
  Palette,
  HeartPulse,
  Calculator,
  Play,
  RotateCcw,
  Sparkles,
  BookOpen,
  Award
} from 'lucide-react';

export default function App() {
  const [progress, setProgress] = useState<StoredProgress>(() => loadProgress());
  const [currentMode, setCurrentMode] = useState<QuizMode>('practice');
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  // Sync sound settings to sound effects class
  useEffect(() => {
    sounds.enabled = progress.settings.soundEnabled;
  }, [progress.settings.soundEnabled]);

  // Save to local storage on changes
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  // Bookmarking handler
  const handleToggleBookmark = (id: number) => {
    sounds.playClick();
    setProgress((prev) => {
      const exists = prev.bookmarkedIds.includes(id);
      const updated = exists
        ? prev.bookmarkedIds.filter((bId) => bId !== id)
        : [...prev.bookmarkedIds, id];
      return { ...prev, bookmarkedIds: updated };
    });
  };

  // Record practice answer
  const handleRecordAnswer = (id: number, selected: 'A' | 'B' | 'C' | 'D', isCorrect: boolean) => {
    setProgress((prev) => {
      const newPractice = {
        ...prev.practiceAnswers,
        [id]: { selected, correct: isCorrect },
      };

      let newMissed = [...prev.missedIds];
      if (!isCorrect && !newMissed.includes(id)) {
        newMissed.push(id);
      } else if (isCorrect && newMissed.includes(id)) {
        // Option: keep or remove from missed
      }

      return {
        ...prev,
        practiceAnswers: newPractice,
        missedIds: newMissed,
      };
    });
  };

  // Record completed exam
  const handleFinishExamRecord = (
    score: number,
    total: number,
    timeSpent: number,
    missedIds: number[]
  ) => {
    const percentage = Math.round((score / total) * 100);
    const dateStr = new Date().toLocaleDateString();

    setProgress((prev) => {
      const uniqueMissed = Array.from(new Set([...prev.missedIds, ...missedIds]));
      return {
        ...prev,
        missedIds: uniqueMissed,
        recentExams: [
          ...prev.recentExams,
          {
            date: dateStr,
            score,
            total,
            percentage,
            timeSpentSeconds: timeSpent,
          },
        ],
      };
    });
  };

  // Flashcard mastered toggle
  const handleToggleMastered = (id: number, isMastered: boolean) => {
    setProgress((prev) => {
      const exists = prev.masteredIds.includes(id);
      let updated = [...prev.masteredIds];
      if (isMastered && !exists) {
        updated.push(id);
      } else if (!isMastered && exists) {
        updated = updated.filter((mId) => mId !== id);
      }
      return { ...prev, masteredIds: updated };
    });
  };

  // Toggle sound
  const handleToggleSound = () => {
    setProgress((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        soundEnabled: !prev.settings.soundEnabled,
      },
    }));
  };

  // Toggle option shuffle
  const handleToggleShuffleOptions = () => {
    sounds.playClick();
    setProgress((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        shuffleOptions: !prev.settings.shuffleOptions,
      },
    }));
  };

  // Clear missed
  const handleClearMissed = () => {
    sounds.playClick();
    setProgress((prev) => ({ ...prev, missedIds: [] }));
  };

  // Reset entire progress
  const handleResetProgress = () => {
    clearProgress();
    setProgress({
      bookmarkedIds: [],
      missedIds: [],
      masteredIds: [],
      practiceAnswers: {},
      recentExams: [],
      settings: {
        soundEnabled: true,
        shuffleOptions: true,
      },
    });
  };

  const answeredCount = Object.keys(progress.practiceAnswers).length;
  const correctCount = Object.values(progress.practiceAnswers).filter((a) => a.correct).length;
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-cyan-100 selection:text-cyan-900">
      {/* Top Bar Contract (3 zones) */}
      <Header
        currentMode={currentMode}
        onSelectMode={setCurrentMode}
        soundEnabled={progress.settings.soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenSettings={() => setIsSettingsOpen(true)}
        bookmarkedCount={progress.bookmarkedIds.length}
        missedCount={progress.missedIds.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {/* Hero Banner for Overview & Practice Mode Header */}
        {currentMode === 'practice' && (
          <section className="bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Text overview */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800 uppercase tracking-wider">
                    <span>Clinical Laboratory Sciences Curriculum</span>
                    <span aria-hidden="true">·</span>
                    <span>120 High-Yield Questions</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Medical Laboratory Technology Board Exam Review
                  </h1>
                  <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                    Master biosafety levels (BSL 1–4), glassware capacities, sterilization autoclaving, centrifugation, hazard warnings (NFPA 704), COSHH regulations, and laboratory mathematics.
                  </p>

                  {/* Clean unboxed statistics strip with typographic separators */}
                  <div className="pt-2 flex items-center gap-3 text-xs text-slate-500 flex-wrap">
                    <span>
                      <strong className="text-slate-800 font-semibold tabular-nums">{QUESTIONS_DATA.length}</strong> Questions
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      <strong className="text-slate-800 font-semibold tabular-nums">{CATEGORIES.length}</strong> Disciplines
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      <strong className="text-slate-800 font-semibold tabular-nums">{answeredCount}</strong> Practiced
                    </span>
                    {answeredCount > 0 && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-700 font-medium">
                          <strong className="tabular-nums">{accuracy}%</strong> Accuracy
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Hero Lab Imagery */}
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-video sm:aspect-16/9 bg-slate-100">
                  <img
                    src="/src/assets/images/medlab_science_hero_1793043198600.jpg"
                    alt="Clinical laboratory workbench with microscope and glassware"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-4">
                    <p className="text-xs text-white/90 font-medium">
                      Clinical Lab Diagnostic Reference Standard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* View Routing */}
        <div className="mt-4">
          {currentMode === 'practice' && (
            <PracticeView
              questions={QUESTIONS_DATA}
              bookmarkedIds={progress.bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
              onRecordAnswer={handleRecordAnswer}
              shuffleOptionsSetting={progress.settings.shuffleOptions}
              onToggleShuffleOptions={handleToggleShuffleOptions}
            />
          )}

          {currentMode === 'exam' && (
            <ExamView
              allQuestions={QUESTIONS_DATA}
              onFinishExamRecord={handleFinishExamRecord}
              onRetakeMissed={(missedIds) => {
                setProgress((prev) => ({
                  ...prev,
                  missedIds: Array.from(new Set([...prev.missedIds, ...missedIds])),
                }));
                setCurrentMode('missed');
              }}
              shuffleOptionsSetting={progress.settings.shuffleOptions}
            />
          )}

          {currentMode === 'flashcard' && (
            <FlashcardView
              questions={QUESTIONS_DATA}
              masteredIds={progress.masteredIds}
              onToggleMastered={handleToggleMastered}
            />
          )}

          {currentMode === 'bank' && (
            <QuestionBankView
              questions={QUESTIONS_DATA}
              bookmarkedIds={progress.bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
            />
          )}

          {currentMode === 'missed' && (
            <MissedView
              allQuestions={QUESTIONS_DATA}
              missedIds={progress.missedIds}
              bookmarkedIds={progress.bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
              onClearMissed={handleClearMissed}
              onStartMissedPractice={() => setCurrentMode('practice')}
            />
          )}
        </div>
      </main>

      {/* Preferences Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        progress={progress}
        onToggleSound={handleToggleSound}
        onToggleShuffleOptions={handleToggleShuffleOptions}
        onResetProgress={handleResetProgress}
      />

      {/* Quiet Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>MedLab Science Prep · 120 Medical Laboratory Exam Items</span>
          <div className="flex items-center gap-4 text-slate-500">
            <span>WHO Biosafety Standards</span>
            <span aria-hidden="true">·</span>
            <span>OSHA & COSHH Protocols</span>
            <span aria-hidden="true">·</span>
            <span>NFPA 704</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
