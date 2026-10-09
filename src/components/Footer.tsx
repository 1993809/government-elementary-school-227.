import React from 'react';
import { GraduationCap, MapPin, Shield, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: School Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-700 to-green-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-7 h-7 text-emerald-100" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">
                  Government Elementary School
                </h3>
                <p className="text-xs font-semibold text-emerald-400">
                  Chak No. 227/W.B • Markaz Zakheera
                </p>
              </div>
            </div>

            <p className="font-urdu text-lg text-emerald-300">
              گورنمنٹ ایلیمنٹری اسکول چک نمبر 227/ڈبلیو بی، مرکز ذخیرہ (لودھراں)
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing quality education, moral character building, PECTAA civic sense, and lifelong learning foundations for every child in our community.
            </p>

            <div className="text-xs text-slate-400 space-y-1 pt-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Chak No. 227/W.B, Markaz Zakheera, DEA Lodhran, Punjab, Pakistan</span>
              </p>
              <p className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Supervised by District Education Authority (DEA) Lodhran</span>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Institutional Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-emerald-400 transition">About School & Vision</a></li>
              <li><a href="#leadership" className="hover:text-emerald-400 transition">Head Teacher Profile</a></li>
              <li><a href="#teachers" className="hover:text-emerald-400 transition">Teaching Faculty Directory</a></li>
              <li><a href="#classes" className="hover:text-emerald-400 transition">Classrooms (PG to Grade 8)</a></li>
              <li><a href="#academics" className="hover:text-emerald-400 transition">Punjab Curriculum Subjects</a></li>
              <li><a href="#results" className="hover:text-emerald-400 transition">Examination Results (Demo)</a></li>
              <li><a href="#notices" className="hover:text-emerald-400 transition">School Notice Board</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition">Parent FAQs (Timings & Uniform)</a></li>
            </ul>
          </div>

          {/* Col 3: Life Skills & Values */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Core Values & Life Skills
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#pectaa" className="hover:text-emerald-400 transition">PECTAA Civic Sense (Queue & Welcome)</a></li>
              <li><a href="#theme" className="hover:text-emerald-400 transition">Theme of the Month: "My Teacher, My Hero"</a></li>
              <li><a href="#assembly" className="hover:text-emerald-400 transition">Daily Morning Assembly Program</a></li>
              <li><a href="#pledge" className="hover:text-emerald-400 transition">Digital Pakistan Pledge Wall</a></li>
              <li><a href="#ai-assistant" className="hover:text-emerald-400 transition">AI Teacher Assistant</a></li>
              <li><a href="#ai-tutor" className="hover:text-emerald-400 transition">Ask Your AI Tutor (Urdu & English)</a></li>
            </ul>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-[10px] text-emerald-300 font-semibold">
                پڑھو پنجاب، بڑھو پنجاب
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>© {new Date().getFullYear()} Government Elementary School Chak No. 227/W.B. All rights reserved.</p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              School Education Department, Government of Punjab • District Education Authority Lodhran
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
