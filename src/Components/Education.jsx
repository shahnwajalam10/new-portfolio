import { CheckCircle2, GraduationCap, Award } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Quantum University Roorkee",
      period: "2020 - 2024",
      details: "GPA: 7.41/10.0",
      description: "Specialized in software development, algorithms, and database management systems.",
      accent: "#CCFF00"
    },
    {
      degree: "Software Developer Trainee",
      institution: "Masai School",
      period: "2024 - 2025",
      details: "1200+ hours of coding",
      description: "Intensive coding bootcamp focusing on modern web technologies and agile development.",
      accent: "#00D4FF"
    }
  ]

  const certifications = [
    "Cybersecurity Awareness - Quick Heal",
    "Database Foundations - Oracle Academy",
    "Full Stack Web Development - Masai School",
    "React Advanced Concepts - Udemy",
    "AWS Cloud Practitioner - Coursera"
  ]

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#CCFF00]/5 blur-[200px] animate-float-fast" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-[#CCFF00] font-semibold uppercase tracking-[0.3em] text-sm mb-4">Background</p>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
            <span className="text-white">EDUCATION</span>
            <br />
            <span className="text-[#CCFF00]">& CERTS<span className="text-white/20">.</span></span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* Education Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-2"
            >
              <div className="w-10 h-10 rounded-xl bg-[#CCFF00]/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#CCFF00]" />
              </div>
              <span className="text-lg font-bold uppercase tracking-wider text-white/60">The Journey</span>
            </motion.div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-[#141414] border border-white/10 p-8 md:p-10 rounded-3xl group overflow-hidden"
                >
                  {/* Accent glow */}
                  <div 
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundColor: edu.accent }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span 
                        className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ backgroundColor: `${edu.accent}15`, color: edu.accent }}
                      >
                        {edu.period}
                      </span>
                      <span className="text-xs font-semibold text-white/30 uppercase">{edu.details}</span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-black mb-3 uppercase tracking-tight leading-tight text-white">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: edu.accent }}>
                      {edu.institution}
                    </p>

                    <p className="text-white/50 font-medium text-sm leading-relaxed border-t border-white/10 pt-4">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-[#CCFF00]/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-[#CCFF00]" />
              </div>
              <span className="text-lg font-bold uppercase tracking-wider text-white/60">Badges</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-[#141414] border border-white/10 rounded-3xl overflow-hidden"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 8, backgroundColor: "rgba(204,255,0,0.05)" }}
                  className="flex items-center gap-4 p-5 border-b border-white/5 last:border-b-0 transition-all cursor-default group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full bg-[#CCFF00]/10 flex items-center justify-center flex-shrink-0"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
                  </motion.div>
                  <span className="text-white/60 font-semibold text-sm group-hover:text-white/80 transition-colors">{cert}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Summary Banner */}
        
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-[#CCFF00] rounded-2xl py-5 px-8 flex flex-wrap items-center justify-between gap-4"
        >
          <h3 className="text-xl font-black text-[#0a0a0a] uppercase tracking-tight">TL;DR</h3>
          <div className="flex gap-3">
            <motion.span whileHover={{ scale: 1.05 }} className="bg-[#0a0a0a] text-white font-bold text-sm px-5 py-2 rounded-full uppercase tracking-wider">B.Tech CSE</motion.span>
            <motion.span whileHover={{ scale: 1.05 }} className="bg-white text-[#0a0a0a] font-bold text-sm px-5 py-2 rounded-full uppercase tracking-wider">5 Certs</motion.span>
          </div>
        </motion.div> */}


      </div>
    </section>
  )
}