import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

// 1. Config
const SECTION_VARIANT = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.header
          variants={SECTION_VARIANT}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-teal-500 uppercase tracking-widest font-semibold">
            Portfolio
          </p>

          <h2 className="text-4xl font-bold dark:text-white mt-3">
            Featured Projects
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mt-5 max-w-3xl mx-auto">
            Some of my academic and personal projects.
          </p>
        </motion.header>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects?.length > 0 &&
            projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
        </div>

      </div>
    </section>
  );
}