import { Project, Experience, Skill, Certification, Testimonial } from '../types';

export const personalInfo = {
  name: "Moyn Uddin",
  fullName: "Moyn Uddin",
  title: "Senior Frontend Engineer & AI Enthusiast",
  subtitle: "React Expert | AI Solutions Architect | Fintech Specialist",
  tagline: "Building world-class digital experiences by bridging high-performance frontend architecture with state-of-the-art AI systems.",
  aboutSummary: "Senior Frontend Engineer with 6+ years of experience designing and delivering scalable, high-performance web applications across fintech, e-commerce, and enterprise platforms. Expert in React, TypeScript, and modern frontend architecture with a proven track record of improving application performance, maintainability, and development productivity. Passionate about AI engineering, specialized in building secure banking applications and developing AI-integrated solutions using LangChain.js, RAG pipelines, and vector databases.",
  email: "moin.uddin314@gmail.com",
  phone: "+60-1137931606",
  location: "Kuala Lumpur, Malaysia",
  github: "https://github.com/moynuddin",
  linkedin: "https://linkedin.com/in/moyn-uddin",
  stats: [
    { label: "Years Experience", value: 6, suffix: "+" },
    { label: "Projects Delivered", value: 50, suffix: "+" },
    { label: "Happy Clients", value: 20, suffix: "+" },
    { label: "Users Impacted", value: 100, suffix: "K+" }
  ]
};

