export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  gradient: string;
  icon: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}
