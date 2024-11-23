export const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };
  
  export const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };
  
  export const hoverScale = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };