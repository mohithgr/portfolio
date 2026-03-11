// 'use client';

// import React from "react";

// const JellyCard = ({ title, description }: { title: string; description: string }) => {
//   return (
//     <section className="relative px-4 py-6">
//       <div className="mx-auto max-w-md group relative transition-all duration-500 transform hover:scale-[1.03] hover:brightness-110">
//         {/* Shimmer Light Sweep using ::before */}
//         <div className="relative rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.6)] p-6 overflow-hidden z-10 before:absolute before:content-[''] before:top-[-100%] before:left-[-100%] before:w-[60rem] before:h-[60rem] before:-rotate-45 before:bg-white before:opacity-[0.03] before:transition-all before:duration-[800ms] group-hover:before:top-[-200%] group-hover:before:left-[200%]">
//           <h5 className="text-2xl font-bold">
//             {title}
//             <span className="text-[#5CF5CB] ml-2">❤</span>
//           </h5>
//           <div className="w-full h-1 bg-[#5CF5CB] opacity-70 my-3 rounded-full"></div>
//           <p className="text-sm text-white/90 leading-relaxed">{description}</p>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes float-slow {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-5px);
//           }
//         }

//         .animate-float-slow {
//           animation: float-slow 4s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default JellyCard;




'use client';

import React from "react";

interface JellyCardProps {
  title: string;
  description: string;
  onHover?: (isHovered: boolean) => void;
}

const JellyCard = ({ title, description, onHover }: JellyCardProps) => {
  return (
    <section 
      className="relative px-4 py-6"
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      <div className="mx-auto max-w-md group relative transition-all duration-500 transform hover:scale-[1.03] hover:brightness-110">
        {/* Shimmer Light Sweep using ::before */}
        <div className="relative rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.6)] p-6 overflow-hidden z-10 before:absolute before:content-[''] before:top-[-100%] before:left-[-100%] before:w-[60rem] before:h-[60rem] before:-rotate-45 before:bg-white before:opacity-[0.03] before:transition-all before:duration-[800ms] group-hover:before:top-[-200%] group-hover:before:left-[200%]">
          <h5 className="text-2xl font-bold">
            {title}
            <span className="text-[#5CF5CB] ml-2">❤</span>
          </h5>
          <div className="w-full h-1 bg-[#5CF5CB] opacity-70 my-3 rounded-full"></div>
          <p className="text-sm text-white/90 leading-relaxed">{description}</p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default JellyCard;
