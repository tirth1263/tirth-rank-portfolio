import {
  Brain,
  Cpu,
  Database,
  GraduationCap,
  Layers3,
  LineChart,
  Microscope,
  MonitorCog,
  Network,
  Sparkles,
  TestTube2,
  Workflow
} from "lucide-react";

export const profile = {
  name: "Tirth Rank",
  role: "Robotics and AI Engineer",
  location: "Tempe, Arizona",
  email: "tirthrank.work@gmail.com",
  phone: "+1 (480) 743-4415",
  website: "https://tirth-rank-portfolio.web.app",
  linkedIn: "https://www.linkedin.com/in/tirth-rank/",
  github: "https://github.com/tirth1263",
  resume: "/resume-viewer.html",
  headline:
    "M.S. Robotics and Autonomous Systems student at Arizona State University, building robotics systems, MCP agents, voice AI, and data-driven automation.",
  summary:
    "I work across robotics, machine learning, computer vision, immersive technology, MCP agents, voice AI, and product analytics. My current focus is turning messy real-world signals into reliable systems: robotic design prototyping, agentic tool workflows, XR test workflows, model evaluation, active learning, and human-in-the-loop AI."
};

export const metrics = [
  { value: "3.73", label: "ASU graduate GPA" },
  { value: "20+", label: "AI and agent systems" },
  { value: "6", label: "industry and research roles" },
  { value: "3", label: "research publications listed" }
];

export const work = [
  {
    title: "Robotics Design Lab Researcher",
    company: "The Design School at ASU",
    location: "Tempe, AZ",
    period: "Jun 2026 - Present",
    icon: TestTube2,
    bullets: [
      "Supporting hands-on robotics, design, prototyping, and innovation work within ASU's Design School research lab.",
      "Contributing to creative learning and research through lab-based experimentation, prototyping workflows, and robotics-focused support.",
      "Bridging design thinking with robotics engineering to help develop practical, research-oriented intelligent systems."
    ]
  },
  {
    title: "Volumetric Innovation Fellow",
    company: "ASU MESH Labs",
    location: "Phoenix, AZ",
    period: "Jan 2026 - Present",
    icon: Layers3,
    bullets: [
      "Supporting immersive technology projects involving data capture workflows, prototype development, and software tooling for research and creative engineering applications.",
      "Collaborating on hardware-software integration, calibration, testing, and real-time validation using Python, OpenCV, and Linux workflows.",
      "Building automation and data-handling scripts that translate experimental concepts into reliable engineering outputs."
    ]
  },
  {
    title: "XR Quality Assurance and Testing",
    company: "ASU MESH Labs",
    location: "Phoenix, AZ",
    period: "Oct 2025 - Jan 2026",
    icon: MonitorCog,
    bullets: [
      "Performed functional and performance testing on XR systems across VR, AR, and MR experiences.",
      "Documented defects, validated workflows, and supported iterative product improvements for immersive platforms.",
      "Improved reliability and user experience through troubleshooting, issue tracking, and structured test case validation."
    ]
  },
  {
    title: "Artificial Intelligence Intern",
    company: "Codec Technologies India",
    location: "Ahmedabad, India",
    period: "Jan 2025 - Jul 2025",
    icon: Brain,
    bullets: [
      "Developed AI-driven automation and vision-based tools using Python, PyTorch, TensorFlow, and OpenCV.",
      "Built and evaluated imaging and classification pipelines for inspection, analysis, and decision-making workflows.",
      "Collaborated across engineering teams on experimentation, deployment, documentation, and scalable AI system support."
    ]
  },
  {
    title: "Machine Learning Intern",
    company: "Bacancy Technology",
    location: "Ahmedabad, India",
    period: "Jan 2025 - May 2025",
    icon: Workflow,
    bullets: [
      "Developed machine learning and computer vision solutions for automation, prediction, and data analysis workflows.",
      "Contributed to interdisciplinary engineering projects involving model development, data validation, experimentation, and iterative debugging."
    ]
  },
  {
    title: "Data Analytics Virtual Internship",
    company: "Deloitte via Forage",
    location: "Ahmedabad, India",
    period: "Jul 2025",
    icon: LineChart,
    bullets: [
      "Used Excel, Tableau, SQL, and Python to analyze enterprise datasets and produce business and operational insights.",
      "Created dashboards and structured reports that strengthened analytical storytelling and stakeholder communication."
    ]
  }
];

