import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Experience from "./Components/Experience";
import About from "./Components/About";
import Project from "./Components/Project";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Skill from "./Components/Skill";
import Github from "./Components/Github";
import CustomCursor from "./Components/CustomCursor";
import AnimatedBackground from "./Components/AnimatedBackground";
import LoadingScreen from "./Components/LoadingScreen";
import PageTransition from "./Components/PageTransition";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path='/hero' element={<PageTransition><Hero /></PageTransition>} />
        <Route path='/experience' element={<PageTransition><Experience /></PageTransition>} />
        <Route path='/about' element={<PageTransition><About /></PageTransition>} />
        <Route path='/project' element={<PageTransition><Project /></PageTransition>} />
        <Route path='/education' element={<PageTransition><Education /></PageTransition>} />
        <Route path='/contact' element={<PageTransition><Contact /></PageTransition>} />
        <Route path='/skill' element={<PageTransition><Skill /></PageTransition>} />
        <Route path='/github' element={<PageTransition><Github /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`noise-overlay min-h-screen bg-black relative ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <AnimatedBackground />
        <CustomCursor />
        <Router>
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
