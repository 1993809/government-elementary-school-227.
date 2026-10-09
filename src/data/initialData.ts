import {
  SchoolInfo,
  Teacher,
  ClassInfo,
  StudentResult,
  Notice,
  AssemblyItem,
  Pledge,
  PectaaActivity,
  GalleryItem
} from '../types';

export const initialSchoolInfo: SchoolInfo = {
  name: 'Government Elementary School Chak No. 227/W.B',
  urduName: 'گورنمنٹ ایلیمنٹری اسکول چک نمبر 227/ڈبلیو بی',
  village: 'Chak No. 227/W.B',
  markaz: 'Markaz Zakheera',
  district: 'District Education Authority (DEA) Lodhran',
  province: 'Punjab, Pakistan',
  country: 'Pakistan',
  emisCode: 'Information will be updated by the school administration.',
  timingSummer: '07:30 AM – 01:00 PM (Monday to Thursday & Saturday) | 07:30 AM – 11:30 AM (Friday)',
  timingWinter: '08:30 AM – 02:00 PM (Monday to Thursday & Saturday) | 08:30 AM – 12:00 PM (Friday)',
  phone: 'Information will be updated by the school administration.',
  email: 'Information will be updated by the school administration.',
  emergencyContact: 'Markaz Zakheera Office / DEA Lodhran Administration'
};

export const initialHeadTeacher = {
  name: 'To be updated',
  designation: 'Head Teacher / School Leadership',
  qualification: 'Information will be updated by the school administration.',
  experience: 'Information will be updated by the school administration.',
  messageTitle: 'Message from School Leadership',
  message: `Welcome to Government Elementary School Chak No. 227/W.B, Markaz Zakheera, DEA Lodhran.

Education is the foundation of individual character and national progress. At our institution, our primary duty is to instill moral integrity, intellectual curiosity, disciplined study habits, and a sense of civic responsibility in every young learner entrusted to our care.

We firmly believe that true education extends beyond textbooks. It requires regular attendance, punctuality, mutual respect, cleanliness, and active cooperation between parents and teachers. Together, as educators, guardians, and community members, we are dedicated to providing our children with a safe, respectful, and nurturing learning environment that equips them with academic competence and timeless ethical values.`,
  urduMessage: `تعلیم صرف کتابی علم کا نام نہیں بلکہ یہ کردار سازی، باہمی احترام، مستقل مزاجی اور حب الوطنی کی بنیاد ہے۔ ہمارا مقصد ہر بچے کو زیورِ تعلیم سے آراستہ کر کے ایک باصلاحیت اور ذمہ دار شہری بنانا ہے۔`
};

export const initialTeachers: Teacher[] = [
  {
    id: 't-1',
    name: 'To be updated',
    designation: 'Elementary School Teacher (EST) - Science & Mathematics',
    qualification: 'Information will be updated by the school administration.',
    subjectClass: 'General Science & Mathematics (Grades 6–8)',
    bio: 'Dedicated educator focusing on conceptual science learning, mathematical problem-solving, and practical logic.',
    isPlaceholder: true,
  },
  {
    id: 't-2',
    name: 'To be updated',
    designation: 'Elementary School Teacher (EST) - English & Social Studies',
    qualification: 'Information will be updated by the school administration.',
    subjectClass: 'English, Social Studies & History (Grades 6–8)',
    bio: 'Focuses on English communication skills, reading comprehension, civic values, and historical awareness.',
    isPlaceholder: true,
  },
  {
    id: 't-3',
    name: 'To be updated',
    designation: 'Primary School Teacher (PST) - Primary Section Lead',
    qualification: 'Information will be updated by the school administration.',
    subjectClass: 'All Primary Core Subjects (Grades 3–5)',
    bio: 'Committed to early literacy, Urdu handwriting, primary arithmetic foundations, and classroom discipline.',
    isPlaceholder: true,
  },
  {
    id: 't-4',
    name: 'To be updated',
    designation: 'Arabic & Islamiat Educator',
    qualification: 'Information will be updated by the school administration.',
    subjectClass: 'Islamiat, Quran Nazra & Ethics (Grades 1–8)',
    bio: 'Guides students in Tajweed, moral etiquette, Hadith teachings, and respectful Islamic behavior.',
    isPlaceholder: true,
  },
  {
    id: 't-5',
    name: 'To be updated',
    designation: 'Early Childhood Education (ECE) Specialist',
    qualification: 'Information will be updated by the school administration.',
    subjectClass: 'Playgroup, Prep & Kindergarten',
    bio: 'Specializes in activity-based learning, phonics, color recognition, and child-friendly school onboarding.',
    isPlaceholder: true,
  },
  {
    id: 't-6',
    name: 'To be updated',
    designation: 'Computer & Information Technology Educator',
    qualification: 'Information will be updated by the school administration.',
    subjectClass: 'Computer Studies & Digital Literacy (Grades 6–8)',
    bio: 'Introduces elementary students to fundamental computing concepts, safe internet habits, and typing skills.',
    isPlaceholder: true,
  }
];

