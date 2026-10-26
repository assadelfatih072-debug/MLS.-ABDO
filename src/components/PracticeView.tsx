import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Question, QuestionCategory } from '../types/quiz';
import { CATEGORIES } from '../data/questions';
import { sounds } from '../utils/sound';
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  CheckCircle2,
  XCircle,
  Shuffle,
  RotateCcw,
  BookOpen,
  Filter,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface PracticeViewProps {
  questions: Question[];
  bookmarkedIds: number[];
  onToggleBookmark: (id: number) => void;
  onRecordAnswer: (id: number, selected: 'A' | 'B' | 'C' | 'D', isCorrect: boolean) => void;
  shuffleOptionsSetting: boolean;
  onToggleShuffleOptions: () => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  questions,
  bookmarkedIds,
  onToggleBookmark,
  onRecordAnswer,
  shuffleOptionsSetting,
  onToggleShuffleOptions,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [onlyBookmarked, setOnlyBookmarked] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchCat = selectedCategory === 'All' || q.category === selectedCategory;
      const matchBookmark = !onlyBookmarked || bookmarkedIds.includes(q.id);
      return matchCat && matchBookmark;
    });
  }, [questions, selectedCategory, onlyBookmarked, bookmarkedIds]);

  // Ensure current index is within bounds
  useEffect(() => {
    if (currentIndex >= filteredQuestions.length && filteredQuestions.length > 0) {
      setCurrentIndex(0);
    }
  }, [filteredQuestions.length, currentIndex]);

  const currentQ = filteredQuestions[currentIndex] || questions[0];
  const isBookmarked = currentQ ? bookmarkedIds.includes(currentQ.id) : false;
  const userAnswer = currentQ ? selectedAnswers[currentQ.id] : undefined;
  const isAnswered = userAnswer !== undefined;

  // Shuffled options order based on question ID and toggle
  const displayedOptions = useMemo(() => {
    if (!currentQ) return [];
    if (!shuffleOptionsSetting) {
      return currentQ.options;
    }
    // Deterministic or pseudo-shuffle per question
    const opts = [...currentQ.options];
    // Simple deterministic permutation seeded by question ID
    const seed = (currentQ.id * 9301 + 49297) % 233280;
    const offset = seed % opts.length;
    return [...opts.slice(offset), ...opts.slice(0, offset)];
  }, [currentQ, shuffleOptionsSetting]);

  const handleSelectOption = useCallback((optionKey: 'A' | 'B' | 'C' | 'D') => {
    if (isAnswered || !currentQ) return;

    const isCorrect = optionKey === currentQ.correctAnswer;
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: optionKey }));

    if (isCorrect) {
      sounds.playCorrect();
      setStreak((prev) => {
        const next = prev + 1;
        if (next > maxStreak) setMaxStreak(next);
        return next;
      });
    } else {
      sounds.playIncorrect();
      setStreak(0);
    }

    onRecordAnswer(currentQ.id, optionKey, isCorrect);
  }, [isAnswered, currentQ, maxStreak, onRecordAnswer]);

  const handleNext = useCallback(() => {
    sounds.playClick();
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  }, [currentIndex, filteredQuestions.length]);

  const handlePrev = useCallback(() => {
    sounds.playClick();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(filteredQuestions.length - 1);
    }
  }, [currentIndex, filteredQuestions.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (isAnswered) {
          handleNext();
        }
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (!isAnswered && ['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        if (displayedOptions[idx]) {
          handleSelectOption(displayedOptions[idx].key);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswered, handleNext, handlePrev, displayedOptions, handleSelectOption]);

  if (filteredQuestions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-xs">
          <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-slate-800">No questions found</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            {onlyBookmarked
              ? 'You have not bookmarked any questions in this category yet.'
              : 'Try selecting a different category from the filter list.'}
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setOnlyBookmarked(false);
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors"
          >
            Show All 120 Questions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Category & Filter Strip */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Filter className="w-4 h-4 text-cyan-700" />
            <span className="font-semibold text-slate-700">Filter Topic:</span>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentIndex(0);
              }}
              className="bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-cyan-600"
            >
              <option value="All">All Categories (120 Questions)</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name} ({cat.count})
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setOnlyBookmarked((prev) => !prev);
                setCurrentIndex(0);
              }}
              className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg border transition-colors ${
                onlyBookmarked
                  ? 'bg-amber-50 text-amber-800 border-amber-300 font-semibold'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarked ? 'fill-amber-500 text-amber-600' : ''}`} />
              <span>Bookmarked ({bookmarkedIds.length})</span>
            </button>

            <button
              onClick={onToggleShuffleOptions}
              title={shuffleOptionsSetting ? 'Options are randomized' : 'Showing original A-D order'}
              className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg border transition-colors ${
                shuffleOptionsSetting
                  ? 'bg-cyan-50 text-cyan-800 border-cyan-300 font-semibold'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>{shuffleOptionsSetting ? 'Shuffled Options' : 'Original Order'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs relative">
        {/* Typographic Metadata Header */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-cyan-800">Question {currentQ.id}</span>
            <span aria-hidden="true">·</span>
            <span>{currentQ.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">
              {currentIndex + 1} of {filteredQuestions.length} in view
            </span>
          </div>

          <div className="flex items-center gap-3">
            {streak > 1 && (
              <div className="flex items-center gap-1 text-xs text-emerald-700 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span className="tabular-nums">{streak} streak!</span>
              </div>
            )}
            <button
              onClick={() => onToggleBookmark(currentQ.id)}
              aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark question'}
              className={`p-1.5 rounded-lg transition-colors ${
                isBookmarked
                  ? 'text-amber-600 hover:text-amber-700 bg-amber-50'
                  : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
              }`}
              title="Bookmark for review"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-600' : ''}`} />
            </button>
          </div>
        </div>

        {/* Question Text */}
        <div className="py-5">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight">
            {currentQ.question}
          </h2>
        </div>

        {/* Options List */}
        <div className="space-y-3 pt-2">
          {displayedOptions.map((opt, idx) => {
            const isSelected = userAnswer === opt.key;
            const isCorrectOption = opt.key === currentQ.correctAnswer;

            let buttonStyle = 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300';
            let badgeStyle = 'bg-slate-100 text-slate-600';
            let icon = null;

            if (isAnswered) {
              if (isCorrectOption) {
                buttonStyle = 'bg-emerald-50/90 text-emerald-950 border-emerald-400 font-medium shadow-xs';
                badgeStyle = 'bg-emerald-600 text-white font-bold';
                icon = <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-auto" />;
              } else if (isSelected) {
                buttonStyle = 'bg-rose-50/90 text-rose-950 border-rose-300 shadow-xs';
                badgeStyle = 'bg-rose-600 text-white font-bold';
                icon = <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-auto" />;
              } else {
                buttonStyle = 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
                badgeStyle = 'bg-slate-200 text-slate-500';
              }
            }

            return (
              <button
                key={opt.key}
                onClick={() => handleSelectOption(opt.key)}
                disabled={isAnswered}
                className={`w-full flex items-center gap-3.5 p-4 rounded-xl border text-left transition-all text-sm sm:text-base ${buttonStyle} ${
                  !isAnswered ? 'active:scale-[0.99] cursor-pointer' : 'cursor-default'
                }`}
              >
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${badgeStyle}`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1 leading-relaxed">{opt.text}</span>
                {icon}
              </button>
            );
          })}
        </div>

        {/* Revealed Explanation & Clinical Key */}
        {isAnswered && (
          <div className="mt-6 pt-5 border-t border-slate-100 space-y-4">
            <div className={`p-4 rounded-xl border ${
              userAnswer === currentQ.correctAnswer
                ? 'bg-emerald-50/60 border-emerald-200'
                : 'bg-rose-50/50 border-rose-200'
            }`}>
              <div className="flex items-center gap-2 mb-1.5">
                {userAnswer === currentQ.correctAnswer ? (
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Correct Answer
                  </span>
                ) : (
                  <span className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    Incorrect — Option {currentQ.correctAnswer} is Correct
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mt-1">
                {currentQ.explanation}
              </p>
            </div>

            {currentQ.clinicalKey && (
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
                <span className="font-semibold text-cyan-900 block mb-1">Key Standard & Clinical Rule:</span>
                <p className="font-mono text-slate-800">{currentQ.clinicalKey}</p>
              </div>
            )}
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-2">
            <select
              value={currentIndex}
              onChange={(e) => {
                setCurrentIndex(Number(e.target.value));
              }}
              className="bg-slate-50 border border-slate-200 text-xs text-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none"
            >
              {filteredQuestions.map((q, idx) => (
                <option key={q.id} value={idx}>
                  Q{q.id}: {q.question.slice(0, 32)}...
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
