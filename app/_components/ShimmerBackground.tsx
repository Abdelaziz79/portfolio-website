"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

class PerlinNoise {
  private p: number[];

  constructor() {
    this.p = new Array(512);
    this.init();
  }

  init() {
    for (let i = 0; i < 256; i++) {
      this.p[i] = this.p[i + 256] = Math.floor(Math.random() * 256);
    }
  }

  fade(t: number) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  lerp(t: number, a: number, b: number) {
    return a + t * (b - a);
  }

  grad(hash: number, x: number, y: number) {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : 0;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  noise(x: number, y: number) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    const u = this.fade(x);
    const v = this.fade(y);
    const A = this.p[X] + Y;
    const B = this.p[X + 1] + Y;
    return this.lerp(
      v,
      this.lerp(u, this.grad(this.p[A], x, y), this.grad(this.p[B], x - 1, y)),
      this.lerp(
        u,
        this.grad(this.p[A + 1], x, y - 1),
        this.grad(this.p[B + 1], x - 1, y - 1)
      )
    );
  }

  generatePerlinNoise(width: number, height: number, cellSize: number) {
    const noiseCanvas = document.createElement("canvas");
    noiseCanvas.width = width;
    noiseCanvas.height = height;
    const noiseCtx = noiseCanvas.getContext("2d");
    if (!noiseCtx) return noiseCanvas;

    const imageData = noiseCtx.createImageData(width, height);
    const data = imageData.data;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const value = ((this.noise(x / cellSize, y / cellSize) + 1) / 2) * 255;
        const cell = (x + y * width) * 4;
        data[cell] = data[cell + 1] = data[cell + 2] = value;
        data[cell + 3] = 255;
      }
    }

    noiseCtx.putImageData(imageData, 0, 0);
    return noiseCanvas;
  }

  createSeamlessPerlinNoise(width: number, height: number, cellSize: number) {
    const singleNoise = this.generatePerlinNoise(width, height, cellSize);
    const seamlessCanvas = document.createElement("canvas");
    seamlessCanvas.width = width * 4;
    seamlessCanvas.height = height;
    const seamlessCtx = seamlessCanvas.getContext("2d");

    if (!seamlessCtx) return "";

    seamlessCtx.drawImage(singleNoise, 0, 0);
    seamlessCtx.save();
    seamlessCtx.translate(width * 2, 0);
    seamlessCtx.scale(-1, 1);
    seamlessCtx.drawImage(singleNoise, 0, 0);
    seamlessCtx.restore();
    seamlessCtx.drawImage(singleNoise, width * 2, 0);
    seamlessCtx.save();
    seamlessCtx.translate(width * 4, 0);
    seamlessCtx.scale(-1, 1);
    seamlessCtx.drawImage(singleNoise, 0, 0);
    seamlessCtx.restore();

    return seamlessCanvas.toDataURL();
  }
}

export default function ShimmerBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDark = resolvedTheme === "dark";
    const baseColor = isDark ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)";

    const settings = {
      size: 3,
      gap: 13,
      contrast: 4,
    };

    const perlin = new PerlinNoise();

    function getRandomOpacity() {
      let opacity = Math.random();
      if (settings.contrast > 0) {
        opacity = Math.pow(opacity, 1 + settings.contrast / 5);
      }
      return opacity * (isDark ? 0.15 : 0.08);
    }

    function drawShapes() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < canvas.height; y += settings.size + settings.gap) {
        for (let x = 0; x < canvas.width; x += settings.size + settings.gap) {
          const opacity = getRandomOpacity();
          const rgba = baseColor
            .replace("rgb", "rgba")
            .replace(")", `,${opacity})`);

          ctx.fillStyle = rgba;

          ctx.fillRect(x, y, settings.size, settings.size);
        }
      }
    }

    function updateMask() {
      if (!canvas) return;
      const width = canvas.width;
      const height = canvas.height;
      const cellSize = Math.max(25, settings.size * 2);

      const perlinNoiseDataUrl = perlin.createSeamlessPerlinNoise(
        width,
        height,
        cellSize
      );

      const sizeFactor = Math.max(1, settings.size / 3);

      const maskTravelDistance = 300 * (settings.size / 10);

      const keyframeName = "shimmerMove";

      let styleSheet = document.getElementById("shimmer-keyframes");
      if (!styleSheet) {
        styleSheet = document.createElement("style");
        styleSheet.id = "shimmer-keyframes";
        document.head.appendChild(styleSheet);
      }

      styleSheet.textContent = `
        @keyframes ${keyframeName} {
          0% { -webkit-mask-position: 0% 0%; mask-position: 0% 0%; }
          100% { -webkit-mask-position: -${maskTravelDistance}% 0%; mask-position: -${maskTravelDistance}% 0%; }
        }
      `;

      canvas.style.maskImage = `url(${perlinNoiseDataUrl})`;
      canvas.style.webkitMaskImage = `url(${perlinNoiseDataUrl})`;
      canvas.style.maskSize = `${300 * sizeFactor}% 100%`;
      canvas.style.webkitMaskSize = `${300 * sizeFactor}% 100%`;
    }

    function resizeCanvas() {
      if (!container || !canvas) return;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      drawShapes();
      updateMask();
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [mounted, resolvedTheme]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-50 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
