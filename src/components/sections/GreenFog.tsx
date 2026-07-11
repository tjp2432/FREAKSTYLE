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
      time += 0.004;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const layers = [
        { top: 0.55, amp: 50, freq: 0.006, speed: 0.25, opacity: 0.08 },
        { top: 0.6, amp: 35, freq: 0.01, speed: 0.4, opacity: 0.06 },
        { top: 0.65, amp: 25, freq: 0.008, speed: 0.15, opacity: 0.04 },
      ];

      for (const layer of layers) {
        const topY = canvas.height * layer.top;

        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x += 4) {
          const wave = Math.sin(x * layer.freq + time * layer.speed) * layer.amp;
          const y = topY + wave;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, topY, 0, canvas.height);
        gradient.addColorStop(0, `rgba(57, 255, 20, ${layer.opacity})`);
        gradient.addColorStop(0.3, `rgba(57, 255, 20, ${layer.opacity * 0.6})`);
        gradient.addColorStop(1, "rgba(57, 255, 20, 0)");

        ctx.fillStyle = gradient;
        ctx.fill();
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
