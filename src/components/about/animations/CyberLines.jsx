import { motion } from "framer-motion";
import { useScrollAnimation } from "./useAnimations";
import { useRef } from "react";

export default function CyberLines() {
  const ref = useRef(null);
  const {
    cyberLine,
    createHorizontalLineAnimation,
    createGlowAnimation,
    createDataFlowAnimation
  } = useScrollAnimation(ref);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none">
      {/* Main Vertical Line */}
      <motion.div
        className="absolute left-[10%] top-0 w-[2px] h-full"
        style={{
          background: 'linear-gradient(180deg, transparent, var(--tw-gradient-from), transparent)',
          ...cyberLine
        }}
      />

      {/* Horizontal Lines */}
      {[0.2, 0.4, 0.6, 0.8].map((progress) => (
        <motion.div
          key={progress}
          className="absolute left-[10%] h-[2px]"
          style={{
            width: '15%',
            top: `${progress * 100}%`,
            background: 'linear-gradient(90deg, var(--tw-gradient-from), transparent)',
            ...createHorizontalLineAnimation(progress)
          }}
        />
      ))}

      {/* Glowing Dots */}
      {[0.2, 0.4, 0.6, 0.8].map((progress) => (
        <motion.div
          key={`dot-${progress}`}
          className="absolute left-[10%] w-3 h-3 -translate-x-1/2 -translate-y-1/2"
          style={{
            top: `${progress * 100}%`,
            background: 'var(--tw-gradient-from)',
            boxShadow: '0 0 20px var(--tw-gradient-from)',
            borderRadius: '50%',
            ...createGlowAnimation(progress)
          }}
        />
      ))}

      {/* Data Flow Effect */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`data-${index}`}
          className="absolute left-[10%] w-1 h-1 rounded-full"
          style={{
            background: 'var(--tw-gradient-from)',
            boxShadow: '0 0 10px var(--tw-gradient-from)',
            ...createDataFlowAnimation(index)
          }}
        />
      ))}
    </div>
  );
}