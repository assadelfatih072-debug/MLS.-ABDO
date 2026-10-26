import React from 'react';
import { Question } from '../types/quiz';
import {
  AlertTriangle,
  Play,
  RotateCcw,
  CheckCircle2,
  Bookmark,
  XCircle
} from 'lucide-react';

interface MissedViewProps {
  allQuestions: Question[];
  missedIds: number[];
  bookmarkedIds: number[];
  onToggleBookmark: (id: number) => void;
  onClearMissed: () => void;
  onStartMissedPractice: () => void;
}

export const MissedView: React.FC<MissedViewProps> = ({
  allQuestions,
  missedIds,
  bookmarkedIds,
  onToggleBookmark,
  onClearMissed,
  onStartMissedPractice,
}) => {
  const missedQuestions = allQuestions.filter((q) => missedIds.includes(q.id));

  if (missedQuestions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-xs space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Zero Missed Questions</h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            You currently have no unmastered or missed questions in your review queue. Great job!
          </p>
          <div className="pt-2">
            <button
              onClick={onStartMissedPractice}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs"
            >
              Start Practice Session
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Banner */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-700 uppercase tracking-wider mb-1">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>Targeted Weak Spot Review</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            {missedQuestions.length} Questions Requiring Review
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            These questions were answered incorrectly during your practice or mock exam attempts.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onClearMissed}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset List</span>
          </button>
          <button
            onClick={onStartMissedPractice}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-800 rounded-lg transition-colors shadow-xs"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Drill All {missedQuestions.length} Missed</span>
          </button>
        </div>
      </div>

      {/* Missed Questions Cards List */}
      <div className="space-y-4">
        {missedQuestions.map((q) => {
          const isBookmarked = bookmarkedIds.includes(q.id);
          const correctText = q.options.find((o) => o.key === q.correctAnswer)?.text;

          return (
            <div
              key={q.id}
              className="bg-white border border-rose-200/70 rounded-xl p-5 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-rose-700">Question {q.id}</span>
                  <span aria-hidden="true">·</span>
                  <span>{q.category}</span>
                </div>

                <button
                  onClick={() => onToggleBookmark(q.id)}
                  className={`p-1 rounded transition-colors ${
                    isBookmarked ? 'text-amber-600' : 'text-slate-400 hover:text-slate-700'
                  }`}
                  title="Bookmark"
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                </button>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {q.question}
              </h3>

              <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg text-xs">
                <span className="font-bold text-emerald-900 block mb-0.5">
                  Correct Answer: ({q.correctAnswer}) {correctText}
                </span>
                <p className="text-slate-700 pt-1 leading-relaxed">{q.explanation}</p>
                {q.clinicalKey && (
                  <p className="text-cyan-900 font-mono text-[11px] pt-1">
                    <span className="font-bold font-sans">Key Standard: </span> {q.clinicalKey}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
