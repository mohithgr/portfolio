'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const LetterTracingAnimation = () => {
  const [pathData, setPathData] = useState([]);
  const svgRef = useRef(null);
  const controls = useAnimation();
  const [lettersVisible, setLettersVisible] = useState(false);

  // This would be better done in a real SVG editor to get precise paths
  const name = "Mohith G R";
  const letterPaths = [
    // M - These are simplified path data for demonstration
    "M 0,50 L 0,0 L 30,0 L 30,25 L 15,25 L 15,50 Z",
    // o
    "M 40,25 a 15,15 0 1 0 30,0 a 15,15 0 1 0 -30,0 Z",
    // h
    "M 80,0 L 80,50 L 95,50 L 95,25 L 110,25 L 110,50 L 125,50 L 125,0 L 110,0 L 110,20 L 95,20 L 95,0 Z",
    // i
    "M 135,0 L 150,0 L 150,35 L 135,35 M 140,40 a 5,5 0 1 0 10,0 a 5,5 0 1 0 -10,0 Z",
    // t
    "M 165,0 L 180,0 L 180,35 L 195,35 L 195,50 L 165,50 L 165,35 L 175,35 L 175,15 L 165,15 Z",
    // h
    "M 205,0 L 205,50 L 220,50 L 220,25 L 235,25 L 235,50 L 250,50 L 250,0 L 235,0 L 235,20 L 220,20 L 220,0 Z",
    // (space)
    "",
    // G
    "M 280,10 a 20,20 0 0 1 20,20 a 20,20 0 0 1 -20,20 L 280,30 L 300,30 Z",
    // (space)
    "",
    // R
    "M 320,0 L 320,50 L 340,50 a 15,15 0 0 0 0,-30 L 320,20 L 340,20 L 355,0 Z"
  ];

  useEffect(() => {
    // Combine all paths into one for the fish to follow
    const combinedPath = letterPaths.join(' ');
    setPathData(letterPaths.filter(p => p)); // Filter out empty paths (spaces)

    // Animate fish along the path
    const animateFish = async () => {
      await controls.start({
        opacity: [0, 1],
        transition: { duration: 0.5 }
      });

      // Animate along the combined path
      await controls.start({
        pathLength: [0, 1],
        transition: {
          duration: 3,
          ease: "linear"
        }
      });

      // Make letters visible after tracing
      setLettersVisible(true);
      await controls.start({
        opacity: 0,
        transition: { duration: 0.5 }
      });
    };

    animateFish();
  }, []);

  return (
    <div className="relative h-[100px] w-[400px]">
      {/* SVG with text converted to paths */}
      <svg 
        ref={svgRef} 
        viewBox="0 0 400 100" 
        className="w-full h-full"
        style={{ opacity: lettersVisible ? 1 : 0.3 }}
      >
        {/* Combined path for the fish to follow (hidden) */}
        <path
          id="text-path"
          d={letterPaths.join(' ')}
          fill="none"
          stroke="transparent"
        />
        
        {/* Individual letter paths (visible after animation) */}
        {lettersVisible && letterPaths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="white"
            stroke="none"
          />
        ))}
        
        {/* Fish animated along the path */}
        <motion.g
          animate={controls}
          style={{
            pathLength: 0,
            opacity: 0
          }}
        >
          <motion.path
            d="M0,0 C5,-5 5,5 0,0 C-5,5 -5,-5 0,0 Z"
            fill="#FF6B6B"
            transform="translate(0,0) rotate(0)"
            style={{
              motionPath: {
                path: "#text-path",
                align: "#text-path",
                offsetPath: "path('" + letterPaths.join(' ') + "')",
              }
            }}
          />
        </motion.g>
      </svg>
      
      {/* Alternative approach using motion.path for the fish */}
      {!lettersVisible && (
        <svg viewBox="0 0 400 100" className="absolute top-0 left-0 w-full h-full">
          <motion.path
            d={letterPaths.join(' ')}
            fill="none"
            stroke="transparent"
            strokeWidth="2"
          />
          <motion.g
            style={{
              x: 0,
              y: 0,
              originX: 0,
              originY: 0,
            }}
            animate={{
              x: [0, 400],
              y: [50, 50],
            }}
            transition={{
              duration: 3,
              ease: "linear",
            }}
          >
            <path
              d="M0,0 C5,-5 5,5 0,0 C-5,5 -5,-5 0,0 Z"
              fill="#FF6B6B"
            />
          </motion.g>
        </svg>
      )}
    </div>
  );
};

export default LetterTracingAnimation;