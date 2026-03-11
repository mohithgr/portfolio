'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import TreasureChest from './TreasureChest';
import Jellyfish from './Jellyfish';

// Bigger swaying and vertical drift
const getCoralMotion = (rotateRange: number = 6, yRange: number = 10) => ({
  initial: { rotate: 0, y: 0 },
  animate: {
    rotate: [-rotateRange, rotateRange, -rotateRange],
    y: [0, -yRange, 0],
    transition: {
      duration: 7 + Math.random() * 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
});


const FloatingAlgae = ({
  color = '#FF7043',
  right,
  left,
  bottom = '0vh',
  scale = 1,
  delay = 0,
}: {
  color?: string;
  right?: string;
  left?: string;
  bottom?: string;
  scale?: number;
  delay?: number;
}) => {
  const motionConfig = useMemo(() => getCoralMotion(3, 4), []);

  return (
    <motion.div
      className="absolute z-20"
      style={{ right,left, bottom, transform: `scale(${scale})` }}
      variants={motionConfig}
      initial="initial"
      animate="animate"
      transition={{ delay }}
    >
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g fill={color}>
          <circle cx="30" cy="70" r="10" />
          <circle cx="50" cy="60" r="12" />
          <circle cx="70" cy="75" r="9" />
        </g>
      </svg>
    </motion.div>
  );
};


const BushCluster = ({
  color = '#66BB6A',
  left,
  delay = 0,
  scale = 1,
  bottom = '0px',
}: {
  color?: string;
  left: string;
  delay?: number;
  scale?: number;
  bottom?: string;
}) => {
  const motionConfig = useMemo(() => getCoralMotion(3, 6), []);

  return (
    <motion.div
      className="absolute z-20"
      style={{
        left,
        bottom,
        transform: `scale(${scale})`,
      }}
      variants={motionConfig}
      initial="initial"
      animate="animate"
      transition={{ delay }}
    >
      <svg
        width="220"
        height="160"
        viewBox="0 0 220 160"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={color}>
          {/* ROUND BUSHES */}
          <ellipse cx="20" cy="130" rx="10" ry="20" />
          <ellipse cx="40" cy="125" rx="12" ry="24" />
          <ellipse cx="60" cy="128" rx="10" ry="18" />

          {/* TALL STALKS */}
          <ellipse cx="80" cy="110" rx="6" ry="35" />
          <ellipse cx="95" cy="115" rx="5" ry="30" />
          <ellipse cx="110" cy="105" rx="7" ry="40" />

          {/* WAVY LEAFY STALKS */}
          <path d="M130 160 C128 140, 132 120, 130 100 C128 80, 135 60, 130 40" fill={color} />
          <path d="M145 160 C140 140, 150 110, 145 90 C140 70, 148 50, 143 30" fill={color} />
          
          {/* FAN LEAVES */}
          <path d="M160 160 Q165 140 180 140 Q195 140 200 160 Z" fill={color} />
          <path d="M180 160 Q185 135 195 135 Q205 135 210 160 Z" fill={color} />
        </g>
      </svg>
    </motion.div>
  );
};

const SpikyGrass = ({
  color = '#43A047',
  left,
  right,
  bottom = '0vh',
  scale = 1,
  delay = 0,
}: {
  color?: string;
  left?: string;
  right?: string;
  bottom?: string;
  scale?: number;
  delay?: number;
}) => {
  const motionConfig = useMemo(() => getCoralMotion(4, 8), []);

  return (
    <motion.div
      className="absolute z-20"
      style={{ left,right, bottom, transform: `scale(${scale})` }}
      variants={motionConfig}
      initial="initial"
      animate="animate"
      transition={{ delay }}
    >
      <svg width="100" height="120" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
        <g fill={color}>
          <path d="M10 120 Q20 100 10 80 Q0 60 10 40 Q20 20 10 0" />
          <path d="M30 120 Q40 100 30 80 Q20 60 30 40 Q40 20 30 0" />
          <path d="M50 120 Q60 100 50 80 Q40 60 50 40 Q60 20 50 0" />
        </g>
      </svg>
    </motion.div>
  );
};






const LightRays = () => (
  <motion.div
    className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    initial={{ opacity: 0.04, backgroundPosition: '0% 0%' }}
    animate={{
      opacity: [0.04, 0.08, 0.04],
      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    style={{
      backgroundImage:
        'repeating-linear-gradient(120deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 20%, transparent 40%)',
      backgroundSize: '300% 300%',
      mixBlendMode: 'soft-light',
    }}
  />
);

function Coral() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0077be] to-[#001f3f] overflow-hidden">
      {/* Light rays */}
      <LightRays />

      {/* Seabed */}
      <div className="absolute bottom-0 w-full h-44 bg-[#053d4e] rounded-t-[80%] z-10" />

      {/* Colorful Coral Blobs */}
    {/* Bushy Underwater Plants */}
{/* Clustered Underwater Bushes */}
{/* Bigger spread-out plant clusters */}
<BushCluster color="#66BB6A" left="5%" delay={0.1} scale={1.2} bottom="5vh" />
<BushCluster color="#81C784" left="30%" delay={0.3} scale={1.1} bottom="14vh" />
<BushCluster color="#4CAF50" left="35%" delay={0.5} scale={1.35} bottom="5vh" />
<BushCluster color="#4CAF50" left="55%" delay={0.5} scale={1.25} bottom="1vh" />
<BushCluster color="#388E3C" left="78%" delay={0.2} scale={1.15} bottom="7vh" />




<FloatingAlgae color="#FF7043" left="50vh" bottom="2vh" scale={0.9} delay={0.3} />
<FloatingAlgae color="#FF7043" right="75vh" bottom="4vh" scale={0.9} delay={0.3} />
<FloatingAlgae color="#FF7043" right="50vh" bottom="5vh" scale={0.9} delay={0.3} />

<SpikyGrass color="#43A047" right="40vh" bottom="15vh" scale={1} delay={0.2} />


<Jellyfish left="20%" bottom="10vh" scale={0.95} color="#81D4FA" delay={0.3}/>
<Jellyfish left="75%" bottom="2vh" scale={1.1} color="#CE93D8" reverse  delay={0.6}/>



<div className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 z-10">
 <TreasureChest />
 </div>


      {/* Section Content */}
      <div className="relative z-30 text-center pt-36 px-4 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Coral Kingdom</h2>
        <p className="text-lg text-white/80 max-w-xl mx-auto">
          A vibrant reef alive with motion and marine beauty.
        </p>
      </div>
    </div>
  );
}

export default Coral;



