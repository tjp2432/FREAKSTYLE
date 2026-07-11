"use client";

import { useEffect, useRef } from "react";

interface FogBlob {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export function GreenFog() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const blobs: FogBlob[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 8; i++) {
      blobs.push({
        x: Math.random() * canvas.width,
        y: canvas.height * 0.5 + Math.random() * canvas.height * 0.5,
        radius: 200 + Math.random() * 350,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: -Math.random() * 0.08 - 0.02,
        opacity: Math.random() * 0.04 + 0.02,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const b of blobs) {
        b.x += b.speedX;
        b.y += b.speedY;

        if (b.y + b.radius < 0) {
          b.y = canvas.height + b.radius;
          b.x = Math.random() * canvas.width;
        }
        if (b.x + b.radius < 0) b.x = canvas.width + b.radius;
        if (b.x - b.radius > canvas.width) b.x = -b.radius;

        const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        gradient.addColorStop(0, `rgba(57, 255, 20, ${b.opacity})`);
        gradient.addColorStop(0.4, `rgba(57, 255, 20, ${b.opacity * 0.5})`);
        gradient.addColorStop(1, "rgba(57, 255, 20, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(b.x - b.radius, b.y - b.radius, b.radius * 2, b.radius * 2);
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[1]"
    />
  );
}
