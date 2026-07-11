"use client";

import { useEffect, useRef } from "react";

export function GreenFog() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const baseAlpha = 0.07;
      const pulse = Math.sin(time * 0.5) * 0.015;

      const gradient = ctx.createLinearGradient(0, canvas.height * 0.6, 0, canvas.height);
      gradient.addColorStop(0, `rgba(57, 255, 20, 0)`);
      gradient.addColorStop(0.3, `rgba(57, 255, 20, ${(baseAlpha + pulse) * 0.3})`);
      gradient.addColorStop(0.6, `rgba(57, 255, 20, ${(baseAlpha + pulse) * 0.6})`);
      gradient.addColorStop(1, `rgba(57, 255, 20, ${baseAlpha + pulse})`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
