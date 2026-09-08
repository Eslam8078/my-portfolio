import { motion } from "framer-motion";
import { Code2, Database, ShieldCheck } from "lucide-react";

const CARDS = [
  {
    icon: Code2,
    title: "Frontend Architecture",
    text: "Reusable Angular and React components, responsive layouts, modern CSS, and interaction-focused UI.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    text: "RESTful APIs with Node.js and Express.js, MongoDB/Mongoose data modeling, CRUD workflows, and transactions.",
  },
  {
    icon: ShieldCheck,
    title: "Production Mindset",
    text: "Authentication, authorization, validation, error handling, security practices, and maintainable project structure.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="eyebrow">About Me</span>
          <h2 className="section-title">A developer who thinks end-to-end</h2>
          <p className="section-lead">
            I'm Eslam Ayman, a Computer Science graduate and Full-Stack Web Developer
            with a focus on MERN and MEAN technologies. I build practical web
            applications from interface architecture through APIs, databases,
            authentication, and business workflows.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {CARDS.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -7 }}
              className="glass-card rounded-3xl p-7"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl icon-tile">
                <Icon size={25} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                {text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
