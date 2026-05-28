// import {
//   MapPin, Mail, Download, ArrowRight, Code2, Layers, Server
// } from 'lucide-react';
// import { useState } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';

// function AnimatedSection({ children, className = "" }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 60 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export default function About() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

//   const skills = {
//     Frontend: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
//     Backend: ["Node.js", "Express", "RESTful APIs", "GraphQL", "JWT"],
//     Database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
//     Tools: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Vite"],
//   }

//   const categoryIcons = {
//     Frontend: <Code2 className="w-6 h-6" />,
//     Backend: <Server className="w-6 h-6" />,
//     Database: <Layers className="w-6 h-6" />,
//     Tools: <Layers className="w-6 h-6" />,
//   }

//   const handleResumeClick = () => {
//     const resumeUrl = "/shahnwaj_alam_resume.pdf";
//     window.open(resumeUrl, "_blank");
//   };

//   return (
//     <section ref={sectionRef} id="about" className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden py-24 px-6 md:px-12">
//       {/* Background */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-30" />
//       <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#CCFF00]/5 blur-[200px] animate-float-slow" />

//       <div className="max-w-7xl mx-auto relative z-10">

//         {/* Header */}
//         <AnimatedSection className="mb-20">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             className="text-[#CCFF00] font-semibold uppercase tracking-[0.3em] text-sm mb-4"
//           >
//             About Me
//           </motion.p>
//           <motion.h2
//             initial={{ opacity: 0, x: -100 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//             className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85]"
//           >
//             <span className="text-white">WHO</span>
//             <br />
//             <span className="text-[#CCFF00]">AM I<span className="text-white/20">.</span></span>
//           </motion.h2>
//         </AnimatedSection>

//         <div className="flex flex-col lg:flex-row gap-12 mt-8">
//           {/* Profile Picture */}
//           <AnimatedSection className="relative group w-full lg:w-1/3">
//             {/* Status badge */}
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               className="absolute -top-5 -right-5 z-20 bg-[#CCFF00] text-[#0a0a0a] font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full"
//             >
//               Available ✓
//             </motion.div>

//             <motion.div
//               whileHover={{ y: -8 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="relative w-full aspect-square bg-[#141414] border border-white/10 rounded-3xl overflow-hidden glow-lime"
//             >
//               <img
//                 src="/profile_pic.png"
//                 alt="Shahnwaj Alam"
//                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
//                 }}
//               />
//               {/* Overlay glow on hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#CCFF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             </motion.div>
//           </AnimatedSection>

//           {/* Description */}
//           <AnimatedSection className="w-full lg:w-2/3">
//             <motion.div
//               whileHover={{ y: -4 }}
//               className="bg-[#141414] border border-white/10 p-8 md:p-12 rounded-3xl h-full"
//             >
//               <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                   className="w-3 h-3 bg-[#CCFF00] rounded-full"
//                 />
//                 <span className="text-white/40 font-semibold uppercase tracking-[0.3em] text-sm">Developer Profile</span>
//               </div>
              
//               <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed mb-8">
//                 Building the digital future with{" "}
//                 <span className="text-[#CCFF00] font-bold">clean code</span>{" "}
//                 and modern solutions. I specialize in creating robust, scalable applications with beautiful interfaces that users love.
//               </p>

//               <div className="flex flex-wrap gap-3 mt-6">
//                 <motion.div whileHover={{ scale: 1.05, y: -2 }} className="flex items-center gap-2 bg-[#CCFF00]/10 border border-[#CCFF00]/20 px-5 py-2.5 rounded-full text-[#CCFF00] text-sm font-semibold">
//                   <MapPin className="w-4 h-4" />
//                   India
//                 </motion.div>
//                 <motion.div whileHover={{ scale: 1.05, y: -2 }} className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-white/70 text-sm font-semibold">
//                   <Mail className="w-4 h-4" />
//                   shahnwajalam10@gmail.com
//                 </motion.div>
//               </div>
//             </motion.div>
//           </AnimatedSection>
//         </div>

//         {/* Skills Section - Category circles like AngryToast product carousel */}
//         <AnimatedSection className="mt-20">
//           <div className="bg-[#141414] border border-white/10 rounded-3xl overflow-hidden">
//             {/* Tab header */}
//             <div className="bg-[#CCFF00] p-5 flex items-center gap-4">
//               <span className="text-[#0a0a0a] font-black text-xl uppercase tracking-wider">Tech Stack</span>
//               <div className="flex gap-1 ml-auto">
//                 <div className="w-3 h-3 rounded-full bg-[#0a0a0a]/20" />
//                 <div className="w-3 h-3 rounded-full bg-[#0a0a0a]/20" />
//                 <div className="w-3 h-3 rounded-full bg-[#0a0a0a]/20" />
//               </div>
//             </div>

//             <div className="p-8 md:p-12">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                 {Object.entries(skills).map(([category, skillList], categoryIdx) => (
//                   <motion.div
//                     key={category}
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.2 * categoryIdx, duration: 0.5 }}
//                     className="space-y-5"
//                   >
//                     <div className="flex items-center gap-3 pb-4 border-b border-white/10">
//                       <div className="w-10 h-10 rounded-xl bg-[#CCFF00]/10 flex items-center justify-center text-[#CCFF00]">
//                         {categoryIcons[category]}
//                       </div>
//                       <span className="text-xl text-white font-bold uppercase tracking-tight">{category}</span>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                       {skillList.map((skill, skillIdx) => (
//                         <motion.span
//                           key={skill}
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                           transition={{ delay: 0.3 + skillIdx * 0.05, duration: 0.3 }}
//                           whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(204,255,0,0.15)", color: "#CCFF00", borderColor: "rgba(204,255,0,0.3)" }}
//                           className="px-4 py-2 bg-white/5 border border-white/10 text-white/70 font-semibold text-sm rounded-full transition-all cursor-default"
//                         >
//                           {skill}
//                         </motion.span>
//                       ))}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </AnimatedSection>

//         {/* Download Resume CTA */}
//         <AnimatedSection className="mt-16 flex justify-center">
//           <motion.button
//             onClick={handleResumeClick}
//             whileHover={{ scale: 1.05, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//             className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#CCFF00] text-[#0a0a0a] font-bold text-base uppercase rounded-full relative overflow-hidden tracking-wider"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//             <Download className="w-5 h-5 relative z-10" />
//             <span className="relative z-10">Download Resume</span>
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
//           </motion.button>
//         </AnimatedSection>

//       </div>
//     </section>
//   )
// }















// import { MapPin, Mail, Download, ArrowRight, Code2, Layers, Server, Wrench } from 'lucide-react'
// import { useState, useRef, useEffect } from 'react'

// /* ── Scroll-reveal wrapper ───────────────────────────────────────── */
// function Reveal({ children, delay = 0, className = '' }) {
//   const ref = useRef(null)
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
//       { threshold: 0.12 }
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

// /* ── Animated skill pill ─────────────────────────────────────────── */
// function SkillPill({ label, index }) {
//   const [hovered, setHovered] = useState(false)
//   return (
//     <span
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         display: 'inline-block',
//         padding: '8px 18px',
//         borderRadius: '100px',
//         fontSize: '13px',
//         fontWeight: 700,
//         fontFamily: "'Space Grotesk', sans-serif",
//         letterSpacing: '0.04em',
//         cursor: 'default',
//         transition: 'all 0.22s cubic-bezier(0.16,1,0.3,1)',
//         background: hovered ? 'rgba(204,255,0,0.12)' : 'rgba(255,255,255,0.05)',
//         border: `1px solid ${hovered ? 'rgba(204,255,0,0.35)' : 'rgba(255,255,255,0.1)'}`,
//         color: hovered ? '#CCFF00' : 'rgba(245,245,240,0.65)',
//         transform: hovered ? 'translateY(-3px) scale(1.04)' : 'translateY(0) scale(1)',
//         boxShadow: hovered ? '0 0 18px rgba(204,255,0,0.12)' : 'none',
//       }}
//     >
//       {label}
//     </span>
//   )
// }

// /* ── Glitch text ─────────────────────────────────────────────────── */
// function GlitchText({ children, className = '', style = {} }) {
//   const [glitching, setGlitching] = useState(false)
//   return (
//     <span
//       className={className}
//       style={style}
//       onMouseEnter={() => { setGlitching(true); setTimeout(() => setGlitching(false), 420) }}
//       data-glitch={glitching ? '1' : '0'}
//     >
//       {children}
//     </span>
//   )
// }

// /* ── Count-up number ─────────────────────────────────────────────── */
// function CountUp({ target, suffix = '', duration = 1200, trigger }) {
//   const [val, setVal] = useState(0)
//   useEffect(() => {
//     if (!trigger) return
//     let current = 0
//     const step = target / (duration / 16)
//     const t = setInterval(() => {
//       current = Math.min(current + step, target)
//       setVal(Math.round(current))
//       if (current >= target) clearInterval(t)
//     }, 16)
//     return () => clearInterval(t)
//   }, [trigger, target, duration])
//   return <>{val}{suffix}</>
// }

// /* ── Main Component ──────────────────────────────────────────────── */
// export default function About() {
//   const [statsVisible, setStatsVisible] = useState(false)
//   const statsRef = useRef(null)

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect() } },
//       { threshold: 0.3 }
//     )
//     if (statsRef.current) obs.observe(statsRef.current)
//     return () => obs.disconnect()
//   }, [])

//   const skills = {
//     Frontend: { icon: Code2, items: ['React', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'] },
//     Backend:  { icon: Server, items: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'JWT'] },
//     Database: { icon: Layers, items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma'] },
//     Tools:    { icon: Wrench, items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Vite'] },
//   }

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

//         .about-root {
//           background: var(--bg);
//           min-height: 100vh;
//           position: relative;
//           overflow: hidden;
//           padding: 120px 40px 100px;
//           font-family: 'Space Grotesk', sans-serif;
//           color: var(--white);
//         }
//         .about-root::before {
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

//         /* Glowing orbs */
//         .about-orb1 {
//           position: absolute;
//           top: 10%;  right: -100px;
//           width: 500px; height: 500px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(204,255,0,0.06) 0%, transparent 70%);
//           pointer-events: none; z-index: 0;
//           animation: aboutFloat 8s ease-in-out infinite;
//         }
//         .about-orb2 {
//           position: absolute;
//           bottom: 10%; left: -80px;
//           width: 400px; height: 400px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(204,255,0,0.04) 0%, transparent 70%);
//           pointer-events: none; z-index: 0;
//           animation: aboutFloat 10s ease-in-out infinite reverse;
//         }
//         @keyframes aboutFloat {
//           0%,100% { transform: translateY(0); }
//           50%      { transform: translateY(-30px); }
//         }

