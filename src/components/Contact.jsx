import { motion } from "framer-motion";
import { Mail, MapPin, Send, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// 1. Data layer (DRY principle)
const CONTACT_ITEMS = [
  {
    icon: Mail,
    title: "Email",
    value: "eslamayman2412@gmail.com",
    href: "mailto:eslamayman2412@gmail.com",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/eslam-ayman-0b550527b",
    href: "https://linkedin.com/in/eslam-ayman-0b550527b",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/Eslam8078",
    href: "https://github.com/Eslam8078",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Cairo, Egypt",
  },
];

// 2. Reusable Contact Item Component
function ContactItem({ icon: Icon, title, value, href }) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      className="
        flex items-center gap-5
        bg-white dark:bg-slate-950
        border border-gray-200 dark:border-slate-800
        rounded-2xl p-5
        hover:border-teal-500
        transition-all
      "
    >
      <Icon className="text-teal-500" size={28} />

      <div>
        <h3 className="text-slate-900 dark:text-white font-semibold">
          {title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 hover:text-teal-500 transition">
          {value}
        </p>
      </div>
    </Wrapper>
  );
}

// 3. Main Component
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-100 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal-500 uppercase tracking-widest font-semibold">
            Contact
          </p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-3">
            Let's Work Together
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto leading-8">
            I'm currently looking for Frontend Developer opportunities.
            Feel free to contact me for jobs, freelance work, or collaboration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {CONTACT_ITEMS.map((item) => (
              <ContactItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                value={item.value}
                href={item.href}
              />
            ))}
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to collaborate?
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-8 mb-8">
                Whether you're hiring or building a product, I’d love to contribute.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">

                <a
                  href="mailto:eslamayman2412@gmail.com"
                  className="
                    flex-1 flex justify-center items-center gap-2
                    py-4 rounded-xl
                    bg-teal-500 hover:bg-teal-400
                    text-white font-bold
                    transition
                  "
                >
                  <Send size={20} />
                  Send Email
                </a>

                <a
                  href="/cv.pdf"
                  download
                  className="
                    flex-1 flex justify-center items-center gap-2
                    py-4 rounded-xl
                    border border-gray-300 dark:border-slate-700
                    text-slate-900 dark:text-white
                    hover:border-teal-500 hover:text-teal-500
                    transition-all
                  "
                >
                  <Download size={20} />
                  Download CV
                </a>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}