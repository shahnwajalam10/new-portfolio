// import { CheckCircle2, GraduationCap, Award } from "lucide-react"
// import { motion, useInView } from "framer-motion"
// import { useRef } from "react"

// export default function Education() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const education = [
//     {
//       degree: "B.Tech in Computer Science & Engineering",
//       institution: "Quantum University Roorkee",
//       period: "2020 - 2024",
//       details: "GPA: 7.41/10.0",
//       description: "Specialized in software development, algorithms, and database management systems.",
//       accent: "#CCFF00"
//     },
//     {
//       degree: "Software Developer Trainee",
//       institution: "Masai School",
//       period: "2024 - 2025",
//       details: "1200+ hours of coding",
//       description: "Intensive coding bootcamp focusing on modern web technologies and agile development.",
//       accent: "#00D4FF"
//     }
//   ]

//   const certifications = [
//     "Cybersecurity Awareness - Quick Heal",
//     "Database Foundations - Oracle Academy",
//     "Full Stack Web Development - Masai School",
//     "React Advanced Concepts - Udemy",
//     "AWS Cloud Practitioner - Coursera"
//   ]

//   return (
//     <section ref={ref} className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-30" />
//       <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#CCFF00]/5 blur-[200px] animate-float-fast" />

//       <div className="max-w-7xl mx-auto relative z-10">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//           className="mb-20"
//         >
//           <p className="text-[#CCFF00] font-semibold uppercase tracking-[0.3em] text-sm mb-4">Background</p>
//           <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
//             <span className="text-white">EDUCATION</span>
//             <br />
//             <span className="text-[#CCFF00]">& CERTS<span className="text-white/20">.</span></span>
//           </h2>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8 mb-16">

//           {/* Education Column */}
//           <div className="space-y-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.2 }}
//               className="flex items-center gap-3 mb-2"
//             >
//               <div className="w-10 h-10 rounded-xl bg-[#CCFF00]/10 flex items-center justify-center">
//                 <GraduationCap className="w-5 h-5 text-[#CCFF00]" />
//               </div>
//               <span className="text-lg font-bold uppercase tracking-wider text-white/60">The Journey</span>
//             </motion.div>

//             {education.map((edu, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -60 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.3 + index * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//               >
//                 <motion.div
//                   whileHover={{ y: -6 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   className="relative bg-[#141414] border border-white/10 p-8 md:p-10 rounded-3xl group overflow-hidden"
//                 >
//                   {/* Accent glow */}
//                   <div 
//                     className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
//                     style={{ backgroundColor: edu.accent }}
//                   />

//                   <div className="relative z-10">
//                     <div className="flex items-center gap-3 mb-4">
//                       <span 
//                         className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
//                         style={{ backgroundColor: `${edu.accent}15`, color: edu.accent }}
//                       >
//                         {edu.period}
//                       </span>
//                       <span className="text-xs font-semibold text-white/30 uppercase">{edu.details}</span>
//                     </div>
                    
//                     <h3 className="text-xl md:text-2xl font-black mb-3 uppercase tracking-tight leading-tight text-white">
//                       {edu.degree}
//                     </h3>
                    
//                     <p className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: edu.accent }}>
//                       {edu.institution}
//                     </p>

//                     <p className="text-white/50 font-medium text-sm leading-relaxed border-t border-white/10 pt-4">
//                       {edu.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Certifications Column */}
//           <div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.3 }}
//               className="flex items-center gap-3 mb-8"
//             >
//               <div className="w-10 h-10 rounded-xl bg-[#CCFF00]/10 flex items-center justify-center">
//                 <Award className="w-5 h-5 text-[#CCFF00]" />
//               </div>
//               <span className="text-lg font-bold uppercase tracking-wider text-white/60">Badges</span>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 60 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               className="bg-[#141414] border border-white/10 rounded-3xl overflow-hidden"
//             >
//               {certifications.map((cert, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: 30 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
//                   whileHover={{ x: 8, backgroundColor: "rgba(204,255,0,0.05)" }}
//                   className="flex items-center gap-4 p-5 border-b border-white/5 last:border-b-0 transition-all cursor-default group"
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.2, rotate: 360 }}
//                     transition={{ duration: 0.3 }}
//                     className="w-8 h-8 rounded-full bg-[#CCFF00]/10 flex items-center justify-center flex-shrink-0"
//                   >
//                     <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
//                   </motion.div>
//                   <span className="text-white/60 font-semibold text-sm group-hover:text-white/80 transition-colors">{cert}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         {/* Summary Banner */}
        
