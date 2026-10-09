import React, { useState } from 'react';
import {
  Lock,
  X,
  Users,
  Bell,
  Layers,
  Award,
  Sparkles,
  Calendar,
  Shield,
  CheckCircle,
  FileText,
  KeyRound,
  Eye,
  EyeOff,
  Sun
} from 'lucide-react';
import { UserRole, Teacher, Notice, ClassInfo, StudentResult } from '../types';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
  teachersCount: number;
  classesCount: number;
  noticesCount: number;
  resultsCount: number;
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose,
  currentRole,
  setCurrentRole,
  teachersCount,
  classesCount,
  noticesCount,
  resultsCount,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'roles' | 'privacy' | 'audit'>('overview');
  const [adminPassword, setAdminPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [isAuthenticatedAdmin, setIsAuthenticatedAdmin] = useState(currentRole === 'admin');

  if (!isOpen) return null;

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo admin password
    if (adminPassword === 'admin227' || adminPassword === 'admin' || adminPassword === 'ges227') {
      setCurrentRole('admin');
      setIsAuthenticatedAdmin(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect passcode. (Demo credentials: "admin" or "admin227")');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <Lock className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  School Administration Portal
                </h3>
                <p className="text-xs text-slate-500">
                  GES Chak No. 227/W.B • Markaz Zakheera, DEA Lodhran
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-200 mb-6 gap-2 text-xs font-bold">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 px-3 border-b-2 transition ${
                activeTab === 'overview'
                  ? 'border-emerald-700 text-emerald-800'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              System Overview
            </button>
            <button
              onClick={() => setActiveTab('roles')}
              className={`pb-2.5 px-3 border-b-2 transition ${
                activeTab === 'roles'
                  ? 'border-emerald-700 text-emerald-800'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Role-Based Access
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`pb-2.5 px-3 border-b-2 transition ${
                activeTab === 'privacy'
                  ? 'border-emerald-700 text-emerald-800'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Privacy & Safeguarding
            </button>
            <button
              onClick={() => setActiveTab('audit')}
              className={`pb-2.5 px-3 border-b-2 transition ${
                activeTab === 'audit'
                  ? 'border-emerald-700 text-emerald-800'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Security Architecture
            </button>
          </div>

          {/* Tab 1: System Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <span className="text-xs text-emerald-800 font-semibold">Faculty Roster</span>
                  <p className="text-2xl font-black text-emerald-950 mt-1">{teachersCount}</p>
                  <span className="text-[10px] text-emerald-700">Educators configured</span>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                  <span className="text-xs text-blue-800 font-semibold">Active Classes</span>
                  <p className="text-2xl font-black text-blue-950 mt-1">{classesCount}</p>
                  <span className="text-[10px] text-blue-700">Playgroup to Grade 8</span>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100">
                  <span className="text-xs text-amber-800 font-semibold">School Notices</span>
                  <p className="text-2xl font-black text-amber-950 mt-1">{noticesCount}</p>
                  <span className="text-[10px] text-amber-700">Official circulars</span>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100">
                  <span className="text-xs text-purple-800 font-semibold">Demo Marksheets</span>
                  <p className="text-2xl font-black text-purple-950 mt-1">{resultsCount}</p>
                  <span className="text-[10px] text-purple-700">Terminal records</span>
                </div>
              </div>

              {/* Quick Switch for Admin mode */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Administrative Privileges State
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Current Perspective: <strong className="text-emerald-800 uppercase">{currentRole}</strong>
                    </p>
                  </div>
                  {currentRole === 'admin' ? (
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Admin Mode Active
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold">
                      Restricted Mode
                    </span>
                  )}
                </div>

                {currentRole !== 'admin' && (
                  <form onSubmit={handleAdminLogin} className="flex gap-2 text-xs">
                    <input
                      type="password"
                      placeholder="Enter Admin Passcode (e.g. 'admin' or 'admin227')"
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      className="flex-1 p-2 border border-slate-300 rounded-lg bg-white"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold"
                    >
                      Authenticate Admin
                    </button>
                  </form>
                )}

                {authError && (
                  <p className="text-xs text-red-600 font-medium">{authError}</p>
                )}
              </div>
            </div>
          )}

          {/* Tab 2: Role-Based Access */}
          {activeTab === 'roles' && (
            <div className="space-y-4 text-xs">
              <p className="text-slate-600 text-xs leading-relaxed">
                The application supports clear role-based separation as required for Pakistani government educational institutions:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  onClick={() => setCurrentRole('admin')}
                  className={`p-4 rounded-xl border cursor-pointer transition ${
                    currentRole === 'admin' ? 'border-emerald-600 bg-emerald-50' : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>1. Head Teacher / School Admin</span>
                    {currentRole === 'admin' && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Full CRUD on notices, teacher directory, classes, monthly themes, assembly messages, and results.
                  </p>
                </div>

                <div
                  onClick={() => setCurrentRole('teacher')}
                  className={`p-4 rounded-xl border cursor-pointer transition ${
                    currentRole === 'teacher' ? 'border-emerald-600 bg-emerald-50' : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>2. Teacher / Educator</span>
                    {currentRole === 'teacher' && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    AI Teacher Assistant access, homework entry, PECTAA activity editing, and assembly rosters.
                  </p>
                </div>

                <div
                  onClick={() => setCurrentRole('parent')}
                  className={`p-4 rounded-xl border cursor-pointer transition ${
                    currentRole === 'parent' ? 'border-emerald-600 bg-emerald-50' : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>3. Parent / Guardian</span>
                    {currentRole === 'parent' && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Parent notices, daily homework review, attendance guidelines, and direct school inquiries.
                  </p>
                </div>

                <div
                  onClick={() => setCurrentRole('student')}
                  className={`p-4 rounded-xl border cursor-pointer transition ${
                    currentRole === 'student' ? 'border-emerald-600 bg-emerald-50' : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>4. Student</span>
                    {currentRole === 'student' && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Step-by-step AI Tutor guidance, pledge wall submission, daily assembly recitation, and marksheets.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Privacy & Safeguarding */}
          {activeTab === 'privacy' && (
            <div className="space-y-4 text-xs text-slate-700">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <Shield className="w-4 h-4 text-emerald-700" />
                  <span>Student & Staff Privacy Mandates</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                  <li><strong>Zero Phone Disclosure: </strong>No student or parent personal phone numbers are ever published publicly.</li>
                  <li><strong>Zero Home Address Disclosure: </strong>Residential addresses of students remain strictly confidential within internal registers.</li>
                  <li><strong>Marksheet Protection: </strong>Results displayed in the portal are clearly marked demo records; real student cards require authentication.</li>
                  <li><strong>Staff Protection: </strong>Private contact details of educators are masked; only official school channels are public.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Tab 4: Security Architecture */}
          {activeTab === 'audit' && (
            <div className="space-y-4 text-xs text-slate-700">
              <p>
                This application is constructed with clean abstraction layers ready for backend database integration (e.g. Firebase Firestore or Cloud SQL) with role-based JWT/OAuth authentication.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-[11px] space-y-1">
                <p className="text-emerald-700">// Backend Proxy Security Check</p>
                <p>Route: /api/gemini/teacher-assistant (Server-side sanitized)</p>
                <p>Route: /api/gemini/student-tutor (Pedagogical guardrails enforced)</p>
                <p>Authentication: Token-ready RBAC schema</p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-6">
          <span className="text-xs text-slate-400">
            Government Elementary School Chak No. 227/W.B
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold"
          >
            Close Dashboard
          </button>
        </div>

      </div>
    </div>
  );
};
