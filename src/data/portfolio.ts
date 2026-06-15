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
    "M.S. Robotics and Autonomous Systems student at Arizona State University, building perception systems, GenAI workflows, and data-driven automation.",
  summary:
    "I work across robotics, machine learning, computer vision, immersive technology, and product analytics. My current focus is turning messy real-world signals into reliable systems: robotic design prototyping, XR test workflows, volumetric tooling, model evaluation, active learning, and human-in-the-loop AI."
};

export const metrics = [
  { value: "3.73", label: "ASU graduate GPA" },
  { value: "10+", label: "AI and ML systems" },
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
    title: "RAS 545 Robotics Systems 1",
    year: "2025",
    domain: "Robotics, Autonomous Systems & Deep Learning",
    tags: ["Jupyter", "Kinematics", "Simulation", "Robotics"],
    summary:
      "Completed robotics systems work covering robot modeling, kinematics, simulation notebooks, lab assignments, and system-level problem solving.",
    impact: "Graduate robotics foundation across modeling and autonomous systems",
    codeUrl: "https://github.com/tirth1263/RAS-545-Robotics-Systems-1"
  },
  {
    title: "Multi-Modal E-Commerce Fake Review Detector",
    year: "2026",
    domain: "Machine Learning, NLP & Data Analytics",
    tags: ["FastAPI", "PyTorch", "Transformers", "Docker"],
    summary:
      "Developed a fraud detection system that fuses review text, reviewer metadata, and product image signals with explainability and model-serving scaffolds.",
    impact: "Multimodal ML architecture for trust and marketplace safety",
    codeUrl: "https://github.com/tirth1263/multi-modal-e-commerce-fake-review-detector"
  },
  {
    title: "Real-Time MLOps Drift Monitoring System",
    year: "2026",
    domain: "Machine Learning, NLP & Data Analytics",
    tags: ["MLOps", "Firebase", "PSI Drift", "Monitoring"],
    summary:
      "Built a Firebase-first MLOps dashboard that serves a predictive model, simulates production drift, tracks quality metrics, and stores versioned artifacts.",
    impact: "Production-minded ML monitoring with drift alerts and retraining history",
    codeUrl: "https://github.com/tirth1263/real-time-ml-ops-drifting-and-monitoring-system"
  },
  {
    title: "B2B Competitor Intelligence Engine",
    year: "2026",
    domain: "Machine Learning, NLP & Data Analytics",
    tags: ["Scrapy", "NLP", "Transformers", "Streamlit"],
    summary:
      "Designed a cold-start intelligence pipeline that crawls market text, extracts entities with Hugging Face NER, and visualizes competitor signals.",
    impact: "NLP-powered market analytics from unstructured public data",
    codeUrl: "https://github.com/tirth1263/b2b-competitor-intelligence-engine"
  },
  {
    title: "ApplyForge AI",
    year: "2026",
    domain: "Software Engineering, IoT & Intelligent Systems",
    tags: ["React", "TypeScript", "Firebase", "Cloud Functions"],
    summary:
      "Built a job application workspace for searching roles, tailoring resumes, generating cover letters, saving jobs, and tracking application history.",
    impact: "Full-stack AI product workflow with persistent Firebase data",
    codeUrl: "https://github.com/tirth1263/ApplyForge-AI"
  },
  {
    title: "Smart Scheduler Assistant",
    year: "2026",
    domain: "Software Engineering, IoT & Intelligent Systems",
    tags: ["Python", "Agno", "Gmail API", "Google Calendar"],
    summary:
      "Created a multi-agent assistant that reads Gmail, filters important scheduling messages, and manages Google Calendar with persistent memory.",
    impact: "Agentic productivity system connecting real user tools and APIs",
    codeUrl: "https://github.com/tirth1263/smart-scheduler-assistant"
  },
  {
    title: "Autonomous CI/CD Failure Patcher",
    year: "2026",
    domain: "Software Engineering, IoT & Intelligent Systems",
    tags: ["TypeScript", "Firebase", "GitHub Actions", "Codex"],
    summary:
      "Built a dashboard and GitHub Action that collects failed workflow logs, generates AI-assisted patches, verifies fixes, and opens pull requests.",
    impact: "Self-healing DevOps automation for failed builds and test runs",
    codeUrl: "https://github.com/tirth1263/autonomous-ci-cd-failure-patcher"
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
      "LLM Labeling Agents",
      "Structured Outputs",
      "Embeddings",
      "RAG",
      "Active Learning",
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
      "MATLAB",
      "AutoCAD",
      "SolidWorks",
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
  "Which projects show GenAI experience?",
  "Summarize Tirth's robotics background.",
  "How can I contact Tirth?"
];

export const portfolioContext = `
Tirth Rank is a Robotics and AI engineer based in Tempe, Arizona.
He is pursuing an M.S. in Robotics and Autonomous Systems with an Artificial Intelligence concentration at Arizona State University, with a 3.73 GPA.
He earned a B.Tech in Artificial Intelligence and Machine Learning from SVKM's NMIMS, MPSTME, with a 3.75 GPA.
His work spans data science, machine learning, computer vision, GenAI workflows, active learning, human-in-the-loop AI, immersive technology, XR testing, and robotics systems.
Current role: Robotics Design Lab Researcher at The Design School at ASU, supporting hands-on robotics, design, prototyping, innovation, creative learning, and research in the design lab.
Current role: Volumetric Innovation Fellow at ASU MESH Labs, supporting immersive and volumetric technology projects, data capture workflows, prototype development, calibration, testing, Python/OpenCV/Linux validation, and automation scripts.
Previous role: XR Quality Assurance and Testing at ASU MESH Labs, performing functional and performance testing on XR applications, documenting defects, validating workflows, and improving immersive system reliability.
Previous internships: Artificial Intelligence Intern at Codec Technologies India, Machine Learning Intern at Bacancy Technology, and Deloitte Data Analytics Virtual Internship via Forage.
Technical skills include Python, SQL, Pandas, NumPy, SciPy, Scikit-Learn, PyTorch, TensorFlow, OpenCV, LLMs, prompt engineering, embeddings, RAG, active learning, Tableau, Excel, MATLAB, AutoCAD, SolidWorks, Linux workflows, and technical documentation.
Featured projects include VLM Reasoning Model using Knowledge Graph, AI-Assisted Robotic Design Interface, RAS 545 Robotics Systems 1, Multi-Modal E-Commerce Fake Review Detector, Real-Time MLOps Drift Monitoring System, B2B Competitor Intelligence Engine, ApplyForge AI, Smart Scheduler Assistant, and Autonomous CI/CD Failure Patcher. These projects span robotics and autonomous systems, deep learning, machine learning, NLP, data analytics, software engineering, and intelligent systems.
Contact: tirthrank.work@gmail.com, LinkedIn at linkedin.com/in/tirth-rank, GitHub at github.com/tirth1263.
`;
