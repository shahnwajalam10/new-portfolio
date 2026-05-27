import { Zap, Code2, Server, Database, Wrench } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Skill() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillGroups = [
    {
      category: "Frontend",
      icon: <Code2 className="w-7 h-7" />,
      color: "#CCFF00",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      icon: <Server className="w-7 h-7" />,
      color: "#00D4FF",
      skills: ["Node.js", "Express", "RESTful APIs", "GraphQL", "JWT", "Socket.io"],
    },
    {
      category: "Database",
      icon: <Database className="w-7 h-7" />,
      color: "#FF6B6B",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
    },
    {
      category: "DevOps & Tools",
      icon: <Wrench className="w-7 h-7" />,
      color: "#C084FC",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Vite", "Linux"],
    }
  ]

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#CCFF00]/5 blur-[200px] animate-float-slow" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-[#CCFF00] font-semibold uppercase tracking-[0.3em] text-sm mb-4">Capabilities</p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-10 border-b border-white/10">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
              <span className="text-white">TECH</span>
              <br />
              <span className="text-[#CCFF00]">STACK<span className="text-white/20">.</span></span>
            </h2>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-[#CCFF00]/10 border border-[#CCFF00]/20 px-6 py-3 rounded-full"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-5 h-5 text-[#CCFF00]" />
              </motion.div>
              <span className="font-bold text-sm uppercase tracking-wider text-[#CCFF00]">Powered By</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Skill Groups - Card grid like AngryToast's category cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#141414] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden group h-full"
              >
                {/* Accent glow on hover */}
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundColor: group.color }}
                />

                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${group.color}15`, color: group.color }}
                  >
                    {group.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {group.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.5, y: 20 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + skillIdx * 0.06, duration: 0.4, type: "spring", stiffness: 200 }}
                      whileHover={{ 
                        scale: 1.08, 
                        y: -3,
                        borderColor: group.color,
                        color: group.color,
                        backgroundColor: `${group.color}15`
                      }}
                      className="border border-white/10 px-5 py-2.5 rounded-full font-semibold text-sm text-white/60 bg-white/5 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
