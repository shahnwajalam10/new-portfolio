import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onComplete?.(), 500);
          }, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[10001] bg-[#0a0a0a] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Animated name */}
          <motion.h1
            className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-12 flex items-center gap-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>SHAHNWAJ</span>
            <span className="text-[#CCFF00]">.</span>
          </motion.h1>

          {/* Progress bar container */}
          <div className="w-64 md:w-96 h-1 bg-white/10 rounded-full overflow-hidden border border-white/5">
            <motion.div
              className="h-full bg-[#CCFF00]"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Percentage */}
          <motion.p
            className="text-white/40 font-semibold text-sm mt-6 uppercase tracking-[0.2em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Math.min(Math.floor(progress), 100)}%
          </motion.p>

          {/* Floating elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#CCFF00]/40 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white/30 rounded-full"
            animate={{
              y: [0, 15, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
