import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BASE_OPTIONS = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 45,
  particles: {
    number: { value: 45, density: { enable: true, area: 900 } },
    color: { value: ["#2563eb", "#60a5fa", "#bfdbfe"] },
    links: { enable: true, distance: 150, color: "#2563eb", opacity: 0.18, width: 1 },
    move: { enable: true, speed: 0.65, outModes: { default: "bounce" } },
    opacity: { value: 0.4 },
    size: { value: { min: 1, max: 3 } },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.45 } },
      push: { quantity: 3 },
    },
  },
  detectRetina: true,
};

export default function ParticlesBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(() => ({
    ...BASE_OPTIONS,
    particles: { ...BASE_OPTIONS.particles, number: { value: reducedMotion ? 0 : 45, density: { enable: true, area: 900 } } },
  }), [reducedMotion]);

  if (reducedMotion) return null;

  return <Particles id="particles" init={particlesInit} options={options} className="pointer-events-none fixed inset-0 z-0" />;
}
