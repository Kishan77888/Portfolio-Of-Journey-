import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device has mouse/pointer rather than pure touch
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible((prev) => (prev ? prev : true));
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('clickable')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Target Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-cyan-400 mix-blend-screen"
        animate={{
          x: mousePosition.x - (isHovered ? 6 : 4),
          y: mousePosition.y - (isHovered ? 6 : 4),
          width: isHovered ? 12 : 8,
          height: isHovered ? 12 : 8,
          scale: isClicking ? 0.7 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.1 }}
      />

      {/* Outer Tactical Reticle / Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-cyan-400/50"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          scale: isClicking ? 1.3 : isHovered ? 1.15 : 1,
          borderColor: isHovered ? 'rgba(168, 85, 247, 0.8)' : 'rgba(0, 240, 255, 0.4)',
          backgroundColor: isHovered ? 'rgba(168, 85, 247, 0.08)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.3 }}
      />
    </>
  );
};
