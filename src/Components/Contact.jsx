// import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle } from "lucide-react"
// import { useState, useRef } from "react"
// import { motion, useInView } from "framer-motion"

// export default function Contact() {
//   const [showSuccess, setShowSuccess] = useState(false)
//   const [showError, setShowError] = useState(false)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const handleSubmit = (e) => {
//     e.preventDefault()
    
//     // Get form values
//     const form = e.target
//     const name = form.elements.name?.value
//     const email = form.elements.email?.value
//     const message = form.elements.message?.value
    
//     // Basic validation
//     if (!name?.trim() || !email?.trim() || !message?.trim()) {
//       setShowError(true)
//       setTimeout(() => setShowError(false), 3000)
//       return
//     }
    
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       setShowError(true)
//       setTimeout(() => setShowError(false), 3000)
//       return
//     }
    
//     // Show success message (UI only - no backend)
//     setShowSuccess(true)
//     setTimeout(() => setShowSuccess(false), 10000)
    
//     // Reset form
//     form.reset()
//   }

//   const contactInfo = [
//     { icon: <Mail className="w-5 h-5" />, text: "shahnwajalam10@gmail.com" },
//     { icon: <Phone className="w-5 h-5" />, text: "+91 7209786220" },
//     { icon: <MapPin className="w-5 h-5" />, text: "Bengaluru, INDIA" },
//   ]

//   const socials = [
//     { icon: <Github size={20} />, href: "https://github.com/shahnwajalam10", label: "GitHub" },
//     { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/shahnwaj-alam-b08415206/", label: "LinkedIn" },
//     { icon: <Twitter size={20} />, href: "https://twitter.com/Shahnwajalam786", label: "Twitter" },
//   ]

//   return (
//     <section ref={ref} id="contact" className="py-24 px-6 md:px-12 bg-[#CCFF00] text-[#0a0a0a] relative overflow-hidden">
//       {/* Subtle pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px)' }} />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid md:grid-cols-2 gap-16">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7 }}
//           >
//             <p className="text-[#0a0a0a]/60 font-semibold uppercase tracking-[0.3em] text-sm mb-4">Get In Touch</p>
//             <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight uppercase tracking-tighter text-[#0a0a0a]">
//               LET'S BUILD <br /> SOMETHING <br /> COOL.
//             </h2>
//             <div className="space-y-4">
//               {contactInfo.map((item, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: -30 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: 0.3 + i * 0.1 }}
//                   whileHover={{ x: 4 }}
//                   className="flex items-center gap-4 bg-[#0a0a0a] text-white p-4 rounded-2xl transition-all"
//                 >
//                   <div className="w-10 h-10 bg-[#CCFF00]/10 rounded-xl flex items-center justify-center text-[#CCFF00]">
//                     {item.icon}
//                   </div>
//                   <span className="text-sm font-semibold text-white/70">{item.text}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl"
//           >
//             <form onSubmit={handleSubmit} className="space-y-5">
//               {[
//                 { type: "text", name: "name", placeholder: "Your Name" },
//                 { type: "email", name: "email", placeholder: "Your Email" },
//               ].map((field, i) => (
//                 <motion.input
//                   key={field.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.4 + i * 0.1 }}
//                   type={field.type}
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   required
//                   className="w-full bg-white/5 text-white border border-white/10 p-4 text-sm font-medium placeholder-white/30 focus:outline-none focus:border-[#CCFF00]/50 transition-all rounded-xl"
//                 />
//               ))}
//               <motion.textarea
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.6 }}
//                 name="message"
//                 placeholder="Your Message"
//                 rows={4}
//                 required
//                 className="w-full bg-white/5 text-white border border-white/10 p-4 text-sm font-medium placeholder-white/30 focus:outline-none focus:border-[#CCFF00]/50 transition-all rounded-xl resize-none"
//               />
              
//               {/* Success Message */}
//               {showSuccess && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="flex items-center gap-3 p-4 bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00] rounded-xl"
//                 >
//                   <CheckCircle className="w-5 h-5 flex-shrink-0" />
//                   <p className="text-sm font-semibold">Message sent successfully!</p>
//                 </motion.div>
//               )}
              
//               {/* Error Message */}
//               {showError && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8, x: -10 }}
//                   animate={{ opacity: 1, scale: 1, x: [0, -5, 5, -5, 0] }}
//                   transition={{ x: { duration: 0.4 } }}
//                   className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl"
//                 >
//                   <AlertCircle className="w-5 h-5 flex-shrink-0" />
//                   <p className="text-sm font-semibold">Please fill all fields correctly</p>
//                 </motion.div>
//               )}
              
