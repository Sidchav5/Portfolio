export const hero = {
  name: 'Siddhesh Chavan',
  role: 'AI and Data Science Undergraduate',
  tagline: 'Engineering solutions for real social problems.',
  description:
    'AI and Data Science student focused on building practical, technology-driven solutions for social challenges. I design and develop production-ready applications across legal tech, inventory, and mobility, combining full-stack engineering with machine learning and reliable API integrations to create measurable real-world impact.',
  email: 'csiddhesh768@gmail.com',
  resumeUrl: '/resume.txt',
  location: 'Pune, Maharashtra',
  quickFacts: [
    'B.Tech AI & Data Science (2023-2027)',
    'CGPA: 9.26 / 10',
    'React, AI & ML, Node.js, Flask',
    'Open to internships and collaborations',
  ],
};

export const summary =
  'Strong foundation in data structures, algorithms, and scalable web systems. Experienced in deploying machine learning and LLM-powered workflows with secure authentication, role-based access, and real-time API integrations. Proven leadership as President of Speaker\'s Club with successful management of cross-functional teams and institute-level events.';

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'C', 'C++', 'JavaScript'],
  },
  {
    title: 'Web & App',
    items: ['React', 'Flask', 'Node.js', 'React Native', 'HTML', 'CSS'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'SQLite', 'MongoDB', 'Firebase'],
  },
  {
    title: 'AI / ML',
    items: [
      'Transformers',
      'BERT',
      'Hugging Face',
      'NLTK',
      'Regression',
      'XGBoost',
      'Random Forest',
      'SVM',
    ],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'PowerBI', 'Railway', 'LeetCode', 'Codeforces', 'CodeChef', 'GFG'],
  },
  {
    title: 'Gen AI & APIs',
    items: ['Gemini', 'Groq', 'Google APIs', 'LangFlow'],
  },
  {
    title: 'Core CS',
    items: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems'],
  },
  {
    title: 'Backend Engineering',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'System Design Basics'],
  },
];

const reposBase = 'https://github.com/Sidchav5?tab=repositories';

export const projects = [
  {
    title: 'AI-Powered Legal Contract Clause Analysis & Community Platform',
    impact: 'Reduced manual contract review time by 30-40%.',
    githubUrl: 'https://github.com/Sidchav5/College_LawgicAI',
    points: [
      'Automated review workflows using LegalBERT and MNLI ensemble models.',
      'Implemented clause-level legal risk classification with transformer-based NLP.',
      'Built Gemini LLM-powered contract generation with JWT-secured RBAC.',
      'Developed Flask REST APIs with React frontend and community forum features.',
    ],
  },
  {
    title: 'Smart Warehouse & Retail Inventory Management System',
    impact: 'Enabled better stock utilization across channels and roles.',
    githubUrl: 'https://github.com/Sidchav5/SoberFolk',
    points: [
      'Architected a multi-role platform for consumers, retail stores, and warehouse managers.',
      'Implemented real-time stock allocation for online and offline sales.',
      'Built freshness-based inventory tracking and predictive restocking insights.',
      'Designed scalable Flask APIs with MySQL optimization for high-volume transactions.',
    ],
  },
  {
    title: 'SoberFolks - On-Demand Designated Driver Platform',
    impact: 'Delivered fast and secure mobility matching workflows.',
    githubUrl: reposBase,
    points: [
      'Built a cross-platform mobile application for designated driver booking.',
      'Engineered geohash-based spatial indexing for sub-second driver-rider matching.',
      'Integrated Google Maps APIs for route intelligence, ETA, and fare estimation.',
      'Developed secure Node.js backend with JWT authentication and session management.',
    ],
  },
  {
    title: 'Constitution AI Platform - Legal Education & Engagement Tool',
    impact: 'Improved accessibility of constitutional learning with AI.',
    githubUrl: 'https://github.com/Sidchav5/COI_made_easy',
    points: [
      'Developed an AI platform for Indian Constitutional education.',
      'Built Gemini chatbot with retrieval-augmented generation (RAG).',
      'Implemented quizzes with difficulty progression and live leaderboard logic.',
    ],
  },
  {
    title: 'Deep Learning-Based Answer Evaluator',
    impact: 'Improved evaluation speed and consistency for descriptive answer grading.',
    githubUrl: 'https://github.com/Sidchav5/Deep-Learning-Based-Answer-Evaluater',
    points: [
      'Built an AI-based answer assessment pipeline using SBERT, NLI, and ANN models.',
      'Implemented multi-metric scoring for semantic similarity, relevance, completeness, and clarity.',
      'Added RAG-powered feedback generation with Groq LLaMA models for actionable student insights.',
      'Developed a role-based Flask + React platform with JWT authentication and DOCX/PDF support.',
    ],
  },
  {
    title: 'Credibility Verification System',
    impact: 'Strengthened news reliability checks through automated fact-verification workflows.',
    githubUrl: 'https://github.com/Sidchav5/Credibility-Verification-',
    points: [
      'Created an AI-powered system to verify news credibility from URLs or text summaries.',
      'Integrated Google Fact Check and Custom Search APIs to cross-reference trusted sources.',
      'Implemented NLP-based similarity analysis and classification into Fake, Suspicious, or Correct.',
      'Built Flask backend workflows with web scraping, summarization, and result visualizations.',
    ],
  },
];

