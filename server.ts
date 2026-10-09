import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey && apiKey !== 'MY_GEMINI_API_KEY' && apiKey.trim() !== '') {
  try {
    aiClient = new GoogleGenAI({ apiKey });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI client:', err);
  }
}

// Fallback educational content generator for when API key is missing or offline
function generateFallbackTeacherContent(
  classLevel: string,
  subject: string,
  topic: string,
  learningObjective: string,
  action: string,
  language: string
): string {
  const isUrdu = language === 'urdu' || action === 'explain-urdu';
  
  if (isUrdu) {
    return `### 📘 عنوان: ${topic} (${classLevel} - ${subject})
**مقصدِ تدریس:** ${learningObjective || 'بنیادی تصورات کو آسان اور عملی مثالوں کے ذریعے سمجھنا'}

---

#### 🎯 بنیادی وضاحت (آسان اردو میں):
${topic} ایک انتہائی اہم سبق ہے۔ اس کی روزمرہ زندگی میں اہمیت کو اجاگر کرنے کے لیے بچوں کو کلاس روم میں مشاہداتی سوالات سے آغاز کریں۔
- **تصور کی تعریف:** ${topic} بنیادی طور پر اس عمل یا حقیقت کو کہتے ہیں جس کا مشاہدہ ہم اپنے اردگرد ماحول میں کرتے ہیں۔
- **عملی مثال:** جس طرح ہم روزمرہ کاموں میں نظم و ضبط اور صفائی کا خیال رکھتے ہیں، اسی طرح ${topic} کو سمجھنا بھی آسان ہے۔

#### 📝 طلبہ کے لیے سرگرمی:
1. طلبہ اپنی کاپیوں پر ${topic} کے 3 اہم نکات تحریر کریں۔
2. استاد کی رہنمائی میں ہم جماعت ساتھی کے ساتھ تبادلہ خیال کریں۔

#### 💡 استاد کے لیے رہنمائی نوٹ:
- یہ مواد پنجاب کریکولم اور ٹیکسٹ بک بورڈ کے رہنماء اصولوں کے مطابق بطور تدریسی معاونت پیش کیا گیا ہے۔ سرکاری اسکولوں میں اساتذہ اپنے تدریسی تجربے کے مطابق ترمیم کر سکتے ہیں۔`;
  }

  switch (action) {
    case 'lesson-plan':
      return `### 📚 Structured Lesson Plan
**School:** Government Elementary School Chak No. 227/W.B  
**Grade Level:** ${classLevel} | **Subject:** ${subject} | **Topic:** ${topic}  
**Time Allocation:** 40 Minutes  
**Learning Objective:** ${learningObjective || `Students will understand and explain the core concepts of ${topic}.`}

---

#### 1. Starter Activity / Bell Ringer (5 Mins)
- Begin with a warm greeting and review previous lesson connections.
- Ask a curiosity-building question: *"Where do we observe ${topic} in our daily life in Punjab?"*

#### 2. Concept Exposition & Teacher Modeling (15 Mins)
- Define key vocabulary related to **${topic}**.
- Provide 2 concrete visual examples on the blackboard.
- Relate directly to Punjab Curriculum standard benchmarks for ${classLevel}.

#### 3. Guided Practice & Group Work (10 Mins)
- Divide students into pairs (Pair & Share).
- Provide a small worksheet or verbal quiz where students identify 3 key facts about ${topic}.

#### 4. Formative Assessment & Check for Understanding (5 Mins)
- Quick oral check with exit-ticket questions.
- Address common misconceptions politely.

#### 5. Homework & Real-Life Connection (5 Mins)
- Note down 2 observations of ${topic} at home or village/community.
- Preview tomorrow's follow-up lesson.`;

    case 'worksheet':
      return `### 📄 Classroom Practice Worksheet
**GES Chak No. 227/W.B - Lodhran**  
**Class:** ${classLevel} | **Subject:** ${subject} | **Topic:** ${topic}  
**Student Name:** ____________________ | **Roll No:** _______ | **Date:** ________

---

**Section A: Fill in the Blanks**
1. The primary principle of ${topic} is __________________________.
2. In ${subject}, we apply ${topic} when we observe __________________________.
3. One major benefit of understanding ${topic} is __________________________.

**Section B: Match the Columns**
- Column A (Term) <---> Column B (Definition)
  1. Key Element A <---> Associated with ${topic} fundamentals
  2. Element B <---> Practical application in daily life

**Section C: Short Conceptual Task**
- Write two sentences in your own words describing what you learned about ${topic}.
  _________________________________________________________________________
  _________________________________________________________________________`;

    case 'mcqs':
      return `### 🔘 Multiple Choice Questions (MCQs)
**Topic:** ${topic} | **Class:** ${classLevel} (${subject})

1. **What is the fundamental purpose of studying ${topic}?**
   - A) To understand natural and logical principles
   - B) Only for examination memory
   - C) To skip practical observation
   - D) None of the above  
   *Answer: A*

2. **Which of the following is most closely related to ${topic}?**
   - A) Core concept analysis
   - B) Unrelated theory
   - C) Casual speculation
   - D) Historical guesswork  
   *Answer: A*

3. **In the context of ${subject}, when is ${topic} observed?**
   - A) In standard curriculum scenarios
   - B) Only in high-tech laboratories
   - C) At all times in appropriate environments
   - D) Rarely  
   *Answer: C*

4. **Which habit reinforces better understanding of ${topic}?**
   - A) Regular revision and homework practice
   - B) Cramming without understanding
   - C) Missing morning assembly & classes
   - D) Ignoring teacher feedback  
   *Answer: A*`;

    case 'homework':
      return `### 🏡 Homework Assignment
**School:** Government Elementary School Chak No. 227/W.B  
**Class:** ${classLevel} | **Subject:** ${subject} | **Topic:** ${topic}  

1. **Reading & Review:** Read the relevant section on "${topic}" from your prescribed textbook page carefully twice.
2. **Written Questions:**
   - Write 3 key summary points about ${topic} in your notebook with neat handwriting.
   - Give 1 real-life example of ${topic} you can see around your home or neighborhood.
3. **Parent Signature:** Please have your parent or guardian review your completed work and sign your diary.`;

    default:
      return `### 📖 Educational Material: ${topic}
**Class:** ${classLevel} | **Subject:** ${subject}
**Learning Objective:** ${learningObjective || 'To master foundational subject competencies.'}

#### Summary of Concept:
${topic} forms an essential part of the elementary school curriculum for ${classLevel}. Through interactive teaching, real-world examples, and consistent reinforcement, students develop critical thinking and problem-solving skills.

#### Key Takeaways for Students:
- Understand the definition and purpose of ${topic}.
- Connect theory with practical civic and daily observations.
- Practice neat notebook writing and clear expression.`;
  }
}

