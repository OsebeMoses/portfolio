/**
 * Portfolio Data Configuration
 * Centralized data source adhering to the DRY principle.
 * Decouples presentation logic from technical specifications and content.
 * Strictly adheres to the No-Fabrication Guideline: Unverified items use explicit [TODO] placeholders.
 */

export const PERSONAL_INFO = {
  name: "Derrick Osebe",
  title: "Software Engineer",
  focus: "Backend APIs, IoT Telemetry & Applied AI",
  status: "Seeking Software Engineering Roles & Internships (Graduating Dec 2026)",
  location: "Nairobi, Kenya",
  timezone: "UTC+3 (East Africa Time)",
  education: "BSc in Computer Science, Kabarak University (Expected Dec 2026)",
  heroHeadline:
    "Software Engineer building reliable backend APIs, IoT telemetry pipelines, and applied AI systems with Node.js, Python, and PostgreSQL.",
  aboutBio:
    "I am a final-year Computer Science student at Kabarak University specializing in backend architecture, real-time telemetry pipelines, and applied AI. I have hands-on experience engineering edge data ingestion and database optimizations at Telematics Africa Limited, alongside designing offline-first client buffering and grounded constitutional RAG pipelines. I am actively seeking software engineering internships and associate software engineer roles starting in 2026.",
  email: "derrickosebe70@gmail.com",
  github: "https://github.com/OsebeMoses",
  githubHandle: "@OsebeMoses",
  avatar: "https://github.com/OsebeMoses.png",
  resumeUrl: "/resume.pdf",
};

export const PROJECTS_DATA = {
  sectionTitle: "Featured Case Studies",
  subtitle:
    "Production-grade systems built with clean problem definitions, clear roles, real technical challenges, and verified outcomes.",
  projects: [
    {
      id: "coldtrace",
      title: "ColdTrace",
      domain: "Biosecurity & Vaccine Cold-Chain Telemetry",
      architectureType: "Offline-First Telemetry Architecture",
      branch: "main",
      environment: "production",
      role: "Lead Full-Stack & Systems Engineer",
      problem:
        "Medical supply chains across rural transit routes in Kenya experience recurrent cellular connectivity blackouts. Standard web applications drop telemetry packets during disconnections, creating blind spots that risk undetected thermal spoilage of temperature-sensitive vaccines.",
      whatBuilt:
        "Engineered an offline-first Progressive Web App (PWA) that continuously monitors temperature telemetry and GPS coordinates, guarantees zero packet loss over dropped connections, and calculates biological decay rates in real time.",
      technicalChallenge:
        "Tolerating prolonged edge network dropouts without corrupting telemetry sequence order or duplicating writes upon reconnection.",
      solution:
        "Engineered a transactional client-side FIFO queue in browser IndexedDB with Service Worker background synchronization. When offline, all telemetry packets are buffered locally with sequence timestamps; once connectivity is restored, the queue flushes in verified chronological batches with idempotent server ingestion.",
      outcome:
        "Guaranteed zero data loss during simulated edge connection drops. Integrated Arrhenius kinetic equation modeling to forecast vaccine shelf-life degradation accurately based on cumulative temperature exposure.",
      technologies: ["React 19", "Node.js", "MySQL", "IndexedDB", "PWA Architecture", "Telemetry"],
      githubUrl: "https://github.com/OsebeMoses",
      demoUrl: null, // [TODO: Add public deployment URL once deployed, e.g. https://coldtrace.vercel.app]
      demoStatus: "Local verified prototype; public deployment link coming soon",
      metrics: [
        { label: "Data Integrity", value: "Zero-loss offline queue (IndexedDB)" },
        { label: "Predictive Model", value: "Arrhenius thermal decay" },
        { label: "Sync Engine", value: "PWA Background Sync" },
      ],
      preview: {
        unitId: "TRANSIT-UNIT-409",
        route: "Nairobi → Nakuru Corridor (Route A104)",
        temp: "4.2°C",
        tempRange: "2.0°C – 8.0°C Target Range",
        status: "OPTIMAL",
        battery: "94%",
        bufferedEvents: "0 pending (Network Online)",
        lastPing: "Continuous Stream",
        chartPoints: [4.1, 4.3, 4.2, 4.0, 4.2, 4.4, 4.2, 4.3, 4.2],
      },
      architecturePipeline: [
        { step: "01", name: "Edge Telemetry", desc: "Sensors poll temp & GPS every 5s" },
        { step: "02", name: "IndexedDB Buffer", desc: "Offline FIFO queue if network drops" },
        { step: "03", name: "Ingestion Gateway", desc: "Batch sync with Arrhenius kinetic check" },
        { step: "04", name: "Storage & Dispatch", desc: "PostgreSQL & real-time dispatch dashboard" },
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
      role: "Backend & RAG Pipeline Engineer",
      problem:
        "Navigating complex Kenyan statutory codes and constitutional articles is slow and intimidating for the public. Off-the-shelf generalist LLMs frequently hallucinate invalid article numbers, misquote case precedents, and invent non-existent legal clauses.",
      whatBuilt:
        "Designed and implemented an AI-assisted constitutional intelligence platform built to query Kenyan statutory law and statutes, returning precise answers strictly anchored in verifiable legal citations.",
      technicalChallenge:
        "Eradicating hallucination and context drift when querying multifaceted statutory documents with complex sub-clauses.",
      solution:
        "Constructed a specialized semantic ingestion pipeline that chunks legal texts along structural statutory boundaries (Articles, Sections, Subsections) rather than arbitrary token counts. Integrated vector similarity search with strict system prompt guardrails that enforce verbatim citation generation and prohibit speculative synthesis.",
      outcome:
        "Achieved grounded, verifiable legal question-answering with mandatory article and clause citations; successfully eliminated fabricated precedents across all test query evaluation sets.",
      technologies: ["React 19", "Supabase", "Python", "Vector Databases", "RAG Pipelines", "RESTful APIs"],
      githubUrl: "https://github.com/OsebeMoses",
      demoUrl: null, // [TODO: Add public deployment URL once deployed, e.g. https://wakili-mkononi.vercel.app]
      demoStatus: "API & retrieval engine verified; public UI deployment pending",
      metrics: [
        { label: "Retrieval Pipeline", value: "Hybrid Vector RAG" },
        { label: "Legal Corpus", value: "Constitution of Kenya & Statutes" },
        { label: "Guardrail", value: "Mandatory statutory citations" },
      ],
      preview: {
        query: "What constitutional safeguards exist regarding compulsory land acquisition?",
        citation: "Constitution of Kenya (2010), Article 40(3)",
        rulingSnippet:
          "The State shall not deprive a person of property of any description, or of any interest in, or right over, property of any description, unless the deprivation results from an acquisition of land in accordance with Chapter Five and is for a public purpose or in the public interest...",
        confidence: "Statutory Citation Verified",
        latency: "Sub-second Retrieval",
        corpusStatus: "Kenya Law Reports & Constitution (2010)",
      },
      architecturePipeline: [
        { step: "01", name: "Corpus Ingestion", desc: "Constitution of Kenya parsed" },
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
          grounding_verified: true,
        },
        hallucination_guard_passed: true,
      },
    },
  ],
};

