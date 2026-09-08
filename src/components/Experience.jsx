import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, CheckCircle2 } from "lucide-react";

const EXPERIENCE = [
  {
    role: "Web Developer",
    company: "Personal & Academic Projects",
    period: "Feb 2021 – Present",
    points: [
      "Develop full-stack web applications with React.js, Angular, Node.js, Express.js, MongoDB, and RESTful APIs.",
      "Apply responsive design, reusable component architecture, validation, authentication, and clean coding practices.",
      "Build end-to-end features including CRUD workflows, transactional orders, reporting, notifications, and admin functionality.",
      "Use Git and GitHub with structured branching, pull requests, and collaborative development workflows.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Practical experience through real builds</h2>
          <p className="section-lead">
            My experience is centered around hands-on development, from academic
            projects to full-stack applications and production-minded features.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          {EXPERIENCE.map((experience, index) => (
            <motion.article
              key={experience.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-[2rem] p-7 md:p-9"
            >
              <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 dark:border-slate-800 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-500/10 text-teal-500">
                      <BriefcaseBusiness size={23} />
                    </span>
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                        {experience.role}
                      </h3>
                      <p className="mt-1 font-semibold text-teal-600 dark:text-teal-300">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 self-start rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                  <CalendarDays size={16} />
                  {experience.period}
                </div>
              </div>

              <ul className="mt-7 grid gap-4 md:grid-cols-2">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-3 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="mt-1 shrink-0 text-teal-500" size={18} />
                    <span className="leading-7">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
