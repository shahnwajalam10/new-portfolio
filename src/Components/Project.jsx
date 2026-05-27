import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Project() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Employee Management System",
      description:
        "A full-stack MERN system to manage employees, roles, and workflows with secure CRUD operations.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      liveUrl: "https://github.com/shahnwajalam10",
      githubUrl: "https://github.com/shahnwajalam10",
      accent: "#CCFF00"
    },
    {
      title: "Candidate Referral System",
      description:
        "Referral platform with real-time tracking, notifications, and a secure scalable backend.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      liveUrl: "https://github.com/shahnwajalam10",
      githubUrl: "https://github.com/shahnwajalam10",
      accent: "#00D4FF"
    },
  ]

  return (
    <section ref={ref} id="projects" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[#CCFF00]/5 blur-[200px] animate-float-medium" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-[#CCFF00] font-semibold uppercase tracking-[0.3em] text-sm mb-4">Portfolio</p>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-10 border-b border-white/10">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              <span className="text-white">COOL</span>
              <br />
              <span className="text-[#CCFF00]">PROJECTS<span className="text-white/20">.</span></span>
            </h2>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#141414] border border-white/10 p-5 rounded-2xl max-w-sm"
            >
              <p className="text-white/50 font-medium text-base leading-relaxed">
                Clean UI, solid backend, real-world use cases. Built to ship.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative bg-[#141414] border border-white/10 p-8 md:p-10 rounded-3xl flex flex-col h-full overflow-hidden"
              >
                {/* Accent glow */}
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: project.accent }}
                />

                {/* Project number */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <span 
                    className="text-xs font-bold uppercase tracking-[0.3em] px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${project.accent}15`, color: project.accent }}
                  >
                    Project {String(index + 1).padStart(2, '0')}
                  </span>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
                  >
                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                  </motion.div>
                </div>

                <div className="flex-grow relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight leading-tight text-white">
                    {project.title}
                  </h3>

                  <p className="text-white/50 font-medium text-base mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 border border-white/10 bg-white/5 text-white/50 font-semibold text-xs uppercase rounded-full"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto relative z-10">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-sm font-bold py-3 rounded-full transition-all uppercase tracking-wider relative overflow-hidden group/btn"
                    style={{ backgroundColor: project.accent, color: '#0a0a0a' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    <ExternalLink size={16} className="relative z-10" /> 
                    <span className="relative z-10">Live</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-sm font-bold bg-white/5 border border-white/10 text-white/70 py-3 rounded-full hover:border-white/30 transition-all uppercase tracking-wider"
                  >
                    <Github size={16} /> <span>Source</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
