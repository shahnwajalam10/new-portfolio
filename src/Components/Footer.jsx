// import { Link } from "react-router-dom"
// import { Github, Linkedin, Twitter, Sparkles } from "lucide-react"
// import { motion, useInView } from "framer-motion"
// import { useRef } from "react"

// export default function Footer() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true })

//   const navLinks = [
//     { label: 'About', path: '/about' },
//     { label: 'Experience', path: '/experience' },
//     { label: 'Skill', path: '/skill' },
//     { label: 'Project', path: '/project' },
//     { label: 'Education', path: '/education' },
//     { label: 'Contact', path: '/contact' },
//   ]

//   const socials = [
//     { icon: <Github size={20} />, href: "https://github.com/shahnwajalam10", label: "GitHub" },
//     { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/shahnwaj-alam-b08415206/", label: "LinkedIn" },
//     { icon: <Twitter size={20} />, href: "https://twitter.com/Shahnwajalam786", label: "Twitter" },
//   ]

//   return (
//     <footer ref={ref} className="bg-[#0a0a0a] text-white py-16 px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

//       {/* Marquee scrolling banner like AngryToast */}
//       {/* <div className="absolute top-0 left-0 w-[200%] border-b border-white/10 py-3 bg-[#CCFF00] flex whitespace-nowrap overflow-hidden">
//         <div className="flex animate-marquee">
//           {[...Array(10)].map((_, i) => (
//             <span key={i} className="text-[#0a0a0a] font-black text-sm uppercase mx-6 tracking-widest flex items-center gap-3">
//               <Sparkles className="w-4 h-4 text-[#0a0a0a]" />
//               LET'S WORK TOGETHER
//               <span className="text-[#0a0a0a]/30">•</span>
//               BUILDING THE DIGITAL FUTURE
//             </span>
//           ))}
//         </div>
//       </div> */}

//       <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
//         {/* Left Column: Mascot/Logo */}
//         <div className="md:col-span-5 flex flex-col justify-between">
//           <div>
//             <div className="flex items-center gap-2 mb-6">
//               <span className="text-3xl font-black tracking-tighter uppercase text-white">
//                 SHAHNWAJ
//               </span>
//               <span className="text-3xl font-black tracking-tighter uppercase text-[#CCFF00]">
//                 ALAM
//               </span>
//               <span className="text-3xl">⚡</span>
//             </div>
//             <p className="text-white/40 font-medium text-base leading-relaxed max-w-sm mb-8">
//               A full-stack engineer focused on creating exceptionally designed interactive interfaces and scalable high-performance backend systems.
//             </p>
//           </div>

//           <div className="flex gap-3">
//             {socials.map((social, idx) => (
//               <motion.a
//                 key={idx}
//                 whileHover={{ scale: 1.1, y: -2 }}
//                 whileTap={{ scale: 0.9 }}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#CCFF00] hover:border-[#CCFF00]/30 transition-all"
//               >
//                 {social.icon}
//               </motion.a>
//             ))}
//           </div>
//         </div>

//         {/* Middle Column: Quick Navigation Links */}
//         <div className="md:col-span-3">
//           <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#CCFF00] mb-6">Navigation</h3>
//           <ul className="space-y-3 font-semibold text-sm">
//             {navLinks.map((link) => (
//               <li key={link.label}>
//                 <Link to={link.path} className="text-white/40 hover:text-white transition-colors uppercase tracking-wider block py-1">
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Column: Contact Details */}
//         <div className="md:col-span-4">
//           <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#CCFF00] mb-6">Get in Touch</h3>
//           <p className="text-white/40 font-medium text-base mb-4">
//             Have a project in mind or want to say hi? Feel free to reach out.
//           </p>
//           <a 
//             href="mailto:shahnwajalam10@gmail.com" 
//             className="text-white hover:text-[#CCFF00] font-bold text-lg uppercase tracking-tight block transition-colors mb-2"
//           >
//             shahnwajalam10@gmail.com
//           </a>
//           <p className="text-white/30 font-semibold text-sm uppercase tracking-wider">
//             Bengaluru, India
//           </p>
//         </div>
//       </div>

//       {/* Footer Bottom copyright & info */}
//       <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-white/30 relative z-10">
//         <p className="uppercase tracking-widest">
//           © {new Date().getFullYear()} Shahnwaj Alam. All rights reserved.
//         </p>
//         <p className="uppercase tracking-widest flex items-center gap-2">
//           <span>Built with passion & precision</span>
//           <span className="text-[#CCFF00]">⚡</span>
//         </p>
//       </div>
//     </footer>
//   )
// }









