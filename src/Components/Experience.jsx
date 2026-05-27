import { Briefcase, Calendar, MapPin } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      date: "Sep 2025 — Present",
      company: "Masters' Union",
      position: "Associate Software Developer",
      location: " Gurgaon, Haryana, India",
      highlights: [
        "Built and maintained production-grade web applications used by internal teams.",
        "Designed scalable REST APIs and integrated them with modern React frontends.",
        "Improved frontend performance and code quality through refactoring and best practices.",
        "Collaborated closely with product, design, and backend teams in an agile setup.",
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "MySQL"],
    },
  ]

  return (
    <section ref={ref} id="experience" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#CCFF00]/5 blur-[200px] animate-float-medium" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-[#CCFF00] font-semibold uppercase tracking-[0.3em] text-sm mb-4">Career</p>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-10 border-b border-white/10">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              <span className="text-white">WORK</span>
              <br />
              <span className="text-[#CCFF00]">HISTORY<span className="text-white/20">.</span></span>
            </h2>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#141414] border border-white/10 p-5 rounded-2xl max-w-sm"
            >
              <p className="text-white/50 font-medium text-base leading-relaxed">
                Hands-on experience building & shipping real-world applications at scale.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-[#141414] border border-white/10 rounded-3xl text-white overflow-hidden"
          >
            <div className="grid md:grid-cols-12">
              {/* Left meta */}
              <div className="md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 bg-[#CCFF00] text-[#0a0a0a] flex flex-col justify-center relative overflow-hidden">
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)' }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-bold uppercase tracking-wider">{experiences[0].date}</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-none mb-4">
                    {experiences[0].company}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-[#0a0a0a]/70">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-semibold">{experiences[0].location}</span>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-5 h-5 text-[#CCFF00]" />
                  <motion.h4
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight"
                  >
                    {experiences[0].position}
                  </motion.h4>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-8 pl-4 border-l-2 border-[#CCFF00]/30">
                  {experiences[0].highlights.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                      className="text-white/60 font-medium text-base leading-relaxed"
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {experiences[0].technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1 + i * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(204,255,0,0.15)", color: "#CCFF00", borderColor: "rgba(204,255,0,0.3)" }}
                      className="text-sm font-semibold uppercase tracking-wide px-4 py-2 border border-white/10 rounded-full bg-white/5 text-white/60 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
