import { motion } from "framer-motion";
import { cyberVariants } from "../about/animations/useAnimations";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      {/* ナビゲーションバー - 固定位置 */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <Navigation />
        </div>
      </div>

      {/* ヘッダーコンテンツ */}
      <div className="min-h-[60vh] flex flex-col justify-center items-center relative mt-20">
        {/* 背景エフェクト */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-primary-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-[40rem] h-[40rem] bg-secondary-500/30 rounded-full blur-3xl" />
        </div>

        {/* メインコンテンツ */}
        <motion.div
          variants={cyberVariants}
          initial="hidden"
          animate="visible"
          className="text-center relative z-10 space-y-8 px-4"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            エンジニアとしての私の経験、スキル、そして目指す方向性をご紹介します
          </motion.p>

          {/* スクロールインジケーター */}
          <motion.div
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5
            }}
          >
            <div className="w-8 h-12 border-2 border-primary-500 rounded-full p-1">
              <div className="w-2 h-3 bg-primary-500 rounded-full mx-auto animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}