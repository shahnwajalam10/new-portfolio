// import { ArrowRight, Sparkles } from "lucide-react"
// import { motion, useScroll, useTransform } from "framer-motion"
// import { useRef, useEffect, useState } from "react"

// function TypeWriter({ texts, speed = 80, deleteSpeed = 50, pause = 2000 }) {
//   const [displayText, setDisplayText] = useState("")
//   const [textIndex, setTextIndex] = useState(0)
//   const [isDeleting, setIsDeleting] = useState(false)

//   useEffect(() => {
//     const current = texts[textIndex]
//     let timeout

//     if (!isDeleting && displayText === current) {
//       timeout = setTimeout(() => setIsDeleting(true), pause)
//     } else if (isDeleting && displayText === "") {
//       setIsDeleting(false)
//       setTextIndex((prev) => (prev + 1) % texts.length)
//     } else {
//       timeout = setTimeout(
//         () => {
//           setDisplayText(
//             isDeleting
//               ? current.substring(0, displayText.length - 1)
//               : current.substring(0, displayText.length + 1)
//           )
//         },
//         isDeleting ? deleteSpeed : speed
//       )
//     }

//     return () => clearTimeout(timeout)
//   }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, pause])

//   return (
//     <span className="text-[#CCFF00]">
//       {displayText}
//       <span className="animate-blink text-[#CCFF00]">|</span>
//     </span>
//   )
// }

// export default function Hero() {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"]
//   })
//   const y = useTransform(scrollYProgress, [0, 1], [0, 200])
//   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.12,
//         delayChildren: 0.3,
//       }
//     }
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
//     }
//   }

//   return (
//     <motion.section
//       ref={ref}
//       style={{ opacity }}
//       className="relative pt-28 pb-24 px-6 md:px-12 overflow-hidden bg-[#0a0a0a] min-h-screen flex items-center"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
//       {/* Large gradient blobs like AngryToast's energetic backgrounds */}
//       <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#CCFF00]/5 blur-[200px] animate-float-slow" />
//       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#CCFF00]/3 blur-[150px] animate-float-medium" />

//       {/* Marquee banner - like the AngryToast scrolling banner */}
//       <motion.div
//         style={{ y }}
//         className="absolute top-20 md:top-28 -left-10 w-[120%] -rotate-2 bg-[#CCFF00] py-3 z-0 overflow-hidden"
//       >
//         <div className="flex whitespace-nowrap animate-marquee">
//           {[...Array(12)].map((_, i) => (
//             <span key={i} className="text-[#0a0a0a] font-black text-2xl uppercase mx-6 tracking-widest flex items-center gap-3">
//               <Sparkles className="w-5 h-5" />
//               AVAILABLE FOR WORK
//               <span className="text-[#0a0a0a]/40">•</span>
//               FULL-STACK DEVELOPER
//             </span>
//           ))}
//         </div>
//       </motion.div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="max-w-7xl mx-auto relative z-10 mt-24 md:mt-32 w-full"
//       >
//         {/* Status Badge */}
//         <motion.div
//           variants={itemVariants}
//           className="inline-flex items-center gap-2 bg-[#CCFF00]/10 border border-[#CCFF00]/30 px-5 py-2 rounded-full mb-8 backdrop-blur-sm"
//         >
//           <div className="w-2 h-2 bg-[#CCFF00] rounded-full animate-pulse" />
//           <span className="text-[#CCFF00] font-semibold text-sm uppercase tracking-widest">Open to opportunities</span>
//         </motion.div>

//         {/* Name - Massive typography like AngryToast */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter mb-8 uppercase"
//         >
//           <motion.span
//             className="inline-block text-white"
//             whileHover={{ x: 10 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             SHAHNWAJ
//           </motion.span>
//           <br />
//           <motion.span
//             className="inline-block text-[#CCFF00]"
//             whileHover={{ x: 10 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             ALAM<span className="text-white/20">.</span>
//           </motion.span>
//         </motion.h1>

//         {/* Description block */}
//         <motion.div
//           variants={itemVariants}
//           className="max-w-2xl mb-12"
//         >
//           <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed">
//             I build exceptional digital experiences. Specializing in{" "}
//             <TypeWriter texts={["React", "Next.js", "TypeScript", "Full-Stack"]} />
//             {" "}& modern web technologies. Creating scalable applications that make a difference.
//           </p>
//         </motion.div>

//         {/* CTA Buttons - AngryToast style rounded pills */}
//         <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
//           <motion.button
//             whileHover={{ scale: 1.05, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-[#CCFF00] text-[#0a0a0a] px-8 py-4 text-base font-bold uppercase rounded-full flex items-center gap-3 group relative overflow-hidden tracking-wider"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//             <span className="relative z-10">Get Resume</span>
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
//           </motion.button>

