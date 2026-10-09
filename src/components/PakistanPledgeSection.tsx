import React, { useState } from 'react';
import {
  Flag,
  Heart,
  ShieldCheck,
  Sparkles,
  Send,
  Plus,
  Award,
  CheckCircle2,
  Users
} from 'lucide-react';
import { Pledge } from '../types';
import { initialPledges } from '../data/initialData';

export const PakistanPledgeSection: React.FC = () => {
  const [pledges, setPledges] = useState<Pledge[]>(initialPledges);
  const [showPledgeForm, setShowPledgeForm] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentGrade, setStudentGrade] = useState('Grade 5');
  const [pledgeText, setPledgeText] = useState(
    'I pledge to respect my country, keep my school clean, learn honestly and become a responsible citizen of Pakistan.'
  );

  const pillars = [
    { title: 'Education', urdu: 'تعلیم' },
    { title: 'Honesty', urdu: 'دیانت داری' },
    { title: 'Cleanliness', urdu: 'صفائی' },
    { title: 'Peace', urdu: 'امن' },
    { title: 'Loyalty', urdu: 'وفاداری' },
  ];

  const handleAddPledge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !pledgeText.trim()) return;

    const newPledge: Pledge = {
      id: `plg-${Date.now()}`,
      studentName: studentName.trim(),
      grade: studentGrade,
      pledgeText: pledgeText.trim(),
      date: 'Today',
      verified: true,
    };

    setPledges([newPledge, ...pledges]);
    setShowPledgeForm(false);
    setStudentName('');
  };

  return (
    <section id="pledge" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-emerald-50/40 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-300 mb-2">
            <Flag className="w-3.5 h-3.5 text-emerald-700" />
            Civic Devotion & National Duty
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            My Pakistan — My Responsibility
          </h2>
          <p className="font-urdu text-xl text-emerald-900 mt-1">
            میرا پاکستان — میری ذمہ داری
          </p>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Instilling patriotic loyalty, civic pride, and selfless devotion to the motherland in every elementary student.
          </p>
        </div>

        {/* 5 Core Pillars Ribbon Required: Education • Honesty • Cleanliness • Peace • Loyalty */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-4xl mx-auto mb-14">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-emerald-200/90 p-4 text-center shadow-2xs hover:shadow-md hover:border-emerald-400 transition"
            >
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">
                Pillar {idx + 1}
              </span>
              <p className="text-base font-extrabold text-emerald-900 mt-0.5">
                {p.title}
              </p>
              <p className="font-urdu text-base text-emerald-700 font-bold">
                {p.urdu}
              </p>
            </div>
          ))}
        </div>

        {/* Digital Pledge Wall Banner */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Digital Pakistan Pledge Wall</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Student and visitor commitments to make our school, village, and Pakistan clean, honest, and prosperous.
              </p>
            </div>

            <button
              onClick={() => setShowPledgeForm(!showPledgeForm)}
              className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition shadow-xs flex items-center gap-2 cursor-pointer shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Make Your Pledge</span>
            </button>
          </div>

          {/* Interactive Pledge Submission Form */}
          {showPledgeForm && (
            <div className="mb-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-300 text-xs">
              <h4 className="font-bold text-slate-900 text-sm mb-3">Record Your Personal Pledge</h4>
              <form onSubmit={handleAddPledge} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Your Name / Student Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ahmad"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full p-2.5 border border-slate-300 rounded-lg bg-white"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Class / Grade / Role</label>
                    <input
                      type="text"
                      value={studentGrade}
                      onChange={(e) => setStudentGrade(e.target.value)}
                      placeholder="e.g. Grade 6 or Proud Parent"
                      className="w-full p-2.5 border border-slate-300 rounded-lg bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Your Pledge Statement</label>
                  <textarea
                    rows={2}
                    required
                    value={pledgeText}
                    onChange={(e) => setPledgeText(e.target.value)}
                    className="w-full p-2.5 border border-slate-300 rounded-lg bg-white leading-relaxed"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPledgeForm(false)}
                    className="px-4 py-2 border rounded-lg text-slate-700 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-emerald-800 text-white rounded-lg font-bold shadow-xs flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Display On Pledge Wall</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Pledges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pledges.map((plg) => (
              <div
                key={plg.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-emerald-50/40 hover:border-emerald-300 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-full text-[10px]">
                      {plg.grade}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{plg.date}</span>
                  </div>

                  <blockquote className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{plg.pledgeText}"
                  </blockquote>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-900">
                  <span>{plg.studentName}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