// import { Link } from "react-router-dom"
// import { Github, Linkedin, Twitter, Sparkles, Mail, MapPin, ArrowUp, Heart, Zap } from "lucide-react"
// import { motion } from "framer-motion"
// import { useState, useRef, useEffect } from "react"

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

// export default function Footer() {
//   const [hoveredSocial, setHoveredSocial] = useState(null)

//   const navLinks = [
//     { label: 'About', path: '/about' },
//     { label: 'Experience', path: '/experience' },
//     { label: 'Skill', path: '/skill' },
//     { label: 'Project', path: '/project' },
//     { label: 'Education', path: '/education' },
//     { label: 'Contact', path: '/contact' },
//   ]

//   const socials = [
//     { icon: <Github size={18} />, href: "https://github.com/shahnwajalam10", label: "GitHub", color: "#F5F0E8" },
//     { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/shahnwaj-alam-b08415206/", label: "LinkedIn", color: "#0A66C2" },
//     { icon: <Twitter size={18} />, href: "https://twitter.com/Shahnwajalam786", label: "Twitter", color: "#1DA1F2" },
//   ]

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

//         .footer-root {
//           background: #080808;
//           position: relative;
//           overflow: hidden;
//           color: #F5F0E8;
//           border-top: 1px solid rgba(255,255,255,0.08);
//           width: 100%;
//         }

//         .footer-root::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
//           pointer-events: none;
//           z-index: 0;
//           opacity: 0.4;
//         }

//         @keyframes marqueeScroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }

//         @keyframes ping {
//           0% { transform: scale(1); opacity: 0.8; }
//           75%, 100% { transform: scale(2.5); opacity: 0; }
//         }

//         @keyframes floatSlow {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           33% { transform: translateY(-8px) translateX(4px); }
//           66% { transform: translateY(6px) translateX(-3px); }
//         }

//         @keyframes pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.1); }
//         }

//         .animate-float {
//           animation: floatSlow 6s ease-in-out infinite;
//         }

//         .footer-marquee {
//           animation: marqueeScroll 20s linear infinite;
//           width: fit-content;
//         }

//         .footer-marquee:hover {
//           animation-play-state: paused;
//         }

//         .footer-ping {
//           animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
//         }

//         .footer-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 80px 48px 60px;
//           position: relative;
//           z-index: 1;
//           width: 100%;
//         }

//         @media (max-width: 768px) {
//           .footer-container {
//             padding: 60px 24px 40px;
//           }
//         }
//       `}</style>

//       <footer className="footer-root">
//         {/* Floating particles */}
//         <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
//           {[...Array(40)].map((_, i) => (
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
//                 animation: `floatSlow ${Math.random() * 5 + 3}s ease-in-out infinite`,
//                 animationDelay: `${Math.random() * 5}s`,
//               }}
//             />
//           ))}
//         </div>

//         {/* Gradient top border */}
//         <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent" style={{ opacity: 0.5 }} />

//         {/* Marquee scrolling banner */}
//         <div className="relative border-y border-[#CCFF00]/20 py-3 bg-gradient-to-r from-[#CCFF00]/5 via-[#CCFF00]/10 to-[#CCFF00]/5 overflow-hidden">
//           <div className="footer-marquee flex whitespace-nowrap">
//             {[...Array(20)].map((_, i) => (
//               <span key={i} className="text-[#CCFF00] font-black text-[11px] uppercase mx-6 tracking-[0.2em] flex items-center gap-3 whitespace-nowrap">
//                 <Sparkles size={11} className="inline shrink-0" />
//                 <span>LET'S WORK TOGETHER</span>
//                 <span className="text-[#CCFF00]/30 mx-1">✦</span>
//                 <span>BUILDING THE DIGITAL FUTURE</span>
//                 <span className="text-[#CCFF00]/30 mx-1">✦</span>
//                 <span>CODE. CREATE. DEPLOY.</span>
//                 <span className="text-[#CCFF00]/30 mx-1">✦</span>
//                 <span>OPEN FOR OPPORTUNITIES</span>
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="footer-container">
          