export const initialClasses: ClassInfo[] = [
  {
    id: 'c-pg',
    name: 'Playgroup (ECE)',
    level: 'Early Childhood',
    room: 'ECE Activity Room 1',
    classTeacher: 'To be updated',
    totalSubjects: 4,
    subjects: ['Basic Phonics', 'Urdu Haroof Identification', 'Numbers & Shapes', 'Storytelling & Rhymes'],
    homeworkToday: 'Identify primary colors and practice tracing vertical lines.',
    notices: ['Please ensure students bring labeled water bottles.'],
    activities: ['Clay modeling and building block coordination']
  },
  {
    id: 'c-prep',
    name: 'Prep (Pre-Primary)',
    level: 'Early Childhood',
    room: 'ECE Room 2',
    classTeacher: 'To be updated',
    totalSubjects: 4,
    subjects: ['English Phonics', 'Urdu Huroof-e-Tahajji', 'Basic Math Counting (1-50)', 'General Knowledge'],
    homeworkToday: 'Practice writing English alphabets A to J in workbooks.',
    notices: ['Daily morning rhyme recitation activity.'],
    activities: ['Drawing fruits and learning healthy eating habits']
  },
  {
    id: 'c-kg',
    name: 'Kindergarten (KG)',
    level: 'Early Childhood',
    room: 'Room 3',
    classTeacher: 'To be updated',
    totalSubjects: 4,
    subjects: ['English Reading', 'Urdu Reading', 'Mathematics (Addition)', 'General Science & Hygiene'],
    homeworkToday: 'Complete Math page 14: single digit addition with pictures.',
    notices: ['Hand hygiene inspection during morning assembly.'],
    activities: ['Personal cleanliness demonstration']
  },
  {
    id: 'c-1',
    name: 'Grade 1',
    level: 'Primary',
    room: 'Block A, Room 101',
    classTeacher: 'To be updated',
    totalSubjects: 6,
    subjects: ['English', 'Urdu', 'Mathematics', 'General Knowledge', 'Islamiat', 'Nazra Quran'],
    homeworkToday: 'Read Urdu textbook Lesson 2 and write three words in notebook.',
    notices: ['Book bags must be kept tidy according to the timetable.'],
    activities: ['Oral spelling bees and moral story sessions']
  },
  {
    id: 'c-2',
    name: 'Grade 2',
    level: 'Primary',
    room: 'Block A, Room 102',
    classTeacher: 'To be updated',
    totalSubjects: 6,
    subjects: ['English', 'Urdu', 'Mathematics', 'General Knowledge', 'Islamiat', 'Nazra Quran'],
    homeworkToday: 'Math table of 2 and 3 practice on homework notebook.',
    notices: ['Weekly spelling test every Thursday.'],
    activities: ['Plant care observation in school garden']
  },
  {
    id: 'c-3',
    name: 'Grade 3',
    level: 'Primary',
    room: 'Block A, Room 103',
    classTeacher: 'To be updated',
    totalSubjects: 6,
    subjects: ['English', 'Urdu', 'Mathematics', 'General Knowledge', 'Islamiat', 'Nazra Quran'],
    homeworkToday: 'English grammar: nouns identification in paragraph 1.',
    notices: ['Attendance is strictly monitored; maintain 95%+.'],
    activities: ['Classroom queue formation training']
  },
  {
    id: 'c-4',
    name: 'Grade 4',
    level: 'Primary',
    room: 'Block B, Room 104',
    classTeacher: 'To be updated',
    totalSubjects: 6,
    subjects: ['English', 'Urdu', 'Mathematics', 'General Science', 'Social Studies', 'Islamiat & Quran'],
    homeworkToday: 'Science: Draw parts of a flowering plant and label roots, stem, and leaves.',
    notices: ['Upcoming formative monthly assessment next week.'],
    activities: ['PECTAA Cleanliness drive participation']
  },
  {
    id: 'c-5',
    name: 'Grade 5',
    level: 'Primary',
    room: 'Block B, Room 105',
    classTeacher: 'To be updated',
    totalSubjects: 6,
    subjects: ['English', 'Urdu', 'Mathematics', 'General Science', 'Social Studies', 'Islamiat & Quran'],
    homeworkToday: 'Math fractions revision questions 1 to 5 from Exercise 3.2.',
    notices: ['Primary exit preparation and character record check.'],
    activities: ['Welcome Captains roster duty']
  },
  {
    id: 'c-6',
    name: 'Grade 6',
    level: 'Elementary',
    room: 'Block C, Room 201',
    classTeacher: 'To be updated',
    totalSubjects: 8,
    subjects: ['English', 'Urdu', 'Mathematics', 'General Science', 'History & Geography', 'Islamiat', 'Tarjuma-tul-Quran', 'Computer Studies'],
    homeworkToday: 'General Science: Describe states of matter with examples in tabular form.',
    notices: ['Science practical notebook submission on Friday.'],
    activities: ['Debate club and assembly thought presentation']
  },
  {
    id: 'c-7',
    name: 'Grade 7',
    level: 'Elementary',
    room: 'Block C, Room 202',
    classTeacher: 'To be updated',
    totalSubjects: 8,
    subjects: ['English', 'Urdu', 'Mathematics', 'General Science', 'History & Geography', 'Islamiat', 'Tarjuma-tul-Quran', 'Computer Studies'],
    homeworkToday: 'Urdu Mazmoon: "Waqt ki Pabandi" (Punctuality) 150 words.',
    notices: ['Digital safety workshop reminder.'],
    activities: ['Recycling & zero-waste class project']
  },
  {
    id: 'c-8',
    name: 'Grade 8',
    level: 'Elementary',
    room: 'Block C, Room 203',
    classTeacher: 'To be updated',
    totalSubjects: 8,
    subjects: ['English', 'Urdu', 'Mathematics', 'General Science', 'History & Geography', 'Islamiat', 'Tarjuma-tul-Quran', 'Computer Studies'],
    homeworkToday: 'Mathematics: Solve linear equations in Exercise 6.1, Questions 4 through 8.',
    notices: ['Preparation for annual examination and career guidance seminar.'],
    activities: ['Leadership mentorship for junior grades']
  }
];

