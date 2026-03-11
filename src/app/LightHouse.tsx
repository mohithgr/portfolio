// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import JellyCard from "./JellyCard";

// const jellyData = [
//   {
//     title: "Alpha",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//   },
//   {
//     title: "Beta",
//     description: "Sed ut perspiciatis unde omnis iste natus error sit...",
//   },
//   {
//     title: "Beta",
//     description: "Sed ut perspiciatis unde omnis iste natus error sit...",
//   },
// ];

// const Lighthouse = () => {
//   const [lightOn, setLightOn] = useState(true);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-[#011936] to-[#033F63] overflow-hidden text-white">
//       {/* Lighthouse Image */}
//       <div className="absolute bottom-0 left-12 z-20">
//         <div
//           className="relative h-[700px] w-40 md:w-[200px] cursor-pointer"
//           onClick={() => setLightOn((prev) => !prev)}
//         >
//           <Image
//             src="/lighthouse.png"
//             alt="Lighthouse"
//             fill
//             className="w-full drop-shadow-2xl object-cover"
//             priority
//           />

//           {/* Single Light Beam with Pinpoint Origin */}
//           {lightOn && (
//             <motion.div
//               className="absolute top-[8%] left-[72%] h-[120px] w-[1200px] z-10 origin-left"
//               style={{
//                 background:
//                   "linear-gradient(90deg, rgba(255, 236, 153, 0.95) 0%, rgba(255, 236, 153, 0.4) 30%, rgba(255, 236, 153, 0) 100%)",
//                 clipPath: "polygon(0% 48%, 100% 0%, 100% 100%, 0% 52%)",
//                 filter: "blur(12px)",
//               }}
//               animate={{ rotate: [0, 20, -20, 0] }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           )}
//         </div>
//       </div>

//       {/* Ground / Cliff */}
//       <div className="absolute bottom-0 w-full h-44 bg-[#022B3A] rounded-t-[100px] z-10" />

//       <div className="relative z-30 flex-col gap-8 flex justify-self-center">
//         {jellyData.map((card, idx) => (
//           <JellyCard
//             key={idx}
//             title={card.title}
//             description={card.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Lighthouse;



// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import JellyCard from "./JellyCard";

// const jellyData = [
//   {
//     title: "Alpha",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//   },
//   {
//     title: "Beta",
//     description: "Sed ut perspiciatis unde omnis iste natus error sit...",
//   },
//   {
//     title: "Beta",
//     description: "Sed ut perspiciatis unde omnis iste natus error sit...",
//   },
// ];

// const Lighthouse = () => {
//   const [lightOn, setLightOn] = useState(true);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-[#011936] to-[#033F63] overflow-hidden text-white">
//       {/* Lighthouse Image */}
//       <div className="absolute bottom-0 left-12 z-20">
//         <div
//           className="relative h-[700px] w-40 md:w-[200px] cursor-pointer"
//           onClick={() => setLightOn((prev) => !prev)}
//         >
//           <Image
//             src="/lighthouse.png"
//             alt="Lighthouse"
//             fill
//             className="w-full drop-shadow-2xl object-cover"
//             priority
//           />

//           {/* Single Light Beam with Pinpoint Origin */}
//           {lightOn && (
//             <motion.div
//               className="absolute top-[8%] left-[72%] h-[120px] w-[1200px] z-10 origin-left"
//               style={{
//                 background:
//                   "linear-gradient(90deg, rgba(255, 236, 153, 0.95) 0%, rgba(255, 236, 153, 0.4) 30%, rgba(255, 236, 153, 0) 100%)",
//                 clipPath: "polygon(0% 48%, 100% 0%, 100% 100%, 0% 52%)",
//                 filter: "blur(12px)",
//               }}
//               animate={{ rotate: [0, 20, -20, 0] }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           )}
//         </div>
//       </div>

//       {/* Ground / Cliff */}
//       <div className="absolute bottom-0 w-full h-44 bg-[#022B3A] rounded-t-[100px] z-10" />

