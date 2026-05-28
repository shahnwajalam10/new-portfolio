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









import { Link } from "react-router-dom"
import { Github, Linkedin, Twitter, Sparkles, Mail, MapPin, ArrowUp, Heart, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

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

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null)

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Experience', path: '/experience' },
    { label: 'Skill', path: '/skill' },
    { label: 'Project', path: '/project' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' },
  ]

  const socials = [
    { icon: <Github size={18} />, href: "https://github.com/shahnwajalam10", label: "GitHub", color: "#F5F0E8" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/shahnwaj-alam-b08415206/", label: "LinkedIn", color: "#0A66C2" },
    { icon: <Twitter size={18} />, href: "https://twitter.com/Shahnwajalam786", label: "Twitter", color: "#1DA1F2" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

        .footer-root {
          background: #080808;
          position: relative;
          overflow: hidden;
          color: #F5F0E8;
          border-top: 1px solid rgba(255,255,255,0.08);
          width: 100%;
        }

        .footer-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes ping {
          0% { transform: scale(1); opacity: 0.8; }
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-8px) translateX(4px); }
          66% { transform: translateY(6px) translateX(-3px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .animate-float {
          animation: floatSlow 6s ease-in-out infinite;
        }

        .footer-marquee {
          animation: marqueeScroll 20s linear infinite;
          width: fit-content;
        }

        .footer-marquee:hover {
          animation-play-state: paused;
        }

        .footer-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 48px 60px;
          position: relative;
          z-index: 1;
          width: 100%;
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 60px 24px 40px;
          }
        }
      `}</style>

      <footer className="footer-root">
        {/* Floating particles */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          {[...Array(40)].map((_, i) => (
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
                animation: `floatSlow ${Math.random() * 5 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient top border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent" style={{ opacity: 0.5 }} />

        {/* Marquee scrolling banner */}
        <div className="relative border-y border-[#CCFF00]/20 py-3 bg-gradient-to-r from-[#CCFF00]/5 via-[#CCFF00]/10 to-[#CCFF00]/5 overflow-hidden">
          <div className="footer-marquee flex whitespace-nowrap">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-[#CCFF00] font-black text-[11px] uppercase mx-6 tracking-[0.2em] flex items-center gap-3 whitespace-nowrap">
                <Sparkles size={11} className="inline shrink-0" />
                <span>LET'S WORK TOGETHER</span>
                <span className="text-[#CCFF00]/30 mx-1">✦</span>
                <span>BUILDING THE DIGITAL FUTURE</span>
                <span className="text-[#CCFF00]/30 mx-1">✦</span>
                <span>CODE. CREATE. DEPLOY.</span>
                <span className="text-[#CCFF00]/30 mx-1">✦</span>
                <span>OPEN FOR OPPORTUNITIES</span>
              </span>
            ))}
          </div>
        </div>

        <div className="footer-container">
          
          {/* Masthead */}
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
              }}>Vol. 07 — Connect</div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.2em',
              }}>Always open · 2025</div>
            </div>
          </Reveal>

          {/* Giant heading */}
          <Reveal delay={80}>
            <div style={{ marginBottom: 64 }}>
              <h2 style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 'clamp(56px, 10vw, 140px)',
                fontWeight: 900,
                lineHeight: 0.85,
                letterSpacing: '-0.04em',
                margin: '0 0 16px',
                color: '#F5F0E8',
              }}>
                Let's Talk<span style={{ color: '#CCFF00' }}>.</span>
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
                  Have a project in mind or just want to connect? I'm always down for a conversation.
                </p>
                <div style={{ display: 'flex', gap: 12, marginLeft: 'auto', flexWrap: 'wrap' }}>
                  {['Available', 'Worldwide', 'Remote'].map(tag => (
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

          {/* 3-column grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '48px',
            marginBottom: 80,
          }}>
            
            {/* Left column - Logo & Bio */}
            <div style={{ gridColumn: 'span 5' }}>
              <Reveal delay={120}>
                <div style={{ marginBottom: 32 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 8,
                    marginBottom: 24,
                    flexWrap: 'wrap',
                  }}>
                    <span style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: 32,
                      fontWeight: 900,
                      letterSpacing: '-0.02em',
                      color: '#F5F0E8',
                    }}>SHAHNWAJ</span>
                    <span style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: 32,
                      fontWeight: 900,
                      letterSpacing: '-0.02em',
                      color: '#CCFF00',
                    }}>ALAM</span>
                    <div className="animate-float" style={{ fontSize: 32 }}>⚡</div>
                  </div>
                  <p style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: 15,
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: 'rgba(245,240,232,0.5)',
                    lineHeight: 1.7,
                    maxWidth: '100%',
                  }}>
                    Full-stack engineer focused on creating exceptionally designed interactive interfaces and scalable high-performance backend systems.
                  </p>
                </div>
                
                <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                  {socials.map((social, idx) => (
                    <motion.a
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHoveredSocial(idx)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: hoveredSocial === idx ? `${social.color}15` : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${hoveredSocial === idx ? `${social.color}40` : 'rgba(255,255,255,0.08)'}`,
                        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                        color: hoveredSocial === idx ? social.color : 'rgba(255,255,255,0.5)',
                        cursor: 'pointer',
                      }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Middle column - Navigation */}
            <div style={{ gridColumn: 'span 3' }}>
              <Reveal delay={200}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#CCFF00',
                  marginBottom: 24,
                  paddingBottom: 12,
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}>
                  Navigation
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {navLinks.map((link, idx) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      style={{ marginBottom: 12 }}
                    >
                      <Link
                        to={link.path}
                        style={{
                          display: 'inline-block',
                          padding: '8px 0',
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 11,
                          fontWeight: 500,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'rgba(245,240,232,0.4)',
                          transition: 'color 0.3s',
                          textDecoration: 'none',
                          position: 'relative',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#F5F0E8'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245,240,232,0.4)'}
                      >
                        {link.label}
                        <span style={{
                          position: 'absolute',
                          bottom: 4,
                          left: 0,
                          width: 0,
                          height: 1,
                          background: '#CCFF00',
                          transition: 'width 0.3s ease',
                        }} 
                        onMouseEnter={(e) => e.currentTarget.style.width = '100%'}
                        onMouseLeave={(e) => e.currentTarget.style.width = '0'} />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Right column - Contact */}
            <div style={{ gridColumn: 'span 4' }}>
              <Reveal delay={280}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#CCFF00',
                  marginBottom: 24,
                  paddingBottom: 12,
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}>
                  Get in Touch
                </div>
                
                <div style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 20,
                  padding: 28,
                }}>
                  <a 
                    href="mailto:shahnwajalam10@gmail.com"
                    style={{ display: 'block', marginBottom: 24, textDecoration: 'none' }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: 8,
                      borderRadius: 12,
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(204, 255, 0, 0.05)'
                      e.currentTarget.style.transform = 'translateX(8px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}>
                      <Mail size={16} style={{ color: '#CCFF00', flexShrink: 0 }} />
                      <span style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 11,
                        color: '#F5F0E8',
                        letterSpacing: '-0.01em',
                        wordBreak: 'break-all',
                      }}>shahnwajalam10@gmail.com</span>
                    </div>
                    <div style={{
                      width: 0,
                      height: 1,
                      background: '#CCFF00',
                      transition: 'width 0.3s ease',
                      marginTop: 4,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.width = '100%'}
                    onMouseLeave={(e) => e.currentTarget.style.width = '0'} />
                  </a>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: 8,
                  }}>
                    <div style={{ position: 'relative', flexShrink: 0 }}>
                      <div style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: '#CCFF00',
                      }} />
                      <div className="footer-ping" style={{
                        position: 'absolute',
                        top: -12,
                        left: -12,
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        background: '#CCFF00',
                        opacity: 0.4,
                      }} />
                    </div>
                    <MapPin size={14} style={{ color: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
                    <span style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: 'rgba(245,240,232,0.5)',
                    }}>Bengaluru, India</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Footer bottom */}
          <Reveal delay={360}>
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: 32,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 20,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                fontFamily: "'DM Mono', monospace",
                fontSize: 9,
                color: 'rgba(255,255,255,0.2)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
                <span>© {new Date().getFullYear()} Shahnwaj Alam</span>
                <span>✦</span>
                <span>All rights reserved</span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: "'DM Mono', monospace",
                fontSize: 9,
                color: 'rgba(255,255,255,0.2)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
                <span>Built with passion & precision</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart size={8} style={{ color: '#CCFF00' }} />
                </motion.div>
              </div>

              <button
                onClick={scrollToTop}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#CCFF00'
                  e.currentTarget.style.color = '#CCFF00'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
                }}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 40,
                  padding: '10px 20px',
                  color: 'rgba(255,255,255,0.4)',
                  cursor: 'pointer',
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 9,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <ArrowUp size={12} />
                Back to top
              </button>
            </div>
          </Reveal>

          {/* Footer rule */}
          <Reveal delay={420}>
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.05)',
              paddingTop: 20,
              marginTop: 32,
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: "'DM Mono', monospace",
              fontSize: 8,
              color: 'rgba(255,255,255,0.1)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>
              <span>End of footer</span>
              <span>Let's build something great</span>
            </div>
          </Reveal>

        </div>
      </footer>
    </>
  )
}