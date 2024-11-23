import { motion } from "framer-motion";
import Section from "./common/Section";
import Button from "./common/Button";
import Card from "./common/Card";
import { stats, experience, skills, introduction } from '../data/about';

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle={introduction.title}
    >
      <div className="space-y-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
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
            <div className="mt-8 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
              <p className="text-primary-600 dark:text-primary-400 font-medium">
                  "技術を通じて社会に貢献できるエンジニアを目指しています"
                </p>
              </div>
            </Card>
            </motion.div>
        </div>

        {/* Experience */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
            経歴
          </h3>
          {experience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="minimal" className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
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
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
            スキル
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="minimal" className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </h4>
                      <span className="text-primary-500 font-medium">
                        {skill.level}%
                    </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                      />
                    </div>
                    <div className="space-y-2">
                      {skill.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center justify-between p-2 rounded-lg
                           bg-gray-50 dark:bg-gray-800/50"
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
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}