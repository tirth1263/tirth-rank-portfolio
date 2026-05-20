import { motion, type Transition } from "framer-motion";
import {
  Bot,
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
            <motion.p className="eyebrow" {...fadeUp}>
              Robotics | AI | Computer Vision | GenAI
            </motion.p>
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

        <section className="section intro-section" id="about">
          <motion.div className="intro-copy" {...fadeUp}>
            <p className="eyebrow">Profile</p>
            <h2>Engineering reliable intelligence for physical and digital systems.</h2>
          </motion.div>
          <motion.div className="intro-panel" {...fadeUp}>
            <p>{profile.summary}</p>
            <div className="quick-links">
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
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <p className="eyebrow">Recent Work</p>
            <h2>Experience across immersive systems, AI tooling, and applied analytics.</h2>
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
            <p className="eyebrow">Selected Projects</p>
            <h2>Systems that combine data, model behavior, and product judgment.</h2>
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
            <p className="eyebrow">Technical Stack</p>
            <h2>Practical tools for research, prototyping, and production-minded experimentation.</h2>
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
            <p className="eyebrow">Education and Research</p>
            <h2>Academic foundation with an applied AI research thread.</h2>
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

        <GithubPulse />
        <Contact user={user} />
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
