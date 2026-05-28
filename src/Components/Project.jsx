// import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
// import { motion, useInView } from "framer-motion"
// import { useRef } from "react"

// export default function Project() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const projects = [
//     {
//       title: "Employee Management System",
//       description:
//         "A full-stack MERN system to manage employees, roles, and workflows with secure CRUD operations.",
//       tech: ["React", "Node.js", "MongoDB", "Tailwind"],
//       liveUrl: "https://github.com/shahnwajalam10",
//       githubUrl: "https://github.com/shahnwajalam10",
//       accent: "#CCFF00"
//     },
//     {
//       title: "Candidate Referral System",
//       description:
//         "Referral platform with real-time tracking, notifications, and a secure scalable backend.",
//       tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
//       liveUrl: "https://github.com/shahnwajalam10",
//       githubUrl: "https://github.com/shahnwajalam10",
//       accent: "#00D4FF"
//     },
//   ]

//   return (
//     <section ref={ref} id="projects" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-30" />
//       <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[#CCFF00]/5 blur-[200px] animate-float-medium" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//           className="mb-20"
//         >
//           <p className="text-[#CCFF00] font-semibold uppercase tracking-[0.3em] text-sm mb-4">Portfolio</p>
//           <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-10 border-b border-white/10">
//             <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
//               <span className="text-white">COOL</span>
//               <br />
//               <span className="text-[#CCFF00]">PROJECTS<span className="text-white/20">.</span></span>
//             </h2>
//             <motion.div
//               whileHover={{ y: -4 }}
//               className="bg-[#141414] border border-white/10 p-5 rounded-2xl max-w-sm"
//             >
//               <p className="text-white/50 font-medium text-base leading-relaxed">
//                 Clean UI, solid backend, real-world use cases. Built to ship.
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Project Grid */}
//         <div className="grid lg:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 80 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.7, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
//             >
//               <motion.div
//                 whileHover={{ y: -8 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="group relative bg-[#141414] border border-white/10 p-8 md:p-10 rounded-3xl flex flex-col h-full overflow-hidden"
//               >
//                 {/* Accent glow */}
//                 <div 
//                   className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
//                   style={{ backgroundColor: project.accent }}
//                 />

//                 {/* Project number */}
//                 <div className="flex items-center justify-between mb-6 relative z-10">
//                   <span 
//                     className="text-xs font-bold uppercase tracking-[0.3em] px-3 py-1 rounded-full"
//                     style={{ backgroundColor: `${project.accent}15`, color: project.accent }}
//                   >
//                     Project {String(index + 1).padStart(2, '0')}
//                   </span>
//                   <motion.div
//                     whileHover={{ rotate: 45 }}
//                     className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
//                   >
//                     <ArrowUpRight className="w-4 h-4 text-white/40" />
//                   </motion.div>
//                 </div>

//                 <div className="flex-grow relative z-10">
//                   <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight leading-tight text-white">
//                     {project.title}
//                   </h3>

//                   <p className="text-white/50 font-medium text-base mb-8 leading-relaxed">
//                     {project.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mb-8">
//                     {project.tech.map((t, i) => (
//                       <motion.span
//                         key={i}
//                         whileHover={{ scale: 1.05 }}
//                         className="px-3 py-1.5 border border-white/10 bg-white/5 text-white/50 font-semibold text-xs uppercase rounded-full"
//                       >
//                         {t}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex gap-3 mt-auto relative z-10">
//                   <motion.a
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 flex items-center justify-center gap-2 text-sm font-bold py-3 rounded-full transition-all uppercase tracking-wider relative overflow-hidden group/btn"
//                     style={{ backgroundColor: project.accent, color: '#0a0a0a' }}
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
//                     <ExternalLink size={16} className="relative z-10" /> 
//                     <span className="relative z-10">Live</span>
//                   </motion.a>
//                   <motion.a
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 flex items-center justify-center gap-2 text-sm font-bold bg-white/5 border border-white/10 text-white/70 py-3 rounded-full hover:border-white/30 transition-all uppercase tracking-wider"
//                   >
//                     <Github size={16} /> <span>Source</span>
//                   </motion.a>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }























// import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
// import { useState, useRef, useEffect } from 'react'

// function Reveal({ children, delay = 0 }) {
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

