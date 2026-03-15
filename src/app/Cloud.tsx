"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import cloudLeft from "../../public/cloud.png";
import cloudRight from "../../public/cloud.png";
import Crab from "./Crab";

type RainDrop = {
  left: number;
  duration: number;
  delay: number;
};

export default function CloudReveal() {
  const containerRef = useRef(null);
  const [leftRainDrops, setLeftRainDrops] = useState<RainDrop[]>([]);
  const [rightRainDrops, setRightRainDrops] = useState<RainDrop[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xLeft = useSpring(useTransform(scrollYProgress, [0, 1], [0, -500]), {
    stiffness: 60,
    damping: 20,
  });

  const xRight = useSpring(useTransform(scrollYProgress, [0, 1], [0, 500]), {
    stiffness: 60,
    damping: 20,
  });

  const waterHeight = useSpring(
    useTransform(scrollYProgress, [0, 0.6], ["0%", "20%"]),
    { stiffness: 50, damping: 20 }
  );

  const boatX = useSpring(
    useTransform(scrollYProgress, [0.6, 0.85], ["-130vh", "0vh"]),
    {
      stiffness: 50,
      damping: 20,
    }
  );

  // Generate rain drops only on client side to avoid hydration mismatch
  useEffect(() => {
    setLeftRainDrops(
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        duration: 2.5 + Math.random() * 1.5,
        delay: Math.random() * 2,
      }))
    );
    setRightRainDrops(
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        duration: 2.5 + Math.random() * 1.5,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <section ref={containerRef} className="relative h-[800vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-gradient-to-b from-white to-[#f7f7f7] flex justify-center">
        {/* Rainbow */}
       <motion.svg
  viewBox="-5 0 110 60"
  preserveAspectRatio="none"
  className="absolute -top-[8vh] left-1/2 -translate-x-1/2 w-full h-[50vh] z-0 pointer-events-none"
>
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {[
            { color: "#FF6666", offset: 0 },
            { color: "#FFAD66", offset: 2 },
            { color: "#FFFF80", offset: 4 },
            { color: "#80FF80", offset: 6 },
            { color: "#8080FF", offset: 8 },
            { color: "#B380FF", offset: 10 },
            { color: "#D699FF", offset: 12 },
          ].map(({ color, offset }, index) => (
            <motion.path
              key={index}
             d={`M-15,${40 + offset} Q50,${-10 + offset} 115,${40 + offset}`}
              fill="none"
              stroke={color}
              strokeWidth="4"
              strokeDasharray="200"
              filter="url(#glow)"
              style={{
                strokeDashoffset: useTransform(
                  scrollYProgress,
                  [0.6, 0.9],
                  [200, 0]
                ),
              }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            />
          ))}
        </motion.svg>

        {/* Water fill */}
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-blue-200/60 z-0 rounded-t-[30%]"
          style={{ height: waterHeight }}
        />
        {/* Fishes inside water */}
        {/* Left Fish */}
        {/* Better Nemo-like Fish */}
        {/* LEFT SIDE FISH (Nemo-style Orange) */}
        {/* LEFT SIDE FISH (Nemo-style Orange) */}
        {/* LEFT SIDE FISH (Nemo-style Orange) */}
        <motion.div
          className="absolute bottom-[10vh] z-30 scale-[0.45] sm:scale-[0.55] md:scale-[0.65] lg:scale-[0.7]"
          style={{
            left: "50%",
            x: useSpring(
              useTransform(
                scrollYProgress,
                [0.6, 0.85],
                ["-120vw", "0vw"]
              ),
              { stiffness: 50, damping: 20 }
            ),
          }}
        >
          <div className="-translate-x-[35vw] md:-translate-x-[450px]">
            <Crab />
          </div>
        </motion.div>

        {/* BOAT */}
        <motion.div
          className="absolute bottom-[4vh] left-1/2 -translate-x-1/2 z-20"
          style={{ x: boatX }}
        >
          <div className="relative w-[65vh] h-full flex items-end justify-center scale-[0.65] md:scale-100 origin-bottom">
            {/* Boat Hull */}
            <div
              className="absolute w-full h-[14vh] bg-yellow-700 rounded-b-full
                         before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0
                         before:bg-yellow-800 before:rounded-b-full before:scale-y-75 before:origin-bottom
                         after:content-[''] after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-[15px]
                         after:bg-yellow-900 after:rounded-t-full"
              style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}
            ></div>

            {/* Mast */}
            {/* <div className="absolute bottom-[140px] left-1/2 -translate-x-1/2 w-[8px] h-[350px] bg-gray-500 rounded-sm z-10" /> */}
            <div className="absolute bottom-[13vh] left-1/2 -translate-x-1/2 w-[4px] h-[42vh] bg-yellow-800 rounded-sm z-10" />
            <div className="absolute bottom-[8vh] left-[17vh] -translate-x-1/2 w-[2px] h-[52vh] bg-yellow-800 rounded-sm z-10 rotate-[36deg]" />
            <div className="absolute bottom-[12vh] left-[28vh] -translate-x-1/2 w-[2px] h-[43vh] bg-yellow-800 rounded-sm z-10 rotate-[11deg]" />
            <div className="absolute bottom-[9vh] right-[18vh] -translate-x-1/2 w-[2px] h-[50vh] bg-yellow-800 rounded-sm z-10 -rotate-[34deg]" />
            <div className="absolute bottom-[12vh] right-[28vh] -translate-x-1/2 w-[2px] h-[43vh] bg-yellow-800 rounded-sm z-10 -rotate-[11deg]" />

            {/* Flapping Flags */}
            {/* Flapping Flags */}
            <div className="absolute bottom-[160px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-start space-y-2">
              {[
                {
                  label: "Name",
                  value: "Mohith G R",
                },
                {
                  label: "Designation",
                  value: "Master of IT at UNSW",
                },
                {
                  label: "Phone",
                  value: "+61 408 617 172",
                },
                {
                  label: "Email",
                  value: "mohithgr@gmail.com",
                },
              ].map((item, i) => {
                const ropeY = i * 50; // vertical gap between flags
                return (
                  <div key={i} className="relative">
                    {/* Flag */}
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{
                        rotate: [1, -2, 1],
                        skewX: [0, 3, -3, 0],
                      }}
                      transition={{
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`relative w-[220px] px-4 py-2 bg-[#FEF7EC] shadow-md text-center text-sm font-medium text-black origin-left`}
                      style={{
                        clipPath: `path("M20,50 Q0,25 20,0 H200 Q180,25 200,50 H20 Z")`,
                      }}
                    >
                      <div className="text-xs font-semibold text-gray-500">
                        {item.label}
                      </div>
                      <div className="text-sm font-bold">{item.value}</div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Clouds + Rain (Left) */}
        <motion.div
          style={{ x: xLeft }}
          className="absolute left-0 top-[40vh] -translate-y-1/2 z-10 w-[40%]"
        >
          <Image src={cloudLeft} alt="cloud left" className="w-full" priority />
          <div className="absolute top-[60%] left-0 w-full h-[60%] pointer-events-none z-[-1]">
            {leftRainDrops.map((drop, i) => (
              <motion.div
                key={`left-drop-${i}`}
                className="absolute w-[6px] h-[24px] border border-blue-400 bg-white rounded-full opacity-80"
                style={{ left: `${drop.left}%` }}
                animate={{ y: ["0%", "100vh"], opacity: [1, 0.3] }}
                transition={{
                  duration: drop.duration,
                  repeat: Infinity,
                  delay: drop.delay,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Clouds + Rain (Right) */}
        <motion.div
          style={{ x: xRight }}
          className="absolute right-0 top-[40vh] -translate-y-1/2 z-10 w-[40%]"
        >
          <Image
            src={cloudRight}
            alt="cloud right"
            className="w-full"
            priority
          />
          <div className="absolute top-[60%] left-0 w-full h-[60%] pointer-events-none z-[-1]">
            {rightRainDrops.map((drop, i) => (
              <motion.div
                key={`right-drop-${i}`}
                className="absolute w-[6px] h-[24px] border border-blue-400 bg-white rounded-full opacity-80"
                style={{ left: `${drop.left}%` }}
                animate={{ y: ["0%", "100vh"], opacity: [1, 0.3] }}
                transition={{
                  duration: drop.duration,
                  repeat: Infinity,
                  delay: drop.delay,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Reveal Text */}
        <div className="z-0 text-center text-black mt-[20vh]">
          <h2 className="text-2xl md:text-4xl font-bold">Let me introduce myself</h2>
          <p className="mt-2 text-sm md:text-lg max-w-[400px]">
            I’m a developer who cares as much about the user experience as I do about the underlying architecture. With a background in both Software Engineering and Project Management, I know how to build complex features while keeping an eye on the bigger picture and the deadline.

My recent work ranges from building motion-rich web platforms for 5,000+ users to experimenting with AR/VR for education. I’m currently at UNSW Sydney, looking for my next role in the local tech scene where I can put my Technical and leadership experience to work.
          </p>
        </div>
      </div>
    </section>
  );
}


