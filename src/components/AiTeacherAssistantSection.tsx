import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  FileText,
  HelpCircle,
  ListOrdered,
  Home,
  CheckCircle2,
  Languages,
  Printer,
  Copy,
  Check,
  Loader2,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import { generateTeacherContent, TeacherAiRequest } from '../services/aiService';

export const AiTeacherAssistantSection: React.FC = () => {
  const [classLevel, setClassLevel] = useState('Grade 5');
  const [subject, setSubject] = useState('General Science');
  const [topic, setTopic] = useState('Photosynthesis & Plant Respiration');
  const [learningObjective, setLearningObjective] = useState(
    'Students should understand how plants produce food using sunlight and release oxygen.'
  );
  const [language, setLanguage] = useState<'english' | 'urdu'>('english');
  const [activeAction, setActiveAction] = useState<TeacherAiRequest['action']>('lesson-plan');

  const [loading, setLoading] = useState(false);
  const [outputResult, setOutputResult] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const actionButtons: Array<{
    id: TeacherAiRequest['action'];
    label: string;
    icon: any;
    urduLabel: string;
  }> = [
    { id: 'lesson-plan', label: 'Generate Lesson Plan', icon: BookOpen, urduLabel: 'سبق کا خاکہ' },
    { id: 'worksheet', label: 'Generate Worksheet', icon: FileText, urduLabel: 'ورکشٹ بنائیں' },
    { id: 'mcqs', label: 'Generate MCQs', icon: CheckCircle2, urduLabel: 'کثیر الانتخابی سوالات' },
    { id: 'short-questions', label: 'Generate Short Questions', icon: HelpCircle, urduLabel: 'مختصر سوالات' },
    { id: 'long-questions', label: 'Generate Long Questions', icon: ListOrdered, urduLabel: 'تفصیلی سوالات' },
    { id: 'homework', label: 'Generate Homework', icon: Home, urduLabel: 'گھریلو کام / ڈائری' },
    { id: 'answer-key', label: 'Generate Answer Key', icon: CheckCircle2, urduLabel: 'جوابی کلید' },
    { id: 'explain-urdu', label: 'Explain in Simple Urdu', icon: Languages, urduLabel: 'آسان اردو میں وضاحت' },
    { id: 'assessment', label: 'Generate Assessment', icon: Sparkles, urduLabel: 'تشخیصی ٹیسٹ' },
  ];

  const handleGenerate = async (action: TeacherAiRequest['action']) => {
    setActiveAction(action);
    setLoading(true);
    setCopied(false);

    try {
      const response = await generateTeacherContent({
        classLevel,
        subject,
        topic,
        learningObjective,
        action,
        language,
      });

      setOutputResult(response.result);
    } catch (err) {
      console.error(err);
      setOutputResult('Error generating content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!outputResult) return;
    navigator.clipboard.writeText(outputResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="ai-assistant" className="py-16 sm:py-24 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Official AI Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700 animate-spin" />
            Empowering Punjab School Teachers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            AI Teacher Assistant
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Intelligent pedagogical co-pilot for teachers of GES Chak No. 227/W.B to generate lesson plans, differentiated worksheets, exam questions, and Urdu explanations in seconds.
          </p>
        </div>

        {/* Official Punjab Verification Disclaimer */}
        <div className="mb-8 p-3.5 rounded-xl bg-amber-50 border border-amber-200/90 flex items-start gap-3 text-xs text-amber-900 shadow-2xs">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Official Verification Notice: </strong>
            This pedagogical tool serves as an instructional aid for educators. In accordance with Punjab Education standards, AI-generated curriculum items are not officially approved by the Punjab School Education Department unless verified and reviewed by the school head teacher or competent authority.
          </p>
        </div>

        {/* Main Work Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: Inputs & Generators */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="font-bold text-slate-800 text-sm">Lesson Parameters</span>
              <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-xs">
                <button
                  type="button"
                  onClick={() => setLanguage('english')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition ${
                    language === 'english' ? 'bg-white text-emerald-800 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('urdu')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition ${
                    language === 'urdu' ? 'bg-white text-emerald-800 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  اردو (Urdu)
                </button>
              </div>
            </div>

            {/* Class Dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Class / Grade
              </label>
              <select
                value={classLevel}
                onChange={(e) => setClassLevel(e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 font-medium"
              >
                <option value="Playgroup">Playgroup (Early Childhood)</option>
                <option value="Prep">Prep (Pre-Primary)</option>
                <option value="Kindergarten">Kindergarten (KG)</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 4">Grade 4</option>
                <option value="Grade 5">Grade 5</option>
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8">Grade 8</option>
              </select>
            </div>

            {/* Subject Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 font-medium"
              >
                <option value="English">English</option>
                <option value="Urdu">Urdu</option>
                <option value="Mathematics">Mathematics</option>
                <option value="General Science">General Science</option>
                <option value="General Knowledge">General Knowledge</option>
                <option value="Islamiat">Islamiat</option>
                <option value="Quran / Ethics">Quran / Ethics</option>
                <option value="Computer Studies">Computer Studies</option>
                <option value="PECTAA Life Skills">PECTAA Life Skills & Civic Sense</option>
              </select>
            </div>

            {/* Topic Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Lesson Topic
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. Fractions, Water Cycle, Nouns, Solar System"
                className="w-full p-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Learning Objective */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Specific Learning Objective (SLO)
              </label>
              <textarea
                rows={2}
                value={learningObjective}
                onChange={(e) => setLearningObjective(e.target.value)}
                placeholder="What should the students be able to do by the end of this lesson?"
                className="w-full p-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 leading-relaxed"
              />
            </div>

            {/* Action Buttons Grid */}
            <div className="pt-2">
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                Select Teaching Resource to Generate:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {actionButtons.map((btn) => {
                  const Icon = btn.icon;
                  const isCurrent = activeAction === btn.id;
                  return (
                    <button
                      key={btn.id}
                      type="button"
                      disabled={loading}
                      onClick={() => handleGenerate(btn.id)}
                      className={`p-2.5 rounded-xl text-left border text-xs font-bold transition flex items-center gap-2 group ${
                        isCurrent && !loading
                          ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                          : 'bg-slate-50 hover:bg-emerald-50 text-slate-700 border-slate-200 hover:border-emerald-300'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-emerald-200' : 'text-emerald-700'}`} />
                      <div className="truncate">
                        <span className="block truncate">{btn.label}</span>
                        <span className="text-[10px] font-normal text-slate-400 group-hover:text-emerald-600 block">
                          {btn.urduLabel}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Output Preview Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm min-h-[560px] flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full uppercase">
                    Instructional Preview
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    {topic || 'Classroom Teaching Resource'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {classLevel} • {subject}
                  </p>
                </div>

                {outputResult && !loading && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition"
                      title="Copy to clipboard"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>

                    <button
                      onClick={handlePrint}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-xs font-semibold text-emerald-800 border border-emerald-200 transition"
                      title="Print resource"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Body */}
              {loading ? (
                <div className="py-24 flex flex-col items-center justify-center text-center space-y-4">
                  <Loader2 className="w-10 h-10 text-emerald-700 animate-spin" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Generating Pedagogical Content</h4>
                    <p className="text-xs text-slate-500 mt-1 max-w-xs">
                      Formatting educational material according to Punjab Elementary Curriculum benchmarks...
                    </p>
                  </div>
                </div>
              ) : outputResult ? (
                <div className="print-card bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 prose prose-slate max-w-none text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap font-sans">
                  {outputResult}
                </div>
              ) : (
                <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 text-slate-400">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 text-sm">Ready to Generate Teacher Materials</p>
                    <p className="text-xs text-slate-500 max-w-sm mt-1">
                      Choose your class, subject, topic, and click any button on the left to prepare lesson plans, tests, or worksheets instantly.
                    </p>
                  </div>
                  <button
                    onClick={() => handleGenerate('lesson-plan')}
                    className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold shadow-xs transition"
                  >
                    Generate Sample Lesson Plan Now
                  </button>
                </div>
              )}
            </div>

            {/* Footer Metadata */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>GES Chak No. 227/W.B • Faculty Support</span>
              <span>Markaz Zakheera, DEA Lodhran</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
