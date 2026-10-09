import React, { useState } from 'react';
import {
  GraduationCap,
  Menu,
  X,
  Shield,
  BookOpen,
  Calendar,
  Sparkles,
  Award,
  Users,
  Search,
  Bell,
  CheckCircle,
  Lock,
  ChevronDown,
  Building2,
  Heart
} from 'lucide-react';
import { UserRole } from '../types';

interface NavbarProps {
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenAdminModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRole,
  setCurrentRole,
  activeSection,
  setActiveSection,
  onOpenAdminModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About School' },
    { id: 'leadership', label: 'Head Teacher' },
    { id: 'teachers', label: 'Teachers' },
    { id: 'classes', label: 'Classes' },
    { id: 'academics', label: 'Academics' },
    { id: 'ai-assistant', label: 'AI Teacher Assistant', highlight: true },
    { id: 'ai-tutor', label: 'Ask AI Tutor', highlight: true },
    { id: 'parent-corner', label: 'Parent Corner' },
    { id: 'faq', label: 'Parent FAQs' },
    { id: 'notices', label: 'Notices' },
    { id: 'results', label: 'Results' },
    { id: 'pectaa', label: 'Life Skills (PECTAA)' },
    { id: 'theme', label: 'Theme of Month' },
    { id: 'assembly', label: 'Morning Assembly' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'pledge', label: 'Pakistan Pledge' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const rolesList: { id: UserRole; label: string; badge: string }[] = [
    { id: 'visitor', label: 'Public Visitor', badge: 'Public' },
    { id: 'student', label: 'Student', badge: 'Student View' },
    { id: 'parent', label: 'Parent / Guardian', badge: 'Parent View' },
    { id: 'teacher', label: 'Teacher', badge: 'Faculty' },
    { id: 'admin', label: 'School Admin', badge: 'Management' },
  ];

  return (
    <>
      {/* Top Official Government Banner */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-1.5 px-4 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Government of Punjab • School Education Department</span>
            <span className="hidden sm:inline text-emerald-400">|</span>
            <span className="hidden sm:inline text-emerald-200">District Education Authority (DEA) Lodhran</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="bg-emerald-800/80 text-emerald-200 px-2 py-0.5 rounded font-mono">Markaz Zakheera</span>
            <span className="font-urdu text-sm hidden md:inline text-emerald-300">گورنمنٹ ایلیمنٹری اسکول چک نمبر 227/ڈبلیو بی</span>
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-1.5 bg-emerald-900 hover:bg-emerald-800 text-white px-2.5 py-0.5 rounded transition text-xs"
              >
                <Shield className="w-3 h-3 text-emerald-400" />
                <span>Role: <strong className="capitalize">{currentRole}</strong></span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-200 py-1 z-50">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-100">
                    Switch Perspective
                  </div>
                  {rolesList.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => {
                        setCurrentRole(r.id);
                        setRoleDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-emerald-50 transition ${
                        currentRole === r.id ? 'font-semibold text-emerald-700 bg-emerald-50/50' : 'text-slate-700'
                      }`}
                    >
                      <span>{r.label}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                        {r.badge}
                      </span>
                    </button>
                  ))}
                  <div className="border-t border-slate-100 pt-1">
                    <button
                      onClick={() => {
                        setRoleDropdownOpen(false);
                        onOpenAdminModal();
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs text-emerald-700 font-semibold hover:bg-emerald-50 flex items-center gap-1.5"
                    >
                      <Lock className="w-3 h-3" />
                      <span>Admin Management Portal</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* School Crest / Branding */}
            <div
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3.5 cursor-pointer group py-1"
            >
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-green-900 flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform">
                <div className="absolute inset-0 rounded-xl border border-white/20"></div>
                <GraduationCap className="w-7 h-7 text-emerald-100" />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[9px] font-bold">
                  ★
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h1 className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight tracking-tight group-hover:text-emerald-800 transition">
                    Govt Elementary School
                  </h1>
                  <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Chak 227/W.B
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <span>Markaz Zakheera</span>
                  <span className="text-slate-300">•</span>
                  <span>DEA Lodhran, Punjab</span>
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navLinks.slice(0, 9).map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    activeSection === link.id
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : link.highlight
                      ? 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200/80'
                      : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-100'
                  }`}
                >
                  {link.highlight && <Sparkles className="w-3 h-3 inline mr-1 text-emerald-600" />}
                  {link.label}
                </button>
              ))}

              {/* More Dropdown for additional sections */}
              <div className="relative group">
                <button className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-emerald-800 hover:bg-slate-100 flex items-center gap-1">
                  <span>More Sections</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute right-0 top-full pt-2 hidden group-hover:block w-56 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-200 py-2">
                    {navLinks.slice(9).map((link) => (
                      <button
                        key={link.id}
                        onClick={() => handleNavClick(link.id)}
                        className={`w-full text-left px-4 py-2 text-xs font-medium transition hover:bg-emerald-50 hover:text-emerald-800 ${
                          activeSection === link.id ? 'text-emerald-700 font-bold bg-emerald-50/50' : 'text-slate-700'
                        }`}
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Quick Action Badges / Admin Trigger */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => handleNavClick('notices')}
                className="p-2 rounded-lg text-slate-600 hover:text-emerald-800 hover:bg-emerald-50 relative"
                title="School Notices"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
              </button>

              <button
                onClick={() => handleNavClick('results')}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-200/70 rounded-lg transition"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Results</span>
              </button>

              <button
                onClick={onOpenAdminModal}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Admin</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={() => handleNavClick('ai-assistant')}
                className="p-2 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden xs:inline">AI Help</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-800" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 max-h-[85vh] overflow-y-auto px-4 pt-3 pb-6 space-y-3 shadow-2xl">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="flex items-center justify-between text-xs text-emerald-900 font-semibold mb-1">
                <span>Active Mode: <strong className="capitalize">{currentRole}</strong></span>
                <span className="bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded text-[10px]">Markaz Zakheera</span>
              </div>
              <p className="text-[11px] text-emerald-700">
                Government Elementary School Chak No. 227/W.B, Lodhran
              </p>
            </div>

            <div className="grid grid-cols-2 gap-1.5 pt-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-xs font-medium transition ${
                    activeSection === link.id
                      ? 'bg-emerald-700 text-white font-bold'
                      : link.highlight
                      ? 'bg-emerald-100/60 text-emerald-900 font-semibold border border-emerald-200'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.highlight && <Sparkles className="w-3 h-3 inline mr-1 text-emerald-700" />}
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdminModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
              >
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>Open Administration Dashboard</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