export const academicSubjects = [
  {
    name: 'English Language',
    code: 'ENG',
    description: 'Grammar mechanics, vocabulary acquisition, reading comprehension, phonics in early years, and structured creative writing in accordance with Punjab National Curriculum standards.',
    highlights: ['Interactive Phonics', 'Reading Fluency', 'Grammar Foundations', 'Spelling & Vocabulary'],
    urduName: 'انگریزی'
  },
  {
    name: 'Urdu Literature & Grammar',
    code: 'URD',
    description: 'National language mastery focusing on correct Nastaliq handwriting, grammatical rules, classical and modern prose, poetry recitation, and moral essays.',
    highlights: ['خوشخطی (Handwriting)', 'قواعد و انشا (Grammar)', 'سبق فہمی (Comprehension)', 'نظم خوانی (Poetry)'],
    urduName: 'اردو'
  },
  {
    name: 'Mathematics',
    code: 'MTH',
    description: 'Analytical reasoning starting with number sense, basic arithmetic operations, geometry, word problems, algebraic expressions, and elementary statistics.',
    highlights: ['Mental Math', 'Geometry & Measurement', 'Fractions & Ratios', 'Real-world Logic'],
    urduName: 'ریاضی'
  },
  {
    name: 'General Science',
    code: 'SCI',
    description: 'Inquiry-based scientific exploration of living organisms, environment, matter, physical forces, earth science, and laboratory observation.',
    highlights: ['Nature Observation', 'Human Body Systems', 'States of Matter', 'Ecological Balance'],
    urduName: 'جنرل سائنس'
  },
  {
    name: 'General Knowledge & Social Studies',
    code: 'GK/SS',
    description: 'Pakistan studies, geographical features of Punjab and Pakistan, civic institutions, historical milestones, and global community awareness.',
    highlights: ['Geography of Pakistan', 'Civic Responsibilities', 'Cultural Heritage', 'Community Roles'],
    urduName: 'معلوماتِ عامہ و معاشرتی علوم'
  },
  {
    name: 'Islamiat & Ethics',
    code: 'ISL/ETH',
    description: 'Teachings of the Holy Quran, Sunnah, Hadith, Seerat-un-Nabi (PBUH), ethical conduct, honesty, truthfulness, and alternative ethical curriculum for non-Muslim students.',
    highlights: ['سیرت النبی ﷺ', 'اخلاقیات و دیانت داری', 'نماز و عبادات', 'باہمی احترام'],
    urduName: 'اسلامیات و اخلاقیات'
  },
  {
    name: 'Quran Nazra & Tarjuma-tul-Quran',
    code: 'QRN',
    description: 'Punjab School Education Department compliant Tajweed pronunciation, Nazra Quran, and age-graded Tarjuma-tul-Quran curriculum.',
    highlights: ['تجوید و ناظرہ', 'ترجمۃ القرآن', 'حفظ مسنون دعائیں', 'آدابِ تلاوت'],
    urduName: 'ترجمۃ القرآن الکریم'
  },
  {
    name: 'Computer & Digital Literacy',
    code: 'CS',
    description: 'Foundations of computer hardware, software, keyboarding proficiency, word processing, basic computational logic, and responsible cyber ethics.',
    highlights: ['Keyboarding', 'Basic Operating Systems', 'Safe Internet Usage', 'Digital Citizenship'],
    urduName: 'کمپیوٹر سائنس'
  },
  {
    name: 'PECTAA Life Skills & Civic Sense',
    code: 'LS',
    description: 'Practical citizenship, personal hygiene, queuing discipline, road safety, disaster resilience, environmental stewardship, and social etiquette.',
    highlights: ['Queue Discipline', 'Clean School Campaigns', 'Road Safety Rules', 'Empathy & Respect'],
    urduName: 'زندگی کی مہارتیں اور شہری شعور'
  }
];

