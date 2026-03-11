// 'use client';

// import React, { useMemo, useEffect, useState } from 'react';
// import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// const Jellyfish = ({
//   left = '50%',
//   bottom = '12vh',
//   scale = 1,
//   color = '#FFD1DC',
//   delay = 0,
// }: {
//   left?: string;
//   bottom?: string;
//   scale?: number;
//   color?: string;
//   delay?: number;
// }) => {
//   const xMotion = useMotionValue(0);
//   const yMotion = useMotionValue(0);

//   const smoothX = useSpring(xMotion, { damping: 15, stiffness: 100 });
//   const smoothY = useSpring(yMotion, { damping: 15, stiffness: 100 });

//   // Mouse position tracking
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const centerX = window.innerWidth / 2;
//       const centerY = window.innerHeight / 2;
//       const offsetX = (e.clientX - centerX) / centerX; // -1 to 1
//       const offsetY = (e.clientY - centerY) / centerY;

//       xMotion.set(offsetX * 10); // Max 10px sideways
//       yMotion.set(offsetY * 5);  // Max 5px vertical drift
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [xMotion, yMotion]);

//   return (
//     <motion.div
//       className="absolute z-30 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
//       style={{
//         left,
//         bottom,
//         transform: `scale(${scale})`,
//         x: smoothX,
//         y: smoothY,
//       }}
//       transition={{ delay }}
//     >
//       <svg width="80" height="120" viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg">
//         {/* Jellyfish Head */}
//         <path
//           d="M40 0 C20 0, 0 40, 0 60 Q0 65, 10 65 H70 Q80 65, 80 60 C80 40, 60 0, 40 0"
//           fill={color}
//         />
//         {/* Tentacles */}
//         <g stroke={color} strokeWidth="3" strokeLinecap="round" fill="none">
//           <path d="M20 65 C15 80, 25 95, 20 110" />
//           <path d="M30 65 C25 85, 35 90, 30 110" />
//           <path d="M40 65 C40 90, 40 90, 40 110" />
//           <path d="M50 65 C55 85, 45 95, 50 110" />
//           <path d="M60 65 C65 80, 55 95, 60 110" />
//         </g>
//       </svg>
//     </motion.div>
//   );
// };

// export default Jellyfish;


// 'use client';

// import React, { useEffect } from 'react';
// import { motion, useMotionValue, useSpring } from 'framer-motion';

// const Jellyfish = ({
//   left = '50%',
//   bottom = '12vh',
//   scale = 1,
//   color = '#FFD1DC',
//   delay = 0,
//   reverse = false, // new prop
// }: {
//   left?: string;
//   bottom?: string;
//   scale?: number;
//   color?: string;
//   delay?: number;
//   reverse?: boolean;
// }) => {
//   const xMotion = useMotionValue(0);
//   const yMotion = useMotionValue(0);

//   const smoothX = useSpring(xMotion, { damping: 15, stiffness: 100 });
//   const smoothY = useSpring(yMotion, { damping: 15, stiffness: 100 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const centerX = window.innerWidth / 2;
//       const centerY = window.innerHeight / 2;
//       let offsetX = (e.clientX - centerX) / centerX; // -1 to 1
//       let offsetY = (e.clientY - centerY) / centerY;

//       if (reverse) {
//         offsetX *= -1;
//         offsetY *= -1;
//       }

//       xMotion.set(offsetX * 10); // Max 10px movement
//       yMotion.set(offsetY * 5);  // Max 5px movement
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [xMotion, yMotion, reverse]);

//   return (
//     <motion.div
//       className="absolute z-30 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
//       style={{
//         left,
//         bottom,
//         transform: `scale(${scale})`,
//         x: smoothX,
//         y: smoothY,
//       }}
//       transition={{ delay }}
//     >
//       <svg width="80" height="120" viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg">
//         <path
//           d="M40 0 C20 0, 0 40, 0 60 Q0 65, 10 65 H70 Q80 65, 80 60 C80 40, 60 0, 40 0"
//           fill={color}
//         />
//         <g stroke={color} strokeWidth="3" strokeLinecap="round" fill="none">
//           <path d="M20 65 C15 80, 25 95, 20 110" />
//           <path d="M30 65 C25 85, 35 90, 30 110" />
//           <path d="M40 65 C40 90, 40 90, 40 110" />
//           <path d="M50 65 C55 85, 45 95, 50 110" />
//           <path d="M60 65 C65 80, 55 95, 60 110" />
//         </g>
//       </svg>
//     </motion.div>
//   );
// };

// export default Jellyfish;


// 'use client';

// import React, { useEffect } from 'react';
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useAnimation,
//   useTransform,
// } from 'framer-motion';

// const Jellyfish = ({
//   left = '50%',
//   bottom = '12vh',
//   scale = 1,
//   color = '#FFD1DC',
//   delay = 0,
//   reverse = false,
// }: {
//   left?: string;
//   bottom?: string;
//   scale?: number;
//   color?: string;
//   delay?: number;
//   reverse?: boolean;
// }) => {
//   const xMotion = useMotionValue(0);
//   const yMotion = useMotionValue(0);

