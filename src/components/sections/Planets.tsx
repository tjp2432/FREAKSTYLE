"use client";

import { useEffect, useRef } from "react";

// ---- deterministic value noise + fbm ----
function hash(x: number, y: number): number {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}
const smooth = (t: number) => t * t * (3 - 2 * t);
function valueNoise(x: number, y: number): number {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const a = hash(xi, yi);
  const b = hash(xi + 1, yi);
  const c = hash(xi, yi + 1);
  const d = hash(xi + 1, yi + 1);
  const u = smooth(xf);
  const v = smooth(yf);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function fbm(x: number, y: number, octaves: number): number {
  let value = 0;
  let amplitude = 0.5;
  let frequency = 1;
  for (let i = 0; i < octaves; i++) {
    value += amplitude * valueNoise(x * frequency, y * frequency);
    amplitude *= 0.5;
    frequency *= 2;
  }
  return value;
}

const clamp = (c: number) => Math.max(0, Math.min(255, c));
const rgb = (r: number, g: number, b: number): [number, number, number] => [
  Math.round(r),
  Math.round(g),
  Math.round(b),
];

// ---- palettes ----
function paletteFromType(type: string) {
  switch (type) {
    case "terrestrial":
      return (t: number): [number, number, number] => {
        if (t < 0.42) {
          const n = smooth(t / 0.42);
          return rgb(25 + n * 45, 68 + n * 70, 115 + n * 95);
        }
        if (t < 0.55) {
          const n = (t - 0.42) / 0.13;
          return rgb(55 + n * 45, 125 + n * 55, 78 + n * 30);
        }
        if (t < 0.82) {
          const n = (t - 0.55) / 0.27;
          return rgb(108 + n * 60, 138 + n * 55, 80 + n * 35);
        }
        if (t < 0.95) {
          const n = (t - 0.82) / 0.13;
          return rgb(168 - n * 55, 138 - n * 55, 108 - n * 70);
        }
        return rgb(252, 252, 255);
      };
    case "gas1":
      return (t: number): [number, number, number] => {
        const i = Math.floor(t * 3);
        const fr = t * 3 - i;
        const spokes: [number, number, number][] = [
          rgb(232, 154, 91),
          rgb(168, 106, 58),
          rgb(232, 154, 91),
        ];
        const a = spokes[i % 3];
        const b = spokes[(i + 1) % 3];
        return rgb(a[0] + (b[0] - a[0]) * fr, a[1] + (b[1] - a[1]) * fr, a[2] + (b[2] - a[2]) * fr);
      };
    case "gas2":
      return (t: number): [number, number, number] => {
        const i = Math.floor(t * 3);
        const fr = t * 3 - i;
        const spokes: [number, number, number][] = [
          rgb(196, 160, 226),
          rgb(140, 110, 180),
          rgb(196, 160, 226),
        ];
        const a = spokes[i % 3];
        const b = spokes[(i + 1) % 3];
        return rgb(a[0] + (b[0] - a[0]) * fr, a[1] + (b[1] - a[1]) * fr, a[2] + (b[2] - a[2]) * fr);
      };
    default:
      return (t: number): [number, number, number] => {
        if (t < 0.5) return rgb(115 + t * 85, 75 + t * 60, 46 + t * 40);
        return rgb(68 + (t - 0.5) * 60, 50 + (t - 0.5) * 40, 32 + (t - 0.5) * 20);
      };
  }
}

function sampleTexture(u: number, v: number, type: string): [number, number, number] {
  const pal = paletteFromType(type);
  if (type === "gas1" || type === "gas2") {
    const bandNoise = fbm(u * 6, v * 1.2, 4);
    const bands = ((v + bandNoise * 0.25) * 5) % 1;
    const swirl = fbm(u * 3 + bandNoise * 0.6, v * 3, 4) * 0.5;
    return pal(type === "gas1" ? bands : (bands + swirl) % 1);
  }
  if (type === "terrestrial") {
    const n = fbm(u * 5 + v * 3, v * 5, 5);
    const warp = fbm(u * 20, v * 20, 4) * 0.15 + n;
    return pal(warp);
  }
  const n = fbm(u * 4 + v * 2, v * 4, 5);
  const craters = Math.max(0, 0.5 - Math.abs(fbm(u * 40 + v * 10, v * 40, 3) - 0.5) * 4);
  return pal(n + craters * 0.18);
}

type PlanetDef = {
  size: number;
  x: number;
  y: number;
  type: string;
  ring?: boolean;
};

export function Planets() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cv: HTMLCanvasElement = canvas;
    const cctx: CanvasRenderingContext2D = ctx;

    const planets: PlanetDef[] = [
      { size: 320, x: 3, y: 6, type: "terrestrial" },
      { size: 150, x: 82, y: 12, type: "gas1", ring: true },
      { size: 85, x: 10, y: 66, type: "rocky" },
      { size: 210, x: 75, y: 62, type: "gas2" },
    ];

    const lightAngle = Math.PI / 4;

    function draw() {
      cctx.clearRect(0, 0, cv.width, cv.height);

      for (const p of planets) {
        const r = p.size / 2;
        const cx = (cv.width * p.x) / 100;
        const cy = (cv.height * p.y) / 100;

        // generate shaded texture (uint8 RGBA)
        const tex = new Uint8ClampedArray(p.size * p.size * 4);
        const lx = Math.cos(lightAngle);
        const ly = -Math.sin(lightAngle);
        const lz = 0.4;
        for (let j = 0; j < p.size; j++) {
          for (let i = 0; i < p.size; i++) {
            const o = (j * p.size + i) * 4;
            const nx = (i - r + 0.5) / r;
            const ny = (j - r + 0.5) / r;
            const r2 = nx * nx + ny * ny;
            let col: [number, number, number] = [0, 0, 0];
            if (r2 <= 1) {
              const u = i / p.size;
              const v = j / p.size;
              col = sampleTexture(u, v, p.type);
              const nz = Math.sqrt(1 - r2);
              let diff = nz * lz + nx * lx + ny * ly;
              diff = Math.max(0.06, diff);
              const limb = 1 - 0.4 * (1 - Math.sqrt(1 - r2));
              const intensity = diff * 1.25 * limb;
              col = rgb(col[0] * intensity, col[1] * intensity, col[2] * intensity);
            }
            tex[o] = col[0];
            tex[o + 1] = col[1];
            tex[o + 2] = col[2];
            tex[o + 3] = r2 <= 1 ? 255 : 0;
          }
        }

        const img = new ImageData(tex, p.size, p.size);

        // ring behind
        if (p.ring) {
          cctx.save();
          cctx.translate(cx, cy);
          cctx.rotate(-0.3);
          cctx.beginPath();
          cctx.ellipse(0, 0, p.size * 0.78, p.size * 0.22, 0, Math.PI, Math.PI * 2);
          cctx.strokeStyle = "rgba(216, 186, 148, 0.28)";
          cctx.lineWidth = p.size * 0.05;
          cctx.stroke();
          cctx.restore();
        }

        // sphere
        cctx.save();
        cctx.translate(cx, cy);
        cctx.putImageData(img, -r, -r);
        cctx.globalCompositeOperation = "destination-in";
        cctx.beginPath();
        cctx.arc(0, 0, r, 0, Math.PI * 2);
        cctx.fill();
        cctx.globalCompositeOperation = "source-over";
        cctx.restore();

        // atmosphere rim
        if (p.type === "terrestrial" || p.type === "rocky") {
          cctx.save();
          cctx.beginPath();
          cctx.arc(cx, cy, r * 1.01, 0, Math.PI * 2);
          cctx.strokeStyle = "rgba(200, 230, 255, 0.22)";
          cctx.lineWidth = Math.max(1, r * 0.03);
          cctx.stroke();
          cctx.restore();
        }

        // ring in front (lower half only)
        if (p.ring) {
          cctx.save();
          cctx.translate(cx, cy);
          cctx.rotate(-0.3);
          cctx.beginPath();
          cctx.ellipse(0, 0, p.size * 0.78, p.size * 0.22, 0, Math.PI * 2, Math.PI);
          cctx.strokeStyle = "rgba(216, 186, 148, 0.4)";
          cctx.lineWidth = p.size * 0.05;
          cctx.stroke();
          cctx.restore();
        }
      }
    }

    draw();
    const onResize = () => {
      cv.width = window.innerWidth;
      cv.height = window.innerHeight;
      draw();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0 opacity-70" />;
}