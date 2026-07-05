import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// 1. Component
export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="
        flex flex-col h-full
        overflow-hidden
        rounded-3xl
        bg-white dark:bg-slate-950
        border border-slate-200 dark:border-slate-800
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        hover:border-teal-500
        transition-all duration-300
      "
    >
      {/* IMAGE */}
      <ProjectImage image={project.image} title={project.title} />

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-6">
        <ProjectHeader github={project.github} />

        <ProjectTitle title={project.title} />

        <ProjectDescription description={project.description} />

        <ProjectTechStack technologies={project.technologies} />

        <ProjectCTA github={project.github} />
      </div>
    </motion.article>
  );
}

/* ---------------- Components ---------------- */

function ProjectImage({ image, title }) {
  return (
    <div className="relative h-60 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="
          w-full h-full object-contain
          transition-transform duration-500
          hover:scale-105
        "
      />
    </div>
  );
}

function ProjectHeader({ github }) {
  return (
    <div className="flex items-center justify-between mb-5">
      <FolderGit2 size={30} className="text-teal-500" />

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub Repository"
        className="text-slate-700 dark:text-white hover:text-teal-500 transition-colors"
      >
        <FaGithub size={22} />
      </a>
    </div>
  );
}

function ProjectTitle({ title }) {
  return (
    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
      {title}
    </h3>
  );
}

function ProjectDescription({ description }) {
  return (
    <p className="flex-1 text-slate-600 dark:text-slate-400 leading-7">
      {description}
    </p>
  );
}

function ProjectTechStack({ technologies }) {
  return (
    <div className="flex flex-wrap gap-2 my-6">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="
            px-3 py-1 rounded-full
            bg-slate-100 dark:bg-slate-800
            text-sm text-slate-700 dark:text-slate-300
          "
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectCTA({ github }) {
  return (
    <a
      href={github}
      target="_blank"
      rel="noreferrer"
      className="
        mt-auto flex items-center justify-center gap-2
        w-full py-3 rounded-xl
        bg-teal-500 hover:bg-teal-600
        text-white font-semibold
        transition-all
      "
    >
      <FaGithub size={20} />
      View Source Code
    </a>
  );
}