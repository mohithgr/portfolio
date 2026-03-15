"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ConveyorBelt from "./ConveyorBelt";

const Lighthouse = () => {
  const [lightOn, setLightOn] = useState(true);

  return (
    <div className="relative min-h-[100dvh] bg-gradient-to-b from-[#011936] to-[#033F63] overflow-hidden text-white">

      {/* Lighthouse Image */}
<div className="absolute bottom-0 left-4 sm:left-8 md:left-12 z-20">
        <div
          className="relative
h-[420px]
sm:h-[520px]
md:h-[620px]
lg:h-[700px]
w-[90px]
sm:w-[120px]
md:w-[160px]
lg:w-[200px]
cursor-pointer"
          onClick={() => setLightOn(prev => !prev)}
        >
          <Image
            src="/lighthouse.png"
            alt="Lighthouse"
            fill
            className="w-full drop-shadow-2xl object-cover"
            priority
          />

          {/* Light Beam */}
          {lightOn && (
            <motion.div
             className="absolute top-[8%] left-[72%] 
h-[70px] sm:h-[90px] md:h-[120px]
w-[60vw] sm:w-[70vw] md:w-[900px] lg:w-[1200px]
origin-left"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 236, 153, 0.95) 0%, rgba(255, 236, 153, 0.4) 30%, rgba(255, 236, 153, 0) 100%)",
                clipPath: "polygon(0% 48%, 100% 0%, 100% 100%, 0% 52%)",
                filter: "blur(12px)",
              }}
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </div>
      </div>

      {/* Natural-looking Ground / Cliff */}
      <div className="absolute bottom-0 left-0 w-[70%] sm:w-[55%] md:w-[40%] h-[120px] sm:h-[150px] md:h-44 z-10 overflow-hidden">
        <svg viewBox="0 0 800 200" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,200 C150,180 250,120 400,150 C550,180 650,100 800,130 L800,200 L0,200 Z"
            fill="#022B3A"
          />
          <path
            d="M0,200 C50,190 150,170 250,160 C350,150 450,160 550,150 C650,140 750,160 800,150 L800,200 L0,200 Z"
            fill="#011627"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Suspension Bridge with improved perspective */}
      <div
        className="absolute -bottom-[10%] 
left-[35%] sm:left-[40%] md:left-[45%]
w-[120%] sm:w-full
h-[60%] sm:h-[70%] md:h-[80%]
z-10 overflow-hidden"
        style={{
          perspective: "4000px",
          perspectiveOrigin: "left bottom",
        }}
      >
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "bottom left",
            transform: "rotateX(-20deg) rotateY(45deg)",
          }}
        >
          {/* Main Suspension Cables (curved parabola shape) */}
          <div className="absolute top-0 left-1/4 w-3/4 h-full">
            {/* Left Main Cable */}
            <svg
              className="absolute left-0 top-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,100 Q50,30 100,100"
                stroke="#D8B07C"
                strokeWidth="0.5"
                fill="none"
              />
            </svg>

            {/* Right Main Cable */}
            <svg
              className="absolute right-0 top-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,100 Q50,30 100,100"
                stroke="#D8B07C"
                strokeWidth="0.5"
                fill="none"
              />
            </svg>

            {/* Vertical Suspenders with bulbs */}
            {[...Array(12)].map((_, i) => {
              const position = i / 11;
              const cableHeight = 30 + Math.sin(position * Math.PI) * 20;
              return (
                <div
                  key={i}
                  className="absolute bottom-0 w-px bg-[#D8B07C]"
                  style={{
                    left: `${10 + position * 80}%`,
                    height: `${cableHeight}%`,
                    transform: `translateY(${-i * 1}px) rotateX(20deg)`,
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-1/2 w-2.5 h-2.5 rounded-full bg-yellow-300 shadow-xl"
                    style={{
                      transform: "translateX(-50%)",
                      boxShadow: "0 0 8px 4px rgba(255, 234, 138, 0.7)",
                    }}
                    animate={{
                      opacity: [1, 0.6, 1],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5 + Math.random(),
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Bridge Deck */}
          <div
            className="absolute bottom-0 left-1/4 w-3/4 h-4 bg-[#5E3023] rounded-t-sm"
            style={{
              transform: "translateZ(20px)",
              boxShadow: "0 -2px 4px rgba(0,0,0,0.3)",
            }}
          >
            {/* Deck texture */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 left-0 w-full h-px bg-[#6F4E37]"
                  style={{
                    transform: `translateY(${i * 1}px)`,
                    opacity: 0.7 - (i * 0.02),
                  }}
                />
              ))}
            </div>
            
            {/* Guard rails */}
            <div className="absolute -top-2 left-0 w-full h-1 bg-[#3A2018] rounded-sm" />
            <div className="absolute -top-2 left-0 w-full h-1 bg-[#3A2018] rounded-sm" style={{ transform: "translateY(3px)" }} />
          </div>

          {/* Support Towers - Now extending downward */}
          <div
            className="absolute bottom-0 left-1/4 w-8 h-[120px] sm:h-[160px] md:h-[200px] bg-[#3A2018]"
            style={{
              transform: "translateZ(10px) translateY(100%)",
              boxShadow: "2px 0 4px rgba(0,0,0,0.5)",
            }}
          >
            {/* Tower cross beams */}
            <div className="absolute w-10 h-2 bg-[#2A1810] left-1/2 top-1/3 transform -translate-x-1/2" />
            <div className="absolute w-10 h-2 bg-[#2A1810] left-1/2 top-2/3 transform -translate-x-1/2" />
          </div>
          
          <div
            className="absolute bottom-0 right-1/4 w-8 h-[160px] sm:h-[200px] md:h-[250px] bg-[#3A2018]"
            style={{
              transform: "translateZ(30px) translateY(100%)",
              boxShadow: "2px 0 4px rgba(0,0,0,0.5)",
            }}
          >
            {/* Tower cross beams */}
            <div className="absolute w-10 h-2 bg-[#2A1810] left-1/2 top-1/3 transform -translate-x-1/2" />
            <div className="absolute w-10 h-2 bg-[#2A1810] left-1/2 top-2/3 transform -translate-x-1/2" />
          </div>

          {/* Anchorages */}
          <div
            className="absolute bottom-0 left-1/4 w-12 h-8 bg-[#2A1810] rounded-t-sm"
            style={{
              transform: "translateZ(10px) translateX(-10px)",
              clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)",
            }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-12 h-10 bg-[#2A1810] rounded-t-sm"
            style={{
              transform: "translateZ(30px) translateX(10px)",
              clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </div>
      </div>

      {/* Conveyor Belt below lighthouse */}
      <div className="relative z-30 flex-col gap-8 flex justify-self-center mt-[20vh] sm:mt-[8vh] md:mt-[10vh]">
        <ConveyorBelt />
      </div>
    </div>
  );
};

export default Lighthouse;