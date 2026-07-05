import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              {/* Logo */}

              <motion.h1
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-7xl font-black tracking-widest"
              >
                <span className="text-teal-400">E</span>
                <span className="text-white">slam</span>
              </motion.h1>

              {/* Subtitle */}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-5 text-slate-400 text-lg"
              >
                Frontend React Developer
              </motion.p>

              {/* Progress Bar */}

              <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden mt-10 mx-auto">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="h-full bg-gradient-to-r from-teal-400 to-cyan-500"
                />
              </div>

              {/* Loading Text */}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-5 text-slate-500 text-sm tracking-widest uppercase"
              >
                Loading Portfolio...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && children}
    </>
  );
}