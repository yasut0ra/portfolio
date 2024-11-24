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
      {/* 3Dグリッド効果 */}
      <motion.div
        className="absolute inset-0"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`grid-${i}`}
            className="absolute inset-0 border-2 border-primary-500/20"
            style={{
              transform: `translateZ(${-i * 100}px)`,
              rotateX: "60deg"
            }}
            animate={{
              rotateZ: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>

      {/* エネルギーパルス */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at center, var(--tw-gradient-from) 0%, transparent 10%)",
            "radial-gradient(circle at center, var(--tw-gradient-from) 0%, transparent 50%)",
            "radial-gradient(circle at center, var(--tw-gradient-from) 0%, transparent 10%)"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* DNAらせん構造 */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`dna-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: "50%",
            background: i % 2 ? "var(--tw-gradient-from)" : "var(--tw-gradient-to)"
          }}
          animate={{
            y: [i * 30, i * 30 + 300],
            x: [Math.sin(i) * 50, Math.cos(i) * 50],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}

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

      {/* 3D浮遊する六角形 */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`hex-${i}`}
          className="absolute"
          style={{
            width: 100 + Math.random() * 50,
            height: 100 + Math.random() * 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            className="w-full h-full relative"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              background: `linear-gradient(45deg, var(--tw-gradient-from)/${10 + i * 5}, var(--tw-gradient-to)/${5 + i * 5})`,
              boxShadow: "0 0 20px rgba(var(--primary-500), 0.1)",
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      ))}

      {/* ホログラム風プロジェクション */}
      <motion.div
        className="absolute left-[5%] top-[30%]"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`hologram-${i}`}
            className="absolute w-64 h-64"
            style={{
              border: `2px solid var(--tw-gradient-from)/${20 + i * 10}`,
              transformStyle: "preserve-3d",
              transform: `translateZ(${i * 50}px)`,
            }}
            animate={{
              rotateY: [0, 360],
              rotateX: [30, -30],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          >
            {/* ホログラムのスキャンライン */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(transparent, var(--tw-gradient-from)/${10 + i * 5}, transparent)`,
              }}
              animate={{
                y: [-100, 100],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}