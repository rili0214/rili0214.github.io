export interface Link {
  label: string;
  href: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

export interface NewsItem {
  date: string;
  text: string;
  href?: string;
}

export interface LifePhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  github?: string;
  linkedin?: string;
}
