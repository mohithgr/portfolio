'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PalmTree = ({ position = 'left-10', trunkHeight = 300 }) => {
  const leaves = Array.from({ length: 8 });

  const swayAnimation = {
    animate: {
      rotate: [-3, 3, -3],
      y: [0, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className={`absolute bottom-28 ${position} flex flex-col items-center origin-bottom z-40`}
      {...swayAnimation}
    >
      {/* Trunk */}
      <div className="relative">
        <div
          className="w-4 bg-gradient-to-b from-amber-800 to-amber-900 rounded-sm shadow-md origin-bottom"
          style={{
            height: `${trunkHeight}px`,
            transform: 'rotate(5deg)', // simulates bending
          }}
        >
          {/* Trunk texture */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_25%,rgba(0,0,0,0.1)_25%,rgba(0,0,0,0.1)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.1)_75%)] bg-[length:10px_10px] opacity-30" />

          {/* Trunk rings */}
          {Array.from({ length: Math.floor(trunkHeight / 15) }).map((_, i) => (
            <div
              key={i}
              className="absolute w-5 h-1 bg-amber-700 rounded-full left-1/2 -translate-x-1/2"
              style={{ bottom: `${i * 15}px` }}
            />
          ))}
        </div>

        {/* Leaf cluster */}
       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[50%] w-56 h-56">
          <div className="absolute left-[17.5vh] top-1/2 w-3 h-3 bg-amber-800 rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />

          {leaves.map((_, i) => {
            const angle = i * (360 / leaves.length);
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: 'center',
                }}
              >
                <div
                  className="bg-gradient-to-r from-green-700 to-green-500"
                  style={{
                    width: '60px',
                    height: '8px',
                    borderTopLeftRadius: '100% 100%',
                    borderBottomLeftRadius: '100% 100%',
                    clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%)',
                    transform: 'rotate(20deg) skewY(10deg)',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default PalmTree;
