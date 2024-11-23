import { motion } from 'framer-motion';
import Navigation from './Navigation';
import { useDarkMode } from '../../hooks/useDarkMode';

const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

export default function Header() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <header className="fixed w-full backdrop-blur-lg bg-white/75 dark:bg-gray-900/75 z-50">
      <div className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="gradient-text text-4xl lg:text-5xl font-bold"
          >
            Portfolio
          </motion.h1>
          
          <Navigation />
          
          <motion.button
            {...hoverScale}
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 
                     hover:ring-4 ring-primary-500/30 transition-all"
          >
            {darkMode ? (
              <i className="fas fa-sun text-2xl text-yellow-500" />
            ) : (
              <i className="fas fa-moon text-2xl text-primary-600" />
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
}