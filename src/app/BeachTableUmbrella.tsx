import React from 'react';

type BeachTableUmbrellaProps = {
  position: string;
};

const BeachTableUmbrella = ({ position }: BeachTableUmbrellaProps) => {  return (
    <div 
      className={`absolute ${position} bottom-40 flex flex-col items-center z-40`}
      style={{ transform: 'rotate(-12deg)' }}
    >
      {/* Umbrella Dome */}
      <div className="relative w-32 h-16 rounded-t-full overflow-hidden shadow-md flex items-end">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`h-full ${i % 2 === 0 ? 'bg-red-500' : 'bg-white'}`}
            style={{
              width: '12.5%',
              zIndex: 1,
            }}
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`scallop-${i}`}
            className={`absolute ${i % 2 === 0 ? 'bg-red-500' : 'bg-white'}`}
            style={{
              bottom: '-6px',
              left: `${i * 12.5}%`,
              width: '16px',
              height: '10px',
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
              zIndex: 2,
            }}
          />
        ))}
        <div className="absolute left-1/2 -bottom-1 w-4 h-2 bg-gray-200 rounded-full -translate-x-1/2 z-10" />
      </div>

      {/* Umbrella Pole */}
      <div className="w-[6px] h-[68px] bg-[#9f7f3c] -mt-1 z-0" />

      {/* Beach Table */}
      <div className="relative w-32 h-6 bg-yellow-400 rounded-md shadow-md mt-4 z-10">
        {/* Table Legs */}
        <div className="absolute -bottom-10 left-6 w-2.5 h-10 bg-yellow-600 rounded-md" />
        <div className="absolute -bottom-10 right-6 w-2.5 h-10 bg-yellow-600 rounded-md" />
      </div>
    </div>
  );
};

export default BeachTableUmbrella;
