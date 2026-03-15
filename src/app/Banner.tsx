'use client';

import React, { useState } from 'react';
import { easeOut, motion } from 'framer-motion';
import styles from './banner.module.css';
import FishTraceHello from './FishTraceHello';
import { GlassJar } from './GlassJar';

const curtainVariants = {
  initial: { y: 0 },
  animate: {
    y: '-80%',
    transition: {
      duration: 1.5,
      ease: easeOut,
    },
  },
};

const sandVariants = {
  initial: { y: 100 },
  animate: {
    y: 0,
    transition: {
      duration: 1.5,
      ease: easeOut,
    },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

function Banner() {
  const [curtainComplete, setCurtainComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  const menuItems = [
  { label: "About me", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" }
];

  const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  return (
    <div className="relative min-h-screen bg-[#00BFFF] overflow-hidden flex items-center justify-center">
      {/* Curtain */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[#004687] z-50 [clip-path:url(#fabric-wave-clip)]"
        variants={curtainVariants}
        initial="initial"
        animate="animate"
        onAnimationComplete={() => setCurtainComplete(true)}
      >
        <svg width="0" height="0">
          <defs>
            <clipPath id="fabric-wave-clip" clipPathUnits="objectBoundingBox">
              <path
                d="
                  M 0,0 
                  L 0,0.9 
                  Q 0.05,1 0.1,0.9
                  Q 0.15,0.8 0.2,0.9
                  Q 0.25,1 0.3,0.9
                  Q 0.35,0.8 0.4,0.9
                  Q 0.45,1 0.5,0.9
                  Q 0.55,0.8 0.6,0.9
                  Q 0.65,1 0.7,0.9
                  Q 0.75,0.8 0.8,0.9
                  Q 0.85,1 0.9,0.9
                  Q 0.95,0.8 1,0.9
                  L 1,0 
                  Z
                "
              />
            </clipPath>
          </defs>
        </svg>
      </motion.div>

      {/* Beach Sand */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-24 sm:h-28 md:h-32 bg-gradient-to-t from-amber-200 to-amber-100 z-10"
        variants={sandVariants}
        initial="initial"
        animate="animate"
      >
        {/* Sand texture */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-amber-300/40 rounded-full"
              style={{
                width: `${Math.random() * 12 + 3}px`,
                height: `${Math.random() * 12 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Wave line */}
        <div className="absolute top-0 left-0 w-full h-3 bg-amber-300/50 [clip-path:url(#sand-wave-clip)]">
          <svg width="0" height="0">
            <defs>
              <clipPath id="sand-wave-clip" clipPathUnits="objectBoundingBox">
                <path d="M0,0.5 C0.2,0.7 0.4,0.3 0.6,0.5 S0.8,0.3 1,0.5 V1 H0 Z" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </motion.div>

      {/* Left Animated Clam with Pearl */}
{curtainComplete && (
        <motion.div 
          className="absolute bottom-24 left-[10%] md:left-1/4 z-20"
          initial={{ y: 20, rotate: -10 }}
          animate={{ 
            rotate: [-10, -5, -10],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut'
          }}
        >
          <div className="relative w-14 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12">
            {/* Pearl with shine */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-4 h-4 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-lg">
              <div className="absolute top-1 left-1 w-1 h-1 bg-white/80 rounded-full" />
            </div>
            
            {/* Shell Bottom - Enhanced with gradient and texture */}
            <svg viewBox="0 0 100 50" className="absolute bottom-0 left-0 w-full h-full">
              <defs>
                <linearGradient id="shellBottomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFEBD6" />
                  <stop offset="50%" stopColor="#F5D5B0" />
                  <stop offset="100%" stopColor="#E8C49B" />
                </linearGradient>
                <pattern id="shellTexture" patternUnits="userSpaceOnUse" width="4" height="4">
                  <path d="M0,4 L4,0" stroke="#D9B38C" strokeWidth="0.5" />
                  <path d="M0,0 L4,4" stroke="#D9B38C" strokeWidth="0.5" />
                </pattern>
              </defs>
              <path
                d="M10,25 Q50,0 90,25 Q50,50 10,25 Z"
                fill="url(#shellBottomGradient)"
                stroke="#D9B38C"
                strokeWidth="1"
              />
              <path
                d="M10,25 Q50,0 90,25 Q50,50 10,25 Z"
                fill="url(#shellTexture)"
                fillOpacity="0.2"
              />
            </svg>
            
            {/* Shell Top - Enhanced with ridges and shine */}
            <motion.svg 
              viewBox="0 0 100 50" 
              className="absolute bottom-0 left-0 w-full h-full"
              animate={{
                rotateX: [0, 60, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'anticipate'
              }}
              style={{ originY: '0px', transformStyle: 'preserve-3d' }}
            >
              <defs>
                <linearGradient id="shellTopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF5E6" />
                  <stop offset="50%" stopColor="#FFEBD6" />
                  <stop offset="100%" stopColor="#F5D5B0" />
                </linearGradient>
                <radialGradient id="shellShine" cx="50%" cy="30%" r="50%" fx="50%" fy="30%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
              <path
                d="M10,25 Q50,0 90,25 Q50,50 10,25 Z"
                fill="url(#shellTopGradient)"
                stroke="#D9B38C"
                strokeWidth="1"
              />
              {/* Shell ridges */}
              <path
                d="M20,25 Q50,10 80,25"
                fill="none"
                stroke="#E8C49B"
                strokeWidth="0.8"
                strokeOpacity="0.7"
              />
              <path
                d="M30,25 Q50,20 70,25"
                fill="none"
                stroke="#E8C49B"
                strokeWidth="0.6"
                strokeOpacity="0.7"
              />
              <path
                d="M40,25 Q50,25 60,25"
                fill="none"
                stroke="#E8C49B"
                strokeWidth="0.4"
                strokeOpacity="0.7"
              />
              {/* Shine effect */}
              <ellipse cx="60" cy="15" rx="15" ry="5" fill="url(#shellShine)" />
            </motion.svg>
          </div>

          {/* Bubbles when clam opens - Enhanced */}
          <motion.div 
            className="absolute -top-6 left-8 w-4 h-4 bg-white/70 rounded-full blur-sm z-30 shadow-sm"
            animate={{ 
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
              y: [0, -15, -30]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 2,
              ease: 'easeOut'
            }}
          />
          <motion.div 
            className="absolute -top-8 left-10 w-2 h-2 bg-white/50 rounded-full blur-sm z-30 shadow-sm"
            animate={{ 
              scale: [0, 1.2, 0],
              opacity: [0, 0.6, 0],
              y: [0, -20, -35]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 2.3,
              ease: 'easeOut'
            }}
          />
        </motion.div>
      )}

      {/* Right Animated Clam with Pearl */}
  {curtainComplete && (
        <motion.div 
          className="absolute bottom-10 right-[10%] md:right-1/4 z-20"
          initial={{ y: 20, rotate: 10 }}
          animate={{ 
            rotate: [10, 5, 10],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: 1
          }}
        >
          <div className="relative w-14 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12">
            {/* Pearl with shine */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-4 h-4 bg-gradient-to-br from-white to-pink-100 rounded-full shadow-lg">
              <div className="absolute top-1 left-1 w-1 h-1 bg-white/80 rounded-full" />
              <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-pink-200/50 rounded-full" />
            </div>
            
            {/* Shell Bottom - Different color variation */}
            <svg viewBox="0 0 100 50" className="absolute bottom-0 left-0 w-full h-full">
              <defs>
                <linearGradient id="shellBottomGradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFE8D6" />
                  <stop offset="50%" stopColor="#FFD8B0" />
                  <stop offset="100%" stopColor="#F0C49B" />
                </linearGradient>
                <pattern id="shellTextureRight" patternUnits="userSpaceOnUse" width="4" height="4">
                  <path d="M0,4 L4,0" stroke="#D9A38C" strokeWidth="0.5" />
                  <path d="M0,0 L4,4" stroke="#D9A38C" strokeWidth="0.5" />
                </pattern>
              </defs>
              <path
                d="M10,25 Q50,0 90,25 Q50,50 10,25 Z"
                fill="url(#shellBottomGradientRight)"
                stroke="#D9A38C"
                strokeWidth="1"
              />
              <path
                d="M10,25 Q50,0 90,25 Q50,50 10,25 Z"
                fill="url(#shellTextureRight)"
                fillOpacity="0.2"
              />
            </svg>
            
            {/* Shell Top - Different color variation */}
            <motion.svg 
              viewBox="0 0 100 50" 
              className="absolute bottom-0 left-0 w-full h-full"
              animate={{
                rotateX: [0, 60, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'anticipate',
                delay: 0.5
              }}
              style={{ originY: '0px', transformStyle: 'preserve-3d' }}
            >
              <defs>
                <linearGradient id="shellTopGradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF0E6" />
                  <stop offset="50%" stopColor="#FFE8D6" />
                  <stop offset="100%" stopColor="#FFD8B0" />
                </linearGradient>
                <radialGradient id="shellShineRight" cx="40%" cy="20%" r="60%" fx="40%" fy="20%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
              <path
                d="M10,25 Q50,0 90,25 Q50,50 10,25 Z"
                fill="url(#shellTopGradientRight)"
                stroke="#D9A38C"
                strokeWidth="1"
              />
              {/* Shell ridges */}
              <path
                d="M20,25 Q50,10 80,25"
                fill="none"
                stroke="#F0C49B"
                strokeWidth="0.8"
                strokeOpacity="0.7"
              />
              <path
                d="M30,25 Q50,20 70,25"
                fill="none"
                stroke="#F0C49B"
                strokeWidth="0.6"
                strokeOpacity="0.7"
              />
              <path
                d="M40,25 Q50,25 60,25"
                fill="none"
                stroke="#F0C49B"
                strokeWidth="0.4"
                strokeOpacity="0.7"
              />
              {/* Shine effect */}
              <ellipse cx="40" cy="15" rx="20" ry="8" fill="url(#shellShineRight)" />
              {/* Pink tint for variety */}
              <ellipse cx="70" cy="20" rx="15" ry="3" fill="#FFD1DC" fillOpacity="0.1" />
            </motion.svg>
          </div>

          {/* Bubbles when clam opens - Enhanced */}
          <motion.div 
            className="absolute -top-6 right-8 w-4 h-4 bg-white/70 rounded-full blur-sm z-30 shadow-sm"
            animate={{ 
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
              y: [0, -15, -30]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 2.5,
              ease: 'easeOut'
            }}
          />
          <motion.div 
            className="absolute -top-8 right-10 w-2 h-2 bg-white/50 rounded-full blur-sm z-30 shadow-sm"
            animate={{ 
              scale: [0, 1.2, 0],
              opacity: [0, 0.6, 0],
              y: [0, -20, -35]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 2.8,
              ease: 'easeOut'
            }}
          />
        </motion.div>
      )}


      {/* Banner Content */}
      {curtainComplete && (
        <motion.div
          className="flex flex-col md:flex-row justify-between w-full px-6 md:px-12 z-20 gap-10 md:gap-0"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Left Side Text */}
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left grow-4">
              {menuItems.map((item) => (
  <motion.div
    key={item.label}
    variants={itemVariants}
    onClick={() => scrollToSection(item.id)}
    className={`bg-black px-5 sm:px-6 py-2 sm:py-3 w-full max-w-[180px] sm:max-w-[200px] cursor-pointer ${styles.choppedBox}`}
  >
    <p className={`text-white text-lg whitespace-nowrap ${styles.bungee}`}>
      {item.label}
    </p>
  </motion.div>

            ))}
          </div>

          {/* Right Side Name */}
          <div className="w-full max-w-[90vw] md:max-w-none flex items-center justify-center">
            <FishTraceHello onProgressUpdate={setProgress}/>
          </div>
        </motion.div>
      )}

      {/* Glass Jar */}
      <GlassJar show={progress >= 1} />

      {/* Splash Effects */}
      <motion.div
        className="absolute bottom-32 right-12 w-10 h-10 rounded-full bg-white/30 blur-md z-30"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.5, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: 'easeOut',
        }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-8 h-8 rounded-full bg-white/20 blur-md z-30"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.2, 0],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 2,
          ease: 'easeOut',
          delay: 0.5
        }}
      />
    </div>
  );
}

export default Banner;