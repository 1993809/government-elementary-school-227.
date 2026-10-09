import React from 'react';
import {
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Users,
  Compass,
  ArrowRight,
  MapPin,
  Calendar,
  CheckCircle2,
  HeartHandshake
} from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onParentClick: () => void;
  onAiAssistantClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onParentClick,
  onAiAssistantClick,
}) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      {/* Subtle Pakistan Green & Geometric Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-200/30 blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Official Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
              <span>School Education Department • Govt of Punjab</span>
            </div>

            {/* Main School Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Government Elementary School <br className="hidden sm:inline" />
                <span className="text-emerald-800 underline decoration-emerald-500/40 decoration-4">
                  Chak No. 227/W.B
                </span>
              </h1>
              <p className="font-urdu text-xl sm:text-2xl text-emerald-900 pt-1">
                گورنمنٹ ایلیمنٹری اسکول چک نمبر 227/ڈبلیو بی، مرکز ذخیرہ (لودھراں)
              </p>
            </div>

            {/* Official Subtitle Required */}
            <p className="text-base sm:text-lg font-semibold text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              "Quality Education • Character Building • Discipline • Cleanliness • A Brighter Future"
            </p>

            {/* Geographical Hierarchy Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm text-xs sm:text-sm font-medium text-slate-700">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Markaz Zakheera</span>
              <span className="text-slate-300">|</span>
              <span>DEA Lodhran</span>
              <span className="text-slate-300">|</span>
              <span className="text-emerald-800 font-bold">Punjab, Pakistan</span>
            </div>

            {/* Introduction paragraph */}
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Dedicated to nurturing young minds from Playgroup through Grade 8 with balanced academic mastery, strong Islamic & civic ethics, PECTAA life skills, and active parent-community collaboration.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Compass className="w-4 h-4 text-emerald-300 group-hover:rotate-45 transition-transform" />
                <span>Explore Our School</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onParentClick}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm shadow-xs hover:border-slate-400 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Users className="w-4 h-4 text-emerald-700" />
                <span>Parent Information</span>
              </button>

              <button
                onClick={onAiAssistantClick}
                className="px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300/80 font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" />
                <span>AI Teacher & Tutor</span>
              </button>
            </div>

            {/* Trust & Discipline Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3 bg-white/80 rounded-xl border border-slate-200/80 shadow-2xs">
                <p className="text-xs text-slate-500 font-medium">Instruction Levels</p>
                <p className="text-sm font-bold text-emerald-900">ECE to Grade 8</p>
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-slate-200/80 shadow-2xs">
                <p className="text-xs text-slate-500 font-medium">Curriculum</p>
                <p className="text-sm font-bold text-emerald-900">Punjab SNC</p>
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-slate-200/80 shadow-2xs">
                <p className="text-xs text-slate-500 font-medium">Core Values</p>
                <p className="text-sm font-bold text-emerald-900">PECTAA Life Skills</p>
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-slate-200/80 shadow-2xs">
                <p className="text-xs text-slate-500 font-medium">Cleanliness Drive</p>
                <p className="text-sm font-bold text-emerald-900">Saaf Suthra Punjab</p>
              </div>
            </div>
          </div>

          {/* Right Column: Educational Crest & Visual Representation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative card */}
              <div className="relative rounded-3xl bg-white p-6 sm:p-8 shadow-xl border border-slate-200/80 overflow-hidden">
                {/* Government Ribbon Header */}
                <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-emerald-800 via-emerald-600 to-green-700"></div>

                {/* Central Emblem Badge */}
                <div className="flex flex-col items-center text-center space-y-4 pt-2">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-emerald-800 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-900/20 relative">
                    <GraduationCap className="w-12 h-12 text-emerald-100" />
                    <div className="absolute -top-2 -right-2 bg-amber-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
                      Punjab
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Official Institutional Portal</h2>
                    <p className="text-xs text-slate-500">Government Elementary School Chak No. 227/W.B</p>
                    <p className="text-[11px] text-emerald-700 font-medium mt-0.5">District Education Authority Lodhran</p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="w-full space-y-2.5 pt-2 text-left">
                    <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-slate-800">Quality Elementary Education</p>
                        <p className="text-[11px] text-slate-500">Foundational literacy, numeracy, and scientific inquiry</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-slate-800">Islamic & Moral Development</p>
                        <p className="text-[11px] text-slate-500">Tajweed, Hadith ethics, and respectful civic citizenship</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-slate-800">Digital & Life Skills Integration</p>
                        <p className="text-[11px] text-slate-500">PECTAA queue discipline, online safety & clean habits</p>
                      </div>
                    </div>
                  </div>

                  {/* Motto Footer */}
                  <div className="w-full pt-3 border-t border-slate-100 text-center">
                    <span className="font-urdu text-sm text-emerald-900 font-bold block">
                      علم، عمل، کردار اور خدمتِ وطن
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                      Knowledge • Discipline • Service to Pakistan
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Accent Badges */}
              <div className="absolute -bottom-4 -left-4 bg-emerald-900 text-white px-4 py-2 rounded-xl shadow-lg text-xs font-semibold flex items-center gap-2 border border-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Markaz Zakheera</span>
              </div>

              <div className="absolute -top-3 -right-3 bg-white text-emerald-900 px-3.5 py-1.5 rounded-xl shadow-md text-xs font-bold border border-emerald-200 flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-emerald-600" />
                <span>Parent-Teacher Union</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
