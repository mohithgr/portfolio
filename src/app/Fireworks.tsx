"use client";

import { useEffect, useRef } from "react";

type FireworkPosition = {
  x: number | string;
  y: number | string;
  angle?: number;
  text?: string;
  url?: string;
  imageUrl?: string;
};

type Props = {
  active: boolean;
  positions?: FireworkPosition[];
};

type Particle = {
  x: number;
  y: number;
  angle: number;
  speed: number;
  alpha: number;
  radius: number;
};

type Rocket = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetY: number;
  burst: boolean;
  particles: Particle[];
  text?: string;
  url?: string;
  image?: HTMLImageElement;
};

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const createParticles = (x: number, y: number): Particle[] =>
  Array.from({ length: 70 }, () => ({
    x,
    y,
    angle: rand(0, Math.PI * 2),
    speed: rand(0.5, 2),
    alpha: 1,
    radius: rand(1, 3),
  }));

export default function Fireworks({ active, positions = [] }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rockets = useRef<Rocket[]>([]);
  const clickable = useRef<any[]>([]);
  const pointerEnabled = useRef(false);
  const hasLaunched = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    /* ---------------- CANVAS RESIZE ---------------- */

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    /* ---------------- ROCKET LAUNCH ---------------- */

    const launchRocket = (p: FireworkPosition) => {
      const img = p.imageUrl ? new Image() : undefined;
      if (img) img.src = p.imageUrl;

      const x =
        typeof p.x === "string"
          ? (parseFloat(p.x) / 100) * canvas.clientWidth
          : p.x;

      const y =
        typeof p.y === "string"
          ? (parseFloat(p.y) / 100) * canvas.clientHeight
          : p.y;

      rockets.current.push({
        x,
        y,
        vx: p.angle ? Math.cos(p.angle) * 3 : 0,
        vy: p.angle ? Math.sin(p.angle) * 3 : -3,
        targetY: y - canvas.clientHeight * 0.25,
        burst: false,
        particles: [],
        text: p.text,
        url: p.url,
        image: img,
      });
    };

    const launchSequence = () => {
      positions.forEach((p, i) => {
        setTimeout(() => launchRocket(p), i * 400);
      });
    };

    if (active && !hasLaunched.current) {
      hasLaunched.current = true;
      launchSequence();
    }

    /* ---------------- DRAW LOOP ---------------- */

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      clickable.current = [];
      pointerEnabled.current = false;

      rockets.current.forEach((r) => {
        if (!r.burst) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = "white";
          ctx.fill();

          r.x += r.vx;
          r.y += r.vy;

          if (r.y <= r.targetY) {
            r.burst = true;
            r.particles = createParticles(r.x, r.y);
          }
        } else {
          r.particles.forEach((p) => {
            p.x += Math.cos(p.angle) * p.speed;
            p.y += Math.sin(p.angle) * p.speed;
            p.alpha -= 0.01;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
            ctx.fill();
          });

          r.particles = r.particles.filter((p) => p.alpha > 0);

          /* ---------- TEXT ---------- */

          if (r.text) {
            const fontSize = Math.max(canvas.clientWidth * 0.018, 16);
            ctx.font = `bold ${fontSize}px Arial`;

            const w = ctx.measureText(r.text).width;

            ctx.fillStyle = "white";
            ctx.fillText(r.text, r.x - w / 2, r.y);

            if (r.url) {
              clickable.current.push({
                x: r.x - w / 2,
                y: r.y - fontSize,
                width: w,
                height: fontSize,
                url: r.url,
              });

              pointerEnabled.current = true;
            }
          }

          /* ---------- IMAGE ---------- */

          if (r.image && r.image.complete) {
            const s = Math.max(canvas.clientWidth * 0.025, 24);

            ctx.drawImage(r.image, r.x - s / 2, r.y - s / 2, s, s);

            if (r.url) {
              clickable.current.push({
                x: r.x - s / 2,
                y: r.y - s / 2,
                width: s,
                height: s,
                url: r.url,
              });

              pointerEnabled.current = true;
            }
          }
        }
      });

      rockets.current = rockets.current.filter((r) => {
        if (r.text || r.image) return true;
        return !r.burst || r.particles.length;
      });

      canvas.style.pointerEvents = pointerEnabled.current ? "auto" : "none";

      requestAnimationFrame(draw);
    };

    draw();

    /* ---------------- CLICK HANDLER ---------------- */

    const click = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      clickable.current.forEach((a) => {
        if (x > a.x && x < a.x + a.width && y > a.y && y < a.y + a.height) {
          if (a.url.startsWith("mailto:") || a.url.startsWith("tel:")) {
            window.location.href = a.url;
          } else {
            window.open(a.url, "_blank");
          }
        }
      });
    };

    canvas.addEventListener("click", click);

    return () => {
      canvas.removeEventListener("click", click);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [active, positions]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
    />
  );
}