//               <motion.button
//                 whileHover={{ scale: 1.02, y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 className="w-full bg-[#CCFF00] text-[#0a0a0a] py-4 font-bold text-base uppercase rounded-full flex items-center justify-center gap-3 relative overflow-hidden group tracking-wider"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//                 <Send className="w-4 h-4 relative z-10" />
//                 <span className="relative z-10">Send Message</span>
//               </motion.button>
//             </form>
            
//             {/* Social Links */}
//             <div className="flex gap-3 pt-6 mt-6 border-t border-white/10 justify-center">
//               {socials.map((social, i) => (
//                 <motion.a
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.7 + i * 0.1 }}
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   whileTap={{ scale: 0.9 }}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white/40 hover:text-[#CCFF00] bg-white/5 border border-white/10 hover:border-[#CCFF00]/30 p-3 rounded-xl transition-all"
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }



















// import {
//   Mail,
//   Phone,
//   MapPin,
//   Github,
//   Linkedin,
//   Twitter,
//   Send,
//   CheckCircle,
//   AlertCircle,
// } from "lucide-react";
// import { useState, useRef } from "react";
// import { motion, useInView } from "framer-motion";

// export default function Contact() {
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showError, setShowError] = useState(false);

//   const ref = useRef(null);

//   const isInView = useInView(ref, {
//     once: true,
//     margin: "-100px",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const form = e.target;

//     const name = form.elements.name?.value;
//     const email = form.elements.email?.value;
//     const message = form.elements.message?.value;

//     if (!name?.trim() || !email?.trim() || !message?.trim()) {
//       setShowError(true);

//       setTimeout(() => {
//         setShowError(false);
//       }, 3000);

//       return;
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       setShowError(true);

//       setTimeout(() => {
//         setShowError(false);
//       }, 3000);

//       return;
//     }

//     setShowSuccess(true);

//     setTimeout(() => {
//       setShowSuccess(false);
//     }, 3000);

//     form.reset();
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="w-5 h-5" />,
//       text: "shahnwajalam10@gmail.com",
//     },
//     {
//       icon: <Phone className="w-5 h-5" />,
//       text: "+91 7209786220",
//     },
//     {
//       icon: <MapPin className="w-5 h-5" />,
//       text: "Bengaluru, INDIA",
//     },
//   ];

//   const socials = [
//     {
//       icon: <Github size={20} />,
//       href: "https://github.com/shahnwajalam10",
//       label: "GitHub",
//     },
//     {
//       icon: <Linkedin size={20} />,
//       href: "https://www.linkedin.com/in/shahnwaj-alam-b08415206/",
//       label: "LinkedIn",
//     },
//     {
//       icon: <Twitter size={20} />,
//       href: "https://twitter.com/Shahnwajalam786",
//       label: "Twitter",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       id="contact"
//       className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden"
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)",
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid md:grid-cols-2 gap-16">
//           {/* Left Side */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7 }}
//           >
//             <p className="text-white/60 font-semibold uppercase tracking-[0.3em] text-sm mb-4">
//               Get In Touch
//             </p>

//             <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight uppercase tracking-tighter text-white">
//               LET'S BUILD <br /> SOMETHING <br /> COOL.
//             </h2>

//             <div className="space-y-4">
//               {contactInfo.map((item, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: -30 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: 0.3 + i * 0.1 }}
//                   whileHover={{ x: 5 }}
//                   className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl"
//                 >
//                   <div className="w-10 h-10 bg-[#CCFF00]/20 rounded-xl flex items-center justify-center text-[#CCFF00]">
//                     {item.icon}
//                   </div>

//                   <span className="text-sm font-semibold text-white/70">
//                     {item.text}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right Side */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm"
//           >
//             <form onSubmit={handleSubmit} className="space-y-5">
//               {[
//                 {
//                   type: "text",
//                   name: "name",
//                   placeholder: "Your Name",
//                 },
//                 {
//                   type: "email",
//                   name: "email",
//                   placeholder: "Your Email",
//                 },
//               ].map((field, i) => (
//                 <motion.input
//                   key={field.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.4 + i * 0.1 }}
//                   type={field.type}
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   required
//                   className="w-full bg-black/30 text-white border border-white/10 p-4 text-sm font-medium placeholder-white/30 focus:outline-none focus:border-[#CCFF00] transition-all rounded-xl"
//                 />
//               ))}

//               <motion.textarea
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.6 }}
//                 name="message"
//                 placeholder="Your Message"
//                 rows={5}
//                 required
//                 className="w-full bg-black/30 text-white border border-white/10 p-4 text-sm font-medium placeholder-white/30 focus:outline-none focus:border-[#CCFF00] transition-all rounded-xl resize-none"
//               />

//               {/* Success */}
//               {showSuccess && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="flex items-center gap-3 p-4 bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00] rounded-xl"
//                 >
//                   <CheckCircle className="w-5 h-5" />

