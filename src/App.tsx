import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { LeadershipSection } from './components/LeadershipSection';
import { TeachersSection } from './components/TeachersSection';
import { ClassesSection } from './components/ClassesSection';
import { AcademicsSection } from './components/AcademicsSection';
import { AiTeacherAssistantSection } from './components/AiTeacherAssistantSection';
import { StudentAiTutorSection } from './components/StudentAiTutorSection';
import { ParentCornerSection } from './components/ParentCornerSection';
import { FaqSection } from './components/FaqSection';
import { NoticesSection } from './components/NoticesSection';
import { ResultsSection } from './components/ResultsSection';
import { PectaaLifeSkillsSection } from './components/PectaaLifeSkillsSection';
import { ThemeOfTheMonthSection } from './components/ThemeOfTheMonthSection';
import { MorningAssemblySection } from './components/MorningAssemblySection';
import { GallerySection } from './components/GallerySection';
import { PakistanPledgeSection } from './components/PakistanPledgeSection';
import { ContactSection } from './components/ContactSection';
import { AdminDashboardModal } from './components/AdminDashboardModal';
import { Footer } from './components/Footer';

import {
  initialHeadTeacher,
  initialTeachers,
  initialClasses,
  initialNotices,
  demoStudentResults,
} from './data/initialData';
import { UserRole, Teacher, Notice, ClassInfo, StudentResult } from './types';

export default function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>('visitor');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);

  // Dynamic state for school content
  const [headTeacherData, setHeadTeacherData] = useState(initialHeadTeacher);
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers);
  const [classes, setClasses] = useState<ClassInfo[]>(initialClasses);
  const [notices, setNotices] = useState<Notice[]>(initialNotices);
  const [results, setResults] = useState<StudentResult[]>(demoStudentResults);
  const [resultsClassFilter, setResultsClassFilter] = useState<string>('All');

  // Teacher Handlers
  const handleAddTeacher = (newTeacher: Teacher) => {
    setTeachers((prev) => [...prev, newTeacher]);
  };

  const handleUpdateTeacher = (updatedTeacher: Teacher) => {
    setTeachers((prev) =>
      prev.map((t) => (t.id === updatedTeacher.id ? updatedTeacher : t))
    );
  };

  const handleDeleteTeacher = (id: string) => {
    setTeachers((prev) => prev.filter((t) => t.id !== id));
  };

  // Notice Handlers
  const handleAddNotice = (newNotice: Notice) => {
    setNotices((prev) => [newNotice, ...prev]);
  };

  const handleDeleteNotice = (id: string) => {
    setNotices((prev) => prev.filter((n) => n.id !== id));
  };

  // Class results handler
  const handleSelectClassForResults = (classId: string) => {
    setResultsClassFilter(classId);
    setActiveSection('results');
    document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-emerald-700 selection:text-white">
      {/* Sticky Responsive Navbar with Role Switcher & Admin Portal */}
      <Navbar
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreClick={() => scrollTo('about')}
          onParentClick={() => scrollTo('parent-corner')}
          onAiAssistantClick={() => scrollTo('ai-assistant')}
        />

        {/* 2. About Our School */}
        <AboutSection />

        {/* 3. School Vision & Mission */}
        <VisionMissionSection />

        {/* 4. Head Teacher / Leadership */}
        <LeadershipSection
          currentRole={currentRole}
          headTeacherData={headTeacherData}
          onUpdateHeadTeacher={setHeadTeacherData}
        />

        {/* 5. Teachers Section */}
        <TeachersSection
          teachers={teachers}
          currentRole={currentRole}
          onAddTeacher={handleAddTeacher}
          onUpdateTeacher={handleUpdateTeacher}
          onDeleteTeacher={handleDeleteTeacher}
        />

        {/* 6. Classes Section */}
        <ClassesSection
          classes={classes}
          currentRole={currentRole}
          onSelectClassForResults={handleSelectClassForResults}
          onUpdateClasses={setClasses}
        />

        {/* 7. Academics Section */}
        <AcademicsSection />

        {/* 8. AI Teacher Assistant */}
        <AiTeacherAssistantSection />

        {/* 9. Student AI Tutor */}
        <StudentAiTutorSection />

        {/* 10. Parent Corner */}
        <ParentCornerSection
          onNavigateToNotices={() => scrollTo('notices')}
          onNavigateToClasses={() => scrollTo('classes')}
          onNavigateToContact={() => scrollTo('contact')}
        />

        {/* 11. Frequently Asked Questions (FAQs) */}
        <FaqSection onContactClick={() => scrollTo('contact')} />

        {/* 12. School Notices */}
        <NoticesSection
          notices={notices}
          currentRole={currentRole}
          onAddNotice={handleAddNotice}
          onDeleteNotice={handleDeleteNotice}
        />

        {/* 12. Results Section */}
        <ResultsSection
          results={results}
          currentRole={currentRole}
          selectedClassFilter={resultsClassFilter}
        />

        {/* 13. PECTAA Civic Sense & Life Skills */}
        <PectaaLifeSkillsSection currentRole={currentRole} />

        {/* 14. Theme of the Month */}
        <ThemeOfTheMonthSection currentRole={currentRole} />

        {/* 15. Morning Assembly */}
        <MorningAssemblySection />

        {/* 16. School Photo Gallery */}
        <GallerySection />

        {/* 17. Pakistan Pledge Section */}
        <PakistanPledgeSection />

        {/* 18. Contact & Map */}
        <ContactSection currentRole={currentRole} />
      </main>

      {/* Admin Dashboard Modal */}
      <AdminDashboardModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
        teachersCount={teachers.length}
        classesCount={classes.length}
        noticesCount={notices.length}
        resultsCount={results.length}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
