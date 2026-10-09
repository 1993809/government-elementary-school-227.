import React, { useState } from 'react';
import { Sparkles, Edit3, Check, Calendar, Hash, Heart, BookOpen } from 'lucide-react';
import { initialMonthlyTheme } from '../data/initialData';
import { UserRole } from '../types';

interface ThemeOfTheMonthProps {
  currentRole: UserRole;
}

export const ThemeOfTheMonthSection: React.FC<ThemeOfTheMonthProps> = ({ currentRole }) => {
  const [themeData, setThemeData] = useState(initialMonthlyTheme);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(initialMonthlyTheme);

  const canEdit = currentRole === 'admin' || currentRole === 'teacher';

  const handleSave = () => {
    setThemeData(editForm);
    setIsEditing(false);
  };

  return (
    <section id="theme" className="py-16 sm:py-24 bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-950 text-white relative overflow-hidden">
      {/* Decorative watermarks */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-emerald-700/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-green-700/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header pill & Action */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Official Monthly Educational Focus</span>
            <span>•</span>
            <span>{themeData.month}</span>
          </div>

          {canEdit && (
            <button
              onClick={() => {
                if (isEditing) handleSave();
                else setIsEditing(true);
              }}
              className="px-3.5 py-1.5 bg-white text-emerald-950 hover:bg-emerald-100 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              {isEditing ? <Check className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
              <span>{isEditing ? 'Save Theme' : 'Edit Theme'}</span>
            </button>
          )}
        </div>

        {/* Content Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 sm:p-12 shadow-2xl space-y-6">
          
          {isEditing ? (
            <div className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-emerald-200 block mb-1">Theme Title (English)</label>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-white text-slate-900 font-bold text-sm"
                />
              </div>

              <div>
                <label className="font-bold text-emerald-200 block mb-1">Urdu Title</label>
                <input
                  type="text"
                  value={editForm.urduTitle}
                  onChange={(e) => setEditForm({ ...editForm, urduTitle: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-white text-slate-900 font-urdu text-sm"
                />
              </div>

              <div>
                <label className="font-bold text-emerald-200 block mb-1">Theme Description & Quote</label>
                <textarea
                  rows={4}
                  value={editForm.quote}
                  onChange={(e) => setEditForm({ ...editForm, quote: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-white text-slate-900 leading-relaxed text-xs"
                />
              </div>
            </div>
          ) : (
            <>
              <div className="text-center sm:text-left space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                  Theme of the Month
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                  "{themeData.title}"
                </h3>
                <p className="font-urdu text-2xl text-emerald-200 pt-1">
                  {themeData.urduTitle}
                </p>
              </div>

              {/* Exact Quote as specified in prompt */}
              <blockquote className="border-l-4 border-amber-400 pl-6 py-2 text-base sm:text-xl text-emerald-50 font-normal leading-relaxed italic bg-black/15 rounded-r-2xl">
                "{themeData.quote}"
              </blockquote>

              {/* Student Action Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {themeData.guidelines.map((g, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-emerald-100 flex items-start gap-2">
                    <Heart className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                    <span>{g}</span>
                  </div>
                ))}
              </div>

              {/* Official Hashtags Required */}
              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-2">
                <span className="text-xs text-emerald-300 font-medium">Official Hashtags:</span>
                {themeData.hashtags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-700/80 hover:bg-emerald-600/80 text-white text-xs font-mono font-bold border border-emerald-500/50 transition cursor-default"
                  >
                    <Hash className="w-3 h-3 text-amber-300" />
                    <span>{tag.replace(/^#/, '')}</span>
                  </span>
                ))}
              </div>
            </>
          )}

        </div>

      </div>
    </section>
  );
};