//                   <p className="text-sm font-semibold">
//                     Message sent successfully!
//                   </p>
//                 </motion.div>
//               )}

//               {/* Error */}
//               {showError && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{
//                     opacity: 1,
//                     scale: 1,
//                     x: [0, -5, 5, -5, 0],
//                   }}
//                   transition={{
//                     x: {
//                       duration: 0.4,
//                     },
//                   }}
//                   className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl"
//                 >
//                   <AlertCircle className="w-5 h-5" />

//                   <p className="text-sm font-semibold">
//                     Please fill all fields correctly
//                   </p>
//                 </motion.div>
//               )}

//               <motion.button
//                 whileHover={{
//                   scale: 1.02,
//                   y: -2,
//                 }}
//                 whileTap={{
//                   scale: 0.98,
//                 }}
//                 type="submit"
//                 className="w-full bg-[#CCFF00] text-black py-4 font-bold text-base uppercase rounded-full flex items-center justify-center gap-3 tracking-wider"
//               >
//                 <Send className="w-4 h-4" />

//                 <span>Send Message</span>
//               </motion.button>
//             </form>

//             {/* Social Links */}
//             <div className="flex gap-3 pt-6 mt-6 border-t border-white/10 justify-center">
//               {socials.map((social, i) => (
//                 <motion.a
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.7 + i * 0.1 }}
//                   whileHover={{
//                     scale: 1.1,
//                     y: -2,
//                   }}
//                   whileTap={{
//                     scale: 0.9,
//                   }}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white/40 hover:text-[#CCFF00] bg-white/5 border border-white/10 hover:border-[#CCFF00]/30 p-3 rounded-xl transition-all"
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }































import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// Custom reveal hook with intersection observer
function useReveal(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible, delay];
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(36px)',
      transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

function ContactInfoCard({ icon, text, idx }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <Reveal delay={200 + idx * 80}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          background: hovered ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.02)',
          border: `1px solid ${hovered ? 'rgba(204, 255, 0, 0.2)' : 'rgba(255,255,255,0.06)'}`,
          borderRadius: 20,
          padding: '16px 20px',
          transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
          transform: hovered ? 'translateX(8px)' : 'translateX(0)',
          cursor: 'default',
        }}
      >
        <div style={{
          width: 48,
          height: 48,
          borderRadius: 16,
          background: hovered ? 'rgba(204, 255, 0, 0.15)' : 'rgba(204, 255, 0, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s',
        }}>
          <div style={{
            color: hovered ? '#CCFF00' : 'rgba(204, 255, 0, 0.6)',
            transition: 'color 0.3s',
          }}>
            {icon}
          </div>
        </div>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 13,
          fontWeight: 500,
          color: hovered ? '#F5F0E8' : 'rgba(245,240,232,0.6)',
          transition: 'color 0.3s',
          letterSpacing: '-0.01em',
        }}>
          {text}
        </span>
      </div>
    </Reveal>
  );
}

