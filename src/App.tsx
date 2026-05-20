import { motion, type Transition } from "framer-motion";
import {
  BadgeCheck,
  Bot,
  CalendarCheck,
  Camera,
  Code2,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { ChatBot } from "./components/ChatBot";
import { Contact } from "./components/Contact";
import { GithubPulse } from "./components/GithubPulse";
import { Header } from "./components/Header";
import { NeuralCanvas } from "./components/NeuralCanvas";
import { useAuth } from "./hooks/useAuth";
import {
  certifications,
  education,
  metrics,
  profile,
  projects,
  publications,
  skillGroups,
  work
} from "./data/portfolio";

const responsibilities = [
  {
    title: "Member of Organizing Committee",
    context: "NMMUN Media",
    description:
      "Contributed to media execution by designing 10+ Instagram posts and stories, and capturing photos and videos across the event.",
    icon: Camera
  },
  {
    title: "Core Committee Member",
    context: "Raw Vision Media",
    description:
      "Led a 20+ member college photography and videography team for events, coverage planning, and creative media coordination.",
    icon: BadgeCheck
  },
  {
    title: "Member of Organizing Committee",
    context: "PROTSAHAN Cultural Fest",
    description:
      "Supported college fest organization for games and student activities including Squid Games, Foosball, and Paintball.",
    icon: Sparkles
  },
  {
    title: "Event Management Committee",
    context: "Ganesh Chaturthi Celebration at NMIMS",
    description:
      "Coordinated academic and extracurricular event operations to support smooth execution and stronger student engagement.",
    icon: CalendarCheck
  }
];

const profileHighlights = [
  {
    title: "Robotics and autonomy",
    description: "Simulation, perception, mapping, and system-level thinking for physical intelligent systems.",
    icon: Bot
  },
  {
    title: "Machine learning systems",
    description: "Computer vision, deep learning, active learning, and model evaluation workflows.",
    icon: Sparkles
  },
  {
    title: "Product-grade AI tools",
    description: "Firebase-backed apps, GenAI workflows, analytics, and human-in-the-loop experiences.",
    icon: ShieldCheck
  }
];

const baseTransition: Transition = { duration: 0.55, ease: "easeOut" };

const fadeUp = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: baseTransition
};

function App() {
  const { user, loading } = useAuth();

  return (
    <div className="app-shell">
      <Header user={user} loading={loading} />
      <main>
        <section className="hero" id="home">
          <NeuralCanvas />
          <div className="hero-media" aria-hidden="true">
            <img src="/assets/robot.jpg" alt="" />
          </div>
          <div className="hero-content">
            <motion.h1 {...fadeUp}>Tirth Rank</motion.h1>
            <motion.p className="hero-lede" {...fadeUp}>
              {profile.headline}
            </motion.p>
            <motion.div className="hero-actions" {...fadeUp}>
              <a className="primary-button" href="#projects">
                <Sparkles size={18} />
                <span>Explore work</span>
              </a>
              <a className="secondary-button" href={profile.resume} target="_blank" rel="noreferrer">
                <Download size={18} />
                <span>Resume</span>
              </a>
              <a className="secondary-button" href={`mailto:${profile.email}`}>
                <Mail size={18} />
                <span>Email</span>
              </a>
            </motion.div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Portfolio metrics">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section className="section profile-section" id="about">
          <motion.div className="profile-copy" {...fadeUp}>
            <h2>Robotics and AI engineer building reliable intelligent systems.</h2>
            <p>{profile.summary}</p>
            <div className="profile-actions">
              <a href={profile.linkedIn} target="_blank" rel="noreferrer">
                <ExternalLink size={18} />
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Code2 size={18} />
                GitHub
              </a>
              <span>
                <MapPin size={18} />
                {profile.location}
              </span>
            </div>
          </motion.div>
          <motion.div className="profile-highlight-grid" {...fadeUp}>
            {profileHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article className="profile-highlight" key={item.title}>
                  <div className="profile-highlight-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              );
            })}
          </motion.div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <h2>Work Experience</h2>
          </div>
          <div className="timeline">
            {work.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article className="timeline-item" key={`${item.company}-${item.title}`} {...fadeUp} transition={{ ...baseTransition, delay: index * 0.04 }}>
                  <div className="timeline-icon">
                    <Icon size={22} />
                  </div>
                  <div className="timeline-body">
                    <div className="timeline-top">
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.company}</p>
                      </div>
                      <span>{item.period}</span>
                    </div>
                    <p className="timeline-location">{item.location}</p>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <h2>Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article className="project-card" key={project.title} {...fadeUp} transition={{ ...baseTransition, delay: index * 0.04 }}>
                <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <div className="project-year">{project.year}</div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-signal">
                  <ShieldCheck size={16} />
                  {project.signal}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section tech-section" id="tech">
          <div className="section-heading">
            <h2>Technical Stack</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <motion.article className="skill-card" key={group.title} {...fadeUp}>
                  <div className="skill-heading">
                    <Icon size={20} />
                    <h3>{group.title}</h3>
                  </div>
                  <div className="tag-row">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="section-heading">
            <h2>Education & Research</h2>
          </div>
          <div className="education-grid">
            {education.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article className="education-card" key={item.school} {...fadeUp}>
                  <Icon size={22} />
                  <div>
                    <h3>{item.school}</h3>
                    <p>{item.program}</p>
                    <span>{item.period}</span>
                    <small>{item.meta}</small>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="research-grid">
            <div className="publication-list">
              {publications.map((publication, index) => (
                <motion.article className="publication-card" key={publication.title} {...fadeUp} transition={{ ...baseTransition, delay: index * 0.04 }}>
                  <span>{publication.year}</span>
                  <h3>{publication.title}</h3>
                  <p>{publication.venue}</p>
                </motion.article>
              ))}
            </div>

            <motion.div className="certification-panel" {...fadeUp}>
              <div className="skill-heading">
                <Bot size={20} />
                <h3>Certifications</h3>
              </div>
              <ul>
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="section responsibilities-section" id="responsibilities">
          <div className="section-heading">
            <h2>Responsibilities</h2>
          </div>
          <div className="responsibility-grid">
            {responsibilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  className="responsibility-card"
                  key={`${item.title}-${item.context}`}
                  {...fadeUp}
                  transition={{ ...baseTransition, delay: index * 0.04 }}
                >
                  <div className="responsibility-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <span>{item.context}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <GithubPulse />
        <Contact />
      </main>

      <footer className="site-footer">
        <span>© 2026 Tirth Rank</span>
        <span>Robotics and AI | Built with React, Firebase, and a little voltage.</span>
      </footer>

      <ChatBot user={user} />
    </div>
  );
}

export default App;
