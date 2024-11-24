import { motion } from "framer-motion";
import Card from "../../common/Card";
import { useScrollAnimation, cyberVariants } from "../animations/useAnimations";
import { useRef } from "react";

export default function Skills({ skills }) {
  const ref = useRef(null);
  const { fadeIn, createHorizontalLineAnimation } = useScrollAnimation(ref);

  return (
    <div ref={ref} className="space-y-8">
      <motion.h3
        variants={cyberVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8"
      >
        スキル
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={cyberVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={fadeIn}
          >
            <Card 
              variant="minimal" 
              className="p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              {/* Cyber Corner Effect */}
              <motion.div
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-500/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary-500/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              />

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </h4>
                  <span className="text-primary-500 font-medium">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                  <motion.div
                    className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-primary-500 to-secondary-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                  {/* Glowing Effect */}
                  <motion.div
                    className="absolute top-0 left-0 h-full w-2 bg-white/50"
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + techIndex * 0.1 }}
                      className="flex items-center justify-between p-2 rounded-lg
                               bg-gray-50 dark:bg-gray-800/50 group-hover:bg-primary-50 
                               dark:group-hover:bg-primary-900/20 transition-colors duration-300"
                    >
                      <span className="text-gray-800 dark:text-gray-200 font-medium">
                        {tech.name}
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {tech.years}
                        </span>
                        <span className="text-sm px-2 py-1 rounded-full
                                     bg-primary-100 dark:bg-primary-900/30
                                     text-primary-600 dark:text-primary-400">
                          {tech.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}