import React, { useState } from 'react';
import {
  UserCheck,
  Award,
  GraduationCap,
  Calendar,
  MessageSquareQuote,
  Edit3,
  Check,
  Shield,
  FileText,
  Info
} from 'lucide-react';
import { UserRole } from '../types';

interface LeadershipSectionProps {
  currentRole: UserRole;
  headTeacherData: {
    name: string;
    designation: string;
    qualification: string;
    experience: string;
    messageTitle: string;
    message: string;
    urduMessage: string;
  };
  onUpdateHeadTeacher: (updated: any) => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  currentRole,
  headTeacherData,
  onUpdateHeadTeacher,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(headTeacherData);

  const canEdit = currentRole === 'admin';

  const handleSave = () => {
    onUpdateHeadTeacher(formData);
    setIsEditing(false);
  };

  return (
    <section id="leadership" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
              Administrative Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Head Teacher / School Leadership
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Guiding educational standards, teacher mentoring, and school discipline at GES Chak No. 227/W.B
            </p>
          </div>

          {canEdit && (
            <div>
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold shadow-sm transition"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Leadership Profile</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold border border-slate-300 transition"
                >
                  <Edit3 className="w-4 h-4 text-emerald-700" />
                  <span>Edit Profile (Admin Mode)</span>
                </button>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Profile Card */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col items-center text-center">
              {/* Photo Placeholder */}
              <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-tr from-emerald-800 to-emerald-600 flex flex-col items-center justify-center text-white shadow-lg shadow-emerald-900/15 border-4 border-white mb-4">
                <UserCheck className="w-16 h-16 text-emerald-100" />
                <span className="absolute bottom-2 text-[10px] font-bold bg-black/40 px-2 py-0.5 rounded-full text-emerald-200">
                  Official Portrait Slot
                </span>
              </div>

              {isEditing ? (
                <div className="w-full space-y-3 text-left">
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 uppercase">Head Teacher Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full mt-1 p-2 border border-slate-300 rounded-lg text-xs bg-white focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 uppercase">Designation</label>
                    <input
                      type="text"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full mt-1 p-2 border border-slate-300 rounded-lg text-xs bg-white focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-slate-900">
                    {headTeacherData.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-800 bg-emerald-100/60 px-2.5 py-1 rounded-full mt-1 border border-emerald-200">
                    {headTeacherData.designation}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Markaz Zakheera • DEA Lodhran
                  </p>
                </>
              )}
            </div>

            {/* Profile Fields */}
            <div className="pt-4 border-t border-slate-200 space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div className="w-full">
                  <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px] block">
                    Qualification
                  </span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      className="w-full mt-1 p-1.5 border border-slate-300 rounded text-xs bg-white"
                    />
                  ) : (
                    <p className="text-slate-600 mt-0.5 italic">
                      {headTeacherData.qualification}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div className="w-full">
                  <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px] block">
                    Teaching & Leadership Experience
                  </span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full mt-1 p-1.5 border border-slate-300 rounded text-xs bg-white"
                    />
                  ) : (
                    <p className="text-slate-600 mt-0.5 italic">
                      {headTeacherData.experience}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px] block">
                    Institutional Jurisdiction
                  </span>
                  <p className="text-slate-600 mt-0.5">
                    Government Elementary School Chak No. 227/W.B, Lodhran
                  </p>
                </div>
              </div>
            </div>

            {/* Placeholder Note */}
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
              <span>
                Personal credentials and portraits are maintained via school records and can be updated by the administration.
              </span>
            </div>
          </div>

          {/* Right: Message from School Leadership */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800">
                <MessageSquareQuote className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {headTeacherData.messageTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  Guiding principles for students, parents, and teachers
                </p>
              </div>
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700">English Leadership Message</label>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full mt-1 p-3 border border-slate-300 rounded-lg text-xs leading-relaxed bg-white focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700">Urdu Message</label>
                  <textarea
                    rows={3}
                    value={formData.urduMessage}
                    onChange={(e) => setFormData({ ...formData, urduMessage: e.target.value })}
                    className="w-full mt-1 p-3 border border-slate-300 rounded-lg text-xs leading-relaxed bg-white focus:ring-2 focus:ring-emerald-500 font-urdu"
                  />
                </div>
              </div>
            ) : (
              <>
                <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line bg-slate-50/70 p-6 rounded-xl border border-slate-100">
                  {headTeacherData.message}
                </div>

                <div className="p-5 rounded-xl bg-emerald-50/80 border border-emerald-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
                    پیغام برائے اساتذہ، والدین اور طلبہ
                  </h4>
                  <p className="font-urdu text-base text-emerald-950 leading-loose">
                    {headTeacherData.urduMessage}
                  </p>
                </div>
              </>
            )}

            {/* Core Leadership Themes Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              <div className="p-2.5 rounded-lg bg-slate-50 text-center border border-slate-200">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Focus 1</span>
                <span className="text-xs font-bold text-slate-800">Character & Moral Integrity</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 text-center border border-slate-200">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Focus 2</span>
                <span className="text-xs font-bold text-slate-800">Regular Attendance</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 text-center border border-slate-200">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Focus 3</span>
                <span className="text-xs font-bold text-slate-800">Parental Partnership</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 text-center border border-slate-200">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Focus 4</span>
                <span className="text-xs font-bold text-slate-800">Campus Cleanliness</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