//           {/* Masthead */}
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
//               }}>Vol. 07 — Connect</div>
//               <div style={{
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 10,
//                 color: 'rgba(255,255,255,0.3)',
//                 letterSpacing: '0.2em',
//               }}>Always open · 2025</div>
//             </div>
//           </Reveal>

//           {/* Giant heading */}
//           <Reveal delay={80}>
//             <div style={{ marginBottom: 64 }}>
//               <h2 style={{
//                 fontFamily: "'Fraunces', serif",
//                 fontSize: 'clamp(56px, 10vw, 140px)',
//                 fontWeight: 900,
//                 lineHeight: 0.85,
//                 letterSpacing: '-0.04em',
//                 margin: '0 0 16px',
//                 color: '#F5F0E8',
//               }}>
//                 Let's Talk<span style={{ color: '#CCFF00' }}>.</span>
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
//                   Have a project in mind or just want to connect? I'm always down for a conversation.
//                 </p>
//                 <div style={{ display: 'flex', gap: 12, marginLeft: 'auto', flexWrap: 'wrap' }}>
//                   {['Available', 'Worldwide', 'Remote'].map(tag => (
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

//           {/* 3-column grid */}
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(12, 1fr)',
//             gap: '48px',
//             marginBottom: 80,
//           }}>
            
//             {/* Left column - Logo & Bio */}
//             <div style={{ gridColumn: 'span 5' }}>
//               <Reveal delay={120}>
//                 <div style={{ marginBottom: 32 }}>
//                   <div style={{
//                     display: 'flex',
//                     alignItems: 'baseline',
//                     gap: 8,
//                     marginBottom: 24,
//                     flexWrap: 'wrap',
//                   }}>
//                     <span style={{
//                       fontFamily: "'Fraunces', serif",
//                       fontSize: 32,
//                       fontWeight: 900,
//                       letterSpacing: '-0.02em',
//                       color: '#F5F0E8',
//                     }}>SHAHNWAJ</span>
//                     <span style={{
//                       fontFamily: "'Fraunces', serif",
//                       fontSize: 32,
//                       fontWeight: 900,
//                       letterSpacing: '-0.02em',
//                       color: '#CCFF00',
//                     }}>ALAM</span>
//                     <div className="animate-float" style={{ fontSize: 32 }}>⚡</div>
//                   </div>
//                   <p style={{
//                     fontFamily: "'Fraunces', serif",
//                     fontSize: 15,
//                     fontWeight: 300,
//                     fontStyle: 'italic',
//                     color: 'rgba(245,240,232,0.5)',
//                     lineHeight: 1.7,
//                     maxWidth: '100%',
//                   }}>
//                     Full-stack engineer focused on creating exceptionally designed interactive interfaces and scalable high-performance backend systems.
//                   </p>
//                 </div>
                
//                 <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
//                   {socials.map((social, idx) => (
//                     <motion.a
//                       key={idx}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: 0.2 + idx * 0.1 }}
//                       whileHover={{ scale: 1.1, y: -3 }}
//                       whileTap={{ scale: 0.95 }}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       onMouseEnter={() => setHoveredSocial(idx)}
//                       onMouseLeave={() => setHoveredSocial(null)}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         width: 44,
//                         height: 44,
//                         borderRadius: 12,
//                         background: hoveredSocial === idx ? `${social.color}15` : 'rgba(255,255,255,0.03)',
//                         border: `1px solid ${hoveredSocial === idx ? `${social.color}40` : 'rgba(255,255,255,0.08)'}`,
//                         transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
//                         color: hoveredSocial === idx ? social.color : 'rgba(255,255,255,0.5)',
//                         cursor: 'pointer',
//                       }}
//                     >
//                       {social.icon}
//                     </motion.a>
//                   ))}
//                 </div>
//               </Reveal>
//             </div>

