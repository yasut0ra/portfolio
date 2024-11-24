import { useScroll, useTransform, useReducedMotion } from "framer-motion";

export function useScrollAnimation(ref) {
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false
  });

  if (prefersReducedMotion) {
    return {
      scrollYProgress,
      fadeIn: { opacity: 1, y: 0 },
      cyberLine: { scaleY: 1, opacity: 0.8 },
      createHorizontalLineAnimation: () => ({ scaleX: 1, opacity: 1 }),
      createGlowAnimation: () => ({ scale: 1, opacity: 1 }),
      createDataFlowAnimation: () => ({ top: "0%", opacity: 1 })
    };
  }

  const fadeIn = {
    opacity: useTransform(
      scrollYProgress,
      [0, 0.2, 0.3],
      [0, 1, 1]
    ),
    y: useTransform(
      scrollYProgress,
      [0, 0.2, 0.3],
      [50, 0, 0]
    )
  };

  const cyberLine = {
    scaleY: useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [0, 1, 0]
    ),
    opacity: useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [0, 1, 0]
    )
  };

  const createHorizontalLineAnimation = (delay = 0) => ({
    scaleX: useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [0, 1, 0]
    ),
    opacity: useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [0, 1, 0]
    )
  });

  const createGlowAnimation = (delay = 0) => ({
    scale: useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [0.5, 1.2, 0.5]
    ),
    opacity: useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [0, 1, 0]
    )
  });

  const createDataFlowAnimation = (index) => ({
    top: useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [`${-20 + index * 50}%`, `${50 + index * 50}%`, `${100 + index * 50}%`]
    ),
    opacity: useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [0, 1, 0]
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
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

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