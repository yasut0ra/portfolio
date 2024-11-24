import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Section = forwardRef(({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "",
  titleClassName = "", // タイトルのカスタマイズ用
  subtitleClassName = "", // サブタイトルのカスタマイズ用
  containerClassName = "", // コンテナのカスタマイズ用
}, ref) => {
  return (
    <section
      id={id}
      ref={ref}
      className={`relative min-h-screen py-24 ${className}`}
      style={{ position: 'relative' }}
    >
      <div className={`container mx-auto px-4 relative ${containerClassName}`}>
        {title && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 gradient-text ${titleClassName}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto ${subtitleClassName}`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;