//             {/* Middle column - Navigation */}
//             <div style={{ gridColumn: 'span 3' }}>
//               <Reveal delay={200}>
//                 <div style={{
//                   fontFamily: "'DM Mono', monospace",
//                   fontSize: 10,
//                   letterSpacing: '0.2em',
//                   textTransform: 'uppercase',
//                   color: '#CCFF00',
//                   marginBottom: 24,
//                   paddingBottom: 12,
//                   borderBottom: '1px solid rgba(255,255,255,0.1)',
//                 }}>
//                   Navigation
//                 </div>
//                 <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
//                   {navLinks.map((link, idx) => (
//                     <motion.li
//                       key={link.label}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3 + idx * 0.05 }}
//                       style={{ marginBottom: 12 }}
//                     >
//                       <Link
//                         to={link.path}
//                         style={{
//                           display: 'inline-block',
//                           padding: '8px 0',
//                           fontFamily: "'DM Mono', monospace",
//                           fontSize: 11,
//                           fontWeight: 500,
//                           letterSpacing: '0.12em',
//                           textTransform: 'uppercase',
//                           color: 'rgba(245,240,232,0.4)',
//                           transition: 'color 0.3s',
//                           textDecoration: 'none',
//                           position: 'relative',
//                         }}
//                         onMouseEnter={(e) => e.currentTarget.style.color = '#F5F0E8'}
//                         onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245,240,232,0.4)'}
//                       >
//                         {link.label}
//                         <span style={{
//                           position: 'absolute',
//                           bottom: 4,
//                           left: 0,
//                           width: 0,
//                           height: 1,
//                           background: '#CCFF00',
//                           transition: 'width 0.3s ease',
//                         }} 
//                         onMouseEnter={(e) => e.currentTarget.style.width = '100%'}
//                         onMouseLeave={(e) => e.currentTarget.style.width = '0'} />
//                       </Link>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </Reveal>
//             </div>

//             {/* Right column - Contact */}
//             <div style={{ gridColumn: 'span 4' }}>
//               <Reveal delay={280}>
//                 <div style={{
//                   fontFamily: "'DM Mono', monospace",
//                   fontSize: 10,
//                   letterSpacing: '0.2em',
//                   textTransform: 'uppercase',
//                   color: '#CCFF00',
//                   marginBottom: 24,
//                   paddingBottom: 12,
//                   borderBottom: '1px solid rgba(255,255,255,0.1)',
//                 }}>
//                   Get in Touch
//                 </div>
                
//                 <div style={{
//                   background: 'rgba(255,255,255,0.02)',
//                   border: '1px solid rgba(255,255,255,0.06)',
//                   borderRadius: 20,
//                   padding: 28,
//                 }}>
//                   <a 
//                     href="mailto:shahnwajalam10@gmail.com"
//                     style={{ display: 'block', marginBottom: 24, textDecoration: 'none' }}
//                   >
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 12,
//                       padding: 8,
//                       borderRadius: 12,
//                       transition: 'all 0.3s',
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.background = 'rgba(204, 255, 0, 0.05)'
//                       e.currentTarget.style.transform = 'translateX(8px)'
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.background = 'transparent'
//                       e.currentTarget.style.transform = 'translateX(0)'
//                     }}>
//                       <Mail size={16} style={{ color: '#CCFF00', flexShrink: 0 }} />
//                       <span style={{
//                         fontFamily: "'DM Mono', monospace",
//                         fontSize: 11,
//                         color: '#F5F0E8',
//                         letterSpacing: '-0.01em',
//                         wordBreak: 'break-all',
//                       }}>shahnwajalam10@gmail.com</span>
//                     </div>
//                     <div style={{
//                       width: 0,
//                       height: 1,
//                       background: '#CCFF00',
//                       transition: 'width 0.3s ease',
//                       marginTop: 4,
//                     }}
//                     onMouseEnter={(e) => e.currentTarget.style.width = '100%'}
//                     onMouseLeave={(e) => e.currentTarget.style.width = '0'} />
//                   </a>
                  
//                   <div style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: 12,
//                     padding: 8,
//                   }}>
//                     <div style={{ position: 'relative', flexShrink: 0 }}>
//                       <div style={{
//                         width: 8,
//                         height: 8,
//                         borderRadius: '50%',
//                         background: '#CCFF00',
//                       }} />
//                       <div className="footer-ping" style={{
//                         position: 'absolute',
//                         top: -12,
//                         left: -12,
//                         width: 32,
//                         height: 32,
//                         borderRadius: '50%',
//                         background: '#CCFF00',
//                         opacity: 0.4,
//                       }} />
//                     </div>
//                     <MapPin size={14} style={{ color: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
//                     <span style={{
//                       fontFamily: "'DM Mono', monospace",
//                       fontSize: 11,
//                       color: 'rgba(245,240,232,0.5)',
//                     }}>Bengaluru, India</span>
//                   </div>
//                 </div>
//               </Reveal>
//             </div>
//           </div>