//         /* Scanline */
//         .about-scanline {
//           position: absolute;
//           left: 0; width: 100%; height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(204,255,0,0.08), transparent);
//           z-index: 1;
//           animation: aboutScan 6s linear infinite;
//           pointer-events: none;
//         }
//         @keyframes aboutScan {
//           0%   { top: -1px; }
//           100% { top: 100%; }
//         }

//         .about-inner {
//           max-width: 1100px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 2;
//         }

//         /* ── Header ── */
//         .about-tag {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           margin-bottom: 20px;
//         }
//         .about-tag-line {
//           width: 32px; height: 2px;
//           background: var(--lime);
//         }
//         .about-tag span {
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.28em;
//           text-transform: uppercase;
//           color: var(--lime);
//         }
//         .about-heading {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(56px, 10vw, 110px);
//           font-weight: 800;
//           line-height: 0.88;
//           letter-spacing: -0.02em;
//           text-transform: uppercase;
//           margin-bottom: 64px;
//         }
//         .about-heading .line-white { color: var(--white); display: block; }
//         .about-heading .line-lime  { color: var(--lime);  display: block; }
//         .about-heading .dim { color: rgba(204,255,0,0.18); }

//         /* Glitch on hover */
//         .about-heading .line-white:hover,
//         .about-heading .line-lime:hover {
//           animation: aboutGlitch 0.4s steps(2) both;
//         }
//         @keyframes aboutGlitch {
//           0%   { text-shadow: 3px 0 #CCFF00, -3px 0 #ff003c; clip-path: inset(10% 0 75% 0); }
//           33%  { text-shadow: -3px 0 #CCFF00, 3px 0 #ff003c; clip-path: inset(45% 0 30% 0); }
//           66%  { text-shadow: 2px 2px #CCFF00, -2px -2px #ff003c; clip-path: inset(75% 0 5% 0); }
//           100% { text-shadow: none; clip-path: none; }
//         }

//         /* ── Main grid ── */
//         .about-grid {
//           display: grid;
//           grid-template-columns: 1fr 1.7fr;
//           gap: 28px;
//           margin-bottom: 28px;
//         }
//         @media (max-width: 820px) {
//           .about-grid { grid-template-columns: 1fr; }
//         }

//         /* ── Profile card ── */
//         .profile-card {
//           background: var(--card);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 24px;
//           overflow: hidden;
//           position: relative;
//         }
//         .profile-img-wrap {
//           position: relative;
//           width: 100%;
//           padding-top: 105%;
//           overflow: hidden;
//         }
//         .profile-img-wrap img {
//           position: absolute;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           filter: grayscale(100%);
//           transition: filter 0.7s ease;
//         }
//         .profile-card:hover .profile-img-wrap img {
//           filter: grayscale(0%);
//         }
//         .profile-img-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 50%);
//           z-index: 1;
//         }
//         .profile-badge {
//           position: absolute;
//           top: -1px; right: 20px;
//           background: var(--lime);
//           color: #050505;
//           font-size: 11px;
//           font-weight: 800;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           padding: 6px 14px;
//           border-radius: 0 0 12px 12px;
//           z-index: 2;
//         }
//         .profile-status {
//           position: absolute;
//           bottom: 16px; left: 16px; right: 16px;
//           z-index: 2;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }
//         .profile-status-dot {
//           width: 8px; height: 8px;
//           background: var(--lime);
//           border-radius: 50%;
//           flex-shrink: 0;
//           animation: aboutPulse 2s ease infinite;
//         }
//         @keyframes aboutPulse {
//           0%,100% { box-shadow: 0 0 0 0 rgba(204,255,0,0.6); }
//           50%      { box-shadow: 0 0 0 6px rgba(204,255,0,0); }
//         }
//         .profile-status span {
//           font-size: 12px;
//           font-weight: 700;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           color: var(--white);
//         }

//         /* ── Bio card ── */
//         .bio-card {
//           background: var(--card);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 24px;
//           padding: 40px;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           position: relative;
//           overflow: hidden;
//         }
//         .bio-card::before {
//           content: '';
//           position: absolute;
//           top: 0; right: 0;
//           width: 200px; height: 200px;
//           background: radial-gradient(circle, rgba(204,255,0,0.05) 0%, transparent 70%);
//           pointer-events: none;
//         }
//         .bio-label {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           margin-bottom: 28px;
//           padding-bottom: 20px;
//           border-bottom: 1px solid rgba(255,255,255,0.07);
//         }
//         .bio-label-dot {
//           width: 8px; height: 8px;
//           background: var(--lime);
//           border-radius: 50%;
//           animation: aboutPulse 2.5s ease infinite;
//         }
//         .bio-label span {
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.22em;
//           text-transform: uppercase;
//           color: rgba(245,245,240,0.35);
//         }
//         .bio-text {
//           font-size: 19px;
//           line-height: 1.7;
//           color: rgba(245,245,240,0.6);
//           font-weight: 400;
//           margin-bottom: 32px;
//           flex: 1;
//         }
//         .bio-text strong { color: var(--lime); font-weight: 700; }

//         /* Info pills */
//         .bio-pills {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 10px;
//           margin-bottom: 32px;
//         }
//         .bio-pill {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 9px 18px;
//           border-radius: 100px;
//           font-size: 13px;
//           font-weight: 600;
//           letter-spacing: 0.03em;
//           transition: all 0.2s;
//           cursor: default;
//         }
//         .bio-pill.lime {
//           background: rgba(204,255,0,0.09);
//           border: 1px solid rgba(204,255,0,0.22);
//           color: var(--lime);
//         }
//         .bio-pill.lime:hover {
//           background: rgba(204,255,0,0.16);
//           transform: translateY(-2px);
//         }
//         .bio-pill.ghost {
//           background: rgba(255,255,255,0.04);
//           border: 1px solid rgba(255,255,255,0.1);
//           color: rgba(245,245,240,0.6);
//         }
//         .bio-pill.ghost:hover {
//           border-color: rgba(204,255,0,0.3);
//           color: var(--white);
//           transform: translateY(-2px);
//         }

//         /* ── Stats row ── */
//         .stats-row {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 2px;
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 20px;
//           overflow: hidden;
//           background: rgba(255,255,255,0.04);
//         }
//         .stat-cell {
//           background: var(--card);
//           padding: 28px 24px;
//           text-align: center;
//           position: relative;
//           transition: background 0.2s;
//         }
//         .stat-cell:hover { background: rgba(204,255,0,0.04); }
//         .stat-cell + .stat-cell::before {
//           content: '';
//           position: absolute;
//           left: 0; top: 20%; bottom: 20%;
//           width: 1px;
//           background: rgba(255,255,255,0.06);
//         }
//         .stat-num {
//           font-family: 'Syne', sans-serif;
//           font-size: 42px;
//           font-weight: 800;
//           color: var(--lime);
//           line-height: 1;
//           margin-bottom: 6px;
//           display: block;
//         }
//         .stat-label {
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: rgba(245,245,240,0.3);
//         }

//         /* ── Tech Stack ── */
//         .stack-card {
//           background: var(--card);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 24px;
//           overflow: hidden;
//           margin-top: 28px;
//         }
//         .stack-header {
//           background: var(--lime);
//           padding: 16px 28px;
//           display: flex;
//           align-items: center;
//           gap: 12px;
//         }
//         .stack-header-title {
//           font-family: 'Syne', sans-serif;
//           font-size: 17px;
//           font-weight: 800;
//           color: #050505;
//           text-transform: uppercase;
//           letter-spacing: 0.12em;
//         }
//         .stack-header-dots {
//           margin-left: auto;
//           display: flex;
//           gap: 5px;
//         }
//         .stack-header-dots span {
//           width: 10px; height: 10px;
//           border-radius: 50%;
//           background: rgba(5,5,5,0.2);
//           display: block;
//         }
//         .stack-body {
//           padding: 36px;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 36px;
//         }
//         @media (max-width: 640px) {
//           .stack-body { grid-template-columns: 1fr; }
//         }
//         .stack-category {}
//         .stack-cat-header {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding-bottom: 14px;
//           margin-bottom: 14px;
//           border-bottom: 1px solid rgba(255,255,255,0.07);
//         }
//         .stack-cat-icon {
//           width: 36px; height: 36px;
//           border-radius: 10px;
//           background: rgba(204,255,0,0.08);
//           border: 1px solid rgba(204,255,0,0.15);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: var(--lime);
//           flex-shrink: 0;
//         }
//         .stack-cat-name {
//           font-size: 14px;
//           font-weight: 800;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: var(--white);
//           font-family: 'Syne', sans-serif;
//         }
//         .stack-pills {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 8px;
//         }

//         /* ── Resume CTA ── */
//         .resume-cta {
//           display: flex;
//           justify-content: center;
//           margin-top: 56px;
//         }
//         .resume-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           padding: 16px 36px;
//           background: var(--lime);
//           color: #050505;
//           font-family: 'Space Grotesk', sans-serif;
//           font-size: 14px;
//           font-weight: 800;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           border: none;
//           border-radius: 100px;
//           cursor: pointer;
//           position: relative;
//           overflow: hidden;
//           transition: transform 0.2s, box-shadow 0.2s;
//         }
//         .resume-btn::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.38) 50%, transparent 60%);
//           transform: translateX(-100%);
//           transition: transform 0.6s;
//         }
//         .resume-btn:hover {
//           transform: translateY(-3px) scale(1.02);
//           box-shadow: 0 0 32px rgba(204,255,0,0.35), 0 0 64px rgba(204,255,0,0.1);
//         }
//         .resume-btn:hover::after { transform: translateX(100%); }
//         .resume-btn:active { transform: scale(0.97); }
//         .resume-btn-arrow {
//           transition: transform 0.2s;
//           position: relative; z-index: 1;
//         }
//         .resume-btn:hover .resume-btn-arrow { transform: translateX(4px); }
//         .resume-btn > * { position: relative; z-index: 1; }
//       `}</style>

//       <section id="about" className="about-root">
//         <div className="about-orb1" />
//         <div className="about-orb2" />
//         <div className="about-scanline" />

//         <div className="about-inner">

//           {/* ── Header ── */}
//           <Reveal>
//             <div className="about-tag">
//               <div className="about-tag-line" />
//               <span>About Me</span>
//             </div>
//             <h2 className="about-heading">
//               <span className="line-white">WHO</span>
//               <span className="line-lime">AM I<span className="dim">.</span></span>
//             </h2>
//           </Reveal>

//           {/* ── Profile + Bio grid ── */}
//           <div className="about-grid">

//             {/* Profile pic */}
//             <Reveal delay={100}>
//               <div className="profile-card">
//                 <div className="profile-badge">Available ✓</div>
//                 <div className="profile-img-wrap">
//                   <img
//                     src="/profile_pic.png"
//                     alt="Shahnwaj Alam"
//                     onError={e => {
//                       e.target.onerror = null
//                       e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//                     }}
//                   />
//                   <div className="profile-img-overlay" />
//                 </div>
//                 <div className="profile-status">
//                   <div className="profile-status-dot" />
//                   <span>Open to Work</span>
//                 </div>
//               </div>
//             </Reveal>