//         {/* <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.8, duration: 0.6 }}
//           className="bg-[#CCFF00] rounded-2xl py-5 px-8 flex flex-wrap items-center justify-between gap-4"
//         >
//           <h3 className="text-xl font-black text-[#0a0a0a] uppercase tracking-tight">TL;DR</h3>
//           <div className="flex gap-3">
//             <motion.span whileHover={{ scale: 1.05 }} className="bg-[#0a0a0a] text-white font-bold text-sm px-5 py-2 rounded-full uppercase tracking-wider">B.Tech CSE</motion.span>
//             <motion.span whileHover={{ scale: 1.05 }} className="bg-white text-[#0a0a0a] font-bold text-sm px-5 py-2 rounded-full uppercase tracking-wider">5 Certs</motion.span>
//           </div>
//         </motion.div> */}


//       </div>
//     </section>
//   )
// }
















// import { GraduationCap, Award, CheckCircle2 } from 'lucide-react'
// import { useState, useRef, useEffect } from 'react'

// function Reveal({ children, delay = 0 }) {
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
//   return (
//     <div ref={ref} style={{
//       opacity: visible ? 1 : 0,
//       transform: visible ? 'translateY(0)' : 'translateY(48px)',
//       transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
//     }}>
//       {children}
//     </div>
//   )
// }

// const EDUCATION = [
//   {
//     index: '01',
//     degree: 'B.Tech in Computer Science & Engineering',
//     institution: 'Quantum University Roorkee',
//     period: '2020 – 2024',
//     details: 'GPA: 7.41 / 10.0',
//     description: 'Specialized in software development, algorithms, and database management systems.',
//     color: '#CCFF00',
//   },
//   {
//     index: '02',
//     degree: 'Software Developer Trainee',
//     institution: 'Masai School',
//     period: '2024 – 2025',
//     details: '1200+ hours of coding',
//     description: 'Intensive bootcamp focusing on modern web technologies and agile development.',
//     color: '#00D4FF',
//   },
// ]

// const CERTS = [
//   { label: 'Cybersecurity Awareness', issuer: 'Quick Heal' },
//   { label: 'Database Foundations', issuer: 'Oracle Academy' },
//   { label: 'Full Stack Web Development', issuer: 'Masai School' },
//   { label: 'React Advanced Concepts', issuer: 'Udemy' },
//   { label: 'AWS Cloud Practitioner', issuer: 'Coursera' },
// ]

// export default function Education() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');
//         :root { --lime:#CCFF00; --bg:#050505; --card:#0e0e0e; --white:#F5F5F0; }