//           {/* Footer bottom */}
//           <Reveal delay={360}>
//             <div style={{
//               borderTop: '1px solid rgba(255,255,255,0.1)',
//               paddingTop: 32,
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               flexWrap: 'wrap',
//               gap: 20,
//             }}>
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 16,
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 9,
//                 color: 'rgba(255,255,255,0.2)',
//                 letterSpacing: '0.15em',
//                 textTransform: 'uppercase',
//               }}>
//                 <span>© {new Date().getFullYear()} Shahnwaj Alam</span>
//                 <span>✦</span>
//                 <span>All rights reserved</span>
//               </div>
              
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 8,
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 9,
//                 color: 'rgba(255,255,255,0.2)',
//                 letterSpacing: '0.15em',
//                 textTransform: 'uppercase',
//               }}>
//                 <span>Built with passion & precision</span>
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 1, repeat: Infinity }}
//                 >
//                   <Heart size={8} style={{ color: '#CCFF00' }} />
//                 </motion.div>
//               </div>

//               <button
//                 onClick={scrollToTop}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.borderColor = '#CCFF00'
//                   e.currentTarget.style.color = '#CCFF00'
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
//                   e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
//                 }}
//                 style={{
//                   background: 'transparent',
//                   border: '1px solid rgba(255,255,255,0.15)',
//                   borderRadius: 40,
//                   padding: '10px 20px',
//                   color: 'rgba(255,255,255,0.4)',
//                   cursor: 'pointer',
//                   fontFamily: "'DM Mono', monospace",
//                   fontSize: 9,
//                   letterSpacing: '0.15em',
//                   textTransform: 'uppercase',
//                   transition: 'all 0.3s',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: 8,
//                 }}
//               >
//                 <ArrowUp size={12} />
//                 Back to top
//               </button>
//             </div>
//           </Reveal>

//           {/* Footer rule */}
//           <Reveal delay={420}>
//             <div style={{
//               borderTop: '1px solid rgba(255,255,255,0.05)',
//               paddingTop: 20,
//               marginTop: 32,
//               display: 'flex',
//               justifyContent: 'space-between',
//               fontFamily: "'DM Mono', monospace",
//               fontSize: 8,
//               color: 'rgba(255,255,255,0.1)',
//               letterSpacing: '0.2em',
//               textTransform: 'uppercase',
//             }}>
//               <span>End of footer</span>
//               <span>Let's build something great</span>
//             </div>
//           </Reveal>

//         </div>
//       </footer>
//     </>
//   )
// }




import { Link } from "react-router-dom"
import { Github, Linkedin, Twitter, Mail, MapPin, ArrowUp, Heart, Zap, ArrowRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

function Reveal({ children, delay = 0, style = {} }) {
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

function MarqueeTrack({ items, speed = 28, reverse = false }) {
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative' }}>
      <style>{`
        @keyframes marquee-fwd  { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes marquee-back { from { transform: translateX(-50%) } to { transform: translateX(0) } }
      `}</style>
      <span style={{
        display: 'inline-block',
        animation: `${reverse ? 'marquee-back' : 'marquee-fwd'} ${speed}s linear infinite`,
      }}>
        {[...Array(12)].map((_, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 20, marginRight: 40 }}>
            {items.map((item, j) => (
              <span key={j} style={{ display: 'inline-flex', alignItems: 'center', gap: 20 }}>
                <span>{item}</span>
                <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.7em' }}>✦</span>
              </span>
            ))}
          </span>
        ))}
      </span>
    </div>
  )
}