//           <motion.button
//             whileHover={{ scale: 1.05, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-transparent text-white px-8 py-4 text-base font-bold uppercase rounded-full border border-white/20 hover:border-[#CCFF00]/50 flex items-center gap-3 relative overflow-hidden group tracking-wider"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//             <span className="relative z-10">View My Work</span>
//           </motion.button>
//         </motion.div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2 }}
//           className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//         >
//           <span className="text-white/30 font-semibold text-xs uppercase tracking-[0.3em]">Scroll</span>
//           <motion.div
//             animate={{ y: [0, 8, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
//           >
//             <div className="w-1 h-2 bg-[#CCFF00]/60 rounded-full" />
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </motion.section>
//   )
// }
















import { useEffect, useRef, useState } from "react"

function TypeWriter({ words = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Full-Stack'] }) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    let timer

    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex(i => (i + 1) % words.length)
    } else {
      timer = setTimeout(() => {
        setText(deleting
          ? word.substring(0, text.length - 1)
          : word.substring(0, text.length + 1)
        )
      }, deleting ? 48 : 85)
    }
    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words])

  return (
    <span className="typed-word">
      {text}
      <span className="cursor-blink">|</span>
    </span>
  )
}

function ParticleCanvas({ mousePos }) {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    particlesRef.current = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const { x: mx, y: my } = mousePos.current

      particlesRef.current.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const dx = p.x - mx, dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mx, my)
          ctx.strokeStyle = `rgba(204,255,0,${0.08 * (1 - dist / 120)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(204,255,0,${p.alpha})`
        ctx.fill()
      })
      rafRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [mousePos])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        zIndex: 0, opacity: 0.5,
        pointerEvents: 'none',
      }}
    />
  )
}

function CountUp({ target, suffix = '+', duration = 1200 }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let current = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setVal(Math.round(current))
      if (current >= target) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])
  return <>{val}{suffix}</>
}

