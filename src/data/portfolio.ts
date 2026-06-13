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
    "I work across robotics, machine learning, computer vision, immersive technology, and product analytics. My current focus is turning messy real-world signals into reliable systems: XR test workflows, volumetric tooling, model evaluation, active learning, and human-in-the-loop AI."
};

export const metrics = [
  { value: "3.73", label: "ASU graduate GPA" },
  { value: "10+", label: "AI and ML systems" },
  { value: "5", label: "industry and research roles" },
  { value: "3", label: "research publications listed" }
];

export const work = [
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
    title: "Guest Satisfaction Active Learning and Label Quality Pipeline",
    year: "2026",
    tags: ["PyTorch", "Active Learning", "Dashboards", "Human-in-the-loop"],
    summary:
      "Designed an active learning workflow with uncertainty sampling, label diagnostics, review loops, and model evaluation dashboards for guest experience prediction.",
    signal: "Label efficiency and empirical product research"
  },
  {
    title: "LLM Labeling Agent for Trip Experience Intelligence",
    year: "2025",
    tags: ["LLMs", "Structured Outputs", "Prompt Engineering", "Evaluation"],
    summary:
      "Built a GenAI-assisted labeling framework using prompts, structured outputs, rubrics, consistency checks, and prompt iteration for multimodal trip feedback.",
    signal: "Scalable annotation quality"
  },
  {
    title: "Multimodal Travel Feedback Analytics and GSAT Prediction System",
    year: "2024",
    tags: ["TensorFlow", "SQL", "Pandas", "Sentiment"],
    summary:
      "Created a predictive analytics pipeline that combined structured trip metadata and text feedback to identify satisfaction drivers.",
    signal: "Model comparison and statistical validation"
  },
  {
    title: "Literature-Driven GenAI Evaluation Framework",
    year: "2024",
    tags: ["Research", "Weak Supervision", "Metrics", "Notebooks"],
    summary:
      "Translated active learning, LLM labeling, and weak supervision research into reproducible notebooks, evaluation metrics, and experiment plans.",
    signal: "Implementation-ready research"
  },
  {
    title: "Visual Question Answering and Computer Vision Systems",
    year: "2024",
    tags: ["VQA", "OpenCV", "Deep Learning", "NLP"],
    summary:
      "Developed a collection of AI systems including visual question answering, real-time fruit detection, leaf disease detection, spam detection, and AI noise cancellation.",
    signal: "Applied AI across vision and language"
  },
  {
    title: "IoT Gesture-Controlled Bluetooth Speaker",
    year: "2023",
    tags: ["IoT", "Sensors", "Embedded", "Automation"],
    summary:
      "Built an IoT prototype that used gesture inputs to control audio playback, connecting embedded sensing with accessible interaction design.",
    signal: "Human-machine interaction prototype"
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
Current role: Volumetric Innovation Fellow at ASU MESH Labs, supporting immersive and volumetric technology projects, data capture workflows, prototype development, calibration, testing, Python/OpenCV/Linux validation, and automation scripts.
Previous role: XR Quality Assurance and Testing at ASU MESH Labs, performing functional and performance testing on XR applications, documenting defects, validating workflows, and improving immersive system reliability.
Previous internships: Artificial Intelligence Intern at Codec Technologies India, Machine Learning Intern at Bacancy Technology, and Deloitte Data Analytics Virtual Internship via Forage.
Technical skills include Python, SQL, Pandas, NumPy, SciPy, Scikit-Learn, PyTorch, TensorFlow, OpenCV, LLMs, prompt engineering, embeddings, RAG, active learning, Tableau, Excel, MATLAB, AutoCAD, SolidWorks, Linux workflows, and technical documentation.
Projects include Guest Satisfaction Active Learning and Label Quality Pipeline, LLM Labeling Agent for Trip Experience Intelligence, Multimodal Travel Feedback Analytics and GSAT Prediction System, Literature-Driven GenAI Evaluation Framework, VLM Reasoning Model using Knowledge Graph with PaliGemma, ConceptNet, ScienceQA, and physics rules, Smart Scheduler Assistant, Web Automation Agent, Multi-Agent Orchestration System, Enterprise MCP Database Server, Autonomous CI/CD Failure Patcher, Real-Time MLOps Drift Monitoring System, Satellite and Drone Feed Change Tracker, Multi-Modal E-Commerce Fake Review Detector, AI-Assisted Robotic Design Interface, AI Styling Assistant, B2B Competitor Intelligence Engine, X-ray Bone Fracture Detection, Real vs Fake Face Classification, GTZAN Genre Classification, Image Classification Using CNN, Codec Technologies ML Projects, Basic ML Projects, RAS 545 Robotics Systems 1, and EEE 598 Deep Learning.
Contact: tirthrank.work@gmail.com, LinkedIn at linkedin.com/in/tirth-rank, GitHub at github.com/tirth1263.
`;