// const PROJECTS = [
//   {
//     index: '01',
//     title: 'Employee Management System',
//     description: 'A full-stack MERN system to manage employees, roles, and workflows with secure CRUD operations and role-based access control.',
//     tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
//     liveUrl: 'https://github.com/shahnwajalam10',
//     githubUrl: 'https://github.com/shahnwajalam10',
//     color: '#CCFF00',
//     highlights: [
//       'Role-based access control with JWT auth.',
//       'Full CRUD for employee records and org structure.',
//       'Responsive dashboard with live activity feed.',
//       'REST API with Express + MongoDB Atlas.',
//     ],
//   },
//   {
//     index: '02',
//     title: 'Candidate Referral System',
//     description: 'Referral platform with real-time tracking, email notifications, and a secure scalable backend built for high-volume hiring pipelines.',
//     tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
//     liveUrl: 'https://github.com/shahnwajalam10',
//     githubUrl: 'https://github.com/shahnwajalam10',
//     color: '#00D4FF',
//     highlights: [
//       'Real-time referral status tracking via polling.',
//       'Email notification system with templated triggers.',
//       'Type-safe API routes with Zod validation.',
//       'Prisma migrations on PostgreSQL with zero downtime.',
//     ],
//   },
// ]

// export default function Project() {
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

//         .pj-root {
//           background: var(--bg);
//           min-height: 100vh;
//           position: relative;
//           overflow: hidden;
//           padding: 120px 40px 100px;
//           font-family: 'Space Grotesk', sans-serif;
//           color: var(--white);
//         }
//         .pj-root::before {
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

//         .pj-orb {
//           position: absolute;
//           top: 50%; left: 0;
//           transform: translateY(-50%);
//           width: 600px; height: 600px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(204,255,0,0.045) 0%, transparent 70%);
//           pointer-events: none; z-index: 0;
//           animation: pjFloat 9s ease-in-out infinite;
//         }
//         @keyframes pjFloat {
//           0%,100% { transform: translateY(-50%); }
//           50%      { transform: translateY(calc(-50% - 28px)); }
//         }

//         .pj-scanline {
//           position: absolute;
//           left: 0; width: 100%; height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(204,255,0,0.07), transparent);
//           z-index: 1; pointer-events: none;
//           animation: pjScan 7s linear infinite;
//         }
//         @keyframes pjScan {
//           0%   { top: -1px; }
//           100% { top: 100%; }
//         }

//         .pj-inner {
//           max-width: 1100px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 2;
//         }

//         .pj-tag {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           margin-bottom: 20px;
//         }
//         .pj-tag-line { width: 32px; height: 2px; background: var(--lime); }
//         .pj-tag span {
//           font-size: 11px; font-weight: 700;
//           letter-spacing: 0.28em; text-transform: uppercase;
//           color: var(--lime);
//         }

//         .pj-heading {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(56px, 10vw, 110px);
//           font-weight: 800;
//           line-height: 0.88;
//           letter-spacing: -0.02em;
//           text-transform: uppercase;
//           margin-bottom: 0;
//         }
//         .pj-heading .line-white { color: var(--white); display: block; }
//         .pj-heading .line-lime  { color: var(--lime);  display: block; }
//         .pj-heading .dim { color: rgba(204,255,0,0.18); }
//         .pj-heading .line-white:hover,
//         .pj-heading .line-lime:hover {
//           animation: pjGlitch 0.4s steps(2) both;
//         }
//         @keyframes pjGlitch {
//           0%   { text-shadow: 3px 0 #CCFF00, -3px 0 #ff003c; clip-path: inset(10% 0 75% 0); }
//           33%  { text-shadow: -3px 0 #CCFF00, 3px 0 #ff003c; clip-path: inset(45% 0 30% 0); }
//           66%  { text-shadow: 2px 2px #CCFF00, -2px -2px #ff003c; clip-path: inset(75% 0 5% 0); }
//           100% { text-shadow: none; clip-path: none; }
//         }

//         .pj-header-row {
//           display: flex;
//           align-items: flex-end;
//           justify-content: space-between;
//           gap: 32px;
//           padding-bottom: 48px;
//           margin-bottom: 64px;
//           border-bottom: 1px solid rgba(255,255,255,0.07);
//           flex-wrap: wrap;
//         }
//         .pj-sub-card {
//           background: var(--card);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 18px;
//           padding: 22px 28px;
//           max-width: 340px;
//           transition: transform 0.2s;
//         }
//         .pj-sub-card:hover { transform: translateY(-4px); }
//         .pj-sub-card p {
//           font-size: 15px;
//           line-height: 1.65;
//           color: rgba(245,245,240,0.45);
//           font-weight: 400;
//         }

