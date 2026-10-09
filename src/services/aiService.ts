export interface TeacherAiRequest {
  classLevel: string;
  subject: string;
  topic: string;
  learningObjective: string;
  action:
    | 'lesson-plan'
    | 'worksheet'
    | 'mcqs'
    | 'short-questions'
    | 'long-questions'
    | 'homework'
    | 'answer-key'
    | 'explain-urdu'
    | 'assessment';
  language: 'english' | 'urdu';
}

export interface TeacherAiResponse {
  result: string;
  source: string;
  note?: string;
}

export interface StudentTutorRequest {
  message: string;
  classLevel?: string;
  subject?: string;
  history?: Array<{ role: 'student' | 'tutor'; text: string }>;
}

export interface StudentTutorResponse {
  reply: string;
  source: string;
}

export async function generateTeacherContent(
  params: TeacherAiRequest
): Promise<TeacherAiResponse> {
  try {
    const res = await fetch('/api/gemini/teacher-assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });

    if (!res.ok) {
      throw new Error(`Server returned HTTP ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.warn('Teacher AI request failed, utilizing client fallback engine:', err);
    return getLocalTeacherFallback(params);
  }
}

export async function askStudentTutor(
  params: StudentTutorRequest
): Promise<StudentTutorResponse> {
  try {
    const res = await fetch('/api/gemini/student-tutor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });

    if (!res.ok) {
      throw new Error(`Server returned HTTP ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.warn('Student Tutor request failed, utilizing client fallback engine:', err);
    return getLocalStudentFallback(params);
  }
}

function getLocalTeacherFallback(params: TeacherAiRequest): TeacherAiResponse {
  const isUrdu = params.language === 'urdu' || params.action === 'explain-urdu';
  if (isUrdu) {
    return {
      result: `### 📘 عنوان: ${params.topic} (${params.classLevel} - ${params.subject})
**مقصدِ تدریس:** ${params.learningObjective || 'بنیادی تصورات کو آسان فہم انداز میں سکھانا'}

---

#### 🌟 آسان اردو میں وضاحت:
عزیز استاد صاحب! ${params.topic} کو پڑھانے کے لیے طلبہ کو سب سے پہلے روزمرہ کی ایک سادہ مثال سے متوجہ کریں۔

1. **تصور کی اہمیت:** یہ سبق طلبہ کی ذہنی نشوونما اور مشاہداتی صلاحیت میں اضافہ کرتا ہے۔
2. **کلاس روم سرگرمی:** بورڈ پر دو بنیادی سوالات لکھیں اور طلبہ سے انفرادی رائے طلب کریں۔
3. **اہم نکات:**
   - بنیادی تعریف واضح کریں۔
   - طلبہ سے باہمی گفتگو کروائیں۔
   - آخر میں خلاصہ تحریر کروائیں۔

*نوٹ: یہ تدریسی مواد اسکول کے تدریسی نظام کو سہولت دینے کے لیے تیار کیا گیا ہے۔*`,
      source: 'local-pedagogy-assistant',
      note: 'Generated via structured educational guide.',
    };
  }

  const actionTitles: Record<string, string> = {
    'lesson-plan': 'Structured Pedagogical Lesson Plan',
    'worksheet': 'Student Practice Worksheet',
    'mcqs': 'Multiple Choice Diagnostic Questions',
    'short-questions': 'Conceptual Short Questions',
    'long-questions': 'Comprehensive Descriptive Questions',
    'homework': 'Home Reinforcement Task',
    'answer-key': 'Model Answer Key & Marking Rubric',
    'assessment': 'Formative Assessment Test',
  };

  const title = actionTitles[params.action] || 'Educational Resource';

  return {
    result: `### 📋 ${title}
**Institution:** Government Elementary School Chak No. 227/W.B (DEA Lodhran)  
**Grade:** ${params.classLevel} | **Subject:** ${params.subject}  
**Topic:** ${params.topic}  
**Learning Outcome:** ${params.learningObjective || 'Comprehend core concepts according to Punjab Curriculum standards.'}

---

#### Section 1: Core Concept Orientation
- **Focus Area:** Foundational understanding of ${params.topic}.
- **Classroom Relevance:** Linking textbook concepts to real-world observations in Punjab.

#### Section 2: Key Questions / Exercises
1. Define the fundamental term associated with **${params.topic}** in 2-3 sentences.
2. What are two real-life examples where you encounter **${params.topic}**?
3. Discuss with a peer: why is understanding ${params.topic} crucial in ${params.subject}?

#### Section 3: Assessment & Homework Directive
- Students write a concise summary of the topic in their neat exercise notebooks.
- Review and reinforcement planned for the next class session.

*(Official pedagogical aid for educators at GES Chak No. 227/W.B)*`,
    source: 'local-pedagogy-assistant',
    note: 'Generated via structured educational guide.',
  };
}

function getLocalStudentFallback(params: StudentTutorRequest): StudentTutorResponse {
  const q = params.message.toLowerCase();
  const isUrdu = /[\u0600-\u06FF]/.test(params.message) || /(kya|kaise|batao|samjhao|mujhe|shukriya)/i.test(q);

  if (isUrdu) {
    return {
      reply: `السلام علیکم! بہت پیارا سوال پوچھا ہے۔ 🌟

آئیے مل کر اس کو سمجھنے کی کوشش کرتے ہیں:
1. سب سے پہلے سوچیں کہ اس سوال کا بنیادی مقصد کیا ہے؟
2. جیسے ہم کسی عمارت کی پہلی اینٹ سے شروعات کرتے ہیں، اسی طرح اس مسئلے کی پہلی بنیاد کیا ہے؟
3. آپ اپنی کاپی پر اس کے بارے میں جو کچھ پہلے سے جانتے ہیں ایک جملے میں بتائیں، پھر ہم اس کا درست جواب تلاش کریں گے!`,
      source: 'local-tutor-guide',
    };
  }

  return {
    reply: `Hello there! That is a great question! 🌟

Let's break this down together step-by-step:
1. **The Core Concept:** Before finding the direct answer, what is the main rule or definition we learned in this chapter?
2. **Step-by-step Clue:** Look at what facts you already know and what is being asked.
3. **Your Turn:** What do you think the first step should be? Try answering that, and I will happily guide you through the rest!`,
    source: 'local-tutor-guide',
  };
}
