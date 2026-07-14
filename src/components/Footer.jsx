import { Heart, Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// 1. Social links data (DRY principle)
const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    href: "https://github.com/Eslam8078",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/eslam-ayman8078",
  },
  {
    icon: Mail,
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
        w-11 h-11 rounded-full
        bg-gray-100 dark:bg-slate-900
        border border-gray-300 dark:border-slate-700
        text-slate-700 dark:text-slate-300
        flex items-center justify-center
        hover:border-teal-500 hover:text-teal-500
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      <Icon size={20} />
    </a>
  );
}

// 3. Main Component
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Eslam <span className="text-teal-500">Ayman</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-md leading-7">
              Frontend React Developer passionate about building modern,
              responsive and user-friendly web applications.
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-5">
            {SOCIAL_LINKS.map((item) => (
              <SocialButton
                key={item.href}
                icon={item.icon}
                href={item.href}
              />
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="
              flex items-center gap-2 px-5 py-3
              rounded-xl bg-teal-500 hover:bg-teal-400
              text-white font-semibold
              shadow-lg hover:shadow-xl
              transition-all duration-300
              cursor-pointer
            "
          >
            <ArrowUp size={18} />
            Back to Top
          </button>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {currentYear} Eslam Ayman. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
            Built with
            <Heart size={16} className="text-red-500 fill-red-500" />
            using React & Tailwind CSS
          </p>

        </div>
      </div>

    </footer>
  );
}