import React from 'react';

const windowStyles = "bg-yellow-200 border-2 border-yellow-600 rounded-full absolute";
const arrowloop = (count, render) => Array.from({ length: count }, (_, i) => render(i));

const SandCastle = () => (
  <div
    className="absolute bottom-0 left-1/2 flex flex-col items-center z-30 origin-bottom"
    style={{ transform: 'translateX(-50%) translateY(12px) scale(1.5)' }} // Centered, shifted down inside sand, scaled
  >
    {/* Main Hall (center block) */}
    <div className="relative w-[384px] h-[240px] bg-yellow-400 rounded-b-lg shadow-inner flex items-end justify-center">
      
      {/* Central Tower */}
      <div className="absolute -top-[144px] left-1/2 -translate-x-1/2 w-[120px] h-[192px] bg-yellow-500 rounded-t-xl shadow-md flex flex-col items-center z-20">
        {/* Crenellations */}
        <div className="flex space-x-1 mt-2">
          {arrowloop(4, i => (
            <div key={i} className="w-6 h-5 bg-yellow-600 rounded-sm" />
          ))}
        </div>
        {/* Windows */}
        <div className="flex flex-col items-center mt-4 space-y-3">
          <div className={`${windowStyles} w-7 h-10 left-1/2 -translate-x-1/2 top-10`} />
          <div className={`${windowStyles} w-5 h-8 left-1/2 -translate-x-1/2 top-20`} />
        </div>
      </div>

      {/* Left Round Turret */}
      <div className="absolute -top-[60px] -left-[24px] w-[72px] h-[144px] bg-yellow-500 rounded-t-full shadow-md flex flex-col items-center z-10">
        {/* Crenellations */}
        <div className="flex space-x-1 mt-1">
          {arrowloop(2, i => (
            <div key={i} className="w-4 h-4 bg-yellow-600 rounded-b-sm" />
          ))}
        </div>
        <div className={`${windowStyles} w-5 h-8 left-1/2 -translate-x-1/2 top-16`} />
      </div>

      {/* Right Round Turret */}
      <div className="absolute -top-[60px] -right-[24px] w-[72px] h-[144px] bg-yellow-500 rounded-t-full shadow-md flex flex-col items-center z-10">
        <div className="flex space-x-1 mt-1">
          {arrowloop(2, i => (
            <div key={i} className="w-4 h-4 bg-yellow-600 rounded-b-sm" />
          ))}
        </div>
        <div className={`${windowStyles} w-5 h-8 left-1/2 -translate-x-1/2 top-16`} />
      </div>

      {/* Left Side Wall */}
      <div className="absolute left-0 bottom-0 w-[72px] h-[192px] bg-yellow-400 shadow-inner flex flex-col items-center justify-end">
        {arrowloop(3, i => (
          <div
            key={i}
            className={`${windowStyles} w-4 h-6 left-2`}
            style={{ top: `${36 + i * 27}px` }}
          />
        ))}
      </div>

      {/* Right Side Wall */}
      <div className="absolute right-0 bottom-0 w-[72px] h-[192px] bg-yellow-400 shadow-inner flex flex-col items-center justify-end">
        {arrowloop(3, i => (
          <div
            key={i}
            className={`${windowStyles} w-4 h-6 right-2`}
            style={{ top: `${36 + i * 27}px` }}
          />
        ))}
      </div>

      {/* Main Entrance */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[48px] h-[48px] bg-yellow-600 rounded-b-full border-4 border-yellow-700" />

      {/* Main Hall Windows */}
      {arrowloop(5, i => (
        <div
          key={i}
          className={`${windowStyles} w-5 h-9 top-[120px]`}
          style={{ left: `${48 + i * 42}px` }}
        />
      ))}
    </div>
  </div>
);

export default SandCastle;
