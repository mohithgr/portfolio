// // components/TreasureChest.jsx
// import React from 'react';
// import styles from './TreasureChest.module.css'; // For complex styles

// const TreasureChest = () => {
//   return (
//     <>
//       <input type="checkbox" id="toggle-treasure" className="sr-only" /> {/* sr-only hides visually but keeps accessible */}
//       <div id="treasure-chest-positioner" className={`${styles.treasureChestPositioner} relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
//         <label htmlFor="toggle-treasure" id="treasure-chest" className={`${styles.treasureChest} block cursor-pointer transition-all duration-200`}>
//           <div id="lid" className={`${styles.lid} absolute top-0 left-0 w-full h-1/3 transition-transform duration-300`}>
//             <div id="lid-left" className={`${styles.lidSide} ${styles.lidLeft} absolute overflow-hidden border-b border-black`}>
//               {[...Array(5)].map((_, i) => (
//                 <div key={`lid-left-panel-${i}`} className={`${styles.sidePanel}`}></div>
//               ))}
//             </div>
//             <div id="lid-panels" className={`${styles.lidPanels} w-[calc(10rem-0.2rem)] h-full translate-x-[0.1rem]`}>
//               {[...Array(5)].map((_, i) => (
//                 <div key={`panel-${i}`} id={`panel-${i}`} className={`${styles.panel} bg-[#D58757] h-[66%] w-full relative`}>
//                   <div className="board top"></div>
//                   <div className="board bottom"></div>
//                   <div className={`${styles.ironBand} ${styles.ironBandLeft} left-0`}>
//                     {[...Array(8)].map((_, j) => (
//                       <div key={`lid-band-left-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                     ))}
//                   </div>
//                   <div className={`${styles.ironBand} ${styles.ironBandMiddle} left-1/2 -ml-[0.55rem]`}>
//                     {[...Array(8)].map((_, j) => (
//                       <div key={`lid-band-middle-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                     ))}
//                   </div>
//                   <div className={`${styles.ironBand} ${styles.ironBandRight} right-[-0.1rem]`}>
//                     {[...Array(8)].map((_, j) => (
//                       <div key={`lid-band-right-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div id="lid-right" className={`${styles.lidSide} ${styles.lidRight} absolute overflow-hidden border-b border-black`}>
//               {[...Array(5)].map((_, i) => (
//                 <div key={`lid-right-panel-${i}`} className={`${styles.sidePanel}`}></div>
//               ))}
//             </div>
//           </div>

