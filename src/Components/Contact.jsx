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
} from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.elements.name?.value;
    const email = form.elements.email?.value;
    const message = form.elements.message?.value;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 3000);

      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 3000);

      return;
    }

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    form.reset();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "shahnwajalam10@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+91 7209786220",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Bengaluru, INDIA",
    },
  ];

  const socials = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/shahnwajalam10",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/shahnwaj-alam-b08415206/",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com/Shahnwajalam786",
      label: "Twitter",
    },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-white/60 font-semibold uppercase tracking-[0.3em] text-sm mb-4">
              Get In Touch
            </p>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight uppercase tracking-tighter text-white">
              LET'S BUILD <br /> SOMETHING <br /> COOL.
            </h2>

            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl"
                >
                  <div className="w-10 h-10 bg-[#CCFF00]/20 rounded-xl flex items-center justify-center text-[#CCFF00]">
                    {item.icon}
                  </div>

                  <span className="text-sm font-semibold text-white/70">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                {
                  type: "text",
                  name: "name",
                  placeholder: "Your Name",
                },
                {
                  type: "email",
                  name: "email",
                  placeholder: "Your Email",
                },
              ].map((field, i) => (
                <motion.input
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  className="w-full bg-black/30 text-white border border-white/10 p-4 text-sm font-medium placeholder-white/30 focus:outline-none focus:border-[#CCFF00] transition-all rounded-xl"
                />
              ))}

              <motion.textarea
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full bg-black/30 text-white border border-white/10 p-4 text-sm font-medium placeholder-white/30 focus:outline-none focus:border-[#CCFF00] transition-all rounded-xl resize-none"
              />

              {/* Success */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00] rounded-xl"
                >
                  <CheckCircle className="w-5 h-5" />

                  <p className="text-sm font-semibold">
                    Message sent successfully!
                  </p>
                </motion.div>
              )}

              {/* Error */}
              {showError && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: [0, -5, 5, -5, 0],
                  }}
                  transition={{
                    x: {
                      duration: 0.4,
                    },
                  }}
                  className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5" />

                  <p className="text-sm font-semibold">
                    Please fill all fields correctly
                  </p>
                </motion.div>
              )}

              <motion.button
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                className="w-full bg-[#CCFF00] text-black py-4 font-bold text-base uppercase rounded-full flex items-center justify-center gap-3 tracking-wider"
              >
                <Send className="w-4 h-4" />

                <span>Send Message</span>
              </motion.button>
            </form>

            {/* Social Links */}
            <div className="flex gap-3 pt-6 mt-6 border-t border-white/10 justify-center">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-[#CCFF00] bg-white/5 border border-white/10 hover:border-[#CCFF00]/30 p-3 rounded-xl transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}