//         .ed-root {
//           background: var(--bg); min-height:100vh; position:relative;
//           overflow:hidden; padding:120px 40px 100px;
//           font-family:'Space Grotesk',sans-serif; color:var(--white);
//         }
//         .ed-root::before {
//           content:''; position:absolute; inset:0;
//           background-image:
//             linear-gradient(rgba(204,255,0,0.03) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(204,255,0,0.03) 1px, transparent 1px);
//           background-size:60px 60px; pointer-events:none; z-index:0;
//         }
//         .ed-orb {
//           position:absolute; top:33%; right:0;
//           width:600px; height:600px; border-radius:50%;
//           background:radial-gradient(circle, rgba(204,255,0,0.04) 0%, transparent 70%);
//           pointer-events:none; z-index:0;
//           animation:edFloat 9s ease-in-out infinite;
//         }
//         @keyframes edFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-28px)} }
//         .ed-scanline {
//           position:absolute; left:0; width:100%; height:1px;
//           background:linear-gradient(90deg,transparent,rgba(204,255,0,0.07),transparent);
//           z-index:1; pointer-events:none; animation:edScan 7s linear infinite;
//         }
//         @keyframes edScan { 0%{top:-1px} 100%{top:100%} }
//         @keyframes edGlitch {
//           0%{text-shadow:3px 0 #CCFF00,-3px 0 #ff003c;clip-path:inset(10% 0 75% 0)}
//           33%{text-shadow:-3px 0 #CCFF00,3px 0 #ff003c;clip-path:inset(45% 0 30% 0)}
//           66%{text-shadow:2px 2px #CCFF00,-2px -2px #ff003c;clip-path:inset(75% 0 5% 0)}
//           100%{text-shadow:none;clip-path:none}
//         }
//         @keyframes edPulse { 0%,100%{box-shadow:0 0 0 0 rgba(5,5,5,0.4)} 50%{box-shadow:0 0 0 5px rgba(5,5,5,0)} }

//         .ed-inner { max-width:1100px; margin:0 auto; position:relative; z-index:2; }

//         .ed-tag { display:inline-flex; align-items:center; gap:8px; margin-bottom:20px; }
//         .ed-tag-line { width:32px; height:2px; background:var(--lime); }
//         .ed-tag span { font-size:11px; font-weight:700; letter-spacing:0.28em; text-transform:uppercase; color:var(--lime); }

//         .ed-heading {
//           font-family:'Syne',sans-serif; font-size:clamp(56px,10vw,110px);
//           font-weight:800; line-height:0.88; letter-spacing:-0.02em; text-transform:uppercase; margin-bottom:0;
//         }
//         .ed-heading .lw { color:var(--white); display:block; }
//         .ed-heading .ll { color:var(--lime); display:block; }
//         .ed-heading .dim { color:rgba(204,255,0,0.18); }
//         .ed-heading .lw:hover,.ed-heading .ll:hover { animation:edGlitch 0.4s steps(2) both; }

//         .ed-header-row {
//           display:flex; align-items:flex-end; justify-content:space-between;
//           gap:32px; padding-bottom:48px; margin-bottom:64px;
//           border-bottom:1px solid rgba(255,255,255,0.07); flex-wrap:wrap;
//         }
//         .ed-sub-card {
//           background:var(--card); border:1px solid rgba(255,255,255,0.08);
//           border-radius:18px; padding:22px 28px; max-width:340px; transition:transform 0.2s;
//         }
//         .ed-sub-card:hover { transform:translateY(-4px); }
//         .ed-sub-card p { font-size:15px; line-height:1.65; color:rgba(245,245,240,0.45); font-weight:400; }

//         /* Two-column grid */
//         .ed-grid {
//           display:grid; grid-template-columns:1fr 1fr; gap:32px; align-items:start;
//         }
//         @media(max-width:768px){ .ed-grid{grid-template-columns:1fr} }

//         /* Section heading row */
//         .ed-col-head {
//           display:flex; align-items:center; gap:12px; margin-bottom:24px;
//         }
//         .ed-col-icon {
//           width:40px; height:40px; border-radius:12px;
//           background:rgba(204,255,0,0.08); border:1px solid rgba(204,255,0,0.18);
//           display:flex; align-items:center; justify-content:center; color:var(--lime);
//         }
//         .ed-col-label {
//           font-family:'Syne',sans-serif; font-size:18px; font-weight:800;
//           text-transform:uppercase; letter-spacing:0.04em;
//           color:rgba(245,245,240,0.35);
//         }

