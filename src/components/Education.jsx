import { motion } from "framer-motion";
import { Award, BookOpen, CalendarDays, GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-shell section-alt">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="eyebrow">Education</span>
          <h2 className="section-title">Computer Science foundation</h2>
          <p className="section-lead">
            A strong academic base in software engineering, databases, algorithms,
            operating systems, and advanced web development.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="glass-card mx-auto max-w-5xl rounded-[2rem] p-7 md:p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-teal-500/10 text-teal-500">
              <GraduationCap size={32} />
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Bachelor of Computer Science
                  </h3>
                  <p className="mt-1 font-semibold text-teal-600 dark:text-teal-300">
                    Helwan University · Faculty of Computer Science & Information Systems
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                  <CalendarDays size={16} />
                  Oct 2020 – May 2024
                </span>
              </div>

              <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
                Graduated with a 3.01 / 4.00 GPA (Very Good). Relevant coursework:
                Software Engineering, Database Management Systems, Advanced Web
                Development, Data Structures & Algorithms, and Operating Systems.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-sm font-bold text-teal-600 dark:text-teal-300">
                  <Award size={16} />
                  GPA 3.01 / 4.00
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                  <BookOpen size={16} />
                  Very Good
                </span>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
