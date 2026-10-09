import React from 'react';
import {
  Building2,
  MapPin,
  Compass,
  CheckCircle2,
  Shield,
  BookOpen,
  Heart,
  Users,
  Award,
  Sparkles,
  Info
} from 'lucide-react';
import { initialSchoolInfo } from '../data/initialData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Quality Education',
      desc: 'Adherence to the Single National Curriculum (SNC) set forth by the Punjab School Education Department, ensuring conceptual mastery over rote learning.',
      icon: BookOpen,
    },
    {
      title: 'Student Character Building',
      desc: 'Nurturing truthfulness, humility, honesty, perseverance, and strong moral character in all daily interactions.',
      icon: Shield,
    },
    {
      title: 'Discipline & Punctuality',
      desc: 'Strict emphasis on timely school arrival, uniform etiquette, classroom order, and attentive listening.',
      icon: CheckCircle2,
    },
    {
      title: 'Regular Attendance',
      desc: 'Ensuring consistent daily participation to safeguard continuous academic progression and cognitive development.',
      icon: Award,
    },
    {
      title: 'Cleanliness & Hygiene',
      desc: 'Instilling the prophetic teaching "Cleanliness is half of faith" (الطهور شطر الإيمان) through campus upkeep and personal hygiene.',
      icon: Sparkles,
    },
    {
      title: 'Respect & Empathy',
      desc: 'Cultivating profound respect for teachers, parents, elders, school staff, and fellow classmates regardless of background.',
      icon: Heart,
    },
    {
      title: 'Islamic & Moral Values',
      desc: 'Daily Tilawat, Tajweed, Hadith reflection, and ethical instruction providing an unwavering spiritual and moral compass.',
      icon: BookOpen,
    },
    {
      title: 'Pakistan Citizenship',
      desc: 'Fostering patriotic loyalty, pride in Pakistani heritage, knowledge of national duties, and respect for public infrastructure.',
      icon: Award,
    },
    {
      title: 'Digital Awareness',
      desc: 'Introducing elementary learners to safe digital literacy, ethical internet habits, and essential computer competencies.',
      icon: Sparkles,
    },
    {
      title: 'Co-Curricular Activities',
      desc: 'Speech contests, calligraphy, sports drills, and morning assembly presentations to build leadership confidence.',
      icon: Users,
    },
    {
      title: 'Parent-School Cooperation',
      desc: 'Building transparent, reciprocal bridges between homes and classrooms for holistic child well-being.',
      icon: Heart,
    },
    {
      title: 'Inclusive Learning',
      desc: 'Providing an equitable, warm, and supportive environment where every child has the opportunity to learn and thrive.',
      icon: Building2,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200 mb-3">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            Institutional Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Our School
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Government Elementary School Chak No. 227/W.B stands as an educational institution under the Punjab School Education Department, serving our community with educational rigor, moral refinement, and civic dedication.
          </p>
        </div>

        {/* Official Identity & Location Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 mb-12 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">School Name</span>
              <p className="text-sm sm:text-base font-bold text-slate-900">{initialSchoolInfo.name}</p>
              <p className="font-urdu text-sm text-emerald-800">{initialSchoolInfo.urduName}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Administrative Location</span>
              <p className="text-sm sm:text-base font-bold text-slate-900">Chak No. 227/W.B</p>
              <p className="text-xs text-slate-600">Markaz: <span className="font-semibold text-emerald-800">Zakheera</span></p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Supervisory Authority</span>
              <p className="text-sm sm:text-base font-bold text-slate-900">District Education Authority (DEA) Lodhran</p>
              <p className="text-xs text-slate-600">Province: <span className="font-semibold text-slate-900">Punjab, Pakistan</span></p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">EMIS / Registration Code</span>
              <p className="text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-2">
                {initialSchoolInfo.emisCode}
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Introduction */}
        <div className="prose prose-slate max-w-4xl mx-auto text-slate-700 leading-relaxed space-y-4 mb-16 text-sm sm:text-base">
          <p>
            At <strong>Government Elementary School Chak No. 227/W.B</strong>, we consider primary and elementary education to be the most critical formative window in a child’s development. Situated within Markaz Zakheera in District Lodhran, the school functions with a single-minded educational objective: to unlock each student’s intellectual and moral potential.
          </p>
          <p>
            Our pedagogical approach balances curriculum rigor with character refinement. We instill disciplined study habits, regular attendance, cleanliness, and polite communication from early childhood education through Grade 8. By emphasizing Islamic moral values alongside scientific curiosity and national responsibility, our students learn to be not only competent scholars but also compassionate, honest Pakistani citizens.
          </p>
          <p>
            We partner closely with parents, guardians, and educational officials from the District Education Authority (DEA) Lodhran to sustain an orderly, learner-friendly, and inclusive campus environment.
          </p>
        </div>

        {/* 12 Core Institutional Pillars Grid */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Twelve Pillars of Our Educational Commitment
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              The fundamental standards guiding our teachers, students, and administration every day
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center mb-3.5 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compliance Notice: No Invented Facts */}
        <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 flex items-start gap-3 text-xs text-emerald-900">
          <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Official School Records Notice: </span>
            In strict compliance with transparency standards, verified official records such as establishment year, exact census counts, facilities inventory, and government notifications are updated directly through official DEA Lodhran gazettes and school administration registers.
          </div>
        </div>

      </div>
    </section>
  );
};
