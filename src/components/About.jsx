import { motion } from "framer-motion";
import { User, GraduationCap, Code2, Target } from "lucide-react";

// 1. Extract data خارج الكومبوننت
const ABOUT_CARDS = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Bachelor's Degree in Computer Science & Information Systems, Helwan University.",
  },
  {
    icon: Code2,
    title: "Frontend",
    desc: "Building responsive React applications with modern JavaScript and Tailwind CSS.",
  },
  {
    icon: Target,
    title: "Goal",
    desc: "Looking for a Frontend Developer opportunity to build impactful products.",
  },
];

// 2. Card Component منفصل
function AboutCard({ icon: Icon, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="
        rounded-2xl p-8
        transition-all duration-300
        hover:-translate-y-2
        bg-white dark:bg-slate-800
        border border-slate-200 dark:border-slate-700
        hover:border-teal-500 dark:hover:border-teal-400
        shadow-sm dark:shadow-none
      "
    >
      <div className="mb-5 text-teal-500 dark:text-teal-400">
        <Icon size={28} />
      </div>

      <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="leading-7 text-slate-600 dark:text-slate-400">
        {desc}
      </p>
    </motion.div>
  );
}

// 3. Main Component
export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
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
          <p className="text-teal-500 dark:text-teal-400 font-semibold mb-2 uppercase tracking-wider">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Who I Am
          </h2>

          <div className="flex justify-center mb-6">
            <User size={50} className="text-teal-500 dark:text-teal-400" />
          </div>

          <p className="max-w-3xl mx-auto text-lg leading-8 text-slate-600 dark:text-slate-400">
            I'm <span className="font-semibold text-slate-900 dark:text-white">Eslam Ayman</span>,
            a Frontend React Developer passionate about creating modern,
            responsive and user-friendly web applications.
            <br /><br />
            I enjoy transforming ideas into interactive digital experiences,
            writing clean code, solving problems, and continuously improving my skills.
            <br /><br />
            I'm currently seeking an opportunity where I can contribute, learn,
            and grow professionally.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {ABOUT_CARDS.map((card, index) => (
            <AboutCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}