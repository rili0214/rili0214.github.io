export interface Education {
  school: string;
  degree: string;
  location: string;
  date: string;
  details: string[];
  honors?: string;
}

export interface ResearchProject {
  name: string;
  date: string;
  summary: string;
  highlights: string[];
}

export interface TeachingExperience {
  title: string;
  course: string;
  organization: string;
  date: string;
  highlights: string[];
}

export interface PhotoPlaceholder {
  title: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  github?: string;
  scholar?: string;
  linkedin?: string;
  advisor?: string;
  institution?: string;
}
