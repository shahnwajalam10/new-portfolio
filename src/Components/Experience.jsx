// import { Briefcase, Calendar, MapPin } from "lucide-react"
// import { motion, useInView } from "framer-motion"
// import { useRef } from "react"

// export default function Experience() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const experiences = [
//     {
//       date: "Sep 2025 — Present",
//       company: "Masters' Union",
//       position: "Associate Software Developer",
//       location: " Gurgaon, Haryana, India",
//       highlights: [
//         "Built and maintained production-grade web applications used by internal teams.",
//         "Designed scalable REST APIs and integrated them with modern React frontends.",
//         "Improved frontend performance and code quality through refactoring and best practices.",
//         "Collaborated closely with product, design, and backend teams in an agile setup.",
//       ],
//       technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "MySQL"],
//     },
//   ]

//   return (
//     <section ref={ref} id="experience" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-30" />
//       <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#CCFF00]/5 blur-[200px] animate-float-medium" />

//       <div className="max-w-7xl mx-auto relative z-10">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//           className="mb-20"
//         >
//           <p className="text-[#CCFF00] font-semibold uppercase tracking-[0.3em] text-sm mb-4">Career</p>
//           <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-10 border-b border-white/10">
//             <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
//               <span className="text-white">WORK</span>
//               <br />
//               <span className="text-[#CCFF00]">HISTORY<span className="text-white/20">.</span></span>
//             </h2>

//             <motion.div
//               whileHover={{ y: -4 }}
//               className="bg-[#141414] border border-white/10 p-5 rounded-2xl max-w-sm"
//             >
//               <p className="text-white/50 font-medium text-base leading-relaxed">
//                 Hands-on experience building & shipping real-world applications at scale.
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Experience Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 80 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
//         >
//           <motion.div
//             whileHover={{ y: -4 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="relative bg-[#141414] border border-white/10 rounded-3xl text-white overflow-hidden"
//           >
//             <div className="grid md:grid-cols-12">
//               {/* Left meta */}
//               <div className="md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 bg-[#CCFF00] text-[#0a0a0a] flex flex-col justify-center relative overflow-hidden">
//                 {/* Subtle pattern */}
//                 <div className="absolute inset-0 opacity-10">
//                   <div
//                     className="absolute inset-0"
//                     style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)' }}
//                   />
//                 </div>

//                 <div className="relative z-10">
//                   <div className="flex items-center gap-2 mb-4">
//                     <Calendar className="w-4 h-4" />
//                     <span className="text-sm font-bold uppercase tracking-wider">{experiences[0].date}</span>
//                   </div>
                  
//                   <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-none mb-4">
//                     {experiences[0].company}
//                   </h3>
                  
//                   <div className="flex items-center gap-2 text-[#0a0a0a]/70">
//                     <MapPin className="w-4 h-4" />
//                     <span className="text-sm font-semibold">{experiences[0].location}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Right content */}
//               <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center">
//                 <div className="flex items-center gap-3 mb-6">
//                   <Briefcase className="w-5 h-5 text-[#CCFF00]" />
//                   <motion.h4
//                     initial={{ opacity: 0 }}
//                     animate={isInView ? { opacity: 1 } : {}}
//                     transition={{ delay: 0.6 }}
//                     className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight"
//                   >
//                     {experiences[0].position}
//                   </motion.h4>
//                 </div>

//                 {/* Highlights */}
//                 <ul className="space-y-3 mb-8 pl-4 border-l-2 border-[#CCFF00]/30">
//                   {experiences[0].highlights.map((point, i) => (
//                     <motion.li
//                       key={i}
//                       initial={{ opacity: 0, x: 30 }}
//                       animate={isInView ? { opacity: 1, x: 0 } : {}}
//                       transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
//                       className="text-white/60 font-medium text-base leading-relaxed"
//                     >
//                       {point}
//                     </motion.li>
//                   ))}
//                 </ul>

