
// import React, { useEffect, useState } from "react";
// import JellyCard from "./JellyCard";

// const jellyData = [
//   { title: "Alpha", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
//   { title: "Beta", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem..." },
//   { title: "Gamma", description: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt..." },
// ];

// const ConveyorBelt = () => {
//   const [isReady, setIsReady] = useState(false);
//   const ITEM_HEIGHT = 170;
//   const visibleItems = 3;

//   useEffect(() => {
//     // Ensure component is mounted and styles are loaded
//     const timer = setTimeout(() => setIsReady(true), 50);
//     return () => clearTimeout(timer);
//   }, []);

//   const animationDuration = jellyData.length * 4; // 4 seconds per item

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
//         // border: "1px solid rgba(255,255,255,0.2)",
//         // background: "rgba(1, 25, 54, 0.8)",
//         // boxShadow: "0 0 15px rgba(92, 245, 203, 0.4)",
//       }}
//     >
//       <div
//         className={`scrolling-container ${isReady ? 'animate' : ''}`}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           '--animation-duration': `${animationDuration}s`,
//           '--scroll-distance': `${ITEM_HEIGHT * jellyData.length}px`,
//         } as React.CSSProperties}
//       >
//         {/* Duplicate content for seamless loop */}
//         {[...jellyData, ...jellyData].map((card, idx) => (
//           <div key={idx} style={{ height: ITEM_HEIGHT, padding: "8px 0" }}>
//             <JellyCard title={card.title} description={card.description} />
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
  { title: "Alpha", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
  { title: "Beta", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem..." },
  { title: "Gamma", description: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt..." },
];

const ConveyorBelt = () => {
  const [isReady, setIsReady] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const ITEM_HEIGHT = 170;
  const visibleItems = 3;

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const animationDuration = jellyData.length * 4;

  return (
    <div
      className="conveyor-container"
      style={{
        height: ITEM_HEIGHT * visibleItems,
        width: 320,
        overflow: "hidden",
        margin: "0 auto",
        position: "relative",
        borderRadius: "12px",
      }}
    >
      <div
        className={`scrolling-container ${isReady ? 'animate' : ''}`}
        style={{
          display: "flex",
          flexDirection: "column",
          '--animation-duration': `${animationDuration}s`,
          '--scroll-distance': `${ITEM_HEIGHT * jellyData.length}px`,
          animationPlayState: isPaused ? 'paused' : 'running',
        } as React.CSSProperties}
      >
        {[...jellyData, ...jellyData].map((card, idx) => (
          <div key={idx} style={{ height: ITEM_HEIGHT, padding: "8px 0" }}>
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