export const projects = [
  {
    title: "VLM Reasoning Model using Knowledge Graph",
    year: "2026",
    domain: "Robotics, Autonomous Systems & Deep Learning",
    tags: ["PaliGemma", "ConceptNet", "ScienceQA", "Physics Rules"],
    summary:
      "Built a physical-world reasoning system that augments a vision-language model with ConceptNet facts and physics rules for science question answering.",
    impact: "Knowledge-grounded VLM reasoning with ablation-backed evaluation",
    codeUrl: "https://github.com/tirth1263/VLM-Reasoning-Model-using-Knowledge-Graph"
  },
  {
    title: "AI-Assisted Robotic Design Interface",
    year: "2026",
    domain: "Robotics, Autonomous Systems & Deep Learning",
    tags: ["Robotics", "React", "TypeScript", "Fabrication"],
    summary:
      "Created a research-interface prototype that maps creative design intent into robotic fabrication parameters with readiness scoring and review checkpoints.",
    impact: "Human-in-the-loop workflow design for creative robotic fabrication",
    codeUrl: "https://github.com/tirth1263/ai-assisted-robotic-design-interface-for-creative-fabrication"
  },
  {
    title: "Rhino 3D Projects",
    year: "2026",
    domain: "Robotics, Autonomous Systems & Deep Learning",
    tags: ["Rhino 8", "Grasshopper", "KUKA", "Fabrication"],
    summary:
      "Built Rhino and Grasshopper drawing-tool projects for robot-assisted plotting workflows, including plugin-based KUKA robot workflow support.",
    impact: "Design-to-robotics workflow experience for digital fabrication",
    codeUrl: "https://github.com/tirth1263/Rhino-3D-Projects"
  },
  {
    title: "Rhino 3D Hot-Wire Projects",
    year: "2026",
    domain: "Robotics, Autonomous Systems & Deep Learning",
    tags: ["Rhino 8", "Grasshopper", "C#", "Hot-Wire"],
    summary:
      "Created a collection of Rhino, Grasshopper, and C# workflows for generating and studying geometric hot-wire toolpaths, including surface, boundary-pair, centerline-twist, and multi-angle algorithms.",
    impact: "Verified computational-fabrication workflows for hot-wire geometry and toolpath design",
    codeUrl: "https://github.com/tirth1263/Rhino-3d-Hotwire-Projects"
  },
  {
    title: "Agentic RAG with Agno and GPT-5",
    year: "2026",
    domain: "Machine Learning, NLP & Data Analytics",
    tags: ["Agno", "GPT-5", "LanceDB", "RAG"],
    summary:
      "Built an agentic RAG app where GPT-5 decides when to search a URL-ingested knowledge base, reformulates retrieval queries, cites sources, and refuses unsupported answers.",
    impact: "Agent-controlled retrieval workflow for trustworthy research assistants",
    codeUrl: "https://github.com/tirth1263/Agentic-RAG-with-Agno-and-GPT-5"
  },
  {
    title: "Typed Agentic RAG with LlamaIndex",
    year: "2026",
    domain: "Machine Learning, NLP & Data Analytics",
    tags: ["LlamaIndex", "Pydantic", "LiteParse", "RAG"],
    summary:
      "Created a citation-verified RAG system that validates every answer as a typed Pydantic object, checks verbatim quotes against source chunks, and refuses when evidence is missing.",
    impact: "Structured, hallucination-resistant RAG for compliance-style documents",
    codeUrl: "https://github.com/tirth1263/Agentic-typed-RAG-with-Llama-index"
  },
  {
    title: "Enterprise Contextual RAG",
    year: "2026",
    domain: "Machine Learning, NLP & Data Analytics",
    tags: ["Contextual AI", "LMUnit", "Nebius", "Streamlit"],
    summary:
      "Built a production-shaped document QA app with managed parsing, hybrid retrieval, reranking, page-level source attribution, answer-quality scoring, and optional Nebius enrichment.",
    impact: "Enterprise-ready RAG workflow with verifiable sources and grading",
    codeUrl: "https://github.com/tirth1263/Enterprise-Contextual-RAG"
  },
  {
    title: "GraphRAG with Neo4j",
    year: "2026",
    domain: "Machine Learning, NLP & Data Analytics",
    tags: ["GraphRAG", "Neo4j", "Cypher", "Nebius"],
    summary:
      "Turned unstructured documents into a property graph, extracted entities and relationships with strict JSON, generated Cypher queries, and answered with graph-backed evidence.",
    impact: "Relationship-aware retrieval for questions that vector chunks miss",
    codeUrl: "https://github.com/tirth1263/GraphRAG-With-Neo4J"
  },
  {
    title: "Codebase Q&A RAG",
    year: "2026",
    domain: "Machine Learning, NLP & Data Analytics",
    tags: ["LlamaIndex", "GitHub API", "Embeddings", "DeepSeek"],
    summary:
      "Built a repository-understanding assistant that indexes public GitHub codebases, caches vector indexes, streams grounded answers, and cites the exact files used.",
    impact: "Developer onboarding and architecture discovery over real codebases",
    codeUrl: "https://github.com/tirth1263/Codebase-QnA-RAG"
  },
  {
    title: "LLM and RAG Debugger",
    year: "2026",
    domain: "Machine Learning, NLP & Data Analytics",
    tags: ["RAG Evaluation", "WFGY", "Debugging", "Nebius"],
    summary:
      "Created a 16-mode diagnostic tool that maps messy LLM and RAG failures to reproducible problem categories, trace expectations, and prompt-layer repair guidance.",
    impact: "Systematic failure analysis for retrieval and generation pipelines",
    codeUrl: "https://github.com/tirth1263/LLM-and-RAG-Debugger-WFGY-16-Problem-Map"
  },
  {
    title: "LiteParse Invoice and Receipt Auditor",
    year: "2026",
    domain: "Machine Learning, NLP & Data Analytics",
    tags: ["LiteParse", "OCR", "Nebius", "Audit"],
    summary:
      "Built a local OCR and LLM audit tool that detects invoice math errors, duplicate charges, and missing fields, then pins each finding back to page-level bounding boxes.",
    impact: "Evidence-pinned document intelligence for finance operations",
    codeUrl: "https://github.com/tirth1263/LiteParse-Invoice-and-Receipt-Auditor"
  },
  {
    title: "GitHub MCP Agent",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["MCP", "Agno", "Nebius", "Streamlit"],
    summary:
      "Built a natural-language GitHub repository explorer powered by the official GitHub MCP server, Agno, and Nebius AI for querying issues, PRs, commits, and repo activity.",
    impact: "MCP-native developer intelligence for live GitHub repositories",
    codeUrl: "https://github.com/tirth1263/Github-MCP-Agent"
  },
  {
    title: "LangGraph MCP Agent",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["MCP", "LangGraph", "LangChain", "Couchbase"],
    summary:
      "Implemented a LangChain and LangGraph ReAct agent that queries Couchbase through the Model Context Protocol without writing custom database tools.",
    impact: "MCP database access pattern for agentic query workflows",
    codeUrl: "https://github.com/tirth1263/LangGraph-MCP-Agent"
  },
  {
    title: "Doc-MCP Documentation RAG System",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["MCP", "RAG", "Gradio", "Docs"],
    summary:
      "Transformed GitHub documentation repositories into intelligent, queryable knowledge bases using retrieval-augmented generation and MCP-style context workflows.",
    impact: "Documentation-to-agent knowledge base pipeline",
    codeUrl: "https://github.com/tirth1263/doc-mcp"
  },
  {
    title: "Enterprise MCP Database Server",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["MCP SDK", "Firebase", "TypeScript", "SQL"],
    summary:
      "Created a Firebase-backed web app and MCP SDK server for secure database metadata work, schema snapshots, privacy-aware SQL, execution plans, and Codex MCP config export.",
    impact: "Secure MCP bridge for enterprise-style database workflows",
    codeUrl: "https://github.com/tirth1263/enterprise-mcp-database-server"
  },
  {
    title: "AI Agent Discovery Agent",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["MCP Registry", "Agno", "Nebius", "CLI"],
    summary:
      "Built a CLI and web showcase for discovering agents across NANDA, MCP, Virtuals, A2A, and ERC-8004 registries through a single prompt-driven workflow.",
    impact: "Cross-registry agent discovery for the fragmented agent ecosystem",
    codeUrl: "https://github.com/tirth1263/agent-discovery-agent"
  },
  {
    title: "Multi-Agent Orchestration System",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["Multi-Agent", "MCP", "Composio", "Python"],
    summary:
      "Designed a hierarchical multi-agent system where functions, APIs, MCP servers, and sub-agents are treated as tools for recursive delegation and task decomposition.",
    impact: "Unified tool abstraction for complex agent orchestration",
    codeUrl: "https://github.com/tirth1263/multi-agent-orchestration-system"
  },
  {
    title: "VoxCode Cursor Code Editor",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["Voice AI", "Deepgram", "Nebius", "Cursor SDK"],
    summary:
      "Built a local voice AI coding workspace for talking to a codebase, exploring architecture, and enabling explicit Cursor SDK file edits when permission is turned on.",
    impact: "Voice-first developer tooling with guarded code-edit workflows",
    codeUrl: "https://github.com/tirth1263/VoxCode-Cursor-Code-Editor"
  },
  {
    title: "LiveKit Voice Agent with Web Search",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["LiveKit", "Gemini Live", "Web Search", "Voice AI"],
    summary:
      "Extended a realtime LiveKit and Gemini voice assistant with an Olostep web-search tool so spoken conversations can retrieve fresh, source-aware information.",
    impact: "Low-latency voice agent with real-time retrieval",
    codeUrl: "https://github.com/tirth1263/livekit-voice-agent-with-web-search"
  },
  {
    title: "Healthcare Voice Contact Center",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["Pipecat", "Cartesia", "Nebius", "Voice Tools"],
    summary:
      "Built a production-minded clinic front-desk voice agent that handles appointments, FAQs, escalations, and supervisor handoff using real-time STT, LLM reasoning, and TTS.",
    impact: "Domain-specific voice automation for healthcare operations",
    codeUrl: "https://github.com/tirth1263/healthcare-voice-contact-center"
  },
  {
    title: "Persistent Memory Agent",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["Agno", "Memori", "SQLite", "Nebius"],
    summary:
      "Built an Agno agent that extracts durable user memories from conversations, stores them by user and session, retrieves relevant facts across restarts, and streams rich responses.",
    impact: "Long-term memory architecture for personalized agent experiences",
    codeUrl: "https://github.com/tirth1263/persistent-memory-agent-agno"
  },
  {
    title: "Smart Product Launch Agent",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["Agno", "Bright Data", "Memori", "MongoDB"],
    summary:
      "Built a multi-agent competitive-intelligence system that researches competitor launches, stores findings in persistent memory, cites visited sources, and turns evidence into launch decisions.",
    impact: "Research-grade multi-agent workflow for product strategy",
    codeUrl: "https://github.com/tirth1263/smart-product-launch-agent"
  },
  {
    title: "ScaleKit Exa MCP Security",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["MCP", "OAuth 2.1", "FastAPI", "Exa"],
    summary:
      "Built a production-ready Exa Search MCP server secured by ScaleKit OAuth 2.1, with scoped tool access, auditable requests, Streamable HTTP transport, tests, and container deployment.",
    impact: "Security-first web intelligence for production MCP clients",
    codeUrl: "https://github.com/tirth1263/ScaleKit-Exa-MCP-Security"
  },
  {
    title: "RepoBrief Docker E2B MCP Agent",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["E2B", "MCP", "OpenAI Agents", "Docker"],
    summary:
      "Developed a secure GitHub-to-Notion automation agent that runs official MCP servers inside disposable E2B sandboxes and destroys the isolated environment after every workflow.",
    impact: "Ephemeral, least-exposure execution for cross-tool agent automation",
    codeUrl: "https://github.com/tirth1263/docker-e2b-mcp-agent"
  },
  {
    title: "Telemetry MCP Okahu",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["MCP", "Okahu", "Monocle", "FastAPI"],
    summary:
      "Created a self-healing agent that diagnoses and repairs a buggy Text-to-SQL service using production traces retrieved through Okahu's hosted MCP instead of local logs or guesswork.",
    impact: "Evidence-driven autonomous debugging through observability telemetry",
    codeUrl: "https://github.com/tirth1263/telemetry-mcp-okahu"
  },
  {
    title: "AI Consultant Agent with Memory",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["OpenAI", "Tavily", "Memori", "Streamlit"],
    summary:
      "Built a research-grounded AI readiness advisor that combines company context, current case studies, cost and complexity analysis, and durable engagement memory into prioritized initiatives and a 90-day plan.",
    impact: "Persistent, evidence-backed AI strategy planning for business leaders",
    codeUrl: "https://github.com/tirth1263/ai-consultant-agent-with-memory"
  },
  {
    title: "arXiv Researcher Agent with Memory",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["OpenAI Agents", "arXiv", "Memori", "Streamlit"],
    summary:
      "Built a memory-native research assistant that searches prior sessions, discovers scholarly work on arXiv, produces citation-oriented reports, and maintains a searchable archive across investigations.",
    impact: "Long-running academic research workflows with persistent evidence and context",
    codeUrl: "https://github.com/tirth1263/arXiv-researcher-agent-with-memory"
  },
  {
    title: "Customer Support Voice Agent",
    year: "2026",
    domain: "MCP Agents, Voice AI & Intelligent Systems",
    tags: ["Voice AI", "Firecrawl", "Memori", "Streamlit"],
    summary:
      "Created a company-agnostic support agent that crawls product documentation, grounds answers in indexed sources, remembers prior conversations, and responds with natural speech.",
    impact: "Documentation-grounded voice support that adapts to any product knowledge base",
    codeUrl: "https://github.com/tirth1263/customer-support-voice-agent"
  }
];