//       <div className="relative z-30 flex-col gap-8 flex justify-self-center">
//         {jellyData.map((card, idx) => (
//           <JellyCard
//             key={idx}
//             title={card.title}
//             description={card.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Lighthouse;



// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import JellyCard from "./JellyCard";
// import ConveyorBelt from "./ConveyorBelt";

// const jellyData = [
//   {
//     title: "Alpha",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//   },
//   {
//     title: "Beta",
//     description: "Sed ut perspiciatis unde omnis iste natus error sit...",
//   },
//   {
//     title: "Beta",
//     description: "Sed ut perspiciatis unde omnis iste natus error sit...",
//   },
// ];

// const Lighthouse = () => {
//   const [lightOn, setLightOn] = useState(true);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-[#011936] to-[#033F63] overflow-hidden text-white">
//       {/* Lighthouse Image */}
//       <div className="absolute bottom-0 left-12 z-20">
//         <div
//           className="relative h-[700px] w-40 md:w-[200px] cursor-pointer"
//           onClick={() => setLightOn((prev) => !prev)}
//         >
//           <Image
//             src="/lighthouse.png"
//             alt="Lighthouse"
//             fill
//             className="w-full drop-shadow-2xl object-cover"
//             priority
//           />

//           {/* Single Light Beam with Pinpoint Origin */}
//           {lightOn && (
//             <motion.div
//               className="absolute top-[8%] left-[72%] h-[120px] w-[1200px] z-10 origin-left"
//               style={{
//                 background:
//                   "linear-gradient(90deg, rgba(255, 236, 153, 0.95) 0%, rgba(255, 236, 153, 0.4) 30%, rgba(255, 236, 153, 0) 100%)",
//                 clipPath: "polygon(0% 48%, 100% 0%, 100% 100%, 0% 52%)",
//                 filter: "blur(12px)",
//               }}
//               animate={{ rotate: [0, 20, -20, 0] }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           )}
//         </div>
//       </div>

//       {/* Ground / Cliff */}
//       {/* <div className="absolute bottom-0 w-full h-44 bg-[#022B3A] rounded-t-[100px] z-10" /> */}

//             {/* Natural-looking Ground / Cliff */}
//       <div className="absolute bottom-0 left-0 w-[40%] h-44 z-10 overflow-hidden">
//         <svg
//           viewBox="0 0 800 200"
//           className="w-full h-full"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,200 C150,180 250,120 400,150 C550,180 650,100 800,130 L800,200 L0,200 Z"
//             fill="#022B3A"
//           />
//           <path
//             d="M0,200 C50,190 150,170 250,160 C350,150 450,160 550,150 C650,140 750,160 800,150 L800,200 L0,200 Z"
//             fill="#011627"
//             opacity="0.7"
//           />
//         </svg>
//       </div>

//       {/* Perspective Hanging Bridge */}
//         {/* 45-degree Perspective Bridge at Right Side */}
//       <div className="absolute bottom-0 right-0 w-[50%] h-[60%] z-10 overflow-hidden">
//         {/* Bridge Container with Perspective */}
//         <div className="relative w-full h-full perspective-1000 origin-bottom">
//           {/* Bridge Group with 45-degree rotation */}
//           <div className="relative w-full h-full transform rotate-y-45 transform-style-preserve-3d">
            
//             {/* Bridge Deck */}
//             <div className="absolute bottom-0 left-1/4 w-3/4 h-6 bg-[#5E3023] transform translate-z-20 rounded-t-md">
//               {/* Wooden Planks */}
//               {[...Array(15)].map((_, i) => (
//                 <div 
//                   key={i}
//                   className="absolute top-0 left-0 w-full h-1 bg-[#6F4E37]"
//                   style={{
//                     transform: `translateY(${i * 0.4}px)`,
//                     opacity: 1 - (i * 0.03)
//                   }}
//                 />
//               ))}
//             </div>
            
