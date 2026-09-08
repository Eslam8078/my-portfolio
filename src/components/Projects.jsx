import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink, FolderKanban, ServerCog, Sparkles, Layers3, Trophy } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

const FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "ai", label: "AI & Vision" },
];
const TYPE_META = {
  fullstack: { label: "Full-Stack", icon: Layers3 },
  frontend: { label: "Frontend", icon: Sparkles },
  backend: { label: "Backend", icon: ServerCog },
  ai: { label: "AI / Vision", icon: FolderKanban },
};
const grid = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const card = {
  hidden: { opacity: 0, y: 35, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: 15, scale: 0.98, transition: { duration: 0.2 } },
};

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const visibleProjects = useMemo(
    () => filter === "all" ? projects : projects.filter((project) => project.type === filter),
    [filter]
  );

  return (
    <section id="projects" className="section-shell section-alt">
      <div className="section-container">
        <motion.header initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }} viewport={{ once: true, amount: 0.25 }} className="section-heading">
          <span className="eyebrow">Selected Work</span>
          <h2 className="section-title">Projects built to solve real problems</h2>
          <p className="section-lead">
            My strongest work across full-stack engineering, modern frontend architecture,
            APIs, authentication, and computer vision.
          </p>
        </motion.header>

        <motion.div className="project-filters" initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          role="tablist" aria-label="Project filters">
          {FILTERS.map((item) => (
            <button key={item.id} type="button" onClick={() => setFilter(item.id)}
              aria-selected={filter === item.id}
              className={`project-filter ${filter === item.id ? "is-active" : ""}`}>
              {item.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={filter} variants={grid} initial="hidden" animate="show" exit={{ opacity: 0 }}
            className="projects-grid">
            {visibleProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const meta = TYPE_META[project.type] ?? TYPE_META.frontend;
  const TypeIcon = meta.icon;

  return (
    <motion.article variants={card} whileHover={{ y: -10 }}
      className={`project-card ${index === 0 ? "project-card--hero" : ""}`}>
      <div className="project-card__shine" />
      <div className="project-card__top">
        <div className="project-icon"><TypeIcon size={23} /></div>
        <div className="project-card__actions">
          {index === 0 && <span className="project-rank"><Trophy size={13} /> Top Pick</span>}
          <a href={project.github} target="_blank" rel="noreferrer"
            aria-label={`Open ${project.title} GitHub repository`} className="icon-button">
            <FaGithub size={18} />
          </a>
          {project.live && <a href={project.live} target="_blank" rel="noreferrer"
            aria-label={`Open ${project.title} live demo`} className="icon-button">
            <ExternalLink size={17} />
          </a>}
        </div>
      </div>

      <div className="project-card__meta">
        <span>{meta.label}</span>
        {project.featured && <span className="project-featured">Featured</span>}
      </div>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>

      <div className="tech-list">
        {project.technologies.map((technology) => <span key={technology} className="tech-chip">{technology}</span>)}
      </div>

      <div className="project-card__footer">
        <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
          View source <ArrowUpRight size={16} />
        </a>
        {project.live && <a href={project.live} target="_blank" rel="noreferrer"
          className="project-link project-link--muted">Live demo <ArrowUpRight size={16} /></a>}
      </div>
    </motion.article>
  );
}
