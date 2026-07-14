import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

// 1. Config
const SCROLL_THRESHOLD = 300;

const BUTTON_VARIANTS = {
  hidden: { opacity: 0, scale: 0.6, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.6, y: 30 },
};

const HOVER_EFFECT = {
  scale: 1.1,
  rotate: 5,
};

const TAP_EFFECT = {
  scale: 0.9,
};

// 2. Component
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // 3. Stable handler
  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollTop}
          variants={BUTTON_VARIANTS}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover={HOVER_EFFECT}
          whileTap={TAP_EFFECT}
          transition={{ duration: 0.3 }}
          aria-label="Scroll to top"
          className="
            fixed bottom-8 right-8 z-50
            flex h-14 w-14 items-center justify-center
            rounded-full
            bg-teal-500 hover:bg-teal-400
            text-slate-900
            shadow-xl hover:shadow-2xl
            transition-all
            cursor-pointer
          "
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}