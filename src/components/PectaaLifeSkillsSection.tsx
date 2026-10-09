import React, { useState } from 'react';
import {
  HeartHandshake,
  Users,
  Sparkles,
  ShieldCheck,
  Bike,
  Flag,
  Award,
  Calendar,
  CheckCircle,
  Edit2,
  Check,
  X
} from 'lucide-react';
import { pectaaActivities } from '../data/initialData';
import { UserRole } from '../types';

interface PectaaLifeSkillsProps {
  currentRole: UserRole;
}

export const PectaaLifeSkillsSection: React.FC<PectaaLifeSkillsProps> = ({ currentRole }) => {
  const [activitiesList, setActivitiesList] = useState(pectaaActivities);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDesc, setEditDesc] = useState('');

  const [weeklyAssemblyMsg, setWeeklyAssemblyMsg] = useState(
    'Always give way to others, maintain single-file queues without pushing, and speak gently with peers.'
  );
  const [dailyGoodHabit, setDailyGoodHabit] = useState(
    'Keep your desk clean and pick up any piece of paper or wrapper you see on the school grounds.'
  );
  const [fortnightlyPoster, setFortnightlyPoster] = useState(
    'Theme: "Zero Plastic, Clean Lodhran" — Draw and write a slogan on paper to display on the corridor wall.'
  );

  const [isEditingHighlights, setIsEditingHighlights] = useState(false);

  const canEdit = currentRole === 'admin' || currentRole === 'teacher';

  const startEdit = (id: string, title: string, desc: string) => {
    setEditingId(id);
    setEditTitle(title);
    setEditDesc(desc);
  };

  const saveEdit = (id: string) => {
    setActivitiesList((prev) =>
      prev.map((a) => (a.id === id ? { ...a, title: editTitle, description: editDesc } : a))
    );
    setEditingId(null);
  };

  return (
    <section id="pectaa" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-300 mb-2">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
            Character, Civic Duty & Responsibility
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            PECTAA Civic Sense & Life Skills
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Fostering ethical conduct, community responsibility, queue discipline, hygiene, and proud Pakistani citizenship from childhood.
          </p>
        </div>

        {/* 3 Core Highlights: Weekly Assembly Message, Daily Good Habit, Fortnightly Poster Activity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          {/* Weekly Assembly Message */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-900 text-white p-6 shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full text-emerald-100">
                  Weekly Focus
                </span>
                <Calendar className="w-4 h-4 text-emerald-300" />
              </div>
              <h3 className="text-lg font-bold mb-2">Weekly Assembly Message</h3>
              {isEditingHighlights ? (
                <textarea
                  rows={3}
                  value={weeklyAssemblyMsg}
                  onChange={(e) => setWeeklyAssemblyMsg(e.target.value)}
                  className="w-full text-xs p-2 rounded bg-white text-slate-900"
                />
              ) : (
                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                  "{weeklyAssemblyMsg}"
                </p>
              )}
            </div>
            <span className="text-[10px] text-emerald-300 pt-3 border-t border-white/10 mt-3 block">
              Recited during morning parade
            </span>
          </div>

          {/* Daily Good Habit */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-800 to-indigo-900 text-white p-6 shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full text-blue-100">
                  Everyday Practice
                </span>
                <CheckCircle className="w-4 h-4 text-blue-300" />
              </div>
              <h3 className="text-lg font-bold mb-2">Daily Good Habit</h3>
              {isEditingHighlights ? (
                <textarea
                  rows={3}
                  value={dailyGoodHabit}
                  onChange={(e) => setDailyGoodHabit(e.target.value)}
                  className="w-full text-xs p-2 rounded bg-white text-slate-900"
                />
              ) : (
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  "{dailyGoodHabit}"
                </p>
              )}
            </div>
            <span className="text-[10px] text-blue-300 pt-3 border-t border-white/10 mt-3 block">
              Monitored by Class Incharges
            </span>
          </div>

          {/* Fortnightly Poster Activity */}
          <div className="rounded-2xl bg-gradient-to-br from-amber-700 to-orange-800 text-white p-6 shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full text-amber-100">
                  Creative Campaign
                </span>
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
              <h3 className="text-lg font-bold mb-2">Fortnightly Poster Activity</h3>
              {isEditingHighlights ? (
                <textarea
                  rows={3}
                  value={fortnightlyPoster}
                  onChange={(e) => setFortnightlyPoster(e.target.value)}
                  className="w-full text-xs p-2 rounded bg-white text-slate-900"
                />
              ) : (
                <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
                  "{fortnightlyPoster}"
                </p>
              )}
            </div>
            <span className="text-[10px] text-amber-300 pt-3 border-t border-white/10 mt-3 block">
              Display on School Notice Board
            </span>
          </div>

        </div>

        {canEdit && (
          <div className="text-right mb-6">
            <button
              onClick={() => setIsEditingHighlights(!isEditingHighlights)}
              className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition"
            >
              {isEditingHighlights ? 'Save Highlights' : 'Edit Civic Highlights (Faculty Mode)'}
            </button>
          </div>
        )}

        {/* 6 Comprehensive PECTAA Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activitiesList.map((act) => {
            const isEditing = editingId === act.id;

            return (
              <div
                key={act.id}
                className="rounded-2xl border border-slate-200 p-6 bg-slate-50/70 hover:bg-white hover:border-emerald-300 shadow-2xs hover:shadow-md transition flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                      {act.category}
                    </span>

                    {canEdit && !isEditing && (
                      <button
                        onClick={() => startEdit(act.id, act.title, act.description)}
                        className="p-1 text-slate-400 hover:text-emerald-700"
                        title="Edit Activity"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {isEditing ? (
                    <div className="space-y-2 mb-3">
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="w-full text-xs p-1.5 border rounded bg-white"
                      />
                      <textarea
                        rows={3}
                        value={editDesc}
                        onChange={(e) => setEditDesc(e.target.value)}
                        className="w-full text-xs p-1.5 border rounded bg-white"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => saveEdit(act.id)}
                          className="px-2.5 py-1 bg-emerald-700 text-white rounded text-[11px] font-bold"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-2.5 py-1 border rounded text-[11px] text-slate-600"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition">
                        {act.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 italic">
                        <strong>Goal: </strong>{act.objective}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 mt-3 leading-relaxed">
                        {act.description}
                      </p>
                    </>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-800 font-bold text-[11px]">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>{act.weeklyBadge}</span>
                  </span>
                  <span className="text-[10px] text-slate-400">Lodhran PECTAA</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
