import React from 'react';
import { QuizMode } from '../types/quiz';
import { Volume2, VolumeX, Settings, Bookmark } from 'lucide-react';

interface HeaderProps {
  currentMode: QuizMode;
  onSelectMode: (mode: QuizMode) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenSettings: () => void;
  bookmarkedCount: number;
  missedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  soundEnabled,
  onToggleSound,
  onOpenSettings,
  bookmarkedCount,
  missedCount,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Wordmark */}
        <button
          onClick={() => onSelectMode('practice')}
          className="text-lg font-bold tracking-tight text-slate-900 hover:text-cyan-700 transition-colors whitespace-nowrap shrink-0 text-left flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-600 inline-block"></span>
          <span>MedLab Science Prep</span>
        </button>

        {/* Zone 2: Single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => onSelectMode('practice')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              currentMode === 'practice'
                ? 'text-cyan-700 border-cyan-600 font-semibold'
                : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Practice
          </button>
          <button
            onClick={() => onSelectMode('exam')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              currentMode === 'exam'
                ? 'text-cyan-700 border-cyan-600 font-semibold'
                : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Mock Exam
          </button>
          <button
            onClick={() => onSelectMode('flashcard')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              currentMode === 'flashcard'
                ? 'text-cyan-700 border-cyan-600 font-semibold'
                : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Flashcards
          </button>
          <button
            onClick={() => onSelectMode('bank')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              currentMode === 'bank'
                ? 'text-cyan-700 border-cyan-600 font-semibold'
                : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Question Bank (120)
          </button>
          <button
            onClick={() => onSelectMode('missed')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 flex items-center gap-1.5 ${
              currentMode === 'missed'
                ? 'text-rose-700 border-rose-600 font-semibold'
                : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            <span>Review Missed</span>
            {missedCount > 0 && (
              <span className="text-xs bg-rose-100 text-rose-700 px-1.5 py-0.2 rounded font-semibold tabular-nums">
                {missedCount}
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: Primary Action & Quick Tools */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onToggleSound}
            aria-label={soundEnabled ? 'Mute sound' : 'Enable sound'}
            className="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
            title={soundEnabled ? 'Sound is ON' : 'Sound is OFF'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>
          <button
            onClick={onOpenSettings}
            aria-label="Settings"
            className="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
            title="Preferences & Reset"
          >
            <Settings className="w-4 h-4" />
          </button>
          <button
            onClick={() => onSelectMode('exam')}
            className="hidden sm:inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            Take 120 Exam
          </button>
        </div>
      </div>

      {/* Mobile secondary navigation */}
      <div className="flex md:hidden items-center justify-around border-t border-slate-100 px-2 py-2 overflow-x-auto text-xs font-medium text-slate-600">
        <button
          onClick={() => onSelectMode('practice')}
          className={`px-2.5 py-1 rounded ${currentMode === 'practice' ? 'bg-cyan-50 text-cyan-800 font-semibold' : ''}`}
        >
          Practice
        </button>
        <button
          onClick={() => onSelectMode('exam')}
          className={`px-2.5 py-1 rounded ${currentMode === 'exam' ? 'bg-cyan-50 text-cyan-800 font-semibold' : ''}`}
        >
          Exam
        </button>
        <button
          onClick={() => onSelectMode('flashcard')}
          className={`px-2.5 py-1 rounded ${currentMode === 'flashcard' ? 'bg-cyan-50 text-cyan-800 font-semibold' : ''}`}
        >
          Flashcards
        </button>
        <button
          onClick={() => onSelectMode('bank')}
          className={`px-2.5 py-1 rounded ${currentMode === 'bank' ? 'bg-cyan-50 text-cyan-800 font-semibold' : ''}`}
        >
          Bank (120)
        </button>
        <button
          onClick={() => onSelectMode('missed')}
          className={`px-2.5 py-1 rounded flex items-center gap-1 ${currentMode === 'missed' ? 'bg-rose-50 text-rose-800 font-semibold' : ''}`}
        >
          Missed {missedCount > 0 ? `(${missedCount})` : ''}
        </button>
      </div>
    </header>
  );
};