//         /* Education card */
//         .ed-card {
//           background:var(--card); border:1px solid rgba(255,255,255,0.08);
//           border-radius:28px; overflow:hidden;
//           transition:transform 0.3s cubic-bezier(0.16,1,0.3,1); margin-bottom:16px; position:relative;
//         }
//         .ed-card:hover { transform:translateY(-6px); }
//         .ed-card-inner { display:grid; grid-template-columns:auto 1fr; }

//         /* Slim color spine */
//         .ed-spine { width:6px; flex-shrink:0; }

//         .ed-card-body { padding:32px 32px 28px; }

//         .ed-period-row { display:flex; align-items:center; gap:10px; margin-bottom:14px; flex-wrap:wrap; }
//         .ed-period-badge {
//           font-size:10px; font-weight:700; letter-spacing:0.15em; text-transform:uppercase;
//           padding:4px 12px; font-family:'Space Grotesk',sans-serif;
//         }
//         .ed-details-text {
//           font-size:10px; font-weight:600; color:rgba(245,245,240,0.3);
//           text-transform:uppercase; letter-spacing:0.12em;
//         }

//         .ed-degree {
//           font-family:'Syne',sans-serif; font-size:clamp(16px,2vw,21px);
//           font-weight:800; text-transform:uppercase; letter-spacing:-0.01em;
//           color:var(--white); margin-bottom:6px; line-height:1.15;
//         }
//         .ed-institution {
//           font-size:12px; font-weight:700; text-transform:uppercase;
//           letter-spacing:0.12em; margin-bottom:16px;
//         }
//         .ed-desc {
//           font-size:13px; line-height:1.7; color:rgba(245,245,240,0.45);
//           border-top:1px solid rgba(255,255,255,0.07); padding-top:14px;
//         }

//         .ed-status { display:inline-flex; align-items:center; gap:6px; margin-top:16px; }
//         .ed-status-dot { width:7px; height:7px; border-radius:50%; animation:edPulse 2s ease infinite; }
//         .ed-status span { font-size:10px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; }

//         /* Certs card */
//         .ed-certs-card {
//           background:var(--card); border:1px solid rgba(255,255,255,0.08);
//           border-radius:28px; overflow:hidden;
//         }
//         .ed-cert-row {
//           display:flex; align-items:center; gap:14px;
//           padding:18px 24px; border-bottom:1px solid rgba(255,255,255,0.05);
//           transition:background 0.2s, padding-left 0.2s; cursor:default;
//         }
//         .ed-cert-row:last-child { border-bottom:none; }
//         .ed-cert-row:hover { background:rgba(204,255,0,0.04); padding-left:30px; }
//         .ed-cert-icon {
//           width:32px; height:32px; border-radius:50%;
//           background:rgba(204,255,0,0.08); border:1px solid rgba(204,255,0,0.15);
//           display:flex; align-items:center; justify-content:center;
//           color:var(--lime); flex-shrink:0;
//         }
//         .ed-cert-text { flex:1; }
//         .ed-cert-label { font-size:13px; font-weight:600; color:rgba(245,245,240,0.65); display:block; }
//         .ed-cert-issuer { font-size:10px; font-weight:600; color:rgba(245,245,240,0.25); text-transform:uppercase; letter-spacing:0.1em; display:block; margin-top:2px; }

//         /* Timeline hint */
//         .ed-tl { display:flex; align-items:center; gap:14px; padding:20px 0; border-top:1px solid rgba(255,255,255,0.06); margin-top:8px; }
//         .ed-tl-dot { width:10px; height:10px; border-radius:50%; background:var(--lime); box-shadow:0 0 10px rgba(204,255,0,0.4); flex-shrink:0; }
//         .ed-tl-text { font-size:12px; color:rgba(245,245,240,0.25); letter-spacing:0.1em; font-weight:500; text-transform:uppercase; }
//       `}</style>

//       <section className="ed-root">
//         <div className="ed-orb" />
//         <div className="ed-scanline" />
//         <div className="ed-inner">

