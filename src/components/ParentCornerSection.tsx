import React from 'react';
import {
  Users,
  Calendar,
  CheckCircle,
  Clock,
  Heart,
  Shield,
  Smartphone,
  PhoneCall,
  Bell,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface ParentCornerProps {
  onNavigateToNotices: () => void;
  onNavigateToClasses: () => void;
  onNavigateToContact: () => void;
}

export const ParentCornerSection: React.FC<ParentCornerProps> = ({
  onNavigateToNotices,
  onNavigateToClasses,
  onNavigateToContact,
}) => {
  const guidelines = [
    {
      title: 'Attendance & Punctuality',
      icon: Clock,
      desc: 'Elementary students must arrive at school by 07:30 AM (Summer) or 08:30 AM (Winter). Please report unexpected absences with a written application.',
      badge: '95% Attendance Goal'
    },
    {
      title: 'Daily Homework & Diary Signing',
      icon: BookOpen,
      desc: 'Parents are requested to inspect their child’s school diary every evening, review completed exercises, and sign the diary consistently.',
      badge: 'Daily Habit'
    },
    {
      title: 'Examination Preparation',
      icon: CheckCircle,
      desc: 'Create an uninterrupted study corner at home. Maintain calm revision cycles two weeks prior to term examinations without undue exam anxiety.',
      badge: 'Academic Support'
    },
    {
      title: 'Student Discipline & Values',
      icon: Shield,
      desc: 'Reinforce the values taught at school: speaking the truth, caring for public property, standing in queues, and treating teachers with profound respect.',
      badge: 'Character Building'
    },
    {
      title: 'Personal Cleanliness & Hygiene',
      icon: Heart,
      desc: 'Ensure clean, ironed uniform, trimmed nails, polished shoes, and combed hair. Teach the habit of frequent handwashing before meals.',
      badge: 'Saaf Suthra Punjab'
    },
    {
      title: 'Health, Nutrition & Safety',
      icon: Heart,
      desc: 'Provide a nutritious breakfast and a clean water flask. Ensure safe walking or cycling habits on roads leading to Chak 227/W.B.',
      badge: 'Child Welfare'
    },
    {
      title: 'Digital & Mobile Safety',
      icon: Smartphone,
      desc: 'Limit screen time on mobile phones and televisions on weekdays. Keep internet access strictly educational and supervised.',
      badge: 'Cyber Safety'
    },
    {
      title: 'Parent-Teacher Communication',
      icon: PhoneCall,
      desc: 'Meet your child’s class teacher during designated visiting periods. Constructive parent involvement drastically boosts student confidence.',
      badge: 'Open Dialogue'
    },
  ];

  return (
    <section id="parent-corner" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            Family Partnership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Parent Corner
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Guiding parents and guardians of GES Chak No. 227/W.B in supporting their children’s learning, character, health, and holistic development.
          </p>
        </div>

        {/* 4 Required Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          <button
            onClick={onNavigateToNotices}
            className="p-5 bg-white hover:bg-emerald-50/60 rounded-2xl border border-slate-200 hover:border-emerald-300 shadow-2xs hover:shadow-md transition text-center group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Bell className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-800 transition">
              Parent Notices
            </h4>
            <p className="text-[11px] text-slate-500 mt-1">Circulars & updates</p>
          </button>

          <button
            onClick={onNavigateToClasses}
            className="p-5 bg-white hover:bg-emerald-50/60 rounded-2xl border border-slate-200 hover:border-emerald-300 shadow-2xs hover:shadow-md transition text-center group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-800 transition">
              Daily Homework
            </h4>
            <p className="text-[11px] text-slate-500 mt-1">Class diaries & tasks</p>
          </button>

          <button
            onClick={onNavigateToNotices}
            className="p-5 bg-white hover:bg-emerald-50/60 rounded-2xl border border-slate-200 hover:border-emerald-300 shadow-2xs hover:shadow-md transition text-center group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Calendar className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm group-hover:text-amber-800 transition">
              School Calendar
            </h4>
            <p className="text-[11px] text-slate-500 mt-1">Terms & holidays</p>
          </button>

          <button
            onClick={onNavigateToContact}
            className="p-5 bg-white hover:bg-emerald-50/60 rounded-2xl border border-slate-200 hover:border-emerald-300 shadow-2xs hover:shadow-md transition text-center group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm group-hover:text-teal-800 transition">
              Contact School
            </h4>
            <p className="text-[11px] text-slate-500 mt-1">Head teacher & office</p>
          </button>
        </div>

        {/* 8 Comprehensive Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guidelines.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-100 text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Parent-Teacher Union</span>
                  <span>Chak 227/W.B</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visiting Hours Callout */}
        <div className="mt-12 bg-white rounded-3xl border border-emerald-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900">
              Designated Parent Meeting Hours
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Parents are encouraged to visit during the final 45 minutes of the school day or on designated Saturday consultation sessions to discuss student progress with the Head Teacher and faculty.
            </p>
          </div>
          <button
            onClick={onNavigateToContact}
            className="shrink-0 px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition shadow-xs flex items-center gap-2"
          >
            <span>View Office Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
