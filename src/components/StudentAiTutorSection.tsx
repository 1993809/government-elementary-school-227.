import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  Send,
  Sparkles,
  Bot,
  User,
  Loader2,
  HelpCircle,
  BookOpen,
  Compass,
  Smile,
  ShieldCheck
} from 'lucide-react';
import { askStudentTutor, StudentTutorRequest } from '../services/aiService';

interface ChatMessage {
  id: string;
  sender: 'student' | 'tutor';
  text: string;
  time: string;
}

export const StudentAiTutorSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'tutor',
      text: `السلام علیکم! Welcome, dear student! 🌟

I am your AI Learning Buddy at Government Elementary School Chak No. 227/W.B. 

You can ask me questions in **English**, **اردو (Urdu)**, or **Roman Urdu**! 
Remember: I won't just do your homework for you — instead, I will guide you step-by-step so you understand the concept like a real champion! 

What would you like to explore today?`,
      time: 'Just now'
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [studentGrade, setStudentGrade] = useState('Grade 5');
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    { label: 'Explain Fractions (کسور کیا ہیں؟)', query: 'What are fractions and how do they work in real life?' },
    { label: 'Water Cycle in Urdu', query: 'پانی کا چکر (Water Cycle) آسان الفاظ میں سمجھائیں' },
    { label: 'How to find the Perimeter?', query: 'How do I calculate the perimeter of a rectangle step-by-step?' },
    { label: 'Roman Urdu: Noun samjhao', query: 'Noun aur uski basic types Roman Urdu ma samjhayein' },
    { label: 'Why is Cleanliness important?', query: 'Why is cleanliness so important in Islam and our school?' },
  ];

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || inputText;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `std-${Date.now()}`,
      sender: 'student',
      text: textToSend.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInputText('');
    setIsLoading(true);

    try {
      const historyPayload = messages.map((m) => ({
        role: m.sender,
        text: m.text,
      }));

      const res = await askStudentTutor({
        message: textToSend.trim(),
        classLevel: studentGrade,
        history: historyPayload,
      });

      const tutorMsg: ChatMessage = {
        id: `tut-${Date.now()}`,
        sender: 'tutor',
        text: res.reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, tutorMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'tutor',
        text: 'Sorry, I had trouble answering that just now. Please try asking again!',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-tutor" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider border border-blue-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" />
            Interactive Student Help
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ask Your AI Tutor
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A friendly, step-by-step mentor designed to help students discover answers through guided curiosity in English, Urdu, or Roman Urdu.
          </p>
        </div>

        {/* Guided Learning Rule Card */}
        <div className="mb-6 p-4 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-start gap-3 text-xs text-blue-950">
          <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Our Pedagogical Promise: </span>
            The AI tutor never gives straight answers to copy down onto homework pages. Instead, it explains the concept gently, provides real-life examples, and guides the student to solve it on their own!
          </div>
        </div>

        {/* Chat Window Container */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[640px]">
          
          {/* Chat Header */}
          <div className="bg-white border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-700 to-blue-700 flex items-center justify-center text-white shadow-xs">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span>School AI Tutor</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </h3>
                <p className="text-[11px] text-slate-500">
                  Government Elementary School Chak No. 227/W.B
                </p>
              </div>
            </div>

            {/* Grade Selector for Context */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 font-medium">My Grade:</span>
              <select
                value={studentGrade}
                onChange={(e) => setStudentGrade(e.target.value)}
                className="bg-slate-100 border border-slate-300 rounded-lg px-2.5 py-1 text-slate-800 font-semibold text-xs"
              >
                <option value="Primary (Grades 1-3)">Primary (Grades 1-3)</option>
                <option value="Grade 4">Grade 4</option>
                <option value="Grade 5">Grade 5</option>
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8">Grade 8</option>
              </select>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((msg) => {
              const isTutor = msg.sender === 'tutor';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${isTutor ? 'justify-start' : 'justify-end'}`}
                >
                  {isTutor && (
                    <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                      <Bot className="w-4 h-4 text-emerald-100" />
                    </div>
                  )}

                  <div
                    className={`max-w-xl rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                      isTutor
                        ? 'bg-white border border-slate-200 text-slate-800 shadow-2xs whitespace-pre-line'
                        : 'bg-emerald-800 text-white shadow-xs'
                    }`}
                  >
                    {msg.text}
                    <div
                      className={`text-[10px] mt-1 text-right ${
                        isTutor ? 'text-slate-400' : 'text-emerald-200'
                      }`}
                    >
                      {msg.time}
                    </div>
                  </div>

                  {!isTutor && (
                    <div className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-emerald-100" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-500 flex items-center gap-2 shadow-2xs">
                  <Loader2 className="w-4 h-4 animate-spin text-emerald-700" />
                  <span>Thinking step-by-step to guide you...</span>
                </div>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Quick Prompts Suggestions */}
          <div className="px-4 py-2 bg-slate-100/90 border-t border-slate-200 flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
            <span className="text-[11px] font-bold text-slate-400 uppercase shrink-0">Try asking:</span>
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(q.query)}
                className="shrink-0 px-2.5 py-1 rounded-full bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border border-slate-200 text-[11px] font-medium transition"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask any question in English, اردو or Roman Urdu..."
                className="flex-1 p-3 border border-slate-300 rounded-2xl text-xs sm:text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isLoading || !inputText.trim()}
                className="px-5 py-3 rounded-2xl bg-emerald-800 hover:bg-emerald-900 disabled:bg-slate-300 text-white font-bold text-xs sm:text-sm transition flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>Ask</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
