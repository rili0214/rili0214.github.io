import { Education, ResearchProject, TeachingExperience, PhotoPlaceholder, PersonalInfo } from './types';

export const personalInfo: PersonalInfo = {
  name: "Yuming Xie",
  title: "Incoming Ph.D. Student in Computer Science at Worcester Polytechnic Institute",
  email: "taox0001@outlook.com",
  github: "github.com/rili0214",
  linkedin: "linkedin.com/in/yuming-xie-4b1aa0363",
  advisor: "Prof. Cheng Zhang",
  institution: "Worcester Polytechnic Institute",
};

export const researchInterests: string[] = [
  "Neuro-symbolic Software Engineering",
  "Formal Verification",
  "Trustworthy AI",
  "High-Performance Systems",
];

export const profileSummary = [
  "I am an incoming Ph.D. student in Computer Science at Worcester Polytechnic Institute, advised by Prof. Cheng Zhang.",
  "My research focuses on narrowing the gap between stochastic software behavior and formal correctness guarantees. I am particularly interested in tiered neuro-symbolic architectures that combine LLM-guided synthesis, symbolic counterexample generation, and lightweight runtime verification for high-throughput systems.",
];

export const educationData: Education[] = [
  {
    school: "Worcester Polytechnic Institute",
    degree: "Ph.D. in Computer Science",
    location: "Worcester, MA",
    date: "Incoming",
    details: ["Advisor: Prof. Cheng Zhang", "Research direction: neuro-symbolic software engineering, formal methods, and reliable systems."],
  },
  {
    school: "Brown University",
    degree: "Sc.M. in Computer Science",
    location: "Providence, RI",
    date: "Aug 2024 – May 2026",
    honors: "GPA: 4.0/4.0",
    details: ["Relevant coursework: Formal Verification, High-Performance Network Systems, Distributed Systems, Computer Vision."],
  },
  {
    school: "Rensselaer Polytechnic Institute",
    degree: "B.S. in Computer Science & Mathematics",
    location: "Troy, NY",
    date: "Aug 2020 – May 2024",
    honors: "Magna Cum Laude · GPA: 3.72/4.0",
    details: ["Concentration: Theory & Algorithms, Mathematics of Operations Research.", "Minor: Economics."],
  },
];

export const projectsData: ResearchProject[] = [
  {
    name: "PolyGrid: Distributed Neuro-Symbolic Agent Runtime",
    date: "Fall 2024 – Present",
    summary: "A modular evaluation runtime for AI agents that investigates the systems bottlenecks behind large-context reasoning tasks.",
    highlights: [
      "Integrated a Rust-based data plane with a distributed control plane to study I/O bottlenecks in agent workloads.",
      "Developed a custom ingestion engine using Linux io_uring primitives, moving from blocking I/O to zero-copy ring buffers for a 46% throughput gain.",
      "Implemented a recursive inference engine with Python asyncio to coordinate parallel sub-agents and a Reflexion Loop for evidence-grounded refinement.",
      "Designed a simulated annealing-based memory eviction policy with utility H = C · log(1 + N) · e^(-λt) to probabilistically prune low-temperature memories under resource constraints.",
      "Adopted the Model Context Protocol to decouple agent logic from backend execution and built container-based sandboxing for resource quotas and network isolation.",
    ],
  },
  {
    name: "Dual-Mode Debugging Pipeline (DMDP)",
    date: "Fall 2024 – Present",
    summary: "A competitive-collaborative neuro-symbolic repair loop for evaluating how architectural feedback can improve LLM code repair.",
    highlights: [
      "Built a cross-model feedback protocol where Qwen/Llama models exchange execution reports before final review by a reasoning model.",
      "Devised a weighted scalar scoring system that normalizes outputs from static linters, AST parsers, and formal verifiers into rewards for second-pass generation.",
      "Implemented a dual-mode runtime: a fast AWS Lambda path for lightweight Bandit/Clang-Tidy checks and a local deep path for AST/CFG extraction plus ASan-based dynamic analysis.",
      "Evaluated the hybrid loop on IBM Project CodeNet 100, observing repair rates of 27.8% for Python, 22.4% for Java, and 14.3% for C++.",
    ],
  },
  {
    name: "Formal Verification of Concurrent Cache Algorithms",
    date: "Fall 2025",
    summary: "A Lean 4 formalization effort for understanding the cost of verifying stateful systems algorithms.",
    highlights: [
      "Formalized SIEVE and LRU cache algorithms using inductive predicates for size boundedness, get-put consistency, and topology preservation invariants.",
      "Studied the semantic gap between inductive proofs and concurrent imperative state, motivating tiered verification rather than a monolithic verify-all workflow.",
    ],
  },
  {
    name: "Quantum Computing of Loan-Risk Models",
    date: "Spring 2024",
    summary: "A benchmark contrasting clean analytical risk models with probabilistic noise in real quantum execution.",
    highlights: [
      "Built C++ and Python verification benchmarks comparing Monte Carlo simulations with analytical solutions.",
      "Implemented Value-at-Risk optimization with both classical binary search and a Grover Search workflow executed on IBM Quantum System One.",
    ],
  },
  {
    name: "Physics-Aware Generative Mural Restoration",
    date: "Spring 2025",
    summary: "A computer vision project using physical models as anchors for generative restoration.",
    highlights: [
      "Proposed a refinement module using Kubelka-Munk equations and Arrhenius kinetics to constrain pixel hallucinations toward physical plausibility.",
      "Achieved 0.90 aging stability and ΔE = 1.52 spectral consistency, surpassing PSNR-oriented baselines.",
    ],
  },
];

export const teachingData: TeachingExperience[] = [
  {
    title: "Undergraduate Teaching Assistant",
    course: "CSCI 2300 Introduction to Algorithms",
    organization: "Rensselaer Polytechnic Institute",
    date: "Aug 2022 – Dec 2022, Aug 2023 – May 2024",
    highlights: [
      "Led weekly recitations and office hours for 20+ students, connecting algorithmic theory with concrete implementation.",
      "Managed grading for course assessments and supported students as they built confidence with rigorous CS foundations.",
    ],
  },
];

export const photoPlaceholders: PhotoPlaceholder[] = [
  {
    title: "Camping & Trails",
    description: "A future space for outdoor photos, hikes, campsites, and quiet views after long debugging sessions.",
  },
  {
    title: "Pets & Everyday Life",
    description: "A cozy spot for photos with pets, small daily moments, and non-research memories.",
  },
  {
    title: "Travel & Campus",
    description: "A flexible gallery tile for WPI, Brown, conferences, road trips, or any place that becomes part of the journey.",
  },
];