//             {/* Bio */}
//             <Reveal delay={200}>
//               <div className="bio-card">
//                 <div>
//                   <div className="bio-label">
//                     <div className="bio-label-dot" />
//                     <span>Developer Profile</span>
//                   </div>
//                   <p className="bio-text">
//                     Building the digital future with{' '}
//                     <strong>clean code</strong> and modern solutions.
//                     I specialize in creating <strong>robust, scalable applications</strong>{' '}
//                     with beautiful interfaces that users actually love — from first pixel to final deploy.
//                   </p>
//                   <div className="bio-pills">
//                     <div className="bio-pill lime">
//                       <MapPin size={14} />
//                       India
//                     </div>
//                     <div className="bio-pill ghost">
//                       <Mail size={14} />
//                       shahnwajalam10@gmail.com
//                     </div>
//                   </div>
//                 </div>

//                 {/* Stats inside bio card */}
//                 <div ref={statsRef} className="stats-row">
//                   <div className="stat-cell">
//                     <span className="stat-num">
//                       <CountUp target={42} suffix="+" trigger={statsVisible} duration={1200} />
//                     </span>
//                     <div className="stat-label">Projects</div>
//                   </div>
//                   <div className="stat-cell">
//                     <span className="stat-num">
//                       <CountUp target={4} suffix="+" trigger={statsVisible} duration={800} />
//                     </span>
//                     <div className="stat-label">Years Exp.</div>
//                   </div>
//                   <div className="stat-cell">
//                     <span className="stat-num">
//                       <CountUp target={18} suffix="+" trigger={statsVisible} duration={1000} />
//                     </span>
//                     <div className="stat-label">Clients</div>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>
//           </div>

//           {/* ── Tech Stack ── */}
//           <Reveal delay={300}>
//             <div className="stack-card">
//               <div className="stack-header">
//                 <span className="stack-header-title">Tech Stack</span>
//                 <div className="stack-header-dots">
//                   <span /><span /><span />
//                 </div>
//               </div>
//               <div className="stack-body">
//                 {Object.entries(skills).map(([category, { icon: Icon, items }], i) => (
//                   <div key={category} className="stack-category">
//                     <div className="stack-cat-header">
//                       <div className="stack-cat-icon">
//                         <Icon size={16} />
//                       </div>
//                       <span className="stack-cat-name">{category}</span>
//                     </div>
//                     <div className="stack-pills">
//                       {items.map((skill, j) => (
//                         <SkillPill key={skill} label={skill} index={j} />
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Reveal>

//           {/* ── Resume CTA ── */}
//           <Reveal delay={400}>
//             <div className="resume-cta">
//               <button
//                 className="resume-btn"
//                 onClick={() => window.open('/shahnwaj_alam_resume.pdf', '_blank')}
//               >
//                 <Download size={18} />
//                 <span>Download Resume</span>
//                 <ArrowRight size={18} className="resume-btn-arrow" />
//               </button>
//             </div>
//           </Reveal>

//         </div>
//       </section>
//     </>
//   )
// }



































// import { MapPin, Mail, Download, ArrowRight, Code2, Layers, Server, Wrench, Sparkles, Github, Linkedin, Twitter } from 'lucide-react'
// import { useState, useRef, useEffect } from 'react'

// /* ── Scroll-reveal wrapper ───────────────────────────────────────── */
// function Reveal({ children, delay = 0, className = '' }) {
//   const ref = useRef(null)
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
//       { threshold: 0.12 }
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

// /* ── Animated skill pill ─────────────────────────────────────────── */
// function SkillPill({ label, index, hoverColor = '#CCFF00' }) {
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
//         fontWeight: 600,
//         fontFamily: "'DM Mono', monospace",
//         letterSpacing: '0.06em',
//         cursor: 'default',
//         transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
//         background: hovered ? `${hoverColor}12` : 'rgba(255,255,255,0.03)',
//         border: `1px solid ${hovered ? `${hoverColor}40` : 'rgba(255,255,255,0.06)'}`,
//         color: hovered ? hoverColor : 'rgba(245,240,232,0.5)',
//         transform: hovered ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
//         boxShadow: hovered ? `0 0 16px ${hoverColor}18` : 'none',
//       }}
//     >
//       {label}
//     </span>
//   )
// }

// /* ── Count-up number ─────────────────────────────────────────────── */
// function CountUp({ target, suffix = '', duration = 1200, trigger }) {
//   const [val, setVal] = useState(0)
//   useEffect(() => {
//     if (!trigger) return
//     let current = 0
//     const step = target / (duration / 16)
//     const t = setInterval(() => {
//       current = Math.min(current + step, target)
//       setVal(Math.round(current))
//       if (current >= target) clearInterval(t)
//     }, 16)
//     return () => clearInterval(t)
//   }, [trigger, target, duration])
//   return <>{val}{suffix}</>
// }

// /* ── Social Icon ── */
// function SocialIcon({ icon, href, label, color, idx }) {
//   const [hovered, setHovered] = useState(false)
  
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         display: 'block',
//         textDecoration: 'none',
//       }}
//     >
//       <div style={{
//         width: 40,
//         height: 40,
//         borderRadius: 12,
//         background: hovered ? `radial-gradient(circle at 30% 30%, ${color}20, ${color}05)` : 'rgba(255,255,255,0.02)',
//         border: `1px solid ${hovered ? `${color}60` : 'rgba(255,255,255,0.06)'}`,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
//         transform: hovered ? 'translateY(-4px) scale(1.05)' : 'translateY(0) scale(1)',
//         cursor: 'pointer',
//       }}>
//         <div style={{
//           color: hovered ? color : 'rgba(255,255,255,0.4)',
//           transition: 'color 0.3s',
//           display: 'flex',
//         }}>
//           {icon}
//         </div>
//       </div>
//     </a>
//   )
// }

// /* ── Main Component ──────────────────────────────────────────────── */
// export default function About() {
//   const [statsVisible, setStatsVisible] = useState(false)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const statsRef = useRef(null)

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }
//     window.addEventListener('mousemove', handleMouseMove)
//     return () => window.removeEventListener('mousemove', handleMouseMove)
//   }, [])

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect() } },
//       { threshold: 0.3 }
//     )
//     if (statsRef.current) obs.observe(statsRef.current)
//     return () => obs.disconnect()
//   }, [])

//   const skills = {
//     Frontend: { icon: Code2, items: ['React', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'] },
//     Backend:  { icon: Server, items: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'JWT'] },
//     Database: { icon: Layers, items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma'] },
//     Tools:    { icon: Wrench, items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Vite'] },
//   }

//   const socials = [
//     { icon: <Github size={16} />, href: "https://github.com/shahnwajalam10", label: "GitHub", color: "#F5F0E8" },
//     { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/shahnwaj-alam-b08415206/", label: "LinkedIn", color: "#0A66C2" },
//     { icon: <Twitter size={16} />, href: "https://twitter.com/Shahnwajalam786", label: "Twitter", color: "#1DA1F2" },
//   ]

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

//         .about-root {
//           background: #080808;
//           min-height: 100vh;
//           position: relative;
//           overflow: hidden;
//           padding: 110px 48px 120px;
//           color: #F5F0E8;
//         }

//         .about-root::before {
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

//         @keyframes pulse {
//           0%, 100% { box-shadow: 0 0 0 0 rgba(204,255,0,0.6); }
//           50% { box-shadow: 0 0 0 6px rgba(204,255,0,0); }
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

//       <section id="about" className="about-root">
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
//                 Vol. 01 — Introduction
//               </div>
//               <div style={{
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 10,
//                 color: 'rgba(255,255,255,0.3)',
//                 letterSpacing: '0.2em',
//               }}>
//                 Full Stack Developer
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
//                 About<span style={{ color: '#CCFF00' }}> Me</span>
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
//                   Building the digital future with clean code and modern solutions.
//                 </p>
//                 <div style={{ display: 'flex', gap: 12, marginLeft: 'auto', flexWrap: 'wrap' }}>
//                   {['Full Stack', 'Problem Solver', 'Team Player'].map(tag => (
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

//           {/* Profile + Bio grid */}
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(12, 1fr)',
//             gap: 28,
//             marginBottom: 28,
//           }}>
            
//             {/* Profile pic - spans 5 columns */}
//             <div style={{ gridColumn: 'span 5' }}>
//               <Reveal delay={120}>
//                 <div style={{
//                   background: '#0e0e0e',
//                   border: '1px solid rgba(255,255,255,0.06)',
//                   borderRadius: 24,
//                   overflow: 'hidden',
//                   position: 'relative',
//                 }}>
//                   <div style={{
//                     position: 'absolute',
//                     top: -1,
//                     right: 20,
//                     background: '#CCFF00',
//                     color: '#080808',
//                     fontSize: 10,
//                     fontWeight: 800,
//                     letterSpacing: '0.12em',
//                     textTransform: 'uppercase',
//                     padding: '6px 14px',
//                     borderRadius: '0 0 12px 12px',
//                     zIndex: 2,
//                   }}>
//                     Available ✓
//                   </div>
//                   <div style={{
//                     position: 'relative',
//                     width: '100%',
//                     paddingTop: '105%',
//                     overflow: 'hidden',
//                   }}>
//                     <img
//                       src="/profile_pic.png"
//                       alt="Shahnwaj Alam"
//                       style={{
//                         position: 'absolute',
//                         inset: 0,
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover',
//                         filter: 'grayscale(100%)',
//                         transition: 'filter 0.7s ease',
//                       }}
//                       onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
//                       onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
//                       onError={e => {
//                         e.target.onerror = null
//                         e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//                       }}
//                     />
//                     <div style={{
//                       position: 'absolute',
//                       inset: 0,
//                       background: 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 50%)',
//                       zIndex: 1,
//                     }} />
//                     <div style={{
//                       position: 'absolute',
//                       bottom: 16,
//                       left: 16,
//                       right: 16,
//                       zIndex: 2,
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 8,
//                     }}>
//                       <div style={{
//                         width: 8,
//                         height: 8,
//                         background: '#CCFF00',
//                         borderRadius: '50%',
//                         animation: 'pulse 2s ease infinite',
//                       }} />
//                       <span style={{
//                         fontSize: 11,
//                         fontWeight: 700,
//                         letterSpacing: '0.1em',
//                         textTransform: 'uppercase',
//                         color: '#F5F0E8',
//                       }}>Open to Work</span>
//                     </div>
//                   </div>
//                 </div>
//               </Reveal>
//             </div>

