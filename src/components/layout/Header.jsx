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
            className="relative group p-3 rounded-full 
                     bg-gray-100 dark:bg-gray-800 
                     hover:ring-4 ring-primary-500/30 
                     transition-all duration-300"
            aria-label={darkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
          >
            <motion.div
              initial={false}
              animate={{ rotate: darkMode ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-7 h-7 relative"
            >
              {/* Sun Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                className={`w-7 h-7 absolute transition-all duration-300
                          stroke-yellow-500
                          ${darkMode ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" 
                />
              </svg>

              {/* Moon Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                className={`w-7 h-7 absolute transition-all duration-300
                          stroke-blue-500
                          ${darkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" 
                />
              </svg>
            </motion.div>

            {/* Tooltip */}
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2
                         bg-gray-900 dark:bg-white text-white dark:text-gray-900
                         px-3 py-1 rounded-lg text-sm whitespace-nowrap
                         opacity-0 group-hover:opacity-100 
                         transition-opacity duration-200
                         pointer-events-none">
              {darkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
            </span>
          </motion.button>
        </div>
      </div>
    </header>
  );
}