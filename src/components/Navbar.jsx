import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  ["/", "Home"],
  ["/about", "About"],
  ["/skills", "Skills"],
  ["/projects", "Projects"],
  ["/experience", "Experience"],
  ["/education", "Education"],
  ["/contact", "Contact"],
];

function navClass({ isActive }) {
  return `nav-link ${isActive ? "is-active" : ""}`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="site-header"
    >
      <div className="nav-container">
        <NavLink to="/" className="brand" onClick={close} aria-label="Eslam Ayman home">
          <span className="brand-mark"><img src="/logo.svg" alt="EA" /></span>
          <span className="brand-copy">
            <strong>Eslam Ayman</strong>
            <small>Full-Stack Developer</small>
          </span>
        </NavLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV_LINKS.map(([path, label]) => (
            <NavLink key={path} to={path} end={path === "/"} className={navClass}>
              {({ isActive }) => (
                <span className="nav-link-inner">
                  {label}
                  {isActive && <motion.span layoutId="active-nav" className="nav-active-bar" />}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <a href="/Eslam_Ayman_Resume.pdf" download className="nav-cv-button">
            <Download size={16} />
            <span>Download CV</span>
          </a>
          <button type="button" className="mobile-menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            id="mobile-navigation" className="mobile-nav"
            aria-label="Mobile navigation"
          >
            <div className="mobile-nav-inner">
              {NAV_LINKS.map(([path, label]) => (
                <NavLink key={path} to={path} end={path === "/"} className={navClass} onClick={close}>
                  {label}
                </NavLink>
              ))}
              <a href="/Eslam_Ayman_Resume.pdf" download className="mobile-cv-button" onClick={close}>
                <Download size={17} /> Download CV
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
