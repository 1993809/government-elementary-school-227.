import React, { useState } from 'react';
import {
  Award,
  Search,
  Filter,
  Printer,
  Download,
  AlertCircle,
  FileCheck,
  CheckCircle,
  Eye,
  X,
  GraduationCap
} from 'lucide-react';
import { StudentResult, UserRole } from '../types';

interface ResultsSectionProps {
  results: StudentResult[];
  currentRole: UserRole;
  selectedClassFilter?: string;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({
  results,
  currentRole,
  selectedClassFilter,
}) => {
  const [selectedClass, setSelectedClass] = useState<string>(selectedClassFilter || 'All');
  const [selectedTerm, setSelectedTerm] = useState<string>('Mid Term Examination');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectedResult, setInspectedResult] = useState<StudentResult | null>(null);

  const filteredResults = results.filter((res) => {
    const matchesClass = selectedClass === 'All' || res.classId === selectedClass || res.className === selectedClass;
    const matchesTerm = selectedTerm === 'All' || res.examTerm === selectedTerm;
    const matchesSearch =
      res.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.rollNo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesClass && matchesTerm && matchesSearch;
  });

  const calculateGrade = (pct: number) => {
    if (pct >= 85) return { grade: 'A+', remarks: 'Excellent (Mumtaz)' };
    if (pct >= 75) return { grade: 'A', remarks: 'Very Good' };
    if (pct >= 60) return { grade: 'B', remarks: 'Good' };
    if (pct >= 50) return { grade: 'C', remarks: 'Satisfactory' };
    if (pct >= 40) return { grade: 'D', remarks: 'Pass' };
    return { grade: 'E', remarks: 'Needs Improvement' };
  };

