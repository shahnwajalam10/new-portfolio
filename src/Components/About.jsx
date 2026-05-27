import {
  MapPin, Mail, Download, ArrowRight, Code2, Layers, Server
} from 'lucide-react';
import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function AnimatedSection({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
    Backend: ["Node.js", "Express", "RESTful APIs", "GraphQL", "JWT"],
    Database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
    Tools: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Vite"],
  }

  const categoryIcons = {
    Frontend: <Code2 className="w-6 h-6" />,
    Backend: <Server className="w-6 h-6" />,
    Database: <Layers className="w-6 h-6" />,
    Tools: <Layers className="w-6 h-6" />,
  }

  const handleResumeClick = () => {
    const resumeUrl = "/shahnwaj_alam_resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section ref={sectionRef} id="about" className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden py-24 px-6 md:px-12">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#CCFF00]/5 blur-[200px] animate-float-slow" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <AnimatedSection className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-[#CCFF00] font-semibold uppercase tracking-[0.3em] text-sm mb-4"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85]"
          >
            <span className="text-white">WHO</span>
            <br />
            <span className="text-[#CCFF00]">AM I<span className="text-white/20">.</span></span>
          </motion.h2>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-12 mt-8">
          {/* Profile Picture */}
          <AnimatedSection className="relative group w-full lg:w-1/3">
            {/* Status badge */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute -top-5 -right-5 z-20 bg-[#CCFF00] text-[#0a0a0a] font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full"
            >
              Available ✓
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-full aspect-square bg-[#141414] border border-white/10 rounded-3xl overflow-hidden glow-lime"
            >
              <img
                src="/profile_pic.png"
                alt="Shahnwaj Alam"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
              {/* Overlay glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#CCFF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection className="w-full lg:w-2/3">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#141414] border border-white/10 p-8 md:p-12 rounded-3xl h-full"
            >
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-[#CCFF00] rounded-full"
                />
                <span className="text-white/40 font-semibold uppercase tracking-[0.3em] text-sm">Developer Profile</span>
              </div>
              
              <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed mb-8">
                Building the digital future with{" "}
                <span className="text-[#CCFF00] font-bold">clean code</span>{" "}
                and modern solutions. I specialize in creating robust, scalable applications with beautiful interfaces that users love.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} className="flex items-center gap-2 bg-[#CCFF00]/10 border border-[#CCFF00]/20 px-5 py-2.5 rounded-full text-[#CCFF00] text-sm font-semibold">
                  <MapPin className="w-4 h-4" />
                  India
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-white/70 text-sm font-semibold">
                  <Mail className="w-4 h-4" />
                  shahnwajalam10@gmail.com
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Skills Section - Category circles like AngryToast product carousel */}
        <AnimatedSection className="mt-20">
          <div className="bg-[#141414] border border-white/10 rounded-3xl overflow-hidden">
            {/* Tab header */}
            <div className="bg-[#CCFF00] p-5 flex items-center gap-4">
              <span className="text-[#0a0a0a] font-black text-xl uppercase tracking-wider">Tech Stack</span>
              <div className="flex gap-1 ml-auto">
                <div className="w-3 h-3 rounded-full bg-[#0a0a0a]/20" />
                <div className="w-3 h-3 rounded-full bg-[#0a0a0a]/20" />
                <div className="w-3 h-3 rounded-full bg-[#0a0a0a]/20" />
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {Object.entries(skills).map(([category, skillList], categoryIdx) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 * categoryIdx, duration: 0.5 }}
                    className="space-y-5"
                  >
                    <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                      <div className="w-10 h-10 rounded-xl bg-[#CCFF00]/10 flex items-center justify-center text-[#CCFF00]">
                        {categoryIcons[category]}
                      </div>
                      <span className="text-xl text-white font-bold uppercase tracking-tight">{category}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIdx) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.3 + skillIdx * 0.05, duration: 0.3 }}
                          whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(204,255,0,0.15)", color: "#CCFF00", borderColor: "rgba(204,255,0,0.3)" }}
                          className="px-4 py-2 bg-white/5 border border-white/10 text-white/70 font-semibold text-sm rounded-full transition-all cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Download Resume CTA */}
        <AnimatedSection className="mt-16 flex justify-center">
          <motion.button
            onClick={handleResumeClick}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#CCFF00] text-[#0a0a0a] font-bold text-base uppercase rounded-full relative overflow-hidden tracking-wider"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Download className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Download Resume</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </motion.button>
        </AnimatedSection>

      </div>
    </section>
  )
}
