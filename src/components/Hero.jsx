import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Download, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// 1. Config
const NAME = "Eslam Ayman";

const ROLES = [
  "Frontend Developer",
  "React.js Developer",
  "JavaScript Enthusiast",
  "UI Developer",
];

const SOCIALS = [
  {
    icon: FaGithub,
    href: "https://github.com/Eslam8078",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/eslam-ayman8078/",
  },
  {
    icon: FaEnvelope,
    href: "mailto:eslamayman2412@gmail.com",
  },
];

// 2. Reusable Social Button
function SocialButton({ icon: Icon, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="
        w-12 h-12 rounded-full
        bg-white dark:bg-slate-900
        border border-gray-300 dark:border-slate-700
        text-slate-700 dark:text-slate-300
        flex items-center justify-center
        hover:border-teal-500 hover:text-teal-500
        transition-all duration-300
      "
    >
      <Icon size={22} />
    </a>
  );
}

// 3. Main Component
export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center justify-center
        overflow-hidden bg-white dark:bg-slate-950
        transition-colors duration-300
      "
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-teal-500 font-semibold mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight">
            {NAME.split(" ")[0]}
            <span className="text-teal-500"> {NAME.split(" ")[1]}</span>
          </h1>

          <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 h-12">
            <Typewriter
              words={ROLES}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </h2>

          <p className="mt-8 max-w-xl leading-8 text-slate-600 dark:text-slate-400">
            Computer Science graduate passionate about building modern,
            responsive and user-friendly web applications using React.js
            and modern frontend technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="
                px-7 py-3 rounded-xl
                bg-teal-500 hover:bg-teal-400
                text-white font-semibold
                transition
              "
            >
              View Projects
            </a>

            <a
              href="/cv.pdf"
              download
              className="
                px-7 py-3 rounded-xl
                border border-gray-300 dark:border-slate-700
                text-slate-900 dark:text-white
                hover:border-teal-500 hover:text-teal-500
                transition-all duration-300
                flex items-center gap-2
              "
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-5 mt-10">
            {SOCIALS.map((s) => (
              <SocialButton key={s.href} icon={s.icon} href={s.href} />
            ))}
          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-teal-500 blur-3xl opacity-30" />

            <img
              src="/profile.webp"
              alt={NAME}
              className="
                relative w-80 h-80 lg:w-96 lg:h-96
                rounded-full object-cover
                border-4 border-teal-500
                shadow-2xl
              "
            />
          </div>
        </motion.div>

      </div>

      {/* Scroll */}
      <motion.a
        href="#about"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-teal-500"
      >
        <ArrowDown size={30} />
      </motion.a>
    </section>
  );
}