  const exportCSV = () => {
    const headers = ['Roll No', 'Student Name', 'Class', 'Term', 'English', 'Math', 'Urdu', 'Quran', 'GK', 'Islamiat', 'Total', 'Percentage'];
    const rows = filteredResults.map((r) => {
      const total = r.english + r.math + r.urdu + r.quran + r.gk + r.islamiat;
      const pct = (total / 600) * 100;
      return [
        r.rollNo,
        r.name,
        r.className,
        r.examTerm,
        r.english,
        r.math,
        r.urdu,
        r.quran,
        r.gk,
        r.islamiat,
        total,
        `${pct.toFixed(1)}%`
      ];
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `GES_227WB_Results_${selectedTerm.replace(/\s+/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="results" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            Student Academic Evaluation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Examination Results & Marksheets
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Official terminal assessment records for students of Government Elementary School Chak No. 227/W.B
          </p>
        </div>

        {/* Mandatory Demo Data Notice Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 flex items-start gap-3 shadow-xs">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-950">
            <strong className="font-extrabold uppercase tracking-wide text-amber-900">
              Notice: Demo Data — Replace with official school records
            </strong>
            <p className="mt-1 text-amber-900/90 leading-relaxed">
              In accordance with student privacy protection guidelines, all names, scores, and marks shown below are representative demonstration records. Official student report cards are issued by the head teacher and verified via official gazettes.
            </p>
          </div>
        </div>

        {/* Controls Bar: Search, Select Class, Select Exam, Print, Download */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-8 shadow-xs flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {/* Search by student name or roll no */}
            <div className="relative w-full sm:w-60">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search roll no or student..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            {/* Class Selector */}
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="p-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-emerald-500"
            >
              <option value="All">All Grades (1 - 8)</option>
              <option value="c-5">Grade 5</option>
              <option value="c-6">Grade 6</option>
              <option value="c-7">Grade 7</option>
              <option value="c-8">Grade 8</option>
            </select>

            {/* Exam Selector */}
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="p-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-emerald-500"
            >
              <option value="Mid Term Examination">Mid Term Examination</option>
              <option value="First Term Examination">First Term Examination</option>
              <option value="Annual Examination">Annual Examination</option>
            </select>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5 w-full lg:w-auto justify-end">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition"
            >
              <Printer className="w-4 h-4" />
              <span>Print Results</span>
            </button>

            <button
              onClick={exportCSV}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
          </div>

        </div>

        {/* Results Data Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-emerald-950 text-emerald-100 uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Student</th>
                  <th className="py-4 px-3 text-center">English</th>
                  <th className="py-4 px-3 text-center">Mathematics</th>
                  <th className="py-4 px-3 text-center">Urdu</th>
                  <th className="py-4 px-3 text-center">Quran</th>
                  <th className="py-4 px-3 text-center">GK</th>
                  <th className="py-4 px-3 text-center">Islamiat</th>
                  <th className="py-4 px-4 text-center font-black text-amber-300">Total</th>
                  <th className="py-4 px-4 text-center font-black text-emerald-300">Percentage</th>
                  <th className="py-4 px-4 text-right no-print">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredResults.map((row) => {
                  const total = row.english + row.math + row.urdu + row.quran + row.gk + row.islamiat;
                  const percentage = ((total / 600) * 100).toFixed(1);
                  const { grade } = calculateGrade(Number(percentage));

                  return (
                    <tr key={row.id} className="hover:bg-emerald-50/40 transition">
                      <td className="py-4 px-4 sm:px-6">
                        <div className="font-bold text-slate-900">{row.name}</div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          Roll: {row.rollNo} • {row.className}
                        </div>
                      </td>
                      <td className="py-4 px-3 text-center font-medium text-slate-700">{row.english} / 100</td>
                      <td className="py-4 px-3 text-center font-medium text-slate-700">{row.math} / 100</td>
                      <td className="py-4 px-3 text-center font-medium text-slate-700">{row.urdu} / 100</td>
                      <td className="py-4 px-3 text-center font-medium text-slate-700">{row.quran} / 100</td>
                      <td className="py-4 px-3 text-center font-medium text-slate-700">{row.gk} / 100</td>
                      <td className="py-4 px-3 text-center font-medium text-slate-700">{row.islamiat} / 100</td>
                      <td className="py-4 px-4 text-center font-bold text-slate-900 bg-slate-50/50">
                        {total} <span className="text-[10px] text-slate-400">/ 600</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="font-extrabold text-emerald-800 text-sm">{percentage}%</span>
                        <span className="block text-[10px] font-bold text-slate-500">Grade {grade}</span>
                      </td>
                      <td className="py-4 px-4 text-right no-print">
                        <button
                          onClick={() => setInspectedResult(row)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-100/70 hover:bg-emerald-200/70 text-emerald-900 text-xs font-bold transition"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Report Card</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredResults.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-xs">
              No demo student records found for the selected search filters.
            </div>
          )}
        </div>

        {/* Detailed Student Report Card Modal */}
        {inspectedResult && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="print-card bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
              
              <div className="flex items-center justify-between no-print border-b border-slate-100 pb-3 mb-4">
                <span className="text-xs font-bold text-emerald-800 uppercase">
                  Progress Report Card (Demo)
                </span>
                <button
                  onClick={() => setInspectedResult(null)}
                  className="p-1 rounded text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Official Marksheet Header */}
              <div className="text-center border-b-2 border-slate-900 pb-4 mb-5">
                <div className="inline-block w-10 h-10 rounded-xl bg-emerald-800 text-white p-2 mb-2">
                  <GraduationCap className="w-full h-full" />
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase">
                  Government Elementary School Chak No. 227/W.B
                </h3>
                <p className="text-xs text-slate-600">
                  Markaz Zakheera • District Education Authority Lodhran • Punjab
                </p>
                <div className="mt-2 text-xs font-bold text-emerald-800 uppercase bg-emerald-50 inline-block px-3 py-1 rounded-full border border-emerald-200">
                  {inspectedResult.examTerm} Marksheet
                </div>
              </div>

              {/* Student Metadata */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs mb-5">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Student Name</span>
                  <span className="font-bold text-slate-900">{inspectedResult.name}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Roll Number</span>
                  <span className="font-bold font-mono text-slate-900">{inspectedResult.rollNo}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Class / Grade</span>
                  <span className="font-bold text-slate-900">{inspectedResult.className}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Status</span>
                  <span className="font-bold text-emerald-700">Passed (Demo)</span>
                </div>
              </div>

              {/* Subject Breakdown Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs mb-5">
                <table className="w-full">
                  <thead className="bg-slate-100 font-bold text-slate-700">
                    <tr>
                      <th className="p-2.5 text-left">Subject</th>
                      <th className="p-2.5 text-center">Maximum Marks</th>
                      <th className="p-2.5 text-center">Marks Obtained</th>
                      <th className="p-2.5 text-center">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-2.5 font-medium">English Language</td>
                      <td className="p-2.5 text-center">100</td>
                      <td className="p-2.5 text-center font-bold">{inspectedResult.english}</td>
                      <td className="p-2.5 text-center">{calculateGrade(inspectedResult.english).grade}</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium">Mathematics</td>
                      <td className="p-2.5 text-center">100</td>
                      <td className="p-2.5 text-center font-bold">{inspectedResult.math}</td>
                      <td className="p-2.5 text-center">{calculateGrade(inspectedResult.math).grade}</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium">Urdu Literature & Grammar</td>
                      <td className="p-2.5 text-center">100</td>
                      <td className="p-2.5 text-center font-bold">{inspectedResult.urdu}</td>
                      <td className="p-2.5 text-center">{calculateGrade(inspectedResult.urdu).grade}</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium">Tarjuma-tul-Quran / Nazra</td>
                      <td className="p-2.5 text-center">100</td>
                      <td className="p-2.5 text-center font-bold">{inspectedResult.quran}</td>
                      <td className="p-2.5 text-center">{calculateGrade(inspectedResult.quran).grade}</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium">General Knowledge & Science</td>
                      <td className="p-2.5 text-center">100</td>
                      <td className="p-2.5 text-center font-bold">{inspectedResult.gk}</td>
                      <td className="p-2.5 text-center">{calculateGrade(inspectedResult.gk).grade}</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium">Islamiat & Ethics</td>
                      <td className="p-2.5 text-center">100</td>
                      <td className="p-2.5 text-center font-bold">{inspectedResult.islamiat}</td>
                      <td className="p-2.5 text-center">{calculateGrade(inspectedResult.islamiat).grade}</td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-emerald-50 font-bold text-slate-900 border-t border-slate-200">
                    <tr>
                      <td className="p-2.5">Grand Total / Overall</td>
                      <td className="p-2.5 text-center">600</td>
                      <td className="p-2.5 text-center font-black text-emerald-900">
                        {inspectedResult.english + inspectedResult.math + inspectedResult.urdu + inspectedResult.quran + inspectedResult.gk + inspectedResult.islamiat}
                      </td>
                      <td className="p-2.5 text-center font-black text-emerald-900">
                        {(((inspectedResult.english + inspectedResult.math + inspectedResult.urdu + inspectedResult.quran + inspectedResult.gk + inspectedResult.islamiat) / 600) * 100).toFixed(1)}%
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Remarks */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 mb-6">
                <strong>Teacher's Remark: </strong>
                <span>{inspectedResult.remarks}</span>
              </div>

              {/* Stamp & Signatures */}
              <div className="grid grid-cols-2 pt-6 border-t border-slate-300 text-center text-xs text-slate-600">
                <div>
                  <div className="w-32 border-b border-slate-400 mx-auto mb-1"></div>
                  <span>Class Teacher Signature</span>
                </div>
                <div>
                  <div className="w-32 border-b border-slate-400 mx-auto mb-1"></div>
                  <span className="font-bold text-slate-800">Head Teacher (Seal & Signature)</span>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="no-print pt-6 border-t border-slate-100 flex justify-end gap-3">
                <button
                  onClick={() => setInspectedResult(null)}
                  className="px-4 py-2 border rounded-xl text-xs font-semibold text-slate-700"
                >
                  Close
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Marksheet</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
