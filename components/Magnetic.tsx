"use client";
import type { AnchorHTMLAttributes } from "react";

/** Anchor that drifts toward the pointer */
export default function Magnetic(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      onPointerMove={(e) => {
        if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
        const b = e.currentTarget, r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px,${(e.clientY - r.top - r.height / 2) * 0.4}px)`;
      }}
      onPointerLeave={(e) => { e.currentTarget.style.transform = ""; }}
    />
  );
}
