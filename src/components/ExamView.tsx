import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Question, QuestionCategory } from '../types/quiz';
import { CATEGORIES } from '../data/questions';
import { sounds } from '../utils/sound';
import {
  Clock,
  Flag,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Play,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  ListFilter,
  Check,
  ShieldAlert,
  Flame,
  Award
} from 'lucide-react';

interface ExamViewProps {
  allQuestions: Question[];
  onFinishExamRecord: (score: number, total: number, timeSpent: number, missedIds: number[]) => void;
  onRetakeMissed: (missedIds: number[]) => void;
  shuffleOptionsSetting: boolean;
}

type ExamStatus = 'config' | 'in_progress' | 'results';

export const ExamView: React.FC<ExamViewProps> = ({
  allQuestions,
  onFinishExamRecord,
  onRetakeMissed,
  shuffleOptionsSetting,
}) => {
  const [status, setStatus] = useState<ExamStatus>('config');

  // Exam Configuration
  const [selectedCount, setSelectedCount] = useState<number>(120);
  const [timerMinutes, setTimerMinutes] = useState<number>(90);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  // Active Exam State
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [flaggedIds, setFlaggedIds] = useState<number[]>([]);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(90 * 60);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState<boolean>(false);
  const [showNavGrid, setShowNavGrid] = useState<boolean>(false);

  // Results Review Filter
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'flagged'>('all');

  // Start Exam
  const handleStartExam = () => {
    let pool = [...allQuestions];
    if (categoryFilter !== 'All') {
      pool = pool.filter((q) => q.category === categoryFilter);
    }

    // Shuffle question order for test integrity
    pool = pool.sort(() => Math.random() - 0.5);
    const chosen = pool.slice(0, Math.min(selectedCount, pool.length));

    setExamQuestions(chosen);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedIds([]);
    setRemainingSeconds(timerMinutes > 0 ? timerMinutes * 60 : 0);
    setElapsedSeconds(0);
    setStatus('in_progress');
    sounds.playClick();
  };

  // Timer tick
  useEffect(() => {
    if (status !== 'in_progress') return;

    const interval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);

      if (timerMinutes > 0) {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [status, timerMinutes]);

  const currentQ = examQuestions[currentIndex] || examQuestions[0];
  const isFlagged = currentQ ? flaggedIds.includes(currentQ.id) : false;

  // Shuffled options for current question if setting enabled
  const displayedOptions = useMemo(() => {
    if (!currentQ) return [];
    if (!shuffleOptionsSetting) return currentQ.options;
    const opts = [...currentQ.options];
    const seed = (currentQ.id * 7919) % 233280;
    const offset = seed % opts.length;
    return [...opts.slice(offset), ...opts.slice(0, offset)];
  }, [currentQ, shuffleOptionsSetting]);

  const handleSelectAnswer = (key: 'A' | 'B' | 'C' | 'D') => {
    if (!currentQ) return;
    sounds.playClick();
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: key,
    }));
  };

  const handleToggleFlag = () => {
    if (!currentQ) return;
    setFlaggedIds((prev) =>
      prev.includes(currentQ.id) ? prev.filter((id) => id !== currentQ.id) : [...prev, currentQ.id]
    );
  };

  const handleSubmitExam = useCallback(() => {
    setShowConfirmSubmit(false);
    setStatus('results');
    sounds.playFinish();

    // calculate score
    let correctCount = 0;
    const missed: number[] = [];

    examQuestions.forEach((q) => {
      const ans = userAnswers[q.id];
      if (ans === q.correctAnswer) {
        correctCount++;
      } else {
        missed.push(q.id);
      }
    });

    onFinishExamRecord(correctCount, examQuestions.length, elapsedSeconds, missed);
  }, [examQuestions, userAnswers, elapsedSeconds, onFinishExamRecord]);

  // Results statistics calculation
  const resultsData = useMemo(() => {
    if (status !== 'results') return null;

    let correctCount = 0;
    const categoryStats: Record<string, { total: number; correct: number }> = {};
    const missedQuestionIds: number[] = [];

    examQuestions.forEach((q) => {
      const userAns = userAnswers[q.id];
      const isCorrect = userAns === q.correctAnswer;

      if (!categoryStats[q.category]) {
        categoryStats[q.category] = { total: 0, correct: 0 };
      }
      categoryStats[q.category].total++;

      if (isCorrect) {
        correctCount++;
        categoryStats[q.category].correct++;
      } else {
        missedQuestionIds.push(q.id);
      }
    });

    const percentage = Math.round((correctCount / examQuestions.length) * 100);
    const passed = percentage >= 70;

    return {
      total: examQuestions.length,
      correct: correctCount,
      missed: examQuestions.length - correctCount,
      percentage,
      passed,
      categoryStats,
      missedQuestionIds,
    };
  }, [status, examQuestions, userAnswers]);

  // Format seconds to mm:ss or hh:mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    if (m >= 60) {
      const h = Math.floor(m / 60);
      const rm = m % 60;
      return `${h}:${rm.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // --- 1. CONFIG VIEW ---
  if (status === 'config') {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-2">
            <Award className="w-4 h-4 text-cyan-700" />
            <span>Standardized Assessment</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Medical Laboratory Science Mock Exam
          </h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Test your knowledge across all 120 clinical questions covering Biosafety Levels, Lab Glassware, Autoclaves, Microscopy, Centrifugation, COSHH Regulations, MSDS Hazard Ratings, and Laboratory Mathematics.
          </p>

          <div className="mt-8 space-y-6">
            {/* Question Count Option */}
            <div>
              <label className="text-xs font-semibold text-slate-800 block mb-2">
                Select Exam Length:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { count: 120, label: 'Full 120 Questions', desc: 'Comprehensive Board Exam' },
                  { count: 60, label: '60 Questions', desc: 'Mid-term Practice' },
                  { count: 30, label: '30 Questions', desc: 'Quick Assessment' },
                  { count: 15, label: '15 Questions', desc: 'Speed Sprint' },
                ].map((item) => (
                  <button
                    key={item.count}
                    onClick={() => {
                      setSelectedCount(item.count);
                      if (item.count === 120) setTimerMinutes(90);
                      else if (item.count === 60) setTimerMinutes(45);
                      else if (item.count === 30) setTimerMinutes(25);
                      else setTimerMinutes(15);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedCount === item.count
                        ? 'border-cyan-600 bg-cyan-50/70 text-cyan-950 font-semibold ring-1 ring-cyan-600'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    <div className="text-sm">{item.label}</div>
                    <div className="text-xs text-slate-500 font-normal mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Timer Limit */}
            <div>
              <label className="text-xs font-semibold text-slate-800 block mb-2">
                Time Limit:
              </label>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { mins: 90, label: '90 Minutes' },
                  { mins: 60, label: '60 Minutes' },
                  { mins: 45, label: '45 Minutes' },
                  { mins: 25, label: '25 Minutes' },
                  { mins: 0, label: 'Untimed' },
                ].map((t) => (
                  <button
                    key={t.mins}
                    onClick={() => setTimerMinutes(t.mins)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-lg border transition-colors ${
                      timerMinutes === t.mins
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Scope / Category Filter */}
            <div>
              <label className="text-xs font-semibold text-slate-800 block mb-2">
                Domain Focus:
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full sm:w-80 bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-cyan-600"
              >
                <option value="All">All Laboratory Disciplines (Full 120 Questions)</option>
                {CATEGORIES.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name} ({c.count} questions)
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                <span>Passing Threshold: 70%</span>
                <span className="mx-2">·</span>
                <span>Instant Rationale on Submission</span>
              </div>
              <button
                onClick={handleStartExam}
                className="flex items-center gap-2 px-6 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm rounded-lg transition-colors shadow-xs"
              >
                <Play className="w-4 h-4" />
                <span>Begin Examination</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- 2. IN-PROGRESS EXAM VIEW ---
  if (status === 'in_progress') {
    const answeredCount = Object.keys(userAnswers).length;
    const currentAnswer = userAnswers[currentQ.id];

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Sticky Exam Progress Bar */}
        <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-xs flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3 text-xs text-slate-600">
            <span className="font-semibold text-slate-900">
              Question {currentIndex + 1} of {examQuestions.length}
            </span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{answeredCount} Answered</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{examQuestions.length - answeredCount} Remaining</span>
          </div>

          <div className="flex items-center gap-3">
            {timerMinutes > 0 && (
              <div
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium ${
                  remainingSeconds < 300
                    ? 'bg-rose-100 text-rose-800 animate-pulse'
                    : 'bg-slate-100 text-slate-800'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>{formatTime(remainingSeconds)}</span>
              </div>
            )}

            <button
              onClick={() => setShowNavGrid((prev) => !prev)}
              className="text-xs font-semibold px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700"
            >
              {showNavGrid ? 'Hide Navigator' : 'Question Grid'}
            </button>

            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              Submit Exam
            </button>
          </div>
        </div>

        {/* Collapsible Question Navigation Grid */}
        {showNavGrid && (
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
              <span className="font-semibold text-slate-700">Question Navigator</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800 inline-block"></span> Answered
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200 inline-block"></span> Unanswered
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span> Flagged
                </span>
              </div>
            </div>
            <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-16 gap-1.5 max-h-48 overflow-y-auto p-1">
              {examQuestions.map((q, idx) => {
                const isAns = userAnswers[q.id] !== undefined;
                const isFlag = flaggedIds.includes(q.id);
                const isCurr = idx === currentIndex;

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      sounds.playClick();
                    }}
                    className={`relative h-7 text-xs font-medium rounded transition-all flex items-center justify-center ${
                      isCurr ? 'ring-2 ring-cyan-600 ring-offset-1' : ''
                    } ${
                      isAns
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span>{idx + 1}</span>
                    {isFlag && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Main Question Card */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
          {/* Header Metadata */}
          <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-cyan-800">Item {currentIndex + 1} of {examQuestions.length}</span>
              <span aria-hidden="true">·</span>
              <span>{currentQ.category}</span>
            </div>

            <button
              onClick={handleToggleFlag}
              className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                isFlagged
                  ? 'bg-amber-50 text-amber-800 border-amber-300 font-semibold'
                  : 'text-slate-500 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-500 text-amber-600' : ''}`} />
              <span>{isFlagged ? 'Flagged for Review' : 'Flag Question'}</span>
            </button>
          </div>

          {/* Question Text */}
          <div className="py-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </h2>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {displayedOptions.map((opt, idx) => {
              const isSelected = currentAnswer === opt.key;

              return (
                <button
                  key={opt.key}
                  onClick={() => handleSelectAnswer(opt.key)}
                  className={`w-full flex items-center gap-3.5 p-4 rounded-xl border text-left transition-all text-sm sm:text-base cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-50/80 border-cyan-500 text-cyan-950 font-medium ring-1 ring-cyan-500'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                      isSelected
                        ? 'bg-cyan-700 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1 leading-relaxed">{opt.text}</span>
                  {isSelected && <Check className="w-4 h-4 text-cyan-700 shrink-0 ml-auto" />}
                </button>
              );
            })}
          </div>

          {/* Footer Navigation */}
          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                if (currentIndex > 0) {
                  setCurrentIndex((prev) => prev - 1);
                  sounds.playClick();
                }
              }}
              disabled={currentIndex === 0}
              className={`flex items-center gap-1 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                currentIndex === 0
                  ? 'text-slate-300 bg-slate-50 cursor-not-allowed'
                  : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="text-xs text-slate-500">
              {currentAnswer ? (
                <span className="text-emerald-700 font-medium">Answer Recorded</span>
              ) : (
                <span className="text-slate-400">Unanswered</span>
              )}
            </div>

            {currentIndex < examQuestions.length - 1 ? (
              <button
                onClick={() => {
                  setCurrentIndex((prev) => prev + 1);
                  sounds.playClick();
                }}
                className="flex items-center gap-1 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setShowConfirmSubmit(true)}
                className="flex items-center gap-1 px-4 py-2 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors shadow-xs"
              >
                <span>Review & Submit</span>
              </button>
            )}
          </div>
        </div>

        {/* Confirmation Modal */}
        {showConfirmSubmit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">Submit Examination?</h3>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <p>
                  You have answered <span className="font-semibold text-slate-900">{answeredCount}</span> of{' '}
                  <span className="font-semibold text-slate-900">{examQuestions.length}</span> questions.
                </p>
                {answeredCount < examQuestions.length && (
                  <p className="text-amber-700 text-xs bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                    Warning: You still have {examQuestions.length - answeredCount} unanswered questions!
                  </p>
                )}
                {flaggedIds.length > 0 && (
                  <p className="text-slate-500 text-xs">
                    {flaggedIds.length} questions are flagged for review.
                  </p>
                )}
              </div>
              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowConfirmSubmit(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Continue Test
                </button>
                <button
                  onClick={handleSubmitExam}
                  className="px-4 py-2 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors shadow-xs"
                >
                  Confirm & Grade Exam
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- 3. EXAM RESULTS & REVIEW VIEW ---
  if (status === 'results' && resultsData) {
    const { total, correct, missed, percentage, passed, categoryStats, missedQuestionIds } = resultsData;

    const filteredReviewQuestions = examQuestions.filter((q) => {
      const userAns = userAnswers[q.id];
      if (reviewFilter === 'incorrect') {
        return userAns !== q.correctAnswer;
      }
      if (reviewFilter === 'flagged') {
        return flaggedIds.includes(q.id);
      }
      return true;
    });

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Score Card Banner */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                <span>Examination Score Report</span>
                <span>·</span>
                <span className="tabular-nums">{total} Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {passed ? 'Examination Passed' : 'Did Not Pass'}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Standard Passing Benchmark: 70% · Time Elapsed: {formatTime(elapsedSeconds)}
              </p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className={`text-5xl font-extrabold tabular-nums ${passed ? 'text-emerald-600' : 'text-rose-600'}`}>
                {percentage}%
              </span>
              <span className="text-xs text-slate-400 font-medium">({correct}/{total})</span>
            </div>
          </div>

          {/* Category Performance Breakdown */}
          <div className="mt-6">
            <h4 className="text-xs font-semibold text-slate-800 mb-3 uppercase tracking-wider">
              Performance by Clinical Discipline:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.entries(categoryStats).map(([catName, stat]) => {
                const catPct = Math.round((stat.correct / stat.total) * 100);
                return (
                  <div key={catName} className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between gap-3 text-xs">
                    <span className="text-slate-800 font-medium truncate">{catName}</span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-slate-500 tabular-nums">
                        {stat.correct}/{stat.total}
                      </span>
                      <span className={`font-semibold tabular-nums ${catPct >= 70 ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {catPct}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => setStatus('config')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>New Exam</span>
            </button>

            {missed > 0 && (
              <button
                onClick={() => onRetakeMissed(missedQuestionIds)}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-800 rounded-lg transition-colors shadow-xs"
              >
                <span>Drill {missed} Missed Questions</span>
              </button>
            )}
          </div>
        </div>

        {/* Detailed Item Review Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h3 className="text-base font-bold text-slate-900">
              Question-by-Question Review ({filteredReviewQuestions.length})
            </h3>

            {/* Segmented filter */}
            <div className="flex items-center p-1 bg-slate-100 rounded-lg text-xs font-medium">
              <button
                onClick={() => setReviewFilter('all')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  reviewFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({examQuestions.length})
              </button>
              <button
                onClick={() => setReviewFilter('incorrect')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  reviewFilter === 'incorrect'
                    ? 'bg-white text-rose-800 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Missed ({missed})
              </button>
              <button
                onClick={() => setReviewFilter('flagged')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  reviewFilter === 'flagged'
                    ? 'bg-white text-amber-800 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Flagged ({flaggedIds.length})
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredReviewQuestions.map((q, idx) => {
              const userAns = userAnswers[q.id];
              const isCorrect = userAns === q.correctAnswer;
              const isFlag = flaggedIds.includes(q.id);

              return (
                <div
                  key={q.id}
                  className={`bg-white border rounded-xl p-5 shadow-xs transition-colors ${
                    isCorrect ? 'border-slate-200' : 'border-rose-200 bg-rose-50/20'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-2 mb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-800">Question {q.id}</span>
                      <span aria-hidden="true">·</span>
                      <span>{q.category}</span>
                      {isFlag && (
                        <span className="text-amber-700 font-semibold flex items-center gap-0.5">
                          <Flag className="w-3 h-3 fill-amber-500" /> Flagged
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isCorrect ? (
                        <span className="text-emerald-700 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Correct
                        </span>
                      ) : (
                        <span className="text-rose-700 font-semibold flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5 text-rose-600" /> Incorrect
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="text-sm sm:text-base font-semibold text-slate-900 mb-3">
                    {q.question}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                    {q.options.map((opt) => {
                      const isUserChoice = userAns === opt.key;
                      const isCorrectChoice = opt.key === q.correctAnswer;

                      let optClass = 'bg-slate-50 text-slate-700 border-slate-200';
                      if (isCorrectChoice) {
                        optClass = 'bg-emerald-50 text-emerald-950 border-emerald-300 font-semibold';
                      } else if (isUserChoice && !isCorrectChoice) {
                        optClass = 'bg-rose-50 text-rose-950 border-rose-300 font-medium';
                      }

                      return (
                        <div key={opt.key} className={`p-2.5 rounded-lg border flex items-center gap-2 ${optClass}`}>
                          <span className="font-bold w-4">{opt.key})</span>
                          <span className="flex-1">{opt.text}</span>
                          {isCorrectChoice && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                          {isUserChoice && !isCorrectChoice && <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />}
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1">
                    <p className="text-slate-700">
                      <span className="font-semibold text-slate-900">Clinical Explanation: </span>
                      {q.explanation}
                    </p>
                    {q.clinicalKey && (
                      <p className="text-cyan-900 font-mono text-[11px] pt-1">
                        <span className="font-bold">Standard: </span> {q.clinicalKey}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
};
