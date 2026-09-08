import { motion } from "framer-motion";
import { Download, Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const CONTACT_ITEMS = [
  { icon: Mail, title: "Email", value: "eslamayman2412@gmail.com", href: "mailto:eslamayman2412@gmail.com" },
  { icon: FaLinkedin, title: "LinkedIn", value: "linkedin.com/in/eslam-ayman8078", href: "https://www.linkedin.com/in/eslam-ayman8078" },
  { icon: FaGithub, title: "GitHub", value: "github.com/Eslam8078", href: "https://github.com/Eslam8078" },
  { icon: MapPin, title: "Location", value: "Cairo, Egypt" },
];

function ContactItem({ icon: Icon, title, value, href }) {
  const content = (
    <>
      <span className="contact-icon"><Icon size={21} /></span>
      <span>
        <strong>{title}</strong>
        <small>{value}</small>
      </span>
    </>
  );

  return href ? (
    <a className="contact-item" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
      {content}
    </a>
  ) : <div className="contact-item">{content}</div>;
}

export default function Contact() {
  return (
    <section id="contact" className="section-shell section-alt">
      <div className="section-container">
        <motion.header className="section-heading" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let's build something valuable</h2>
          <p className="section-lead">Available for full-time roles, freelance opportunities, and collaborative web development projects.</p>
        </motion.header>

        <div className="contact-grid">
          <motion.div className="contact-list" initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            {CONTACT_ITEMS.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}>
                <ContactItem {...item} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="contact-cta glass-card" initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <span className="cta-badge"><span /> Open to opportunities</span>
            <h3>Have a role or project in mind?</h3>
            <p>Let's discuss the product, the technical challenges, and how I can contribute from frontend architecture through APIs and data workflows.</p>
            <div className="contact-actions">
              <a className="primary-button" href="mailto:eslamayman2412@gmail.com"><Send size={18} /> Send Email</a>
              <a className="secondary-button" href="/Eslam Ayman_Full-Stack CV.pdf" download><Download size={18} /> Download CV</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
