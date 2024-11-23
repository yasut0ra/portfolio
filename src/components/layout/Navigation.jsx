import { motion } from 'framer-motion';
import { useState } from 'react';
import { NAV_ITEMS } from '../../constants/navigation';
import { menuVariants, itemVariants, hoverScale } from '../../constants/animations';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // デスクトップナビゲーションアイテム
  const NavItem = ({ name, path }) => (
    <motion.a
      key={name}
      href={path}
      {...hoverScale}
      className="relative group text-lg"
    >
      <span className="text-gray-800 dark:text-gray-200">
        {name}
      </span>
      <span className="absolute -bottom-2 left-0 w-0 h-0.5 
                     bg-gradient-to-r from-primary-500 to-secondary-500 
                     group-hover:w-full transition-all duration-300" />
    </motion.a>
  );

  // モバイルナビゲーションアイテム
  const MobileNavItem = ({ name, path }) => (
    <motion.a
      key={name}
      href={path}
      variants={itemVariants}
      onClick={() => setIsOpen(false)}
      className="block text-center text-lg py-3 
               text-gray-800 dark:text-gray-200
               hover:text-primary-500 dark:hover:text-primary-400
               transition-colors"
    >
      {name}
    </motion.a>
  );

  return (
    <>
      {/* デスクトップナビゲーション */}
      <nav className="hidden md:flex items-center space-x-12">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.name} {...item} />
        ))}
      </nav>

      {/* モバイルナビゲーション */}
      <div className="md:hidden">
        <motion.button
          {...hoverScale}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-800 dark:text-gray-200"
          aria-label="メニュー"
        >
          <i className={`fas fa-${isOpen ? 'times' : 'bars'} text-2xl`} />
        </motion.button>

        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className={`absolute top-full left-0 w-full 
                     bg-white/95 dark:bg-gray-900/95 
                     backdrop-blur-lg shadow-lg 
                     ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className="container mx-auto py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <MobileNavItem key={item.name} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}