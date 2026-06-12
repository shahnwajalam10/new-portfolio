// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function CustomCursor() {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [isClicking, setIsClicking] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseDown = () => setIsClicking(true);
//     const handleMouseUp = () => setIsClicking(false);

//     const handleHoverStart = () => setIsHovering(true);
//     const handleHoverEnd = () => setIsHovering(false);

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     // Track hovers on interactive elements
//     const interactives = document.querySelectorAll("a, button, input, textarea, [role='button']");
//     interactives.forEach((el) => {
//       el.addEventListener("mouseenter", handleHoverStart);
//       el.addEventListener("mouseleave", handleHoverEnd);
//     });

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//       interactives.forEach((el) => {
//         el.removeEventListener("mouseenter", handleHoverStart);
//         el.removeEventListener("mouseleave", handleHoverEnd);
//       });
//     };
//   }, []);

//   // Re-attach hover listeners when DOM changes
//   useEffect(() => {
//     const observer = new MutationObserver(() => {
//       const interactives = document.querySelectorAll("a, button, input, textarea, [role='button']");
//       interactives.forEach((el) => {
//         el.addEventListener("mouseenter", () => setIsHovering(true));
//         el.addEventListener("mouseleave", () => setIsHovering(false));
//       });
//     });
//     observer.observe(document.body, { childList: true, subtree: true });
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       {/* Main dot */}
//       <motion.div
//         className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
//         animate={{
//           x: mousePos.x - 6,
//           y: mousePos.y - 6,
//           scale: isClicking ? 0.5 : 1,
//         }}
//         transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.3 }}
//       >
//         <div className="w-3 h-3 bg-white rounded-full" />
//       </motion.div>

//       {/* Outer ring */}
//       <motion.div
//         className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
//         animate={{
//           x: mousePos.x - (isHovering ? 30 : 20),
//           y: mousePos.y - (isHovering ? 30 : 20),
//           width: isHovering ? 60 : 40,
//           height: isHovering ? 60 : 40,
//           opacity: isClicking ? 0.5 : 1,
//         }}
//         transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.5 }}
//       >
//         <div
//           className="w-full h-full rounded-full border-2 border-white"
//           style={{
//             background: isHovering ? "rgba(255,255,255,0.1)" : "transparent",
//           }}
//         />
//       </motion.div>

//       {/* Glow trail */}
//       <motion.div
//         className="fixed top-0 left-0 pointer-events-none z-[9999]"
//         animate={{
//           x: mousePos.x - 75,
//           y: mousePos.y - 75,
//         }}
//         transition={{ type: "spring", stiffness: 50, damping: 20, mass: 1 }}
//       >
//         <div className="w-[150px] h-[150px] rounded-full bg-[#CCFF00]/15 blur-3xl" />
//       </motion.div>
//     </>
//   );
// }





import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      const isMobile = window.innerWidth <= 768;
      setIsVisible(!isTouch && !isMobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        pointerEvents: "none",
        zIndex: 9999,
        width: "20px",
        height: "20px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#CCFF00"
        width="40"
        height="40"
      >
        <path d="M5 3L19 12L13 13L16 21L13 22L10 14L5 19V3Z" />
      </svg>
    </div>
  );
}