//             {/* Suspension Cables */}
//             <div className="absolute bottom-0 left-1/4 w-3/4 h-full">
//               {/* Main Cable (left) */}
//               <div className="absolute left-0 top-0 w-px h-full bg-[#D8B07C] origin-bottom transform rotate-x-20" />
              
//               {/* Main Cable (right) */}
//               <div className="absolute right-0 top-0 w-px h-full bg-[#D8B07C] origin-bottom transform rotate-x-20" />
              
//               {/* Vertical Suspenders */}
//               {[...Array(8)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute bottom-0 w-px h-16 bg-[#D8B07C]"
//                   style={{
//                     left: `${20 + (i * 10)}%`,
//                     transform: `translateY(${-i * 2}px) rotate-x-20`
//                   }}
//                 />
//               ))}
//             </div>
            
//             {/* Support Towers */}
//             <div className="absolute bottom-0 left-1/4 w-6 h-24 bg-[#3A2018] transform translate-z-10" />
//             <div className="absolute bottom-0 right-1/4 w-6 h-32 bg-[#3A2018] transform translate-z-30" />
            
//             {/* Distant End of Bridge */}
//             <div className="absolute bottom-0 right-0 w-16 h-8 bg-[#3A2018] opacity-70 transform translate-z-50" />
//           </div>
//         </div>
//       </div>

//       <div className="relative z-30 flex-col gap-8 flex justify-self-center mt-[10vh]">
//     <ConveyorBelt/>
//       </div>
//     </div>
//   );
// };

// export default Lighthouse;


// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import ConveyorBelt from "./ConveyorBelt";

// const Lighthouse = () => {
//   const [lightOn, setLightOn] = useState(true);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-[#011936] to-[#033F63] overflow-hidden text-white">

//       {/* Lighthouse Image */}
//       <div className="absolute bottom-0 left-12 z-20">
//         <div
//           className="relative h-[700px] w-40 md:w-[200px] cursor-pointer"
//           onClick={() => setLightOn(prev => !prev)}
//         >
//           <Image
//             src="/lighthouse.png"
//             alt="Lighthouse"
//             fill
//             className="w-full drop-shadow-2xl object-cover"
//             priority
//           />

//           {/* Light Beam */}
//           {lightOn && (
//             <motion.div
//               className="absolute top-[8%] left-[72%] h-[120px] w-[1200px] z-10 origin-left"
//               style={{
//                 background:
//                   "linear-gradient(90deg, rgba(255, 236, 153, 0.95) 0%, rgba(255, 236, 153, 0.4) 30%, rgba(255, 236, 153, 0) 100%)",
//                 clipPath: "polygon(0% 48%, 100% 0%, 100% 100%, 0% 52%)",
//                 filter: "blur(12px)",
//               }}
//               animate={{ rotate: [0, 20, -20, 0] }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           )}
//         </div>
//       </div>

//       {/* Natural-looking Ground / Cliff */}
//       <div className="absolute bottom-0 left-0 w-[40%] h-44 z-10 overflow-hidden">
//         <svg viewBox="0 0 800 200" className="w-full h-full" preserveAspectRatio="none">
//           <path
//             d="M0,200 C150,180 250,120 400,150 C550,180 650,100 800,130 L800,200 L0,200 Z"
//             fill="#022B3A"
//           />
//           <path
//             d="M0,200 C50,190 150,170 250,160 C350,150 450,160 550,150 C650,140 750,160 800,150 L800,200 L0,200 Z"
//             fill="#011627"
//             opacity="0.7"
//           />
//         </svg>
//       </div>