export const demoStudentResults: StudentResult[] = [
  {
    id: 'res-1',
    rollNo: '227-01',
    name: 'Demo Student A',
    classId: 'c-5',
    className: 'Grade 5',
    examTerm: 'Mid Term Examination',
    english: 88,
    math: 92,
    urdu: 85,
    quran: 96,
    gk: 90,
    islamiat: 94,
    remarks: 'Outstanding performance in Mathematics and Tajweed.'
  },
  {
    id: 'res-2',
    rollNo: '227-02',
    name: 'Demo Student B',
    classId: 'c-5',
    className: 'Grade 5',
    examTerm: 'Mid Term Examination',
    english: 74,
    math: 80,
    urdu: 79,
    quran: 88,
    gk: 82,
    islamiat: 86,
    remarks: 'Good understanding; encourage more written English practice.'
  },
  {
    id: 'res-3',
    rollNo: '227-03',
    name: 'Demo Student C',
    classId: 'c-6',
    className: 'Grade 6',
    examTerm: 'Mid Term Examination',
    english: 82,
    math: 89,
    urdu: 84,
    quran: 92,
    gk: 88,
    islamiat: 90,
    remarks: 'Consistent student; active participant in morning assembly.'
  },
  {
    id: 'res-4',
    rollNo: '227-04',
    name: 'Demo Student D',
    classId: 'c-7',
    className: 'Grade 7',
    examTerm: 'Mid Term Examination',
    english: 91,
    math: 95,
    urdu: 89,
    quran: 98,
    gk: 93,
    islamiat: 95,
    remarks: 'Exemplary academic and civic conduct.'
  },
  {
    id: 'res-5',
    rollNo: '227-05',
    name: 'Demo Student E',
    classId: 'c-8',
    className: 'Grade 8',
    examTerm: 'Mid Term Examination',
    english: 79,
    math: 84,
    urdu: 81,
    quran: 90,
    gk: 76,
    islamiat: 85,
    remarks: 'Good progress; needs reinforcement in Science terms.'
  }
];

