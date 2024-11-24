import { motion } from "framer-motion";
import Card from "../../common/Card";
import Section from "../../common/Section";
import { useScrollAnimation, cyberVariants } from "../animations/useAnimations";
import { useRef } from "react";

function getStatIcon(label) {
  switch (label) {
    case '年間のプログラミング経験':
      return '💻';
    case 'インターン参加数':
      return '🏢';
    case '開発プロジェクト数':
      return '🚀';
    case '使用可能な言語':
      return '🔧';
    default:
      return '📊';
  }
}

export default function Stats({ stats }) {
  const ref = useRef(null);
  const { fadeIn, createHorizontalLineAnimation } = useScrollAnimation(ref);

  return (
    <Section
      title="Stats"
      subtitle="これまでの実績をご紹介します。"
    >
      <div className="relative">
        {/* Background Decoration */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-500/5 rounded-full blur-3xl" />

        {/* Decorative Lines */}
        <motion.div
          className="absolute left-0 top-1/2 h-[1px] bg-gradient-to-r from-primary-500/50 to-transparent"
          style={createHorizontalLineAnimation(0.5)}
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={cyberVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={fadeIn}
            >
              <Card 
                variant="gradient" 
                className="relative group hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6 text-center relative">
                  {/* Icon Background */}
                  <motion.div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                              w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md
                              flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-2xl gradient-text">
                      {getStatIcon(stat.label)}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="mt-6">
                    <motion.h3
                      className="text-4xl font-bold gradient-text mb-3 tracking-tight"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </p>
                  </div>

                  {/* Decorative Line */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 
                              bg-gradient-to-r from-primary-500 to-secondary-500 
                              rounded-full"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileHover={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}