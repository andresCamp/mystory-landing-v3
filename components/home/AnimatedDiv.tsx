'use client'
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedDiv = () => {
  const controls = useAnimation();
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    // This updates the viewport height value whenever the window is resized
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // Start the animation
    controls.start({ y: -(viewportHeight * 0.75) });

    return () => window.removeEventListener('resize', handleResize);
  }, [controls, viewportHeight]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      style={{ width: 100, height: 100, background: 'blue' }}
    />
  );
};

export default AnimatedDiv;