//       {/* Bridge with diagonal perspective */}
//       <div
//         className="absolute top-0 right-2 w-[80%] h-[80%] z-10 overflow-hidden"
//         style={{
//           perspective: "2400px",
//           perspectiveOrigin: "left bottom", // viewer near bottom-left corner
//         }}
//       >
//         <div
//           className="relative w-full h-full"
//           style={{
//             transformStyle: "preserve-3d",
//             // transformOrigin: "bottom left",
//             // transform: "rotateX(-15deg) rotateY(30deg)",
//               transformOrigin: "bottom right", // switch from bottom left to bottom right
//   transform: "rotateX(-15deg) rotateY(-95deg)",
//           }}
//         >
//           {/* Bridge Deck */}
//           <div className="absolute bottom-0 left-1/4 w-3/4 h-6 bg-[#5E3023] rounded-t-md" style={{ transform: "translateZ(20px)" }}>
//             {[...Array(15)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute top-0 left-0 w-full h-1 bg-[#6F4E37]"
//                 style={{
//                   transform: `translateY(${i * 0.4}px)`,
//                   opacity: 1 - (i * 0.03),
//                 }}
//               />
//             ))}
//           </div>

//           {/* Suspension Cables */}
//           <div className="absolute bottom-0 left-1/4 w-3/4 h-full">
//             {/* Main Cable (left) */}
//             <div className="absolute left-0 top-0 w-px h-full bg-[#D8B07C]" style={{ transformOrigin: "bottom", transform: "rotateX(20deg)" }} />

//             {/* Main Cable (right) */}
//             <div className="absolute right-0 top-0 w-px h-full bg-[#D8B07C]" style={{ transformOrigin: "bottom", transform: "rotateX(20deg)" }} />

//             {/* Vertical Suspenders */}
//             {[...Array(8)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute bottom-0 w-px h-16 bg-[#D8B07C]"
//                 style={{
//                   left: `${20 + i * 10}%`,
//                   transform: `translateY(${-i * 2}px) rotateX(20deg)`,
//                 }}
//               />
//             ))}
//           </div>

//           {/* Support Towers */}
//           <div className="absolute bottom-0 left-1/4 w-6 h-24 bg-[#3A2018]" style={{ transform: "translateZ(10px)" }} />
//           <div className="absolute bottom-0 right-1/4 w-6 h-32 bg-[#3A2018]" style={{ transform: "translateZ(30px)" }} />

//           {/* Distant End of Bridge */}
//           <div className="absolute bottom-0 right-0 w-16 h-8 bg-[#3A2018] opacity-70" style={{ transform: "translateZ(50px)" }} />
//         </div>
//       </div>

//       {/* Conveyor Belt below lighthouse */}
//       <div className="relative z-30 flex-col gap-8 flex justify-self-center mt-[10vh]">
//         <ConveyorBelt />
//       </div>
//     </div>
//   );
// };

// export default Lighthouse;



// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import ConveyorBelt from "./ConveyorBelt";

// const Lighthouse = () => {
//   const [lightOn, setLightOn] = useState(true);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-[#011936] to-[#033F63] overflow-hidden text-white">

//       {/* Lighthouse Image */}
//       <div className="absolute bottom-0 left-12 z-20">
//         <div
//           className="relative h-[700px] w-40 md:w-[200px] cursor-pointer"
//           onClick={() => setLightOn(prev => !prev)}
//         >
//           <Image
//             src="/lighthouse.png"
//             alt="Lighthouse"
//             fill
//             className="w-full drop-shadow-2xl object-cover"
//             priority
//           />

//           {/* Light Beam */}
//           {lightOn && (
//             <motion.div
//               className="absolute top-[8%] left-[72%] h-[120px] w-[1200px] z-10 origin-left"
//               style={{
//                 background:
//                   "linear-gradient(90deg, rgba(255, 236, 153, 0.95) 0%, rgba(255, 236, 153, 0.4) 30%, rgba(255, 236, 153, 0) 100%)",
//                 clipPath: "polygon(0% 48%, 100% 0%, 100% 100%, 0% 52%)",
//                 filter: "blur(12px)",
//               }}
//               animate={{ rotate: [0, 20, -20, 0] }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           )}
//         </div>
//       </div>

