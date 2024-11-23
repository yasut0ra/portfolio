import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';

export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null);
  const [hovering, setHovering] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function onMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        x.set(0);
        y.set(0);
      }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
      className={className}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          scale: useSpring(hovering ? 1.1 : 1, springConfig)
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}