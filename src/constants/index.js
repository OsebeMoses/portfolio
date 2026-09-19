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
  avatar: "https://github.com/OsebeMoses.png",
  resumeUrl: "/resume.pdf",
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
    skills: ["PostgreSQL", "MySQL", "Supabase", "IndexedDB", "Redis"],
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
      branch: "main",
      environment: "production",
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
      technologies: ["React 19", "Node.js", "MySQL", "IndexedDB", "PWA Architecture", "Telemetry"],
      githubUrl: "https://github.com/OsebeMoses",
      preview: {
        unitId: "TRANSIT-UNIT-409",
        route: "Nairobi → Nakuru Corridor (Route A104)",
        temp: "4.2°C",
        tempRange: "2.0°C – 8.0°C Target",
        status: "OPTIMAL",
        battery: "94%",
        bufferedEvents: "0 pending (Network Online)",
        lastPing: "Just now",
        chartPoints: [4.1, 4.3, 4.2, 4.0, 4.2, 4.4, 4.2, 4.3, 4.2],
      },
      architecturePipeline: [
        { step: "01", name: "Edge Telemetry", desc: "Sensors poll temp & GPS every 5s" },
        { step: "02", name: "IndexedDB Buffer", desc: "Offline FIFO queue if network drops" },
        { step: "03", name: "Ingestion Gateway", desc: "Batch sync with Arrhenius kinetic check" },
        { step: "04", name: "Storage & Alerts", desc: "PostgreSQL & real-time dispatch dashboard" },
      ],
      payloadSample: {
        telemetry_id: "evt_7f8a910c",
        device_uuid: "coldtrace-ke-409",
        timestamp: "2026-09-19T06:14:02Z",
        temperature_celsius: 4.2,
        threshold_exceeded: false,
        arrhenius_decay_index: 0.0014,
        gps: { lat: -0.2827, lng: 36.0661, speed_kmh: 68.4 },
        network_status: "CONNECTED_LTE",
        client_buffer_flushed: true,
      },
    },
    {
      id: "wakili-mkononi",
      title: "Wakili Mkononi",
      domain: "Applied Legal Intelligence & Public Justice",
      architectureType: "Constitutional RAG & Semantic Retrieval Pipeline",
      branch: "release/v1.2",
      environment: "production",
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
      technologies: ["React 19", "Supabase", "Python", "Vector Databases", "RAG Pipelines", "RESTful APIs"],
      githubUrl: "https://github.com/OsebeMoses",
      preview: {
        query: "What constitutional safeguards exist regarding compulsory land acquisition?",
        citation: "Constitution of Kenya (2010), Article 40(3)",
        rulingSnippet:
          "The State shall not deprive a person of property of any description, or of any interest in, or right over, property of any description, unless the deprivation results from an acquisition of land in accordance with Chapter Five and is for a public purpose or in the public interest...",
        confidence: "99.2% Grounded Citation",
        latency: "412ms Semantic Lookup",
        corpusStatus: "Verified Kenya Law Reports (eKLR)",
      },
      architecturePipeline: [
        { step: "01", name: "Corpus Ingestion", desc: "eKLR & Constitution of Kenya parsed" },
        { step: "02", name: "Semantic Chunking", desc: "Statutory boundary-aware embeddings" },
        { step: "03", name: "Vector Index", desc: "Cosine similarity in pgvector / Supabase" },
        { step: "04", name: "Guardrail Agent", desc: "LLM synthesis restricted to verified citations" },
      ],
      payloadSample: {
        query_id: "rag_99e821f0",
        query_text: "Constitutional protection against arbitrary land deprivation",
        matched_chunks: 4,
        primary_citation: {
          statute: "Constitution of Kenya",
          year: 2010,
          chapter: 4,
          article: "40(3)",
          grounding_score: 0.992,
        },
        hallucination_guard_passed: true,
        retrieval_latency_ms: 412,
      },
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
