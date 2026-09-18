/**
 * Portfolio Data Configuration
 * Centralized data source adhering to the DRY principle.
 * Decouples presentation logic from technical specifications and content.
 */

export const PERSONAL_INFO = {
  name: "Derrick Osebe",
  title: "Software Engineer",
  focus: "Distributed Systems, IoT Telemetry & Applied AI",
  status: "Available for Software Engineering Roles & Internships",
  location: "Nairobi, Kenya",
  timezone: "UTC+3 (East Africa Time)",
  education: "BSc in Computer Science, Kabarak University (Expected Dec 2026)",
  summary:
    "Software engineer with an emphasis on high-reliability backend systems, IoT telemetry pipelines, and applied AI integrations. Experienced in building fault-tolerant architectures—from offline-first client-side data buffering to retrieval-augmented semantic search pipelines.",
  email: "derrickosebe70@gmail.com",
  github: "https://github.com/OsebeMoses",
  githubHandle: "@OsebeMoses",
};

export const EXPERIENCE_DATA = {
  sectionTitle: "Engineering Experience",
  role: "Software Engineering Intern (Industrial Attachment)",
  company: "Telematics Africa Limited",
  focusArea: "Fleet Telemetry & IoT Systems",
  period: "Industrial Attachment",
  bullets: [
    "Engineered IoT telemetry analytics and data ingestion workflows for enterprise fleet management systems.",
    "Executed relational database sanitization, index optimization, and schema cleansing to ensure high telemetry data integrity.",
    "Analyzed edge sensor data feeds and connectivity drops to resolve network transmission anomalies across vehicle tracking units.",
  ],
  technologies: [
    "IoT Telemetry",
    "PostgreSQL",
    "Node.js",
    "Python",
    "Data Sanitization",
  ],
};

export const TECHNICAL_DOMAINS = [
  {
    category: "Languages & Core Systems",
    skills: ["Python", "JavaScript / TypeScript", "Node.js", "SQL", "C / C++ (Foundational)"],
  },
  {
    category: "Databases & Telemetry Storage",
    skills: ["PostgreSQL", "MySQL", "Supabase", "IndexedDB (Offline Buffering)", "Redis"],
  },
  {
    category: "Applied AI & Architecture",
    skills: ["RAG Pipelines", "Vector Databases", "Semantic Embeddings", "Telemetry Streaming"],
  },
  {
    category: "Web & Edge Platforms",
    skills: ["React 19", "Vite", "Tailwind CSS", "RESTful APIs", "Progressive Web Apps (PWA)"],
  },
];

export const PROJECTS_DATA = {
  sectionTitle: "Architectural Case Studies",
  projects: [
    {
      id: "coldtrace",
      title: "ColdTrace",
      domain: "Biosecurity & Vaccine Cold-Chain Telemetry",
      architectureType: "Offline-First Telemetry Architecture",
      description:
        "Engineered a mission-critical telemetry platform for real-time vaccine thermal monitoring across unstable network environments. Implemented an offline-first Progressive Web App (PWA) utilizing client-side IndexedDB queue buffering to prevent telemetry data loss during connectivity dropouts, and integrated Arrhenius kinetic equation modeling for accurate thermal degradation forecasting.",
      architectureHighlights: [
        "Offline-First IndexedDB event buffering to tolerate severe edge connectivity drops",
        "Arrhenius kinetic decay modeling for dynamic biological shelf-life degradation calculation",
        "PWA background sync for guaranteed message delivery upon reconnection",
      ],
      metrics: [
        { label: "Resilience", value: "Zero-loss offline queue" },
        { label: "Core Model", value: "Arrhenius thermal decay" },
        { label: "Storage Engine", value: "IndexedDB buffer" },
      ],
      technologies: ["React", "Node.js", "MySQL", "IndexedDB", "PWA Architecture", "Telemetry"],
      githubUrl: "https://github.com/OsebeMoses",
    },
    {
      id: "wakili-mkononi",
      title: "Wakili Mkononi",
      domain: "Applied Legal Intelligence & Public Justice",
      architectureType: "Constitutional RAG & Semantic Retrieval Pipeline",
      description:
        "Designed and implemented an AI-assisted legal intelligence platform built to query complex Kenyan constitutional law and statutes. Engineered an end-to-end Retrieval-Augmented Generation (RAG) ingestion pipeline with vector embeddings to eradicate LLM hallucinations and provide verifiable, statute-backed legal citations with low latency.",
      architectureHighlights: [
        "Chunking and embedding pipeline tailored for Kenyan statutory and constitutional structures",
        "Vector database indexing for sub-second semantic document retrieval",
        "Strict prompt guardrails ensuring statutory source citation and zero fabricated precedents",
      ],
      metrics: [
        { label: "Pipeline", value: "Hybrid Vector RAG" },
        { label: "Corpus", value: "Kenyan Statutes & Penal Code" },
        { label: "Verification", value: "Source-grounded citations" },
      ],
      technologies: ["React", "Supabase", "Python", "Vector DB", "RAG Pipeline", "FastAPI"],
      githubUrl: "https://github.com/OsebeMoses",
    },
  ],
};

export const CONTACT_DATA = {
  sectionTitle: "Get in Touch",
  headline: "Let's build something robust.",
  copy: "Available for software engineering roles, distributed systems challenges, and technical consulting. Drop an email or connect directly on GitHub.",
  email: "derrickosebe70@gmail.com",
  github: "https://github.com/OsebeMoses",
  githubHandle: "@OsebeMoses",
  location: "Nairobi, Kenya",
  timezone: "UTC+3 (East Africa Time)",
};