export default function Hero() {
  const rootRef   = useRef(null)
  const mousePos  = useRef({ x: 200, y: 200 })
  const ringPos   = useRef({ x: 200, y: 200 })
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)
  const rafRef    = useRef(null)
  const [counter, setCounter] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)

  // Cursor tracking
  useEffect(() => {
    const root = rootRef.current

    const onMove = e => {
      const r = root.getBoundingClientRect()
      mousePos.current = { x: e.clientX - r.left, y: e.clientY - r.top }
      if (cursorRef.current) {
        cursorRef.current.style.left = mousePos.current.x + 'px'
        cursorRef.current.style.top  = mousePos.current.y + 'px'
      }
    }
    root.addEventListener('mousemove', onMove)

    const animRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px'
        ringRef.current.style.top  = ringPos.current.y + 'px'
      }
      rafRef.current = requestAnimationFrame(animRing)
    }
    animRing()

    return () => {
      root.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Corner counter
  useEffect(() => {
    const t = setInterval(() => setCounter(c => (c + 1) % 1000), 80)
    return () => clearInterval(t)
  }, [])

  // Trigger stat count-up
  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const marqueeItems = [
    'Available for Work', '✦', 'Full-Stack Developer', '✦',
    'Open to Opportunities', '✦', 'React · Next.js · TypeScript', '✦',
    'Available for Work', '✦', 'Full-Stack Developer', '✦',
    'Open to Opportunities', '✦', 'React · Next.js · TypeScript', '✦',
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;700;800&display=swap');

        :root {
          --lime: #CCFF00;
          --bg:   #050505;
          --white: #F5F5F0;
        }

        .hero-root {
          background: var(--bg);
          min-height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
          font-family: 'Space Grotesk', sans-serif;
          cursor: none;
        }
        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(204,255,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(204,255,0,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
        }

        /* Cursor */
        .hero-cursor {
          position: absolute;
          width: 12px; height: 12px;
          background: var(--lime);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          mix-blend-mode: difference;
        }
        .hero-cursor-ring {
          position: absolute;
          width: 36px; height: 36px;
          border: 1px solid var(--lime);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          opacity: 0.4;
        }

        /* Scanline */
        .hero-scanline {
          position: absolute;
          left: 0; width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(204,255,0,0.15), transparent);
          z-index: 1;
          animation: heroScan 4s linear infinite;
        }
        @keyframes heroScan {
          0%   { top: -2px; }
          100% { top: 100%; }
        }

        /* Marquee */
        .hero-marquee-wrap {
          position: absolute;
          top: 52px; left: -10px;
          width: 115%;
          transform: rotate(-1.5deg);
          background: var(--lime);
          padding: 10px 0;
          z-index: 2;
          overflow: hidden;
          white-space: nowrap;
        }
        .hero-marquee-inner {
          display: inline-flex;
          animation: heroMarquee 18s linear infinite;
        }
        @keyframes heroMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hero-marquee-item {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 14px;
          color: #050505;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          padding: 0 24px;
        }

        /* Content */
        .hero-content {
          position: relative;
          z-index: 3;
          padding: 160px 40px 60px;
          max-width: 900px;
          width: 100%;
        }

        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(204,255,0,0.08);
          border: 1px solid rgba(204,255,0,0.25);
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 32px;
          animation: heroFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both;
        }
        .hero-badge-dot {
          width: 7px; height: 7px;
          background: var(--lime);
          border-radius: 50%;
          animation: heroPulse 2s ease infinite;
        }
        @keyframes heroPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(204,255,0,0.6); }
          50%      { box-shadow: 0 0 0 6px rgba(204,255,0,0); }
        }
        .hero-badge span {
          color: var(--lime);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        /* Name */
        .hero-name-block {
          margin-bottom: 28px;
          max-width: 100%;
          animation: heroFadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s both;
        }
        .hero-name-line {
          font-family: 'Syne', sans-serif;
          font-size: clamp(40px, 12vw, 120px);
          font-weight: 800;
          line-height: 0.88;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          display: block;
          max-width: 100%;
        }
        .hero-name-white { color: var(--white); }
        .hero-name-lime  { color: var(--lime);  }
        .hero-name-white:hover,
        .hero-name-lime:hover { animation: heroGlitch 0.4s steps(2) both; }
        @keyframes heroGlitch {
          0%   { text-shadow: 2px 0 #CCFF00, -2px 0 #ff003c; clip-path: inset(10% 0 80% 0); }
          25%  { text-shadow: -2px 0 #CCFF00, 2px 0 #ff003c; clip-path: inset(50% 0 30% 0); }
          50%  { text-shadow: 2px 2px #CCFF00, -2px -2px #ff003c; clip-path: inset(80% 0 5% 0); }
          75%  { text-shadow: -1px 0 #CCFF00, 1px 0 #ff003c; clip-path: none; }
          100% { text-shadow: none; clip-path: none; }
        }

        /* Desc */
        .hero-desc {
          max-width: 520px;
          font-size: 17px;
          line-height: 1.65;
          color: rgba(245,245,240,0.52);
          margin-bottom: 40px;
          font-weight: 400;
          animation: heroFadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s both;
        }
        .typed-word    { color: var(--lime); font-weight: 600; }
        .cursor-blink  { color: var(--lime); animation: heroBlink 1s step-end infinite; }
        @keyframes heroBlink { 0%,100% { opacity:1; } 50% { opacity:0; } }

        /* CTAs */
        .hero-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          animation: heroFadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.65s both;
        }
        .hero-btn-primary,
        .hero-btn-ghost {
          padding: 14px 28px;
          border-radius: 100px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: none;
          cursor: none;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .hero-btn-primary {
          background: var(--lime);
          color: #050505;
        }
        .hero-btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 0 30px rgba(204,255,0,0.35), 0 0 60px rgba(204,255,0,0.1);
        }
        .hero-btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }
        .hero-btn-primary:hover::after { transform: translateX(100%); }
        .hero-btn-ghost {
          background: transparent;
          color: var(--white);
          border: 1px solid rgba(245,245,240,0.18);
        }
        .hero-btn-ghost:hover {
          transform: translateY(-3px) scale(1.02);
          border-color: rgba(204,255,0,0.4);
          box-shadow: 0 0 20px rgba(204,255,0,0.08);
        }
        .hero-btn-arrow { transition: transform 0.2s; }
        .hero-btn-primary:hover .hero-btn-arrow,
        .hero-btn-ghost:hover .hero-btn-arrow { transform: translateX(4px); }

        /* Stats */
        .hero-stats {
          position: absolute;
          right: 40px; bottom: 60px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 3;
          animation: heroFadeLeft 0.9s cubic-bezier(0.16,1,0.3,1) 0.8s both;
        }
        .hero-stat-item {
          text-align: right;
          border-right: 2px solid rgba(204,255,0,0.3);
          padding-right: 16px;
        }
        .hero-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: var(--lime);
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 11px;
          color: rgba(245,245,240,0.38);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* Scroll cue */
        .hero-scroll-cue {
          position: absolute;
          bottom: 28px; left: 40px;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 3;
          opacity: 0;
          animation: heroFadeIn 1s ease 2s forwards;
        }
        .hero-scroll-track {
          width: 1px; height: 50px;
          background: rgba(245,245,240,0.12);
          position: relative;
          overflow: hidden;
        }
        .hero-scroll-fill {
          position: absolute;
          top: 0; left: 0; width: 1px;
          background: var(--lime);
          animation: heroScrollFill 1.8s ease-in-out infinite;
        }
        @keyframes heroScrollFill {
          0%   { height: 0;    top: 0; }
          50%  { height: 50px; top: 0; }
          100% { height: 0;    top: 50px; }
        }
        .hero-scroll-text {
          font-size: 10px;
          letter-spacing: 0.25em;
          color: rgba(245,245,240,0.3);
          text-transform: uppercase;
          writing-mode: vertical-rl;
        }

        /* Corner */
        .hero-corner {
          position: absolute;
          top: 18px; right: 40px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: heroFadeIn 1s ease 1s both;
        }
        .hero-corner span {
          font-family: monospace;
          font-size: 10px;
          color: rgba(204,255,0,0.5);
          letter-spacing: 0.15em;
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeLeft {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @media (max-width: 768px) {
          .hero-root {
            cursor: auto !important;
          }
          .hero-cursor, .hero-cursor-ring {
            display: none !important;
          }
          .hero-content {
            padding: 116px 20px 56px !important;
          }
          .hero-name-line {
            font-size: clamp(26px, 8.2vw, 52px) !important;
            line-height: 0.94 !important;
            letter-spacing: -0.008em !important;
            white-space: nowrap !important;
            overflow-wrap: normal !important;
            word-break: keep-all !important;
          }
          .hero-name-white {
            font-size: clamp(24px, 7.6vw, 44px) !important;
          }
          .hero-scroll-cue {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .hero-content {
            padding: 96px 14px 40px !important;
          }
          .hero-name-line {
            font-size: clamp(22px, 7.2vw, 34px) !important;
          }
          .hero-name-white {
            font-size: clamp(20px, 6.6vw, 30px) !important;
          }
          .hero-name-block {
            margin-bottom: 22px !important;
          }
          .hero-ctas {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-btn-primary, .hero-btn-ghost {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 390px) {
          .hero-content {
            padding: 92px 12px 36px !important;
          }
          .hero-name-line {
            font-size: clamp(20px, 6.6vw, 28px) !important;
            line-height: 0.96 !important;
          }
          .hero-name-white {
            font-size: clamp(18px, 6vw, 24px) !important;
          }
        }
      `}</style>

      <section ref={rootRef} className="hero-root">
        {/* Custom cursor */}
        <div ref={cursorRef} className="hero-cursor" />
        <div ref={ringRef}   className="hero-cursor-ring" />

        {/* Scanline */}
        <div className="hero-scanline" />

        {/* Particles */}
        <ParticleCanvas mousePos={mousePos} />

        {/* Marquee */}
        {/* <div className="hero-marquee-wrap">
          <div className="hero-marquee-inner">
            {marqueeItems.map((item, i) => (
              <span key={i} className="hero-marquee-item">{item}</span>
            ))}
          </div>
        </div> */}

        {/* Corner counter */}
        {/* <div className="hero-corner">
          <span style={{ color: 'rgba(204,255,0,0.3)' }}>
            {String(counter).padStart(3, '0')}
          </span>
          <span>// PORTFOLIO_v2.4</span>
        </div> */}

        {/* Main content */}
        <div className="hero-content">
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            <span>Open to opportunities</span>
          </div>

          <div className="hero-name-block">
            <span className="hero-name-line hero-name-white">SHAHNAWAZ</span>
            <span className="hero-name-line hero-name-lime">
              ALAM<span style={{ color: '#FF4D00' }}>.</span>
            </span>
          </div>

          <p className="hero-desc">
            Building exceptional digital experiences. Specializing in{' '}
            <TypeWriter />
            {' '}& modern web technologies — crafting scalable applications that actually matter.
          </p>

          <div className="hero-ctas">
            <button className="hero-btn-primary">
              Get Resume <span className="hero-btn-arrow">→</span>
            </button>
            <button className="hero-btn-ghost">
              View My Work <span className="hero-btn-arrow">→</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="hero-stats">
          <div className="hero-stat-item">
            <div className="hero-stat-num">
              {statsVisible ? <CountUp target={42} /> : '0+'}
            </div>
            <div className="hero-stat-label">Projects Shipped</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-num">
              {statsVisible ? <CountUp target={4} duration={800} /> : '0+'}
            </div>
            <div className="hero-stat-label">Years Experience</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-num">
              {statsVisible ? <CountUp target={18} duration={1000} /> : '0+'}
            </div>
            <div className="hero-stat-label">Happy Clients</div>
          </div>
        </div> */}

        {/* Scroll cue */}
        <div className="hero-scroll-cue">
          <div className="hero-scroll-track">
            <div className="hero-scroll-fill" />
          </div>
          <div className="hero-scroll-text">Scroll</div>
        </div>
      </section>
    </>
  )
}