//         /* Card */
//         .pj-card {
//           background: var(--card);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 28px;
//           overflow: hidden;
//           transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
//           margin-bottom: 24px;
//           position: relative;
//         }
//         .pj-card:hover { transform: translateY(-6px); }
//         .pj-card-hover-border {
//           position: absolute;
//           inset: 0;
//           border-radius: 28px;
//           border: 1px solid transparent;
//           pointer-events: none;
//           opacity: 0;
//           transition: opacity 0.3s;
//         }
//         .pj-card:hover .pj-card-hover-border { opacity: 1; }

//         .pj-card-grid {
//           display: grid;
//           grid-template-columns: 5fr 8fr;
//         }
//         @media (max-width: 720px) {
//           .pj-card-grid { grid-template-columns: 1fr; }
//         }

//         /* Left accent panel */
//         .pj-left {
//           padding: 48px 40px;
//           position: relative;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//         }
//         .pj-left::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: repeating-linear-gradient(
//             45deg,
//             transparent, transparent 14px,
//             rgba(0,0,0,0.12) 14px, rgba(0,0,0,0.12) 28px
//           );
//           pointer-events: none;
//         }
//         .pj-left-watermark {
//           position: absolute;
//           bottom: -20px; right: -10px;
//           font-family: 'Syne', sans-serif;
//           font-size: 140px;
//           font-weight: 800;
//           color: rgba(0,0,0,0.1);
//           line-height: 1;
//           pointer-events: none;
//           user-select: none;
//         }
//         .pj-left-top { position: relative; z-index: 1; }

//         .pj-index-row {
//           display: flex; align-items: center;
//           gap: 8px; margin-bottom: 18px;
//         }
//         .pj-index-row span {
//           font-size: 11px; font-weight: 800;
//           letter-spacing: 0.2em; text-transform: uppercase;
//           color: rgba(5,5,5,0.6);
//         }

//         .pj-project-title {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(22px, 3vw, 34px);
//           font-weight: 800;
//           text-transform: uppercase;
//           letter-spacing: -0.02em;
//           line-height: 1.05;
//           color: #050505;
//           margin-bottom: 14px;
//         }
//         .pj-project-desc {
//           font-size: 13px;
//           font-weight: 500;
//           color: rgba(5,5,5,0.52);
//           line-height: 1.65;
//         }

//         /* Links badge row */
//         .pj-link-row {
//           display: flex;
//           gap: 8px;
//           margin-top: 28px;
//           position: relative;
//           z-index: 1;
//         }
//         .pj-btn-live {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           background: rgba(5,5,5,0.14);
//           border-radius: 100px;
//           padding: 8px 16px;
//           font-size: 11px;
//           font-weight: 800;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: #050505;
//           text-decoration: none;
//           transition: background 0.18s;
//         }
//         .pj-btn-live:hover { background: rgba(5,5,5,0.22); }
//         .pj-btn-src {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           background: transparent;
//           border: 1px solid rgba(5,5,5,0.25);
//           border-radius: 100px;
//           padding: 8px 16px;
//           font-size: 11px;
//           font-weight: 800;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: rgba(5,5,5,0.7);
//           text-decoration: none;
//           transition: background 0.18s;
//         }
//         .pj-btn-src:hover { background: rgba(5,5,5,0.08); }

//         /* Right panel */
//         .pj-right {
//           padding: 48px 44px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           border-left: 1px solid rgba(255,255,255,0.06);
//         }

//         .pj-position-row {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           margin-bottom: 28px;
//           padding-bottom: 22px;
//           border-bottom: 1px solid rgba(255,255,255,0.07);
//         }
//         .pj-position-icon {
//           width: 40px; height: 40px;
//           border-radius: 12px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//         }
//         .pj-position-title {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(14px, 1.8vw, 18px);
//           font-weight: 800;
//           text-transform: uppercase;
//           letter-spacing: -0.01em;
//           color: var(--white);
//         }

