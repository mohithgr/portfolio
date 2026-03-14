// import React, { useEffect, useState } from "react";
// import JellyCard from "./JellyCard";

// const jellyData = [
//   { title: "Alpha", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
//   { title: "Beta", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem..." },
//   { title: "Gamma", description: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt..." },
// ];

// const ConveyorBelt = () => {
//   const [isReady, setIsReady] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const ITEM_HEIGHT = 170;
//   const visibleItems = 3;

//   useEffect(() => {
//     const timer = setTimeout(() => setIsReady(true), 50);
//     return () => clearTimeout(timer);
//   }, []);

//   const animationDuration = jellyData.length * 4;

//   return (
//     <div
//       className="conveyor-container"
//       style={{
//         height: ITEM_HEIGHT * visibleItems,
//         width: 320,
//         overflow: "hidden",
//         margin: "0 auto",
//         position: "relative",
//         borderRadius: "12px",
//       }}
//     >
//       <div
//         className={`scrolling-container ${isReady ? 'animate' : ''}`}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           '--animation-duration': `${animationDuration}s`,
//           '--scroll-distance': `${ITEM_HEIGHT * jellyData.length}px`,
//           animationPlayState: isPaused ? 'paused' : 'running',
//         } as React.CSSProperties}
//       >
//         {[...jellyData, ...jellyData].map((card, idx) => (
//           <div key={idx} style={{ height: ITEM_HEIGHT, padding: "8px 0" }}>
//             <JellyCard 
//               title={card.title} 
//               description={card.description}
//               onHover={(hovering) => setIsPaused(hovering)}
//             />
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         .scrolling-container {
//           transform: translateY(0);
//         }
        
//         .scrolling-container.animate {
//           animation: scrollUp var(--animation-duration) linear infinite;
//         }

//         @keyframes scrollUp {
//           0% {
//             transform: translateY(0);
//           }
//           100% {
//             transform: translateY(calc(-1 * var(--scroll-distance)));
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ConveyorBelt;


import React, { useEffect, useState } from "react";
import JellyCard from "./JellyCard";

const jellyData = [
  { title: "Alpha", description: "Lorem ipsum dolor sit amet..." },
  { title: "Beta", description: "Sed ut perspiciatis unde omnis..." },
  { title: "Gamma", description: "Consectetur adipiscing elit..." },
];

const ConveyorBelt = () => {
  const [isReady, setIsReady] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const ITEM_HEIGHT = isMobile ? 150 : 170;
  const visibleItems = isMobile ? 3 : 3;

  const animationDuration = jellyData.length * 4;

  return (
    <div
      className="conveyor-container"
      style={{
        height: ITEM_HEIGHT * visibleItems,
        width: isMobile ? 240 : 320,
        overflow: "hidden",
        margin: "0 auto",
        position: "relative",
        borderRadius: "12px",
      }}
    >
      <div
        className={`scrolling-container ${isReady ? "animate" : ""}`}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "12px" : "8px",
          "--animation-duration": `${animationDuration}s`,
          "--scroll-distance": `${(ITEM_HEIGHT + (isMobile ? 12 : 8)) * jellyData.length}px`,
          animationPlayState: isPaused ? "paused" : "running",
        } as React.CSSProperties}
      >
        {[...jellyData, ...jellyData].map((card, idx) => (
          <div
            key={idx}
            style={{
              height: ITEM_HEIGHT,
            }}
          >
            <JellyCard
              title={card.title}
              description={card.description}
              onHover={(hovering) => setIsPaused(hovering)}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrolling-container {
          transform: translateY(0);
        }

        .scrolling-container.animate {
          animation: scrollUp var(--animation-duration) linear infinite;
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-1 * var(--scroll-distance)));
          }
        }
      `}</style>
    </div>
  );
};

export default ConveyorBelt;