import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

// 1. Config (Separation of concerns)
const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

// 2. Main Component
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        fixed top-0 left-0 right-0 z-50
        backdrop-blur-xl
        bg-white/80 dark:bg-slate-900/80
        border-b border-gray-200 dark:border-slate-800
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-slate-900 dark:text-white"
        >
          <span className="text-teal-500">E</span>slam
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-slate-700 dark:text-slate-300
                hover:text-teal-500
                transition
              "
            >
              {link.name}
            </a>
          ))}

          <ThemeToggle />

          <a
            href="/cv.pdf"
            download
            className="
              px-5 py-2 rounded-xl
              bg-teal-500 hover:bg-teal-400
              text-white font-semibold
              transition
            "
          >
            Resume
          </a>
        </nav>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={toggleMenu}
            className="text-slate-900 dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden
              bg-white dark:bg-slate-900
              border-t border-gray-200 dark:border-slate-800
            "
          >
            <div className="flex flex-col gap-5 px-6 py-6">

              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    text-slate-700 dark:text-slate-300
                    hover:text-teal-500
                    transition
                  "
                >
                  {link.name}
                </a>
              ))}

              <a
                href="/cv.pdf"
                download
                onClick={closeMenu}
                className="
                  mt-2 text-center py-3 rounded-xl
                  bg-teal-500 hover:bg-teal-400
                  text-white font-semibold
                  transition
                "
              >
                Download CV
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}