export const EXPERIENCE_DATA = {
  sectionTitle: "Work Experience & Internships",
  role: "Software Engineering Intern",
  company: "Telematics Africa Limited",
  focusArea: "Fleet Telemetry & IoT Systems",
  period: "Internship",
  bullets: [
    "Engineered IoT telemetry analytics and data ingestion workflows for enterprise fleet management systems.",
    "Executed relational database sanitization, index optimization, and schema cleansing in PostgreSQL to ensure high data integrity.",
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

export const ADDITIONAL_CREDENTIALS = {
  sectionTitle: "Certifications, Hackathons & Open Source",
  items: [
    {
      title: "BSc in Computer Science",
      issuer: "Kabarak University",
      period: "Expected Dec 2026",
      detail: "Core coursework: Data Structures & Algorithms, Distributed Systems, Database Engineering, Computer Networks.",
    },
    {
      title: "Software Engineering Internship",
      issuer: "Telematics Africa Limited",
      period: "Completed",
      detail: "Practical engineering internship experience in IoT telemetry ingestion, vehicle sensor data analysis, and relational database maintenance.",
    },
    {
      title: "[TODO: Add Certification / Hackathon, e.g. AWS Certified Cloud Practitioner / Hackathon Award]",
      issuer: "[TODO: Add Organization / Hackathon Name]",
      period: "[TODO: Year]",
      detail: "[TODO: Add 1-line description of project or credential achieved]",
    },
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

export const CONTACT_DATA = {
  sectionTitle: "Get in Touch",
  headline: "Let's build something robust.",
  copy: "I am actively seeking software engineering internships and associate software engineer roles starting in 2026. Whether you have a role available, a technical question, or want to discuss distributed systems, my inbox is open.",
  email: "derrickosebe70@gmail.com",
  github: "https://github.com/OsebeMoses",
  githubHandle: "@OsebeMoses",
  location: "Nairobi, Kenya",
  timezone: "UTC+3 (East Africa Time)",
  resumeUrl: "/resume.pdf",
};
