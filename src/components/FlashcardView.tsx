import React, { useState, useEffect } from 'react';
import { Question } from '../types/quiz';
import { CATEGORIES } from '../data/questions';
import { sounds } from '../utils/sound';
import {
  RotateCw,
  CheckCircle2,
  XCircle,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface FlashcardViewProps {
  questions: Question[];
  masteredIds: number[];
  onToggleMastered: (id: number, isMastered: boolean) => void;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({
  questions,
  masteredIds,
  onToggleMastered,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [cardList, setCardList] = useState<Question[]>(questions);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    let filtered = [...questions];
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((q) => q.category === selectedCategory);
    }
    setCardList(filtered);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [questions, selectedCategory]);

  const currentQ = cardList[currentIndex] || questions[0];
  const isMastered = currentQ ? masteredIds.includes(currentQ.id) : false;

  const handleFlip = () => {
    sounds.playClick();
    setIsFlipped((prev) => !prev);
  };

  const handleNext = () => {
    sounds.playClick();
    setIsFlipped(false);
    if (currentIndex < cardList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    sounds.playClick();
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(cardList.length - 1);
    }
  };

  const handleShuffle = () => {
    sounds.playClick();
    setCardList((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleMarkMastered = (mastered: boolean) => {
    if (!currentQ) return;
    if (mastered) {
      sounds.playCorrect();
    } else {
      sounds.playIncorrect();
    }
    onToggleMastered(currentQ.id, mastered);
    handleNext();
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === '1') {
        handleMarkMastered(false);
      } else if (e.key === '2') {
        handleMarkMastered(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, cardList.length, currentQ]);

  const correctOptionText = currentQ
    ? currentQ.options.find((o) => o.key === currentQ.correctAnswer)?.text
    : '';

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Filter and Progress */}
      <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-xs flex items-center justify-between gap-3 flex-wrap text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-700">Topic:</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-50 border border-slate-200 text-slate-800 rounded-lg px-2.5 py-1.5 focus:outline-none"
          >
            <option value="All">All Categories ({questions.length})</option>
            {CATEGORIES.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name} ({c.count})
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-500 tabular-nums">
            Card {currentIndex + 1} of {cardList.length}
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="text-emerald-700 font-medium tabular-nums">
            {masteredIds.length} Mastered
          </span>
          <button
            onClick={handleShuffle}
            className="flex items-center gap-1 px-2.5 py-1 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            title="Shuffle card order"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Shuffle</span>
          </button>
        </div>
      </div>

      {/* 3D Flashcard Container */}
      <div
        onClick={handleFlip}
        role="button"
        tabIndex={0}
        aria-label="Click to flip flashcard"
        className="w-full min-h-[380px] bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-xs cursor-pointer hover:border-slate-300 transition-all flex flex-col justify-between select-none relative group"
      >
        {/* Card Top Banner */}
        <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="font-bold text-cyan-800">Q{currentQ?.id}</span>
            <span aria-hidden="true">·</span>
            <span>{currentQ?.category}</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-slate-600 transition-colors">
            <RotateCw className="w-3.5 h-3.5" />
            <span>{isFlipped ? 'Showing Answer' : 'Click / Space to Flip'}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="my-auto py-6">
          {!isFlipped ? (
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                Question Prompt
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                {currentQ?.question}
              </h3>
              <p className="text-xs text-slate-400 pt-2">
                Recall the exact answer and laboratory standard before flipping.
              </p>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Correct Laboratory Answer</span>
              </div>
              <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl">
                <h4 className="text-xl sm:text-2xl font-bold text-emerald-950">
                  {correctOptionText}
                </h4>
              </div>
              <div className="text-sm text-slate-700 leading-relaxed pt-1">
                <p>{currentQ?.explanation}</p>
              </div>
              {currentQ?.clinicalKey && (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-800">
                  <span className="font-bold text-cyan-900 font-sans block mb-0.5">Clinical Key:</span>
                  {currentQ.clinicalKey}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Card Bottom status indicator */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>{isMastered ? 'Status: Mastered' : 'Status: In Review'}</span>
          <span className="text-[11px] text-slate-400">Card {currentIndex + 1} of {cardList.length}</span>
        </div>
      </div>

      {/* Mastery Rating Actions & Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handlePrev}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>
          <button
            onClick={handleNext}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button
            onClick={() => handleMarkMastered(false)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-rose-800 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg transition-colors"
          >
            <XCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>Still Learning (1)</span>
          </button>
          <button
            onClick={() => handleMarkMastered(true)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-xs"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Mastered (2)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
