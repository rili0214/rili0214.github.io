import { ContactItem, LifePhoto, Link, NewsItem, PersonalInfo } from './types';

export const personalInfo: PersonalInfo = {
  name: "Yuming Xie",
  title: "First-Year Ph.D. Student in Computer Science",
  email: "yxie8@wpi.edu",
  github: "github.com/rili0214",
  linkedin: "linkedin.com/in/yuming-xie-4b1aa0363",
};

export const affiliationLinks: Link[] = [
  { label: "Computer Science", href: "https://www.wpi.edu/academics/departments/computer-science" },
  { label: "Worcester Polytechnic Institute", href: "https://www.wpi.edu/" },
  { label: "Prof. Cheng Zhang", href: "https://www.wpi.edu/people/faculty/czhang13" },
  { label: "Brown University", href: "https://www.brown.edu/" },
  { label: "Rensselaer Polytechnic Institute", href: "https://www.rpi.edu/" },
];

export const researchFocus = "My current research focuses on programming languages and formal verification, especially with the help of AI. I am interested in combining symbolic reasoning, proof-oriented methods, and learning-based tools to build software systems that are more reliable and easier to validate.";

export const contactItems: ContactItem[] = [
  { label: "E-mail", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { label: "Office", value: "TBD, Worcester Polytechnic Institute", href: "https://maps.app.goo.gl/4LjE2owen4p8pfY86" },
  { label: "Advisor", value: "Prof. Cheng Zhang", href: "https://www.wpi.edu/people/faculty/czhang13" },
];

export const recentNews: NewsItem[] = [
  {
    date: "May'26",
    text: "Graduated from Brown University with an Sc.M. in Computer Science.",
  },
];

export const lifePhotos: LifePhoto[] = [];