export const skillGroups = [
  {
    title: "Data Science and ML",
    icon: LineChart,
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "SciPy",
      "Scikit-Learn",
      "Statistical Modeling",
      "Feature Engineering",
      "Hypothesis Testing"
    ]
  },
  {
    title: "GenAI and LLMs",
    icon: Sparkles,
    skills: [
      "Prompt Engineering",
      "MCP Agents",
      "Agno",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "RAG",
      "Agentic RAG",
      "GraphRAG",
      "Nebius Token Factory",
      "OpenAI Agents SDK",
      "Voice AI Agents",
      "Human-in-the-loop AI"
    ]
  },
  {
    title: "Deep Learning and Vision",
    icon: Cpu,
    skills: [
      "PyTorch",
      "TensorFlow",
      "Computer Vision",
      "OpenCV",
      "Deep Neural Networks",
      "Multimodal AI",
      "Vision-Language Models",
      "Classification",
      "Anomaly Detection"
    ]
  },
  {
    title: "Data Engineering and Analytics",
    icon: Database,
    skills: [
      "Data Cleaning",
      "Dataset Curation",
      "ETL Pipelines",
      "Vector Databases",
      "Neo4j",
      "Contextual AI",
      "LiteParse",
      "Tableau",
      "Excel",
      "Dashboarding",
      "Data Validation"
    ]
  },
  {
    title: "Research and Collaboration",
    icon: Microscope,
    skills: [
      "Literature Review",
      "Empirical Methods",
      "Product Analytics",
      "RAG Evaluation",
      "Citation Verification",
      "Stakeholder Communication",
      "Technical Documentation",
      "Responsible AI"
    ]
  },
  {
    title: "Robotics and Systems",
    icon: Network,
    skills: [
      "Simulation Modeling",
      "Block Diagram Development",
      "System-Level Thinking",
      "Rhino 3D",
      "Grasshopper",
      "MATLAB",
      "AutoCAD",
      "SolidWorks",
      "Docker",
      "FastAPI",
      "OAuth 2.1",
      "Linux Workflows"
    ]
  }
];

