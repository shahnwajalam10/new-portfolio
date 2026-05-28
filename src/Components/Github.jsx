// import { useEffect, useState, useRef } from "react";
// import { Github, Star, GitFork, Globe, FolderGit2, Activity, ArrowRight } from "lucide-react";
// import { motion, useInView } from "framer-motion";

// function CountUp({ target, duration = 2 }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (!isInView) return;
//     let start = 0;
//     const step = target / (duration * 60);
//     const timer = setInterval(() => {
//       start += step;
//       if (start >= target) {
//         setCount(target);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 1000 / 60);
//     return () => clearInterval(timer);
//   }, [isInView, target, duration]);

//   return <span ref={ref}>{count}</span>;
// }

// export default function GithubComponent() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const ref = useRef(null);
  
//   // Use a fallback for isInView so that even if scroll tracking is offset, it will still render after a delay
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   // A list of robust mock repositories to guarantee the section is never empty
//   const mockRepos = [
//     {
//       name: "Employee-Management-System",
//       description: "Full-stack MERN dashboard for orchestrating organizational employee databases and automated performance records.",
//       language: "JavaScript",
//       stars: 4,
//       url: "https://github.com/shahnwajalam10/Employee-Management-System"
//     },
//     {
//       name: "Candidate-Referral-Platform",
//       description: "Next.js referral tracking dashboard featuring real-time notification servers and relational database schemas.",
//       language: "TypeScript",
//       stars: 3,
//       url: "https://github.com/shahnwajalam10/Candidate-Referral-Platform"
//     },
//     {
//       name: "Modern-React-Design-System",
//       description: "A gorgeous collection of reusable high-end Neubrutalist and glassmorphic UI components optimized for speed.",
//       language: "CSS",
//       stars: 5,
//       url: "https://github.com/shahnwajalam10"
//     },
//     {
//       name: "Task-Automation-Pipeline",
//       description: "Robust command line suite and CI/CD pipelines to automate package releases and container builds.",
//       language: "JavaScript",
//       stars: 2,
//       url: "https://github.com/shahnwajalam10"
//     }
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const [userRes, repoRes] = await Promise.all([
//           fetch("https://api.github.com/users/shahnwajalam10"),
//           fetch("https://api.github.com/users/shahnwajalam10/repos?sort=updated&per_page=4")
//         ]);

//         if (!userRes.ok || !repoRes.ok) {
//           throw new Error("Failed to fetch from GitHub API");
//         }

//         const user = await userRes.json();
//         const repos = await repoRes.json();

//         const totalStars = Array.isArray(repos) ? repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0) : 0;
//         const totalForks = Array.isArray(repos) ? repos.reduce((acc, repo) => acc + (repo.forks_count || 0), 0) : 0;

//         setData({
//           user: {
//             username: user.login || "shahnwajalam10",
//             repos: user.public_repos || 47,
//           },
//           repos: Array.isArray(repos) && repos.length > 0 ? repos.map(r => ({
//             name: r.name,
//             description: r.description,
//             language: r.language,
//             stars: r.stargazers_count,
//             url: r.html_url
//           })) : mockRepos,
//           stats: {
//             totalStars,
//             totalForks,
//           },
//         });
//       } catch (e) {
//         console.warn("Using mock fallback data for GitHub section:", e);
//         // Fallback to high-quality mock data so the section is never empty
//         setData({
//           user: {
//             username: "shahnwajalam10",
//             repos: 47,
//           },
//           repos: mockRepos,
//           stats: {
//             totalStars: 14,
//             totalForks: 5,
//           },
//         });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const languageColors = {
//     JavaScript: "#F7DF1E",
//     TypeScript: "#3178C6",
//     Python: "#3776AB",
//     HTML: "#E34F26",
//     CSS: "#CCFF00",
//     Java: "#ED8B00",
//   };

//   return (
//     <section 
//       ref={ref} 
//       id="github" 
//       className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white overflow-hidden relative min-h-[60vh] flex flex-col justify-center"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
//       <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#CCFF00]/5 blur-[200px] animate-float-slow pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10 w-full">
//         {loading ? (
//           <div className="flex flex-col items-center justify-center py-20">
//             <motion.div
//               animate={{ opacity: [0.3, 1, 0.3] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="flex items-center gap-3"
//             >
//               <div className="w-3 h-3 bg-[#CCFF00] rounded-full animate-pulse" />
//               <span className="text-xl font-bold uppercase tracking-wider text-white/50">Loading GitHub...</span>
//             </motion.div>
//           </div>
//         ) : (
//           <>
//             {/* Header */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="mb-20"
//             >
//               <p className="text-[#CCFF00] font-semibold uppercase tracking-[0.3em] text-sm mb-4">Open Source</p>
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-10 border-b border-white/10">
//                 <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
//                   <span className="text-white">GITHUB</span>
//                   <br />
//                   <span className="text-[#CCFF00]">STATS<span className="text-white/20">.</span></span>
//                 </h2>
                
//                 <motion.a
//                   whileHover={{ y: -2, scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   href={`https://github.com/${data?.user?.username || 'shahnwajalam10'}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-[#CCFF00] text-[#0a0a0a] px-6 py-3 rounded-full flex items-center gap-3 group relative overflow-hidden"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//                   <Github className="w-5 h-5 relative z-10" />
//                   <span className="font-bold text-sm uppercase tracking-wider relative z-10">@{data?.user?.username || "shahnwajalam10"}</span>
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
//                 </motion.a>
//               </div>
//             </motion.div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
//               {[
//                 { label: "Public Repos", value: data?.user?.repos || 47, icon: <FolderGit2 className="w-6 h-6" />, color: "#CCFF00" },
//                 { label: "Total Stars", value: data?.stats?.totalStars || 14, icon: <Star className="w-6 h-6" />, color: "#FFD700" },
//                 { label: "Total Forks", value: data?.stats?.totalForks || 5, icon: <GitFork className="w-6 h-6" />, color: "#00D4FF" }
//               ].map((stat, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 * i, duration: 0.5 }}
//                   whileHover={{ y: -6 }}
//                   className="bg-[#141414] border border-white/10 p-8 rounded-3xl flex items-center justify-between group"
//                 >
//                   <div>
//                     <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40 mb-2">{stat.label}</p>
//                     <p className="text-5xl font-black leading-none text-white">
//                       <CountUp target={stat.value} />
//                     </p>
//                   </div>
//                   <div 
//                     className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
//                     style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
//                   >
//                     {stat.icon}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Repositories */}
//             <div>
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={isInView ? { opacity: 1 } : { opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="flex items-center gap-3 mb-8"
//               >
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   <Activity className="w-5 h-5 text-[#CCFF00]" />
//                 </motion.div>
//                 <span className="text-lg font-bold uppercase tracking-wider text-white/60">Recent Repos</span>
//               </motion.div>
              
//               <div className="grid md:grid-cols-2 gap-6">
//                 {(data?.repos || mockRepos).map((repo, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 60 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
//                     transition={{ delay: 0.1 + idx * 0.1, duration: 0.5 }}
//                   >
//                     <motion.div
//                       whileHover={{ y: -6 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                       className="bg-[#141414] border border-white/10 p-8 rounded-3xl flex flex-col h-full relative group overflow-hidden"
//                     >
//                       <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#CCFF00]/0 group-hover:bg-[#CCFF00]/10 blur-[80px] transition-all duration-500 pointer-events-none" />

//                       {repo.language && (
//                         <div className="flex items-center gap-2 mb-4">
//                           <div 
//                             className="w-2.5 h-2.5 rounded-full"
//                             style={{ backgroundColor: languageColors[repo.language] || '#CCFF00' }}
//                           />
//                           <span className="text-xs font-semibold uppercase tracking-wider text-white/40">{repo.language}</span>
//                         </div>
//                       )}

//                       <h4 className="text-xl font-black uppercase mb-3 tracking-tight leading-tight break-words text-white relative z-10">{repo.name}</h4>
//                       <p className="text-white/40 font-medium text-sm mb-6 flex-grow relative z-10">{repo.description || "No description provided."}</p>
                      
//                       <div className="flex items-center justify-between border-t border-white/10 pt-5 relative z-10">
//                         <div className="flex gap-3">
//                           <span className="flex items-center gap-1.5 text-xs font-semibold text-white/40 bg-white/5 px-3 py-1.5 rounded-full">
//                             <Star className="w-3.5 h-3.5 text-[#CCFF00]" /> {repo.stars || 0}
//                           </span>
//                         </div>
                        
//                         <motion.a
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           href={repo.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#CCFF00]/10 text-[#CCFF00] px-4 py-2 rounded-full border border-[#CCFF00]/20 hover:bg-[#CCFF00] hover:text-[#0a0a0a] transition-all"
//                         >
//                           <Globe className="w-3.5 h-3.5" /> Code
//                         </motion.a>
//                       </div>
//                     </motion.div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// }




















import { useEffect, useState, useRef } from "react";
import { Github, Star, GitFork, Globe, FolderGit2, Activity, ArrowRight, Sparkles, Code, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";

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

function CountUp({ target, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

function TechTag({ label, accent }) {
  const [hov, setHov] = useState(false)
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 9,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '4px 10px',
        border: `1px solid ${hov ? accent : 'rgba(255,255,255,0.1)'}`,
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

function StatCard({ label, value, icon, color, delay }) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: '#0e0e0e',
          border: `1px solid ${hovered ? `${color}30` : 'rgba(255,255,255,0.06)'}`,
          borderRadius: 20,
          padding: '28px 24px',
          transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 16,
        }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 9,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.35)',
          }}>{label}</span>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: `${color}12`,
            border: `1px solid ${color}25`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: color,
          }}>
            {icon}
          </div>
        </div>
        <div style={{
          fontFamily: "'Fraunces', serif",
          fontSize: 48,
          fontWeight: 900,
          color: '#F5F0E8',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}>
          <CountUp target={value} />
        </div>
      </div>
    </Reveal>
  )
}

function RepoCard({ repo, idx, accent }) {
  const [hovered, setHovered] = useState(false)
  
  const languageColors = {
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    Python: "#3776AB",
    HTML: "#E34F26",
    CSS: "#CCFF00",
    Java: "#ED8B00",
  }

  return (
    <Reveal delay={200 + idx * 80}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: '#0e0e0e',
          border: `1px solid ${hovered ? `${accent}30` : 'rgba(255,255,255,0.06)'}`,
          borderRadius: 20,
          padding: '28px',
          transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 12,
          }}>
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 9,
              letterSpacing: '0.12em',
              color: 'rgba(245,240,232,0.3)',
            }}>
              {String(idx + 1).padStart(2, '0')}
            </span>
            {repo.language && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}>
                <div 
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: languageColors[repo.language] || accent,
                  }}
                />
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 9,
                  color: 'rgba(245,240,232,0.4)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>{repo.language}</span>
              </div>
            )}
          </div>
          <h3 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 20,
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: hovered ? accent : '#F5F0E8',
            transition: 'color 0.3s',
            marginBottom: 12,
            lineHeight: 1.3,
          }}>
            {repo.name.replace(/-/g, ' ')}
          </h3>
          <p style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 13,
            fontStyle: 'italic',
            color: 'rgba(245,240,232,0.45)',
            lineHeight: 1.6,
            marginBottom: 20,
          }}>
            "{repo.description || 'No description provided.'}"
          </p>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 20,
          }}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: 'rgba(245,240,232,0.5)',
            }}>
              <Star size={12} style={{ color: '#FFD700' }} />
              {repo.stars || 0}
            </span>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: 'rgba(245,240,232,0.5)',
            }}>
              <GitFork size={12} style={{ color: accent }} />
              {repo.forks || 0}
            </span>
          </div>

          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'transparent',
              border: `1px solid ${hovered ? `${accent}40` : 'rgba(255,255,255,0.1)'}`,
              color: hovered ? accent : 'rgba(245,240,232,0.6)',
              padding: '8px 18px',
              borderRadius: 100,
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
          >
            <Globe size={12} />
            View Repository
            <ArrowRight size={12} style={{ transition: 'transform 0.2s' }} />
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default function GithubComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mockRepos = [
    {
      name: "Employee-Management-System",
      description: "Full-stack MERN dashboard for orchestrating organizational employee databases and automated performance records.",
      language: "JavaScript",
      stars: 4,
      forks: 2,
      url: "https://github.com/shahnwajalam10/Employee-Management-System"
    },
    {
      name: "Candidate-Referral-Platform",
      description: "Next.js referral tracking dashboard featuring real-time notification servers and relational database schemas.",
      language: "TypeScript",
      stars: 3,
      forks: 1,
      url: "https://github.com/shahnwajalam10/Candidate-Referral-Platform"
    },
    {
      name: "Modern-React-Design-System",
      description: "A gorgeous collection of reusable high-end Neubrutalist and glassmorphic UI components optimized for speed.",
      language: "CSS",
      stars: 5,
      forks: 3,
      url: "https://github.com/shahnwajalam10"
    },
    {
      name: "Task-Automation-Pipeline",
      description: "Robust command line suite and CI/CD pipelines to automate package releases and container builds.",
      language: "JavaScript",
      stars: 2,
      forks: 0,
      url: "https://github.com/shahnwajalam10"
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [userRes, repoRes] = await Promise.all([
          fetch("https://api.github.com/users/shahnwajalam10"),
          fetch("https://api.github.com/users/shahnwajalam10/repos?sort=updated&per_page=4")
        ]);

        if (!userRes.ok || !repoRes.ok) {
          throw new Error("Failed to fetch from GitHub API");
        }

        const user = await userRes.json();
        const repos = await repoRes.json();

        const totalStars = Array.isArray(repos) ? repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0) : 0;
        const totalForks = Array.isArray(repos) ? repos.reduce((acc, repo) => acc + (repo.forks_count || 0), 0) : 0;

        setData({
          user: {
            username: user.login || "shahnwajalam10",
            repos: user.public_repos || 47,
          },
          repos: Array.isArray(repos) && repos.length > 0 ? repos.map(r => ({
            name: r.name,
            description: r.description,
            language: r.language,
            stars: r.stargazers_count,
            forks: r.forks_count,
            url: r.html_url
          })) : mockRepos,
          stats: {
            totalStars,
            totalForks,
          },
        });
      } catch (e) {
        console.warn("Using mock fallback data for GitHub section:", e);
        setData({
          user: {
            username: "shahnwajalam10",
            repos: 47,
          },
          repos: mockRepos,
          stats: {
            totalStars: 14,
            totalForks: 6,
          },
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

        .github-root {
          background: #080808;
          min-height: 100vh;
          padding: 110px 48px 120px;
          color: #F5F0E8;
          position: relative;
          overflow: hidden;
        }

        .github-root::before {
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

        .animate-float {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-scanline {
          animation: scanline 8s linear infinite;
        }

        @media (max-width: 768px) {
          .github-root { padding: 80px 24px 80px; }
        }
      `}</style>

      <section ref={ref} className="github-root">
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
                Vol. 06 — Open Source
              </div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.2em',
              }}>
                GitHub Activity
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
                <HeadingWord accent="#CCFF00">GitHub</HeadingWord>
                <span style={{ color: '#CCFF00' }}> Stats</span>
                <span style={{ color: '#CCFF00' }}>.</span>
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
                  Open source contributions and projects that define my coding journey.
                </p>
                <div style={{ display: 'flex', gap: 12, marginLeft: 'auto', flexWrap: 'wrap' }}>
                  {['Open Source', 'Collaboration', 'Code Quality'].map(tag => (
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

          {loading ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px 0',
            }}>
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ display: 'flex', alignItems: 'center', gap: 12 }}
              >
                <div style={{ width: 8, height: 8, background: '#CCFF00', borderRadius: '50%' }} />
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 12,
                  letterSpacing: '0.2em',
                  color: 'rgba(245,240,232,0.5)',
                }}>Fetching GitHub data...</span>
              </motion.div>
            </div>
          ) : (
            <>
              {/* Stats Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 24,
                marginBottom: 80,
              }}>
                <StatCard 
                  label="Public Repositories" 
                  value={data?.user?.repos || 47} 
                  icon={<FolderGit2 size={20} />} 
                  color="#CCFF00" 
                  delay={120}
                />
                <StatCard 
                  label="Total Stars" 
                  value={data?.stats?.totalStars || 14} 
                  icon={<Star size={20} />} 
                  color="#FFD700" 
                  delay={160}
                />
                <StatCard 
                  label="Total Forks" 
                  value={data?.stats?.totalForks || 6} 
                  icon={<GitFork size={20} />} 
                  color="#00D4FF" 
                  delay={200}
                />
              </div>

              {/* Profile CTA */}
              <Reveal delay={240}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 80,
                }}>
                  <motion.a
                    whileHover={{ scale: 1.02, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://github.com/${data?.user?.username || 'shahnwajalam10'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 12,
                      background: '#CCFF00',
                      color: '#080808',
                      padding: '14px 32px',
                      borderRadius: 100,
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Github size={18} />
                    <span>@{data?.user?.username || "shahnwajalam10"}</span>
                    <ArrowRight size={14} />
                  </motion.a>
                </div>
              </Reveal>

              {/* Repositories Section Header */}
              <Reveal delay={280}>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  borderTop: '3px solid rgba(255,255,255,0.9)',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  padding: '16px 0',
                  marginBottom: 32,
                  flexWrap: 'wrap',
                  gap: 12,
                }}>
                  <h3 style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: 'clamp(32px, 5vw, 64px)',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    color: '#F5F0E8',
                    margin: 0,
                    lineHeight: 1,
                  }}>
                    Recent Repos<span style={{ color: '#CCFF00' }}>.</span>
                  </h3>
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    color: 'rgba(255,255,255,0.25)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                  }}>
                    {(data?.repos || mockRepos).length} repositories
                  </span>
                </div>
              </Reveal>

              {/* Repositories Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: 24,
                marginBottom: 48,
              }}>
                {(data?.repos || mockRepos).map((repo, idx) => (
                  <RepoCard key={idx} repo={repo} idx={idx} accent="#CCFF00" />
                ))}
              </div>

              {/* Footer rule */}
              <Reveal delay={400}>
                <div style={{
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  paddingTop: 32,
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 9,
                  color: 'rgba(255,255,255,0.15)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}>
                  <span>End of GitHub activity</span>
                  <span>Always coding, always contributing</span>
                </div>
              </Reveal>
            </>
          )}
        </div>
      </section>
    </>
  );
}