function SocialIcon({ icon, href, label, color, idx }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 44,
        height: 44,
        borderRadius: 14,
        background: hovered ? `radial-gradient(circle at 30% 30%, ${color}20, ${color}05)` : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? `${color}60` : 'rgba(255,255,255,0.06)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'translateY(-4px) scale(1.05)' : 'translateY(0) scale(1)',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
    >
      <div style={{
        color: hovered ? color : 'rgba(255,255,255,0.4)',
        transition: 'color 0.3s',
        display: 'flex',
      }}>
        {icon}
      </div>
    </motion.a>
  );
}

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name?.value;
    const email = form.elements.email?.value;
    const message = form.elements.message?.value;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    form.reset();
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, text: "shahnwajalam10@gmail.com" },
    { icon: <Phone className="w-5 h-5" />, text: "+91 7209786220" },
    { icon: <MapPin className="w-5 h-5" />, text: "Bengaluru, INDIA" },
  ];

  const socials = [
    { icon: <Github size={18} />, href: "https://github.com/shahnwajalam10", label: "GitHub", color: "#F5F0E8" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/shahnwaj-alam-b08415206/", label: "LinkedIn", color: "#0A66C2" },
    { icon: <Twitter size={18} />, href: "https://twitter.com/Shahnwajalam786", label: "Twitter", color: "#1DA1F2" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@400;500&display=swap');

        .contact-root {
          background: #080808;
          position: relative;
          overflow: hidden;
        }

        .contact-root::before {
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
          33% { transform: translateY(-8px) translateX(4px); }
          66% { transform: translateY(6px) translateX(-3px); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        .animate-float {
          animation: float-slow 6s ease-in-out infinite;
        }

        .glow-pulse {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .form-input {
          transition: all 0.3s ease;
        }

        .form-input:focus {
          border-color: #CCFF00;
          box-shadow: 0 0 20px rgba(204, 255, 0, 0.1);
        }
      `}</style>

      <section ref={ref} className="contact-root" style={{
        padding: '110px 48px 120px',
        minHeight: '100vh',
        color: '#F5F0E8',
      }}>
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

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          
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
                Vol. 05 — Connect
              </div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.2em',
              }}>
                Open for collaborations
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
                Contact<span style={{ color: '#CCFF00' }}>.</span>
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
                  Ready to bring your ideas to life? Let's collaborate and build something extraordinary.
                </p>
                <div style={{ display: 'flex', gap: 12, marginLeft: 'auto', flexWrap: 'wrap' }}>
                  {['Available', 'Worldwide'].map(tag => (
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

          {/* 2-column grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '64px',
          }}>
            
            {/* Left column - Contact Info */}
            <div style={{ gridColumn: 'span 5' }}>
              <Reveal delay={120}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#CCFF00',
                  marginBottom: 24,
                  paddingBottom: 12,
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}>
                  <Sparkles size={12} />
                  Reach out directly
                </div>
              </Reveal>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
                {contactInfo.map((item, idx) => (
                  <ContactInfoCard key={idx} {...item} idx={idx} />
                ))}
              </div>

              <Reveal delay={400}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#CCFF00',
                  marginBottom: 20,
                  paddingBottom: 12,
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}>
                  <Sparkles size={12} />
                  Find me on
                </div>
              </Reveal>

              <div style={{ display: 'flex', gap: 12 }}>
                {socials.map((social, idx) => (
                  <Reveal key={idx} delay={450 + idx * 60}>
                    <SocialIcon {...social} idx={idx} />
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right column - Contact Form */}
            <div style={{ gridColumn: 'span 7' }}>
              <Reveal delay={160}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#CCFF00',
                  marginBottom: 24,
                  paddingBottom: 12,
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}>
                  <Send size={12} />
                  Send a message
                </div>
              </Reveal>

              <div style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 24,
                padding: 40,
                transition: 'all 0.3s',
              }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <Reveal delay={200}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-input"
                      style={{
                        width: '100%',
                        background: 'rgba(0,0,0,0.4)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 14,
                        padding: '16px 20px',
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 13,
                        color: '#F5F0E8',
                        outline: 'none',
                      }}
                    />
                  </Reveal>

                  <Reveal delay={250}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="form-input"
                      style={{
                        width: '100%',
                        background: 'rgba(0,0,0,0.4)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 14,
                        padding: '16px 20px',
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 13,
                        color: '#F5F0E8',
                        outline: 'none',
                      }}
                    />
                  </Reveal>

                  <Reveal delay={300}>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      style={{
                        width: '100%',
                        background: 'rgba(0,0,0,0.4)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 14,
                        padding: '16px 20px',
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 13,
                        color: '#F5F0E8',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                      className="form-input"
                    />
                  </Reveal>

                  {/* Success Message */}
                  {showSuccess && (
                    <Reveal delay={0}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '14px 18px',
                        background: 'rgba(204, 255, 0, 0.1)',
                        border: '1px solid rgba(204, 255, 0, 0.2)',
                        borderRadius: 14,
                      }}>
                        <CheckCircle size={18} style={{ color: '#CCFF00' }} />
                        <span style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 11,
                          color: '#CCFF00',
                          letterSpacing: '0.05em',
                        }}>Message sent successfully!</span>
                      </div>
                    </Reveal>
                  )}

                  {/* Error Message */}
                  {showError && (
                    <Reveal delay={0}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '14px 18px',
                        background: 'rgba(255, 77, 0, 0.1)',
                        border: '1px solid rgba(255, 77, 0, 0.2)',
                        borderRadius: 14,
                      }}>
                        <AlertCircle size={18} style={{ color: '#FF4D00' }} />
                        <span style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 11,
                          color: '#FF4D00',
                          letterSpacing: '0.05em',
                        }}>Please fill all fields correctly</span>
                      </div>
                    </Reveal>
                  )}

                  <Reveal delay={350}>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        width: '100%',
                        background: '#CCFF00',
                        border: 'none',
                        borderRadius: 40,
                        padding: '16px 24px',
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#080808',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 12,
                        transition: 'all 0.3s',
                      }}
                    >
                      <Send size={16} />
                      Send Message
                      <ArrowRight size={16} />
                    </motion.button>
                  </Reveal>
                </form>
              </div>
            </div>
          </div>

          {/* Footer rule */}
          <Reveal delay={500}>
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: 32,
              marginTop: 80,
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: "'DM Mono', monospace",
              fontSize: 9,
              color: 'rgba(255,255,255,0.15)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>
              <span>Ready to create something amazing</span>
              <span>Response within 24h</span>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
}