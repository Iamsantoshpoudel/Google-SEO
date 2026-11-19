"use client";
import { useEffect, useRef } from "react";

/** Scroll progress bar */
export default function Effects() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      if (bar.current) bar.current.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100 + "%";
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={bar} className="fixed left-0 top-0 z-[90] h-0.5 w-0 bg-hot" />
  );
}
