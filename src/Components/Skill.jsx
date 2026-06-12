// import { Zap, Code2, Server, Database, Wrench } from "lucide-react"
// import { motion, useInView } from "framer-motion"
// import { useRef } from "react"

// export default function Skill() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const skillGroups = [
//     {
//       category: "Frontend",
//       icon: <Code2 className="w-7 h-7" />,
//       color: "#CCFF00",
//       skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
//     },
//     {
//       category: "Backend",
//       icon: <Server className="w-7 h-7" />,
//       color: "#00D4FF",
//       skills: ["Node.js", "Express", "RESTful APIs", "GraphQL", "JWT", "Socket.io"],
//     },
//     {
//       category: "Database",
//       icon: <Database className="w-7 h-7" />,
//       color: "#FF6B6B",
//       skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
//     },
//     {
//       category: "DevOps & Tools",
//       icon: <Wrench className="w-7 h-7" />,
//       color: "#C084FC",
//       skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Vite", "Linux"],
//     }
//   ]

//   return (
//     <section ref={ref} className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-30" />
//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#CCFF00]/5 blur-[200px] animate-float-slow" />

//       <div className="max-w-7xl mx-auto relative z-10">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//           className="mb-20"
//         >
//           <p className="text-[#CCFF00] font-semibold uppercase tracking-[0.3em] text-sm mb-4">Capabilities</p>
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-10 border-b border-white/10">
//             <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
//               <span className="text-white">TECH</span>
//               <br />
//               <span className="text-[#CCFF00]">STACK<span className="text-white/20">.</span></span>
//             </h2>

//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center gap-3 bg-[#CCFF00]/10 border border-[#CCFF00]/20 px-6 py-3 rounded-full"
//             >
//               <motion.div
//                 animate={{ rotate: [0, 360] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//               >
//                 <Zap className="w-5 h-5 text-[#CCFF00]" />
//               </motion.div>
//               <span className="font-bold text-sm uppercase tracking-wider text-[#CCFF00]">Powered By</span>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Skill Groups - Card grid like AngryToast's category cards */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {skillGroups.map((group, idx) => (
//             <motion.div
//               key={group.category}
//               initial={{ opacity: 0, y: 60 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
//             >
//               <motion.div
//                 whileHover={{ y: -6 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="bg-[#141414] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden group h-full"
//               >
//                 {/* Accent glow on hover */}
//                 <div 
//                   className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"
//                   style={{ backgroundColor: group.color }}
//                 />

//                 <div className="flex items-center gap-4 mb-8 relative z-10">
//                   <div 
//                     className="w-12 h-12 rounded-2xl flex items-center justify-center"
//                     style={{ backgroundColor: `${group.color}15`, color: group.color }}
//                   >
//                     {group.icon}
//                   </div>
//                   <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-white">
//                     {group.category}
//                   </h3>
//                 </div>

//                 <div className="flex flex-wrap gap-2 relative z-10">
//                   {group.skills.map((skill, skillIdx) => (
//                     <motion.div
//                       key={skill}
//                       initial={{ opacity: 0, scale: 0.5, y: 20 }}
//                       animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
//                       transition={{ delay: 0.3 + skillIdx * 0.06, duration: 0.4, type: "spring", stiffness: 200 }}
//                       whileHover={{ 
//                         scale: 1.08, 
//                         y: -3,
//                         borderColor: group.color,
//                         color: group.color,
//                         backgroundColor: `${group.color}15`
//                       }}
//                       className="border border-white/10 px-5 py-2.5 rounded-full font-semibold text-sm text-white/60 bg-white/5 transition-all duration-200 cursor-default"
//                     >
//                       {skill}
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }













// import { useEffect, useRef, useState, useCallback } from "react"
// import { Zap, Code2, Server, Database, Wrench, Terminal } from "lucide-react"
// import { motion, useInView, useSpring, useMotionValue } from "framer-motion"

// export default function Skill() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })
  
//   // Stats counter state
//   const [stats, setStats] = useState({ projects: 0, contributions: 0, years: 0 })
//   const [terminalCode, setTerminalCode] = useState("000")
  
//   // Magnetic cursor refs
//   const cursorDotRef = useRef(null)
//   const cursorRingRef = useRef(null)
//   const canvasRef = useRef(null)
  
//   // Mouse position for particle field
//   const mousePos = useMotionValue({ x: 0, y: 0 })
  
//   // Spring animations for cursor
//   const springDot = {
//     damping: 25,
//     stiffness: 700,
//     mass: 0.3
//   }
  
//   const springRing = {
//     damping: 20,
//     stiffness: 300,
//     mass: 0.8
//   }
  
//   const dotX = useSpring(useMotionValue(0), springDot)
//   const dotY = useSpring(useMotionValue(0), springDot)
//   const ringX = useSpring(useMotionValue(0), springRing)
//   const ringY = useSpring(useMotionValue(0), springRing)

//   // Particle class (defined as a constructor function instead of class)
//   const createParticle = (width, height) => {
//     return {
//       x: Math.random() * width,
//       y: Math.random() * height,
//       vx: (Math.random() - 0.5) * 0.5,
//       vy: (Math.random() - 0.5) * 0.5,
//       size: Math.random() * 2 + 1,
//       alpha: Math.random() * 0.3 + 0.1,
//       update: function(width, height, mouseX, mouseY) {
//         this.x += this.vx
//         this.y += this.vy
        
//         if (this.x < 0) { this.x = 0; this.vx *= -1 }
//         if (this.x > width) { this.x = width; this.vx *= -1 }
//         if (this.y < 0) { this.y = 0; this.vy *= -1 }
//         if (this.y > height) { this.y = height; this.vy *= -1 }
        
//         if (mouseX && mouseY) {
//           const dx = mouseX - this.x
//           const dy = mouseY - this.y
//           const dist = Math.sqrt(dx * dx + dy * dy)
//           if (dist < 150) {
//             const force = (150 - dist) / 150 * 0.02
//             this.vx += dx * force * 0.02
//             this.vy += dy * force * 0.02
//             const maxSpeed = 3
//             if (Math.abs(this.vx) > maxSpeed) this.vx = this.vx > 0 ? maxSpeed : -maxSpeed
//             if (Math.abs(this.vy) > maxSpeed) this.vy = this.vy > 0 ? maxSpeed : -maxSpeed
//           }
//         }
//       },
//       draw: function(ctx) {
//         ctx.beginPath()
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
//         ctx.fillStyle = `rgba(204, 255, 0, ${this.alpha})`
//         ctx.fill()
//       }
//     }
//   }

//   // Particle system
//   useEffect(() => {
//     if (!canvasRef.current) return
//     const canvas = canvasRef.current
//     const ctx = canvas.getContext('2d')
//     if (!ctx) return
    
//     let animationId
//     let particles = []
//     const particleCount = 80
//     const connectionRadius = 120
    
//     function resizeCanvas() {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//       particles = []
//       for (let i = 0; i < particleCount; i++) {
//         particles.push(createParticle(canvas.width, canvas.height))
//       }
//     }
    
//     function drawConnections(mouseX, mouseY) {
//       if (!ctx) return
      
//       for (let i = 0; i < particles.length; i++) {
//         const p = particles[i]
//         const dxToMouse = p.x - mouseX
//         const dyToMouse = p.y - mouseY
//         const distToMouse = Math.sqrt(dxToMouse * dxToMouse + dyToMouse * dyToMouse)
        
//         if (distToMouse < connectionRadius) {
//           ctx.beginPath()
//           ctx.moveTo(p.x, p.y)
//           ctx.lineTo(mouseX, mouseY)
//           ctx.strokeStyle = `rgba(204, 255, 0, ${0.15 * (1 - distToMouse / connectionRadius)})`
//           ctx.lineWidth = 0.8
//           ctx.stroke()
//         }
        
//         for (let j = i + 1; j < particles.length; j++) {
//           const p2 = particles[j]
//           const dx = p.x - p2.x
//           const dy = p.y - p2.y
//           const dist = Math.sqrt(dx * dx + dy * dy)
          
//           if (dist < 60 && (Math.abs(p.x - mouseX) < 150 || Math.abs(p2.x - mouseX) < 150)) {
//             ctx.beginPath()
//             ctx.moveTo(p.x, p.y)
//             ctx.lineTo(p2.x, p2.y)
//             ctx.strokeStyle = `rgba(204, 255, 0, ${0.05 * (1 - dist / 60)})`
//             ctx.lineWidth = 0.5
//             ctx.stroke()
//           }
//         }
//       }
//     }
    
//     function animateParticles() {
//       if (!ctx || !canvas) return
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
      
//       let mouseX = 0, mouseY = 0
//       const pos = mousePos.get()
//       if (pos && typeof pos === 'object') {
//         mouseX = pos.x || 0
//         mouseY = pos.y || 0
//       }
      
//       for (const p of particles) {
//         p.update(canvas.width, canvas.height, mouseX, mouseY)
//         p.draw(ctx)
//       }
      
//       if (mouseX && mouseY) {
//         drawConnections(mouseX, mouseY)
//       }
      
//       animationId = requestAnimationFrame(animateParticles)
//     }
    
//     window.addEventListener('resize', resizeCanvas)
//     resizeCanvas()
//     animateParticles()
    
//     return () => {
//       window.removeEventListener('resize', resizeCanvas)
//       cancelAnimationFrame(animationId)
//     }
//   }, [mousePos])

//   // Track mouse for cursor and particles
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const x = e.clientX
//       const y = e.clientY
      
//       dotX.set(x)
//       dotY.set(y)
//       ringX.set(x)
//       ringY.set(y)
//       mousePos.set({ x, y })
      
//       document.documentElement.style.setProperty('--mouse-x', `${x}px`)
//       document.documentElement.style.setProperty('--mouse-y', `${y}px`)
//     }
    
//     window.addEventListener('mousemove', handleMouseMove)
//     return () => window.removeEventListener('mousemove', handleMouseMove)
//   }, [dotX, dotY, ringX, ringY, mousePos])

//   // Animate stats counter
//   useEffect(() => {
//     if (isInView) {
//       const targets = { projects: 48, contributions: 372, years: 4 }
//       const duration = 2000
//       const startTime = performance.now()
      
//       function updateStats(currentTime) {
//         const elapsed = currentTime - startTime
//         const progress = Math.min(1, elapsed / duration)
//         const eased = 1 - Math.pow(1 - progress, 3)
        
//         setStats({
//           projects: Math.floor(targets.projects * eased),
//           contributions: Math.floor(targets.contributions * eased),
//           years: Math.floor(targets.years * eased)
//         })
        
//         if (progress < 1) {
//           requestAnimationFrame(updateStats)
//         }
//       }
      
//       requestAnimationFrame(updateStats)
      
//       let frame = 0
//       const terminalInterval = setInterval(() => {
//         frame += Math.floor(Math.random() * 37) + 11
//         if (frame >= 999) {
//           setTerminalCode("999")
//           clearInterval(terminalInterval)
//         } else {
//           setTerminalCode(frame.toString().padStart(3, '0'))
//         }
//       }, 35)
      
//       return () => clearInterval(terminalInterval)
//     }
//   }, [isInView])

//   const skillGroups = [
//     {
//       category: "Frontend",
//       icon: <Code2 className="w-7 h-7" />,
//       color: "#CCFF00",
//       skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
//     },
//     {
//       category: "Backend",
//       icon: <Server className="w-7 h-7" />,
//       color: "#00D4FF",
//       skills: ["Node.js", "Express", "RESTful APIs", "GraphQL", "JWT", "Socket.io"],
//     },
//     {
//       category: "Database",
//       icon: <Database className="w-7 h-7" />,
//       color: "#FF6B6B",
//       skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
//     },
//     {
//       category: "DevOps & Tools",
//       icon: <Wrench className="w-7 h-7" />,
//       color: "#C084FC",
//       skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Vite", "Linux"],
//     }
//   ]

//   return (
//     <>

      
//       {/* Particle Canvas */}
//       <canvas 
//         ref={canvasRef}
//         className="fixed inset-0 pointer-events-none z-0"
//         style={{ background: 'transparent' }}
//       />
      
//       {/* Animated Scanline */}
//       {/* <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
//         <div className="scanline" />
//       </div> */}
      
//       {/* Terminal Counter */}
//       {/* <div className="fixed top-6 right-6 z-50 font-mono">
//         <div className="bg-black/60 backdrop-blur-sm border border-[#CCFF00]/30 rounded-lg px-4 py-2 shadow-lg shadow-[#CCFF00]/10">
//           <div className="flex items-center gap-2 text-xs text-[#CCFF00]/70">
//             <Terminal size={12} />
//             <span>system.process</span>
//             <span className="text-white/40">|</span>
//             <span className="text-[#CCFF00] font-bold tracking-wider">{terminalCode}</span>
//           </div>
//         </div>
//       </div> */}
      
//       <section ref={ref} className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden min-h-screen">
//         {/* Background */}
//         <div className="absolute inset-0 bg-grid-pattern opacity-30" />
//         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#CCFF00]/5 blur-[200px] animate-float-slow" />

//         <div className="max-w-7xl mx-auto relative z-10">

//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//             className="mb-20"
//           >
//             <p className="text-[#CCFF00] font-semibold uppercase tracking-[0.3em] text-sm mb-4">Capabilities</p>
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-10 border-b border-white/10">
//               <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
//                 <span className="text-white group glitch-text inline-block">
//                   <span className="glitch-text-content">TECH</span>
//                 </span>
//                 <br />
//                 <span className="text-[#CCFF00] group glitch-text inline-block">
//                   <span className="glitch-text-content">STACK</span>
//                   <span className="text-white/20">.</span>
//                 </span>
//               </h2>

