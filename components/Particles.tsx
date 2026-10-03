"use client";
import { useEffect, useRef } from "react";

type P = { x: number; y: number; vx: number; vy: number };

/** Interactive particle network for the hero background */
export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current!;
    const x = cv.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
    const dark = matchMedia("(prefers-color-scheme:dark)");
    const m = { x: -999, y: -999 };
    let W = 0, H = 0, raf = 0, col = "#6f86ff";
    let pts: P[] = [];

    const size = () => {
      const d = devicePixelRatio || 1;
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * d; cv.height = H * d;
      x.setTransform(d, 0, 0, d, 0, 0);
      const n = Math.min(110, Math.round((W * H) / 14000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      }));
      col = getComputedStyle(document.documentElement).getPropertyValue("--a").trim() || col;
    };

    const draw = () => {
      x.clearRect(0, 0, W, H);
      x.fillStyle = col; x.strokeStyle = col;
      pts.forEach((p, i) => {
        if (!reduce) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
          const dx = m.x - p.x, dy = m.y - p.y;
          if (Math.hypot(dx, dy) < 160) { p.x += dx * 0.012; p.y += dy * 0.012; }
        }
        x.globalAlpha = 0.8; x.beginPath(); x.arc(p.x, p.y, 1.7, 0, 6.3); x.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], dd = Math.hypot(p.x - q.x, p.y - q.y);
          if (dd < 130) {
            x.globalAlpha = (1 - dd / 130) * 0.45;
            x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(q.x, q.y); x.stroke();
          }
        }
        const md = Math.hypot(m.x - p.x, m.y - p.y);
        if (md < 170) {
          x.strokeStyle = "#ff5c78"; x.globalAlpha = (1 - md / 170) * 0.7;
          x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(m.x, m.y); x.stroke();
          x.strokeStyle = col;
        }
      });
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      m.x = e.clientX - r.left; m.y = e.clientY - r.top;
    };
    const parent = cv.parentElement!;
    parent.addEventListener("pointermove", onMove);
    addEventListener("resize", size);
    dark.addEventListener("change", size);
    size(); draw();
    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("pointermove", onMove);
      removeEventListener("resize", size);
      dark.removeEventListener("change", size);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
