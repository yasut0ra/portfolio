// framer-motionのインポートを更新
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Section from "../common/Section";
import Introduction from "./Introduction";
import Stats from "./Stats";
import Experience from "./Experience";
import Skills from "./Skills";
import CyberLines from "./animations/CyberLines";
import { useScrollAnimation, sectionVariants } from "./animations/useAnimations";

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
    <Section
      id="about"
      title="About Me"
      subtitle={introduction.title}
    >
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
    </Section>
  );
}