//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="flex items-center gap-3 bg-[#CCFF00]/10 border border-[#CCFF00]/20 px-6 py-3 rounded-full group cursor-pointer btn-shimmer"
//               >
//                 <motion.div
//                   animate={{ rotate: [0, 360] }}
//                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                 >
//                   <Zap className="w-5 h-5 text-[#CCFF00] group-hover:animate-pulse" />
//                 </motion.div>
//                 <span className="font-bold text-sm uppercase tracking-wider text-[#CCFF00]">Powered By</span>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Stats Row */}
//           {/* <div className="grid grid-cols-3 gap-4 mb-16">
//             {[
//               { label: "Projects Completed", value: stats.projects, suffix: "+" },
//               { label: "Git Contributions", value: stats.contributions, suffix: "" },
//               { label: "Years Experience", value: stats.years, suffix: "+" }
//             ].map((stat, idx) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.4 + idx * 0.1 }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
//               >
//                 <div className="text-4xl md:text-5xl font-black text-[#CCFF00] font-mono">
//                   {stat.value}{stat.suffix}
//                 </div>
//                 <div className="text-xs text-white/50 uppercase tracking-wider mt-2">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div> */}

//           {/* Skill Groups */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {skillGroups.map((group, idx) => (
//               <motion.div
//                 key={group.category}
//                 initial={{ opacity: 0, y: 60 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
//               >
//                 <motion.div
//                   whileHover={{ y: -6 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   className="bg-[#141414] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden group h-full"
//                 >
//                   <div 
//                     className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"
//                     style={{ backgroundColor: group.color }}
//                   />

//                   <div className="flex items-center gap-4 mb-8 relative z-10">
//                     <div 
//                       className="w-12 h-12 rounded-2xl flex items-center justify-center"
//                       style={{ backgroundColor: `${group.color}15`, color: group.color }}
//                     >
//                       {group.icon}
//                     </div>
//                     <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-white">
//                       {group.category}
//                     </h3>
//                   </div>

//                   <div className="flex flex-wrap gap-2 relative z-10">
//                     {group.skills.map((skill, skillIdx) => (
//                       <motion.div
//                         key={skill}
//                         initial={{ opacity: 0, scale: 0.5, y: 20 }}
//                         animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
//                         transition={{ delay: 0.3 + skillIdx * 0.06, duration: 0.4, type: "spring", stiffness: 200 }}
//                         whileHover={{ 
//                           scale: 1.08, 
//                           y: -3,
//                           borderColor: group.color,
//                           color: group.color,
//                           backgroundColor: `${group.color}15`
//                         }}
//                         className="border border-white/10 px-5 py-2.5 rounded-full font-semibold text-sm text-white/60 bg-white/5 transition-all duration-200 cursor-default"
//                       >
//                         {skill}
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
          
//           {/* Scroll Cue */}
//           <div className="flex justify-center mt-24">
//             <div className="scroll-cue">
//               <div className="scroll-cue-wheel" />
//             </div>
//           </div>
//         </div>
//       </section>
      
//       <style>{`
//         .bg-grid-pattern {
//           background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
//                             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
//           background-size: 50px 50px;
//         }
        
//         .scanline {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             to bottom,
//             transparent,
//             rgba(204, 255, 0, 0.05),
//             transparent
//           );
//           animation: scanlineMove 8s linear infinite;
//           pointer-events: none;
//         }
        
//         @keyframes scanlineMove {
//           0% {
//             transform: translateY(-100%);
//           }
//           100% {
//             transform: translateY(100%);
//           }
//         }
        
//         .glitch-text {
//           position: relative;
//           display: inline-block;
//         }
        
//         .glitch-text-content {
//           position: relative;
//           display: inline-block;
//         }
        
//         .glitch-text:hover .glitch-text-content {
//           animation: glitch 0.3s infinite;
//         }
        
//         @keyframes glitch {
//           0% {
//             transform: skew(0deg, 0deg);
//             text-shadow: none;
//           }
//           20% {
//             transform: skew(2deg, 1deg);
//             text-shadow: -2px 0 #ff00ff, 2px 0 #00ff00;
//           }
//           40% {
//             transform: skew(-2deg, -1deg);
//             text-shadow: 2px 0 #ff00ff, -2px 0 #00ff00;
//           }
//           60% {
//             transform: skew(1deg, -1deg);
//             text-shadow: -1px 0 #ff00ff, 1px 0 #CCFF00;
//           }
//           80% {
//             transform: skew(-1deg, 2deg);
//             text-shadow: 1px 0 #ff00ff, -1px 0 #CCFF00;
//           }
//           100% {
//             transform: skew(0deg, 0deg);
//             text-shadow: none;
//           }
//         }
        
//         .scroll-cue {
//           width: 30px;
//           height: 50px;
//           border: 2px solid rgba(204, 255, 0, 0.5);
//           border-radius: 30px;
//           position: relative;
//           cursor: pointer;
//         }
        
//         .scroll-cue-wheel {
//           width: 4px;
//           height: 10px;
//           background: #CCFF00;
//           border-radius: 2px;
//           position: absolute;
//           top: 8px;
//           left: 50%;
//           transform: translateX(-50%);
//           animation: scrollWheel 2s ease-in-out infinite;
//           box-shadow: 0 0 8px #CCFF00;
//         }
        
//         @keyframes scrollWheel {
//           0% {
//             top: 8px;
//             opacity: 1;
//           }
//           80% {
//             top: 28px;
//             opacity: 0.3;
//           }
//           100% {
//             top: 8px;
//             opacity: 1;
//           }
//         }
        
//         * {
//           cursor: none;
//         }
        
//         @media (max-width: 768px) {
//           * {
//             cursor: auto;
//           }
//           .fixed\\[top\\:0\\] {
//             display: none;
//           }
//         }
        
//         .btn-shimmer {
//           position: relative;
//           overflow: hidden;
//         }
        
//         .btn-shimmer::after {
//           content: '';
//           position: absolute;
//           top: -50%;
//           left: -60%;
//           width: 200%;
//           height: 200%;
//           background: linear-gradient(
//             115deg,
//             transparent 0%,
//             transparent 40%,
//             rgba(204, 255, 0, 0.3) 50%,
//             transparent 60%,
//             transparent 100%
//           );
//           transform: rotate(25deg);
//           animation: shimmer 3s infinite;
//         }
        
//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%) rotate(25deg);
//           }
//           100% {
//             transform: translateX(100%) rotate(25deg);
//           }
//         }
        
//         @keyframes float-slow {
//           0%, 100% { transform: translate(0, 0); }
//           50% { transform: translate(20px, 20px); }
//         }
        
//         .animate-float-slow {
//           animation: float-slow 12s ease-in-out infinite;
//         }
//       `}</style>
//     </>
//   )
// }



























// import { Zap, Code2, Server, Database, Wrench } from 'lucide-react'
// import { useState, useRef, useEffect } from 'react'

// function Reveal({ children, delay = 0, className = '' }) {
//   const ref = useRef(null)
//   const [visible, setVisible] = useState(false)
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
//       { threshold: 0.1 }
//     )
//     if (ref.current) obs.observe(ref.current)
//     return () => obs.disconnect()
//   }, [])
//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? 'translateY(0)' : 'translateY(48px)',
//         transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
//       }}
//     >
//       {children}
//     </div>
//   )
// }

// function SkillPill({ label, hoverColor = '#CCFF00' }) {
//   const [hovered, setHovered] = useState(false)
//   return (
//     <span
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         display: 'inline-block',
//         padding: '7px 16px',
//         borderRadius: '100px',
//         fontSize: '11px',
//         fontWeight: 700,
//         fontFamily: "'Space Grotesk', sans-serif",
//         letterSpacing: '0.08em',
//         textTransform: 'uppercase',
//         cursor: 'default',
//         transition: 'all 0.22s cubic-bezier(0.16,1,0.3,1)',
//         background: hovered ? `${hoverColor}18` : 'rgba(255,255,255,0.05)',
//         border: `1px solid ${hovered ? `${hoverColor}45` : 'rgba(255,255,255,0.1)'}`,
//         color: hovered ? hoverColor : 'rgba(245,245,240,0.5)',
//         transform: hovered ? 'translateY(-3px) scale(1.04)' : 'none',
//         boxShadow: hovered ? `0 0 14px ${hoverColor}18` : 'none',
//       }}
//     >
//       {label}
//     </span>
//   )
// }

// const SKILL_GROUPS = [
//   {
//     index: '01',
//     category: 'Frontend',
//     icon: Code2,
//     color: '#CCFF00',
//     description: 'Interfaces that are fast, accessible, and impossible to ignore.',
//     skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'],
//     highlights: [
//       'Built pixel-perfect UIs with React and Next.js for production apps.',
//       'Implemented complex state management using Redux and React Query.',
//       'Optimised Largest Contentful Paint and Core Web Vitals to green.',
//       'Authored design-system components adopted across multiple projects.',
//     ],
//   },
//   {
//     index: '02',
//     category: 'Backend',
//     icon: Server,
//     color: '#00D4FF',
//     description: 'Reliable, scalable services that power everything under the hood.',
//     skills: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'JWT', 'Socket.io'],
//     highlights: [
//       'Designed and shipped RESTful and GraphQL APIs consumed by React frontends.',
//       'Implemented JWT-based auth with refresh-token rotation for zero-trust sessions.',
//       'Built real-time features (notifications, presence) with Socket.io.',
//       'Wrote middleware layers for rate-limiting, logging, and error handling.',
//     ],
//   },
//   {
//     index: '03',
//     category: 'Database',
//     icon: Database,
//     color: '#FF6B6B',
//     description: 'Structured, queryable, and always-consistent data layers.',
//     skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma'],
//     highlights: [
//       'Modelled relational schemas in PostgreSQL with normalised foreign keys.',
//       'Used Redis for session caching and pub/sub event queues.',
//       'Wrote Prisma migrations for zero-downtime schema changes.',
//       'Profiled and resolved N+1 query problems reducing API latency by 60 %.',
//     ],
//   },
//   {
//     index: '04',
//     category: 'DevOps & Tools',
//     icon: Wrench,
//     color: '#C084FC',
//     description: 'Shipping fast and keeping systems healthy in production.',
//     skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Vite', 'Linux'],
//     highlights: [
//       'Containerised services with Docker and orchestrated on AWS ECS.',
//       'Set up GitHub Actions pipelines for lint, test, and deploy on merge.',
//       'Maintained >85 % test coverage across unit and integration suites with Jest.',
//       'Managed Linux servers, cron jobs, and environment configs for staging/prod.',
//     ],
//   },
// ]

// export default function Skill() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');

//         :root {
//           --lime:  #CCFF00;
//           --bg:    #050505;
//           --card:  #0e0e0e;
//           --white: #F5F5F0;
//         }

//         .sk-root {
//           background: var(--bg);
//           min-height: 100vh;
//           position: relative;
//           overflow: hidden;
//           padding: 120px 40px 100px;
//           font-family: 'Space Grotesk', sans-serif;
//           color: var(--white);
//         }
//         .sk-root::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image:
//             linear-gradient(rgba(204,255,0,0.03) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(204,255,0,0.03) 1px, transparent 1px);
//           background-size: 60px 60px;
//           pointer-events: none;
//           z-index: 0;
//         }

//         .sk-orb {
//           position: absolute;
//           top: 10%; right: 15%;
//           width: 600px; height: 600px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(204,255,0,0.045) 0%, transparent 70%);
//           pointer-events: none; z-index: 0;
//           animation: skFloat 10s ease-in-out infinite;
//         }
//         @keyframes skFloat {
//           0%,100% { transform: translateY(0); }
//           50%      { transform: translateY(-32px); }
//         }

//         .sk-scanline {
//           position: absolute;
//           left: 0; width: 100%; height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(204,255,0,0.07), transparent);
//           z-index: 1; pointer-events: none;
//           animation: skScan 7s linear infinite;
//         }
//         @keyframes skScan {
//           0%   { top: -1px; }
//           100% { top: 100%; }
//         }

//         .sk-inner {
//           max-width: 1100px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 2;
//         }

//         .sk-tag {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           margin-bottom: 20px;
//         }
//         .sk-tag-line { width: 32px; height: 2px; background: var(--lime); }
//         .sk-tag span {
//           font-size: 11px; font-weight: 700;
//           letter-spacing: 0.28em; text-transform: uppercase;
//           color: var(--lime);
//         }

//         .sk-heading {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(56px, 10vw, 110px);
//           font-weight: 800;
//           line-height: 0.88;
//           letter-spacing: -0.02em;
//           text-transform: uppercase;
//           margin-bottom: 0;
//         }
//         .sk-heading .line-white { color: var(--white); display: block; }
//         .sk-heading .line-lime  { color: var(--lime);  display: block; }
//         .sk-heading .dim { color: rgba(204,255,0,0.18); }
//         .sk-heading .line-white:hover,
//         .sk-heading .line-lime:hover {
//           animation: skGlitch 0.4s steps(2) both;
//         }
//         @keyframes skGlitch {
//           0%   { text-shadow: 3px 0 #CCFF00, -3px 0 #ff003c; clip-path: inset(10% 0 75% 0); }
//           33%  { text-shadow: -3px 0 #CCFF00, 3px 0 #ff003c; clip-path: inset(45% 0 30% 0); }
//           66%  { text-shadow: 2px 2px #CCFF00, -2px -2px #ff003c; clip-path: inset(75% 0 5% 0); }
//           100% { text-shadow: none; clip-path: none; }
//         }

//         .sk-header-row {
//           display: flex;
//           align-items: flex-end;
//           justify-content: space-between;
//           gap: 32px;
//           padding-bottom: 48px;
//           margin-bottom: 64px;
//           border-bottom: 1px solid rgba(255,255,255,0.07);
//           flex-wrap: wrap;
//         }
//         .sk-sub-card {
//           background: var(--card);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 18px;
//           padding: 22px 28px;
//           max-width: 340px;
//           transition: transform 0.2s;
//         }
//         .sk-sub-card:hover { transform: translateY(-4px); }
//         .sk-sub-card p {
//           font-size: 15px;
//           line-height: 1.65;
//           color: rgba(245,245,240,0.45);
//           font-weight: 400;
//         }

//         /* Cards */
//         .sk-card {
//           background: var(--card);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 28px;
//           overflow: hidden;
//           transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s;
//           margin-bottom: 24px;
//         }
//         .sk-card:hover {
//           transform: translateY(-6px);
//         }
//         .sk-card:hover .sk-card-hover-border {
//           opacity: 1;
//         }
//         .sk-card-hover-border {
//           position: absolute;
//           inset: 0;
//           border-radius: 28px;
//           border: 1px solid rgba(204,255,0,0.12);
//           pointer-events: none;
//           opacity: 0;
//           transition: opacity 0.3s;
//         }

