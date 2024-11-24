import { motion } from "framer-motion";
import Section from "../common/Section";
import Introduction from "./sections/Introduction";
import Stats from "./sections/Stats";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import CyberLines from "./animations/CyberLines";
import { useScrollAnimation, sectionVariants } from "./animations/useAnimations";
import { useRef } from "react";

// データのインポート
import { 
  introduction, 
  stats, 
  experience, 
  skills 
} from "../../data/about";

export default function About() {
  const sectionRef = useRef(null);
  const { fadeIn } = useScrollAnimation(sectionRef);

  return (
    <section className="relative min-h-screen py-20">
      {/* Animated Background Lines */}
      <CyberLines />

      {/* Main Content */}
      <div ref={sectionRef} className="space-y-24 relative">
        {/* Introduction Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={fadeIn}
        >
          <Introduction introduction={introduction} />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={fadeIn}
        >
          <Stats stats={stats} />
        </motion.div>

        {/* Experience Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={fadeIn}
        >
          <Experience experience={experience} />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={fadeIn}
        >
          <Skills skills={skills} />
        </motion.div>
      </div>
    </section>
  );
}