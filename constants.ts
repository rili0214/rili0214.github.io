import { Education, SkillCategory, Project, Experience, Publication, PersonalInfo } from './types';

export const personalInfo: PersonalInfo = {
  name: "Yuming Xie",
  title: "M.S. Student in Computer Science",
  email: "taox0001@outlook.com",
  phone: "+1 908 258 1623",
  github: "github.com/taox0001", // Inferred from username in email, though not explicitly in OCR link text
  linkedin: "linkedin.com/in/yuming-xie", // Placeholder based on common patterns
};

export const educationData: Education[] = [
  {
    school: "Brown University",
    degree: "Master of Science in Computer Science",
    date: "Aug 2024 – May 2026",
    details: [
      "Research Interests: Software Engineering, Distributed/High-Performance Network Systems, LLM-assisted Formal Verification."
    ]
  },
  {
    school: "Rensselaer Polytechnic Institute (RPI)",
    degree: "Bachelor of Science in Computer Science & Mathematics",
    date: "Aug 2020 – May 2024",
    honors: "Magna Cum Laude",
    details: [
      "Research Interests: Algorithms, Machine Learning, Operations Research & Optimization.",
      "Minor: Econometric Modeling."
    ]
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Java", "Python", "C++", "Rust"]
  },
  {
    category: "Cloud & Systems",
    items: ["AWS (Lambda, ECS Fargate, SQS, CloudWatch, CDK)", "Docker", "Linux", "CI/CD"]
  },
  {
    category: "Data & Search",
    items: ["MySQL", "Redis", "OpenSearch"]
  },
  {
    category: "Frameworks & Fundamentals",
    items: ["Spring Boot", "Flask", "Data Structures & Algorithms", "OOD"]
  },
  {
    category: "Testing & Quality",
    items: ["Pytest", "JUnit", "Postman", "Unit/Integration/E2E Testing", "SonarQube", "Clang-Tidy", "ASan/Valgrind"]
  }
];

export const projectsData: Project[] = [
  {
    name: "DMDS | Multi-model Dual-mode Code Debugging System",
    techStack: "Backend: Python/Flask, Cloud: AWS, Data: MySQL",
    description: [
      "Built a quality assurance loop: implemented an automated flow from Code Commit → Static Analysis → LLM Diagnosis → Auto-generated Fix Suggestions; orchestrated via Python/Flask and Qwen/Llama.",
      "Designed a tiered testing strategy supporting two modes: (1) Cloud-based high-throughput scanning (Bandit/Clang-Tidy); (2) Local deep inspection supporting root cause analysis (Static + Dynamic + Formal + Complexity); achieved p95 scan < 30s, deep inspection median ~3min.",
      "Quantified Results (IBM Project CodeNet 100 Qs): Reduced composite failure metrics (Static 40% + Dynamic 30% + Formal 20% + Complexity 10%) on Python/Java/C++ by 27.8% / 22.4% / 14.3% respectively.",
      "Long-task Governance: Migrated long-running batch tasks from Lambda to ECS Fargate (CDK), bypassing the 15-minute limit; added retry/error handling to improve batch success rates.",
      "Tool Quality Assurance: Wrote over 60 unit and integration tests (Pytest) to ensure the stability and accuracy of the core diagnostic logic.",
      "Dev Experience: Co-developed a VS Code extension to trigger cloud scans and local deep inspections within the editor, reducing context switching."
    ]
  },
  {
    name: "SchemaBridge | Prompt-Guided Excel Normalization",
    techStack: "Spring Boot + OpenSearch + JSON Schema",
    description: [
      "Data Ingestion & Normalization: Converted unstructured Excel + User Prompts into JSON Schema-validated relational JSON, implementing header normalization and type/constraint inference.",
      "Automated Integration Testing: Conducted automated integration testing on REST APIs using Postman and JUnit, verifying core business logic and achieving >95% code coverage for key modules.",
      "Performance Optimization: Used Apache POI Streaming API (XSSFReader) to parse large .xlsx files, controlling memory usage; normalized cell types before validation to reduce parsing errors and variance.",
      "Embedding Assisted Mapping: Used DJL + Hugging Face to generate vectors and performed approximate nearest neighbor search based on Amazon OpenSearch k-NN, improving header match accuracy over string matching."
    ]
  }
];

export const experienceData: Experience[] = [
  {
    title: "Research & Teaching Experience",
    description: [
      "DeFi Large Transaction Modeling & Contract Risk Detection: Built a Solidity CI/CD generation-verification link (Remix compilation, property testing, Mythril security scan, Etherscan fetching), covering 400+ test cases and establishing a defect type library and audit trail.",
      "RPI Algorithm Course Teaching Assistant: Responsible for weekly Recitation/Office Hours (~30 attendees), developed a lightweight Python test automation framework to verify functional correctness of various code submissions and provide feedback, grading assignments/midterms/finals."
    ]
  }
];

export const publicationsData: Publication[] = [
  {
    authors: "Xie, Y.; Nishizawa, T.; Zhang, H.; Chen, J.; Ker, A.",
    title: "Self-Supervised Learning for Predicting Breast Cancer Treatment Response Using Public Datasets",
    venue: "Accepted at BSSL 2024",
    year: "2024"
  },
  {
    authors: "Xie, Y.",
    title: "Comparison of Various Recommendation Algorithms and Statistical Analysis of Datasets",
    venue: "In Proc. CONF-SPML 2024",
    year: "2024"
  }
];