//             {/* Bio - spans 7 columns */}
//             <div style={{ gridColumn: 'span 7' }}>
//               <Reveal delay={200}>
//                 <div style={{
//                   background: '#0e0e0e',
//                   border: '1px solid rgba(255,255,255,0.06)',
//                   borderRadius: 24,
//                   padding: 40,
//                   position: 'relative',
//                   overflow: 'hidden',
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'space-between',
//                 }}>
//                   <div style={{
//                     position: 'absolute',
//                     top: 0,
//                     right: 0,
//                     width: 200,
//                     height: 200,
//                     background: 'radial-gradient(circle, rgba(204,255,0,0.05) 0%, transparent 70%)',
//                     pointerEvents: 'none',
//                   }} />
                  
//                   <div>
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 10,
//                       marginBottom: 28,
//                       paddingBottom: 20,
//                       borderBottom: '1px solid rgba(255,255,255,0.06)',
//                     }}>
//                       <div style={{
//                         width: 8,
//                         height: 8,
//                         background: '#CCFF00',
//                         borderRadius: '50%',
//                         animation: 'pulse 2.5s ease infinite',
//                       }} />
//                       <span style={{
//                         fontSize: 10,
//                         fontWeight: 700,
//                         letterSpacing: '0.22em',
//                         textTransform: 'uppercase',
//                         color: 'rgba(245,240,232,0.35)',
//                       }}>Developer Profile</span>
//                     </div>
                    
//                     <p style={{
//                       fontSize: 18,
//                       lineHeight: 1.7,
//                       color: 'rgba(245,240,232,0.6)',
//                       fontWeight: 400,
//                       marginBottom: 32,
//                     }}>
//                       Building the digital future with{' '}
//                       <strong style={{ color: '#CCFF00', fontWeight: 700 }}>clean code</strong> and modern solutions.
//                       I specialize in creating <strong style={{ color: '#CCFF00', fontWeight: 700 }}>robust, scalable applications</strong>{' '}
//                       with beautiful interfaces that users actually love — from first pixel to final deploy.
//                     </p>
                    
//                     <div style={{
//                       display: 'flex',
//                       flexWrap: 'wrap',
//                       gap: 10,
//                       marginBottom: 32,
//                     }}>
//                       <div style={{
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         gap: 8,
//                         padding: '8px 18px',
//                         borderRadius: 100,
//                         fontSize: 12,
//                         fontWeight: 600,
//                         background: 'rgba(204,255,0,0.08)',
//                         border: '1px solid rgba(204,255,0,0.2)',
//                         color: '#CCFF00',
//                       }}>
//                         <MapPin size={14} />
//                         India
//                       </div>
//                       <div style={{
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         gap: 8,
//                         padding: '8px 18px',
//                         borderRadius: 100,
//                         fontSize: 12,
//                         fontWeight: 600,
//                         background: 'rgba(255,255,255,0.03)',
//                         border: '1px solid rgba(255,255,255,0.08)',
//                         color: 'rgba(245,240,232,0.6)',
//                       }}>
//                         <Mail size={14} />
//                         shahnwajalam10@gmail.com
//                       </div>
//                     </div>
//                   </div>

//                   {/* Stats row */}
//                   <div ref={statsRef} style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(3, 1fr)',
//                     gap: 2,
//                     border: '1px solid rgba(255,255,255,0.06)',
//                     borderRadius: 20,
//                     overflow: 'hidden',
//                     background: 'rgba(255,255,255,0.02)',
//                   }}>
//                     <div style={{
//                       background: '#0e0e0e',
//                       padding: '24px 20px',
//                       textAlign: 'center',
//                     }}>
//                       <div style={{
//                         fontFamily: "'Fraunces', serif",
//                         fontSize: 38,
//                         fontWeight: 900,
//                         color: '#CCFF00',
//                         lineHeight: 1,
//                         marginBottom: 6,
//                       }}>
//                         <CountUp target={4} suffix="+" trigger={statsVisible} duration={1200} />
//                       </div>
//                       <div style={{
//                         fontSize: 10,
//                         fontWeight: 700,
//                         letterSpacing: '0.14em',
//                         textTransform: 'uppercase',
//                         color: 'rgba(245,240,232,0.3)',
//                       }}>Projects</div>
//                     </div>
//                     <div style={{
//                       background: '#0e0e0e',
//                       padding: '24px 20px',
//                       textAlign: 'center',
//                       borderLeft: '1px solid rgba(255,255,255,0.06)',
//                     }}>
//                       <div style={{
//                         fontFamily: "'Fraunces', serif",
//                         fontSize: 38,
//                         fontWeight: 900,
//                         color: '#CCFF00',
//                         lineHeight: 1,
//                         marginBottom: 6,
//                       }}>
//                         <CountUp target={1} suffix="+" trigger={statsVisible} duration={800} />
//                       </div>
//                       <div style={{
//                         fontSize: 10,
//                         fontWeight: 700,
//                         letterSpacing: '0.14em',
//                         textTransform: 'uppercase',
//                         color: 'rgba(245,240,232,0.3)',
//                       }}>Years Exp.</div>
//                     </div>
//                     <div style={{
//                       background: '#0e0e0e',
//                       padding: '24px 20px',
//                       textAlign: 'center',
//                       borderLeft: '1px solid rgba(255,255,255,0.06)',
//                     }}>
//                       <div style={{
//                         fontFamily: "'Fraunces', serif",
//                         fontSize: 38,
//                         fontWeight: 900,
//                         color: '#CCFF00',
//                         lineHeight: 1,
//                         marginBottom: 6,
//                       }}>
//                         <CountUp target={5} suffix="+" trigger={statsVisible} duration={1000} />
//                       </div>
//                       <div style={{
//                         fontSize: 10,
//                         fontWeight: 700,
//                         letterSpacing: '0.14em',
//                         textTransform: 'uppercase',
//                         color: 'rgba(245,240,232,0.3)',
//                       }}>Certificates</div>
//                     </div>
//                   </div>
//                 </div>
//               </Reveal>
//             </div>
//           </div>

//           {/* Tech Stack Card */}
//           <Reveal delay={300}>
//             <div style={{
//               background: '#0e0e0e',
//               border: '1px solid rgba(255,255,255,0.06)',
//               borderRadius: 24,
//               overflow: 'hidden',
//               marginTop: 28,
//             }}>
//               <div style={{
//                 background: '#CCFF00',
//                 padding: '14px 28px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 12,
//               }}>
//                 <span style={{
//                   fontFamily: "'Fraunces', serif",
//                   fontSize: 16,
//                   fontWeight: 900,
//                   color: '#080808',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.12em',
//                 }}>Tech Stack</span>
//                 <div style={{ marginLeft: 'auto', display: 'flex', gap: 5 }}>
//                   <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(8,8,8,0.2)' }} />
//                   <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(8,8,8,0.2)' }} />
//                   <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(8,8,8,0.2)' }} />
//                 </div>
//               </div>
              
//               <div style={{
//                 padding: 36,
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//                 gap: 36,
//               }}>
//                 {Object.entries(skills).map(([category, { icon: Icon, items }]) => (
//                   <div key={category}>
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 10,
//                       paddingBottom: 14,
//                       marginBottom: 14,
//                       borderBottom: '1px solid rgba(255,255,255,0.06)',
//                     }}>
//                       <div style={{
//                         width: 36,
//                         height: 36,
//                         borderRadius: 10,
//                         background: 'rgba(204,255,0,0.08)',
//                         border: '1px solid rgba(204,255,0,0.15)',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         color: '#CCFF00',
//                       }}>
//                         <Icon size={16} />
//                       </div>
//                       <span style={{
//                         fontSize: 13,
//                         fontWeight: 800,
//                         letterSpacing: '0.14em',
//                         textTransform: 'uppercase',
//                         color: '#F5F0E8',
//                         fontFamily: "'DM Mono', monospace",
//                       }}>{category}</span>
//                     </div>
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
//                       {items.map((skill, j) => (
//                         <SkillPill key={skill} label={skill} index={j} hoverColor="#CCFF00" />
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Reveal>

//           {/* Social Links & Resume CTA */}
//           <div style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginTop: 48,
//             flexWrap: 'wrap',
//             gap: 20,
//           }}>
//             <Reveal delay={400}>
//               <div style={{ display: 'flex', gap: 12 }}>
//                 {socials.map((social, idx) => (
//                   <SocialIcon key={idx} {...social} idx={idx} />
//                 ))}
//               </div>
//             </Reveal>

//             <Reveal delay={450}>
//               <button
//                 onClick={() => window.open('/shahnwaj_alam_resume.pdf', '_blank')}
//                 style={{
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   gap: 12,
//                   padding: '14px 32px',
//                   background: '#CCFF00',
//                   color: '#080808',
//                   fontFamily: "'DM Mono', monospace",
//                   fontSize: 12,
//                   fontWeight: 700,
//                   letterSpacing: '0.14em',
//                   textTransform: 'uppercase',
//                   border: 'none',
//                   borderRadius: 100,
//                   cursor: 'pointer',
//                   position: 'relative',
//                   overflow: 'hidden',
//                   transition: 'all 0.3s',
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
//                   e.currentTarget.style.boxShadow = '0 0 32px rgba(204,255,0,0.35)'
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0) scale(1)'
//                   e.currentTarget.style.boxShadow = 'none'
//                 }}
//               >
//                 <Download size={16} />
//                 <span>Download Resume</span>
//                 <ArrowRight size={16} style={{ transition: 'transform 0.2s' }} 
//                   onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
//                   onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
//                 />
//               </button>
//             </Reveal>
//           </div>

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
//               <span>End of introduction</span>
//               <span>Let's build something great together</span>
//             </div>
//           </Reveal>

//         </div>
//       </section>
//     </>
//   )
// }

































// import { MapPin, Mail, Download, ArrowRight, Code2, Layers, Server, Wrench, Sparkles, Github, Linkedin, Twitter } from 'lucide-react'
// import { useState, useRef, useEffect } from 'react'

// /* ── Scroll-reveal wrapper ───────────────────────────────────────── */
// function Reveal({ children, delay = 0, className = '' }) {
//   const ref = useRef(null)
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
//       { threshold: 0.12 }
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

// /* ── Animated skill pill ─────────────────────────────────────────── */
// function SkillPill({ label, index, hoverColor = '#CCFF00' }) {
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
//         fontWeight: 600,
//         fontFamily: "'DM Mono', monospace",
//         letterSpacing: '0.06em',
//         cursor: 'default',
//         transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
//         background: hovered ? `${hoverColor}12` : 'rgba(255,255,255,0.03)',
//         border: `1px solid ${hovered ? `${hoverColor}40` : 'rgba(255,255,255,0.06)'}`,
//         color: hovered ? hoverColor : 'rgba(245,240,232,0.5)',
//         transform: hovered ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
//         boxShadow: hovered ? `0 0 16px ${hoverColor}18` : 'none',
//       }}
//     >
//       {label}
//     </span>
//   )
// }

