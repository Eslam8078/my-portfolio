import { motion } from "framer-motion";
import { ArrowUp, Heart, Mail, MapPin, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SOCIAL_LINKS = [
  { icon: FaGithub, href: "https://github.com/Eslam8078", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/eslam-ayman8078", label: "LinkedIn" },
  { icon: Mail, href: "mailto:eslamayman2412@gmail.com", label: "Email" },
];
const NAV_LINKS = [
  ["Home", "/"],
  ["About", "/about"],
  ["Skills", "/skills"],
  ["Projects", "/projects"],
  ["Experience", "/experience"],
  ["Education", "/education"],
  ["Contact", "/contact"],
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-glow footer-glow--one" />
      <div className="footer-glow footer-glow--two" />
      <div className="section-container footer-main">
        <motion.div className="footer-brand" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="footer-kicker"><Sparkles size={14} /> Let's build something meaningful</span>
          <h2>Eslam <span>Ayman</span></h2>
          <p>Full-Stack Web Developer building scalable, responsive and user-focused web experiences.</p>
          <div className="footer-location"><MapPin size={15} /> Cairo, Egypt</div>
        </motion.div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <p className="footer-label">Navigation</p>
          {NAV_LINKS.map(([label, href]) => <NavLink key={href} to={href} end={href === "/"}>{label}</NavLink>)}
        </nav>

        <div className="footer-connect">
          <p className="footer-label">Connect</p>
          <p>Available for full-time roles, freelance work and collaborative projects.</p>
          <a className="footer-email" href="mailto:eslamayman2412@gmail.com">eslamayman2412@gmail.com</a>
          <div className="footer-socials">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined} aria-label={label}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="section-container footer-bottom__inner">
          <p>© {currentYear} Eslam Ayman. All rights reserved.</p>
          <p>Crafted with <Heart size={14} /> using React & modern web technologies.</p>
          <button type="button" className="footer-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
