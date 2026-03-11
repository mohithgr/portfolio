// 'use client'
// import { motion } from "framer-motion";

// export function GlassJar({ show }) {
//   return (
//     <motion.div
//       className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
//       animate={{
//         x: show ? ['-50%', '-52%', '-50%'] : '-50%',
//         rotate: show ? [0, -2, 0] : 0,
//       }}
//       transition={{
//         duration: 3,
//         repeat: Infinity,
//         repeatType: 'loop',
//         ease: 'easeInOut',
//       }}
//     >
//       {/* Beach Washed Bottle */}
//       <div className="relative w-40 h-24">
//         {/* Sand mound underneath */}
//         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-amber-200 rounded-full" />
        
//         {/* Bottle body */}
//         <div className="absolute top-1/2 left-0 w-full h-16 -translate-y-1/2 bg-white/20 border border-white/40 rounded-full backdrop-blur-[1px] overflow-hidden">
//           {/* Glass imperfections */}
//           <div className="absolute top-0 left-1/4 w-1/2 h-full bg-white/10 transform -skew-x-6" />
//           <div className="absolute top-0 left-1/2 w-4 h-full bg-white/15 rounded-full" />
          
//           {/* Sea water inside */}
//           <div className="absolute bottom-0 left-0 w-full h-6 bg-teal-300/40 rounded-b-full">
//             {/* Water surface shimmer */}
//             <div className="absolute top-0 left-0 w-full h-1 bg-white/30 rounded-full" />
//             {/* Sand settled at bottom */}
//             <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-200/50 rounded-b-full" />
//           </div>
          
//           {/* Wet uneven parchment note inside */}
//           <motion.div 
//             className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 flex items-center justify-center"
//             style={{
//               backdropFilter: 'blur(0.5px)',
//               transform: 'rotate(-2deg)'
//             }}
//             animate={{
//               y: [-1, 0, -1],
//               opacity: [0.9, 1, 0.9]
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: 'easeInOut'
//             }}
//           >
//             <div className="absolute inset-0 overflow-hidden">
//               {/* Paper shape with irregular edges */}
//               <svg viewBox="0 0 100 40" className="w-full h-full">
//                 <path 
//                   d="M5,5 
//                    Q10,0 15,5
//                    Q20,10 25,3
//                    Q30,0 35,7
//                    Q40,10 45,5
//                    Q50,0 55,8
//                    Q60,10 65,4
//                    Q70,0 75,6
//                    Q80,10 85,5
//                    Q90,0 95,7
//                    L95,35
//                    Q90,40 85,35
//                    Q80,30 75,37
//                    Q70,40 65,33
//                    Q60,30 55,38
//                    Q50,40 45,35
//                    Q40,30 35,37
//                    Q30,40 25,34
//                    Q20,30 15,35
//                    Q10,40 5,35Z" 
//                   fill="rgba(253, 245, 230, 0.85)"
//                   stroke="rgba(210, 180, 140, 0.5)"
//                   strokeWidth="0.5"
//                 />
//               </svg>
//             </div>
//             <span className="relative z-10 text-xs font-medium text-amber-800 drop-shadow-sm">About me</span>
//           </motion.div>
          
//           {/* Seaweed/particles floating */}
//           <div className="absolute top-4 left-4 w-1 h-3 bg-green-700/50 rotate-45" />
//           <div className="absolute top-3 right-6 w-1 h-2 bg-green-700/40 -rotate-12" />
//         </div>
        
//         {/* Bottle neck */}
//         <div className="absolute top-1/2 -right-3 w-6 h-8 bg-white/30 border-r border-white/50 rounded-r-full -translate-y-1/2 transform rotate-2 origin-left">
//           <div className="absolute top-2 right-0 w-1 h-4 bg-yellow-200/70 rounded-r" />
//         </div>
        
//         {/* Cork */}
//         <div className="absolute top-1/2 -right-1 w-3 h-6 bg-amber-700/80 rounded-r -translate-y-1/2 transform -rotate-6" />
        