//         .pj-highlights {
//           list-style: none;
//           padding: 0 0 0 20px;
//           margin: 0 0 28px;
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//           border-left-width: 2px;
//           border-left-style: solid;
//         }
//         .pj-highlight-item {
//           font-size: 14px;
//           line-height: 1.65;
//           color: rgba(245,245,240,0.5);
//           font-weight: 400;
//           position: relative;
//         }

//         .pj-pills-row {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 8px;
//         }
//         .pj-pill {
//           display: inline-block;
//           padding: 6px 14px;
//           border-radius: 100px;
//           font-size: 11px;
//           font-weight: 700;
//           font-family: 'Space Grotesk', sans-serif;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           cursor: default;
//           transition: all 0.22s cubic-bezier(0.16,1,0.3,1);
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.1);
//           color: rgba(245,245,240,0.5);
//         }

//         .pj-timeline-hint {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           padding: 20px 0;
//           border-top: 1px solid rgba(255,255,255,0.06);
//         }
//         .pj-timeline-dot {
//           width: 10px; height: 10px;
//           border-radius: 50%;
//           flex-shrink: 0;
//         }
//         .pj-timeline-text {
//           font-size: 12px;
//           color: rgba(245,245,240,0.25);
//           letter-spacing: 0.1em;
//           font-weight: 500;
//           text-transform: uppercase;
//         }
//       `}</style>

//       <section id="projects" className="pj-root">
//         <div className="pj-orb" />
//         <div className="pj-scanline" />

//         <div className="pj-inner">

//           {/* Header */}
//           <Reveal>
//             <div className="pj-tag">
//               <div className="pj-tag-line" />
//               <span>Portfolio</span>
//             </div>
//             <div className="pj-header-row">
//               <h2 className="pj-heading">
//                 <span className="line-white">COOL</span>
//                 <span className="line-lime">PROJECTS<span className="dim">.</span></span>
//               </h2>
//               <div className="pj-sub-card">
//                 <p>Clean UI, solid backend, real-world use cases. Built to ship.</p>
//               </div>
//             </div>
//           </Reveal>

//           {/* Project cards */}
//           {PROJECTS.map((project, idx) => (
//             <Reveal key={project.index} delay={200 + idx * 120}>
//               <div className="pj-card">
//                 <div
//                   className="pj-card-hover-border"
//                   style={{ borderColor: `${project.color}18` }}
//                 />
//                 <div className="pj-card-grid">

//                   {/* Left accent panel */}
//                   <div className="pj-left" style={{ background: project.color }}>
//                     <div className="pj-left-watermark">{project.index}</div>
//                     <div className="pj-left-top">
//                       <div className="pj-index-row">
//                         <ArrowUpRight size={13} color="rgba(5,5,5,0.55)" />
//                         <span>Project {project.index}</span>
//                       </div>
//                       <div className="pj-project-title">{project.title}</div>
//                       <div className="pj-project-desc">{project.description}</div>
//                     </div>
//                     <div className="pj-link-row">
//                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="pj-btn-live">
//                         <ExternalLink size={11} />
//                         Live
//                       </a>
//                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="pj-btn-src">
//                         <Github size={11} />
//                         Source
//                       </a>
//                     </div>
//                   </div>

//                   {/* Right content panel */}
//                   <div className="pj-right">
//                     <div className="pj-position-row">
//                       <div
//                         className="pj-position-icon"
//                         style={{
//                           background: `${project.color}12`,
//                           border: `1px solid ${project.color}30`,
//                           color: project.color,
//                         }}
//                       >
//                         <ArrowUpRight size={16} />
//                       </div>
//                       <div className="pj-position-title" style={{ color: project.color }}>
//                         Technical Highlights
//                       </div>
//                     </div>

//                     <ul
//                       className="pj-highlights"
//                       style={{ borderLeftColor: `${project.color}30` }}
//                     >
//                       {project.highlights.map((point, i) => (
//                         <li key={i} className="pj-highlight-item">
//                           <span style={{
//                             position: 'absolute',
//                             left: -24, top: 9,
//                             width: 6, height: 6,
//                             borderRadius: '50%',
//                             background: `${project.color}55`,
//                             display: 'block',
//                           }} />
//                           {point}
//                         </li>
//                       ))}
//                     </ul>

