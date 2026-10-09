import React, { useState } from 'react';
import {
  Bell,
  Search,
  Filter,
  Calendar,
  AlertCircle,
  Plus,
  Trash2,
  Printer,
  X,
  FileText,
  Building2,
  ShieldAlert
} from 'lucide-react';
import { Notice, UserRole } from '../types';

interface NoticesSectionProps {
  notices: Notice[];
  currentRole: UserRole;
  onAddNotice: (notice: Notice) => void;
  onDeleteNotice: (id: string) => void;
}

export const NoticesSection: React.FC<NoticesSectionProps> = ({
  notices,
  currentRole,
  onAddNotice,
  onDeleteNotice,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNoticeForPrint, setSelectedNoticeForPrint] = useState<Notice | null>(null);
  const [isAddingNotice, setIsAddingNotice] = useState(false);

  const [newNotice, setNewNotice] = useState<Omit<Notice, 'id'>>({
    title: '',
    date: new Date().toLocaleDateString('en-PK', { month: 'long', year: 'numeric' }),
    category: 'General',
    description: '',
    isImportant: false,
    issuedBy: 'Office of the Head Teacher'
  });

  const categories = [
    'All',
    'General',
    'Academic',
    'Examination',
    'Holiday',
    'Parent Notice',
    'Student Notice',
    'Emergency'
  ];

  const canManage = currentRole === 'admin';

  const filteredNotices = notices.filter((n) => {
    const matchesCategory = selectedCategory === 'All' || n.category === selectedCategory;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCreateNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNotice.title.trim() || !newNotice.description.trim()) return;

    onAddNotice({
      ...newNotice,
      id: `n-${Date.now()}`
    });

    setIsAddingNotice(false);
    setNewNotice({
      title: '',
      date: new Date().toLocaleDateString('en-PK', { month: 'long', year: 'numeric' }),
      category: 'General',
      description: '',
      isImportant: false,
      issuedBy: 'Office of the Head Teacher'
    });
  };

  const getCategoryBadgeClass = (category: Notice['category']) => {
    switch (category) {
      case 'Emergency':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Holiday':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Examination':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Academic':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Parent Notice':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      default:
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    }
  };

  return (
    <section id="notices" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
              Official Bulletins
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              School Notice Board
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Authoritative announcements, holiday notices, examination circulars, and administrative updates
            </p>
          </div>

          <div className="flex items-center gap-3">
            {canManage && (
              <button
                onClick={() => setIsAddingNotice(true)}
                className="flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-xs transition"
              >
                <Plus className="w-4 h-4" />
                <span>Issue New Notice</span>
              </button>
            )}
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search notices by keyword..."
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Add Notice Modal */}
        {isAddingNotice && (
          <div className="mb-8 p-6 bg-emerald-50/70 rounded-2xl border-2 border-emerald-300 text-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-200">
              <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Bell className="w-4 h-4 text-emerald-700" />
                Issue Official School Notice
              </span>
              <button onClick={() => setIsAddingNotice(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateNotice} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Notice Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Schedule of Annual Sports Gala"
                  value={newNotice.title}
                  onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                  className="w-full p-2 border border-slate-300 rounded-lg bg-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Category</label>
                <select
                  value={newNotice.category}
                  onChange={(e: any) => setNewNotice({ ...newNotice, category: e.target.value })}
                  className="w-full p-2 border border-slate-300 rounded-lg bg-white"
                >
                  <option value="General">General</option>
                  <option value="Academic">Academic</option>
                  <option value="Examination">Examination</option>
                  <option value="Holiday">Holiday</option>
                  <option value="Parent Notice">Parent Notice</option>
                  <option value="Student Notice">Student Notice</option>
                  <option value="Emergency">Emergency</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="font-bold text-slate-700 block mb-1">Description / Content</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Detailed notification content for students and parents..."
                  value={newNotice.description}
                  onChange={(e) => setNewNotice({ ...newNotice, description: e.target.value })}
                  className="w-full p-2 border border-slate-300 rounded-lg bg-white leading-relaxed"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="impBadge"
                  checked={newNotice.isImportant}
                  onChange={(e) => setNewNotice({ ...newNotice, isImportant: e.target.checked })}
                  className="rounded text-emerald-700"
                />
                <label htmlFor="impBadge" className="font-bold text-slate-700">
                  Mark as "IMPORTANT" Notice
                </label>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddingNotice(false)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-800 text-white rounded-lg font-bold shadow-xs"
                >
                  Publish Notice
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Notices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all bg-white ${
                notice.isImportant
                  ? 'border-emerald-500/80 shadow-md ring-1 ring-emerald-400/30'
                  : 'border-slate-200/90 shadow-2xs hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${getCategoryBadgeClass(notice.category)}`}>
                      {notice.category}
                    </span>
                    {notice.isImportant && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-600 text-white flex items-center gap-1 shadow-2xs">
                        <AlertCircle className="w-3 h-3" />
                        Important
                      </span>
                    )}
                  </div>

                  {canManage && (
                    <button
                      onClick={() => onDeleteNotice(notice.id)}
                      className="p-1 text-slate-300 hover:text-red-600 transition"
                      title="Delete Notice"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{notice.date}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug mb-3">
                  {notice.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-4">
                  {notice.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 italic">
                  Issued by: {notice.issuedBy}
                </span>

                <button
                  onClick={() => setSelectedNoticeForPrint(notice)}
                  className="flex items-center gap-1 text-emerald-700 hover:text-emerald-900 font-bold text-[11px]"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Official View</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredNotices.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
            <Bell className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-600 font-semibold text-sm">No notices found matching your criteria</p>
            <p className="text-slate-400 text-xs mt-1">Try switching category filter or clearing the search box</p>
          </div>
        )}

        {/* Printable Official Notice Modal */}
        {selectedNoticeForPrint && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="print-card bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl border border-slate-200 space-y-6">
              
              <div className="flex items-center justify-between no-print border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-emerald-800 uppercase">
                  Official Institutional Circular
                </span>
                <button
                  onClick={() => setSelectedNoticeForPrint(null)}
                  className="p-1 rounded text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Official Government Header for Notice */}
              <div className="text-center border-b-2 border-slate-900 pb-4">
                <h3 className="font-extrabold text-base text-slate-900 uppercase tracking-tight">
                  Government Elementary School Chak No. 227/W.B
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  Markaz Zakheera • District Education Authority Lodhran • Punjab
                </p>
                <div className="mt-2 inline-block px-3 py-0.5 rounded bg-slate-100 text-slate-800 font-mono text-[11px] font-bold">
                  REF NO: GES/227-WB/{selectedNoticeForPrint.category.toUpperCase()}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span><strong>Date:</strong> {selectedNoticeForPrint.date}</span>
                  <span className="font-bold uppercase text-emerald-800">{selectedNoticeForPrint.category}</span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mt-2 mb-3">
                  {selectedNoticeForPrint.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {selectedNoticeForPrint.description}
                </p>
              </div>

              {/* Signatures Footer */}
              <div className="pt-6 flex justify-between items-end text-xs text-slate-700 border-t border-slate-200">
                <div>
                  <p className="text-[10px] text-slate-400">Copy forwarded to:</p>
                  <p className="text-[11px]">1. Notice Board</p>
                  <p className="text-[11px]">2. Staff Diary</p>
                </div>
                <div className="text-right">
                  <div className="w-32 h-8 border-b border-slate-400 mb-1"></div>
                  <p className="font-bold text-slate-900">{selectedNoticeForPrint.issuedBy}</p>
                  <p className="text-[10px] text-slate-500">GES Chak No. 227/W.B</p>
                </div>
              </div>

              <div className="no-print pt-4 border-t border-slate-100 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedNoticeForPrint(null)}
                  className="px-4 py-2 border rounded-xl text-xs font-semibold text-slate-700"
                >
                  Close
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Official Notice</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
