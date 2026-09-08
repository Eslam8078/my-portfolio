import { motion, useScroll, useSpring } from "framer-motion";

const SPRING_CONFIG = {
  stiffness: 120,
  damping: 25,
  restDelta: 0.001,
};

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, SPRING_CONFIG);

  return (
    <motion.div
      style={{ scaleX }}
      className="scroll-progress"
    />
  );
}