//                 {/* Tech */}
//                 <div className="flex flex-wrap gap-2">
//                   {experiences[0].technologies.map((tech, i) => (
//                     <motion.span
//                       key={tech}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                       transition={{ delay: 1 + i * 0.1 }}
//                       whileHover={{ scale: 1.05, backgroundColor: "rgba(204,255,0,0.15)", color: "#CCFF00", borderColor: "rgba(204,255,0,0.3)" }}
//                       className="text-sm font-semibold uppercase tracking-wide px-4 py-2 border border-white/10 rounded-full bg-white/5 text-white/60 transition-all cursor-default"
//                     >
//                       {tech}
//                     </motion.span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//       </div>
//     </section>
//   )
// }
















// import { Briefcase, Calendar, MapPin } from 'lucide-react'
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

// function SkillPill({ label }) {
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
//         letterSpacing: '0.06em',
//         textTransform: 'uppercase',
//         cursor: 'default',
//         transition: 'all 0.22s cubic-bezier(0.16,1,0.3,1)',
//         background: hovered ? 'rgba(204,255,0,0.12)' : 'rgba(255,255,255,0.05)',
//         border: `1px solid ${hovered ? 'rgba(204,255,0,0.35)' : 'rgba(255,255,255,0.1)'}`,
//         color: hovered ? '#CCFF00' : 'rgba(245,245,240,0.6)',
//         transform: hovered ? 'translateY(-3px) scale(1.04)' : 'none',
//         boxShadow: hovered ? '0 0 16px rgba(204,255,0,0.12)' : 'none',
//       }}
//     >
//       {label}
//     </span>
//   )
// }

// export default function Experience() {
//   const experiences = [
//     {
//       date: 'Sep 2025 — Present',
//       company: "Masters' Union",
//       position: 'Associate Software Developer',
//       location: 'Gurgaon, Haryana, India',
//       status: 'Current',
//       highlights: [
//         'Built and maintained production-grade web applications used by internal teams.',
//         'Designed scalable REST APIs and integrated them with modern React frontends.',
//         'Improved frontend performance and code quality through refactoring and best practices.',
//         'Collaborated closely with product, design, and backend teams in an agile setup.',
//       ],
//       technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'MySQL'],
//     },
//   ]

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

//         .exp-root {
//           background: var(--bg);
//           min-height: 100vh;
//           position: relative;
//           overflow: hidden;
//           padding: 120px 40px 100px;
//           font-family: 'Space Grotesk', sans-serif;
//           color: var(--white);
//         }
//         .exp-root::before {
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

//         .exp-orb {
//           position: absolute;
//           top: 15%; left: 20%;
//           width: 500px; height: 500px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(204,255,0,0.055) 0%, transparent 70%);
//           pointer-events: none; z-index: 0;
//           animation: expFloat 9s ease-in-out infinite;
//         }
//         @keyframes expFloat {
//           0%,100% { transform: translateY(0); }
//           50%      { transform: translateY(-28px); }
//         }

//         .exp-scanline {
//           position: absolute;
//           left: 0; width: 100%; height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(204,255,0,0.07), transparent);
//           z-index: 1; pointer-events: none;
//           animation: expScan 6s linear infinite;
//         }
//         @keyframes expScan {
//           0%   { top: -1px; }
//           100% { top: 100%; }
//         }

//         .exp-inner {
//           max-width: 1100px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 2;
//         }

//         /* Header */
//         .exp-tag {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           margin-bottom: 20px;
//         }
//         .exp-tag-line { width: 32px; height: 2px; background: var(--lime); }
//         .exp-tag span {
//           font-size: 11px; font-weight: 700;
//           letter-spacing: 0.28em; text-transform: uppercase;
//           color: var(--lime);
//         }
//         .exp-heading {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(56px, 10vw, 110px);
//           font-weight: 800;
//           line-height: 0.88;
//           letter-spacing: -0.02em;
//           text-transform: uppercase;
//           margin-bottom: 0;
//         }
//         .exp-heading .line-white { color: var(--white); display: block; }
//         .exp-heading .line-lime  { color: var(--lime);  display: block; }
//         .exp-heading .dim { color: rgba(204,255,0,0.18); }

