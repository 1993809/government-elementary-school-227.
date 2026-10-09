import React, { useState } from 'react';
import {
  HelpCircle,
  Clock,
  FileCheck2,
  Shirt,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Search,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  Info
} from 'lucide-react';

interface FaqItem {
  id: string;
  category: 'timings' | 'admissions' | 'uniform' | 'general';
  question: string;
  urduQuestion: string;
  answer: string;
  urduAnswer?: string;
  highlights?: string[];
}

interface FaqSectionProps {
  onContactClick?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'timings',
      question: 'What are the daily school timings in Summer and Winter sessions?',
      urduQuestion: 'گرمیوں اور سردیوں کے سیشن میں اسکول کے اوقات کار کیا ہیں؟',
      answer: 'School timings are officially scheduled in accordance with District Education Authority (DEA) Lodhran and Government of Punjab notifications:',
      urduAnswer: 'اسکول کے اوقات ڈسٹرکٹ ایجوکیشن اتھارٹی لودھراں اور حکومت پنجاب کے باضابطہ نوٹیفکیشن کے مطابق ہیں:',
      highlights: [
        'Summer Timings: 07:30 AM – 01:00 PM (Monday to Thursday & Saturday) | 07:30 AM – 11:30 AM (Friday)',
        'Winter Timings: 08:30 AM – 02:00 PM (Monday to Thursday & Saturday) | 08:30 AM – 12:00 PM (Friday)',
        'Morning Assembly: Commences promptly 15 minutes prior to the first period. All students are required to participate in uniform.',
        'Ramadan / Seasonal Adjustments: Special notification issued by DEA Lodhran as applicable.'
      ]
    },
    {
      id: 'faq-2',
      category: 'timings',
      question: 'What is the school policy regarding student late arrival and leave of absence?',
      urduQuestion: 'دیر سے آمد یا چھٹی کی درخواست کے بارے میں اسکول کی کیا پالیسی ہے؟',
      answer: 'Regular attendance and punctuality are pillars of student character building at GES Chak No. 227/W.B:',
      highlights: [
        'A minimum of 95% attendance is required throughout the academic term.',
        'If a student is ill or has an unavoidable family emergency, parents or guardians must send a signed leave application in the student diary or to the class teacher.',
        'Unannounced absence exceeding 3 consecutive days will result in a parent notice from the administration.'
      ]
    },
    {
      id: 'faq-3',
      category: 'admissions',
      question: 'What documents are required for admission into Playgroup/ECE or Grades 1 to 8?',
      urduQuestion: 'پلے گروپ/ای سی ای یا جماعت اول تا ہشتم میں داخلے کے لیے کن دستاویزات کی ضرورت ہے؟',
      answer: 'New admissions are welcomed at the start of each academic session. Parents should present the following basic documentation to the school office:',
      urduAnswer: 'داخلہ فارم کے ساتھ درج ذیل کاغذات کی نقول جمع کروانا ضروری ہیں:',
      highlights: [
        '1. NADRA Child Registration Certificate (B-Form) or computerized Union Council Birth Certificate (Photocopy).',
        '2. National Identity Card (CNIC) of Father or legal Guardian (Photocopy).',
        '3. Two recent passport-size photographs of the student.',
        '4. School Leaving Certificate (SLC) / Transfer Certificate with progress record if transferring from another recognized institution.',
        '5. Completed Admission Application Form (available free of cost from the school office).'
      ]
    },
    {
      id: 'faq-4',
      category: 'admissions',
      question: 'What are the age criteria for admission into Early Childhood (ECE) and Primary grades?',
      urduQuestion: 'ابتدائی تعلیم (ECE) اور پرائمری کلاسز میں داخلے کے لیے عمر کی کیا حد ہے؟',
      answer: 'Age eligibility is governed by the Punjab School Education Department admission regulations:',
      highlights: [
        'Playgroup / ECE: 3+ to 4 years of age as of the admission cutoff date.',
        'Kindergarten (KG) / Prep: 4+ to 5 years of age.',
        'Grade 1: Minimum 5 years of age completed.',
        'Upper Elementary (Grades 6–8): Appropriate progression verified via previous grade marksheet or School Leaving Certificate.'
      ]
    },
    {
      id: 'faq-5',
      category: 'admissions',
      question: 'Is there any admission fee or monthly tuition fee charged by the school?',
      urduQuestion: 'کیا داخلہ فیس یا ماہانہ فیس وصول کی جاتی ہے؟',
      answer: 'No. Government Elementary School Chak No. 227/W.B provides 100% completely free education in accordance with Article 25-A of the Constitution of Pakistan and the Government of Punjab educational mandate.',
      highlights: [
        'Zero Admission Fee (داخلہ بالکل مفت ہے)',
        'Zero Monthly Tuition Fee',
        'Zero Examination Fee for standard internal term assessments',
        'Complete sets of textbooks published by Punjab Curriculum and Textbook Board (PCTB) are provided 100% free of charge to all enrolled students.'
      ]
    },
    {
      id: 'faq-6',
      category: 'uniform',
      question: 'What is the prescribed Summer School Uniform for boys and girls?',
      urduQuestion: 'طلبہ اور طالبات کے لیے موسمِ گرما کی مخصوص یونیفارم کیا ہے؟',
      answer: 'Students must attend school daily in a clean, ironed, and complete uniform complying with Punjab Education Department dress code regulations:',
      highlights: [
        'Boys: White short/long-sleeved collar shirt, dark grey or khaki school trousers/pants, black school shoes, and clean white or black socks.',
        'Girls: White shalwar and white kameez with dark green or white dupatta/chadar, black flat shoes, and white socks.',
        'Early Childhood (ECE): Soft, comfortable school uniform permitting easy movement and active learning play.',
        'Cleanliness standard: Neatly combed hair, trimmed fingernails, and polished shoes inspected daily during morning assembly.'
      ]
    },
    {
      id: 'faq-7',
      category: 'uniform',
      question: 'What is the Winter Uniform policy and cold weather protection guidelines?',
      urduQuestion: 'موسمِ سرما میں گرم کپڑوں اور یونیفارم کے بارے میں کیا ہدایات ہیں؟',
      answer: 'During the cold and foggy winter months in Lodhran district, students are protected with designated warm attire while retaining school uniformity:',
      highlights: [
        'Dark green or black V-neck sweater, pullover, or cardigan over the regular white uniform.',
        'Warm dark green or black blazer/jacket permitted during severe cold waves.',
        'Caps, beanies, or warm mufflers in dark green, black, or grey are allowed for morning commute protection.',
        'Warm black stockings/tights and winter socks are encouraged to prevent seasonal colds.'
      ]
    },
    {
      id: 'faq-8',
      category: 'general',
      question: 'When can parents meet teachers or the Head Teacher to discuss academic progress?',
      urduQuestion: 'والدین اپنے بچوں کی تعلیمی کارکردگی پر اساتذہ یا ہیڈ ٹیچر سے کب مل سکتے ہیں؟',
      answer: 'Parent-teacher cooperation is essential for student success. Parents can visit during:',
      highlights: [
        'Daily administrative visiting hours during the final 45 minutes of the school day.',
        'Scheduled Monthly Parent-Teacher Consultation Meetings (dates announced via school diary and notice board).',
        'Emergency or urgent matters can be addressed to the Head Teacher office with prior notice.'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'timings', label: 'School Timings', icon: Clock },
    { id: 'admissions', label: 'Admission Requirements', icon: FileCheck2 },
    { id: 'uniform', label: 'Uniform & Dress Code', icon: Shirt },
    { id: 'general', label: 'Textbooks & Fees', icon: BookOpen },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (faq.urduQuestion && faq.urduQuestion.includes(searchQuery)) ||
      (faq.highlights && faq.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-300 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Parent Information & Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="font-urdu text-xl text-emerald-900 mt-1">
            اکثر پوچھے جانے والے سوالات — اوقات کار، داخلہ اور یونیفارم
          </p>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Clear, authoritative answers for parents and guardians regarding school daily routines, admission requirements, dress codes, and free textbooks at GES Chak No. 227/W.B.
          </p>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by topic (e.g. timings, admission documents, uniform, B-Form, fees, books)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
                    isSelected
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-200' : 'text-emerald-700'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isExpanded
                    ? 'bg-white border-emerald-400 shadow-md ring-1 ring-emerald-400/20'
                    : 'bg-white border-slate-200 hover:border-emerald-300 shadow-2xs'
                }`}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 inline-block mb-1">
                      {faq.category === 'timings'
                        ? 'Timings & Schedule'
                        : faq.category === 'admissions'
                        ? 'Admissions & B-Form'
                        : faq.category === 'uniform'
                        ? 'Uniform & Dress Code'
                        : 'Free Education & Books'}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                    <p className="font-urdu text-sm text-emerald-800 pt-0.5">
                      {faq.urduQuestion}
                    </p>
                  </div>

                  <div className={`p-2 rounded-full shrink-0 transition-transform ${isExpanded ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'}`}>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 border-t border-slate-100 space-y-4 text-xs sm:text-sm text-slate-700">
                    <p className="leading-relaxed">
                      {faq.answer}
                    </p>

                    {faq.urduAnswer && (
                      <p className="font-urdu text-sm text-emerald-950 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                        {faq.urduAnswer}
                      </p>
                    )}

                    {faq.highlights && (
                      <div className="space-y-2 pt-1">
                        {faq.highlights.map((point, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed text-slate-800 font-medium">{point}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-700 font-bold text-sm">No queries match your search</p>
            <p className="text-slate-400 text-xs mt-1">Try searching for keywords like "timings", "uniform", "admission", or "books".</p>
          </div>
        )}

        {/* Bottom Help Banner */}
        <div className="mt-12 bg-emerald-950 text-emerald-100 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-emerald-900">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <h4 className="text-lg font-bold text-white">
                Have an inquiry not answered above?
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-emerald-200/90 max-w-xl">
              Parents and guardians are warmly welcomed to contact the Head Teacher office or visit the school in person at Chak No. 227/W.B during school visiting hours.
            </p>
          </div>

          <button
            onClick={onContactClick}
            className="shrink-0 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-emerald-100" />
            <span>Contact School Administration</span>
          </button>
        </div>

      </div>
    </section>
  );
};
