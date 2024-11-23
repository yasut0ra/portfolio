import { motion } from 'framer-motion';

export default function Section({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "" 
}) {
  return (
    <section
      id={id}
      className={`min-h-screen py-24 ${className}`}
    >
      <div className="container mx-auto px-4">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 gradient-text">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}