export const initialNotices: Notice[] = [
  {
    id: 'n-1',
    title: 'School Timings Adjustment for Current Season',
    date: 'October 2026',
    category: 'General',
    description: 'Parents and students are informed that school assembly begins promptly as per DEA Lodhran guidelines. Please ensure timely arrival in proper uniform.',
    isImportant: true,
    issuedBy: 'Office of the Head Teacher'
  },
  {
    id: 'n-2',
    title: 'Monthly Parent-Teacher Interaction & Review Meeting',
    date: 'October 2026',
    category: 'Parent Notice',
    description: 'Respected parents and guardians are cordially invited to visit the school during designated hours to review their child’s academic diary, attendance records, and cleanliness habits.',
    isImportant: true,
    issuedBy: 'Administration GES Chak No. 227/W.B'
  },
  {
    id: 'n-3',
    title: 'Schedule for Upcoming Mid-Term Diagnostic Assessments',
    date: 'October 2026',
    category: 'Examination',
    description: 'Datesheet for the mid-term examinations for Grades 1 to 8 has been displayed on the notice board. Students are advised to prepare all syllabus units diligently.',
    isImportant: true,
    issuedBy: 'Academic Examination Committee'
  },
  {
    id: 'n-4',
    title: 'PECTAA "Saaf Suthra Punjab" Cleanliness & Plantation Campaign',
    date: 'October 2026',
    category: 'Student Notice',
    description: 'All classes will participate in our fort-nightly cleanliness drive. Special recognition badges will be awarded to classrooms maintaining zero litter and neat desk arrangement.',
    isImportant: false,
    issuedBy: 'Civic Sense & Life Skills Wing'
  },
  {
    id: 'n-5',
    title: 'Public Holiday Notification (As notified by Govt of Punjab)',
    date: 'October 2026',
    category: 'Holiday',
    description: 'The school will remain closed on the gazetted government holiday in accordance with official notification from the Government of Punjab, School Education Department.',
    isImportant: false,
    issuedBy: 'DEA Lodhran'
  }
];

