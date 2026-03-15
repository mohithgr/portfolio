import React from "react";

const Crab: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes lefttoright {
            0% { left: 40%; }
            50% { left: 62%; }
            100% { left: 40%; }
          }
          @keyframes first-part {
            50% { transform: rotate(-40deg); }
          }
          @keyframes second-part {
            50% { transform: rotate(40deg); }
          }
          @keyframes leg-move-1 {
            10% { transform: rotate(0.1deg); }
          }
          @keyframes leg-move-2 {
            40% { transform: rotate(0.1deg); }
          }
          @keyframes leg-move-3 {
            80% { transform: rotate(0.1deg); }
          }
          @keyframes leg-move-4 {
            10% { transform: scaleX(-1) rotate(0.1deg); }
          }
          @keyframes leg-move-5 {
            40% { transform: scaleX(-1) rotate(0.1deg); }
          }
          @keyframes leg-move-6 {
            80% { transform: scaleX(-1) rotate(0.1deg); }
          }
               @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.02);
      }
    }
    @keyframes glow {
      0%, 100% {
        text-shadow: 0 0 10px rgba(204, 0, 0, 0.6);
      }
      50% {
        text-shadow: 0 0 15px rgba(204, 0, 0, 0.9);
      }
    }
    @keyframes glowBorder {
      0%, 100% {
        box-shadow: 0 0 20px rgba(204, 0, 0, 0.6);
      }
      50% {
        box-shadow: 0 0 30px rgba(204, 0, 0, 0.9);
      }
    }
        `}
      </style>

      {/* <div
        className="absolute top-[56%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ animation: "lefttoright 11400ms infinite" }}
      > */}
      <div
  className="absolute top-[56%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[0.5]"
  style={{ animation: "lefttoright 11400ms infinite" }}
>
        <div className="relative w-[240px] h-[150px] bg-[#cc0000] rounded-[50%]" />

        {/* Body shadow */}
        <div
          className="absolute bg-[#eb3737] rounded-[50%]"
          style={{
            width: "230px",
            height: "150px",
            left: "11px",
            top: "-6px",
            transform: "rotate(6deg)",
            zIndex: -1,
          }}
        />

        {/* Left Body Spots */}
        <div
          className="absolute bg-white rounded-full opacity-25"
          style={{ width: 22, height: 22, bottom: 36, left: 60 }}
        />
        <div
          className="absolute bg-white rounded-full opacity-25"
          style={{ width: 12, height: 12, bottom: 46, left: 42 }}
        />
        <div
          className="absolute bg-white rounded-full opacity-25"
          style={{ width: 6, height: 6, bottom: 62, left: 38 }}
        />

        {/* Right Body Spots */}
        <div
          className="absolute bg-white rounded-full opacity-25"
          style={{ width: 22, height: 22, bottom: 36, left: 170 }}
        />
        <div
          className="absolute bg-white rounded-full opacity-25"
          style={{ width: 8, height: 8, bottom: 23, left: 164 }}
        />
        <div
          className="absolute bg-white rounded-full opacity-25"
          style={{ width: 12, height: 12, bottom: 44, left: 200 }}
        />

        {/* Left Eye */}
        <div
          className="absolute rounded-full bg-[#eb3737]"
          style={{ width: 110, height: 110, bottom: 70, left: 10 }}
        />
        <div
          className="absolute rounded-full bg-white"
          style={{ width: 96, height: 96, bottom: 76, left: 17 }}
        />
        <div
          className="absolute rounded-full bg-black"
          style={{ width: 18, height: 18, bottom: 108, left: 82 }}
        />
        {/* Left Eye Shadow */}
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: 96,
            height: 96,
            top: -22,
            left: 24,
            boxShadow: "0 10px 0 0 black",
            transform: "rotate(90deg)",
          }}
        />

        {/* Right Eye */}
        <div
          className="absolute rounded-full bg-[#eb3737]"
          style={{ width: 110, height: 110, bottom: 70, left: 120 }}
        />
        <div
          className="absolute rounded-full bg-white"
          style={{ width: 96, height: 96, bottom: 76, left: 127 }}
        />
        <div
          className="absolute rounded-full bg-black"
          style={{ width: 18, height: 18, bottom: 108, left: 138 }}
        />
        {/* Right Eye Shadow */}
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: 96,
            height: 96,
            top: -22,
            left: 120,
            boxShadow: "0 10px 0 0 black",
            transform: "rotate(270deg)",
          }}
        />

        {/* Half-circle with border circles */}
        <div
          className="absolute rounded-l-full border-t-4 border-l-4 border-b-4 border-black opacity-75"
          style={{
            height: 18,
            width: 12,
            top: 78,
            left: 12,
            transform: "translateX(100px) rotate(-90deg)",
          }}
        >
          <div
            className="absolute bg-black rounded-full"
            style={{ width: 4, height: 4, right: -2, top: -4 }}
          />
          <div
            className="absolute bg-black rounded-full"
            style={{ width: 4, height: 4, right: -2, bottom: -4 }}
          />
        </div>

        {/* Left Legs */}
        {[{ top: 90, left: -30, delay: "0ms", rotation: -16, animation: "leg-move-1 1800ms infinite" },
          { top: 104, left: -6, delay: "0ms", rotation: -20, animation: "leg-move-2 1600ms infinite" },
          { top: 114, left: 20, delay: "0ms", rotation: -20, animation: "leg-move-3 1800ms infinite" }].map((leg, i) => (
          <div
            key={`left-leg-${i}`}
            className="absolute z-[-1]"
            style={{
              width: i===0 ? 120 : i===1 ? 90 : 80,
              height: i===1 ? 90 : 100,
              top: leg.top,
              left: leg.left,
              transform: `rotate(${leg.rotation}deg)`,
              animation: leg.animation,
            }}
          >
            <div
              style={{
                position: "absolute",
                content: '""',
                width: "50%",
                height: "100px",
                borderTop: "12px solid #cc0000",
                borderRadius: "36px 12px 0 0",
              }}
            />
          </div>
        ))}

        {/* Right Legs */}
        {[{ top: 90, left: 150, delay: "0ms", rotation: -20, animation: "leg-move-4 1600ms infinite" },
          { top: 104, left: 156, delay: "0ms", rotation: -20, animation: "leg-move-5 2000ms infinite" },
          { top: 114, left: 140, delay: "0ms", rotation: -20, animation: "leg-move-6 2000ms infinite" }].map((leg, i) => (
          <div
            key={`right-leg-${i}`}
            className="absolute z-[-1]"
            style={{
              width: i===0 ? 120 : i===1 ? 90 : 80,
              height: i===1 ? 90 : 100,
              top: leg.top,
              left: leg.left,
              transform: `scaleX(-1) rotate(${leg.rotation}deg)`,
              animation: leg.animation,
            }}
          >
            <div
              style={{
                position: "absolute",
                content: '""',
                width: "50%",
                height: "100px",
                borderTop: "12px solid #cc0000",
                borderRadius: "36px 12px 0 0",
              }}
            />
          </div>
        ))}

        {/* Left Arm */}
        <div
          className="absolute border-[8px] border-red-700 rounded-[50%/120px_120px_10px_10px]"
          style={{
            width: 120,
            height: 100,
            top: -50,
            left: -50,
            borderColor: "#cc0000 transparent transparent transparent",
            transform: "rotate(-140deg)",
          }}
        />

        {/* Right Arm */}
        <div
          className="absolute border-[8px] border-red-700 rounded-[50%/120px_120px_10px_10px]"
          style={{
            width: 120,
            height: 100,
            top: -50,
            left: 160,
            borderColor: "#cc0000 transparent transparent transparent",
            transform: "scaleX(-1) rotate(-140deg)",
            zIndex: -1,
          }}
        />

        {/* Left Meaty Claw */}
        <div
          className="absolute"
          style={{
            top: -33,
            left: -36,
            width: "7.5rem",
            height: "7.5rem",
            transform: "translate(-50%, -50%) scale(0.4) rotate(-90deg)",
          }}
        >
          <div
            className="absolute bg-[#cc0000]"
            style={{
              width: "7.5rem",
              height: "3.75rem",
              top: 0,
              left: 0,
              borderRadius: "4.6875rem 4.6875rem 0 0",
              transformOrigin: "bottom",
              animation: "first-part 1800ms ease-in-out infinite",
            }}
          />
          <div
            className="absolute bg-[#cc0000]"
            style={{
              width: "7.5rem",
              height: "3.75rem",
              bottom: 0,
              left: 0,
              borderRadius: "0 0 4.6875rem 4.6875rem",
              transformOrigin: "top",
              animation: "second-part 1800ms ease-in-out infinite",
            }}
          />
        </div>

        {/* Right Meaty Claw */}
        <div
          className="absolute"
          style={{
            top: -40,
            left: 264,
            width: "7.5rem",
            height: "7.5rem",
            transform: "translate(-50%, -50%) scale(0.4) rotate(-90deg)",
          }}
        >
          <div
            className="absolute bg-[#cc0000]"
            style={{
              width: "7.5rem",
              height: "3.75rem",
              top: 0,
              left: 0,
              borderRadius: "4.6875rem 4.6875rem 0 0",
              transformOrigin: "bottom",
              animation: "first-part 1800ms ease-in-out infinite",
            }}
          />
          <div
            className="absolute bg-[#cc0000]"
            style={{
              width: "7.5rem",
              height: "3.75rem",
              bottom: 0,
              left: 0,
              borderRadius: "0 0 4.6875rem 4.6875rem",
              transformOrigin: "top",
              animation: "second-part 1800ms ease-in-out infinite",
            }}
          />
        </div>

<a
  href="https://drive.google.com/file/d/1yVUTAiVpMNNk71Stx0gdbUTxydez4f3q/preview"
  target="_blank"
  rel="noopener noreferrer"
  className="absolute bg-white rounded-lg shadow-md flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300"
  style={{
    top: "-20vh",
    left: "-8vh",
    width: "45vh",
    height: "15vh",
    zIndex: 10,
    border: "2px solid #cc0000",
    animation: "pulse 2s infinite, glowBorder 3s infinite",
    boxShadow: "0 0 20px rgba(204, 0, 0, 0.6)",
  }}
>
  <span
    className="text-[#cc0000] font-bold text-[40px] transition-all duration-300 hover:text-[#ff0000]"
    style={{
      textShadow: "0 0 10px rgba(204, 0, 0, 0.6)",
      animation: "glow 2.5s infinite",
    }}
  >
    View Resume
  </span>
</a>
      </div>
    </>
  );
};

export default Crab;