//         .sk-card-grid {
//           display: grid;
//           grid-template-columns: 5fr 8fr;
//           position: relative;
//         }
//         @media (max-width: 720px) {
//           .sk-card-grid { grid-template-columns: 1fr; }
//         }

//         /* Left accent panel */
//         .sk-left {
//           padding: 48px 40px;
//           position: relative;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//         }
//         .sk-left::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: repeating-linear-gradient(
//             45deg,
//             transparent, transparent 14px,
//             rgba(0,0,0,0.15) 14px, rgba(0,0,0,0.15) 28px
//           );
//           pointer-events: none;
//         }
//         .sk-left-watermark {
//           position: absolute;
//           bottom: -20px; right: -10px;
//           font-family: 'Syne', sans-serif;
//           font-size: 140px;
//           font-weight: 800;
//           color: rgba(0,0,0,0.12);
//           line-height: 1;
//           pointer-events: none;
//           user-select: none;
//         }

//         .sk-left-top { position: relative; z-index: 1; }

//         .sk-index-row {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-bottom: 18px;
//         }
//         .sk-index-row span {
//           font-size: 11px;
//           font-weight: 800;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: rgba(5,5,5,0.6);
//         }

//         .sk-cat-name {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(26px, 3.5vw, 40px);
//           font-weight: 800;
//           text-transform: uppercase;
//           letter-spacing: -0.02em;
//           line-height: 1;
//           color: #050505;
//           margin-bottom: 14px;
//         }

//         .sk-cat-desc {
//           font-size: 13px;
//           font-weight: 500;
//           color: rgba(5,5,5,0.55);
//           line-height: 1.6;
//         }

//         .sk-count-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           background: rgba(5,5,5,0.12);
//           border-radius: 100px;
//           padding: 6px 14px;
//           margin-top: 28px;
//           position: relative; z-index: 1;
//           align-self: flex-start;
//         }
//         .sk-count-dot {
//           width: 7px; height: 7px;
//           background: #050505;
//           border-radius: 50%;
//           animation: skPulse 2s ease infinite;
//         }
//         @keyframes skPulse {
//           0%,100% { box-shadow: 0 0 0 0 rgba(5,5,5,0.4); }
//           50%      { box-shadow: 0 0 0 5px rgba(5,5,5,0); }
//         }
//         .sk-count-badge span {
//           font-size: 11px;
//           font-weight: 800;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: #050505;
//         }

//         /* Right panel */
//         .sk-right {
//           padding: 48px 44px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           border-left: 1px solid rgba(255,255,255,0.06);
//         }

//         .sk-position-row {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           margin-bottom: 28px;
//           padding-bottom: 22px;
//           border-bottom: 1px solid rgba(255,255,255,0.07);
//         }
//         .sk-position-icon {
//           width: 40px; height: 40px;
//           border-radius: 12px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//         }
//         .sk-position-title {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(16px, 2vw, 22px);
//           font-weight: 800;
//           text-transform: uppercase;
//           letter-spacing: -0.01em;
//           color: var(--white);
//         }

//         .sk-highlights {
//           list-style: none;
//           padding: 0;
//           margin: 0 0 28px;
//           padding-left: 20px;
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//           border-left-width: 2px;
//           border-left-style: solid;
//         }
//         .sk-highlight-item {
//           font-size: 14px;
//           line-height: 1.65;
//           color: rgba(245,245,240,0.5);
//           font-weight: 400;
//           position: relative;
//         }
//         .sk-highlight-item::before {
//           content: '';
//           position: absolute;
//           left: -24px; top: 9px;
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           flex-shrink: 0;
//         }

//         .sk-pills-row {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 8px;
//         }

//         .sk-timeline-hint {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           margin-top: 0;
//           margin-bottom: 24px;
//           padding: 20px 0;
//           border-top: 1px solid rgba(255,255,255,0.06);
//         }
//         .sk-timeline-dot {
//           width: 10px; height: 10px;
//           border-radius: 50%;
//           background: var(--lime);
//           flex-shrink: 0;
//           box-shadow: 0 0 10px rgba(204,255,0,0.4);
//         }
//         .sk-timeline-text {
//           font-size: 12px;
//           color: rgba(245,245,240,0.25);
//           letter-spacing: 0.1em;
//           font-weight: 500;
//           text-transform: uppercase;
//         }
//       `}</style>

//       <section id="skills" className="sk-root">
//         <div className="sk-orb" />
//         <div className="sk-scanline" />

//         <div className="sk-inner">

//           {/* Header */}
//           <Reveal>
//             <div className="sk-tag">
//               <div className="sk-tag-line" />
//               <span>Capabilities</span>
//             </div>
//             <div className="sk-header-row">
//               <h2 className="sk-heading">
//                 <span className="line-white">TECH</span>
//                 <span className="line-lime">STACK<span className="dim">.</span></span>
//               </h2>
//               <div className="sk-sub-card">
//                 <p>Every tool chosen deliberately — built for scale, speed, and long-term maintainability.</p>
//               </div>
//             </div>
//           </Reveal>

//           {/* Skill cards */}
//           {SKILL_GROUPS.map((group, idx) => {
//             const Icon = group.icon
//             return (
//               <Reveal key={group.category} delay={200 + idx * 120}>
//                 <div className="sk-card" style={{ '--hover-shadow': `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px ${group.color}14` }}>
//                   <div
//                     className="sk-card-hover-border"
//                     style={{ borderColor: `${group.color}18` }}
//                   />
//                   <div className="sk-card-grid">

//                     {/* Left accent panel */}
//                     <div className="sk-left" style={{ background: group.color }}>
//                       <div className="sk-left-watermark">{group.index}</div>
//                       <div className="sk-left-top">
//                         <div className="sk-index-row">
//                           <Zap size={13} color="rgba(5,5,5,0.55)" />
//                           <span>Module {group.index}</span>
//                         </div>
//                         <div className="sk-cat-name">{group.category}</div>
//                         <div className="sk-cat-desc">{group.description}</div>
//                       </div>
//                       <div className="sk-count-badge">
//                         <div className="sk-count-dot" />
//                         <span>{group.skills.length} technologies</span>
//                       </div>
//                     </div>

//                     {/* Right content panel */}
//                     <div className="sk-right">
//                       <div className="sk-position-row">
//                         <div
//                           className="sk-position-icon"
//                           style={{
//                             background: `${group.color}12`,
//                             border: `1px solid ${group.color}30`,
//                             color: group.color,
//                           }}
//                         >
//                           <Icon size={16} />
//                         </div>
//                         <div className="sk-position-title" style={{ color: group.color }}>
//                           {group.category} Engineering
//                         </div>
//                       </div>

//                       <ul
//                         className="sk-highlights"
//                         style={{ borderLeftColor: `${group.color}30` }}
//                       >
//                         {group.highlights.map((point, i) => (
//                           <li key={i} className="sk-highlight-item">
//                             <span
//                               style={{
//                                 position: 'absolute',
//                                 left: -24, top: 9,
//                                 width: 6, height: 6,
//                                 borderRadius: '50%',
//                                 background: `${group.color}50`,
//                                 display: 'block',
//                               }}
//                             />
//                             {point}
//                           </li>
//                         ))}
//                       </ul>

//                       <div className="sk-pills-row">
//                         {group.skills.map(skill => (
//                           <SkillPill key={skill} label={skill} hoverColor={group.color} />
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Timeline hint between cards */}
//                 {idx < SKILL_GROUPS.length - 1 && (
//                   <div className="sk-timeline-hint">
//                     <div
//                       className="sk-timeline-dot"
//                       style={{
//                         background: group.color,
//                         boxShadow: `0 0 10px ${group.color}50`,
//                       }}
//                     />
//                     <span className="sk-timeline-text">Next module below</span>
//                   </div>
//                 )}
//                 {idx === SKILL_GROUPS.length - 1 && (
//                   <div className="sk-timeline-hint">
//                     <div
//                       className="sk-timeline-dot"
//                       style={{
//                         background: group.color,
//                         boxShadow: `0 0 10px ${group.color}50`,
//                       }}
//                     />
//                     <span className="sk-timeline-text">End of capability matrix</span>
//                   </div>
//                 )}
//               </Reveal>
//             )
//           })}

//         </div>
//       </section>
//     </>
//   )
// }


































// import { Zap, Code2, Server, Database, Wrench, Sparkles, ArrowRight } from 'lucide-react'
// import { useState, useRef, useEffect } from 'react'

// function Reveal({ children, delay = 0, className = '' }) {
//   const ref = useRef(null)
//   const [visible, setVisible] = useState(false)
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
//       { threshold: 0.1 }
//     )
//     if (ref.current) obs.observe(ref.current)
//     return () => obs.disconnect()
//   }, [])
//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? 'translateY(0)' : 'translateY(48px)',
//         transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
//       }}
//     >
//       {children}
//     </div>
//   )
// }

