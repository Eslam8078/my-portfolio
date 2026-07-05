import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

// 1. Data Layer (Separation of concerns)
const EDUCATION_ITEMS = [
  {
    icon: GraduationCap,
    title: "Bachelor of Computer Science & Information Systems",
    subtitle: "Helwan University",
    period: "Sep 2020 - Jun 2024",
    color: "teal",
    details:
      "Studied software engineering, algorithms, data structures, databases, operating systems, AI, ML, and modern web development.",
    badges: [
      { text: "GPA 3.01 / 4.00", style: "teal" },
      { text: "Grade: Very Good", style: "gray" },
    ],
  },
  {
    icon: BookOpen,
    title: "Professional Development",
    subtitle: "Continuous Learning",
    period: "Always",
    color: "cyan",
    details:
      "Continuously improving skills in React, JavaScript, Docker, REST APIs, clean code principles, and UI/UX best practices.",
  },
];

// 2. Reusable Timeline Item
function TimelineItem({
  icon: Icon,
  title,
  subtitle,
  period,
  details,
  badges,
  color = "teal",
  delay = 0,
}) {
  const colorMap = {
    teal: "teal",
    cyan: "cyan",
  };

  const activeColor = colorMap[color] || "teal";

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative ml-10 mb-12"
    >
      {/* Icon node */}
      <div
        className={`
          absolute -left-[53px] top-2
          w-8 h-8 rounded-full
          flex items-center justify-center
          bg-${activeColor}-500
        `}
      >
        <Icon size={18} className="text-white" />
      </div>

      {/* Card */}
      <div
        className="
          bg-gray-50 dark:bg-slate-900
          border border-gray-200 dark:border-slate-800
          rounded-2xl p-7
          hover:border-teal-500 dark:hover:border-teal-400
          transition-all duration-300
        "
      >
        {/* Period */}
        <div className="flex items-center gap-2 text-teal-500 mb-3">
          <Calendar size={18} />
          <span>{period}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          {subtitle}
        </p>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 leading-7">
          {details}
        </p>

        {/* Badges */}
        {badges?.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-6">
            {badges.map((badge) => (
              <span
                key={badge.text}
                className="
                  px-4 py-2 rounded-full text-sm font-medium
                  bg-gray-200 dark:bg-slate-800
                  text-slate-700 dark:text-slate-300
                "
              >
                {badge.text}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// 3. Main Component
export default function Education() {
  return (
    <section
      id="education"
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
            Education
          </p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-3">
            Academic Journey
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-3xl mx-auto leading-8">
            My academic background and continuous learning journey in Computer Science
            and modern web technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-teal-500 ml-4">
          {EDUCATION_ITEMS.map((item, index) => (
            <TimelineItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              period={item.period}
              details={item.details}
              badges={item.badges}
              color={item.color}
              delay={index * 0.2}
            />
          ))}
        </div>

      </div>
    </section>
  );
}