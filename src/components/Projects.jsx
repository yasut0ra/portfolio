import { motion } from 'framer-motion';
import Section from './common/Section';
import Card from './common/Card';
import { projects } from '../data/projects';

const projectVariants = {
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

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="これまでに手がけた主要なプロジェクトをご紹介します。"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <Card
            key={project.title}
            variant="gradient"
            className="group overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 gradient-text">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full 
                             bg-primary-100 dark:bg-primary-900/30
                             text-primary-600 dark:text-primary-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-400 
                           hover:text-primary-500 dark:hover:text-primary-400 
                           transition-colors"
                >
                  <i className="fab fa-github text-xl mr-2" />
                  Code
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-400 
                           hover:text-primary-500 dark:hover:text-primary-400 
                           transition-colors"
                >
                  <i className="fas fa-external-link-alt text-xl mr-2" />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}