//       {/* Natural-looking Ground / Cliff */}
//       <div className="absolute bottom-0 left-0 w-[40%] h-44 z-10 overflow-hidden">
//         <svg viewBox="0 0 800 200" className="w-full h-full" preserveAspectRatio="none">
//           <path
//             d="M0,200 C150,180 250,120 400,150 C550,180 650,100 800,130 L800,200 L0,200 Z"
//             fill="#022B3A"
//           />
//           <path
//             d="M0,200 C50,190 150,170 250,160 C350,150 450,160 550,150 C650,140 750,160 800,150 L800,200 L0,200 Z"
//             fill="#011627"
//             opacity="0.7"
//           />
//         </svg>
//       </div>

//       {/* Suspension Bridge with improved perspective */}
//     <div
// className="absolute -bottom-[27%] left-[45%] w-full h-[80%] z-10 overflow-hidden"
// style={{
// perspective: "3000px",
// perspectiveOrigin: "left bottom", // viewer near bottom-left corner
// }}
// >
// <div
// className="relative w-full h-full"
// style={{
// transformStyle: "preserve-3d",
// transformOrigin: "bottom left",
// transform: "rotateX(-45deg) rotateY(40deg)",
// }}
// >
//           {/* Main Suspension Cables (curved parabola shape) */}
//           <div className="absolute top-0 left-1/4 w-3/4 h-full">
//             {/* Left Main Cable */}
//             <svg
//               className="absolute left-0 top-0 w-full h-full"
//               viewBox="0 0 100 100"
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M0,100 Q50,30 100,100"
//                 stroke="#D8B07C"
//                 strokeWidth="0.5"
//                 fill="none"
//               />
//             </svg>

//             {/* Right Main Cable */}
//             <svg
//               className="absolute right-0 top-0 w-full h-full"
//               viewBox="0 0 100 100"
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M0,100 Q50,30 100,100"
//                 stroke="#D8B07C"
//                 strokeWidth="0.5"
//                 fill="none"
//               />
//             </svg>

//             {/* Vertical Suspenders (evenly spaced) */}
//             {/* {[...Array(12)].map((_, i) => {
//               const position = i / 11; // 0 to 1
//               const cableHeight = 30 + Math.sin(position * Math.PI) * 20; // Parabolic curve
//               return (
//                 <div
//                   key={i}
//                   className="absolute bottom-0 w-px bg-[#D8B07C]"
//                   style={{
//                     left: `${10 + position * 80}%`,
//                     height: `${cableHeight}%`,
//                     transform: `translateY(${-i * 1}px) rotateX(20deg)`,
//                   }}
//                 />
//               );
//             })} */}

//             {[...Array(12)].map((_, i) => {
//   const position = i / 11; // 0 to 1
//   const cableHeight = 30 + Math.sin(position * Math.PI) * 20;

//   return (
//     <div
//       key={i}
//       className="absolute bottom-0 w-px bg-[#D8B07C]"
//       style={{
//         left: `${10 + position * 80}%`,
//         height: `${cableHeight}%`,
//         transform: `translateY(${-i * 1}px) rotateX(20deg)`,
//       }}
//     >
//       {/* Bulb at the top of the suspender */}
//       <motion.div
//         className="absolute top-0 left-1/2 w-2.5 h-2.5 rounded-full bg-yellow-300 shadow-xl"
//         style={{
//           transform: "translateX(-50%)",
//           boxShadow: "0 0 8px 4px rgba(255, 234, 138, 0.7)",
//         }}
//         animate={{
//           opacity: [1, 0.6, 1],
//           scale: [1, 1.2, 1],
//         }}
//         transition={{
//           duration: 1.5 + Math.random(),
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//     </div>
//   );
// })}

//           </div>

//           {/* Bridge Deck (with thickness and texture) */}
//           <div
//             className="absolute bottom-0 left-1/4 w-3/4 h-4 bg-[#5E3023] rounded-t-sm"
//             style={{
//               transform: "translateZ(20px)",
//               boxShadow: "0 -2px 4px rgba(0,0,0,0.3)",
//             }}
//           >
//             {/* Deck texture */}
//             <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//               {[...Array(40)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute top-0 left-0 w-full h-px bg-[#6F4E37]"
//                   style={{
//                     transform: `translateY(${i * 1}px)`,
//                     opacity: 0.7 - (i * 0.02),
//                   }}
//                 />
//               ))}
//             </div>
            
