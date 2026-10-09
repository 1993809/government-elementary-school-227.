import React from 'react';
import { Target, Compass, Sparkles, CheckCircle, Award } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            Guiding Philosophy
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
            School Vision & Mission
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Setting the direction for every lesson, assembly, and student interaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Vision Card */}
          <div className="relative rounded-2xl bg-white border border-emerald-200/90 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 opacity-70"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-700/20">
                <Compass className="w-6 h-6 text-emerald-100" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Our Long-Term Horizon
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1 mb-4">
                School Vision
              </h3>
              <blockquote className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed italic border-l-4 border-emerald-600 pl-4 py-1">
                "To provide every child with quality education, strong character, confidence, essential life skills and the opportunity to become a responsible and successful citizen."
              </blockquote>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-semibold">Quality Education</span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-semibold">Strong Character</span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-semibold">Civic Responsibility</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative rounded-2xl bg-white border border-blue-200/90 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 opacity-70"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-700/20">
                <Target className="w-6 h-6 text-blue-100" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                Our Everyday Commitment
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1 mb-4">
                School Mission
              </h3>
              <blockquote className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed italic border-l-4 border-blue-600 pl-4 py-1">
                "To create a safe, respectful, clean and learner-friendly environment where every student can learn, participate, grow and achieve their potential."
              </blockquote>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 font-semibold">Safe & Respectful</span>
              <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 font-semibold">Clean Campus</span>
              <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 font-semibold">Learner-Friendly</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