//         .exp-heading .line-white:hover,
//         .exp-heading .line-lime:hover {
//           animation: expGlitch 0.4s steps(2) both;
//         }
//         @keyframes expGlitch {
//           0%   { text-shadow: 3px 0 #CCFF00, -3px 0 #ff003c; clip-path: inset(10% 0 75% 0); }
//           33%  { text-shadow: -3px 0 #CCFF00, 3px 0 #ff003c; clip-path: inset(45% 0 30% 0); }
//           66%  { text-shadow: 2px 2px #CCFF00, -2px -2px #ff003c; clip-path: inset(75% 0 5% 0); }
//           100% { text-shadow: none; clip-path: none; }
//         }

//         .exp-header-row {
//           display: flex;
//           align-items: flex-end;
//           justify-content: space-between;
//           gap: 32px;
//           padding-bottom: 48px;
//           margin-bottom: 64px;
//           border-bottom: 1px solid rgba(255,255,255,0.07);
//           flex-wrap: wrap;
//         }
//         .exp-sub-card {
//           background: var(--card);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 18px;
//           padding: 22px 28px;
//           max-width: 340px;
//           transition: transform 0.2s;
//         }
//         .exp-sub-card:hover { transform: translateY(-4px); }
//         .exp-sub-card p {
//           font-size: 15px;
//           line-height: 1.65;
//           color: rgba(245,245,240,0.45);
//           font-weight: 400;
//         }

//         /* ── Experience card ── */
//         .exp-card {
//           background: var(--card);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 28px;
//           overflow: hidden;
//           transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s;
//         }
//         .exp-card:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(204,255,0,0.08);
//         }

//         .exp-card-grid {
//           display: grid;
//           grid-template-columns: 5fr 8fr;
//         }
//         @media (max-width: 720px) {
//           .exp-card-grid { grid-template-columns: 1fr; }
//         }

//         /* Left lime panel */
//         .exp-left {
//           background: var(--lime);
//           padding: 48px 40px;
//           position: relative;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//         }
//         .exp-left::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: repeating-linear-gradient(
//             45deg,
//             transparent, transparent 14px,
//             rgba(0,0,0,0.04) 14px, rgba(0,0,0,0.04) 28px
//           );
//           pointer-events: none;
//         }
//         /* Large watermark number */
//         .exp-left::after {
//           content: '01';
//           position: absolute;
//           bottom: -20px; right: -10px;
//           font-family: 'Syne', sans-serif;
//           font-size: 140px;
//           font-weight: 800;
//           color: rgba(0,0,0,0.06);
//           line-height: 1;
//           pointer-events: none;
//           user-select: none;
//         }

//         .exp-left-top { position: relative; z-index: 1; }
//         .exp-date-row {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-bottom: 20px;
//         }
//         .exp-date-row span {
//           font-size: 12px;
//           font-weight: 800;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: rgba(5,5,5,0.7);
//         }
//         .exp-company {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(28px, 4vw, 42px);
//           font-weight: 800;
//           text-transform: uppercase;
//           letter-spacing: -0.02em;
//           line-height: 1;
//           color: #050505;
//           margin-bottom: 16px;
//         }
//         .exp-location-row {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }
//         .exp-location-row span {
//           font-size: 13px;
//           font-weight: 600;
//           color: rgba(5,5,5,0.55);
//         }

//         .exp-status-badge {
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
//         .exp-status-dot {
//           width: 7px; height: 7px;
//           background: #050505;
//           border-radius: 50%;
//           animation: expPulse 2s ease infinite;
//         }
//         @keyframes expPulse {
//           0%,100% { box-shadow: 0 0 0 0 rgba(5,5,5,0.4); }
//           50%      { box-shadow: 0 0 0 5px rgba(5,5,5,0); }
//         }
//         .exp-status-badge span {
//           font-size: 11px;
//           font-weight: 800;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: #050505;
//         }