export const education = {
  degree: 'B.Tech in Artificial Intelligence & Data Science',
  institute: 'Vishwakarma Institute of Technology, Pune',
  timeline: '2023-2027',
  cgpa: '9.26 / 10',
};

export const achievements = [
  {
    text: 'President, Speaker\'s Club, VIT Pune - led 40+ members and institute-level events.',
    category: 'leadership',
    date: '2025-Present',
    badge: 'Leadership',
  },
  {
    text: 'Execution Lead, Speaker\'s Club - coordinated cross-functional event teams.',
    category: 'leadership',
    date: '2024-2025',
    badge: 'Leadership',
  },
  {
    text: 'Finalist, UBS Campus Hackathon.',
    category: 'achievement',
    date: '2025',
    badge: 'Achievement',
  },
  {
    text: 'Finalist, GeekVishwa 2.0 (VIIT Pune).',
    category: 'achievement',
    badge: 'Achievement',
  },
  {
    text: 'NVIDIA: Applications of AI for Anomaly Detection, Generative AI with Diffusion Models.',
    category: 'certification',
    badge: 'Certification',
  },
  {
    text: 'LinkedIn Learning: Introduction to AI, Python Quick Start.',
    category: 'certification',
    badge: 'Certification',
  },
  {
    text: 'Development of Image Processing Library in C++.',
    category: 'publication',
    date: 'IEEE ICOIICS 2025',
    badge: 'Publication',
    link: 'https://ieeexplore.ieee.org/abstract/document/11390636',
  },
];

export const blogs = [
  {
    title: 'Building LawgicAI: From Legal PDFs to Actionable Clause Risk Insights',
    category: 'Project Experience',
    date: 'Mar 2026',
    excerpt:
      'How we designed a clause-level risk pipeline with LegalBERT, MNLI, and role-based workflows to reduce manual contract review effort.',
    tags: ['NLP', 'Flask', 'React', 'Legal Tech'],
    link: 'https://github.com/Sidchav5/College_LawgicAI',
  },
  {
    title: 'Leading 40+ Members as Speaker\'s Club President',
    category: 'Leadership',
    date: '2025-Present',
    excerpt:
      'What I learned about ownership, team delegation, and execution while managing institute-level events and cross-functional student teams.',
    tags: ['Leadership', 'Team Management', 'Execution'],
  },
  {
    title: 'Deep Learning-Based Answer Evaluation: Multi-Metric Scoring in Practice',
    category: 'Project Experience',
    date: 'Feb 2026',
    excerpt:
      'A practical walkthrough of combining semantic similarity, NLI reasoning, and RAG feedback to improve descriptive answer assessment quality.',
    tags: ['SBERT', 'NLI', 'RAG', 'Groq'],
    link: 'https://github.com/Sidchav5/Deep-Learning-Based-Answer-Evaluater',
  },
];

export const contact = {
  name: 'Siddhesh Chavan',
  email: 'csiddhesh768@gmail.com',
  phoneRaw: '+918459861918',
  phoneDisplay: '+91 84598 61918',
  linkedin: 'https://www.linkedin.com/in/siddhesh-chavan-1b2b2727a',
  github: 'https://github.com/Sidchav5',
  resumeUrl: 'https://drive.google.com/file/d/1mUZB2r0NZD2zivMrNkXA7Zx6vZMmjjLf/view?usp=drive_link',
};