//           <div id="chest" className={`${styles.chest} absolute top-0 left-0 w-full h-1/3`}>
//             <div id="front-panel" className={`${styles.chestPanel} ${styles.frontBackPanel} `}>
//               {[...Array(4)].map((_, i) => (
//                 <div key={`front-chest-panel-${i}`} className={`${styles.sideChestPanel}`}></div>
//               ))}
//               <div className={`${styles.ironBars}`}>
//                 <div className={`${styles.ironBar} ${styles.ironBarLong} ${styles.topBar}`}>
//                   {[...Array(6)].map((_, i) => (
//                     <div key={`front-top-circle-cont-${i}`} className={`${styles.circleCont}`}>
//                       {[...Array(8)].map((_, j) => (
//                         <div key={`front-top-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//                 <div className={`${styles.ironBar} ${styles.ironBarLong} ${styles.bottomBar}`}>
//                   {[...Array(6)].map((_, i) => (
//                     <div key={`front-bottom-circle-cont-${i}`} className={`${styles.circleCont}`}>
//                       {[...Array(8)].map((_, j) => (
//                         <div key={`front-bottom-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//                 <div className={`${styles.ironBar} ${styles.ironBarShort} ${styles.middleBar}`}>
//                   <div id="lock" className={`${styles.lock} `}>
//                     <div id="keyhole" className={`${styles.keyhole}`}></div>
//                   </div>
//                 </div>
//                 <div className={`${styles.ironBar} ${styles.ironBarShort} ${styles.leftBar}`}>
//                   {[...Array(4)].map((_, i) => (
//                     <div key={`front-left-circle-cont-${i}`} className={`${styles.circleCont}`}>
//                       {[...Array(8)].map((_, j) => (
//                         <div key={`front-left-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//                 <div className={`${styles.ironBar} ${styles.ironBarShort} ${styles.rightBar}`}>
//                   {[...Array(4)].map((_, i) => (
//                     <div key={`front-right-circle-cont-${i}`} className={`${styles.circleCont}`}>
//                       {[...Array(8)].map((_, j) => (
//                         <div key={`front-right-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div id="left-panel" className={`${styles.chestPanel} ${styles.leftRightPanel}`}>
//               {[...Array(4)].map((_, i) => (
//                 <div key={`left-chest-panel-${i}`} className={`${styles.sideChestPanel}`}></div>
//               ))}
//               <div className={`${styles.ironBars}`}>
//                 <div className={`${styles.ironBar} ${styles.ironBarLong} ${styles.topBar}`}>
//                   {[...Array(3)].map((_, i) => (
//                     <div key={`left-top-circle-cont-${i}`} className={`${styles.circleCont}`}>
//                       {[...Array(8)].map((_, j) => (
//                         <div key={`left-top-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//                 <div className={`${styles.ironBar} ${styles.ironBarLong} ${styles.bottomBar}`}>
//                   {[...Array(3)].map((_, i) => (
//                     <div key={`left-bottom-circle-cont-${i}`} className={`${styles.circleCont}`}>
//                       {[...Array(8)].map((_, j) => (
//                         <div key={`left-bottom-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//                 <div className={`${styles.ironBar} ${styles.ironBarShort} ${styles.leftBar}`}>
//                   {[...Array(4)].map((_, i) => (
//                     <div key={`left-left-circle-cont-${i}`} className={`${styles.circleCont}`}>
//                       {[...Array(8)].map((_, j) => (
//                         <div key={`left-left-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//                 <div className={`${styles.ironBar} ${styles.ironBarShort} ${styles.rightBar}`}>
//                   {[...Array(4)].map((_, i) => (
//                     <div key={`left-right-circle-cont-${i}`} className={`${styles.circleCont}`}>
//                       {[...Array(8)].map((_, j) => (
//                         <div key={`left-right-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div id="bottom-panel" className={`${styles.chestPanel} ${styles.bottomPanel}`}>
//               {[...Array(4)].map((_, i) => (
//                 <div key={`bottom-chest-panel-${i}`} className={`${styles.sideChestPanel}`}></div>
//               ))}
//             </div>

//             <div id="right-panel" className={`${styles.chestPanel} ${styles.leftRightPanel}`}>
//               {[...Array(4)].map((_, i) => (
//                 <div key={`right-chest-panel-${i}`} className={`${styles.sideChestPanel}`}></div>
//               ))}
//               <div className={`${styles.ironBars}`}>
//                 <div className={`${styles.ironBar} ${styles.ironBarLong} ${styles.topBar}`}>
//                   {[...Array(3)].map((_, i) => (
//                     <div key={`right-top-circle-cont-${i}`} className={`${styles.circleCont}`}>
//                       {[...Array(8)].map((_, j) => (
//                         <div key={`right-top-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//                 <div className={`${styles.ironBar} ${styles.ironBarLong} ${styles.bottomBar}`}>
//                   {[...Array(3)].map((_, i) => (
//                     <div key={`right-bottom-circle-cont-${i}`} className={`${styles.circleCont}`}>
//                       {[...Array(8)].map((_, j) => (
//                         <div key={`right-bottom-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//                 <div className={`${styles.ironBar} ${styles.ironBarShort} ${styles.leftBar}`}>
//                   {[...Array(4)].map((_, i) => (
//                     <div key={`right-left-circle-cont-${i}`} className={`${styles.circleCont}`}>
//                       {[...Array(8)].map((_, j) => (
//                         <div key={`right-left-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//                 <div className={`${styles.ironBar} ${styles.ironBarShort} ${styles.rightBar}`}>
//                   {[...Array(4)].map((_, i) => (
//                     <div key={`right-right-circle-cont-${i}`} className={`${styles.circleCont}`}>
//                       {[...Array(8)].map((_, j) => (
//                         <div key={`right-right-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div id="back-panel" className={`${styles.chestPanel} ${styles.frontBackPanel}`}>
//               {[...Array(4)].map((_, i) => (
//                 <div key={`back-chest-panel-${i}`} className={`${styles.sideChestPanel}`}></div>
//               ))}
//               <div className={`${styles.ironBars}`}>
//                 <div className={`${styles.ironBar} ${styles.ironBarLong} ${styles.topBar}`}>
//                   {[...Array(6)].map((_, i) => (
//                     <div key={`back-top-circle-cont-${i}`} className={`${styles.circleCont}`}>
//                       {[...Array(8)].map((_, j) => (
//                         <div key={`back-top-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//                 <div className={`${styles.ironBar} ${styles.ironBarShort} ${styles.middleBar}`}></div>
//                 <div className={`${styles.ironBar} ${styles.ironBarLong} ${styles.bottomBar}`}>
//                   {[...Array(6)].map((_, i) => (
//                     <div key={`back-bottom-circle-cont-${i}`} className={`${styles.circleCont}`}>
//                       {[...Array(8)].map((_, j) => (
//                         <div key={`back-bottom-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//                 <div className={`${styles.ironBar} ${styles.ironBarShort} ${styles.leftBar}`}>
//                   {[...Array(4)].map((_, i) => (
//                     <div key={`back-left-circle-cont-${i}`} className={`${styles.circleCont}`}>
//                       {[...Array(8)].map((_, j) => (
//                         <div key={`back-left-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//                 <div className={`${styles.ironBar} ${styles.ironBarShort} ${styles.rightBar}`}>
//                   {[...Array(4)].map((_, i) => (
//                     <div key={`back-right-circle-cont-${i}`} className={`${styles.circleCont}`}>
//                       {[...Array(8)].map((_, j) => (
//                         <div key={`back-right-circle-${i}-${j}`} className={`${styles.circle}`}></div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </label>
//       </div>
//     </>
//   );
// };

