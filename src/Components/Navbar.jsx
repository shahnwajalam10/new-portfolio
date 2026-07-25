// import { Link, useLocation } from "react-router-dom"
// import { useState, useEffect } from "react"
// import { Menu, X } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50)
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   useEffect(() => {
//     setOpen(false)
//   }, [location])

//   const navItems = ['About', 'Experience', 'Skill', 'Project', 'Education', 'Contact']

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//       className={`fixed top-0 w-full z-50 px-6 md:px-12 py-4 transition-all duration-500 ${
//         scrolled
//           ? "bg-[#0a0a0a]/90 backdrop-blur-2xl border-b border-white/10"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center gap-2"
//           >
//             <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-white">
//               SHAHNWAJ
//             </span>
//             <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-[#CCFF00]">
//               ALAM
//             </span>
//             {/* Mascot-style icon */}
//             <motion.div
//               animate={{ rotate: [0, 5, -5, 0] }}
//               transition={{ duration: 3, repeat: Infinity }}
//               className="ml-1"
//             >
//               <span className="text-2xl">⚡</span>
//             </motion.div>
//           </motion.div>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center gap-1">
//           {navItems.map((item, i) => {
//             const isActive = location.pathname === `/${item.toLowerCase()}`
//             return (
//               <motion.div
//                 key={item}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * i, duration: 0.4 }}
//               >
//                 <Link
//                   to={`/${item.toLowerCase()}`}
//                   className={`relative px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 block rounded-full ${
//                     isActive
//                       ? "bg-[#CCFF00] text-[#0a0a0a]"
//                       : "text-white/70 hover:text-white hover:bg-white/5"
//                   }`}
//                 >
//                   {item}
//                   {isActive && (
//                     <motion.div
//                       layoutId="activeNav"
//                       className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#CCFF00] rounded-full"
//                     />
//                   )}
//                 </Link>
//               </motion.div>
//             )
//           })}
//         </div>

//         {/* Mobile Hamburger */}
//         <motion.button
//           whileTap={{ scale: 0.9 }}
//           className="lg:hidden text-white p-2 rounded-xl border border-white/20 hover:border-[#CCFF00]/50 transition-colors"
//           onClick={() => setOpen(!open)}
//         >
//           <AnimatePresence mode="wait">
//             {open ? (
//               <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
//                 <X size={24} strokeWidth={2} />
//               </motion.div>
//             ) : (
//               <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
//                 <Menu size={24} strokeWidth={2} />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0, y: -20 }}
//             animate={{ opacity: 1, height: "auto", y: 0 }}
//             exit={{ opacity: 0, height: 0, y: -20 }}
//             transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:hidden mt-4 bg-[#141414] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl"
//           >
//             <div className="flex flex-col gap-1 p-4">
//               {navItems.map((item, i) => {
//                 const isActive = location.pathname === `/${item.toLowerCase()}`
//                 return (
//                   <motion.div
//                     key={item}
//                     initial={{ opacity: 0, x: -30 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.05 * i, duration: 0.3 }}
//                   >
//                     <Link
//                       onClick={() => setOpen(false)}
//                       to={`/${item.toLowerCase()}`}
//                       className={`block px-6 py-3 font-bold text-lg uppercase tracking-wide rounded-xl transition-all ${
//                         isActive
//                           ? "bg-[#CCFF00] text-[#0a0a0a]"
//                           : "text-white/70 hover:text-white hover:bg-white/5"
//                       }`}
//                     >
//                       {item}
//                     </Link>
//                   </motion.div>
//                 )
//               })}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   )
// }







import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  const navItems = ['About', 'Experience', 'Skill', 'Project', 'Education', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 px-6 md:px-12 py-4 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="max-w-[calc(100%-56px)]">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 sm:gap-2 min-w-0"
          >
            <span className="text-lg sm:text-2xl md:text-3xl font-black tracking-tighter uppercase text-white whitespace-nowrap">
              SHAHNAWAZ
            </span>
            <span className="hidden sm:inline text-2xl md:text-3xl font-black tracking-tighter uppercase text-[#CCFF00] whitespace-nowrap">
              ALAM
            </span>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="hidden sm:block ml-1"
            >
              <span className="text-2xl">⚡</span>
            </motion.div>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item, i) => {
            const isActive = location.pathname === `/${item.toLowerCase()}`
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className={`relative px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 block ${
                    isActive
                      ? "bg-[#CCFF00] text-[#0a0a0a]"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#CCFF00]"
                    />
                  )}
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="lg:hidden shrink-0 text-white p-2 border border-white/20 hover:border-[#CCFF00]/50 transition-colors"
          onClick={() => setOpen(!open)}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={24} strokeWidth={2} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={24} strokeWidth={2} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mt-4 bg-[#141414] border border-white/10 overflow-hidden backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1 p-4">
              {navItems.map((item, i) => {
                const isActive = location.pathname === `/${item.toLowerCase()}`
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <Link
                      onClick={() => setOpen(false)}
                      to={`/${item.toLowerCase()}`}
                      className={`block px-6 py-3 font-bold text-lg uppercase tracking-wide transition-all ${
                        isActive
                          ? "bg-[#CCFF00] text-[#0a0a0a]"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}