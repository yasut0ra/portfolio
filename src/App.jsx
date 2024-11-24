import { useDarkMode } from './hooks/useDarkMode';
import Header from './components/layout/Header';
// Aboutのインポートパスを更新
import About from './components/about'; // ./components/About から変更
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollProgress from './components/common/ScrollProgress';
import ParticlesBackground from './components/common/ParticlesBackground';
import CustomCursor from './components/common/CustomCursor';

export default function App() {
  const [darkMode] = useDarkMode();

  return (
    <AnimatePresence>
      <div className={darkMode ? 'dark' : ''}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen gradient-bg"  // クラスを共通化
        >
          <Header />
          
          <motion.main 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="container pt-28"  // containerクラスを追加
          >
            <About />
            <Projects />
            <Contact />
          </motion.main>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-3 rounded-full 
                     bg-primary-500 text-white shadow-lg 
                     hover:shadow-xl transition-all duration-300"
          >
            <i className="fas fa-arrow-up text-xl" />
          </motion.button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}