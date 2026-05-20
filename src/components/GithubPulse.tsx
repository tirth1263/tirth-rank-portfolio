import { Code2 } from "lucide-react";

type ProjectRepo = {
  name: string;
  repo: string;
  url: string;
  type: string;
  description: string;
  stack: string[];
};

const projectRepos: ProjectRepo[] = [
  {
    name: "ApplyForge AI",
    repo: "tirth1263/ApplyForge-AI",
    url: "https://github.com/tirth1263/ApplyForge-AI",
    type: "AI Career Platform",
    description:
      "A job application workspace for searching roles, tailoring resumes to job descriptions, generating cover letters, saving jobs, and tracking application history with Firebase.",
    stack: ["React", "TypeScript", "Firebase", "Cloud Functions"]
  },
  {
    name: "MyIdea",
    repo: "tirth1263/MyIdea",
    url: "https://github.com/tirth1263/MyIdea",
    type: "Visual Idea Workspace",
    description:
      "A Firebase-backed second brain for video ideas with Google sign-in, visual masonry cards, source/category filters, image uploads, detail drawers, and workspace join codes.",
    stack: ["JavaScript", "Firebase", "Storage", "Cloud Functions"]
  },
  {
    name: "RAS 545 Robotics Systems 1",
    repo: "tirth1263/RAS-545-Robotics-Systems-1",
    url: "https://github.com/tirth1263/RAS-545-Robotics-Systems-1",
    type: "Robotics Coursework",
    description:
      "Robotics Systems 1 work covering robot modeling, kinematics, simulation notebooks, lab assignments, and system-level robotics problem solving.",
    stack: ["Jupyter", "Robotics", "Simulation", "Kinematics"]
  },
  {
    name: "EEE 598 Deep Learning",
    repo: "tirth1263/EEE-598-Deep-Learning-Fondations-and-Applications",
    url: "https://github.com/tirth1263/EEE-598-Deep-Learning-Fondations-and-Applications",
    type: "Deep Learning Coursework",
    description:
      "Deep learning foundations and applications work with model training notebooks, neural network experiments, data preparation, evaluation, and applied ML workflows.",
    stack: ["Jupyter", "Deep Learning", "Neural Networks", "Python"]
  },
  {
    name: "X-ray Bone Fracture Detection",
    repo: "tirth1263/X-ray-dataset-for-fractured-bones-92.5-accuracy",
    url: "https://github.com/tirth1263/X-ray-dataset-for-fractured-bones-92.5-accuracy",
    type: "Medical Imaging ML",
    description:
      "An X-ray preprocessing and classification project for fractured and non-fractured bone scans, reaching 92.5% accuracy on the fracture detection task.",
    stack: ["Jupyter", "Computer Vision", "Classification", "Kaggle"]
  },
  {
    name: "GTZAN Genre Classification",
    repo: "tirth1263/GTZAN-dataset-genre-classification",
    url: "https://github.com/tirth1263/GTZAN-dataset-genre-classification",
    type: "Audio ML",
    description:
      "A music genre classification workflow using the GTZAN dataset, feature extraction, model training, and evaluation for audio-based machine learning.",
    stack: ["Jupyter", "Audio Features", "ML", "Classification"]
  },
  {
    name: "Image Classification Using CNN",
    repo: "tirth1263/Image-Classification-using-CNNImage-Classification-using-CNN",
    url: "https://github.com/tirth1263/Image-Classification-using-CNNImage-Classification-using-CNN",
    type: "Computer Vision",
    description:
      "A convolutional neural network project for image classification, covering preprocessing, CNN architecture design, training, and prediction workflows.",
    stack: ["Python", "CNN", "Computer Vision", "Deep Learning"]
  },
  {
    name: "Basic ML Projects",
    repo: "tirth1263/Basic-ML-Projects",
    url: "https://github.com/tirth1263/Basic-ML-Projects",
    type: "Machine Learning Practice",
    description:
      "A collection of machine learning notebooks for core supervised learning workflows, data analysis, model training, evaluation, and baseline experimentation.",
    stack: ["Jupyter", "Scikit-Learn", "Pandas", "ML"]
  },
  {
    name: "SAP Website",
    repo: "tirth1263/SAP-Website",
    url: "https://github.com/tirth1263/SAP-Website",
    type: "Web Development",
    description:
      "A website project focused on presenting SAP-related content through a structured frontend experience with reusable sections and responsive page layout.",
    stack: ["Frontend", "Responsive UI", "Web App", "JavaScript"]
  },
  {
    name: "Service Provider Platform",
    repo: "tirth1263/Service_Provider_Platfrom",
    url: "https://github.com/tirth1263/Service_Provider_Platfrom",
    type: "Service Marketplace",
    description:
      "A React and Vite platform for connecting users with service providers, built around modern frontend routing, reusable UI, and service discovery flows.",
    stack: ["React", "Vite", "JavaScript", "Platform UI"]
  }
];

export function GithubPulse() {
  return (
    <section className="section github-section" id="github">
      <div className="section-heading">
        <p className="eyebrow">Project Code</p>
        <h2>Selected repositories behind my AI, robotics, and web systems work.</h2>
      </div>
      <div className="repo-grid">
        {projectRepos.map((project) => (
          <article className="repo-card" key={project.repo}>
            <div className="repo-topline">
              <Code2 size={18} />
              <span>{project.type}</span>
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tag-row repo-tags">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a className="repo-action" href={project.url} target="_blank" rel="noreferrer">
              <span aria-hidden="true">🐙</span>
              View Code
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