//           <Reveal>
//             <div className="ed-tag">
//               <div className="ed-tag-line" />
//               <span>Background</span>
//             </div>
//             <div className="ed-header-row">
//               <h2 className="ed-heading">
//                 <span className="lw">EDUCATION</span>
//                 <span className="ll">&amp; CERTS<span className="dim">.</span></span>
//               </h2>
//               <div className="ed-sub-card">
//                 <p>Academic foundations and industry-recognised certifications that shaped the craft.</p>
//               </div>
//             </div>
//           </Reveal>

//           <div className="ed-grid">

//             {/* Left col — Education */}
//             <div>
//               <Reveal delay={100}>
//                 <div className="ed-col-head">
//                   <div className="ed-col-icon"><GraduationCap size={18} /></div>
//                   <span className="ed-col-label">The Journey</span>
//                 </div>
//               </Reveal>

//               {EDUCATION.map((edu, idx) => (
//                 <Reveal key={edu.index} delay={200 + idx * 130}>
//                   <div className="ed-card">
//                     <div className="ed-card-inner">
//                       <div className="ed-spine" style={{ background: edu.color }} />
//                       <div className="ed-card-body">
//                         <div className="ed-period-row">
//                           <span
//                             className="ed-period-badge"
//                             style={{ background: `${edu.color}18`, color: edu.color }}
//                           >{edu.period}</span>
//                           <span className="ed-details-text">{edu.details}</span>
//                         </div>
//                         <div className="ed-degree">{edu.degree}</div>
//                         <div className="ed-institution" style={{ color: edu.color }}>{edu.institution}</div>
//                         <div className="ed-desc">{edu.description}</div>
//                         <div className="ed-status">
//                           <div className="ed-status-dot" style={{ background: edu.color, boxShadow: `0 0 0 0 ${edu.color}66` }} />
//                           <span style={{ color: edu.color }}>Completed</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}

//               <Reveal delay={480}>
//                 <div className="ed-tl">
//                   <div className="ed-tl-dot" />
//                   <span className="ed-tl-text">End of academic timeline</span>
//                 </div>
//               </Reveal>
//             </div>

//             {/* Right col — Certs */}
//             <div>
//               <Reveal delay={150}>
//                 <div className="ed-col-head">
//                   <div className="ed-col-icon"><Award size={18} /></div>
//                   <span className="ed-col-label">Badges</span>
//                 </div>
//               </Reveal>

//               <Reveal delay={260}>
//                 <div className="ed-certs-card">
//                   {CERTS.map((cert, idx) => (
//                     <div key={idx} className="ed-cert-row">
//                       <div className="ed-cert-icon">
//                         <CheckCircle2 size={14} />
//                       </div>
//                       <div className="ed-cert-text">
//                         <span className="ed-cert-label">{cert.label}</span>
//                         <span className="ed-cert-issuer">{cert.issuer}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </Reveal>

//               {/* Summary banner */}
//               <Reveal delay={420}>
//                 <div style={{
//                   marginTop: 20, background: 'var(--lime)',
//                   borderRadius: 16, padding: '22px 28px',
//                   display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
//                 }}>
//                   <div>
//                     <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(5,5,5,0.5)', marginBottom: 4 }}>
//                       TL;DR
//                     </div>
//                     <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, textTransform: 'uppercase', color: '#050505', letterSpacing: '-0.01em' }}>
//                       Qualified &amp; Certified
//                     </div>
//                   </div>
//                   <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
//                     {['B.Tech CSE', `${CERTS.length} Certs`].map(tag => (
//                       <span key={tag} style={{
//                         background: '#050505', color: '#F5F5F0',
//                         fontFamily: "'Space Grotesk',sans-serif", fontSize: 11,
//                         fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
//                         padding: '8px 16px', borderRadius: 100,
//                       }}>{tag}</span>
//                     ))}
//                   </div>
//                 </div>
//               </Reveal>
//             </div>

