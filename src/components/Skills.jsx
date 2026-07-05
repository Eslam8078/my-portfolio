import { motion } from "framer-motion";

// 1. Config (separation of concerns)
const SKILLS = [
  { name: "React.js", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 92 },
  { name: "Bootstrap", level: 90 },
  { name: "Node.js", level: 70 },
  { name: "Docker", level: 65 },
  { name: "Git", level: 85 },
  { name: "GitHub", level: 90 },
  { name: "Python", level: 75 },
];

// 2. Animation variants (cleaner than inline objects)
const CARD_VARIANTS = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -50 : 50,
  }),
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal-500 font-semibold uppercase tracking-widest">
            Technical Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
            My Skills
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Technologies and tools I use to build modern web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 3. Extracted reusable component
function SkillCard({ skill, index }) {
  return (
    <motion.div
      custom={index}
      variants={CARD_VARIANTS}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="
        rounded-2xl
        border border-slate-200 dark:border-slate-800
        bg-white dark:bg-slate-900
        p-6 shadow-sm
        hover:border-teal-400 hover:shadow-lg
        transition-all duration-300
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-900 dark:text-white">
          {skill.name}
        </h3>

        <span className="font-semibold text-teal-500">
          {skill.level}%
        </span>
      </div>

      {/* Progress */}
      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="
            h-full rounded-full
            bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500
          "
        />
      </div>
    </motion.div>
  );
}