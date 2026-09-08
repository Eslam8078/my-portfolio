import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ROLES = [
  "Full-Stack Web Developer",
  "MERN & MEAN Stack Developer",
  "Angular & React.js Developer",
];

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/Eslam8078", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/eslam-ayman8078/", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:eslamayman2412@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-transparent pt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[5%] top-[15%] h-72 w-72 rounded-full bg-teal-400/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[5%] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.25fr_.75fr]">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-2 text-sm font-semibold text-teal-600 dark:text-teal-300">
            <Sparkles size={16} />
            Open to opportunities
          </div>

          <p className="mb-4 font-semibold tracking-wide text-teal-600 dark:text-teal-300">
            Hello, I'm
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[.95] tracking-[-.055em] text-slate-950 dark:text-white sm:text-6xl lg:text-8xl">
            Eslam <span className="text-teal-500">Ayman</span>
          </h1>

          <div className="mt-7 min-h-12 text-xl font-bold text-slate-600 dark:text-slate-300 sm:text-2xl">
            <Typewriter
              words={ROLES}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={65}
              deleteSpeed={35}
              delaySpeed={1600}
            />
          </div>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Computer Science graduate focused on building responsive, maintainable
            web applications with Angular, React.js, Node.js, Express.js, and MongoDB.
            I enjoy turning product requirements into reliable end-to-end experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-xl bg-teal-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-teal-600/20 transition hover:-translate-y-1 hover:bg-teal-500"
            >
              Explore Projects
            </Link>
            <a
              href="/Eslam Ayman_Full-Stack CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3.5 font-bold text-slate-800 backdrop-blur transition hover:-translate-y-1 hover:border-teal-500 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white/70 text-slate-600 backdrop-blur transition hover:-translate-y-1 hover:border-teal-500 hover:text-teal-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.78, y: 35, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="hero-photo-wrap"
        >
          <motion.div className="hero-photo-orbit hero-photo-orbit--one" animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
          <motion.div className="hero-photo-orbit hero-photo-orbit--two" animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }} />
          <motion.span className="hero-photo-dot hero-photo-dot--one"
            animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} />
          <motion.span className="hero-photo-dot hero-photo-dot--two"
            animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />

          <motion.div whileHover={{ rotateY: 5, rotateX: -5, scale: 1.025 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }} className="hero-photo-card">
            <div className="hero-photo-glow" />
            <img src="/profile.png" alt="Eslam Ayman" className="hero-photo" />
            <div className="hero-photo-shine" />
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="/about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-teal-500"
        aria-label="Scroll to about"
      >
        <ArrowDown size={25} />
      </motion.a>
    </section>
  );
}
