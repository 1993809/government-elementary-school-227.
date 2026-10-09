import React, { useState } from 'react';
import {
  Sun,
  BookOpen,
  Heart,
  Flag,
  Sparkles,
  Calendar,
  Volume2,
  Users,
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { initialAssemblyItem } from '../data/initialData';

export const MorningAssemblySection: React.FC = () => {
  const [showArchive, setShowArchive] = useState(false);
  const [showAnthemLyrics, setShowAnthemLyrics] = useState(false);

  const archiveItems = [
    {
      week: 'Week 1 - October',
      theme: 'Punctuality & Morning Discipline',
      thought: 'Time is the greatest capital of a student.',
      verse: 'Surah Al-Asr (By time, indeed mankind is in loss, except those who believe...)',
    },
    {
      week: 'Week 4 - September',
      theme: 'Respect for Parents & Teachers',
      thought: 'A nation rises on the shoulders of educated youth.',
      verse: 'Surah Al-Isra: 23 (And your Lord has decreed that you not worship except Him, and to parents, good treatment.)',
    },
    {
      week: 'Week 3 - September',
      theme: 'Saaf Suthra Punjab (Cleanliness)',
      thought: 'Cleanliness in thought and environment reflects purity of heart.',
      verse: 'Surah Al-Baqarah: 222 (Indeed, Allah loves those who are constantly repentant and loves those who purify themselves.)',
    },
  ];

  return (
    <section id="assembly" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300 mb-2">
            <Sun className="w-3.5 h-3.5 text-amber-600" />
            Spiritual & Civic Morning Routine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Daily Morning Assembly
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Commencing each school day with the remembrance of Almighty Allah, devotion to the Holy Prophet ﷺ, love for Pakistan, and civic inspiration.
          </p>
        </div>

        {/* Assembly Order of Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Main Program Roster */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* 1. Tilawat & Translation */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-sm transition">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 uppercase">
                  1. تلاوتِ قرآنِ مجید (Tilawat & Translation)
                </span>
                <BookOpen className="w-4 h-4 text-emerald-700" />
              </div>
              <p className="font-urdu text-xl text-slate-900 text-right leading-loose pt-1">
                {initialAssemblyItem.quranVerse}
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 italic">
                {initialAssemblyItem.quranTranslation}
              </div>
            </div>

            {/* 2. Naat-e-Rasool-e-Maqbool ﷺ */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-sm transition">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 uppercase">
                  2. نعتِ رسولِ مقبول ﷺ (Naat-e-Rasool)
                </span>
                <Heart className="w-4 h-4 text-teal-700" />
              </div>
              <p className="font-urdu text-lg text-slate-900 text-right leading-loose pt-1">
                {initialAssemblyItem.naatLine}
              </p>
            </div>

            {/* 3. Hadith-e-Nabawi ﷺ */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-sm transition">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 uppercase">
                  3. حدیثِ مبارکہ (Hadith of the Day)
                </span>
                <Sparkles className="w-4 h-4 text-blue-700" />
              </div>
              <p className="font-urdu text-lg text-slate-900 text-right leading-loose pt-1">
                {initialAssemblyItem.hadith}
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 italic">
                {initialAssemblyItem.hadithTranslation}
              </div>
            </div>

            {/* 4. Thought of the Day & Civic Message */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs">
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  4. Thought of the Day
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed italic">
                  "{initialAssemblyItem.thoughtOfTheDay}"
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                  5. Civic Sense & Character Message
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed italic">
                  "{initialAssemblyItem.civicMessage}"
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: National Anthem & Student Participation Roster */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* National Anthem Card */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-900 to-green-950 text-white p-6 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full text-emerald-200">
                  National Protocol
                </span>
                <Flag className="w-5 h-5 text-amber-300" />
              </div>
              <h3 className="text-xl font-bold">قومی ترانہ (National Anthem)</h3>
              <p className="text-xs text-emerald-200 mt-1 leading-relaxed">
                Recited in complete, silent attention by all students, teachers, and staff facing the national flag.
              </p>

              <button
                onClick={() => setShowAnthemLyrics(!showAnthemLyrics)}
                className="mt-4 w-full py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5"
              >
                <span>{showAnthemLyrics ? 'Hide Lyrics' : 'View Anthem Lyrics'}</span>
                {showAnthemLyrics ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showAnthemLyrics && (
                <div className="mt-3 p-3 bg-black/20 rounded-xl text-xs font-urdu text-right text-emerald-100 leading-loose border border-white/10">
                  پاک سرزمین شاد باد<br />
                  کشورِ حسین شاد باد<br />
                  تُو نشانِ عزمِ عالی شان<br />
                  ارضِ پاکستان!<br />
                  مرکزِ یقین شاد باد
                </div>
              )}
            </div>

            {/* Student Participation Roster */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                <Users className="w-4 h-4 text-emerald-700" />
                <span>Student Rotation Roster</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every grade from Grade 3 through Grade 8 is given designated turns to lead the morning assembly, fostering public speaking confidence and leadership.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Current Turn</span>
                <span className="font-bold text-emerald-900">{initialAssemblyItem.studentPresenter}</span>
              </div>
            </div>

            {/* Archive Toggle Button */}
            <button
              onClick={() => setShowArchive(!showArchive)}
              className="w-full py-3 bg-white hover:bg-slate-50 rounded-2xl border border-slate-200 text-slate-700 font-bold text-xs transition flex items-center justify-center gap-2 shadow-2xs"
            >
              <Calendar className="w-4 h-4 text-emerald-700" />
              <span>{showArchive ? 'Hide Archive' : 'View Previous Assembly Archives'}</span>
            </button>

          </div>

        </div>

        {/* Archive Accordion */}
        {showArchive && (
          <div className="mt-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-700" />
              <span>Archive of Previous Assembly Messages</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {archiveItems.map((arch, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <span className="font-bold text-emerald-800 block">{arch.week}</span>
                  <p className="font-semibold text-slate-800">{arch.theme}</p>
                  <p className="text-slate-600 italic">"{arch.thought}"</p>
                  <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-200">{arch.verse}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
