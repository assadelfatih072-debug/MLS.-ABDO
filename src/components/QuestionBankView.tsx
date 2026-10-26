import React, { useState, useMemo } from 'react';
import { Question, QuestionCategory } from '../types/quiz';
import { CATEGORIES } from '../data/questions';
import {
  Search,
  Printer,
  Bookmark,
  CheckCircle2,
  Copy,
  Check,
  LayoutGrid,
  Table as TableIcon,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface QuestionBankViewProps {
  questions: Question[];
  bookmarkedIds: number[];
  onToggleBookmark: (id: number) => void;
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({
  questions,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return questions.filter((q) => {
      const matchCat = selectedCategory === 'All' || q.category === selectedCategory;
      if (!matchCat) return false;

      if (!searchQuery.trim()) return true;
      const qText = q.question.toLowerCase();
      const expText = q.explanation.toLowerCase();
      const keyText = q.clinicalKey.toLowerCase();
      const optionsText = q.options.map((o) => o.text.toLowerCase()).join(' ');
      const qNum = q.id.toString();

      const term = searchQuery.toLowerCase().trim();
      return (
        qText.includes(term) ||
        expText.includes(term) ||
        keyText.includes(term) ||
        optionsText.includes(term) ||
        qNum === term
      );
    });
  }, [questions, selectedCategory, searchQuery]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = (q: Question) => {
    const text = `Q${q.id}. ${q.question}\nCorrect Answer: ${
      q.options.find((o) => o.key === q.correctAnswer)?.text
    }\nExplanation: ${q.explanation}\nStandard: ${q.clinicalKey}`;
    navigator.clipboard.writeText(text);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Strip with Search & Controls */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4 no-print">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Medical Laboratory Science Question Bank
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Comprehensive 120-question syllabus reference with verified clinical standards.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Study Sheet</span>
            </button>

            {/* View switcher */}
            <div className="flex items-center p-0.5 bg-slate-100 rounded-lg text-xs">
              <button
                onClick={() => setViewMode('cards')}
                className={`p-1.5 rounded-md transition-colors ${
                  viewMode === 'cards' ? 'bg-white shadow-xs text-slate-900 font-semibold' : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Expanded cards"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-md transition-colors ${
                  viewMode === 'table' ? 'bg-white shadow-xs text-slate-900 font-semibold' : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Compact summary table"
              >
                <TableIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 120 questions, topics, autoclaves, borosilicate, stains, COSHH..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-600 text-slate-800 placeholder-slate-400"
            />
          </div>

          <div className="w-full sm:w-auto flex items-center gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-60 text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none"
            >
              <option value="All">All Categories ({questions.length})</option>
              {CATEGORIES.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name} ({c.count})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
          <span>
            Showing <span className="font-semibold text-slate-800 tabular-nums">{filtered.length}</span> of 120 questions
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-cyan-700 hover:underline"
            >
              Clear search
            </button>
          )}
        </div>
      </div>

      {/* --- Print Header (Only visible on print) --- */}
      <div className="hidden print-only mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold">Medical Laboratory Technology — 120 Examination Syllabus</h1>
        <p className="text-sm text-gray-600">Complete Study Bank with Clinical Keys & Answers</p>
      </div>

      {/* CARD VIEW */}
      {viewMode === 'cards' && (
        <div className="space-y-4">
          {filtered.map((q) => {
            const isBookmarked = bookmarkedIds.includes(q.id);
            const isExpanded = expandedId === q.id;

            return (
              <div
                key={q.id}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between gap-3 text-xs text-slate-500 pb-2 mb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-cyan-800">Q{q.id}</span>
                    <span aria-hidden="true">·</span>
                    <span>{q.category}</span>
                  </div>

                  <div className="flex items-center gap-2 no-print">
                    <button
                      onClick={() => handleCopy(q)}
                      className="p-1 text-slate-400 hover:text-slate-700 rounded transition-colors"
                      title="Copy question text"
                    >
                      {copiedId === q.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
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
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
                  {q.question}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                  {q.options.map((opt) => {
                    const isCorrect = opt.key === q.correctAnswer;
                    return (
                      <div
                        key={opt.key}
                        className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                          isCorrect
                            ? 'bg-emerald-50 text-emerald-950 border-emerald-300 font-semibold'
                            : 'bg-slate-50 text-slate-700 border-slate-200'
                        }`}
                      >
                        <span className="font-bold w-4">{opt.key})</span>
                        <span className="flex-1">{opt.text}</span>
                        {isCorrect && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1">
                  <p className="text-slate-700">
                    <span className="font-semibold text-slate-900">Rationale: </span>
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
      )}

      {/* COMPACT TABLE VIEW */}
      {viewMode === 'table' && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                  <th className="py-3 px-3.5 w-12 text-center">#</th>
                  <th className="py-3 px-4">Question</th>
                  <th className="py-3 px-4 w-48">Correct Answer</th>
                  <th className="py-3 px-4 w-40">Discipline</th>
                  <th className="py-3 px-3.5 w-16 text-center no-print">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {filtered.map((q) => {
                  const isBookmarked = bookmarkedIds.includes(q.id);
                  const isExpanded = expandedId === q.id;
                  const correctText = q.options.find((o) => o.key === q.correctAnswer)?.text;

                  return (
                    <React.Fragment key={q.id}>
                      <tr
                        onClick={() => setExpandedId(isExpanded ? null : q.id)}
                        className="hover:bg-slate-50/80 cursor-pointer transition-colors"
                      >
                        <td className="py-3 px-3.5 text-center font-bold text-slate-500 tabular-nums">
                          {q.id}
                        </td>
                        <td className="py-3 px-4 font-medium max-w-md">
                          <div className="line-clamp-2">{q.question}</div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
                            {q.correctAnswer}) {correctText}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-500 text-[11px]">
                          {q.category}
                        </td>
                        <td className="py-3 px-3.5 text-center no-print" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => onToggleBookmark(q.id)}
                            className={`p-1 rounded ${isBookmarked ? 'text-amber-600' : 'text-slate-400 hover:text-slate-700'}`}
                          >
                            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                          </button>
                        </td>
                      </tr>
                      {isExpanded && (
                        <tr className="bg-slate-50/60">
                          <td colSpan={5} className="py-3 px-6 text-xs text-slate-700">
                            <div className="space-y-1.5 py-1">
                              <p>
                                <span className="font-semibold text-slate-900">Full Explanation: </span>
                                {q.explanation}
                              </p>
                              {q.clinicalKey && (
                                <p className="font-mono text-[11px] text-cyan-900">
                                  <span className="font-bold">Clinical Standard: </span> {q.clinicalKey}
                                </p>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
