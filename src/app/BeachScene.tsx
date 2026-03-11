"use client";

import React, { useState, useEffect, useRef } from "react";
import PalmTree from "./PalmTree";
import BeachTableUmbrella from "./BeachTableUmbrella";
import SandCastle from "./SandCastle";
import Fireworks from "./Fireworks";
import StarFish from "./StarFish";

type StarProps = {
  top: string;
  left: string;
  size: number;
};

const Star = ({ top, left, size }: StarProps) => (
  <div
    className="absolute bg-white rounded-full"
    style={{ top, left, width: size, height: size }}
  />
);

const stars: StarProps[] = [
  { top: "10%", left: "15%", size: 3 },
  { top: "20%", left: "30%", size: 2 },
  { top: "5%", left: "70%", size: 4 },
  { top: "15%", left: "80%", size: 2 },
  { top: "25%", left: "50%", size: 3 },
  { top: "12%", left: "90%", size: 2 },
  { top: "18%", left: "60%", size: 3 },
];

const BeachScene = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [fireworksActive, setFireworksActive] = useState(false);
  const [screenHeight, setScreenHeight] = useState(800);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenHeight(window.innerHeight);
    }
  }, []);


useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.intersectionRatio >= 0.6) {
        setFireworksActive(true);
      } else {
        setFireworksActive(false);
      }
    },
    {
      threshold: 0.6,
    }
  );

  if (containerRef.current) {
    observer.observe(containerRef.current);
  }

  return () => {
    if (containerRef.current) {
      observer.unobserve(containerRef.current);
    }
  };
}, []);

  const fireworkPositions = [
    { x: 550, y: screenHeight - 350 },
    { x: 600, y: screenHeight - 350 },
    { x: 850, y: screenHeight - 350 },
    { x: 900, y: screenHeight - 350 },
    {
      x: 850,
      y: screenHeight - 400,
      angle: (-45 * Math.PI) / 180,
      text: "Email Me At mohithgr@gmail.com",
      url: "mailto:mohithgr@gmail.com",
    },
    {
      x: 550,
      y: screenHeight - 400,
      angle: (-120 * Math.PI) / 180,
      text: "Call Me At +91 - 9606504880",
      url: "tel:+919606504880",
    },
   {
  x: 760,
  y: screenHeight - 410,
  angle: (-90 * Math.PI) / 180,
  imageUrl: "/linkedin.png",
  url: "https://www.linkedin.com/in/shivprasad-karekar",
}
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Sky */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-indigo-900 via-blue-900 to-[#001f3f] z-0">
        {stars.map((star, i) => (
          <Star key={i} {...star} />
        ))}

        {/* Moon */}
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.75)] overflow-hidden">
          <div
            className="absolute top-0 left-6 w-20 h-20 rounded-full bg-indigo-900"
            style={{ boxShadow: "0 0 15px 5px rgba(17, 24, 39, 0.8)" }}
          />
        </div>
      </div>

      {/* Water */}
      <div className="absolute top-1/2 left-0 w-full h-[33%] bg-[#001f3f] z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[200%] h-20 animate-wave1 opacity-60 bg-gradient-to-t from-[#003366] to-transparent" />

        <div className="absolute top-4 left-0 w-[200%] h-20 animate-wave2 opacity-50 bg-gradient-to-t from-[#004080] to-transparent" />

        <div className="absolute top-8 left-0 w-[200%] h-20 animate-wave3 opacity-40 bg-gradient-to-t from-[#0055a5] to-transparent" />

        <div className="absolute top-12 left-0 w-[200%] h-20 animate-wave4 opacity-30 bg-gradient-to-t from-[#0077ee] to-transparent" />
      </div>

      {/* Sand */}
      <div className="absolute bottom-0 w-full h-[25%] bg-yellow-800 rounded-t-[20%] shadow-inner z-20">
        <StarFish position="left-[15%] bottom-[10%]" />

        <StarFish
          position="right-[10%] bottom-[30%]"
          rotate="-45deg"
          bodyColor="#1ca9c9"
          dotColor="#f6bcd2"
        />
      </div>

      {/* Foreground */}
      <Fireworks active={fireworksActive} positions={fireworkPositions} />

      <PalmTree position="right-10" style={{ zIndex: 30 }} />

      <BeachTableUmbrella position="left-20" style={{ zIndex: 30 }} />

      <SandCastle />
    </div>
  );
};

export default BeachScene;