//         {/* Sand stuck to bottle */}
//         <div className="absolute bottom-2 left-6 w-8 h-2 bg-amber-200/60 rounded-full transform rotate-12" />
//         <div className="absolute bottom-4 right-8 w-4 h-1 bg-amber-200/50 rounded-full" />
//       </div>
      
//       {/* Subtle water reflection underneath */}
//       {show && (
//         <motion.div 
//           className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-2 bg-white/10 rounded-full blur-sm"
//           animate={{ opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         />
//       )}
//     </motion.div>
//   );
// }





// 'use client'
// import { motion } from "framer-motion";

// export function GlassJar({ show }) {
//   return (
//     <motion.div
//       className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30"
//       initial={{ y: 300, opacity: 0, rotate: 15 }}
//       animate={{
//         y: show ? 0 : 300,
//         opacity: show ? 1 : 0,
//         rotate: show ? [15, -2, 0] : 15,
//         x: show ? ['-50%', '-52%', '-50%'] : '-50%',
//       }}
//       transition={{
//         y: { duration: 1.5, ease: 'easeOut' },
//         rotate: { duration: 2, ease: 'easeOut' },
//         x: show ? { 
//           duration: 3, 
//           repeat: Infinity, 
//           repeatType: 'loop',
//           ease: 'easeInOut' 
//         } : {}
//       }}
//     >
//       {/* Beach Washed Bottle */}
//       <div className="relative w-40 h-24">
//         {/* Bottle body */}
//         <div className="absolute top-1/2 left-0 w-full h-16 -translate-y-1/2 bg-white/20 border border-white/40 rounded-full backdrop-blur-[1px] overflow-hidden">
//           {/* Glass imperfections */}
//           <div className="absolute top-0 left-1/4 w-1/2 h-full bg-white/10 transform -skew-x-6" />
//           <div className="absolute top-0 left-1/2 w-4 h-full bg-white/15 rounded-full" />
          
//           {/* Sea water inside */}
//           <div className="absolute bottom-0 left-0 w-full h-6 bg-teal-300/40 rounded-b-full">
//             <div className="absolute top-0 left-0 w-full h-1 bg-white/30 rounded-full" />
//           </div>
          
//           {/* Wet parchment note */}
//           <motion.div 
//             className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 flex items-center justify-center"
//             style={{ transform: 'rotate(-2deg)' }}
//             animate={{
//               y: [-1, 0, -1],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: 'easeInOut'
//             }}
//           >
//             <div className="absolute inset-0 overflow-hidden">
//               <svg viewBox="0 0 100 40" className="w-full h-full">
//                 <path 
//                   d="M5,5 Q10,0 15,5 Q20,10 25,3 Q30,0 35,7 Q40,10 45,5 Q50,0 55,8 Q60,10 65,4 Q70,0 75,6 Q80,10 85,5 Q90,0 95,7 L95,35 Q90,40 85,35 Q80,30 75,37 Q70,40 65,33 Q60,30 55,38 Q50,40 45,35 Q40,30 35,37 Q30,40 25,34 Q20,30 15,35 Q10,40 5,35Z" 
//                   fill="rgba(253, 245, 230, 0.85)"
//                   stroke="rgba(210, 180, 140, 0.5)"
//                   strokeWidth="0.5"
//                 />
//               </svg>
//             </div>
//             <span className="relative z-10 text-xs font-medium text-amber-800 drop-shadow-sm">About me</span>
//           </motion.div>
          
//           {/* Seaweed particles */}
//           <div className="absolute top-4 left-4 w-1 h-3 bg-green-700/50 rotate-45" />
//           <div className="absolute top-3 right-6 w-1 h-2 bg-green-700/40 -rotate-12" />
//         </div>
        
//         {/* Bottle neck */}
//         <div className="absolute top-1/2 -right-3 w-6 h-8 bg-white/30 border-r border-white/50 rounded-r-full -translate-y-1/2 transform rotate-2 origin-left">
//           <div className="absolute top-2 right-0 w-1 h-4 bg-yellow-200/70 rounded-r" />
//         </div>
        