//             {/* Guard rails */}
//             <div className="absolute -top-2 left-0 w-full h-1 bg-[#3A2018] rounded-sm" />
//             <div className="absolute -top-2 left-0 w-full h-1 bg-[#3A2018] rounded-sm" style={{ transform: "translateY(3px)" }} />
//           </div>

//           {/* Support Towers (with more detail) */}
//           <div
//             className="absolute bottom-0 left-1/4 w-8 h-32 bg-[#3A2018]"
//             style={{
//               transform: "translateZ(10px)",
//               boxShadow: "2px 0 4px rgba(0,0,0,0.5)",
//             }}
//           >
//             {/* Tower cross beams */}
//             <div className="absolute w-10 h-2 bg-[#2A1810] left-1/2 top-1/3 transform -translate-x-1/2" />
//             <div className="absolute w-10 h-2 bg-[#2A1810] left-1/2 top-2/3 transform -translate-x-1/2" />
//           </div>
          
//           <div
//             className="absolute bottom-0 right-1/4 w-8 h-40 bg-[#3A2018]"
//             style={{
//               transform: "translateZ(30px)",
//               boxShadow: "2px 0 4px rgba(0,0,0,0.5)",
//             }}
//           >
//             {/* Tower cross beams */}
//             <div className="absolute w-10 h-2 bg-[#2A1810] left-1/2 top-1/3 transform -translate-x-1/2" />
//             <div className="absolute w-10 h-2 bg-[#2A1810] left-1/2 top-2/3 transform -translate-x-1/2" />
//           </div>

//           {/* Anchorages (where cables attach to ground) */}
//           <div
//             className="absolute bottom-0 left-1/4 w-12 h-8 bg-[#2A1810] rounded-t-sm"
//             style={{
//               transform: "translateZ(10px) translateX(-10px)",
//               clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)",
//             }}
//           />
//           <div
//             className="absolute bottom-0 right-1/4 w-12 h-10 bg-[#2A1810] rounded-t-sm"
//             style={{
//               transform: "translateZ(30px) translateX(10px)",
//               clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
//             }}
//           />

//           {/* Distant mountains/cliffs */}
//           <div
//             className="absolute bottom-0 right-0 w-32 h-40 bg-[#022B3A] opacity-80"
//             style={{
//               transform: "translateZ(50px)",
//               clipPath: "polygon(0% 100%, 30% 40%, 50% 60%, 70% 30%, 100% 70%, 100% 100%)",
//             }}
//           />
//         </div>
//       </div>

//       {/* Conveyor Belt below lighthouse */}
//       <div className="relative z-30 flex-col gap-8 flex justify-self-center mt-[10vh]">
//         <ConveyorBelt />
//       </div>
//     </div>
//   );
// };

// export default Lighthouse;



"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ConveyorBelt from "./ConveyorBelt";

const Lighthouse = () => {
  const [lightOn, setLightOn] = useState(true);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#011936] to-[#033F63] overflow-hidden text-white">

      {/* Lighthouse Image */}
      <div className="absolute bottom-0 left-12 z-20">
        <div
          className="relative h-[700px] w-40 md:w-[200px] cursor-pointer"
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
              className="absolute top-[8%] left-[72%] h-[120px] w-[1200px] z-10 origin-left"
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
      <div className="absolute bottom-0 left-0 w-[40%] h-44 z-10 overflow-hidden">
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
        className="absolute -bottom-[10%] left-[45%] w-full h-[80%] z-10 overflow-hidden"
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
            className="absolute bottom-0 left-1/4 w-8 h-[200px] bg-[#3A2018]"
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
            className="absolute bottom-0 right-1/4 w-8 h-[250px] bg-[#3A2018]"
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
      <div className="relative z-30 flex-col gap-8 flex justify-self-center mt-[10vh]">
        <ConveyorBelt />
      </div>
    </div>
  );
};

export default Lighthouse;