// /* ── Count-up number ─────────────────────────────────────────────── */
// function CountUp({ target, suffix = '', duration = 1200, trigger }) {
//   const [val, setVal] = useState(0)
//   useEffect(() => {
//     if (!trigger) return
//     let current = 0
//     const step = target / (duration / 16)
//     const t = setInterval(() => {
//       current = Math.min(current + step, target)
//       setVal(Math.round(current))
//       if (current >= target) clearInterval(t)
//     }, 16)
//     return () => clearInterval(t)
//   }, [trigger, target, duration])
//   return <>{val}{suffix}</>
// }

// /* ── Social Icon ── */
// function SocialIcon({ icon, href, label, color, idx }) {
//   const [hovered, setHovered] = useState(false)
  
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         display: 'block',
//         textDecoration: 'none',
//       }}
//     >
//       <div style={{
//         width: 40,
//         height: 40,
//         borderRadius: 12,
//         background: hovered ? `radial-gradient(circle at 30% 30%, ${color}20, ${color}05)` : 'rgba(255,255,255,0.02)',
//         border: `1px solid ${hovered ? `${color}60` : 'rgba(255,255,255,0.06)'}`,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
//         transform: hovered ? 'translateY(-4px) scale(1.05)' : 'translateY(0) scale(1)',
//         cursor: 'pointer',
//       }}>
//         <div style={{
//           color: hovered ? color : 'rgba(255,255,255,0.4)',
//           transition: 'color 0.3s',
//           display: 'flex',
//         }}>
//           {icon}
//         </div>
//       </div>
//     </a>
//   )
// }

// /* ── Main Component ──────────────────────────────────────────────── */
// export default function About() {
//   const [statsVisible, setStatsVisible] = useState(false)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const statsRef = useRef(null)

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }
//     window.addEventListener('mousemove', handleMouseMove)
//     return () => window.removeEventListener('mousemove', handleMouseMove)
//   }, [])

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect() } },
//       { threshold: 0.3 }
//     )
//     if (statsRef.current) obs.observe(statsRef.current)
//     return () => obs.disconnect()
//   }, [])

//   const skills = {
//     Frontend: { icon: Code2, items: ['React', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'] },
//     Backend:  { icon: Server, items: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'JWT'] },
//     Database: { icon: Layers, items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma'] },
//     Tools:    { icon: Wrench, items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Vite'] },
//   }

//   const socials = [
//     { icon: <Github size={16} />, href: "https://github.com/shahnwajalam10", label: "GitHub", color: "#F5F0E8" },
//     { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/shahnwaj-alam-b08415206/", label: "LinkedIn", color: "#0A66C2" },
//     { icon: <Twitter size={16} />, href: "https://twitter.com/Shahnwajalam786", label: "Twitter", color: "#1DA1F2" },
//   ]

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

//         .about-root {
//           background: #080808;
//           min-height: 100vh;
//           position: relative;
//           overflow: hidden;
//           padding: 110px 48px 120px;
//           color: #F5F0E8;
//         }

//         .about-root::before {
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

//         @keyframes pulse {
//           0%, 100% { box-shadow: 0 0 0 0 rgba(204,255,0,0.6); }
//           50% { box-shadow: 0 0 0 6px rgba(204,255,0,0); }
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

//       <section id="about" className="about-root">
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
//                 Vol. 01 — Introduction
//               </div>
//               <div style={{
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 10,
//                 color: 'rgba(255,255,255,0.3)',
//                 letterSpacing: '0.2em',
//               }}>
//                 Full Stack Developer
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
//                 About<span style={{ color: '#CCFF00' }}> Me</span>
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
//                   Building the digital future with clean code and modern solutions.
//                 </p>
//                 <div style={{ display: 'flex', gap: 12, marginLeft: 'auto', flexWrap: 'wrap' }}>
//                   {['Full Stack', 'Problem Solver', 'Team Player'].map(tag => (
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

//           {/* Profile + Bio grid */}
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(12, 1fr)',
//             gap: 28,
//             marginBottom: 28,
//           }}>
            
//             {/* Profile pic - spans 5 columns */}
//             <div style={{ gridColumn: 'span 5' }}>
//               <Reveal delay={120}>
//                 <div style={{
//                   background: '#0e0e0e',
//                   border: '1px solid rgba(255,255,255,0.06)',
//                   borderRadius: 24,
//                   overflow: 'hidden',
//                   position: 'relative',
//                 }}>
//                   <div style={{
//                     position: 'absolute',
//                     top: -1,
//                     right: 20,
//                     background: '#CCFF00',
//                     color: '#080808',
//                     fontSize: 10,
//                     fontWeight: 800,
//                     letterSpacing: '0.12em',
//                     textTransform: 'uppercase',
//                     padding: '6px 14px',
//                     borderRadius: '0 0 12px 12px',
//                     zIndex: 2,
//                   }}>
//                     Available ✓
//                   </div>
//                   <div style={{
//                     position: 'relative',
//                     width: '100%',
//                     paddingTop: '105%',
//                     overflow: 'hidden',
//                   }}>
//                     <img
//                       src="/profile_pic.png"
//                       alt="Shahnwaj Alam"
//                       style={{
//                         position: 'absolute',
//                         inset: 0,
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover',
//                         filter: 'grayscale(100%)',
//                         transition: 'filter 0.7s ease',
//                       }}
//                       onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
//                       onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
//                       onError={e => {
//                         e.target.onerror = null
//                         e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//                       }}
//                     />
//                     <div style={{
//                       position: 'absolute',
//                       inset: 0,
//                       background: 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 50%)',
//                       zIndex: 1,
//                     }} />
//                     <div style={{
//                       position: 'absolute',
//                       bottom: 16,
//                       left: 16,
//                       right: 16,
//                       zIndex: 2,
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 8,
//                     }}>
//                       <div style={{
//                         width: 8,
//                         height: 8,
//                         background: '#CCFF00',
//                         borderRadius: '50%',
//                         animation: 'pulse 2s ease infinite',
//                       }} />
//                       <span style={{
//                         fontSize: 11,
//                         fontWeight: 700,
//                         letterSpacing: '0.1em',
//                         textTransform: 'uppercase',
//                         color: '#F5F0E8',
//                       }}>Open to Work</span>
//                     </div>
//                   </div>
//                 </div>
//               </Reveal>
//             </div>

//             {/* Bio - spans 7 columns */}
//             <div style={{ gridColumn: 'span 7' }}>
//               <Reveal delay={200}>
//                 <div style={{
//                   background: '#0e0e0e',
//                   border: '1px solid rgba(255,255,255,0.06)',
//                   borderRadius: 24,
//                   padding: 40,
//                   position: 'relative',
//                   overflow: 'hidden',
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'space-between',
//                 }}>
//                   <div style={{
//                     position: 'absolute',
//                     top: 0,
//                     right: 0,
//                     width: 200,
//                     height: 200,
//                     background: 'radial-gradient(circle, rgba(204,255,0,0.05) 0%, transparent 70%)',
//                     pointerEvents: 'none',
//                   }} />
                  
//                   <div>
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 10,
//                       marginBottom: 28,
//                       paddingBottom: 20,
//                       borderBottom: '1px solid rgba(255,255,255,0.06)',
//                     }}>
//                       <div style={{
//                         width: 8,
//                         height: 8,
//                         background: '#CCFF00',
//                         borderRadius: '50%',
//                         animation: 'pulse 2.5s ease infinite',
//                       }} />
//                       <span style={{
//                         fontSize: 10,
//                         fontWeight: 700,
//                         letterSpacing: '0.22em',
//                         textTransform: 'uppercase',
//                         color: 'rgba(245,240,232,0.35)',
//                       }}>Developer Profile</span>
//                     </div>
                    
//                     <p style={{
//                       fontSize: 18,
//                       lineHeight: 1.7,
//                       color: 'rgba(245,240,232,0.6)',
//                       fontWeight: 400,
//                       marginBottom: 32,
//                     }}>
//                       Building the digital future with{' '}
//                       <strong style={{ color: '#CCFF00', fontWeight: 700 }}>clean code</strong> and modern solutions.
//                       I specialize in creating <strong style={{ color: '#CCFF00', fontWeight: 700 }}>robust, scalable applications</strong>{' '}
//                       with beautiful interfaces that users actually love — from first pixel to final deploy.
//                     </p>
                    
//                     <div style={{
//                       display: 'flex',
//                       flexWrap: 'wrap',
//                       gap: 10,
//                       marginBottom: 32,
//                     }}>
//                       <div style={{
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         gap: 8,
//                         padding: '8px 18px',
//                         borderRadius: 100,
//                         fontSize: 12,
//                         fontWeight: 600,
//                         background: 'rgba(204,255,0,0.08)',
//                         border: '1px solid rgba(204,255,0,0.2)',
//                         color: '#CCFF00',
//                       }}>
//                         <MapPin size={14} />
//                         India
//                       </div>
//                       <div style={{
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         gap: 8,
//                         padding: '8px 18px',
//                         borderRadius: 100,
//                         fontSize: 12,
//                         fontWeight: 600,
//                         background: 'rgba(255,255,255,0.03)',
//                         border: '1px solid rgba(255,255,255,0.08)',
//                         color: 'rgba(245,240,232,0.6)',
//                       }}>
//                         <Mail size={14} />
//                         shahnwajalam10@gmail.com
//                       </div>
//                     </div>
//                   </div>

//                   {/* Stats row */}
//                   <div ref={statsRef} style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(3, 1fr)',
//                     gap: 2,
//                     border: '1px solid rgba(255,255,255,0.06)',
//                     borderRadius: 20,
//                     overflow: 'hidden',
//                     background: 'rgba(255,255,255,0.02)',
//                   }}>
//                     <div style={{
//                       background: '#0e0e0e',
//                       padding: '24px 20px',
//                       textAlign: 'center',
//                     }}>
//                       <div style={{
//                         fontFamily: "'Fraunces', serif",
//                         fontSize: 38,
//                         fontWeight: 900,
//                         color: '#CCFF00',
//                         lineHeight: 1,
//                         marginBottom: 6,
//                       }}>
//                         <CountUp target={4} suffix="+" trigger={statsVisible} duration={1200} />
//                       </div>
//                       <div style={{
//                         fontSize: 10,
//                         fontWeight: 700,
//                         letterSpacing: '0.14em',
//                         textTransform: 'uppercase',
//                         color: 'rgba(245,240,232,0.3)',
//                       }}>Projects</div>
//                     </div>
//                     <div style={{
//                       background: '#0e0e0e',
//                       padding: '24px 20px',
//                       textAlign: 'center',
//                       borderLeft: '1px solid rgba(255,255,255,0.06)',
//                     }}>
//                       <div style={{
//                         fontFamily: "'Fraunces', serif",
//                         fontSize: 38,
//                         fontWeight: 900,
//                         color: '#CCFF00',
//                         lineHeight: 1,
//                         marginBottom: 6,
//                       }}>
//                         <CountUp target={1} suffix="+" trigger={statsVisible} duration={800} />
//                       </div>
//                       <div style={{
//                         fontSize: 10,
//                         fontWeight: 700,
//                         letterSpacing: '0.14em',
//                         textTransform: 'uppercase',
//                         color: 'rgba(245,240,232,0.3)',
//                       }}>Years Exp.</div>
//                     </div>
//                     <div style={{
//                       background: '#0e0e0e',
//                       padding: '24px 20px',
//                       textAlign: 'center',
//                       borderLeft: '1px solid rgba(255,255,255,0.06)',
//                     }}>
//                       <div style={{
//                         fontFamily: "'Fraunces', serif",
//                         fontSize: 38,
//                         fontWeight: 900,
//                         color: '#CCFF00',
//                         lineHeight: 1,
//                         marginBottom: 6,
//                       }}>
//                         <CountUp target={5} suffix="+" trigger={statsVisible} duration={1000} />
//                       </div>
//                       <div style={{
//                         fontSize: 10,
//                         fontWeight: 700,
//                         letterSpacing: '0.14em',
//                         textTransform: 'uppercase',
//                         color: 'rgba(245,240,232,0.3)',
//                       }}>Certificates</div>
//                     </div>
//                   </div>
//                 </div>
//               </Reveal>
//             </div>
//           </div>

//           {/* Tech Stack Card */}
//           <Reveal delay={300}>
//             <div style={{
//               background: '#0e0e0e',
//               border: '1px solid rgba(255,255,255,0.06)',
//               borderRadius: 24,
//               overflow: 'hidden',
//               marginTop: 28,
//             }}>
//               <div style={{
//                 background: '#CCFF00',
//                 padding: '14px 28px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 12,
//               }}>
//                 <span style={{
//                   fontFamily: "'Fraunces', serif",
//                   fontSize: 16,
//                   fontWeight: 900,
//                   color: '#080808',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.12em',
//                 }}>Tech Stack</span>
//                 <div style={{ marginLeft: 'auto', display: 'flex', gap: 5 }}>
//                   <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(8,8,8,0.2)' }} />
//                   <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(8,8,8,0.2)' }} />
//                   <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(8,8,8,0.2)' }} />
//                 </div>
//               </div>
              
//               <div style={{
//                 padding: 36,
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//                 gap: 36,
//               }}>
//                 {Object.entries(skills).map(([category, { icon: Icon, items }]) => (
//                   <div key={category}>
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 10,
//                       paddingBottom: 14,
//                       marginBottom: 14,
//                       borderBottom: '1px solid rgba(255,255,255,0.06)',
//                     }}>
//                       <div style={{
//                         width: 36,
//                         height: 36,
//                         borderRadius: 10,
//                         background: 'rgba(204,255,0,0.08)',
//                         border: '1px solid rgba(204,255,0,0.15)',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         color: '#CCFF00',
//                       }}>
//                         <Icon size={16} />
//                       </div>
//                       <span style={{
//                         fontSize: 13,
//                         fontWeight: 800,
//                         letterSpacing: '0.14em',
//                         textTransform: 'uppercase',
//                         color: '#F5F0E8',
//                         fontFamily: "'DM Mono', monospace",
//                       }}>{category}</span>
//                     </div>
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
//                       {items.map((skill, j) => (
//                         <SkillPill key={skill} label={skill} index={j} hoverColor="#CCFF00" />
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Reveal>

//           {/* Social Links & Resume CTA */}
//           <div style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginTop: 48,
//             flexWrap: 'wrap',
//             gap: 20,
//           }}>
//             <Reveal delay={400}>
//               <div style={{ display: 'flex', gap: 12 }}>
//                 {socials.map((social, idx) => (
//                   <SocialIcon key={idx} {...social} idx={idx} />
//                 ))}
//               </div>
//             </Reveal>

//             <Reveal delay={450}>
//               <button
//                 onClick={() => window.open('/shahnwaj_alam_resume.pdf', '_blank')}
//                 style={{
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   gap: 12,
//                   padding: '14px 32px',
//                   background: '#CCFF00',
//                   color: '#080808',
//                   fontFamily: "'DM Mono', monospace",
//                   fontSize: 12,
//                   fontWeight: 700,
//                   letterSpacing: '0.14em',
//                   textTransform: 'uppercase',
//                   border: 'none',
//                   borderRadius: 100,
//                   cursor: 'pointer',
//                   position: 'relative',
//                   overflow: 'hidden',
//                   transition: 'all 0.3s',
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
//                   e.currentTarget.style.boxShadow = '0 0 32px rgba(204,255,0,0.35)'
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0) scale(1)'
//                   e.currentTarget.style.boxShadow = 'none'
//                 }}
//               >
//                 <Download size={16} />
//                 <span>Download Resume</span>
//                 <ArrowRight size={16} style={{ transition: 'transform 0.2s' }} 
//                   onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
//                   onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
//                 />
//               </button>
//             </Reveal>
//           </div>

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
//               <span>End of introduction</span>
//               <span>Let's build something great together</span>
//             </div>
//           </Reveal>

//         </div>
//       </section>
//     </>
//   )
// }











import { MapPin, Mail, Download, ArrowRight, Code2, Layers, Server, Wrench, Sparkles, Github, Linkedin, Twitter, Zap, Activity, Cpu, User, Briefcase, Trophy, Heart, Star, Globe } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

function useReveal(delay = 0) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.08 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible, delay]
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(36px)',
      transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  )
}

function CountUp({ target, suffix = '', duration = 1200, trigger }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let current = 0
    const step = target / (duration / 16)
    const t = setInterval(() => {
      current = Math.min(current + step, target)
      setVal(Math.round(current))
      if (current >= target) clearInterval(t)
    }, 16)
    return () => clearInterval(t)
  }, [trigger, target, duration])
  return <>{val}{suffix}</>
}

function SkillPill({ label, hoverColor = '#CCFF00' }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        padding: '6px 14px',
        fontSize: '10px',
        fontWeight: 600,
        fontFamily: "'DM Mono', monospace",
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        cursor: 'default',
        transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
        background: hovered ? `${hoverColor}12` : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? `${hoverColor}40` : 'rgba(255,255,255,0.06)'}`,
        color: hovered ? hoverColor : 'rgba(245,240,232,0.5)',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
    >
      {label}
    </span>
  )
}

export default function About() {
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  const skills = {
    Frontend: { icon: Code2, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    Backend: { icon: Server, items: ['Node.js', 'Express', 'GraphQL', 'JWT', 'Socket.io'] },
    Database: { icon: Layers, items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'] },
    Tools: { icon: Wrench, items: ['Docker', 'AWS', 'Git', 'CI/CD'] },
  }

  const socials = [
    { icon: <Github size={16} />, href: "https://github.com/shahnwajalam10", color: "#F5F0E8" },
    { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/shahnwaj-alam-b08415206/", color: "#0A66C2" },
    { icon: <Twitter size={16} />, href: "https://twitter.com/Shahnwajalam786", color: "#1DA1F2" },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

        .about-root {
          background: #080808;
          padding: 110px 80px 120px;
          min-height: 100vh;
          color: #F5F0E8;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .about-root {
            padding: 80px 24px 80px;
          }
        }

        .about-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.5;
        }

        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { transform: translateY(-15px) translateX(8px); opacity: 0.3; }
        }

        .floating-particle {
          animation: floatParticle 5s ease-in-out infinite;
        }
      `}</style>

      <section className="about-root">
        {/* Floating particles */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="floating-particle"
              style={{
                position: 'absolute',
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                borderRadius: '50%',
                background: `rgba(204, 255, 0, ${Math.random() * 0.3})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>

          {/* ── Masthead ── */}
          <Reveal>
            <div style={{
              borderBottom: '3px solid rgba(255,255,255,0.9)',
              paddingBottom: 20,
              marginBottom: 0,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: 16,
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
              }}>Vol. 01 — Introduction</div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.2em',
              }}>Full Stack Developer</div>
            </div>
          </Reveal>

          {/* ── Giant heading ── */}
          <Reveal delay={80}>
            <div style={{ padding: '32px 0 0', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: 0 }}>
              <h2 style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 'clamp(72px, 14vw, 180px)',
                fontWeight: 900,
                lineHeight: 0.85,
                letterSpacing: '-0.04em',
                margin: '0 0 12px',
                color: '#F5F0E8',
              }}>
                About<span style={{ color: '#CCFF00' }}> Me</span>
                <span style={{ color: '#CCFF00' }}>.</span>
              </h2>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 40,
                paddingBottom: 28,
                flexWrap: 'wrap',
              }}>
                <p style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: 18,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'rgba(245,240,232,0.35)',
                  maxWidth: 500,
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  Building the digital future with clean code and modern solutions.
                </p>
                <div style={{ display: 'flex', gap: 12, marginLeft: 'auto', flexWrap: 'wrap' }}>
                  {['Full Stack', 'Problem Solver', 'Team Player'].map(tag => (
                    <span key={tag} style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      padding: '8px 18px',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: 'rgba(255,255,255,0.5)',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Bio section ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            marginTop: 48,
            marginBottom: 80,
          }}>
            {/* Left - Bio text */}
            <Reveal delay={120}>
              <div>
                <div style={{
                  borderLeft: `2px solid #CCFF00`,
                  paddingLeft: 24,
                  marginBottom: 32,
                }}>
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    color: '#CCFF00',
                    letterSpacing: '0.2em',
                  }}>Profile</span>
                </div>
                <p style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: 'rgba(245,240,232,0.5)',
                  marginBottom: 24,
                }}>
                  I'm a Full Stack Developer passionate about building applications that solve real problems. 
                  With a keen eye for design and a love for clean code, I create digital experiences that are 
                  both beautiful and functional.
                </p>
                <p style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: 'rgba(245,240,232,0.5)',
                  marginBottom: 32,
                }}>
                  My journey in tech started with a curiosity about how things work, 
                  and evolved into a career dedicated to building solutions that make a difference.
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 16,
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: 'rgba(245,240,232,0.6)',
                  }}>
                    <MapPin size={14} style={{ color: '#CCFF00' }} />
                    India
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: 'rgba(245,240,232,0.6)',
                  }}>
                    <Mail size={14} style={{ color: '#CCFF00' }} />
                    shahnwajalam10@gmail.com
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right - Stats */}
            <Reveal delay={160}>
              <div ref={statsRef}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 16,
                  marginBottom: 32,
                }}>
                  {[
                    { value: 45, label: 'Projects' },
                    { value: 4, label: 'Years Exp' },
                    { value: 18, label: 'Clients' },
                  ].map((stat, i) => (
                    <div key={i} style={{
                      textAlign: 'center',
                      padding: '24px 16px',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <div style={{
                        fontFamily: "'Fraunces', serif",
                        fontSize: 42,
                        fontWeight: 900,
                        color: '#CCFF00',
                        lineHeight: 1,
                        marginBottom: 8,
                      }}>
                        <CountUp target={stat.value} suffix="+" trigger={statsVisible} />
                      </div>
                      <div style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 9,
                        color: 'rgba(245,240,232,0.3)',
                        letterSpacing: '0.1em',
                      }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Tech Stack Section ── */}
          <Reveal delay={200}>
            <div style={{
              borderTop: '3px solid rgba(255,255,255,0.9)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              padding: '32px 0',
              marginBottom: 48,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 20,
                marginBottom: 32,
              }}>
                <h3 style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: 'clamp(28px, 5vw, 48px)',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  color: '#F5F0E8',
                }}>
                  Tech Stack<span style={{ color: '#CCFF00' }}>.</span>
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}>
                  <Cpu size={14} style={{ color: '#CCFF00' }} />
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 9,
                    color: 'rgba(245,240,232,0.3)',
                    letterSpacing: '0.15em',
                  }}>{Object.values(skills).reduce((acc, cat) => acc + cat.items.length, 0)} technologies</span>
                </div>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 24,
              }}>
                {Object.entries(skills).map(([category, { icon: Icon, items }]) => (
                  <div key={category}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      paddingBottom: 12,
                      marginBottom: 12,
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <Icon size={14} style={{ color: '#CCFF00' }} />
                      <span style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 10,
                        color: '#CCFF00',
                        letterSpacing: '0.12em',
                      }}>{category}</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 6,
                    }}>
                      {items.map((item, i) => (
                        <SkillPill key={i} label={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Footer CTA ── */}
          <Reveal delay={250}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 24,
              marginBottom: 32,
            }}>
              <div style={{
                display: 'flex',
                gap: 12,
              }}>
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 40,
                      height: 40,
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s',
                      color: 'rgba(245,240,232,0.5)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = social.color
                      e.currentTarget.style.color = social.color
                      e.currentTarget.style.transform = 'translateY(-3px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                      e.currentTarget.style.color = 'rgba(245,240,232,0.5)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              <button
                onClick={() => window.open('/shahnwaj_alam_resume.pdf', '_blank')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 28px',
                  background: '#CCFF00',
                  color: '#080808',
                  border: 'none',
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(204,255,0,0.2)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <Download size={14} />
                <span>Download Resume</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </Reveal>

          {/* ── Footer rule ── */}
          <Reveal delay={300}>
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: 20,
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: "'DM Mono', monospace",
              fontSize: 9,
              color: 'rgba(255,255,255,0.15)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>
              <span>End of introduction</span>
              <span>Let's build something great together</span>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  )
}
















// import { useState, useRef, useEffect } from 'react'
// import { MapPin,Rocket ,CheckCircle ,Sparkle , Mail, Download, ArrowRight, Code2, Layers, Server, Wrench, Sparkles, Github, Linkedin, Twitter, Zap, Activity, Cpu, User, Briefcase, Trophy, Heart, Star, Globe, Clock, Smile, Terminal, Coffee } from 'lucide-react'

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

// function CountUp({ target, suffix = '', duration = 1200, trigger }) {
//   const [val, setVal] = useState(0)
//   useEffect(() => {
//     if (!trigger) return
//     let current = 0
//     const step = target / (duration / 16)
//     const t = setInterval(() => {
//       current = Math.min(current + step, target)
//       setVal(Math.round(current))
//       if (current >= target) clearInterval(t)
//     }, 16)
//     return () => clearInterval(t)
//   }, [trigger, target, duration])
//   return <>{val}{suffix}</>
// }

// const ABOUT_DATA = {
//   name: "Shahnwaj Alam",
//   role: "Full Stack Developer",
//   location: "India / Remote",
//   email: "shahnwajalam10@gmail.com",
//   bio: "I build digital experiences that actually work. Clean code, fast performance, and interfaces people love to use.",
//   story: "Started coding out of curiosity, stayed because I love creating things that matter. 4+ years of building, breaking, and fixing.",
//   stats: [
//     { value: 4, label: "Projects", icon: <Rocket size={14} />, suffix: "+" },
//     { value: 1, label: "Years", icon: <Clock size={14} />, suffix: "+" },
//     { value: 100, label: "Hustle", icon: <Zap size={14} />, suffix: "%" },
//   ],
//   vibes: [
//     { icon: <Rocket size={12} />, text: "Ship it", color: "#CCFF00" },
//     { icon: <CheckCircle size={12} />, text: "Clean code", color: "#00D4FF" },
//     { icon: <Zap size={12} />, text: "Fast asf", color: "#FF6B6B" },
//     { icon: <Sparkle size={12} />, text: "Pixel perfect", color: "#C084FC" },
//   ],
// }

// function AboutRow({ title, content, icon, idx }) {
//   const [hovered, setHovered] = useState(false)
//   const [open, setOpen] = useState(false)

//   return (
//     <div
//       style={{
//         borderTop: "1px solid rgba(255,255,255,0.08)",
//       }}
//     >
//       <div
//         onClick={() => setOpen((o) => !o)}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         style={{
//           display: "grid",
//           gridTemplateColumns: "60px 1fr auto",
//           alignItems: "center",
//           padding: "28px 0",
//           cursor: "pointer",
//           gap: 0,
//         }}
//       >
//         <span style={{
//           fontFamily: "'DM Mono', monospace",
//           fontSize: 10, color: "rgba(245,240,232,0.25)",
//           letterSpacing: "0.2em",
//         }}>{String(idx + 1).padStart(2, '0')}</span>

//         <div>
//           <div style={{
//             fontFamily: "'Fraunces', serif",
//             fontWeight: 900,
//             fontSize: "clamp(28px, 5vw, 54px)",
//             lineHeight: 0.92,
//             letterSpacing: "-0.03em",
//             color: hovered ? "#CCFF00" : "#F5F0E8",
//             transition: "color 0.25s",
//           }}>{title}</div>
//           <div style={{
//             fontFamily: "'DM Mono', monospace",
//             fontSize: 9, color: "rgba(245,240,232,0.25)",
//             letterSpacing: "0.22em", textTransform: "uppercase",
//             marginTop: 6,
//           }}>{icon}</div>
//         </div>

//         <div style={{ textAlign: "right" }}>
//           <div style={{
//             fontFamily: "'Fraunces', serif",
//             fontWeight: 900,
//             fontSize: "clamp(24px, 3vw, 40px)",
//             lineHeight: 1,
//             color: open ? "#CCFF00" : "#F5F0E8",
//             transition: "color 0.3s",
//           }}>{open ? "Close" : "Open"}</div>
//         </div>
//       </div>

//       <div style={{
//         maxHeight: open ? 500 : 0,
//         overflow: "hidden",
//         transition: "max-height 0.6s cubic-bezier(0.16,1,0.3,1)",
//       }}>
//         <div style={{ paddingBottom: 48 }}>
//           <div style={{
//             display: "grid",
//             gridTemplateColumns: "1fr",
//             gap: 24,
//           }}>
//             <div>
//               <div style={{
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 9, letterSpacing: "0.25em",
//                 textTransform: "uppercase",
//                 color: "#CCFF00",
//                 marginBottom: 20,
//               }}>Details</div>
//               <div style={{
//                 fontFamily: "'Fraunces', serif",
//                 fontSize: 15,
//                 lineHeight: 1.7,
//                 color: "rgba(245,240,232,0.55)",
//               }}>{content}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function About() {
//   const [statsVisible, setStatsVisible] = useState(false)
//   const statsRef = useRef(null)

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect() } },
//       { threshold: 0.3 }
//     )
//     if (statsRef.current) obs.observe(statsRef.current)
//     return () => obs.disconnect()
//   }, [])

//   const socials = [
//     { icon: <Github size={16} />, href: "https://github.com/shahnwajalam10", color: "#F5F0E8" },
//     { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/shahnwaj-alam-b08415206/", color: "#0A66C2" },
//     { icon: <Twitter size={16} />, href: "https://twitter.com/Shahnwajalam786", color: "#1DA1F2" },
//   ]

//   const aboutItems = [
//     { title: "Bio", icon: <User size={14} />, content: ABOUT_DATA.bio },
//     { title: "Story", icon: <Heart size={14} />, content: ABOUT_DATA.story },
//     { title: "Philosophy", icon: <Sparkles size={14} />, content: "Code should be clean, fast, and make people smile. I believe in shipping early, iterating often, and never stop learning." },
//   ]

//   const techStack = [
//     { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"], color: "#CCFF00" },
//     { category: "Backend", items: ["Node.js", "Express", "GraphQL"], color: "#00D4FF" },
//     { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis"], color: "#FF6B6B" },
//     { category: "Tools", items: ["Docker", "AWS", "Git"], color: "#C084FC" },
//   ]

//   const totalTech = techStack.reduce((acc, t) => acc + t.items.length, 0)

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

//         .about-root {
//           background: #080808;
//           min-height: 100vh;
//           padding: 0 0 120px;
//           color: #F5F0E8;
//           position: relative;
//           overflow: hidden;
//         }

//         .about-root::before {
//           content: '';
//           position: fixed;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
//           background-repeat: repeat;
//           background-size: 200px;
//           pointer-events: none;
//           z-index: 0;
//           opacity: 0.5;
//         }

//         @keyframes floatParticle {
//           0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
//           50% { transform: translateY(-20px) translateX(10px); opacity: 0.4; }
//         }

//         .about-particle {
//           animation: floatParticle 4s ease-in-out infinite;
//         }

//         .about-container {
//           width: 100%;
//           max-width: 1100px;
//           margin: 0 auto;
//           padding: 0 48px;
//           position: relative;
//           z-index: 1;
//         }

//         @media (max-width: 768px) {
//           .about-container { padding: 0 24px; }
//         }
//       `}</style>

//       <section className="about-root">

//         {/* particles */}
//         <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
//           {[...Array(50)].map((_, i) => (
//             <div key={i} className="about-particle" style={{
//               position: "absolute",
//               width: Math.random() * 2 + 1,
//               height: Math.random() * 2 + 1,
//               borderRadius: "50%",
//               background: `rgba(204,255,0,${Math.random() * 0.4})`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//             }} />
//           ))}
//         </div>

//         {/* corner decorations */}
//         {[
//           { top: 32, left: 32, borderTop: "1px solid rgba(255,255,255,0.1)", borderLeft: "1px solid rgba(255,255,255,0.1)" },
//           { top: 32, right: 32, borderTop: "1px solid rgba(255,255,255,0.1)", borderRight: "1px solid rgba(255,255,255,0.1)" },
//           { bottom: 32, left: 32, borderBottom: "1px solid rgba(255,255,255,0.1)", borderLeft: "1px solid rgba(255,255,255,0.1)" },
//           { bottom: 32, right: 32, borderBottom: "1px solid rgba(255,255,255,0.1)", borderRight: "1px solid rgba(255,255,255,0.1)" },
//         ].map((s, i) => (
//           <div key={i} style={{
//             position: "fixed", width: 64, height: 64, ...s, zIndex: 2, pointerEvents: "none",
//           }} />
//         ))}