export default function Footer() {
  const [hoveredNav, setHoveredNav] = useState(null)
  const [hoveredSocial, setHoveredSocial] = useState(null)
  const [emailCopied, setEmailCopied] = useState(false)

  const navLinks = [
    { label: 'About',     path: '/about' },
    { label: 'Experience',path: '/experience' },
    { label: 'Skill',     path: '/skill' },
    { label: 'Project',   path: '/project' },
    { label: 'Education', path: '/education' },
    { label: 'Contact',   path: '/contact' },
  ]

  const socials = [
    { icon: <Github size={16} />,   href: "https://github.com/shahnwajalam10",                         label: "GH",  color: "#F5F0E8" },
    { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/shahnwaj-alam-b08415206/",     label: "LI",  color: "#0A66C2" },
    { icon: <Twitter size={16} />,  href: "https://twitter.com/Shahnwajalam786",                      label: "TW",  color: "#1DA1F2" },
  ]

  const copyEmail = () => {
    navigator.clipboard.writeText('shahnwajalam10@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=DM+Serif+Display:ital@0;1&display=swap');

        * { box-sizing: border-box; }

        .ft-root {
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
          color: #F0EDE8;
          width: 100%;
        }

        /* ── noise overlay ── */
        .ft-root::before {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.5;
        }

        /* blobs */
        .ft-blob {
          position: absolute; border-radius: 50%;
          pointer-events: none; z-index: 0; filter: blur(0px);
        }
        .ft-blob-o  { width:260px;height:260px;background:#FF4D00;top:-80px;left:-80px;opacity:0.6; }
        .ft-blob-g  { width:200px;height:200px;background:#CCFF00;bottom:-60px;right:-40px;opacity:0.55; }
        .ft-blob-os { width:110px;height:110px;background:#FF4D00;bottom:80px;left:40%;opacity:0.3; }

        /* marquee bands */
        .ft-band {
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 12px 0;
          position: relative; z-index: 2;
          overflow: hidden;
        }
        .ft-band-orange { background: rgba(255,77,0,0.06); }
        .ft-band-lime   { background: rgba(204,255,0,0.05); }

        .ft-band-text-o {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px; letter-spacing: 0.22em;
          color: #FF4D00; text-transform: uppercase;
        }
        .ft-band-text-g {
          font-family: 'Space Mono', monospace;
          font-size: 10px; font-weight: 700; letter-spacing: 0.22em;
          color: #CCFF00; text-transform: uppercase;
        }

        /* CTA slab */
        .ft-cta {
          position: relative; z-index: 2;
          padding: 80px 60px 72px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }

        /* body grid */
        .ft-body {
          position: relative; z-index: 2;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1.3fr;
          gap: 0;
        }
        .ft-col {
          padding: 56px 52px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .ft-col:last-child { border-right: none; }

        /* col label */
        .ft-col-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px; font-weight: 700;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-bottom: 28px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        /* nav link */
        .ft-nav-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 13px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px; letter-spacing: 0.08em;
          color: rgba(240,237,232,0.35);
          text-decoration: none;
          transition: color 0.2s ease;
          cursor: pointer;
        }
        .ft-nav-link:hover { color: #F0EDE8; }
        .ft-nav-link:hover .ft-nav-arrow { opacity: 1; transform: translateX(0); color: #CCFF00; }

        .ft-nav-arrow {
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.2s ease;
        }

        /* social button */
        .ft-social {
          display: flex; align-items: center; gap: 12px;
          padding: 14px 16px;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 2px;
          text-decoration: none;
          transition: all 0.25s ease;
          margin-bottom: 10px;
          font-family: 'Space Mono', monospace;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(240,237,232,0.4);
        }
        .ft-social:hover { color: #F0EDE8; border-color: rgba(255,255,255,0.2); transform: translateX(6px); }

        /* email block */
        .ft-email {
          font-family: 'Space Mono', monospace;
          font-size: 11px; letter-spacing: 0.04em;
          color: #F0EDE8;
          padding: 18px 20px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          word-break: break-all;
          margin-bottom: 16px;
        }
        .ft-email:hover { background: rgba(204,255,0,0.05); border-color: rgba(204,255,0,0.25); }

        /* bottom bar */
        .ft-bottom {
          position: relative; z-index: 2;
          padding: 28px 60px;
          border-top: 1px solid rgba(255,255,255,0.07);
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
        }

        .ft-copy {
          font-family: 'Space Mono', monospace;
          font-size: 9px; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(255,255,255,0.18);
        }

        .ft-top-btn {
          display: flex; align-items: center; gap: 8px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 2px; padding: 10px 20px;
          font-family: 'Space Mono', monospace;
          font-size: 9px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          cursor: pointer; transition: all 0.25s ease;
        }
        .ft-top-btn:hover {
          border-color: #CCFF00; color: #CCFF00;
          background: rgba(204,255,0,0.04);
          transform: translateY(-2px);
        }

        /* ── responsive ── */
        @media (max-width: 900px) {
          .ft-cta { padding: 60px 36px 56px; }
          .ft-body { grid-template-columns: 1fr 1fr; }
          .ft-col { padding: 44px 36px; }
          .ft-col:nth-child(2) { border-right: none; }
          .ft-col:nth-child(3) { grid-column: span 2; border-right: none; border-top: 1px solid rgba(255,255,255,0.06); }
          .ft-bottom { padding: 24px 36px; }
          .ft-blob-o { width:180px;height:180px;top:-50px;left:-50px; }
          .ft-blob-g { width:140px;height:140px; }
        }

        @media (max-width: 600px) {
          .ft-cta { padding: 48px 24px 44px; }
          .ft-body { grid-template-columns: 1fr; }
          .ft-col { padding: 36px 24px; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .ft-col:last-child { border-bottom: none; }
          .ft-col:nth-child(2) { border-right: none; }
          .ft-col:nth-child(3) { grid-column: span 1; border-top: none; }
          .ft-bottom { padding: 20px 24px; flex-direction: column; align-items: flex-start; gap: 16px; }
          .ft-blob-o { width:130px;height:130px; }
          .ft-blob-g { width:100px;height:100px; }
          .ft-blob-os { display: none; }
        }

        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .live { animation: blink 1.6s ease infinite; }
      `}</style>

      <footer className="ft-root">

        {/* blobs */}
        <div className="ft-blob ft-blob-o" />
        <div className="ft-blob ft-blob-g" />
        <div className="ft-blob ft-blob-os" />

        {/* ── top marquee band — orange ── */}
        <div className="ft-band ft-band-orange">
          <MarqueeTrack speed={30} items={[
            "LET'S WORK TOGETHER", "OPEN FOR OPPORTUNITIES",
            "BUILDING THE DIGITAL FUTURE", "CODE · CREATE · DEPLOY",
          ]} />
        </div>

        {/* ── CTA SLAB ── */}
        <Reveal>
          <div className="ft-cta">
            <div>
              {/* tiny label */}
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 9, letterSpacing: '0.3em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
                marginBottom: 20,
              }}>
                Vol. 07 — Connect · Always open · 2025
              </div>

              {/* giant heading */}
              <h2 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(72px, 13vw, 170px)',
                fontWeight: 400, lineHeight: 0.87,
                letterSpacing: '0.02em', margin: 0,
                color: '#F0EDE8',
              }}>
                LET'S<br />
                <span style={{ color: '#FF4D00' }}>TALK</span>
                <span style={{ color: '#CCFF00' }}>.</span>
              </h2>
            </div>

            {/* right side of CTA */}
            <div style={{ maxWidth: 380 }}>
              <p style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(16px, 2vw, 19px)',
                fontStyle: 'italic', lineHeight: 1.7,
                color: 'rgba(240,237,232,0.5)',
                marginBottom: 28,
              }}>
                Have a project in mind or just want to connect? I'm always down for a conversation —
                deadlines, ideas, or just vibes.
              </p>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {['Available', 'Worldwide', 'Remote'].map((t, i) => (
                  <span key={t} style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9, fontWeight: 700,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    padding: '7px 16px',
                    border: `1px solid ${i === 0 ? 'rgba(204,255,0,0.35)' : 'rgba(255,255,255,0.12)'}`,
                    color: i === 0 ? '#CCFF00' : 'rgba(255,255,255,0.4)',
                    borderRadius: 2,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── BODY GRID ── */}
        <div className="ft-body">

          {/* COL 1 — Identity */}
          <div className="ft-col">
            <Reveal delay={80}>
              <div className="ft-col-label">Identity</div>

              {/* name slab */}
              <div style={{ marginBottom: 28 }}>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  lineHeight: 0.9, letterSpacing: '0.02em',
                  color: '#F0EDE8',
                }}>
                  SHAHNWAJ<br />
                  <span style={{ color: '#CCFF00' }}>ALAM</span>
                  <span style={{
                    display: 'inline-block', marginLeft: 10,
                    fontSize: '0.55em', letterSpacing: 0,
                    verticalAlign: 'middle',
                  }}>⚡</span>
                </div>
              </div>

              <p style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 14, fontStyle: 'italic',
                lineHeight: 1.75, color: 'rgba(240,237,232,0.4)',
                marginBottom: 36,
              }}>
                Full-stack engineer focused on creating exceptionally designed interactive
                interfaces and scalable, high-performance backend systems.
              </p>

              {/* location row */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                marginBottom: 32,
                fontFamily: "'Space Mono', monospace",
                fontSize: 10, color: 'rgba(240,237,232,0.3)',
                letterSpacing: '0.08em',
              }}>
                <span className="live" style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: '#CCFF00', flexShrink: 0,
                }} />
                <MapPin size={12} style={{ flexShrink: 0, color: 'rgba(255,255,255,0.25)' }} />
                <span>Bengaluru, India</span>
              </div>

              {/* socials */}
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="ft-social"
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = s.color + '55'; e.currentTarget.style.color = s.color; e.currentTarget.style.transform = 'translateX(6px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(240,237,232,0.4)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                >
                  {s.icon}
                  <span>{s.label}</span>
                  <ArrowRight size={11} style={{ marginLeft: 'auto', opacity: 0.4 }} />
                </a>
              ))}
            </Reveal>
          </div>

          {/* COL 2 — Navigation */}
          <div className="ft-col">
            <Reveal delay={160}>
              <div className="ft-col-label">Navigate</div>
              <nav>
                {navLinks.map((link, i) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="ft-nav-link"
                    onMouseEnter={() => setHoveredNav(i)}
                    onMouseLeave={() => setHoveredNav(null)}
                    style={{ color: hoveredNav === i ? '#F0EDE8' : 'rgba(240,237,232,0.3)' }}
                  >
                    <span>{link.label}</span>
                    <span className="ft-nav-arrow" style={{
                      opacity: hoveredNav === i ? 1 : 0,
                      transform: hoveredNav === i ? 'translateX(0)' : 'translateX(-8px)',
                      transition: 'all 0.2s ease',
                      color: '#CCFF00',
                    }}>
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </nav>
            </Reveal>
          </div>

          {/* COL 3 — Contact */}
          <div className="ft-col">
            <Reveal delay={240}>
              <div className="ft-col-label">Get in Touch</div>

              {/* email copy button */}
              <div className="ft-email" onClick={copyEmail}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                  <Mail size={14} style={{ color: '#CCFF00', flexShrink: 0 }} />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    shahnwajalam10@gmail.com
                  </span>
                </div>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 9, fontWeight: 700, letterSpacing: '0.15em',
                  textTransform: 'uppercase', flexShrink: 0,
                  color: emailCopied ? '#CCFF00' : 'rgba(255,255,255,0.25)',
                  transition: 'color 0.2s',
                }}>
                  {emailCopied ? 'COPIED!' : 'COPY'}
                </span>
              </div>

              {/* open to work card */}
              <div style={{
                background: 'rgba(204,255,0,0.04)',
                border: '1px solid rgba(204,255,0,0.15)',
                borderRadius: 2, padding: '20px 20px',
                marginBottom: 24,
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10,
                }}>
                  <span className="live" style={{
                    width: 7, height: 7, borderRadius: '50%',
                    background: '#CCFF00', flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: '#CCFF00',
                  }}>Open to Work</span>
                </div>
                <p style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 13, fontStyle: 'italic',
                  color: 'rgba(240,237,232,0.45)', lineHeight: 1.65, margin: 0,
                }}>
                  Available for full-time roles, freelance projects, and exciting collaborations.
                </p>
              </div>

              {/* big CTA link */}
              <Link to="/contact" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '16px 20px',
                background: '#FF4D00',
                borderRadius: 2,
                textDecoration: 'none',
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 18, letterSpacing: '0.1em',
                color: '#0a0a0a',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#ff6620'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#FF4D00'}
              >
                <span>START A CONVERSATION</span>
                <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

        </div>

        {/* ── second marquee band — lime ── */}
        <div className="ft-band ft-band-lime">
          <MarqueeTrack speed={22} reverse items={[
            'REACT', 'NODE.JS', 'TYPESCRIPT', 'POSTGRESQL',
            'DOCKER', 'MYSQL', 'FULL-STACK', 'REST API',
          ]} />
        </div>

        {/* ── BOTTOM BAR ── */}
        <Reveal delay={320}>
          <div className="ft-bottom">
            <div className="ft-copy">
              © {new Date().getFullYear()} Shahnwaj Alam &nbsp;✦&nbsp; All rights reserved
            </div>
            <div className="ft-copy" style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span>Built with passion & precision</span>
              <Heart size={8} style={{ color: '#FF4D00' }} />
            </div>
            <button className="ft-top-btn" onClick={scrollToTop}>
              <ArrowUp size={11} />
              Back to top
            </button>
          </div>
        </Reveal>

      </footer>
    </>
  )
}