//           </div>

//         </div>
//       </section>
//     </>
//   )
// }


















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

const EDUCATION = [
  {
    num: '01',
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Quantum University, Roorkee',
    period: '2020 – 2024',
    details: 'GPA 7.41 / 10',
    description: 'Four years building the fundamentals — algorithms, databases, operating systems, and the discipline to ship software that actually works.',
    accent: '#CCFF00',
  },
  {
    num: '02',
    degree: 'Software Developer Trainee',
    institution: 'Masai School',
    period: '2024 – 2025',
    details: '1,200+ hrs',
    description: 'Immersive, industry-paced bootcamp. Modern web stack from scratch, daily code reviews, and a culture of relentless iteration.',
    accent: '#FF4D00',
  },
]

const CERTS = [
  { label: 'Cybersecurity Awareness', issuer: 'Quick Heal', year: '2023' },
  { label: 'Database Foundations', issuer: 'Oracle Academy', year: '2022' },
  { label: 'Full Stack Web Development', issuer: 'Masai School', year: '2025' },
  { label: 'React Advanced Concepts', issuer: 'Udemy', year: '2024' },
  { label: 'AWS Cloud Practitioner', issuer: 'Coursera', year: '2024' },
]

function EduRow({ edu, idx }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Reveal delay={200 + idx * 120}>
      <div
        className="ed-edu-row"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Big number */}
        <div style={{ paddingTop: 4 }}>
          <span style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 72, fontWeight: 900,
            lineHeight: 1,
            color: hovered ? edu.accent : 'rgba(255,255,255,0.08)',
            transition: 'color 0.35s ease',
            display: 'block',
          }}>{edu.num}</span>
        </div>

        {/* Left: degree + institution */}
        <div style={{ borderLeft: `2px solid ${hovered ? edu.accent : 'rgba(255,255,255,0.1)'}`, paddingLeft: 28, transition: 'border-color 0.3s' }}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 10,
            color: hovered ? edu.accent : 'rgba(255,255,255,0.25)',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            marginBottom: 12, transition: 'color 0.3s',
          }}>{edu.period} · {edu.details}</div>
          <h3 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(18px, 2.5vw, 28px)',
            fontWeight: 900,
            color: '#F5F0E8',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: 8,
            textTransform: 'none',
          }}>{edu.degree}</h3>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 11,
            color: edu.accent, fontWeight: 500,
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>{edu.institution}</div>
        </div>

        {/* Right: description */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 15, fontWeight: 300, fontStyle: 'italic',
            color: 'rgba(245,240,232,0.45)',
            lineHeight: 1.75,
          }}>{edu.description}</p>
        </div>
      </div>
    </Reveal>
  )
}

function CertRow({ cert, idx }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Reveal delay={300 + idx * 70}>
      <div
        className="ed-cert-row"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flex: 1 }}>
          {/* Index */}
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: 10,
            color: hovered ? '#CCFF00' : 'rgba(255,255,255,0.2)',
            letterSpacing: '0.15em', minWidth: 28,
            transition: 'color 0.2s',
          }}>
            {String(idx + 1).padStart(2, '0')}
          </span>

          {/* Cert name */}
          <span style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(15px, 1.8vw, 19px)',
            fontWeight: hovered ? 900 : 400,
            color: hovered ? '#F5F0E8' : 'rgba(245,240,232,0.55)',
            transition: 'all 0.25s ease',
            letterSpacing: '-0.01em',
          }}>{cert.label}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexShrink: 0 }}>
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: 10,
            color: hovered ? '#CCFF00' : 'rgba(255,255,255,0.2)',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            transition: 'color 0.2s',
          }}>{cert.issuer}</span>
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: 10,
            color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em',
          }}>{cert.year}</span>

          {/* Arrow */}
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none"
            style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.2s', color: '#CCFF00' }}
          >
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Reveal>
  )
}

