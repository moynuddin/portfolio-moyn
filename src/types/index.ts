export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  category: 'frontend' | 'ai' | 'fullstack';
  image: string; // absolute URL or generated path
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  techUsed: string[];
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Cloud & DevOps' | 'AI & LLM';

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: SkillCategory;
  icon?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  category: 'AI' | 'Frontend' | 'Cloud' | 'Other';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}