export const education = [
  {
    school: "Arizona State University",
    program: "M.S. Robotics and Autonomous Systems, Artificial Intelligence",
    period: "Aug 2025 - Present",
    meta: "Tempe, AZ | GPA: 3.73/4.0",
    icon: GraduationCap
  },
  {
    school: "SVKM's NMIMS, Mukesh Patel School of Technology Management and Engineering",
    program: "B.Tech Artificial Intelligence and Machine Learning",
    period: "Jul 2021 - May 2025",
    meta: "Mumbai, India | GPA: 3.75/4.0",
    icon: GraduationCap
  }
];

export const publications = [
  {
    title:
      "Active Learning and Label Quality Optimization for Guest Satisfaction Prediction Systems",
    venue: "International Conference on Data Science and AI Product Analytics",
    year: "2026"
  },
  {
    title:
      "LLM-Assisted Labeling Agents for Scalable Trip Intelligence and Customer Experience Modeling",
    venue: "IEEE Conference on Applied GenAI and Data Science",
    year: "2025"
  },
  {
    title:
      "Multimodal Feedback Analytics and Empirical Methods for Product Satisfaction Modeling",
    venue: "ACM Conference on Machine Learning and Product Intelligence",
    year: "2025"
  }
];

export const certifications = [
  "J.P. Morgan Quantitative Research Job Simulation",
  "Risk Assessment e-Learning",
  "Robotics Certificate",
  "AI Agents Fundamentals",
  "MATLAB Desktop Tools and Troubleshooting Scripts",
  "CB3 e-Learning Robotics Certificate"
];

