import { ArrowRight, Sparkles } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

function TypeWriter({ texts, speed = 80, deleteSpeed = 50, pause = 2000 }) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]
    let timeout

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setTextIndex((prev) => (prev + 1) % texts.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? current.substring(0, displayText.length - 1)
              : current.substring(0, displayText.length + 1)
          )
        },
        isDeleting ? deleteSpeed : speed
      )
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, pause])

  return (
    <span className="text-[#CCFF00]">
      {displayText}
      <span className="animate-blink text-[#CCFF00]">|</span>
    </span>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="relative pt-28 pb-24 px-6 md:px-12 overflow-hidden bg-[#0a0a0a] min-h-screen flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      {/* Large gradient blobs like AngryToast's energetic backgrounds */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#CCFF00]/5 blur-[200px] animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#CCFF00]/3 blur-[150px] animate-float-medium" />

      {/* Marquee banner - like the AngryToast scrolling banner */}
      <motion.div
        style={{ y }}
        className="absolute top-20 md:top-28 -left-10 w-[120%] -rotate-2 bg-[#CCFF00] py-3 z-0 overflow-hidden"
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-[#0a0a0a] font-black text-2xl uppercase mx-6 tracking-widest flex items-center gap-3">
              <Sparkles className="w-5 h-5" />
              AVAILABLE FOR WORK
              <span className="text-[#0a0a0a]/40">•</span>
              FULL-STACK DEVELOPER
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10 mt-24 md:mt-32 w-full"
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-[#CCFF00]/10 border border-[#CCFF00]/30 px-5 py-2 rounded-full mb-8 backdrop-blur-sm"
        >
          <div className="w-2 h-2 bg-[#CCFF00] rounded-full animate-pulse" />
          <span className="text-[#CCFF00] font-semibold text-sm uppercase tracking-widest">Open to opportunities</span>
        </motion.div>

        {/* Name - Massive typography like AngryToast */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter mb-8 uppercase"
        >
          <motion.span
            className="inline-block text-white"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            SHAHNWAJ
          </motion.span>
          <br />
          <motion.span
            className="inline-block text-[#CCFF00]"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ALAM<span className="text-white/20">.</span>
          </motion.span>
        </motion.h1>

        {/* Description block */}
        <motion.div
          variants={itemVariants}
          className="max-w-2xl mb-12"
        >
          <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed">
            I build exceptional digital experiences. Specializing in{" "}
            <TypeWriter texts={["React", "Next.js", "TypeScript", "Full-Stack"]} />
            {" "}& modern web technologies. Creating scalable applications that make a difference.
          </p>
        </motion.div>

        {/* CTA Buttons - AngryToast style rounded pills */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#CCFF00] text-[#0a0a0a] px-8 py-4 text-base font-bold uppercase rounded-full flex items-center gap-3 group relative overflow-hidden tracking-wider"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Get Resume</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent text-white px-8 py-4 text-base font-bold uppercase rounded-full border border-white/20 hover:border-[#CCFF00]/50 flex items-center gap-3 relative overflow-hidden group tracking-wider"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">View My Work</span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 font-semibold text-xs uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-[#CCFF00]/60 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}