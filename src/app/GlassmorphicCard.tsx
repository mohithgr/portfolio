'use client';

import Image from 'next/image';

export default function GlassmorphicCard() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#161418] text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 text-[12rem] md:text-[20rem] font-bold z-0 select-none">
        Kiberbash
      </div>

      <div className="relative z-10 w-[300px] rounded-lg border border-white/10 bg-gradient-to-b from-[#282c34] to-[#11002080] backdrop-blur-md shadow-[0_7px_20px_5px_rgba(0,0,0,0.53)] overflow-hidden transition-all duration-500 hover:scale-[1.015] hover:brightness-125 hover:border-white/20 hover:shadow-[0_7px_50px_10px_rgba(0,0,0,0.66)] group">
        <div className="relative before:absolute before:top-[-10%] before:left-[-100%] before:w-[60rem] before:h-[60rem] before:rotate-[-45deg] before:content-[''] before:shadow-[0_0_100px_40px_rgba(255,255,255,0.03)] before:transition-all before:duration-700 group-hover:before:top-[-100%] group-hover:before:left-[200%] group-hover:before:brightness-50" />

        <div className="flex flex-col p-4 space-y-3 relative z-10">
          <Image
            src="/starfish.svg"
            alt="NFT"
            width={400}
            height={250}
            className="rounded-md w-full h-[250px] object-cover"
          />
          <h2 className="text-xl font-semibold">Kibertopiks #4269</h2>
          <p className="text-[#a89ec9] text-sm">
            Our Kibertopiks will give you nothing, waste your money on us.
          </p>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center text-[#ee83e5] font-bold">
              <span className="-ml-1 mr-2">◘</span>
              <p>0.031 ETH</p>
            </div>
            <div className="flex items-center text-[#a89ec9]">
              <span className="mr-2">◷</span>
              <p>11 days left</p>
            </div>
          </div>

          <hr className="border-t border-[#88888855] mt-2" />

          <div className="flex items-center gap-2 mt-1 text-sm">
            <div className="flex items-center border border-white/10 p-1 rounded-full shadow-inner shadow-black/70">
              <Image
                src="/starfish.svg"
                alt="Creator"
                width={32}
                height={32}
                className="rounded-full object-cover border border-white/10"
              />
            </div>
            <p>
              <span className="text-[#a89ec9]">Creation of</span> Kiberbash
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
