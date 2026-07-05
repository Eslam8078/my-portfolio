import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

// 1. Data Layer
const EXPERIENCE_DATA = [
  {
    title: "Frontend React Developer",
    company: "Personal & Team Projects",
    period: "2024 - Present",
    location: "Egypt",
    icon: Briefcase,
    highlights: [
      "Developed responsive web applications using React.js and JavaScript.",
      "Built reusable UI components with Tailwind CSS and Bootstrap.",
      "Integrated REST APIs and implemented responsive layouts.",
      "Worked collaboratively using Git and GitHub.",
    ],
  },
  {
    title: "Graduation Project",
    company: "Faculty of Computers & Information",
    period: "2023 - 2024",
    location: "Egypt",
    icon: Briefcase,
    highlights: [
      "Developed a Handwritten Text Recognition system.",
      "Used Python, OpenCV, and Machine Learning techniques.",
      "Performed image preprocessing and text recognition.",
    ],
  },
];

// 2. Reusable Experience Card
function ExperienceCard({ exp, index }) {
  const Icon = exp.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="
        bg-gray-50 dark:bg-slate-900
        border border-gray-200 dark:border-slate-800
        rounded-3xl p-8
        hover:border-teal-500
        hover:-translate-y-1
        hover:shadow-xl dark:hover:shadow-teal-500/10
        transition-all duration-300
      "
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <Icon className="text-teal-500" size={24} />

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {exp.title}
            </h3>
          </div>

          <p className="text-teal-500 mt-2 font-semibold">
            {exp.company}
          </p>
        </div>

        <div className="space-y-2 text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            {exp.period}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            {exp.location}
          </div>
        </div>
      </div>

      {/* Highlights */}
      <ul className="mt-6 space-y-3">
        {exp.highlights.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-slate-700 dark:text-slate-300"
          >
            <span className="text-teal-500 font-bold">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// 3. Main Component
export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-teal-500 uppercase tracking-widest font-semibold">
            Experience
          </p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-3">
            Experience & Projects
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mt-5 max-w-3xl mx-auto">
            My practical experience through academic and personal projects.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-8">
          {EXPERIENCE_DATA.map((exp, index) => (
            <ExperienceCard
              key={exp.title}
              exp={exp}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}