// function SkillPill({ label, hoverColor = '#CCFF00', idx }) {
//   const [hovered, setHovered] = useState(false)
//   return (
//     <Reveal delay={300 + idx * 30}>
//       <span
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         style={{
//           display: 'inline-block',
//           padding: '8px 18px',
//           borderRadius: '100px',
//           fontSize: '11px',
//           fontWeight: 600,
//           fontFamily: "'DM Mono', monospace",
//           letterSpacing: '0.08em',
//           textTransform: 'uppercase',
//           cursor: 'default',
//           transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
//           background: hovered ? `${hoverColor}12` : 'rgba(255,255,255,0.03)',
//           border: `1px solid ${hovered ? `${hoverColor}40` : 'rgba(255,255,255,0.06)'}`,
//           color: hovered ? hoverColor : 'rgba(245,240,232,0.5)',
//           transform: hovered ? 'translateY(-3px) scale(1.05)' : 'none',
//           boxShadow: hovered ? `0 0 16px ${hoverColor}18` : 'none',
//         }}
//       >
//         {label}
//       </span>
//     </Reveal>
//   )
// }

// const SKILL_GROUPS = [
//   {
//     index: '01',
//     category: 'Frontend',
//     icon: Code2,
//     color: '#CCFF00',
//     description: 'Interfaces that are fast, accessible, and impossible to ignore.',
//     skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'],
//     highlights: [
//       'Built pixel-perfect UIs with React and Next.js for production apps.',
//       'Implemented complex state management using Redux and React Query.',
//       'Optimised Largest Contentful Paint and Core Web Vitals to green.',
//       'Authored design-system components adopted across multiple projects.',
//     ],
//   },
//   {
//     index: '02',
//     category: 'Backend',
//     icon: Server,
//     color: '#00D4FF',
//     description: 'Reliable, scalable services that power everything under the hood.',
//     skills: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'JWT', 'Socket.io'],
//     highlights: [
//       'Designed and shipped RESTful and GraphQL APIs consumed by React frontends.',
//       'Implemented JWT-based auth with refresh-token rotation for zero-trust sessions.',
//       'Built real-time features (notifications, presence) with Socket.io.',
//       'Wrote middleware layers for rate-limiting, logging, and error handling.',
//     ],
//   },
//   {
//     index: '03',
//     category: 'Database',
//     icon: Database,
//     color: '#FF6B6B',
//     description: 'Structured, queryable, and always-consistent data layers.',
//     skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma'],
//     highlights: [
//       'Modelled relational schemas in PostgreSQL with normalised foreign keys.',
//       'Used Redis for session caching and pub/sub event queues.',
//       'Wrote Prisma migrations for zero-downtime schema changes.',
//       'Profiled and resolved N+1 query problems reducing API latency by 60%.',
//     ],
//   },
//   {
//     index: '04',
//     category: 'DevOps & Tools',
//     icon: Wrench,
//     color: '#C084FC',
//     description: 'Shipping fast and keeping systems healthy in production.',
//     skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Vite', 'Linux'],
//     highlights: [
//       'Containerised services with Docker and orchestrated on AWS ECS.',
//       'Set up GitHub Actions pipelines for lint, test, and deploy on merge.',
//       'Maintained >85% test coverage across unit and integration suites with Jest.',
//       'Managed Linux servers, cron jobs, and environment configs for staging/prod.',
//     ],
//   },
// ]

// export default function Skill() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }
//     window.addEventListener('mousemove', handleMouseMove)
//     return () => window.removeEventListener('mousemove', handleMouseMove)
//   }, [])

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

//         .skill-root {
//           background: #080808;
//           min-height: 100vh;
//           position: relative;
//           overflow: hidden;
//           padding: 110px 48px 120px;
//           color: #F5F0E8;
//         }

//         .skill-root::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
//           pointer-events: none;
//           z-index: 0;
//           opacity: 0.4;
//         }

//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           33% { transform: translateY(-10px) translateX(5px); }
//           66% { transform: translateY(8px) translateX(-3px); }
//         }

//         @keyframes scanline {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100%); }
//         }

//         @keyframes glitch {
//           0% { text-shadow: 3px 0 #CCFF00, -3px 0 #FF6B6B; clip-path: inset(10% 0 75% 0); }
//           20% { text-shadow: -3px 0 #CCFF00, 3px 0 #FF6B6B; clip-path: inset(45% 0 30% 0); }
//           40% { text-shadow: 2px 2px #CCFF00, -2px -2px #FF6B6B; clip-path: inset(75% 0 5% 0); }
//           60% { text-shadow: -2px -2px #CCFF00, 2px 2px #FF6B6B; clip-path: inset(20% 0 60% 0); }
//           80% { text-shadow: 1px -1px #CCFF00, -1px 1px #FF6B6B; clip-path: inset(60% 0 20% 0); }
//           100% { text-shadow: none; clip-path: none; }
//         }

//         .animate-float {
//           animation: float-slow 6s ease-in-out infinite;
//         }

//         .animate-scanline {
//           animation: scanline 8s linear infinite;
//         }

//         .glitch-hover:hover {
//           animation: glitch 0.3s steps(2) both;
//         }
//       `}</style>

//       <section className="skill-root">
//         {/* Floating particles */}
//         <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
//           {[...Array(60)].map((_, i) => (
//             <div
//               key={i}
//               style={{
//                 position: 'absolute',
//                 width: Math.random() * 3 + 1,
//                 height: Math.random() * 3 + 1,
//                 borderRadius: '50%',
//                 background: `rgba(204, 255, 0, ${Math.random() * 0.3})`,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animation: `float-slow ${Math.random() * 5 + 3}s ease-in-out infinite`,
//                 animationDelay: `${Math.random() * 5}s`,
//               }}
//             />
//           ))}
//         </div>

//         {/* Animated scanline */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           height: '100%',
//           pointerEvents: 'none',
//           zIndex: 1,
//           overflow: 'hidden',
//         }}>
//           <div className="animate-scanline" style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: 100,
//             background: 'linear-gradient(to bottom, transparent, rgba(204, 255, 0, 0.06), transparent)',
//             filter: 'blur(8px)',
//           }} />
//         </div>

//         <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
//           {/* Header rule */}
//           <Reveal>
//             <div style={{
//               borderBottom: '3px solid rgba(255,255,255,0.9)',
//               paddingBottom: 20,
//               marginBottom: 48,
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'flex-end',
//               flexWrap: 'wrap',
//               gap: 16,
//             }}>
//               <div style={{
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 10,
//                 color: 'rgba(255,255,255,0.3)',
//                 letterSpacing: '0.25em',
//                 textTransform: 'uppercase',
//               }}>
//                 Vol. 02 — Expertise
//               </div>
//               <div style={{
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 10,
//                 color: 'rgba(255,255,255,0.3)',
//                 letterSpacing: '0.2em',
//               }}>
//                 {SKILL_GROUPS.reduce((acc, g) => acc + g.skills.length, 0)} technologies mastered
//               </div>
//             </div>
//           </Reveal>

//           {/* Giant heading */}
//           <Reveal delay={80}>
//             <div style={{ marginBottom: 64 }}>
//               <h2 style={{
//                 fontFamily: "'Fraunces', serif",
//                 fontSize: 'clamp(64px, 12vw, 160px)',
//                 fontWeight: 900,
//                 lineHeight: 0.85,
//                 letterSpacing: '-0.04em',
//                 margin: '0 0 16px',
//                 color: '#F5F0E8',
//               }}>
//                 Tech<span style={{ color: '#CCFF00' }}> Stack</span>
//                 <span style={{ color: '#CCFF00' }}>.</span>
//               </h2>
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 40,
//                 paddingBottom: 20,
//                 flexWrap: 'wrap',
//               }}>
//                 <p style={{
//                   fontFamily: "'Fraunces', serif",
//                   fontSize: 18,
//                   fontWeight: 300,
//                   fontStyle: 'italic',
//                   color: 'rgba(245,240,232,0.35)',
//                   maxWidth: 500,
//                   lineHeight: 1.6,
//                   margin: 0,
//                 }}>
//                   Every tool chosen deliberately — built for scale, speed, and long-term maintainability.
//                 </p>
//                 <div style={{ display: 'flex', gap: 12, marginLeft: 'auto', flexWrap: 'wrap' }}>
//                   {['Full Stack', 'System Design', 'Cloud Native'].map(tag => (
//                     <span key={tag} style={{
//                       fontFamily: "'DM Mono', monospace",
//                       fontSize: 10,
//                       letterSpacing: '0.18em',
//                       textTransform: 'uppercase',
//                       padding: '8px 18px',
//                       border: '1px solid rgba(255,255,255,0.15)',
//                       color: 'rgba(255,255,255,0.5)',
//                     }}>{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </Reveal>

//           {/* Skill cards */}
//           {SKILL_GROUPS.map((group, idx) => {
//             const Icon = group.icon
//             return (
//               <Reveal key={group.category} delay={120 + idx * 100}>
//                 <div style={{
//                   background: '#0e0e0e',
//                   border: '1px solid rgba(255,255,255,0.06)',
//                   borderRadius: 28,
//                   overflow: 'hidden',
//                   marginBottom: 24,
//                   transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-6px)'
//                   e.currentTarget.style.borderColor = `${group.color}30`
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)'
//                   e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
//                 }}>
                  
//                   <div style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(12, 1fr)',
//                     position: 'relative',
//                   }}>
                    
//                     {/* Left accent panel - spans 5 columns */}
//                     <div style={{
//                       gridColumn: 'span 5',
//                       background: group.color,
//                       padding: '48px 40px',
//                       position: 'relative',
//                       overflow: 'hidden',
//                     }}>
//                       <div style={{
//                         position: 'absolute',
//                         bottom: -20,
//                         right: -10,
//                         fontFamily: "'Fraunces', serif",
//                         fontSize: 140,
//                         fontWeight: 900,
//                         color: 'rgba(0,0,0,0.1)',
//                         lineHeight: 1,
//                         pointerEvents: 'none',
//                       }}>
//                         {group.index}
//                       </div>
                      
//                       <div style={{ position: 'relative', zIndex: 1 }}>
//                         <div style={{
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: 8,
//                           marginBottom: 18,
//                         }}>
//                           <Zap size={13} color="rgba(0,0,0,0.5)" />
//                           <span style={{
//                             fontFamily: "'DM Mono', monospace",
//                             fontSize: 10,
//                             fontWeight: 500,
//                             letterSpacing: '0.2em',
//                             textTransform: 'uppercase',
//                             color: 'rgba(0,0,0,0.5)',
//                           }}>Module {group.index}</span>
//                         </div>
                        
//                         <h3 style={{
//                           fontFamily: "'Fraunces', serif",
//                           fontSize: 'clamp(28px, 4vw, 44px)',
//                           fontWeight: 900,
//                           textTransform: 'uppercase',
//                           letterSpacing: '-0.02em',
//                           lineHeight: 1,
//                           color: '#080808',
//                           marginBottom: 14,
//                         }}>
//                           {group.category}
//                         </h3>
                        
//                         <p style={{
//                           fontFamily: "'Fraunces', serif",
//                           fontSize: 14,
//                           fontWeight: 400,
//                           fontStyle: 'italic',
//                           color: 'rgba(0,0,0,0.55)',
//                           lineHeight: 1.6,
//                           marginBottom: 28,
//                         }}>
//                           {group.description}
//                         </p>
                        
//                         <div style={{
//                           display: 'inline-flex',
//                           alignItems: 'center',
//                           gap: 8,
//                           background: 'rgba(0,0,0,0.08)',
//                           borderRadius: 100,
//                           padding: '6px 16px',
//                         }}>
//                           <div style={{
//                             width: 7,
//                             height: 7,
//                             background: '#080808',
//                             borderRadius: '50%',
//                             animation: 'pulse 2s ease infinite',
//                           }} />
//                           <span style={{
//                             fontFamily: "'DM Mono', monospace",
//                             fontSize: 10,
//                             fontWeight: 600,
//                             letterSpacing: '0.1em',
//                             textTransform: 'uppercase',
//                             color: '#080808',
//                           }}>
//                             {group.skills.length} technologies
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Right content panel - spans 7 columns */}
//                     <div style={{
//                       gridColumn: 'span 7',
//                       padding: '48px 44px',
//                       borderLeft: '1px solid rgba(255,255,255,0.06)',
//                     }}>
//                       <div style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: 14,
//                         marginBottom: 28,
//                         paddingBottom: 22,
//                         borderBottom: '1px solid rgba(255,255,255,0.06)',
//                       }}>
//                         <div style={{
//                           width: 44,
//                           height: 44,
//                           borderRadius: 14,
//                           background: `${group.color}12`,
//                           border: `1px solid ${group.color}30`,
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           color: group.color,
//                         }}>
//                           <Icon size={18} />
//                         </div>
//                         <h4 style={{
//                           fontFamily: "'Fraunces', serif",
//                           fontSize: 'clamp(18px, 2vw, 24px)',
//                           fontWeight: 900,
//                           textTransform: 'uppercase',
//                           letterSpacing: '-0.01em',
//                           color: group.color,
//                           margin: 0,
//                         }}>
//                           {group.category} Engineering
//                         </h4>
//                       </div>

//                       <ul style={{
//                         listStyle: 'none',
//                         padding: 0,
//                         margin: '0 0 28px',
//                         paddingLeft: 24,
//                         borderLeft: `2px solid ${group.color}30`,
//                       }}>
//                         {group.highlights.map((point, i) => (
//                           <li key={i} style={{
//                             fontSize: 14,
//                             lineHeight: 1.65,
//                             color: 'rgba(245,240,232,0.5)',
//                             marginBottom: 12,
//                             position: 'relative',
//                             paddingLeft: 8,
//                           }}>
//                             <span style={{
//                               position: 'absolute',
//                               left: -24,
//                               top: 8,
//                               width: 6,
//                               height: 6,
//                               borderRadius: '50%',
//                               background: `${group.color}60`,
//                             }} />
//                             {point}
//                           </li>
//                         ))}
//                       </ul>

//                       <div style={{
//                         display: 'flex',
//                         flexWrap: 'wrap',
//                         gap: 8,
//                       }}>
//                         {group.skills.map((skill, skillIdx) => (
//                           <SkillPill key={skill} label={skill} hoverColor={group.color} idx={skillIdx} />
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Timeline hint between cards */}
//                 {idx < SKILL_GROUPS.length - 1 && (
//                   <div style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: 16,
//                     padding: '20px 0',
//                     borderTop: '1px solid rgba(255,255,255,0.04)',
//                   }}>
//                     <div style={{
//                       width: 10,
//                       height: 10,
//                       borderRadius: '50%',
//                       background: group.color,
//                       boxShadow: `0 0 12px ${group.color}60`,
//                     }} />
//                     <span style={{
//                       fontFamily: "'DM Mono', monospace",
//                       fontSize: 10,
//                       color: 'rgba(255,255,255,0.2)',
//                       letterSpacing: '0.15em',
//                       textTransform: 'uppercase',
//                     }}>Next module below</span>
//                   </div>
//                 )}
//               </Reveal>
//             )
//           })}

//           {/* Footer rule */}
//           <Reveal delay={500}>
//             <div style={{
//               borderTop: '1px solid rgba(255,255,255,0.1)',
//               paddingTop: 32,
//               marginTop: 48,
//               display: 'flex',
//               justifyContent: 'space-between',
//               fontFamily: "'DM Mono', monospace",
//               fontSize: 9,
//               color: 'rgba(255,255,255,0.15)',
//               letterSpacing: '0.2em',
//               textTransform: 'uppercase',
//             }}>
//               <span>End of capability matrix</span>
//               <span>All skills production-ready</span>
//             </div>
//           </Reveal>

//         </div>
//       </section>

//       <style>{`
//         @keyframes pulse {
//           0%, 100% { box-shadow: 0 0 0 0 rgba(0,0,0,0.2); }
//           50% { box-shadow: 0 0 0 4px rgba(0,0,0,0); }
//         }
//       `}</style>
//     </>
//   )
// }






































// import { Zap, Code2, Server, Database, Wrench, Sparkles } from 'lucide-react'
// import { useState, useRef, useEffect } from 'react'

// function useReveal(delay = 0) {
//   const ref = useRef(null)
//   const [visible, setVisible] = useState(false)
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
//       { threshold: 0.08 }
//     )
//     if (ref.current) obs.observe(ref.current)
//     return () => obs.disconnect()
//   }, [])
//   return [ref, visible, delay]
// }

// function Reveal({ children, delay = 0, style = {} }) {
//   const [ref, visible] = useReveal()
//   return (
//     <div ref={ref} style={{
//       opacity: visible ? 1 : 0,
//       transform: visible ? 'none' : 'translateY(36px)',
//       transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
//       ...style,
//     }}>
//       {children}
//     </div>
//   )
// }

// function SkillPill({ label, hoverColor = '#CCFF00', idx }) {
//   const [hovered, setHovered] = useState(false)
//   return (
//     <span
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         display: 'inline-block',
//         padding: '6px 14px',
//         fontSize: '9px',
//         fontWeight: 500,
//         fontFamily: "'DM Mono', monospace",
//         letterSpacing: '0.1em',
//         textTransform: 'uppercase',
//         cursor: 'default',
//         transition: 'all 0.2s cubic-bezier(0.16,1,0.3,1)',
//         background: hovered ? `${hoverColor}12` : 'rgba(255,255,255,0.03)',
//         border: `1px solid ${hovered ? `${hoverColor}35` : 'rgba(255,255,255,0.06)'}`,
//         color: hovered ? hoverColor : 'rgba(245,240,232,0.45)',
//         transform: hovered ? 'translateY(-2px)' : 'none',
//       }}
//     >
//       {label}
//     </span>
//   )
// }

// const SKILL_GROUPS = [
//   {
//     index: '01',
//     category: 'Frontend',
//     icon: Code2,
//     color: '#CCFF00',
//     description: 'Interfaces that are fast, accessible, and impossible to ignore.',
//     skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'],
//     highlights: [
//       'Built pixel-perfect UIs with React and Next.js for production apps.',
//       'Implemented complex state management using Redux and React Query.',
//       'Optimised Largest Contentful Paint and Core Web Vitals to green.',
//       'Authored design-system components adopted across multiple projects.',
//     ],
//   },
//   {
//     index: '02',
//     category: 'Backend',
//     icon: Server,
//     color: '#00D4FF',
//     description: 'Reliable, scalable services that power everything under the hood.',
//     skills: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'JWT', 'Socket.io'],
//     highlights: [
//       'Designed and shipped RESTful and GraphQL APIs consumed by React frontends.',
//       'Implemented JWT-based auth with refresh-token rotation for zero-trust sessions.',
//       'Built real-time features (notifications, presence) with Socket.io.',
//       'Wrote middleware layers for rate-limiting, logging, and error handling.',
//     ],
//   },
//   {
//     index: '03',
//     category: 'Database',
//     icon: Database,
//     color: '#FF6B6B',
//     description: 'Structured, queryable, and always-consistent data layers.',
//     skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma'],
//     highlights: [
//       'Modelled relational schemas in PostgreSQL with normalised foreign keys.',
//       'Used Redis for session caching and pub/sub event queues.',
//       'Wrote Prisma migrations for zero-downtime schema changes.',
//       'Profiled and resolved N+1 query problems reducing API latency by 60%.',
//     ],
//   },
//   {
//     index: '04',
//     category: 'DevOps & Tools',
//     icon: Wrench,
//     color: '#C084FC',
//     description: 'Shipping fast and keeping systems healthy in production.',
//     skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Vite', 'Linux'],
//     highlights: [
//       'Containerised services with Docker and orchestrated on AWS ECS.',
//       'Set up GitHub Actions pipelines for lint, test, and deploy on merge.',
//       'Maintained >85% test coverage across unit and integration suites with Jest.',
//       'Managed Linux servers, cron jobs, and environment configs for staging/prod.',
//     ],
//   },
// ]