//         <div className="about-container">

//           {/* Masthead */}
//           <Reveal>
//             <div style={{
//               borderBottom: "3px solid rgba(255,255,255,0.9)",
//               paddingBottom: 20,
//               marginTop: 80,
//               marginBottom: 48,
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "flex-end",
//               flexWrap: "wrap",
//               gap: 16,
//             }}>
//               <div style={{
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 10,
//                 color: "rgba(255,255,255,0.3)",
//                 letterSpacing: "0.25em",
//                 textTransform: "uppercase",
//               }}>Vol. 01 — About</div>
//               <div style={{
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 10,
//                 color: "rgba(255,255,255,0.3)",
//                 letterSpacing: "0.2em",
//               }}>Full Stack Developer</div>
//             </div>
//           </Reveal>

//           {/* Giant heading */}
//           <Reveal delay={100}>
//             <div style={{ marginBottom: 64 }}>
//               <h2 style={{
//                 fontFamily: "'Fraunces', serif",
//                 fontSize: "clamp(64px, 15vw, 160px)",
//                 fontWeight: 900,
//                 lineHeight: 0.85,
//                 letterSpacing: "-0.04em",
//                 margin: "0 0 24px",
//                 color: "#F5F0E8",
//               }}>
//                 About<br />
//                 Me<span style={{ color: "#CCFF00" }}>.</span>
//               </h2>

//               <div style={{ display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
//                 <p style={{
//                   fontFamily: "'Fraunces', serif",
//                   fontSize: 18, fontWeight: 300, fontStyle: "italic",
//                   color: "rgba(245,240,232,0.35)",
//                   maxWidth: 460, lineHeight: 1.6, margin: 0,
//                 }}>
//                   {ABOUT_DATA.bio}
//                 </p>
//                 <div style={{ display: "flex", gap: 12, marginLeft: "auto", flexWrap: "wrap" }}>
//                   {[`${totalTech}+ Tools`, "Full Stack", "Problem Solver"].map(tag => (
//                     <span key={tag} style={{
//                       fontFamily: "'DM Mono', monospace",
//                       fontSize: 10, letterSpacing: "0.18em",
//                       textTransform: "uppercase",
//                       padding: "8px 18px",
//                       border: "1px solid rgba(255,255,255,0.15)",
//                       color: "rgba(255,255,255,0.5)",
//                     }}>{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </Reveal>

//           {/* Stats row */}
//           <Reveal delay={150}>
//             <div ref={statsRef} style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(3, 1fr)",
//               gap: 2,
//               marginBottom: 48,
//               background: "rgba(255,255,255,0.03)",
//             }}>
//               {ABOUT_DATA.stats.map((stat, i) => (
//                 <div key={i} style={{
//                   background: "#0e0e0e",
//                   padding: "28px 20px",
//                   textAlign: "center",
//                 }}>
//                   <div style={{ color: "#CCFF00", marginBottom: 8 }}>{stat.icon}</div>
//                   <div style={{
//                     fontFamily: "'Fraunces', serif",
//                     fontSize: 42,
//                     fontWeight: 900,
//                     color: "#CCFF00",
//                     lineHeight: 1,
//                     marginBottom: 8,
//                   }}>
//                     <CountUp target={stat.value} suffix={stat.suffix} trigger={statsVisible} />
//                   </div>
//                   <div style={{
//                     fontFamily: "'DM Mono', monospace",
//                     fontSize: 9,
//                     color: "rgba(245,240,232,0.3)",
//                     letterSpacing: "0.1em",
//                   }}>{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </Reveal>

//           {/* Vibes row */}
//           {/* <Reveal delay={180}>
//             <div style={{
//               display: "flex",
//               gap: 12,
//               flexWrap: "wrap",
//               marginBottom: 48,
//               paddingBottom: 24,
//               borderBottom: "1px solid rgba(255,255,255,0.08)",
//             }}>
//               {ABOUT_DATA.vibes.map((vibe, i) => (
//                 <span key={i} style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: 6,
//                   fontFamily: "'DM Mono', monospace",
//                   fontSize: 10,
//                   padding: "5px 14px",
//                   background: `${vibe.color}10`,
//                   border: `1px solid ${vibe.color}30`,
//                   color: vibe.color,
//                 }}>
//                   {vibe.icon} {vibe.text}
//                 </span>
//               ))}
//             </div>
//           </Reveal> */}

//           {/* Info row - location and email */}
//           <Reveal delay={200}>
//             <div style={{
//               display: "flex",
//               gap: 24,
//               flexWrap: "wrap",
//               marginBottom: 48,
//             }}>
//               <div style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 8,
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 11,
//                 color: "rgba(245,240,232,0.6)",
//               }}>
//                 <MapPin size={14} style={{ color: "#CCFF00" }} />
//                 {ABOUT_DATA.location}
//               </div>
//               <div style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 8,
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 11,
//                 color: "rgba(245,240,232,0.6)",
//               }}>
//                 <Mail size={14} style={{ color: "#CCFF00" }} />
//                 {ABOUT_DATA.email}
//               </div>
//               <div style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 8,
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 11,
//                 color: "rgba(245,240,232,0.6)",
//               }}>
//                 <Coffee size={14} style={{ color: "#CCFF00" }} />
//                 Fueled by chai
//               </div>
//             </div>
//           </Reveal>

//           {/* Expandable rows - Bio, Story, Philosophy */}
//           <Reveal delay={250}>
//             <div style={{ marginBottom: 48 }}>
//               {aboutItems.map((item, idx) => (
//                 <AboutRow key={idx} title={item.title} content={item.content} icon={item.icon} idx={idx} />
//               ))}
//             </div>
//           </Reveal>

//           {/* Tech stack section */}
//           <Reveal delay={300}>
//             <div style={{
//               borderTop: "3px solid rgba(255,255,255,0.9)",
//               borderBottom: "1px solid rgba(255,255,255,0.1)",
//               padding: "32px 0",
//               marginBottom: 48,
//             }}>
//               <div style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 flexWrap: "wrap",
//                 gap: 20,
//                 marginBottom: 32,
//               }}>
//                 <h3 style={{
//                   fontFamily: "'Fraunces', serif",
//                   fontSize: "clamp(28px, 5vw, 48px)",
//                   fontWeight: 900,
//                   letterSpacing: "-0.02em",
//                   color: "#F5F0E8",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 12,
//                 }}>
//                   Tech Stack
//                   <Zap size={24} style={{ color: "#CCFF00" }} />
//                 </h3>
//                 <div style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 8,
//                 }}>
//                   <Cpu size={14} style={{ color: "#CCFF00" }} />
//                   <span style={{
//                     fontFamily: "'DM Mono', monospace",
//                     fontSize: 9,
//                     color: "rgba(245,240,232,0.3)",
//                     letterSpacing: "0.15em",
//                   }}>{totalTech} tools • production ready</span>
//                 </div>
//               </div>
//               <div style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(4, 1fr)",
//                 gap: 24,
//               }}>
//                 {techStack.map((tech, idx) => (
//                   <div key={idx}>
//                     <div style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 10,
//                       paddingBottom: 12,
//                       marginBottom: 12,
//                       borderBottom: "1px solid rgba(255,255,255,0.06)",
//                     }}>
//                       <span style={{
//                         width: 6,
//                         height: 6,
//                         borderRadius: "50%",
//                         background: tech.color,
//                       }} />
//                       <span style={{
//                         fontFamily: "'DM Mono', monospace",
//                         fontSize: 10,
//                         color: "#CCFF00",
//                         letterSpacing: "0.12em",
//                       }}>{tech.category}</span>
//                     </div>
//                     <div style={{
//                       display: "flex",
//                       flexWrap: "wrap",
//                       gap: 6,
//                     }}>
//                       {tech.items.map((item, i) => (
//                         <span key={i} style={{
//                           fontFamily: "'DM Mono', monospace",
//                           fontSize: 9,
//                           padding: "4px 10px",
//                           background: "rgba(255,255,255,0.03)",
//                           border: "1px solid rgba(255,255,255,0.06)",
//                           color: "rgba(245,240,232,0.5)",
//                         }}>
//                           {item}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Reveal>

//           {/* CTA section */}
//           <Reveal delay={350}>
//             <div style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               flexWrap: "wrap",
//               gap: 24,
//               marginBottom: 32,
//             }}>
//               <div style={{
//                 display: "flex",
//                 gap: 12,
//               }}>
//                 {socials.map((social, idx) => (
//                   <a
//                     key={idx}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{
//                       width: 40,
//                       height: 40,
//                       background: "rgba(255,255,255,0.02)",
//                       border: "1px solid rgba(255,255,255,0.06)",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       transition: "all 0.3s",
//                       color: "rgba(245,240,232,0.5)",
//                     }}
//                     onMouseEnter={e => {
//                       e.currentTarget.style.borderColor = social.color
//                       e.currentTarget.style.color = social.color
//                       e.currentTarget.style.transform = "translateY(-3px)"
//                     }}
//                     onMouseLeave={e => {
//                       e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"
//                       e.currentTarget.style.color = "rgba(245,240,232,0.5)"
//                       e.currentTarget.style.transform = "translateY(0)"
//                     }}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>

//               <a
//                 href="mailto:shahnwajalam10@gmail.com"
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 8,
//                   padding: "12px 24px",
//                   background: "#CCFF00",
//                   color: "#080808",
//                   fontFamily: "'DM Mono', monospace",
//                   fontSize: 10,
//                   fontWeight: 700,
//                   letterSpacing: "0.1em",
//                   textDecoration: "none",
//                   transition: "all 0.3s",
//                 }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.transform = "translateY(-2px)"
//                   e.currentTarget.style.boxShadow = "0 8px 20px rgba(204,255,0,0.2)"
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.transform = "translateY(0)"
//                   e.currentTarget.style.boxShadow = "none"
//                 }}
//               >
//                 <Mail size={14} />
//                 <span>Get in touch</span>
//                 <ArrowRight size={14} />
//               </a>
//             </div>
//           </Reveal>

//           {/* Footer */}
//           <Reveal delay={400}>
//             <div style={{
//               borderTop: "1px solid rgba(255,255,255,0.08)",
//               paddingTop: 32,
//               display: "flex",
//               justifyContent: "center",
//               gap: 20,
//               flexWrap: "wrap",
//               fontFamily: "'DM Mono', monospace",
//               fontSize: 9,
//               color: "rgba(255,255,255,0.15)",
//               letterSpacing: "0.2em",
//               textTransform: "uppercase",
//             }}>
//               <span>#BUILDFORFUN</span>
//               <span>#SHIPIT</span>
//               <span>#NEVERSTOPLEARNING</span>
//             </div>
//           </Reveal>

//         </div>
//       </section>
//     </>
//   )
// }