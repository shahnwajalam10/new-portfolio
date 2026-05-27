import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import Skill from "./Skill";
import Github from "./Github";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Experience />
      <Skill />
      <Project />
      <Education />
      <Github />
      <Contact />
    </motion.div>
  );
};

export default Home;