//         {/* Cork */}
//         <div className="absolute top-1/2 -right-1 w-3 h-6 bg-amber-700/80 rounded-r -translate-y-1/2 transform -rotate-6" />
        
//         {/* Sand stuck to bottle */}
//         <div className="absolute bottom-2 left-6 w-8 h-2 bg-amber-200/60 rounded-full transform rotate-12" />
//       </div>
//     </motion.div>
//   );
// }


'use client'
import { motion } from "framer-motion";

export function GlassJar({ show }) {
  return (
    <motion.div
      className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30"
      initial={{ y: 300, opacity: 0, rotate: 15 }}
      animate={{
        y: show ? 0 : 300,
        opacity: show ? 1 : 0,
        rotate: show ? [15, -2, 0] : 15,
        x: show ? ['-50%', '-52%', '-50%'] : '-50%',
      }}
      transition={{
        y: { duration: 1.5, ease: 'easeOut' },
        rotate: { duration: 2, ease: 'easeOut' },
        x: show ? { 
          duration: 3, 
          repeat: Infinity, 
          repeatType: 'loop',
          ease: 'easeInOut' 
        } : {}
      }}
    >
      {/* Beach Washed Bottle */}
      <div className="relative w-40 h-24">
        {/* Bottle body */}
        <div className="absolute top-1/2 left-0 w-full h-16 -translate-y-1/2 bg-white/20 border border-white/40 rounded-full backdrop-blur-[1px] overflow-hidden">
          {/* Glass imperfections */}
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-white/10 transform -skew-x-6" />
          <div className="absolute top-0 left-1/2 w-4 h-full bg-white/15 rounded-full" />
          
          {/* Sea water inside */}
          <div className="absolute bottom-0 left-0 w-full h-6 bg-teal-300/40 rounded-b-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/30 rounded-full" />
          </div>
          
          {/* Wet parchment note */}
          <motion.div 
            className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 flex items-center justify-center"
            style={{ transform: 'rotate(-2deg)' }}
            animate={{
              y: [-1, 0, -1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <path 
                  d="M5,5 Q10,0 15,5 Q20,10 25,3 Q30,0 35,7 Q40,10 45,5 Q50,0 55,8 Q60,10 65,4 Q70,0 75,6 Q80,10 85,5 Q90,0 95,7 L95,35 Q90,40 85,35 Q80,30 75,37 Q70,40 65,33 Q60,30 55,38 Q50,40 45,35 Q40,30 35,37 Q30,40 25,34 Q20,30 15,35 Q10,40 5,35Z" 
                  fill="rgba(253, 245, 230, 0.85)"
                  stroke="rgba(210, 180, 140, 0.5)"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <span className="relative z-10 text-xs font-medium text-amber-800 drop-shadow-sm">About me</span>
          </motion.div>
          
          {/* Seaweed particles */}
          <div className="absolute top-4 left-4 w-1 h-3 bg-green-700/50 rotate-45" />
          <div className="absolute top-3 right-6 w-1 h-2 bg-green-700/40 -rotate-12" />
        </div>
        
        {/* Bottle neck */}
        <div className="absolute top-1/2 -right-3 w-6 h-8 bg-white/30 border-r border-white/50 rounded-r-full -translate-y-1/2 transform rotate-2 origin-left">
          <div className="absolute top-2 right-0 w-1 h-4 bg-yellow-200/70 rounded-r" />
        </div>
        
        {/* Cork */}
        <div className="absolute top-1/2 -right-1 w-3 h-6 bg-amber-700/80 rounded-r -translate-y-1/2 transform -rotate-6" />
        
        {/* Sand stuck to bottle */}
        <div className="absolute bottom-2 left-6 w-8 h-2 bg-amber-200/60 rounded-full transform rotate-12" />
      </div>
    </motion.div>
  );
}