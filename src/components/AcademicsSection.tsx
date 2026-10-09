import React, { useState } from 'react';
import {
  BookOpen,
  Award,
  CheckCircle,
  FileText,
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react';
import { academicSubjects } from '../data/initialData';

export const AcademicsSection: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState(academicSubjects[0]);

  return (
    <section id="academics" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            Punjab Curriculum Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Academic Curriculum & Subjects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Comprehensive elementary educational foundation developed in accordance with the Punjab Curriculum & Textbook Board (PCTB) and Single National Curriculum
          </p>
        </div>

        {/* Interactive Subject Browser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Subject Navigation Pills */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-2 mb-2">
              Select Core Subject
            </span>
            <div className="space-y-1.5">
              {academicSubjects.map((sub) => {
                const isSelected = selectedSubject.name === sub.name;
                return (
                  <button
                    key={sub.code}
                    onClick={() => setSelectedSubject(sub)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between border ${
                      isSelected
                        ? 'bg-emerald-800 text-white border-emerald-800 shadow-md scale-[1.02]'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                    }`}
                  >
                    <div>
                      <p className="font-bold text-xs sm:text-sm">{sub.name}</p>
                      <p className={`font-urdu text-xs mt-0.5 ${isSelected ? 'text-emerald-200' : 'text-slate-400'}`}>
                        {sub.urduName}
                      </p>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      isSelected ? 'bg-emerald-900 text-emerald-200' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {sub.code}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Subject Dossier */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5 mb-6">
              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Subject Code: {selectedSubject.code}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  {selectedSubject.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="font-urdu text-2xl text-emerald-800 font-bold block">
                  {selectedSubject.urduName}
                </span>
                <span className="text-[11px] text-slate-400">Prescribed by PCTB Punjab</span>
              </div>
            </div>

            {/* Curriculum Description */}
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
              <p className="text-base text-slate-800 font-normal">
                {selectedSubject.description}
              </p>

              {/* Core Competencies & Learning Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Learning Outcomes & Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedSubject.highlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Educational Methodology */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  <span>Teaching Methodology at GES Chak 227/W.B</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  Our classroom teachers employ blackboard modeling, oral quizzes, interactive group discussion, and neat exercise notebook revision to ensure thorough conceptual mastery without undue memorization stress.
                </p>
              </div>

              {/* Assessment Scheme */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  <span>Monthly Diagnostic Tests + Term Examinations</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-emerald-700" />
                  <span>Aligned with District Education Authority Lodhran</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
