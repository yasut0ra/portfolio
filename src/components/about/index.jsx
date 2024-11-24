import { motion } from "framer-motion";
import Header from "../layout/Header";
import Introduction from "./sections/Introduction";
import Stats from "./sections/Stats";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import CyberLines from "./animations/CyberLines";
import { sectionVariants } from "./animations/useAnimations";
import { introduction, stats, experience, skills } from "../../data/about";

export default function About() {
  return (
    <section className="relative min-h-screen">
      {/* Animated Background Lines */}
      <CyberLines />

      {/* Main Content */}
      <div className="relative">
        <div className="space-y-32 py-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Introduction introduction={introduction} />
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Stats stats={stats} />
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Experience experience={experience} />
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Skills skills={skills} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}