'use client';

import React, { useRef, useEffect, useState } from 'react';

function FishIcon() {
  return (
    <g>
      {/* Body */}
      <ellipse cx="0" cy="0" rx="8" ry="5" fill="orange" />
      {/* Tail */}
      <polygon points="-8,0 -14,-5 -14,5" fill="orange" />
      {/* Eye */}
      <circle cx="3" cy="-1" r="1.2" fill="white" />
      <circle cx="3" cy="-1" r="0.6" fill="black" />
    </g>
  );
}

export default function FishTraceHello({ onProgressUpdate }: { onProgressUpdate?: (progress: number) => void }) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);

  useEffect(() => {
    let start: number;
    const duration = 8000; // Faster animation - 8 seconds

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const percent = Math.min(elapsed / duration, 1);
      setProgress(percent);
      if (onProgressUpdate) onProgressUpdate(percent);
      if (percent < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [pathLength]);

  let fishPos = { x: 0, y: 0 };
  let fishAngle = 0;

  if (pathRef.current && pathLength > 0) {
    const currentLength = progress * pathLength;
    const point = pathRef.current.getPointAtLength(currentLength);
    const nextPoint = pathRef.current.getPointAtLength(
      Math.min(currentLength + 1, pathLength)
    );

    fishPos = { x: point.x, y: point.y };
    fishAngle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
  }

  return (
  <div className="w-full flex flex-col items-center md:items-start max-w-[600px] mx-auto md:mx-0 md:ml-24">
    <svg
  viewBox="0 0 600 200"
  className="w-full max-w-[600px] h-auto"
  preserveAspectRatio="xMidYMid meet"
>
        <path
          ref={pathRef}
          d="
        M 49.316 1.074 L 75.586 1.074 L 71.094 72.754 L 48.828 73.73 L 49.023 35.938 L 38.965 66.406 L 30.371 66.406 L 22.656 39.16 L 22.559 70.801 L 0 71.484 L 0.977 4.004 L 26.074 3.027 L 36.035 35.352 L 49.316 1.074 
        L 76.953 36.133 Q 76.953 31.885 77.979 27.808 Q 79.004 23.73 80.933 20.117 Q 82.861 16.504 85.596 13.477 Q 88.33 10.449 91.724 8.252 Q 95.117 6.055 99.072 4.834 Q 103.027 3.613 107.422 3.613 Q 114.502 3.613 120.337 5.811 Q 126.172 8.008 130.298 12.085 Q 134.424 16.162 136.694 21.948 Q 138.965 27.734 138.965 34.863 Q 138.965 39.307 137.939 43.433 Q 136.914 47.559 134.985 51.172 Q 133.057 54.785 130.298 57.788 Q 127.539 60.791 124.097 62.939 Q 120.654 65.088 116.602 66.284 Q 112.549 67.48 108.008 67.48 Q 103.613 67.48 99.634 66.357 Q 95.654 65.234 92.188 63.208 Q 88.721 61.182 85.913 58.325 Q 83.105 55.469 81.128 51.978 Q 79.15 48.486 78.052 44.482 Q 76.953 40.479 76.953 36.133 
        L 198.291 3.613 L 199.854 70.313 L 175.439 71.484 L 175.244 50.879 L 164.014 50.879 L 163.33 72.266 L 141.455 72.266 L 143.311 3.613 L 166.553 4.688 L 165.088 39.746 L 175.928 39.746 L 176.025 3.027 L 198.291 3.613 
        L 204.004 4.883 L 229.98 3.516 L 226.563 70.02 L 205.957 71.094 L 204.004 4.883 
        L 232.422 3.516 L 285.645 3.418 L 285.156 24.121 L 270.605 24.707 L 268.848 70.02 L 248.242 71.094 L 246.387 25.781 L 231.836 26.563 L 232.422 3.516 
        L 344.824 3.613 L 346.387 70.313 L 321.973 71.484 L 321.777 50.879 L 310.547 50.879 L 309.863 72.266 L 287.988 72.266 L 289.844 3.613 L 313.086 4.688 L 311.621 39.746 L 322.461 39.746 L 322.559 3.027 L 344.824 3.613 
        L 428.906 29.492 L 429.492 62.305 Q 427.197 65.186 423.828 67.334 Q 420.459 69.482 416.602 70.898 Q 412.744 72.314 408.691 73.022 Q 404.639 73.73 400.977 73.73 Q 393.896 73.73 387.939 71.191 Q 381.982 68.652 377.661 64.185 Q 373.34 59.717 370.898 53.662 Q 368.457 47.607 368.457 40.625 Q 368.457 35.303 369.678 30.2 Q 370.898 25.098 373.169 20.581 Q 375.439 16.064 378.711 12.28 Q 381.982 8.496 386.133 5.762 Q 390.283 3.027 395.215 1.514 Q 400.146 0 405.762 0 Q 407.861 0 410.254 0.171 Q 412.646 0.342 415.015 0.757 Q 417.383 1.172 419.629 1.904 Q 421.875 2.637 423.73 3.711 L 422.363 22.363 Q 419.629 21.338 416.724 20.972 Q 413.818 20.605 411.035 20.605 Q 407.129 20.605 403.735 21.802 Q 400.342 22.998 397.827 25.244 Q 395.313 27.49 393.848 30.713 Q 392.383 33.936 392.383 37.988 Q 392.383 40.527 393.066 42.896 Q 393.75 45.264 395.142 47.095 Q 396.533 48.926 398.608 50.049 Q 400.684 51.172 403.418 51.172 Q 405.273 51.172 407.251 50.684 Q 409.229 50.195 410.645 49.023 L 410.84 45.215 L 399.121 45.02 L 399.707 30.371 Q 406.982 30.127 414.258 29.956 Q 421.533 29.785 428.906 29.492 
        L 475.586 17.871 L 474.805 36.035 L 475.977 36.035 Q 478.076 36.035 480.249 35.498 Q 482.422 34.961 484.155 33.838 Q 485.889 32.715 486.987 30.957 Q 488.086 29.199 488.086 26.758 Q 488.086 24.707 487.524 22.998 Q 486.963 21.289 485.864 20.044 Q 484.766 18.799 483.13 18.091 Q 481.494 17.383 479.297 17.383 Q 478.32 17.383 477.393 17.505 Q 476.465 17.627 475.586 17.871 L 498.145 46.777 L 509.766 67.48 L 487.793 71.777 L 480.273 50.977 L 474.219 51.172 L 473.34 71.484 L 452.344 71.484 Q 452.588 60.352 452.808 49.316 Q 453.027 38.281 453.32 27.148 Q 453.418 21.533 453.516 16.016 Q 453.613 10.498 453.906 4.883 Q 457.324 3.613 460.645 2.783 Q 463.965 1.953 467.31 1.489 Q 470.654 1.025 474.097 0.854 Q 477.539 0.684 481.152 0.684 Q 486.719 0.684 491.919 2.222 Q 497.119 3.76 501.123 6.836 Q 505.127 9.912 507.544 14.502 Q 509.961 19.092 509.961 25.195 Q 509.961 29.004 509.302 32.104 Q 508.643 35.205 507.227 37.793 Q 505.811 40.381 503.564 42.578 Q 501.318 44.775 498.145 46.777
          "
          fill="none"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength - progress * pathLength}
        />

        {/* Fish moving along the handwritten path */}
        <g
  transform={`translate(${fishPos.x} ${fishPos.y}) rotate(${fishAngle})`}
  className="scale-75 sm:scale-100"
>
          <FishIcon />
        </g>
      </svg>
      <p 
  className={`max-w-[90%] sm:max-w-[600px] text-center transition-opacity duration-1000 ease-in-out ${
  progress >= 1 ? 'opacity-100' : 'opacity-0'
}`}
      >
        <span className="text-2xl md:text-3xl font-bold">Hey, I&apos;m Mohith — a Software Engineer & UNSW Master&apos;s student.</span><br />
        <span className="text-lg text-white/80">I build high-performance web and mobile apps using React, Next.js, and React Native.</span>
      <span className="block text-sm text-white/60">From global tech summits to AR/VR experiments, I love turning complex ideas into sleek, scalable digital experiences..</span>
      </p>
    </div>
  );
}