//         /* Right content panel */
//         .exp-right {
//           padding: 48px 44px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           border-left: 1px solid rgba(255,255,255,0.06);
//         }

//         .exp-position-row {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           margin-bottom: 32px;
//           padding-bottom: 24px;
//           border-bottom: 1px solid rgba(255,255,255,0.07);
//         }
//         .exp-position-icon {
//           width: 40px; height: 40px;
//           border-radius: 12px;
//           background: rgba(204,255,0,0.08);
//           border: 1px solid rgba(204,255,0,0.18);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: var(--lime);
//           flex-shrink: 0;
//         }
//         .exp-position-title {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(18px, 2.5vw, 26px);
//           font-weight: 800;
//           text-transform: uppercase;
//           letter-spacing: -0.01em;
//           color: var(--white);
//         }

//         /* Highlights */
//         .exp-highlights {
//           list-style: none;
//           padding: 0;
//           margin: 0 0 32px;
//           border-left: 2px solid rgba(204,255,0,0.25);
//           padding-left: 20px;
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//         }
//         .exp-highlight-item {
//           font-size: 15px;
//           line-height: 1.65;
//           color: rgba(245,245,240,0.55);
//           font-weight: 400;
//           position: relative;
//         }
//         .exp-highlight-item::before {
//           content: '';
//           position: absolute;
//           left: -24px; top: 10px;
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background: rgba(204,255,0,0.4);
//           flex-shrink: 0;
//         }

//         /* Tech pills */
//         .exp-tech-row {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 8px;
//         }

//         /* Timeline line (future-proofing for multiple exp) */
//         .exp-timeline-hint {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           margin-top: 40px;
//           padding-top: 32px;
//           border-top: 1px solid rgba(255,255,255,0.06);
//         }
//         .exp-timeline-dot {
//           width: 10px; height: 10px;
//           border-radius: 50%;
//           background: var(--lime);
//           flex-shrink: 0;
//           box-shadow: 0 0 10px rgba(204,255,0,0.4);
//         }
//         .exp-timeline-text {
//           font-size: 13px;
//           color: rgba(245,245,240,0.28);
//           letter-spacing: 0.08em;
//           font-weight: 500;
//         }
//       `}</style>

//       <section id="experience" className="exp-root">
//         <div className="exp-orb" />
//         <div className="exp-scanline" />

//         <div className="exp-inner">

//           {/* Header */}
//           <Reveal>
//             <div className="exp-tag">
//               <div className="exp-tag-line" />
//               <span>Career</span>
//             </div>
//             <div className="exp-header-row">
//               <h2 className="exp-heading">
//                 <span className="line-white">WORK</span>
//                 <span className="line-lime">HISTORY<span className="dim">.</span></span>
//               </h2>
//               <div className="exp-sub-card">
//                 <p>Hands-on experience building &amp; shipping real-world applications at scale.</p>
//               </div>
//             </div>
//           </Reveal>

//           {/* Experience cards */}
//           {experiences.map((exp, idx) => (
//             <Reveal key={idx} delay={200 + idx * 120}>
//               <div className="exp-card">
//                 <div className="exp-card-grid">

//                   {/* Left lime panel */}
//                   <div className="exp-left">
//                     <div className="exp-left-top">
//                       <div className="exp-date-row">
//                         <Calendar size={14} color="rgba(5,5,5,0.6)" />
//                         <span>{exp.date}</span>
//                       </div>
//                       <div className="exp-company">{exp.company}</div>
//                       <div className="exp-location-row">
//                         <MapPin size={14} color="rgba(5,5,5,0.5)" />
//                         <span>{exp.location}</span>
//                       </div>
//                     </div>
//                     <div className="exp-status-badge">
//                       <div className="exp-status-dot" />
//                       <span>{exp.status}</span>
//                     </div>
//                   </div>

//                   {/* Right content panel */}
//                   <div className="exp-right">
//                     <div className="exp-position-row">
//                       <div className="exp-position-icon">
//                         <Briefcase size={16} />
//                       </div>
//                       <div className="exp-position-title">{exp.position}</div>
//                     </div>