//                     <div className="pj-pills-row">
//                       {project.tech.map(tech => (
//                         <PillHover key={tech} label={tech} color={project.color} />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {idx < PROJECTS.length - 1 ? (
//                 <div className="pj-timeline-hint">
//                   <div className="pj-timeline-dot" style={{ background: project.color, boxShadow: `0 0 10px ${project.color}50` }} />
//                   <span className="pj-timeline-text">Next project below</span>
//                 </div>
//               ) : (
//                 <div className="pj-timeline-hint">
//                   <div className="pj-timeline-dot" style={{ background: project.color, boxShadow: `0 0 10px ${project.color}50` }} />
//                   <span className="pj-timeline-text">End of portfolio</span>
//                 </div>
//               )}
//             </Reveal>
//           ))}

//         </div>
//       </section>
//     </>
//   )
// }

// function PillHover({ label, color }) {
//   const [hovered, setHovered] = useState(false)
//   return (
//     <span
//       className="pj-pill"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         background: hovered ? `${color}18` : 'rgba(255,255,255,0.05)',
//         borderColor: hovered ? `${color}45` : 'rgba(255,255,255,0.1)',
//         color: hovered ? color : 'rgba(245,245,240,0.5)',
//         transform: hovered ? 'translateY(-3px) scale(1.04)' : 'none',
//         boxShadow: hovered ? `0 0 14px ${color}18` : 'none',
//       }}
//     >
//       {label}
//     </span>
//   )
// }















import { ExternalLink, Github } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

function useInView(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.1, ...options })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

const PROJECTS = [
  {
    num: '01',
    title: 'Employee Management System',
    category: 'Full-Stack Application',
    year: '2024',
    description: 'A MERN-stack system for managing employees, roles, and org-wide workflows. Secure CRUD operations with granular role-based access control baked in from day one.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'JWT'],
    liveUrl: 'https://github.com/shahnwajalam10',
    githubUrl: 'https://github.com/shahnwajalam10',
    accent: '#CCFF00',
    stat: { label: 'Role Levels', value: '4' },
  },
  {
    num: '02',
    title: 'Candidate Referral System',
    category: 'SaaS Platform',
    year: '2024',
    description: 'Referral platform with real-time pipeline tracking, automated email triggers, and a fully type-safe backend built for high-volume hiring at scale.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Zod', 'Resend'],
    liveUrl: 'https://github.com/shahnwajalam10',
    githubUrl: 'https://github.com/shahnwajalam10',
    accent: '#FF4D00',
    stat: { label: 'Pipeline Stages', value: '6' },
  },
]

