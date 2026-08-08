import { ContactItem, LifePhotoSection, Link, NewsItem, PersonalInfo } from './types';

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
  { label: "Brown CS", href: "https://cs.brown.edu/" },
  { label: "Rensselaer Polytechnic Institute", href: "https://www.rpi.edu/" },
  { label: "RPI Computer Science", href: "https://compsci.rpi.edu/" },
  { label: "RPI Mathematical Sciences", href: "https://math.rpi.edu/" },
];

export const researchFocus = "My current research focuses on programming languages and formal verification, especially with the help of AI. I am interested in combining symbolic reasoning, proof-oriented methods, and learning-based tools to build software systems that are more reliable and easier to validate.";

export const contactItems: ContactItem[] = [
  { label: "E-mail", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { label: "Office", value: "TBD", href: "" },
];

export const recentNews: NewsItem[] = [
  {
    date: "May'26",
    text: "Graduated from Brown University with an Sc.M. in Computer Science.",
  },
];

export const aboutMe = [
  "I enjoy Chinese history and classical poetry (my favorite writer is Ma Boyong, and my favorite poet is Xin Qiji). I believe Chinese literature has two contrasting traditions of 'using an individual to reflect a grand theme.' One is Sima Qian's approach: seeing history through people. Individuals act as lenses. Through the assassin Jing Ke we witness the 'righteousness' of an era, and through merchants, its 'profit.' The more concrete the person, the more authentic the history.",
  "The other is Qu Yuan's approach: using figures as symbols. A deserted wife longing for her husband is actually encrypted political lyricism about a banished minister. After Wang Yi annotated the Songs of Chu, this 'woman's grievance as a minister's grievance' framework dominated Chinese poetics for two millennia. When Zhang Ji writes of returning bright pearls with falling tears, on the surface it's a faithful wife, but underneath it's a refusal to serve a rebel warlord. Sima Qian plunges us into the concrete, while Qu Yuan drifts us toward the symbolic.",
  "Fascinatingly, I find a profound mirror of this literary duality in AI, Formal Verification, and Programming Languages. Formal verification is Sima Qian's realism: diving into the concrete, rigorous details of execution traces and state transitions—such as formally verifying concurrent cache algorithms—to prove a system's undeniable 'truth.' Conversely, Programming Languages and algebraic frameworks, like Kleene Algebra with Tests, are Qu Yuan's symbolism: using highly abstract, encrypted mathematical logic to represent complex distributed behaviors. AI acts as the bridge between them, translating abstract symbolic intent into verifiable reality.",
  "I also enjoy cooking, especially trying and inventing interesting, surprising, and sometimes magical dishes — although they do not always taste as good as they sound."
];

export const lifePhotoSections: LifePhotoSection[] = [
  {
    title: "Camping memory",
    description: "Replace this with a short story about a camping trip, a trail, or a quiet outdoor moment.",
    images: [],
  },
  {
    title: "Pets and weekends",
    description: "Replace this with a note about pets, friends, or a warm everyday-life photo.",
    images: [],
  },
  {
    title: "Cooking experiments",
    description: "Replace this with a description of a strange, fun, or not-quite-delicious dish you created.",
    images: [],
  },
  {
    title: "Travel snapshot",
    description: "Replace this with a caption for travel, campus, conference, or city photos.",
    images: [],
  },
  {
    title: "Daily life",
    description: "Replace this with any small moment you want to remember.",
    images: [],
  },
  {
    title: "More photos",
    description: "Duplicate this object whenever you want to add another photo section and personal description.",
    images: [],
  },
];
