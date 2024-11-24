import { useScroll, useTransform } from "framer-motion";

export function useScrollAnimation(ref) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // 基本的なフェードインアニメーション
  const fadeIn = {
    opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
    y: useTransform(scrollYProgress, [0, 0.2], [50, 0])
  };

  // サイバーラインのアニメーション
  const cyberLine = {
    scaleY: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
    opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  };

  // 水平ラインのアニメーション生成関数
  const createHorizontalLineAnimation = (startProgress) => ({
    scaleX: useTransform(
      scrollYProgress,
      [startProgress - 0.1, startProgress, startProgress + 0.1],
      [0, 1, 1]
    ),
    opacity: useTransform(
      scrollYProgress,
      [startProgress - 0.1, startProgress, startProgress + 0.1],
      [0, 1, 0]
    )
  });

  // グロー効果のアニメーション生成関数
  const createGlowAnimation = (startProgress) => ({
    scale: useTransform(
      scrollYProgress,
      [startProgress - 0.1, startProgress, startProgress + 0.1],
      [0.5, 1.5, 0.5]
    ),
    opacity: useTransform(
      scrollYProgress,
      [startProgress - 0.1, startProgress, startProgress + 0.1],
      [0, 1, 0]
    )
  });

  // データフロー効果のアニメーション
  const createDataFlowAnimation = (index) => ({
    top: useTransform(
      scrollYProgress,
      [0, 1],
      [`${-20 + index * 50}%`, `${100 + index * 50}%`]
    ),
    opacity: useTransform(
      scrollYProgress,
      [0, 0.2, 0.8, 1],
      [0, 1, 1, 0]
    )
  });

  return {
    scrollYProgress,
    fadeIn,
    cyberLine,
    createHorizontalLineAnimation,
    createGlowAnimation,
    createDataFlowAnimation
  };
}

// セクション間のトランジション用のバリアント
export const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// サイバーエフェクト用のバリアント
export const cyberVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};