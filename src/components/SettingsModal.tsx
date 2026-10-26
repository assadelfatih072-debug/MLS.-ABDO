import React from 'react';
import { X, Volume2, VolumeX, Shuffle, Trash2, History } from 'lucide-react';
import { StoredProgress } from '../utils/storage';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: StoredProgress;
  onToggleSound: () => void;
  onToggleShuffleOptions: () => void;
  onResetProgress: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  progress,
  onToggleSound,
  onToggleShuffleOptions,
  onResetProgress,
}) => {
  if (!isOpen) return null;

  const exams = progress.recentExams || [];
  const avgScore = exams.length > 0
    ? Math.round(exams.reduce((sum, e) => sum + e.percentage, 0) / exams.length)
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h3 className="text-base font-bold text-slate-900">App Preferences</h3>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 text-xs">
          {/* Sound Toggle */}
          <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex items-center gap-2.5">
              {progress.settings.soundEnabled ? (
                <Volume2 className="w-4 h-4 text-cyan-700" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
              <div>
                <span className="font-semibold text-slate-800 block">Sound Effects</span>
                <span className="text-[11px] text-slate-500">Audio chime for correct/incorrect answers</span>
              </div>
            </div>
            <button
              onClick={onToggleSound}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                progress.settings.soundEnabled
                  ? 'bg-cyan-700 text-white'
                  : 'bg-slate-200 text-slate-700'
              }`}
            >
              {progress.settings.soundEnabled ? 'Enabled' : 'Muted'}
            </button>
          </div>

          {/* Shuffle Options Toggle */}
          <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex items-center gap-2.5">
              <Shuffle className="w-4 h-4 text-cyan-700" />
              <div>
                <span className="font-semibold text-slate-800 block">Shuffle Option Positions</span>
                <span className="text-[11px] text-slate-500">Randomize A-D order for true recall testing</span>
              </div>
            </div>
            <button
              onClick={onToggleShuffleOptions}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                progress.settings.shuffleOptions
                  ? 'bg-cyan-700 text-white'
                  : 'bg-slate-200 text-slate-700'
              }`}
            >
              {progress.settings.shuffleOptions ? 'Random' : 'Original'}
            </button>
          </div>

          {/* Exam History Summary */}
          {exams.length > 0 && (
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <History className="w-4 h-4 text-cyan-700" />
                <span>Exam History ({exams.length} completed)</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 text-[11px] pt-1">
                <span>Average Score: <strong className="text-slate-900">{avgScore}%</strong></span>
                <span>Last Score: <strong className="text-slate-900">{exams[exams.length - 1].percentage}%</strong></span>
              </div>
            </div>
          )}

          {/* Reset Action */}
          <div className="pt-2">
            <button
              onClick={() => {
                if (window.confirm('Reset all saved bookmarks, missed questions, and exam history?')) {
                  onResetProgress();
                  onClose();
                }
              }}
              className="w-full flex items-center justify-center gap-1.5 p-2.5 rounded-lg border border-rose-200 text-rose-700 hover:bg-rose-50 font-semibold transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Stored Progress & History</span>
            </button>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
