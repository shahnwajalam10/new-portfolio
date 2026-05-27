import { Link } from "react-router-dom"
import { Github, Linkedin, Twitter, Sparkles } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Experience', path: '/experience' },
    { label: 'Skill', path: '/skill' },
    { label: 'Project', path: '/project' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' },
  ]

  const socials = [
    { icon: <Github size={20} />, href: "https://github.com/shahnwajalam10", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/shahnwaj-alam-b08415206/", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/Shahnwajalam786", label: "Twitter" },
  ]

  return (
    <footer ref={ref} className="bg-[#0a0a0a] text-white py-16 px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Marquee scrolling banner like AngryToast */}
      <div className="absolute top-0 left-0 w-[200%] border-b border-white/10 py-3 bg-[#CCFF00] flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[#0a0a0a] font-black text-sm uppercase mx-6 tracking-widest flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#0a0a0a]" />
              LET'S WORK TOGETHER
              <span className="text-[#0a0a0a]/30">•</span>
              BUILDING THE DIGITAL FUTURE
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        {/* Left Column: Mascot/Logo */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-black tracking-tighter uppercase text-white">
                SHAHNWAJ
              </span>
              <span className="text-3xl font-black tracking-tighter uppercase text-[#CCFF00]">
                ALAM
              </span>
              <span className="text-3xl">⚡</span>
            </div>
            <p className="text-white/40 font-medium text-base leading-relaxed max-w-sm mb-8">
              A full-stack engineer focused on creating exceptionally designed interactive interfaces and scalable high-performance backend systems.
            </p>
          </div>

          <div className="flex gap-3">
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#CCFF00] hover:border-[#CCFF00]/30 transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Middle Column: Quick Navigation Links */}
        <div className="md:col-span-3">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#CCFF00] mb-6">Navigation</h3>
          <ul className="space-y-3 font-semibold text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="text-white/40 hover:text-white transition-colors uppercase tracking-wider block py-1">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Contact Details */}
        <div className="md:col-span-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#CCFF00] mb-6">Get in Touch</h3>
          <p className="text-white/40 font-medium text-base mb-4">
            Have a project in mind or want to say hi? Feel free to reach out.
          </p>
          <a 
            href="mailto:shahnwajalam10@gmail.com" 
            className="text-white hover:text-[#CCFF00] font-bold text-lg uppercase tracking-tight block transition-colors mb-2"
          >
            shahnwajalam10@gmail.com
          </a>
          <p className="text-white/30 font-semibold text-sm uppercase tracking-wider">
            Bengaluru, India
          </p>
        </div>
      </div>

      {/* Footer Bottom copyright & info */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-white/30 relative z-10">
        <p className="uppercase tracking-widest">
          © {new Date().getFullYear()} Shahnwaj Alam. All rights reserved.
        </p>
        <p className="uppercase tracking-widest flex items-center gap-2">
          <span>Built with passion & precision</span>
          <span className="text-[#CCFF00]">⚡</span>
        </p>
      </div>
    </footer>
  )
}