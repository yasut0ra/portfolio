import { motion } from "framer-motion";
import Card from "../../common/Card";
import Section from "../../../components/common/Section";
import { useScrollAnimation, cyberVariants } from "../animations/useAnimations";
import { useRef } from "react";

export default function Experience({ experience }) {
  const ref = useRef(null);
  const { fadeIn, cyberLine, createHorizontalLineAnimation } = useScrollAnimation(ref);

  return (
    <Section
      title="Experience"
      subtitle="これまでの経歴をご紹介します。"
    >
      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <motion.div
          className="absolute left-0 md:left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-primary-500/0 via-primary-500 to-primary-500/0"
          style={cyberLine}
        />

        {experience.map((item, index) => (
          <motion.div
            key={item.title}
            variants={cyberVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative mb-12 last:mb-0"
          >
            {/* Horizontal Connection Line */}
            <motion.div
              className="absolute left-0 md:left-1/2 top-8 h-[2px] md:w-8 bg-gradient-to-r from-primary-500 to-transparent"
              style={createHorizontalLineAnimation(0.2 + index * 0.1)}
            />

            {/* Timeline Dot */}
            <motion.div
              className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-8 w-3 h-3 rounded-full bg-primary-500"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
            />

            <div className="ml-8 md:ml-0 md:pl-[calc(50%+2rem)]">
              <Card 
                variant="minimal" 
                className="p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <motion.div
                  className="flex flex-col md:flex-row md:items-center gap-4"
                  style={fadeIn}
                >
                  <span className="text-primary-500 font-medium whitespace-nowrap">
                    {item.period}
                  </span>
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {item.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}