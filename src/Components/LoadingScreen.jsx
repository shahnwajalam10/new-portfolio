// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";

// export default function LoadingScreen({ onComplete }) {
//   const [progress, setProgress] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(() => {
//             setIsVisible(false);
//             setTimeout(() => onComplete?.(), 500);
//           }, 400);
//           return 100;
//         }
//         return prev + Math.random() * 15 + 5;
//       });
//     }, 100);

//     return () => clearInterval(interval);
//   }, [onComplete]);

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           className="fixed inset-0 z-[10001] bg-[#0a0a0a] flex flex-col items-center justify-center"
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//         >
//           {/* Animated name */}
//           <motion.h1
//             className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-12 flex items-center gap-1"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//           >
//             <span>SHAHNWAJ</span>
//             <span className="text-[#CCFF00]">.</span>
//           </motion.h1>

//           {/* Progress bar container */}
//           <div className="w-64 md:w-96 h-1 bg-white/10 rounded-full overflow-hidden border border-white/5">
//             <motion.div
//               className="h-full bg-[#CCFF00]"
//               style={{ width: `${Math.min(progress, 100)}%` }}
//               transition={{ duration: 0.1 }}
//             />
//           </div>

//           {/* Percentage */}
//           <motion.p
//             className="text-white/40 font-semibold text-sm mt-6 uppercase tracking-[0.2em]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             {Math.min(Math.floor(progress), 100)}%
//           </motion.p>

//           {/* Floating elements */}
//           <motion.div
//             className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#CCFF00]/40 rounded-full"
//             animate={{
//               y: [0, -20, 0],
//               opacity: [0.3, 1, 0.3],
//             }}
//             transition={{ duration: 2, repeat: Infinity }}
//           />
//           <motion.div
//             className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white/30 rounded-full"
//             animate={{
//               y: [0, 15, 0],
//               opacity: [0.2, 0.8, 0.2],
//             }}
//             transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
//           />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }










// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect, useRef } from "react";
// import { Sparkles } from "lucide-react";

// function Reveal({ children, delay = 0, style = {} }) {
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
//       transform: visible ? 'none' : 'translateY(36px)',
//       transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
//       ...style,
//     }}>
//       {children}
//     </div>
//   )
// }

// export default function LoadingScreen({ onComplete }) {
//   const [progress, setProgress] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(() => {
//             setIsVisible(false);
//             setTimeout(() => onComplete?.(), 400);
//           }, 400);
//           return 100;
//         }
//         return prev + Math.random() * 10 + 3;
//       });
//     }, 100);

//     return () => clearInterval(interval);
//   }, [onComplete]);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

//         .loading-root {
//           background: #080808;
//           position: fixed;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//           z-index: 10001;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           color: #F5F0E8;
//         }

//         .loading-root::before {
//           content: '';
//           position: fixed;
//           inset: 0;
//           width: 100%;
//           height: 100%;
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

//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }

//         .loading-particle {
//           animation: floatParticle 4s ease-in-out infinite;
//         }

//         .loading-cursor {
//           animation: blink 1s step-end infinite;
//         }

//         .loading-container {
//           width: 100%;
//           max-width: 1100px;
//           margin: 0 auto;
//           padding: 0 48px;
//           position: relative;
//           z-index: 1;
//         }

//         @media (max-width: 768px) {
//           .loading-container {
//             padding: 0 24px;
//           }
//         }
//       `}</style>

//       <AnimatePresence>
//         {isVisible && (
//           <motion.div
//             className="loading-root"
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//           >
//             {/* Floating particles - full width */}
//             <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
//               {[...Array(40)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="loading-particle"
//                   style={{
//                     position: 'absolute',
//                     width: Math.random() * 2 + 1,
//                     height: Math.random() * 2 + 1,
//                     borderRadius: '50%',
//                     background: `rgba(204, 255, 0, ${Math.random() * 0.4})`,
//                     left: `${Math.random() * 100}%`,
//                     top: `${Math.random() * 100}%`,
//                     animationDelay: `${Math.random() * 5}s`,
//                   }}
//                 />
//               ))}
//             </div>

//             {/* Corner decorations */}
//             <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-white/10" />
//             <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-white/10" />
//             <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-white/10" />
//             <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/10" />

//             <div className="loading-container">
              
//               {/* ── Masthead ── */}
//               <Reveal>
//                 <div style={{
//                   borderBottom: '3px solid rgba(255,255,255,0.9)',
//                   paddingBottom: 20, marginBottom: 48,
//                   display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16,
//                 }}>
//                   <div style={{
//                     fontFamily: "'DM Mono', monospace", fontSize: 10,
//                     color: 'rgba(255,255,255,0.3)', letterSpacing: '0.25em', textTransform: 'uppercase',
//                   }}>Vol. 00 — Boot</div>
//                   <div style={{
//                     fontFamily: "'DM Mono', monospace", fontSize: 10,
//                     color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em',
//                   }}>System Initialization</div>
//                 </div>
//               </Reveal>

