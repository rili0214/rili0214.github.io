import { ContactItem, LifePhoto, Link, PersonalInfo } from './types';

export const personalInfo: PersonalInfo = {
  name: "Yuming Xie",
  title: "Incoming Ph.D. Student in Computer Science",
  email: "taox0001@outlook.com",
  github: "github.com/rili0214",
  linkedin: "linkedin.com/in/yuming-xie-4b1aa0363",
};

export const affiliationLinks: Link[] = [
  { label: "Computer Science", href: "https://www.wpi.edu/academics/departments/computer-science" },
  { label: "Worcester Polytechnic Institute", href: "https://www.wpi.edu/" },
  { label: "Prof. Cheng Zhang", href: "https://www.wpi.edu/people/faculty/czhang13" },
];

export const bioParagraphs: string[] = [
  "I am an incoming Ph.D. student of Computer Science at Worcester Polytechnic Institute. I am really honored to be advised by Prof. Cheng Zhang.",
  "My research interests include neuro-symbolic software engineering, formal verification, trustworthy AI, and high-performance systems. I am especially interested in building reliable systems that connect stochastic model behavior with formal correctness guarantees through programming languages, symbolic reasoning, runtime verification, and scalable systems infrastructure.",
];

export const contactItems: ContactItem[] = [
  { label: "E-mail", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { label: "Office", value: "TBD, Worcester Polytechnic Institute", href: "https://maps.app.goo.gl/4LjE2owen4p8pfY86" },
  { label: "Advisor", value: "Prof. Cheng Zhang", href: "https://www.wpi.edu/people/faculty/czhang13" },
];


export const lifePhotos: LifePhoto[] = [];
