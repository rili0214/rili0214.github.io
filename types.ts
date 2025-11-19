export interface Education {
  school: string;
  degree: string;
  date: string;
  details: string[];
  honors?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  role?: string;
  techStack?: string;
  date?: string;
  description: string[];
}

export interface Experience {
  title: string;
  organization?: string;
  description: string[];
}

export interface Publication {
  authors: string;
  title: string;
  venue: string;
  year: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  github?: string;
  scholar?: string;
  linkedin?: string;
}