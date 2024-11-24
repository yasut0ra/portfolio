import { useScroll, useTransform } from "framer-motion";

export function useScrollAnimation(ref) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // 要素が画面に入る前から出るまでを監視
  });

  // フェードインアニメーションの調整
  const fadeIn = {
    opacity: useTransform(
      scrollYProgress, 
      [0, 0.2], // スクロール範囲を短く
      [0.3, 1]  // 最小透明度を0.3に設定
    ),
    y: useTransform(
      scrollYProgress, 
      [0, 0.2], 
      [50, 0]   // 移動距離を控えめに
    ),
  };

  // サイバーラインのアニメーション調整
  const cyberLine = {
    scaleY: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
    opacity: useTransform(
      scrollYProgress, 
      [0, 0.1, 0.9, 1], 
      [0, 0.8, 0.8, 0] // 最大透明度を0.8に
    )
  };

  // 水平ラインのアニメーション
  const createHorizontalLineAnimation = (startProgress) => ({
    scaleX: useTransform(
      scrollYProgress,
      [startProgress - 0.2, startProgress, startProgress + 0.2],
      [0, 1, 1]
    ),
    opacity: useTransform(
      scrollYProgress,
      [startProgress - 0.2, startProgress, startProgress + 0.2],
      [0, 1, 0]
    )
  });

  // グロー効果のアニメーション
  const createGlowAnimation = (startProgress) => ({
    scale: useTransform(
      scrollYProgress,
      [startProgress - 0.2, startProgress, startProgress + 0.2],
      [0.5, 1.5, 0.5]
    ),
    opacity: useTransform(
      scrollYProgress,
      [startProgress - 0.2, startProgress, startProgress + 0.2],
      [0, 1, 0]
    )
  });

  // データフロー効果のアニメーション関数を追加
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

// アニメーションバリアントをより動的に
export const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9], // カスタムイージング
      staggerChildren: 0.1 // 子要素のアニメーションを連続的に
    }
  }
};

// サイバーエフェクト用のバリアントも調整
export const cyberVariants = {
  hidden: { 
    opacity: 0.3,  // 初期透明度を上げる
    scale: 0.95,
    filter: "blur(5px)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};