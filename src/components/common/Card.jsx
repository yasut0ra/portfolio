import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: { 
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const Card = forwardRef(({ 
  children, 
  className = '', 
  variant = 'default',
  isHoverable = true,
  isAnimated = true,
  role = "article",
  ...props 
}, ref) => {
  const baseStyles = "rounded-2xl backdrop-blur-md transition-all duration-300";
  
  const variants = {
    default: "bg-white/80 dark:bg-gray-800/80 shadow-lg hover:shadow-xl",
    gradient: "bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 shadow-lg hover:shadow-xl",
    outline: "border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500",
    minimal: "bg-gray-50 dark:bg-gray-800/50"
  };

  return (
    <motion.div
      ref={ref}
      role={role}
      variants={isAnimated ? cardVariants : undefined}
      initial={isAnimated ? "hidden" : false}
      whileInView={isAnimated ? "visible" : undefined}
      whileHover={isHoverable ? "hover" : undefined}
      viewport={{ once: true, margin: "-50px" }}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = 'Card';

export default Card;