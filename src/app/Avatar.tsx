// components/Avatar.tsx
'use client';

import React from 'react';

export default function Avatar() {
  return (
    <div className="w-full max-w-[300px]">
      <svg
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Background wall */}
        <rect x="0" y="0" width="300" height="200" fill="#FFF8E1" />
        <rect x="0" y="200" width="300" height="100" fill="#FFE0B2" />

        {/* Rangoli */}
        <g>
          <polygon points="160,260 165,250 170,260 165,270" fill="#F06292" />
          <polygon points="180,260 185,250 190,260 185,270" fill="#4FC3F7" />
          <polygon points="200,260 205,250 210,260 205,270" fill="#FDD835" />
          <polygon points="220,260 225,250 230,260 225,270" fill="#81C784" />
        </g>

        {/* Color plate */}
        <circle cx="240" cy="250" r="15" fill="#F5F5F5" />
        <circle cx="235" cy="245" r="3" fill="#E91E63" />
        <circle cx="245" cy="245" r="3" fill="#3F51B5" />
        <circle cx="235" cy="255" r="3" fill="#FFEB3B" />
        <circle cx="245" cy="255" r="3" fill="#4CAF50" />

        {/* Left leg folded */}
        <path
          d="M100 220 C90 230, 130 240, 120 220"
          fill="#388E3C"
        />

        {/* Right leg extended */}
        <path
          d="M120 220 C130 230, 180 235, 170 215"
          fill="#388E3C"
        />

        {/* Saree lower body wrap */}
        <path
          d="M100 180 C90 210, 180 210, 160 180 L140 160 L120 160 Z"
          fill="#4CAF50"
        />
        {/* Saree border */}
        <path
          d="M100 180 C90 210, 180 210, 160 180"
          stroke="#FFB300"
          strokeWidth="4"
          fill="none"
        />

        {/* Right arm applying rangoli */}
        <path
          d="M150 160 C160 190, 180 220, 200 250"
          stroke="#FFCCBC"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Left arm resting back */}
        <path
          d="M120 160 C110 170, 115 200, 130 200"
          stroke="#FFCCBC"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Torso (blouse) */}
        <path
          d="M120 130 L180 130 L160 160 L120 160 Z"
          fill="#2E7D32"
        />
        <path
          d="M120 130 L125 100 L175 100 L180 130 Z"
          fill="#4CAF50"
        />

        {/* Neck */}
        <rect x="145" y="95" width="10" height="10" fill="#FFCCBC" />

        {/* Head */}
        <circle cx="150" cy="80" r="20" fill="#FFCCBC" />
        {/* Bindi */}
        <circle cx="150" cy="75" r="2" fill="red" />

        {/* Eyes */}
        <circle cx="144" cy="77" r="2" fill="#000" />
        <circle cx="156" cy="77" r="2" fill="#000" />

        {/* Smile */}
        <path
          d="M143 88 Q150 94 157 88"
          stroke="#333"
          strokeWidth="2"
          fill="none"
        />

        {/* Hair */}
        <circle cx="150" cy="60" r="10" fill="#3E2723" />
        <path
          d="M130 80 C130 60, 170 60, 170 80 C170 90, 130 90, 130 80"
          fill="#4E342E"
        />

        {/* Jewelry - Earrings */}
        <circle cx="135" cy="85" r="3" fill="gold" />
        <circle cx="165" cy="85" r="3" fill="gold" />

        {/* Necklace */}
        <path
          d="M140 100 Q150 110 160 100"
          stroke="gold"
          strokeWidth="4"
          fill="none"
        />
      </svg>
    </div>
  );
}
