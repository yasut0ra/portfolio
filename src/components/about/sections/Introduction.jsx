import { motion } from "framer-motion";
import Card from "../../common/Card";
import Section from "../../common/Section";
import { useScrollAnimation, cyberVariants } from "../animations/useAnimations";
import { useRef } from "react";

export default function Introduction({ introduction }) {
  const ref = useRef(null);
  const { fadeIn } = useScrollAnimation(ref);

  return (
    <Section
      id="introduction"
      title="Introduction"
      subtitle="私のエンジニアとしての想いや目標について"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={cyberVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background Decoration */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary-500/30 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary-500/30 rounded-full blur-2xl" />

          {/* Content */}
          <Card variant="gradient" className="p-8 relative overflow-hidden backdrop-blur-sm">
            {/* Quote Icon */}
            <svg
              className="absolute top-4 left-4 w-12 h-12 text-primary-500/50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>

            <motion.div
              className="space-y-6"
              style={fadeIn}
            >
              {introduction.description.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-800 dark:text-gray-100 leading-relaxed"
                  >
                    {paragraph.trim()}
                  </motion.p>
                )
              ))}
            </motion.div>

            {/* Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-4 bg-primary-100 dark:bg-primary-900/30 rounded-lg"
            >
              <p className="text-primary-700 dark:text-primary-300 font-medium">
                "技術を通じて社会に貢献できるエンジニアを目指しています"
              </p>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}