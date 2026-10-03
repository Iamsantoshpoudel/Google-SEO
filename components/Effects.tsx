"use client";
import { useEffect, useRef } from "react";

/** Scroll progress bar + custom cursor */
export default function Effects() {
  const bar = useRef<HTMLDivElement>(null);
  const cur = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      if (bar.current) bar.current.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100 + "%";
    };
    const onMove = (e: PointerEvent) => {
      const c = cur.current;
      if (!c) return;
      c.style.left = e.clientX + "px";
      c.style.top = e.clientY + "px";
      c.classList.toggle("h", !!(e.target as Element).closest?.("a,summary"));
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("pointermove", onMove, { passive: true });
    return () => { removeEventListener("scroll", onScroll); removeEventListener("pointermove", onMove); };
  }, []);

  return (
    <>
      <div ref={bar} className="fixed left-0 top-0 z-[90] h-0.5 w-0 bg-hot" />
      <div ref={cur} className="cur" />
    </>
  );
}