// function SkillRow({ group, idx }) {
//   const [hovered, setHovered] = useState(false)
//   const Icon = group.icon

//   return (
//     <Reveal delay={200 + idx * 100}>
//       <div
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         style={{
//           display: 'grid',
//           gridTemplateColumns: '80px 1fr 1fr',
//           gap: '0 48px',
//           padding: '40px 0',
//           borderBottom: '1px solid rgba(255,255,255,0.08)',
//           transition: 'background 0.3s',
//           cursor: 'default',
//         }}
//       >
//         {/* Big number */}
//         <div style={{ paddingTop: 4 }}>
//           <span style={{
//             fontFamily: "'Fraunces', serif",
//             fontSize: 72,
//             fontWeight: 900,
//             lineHeight: 1,
//             color: hovered ? group.color : 'rgba(255,255,255,0.08)',
//             transition: 'color 0.35s ease',
//             display: 'block',
//           }}>{group.index}</span>
//         </div>

//         {/* Left: category + description */}
//         <div style={{ 
//           borderLeft: `2px solid ${hovered ? group.color : 'rgba(255,255,255,0.1)'}`, 
//           paddingLeft: 28, 
//           transition: 'border-color 0.3s' 
//         }}>
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: 10,
//             marginBottom: 16,
//           }}>
//             <div style={{
//               width: 32,
//               height: 32,
//               borderRadius: 8,
//               background: `${group.color}15`,
//               border: `1px solid ${group.color}25`,
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               color: group.color,
//             }}>
//               <Icon size={14} />
//             </div>
//             <div style={{
//               fontFamily: "'DM Mono', monospace",
//               fontSize: 10,
//               color: hovered ? group.color : 'rgba(255,255,255,0.25)',
//               letterSpacing: '0.22em',
//               textTransform: 'uppercase',
//               transition: 'color 0.3s',
//             }}>{group.category} · {group.skills.length} tools</div>
//           </div>
          
//           <h3 style={{
//             fontFamily: "'Fraunces', serif",
//             fontSize: 'clamp(22px, 3vw, 32px)',
//             fontWeight: 900,
//             color: '#F5F0E8',
//             lineHeight: 1.2,
//             letterSpacing: '-0.02em',
//             marginBottom: 12,
//             textTransform: 'none',
//           }}>{group.category}</h3>
          
//           <p style={{
//             fontFamily: "'Fraunces', serif",
//             fontSize: 13,
//             fontWeight: 300,
//             fontStyle: 'italic',
//             color: 'rgba(245,240,232,0.45)',
//             lineHeight: 1.6,
//             marginBottom: 20,
//           }}>{group.description}</p>

//           <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
//             {group.skills.slice(0, 5).map((skill, i) => (
//               <span key={skill} style={{
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 9,
//                 padding: '4px 10px',
//                 border: `1px solid ${hovered ? `${group.color}30` : 'rgba(255,255,255,0.08)'}`,
//                 color: hovered ? group.color : 'rgba(245,240,232,0.4)',
//                 background: hovered ? `${group.color}08` : 'transparent',
//                 transition: 'all 0.2s',
//               }}>
//                 {skill}
//               </span>
//             ))}
//             {group.skills.length > 5 && (
//               <span style={{
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 9,
//                 padding: '4px 10px',
//                 color: 'rgba(245,240,232,0.3)',
//               }}>
//                 +{group.skills.length - 5}
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Right: highlights */}
//         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//           <ul style={{
//             listStyle: 'none',
//             padding: 0,
//             margin: 0,
//             paddingLeft: 20,
//             borderLeft: `2px solid ${hovered ? group.color : 'rgba(255,255,255,0.1)'}`,
//             transition: 'border-color 0.3s',
//           }}>
//             {group.highlights.map((point, i) => (
//               <li key={i} style={{
//                 fontSize: 13,
//                 lineHeight: 1.65,
//                 color: 'rgba(245,240,232,0.5)',
//                 marginBottom: 10,
//                 position: 'relative',
//                 paddingLeft: 16,
//               }}>
//                 <span style={{
//                   position: 'absolute',
//                   left: 0,
//                   top: 6,
//                   width: 4,
//                   height: 4,
//                   borderRadius: '50%',
//                   background: hovered ? group.color : 'rgba(255,255,255,0.2)',
//                 }} />
//                 {point}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </Reveal>
//   )
// }

// export default function Skill() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

//         .skill-root {
//           background: #080808;
//           padding: 110px 80px 120px;
//           min-height: 100vh;
//           color: #F5F0E8;
//           position: relative;
//           overflow: hidden;
//         }

//         @media (max-width: 768px) {
//           .skill-root {
//             padding: 80px 24px 80px;
//           }
//           .skill-row {
//             grid-template-columns: 60px 1fr !important;
//           }
//           .skill-row > div:last-child {
//             display: none;
//           }
//         }

//         .skill-root::before {
//           content: '';
//           position: fixed;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
//           pointer-events: none;
//           z-index: 0;
//           opacity: 0.5;
//         }

//         @keyframes floatParticle {
//           0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
//           50% { transform: translateY(-15px) translateX(8px); opacity: 0.3; }
//         }

//         .floating-particle {
//           animation: floatParticle 5s ease-in-out infinite;
//         }
//       `}</style>

//       <section className="skill-root">
//         {/* Floating particles */}
//         <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
//           {[...Array(40)].map((_, i) => (
//             <div
//               key={i}
//               className="floating-particle"
//               style={{
//                 position: 'absolute',
//                 width: Math.random() * 2 + 1,
//                 height: Math.random() * 2 + 1,
//                 borderRadius: '50%',
//                 background: `rgba(204, 255, 0, ${Math.random() * 0.3})`,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 5}s`,
//               }}
//             />
//           ))}
//         </div>

//         <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

//           {/* ── Masthead ── */}
//           <Reveal>
//             <div style={{
//               borderBottom: '3px solid rgba(255,255,255,0.9)',
//               paddingBottom: 20,
//               marginBottom: 0,
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'flex-end',
//               flexWrap: 'wrap',
//               gap: 16,
//             }}>
//               <div style={{
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 10,
//                 color: 'rgba(255,255,255,0.3)',
//                 letterSpacing: '0.25em',
//                 textTransform: 'uppercase',
//               }}>Vol. 02 — Expertise</div>
//               <div style={{
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 10,
//                 color: 'rgba(255,255,255,0.3)',
//                 letterSpacing: '0.2em',
//               }}>Technical Capabilities</div>
//             </div>
//           </Reveal>

//           {/* ── Giant heading ── */}
//           <Reveal delay={80}>
//             <div style={{ padding: '32px 0 0', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: 0 }}>
//               <h2 style={{
//                 fontFamily: "'Fraunces', serif",
//                 fontSize: 'clamp(72px, 14vw, 180px)',
//                 fontWeight: 900,
//                 lineHeight: 0.85,
//                 letterSpacing: '-0.04em',
//                 margin: '0 0 12px',
//                 color: '#F5F0E8',
//               }}>
//                 Tech<span style={{ color: '#CCFF00' }}> Stack</span>
//                 <span style={{ color: '#CCFF00' }}>.</span>
//               </h2>
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 40,
//                 paddingBottom: 28,
//                 flexWrap: 'wrap',
//               }}>
//                 <p style={{
//                   fontFamily: "'Fraunces', serif",
//                   fontSize: 18,
//                   fontWeight: 300,
//                   fontStyle: 'italic',
//                   color: 'rgba(245,240,232,0.35)',
//                   maxWidth: 500,
//                   lineHeight: 1.6,
//                   margin: 0,
//                 }}>
//                   Every tool chosen deliberately — built for scale, speed, and long-term maintainability.
//                 </p>
//                 <div style={{ display: 'flex', gap: 12, marginLeft: 'auto', flexWrap: 'wrap' }}>
//                   {['Full Stack', 'System Design', 'Cloud Native'].map(tag => (
//                     <span key={tag} style={{
//                       fontFamily: "'DM Mono', monospace",
//                       fontSize: 10,
//                       letterSpacing: '0.18em',
//                       textTransform: 'uppercase',
//                       padding: '8px 18px',
//                       border: '1px solid rgba(255,255,255,0.15)',
//                       color: 'rgba(255,255,255,0.5)',
//                     }}>{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </Reveal>

//           {/* ── Skill rows ── */}
//           <div style={{ marginBottom: 80 }}>
//             {SKILL_GROUPS.map((group, idx) => (
//               <SkillRow key={group.index} group={group} idx={idx} />
//             ))}
//           </div>

//           {/* ── Footer rule ── */}
//           <Reveal delay={200}>
//             <div style={{
//               borderTop: '1px solid rgba(255,255,255,0.1)',
//               paddingTop: 20,
//               display: 'flex',
//               justifyContent: 'space-between',
//               fontFamily: "'DM Mono', monospace",
//               fontSize: 9,
//               color: 'rgba(255,255,255,0.15)',
//               letterSpacing: '0.2em',
//               textTransform: 'uppercase',
//             }}>
//               <span>End of capability matrix</span>
//               <span>{SKILL_GROUPS.reduce((acc, g) => acc + g.skills.length, 0)} tools mastered</span>
//             </div>
//           </Reveal>

//         </div>
//       </section>
//     </>
//   )
// }









// import React, { useState, useRef, useEffect } from 'react'
// import { 
//   Code2, Server, Database, Wrench, 
//   Terminal, Sparkles, ArrowRight, 
//   CheckCircle2, Zap, Globe, Star,
//   Compass, Wind, Sun, Moon, Leaf,
//   Feather, Droplet, Mountain
// } from 'lucide-react'

// function useReveal(delay = 0) {
//   const ref = useRef(null)
//   const [visible, setVisible] = useState(false)
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
//       { threshold: 0.08 }
//     )
//     if (ref.current) obs.observe(ref.current)
//     return () => obs.disconnect()
//   }, [])
//   return [ref, visible, delay]
// }

// function Reveal({ children, delay = 0, style = {} }) {
//   const [ref, visible] = useReveal()
//   return (
//     <div ref={ref} style={{
//       opacity: visible ? 1 : 0,
//       transform: visible ? 'none' : 'translateY(36px)',
//       transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
//       ...style,
//     }}>
//       {children}
//     </div>
//   )
// }

// // Nature-inspired skill categories with black theme
// const SKILL_MASTERY = [
//   {
//     id: 'frontend',
//     name: 'The Canopy',
//     icon: Leaf,
//     color: '#4CAF50',
//     description: 'Where users first connect — interfaces that feel alive and responsive.',
//     philosophy: 'The canopy reaches toward light, just as frontend reaches toward users.',
//     metaphor: 'Like leaves turning toward the sun, interfaces should respond to user intent.',
//     skills: [
//       { name: 'React', level: 94, years: 3, essence: 'Component harmony' },
//       { name: 'Next.js', level: 91, years: 2.5, essence: 'Universal rendering' },
//       { name: 'TypeScript', level: 89, years: 2.5, essence: 'Type safety' },
//       { name: 'Tailwind', level: 93, years: 2, essence: 'Utility flow' }
//     ]
//   },
//   {
//     id: 'backend',
//     name: 'The Roots',
//     icon: Mountain,
//     color: '#FF9800',
//     description: 'The unseen foundation that holds everything together.',
//     philosophy: 'Roots grow deep before trees grow tall. Backend is the foundation.',
//     metaphor: 'Like roots drawing water, backend pulls data from hidden sources.',
//     skills: [
//       { name: 'Node.js', level: 90, years: 3, essence: 'Event flow' },
//       { name: 'Express', level: 89, years: 3, essence: 'Route clarity' },
//       { name: 'GraphQL', level: 85, years: 1.5, essence: 'Query precision' },
//       { name: 'Python', level: 82, years: 2, essence: 'Logic purity' }
//     ]
//   },
//   {
//     id: 'database',
//     name: 'The Stream',
//     icon: Droplet,
//     color: '#2196F3',
//     description: 'Where information flows and finds its natural order.',
//     philosophy: 'Water finds its path. Data should flow freely but stay organized.',
//     metaphor: 'Like streams branching, databases connect information naturally.',
//     skills: [
//       { name: 'PostgreSQL', level: 88, years: 2.5, essence: 'Relational truth' },
//       { name: 'MongoDB', level: 86, years: 2, essence: 'Document flow' },
//       { name: 'Redis', level: 80, years: 1.5, essence: 'Lightning speed' },
//       { name: 'Prisma', level: 87, years: 1.5, essence: 'Schema art' }
//     ]
//   },
//   {
//     id: 'devops',
//     name: 'The Wind',
//     icon: Wind,
//     color: '#9C27B0',
//     description: 'Invisible yet essential — moving systems toward efficiency.',
//     philosophy: 'Wind cannot be seen, only felt. Great infrastructure is invisible.',
//     metaphor: 'Like wind shapes landscapes, DevOps shapes system architecture.',
//     skills: [
//       { name: 'Docker', level: 86, years: 2, essence: 'Container flow' },
//       { name: 'AWS', level: 84, years: 1.5, essence: 'Cloud wisdom' },
//       { name: 'CI/CD', level: 83, years: 2, essence: 'Automation rhythm' },
//       { name: 'Linux', level: 88, years: 3, essence: 'System harmony' }
//     ]
//   }
// ]

// function NatureCard({ mastery, index, activeMastery, setActiveMastery }) {
//   const [hovered, setHovered] = useState(false)
//   const isActive = activeMastery === mastery.id
//   const Icon = mastery.icon

//   return (
//     <Reveal delay={100 + index * 60}>
//       <div
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         onClick={() => setActiveMastery(isActive ? null : mastery.id)}
//         style={{
//           background: isActive ? `linear-gradient(135deg, ${mastery.color}08, transparent)` : 'transparent',
//           borderTop: `1px solid ${hovered || isActive ? mastery.color : 'rgba(255,255,255,0.06)'}`,
//           borderBottom: `1px solid ${hovered || isActive ? mastery.color : 'rgba(255,255,255,0.06)'}`,
//           padding: '32px 24px',
//           cursor: 'pointer',
//           transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
//           position: 'relative',
//         }}
//       >
//         <div style={{
//           display: 'flex',
//           alignItems: 'flex-start',
//           justifyContent: 'space-between',
//           flexWrap: 'wrap',
//           gap: 20,
//         }}>
//           <div style={{ flex: 1 }}>
//             <div style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: 10,
//               marginBottom: 12,
//             }}>
//               <Icon size={28} color={mastery.color} />
//               <h3 style={{
//                 fontFamily: "'Fraunces', serif",
//                 fontSize: 28,
//                 fontWeight: 700,
//                 color: hovered || isActive ? mastery.color : '#F5F0E8',
//                 lineHeight: 1,
//                 transition: 'color 0.3s',
//               }}>{mastery.name}</h3>
//             </div>
            
//             <p style={{
//               fontFamily: "'DM Mono', monospace",
//               fontSize: 11,
//               color: 'rgba(245,240,232,0.5)',
//               marginBottom: 16,
//               letterSpacing: '0.02em',
//             }}>{mastery.description}</p>
            
//             <p style={{
//               fontFamily: "'Fraunces', serif",
//               fontSize: 14,
//               fontStyle: 'italic',
//               color: 'rgba(245,240,232,0.4)',
//               lineHeight: 1.6,
//               maxWidth: 450,
//             }}>"{mastery.metaphor}"</p>
//           </div>

//           <div style={{
//             textAlign: 'right',
//           }}>
//             <div style={{
//               width: 56,
//               height: 56,
//               background: `${mastery.color}10`,
//               border: `1px solid ${mastery.color}20`,
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginBottom: 12,
//             }}>
//               <Feather size={24} color={mastery.color} />
//             </div>
//             <div style={{
//               fontFamily: "'Fraunces', serif",
//               fontSize: 32,
//               fontWeight: 900,
//               color: mastery.color,
//               lineHeight: 1,
//             }}>{Math.round(mastery.skills.reduce((acc, s) => acc + s.level, 0) / mastery.skills.length)}%</div>
//             <div style={{
//               fontFamily: "'DM Mono', monospace",
//               fontSize: 8,
//               color: 'rgba(245,240,232,0.3)',
//               letterSpacing: '0.1em',
//             }}>Mastery</div>
//           </div>
//         </div>

//         {isActive && (
//           <div style={{
//             marginTop: 32,
//             paddingTop: 32,
//             borderTop: '1px solid rgba(255,255,255,0.06)',
//           }}>
//             <div style={{
//               fontFamily: "'DM Mono', monospace",
//               fontSize: 9,
//               color: mastery.color,
//               letterSpacing: '0.2em',
//               marginBottom: 20,
//             }}>◉ CORE PHILOSOPHY</div>
//             <p style={{
//               fontFamily: "'Fraunces', serif",
//               fontSize: 14,
//               fontStyle: 'italic',
//               color: 'rgba(245,240,232,0.5)',
//               marginBottom: 32,
//               paddingLeft: 20,
//               borderLeft: `2px solid ${mastery.color}`,
//             }}>{mastery.philosophy}</p>

//             <div style={{
//               fontFamily: "'DM Mono', monospace",
//               fontSize: 9,
//               color: mastery.color,
//               letterSpacing: '0.2em',
//               marginBottom: 20,
//             }}>◉ TECHNICAL DEPTH</div>
            
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
//               gap: 16,
//             }}>
//               {mastery.skills.map((skill, i) => (
//                 <div key={skill.name} style={{
//                   padding: '12px',
//                   background: 'rgba(255,255,255,0.02)',
//                   border: '1px solid rgba(255,255,255,0.04)',
//                 }}>
//                   <div style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     marginBottom: 8,
//                   }}>
//                     <span style={{
//                       fontFamily: "'Fraunces', serif",
//                       fontSize: 14,
//                       fontWeight: 700,
//                       color: '#F5F0E8',
//                     }}>{skill.name}</span>
//                     <span style={{
//                       fontFamily: "'DM Mono', monospace",
//                       fontSize: 12,
//                       color: mastery.color,
//                     }}>{skill.level}%</span>
//                   </div>
//                   <div style={{
//                     height: 1,
//                     background: 'rgba(255,255,255,0.08)',
//                     marginBottom: 8,
//                   }}>
//                     <div style={{
//                       width: `${skill.level}%`,
//                       height: 1,
//                       background: mastery.color,
//                     }} />
//                   </div>
//                   <div style={{
//                     fontFamily: "'DM Mono', monospace",
//                     fontSize: 8,
//                     color: 'rgba(245,240,232,0.4)',
//                     letterSpacing: '0.05em',
//                   }}>{skill.essence}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </Reveal>
//   )
// }

// function PhilosophyQuote({ color }) {
//   return (
//     <div style={{
//       padding: '40px',
//       background: 'rgba(255,255,255,0.02)',
//       border: '1px solid rgba(255,255,255,0.04)',
//       textAlign: 'center',
//       position: 'relative',
//     }}>
//       <div style={{
//         position: 'absolute',
//         top: 20,
//         left: 20,
//         fontFamily: "'Fraunces', serif",
//         fontSize: 48,
//         color: color,
//         opacity: 0.15,
//       }}>"</div>
//       <div style={{
//         position: 'absolute',
//         bottom: 20,
//         right: 20,
//         fontFamily: "'Fraunces', serif",
//         fontSize: 48,
//         color: color,
//         opacity: 0.15,
//         transform: 'rotate(180deg)',
//       }}>"</div>
//       <p style={{
//         fontFamily: "'Fraunces', serif",
//         fontSize: 18,
//         fontStyle: 'italic',
//         color: 'rgba(245,240,232,0.5)',
//         lineHeight: 1.8,
//         maxWidth: 600,
//         margin: '0 auto',
//       }}>
//         Code is not merely instructions for machines. 
//         It is poetry written for humans who will read it years from now.
//       </p>
//       <div style={{
//         marginTop: 20,
//         fontFamily: "'DM Mono', monospace",
//         fontSize: 9,
//         color: color,
//         letterSpacing: '0.2em',
//       }}>— The Developer's Creed</div>
//     </div>
//   )
// }

// export default function Skill() {
//   const [activeMastery, setActiveMastery] = useState(null)
//   const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth)
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   const isMobile = windowWidth < 768
//   const totalSkills = SKILL_MASTERY.reduce((acc, m) => acc + m.skills.length, 0)
//   const avgMastery = Math.round(SKILL_MASTERY.reduce((acc, m) => 
//     acc + (m.skills.reduce((s, skill) => s + skill.level, 0) / m.skills.length), 0) / SKILL_MASTERY.length)

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

//         .skill-root {
//           background: #080808;
//           padding: 110px 80px 120px;
//           min-height: 100vh;
//           color: #F5F0E8;
//           position: relative;
//           overflow: hidden;
//         }

//         .skill-root::before {
//           content: '';
//           position: fixed;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
//           pointer-events: none;
//           z-index: 0;
//           opacity: 0.4;
//         }

//         @media (max-width: 768px) {
//           .skill-root {
//             padding: 80px 24px 80px;
//           }
//         }

//         @keyframes floatParticle {
//           0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
//           50% { transform: translateY(-20px) translateX(10px); opacity: 0.15; }
//         }

//         .floating-particle {
//           animation: floatParticle 6s ease-in-out infinite;
//         }
//       `}</style>

//       <section className="skill-root">
//         {/* Floating particles */}
//         <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
//           {[...Array(50)].map((_, i) => (
//             <div
//               key={i}
//               className="floating-particle"
//               style={{
//                 position: 'absolute',
//                 width: Math.random() * 2 + 1,
//                 height: Math.random() * 2 + 1,
//                 borderRadius: '50%',
//                 background: `rgba(204, 255, 0, ${Math.random() * 0.2})`,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 6}s`,
//               }}
//             />
//           ))}
//         </div>

//         <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 2 }}>

//           {/* Header */}
//           <Reveal>
//             <div style={{
//               marginBottom: 80,
//               textAlign: 'center',
//             }}>
//               <div style={{
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: 12,
//                 marginBottom: 24,
//               }}>
//                 <Leaf size={16} style={{ color: '#4CAF50' }} />
//                 <span style={{
//                   fontFamily: "'DM Mono', monospace",
//                   fontSize: 10,
//                   color: 'rgba(245,240,232,0.4)',
//                   letterSpacing: '0.3em',
//                   textTransform: 'uppercase',
//                 }}>The Ecosystem</span>
//               </div>
              
//               <h1 style={{
//                 fontFamily: "'Fraunces', serif",
//                 fontSize: 'clamp(48px, 10vw, 120px)',
//                 fontWeight: 900,
//                 lineHeight: 0.9,
//                 letterSpacing: '-0.02em',
//                 color: '#F5F0E8',
//                 marginBottom: 24,
//               }}>
//                 Skills That
//                 <br />
//                 Grow With You
//               </h1>
              
//               <div style={{
//                 width: 60,
//                 height: 2,
//                 background: '#4CAF50',
//                 margin: '0 auto 24px auto',
//               }} />
              
//               <p style={{
//                 fontFamily: "'Fraunces', serif",
//                 fontSize: 16,
//                 fontStyle: 'italic',
//                 color: 'rgba(245,240,232,0.4)',
//                 maxWidth: 500,
//                 margin: '0 auto',
//                 lineHeight: 1.6,
//               }}>
//                 A living ecosystem of technologies that evolve and adapt
//               </p>
//             </div>
//           </Reveal>

//           {/* Stats */}
//           <Reveal delay={80}>
//             <div style={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: isMobile ? 32 : 64,
//               marginBottom: 80,
//               flexWrap: 'wrap',
//             }}>
//               <div style={{ textAlign: 'center' }}>
//                 <div style={{
//                   fontFamily: "'Fraunces', serif",
//                   fontSize: 48,
//                   fontWeight: 900,
//                   color: '#F5F0E8',
//                 }}>{totalSkills}</div>
//                 <div style={{
//                   fontFamily: "'DM Mono', monospace",
//                   fontSize: 9,
//                   color: 'rgba(245,240,232,0.3)',
//                   letterSpacing: '0.15em',
//                   marginTop: 8,
//                 }}>TECHNOLOGIES</div>
//               </div>
//               <div style={{ width: 1, background: 'rgba(255,255,255,0.1)' }} />
//               <div style={{ textAlign: 'center' }}>
//                 <div style={{
//                   fontFamily: "'Fraunces', serif",
//                   fontSize: 48,
//                   fontWeight: 900,
//                   color: '#F5F0E8',
//                 }}>{avgMastery}%</div>
//                 <div style={{
//                   fontFamily: "'DM Mono', monospace",
//                   fontSize: 9,
//                   color: 'rgba(245,240,232,0.3)',
//                   letterSpacing: '0.15em',
//                   marginTop: 8,
//                 }}>AVG MASTERY</div>
//               </div>
//               <div style={{ width: 1, background: 'rgba(255,255,255,0.1)' }} />
//               <div style={{ textAlign: 'center' }}>
//                 <div style={{
//                   fontFamily: "'Fraunces', serif",
//                   fontSize: 48,
//                   fontWeight: 900,
//                   color: '#F5F0E8',
//                 }}>{SKILL_MASTERY.length}</div>
//                 <div style={{
//                   fontFamily: "'DM Mono', monospace",
//                   fontSize: 9,
//                   color: 'rgba(245,240,232,0.3)',
//                   letterSpacing: '0.15em',
//                   marginTop: 8,
//                 }}>DISCIPLINES</div>
//               </div>
//             </div>
//           </Reveal>

//           {/* Nature-inspired Cards */}
//           <div style={{ marginBottom: 80 }}>
//             {SKILL_MASTERY.map((mastery, index) => (
//               <NatureCard 
//                 key={mastery.id}
//                 mastery={mastery}
//                 index={index}
//                 activeMastery={activeMastery}
//                 setActiveMastery={setActiveMastery}
//               />
//             ))}
//           </div>

//           {/* Philosophy Quote */}
//           <Reveal delay={200}>
//             <PhilosophyQuote color="#4CAF50" />
//           </Reveal>

//           {/* Footer */}
//           <Reveal delay={250}>
//             <div style={{
//               marginTop: 60,
//               paddingTop: 32,
//               borderTop: '1px solid rgba(255,255,255,0.06)',
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               flexWrap: 'wrap',
//               gap: 16,
//             }}>
//               <div style={{
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 8,
//                 color: 'rgba(245,240,232,0.2)',
//                 letterSpacing: '0.15em',
//               }}>
//                 Continuous Growth
//               </div>
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 8,
//               }}>
//                 <Star size={10} style={{ color: '#4CAF50' }} />
//                 <span style={{
//                   fontFamily: "'DM Mono', monospace",
//                   fontSize: 8,
//                   color: 'rgba(245,240,232,0.2)',
//                   letterSpacing: '0.1em',
//                 }}>Always learning, always evolving</span>
//               </div>
//               <div style={{
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 8,
//                 color: 'rgba(245,240,232,0.2)',
//                 letterSpacing: '0.15em',
//               }}>
//                 The journey continues
//               </div>
//             </div>
//           </Reveal>

//         </div>
//       </section>
//     </>
//   )
// }































// import { useState, useRef, useEffect } from 'react'
// import { Code2, Server, Database, Wrench, Sparkles, ArrowRight, CheckCircle2, Zap, Globe, Star, Leaf, Droplet, Mountain, Wind } from 'lucide-react'

// function useInView(options = {}) {
//   const ref = useRef(null)
//   const [visible, setVisible] = useState(false)
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => {
//       if (e.isIntersecting) { setVisible(true); obs.disconnect() }
//     }, { threshold: 0.1, ...options })
//     if (ref.current) obs.observe(ref.current)
//     return () => obs.disconnect()
//   }, [])
//   return [ref, visible]
// }

// const SKILL_CATEGORIES = [
//   {
//     num: '01',
//     name: 'Frontend',
//     icon: Code2,
//     color: '#CCFF00',
//     description: 'Interfaces that are fast, accessible, and impossible to ignore.',
//     philosophy: 'The canopy reaches toward light, just as frontend reaches toward users.',
//     skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
//     highlights: [
//       'Built pixel-perfect UIs with React and Next.js for production apps.',
//       'Implemented complex state management using Redux and React Query.',
//       'Optimised Largest Contentful Paint and Core Web Vitals to green.',
//       'Authored design-system components adopted across multiple projects.',
//     ],
//     mastery: 92,
//   },
//   {
//     num: '02',
//     name: 'Backend',
//     icon: Server,
//     color: '#00D4FF',
//     description: 'Reliable, scalable services that power everything under the hood.',
//     philosophy: 'Roots grow deep before trees grow tall. Backend is the foundation.',
//     skills: ['Node.js', 'Express', 'GraphQL', 'JWT', 'Socket.io', 'NestJS'],
//     highlights: [
//       'Designed and shipped RESTful and GraphQL APIs consumed by React frontends.',
//       'Implemented JWT-based auth with refresh-token rotation for zero-trust sessions.',
//       'Built real-time features (notifications, presence) with Socket.io.',
//       'Wrote middleware layers for rate-limiting, logging, and error handling.',
//     ],
//     mastery: 89,
//   },
//   {
//     num: '03',
//     name: 'Database',
//     icon: Database,
//     color: '#FF6B6B',
//     description: 'Structured, queryable, and always-consistent data layers.',
//     philosophy: 'Water finds its path. Data should flow freely but stay organized.',
//     skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Firebase'],
//     highlights: [
//       'Modelled relational schemas in PostgreSQL with normalised foreign keys.',
//       'Used Redis for session caching and pub/sub event queues.',
//       'Wrote Prisma migrations for zero-downtime schema changes.',
//       'Profiled and resolved N+1 query problems reducing API latency by 60%.',
//     ],
//     mastery: 86,
//   },
//   {
//     num: '04',
//     name: 'DevOps',
//     icon: Wrench,
//     color: '#C084FC',
//     description: 'Shipping fast and keeping systems healthy in production.',
//     philosophy: 'Wind cannot be seen, only felt. Great infrastructure is invisible.',
//     skills: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Kubernetes', 'Git'],
//     highlights: [
//       'Containerised services with Docker and orchestrated on AWS ECS.',
//       'Set up GitHub Actions pipelines for lint, test, and deploy on merge.',
//       'Maintained >85% test coverage across unit and integration suites with Jest.',
//       'Managed Linux servers, cron jobs, and environment configs for staging/prod.',
//     ],
//     mastery: 84,
//   },
// ]

// function SkillCard({ skill, idx }) {
//   const [ref, visible] = useInView()
//   const [hovered, setHovered] = useState(false)
//   const Icon = skill.icon

//   return (
//     <article
//       ref={ref}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? 'none' : 'translateY(60px)',
//         transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${idx * 150}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${idx * 150}ms`,
//         borderTop: '1px solid rgba(255,255,255,0.1)',
//         paddingTop: 0,
//         marginBottom: 0,
//       }}
//     >
//       {/* Top bar — number + category + mastery */}
//       <div style={{
//         display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//         padding: '20px 0 0',
//         borderBottom: '1px solid rgba(255,255,255,0.06)',
//         marginBottom: 0,
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
//           <span style={{
//             fontFamily: "'DM Mono', monospace", fontSize: 11,
//             color: skill.color, letterSpacing: '0.2em', fontWeight: 500,
//           }}>
//             {skill.num}
//           </span>
//           <span style={{
//             fontFamily: "'DM Mono', monospace", fontSize: 10,
//             color: 'rgba(255,255,255,0.3)', letterSpacing: '0.18em',
//             textTransform: 'uppercase',
//           }}>
//             {skill.name}
//           </span>
//         </div>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: 8,
//         }}>
//           <span style={{
//             fontFamily: "'DM Mono', monospace", fontSize: 10,
//             color: skill.color, letterSpacing: '0.15em',
//           }}>
//             Mastery
//           </span>
//           <span style={{
//             fontFamily: "'Fraunces', serif",
//             fontSize: 20,
//             fontWeight: 900,
//             color: skill.color,
//           }}>{skill.mastery}%</span>
//         </div>
//       </div>

//       {/* Main content grid */}
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr',
//         gap: 0,
//         padding: '48px 0 52px',
//       }}>
//         {/* Left: Title block */}
//         <div style={{ paddingRight: 60, borderRight: '1px solid rgba(255,255,255,0.06)' }}>
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: 12,
//             marginBottom: 24,
//           }}>
//             <div style={{
//               width: 48,
//               height: 48,
//               background: `${skill.color}15`,
//               border: `1px solid ${skill.color}30`,
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               transition: 'all 0.3s',
//             }}>
//               <Icon size={24} color={skill.color} />
//             </div>
//             <h3 style={{
//               fontFamily: "'Fraunces', serif",
//               fontSize: 'clamp(28px, 4vw, 42px)',
//               fontWeight: 900,
//               lineHeight: 0.92,
//               letterSpacing: '-0.03em',
//               color: hovered ? skill.color : '#F5F0E8',
//               transition: 'color 0.4s ease',
//               textTransform: 'none',
//             }}>
//               {skill.name}
//             </h3>
//           </div>

//           <p style={{
//             fontFamily: "'Fraunces', serif",
//             fontSize: 15,
//             fontWeight: 300,
//             fontStyle: 'italic',
//             color: 'rgba(245,240,232,0.45)',
//             lineHeight: 1.75,
//             marginBottom: 28,
//           }}>
//             "{skill.description}"
//           </p>

//           {/* Philosophy quote */}
//           <div style={{
//             borderLeft: `2px solid ${skill.color}`,
//             paddingLeft: 16,
//             marginBottom: 32,
//           }}>
//             <p style={{
//               fontFamily: "'Fraunces', serif",
//               fontSize: 13,
//               fontStyle: 'italic',
//               color: 'rgba(245,240,232,0.35)',
//               lineHeight: 1.5,
//             }}>
//               {skill.philosophy}
//             </p>
//           </div>

//           {/* Tech stack tags */}
//           <div>
//             <div style={{
//               fontFamily: "'DM Mono', monospace", fontSize: 9,
//               color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em',
//               textTransform: 'uppercase', marginBottom: 12,
//             }}>Core Technologies</div>
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
//               {skill.skills.map(tech => (
//                 <TechTag key={tech} label={tech} accent={skill.color} />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right: Highlights */}
//         <div style={{ paddingLeft: 60, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//           <div>
//             <div style={{
//               fontFamily: "'DM Mono', monospace", fontSize: 9,
//               color: skill.color, letterSpacing: '0.2em',
//               textTransform: 'uppercase', marginBottom: 20,
//             }}>Key Achievements</div>
//             <ul style={{
//               listStyle: 'none',
//               padding: 0,
//               margin: 0,
//             }}>
//               {skill.highlights.map((point, i) => (
//                 <li key={i} style={{
//                   fontSize: 14,
//                   lineHeight: 1.65,
//                   color: 'rgba(245,240,232,0.5)',
//                   marginBottom: 14,
//                   position: 'relative',
//                   paddingLeft: 20,
//                 }}>
//                   <span style={{
//                     position: 'absolute',
//                     left: 0,
//                     top: 6,
//                     width: 6,
//                     height: 6,
//                     borderRadius: '50%',
//                     background: skill.color,
//                   }} />
//                   {point}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Mastery progress */}
//           <div style={{ marginTop: 32 }}>
//             <div style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               marginBottom: 8,
//             }}>
//               <span style={{
//                 fontFamily: "'DM Mono', monospace", fontSize: 9,
//                 color: 'rgba(245,240,232,0.3)',
//                 letterSpacing: '0.1em',
//               }}>Proficiency</span>
//               <span style={{
//                 fontFamily: "'DM Mono', monospace", fontSize: 11,
//                 color: skill.color,
//               }}>{skill.mastery}%</span>
//             </div>
//             <div style={{
//               height: 2,
//               background: 'rgba(255,255,255,0.08)',
//             }}>
//               <div style={{
//                 width: `${skill.mastery}%`,
//                 height: '100%',
//                 background: skill.color,
//                 transition: 'width 0.5s ease',
//               }} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//   )
// }

// function TechTag({ label, accent }) {
//   const [hov, setHov] = useState(false)
//   return (
//     <span
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         fontFamily: "'DM Mono', monospace", fontSize: 9,
//         letterSpacing: '0.1em', textTransform: 'uppercase',
//         padding: '4px 10px',
//         border: `1px solid ${hov ? accent : 'rgba(255,255,255,0.12)'}`,
//         color: hov ? accent : 'rgba(255,255,255,0.4)',
//         background: hov ? `${accent}0f` : 'transparent',
//         transition: 'all 0.2s ease',
//         cursor: 'default',
//       }}
//     >{label}</span>
//   )
// }

// function HeadingWord({ children, accent }) {
//   const [hov, setHov] = useState(false)
//   return (
//     <span
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         color: hov ? accent : 'inherit',
//         transition: 'color 0.3s ease',
//         cursor: 'default',
//       }}
//     >{children}</span>
//   )
// }

// export default function Skill() {
//   const [headerRef, headerVisible] = useInView()
//   const totalSkills = SKILL_CATEGORIES.reduce((acc, s) => acc + s.skills.length, 0)
//   const avgMastery = Math.round(SKILL_CATEGORIES.reduce((acc, s) => acc + s.mastery, 0) / SKILL_CATEGORIES.length)

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

//         .skill-root {
//           background: #0a0a0a;
//           min-height: 100vh;
//           padding: 100px 80px 120px;
//           color: #F5F0E8;
//           position: relative;
//           overflow: hidden;
//         }
//         @media (max-width: 768px) {
//           .skill-root { padding: 80px 24px 80px; }
//         }

//         /* Faint vertical rule */
//         .skill-root::after {
//           content: '';
//           position: absolute;
//           top: 0; bottom: 0;
//           left: 80px;
//           width: 1px;
//           background: rgba(255,255,255,0.03);
//           pointer-events: none;
//         }

//         @keyframes floatParticle {
//           0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
//           50% { transform: translateY(-20px) translateX(10px); opacity: 0.15; }
//         }

//         .floating-particle {
//           animation: floatParticle 6s ease-in-out infinite;
//         }
//       `}</style>

//       <section className="skill-root">
//         {/* Floating particles */}
//         <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
//           {[...Array(40)].map((_, i) => (
//             <div
//               key={i}
//               className="floating-particle"
//               style={{
//                 position: 'absolute',
//                 width: Math.random() * 2 + 1,
//                 height: Math.random() * 2 + 1,
//                 borderRadius: '50%',
//                 background: `rgba(204, 255, 0, ${Math.random() * 0.2})`,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 6}s`,
//               }}
//             />
//           ))}
//         </div>

//         <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>

//           {/* Header */}
//           <div
//             ref={headerRef}
//             style={{
//               marginBottom: 80,
//               opacity: headerVisible ? 1 : 0,
//               transform: headerVisible ? 'none' : 'translateY(40px)',
//               transition: 'opacity 0.8s ease, transform 0.8s ease',
//             }}
//           >
//             {/* Eyebrow */}
//             <div style={{
//               display: 'flex', alignItems: 'center', gap: 14,
//               marginBottom: 28,
//             }}>
//               <div style={{ width: 40, height: 1, background: '#CCFF00' }} />
//               <span style={{
//                 fontFamily: "'DM Mono', monospace", fontSize: 10,
//                 color: '#CCFF00', letterSpacing: '0.3em', textTransform: 'uppercase',
//               }}>Core Competencies</span>
//             </div>

//             {/* Main heading */}
//             <h2 style={{
//               fontFamily: "'Fraunces', serif",
//               fontSize: 'clamp(64px, 12vw, 160px)',
//               fontWeight: 900,
//               lineHeight: 0.85,
//               letterSpacing: '-0.04em',
//               margin: 0,
//               display: 'flex',
//               flexDirection: 'column',
//             }}>
//               <HeadingWord accent="#CCFF00">Technical</HeadingWord>
//               <span style={{ display: 'flex', alignItems: 'baseline', gap: '0.15em' }}>
//                 <HeadingWord accent="#FF6B6B">Arsenal</HeadingWord>
//                 <span style={{ color: 'rgba(245,240,232,0.12)', fontStyle: 'italic', fontWeight: 300, fontSize: '0.6em' }}>.</span>
//               </span>
//             </h2>

//             {/* Subtitle with stats */}
//             <div style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               flexWrap: 'wrap',
//               gap: 20,
//               marginTop: 28,
//             }}>
//               <p style={{
//                 fontFamily: "'Fraunces', serif",
//                 fontSize: 18, fontWeight: 300, fontStyle: 'italic',
//                 color: 'rgba(245,240,232,0.35)',
//                 maxWidth: 440, lineHeight: 1.6,
//               }}>
//                 A curated collection of technologies and practices that power modern applications.
//               </p>
//               <div style={{ display: 'flex', gap: 24 }}>
//                 <div style={{ textAlign: 'center' }}>
//                   <div style={{
//                     fontFamily: "'Fraunces', serif",
//                     fontSize: 32,
//                     fontWeight: 900,
//                     color: '#CCFF00',
//                   }}>{totalSkills}+</div>
//                   <div style={{
//                     fontFamily: "'DM Mono', monospace",
//                     fontSize: 8,
//                     color: 'rgba(245,240,232,0.3)',
//                     letterSpacing: '0.1em',
//                   }}>Technologies</div>
//                 </div>
//                 <div style={{ width: 1, background: 'rgba(255,255,255,0.1)' }} />
//                 <div style={{ textAlign: 'center' }}>
//                   <div style={{
//                     fontFamily: "'Fraunces', serif",
//                     fontSize: 32,
//                     fontWeight: 900,
//                     color: '#CCFF00',
//                   }}>{avgMastery}%</div>
//                   <div style={{
//                     fontFamily: "'DM Mono', monospace",
//                     fontSize: 8,
//                     color: 'rgba(245,240,232,0.3)',
//                     letterSpacing: '0.1em',
//                   }}>Avg Mastery</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Skill cards */}
//           <div>
//             {SKILL_CATEGORIES.map((skill, idx) => (
//               <div key={skill.num} style={{ '--accent': skill.color }}>
//                 <SkillCard skill={skill} idx={idx} />
//               </div>
//             ))}
//             {/* Closing rule */}
//             <div style={{ 
//               borderTop: '1px solid rgba(255,255,255,0.1)', 
//               paddingTop: 24, 
//               display: 'flex', 
//               justifyContent: 'space-between', 
//               alignItems: 'center', 
//               marginTop: 0 
//             }}>
//               <span style={{ 
//                 fontFamily: "'DM Mono', monospace", 
//                 fontSize: 9, 
//                 color: 'rgba(255,255,255,0.18)', 
//                 letterSpacing: '0.2em', 
//                 textTransform: 'uppercase' 
//               }}>
//                 End of capabilities
//               </span>
//               <span style={{ 
//                 fontFamily: "'DM Mono', monospace", 
//                 fontSize: 9, 
//                 color: 'rgba(255,255,255,0.18)', 
//                 letterSpacing: '0.2em' 
//               }}>
//                 {SKILL_CATEGORIES.length} disciplines mastered
//               </span>
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   )
// }












import { useState, useRef, useEffect } from "react";

function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.06 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(36px)",
      transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

const SKILLS = [
  {
    num: "01",
    name: "Frontend",
    label: "Client Layer",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    mastery: 92,
    note: "Interfaces that are fast, accessible, and impossible to ignore.",
    highlights: [
      ["Pixel-perfect UIs", "React & Next.js production apps with full design-system coverage."],
      ["State management", "Redux and React Query for complex data flow and caching."],
      ["Web Vitals", "Optimised LCP, CLS, and FID to green across all pages."],
      ["Design systems", "Authored component libraries adopted across multiple teams."],
    ],
  },
  {
    num: "02",
    name: "Backend",
    label: "Server Layer",
    stack: ["Node.js", "Express", "GraphQL", "JWT", "Socket.io", "NestJS"],
    mastery: 89,
    note: "Reliable, scalable services that power everything under the hood.",
    highlights: [
      ["REST & GraphQL", "APIs consumed by React frontends across multiple products."],
      ["Auth", "JWT with refresh-token rotation for zero-trust session management."],
      ["Real-time", "Notifications and presence indicators via Socket.io."],
      ["Middleware", "Rate-limiting, structured logging, and centralised error handling."],
    ],
  },
  {
    num: "03",
    name: "Database",
    label: "Data Layer",
    stack: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Firebase"],
    mastery: 86,
    note: "Structured, queryable, and always-consistent data layers.",
    highlights: [
      ["Relational schemas", "Normalised PostgreSQL models with enforced foreign keys."],
      ["Caching", "Redis for session storage and pub/sub event queuing."],
      ["Migrations", "Zero-downtime schema changes via Prisma migrate."],
      ["Query optimisation", "Resolved N+1 problems, cutting API latency by 60%."],
    ],
  },
  {
    num: "04",
    name: "DevOps",
    label: "Ops Layer",
    stack: ["Docker", "AWS", "CI/CD", "Linux", "Kubernetes", "Git"],
    mastery: 84,
    note: "Shipping fast and keeping systems healthy in production.",
    highlights: [
      ["Containers", "Docker services orchestrated on AWS ECS."],
      ["Pipelines", "GitHub Actions for lint → test → deploy on every merge."],
      ["Coverage", ">85% across unit and integration suites with Jest."],
      ["Linux ops", "Servers, cron jobs, and env configs across staging and prod."],
    ],
  },
];

function SkillRow({ skill, idx }) {
  const [ref, visible] = useInView();
  const [open, setOpen] = useState(false);

  return (
    <div
      ref={ref}
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(40px)",
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${idx * 120}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${idx * 120}ms`,
      }}
    >
      {/* — collapsed header row — */}
      <div
        onClick={() => setOpen((o) => !o)}
        className="skill-header-row"
      >
        {/* number */}
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 10, color: "rgba(245,240,232,0.25)",
          letterSpacing: "0.2em",
        }}>{skill.num}</span>

        {/* name + label */}
        <div>
          <div style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 900,
            fontSize: "clamp(28px, 5vw, 54px)",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "#F5F0E8",
            transition: "color 0.25s",
          }}
            onMouseEnter={e => e.currentTarget.style.color = "#CCFF00"}
            onMouseLeave={e => e.currentTarget.style.color = "#F5F0E8"}
          >{skill.name}</div>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 9, color: "rgba(245,240,232,0.25)",
            letterSpacing: "0.22em", textTransform: "uppercase",
            marginTop: 6,
          }}>{skill.label}</div>
        </div>

        {/* stack tags — hidden on expand */}
        <div className="skill-stack-tags" style={{
          opacity: open ? 0 : 1,
        }}>
          {skill.stack.slice(0, 3).map(t => (
            <span key={t} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 9, letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "4px 10px",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(245,240,232,0.4)",
            }}>{t}</span>
          ))}
          {skill.stack.length > 3 && (
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 9, color: "rgba(245,240,232,0.2)",
              padding: "4px 6px",
            }}>+{skill.stack.length - 3}</span>
          )}
        </div>

        {/* mastery % + toggle */}
        <div style={{ textAlign: "right" }}>
          <div style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 900,
            fontSize: "clamp(24px, 3vw, 40px)",
            lineHeight: 1,
            color: open ? "#CCFF00" : "#F5F0E8",
            transition: "color 0.3s",
          }}>{skill.mastery}<span style={{ fontSize: "0.5em", color: "rgba(245,240,232,0.3)" }}>%</span></div>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 8, letterSpacing: "0.2em",
            color: open ? "#CCFF00" : "rgba(245,240,232,0.2)",
            textTransform: "uppercase", marginTop: 4,
            transition: "color 0.3s",
          }}>{open ? "Close" : "Open"}</div>
        </div>
      </div>

      {/* — expanded panel — */}
      <div style={{
        maxHeight: open ? 700 : 0,
        overflow: "hidden",
        transition: "max-height 0.6s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <div style={{ paddingBottom: 48 }}>

          {/* italic note */}
          <p style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 300, fontStyle: "italic",
            fontSize: 16, lineHeight: 1.7,
            color: "rgba(245,240,232,0.35)",
            margin: "0 0 36px",
            maxWidth: 560,
          }}>{skill.note}</p>

          {/* two-col layout */}
          <div className="skill-expand-grid">

            {/* highlights */}
            <div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 9, letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#CCFF00",
                marginBottom: 20,
              }}>Key Achievements</div>
              {skill.highlights.map(([title, body], i) => (
                <div key={i} style={{
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  padding: "14px 0",
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: 16,
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(10px)",
                  transition: `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s`,
                }}>
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 9, letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(245,240,232,0.35)",
                    paddingTop: 2,
                  }}>{title}</span>
                  <span style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 300, fontSize: 13.5,
                    lineHeight: 1.7,
                    color: "rgba(245,240,232,0.55)",
                  }}>{body}</span>
                </div>
              ))}
            </div>

            {/* right: stack + mastery bar */}
            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>

              {/* full stack */}
              <div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 9, letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,232,0.25)",
                  marginBottom: 14,
                }}>Technologies</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {skill.stack.map(t => (
                    <span key={t} style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 9, letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "5px 12px",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(245,240,232,0.45)",
                      transition: "all 0.15s",
                      cursor: "default",
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = "#CCFF00";
                        e.currentTarget.style.color = "#CCFF00";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                        e.currentTarget.style.color = "rgba(245,240,232,0.45)";
                      }}
                    >{t}</span>
                  ))}
                </div>
              </div>

              {/* mastery — same style as the loading bar */}
              <div>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "baseline", marginBottom: 12,
                }}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 9, letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "rgba(245,240,232,0.25)",
                  }}>Mastery</div>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 12, color: "#F5F0E8", fontWeight: 500,
                  }}>
                    {skill.mastery}<span style={{ color: "rgba(245,240,232,0.3)" }}>%</span>
                  </div>
                </div>
                {/* 2px bar — identical to LoadingScreen */}
                <div style={{
                  height: 2,
                  background: "rgba(255,255,255,0.08)",
                  width: "100%",
                }}>
                  <div style={{
                    height: "100%",
                    background: "#CCFF00",
                    width: open ? `${skill.mastery}%` : "0%",
                    transition: "width 1.2s cubic-bezier(0.16,1,0.3,1) 0.2s",
                  }} />
                </div>

                {/* sub-bar labels */}
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  marginTop: 6,
                }}>
                  {["0", "25", "50", "75", "100"].map(v => (
                    <span key={v} style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 8, color: "rgba(245,240,232,0.18)",
                    }}>{v}</span>
                  ))}
                </div>

                {/* large mastery number */}
                <div style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 900,
                  fontSize: "clamp(48px, 8vw, 88px)",
                  lineHeight: 0.85,
                  letterSpacing: "-0.04em",
                  color: "#CCFF00",
                  marginTop: 20,
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(16px)",
                  transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
                }}>
                  {skill.mastery}<span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontWeight: 400,
                    fontSize: "0.28em",
                    color: "rgba(204,255,0,0.5)",
                    letterSpacing: "0.2em",
                  }}>%</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skill() {
  const totalSkills = SKILLS.reduce((a, s) => a + s.stack.length, 0);
  const avgMastery = Math.round(SKILLS.reduce((a, s) => a + s.mastery, 0) / SKILLS.length);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

        .skill-root {
          background: #080808;
          min-height: 100vh;
          padding: 0 0 120px;
          color: #F5F0E8;
          position: relative;
          overflow: hidden;
        }

        .skill-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
          pointer-events: none;
          z-index: 0;
          opacity: 0.5;
        }

        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.4; }
        }

        .skill-particle {
          animation: floatParticle 4s ease-in-out infinite;
        }

        .skill-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 1;
        }

        .skill-header-row {
          display: grid;
          grid-template-columns: 60px 1fr auto 80px;
          align-items: center;
          padding: 28px 0;
          cursor: pointer;
          gap: 0;
        }

        .skill-expand-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 64px;
        }

        .skill-stack-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          justify-content: flex-end;
          padding-right: 32px;
          max-width: 320px;
          transition: opacity 0.2s;
        }

        @media (max-width: 768px) {
          .skill-container { padding: 0 24px; }
          .skill-header-row {
            grid-template-columns: 40px 1fr 60px !important;
            padding: 20px 0 !important;
          }
          .skill-expand-grid {
            grid-template-columns: 1fr !important;
            gap: 32px 0 !important;
          }
          .skill-stack-tags {
            display: none !important;
          }
        }
      `}</style>

      <section className="skill-root">

        {/* particles — same as LoadingScreen */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
          {[...Array(50)].map((_, i) => (
            <div key={i} className="skill-particle" style={{
              position: "absolute",
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              borderRadius: "50%",
              background: `rgba(204,255,0,${Math.random() * 0.4})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }} />
          ))}
        </div>

        {/* corner decorations — same as LoadingScreen */}
        {[
          { top: 32, left: 32, borderTop: "1px solid rgba(255,255,255,0.1)", borderLeft: "1px solid rgba(255,255,255,0.1)" },
          { top: 32, right: 32, borderTop: "1px solid rgba(255,255,255,0.1)", borderRight: "1px solid rgba(255,255,255,0.1)" },
          { bottom: 32, left: 32, borderBottom: "1px solid rgba(255,255,255,0.1)", borderLeft: "1px solid rgba(255,255,255,0.1)" },
          { bottom: 32, right: 32, borderBottom: "1px solid rgba(255,255,255,0.1)", borderRight: "1px solid rgba(255,255,255,0.1)" },
        ].map((s, i) => (
          <div key={i} style={{
            position: "fixed", width: 64, height: 64, ...s, zIndex: 2, pointerEvents: "none",
          }} />
        ))}

        <div className="skill-container">

          {/* ── Masthead — same pattern as LoadingScreen ── */}
          <Reveal>
            <div style={{
              borderBottom: "3px solid rgba(255,255,255,0.9)",
              paddingBottom: 20,
              marginTop: 80,
              marginBottom: 48,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 16,
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}>Vol. 01 — Skills</div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.2em",
              }}>Core Competencies</div>
            </div>
          </Reveal>

          {/* ── Giant heading — same as LoadingScreen ── */}
          <Reveal delay={100}>
            <div style={{ marginBottom: 64 }}>
              <h2 style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(64px, 15vw, 160px)",
                fontWeight: 900,
                lineHeight: 0.85,
                letterSpacing: "-0.04em",
                margin: "0 0 24px",
                color: "#F5F0E8",
              }}>
                Technical<br />
                Arsenal<span style={{ color: "#CCFF00" }}>.</span>
              </h2>

              <div style={{ display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
                <p style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: 18, fontWeight: 300, fontStyle: "italic",
                  color: "rgba(245,240,232,0.35)",
                  maxWidth: 460, lineHeight: 1.6, margin: 0,
                }}>
                  A curated collection of technologies and practices that power modern full-stack applications.
                </p>
                <div style={{ display: "flex", gap: 12, marginLeft: "auto", flexWrap: "wrap" }}>
                  {[`${totalSkills}+ Technologies`, `${SKILLS.length} Disciplines`, `${avgMastery}% Avg`].map(tag => (
                    <span key={tag} style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10, letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      padding: "8px 18px",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "rgba(255,255,255,0.5)",
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── instruction line ── */}
          <Reveal delay={180}>
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              marginBottom: 8,
              fontFamily: "'DM Mono', monospace",
              fontSize: 9, letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.2)",
            }}>
              <span style={{ color: "#CCFF00" }}>→</span>
              <span>Click any row to expand</span>
            </div>
          </Reveal>

          {/* ── skill rows ── */}
          <div>
            {SKILLS.map((skill, idx) => (
              <SkillRow key={skill.num} skill={skill} idx={idx} />
            ))}

            {/* closing border — same as LoadingScreen footer */}
            <Reveal>
              <div style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: 32,
                marginTop: 0,
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "'DM Mono', monospace",
                fontSize: 9,
                color: "rgba(255,255,255,0.15)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}>
                <span>End of index</span>
                <span>{SKILLS.length} disciplines — {totalSkills}+ technologies</span>
              </div>
            </Reveal>
          </div>

        </div>
      </section>
    </>
  );
}