// export default TreasureChest;

'use client'

import { useState } from 'react';
import Pebble from './Pebble';


const TreasureChest = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChest = () => {
    setIsOpen(!isOpen);
  };

 const pebblesData = [
  { label: 'Next.js', x: '-40vh', y: '-40vh', scale: 1 },
  { label: 'React.js',    x: '-60vh', y: '-50vh', scale: 0.9 },
  { label: 'Tailwind CSS',      x:'-60vh',   y: '-20vh', scale: 1.1 },
  { label: 'Shadcn/ui',     x: '20vh',  y: '-40vh', scale: 0.95 },
  { label: 'Gluestack',      x: '60vh',  y: '-80vh', scale: 1.05 },
  { label: 'Accessibility',      x: '90vh',  y: '-60vh', scale: 1.05 },
  { label: 'Responsive design',      x: '60vh',  y: '-20vh', scale: 1.05 },
  { label: 'CMS - Strapi',      x: '100vh',  y: '-35vh', scale: 1.05 },
];

  return (
    <div className="flex justify-center items-center  perspective-[1000]">
      {/* Main container with perspective */}
      <div
        className="relative w-[250px] h-48 cursor-pointer transition-all duration-1000 preserve-3d"
        onClick={toggleChest}
        style={{
          transform: 'rotateY(30deg) rotateX(-5deg)',
        }}
      >
        {/* Chest base - main body */}
        <div className="absolute bottom-0 w-full h-32 bg-amber-800 rounded-lg shadow-2xl border-t-4 border-amber-900">
          {/* Front side */}
          <div
            className="absolute top-0 left-0 w-full h-32 bg-amber-800 rounded-lg"
            style={{
              transform: 'perspective(1200px) rotateX(2deg)',
              transformOrigin: 'bottom',
            }}
          >
            {/* Wooden planks */}
            <div className="absolute top-0 left-0 w-full h-4 bg-amber-700 rounded-t-lg"></div>
            <div className="absolute top-4 left-2 w-[92%] h-4 bg-amber-900 rounded-sm"></div>
            <div className="absolute top-8 left-6 w-[84%] h-4 bg-amber-700 rounded-sm"></div>
            <div className="absolute top-12 left-3 w-[90%] h-4 bg-amber-900 rounded-sm"></div>

            {/* Metal bands */}
            <div className="absolute top-6 left-0 w-full h-2 bg-gray-400"></div>
            <div className="absolute top-18 left-0 w-full h-2 bg-gray-400"></div>

            {/* Lock plate */}
            <div className="absolute top-1/2 left-[35%] transform -translate-y-1/2 w-12 h-16 bg-gray-300 rounded-sm border-2 border-gray-500">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-400 rounded-full border-2 border-gray-600"></div>
            </div>
          </div>

          {/* Left side */}
          <div
            className="absolute top-0 left-0 h-32 w-16 bg-amber-700 origin-left"
            style={{
              transform: 'rotateY(-90deg) translateX(-16px) skewY(5deg)',
              background: 'linear-gradient(to right, #b45309, #92400e)',
            }}
          ></div>

          {/* Right side */}
          <div
            className="absolute top-0 right-0 h-32 w-3 bg-amber-950 origin-right"
            style={{
              transform: 'rotateY(90deg) translateX(3px) skewY(-2deg)',
              background: 'linear-gradient(to left, #451a03, #1e0d00)',
              opacity: 0.5,
            }}
          ></div>
        </div>

        {/* Chest lid - now opening outward toward viewer */}
        <div
          className={`absolute top-0 left-0 w-full h-16 bg-amber-700 rounded-t-lg origin-[50%_100%] transition-transform duration-1000 ease-out`}
          style={{
            transform: isOpen 
              ? 'rotateX(120deg) translateZ(10px)' // Opens upward toward viewer
              : 'rotateX(0deg)',
            transformStyle: 'preserve-3d',
            boxShadow: '0 -5px 10px rgba(0,0,0,0.3)',
          }}
        >
          {/* Front of lid */}
          <div className="absolute bottom-0 left-0 w-full h-4 bg-amber-600 rounded-t-lg"></div>
          
          {/* Top of lid */}
          <div className="absolute top-0 left-0 w-full h-full bg-amber-700 rounded-t-lg">
            {/* Wood grain details */}
            <div className="absolute top-2 left-4 w-[85%] h-2 bg-amber-800 rounded-sm"></div>
            <div className="absolute top-6 left-2 w-[92%] h-2 bg-amber-600 rounded-sm"></div>
            <div className="absolute top-10 left-5 w-[80%] h-2 bg-amber-800 rounded-sm"></div>
          </div>
          
          {/* Inner side of lid (visible when open) */}
          <div 
            className={`absolute bottom-0 left-0 w-full h-full bg-amber-800 rounded-t-lg ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            style={{
              transform: 'rotateX(90deg) translateY(16px) translateZ(-16px)',
              transition: 'opacity 0.3s ease 0.3s',
            }}
          ></div>
        </div>

        {/* Chest handle - moves with lid */}
        <div
          className={`absolute top-14 left-12 w-10 h-2 bg-gray-500 rounded-full transition-transform duration-1000 ease-out`}
          style={{
            transform: isOpen 
              ? 'rotate(15deg) translateZ(30px) translateY(-30px)' 
              : 'rotate(15deg) translateZ(8px)',
          }}
        ></div>

        {/* Treasure contents - only visible when open */}
        {isOpen && (
          <>
            {/* Golden glow */}
            <div className="absolute inset-0 bg-yellow-400 rounded-lg opacity-20 blur-md animate-pulse"></div>
            
            {/* Treasure items */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-20 flex flex-wrap justify-center">
              {/* Gold coins */}
              <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-md m-1"></div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-md m-1"></div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-md m-1"></div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-md m-1"></div>
              
              {/* Gems */}
              <div className="w-6 h-6 bg-red-500 rounded-full shadow-md m-1 transform rotate-45"></div>
              <div className="w-6 h-6 bg-blue-500 rounded-full shadow-md m-1 transform rotate-45"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full shadow-md m-1 transform rotate-45"></div>
              
              {/* Pearl */}
              <div className="w-10 h-10 bg-white rounded-full shadow-md m-1 border border-gray-200"></div>
            </div>
          </>
        )}
        {/* {isOpen && ( */}
  <>
    {/* Pebbles with skill labels */}
 {pebblesData.map((pebble, i) => (
        <Pebble
          key={i}
          label={pebble.label}
          delay={i * 0.15}
          isOpen={isOpen}
          x={pebble.x}
          y={pebble.y}
          scale={pebble.scale}
        />
      ))}
  </>
{/* )} */}
      </div>
    </div>
  );
};

export default TreasureChest;
