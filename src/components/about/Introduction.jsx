import { motion } from "framer-motion";
import { useRef } from "react";
import Card from "../common/Card";
import { useScrollAnimation, cyberVariants } from "./animations/useAnimations";

export default function Introduction({ introduction }) {
  const ref = useRef(null);
  const { fadeIn, cyberLine } = useScrollAnimation(ref);

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <motion.div
        variants={cyberVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative"
        style={fadeIn}
      >
        {/* Cyber Line */}
        <motion.div
          className="absolute -left-4 top-0 w-[2px] h-full bg-gradient-to-b from-primary-500/0 via-primary-500 to-primary-500/0"
          style={cyberLine}
        />

        {/* Background Decoration */}
        <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary-500/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-secondary-500/10 rounded-full blur-2xl" />

        {/* Content */}
        <Card variant="gradient" className="p-8 relative overflow-hidden">
          {/* Quote Icon */}
          <svg
            className="absolute top-4 left-4 w-12 h-12 text-primary-500/20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>

          <div className="space-y-6">
            {introduction.description.split('\n').map((paragraph, index) => (
              paragraph.trim() && (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  {paragraph.trim()}
                </motion.p>
              )
            ))}
          </div>

          {/* Highlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
          >
            <p className="text-primary-600 dark:text-primary-400 font-medium">
              "技術を通じて社会に貢献できるエンジニアを目指しています"
            </p>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
}