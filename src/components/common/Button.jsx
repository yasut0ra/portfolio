import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  type = "button",
  variant = "primary", 
  size = "md",
  isFullWidth = false,
  disabled = false,
  className = "",
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all";
  
  const variants = {
    primary: "bg-primary-500 text-white hover:bg-primary-600 disabled:bg-primary-300",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${isFullWidth ? 'w-full' : ''}
        ${disabled ? 'cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}