import { motion, useScroll, useSpring } from "framer-motion";

// 1. Config
const SPRING_CONFIG = {
  stiffness: 120,
  damping: 25,
  restDelta: 0.001,
};

const GRADIENT_CLASS =
  "bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500";

// 2. Component
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, SPRING_CONFIG);

  return (
    <motion.div
      style={{ scaleX }}
      className={`
        fixed top-0 left-0 right-0
        z-[9999]
        h-1 origin-left
        ${GRADIENT_CLASS}
        shadow-lg shadow-cyan-500/40
      `}
    />
  );
}