export default function Education() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

        .ed-root {
          background: #080808;
          padding: 110px 80px 120px;
          min-height: 100vh;
          color: #F5F0E8;
          position: relative;
          overflow: hidden;
        }

        .ed-edu-row {
          display: grid;
          grid-template-columns: 80px 1fr 1fr;
          gap: 0 48px;
          padding: 40px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: background 0.3s;
          cursor: default;
        }

        .ed-cert-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          cursor: default;
          gap: 24px;
        }

        @media(max-width:768px){
          .ed-root { padding: 80px 24px 80px; }
          .ed-edu-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            padding: 24px 0 !important;
          }
          .ed-cert-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
            padding: 20px 0 !important;
          }
          .ed-cert-row > div:last-child {
            width: 100% !important;
            justify-content: space-between !important;
          }
        }

        /* Faint noise texture overlay */
        .ed-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.5;
        }
      `}</style>

      <section className="ed-root">
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* ── Masthead ── */}
          <Reveal>
            <div style={{
              borderBottom: '3px solid rgba(255,255,255,0.9)',
              paddingBottom: 20, marginBottom: 0,
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16,
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: 10,
                color: 'rgba(255,255,255,0.3)', letterSpacing: '0.25em', textTransform: 'uppercase',
              }}>Vol. 01 — Background</div>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: 10,
                color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em',
              }}>Academic Record &amp; Credentials</div>
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
                Education
                <span style={{ color: '#CCFF00' }}>.</span>
              </h2>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 40, paddingBottom: 28, flexWrap: 'wrap',
              }}>
                <p style={{
                  fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 300,
                  fontStyle: 'italic', color: 'rgba(245,240,232,0.35)',
                  maxWidth: 460, lineHeight: 1.6, margin: 0,
                }}>
                  Academic foundations and industry-recognised credentials that shaped the craft.
                </p>
                <div style={{ display: 'flex', gap: 16, marginLeft: 'auto', flexWrap: 'wrap' }}>
                  {['2 Degrees', `${CERTS.length} Certs`].map(tag => (
                    <span key={tag} style={{
                      fontFamily: "'DM Mono', monospace", fontSize: 10,
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      padding: '8px 18px', border: '1px solid rgba(255,255,255,0.15)',
                      color: 'rgba(255,255,255,0.5)',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Education rows ── */}
          <div style={{ marginBottom: 80 }}>
            {EDUCATION.map((edu, idx) => (
              <EduRow key={edu.num} edu={edu} idx={idx} />
            ))}
          </div>

          {/* ── Certs section ── */}
          <Reveal delay={100}>
            <div style={{
              display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
              borderTop: '3px solid rgba(255,255,255,0.9)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              padding: '16px 0',
              marginBottom: 0,
              flexWrap: 'wrap', gap: 12,
            }}>
              <h3 style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 'clamp(36px, 6vw, 80px)',
                fontWeight: 900, letterSpacing: '-0.03em',
                color: '#F5F0E8', margin: 0, lineHeight: 1,
              }}>
                Certifications<span style={{ color: '#CCFF00' }}>.</span>
              </h3>
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: 10,
                color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase',
                alignSelf: 'center',
              }}>{CERTS.length} credentials</span>
            </div>
          </Reveal>

          {/* Cert rows */}
          <div style={{ marginBottom: 64 }}>
            {CERTS.map((cert, idx) => (
              <CertRow key={idx} cert={cert} idx={idx} />
            ))}
          </div>

          {/* ── Footer rule ── */}
          <Reveal delay={200}>
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: 20,
              display: 'flex', justifyContent: 'space-between',
              fontFamily: "'DM Mono', monospace", fontSize: 9,
              color: 'rgba(255,255,255,0.15)', letterSpacing: '0.2em', textTransform: 'uppercase',
            }}>
              <span>End of academic record</span>
              <span>All credentials verified</span>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  )
}