//                     <ul className="exp-highlights">
//                       {exp.highlights.map((point, i) => (
//                         <li key={i} className="exp-highlight-item">{point}</li>
//                       ))}
//                     </ul>

//                     <div className="exp-tech-row">
//                       {exp.technologies.map(tech => (
//                         <SkillPill key={tech} label={tech} />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Timeline hint */}
//               <div className="exp-timeline-hint">
//                 <div className="exp-timeline-dot" />
//                 <span className="exp-timeline-text">
//                   {idx === experiences.length - 1 ? 'Beginning of career timeline' : 'Next role below'}
//                 </span>
//               </div>
//             </Reveal>
//           ))}

//         </div>
//       </section>
//     </>
//   )
// }
































import { Briefcase, Calendar, MapPin, Sparkles, ArrowRight, Award, Target, Users } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(48px)',
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

function SkillPill({ label, idx }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Reveal delay={300 + idx * 30}>
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'inline-block',
          padding: '8px 18px',
          borderRadius: '100px',
          fontSize: '11px',
          fontWeight: 600,
          fontFamily: "'DM Mono', monospace",
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          cursor: 'default',
          transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
          background: hovered ? 'rgba(204,255,0,0.12)' : 'rgba(255,255,255,0.03)',
          border: `1px solid ${hovered ? 'rgba(204,255,0,0.4)' : 'rgba(255,255,255,0.06)'}`,
          color: hovered ? '#CCFF00' : 'rgba(245,240,232,0.5)',
          transform: hovered ? 'translateY(-3px) scale(1.05)' : 'none',
          boxShadow: hovered ? '0 0 16px rgba(204,255,0,0.12)' : 'none',
        }}
      >
        {label}
      </span>
    </Reveal>
  )
}