function ProjectCard({ p, idx }) {
  const [ref, visible] = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(60px)',
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${idx * 150}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${idx * 150}ms`,
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: 0,
        marginBottom: 0,
      }}
    >
      {/* Top bar — number + category + year */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 0 0',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        marginBottom: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: 11,
            color: p.accent, letterSpacing: '0.2em', fontWeight: 500,
          }}>
            {p.num}
          </span>
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: 10,
            color: 'rgba(255,255,255,0.3)', letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}>
            {p.category}
          </span>
        </div>
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: 10,
          color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em',
        }}>
          {p.year}
        </span>
      </div>

      {/* Main content grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
        padding: '48px 0 52px',
      }}>
        {/* Left: Title block */}
        <div style={{ paddingRight: 60, borderRight: '1px solid rgba(255,255,255,0.06)' }}>
          <h3 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(36px, 5vw, 68px)',
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: '-0.03em',
            color: hovered ? p.accent : '#F5F0E8',
            transition: 'color 0.4s ease',
            marginBottom: 36,
            textTransform: 'none',
          }}>
            {p.title}
          </h3>

          {/* Stat block */}
          <div style={{
            display: 'inline-flex', flexDirection: 'column',
            borderLeft: `3px solid ${p.accent}`,
            paddingLeft: 16, marginBottom: 40,
          }}>
            <span style={{
              fontFamily: "'Fraunces', serif", fontSize: 48, fontWeight: 900,
              color: p.accent, lineHeight: 1, letterSpacing: '-0.02em',
            }}>{p.stat.value}</span>
            <span style={{
              fontFamily: "'DM Mono', monospace", fontSize: 10,
              color: 'rgba(255,255,255,0.35)', letterSpacing: '0.18em',
              textTransform: 'uppercase', marginTop: 4,
            }}>{p.stat.label}</span>
          </div>

          {/* CTA links */}
          <div style={{ display: 'flex', gap: 12 }}>
            <a
              href={p.liveUrl} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: p.accent, color: '#0a0a0a',
                padding: '12px 24px', borderRadius: 0,
                fontFamily: "'DM Mono', monospace", fontSize: 11,
                fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <ExternalLink size={13} /> Live
            </a>
            <a
              href={p.githubUrl} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.55)',
                padding: '12px 24px', borderRadius: 0,
                fontFamily: "'DM Mono', monospace", fontSize: 11,
                fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}
            >
              <Github size={13} /> Source
            </a>
          </div>
        </div>

        {/* Right: Description + tech */}
        <div style={{ paddingLeft: 60, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <p style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(16px, 1.8vw, 20px)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.7,
            color: 'rgba(245,240,232,0.6)',
            marginBottom: 40,
          }}>
            "{p.description}"
          </p>

          {/* Tech stack as inline tags */}
          <div>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 9,
              color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em',
              textTransform: 'uppercase', marginBottom: 12,
            }}>Stack</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {p.tech.map(t => (
                <TechTag key={t} label={t} accent={p.accent} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function TechTag({ label, accent }) {
  const [hov, setHov] = useState(false)
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "'DM Mono', monospace", fontSize: 10,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        padding: '5px 12px',
        border: `1px solid ${hov ? accent : 'rgba(255,255,255,0.12)'}`,
        color: hov ? accent : 'rgba(255,255,255,0.4)',
        background: hov ? `${accent}0f` : 'transparent',
        transition: 'all 0.2s ease',
        cursor: 'default',
        borderRadius: 2,
      }}
    >{label}</span>
  )
}

function HeadingWord({ children, accent }) {
  const [hov, setHov] = useState(false)
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        color: hov ? accent : 'inherit',
        transition: 'color 0.3s ease',
        cursor: 'default',
      }}
    >{children}</span>
  )
}

export default function Project() {
  const [headerRef, headerVisible] = useInView()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

        .pj-root {
          background: #0a0a0a;
          min-height: 100vh;
          padding: 100px 80px 120px;
          color: #F5F0E8;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .pj-root { padding: 80px 24px 80px; }
          .pj-card-grid { grid-template-columns: 1fr !important; }
          .pj-card-grid > div:first-child { padding-right: 0 !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 40px; margin-bottom: 40px; }
          .pj-card-grid > div:last-child { padding-left: 0 !important; }
        }

        /* Faint vertical rule */
        .pj-root::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          left: 80px;
          width: 1px;
          background: rgba(255,255,255,0.03);
          pointer-events: none;
        }
      `}</style>

      <section className="pj-root">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Header */}
          <div
            ref={headerRef}
            style={{
              marginBottom: 80,
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'none' : 'translateY(40px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            {/* Eyebrow */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 14,
              marginBottom: 28,
            }}>
              <div style={{ width: 40, height: 1, background: '#CCFF00' }} />
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: 10,
                color: '#CCFF00', letterSpacing: '0.3em', textTransform: 'uppercase',
              }}>Selected Work</span>
            </div>

            {/* Main heading — editorial serif */}
            <h2 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(64px, 12vw, 160px)',
              fontWeight: 900,
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
            }}>
              <HeadingWord accent="#CCFF00">Cool</HeadingWord>
              <span style={{ display: 'flex', alignItems: 'baseline', gap: '0.15em' }}>
                <HeadingWord accent="#FF4D00">Projects</HeadingWord>
                <span style={{ color: 'rgba(245,240,232,0.12)', fontStyle: 'italic', fontWeight: 300, fontSize: '0.6em' }}>.</span>
              </span>
            </h2>

            {/* Subtitle */}
            <p style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 18, fontWeight: 300, fontStyle: 'italic',
              color: 'rgba(245,240,232,0.35)',
              maxWidth: 440, marginTop: 28, lineHeight: 1.6,
            }}>
              Clean UI, solid backend, real-world use cases — built to ship and built to last.
            </p>
          </div>

          {/* Project list */}
          <div>
            {PROJECTS.map((p, idx) => (
              <div key={p.num} style={{ '--accent': p.accent }}>
                <ProjectCard p={p} idx={idx} />
              </div>
            ))}
            {/* Closing rule */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 0 }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: 'rgba(255,255,255,0.18)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                End of portfolio
              </span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: 'rgba(255,255,255,0.18)', letterSpacing: '0.2em' }}>
                {PROJECTS.length} projects
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}