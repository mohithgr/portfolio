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
const [isMobile, setIsMobile] = useState(false);

/* ---------- Detect Screen Size ---------- */

useEffect(() => {
const checkMobile = () => setIsMobile(window.innerWidth < 768);


checkMobile();
window.addEventListener("resize", checkMobile);

return () => window.removeEventListener("resize", checkMobile);


}, []);

/* ---------- Intersection Observer ---------- */

useEffect(() => {
const observer = new IntersectionObserver(
([entry]) => {
setFireworksActive(entry.intersectionRatio >= 0.6);
},
{ threshold: 0.6 }
);


if (containerRef.current) observer.observe(containerRef.current);

return () => {
  if (containerRef.current) observer.unobserve(containerRef.current);
};


}, []);

/* ---------- Desktop Fireworks ---------- */

const desktopPositions = [
{ x: "30%", y: "35%" },
{ x: "35%", y: "35%" },
{ x: "55%", y: "35%" },
{ x: "60%", y: "35%" },


{
  x: "65%",
  y: "35%",
  angle: (-45 * Math.PI) / 180,
  text: "Email Me At mohithgr@gmail.com",
  url: "mailto:mohithgr@gmail.com",
},

{
  x: "30%",
  y: "35%",
  angle: (-120 * Math.PI) / 180,
  text: "Call Me At +91 - 9606504880",
  url: "tel:+919606504880",
},

{
  x: "50%",
  y: "35%",
  angle: (-90 * Math.PI) / 180,
  imageUrl: "/linkedin.png",
  url: "https://www.linkedin.com/in/shivprasad-karekar",
},


];

/* ---------- Mobile Fireworks ---------- */

const mobilePositions = [
{ x: "25%", y: "55%" },
{ x: "35%", y: "55%" },
{ x: "60%", y: "55%" },
{ x: "75%", y: "55%" },


{ x: "20%", y: "50%" },
{ x: "80%", y: "50%" },

/* Final center fireworks showing contact */

{
  x: "50%",
  y: "40%",
  angle: (-90 * Math.PI) / 180,
  text: "Email Me At mohithgr@gmail.com",
  url: "mailto:mohithgr@gmail.com",
},

{
  x: "50%",
  y: "45%",
  angle: (-90 * Math.PI) / 180,
  text: "Call Me At +91 - 9606504880",
  url: "tel:+919606504880",
},

{
  x: "50%",
  y: "50%",
  angle: (-90 * Math.PI) / 180,
  imageUrl: "/linkedin.png",
  url: "https://www.linkedin.com/in/shivprasad-karekar",
},


];

const fireworkPositions = isMobile ? mobilePositions : desktopPositions;

return ( <div
   ref={containerRef}
   className="relative w-full min-h-screen overflow-hidden bg-black"
 >
{/* Sky */} <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-indigo-900 via-blue-900 to-[#001f3f] z-0">
{stars.map((star, i) => (
<Star key={i} {...star} />
))}

    {/* Moon */}
    <div className="absolute top-[5%] right-[5%] w-[8vw] h-[8vw] min-w-[50px] min-h-[50px] max-w-[120px] max-h-[120px] rounded-full bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.75)] overflow-hidden">
      <div
        className="absolute top-0 left-6 w-20 h-20 rounded-full bg-indigo-900"
        style={{ boxShadow: "0 0 15px 5px rgba(17, 24, 39, 0.8)" }}
      />
    </div>
  </div>

  {/* Water */}
  <div className="absolute top-[50%] left-0 w-full h-[30vh] bg-[#001f3f] z-10 overflow-hidden">
    <div className="absolute top-0 left-0 w-[200%] h-20 animate-wave1 opacity-60 bg-gradient-to-t from-[#003366] to-transparent" />
    <div className="absolute top-4 left-0 w-[200%] h-20 animate-wave2 opacity-50 bg-gradient-to-t from-[#004080] to-transparent" />
    <div className="absolute top-8 left-0 w-[200%] h-20 animate-wave3 opacity-40 bg-gradient-to-t from-[#0055a5] to-transparent" />
    <div className="absolute top-12 left-0 w-[200%] h-20 animate-wave4 opacity-30 bg-gradient-to-t from-[#0077ee] to-transparent" />
  </div>

  {/* Sand */}
  <div className="absolute bottom-0 w-full h-[25vh] bg-yellow-800 rounded-t-[20%] shadow-inner z-20">
    <StarFish position="left-[15%] bottom-[10%]" />

    <StarFish
      position="right-[10%] bottom-[30%]"
      rotate="-45deg"
      bodyColor="#1ca9c9"
      dotColor="#f6bcd2"
    />
  </div>

  {/* Fireworks */}
  <Fireworks active={fireworksActive} positions={fireworkPositions} />

  {/* Foreground elements */}
  <div className="absolute inset-0 pointer-events-none z-30 flex justify-between items-end
scale-[0.75] sm:scale-[0.85] md:scale-100 origin-bottom">
<div className="z-30">
  <PalmTree position="right-[5%]" />
</div>

<div className="z-30">
  <BeachTableUmbrella position="left-[5%]" />
</div>

  <SandCastle />
  </div>
</div>


);
};

export default BeachScene;

