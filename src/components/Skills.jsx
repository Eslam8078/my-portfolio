import { motion } from "framer-motion";
import {
  SiAngular,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiGit,
  SiPostman,
} from "react-icons/si";

const GROUPS = [
  {
    title: "Frontend",
    skills: [
      ["Angular", SiAngular],
      ["React.js", SiReact],
      ["TypeScript", SiTypescript],
      ["JavaScript (ES6+)", SiJavascript],
      ["HTML5", null],
      ["CSS3", null],
      ["Bootstrap", null],
      ["Tailwind CSS", null],
      ["Vite", null],
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      ["Node.js", SiNodedotjs],
      ["Express.js", SiExpress],
      ["RESTful APIs", null],
      ["MongoDB", SiMongodb],
      ["Mongoose", null],
      ["SQL Server", null],
      ["JWT & bcrypt", null],
    ],
  },
  {
    title: "Engineering",
    skills: [
      ["OOP", null],
      ["MVC Architecture", null],
      ["CRUD Operations", null],
      ["Transactions", null],
      ["Validation", null],
      ["Error Handling", null],
      ["Data Structures & Algorithms", null],
    ],
  },
  {
    title: "Tools",
    skills: [
      ["Git", SiGit],
      ["GitHub", SiGit],
      ["Docker", SiDocker],
      ["Postman", SiPostman],
      ["VS Code", null],
      ["Vercel", null],
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell section-alt">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="eyebrow">Technical Skills</span>
          <h2 className="section-title">Tools I use to ship web applications</h2>
          <p className="section-lead">
            A balanced stack covering frontend development, backend APIs, databases,
            software engineering concepts, and developer tooling.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {GROUPS.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-7"
            >
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.skills.map(([name, Icon]) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                  >
                    {Icon && <Icon className="text-teal-500" />}
                    {name}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
