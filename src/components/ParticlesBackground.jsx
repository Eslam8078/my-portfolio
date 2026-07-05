import { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// 1. Extract config outside component
const PARTICLES_OPTIONS = {
  fullScreen: {
    enable: false,
  },

  background: {
    color: {
      value: "transparent",
    },
  },

  fpsLimit: 60,

  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        area: 800,
      },
    },

    color: {
      value: "#14b8a6",
    },

    links: {
      enable: true,
      distance: 150,
      color: "#14b8a6",
      opacity: 0.25,
      width: 1,
    },

    move: {
      enable: true,
      speed: 1,
      outModes: {
        default: "bounce",
      },
    },

    opacity: {
      value: 0.5,
    },

    size: {
      value: {
        min: 2,
        max: 5,
      },
    },
  },

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },

    modes: {
      grab: {
        distance: 160,
        links: {
          opacity: 0.6,
        },
      },
      push: {
        quantity: 4,
      },
    },
  },

  detectRetina: true,
};

// 2. Component
export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // 3. Memoized options (important for performance)
  const options = useMemo(() => PARTICLES_OPTIONS, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={options}
      className="fixed inset-0 -z-10"
    />
  );
}