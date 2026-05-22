import { useMemo, useState } from "react";
import { Code2 } from "lucide-react";

type ProjectRepo = {
  name: string;
  repo: string;
  url: string;
  type: string;
  categories: string[];
  description: string;
  stack: string[];
};

const categories = [
  "All",
  "AI Apps",
  "Robotics",
  "Deep Learning",
  "Computer Vision",
  "Knowledge Graphs",
  "Audio ML",
  "Machine Learning",
  "Web Apps"
];

const projectRepos: ProjectRepo[] = [
  {
    name: "ApplyForge AI",
    repo: "tirth1263/ApplyForge-AI",
    url: "https://github.com/tirth1263/ApplyForge-AI",
    type: "AI Career Platform",
    categories: ["AI Apps", "Web Apps"],
    description:
      "A job application workspace for searching roles, tailoring resumes to job descriptions, generating cover letters, saving jobs, and tracking application history with Firebase.",
    stack: ["React", "TypeScript", "Firebase", "Cloud Functions"]
  },
  {
    name: "MyIdea",
    repo: "tirth1263/MyIdea",
    url: "https://github.com/tirth1263/MyIdea",
    type: "Visual Idea Workspace",
    categories: ["AI Apps", "Web Apps"],
    description:
      "A Firebase-backed second brain for video ideas with Google sign-in, visual masonry cards, source/category filters, image uploads, detail drawers, and workspace join codes.",
    stack: ["JavaScript", "Firebase", "Storage", "Cloud Functions"]
  },
  {
    name: "RAS 545 Robotics Systems 1",
    repo: "tirth1263/RAS-545-Robotics-Systems-1",
    url: "https://github.com/tirth1263/RAS-545-Robotics-Systems-1",
    type: "Robotics Coursework",
    categories: ["Robotics"],
    description:
      "Robotics Systems 1 work covering robot modeling, kinematics, simulation notebooks, lab assignments, and system-level robotics problem solving.",
    stack: ["Jupyter", "Robotics", "Simulation", "Kinematics"]
  },
  {
    name: "EEE 598 Deep Learning",
    repo: "tirth1263/EEE-598-Deep-Learning-Fondations-and-Applications",
    url: "https://github.com/tirth1263/EEE-598-Deep-Learning-Fondations-and-Applications",
    type: "Deep Learning Coursework",
    categories: ["Deep Learning"],
    description:
      "Deep learning foundations and applications work with model training notebooks, neural network experiments, data preparation, evaluation, and applied ML workflows.",
    stack: ["Jupyter", "Deep Learning", "Neural Networks", "Python"]
  },
  {
    name: "X-ray Bone Fracture Detection",
    repo: "tirth1263/X-ray-dataset-for-fractured-bones-92.5-accuracy",
    url: "https://github.com/tirth1263/X-ray-dataset-for-fractured-bones-92.5-accuracy",
    type: "Medical Imaging ML",
    categories: ["Computer Vision", "Deep Learning"],
    description:
      "An X-ray preprocessing and classification project for fractured and non-fractured bone scans, reaching 92.5% accuracy on the fracture detection task.",
    stack: ["Jupyter", "Computer Vision", "Classification", "Kaggle"]
  },
  {
    name: "GTZAN Genre Classification",
    repo: "tirth1263/GTZAN-dataset-genre-classification",
    url: "https://github.com/tirth1263/GTZAN-dataset-genre-classification",
    type: "Audio ML",
    categories: ["Audio ML", "Machine Learning"],
    description:
      "A music genre classification workflow using the GTZAN dataset, feature extraction, model training, and evaluation for audio-based machine learning.",
    stack: ["Jupyter", "Audio Features", "ML", "Classification"]
  },
  {
    name: "Image Classification Using CNN",
    repo: "tirth1263/Image-Classification-using-CNNImage-Classification-using-CNN",
    url: "https://github.com/tirth1263/Image-Classification-using-CNNImage-Classification-using-CNN",
    type: "Computer Vision",
    categories: ["Computer Vision", "Deep Learning"],
    description:
      "A convolutional neural network project for image classification, covering preprocessing, CNN architecture design, training, and prediction workflows.",
    stack: ["Python", "CNN", "Computer Vision", "Deep Learning"]
  },
  {
    name: "Basic ML Projects",
    repo: "tirth1263/Basic-ML-Projects",
    url: "https://github.com/tirth1263/Basic-ML-Projects",
    type: "Machine Learning Practice",
    categories: ["Machine Learning"],
    description:
      "A collection of machine learning notebooks for core supervised learning workflows, data analysis, model training, evaluation, and baseline experimentation.",
    stack: ["Jupyter", "Scikit-Learn", "Pandas", "ML"]
  },
  {
    name: "VLM Reasoning Model using Knowledge Graph",
    repo: "tirth1263/VLM-Reasoning-Model-using-Knowledge-Graph",
    url: "https://github.com/tirth1263/VLM-Reasoning-Model-using-Knowledge-Graph",
    type: "VLM + Knowledge Graphs",
    categories: ["Computer Vision", "Machine Learning", "Knowledge Graphs"],
    description:
      "A physical-world reasoning system that augments PaliGemma-3B with ConceptNet facts and physics rules, then compares baseline and KG-assisted answers on ScienceQA physics questions.",
    stack: ["PaliGemma", "ConceptNet", "ScienceQA", "Physics Rules"]
  },
  {
    name: "Service Provider Platform",
    repo: "tirth1263/Service_Provider_Platfrom",
    url: "https://github.com/tirth1263/Service_Provider_Platfrom",
    type: "Service Marketplace",
    categories: ["Web Apps"],
    description:
      "A React and Vite platform for connecting users with service providers, built around modern frontend routing, reusable UI, and service discovery flows.",
    stack: ["React", "Vite", "JavaScript", "Platform UI"]
  }
];

function GithubMark() {
  return (
    <svg aria-hidden="true" className="github-mark" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.12 10.12 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

export function GithubPulse() {
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projectRepos
        : projectRepos.filter((project) =>
            project.categories.includes(activeCategory)
          ),
    [activeCategory]
  );

  return (
    <section className="section github-section" id="github">
      <div className="project-code-heading">
        <div>
          <h2>My Work</h2>
        </div>
        <div className="project-filters" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              aria-pressed={activeCategory === category}
              className={activeCategory === category ? "active" : ""}
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="repo-grid">
        {visibleProjects.map((project) => (
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
              <GithubMark />
              View Code
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