export const skillsData: Skill[] = [
  // Frontend
  { name: "React 19 / 18", level: 98, category: "Frontend" },
  { name: "TypeScript", level: 95, category: "Frontend" },
  { name: "Next.js (App Router)", level: 92, category: "Frontend" },
  { name: "Redux Toolkit / Zustand", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Angular", level: 75, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 98, category: "Frontend" },
  { name: "HTML5 & CSS3 / SCSS", level: 95, category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express.js", level: 82, category: "Backend" },
  { name: "REST APIs Integration", level: 92, category: "Backend" },
  { name: "GraphQL", level: 70, category: "Backend" },
  
  // Cloud & DevOps
  { name: "AWS Services", level: 80, category: "Cloud & DevOps" },
  { name: "Docker", level: 78, category: "Cloud & DevOps" },
  { name: "CI/CD (GitHub Actions / Jenkins)", level: 82, category: "Cloud & DevOps" },
  { name: "Git & Webpack / Vite", level: 90, category: "Cloud & DevOps" },
  { name: "Jest / RTL / Playwright", level: 88, category: "Cloud & DevOps" },

  // AI & LLM
  { name: "LangChain.js", level: 90, category: "AI & LLM" },
  { name: "OpenAI & Gemini APIs", level: 92, category: "AI & LLM" },
  { name: "Retrieval-Augmented Generation (RAG)", level: 88, category: "AI & LLM" },
  { name: "Vector Databases (Pinecone / MongoDB Atlas)", level: 85, category: "AI & LLM" },
  { name: "LangGraph Workflows", level: 80, category: "AI & LLM" }
];

export const experienceData: Experience[] = [
  {
    id: "exp-uob",
    company: "Aleph Labs (Client: UOB Singapore)",
    role: "Senior Frontend Engineer",
    duration: "Jul 2025 – Present",
    location: "Kuala Lumpur, Malaysia (Fintech Team)",
    description: [
      "Led the core architectural migration of a monolithic JSP banking platform to React 18 and Material UI, improving platform maintainability by 40%.",
      "Designed and built a reusable component architecture and shared design system, accelerating feature delivery by 20% across multiple engineering teams.",
      "Optimized page load performance by 25% through bundle optimization, code splitting, lazy loading, and intelligent caching strategies.",
      "Collaborated closely with cross-functional engineering, UX research, and product teams to deliver secure, scalable, and WCAG-compliant banking features."
    ],
    techUsed: ["React 18", "TypeScript", "Material UI", "Webpack", "Redux Toolkit", "Jest", "Git"]
  },
  {
    id: "exp-maybank",
    company: "HR Tag (Client: Maybank)",
    role: "Senior Frontend Engineer",
    duration: "Sep 2024 – Jun 2025",
    location: "Kuala Lumpur, Malaysia (Digital Banking)",
    description: [
      "Migrated 15+ legacy class components to modern React Hooks architecture, achieving a 30% application performance improvement.",
      "Refactored over 2,000 lines of complex legacy code, reducing technical debt and enhancing codebase scalability.",
      "Strengthened banking transaction entry points and security standards by implementing Multi-Factor Authentication (MFA) flows.",
      "Ensured pixel-perfect, responsive UI and solid API contracts by working hand-in-hand with backend developers and designers."
    ],
    techUsed: ["React", "TypeScript", "Zustand", "Tailwind CSS", "REST APIs", "MFA", "ESLint"]
  },
  {
    id: "exp-chewy",
    company: "Cognizant (Client: Chewy E-Commerce)",
    role: "Frontend Developer",
    duration: "Aug 2021 – Aug 2024",
    location: "Kuala Lumpur, Malaysia (Remote)",
    description: [
      "Reduced production bugs by 95% by implementing robust automated unit and end-to-end testing suites using Playwright, Jest, and React Testing Library.",
      "Led a 3-member frontend team, improving sprint velocity by 15% and streamlining the git pull request review workflow.",
      "Improved application response times by 25% by resolving memory leaks, profiling renders, and optimizing e-commerce shopping cart performance.",
      "Developed modular UI components for high-traffic e-commerce systems, serving millions of active users."
    ],
    techUsed: ["React", "Redux", "Jest", "Playwright", "SCSS", "Vite", "GitHub Actions"]
  },
  {
    id: "exp-qatar",
    company: "Cognizant (Client: Qatar Digital Bank)",
    role: "Frontend Developer",
    duration: "Aug 2021 – Aug 2024",
    location: "Kuala Lumpur, Malaysia (Fintech Module)",
    description: [
      "Created a robust, accessible, and reusable React component library, which reduced feature development times by 30%.",
      "Developed a secure and responsive loan lending portal using React, integrating complex REST APIs and tracking steps.",
      "Designed and polished responsive web application layouts, significantly improving platform usability on mobile and tablet devices."
    ],
    techUsed: ["React", "JavaScript", "Context API", "Bootstrap", "REST APIs", "CSS Grid"]
  },
  {
    id: "exp-cdac",
    company: "Centre for Development of Advanced Computing (C-DAC)",
    role: "Software Engineer",
    duration: "Oct 2019 – Jul 2021",
    location: "Lucknow, India (Government Infrastructure)",
    description: [
      "Optimized large Angular-based enterprise web portals, resulting in a 20% system performance increase.",
      "Built responsive front-end modules using Angular, JavaScript, and Bootstrap for the national fare collection system (Transit/Metros).",
      "Delivered reliable, government-scale software infrastructure by working alongside security specialists and network architects."
    ],
    techUsed: ["Angular", "TypeScript", "JavaScript", "Bootstrap", "REST APIs", "Git"]
  }
];

export const projectsData: Project[] = [
  {
    id: "zentra",
    title: "Zentra — AI Web Auditor",
    description: "An AI-powered web performance auditing platform that analyzes Core Web Vitals (FCP, LCP, CLS) and generates automated reports.",
    longDescription: "Zentra is an advanced developer tool designed to automate web performance audits. It runs headless Playwright scripts to capture performance metrics and profiles, then passes the collected data to local or cloud LLMs (Mistral / Ollama / Gemini) to compile professional, actionable, human-readable recommendation reports. Built with a rich interactive dashboard using React, ShadCN, and Recharts.",
    tech: ["React", "TypeScript", "Playwright", "Mistral LLM", "Ollama", "ShadCN UI", "Recharts"],
    category: "ai",
    image: "/projects/zentra.png",
    githubUrl: "https://github.com/moynuddin/zentra-auditor",
    featured: true,
    highlights: [
      "Automated Core Web Vitals checks via Playwright",
      "Integrated local LLMs to generate optimization suggestions",
      "Visualized render-blocking assets and waterfall charts with Recharts"
    ]
  },
  {
    id: "qa-rag",
    title: "AI-Powered PDF Q&A (RAG)",
    description: "A secure Retrieval-Augmented Generation application enabling users to upload PDFs and query them in real-time.",
    longDescription: "A production-grade RAG solution built to handle large PDF knowledge bases. It processes uploaded documents, segments them into semantic chunks, generates vector embeddings using Google Gemini API, and saves them to a Pinecone vector index. The front end is a high-performance streaming chat interface using Next.js and the Vercel AI SDK.",
    tech: ["Next.js", "LangChain.js", "Pinecone", "Google Gemini API", "Vercel AI SDK", "Tailwind CSS"],
    category: "ai",
    image: "/projects/rag-qa.png",
    githubUrl: "https://github.com/moynuddin/ai-pdf-qa",
    featured: true,
    highlights: [
      "Instant streaming answers using Vercel AI SDK",
      "Vector-based similarity search in Pinecone database",
      "Secure PDF parsing and client-side processing"
    ]
  },
  {
    id: "talktube",
    title: "TalkTube RAG Video Assistant",
    description: "An AI application that processes YouTube transcriptions to allow interactive chat sessions over video content.",
    longDescription: "TalkTube allows users to chat with YouTube videos. It fetches video transcripts, segments the text content, and builds search index embeddings in a Pinecone vector store using LangChain.js. Users can ask questions about the video and get precise timestamps and answers with context citation.",
    tech: ["LangChain.js", "Next.js", "Pinecone", "OpenAI API", "Tailwind CSS", "TypeScript"],
    category: "ai",
    image: "/projects/talktube.webp",
    githubUrl: "https://github.com/moynuddin/talktube-rag",
    featured: true,
    highlights: [
      "Semantic indexing of video subtitles & audio transcripts",
      "Context-aware QA citations and timestamp linking",
      "Interactive conversational UI with sliding sidebar"
    ]
  },
  {
    id: "edu-assistant",
    title: "AI Educational Assistant",
    description: "An interactive learning co-pilot generating customized study plans, flashcards, and interactive path tracking.",
    longDescription: "Designed to help students learn complex topics efficiently. Users enter a subject, and the system parses standard curriculums to construct a personalized path node-map. Built with React and Framer Motion, it features dynamic learning node triggers, automatically generated quizzes, and self-testing flashcard modules.",
    tech: ["React 19", "Framer Motion", "OpenAI GPT-4o", "Tailwind CSS", "React Hook Form"],
    category: "frontend",
    image: "/projects/edu-assistant.webp",
    liveUrl: "https://edu-copilot.demo.dev",
    featured: false,
    highlights: [
      "Interactive SVG study paths with Framer Motion animations",
      "Generative flashcards with automatic score keeping",
      "Custom learning milestones and interactive progress charts"
    ]
  },
  {
    id: "realestate-portal",
    title: "Immersive Real Estate Portal",
    description: "An enterprise property portal showcasing complex map filters, virtual tours, and a real-time notifications panel.",
    longDescription: "A premium dashboard for property agents and buyers. Integrates with map APIs to offer location-based search rings, interactive 3D virtual tour elements, and a real-time communication system for prompt agent response. Focused on extreme client-side performance and high Lighthouse scores.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Mapbox GL", "WebSockets"],
    category: "frontend",
    image: "/projects/realestate.webp",
    liveUrl: "https://estate-portal.demo.dev",
    featured: false,
    highlights: [
      "Real-time chat and agents dashboard via WebSockets",
      "WebGL map overlays filtering thousands of listing nodes",
      "Fluid page transitions and page-level glassmorphic menus"
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-langchain",
    title: "LangChain.js for Developers",
    issuer: "LinkedIn Learning",
    date: "2025",
    credentialUrl: "https://www.linkedin.com/learning/certificates",
    category: "AI"
  },
  {
    id: "cert-prompt",
    title: "Prompt Engineering Specialist",
    issuer: "DeepLearning.AI & OpenAI",
    date: "2024",
    credentialUrl: "https://www.deeplearning.ai",
    category: "AI"
  },
  {
    id: "cert-aws",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://aws.amazon.com/verification",
    category: "Cloud"
  },
  {
    id: "cert-meta",
    title: "Meta Front-End Developer Specialization",
    issuer: "Meta & Coursera",
    date: "2023",
    credentialUrl: "https://www.coursera.org/verify/meta-frontend",
    category: "Frontend"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Alexander Tan",
    role: "Engineering Director",
    company: "Aleph Labs (UOB Project)",
    text: "Moyn's architectural leadership during our JSP-to-React migration was outstanding. He established a clean, component-driven architecture that cut development time for new features by nearly half. His attention to runtime performance and code design set a benchmark for the team.",
    rating: 5,
    avatar: "/avatars/alexander.jpg"
  },
  {
    id: "test-2",
    name: "Sarah Lim",
    role: "Lead Product Owner",
    company: "Maybank Digital Banking",
    text: "We worked with Moyn on some of Maybank's core secure transaction modules. He implemented multi-factor authentication seamlessly, maintaining a pixel-perfect user interface that was highly optimized for mobile devices. He is extremely reliable and highly skilled in React & TypeScript.",
    rating: 5,
    avatar: "/avatars/sarah.jpg"
  },
  {
    id: "test-3",
    name: "Jason Miller",
    role: "Staff Engineer / Team Lead",
    company: "Cognizant (Chewy Project)",
    text: "Moyn's work on automating our testing suites using Playwright and Jest brought our production bugs down by an incredible margin. As a frontend engineer, he has a deep understanding of browser internals, rendering cycles, and bundlers. He is also a great mentor to junior devs.",
    rating: 5,
    avatar: "/avatars/jason.jpg"
  }
];