//               {/* ── Giant heading ── */}
//               <Reveal delay={80}>
//                 <div style={{ marginBottom: 60 }}>
//                   <h2 style={{
//                     fontFamily: "'Fraunces', serif",
//                     fontSize: 'clamp(64px, 15vw, 160px)',
//                     fontWeight: 900,
//                     lineHeight: 0.85,
//                     letterSpacing: '-0.04em',
//                     margin: '0 0 24px',
//                     color: '#F5F0E8',
//                   }}>
//                     Loading<span style={{ color: '#CCFF00' }}>.</span>
//                   </h2>
//                   <div style={{
//                     display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap',
//                   }}>
//                     <p style={{
//                       fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 300,
//                       fontStyle: 'italic', color: 'rgba(245,240,232,0.35)',
//                       maxWidth: 460, lineHeight: 1.6, margin: 0,
//                     }}>
//                       Preparing your digital experience.
//                     </p>
//                     <div style={{ display: 'flex', gap: 12, marginLeft: 'auto', flexWrap: 'wrap' }}>
//                       {['Portfolio', 'v2.4', 'Ready'].map(tag => (
//                         <span key={tag} style={{
//                           fontFamily: "'DM Mono', monospace", fontSize: 10,
//                           letterSpacing: '0.18em', textTransform: 'uppercase',
//                           padding: '8px 18px', border: '1px solid rgba(255,255,255,0.15)',
//                           color: 'rgba(255,255,255,0.5)',
//                         }}>{tag}</span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </Reveal>

//               {/* ── Progress Section ── */}
//               <Reveal delay={160}>
//                 <div style={{ maxWidth: '100%' }}>
//                   {/* Progress bar row */}
//                   <div style={{
//                     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//                     marginBottom: 16,
//                   }}>
//                     <span style={{
//                       fontFamily: "'DM Mono', monospace", fontSize: 10,
//                       color: '#CCFF00', letterSpacing: '0.2em', textTransform: 'uppercase',
//                     }}>Initializing</span>
//                     <span style={{
//                       fontFamily: "'DM Mono', monospace", fontSize: 12,
//                       color: '#F5F0E8', fontWeight: 500,
//                     }}>
//                       {Math.min(Math.floor(progress), 100)}<span style={{ color: 'rgba(245,240,232,0.3)' }}>%</span>
//                     </span>
//                   </div>
                  
//                   {/* Progress bar - full width, no border radius */}
//                   <div style={{
//                     height: 2,
//                     background: 'rgba(255,255,255,0.08)',
//                     borderBottom: '1px solid rgba(255,255,255,0.05)',
//                     width: '100%',
//                   }}>
//                     <motion.div
//                       style={{
//                         height: '100%',
//                         background: '#CCFF00',
//                         width: `${Math.min(progress, 100)}%`,
//                       }}
//                       transition={{ duration: 0.1 }}
//                     />
//                   </div>

//                   {/* Status messages */}
//                   <div style={{ marginTop: 32 }}>
//                     <div style={{
//                       display: 'flex', alignItems: 'center', gap: 12,
//                       fontFamily: "'DM Mono', monospace", fontSize: 11,
//                       color: 'rgba(245,240,232,0.4)',
//                       letterSpacing: '0.1em', textTransform: 'uppercase',
//                     }}>
//                       <Sparkles size={12} style={{ color: '#CCFF00' }} />
//                       <span>
//                         {progress < 30 && "Loading assets..."}
//                         {progress >= 30 && progress < 60 && "Compiling modules..."}
//                         {progress >= 60 && progress < 90 && "Starting services..."}
//                         {progress >= 90 && progress < 100 && "Almost ready..."}
//                         {progress >= 100 && "Ready to launch"}
//                       </span>
//                       <span className="loading-cursor">_</span>
//                     </div>
//                   </div>
//                 </div>
//               </Reveal>

//               {/* ── Footer rule ── */}
//               <Reveal delay={240}>
//                 <div style={{
//                   borderTop: '1px solid rgba(255,255,255,0.1)',
//                   paddingTop: 32, marginTop: 60,
//                   display: 'flex', justifyContent: 'space-between',
//                   fontFamily: "'DM Mono', monospace", fontSize: 9,
//                   color: 'rgba(255,255,255,0.15)', letterSpacing: '0.2em', textTransform: 'uppercase',
//                 }}>
//                   <span>System ready</span>
//                   <span>© 2025</span>
//                 </div>
//               </Reveal>

//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }













import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

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

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Slower progress - more time to see loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onComplete?.(), 500);
          }, 600);
          return 100;
        }
        // Slower increment for longer duration
        return prev + Math.random() * 5 + 2;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

        .loading-root {
          background: #080808;
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 10001;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #F5F0E8;
        }

        .loading-root::before {
          content: '';
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
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

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        .loading-particle {
          animation: floatParticle 4s ease-in-out infinite;
        }

        .loading-cursor {
          animation: blink 1s step-end infinite;
        }

        .loading-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .loading-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .loading-container {
            padding: 0 24px;
          }
        }
      `}</style>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="loading-root"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Floating particles - full width */}
            <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="loading-particle"
                  style={{
                    position: 'absolute',
                    width: Math.random() * 2 + 1,
                    height: Math.random() * 2 + 1,
                    borderRadius: '50%',
                    background: `rgba(204, 255, 0, ${Math.random() * 0.4})`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>

            {/* Corner decorations */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-white/10" />
            <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-white/10" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-white/10" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/10" />

            {/* Center glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#CCFF00]/5 blur-3xl loading-glow" />

            <div className="loading-container">
              
              {/* ── Masthead ── */}
              <Reveal>
                <div style={{
                  borderBottom: '3px solid rgba(255,255,255,0.9)',
                  paddingBottom: 20, marginBottom: 48,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16,
                }}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace", fontSize: 10,
                    color: 'rgba(255,255,255,0.3)', letterSpacing: '0.25em', textTransform: 'uppercase',
                  }}>Vol. 00 — Boot</div>
                  <div style={{
                    fontFamily: "'DM Mono', monospace", fontSize: 10,
                    color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em',
                  }}>System Initialization</div>
                </div>
              </Reveal>

              {/* ── Giant heading ── */}
              <Reveal delay={100}>
                <div style={{ marginBottom: 60 }}>
                  <h2 style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: 'clamp(36px, 8vw, 120px)',
                    fontWeight: 900,
                    lineHeight: 0.85,
                    letterSpacing: '-0.04em',
                    margin: '0 0 24px',
                    color: '#F5F0E8',
                  }}>
                  Loading SHAHNWAJ PORTFOLIO<span style={{ color: '#CCFF00' }}>.</span>
                  </h2>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap',
                  }}>
                    <p style={{
                      fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 300,
                      fontStyle: 'italic', color: 'rgba(245,240,232,0.35)',
                      maxWidth: 460, lineHeight: 1.6, margin: 0,
                    }}>
                      Preparing your digital experience.
                    </p>
                    <div style={{ display: 'flex', gap: 12, marginLeft: 'auto', flexWrap: 'wrap' }}>
                      {['Portfolio', 'v2.4', 'Ready'].map(tag => (
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

              {/* ── Progress Section ── */}
              <Reveal delay={200}>
                <div style={{ maxWidth: '100%' }}>
                  {/* Progress bar row */}
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    marginBottom: 16,
                  }}>
                    <span style={{
                      fontFamily: "'DM Mono', monospace", fontSize: 10,
                      color: '#CCFF00', letterSpacing: '0.2em', textTransform: 'uppercase',
                    }}>Initializing</span>
                    <span style={{
                      fontFamily: "'DM Mono', monospace", fontSize: 12,
                      color: '#F5F0E8', fontWeight: 500,
                    }}>
                      {Math.min(Math.floor(progress), 100)}<span style={{ color: 'rgba(245,240,232,0.3)' }}>%</span>
                    </span>
                  </div>
                  
                  {/* Progress bar - full width, no border radius */}
                  <div style={{
                    height: 2,
                    background: 'rgba(255,255,255,0.08)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    width: '100%',
                  }}>
                    <motion.div
                      style={{
                        height: '100%',
                        background: '#CCFF00',
                        width: `${Math.min(progress, 100)}%`,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>

                  {/* Status messages with more details */}
                  <div style={{ marginTop: 32 }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      fontFamily: "'DM Mono', monospace", fontSize: 11,
                      color: 'rgba(245,240,232,0.4)',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                    }}>
                      <Sparkles size={12} style={{ color: '#CCFF00' }} />
                      <span>
                        {progress < 15 && "Waking up systems..."}
                        {progress >= 15 && progress < 30 && "Loading assets..."}
                        {progress >= 30 && progress < 45 && "Compiling modules..."}
                        {progress >= 45 && progress < 60 && "Optimizing performance..."}
                        {progress >= 60 && progress < 75 && "Starting services..."}
                        {progress >= 75 && progress < 90 && "Almost ready..."}
                        {progress >= 90 && progress < 100 && "Finalizing..."}
                        {progress >= 100 && "Ready to launch"}
                      </span>
                      <span className="loading-cursor">_</span>
                    </div>
                    
                    {/* Additional loading info */}
                    <div style={{
                      marginTop: 16,
                      fontFamily: "'DM Mono', monospace", fontSize: 9,
                      color: 'rgba(245,240,232,0.2)',
                      letterSpacing: '0.15em',
                    }}>
                      {progress < 100 && (
                        <span>Loading components...</span>
                      )}
                      {progress >= 100 && (
                        <span>Welcome to the portfolio</span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* ── Footer rule ── */}
              <Reveal delay={300}>
                <div style={{
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  paddingTop: 32, marginTop: 60,
                  display: 'flex', justifyContent: 'space-between',
                  fontFamily: "'DM Mono', monospace", fontSize: 9,
                  color: 'rgba(255,255,255,0.15)', letterSpacing: '0.2em', textTransform: 'uppercase',
                }}>
                  <span>System ready</span>
                  <span>© 2025</span>
                </div>
              </Reveal>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