export const chatPrompts = [
  "What should recruiters know first?",
  "Which MCP agent projects stand out?",
  "Summarize Tirth's robotics background.",
  "How can I contact Tirth?"
];

export const portfolioContext = `
Tirth Rank is a Robotics and AI engineer based in Tempe, Arizona.
He is pursuing an M.S. in Robotics and Autonomous Systems with an Artificial Intelligence concentration at Arizona State University, with a 3.73 GPA.
He earned a B.Tech in Artificial Intelligence and Machine Learning from SVKM's NMIMS, MPSTME, with a 3.75 GPA.
His work spans data science, machine learning, computer vision, GenAI workflows, MCP agents, voice AI, active learning, human-in-the-loop AI, immersive technology, XR testing, and robotics systems.
Current role: Robotics Design Lab Researcher at The Design School at ASU, supporting hands-on robotics, design, prototyping, innovation, creative learning, and research in the design lab.
Current role: Volumetric Innovation Fellow at ASU MESH Labs, supporting immersive and volumetric technology projects, data capture workflows, prototype development, calibration, testing, Python/OpenCV/Linux validation, and automation scripts.
Previous role: XR Quality Assurance and Testing at ASU MESH Labs, performing functional and performance testing on XR applications, documenting defects, validating workflows, and improving immersive system reliability.
Previous internships: Artificial Intelligence Intern at Codec Technologies India, Machine Learning Intern at Bacancy Technology, and Deloitte Data Analytics Virtual Internship via Forage.
Technical skills include Python, TypeScript, SQL, Pandas, NumPy, SciPy, Scikit-Learn, PyTorch, TensorFlow, OpenCV, LLMs, MCP, Agno, LangChain, LangGraph, LlamaIndex, prompt engineering, RAG, agentic RAG, GraphRAG, vector databases, Neo4j, Contextual AI, LiteParse, OpenAI Agents SDK, OAuth 2.1, Docker, FastAPI, voice AI agents, Tableau, Excel, MATLAB, Rhino 3D, Grasshopper, AutoCAD, SolidWorks, Linux workflows, RAG evaluation, citation verification, and technical documentation.
Featured projects include VLM Reasoning Model using Knowledge Graph, AI-Assisted Robotic Design Interface, Rhino 3D Projects, Agentic RAG with Agno and GPT-5, Typed Agentic RAG with LlamaIndex, Enterprise Contextual RAG, GraphRAG with Neo4j, Codebase Q&A RAG, LLM and RAG Debugger, LiteParse Invoice and Receipt Auditor, GitHub MCP Agent, LangGraph MCP Agent, Doc-MCP Documentation RAG System, Enterprise MCP Database Server, AI Agent Discovery Agent, Multi-Agent Orchestration System, Persistent Memory Agent, Smart Product Launch Agent, ScaleKit Exa MCP Security, RepoBrief Docker E2B MCP Agent, VoxCode Cursor Code Editor, LiveKit Voice Agent with Web Search, and Healthcare Voice Contact Center. These projects span robotics and autonomous systems, deep learning, machine learning, NLP, data analytics, MCP agents, RAG systems, voice AI, software engineering, and intelligent systems.
Contact: tirthrank.work@gmail.com, LinkedIn at linkedin.com/in/tirth-rank, GitHub at github.com/tirth1263.
`;