export const pectaaActivities: PectaaActivity[] = [
  {
    id: 'p-1',
    title: 'Queue Champions (قطار چیمپئنز)',
    category: 'Discipline & Order',
    iconName: 'Users',
    objective: 'Instill patience, fairness, and orderly conduct in drinking water stations, tuck shop lines, and classroom entry.',
    description: 'Students practice maintaining orderly single-file queues without pushing or bypassing fellow peers. Weekly badge awarded to the best queue leader.',
    weeklyBadge: 'Order & Patience Star'
  },
  {
    id: 'p-2',
    title: 'Welcome Captains (خوش آمدید ٹیم)',
    category: 'Etiquette & Respect',
    iconName: 'HeartHandshake',
    objective: 'Develop warm social greetings, respect for elders, teachers, and classmates.',
    description: 'Designated rotating student captains stand at the school gate to greet incoming students with "Assalam-o-Alaikum" and a polite smile.',
    weeklyBadge: 'Hospitality & Manners Badge'
  },
  {
    id: 'p-3',
    title: 'Cleanliness & Anti-Littering (صفائی نصف ایمان)',
    category: 'Hygiene & Clean Punjab',
    iconName: 'Sparkles',
    objective: 'Promote personal cleanliness, classroom hygiene, waste segregation, and campus preservation.',
    description: 'Daily 5-minute post-recess campus inspection where students take personal responsibility for disposing wrappers into bins.',
    weeklyBadge: 'Green & Clean Guardian'
  },
  {
    id: 'p-4',
    title: 'Be Smart Online & Digital Safety',
    category: 'Digital Awareness',
    iconName: 'ShieldCheck',
    objective: 'Educate students on safe digital habits, protecting personal privacy, and limiting excessive screen time.',
    description: 'Classroom talks on never sharing home addresses online, being courteous in digital messages, and using mobile phones solely for learning under parental guidance.',
    weeklyBadge: 'Cyber Smart Citizen'
  },
  {
    id: 'p-5',
    title: 'Road & Bicycle Safety Protocols',
    category: 'Public Safety',
    iconName: 'Bike',
    objective: 'Ensure safe commute to and from school for rural and semi-rural walking and cycling students.',
    description: 'Teaching rules of the road: walking on the safe roadside against traffic, signaling when cycling, and crossing village pathways with alertness.',
    weeklyBadge: 'Road Safety Champion'
  },
  {
    id: 'p-6',
    title: 'Pakistan Citizenship & Personal Integrity',
    category: 'Civic Responsibility',
    iconName: 'Flag',
    objective: 'Cultivate honesty, loyalty to the motherland, preservation of public property, and communal harmony.',
    description: 'Students pledge to protect school property, speak the truth under all conditions, and actively support friends in need.',
    weeklyBadge: 'Patriot of Character'
  }
];

export const initialAssemblyItem: AssemblyItem = {
  id: 'asm-1',
  date: 'Current Week',
  quranVerse: 'وَقُل رَّبِّ زِدْنِي عِلْمًا (Surah Taha: 114)',
  quranTranslation: '"And say: My Lord, increase me in knowledge."',
  naatLine: 'وہ نبیوں میں رحمت لقب پانے والا — مرادیں غریبوں کی بر لانے والا',
  hadith: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
  hadithTranslation: '"Seeking knowledge is an obligation upon every Muslim." (Sunan Ibn Majah)',
  thoughtOfTheDay: 'Discipline is the bridge between educational goals and lasting personal success.',
  civicMessage: 'A true citizen keeps their surroundings clean, respects elders, and speaks the truth even when it is difficult.',
  dailyMessage: 'Make every day count by paying full attention in class and helping your fellow students learn.',
  studentPresenter: 'Selected on rotation by school administration'
};

export const initialMonthlyTheme = {
  month: 'Current Month',
  title: 'My Teacher, My Hero',
  urduTitle: 'میرا استاد — میرا ہیرو',
  quote: 'An effective teacher never stops learning. By continuously developing new knowledge, skills and teaching methods, teachers become more effective educators and positive role models for their students.',
  hashtags: ['#MyTeacherIsMyHero', '#ThemeOfTheMonth', '#GESChak227WB', '#DEALodhran'],
  guidelines: [
    'Write a sincere thank-you card to your teacher expressing gratitude for their guidance.',
    'Listen attentively during lectures and ask respectful questions.',
    'Reflect the values taught by your educators in your behavior at home and in public.'
  ]
};