// Teacher Assistant Endpoint
app.post('/api/gemini/teacher-assistant', async (req: Request, res: Response) => {
  const { classLevel, subject, topic, learningObjective, action, language } = req.body;

  if (!topic || !subject) {
    res.status(400).json({ error: 'Subject and Topic are required.' });
    return;
  }

  const prompt = `You are an expert curriculum specialist and teacher mentor assisting a teacher at Government Elementary School Chak No. 227/W.B (Markaz Zakheera, DEA Lodhran, Punjab, Pakistan).
The school follows the Punjab Elementary School Curriculum guidelines with strong emphasis on clarity, character building, life skills, and student engagement.

TASK: Generate ${action} for:
- Grade / Class: ${classLevel || 'Grade 5'}
- Subject: ${subject}
- Topic: ${topic}
- Learning Objective: ${learningObjective || 'Master core foundational skills and practical understanding.'}
- Language: ${language === 'urdu' ? 'Urdu (or bilingual with Urdu explanations)' : 'English with Urdu terminology where helpful'}

CRITICAL GUIDELINES:
1. Make content pedagogically sound, age-appropriate, encouraging, and clear for Pakistani elementary school students.
2. If action is "explain-urdu", write primarily in clean, simple Urdu that elementary school teachers and students can easily understand.
3. If action is "mcqs", provide 4-5 well-formulated questions with clear answer keys.
4. If action is "worksheet", design a clean printable layout with blanks, matching, or conceptual questions.
5. If action is "lesson-plan", structure it into Starter (5m), Exposition (15m), Guided Activity (10m), Assessment (5m), and Homework (5m).
6. Always maintain a professional, respectful educational tone. Mention that this is an AI pedagogical aid for teacher reference.`;

  if (aiClient) {
    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
      });

      const text = response.text || '';
      res.json({ result: text, source: 'gemini-3.8-flash' });
      return;
    } catch (err: any) {
      console.error('Error invoking Gemini for teacher assistant:', err?.message || err);
      // Fallback seamlessly
    }
  }

  // Graceful fallback
  const fallbackText = generateFallbackTeacherContent(
    classLevel || 'Grade 5',
    subject,
    topic,
    learningObjective || '',
    action || 'lesson-plan',
    language || 'english'
  );
  res.json({
    result: fallbackText,
    source: 'local-curriculum-engine',
    note: 'Generated via educational template. Configure GEMINI_API_KEY for dynamic generative output.',
  });
});

