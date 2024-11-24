import { motion } from "framer-motion";
import { useRef } from "react";
import { useScrollAnimation } from "./useAnimations";

export default function CyberLines() {
  const ref = useRef(null);
  const {
    scrollYProgress,
    cyberLine,
    createHorizontalLineAnimation,
    createGlowAnimation,
    createDataFlowAnimation
  } = useScrollAnimation(ref);

  // 背景ドットの数を増やし、サイズをより多様に
  const backgroundDots = Array.from({ length: 50 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 4, // より多様なサイズ
    duration: 20 + Math.random() * 40, // よりゆっくりな動き
    delay: Math.random() * 10 // 動きのタイミングをずらす
  }));


  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* 背景グロー効果 - 両サイドに */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 10% 50%, var(--tw-gradient-from), transparent 40%), radial-gradient(circle at 90% 50%, var(--tw-gradient-to), transparent 40%)',
        }}
      />

      {/* 浮遊する背景ドット */}
      {backgroundDots.map((dot, index) => (
        <motion.div
          key={`dot-${index}`}
          className="absolute rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            background: index % 2 === 0 ? 'var(--tw-gradient-from)' : 'var(--tw-gradient-to)',
            opacity: 0.3
          }}
          animate={{
            x: [0, 30, 0, -30, 0],
            y: [0, 20, -20, 20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* 垂直ライン - 左右対称に */}
      {[10, 90].map((position) => (
        <motion.div
          key={`vline-${position}`}
          className="absolute top-0 w-[2px] h-full"
          style={{
            left: `${position}%`,
            background: position < 50 
              ? 'linear-gradient(180deg, transparent, var(--tw-gradient-from) 40%, var(--tw-gradient-from) 60%, transparent)'
              : 'linear-gradient(180deg, transparent, var(--tw-gradient-to) 40%, var(--tw-gradient-to) 60%, transparent)',
            boxShadow: position < 50 
              ? '0 0 15px var(--tw-gradient-from)'
              : '0 0 15px var(--tw-gradient-to)',
            ...cyberLine
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: position < 50 ? 'var(--tw-gradient-from)' : 'var(--tw-gradient-to)',
              opacity: 0.5
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      ))}

      {/* 水平接続ライン - 左右対称に */}
      {[0.2, 0.4, 0.6, 0.8].map((progress) => (
        <>
          <motion.div
            key={`hline-left-${progress}`}
            className="absolute h-[2px]"
            style={{
              left: '10%',
              width: '40%',
              top: `${progress * 100}%`,
              background: 'linear-gradient(90deg, var(--tw-gradient-from), transparent)',
              ...createHorizontalLineAnimation(progress)
            }}
          />
          <motion.div
            key={`hline-right-${progress}`}
            className="absolute h-[2px]"
            style={{
              right: '10%',
              width: '40%',
              top: `${progress * 100}%`,
              background: 'linear-gradient(-90deg, var(--tw-gradient-to), transparent)',
              ...createHorizontalLineAnimation(progress)
            }}
          />
        </>
      ))}

      {/* データフローパーティクル - 両サイドに */}
      {[...Array(8)].map((_, index) => (
        <>
          <motion.div
            key={`data-left-${index}`}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${10 + Math.random() * 5}%`,
              background: 'var(--tw-gradient-from)',
              boxShadow: '0 0 8px var(--tw-gradient-from)',
              ...createDataFlowAnimation(index)
            }}
          >
            <motion.div
              className="absolute top-0 left-1/2 w-[1px] h-8 -translate-x-1/2"
              style={{
                background: 'linear-gradient(to bottom, var(--tw-gradient-from), transparent)',
                opacity: 0.3
              }}
            />
          </motion.div>
          <motion.div
            key={`data-right-${index}`}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              right: `${10 + Math.random() * 5}%`,
              background: 'var(--tw-gradient-to)',
              boxShadow: '0 0 8px var(--tw-gradient-to)',
              ...createDataFlowAnimation(index)
            }}
          >
            <motion.div
              className="absolute top-0 left-1/2 w-[1px] h-8 -translate-x-1/2"
              style={{
                background: 'linear-gradient(to bottom, var(--tw-gradient-to), transparent)',
                opacity: 0.3
              }}
            />
          </motion.div>
        </>
      ))}
    </div>
  );
}