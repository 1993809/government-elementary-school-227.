import React, { useState } from 'react';
import {
  Users,
  UserPlus,
  GraduationCap,
  BookOpen,
  Award,
  Edit2,
  Trash2,
  Check,
  X,
  Info
} from 'lucide-react';
import { Teacher, UserRole } from '../types';

interface TeachersSectionProps {
  teachers: Teacher[];
  currentRole: UserRole;
  onAddTeacher: (teacher: Teacher) => void;
  onUpdateTeacher: (teacher: Teacher) => void;
  onDeleteTeacher: (id: string) => void;
}

export const TeachersSection: React.FC<TeachersSectionProps> = ({
  teachers,
  currentRole,
  onAddTeacher,
  onUpdateTeacher,
  onDeleteTeacher,
}) => {
  const [filter, setFilter] = useState<'All' | 'Primary' | 'Elementary'>('All');
  const [editingTeacherId, setEditingTeacherId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Teacher | null>(null);
  const [isAddingTeacher, setIsAddingTeacher] = useState(false);

  const [newTeacherForm, setNewTeacherForm] = useState<Omit<Teacher, 'id'>>({
    name: 'To be updated',
    designation: 'Elementary / Primary School Teacher',
    qualification: 'Information will be updated by the school administration.',
    subjectClass: 'General Subjects',
    bio: 'Dedicated educator inspiring young learners with discipline and academic curiosity.',
    isPlaceholder: true,
  });

  const canEdit = currentRole === 'admin' || currentRole === 'teacher';

  const handleStartEdit = (teacher: Teacher) => {
    setEditingTeacherId(teacher.id);
    setEditForm({ ...teacher });
  };

  const handleSaveEdit = () => {
    if (editForm) {
      onUpdateTeacher(editForm);
      setEditingTeacherId(null);
      setEditForm(null);
    }
  };

  const handleCreateTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `t-${Date.now()}`;
    onAddTeacher({
      ...newTeacherForm,
      id: newId,
    });
    setIsAddingTeacher(false);
    setNewTeacherForm({
      name: 'To be updated',
      designation: 'Elementary / Primary School Teacher',
      qualification: 'Information will be updated by the school administration.',
      subjectClass: 'General Subjects',
      bio: 'Dedicated educator inspiring young learners with discipline and academic curiosity.',
      isPlaceholder: true,
    });
  };

  const filteredTeachers = teachers.filter((t) => {
    if (filter === 'Primary') {
      return t.designation.includes('Primary') || t.designation.includes('PST') || t.designation.includes('ECE');
    }
    if (filter === 'Elementary') {
      return t.designation.includes('Elementary') || t.designation.includes('EST') || t.designation.includes('Computer');
    }
    return true;
  });

  return (
    <section id="teachers" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Add Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
              Academic Faculty
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Teaching Staff Directory
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Qualified educators dedicated to student literacy, mathematics, science, and moral values
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Filter Pills */}
            <div className="bg-white p-1 rounded-xl border border-slate-200 shadow-2xs flex gap-1">
              {(['All', 'Primary', 'Elementary'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    filter === cat
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Add Teacher Button */}
            <button
              onClick={() => setIsAddingTeacher(true)}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-xs transition"
            >
              <UserPlus className="w-4 h-4" />
              <span>Add Teacher</span>
            </button>
          </div>
        </div>

        {/* Modal / Form for Adding Teacher */}
        {isAddingTeacher && (
          <div className="mb-10 bg-white rounded-2xl border-2 border-emerald-300 p-6 sm:p-8 shadow-md">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-lg">
                <UserPlus className="w-5 h-5 text-emerald-600" />
                <span>Add Teacher to Official Directory</span>
              </div>
              <button
                onClick={() => setIsAddingTeacher(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateTeacher} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Teacher Name</label>
                <input
                  type="text"
                  required
                  value={newTeacherForm.name}
                  onChange={(e) => setNewTeacherForm({ ...newTeacherForm, name: e.target.value })}
                  className="w-full p-2.5 border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500"
                  placeholder="e.g. To be updated"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Designation</label>
                <input
                  type="text"
                  required
                  value={newTeacherForm.designation}
                  onChange={(e) => setNewTeacherForm({ ...newTeacherForm, designation: e.target.value })}
                  className="w-full p-2.5 border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500"
                  placeholder="e.g. EST Science / PST"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Qualification</label>
                <input
                  type="text"
                  value={newTeacherForm.qualification}
                  onChange={(e) => setNewTeacherForm({ ...newTeacherForm, qualification: e.target.value })}
                  className="w-full p-2.5 border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500"
                  placeholder="e.g. Information will be updated by the school administration."
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Subject / Assigned Class</label>
                <input
                  type="text"
                  value={newTeacherForm.subjectClass}
                  onChange={(e) => setNewTeacherForm({ ...newTeacherForm, subjectClass: e.target.value })}
                  className="w-full p-2.5 border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500"
                  placeholder="e.g. Mathematics & Science (Grade 6-8)"
                />
              </div>

              <div className="md:col-span-2">
                <label className="font-bold text-slate-700 block mb-1">Short Introduction / Bio</label>
                <textarea
                  rows={2}
                  value={newTeacherForm.bio}
                  onChange={(e) => setNewTeacherForm({ ...newTeacherForm, bio: e.target.value })}
                  className="w-full p-2.5 border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="md:col-span-2 flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddingTeacher(false)}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-bold shadow-xs"
                >
                  Save Teacher Card
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Teachers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher) => {
            const isThisEditing = editingTeacherId === teacher.id;

            if (isThisEditing && editForm) {
              return (
                <div
                  key={teacher.id}
                  className="bg-white rounded-2xl border-2 border-emerald-400 p-5 shadow-lg space-y-3 text-xs"
                >
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-bold text-emerald-800">Edit Teacher Profile</span>
                    <button
                      onClick={() => setEditingTeacherId(null)}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div>
                    <label className="font-bold text-slate-600">Name</label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      className="w-full mt-1 p-1.5 border rounded bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-600">Designation</label>
                    <input
                      type="text"
                      value={editForm.designation}
                      onChange={(e) => setEditForm({ ...editForm, designation: e.target.value })}
                      className="w-full mt-1 p-1.5 border rounded bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-600">Qualification</label>
                    <input
                      type="text"
                      value={editForm.qualification}
                      onChange={(e) => setEditForm({ ...editForm, qualification: e.target.value })}
                      className="w-full mt-1 p-1.5 border rounded bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-600">Subject / Class</label>
                    <input
                      type="text"
                      value={editForm.subjectClass}
                      onChange={(e) => setEditForm({ ...editForm, subjectClass: e.target.value })}
                      className="w-full mt-1 p-1.5 border rounded bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-600">Bio</label>
                    <textarea
                      rows={2}
                      value={editForm.bio}
                      onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                      className="w-full mt-1 p-1.5 border rounded bg-slate-50"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2 border-t">
                    <button
                      onClick={() => setEditingTeacherId(null)}
                      className="px-3 py-1.5 border rounded text-slate-600"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveEdit}
                      className="px-3 py-1.5 bg-emerald-700 text-white rounded font-bold"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={teacher.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  {/* Photo & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-emerald-700 to-teal-800 flex items-center justify-center text-white shadow-sm font-bold text-lg group-hover:scale-105 transition-transform">
                        <Users className="w-7 h-7 text-emerald-100" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                          {teacher.name}
                        </h3>
                        <span className="text-[11px] font-semibold text-emerald-700 block">
                          {teacher.designation}
                        </span>
                      </div>
                    </div>

                    {canEdit && (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleStartEdit(teacher)}
                          className="p-1 text-slate-400 hover:text-emerald-700 rounded"
                          title="Edit Teacher"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onDeleteTeacher(teacher.id)}
                          className="p-1 text-slate-400 hover:text-red-600 rounded"
                          title="Delete Teacher"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-700">Qualification: </span>
                        <span className="italic">{teacher.qualification}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <BookOpen className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-700">Subject / Assigned: </span>
                        <span>{teacher.subjectClass}</span>
                      </div>
                    </div>

                    <p className="pt-2 text-slate-600 leading-relaxed text-xs">
                      {teacher.bio}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Govt Elementary School</span>
                  <span className="font-medium text-emerald-700">DEA Lodhran</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency note */}
        <div className="mt-8 p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5 text-xs text-slate-500">
          <Info className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>
            Teacher profiles are aligned with School Education Department human resource records. School administration can add or update educator data at any time.
          </span>
        </div>

      </div>
    </section>
  );
};