export const initialPledges: Pledge[] = [
  {
    id: 'plg-1',
    studentName: 'Student Representative (Demo)',
    grade: 'Grade 8',
    pledgeText: 'I pledge to respect my country, keep my school clean, learn honestly and become a responsible citizen of Pakistan.',
    date: 'Demo Pledge',
    verified: true
  },
  {
    id: 'plg-2',
    studentName: 'Student Representative (Demo)',
    grade: 'Grade 7',
    pledgeText: 'I pledge to always speak the truth, help my classmates in their studies, and preserve public property in Lodhran.',
    date: 'Demo Pledge',
    verified: true
  },
  {
    id: 'plg-3',
    studentName: 'Student Representative (Demo)',
    grade: 'Grade 5',
    pledgeText: 'I pledge to be on time every day, listen to my teachers with full attention, and plant trees for a greener Punjab.',
    date: 'Demo Pledge',
    verified: true
  }
];

export const galleryCategories = [
  'All',
  'Morning Assembly',
  'Classroom Activities',
  'Sports',
  'Art & Creativity',
  'Cleanliness',
  'Road Safety',
  'PECTAA Activities',
  'Pakistan Day',
  'Independence Day',
  'Teacher Activities',
  'Student Activities'
];

export const initialGalleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Daily Morning Assembly & National Anthem',
    category: 'Morning Assembly',
    caption: 'Students lined up in strict discipline during the morning assembly, reciting Tilawat, Naat, and the National Anthem.',
    imagePlaceholderColor: 'from-emerald-700 to-teal-900',
    date: 'Recent Assembly'
  },
  {
    id: 'gal-2',
    title: 'Interactive Classroom Learning',
    category: 'Classroom Activities',
    caption: 'Elementary grade students actively participating in blackboard mathematical exercises and group discussions.',
    imagePlaceholderColor: 'from-blue-700 to-emerald-900',
    date: 'Academic Session'
  },
  {
    id: 'gal-3',
    title: 'Annual Physical Fitness & Sports Events',
    category: 'Sports',
    caption: 'Students engaging in traditional athletics, cricket drills, and physical exercise for bodily health and teamwork.',
    imagePlaceholderColor: 'from-amber-600 to-emerald-800',
    date: 'Sports Day'
  },
  {
    id: 'gal-4',
    title: 'PECTAA "Saaf Suthra Punjab" Drive',
    category: 'Cleanliness',
    caption: 'Student captains and teachers collaborating to keep school premises and green lawns spotless and garbage-free.',
    imagePlaceholderColor: 'from-green-700 to-emerald-950',
    date: 'Civic Campaign'
  },
  {
    id: 'gal-5',
    title: 'Independence & Pakistan Day Celebrations',
    category: 'Pakistan Day',
    caption: 'Commemoration of national heritage with national flags, patriotic speeches, and national pledge recitation.',
    imagePlaceholderColor: 'from-emerald-800 to-green-950',
    date: 'National Celebration'
  },
  {
    id: 'gal-6',
    title: 'Road Safety & Bicycle Awareness Drill',
    category: 'Road Safety',
    caption: 'Instructing students on safe road pedestrian crossings, bicycle safety hand signs, and rural highway awareness.',
    imagePlaceholderColor: 'from-cyan-800 to-emerald-900',
    date: 'Safety Week'
  },
  {
    id: 'gal-7',
    title: 'Students Art & Calligraphy Exhibition',
    category: 'Art & Creativity',
    caption: 'Urdu Nastaliq handwriting and creative drawing posters developed by primary and elementary students.',
    imagePlaceholderColor: 'from-purple-800 to-emerald-900',
    date: 'Art Gallery'
  },
  {
    id: 'gal-8',
    title: 'Teachers Continuous Professional Meeting',
    category: 'Teacher Activities',
    caption: 'School faculty discussing modern pedagogical techniques, lesson plans, and Punjab curriculum learning benchmarks.',
    imagePlaceholderColor: 'from-slate-800 to-emerald-900',
    date: 'Faculty Session'
  }
];
