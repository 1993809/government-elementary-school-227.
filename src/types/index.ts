export type UserRole = 'visitor' | 'student' | 'parent' | 'teacher' | 'admin';

export interface SchoolInfo {
  name: string;
  urduName: string;
  village: string;
  markaz: string;
  district: string;
  province: string;
  country: string;
  emisCode: string;
  timingSummer: string;
  timingWinter: string;
  phone: string;
  email: string;
  emergencyContact: string;
}

export interface Teacher {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  subjectClass: string;
  bio: string;
  imageUrl?: string;
  isPlaceholder?: boolean;
}

export interface ClassInfo {
  id: string;
  name: string;
  level: 'Early Childhood' | 'Primary' | 'Elementary';
  room: string;
  classTeacher: string;
  totalSubjects: number;
  subjects: string[];
  homeworkToday: string;
  notices: string[];
  activities: string[];
}

export interface StudentResult {
  id: string;
  rollNo: string;
  name: string;
  classId: string;
  className: string;
  examTerm: 'First Term Examination' | 'Mid Term Examination' | 'Annual Examination';
  english: number;
  math: number;
  urdu: number;
  quran: number;
  gk: number;
  islamiat: number;
  remarks: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'General' | 'Academic' | 'Examination' | 'Holiday' | 'Parent Notice' | 'Student Notice' | 'Emergency';
  description: string;
  isImportant: boolean;
  issuedBy: string;
}

export interface AssemblyItem {
  id: string;
  date: string;
  quranVerse: string;
  quranTranslation: string;
  naatLine: string;
  hadith: string;
  hadithTranslation: string;
  thoughtOfTheDay: string;
  civicMessage: string;
  dailyMessage: string;
  studentPresenter: string;
}

export interface Pledge {
  id: string;
  studentName: string;
  grade: string;
  pledgeText: string;
  date: string;
  verified: boolean;
}

export interface PectaaActivity {
  id: string;
  title: string;
  category: string;
  iconName: string;
  objective: string;
  description: string;
  weeklyBadge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  imagePlaceholderColor: string;
  date: string;
}