//   const smoothX = useSpring(xMotion, { damping: 15, stiffness: 100 });
//   const smoothY = useSpring(yMotion, { damping: 15, stiffness: 100 });

//   const controls = useAnimation();

//   // Idle swaying animation
//   useEffect(() => {
//     controls.start({
//       x: [0, 10, -10, 0],
//       y: [0, -10, 0, 5, 0],
//       transition: {
//         duration: 10,
//         repeat: Infinity,
//         ease: 'easeInOut',
//       },
//     });
//   }, [controls]);

//   // Mouse influence layer (small offset on top of idle motion)
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const centerX = window.innerWidth / 2;
//       const centerY = window.innerHeight / 2;
//       let offsetX = (e.clientX - centerX) / centerX; // -1 to 1
//       let offsetY = (e.clientY - centerY) / centerY;

//       if (reverse) {
//         offsetX *= -1;
//         offsetY *= -1;
//       }

//       xMotion.set(offsetX * 10); // Max 10px influence
//       yMotion.set(offsetY * 5);  // Max 5px influence
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [xMotion, yMotion, reverse]);

//   return (
//     <motion.div
//       className="absolute z-30 pointer-events-none drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
//       style={{
//         left,
//         bottom,
//         transform: `scale(${scale})`,
//         translateX: smoothX,
//         translateY: smoothY,
//       }}
//       animate={controls}
//       transition={{ delay }}
//     >
//       <svg width="80" height="120" viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg">
//         {/* Jellyfish Head */}
//         <path
//           d="M40 0 C20 0, 0 40, 0 60 Q0 65, 10 65 H70 Q80 65, 80 60 C80 40, 60 0, 40 0"
//           fill={color}
//         />
//         {/* Tentacles */}
//         <g stroke={color} strokeWidth="3" strokeLinecap="round" fill="none">
//           <path d="M20 65 C15 80, 25 95, 20 110" />
//           <path d="M30 65 C25 85, 35 90, 30 110" />
//           <path d="M40 65 C40 90, 40 90, 40 110" />
//           <path d="M50 65 C55 85, 45 95, 50 110" />
//           <path d="M60 65 C65 80, 55 95, 60 110" />
//         </g>
//       </svg>
//     </motion.div>
//   );
// };

// export default Jellyfish;

'use client';

import React, { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useAnimationFrame,
} from 'framer-motion';

const Jellyfish = ({
  left = '50%',
  bottom = '12vh',
  scale = 1,
  color = '#FFD1DC',
  delay = 0,
  reverse = false,
}: {
  left?: string;
  bottom?: string;
  scale?: number;
  color?: string;
  delay?: number;
  reverse?: boolean;
}) => {
  // Cursor influence
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { damping: 15, stiffness: 100 });
  const springY = useSpring(cursorY, { damping: 15, stiffness: 100 });

  // Final output values
  const finalX = useMotionValue(0);
  const finalY = useMotionValue(0);

  // Randomized idle motion values
  const idlePhase = useRef(Math.random() * Math.PI * 2);
  const idleSpeed = useRef(0.0015 + Math.random() * 0.0025);
  const idleAmpX = useRef(4 + Math.random() * 5);
  const idleAmpY = useRef(4 + Math.random() * 5);
  const idleOffset = useRef(Math.random() * 5000);

  // Mouse listener
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      let x = (e.clientX - centerX) / centerX;
      let y = (e.clientY - centerY) / centerY;

      if (reverse) {
        x *= -1;
        y *= -1;
      }

      cursorX.set(x * 10);
      cursorY.set(y * 6);
    };

    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, [reverse]);

  // Animation frame loop
  useAnimationFrame((t) => {
    const time = t + idleOffset.current;
    const idleX = Math.sin(time * idleSpeed.current + idlePhase.current) * idleAmpX.current;
    const idleY = Math.cos(time * idleSpeed.current + idlePhase.current * 1.3) * idleAmpY.current;

    finalX.set(springX.get() + idleX);
    finalY.set(springY.get() + idleY);
  });

  return (
    <motion.div
      className="absolute z-30 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
      style={{
        left,
        bottom,
        scale,
        x: finalX,
        y: finalY,
      }}
      transition={{ delay }}
    >
      <svg
        width="80"
        height="120"
        viewBox="0 0 80 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 0 C20 0, 0 40, 0 60 Q0 65, 10 65 H70 Q80 65, 80 60 C80 40, 60 0, 40 0"
          fill={color}
        />
        <g stroke={color} strokeWidth="3" strokeLinecap="round" fill="none">
          <path d="M20 65 C15 80, 25 95, 20 110" />
          <path d="M30 65 C25 85, 35 90, 30 110" />
          <path d="M40 65 C40 90, 40 90, 40 110" />
          <path d="M50 65 C55 85, 45 95, 50 110" />
          <path d="M60 65 C65 80, 55 95, 60 110" />
        </g>
      </svg>
    </motion.div>
  );
};

export default Jellyfish;


