import React, { useState } from 'react';
import {
  Layers,
  BookOpen,
  Calendar,
  Bell,
  Sparkles,
  ChevronRight,
  User,
  X,
  Plus,
  Trash2,
  FileCheck
} from 'lucide-react';
import { ClassInfo, UserRole } from '../types';

interface ClassesSectionProps {
  classes: ClassInfo[];
  currentRole: UserRole;
  onSelectClassForResults: (classId: string) => void;
  onUpdateClasses: (updated: ClassInfo[]) => void;
}

export const ClassesSection: React.FC<ClassesSectionProps> = ({
  classes,
  currentRole,
  onSelectClassForResults,
  onUpdateClasses,
}) => {
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);
  const [levelFilter, setLevelFilter] = useState<'All' | 'Early Childhood' | 'Primary' | 'Elementary'>('All');
  const [isAddingClass, setIsAddingClass] = useState(false);

  const [newClassName, setNewClassName] = useState('');
  const [newClassLevel, setNewClassLevel] = useState<'Early Childhood' | 'Primary' | 'Elementary'>('Primary');

  const canManage = currentRole === 'admin';

  const filteredClasses = classes.filter((c) => {
    if (levelFilter === 'All') return true;
    return c.level === levelFilter;
  });

  const handleCreateClass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClassName.trim()) return;

    const newClass: ClassInfo = {
      id: `c-custom-${Date.now()}`,
      name: newClassName.trim(),
      level: newClassLevel,
      room: 'Room TBD',
      classTeacher: 'To be updated',
      totalSubjects: 6,
      subjects: ['English', 'Urdu', 'Mathematics', 'General Knowledge', 'Islamiat', 'Tarjuma-tul-Quran'],
      homeworkToday: 'Review textbook exercises and maintain notebook neatness.',
      notices: ['Daily morning assembly attendance required.'],
      activities: ['PECTAA Cleanliness and Queue training']
    };

    onUpdateClasses([...classes, newClass]);
    setNewClassName('');
    setIsAddingClass(false);
  };

  const handleDeleteClass = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to remove this class card?')) {
      onUpdateClasses(classes.filter((c) => c.id !== id));
      if (selectedClass?.id === id) {
        setSelectedClass(null);
      }
    }
  };

  return (
    <section id="classes" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
              Grade Structures
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Classrooms & Grades (Playgroup to 8)
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Select any class to review subjects, daily homework diary, class notices, and activity schedules
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Filter buttons */}
            <div className="bg-slate-100 p-1 rounded-xl flex gap-1 text-xs font-semibold">
              {(['All', 'Early Childhood', 'Primary', 'Elementary'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevelFilter(lvl)}
                  className={`px-3 py-1.5 rounded-lg transition ${
                    levelFilter === lvl
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {canManage && (
              <button
                onClick={() => setIsAddingClass(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition"
              >
                <Plus className="w-4 h-4" />
                <span>Add Class</span>
              </button>
            )}
          </div>
        </div>

        {/* Add Class Form Modal / Drawer */}
        {isAddingClass && (
          <div className="mb-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs">
            <h4 className="font-bold text-slate-900 text-sm mb-3">Add Class to School Roster</h4>
            <form onSubmit={handleCreateClass} className="flex flex-wrap gap-3 items-end">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Class Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Grade 9 / Special Section"
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                  className="p-2 border border-slate-300 rounded-lg bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Level Group</label>
                <select
                  value={newClassLevel}
                  onChange={(e: any) => setNewClassLevel(e.target.value)}
                  className="p-2 border border-slate-300 rounded-lg bg-white"
                >
                  <option value="Early Childhood">Early Childhood (ECE)</option>
                  <option value="Primary">Primary (1-5)</option>
                  <option value="Elementary">Elementary (6-8)</option>
                </select>
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-800 text-white rounded-lg font-bold"
                >
                  Add Class
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddingClass(false)}
                  className="px-3 py-2 bg-slate-200 text-slate-700 rounded-lg font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Classes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredClasses.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedClass(item)}
              className="bg-slate-50 hover:bg-emerald-50/50 rounded-2xl border border-slate-200 hover:border-emerald-400 p-5 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    item.level === 'Early Childhood'
                      ? 'bg-amber-100 text-amber-800'
                      : item.level === 'Primary'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {item.level}
                  </span>

                  {canManage && (
                    <button
                      onClick={(e) => handleDeleteClass(item.id, e)}
                      className="p-1 text-slate-300 hover:text-red-600 transition"
                      title="Delete class"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">{item.room}</p>

                <div className="mt-4 space-y-2 text-xs border-t border-slate-200/60 pt-3">
                  <div className="flex items-center gap-2 text-slate-600">
                    <User className="w-3.5 h-3.5 text-emerald-700" />
                    <span>In-charge: <strong className="text-slate-800">{item.classTeacher}</strong></span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-600">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Subjects: <strong className="text-slate-800">{item.subjects.length} Subjects</strong></span>
                  </div>
                </div>

                {/* Homework snippet */}
                <div className="mt-3 p-2.5 rounded-lg bg-white border border-slate-200/70 text-[11px] text-slate-600 line-clamp-2">
                  <span className="font-bold text-emerald-800">Diary: </span>
                  {item.homeworkToday}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span>View Class Details</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Class Details Modal */}
        {selectedClass && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8">
              
              <div className="flex items-start justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                      {selectedClass.level}
                    </span>
                    <span className="text-xs text-slate-400">• {selectedClass.room}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    {selectedClass.name}
                  </h3>
                  <p className="text-xs text-slate-600">
                    Class Incharge: <strong className="text-emerald-800">{selectedClass.classTeacher}</strong>
                  </p>
                </div>

                <button
                  onClick={() => setSelectedClass(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6 text-xs sm:text-sm">
                {/* Subjects */}
                <div>
                  <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-2 text-sm">
                    <BookOpen className="w-4 h-4 text-emerald-700" />
                    <span>Prescribed Curriculum Subjects</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedClass.subjects.map((sub, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 font-medium">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Today's Homework */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-1.5 text-sm">
                    <Calendar className="w-4 h-4 text-amber-700" />
                    <span>Daily Student Diary / Homework</span>
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    {selectedClass.homeworkToday}
                  </p>
                </div>

                {/* Class Notices */}
                <div>
                  <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-2 text-sm">
                    <Bell className="w-4 h-4 text-emerald-700" />
                    <span>Classroom Notices & Reminders</span>
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    {selectedClass.notices.map((not, i) => (
                      <li key={i}>{not}</li>
                    ))}
                  </ul>
                </div>

                {/* Co-Curricular & PECTAA Activities */}
                <div>
                  <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-2 text-sm">
                    <Sparkles className="w-4 h-4 text-emerald-700" />
                    <span>Weekly Life Skills & Activities</span>
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    {selectedClass.activities.map((act, i) => (
                      <li key={i}>{act}</li>
                    ))}
                  </ul>
                </div>

                {/* Action button: View class results */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      onSelectClassForResults(selectedClass.id);
                      setSelectedClass(null);
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold shadow-xs transition"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>View Examination Results for {selectedClass.name}</span>
                  </button>

                  <button
                    onClick={() => setSelectedClass(null)}
                    className="px-4 py-2 border border-slate-300 rounded-xl font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Close
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
