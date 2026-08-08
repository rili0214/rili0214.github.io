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
  { label: "Office", value: "TBD" },
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
    title: "Pets and weekends",
    description: "Cats",
    images: [
      {
        src: "/photos/pet.jpg",
        alt: "Pet photo",
        caption: "",
      },
    ],
  },
  {
    title: "Food tour",
    description: "Exploring cafe/restaurants",
    images: [
      {
        src: "/photos/food.jpg",
        alt: "Food photo",
        caption: "Braised intestine noodles in Chengdu, Sichuan",
      },
      {
        src: "/photos/food1.jpg",
        alt: "Food photo1",
        caption: "Hot pot in Chengdu, Sichuan",
      },
      {
        src: "/photos/food2.jpg",
        alt: "Food photo2",
        caption: "Portuguese cuisine in Providence, Rhode Island",
      },
    ],
  },
  {
    title: "Travel snapshot",
    description: "Camping and traveling",
    images: [
      {
        src: "/photos/travel.jpg",
        alt: "Travel photo",
        caption: "Bifengxia Giant Panda Base in Yaan, Sichuan",
      },
      {
        src: "/photos/travel1.jpg",
        alt: "Travel photo1",
        caption: "The Coles Memorial Clock Tower at West China Union University, Chengdu",
      },
      {
        src: "/photos/travel2.jpg",
        alt: "Travel photo2",
        caption: "",
      },
      {
        src: "/photos/travel3.jpg",
        alt: "Travel photo3",
        caption: "Jiuzhai Valley National Park in Aba, Sichuan",
      },
      {
        src: "/photos/travel4.jpg",
        alt: "Travel photo4",
        caption: "Mengding Tea History Museum in Yaan, Sichuan",
      },
    ],
  },
];