// Student AI Tutor Endpoint
app.post('/api/gemini/student-tutor', async (req: Request, res: Response) => {
  const { message, classLevel, subject, history } = req.body;

  if (!message) {
    res.status(400).json({ error: 'Student message is required.' });
    return;
  }

  const prompt = `You are a kind, polite, and encouraging AI Tutor for elementary students at Government Elementary School Chak No. 227/W.B (Markaz Zakheera, DEA Lodhran, Punjab, Pakistan).
You understand English, Urdu, and Roman Urdu.

Context:
- Student Class: ${classLevel || 'Elementary Grade'}
- Subject: ${subject || 'General'}
- Conversation History: ${JSON.stringify(history || [])}
- Student Question: "${message}"

CRITICAL INSTRUCTIONS:
1. DO NOT SIMPLY GIVE DIRECT ANSWERS TO HOMEWORK, EXAMS OR QUIZZES.
2. First, break down the core concept step-by-step using simple language and relatable examples (like school life, fruits, sports, village or daily scenarios).
3. Guide the student by asking a gentle guiding question so THEY can arrive at the answer themselves.
4. If the student writes in Urdu or Roman Urdu (e.g. "mujhe fractions samjhayein" or "urdu ma btao"), reply in simple, friendly Urdu or Roman Urdu as appropriate.
5. Compliment their curiosity and effort. Keep sentences short and easy to read.`;

  if (aiClient) {
    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
      });

      const text = response.text || '';
      res.json({ reply: text, source: 'gemini-3.8-flash' });
      return;
    } catch (err: any) {
      console.error('Error invoking Gemini for student tutor:', err?.message || err);
    }
  }

  // Encouraging fallback response
  const isUrduQuery = /[\u0600-\u06FF]/.test(message) || /(kya|kaise|batao|samjhao|shukriya|mujhe)/i.test(message);
  let reply = '';
  if (isUrduQuery) {
    reply = `السلام علیکم عزیز طالب علم! بہت عمدہ سوال ہے۔ 🌟\n\nآئیے اسے مرحلہ وار سمجھیں:
1. سب سے پہلے سوچیں کہ اس تصور کی بنیادی وجہ کیا ہے۔
2. جیسے اگر ہم ایک روٹی کے دو برابر ٹکڑے کریں تو ہر حصہ 'آدھا' کہلاتا ہے، اسی طرح علم و حساب میں بھی ہر چیز کی ایک بنیاد ہوتی ہے۔
3. اب آپ مجھے بتائیں: آپ کے خیال میں اس کا پہلا قدم کیا ہونا چاہیے؟ اپنی سوچ لکھیے تاکہ ہم مل کر مکمل حل تلاش کریں!`;
  } else {
    reply = `Hello, dear student! That is a wonderful question! 🌟\n\nLet's understand the concept step-by-step together:
1. **The Core Idea:** Think of this in terms of real life. Before jumping to formulas or definitions, what happens when we look at the basic building blocks?
2. **Step 1 Guide:** Look at what information is already given in your question.
3. **Your Turn:** What do you think is the very first step we should take? Share your thought, and I will guide you to the exact solution!`;
  }

  res.json({
    reply,
    source: 'local-tutor-guide',
  });
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    school: 'Government Elementary School Chak No. 227/W.B',
    district: 'Lodhran',
    geminiConfigured: Boolean(aiClient),
  });
});

// Serve frontend: Vite middleware in dev, static files in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: 3000 },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  const PORT = 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🏫 School portal server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
