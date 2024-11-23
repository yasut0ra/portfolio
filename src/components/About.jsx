import { motion } from "framer-motion";
import Section from "./common/Section";
import Button from './common/Button';
import Card from './common/Card';
import { stats, skills } from '../data/about';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="フルスタック開発者として、革新的なWebアプリケーションの開発に情熱を注いでいます。"
    >
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <Card
              key={stat.label}
              variant="gradient"
              className="p-6 sm:p-8"
            >
              <h3 className="text-4xl sm:text-5xl font-bold gradient-text mb-3">
                {stat.value}
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="space-y-10">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              variant="minimal"
              className="p-6"
              isHoverable={false}
            >
              <div className="flex justify-between mb-3">
                <span className="text-xl font-medium">{skill.name}</span>
                <span className="text-xl text-primary-500">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                />
              </div>
            </Card>
          ))}
        </div>

        {/* CV Download Button */}
        <div className="col-span-full text-center">
          <Button 
            variant="primary" 
            size="lg"
            icon={<i className="fas fa-download" />}
            className="mt-12"
          >
            Download CV
          </Button>
        </div>
      </div>
    </Section>
  );
}