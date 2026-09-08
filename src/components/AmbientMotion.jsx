import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function AmbientMotion() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 55, damping: 20, mass: 0.7 });
  const springY = useSpring(mouseY, { stiffness: 55, damping: 20, mass: 0.7 });
  const glowX = useTransform(springX, (value) => `${value - 180}px`);
  const glowY = useTransform(springY, (value) => `${value - 180}px`);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return undefined;

    const handlePointer = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointer);
  }, [mouseX, mouseY]);

  return (
    <div className="ambient-motion" aria-hidden="true">
      <motion.div
        className="cursor-spotlight"
        style={{ left: glowX, top: glowY }}
      />
      <motion.div
        className="ambient-ring ambient-ring--one"
        animate={{ rotate: 360, scale: [1, 1.06, 1] }}
        transition={{ rotate: { duration: 36, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="ambient-ring ambient-ring--two"
        animate={{ rotate: -360, scale: [1.04, 1, 1.04] }}
        transition={{ rotate: { duration: 48, repeat: Infinity, ease: "linear" }, scale: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="ambient-beam"
        animate={{ x: ["-20%", "120%"], opacity: [0, 0.7, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", repeatDelay: 4 }}
      />
    </div>
  );
}