export default function Experience() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const experiences = [
    {
      id: '01',
      date: 'Sep 2025 — Present',
      company: "Masters' Union",
      position: 'Associate Software Developer',
      location: 'Gurgaon, Haryana, India',
      status: 'Current',
      highlights: [
        'Built and maintained production-grade web applications used by internal teams, serving 10K+ monthly active users.',
        'Designed scalable REST APIs and integrated them with modern React frontends, reducing response time by 35%.',
        'Improved frontend performance and code quality through refactoring and best practices, achieving 90+ Lighthouse scores.',
        'Collaborated closely with product, design, and backend teams in an agile setup, shipping features every 2 weeks.',
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'MySQL', 'Docker'],
      achievements: ['Shipped 5 major features', 'Mentored 2 interns', 'Reduced bugs by 40%'],
    },
  ]

  // Additional experiences for future expansion
  const pastExperiences = [
    {
      id: '02',
      date: 'Jan 2024 — Aug 2025',
      company: 'Tech Innovators Inc.',
      position: 'Junior Full Stack Developer',
      location: 'Remote, India',
      status: 'Completed',
      highlights: [
        'Developed responsive web applications using React and Tailwind CSS.',
        'Collaborated with cross-functional teams to deliver features on time.',
        'Implemented unit tests and integration tests using Jest.',
      ],
      technologies: ['React', 'Express', 'MongoDB', 'Tailwind CSS'],
      achievements: ['Won Best Intern Award', 'Optimized database queries by 50%'],
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

        .exp-root {
          background: #080808;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: 110px 48px 120px;
          color: #F5F0E8;
        }

        .exp-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-10px) translateX(5px); }
          66% { transform: translateY(8px) translateX(-3px); }
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes glitch {
          0% { text-shadow: 3px 0 #CCFF00, -3px 0 #FF6B6B; clip-path: inset(10% 0 75% 0); }
          20% { text-shadow: -3px 0 #CCFF00, 3px 0 #FF6B6B; clip-path: inset(45% 0 30% 0); }
          40% { text-shadow: 2px 2px #CCFF00, -2px -2px #FF6B6B; clip-path: inset(75% 0 5% 0); }
          60% { text-shadow: -2px -2px #CCFF00, 2px 2px #FF6B6B; clip-path: inset(20% 0 60% 0); }
          80% { text-shadow: 1px -1px #CCFF00, -1px 1px #FF6B6B; clip-path: inset(60% 0 20% 0); }
          100% { text-shadow: none; clip-path: none; }
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,0,0,0.2); }
          50% { box-shadow: 0 0 0 4px rgba(0,0,0,0); }
        }

        .animate-float {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-scanline {
          animation: scanline 8s linear infinite;
        }

        .glitch-hover:hover {
          animation: glitch 0.3s steps(2) both;
        }

        .exp-card-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          position: relative;
        }

        .exp-card-left {
          grid-column: span 5;
          background: #CCFF00;
          padding: 48px 40px;
          position: relative;
          overflow: hidden;
        }

        .exp-card-right {
          grid-column: span 7;
          padding: 48px 44px;
          border-left: 1px solid rgba(255,255,255,0.06);
        }

        @media (max-width: 900px) {
          .exp-root {
            padding: 80px 24px 80px;
          }
          .exp-card-grid {
            grid-template-columns: 1fr;
          }
          .exp-card-left {
            grid-column: span 1;
            padding: 40px 32px;
          }
          .exp-card-right {
            grid-column: span 1;
            padding: 40px 32px;
            border-left: none;
            border-top: 1px solid rgba(255,255,255,0.06);
          }
        }

        @media (max-width: 480px) {
          .exp-root {
            padding: 60px 16px 60px;
          }
          .exp-card-left {
            padding: 32px 20px;
          }
          .exp-card-right {
            padding: 32px 20px;
          }
        }
      `}</style>

      <section className="exp-root">
        {/* Floating particles */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                borderRadius: '50%',
                background: `rgba(204, 255, 0, ${Math.random() * 0.3})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-slow ${Math.random() * 5 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Animated scanline */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
          overflow: 'hidden',
        }}>
          <div className="animate-scanline" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 100,
            background: 'linear-gradient(to bottom, transparent, rgba(204, 255, 0, 0.06), transparent)',
            filter: 'blur(8px)',
          }} />
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          {/* Header rule */}
          <Reveal>
            <div style={{
              borderBottom: '3px solid rgba(255,255,255,0.9)',
              paddingBottom: 20,
              marginBottom: 48,
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
              }}>
                Vol. 03 — Journey
              </div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.2em',
              }}>
                {experiences.length + pastExperiences.length} positions · 2+ years
              </div>
            </div>
          </Reveal>

          {/* Giant heading */}
          <Reveal delay={80}>
            <div style={{ marginBottom: 64 }}>
              <h2 style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 'clamp(64px, 12vw, 160px)',
                fontWeight: 900,
                lineHeight: 0.85,
                letterSpacing: '-0.04em',
                margin: '0 0 16px',
                color: '#F5F0E8',
              }}>
                Work<span style={{ color: '#FF4D00' }}> History</span>
                <span style={{ color: '#FF4D00' }}>.</span>
              </h2>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 40,
                paddingBottom: 20,
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
                  Hands-on experience building & shipping real-world applications at scale.
                </p>
                <div style={{ display: 'flex', gap: 12, marginLeft: 'auto', flexWrap: 'wrap' }}>
                  {['Full Time', 'Hybrid', 'Immediate Joiner'].map(tag => (
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

          {/* Current Experience Card */}
          {experiences.map((exp, idx) => (
            <Reveal key={exp.id} delay={120 + idx * 100}>
              <div style={{
                background: '#0e0e0e',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 28,
                overflow: 'hidden',
                marginBottom: 24,
                transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.borderColor = '#CCFF0030'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              }}>
                
                <div className="exp-card-grid">
                  
                  {/* Left accent panel - lime green */}
                  <div className="exp-card-left">
                    <div style={{
                      position: 'absolute',
                      bottom: -20,
                      right: -10,
                      fontFamily: "'Fraunces', serif",
                      fontSize: 140,
                      fontWeight: 900,
                      color: 'rgba(0,0,0,0.08)',
                      lineHeight: 1,
                      pointerEvents: 'none',
                    }}>
                      {exp.id}
                    </div>
                    
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        marginBottom: 20,
                      }}>
                        <Calendar size={14} color="rgba(0,0,0,0.5)" />
                        <span style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 11,
                          fontWeight: 500,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'rgba(0,0,0,0.6)',
                        }}>{exp.date}</span>
                      </div>
                      
                      <h3 style={{
                        fontFamily: "'Fraunces', serif",
                        fontSize: 'clamp(28px, 4vw, 44px)',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em',
                        lineHeight: 1,
                        color: '#080808',
                        marginBottom: 16,
                      }}>
                        {exp.company}
                      </h3>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        marginBottom: 28,
                      }}>
                        <MapPin size={14} color="rgba(0,0,0,0.45)" />
                        <span style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 12,
                          color: 'rgba(0,0,0,0.5)',
                        }}>{exp.location}</span>
                      </div>
                      
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        background: 'rgba(0,0,0,0.08)',
                        borderRadius: 100,
                        padding: '6px 16px',
                      }}>
                        <div style={{
                          width: 7,
                          height: 7,
                          background: '#080808',
                          borderRadius: '50%',
                          animation: 'pulse 2s ease infinite',
                        }} />
                        <span style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 10,
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#080808',
                        }}>{exp.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right content panel */}
                  <div className="exp-card-right">
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      marginBottom: 28,
                      paddingBottom: 22,
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <div style={{
                        width: 44,
                        height: 44,
                        borderRadius: 14,
                        background: 'rgba(204, 255, 0, 0.08)',
                        border: '1px solid rgba(204, 255, 0, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#CCFF00',
                      }}>
                        <Briefcase size={18} />
                      </div>
                      <h4 style={{
                        fontFamily: "'Fraunces', serif",
                        fontSize: 'clamp(18px, 2vw, 24px)',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.01em',
                        color: '#CCFF00',
                        margin: 0,
                      }}>
                        {exp.position}
                      </h4>
                    </div>

                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 28px',
                      paddingLeft: 24,
                      borderLeft: '2px solid rgba(204, 255, 0, 0.25)',
                    }}>
                      {exp.highlights.map((point, i) => (
                        <li key={i} style={{
                          fontSize: 14,
                          lineHeight: 1.65,
                          color: 'rgba(245,240,232,0.5)',
                          marginBottom: 12,
                          position: 'relative',
                          paddingLeft: 8,
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: -24,
                            top: 8,
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: 'rgba(204, 255, 0, 0.5)',
                          }} />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Achievements row */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 12,
                      marginBottom: 28,
                      padding: '16px 0',
                      borderTop: '1px solid rgba(255,255,255,0.04)',
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                    }}>
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          background: 'rgba(255,255,255,0.02)',
                          padding: '6px 14px',
                          borderRadius: 100,
                        }}>
                          <Award size={12} style={{ color: '#CCFF00' }} />
                          <span style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: 10,
                            color: 'rgba(245,240,232,0.6)',
                          }}>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 8,
                    }}>
                      {exp.technologies.map((tech, techIdx) => (
                        <SkillPill key={tech} label={tech} idx={techIdx} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline hint */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '20px 0',
                borderTop: '1px solid rgba(255,255,255,0.04)',
              }}>
                <div style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#CCFF00',
                  boxShadow: '0 0 12px rgba(204,255,0,0.5)',
                }} />
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.2)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>Current position — building the future</span>
              </div>
            </Reveal>
          ))}

          {/* Footer rule */}
          <Reveal delay={400}>
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: 32,
              marginTop: 48,
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: "'DM Mono', monospace",
              fontSize: 9,
              color: 'rgba(255,255,255,0.15)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>
              <span>End of professional journey</span>
              <span>Always learning, always growing</span>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  )
}