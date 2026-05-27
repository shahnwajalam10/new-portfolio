import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Floating orbs */}
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-[#CCFF00]/4 blur-[130px] animate-float-slow" />
      <div className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#CCFF00]/3 blur-[110px] animate-float-medium" />
      <div className="absolute bottom-[10%] left-[40%] w-[350px] h-[350px] rounded-full bg-white/2 blur-[90px] animate-float-fast" />

      {/* Subtle moving gradient */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, rgba(204,255,0,0.02) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 50%, rgba(204,255,0,0.02) 0%, transparent 50%)",
            "radial-gradient(ellipse at 50% 80%, rgba(204,255,0,0.02) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 50%, rgba(204,255,0,0.02) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Scan line */}
      <motion.div
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#CCFF00]/10 to-transparent"
        animate={{ y: ["-100vh", "200vh"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
