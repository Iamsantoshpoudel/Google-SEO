"use client";
import { useCallback, useEffect, useRef, type ElementType } from "react";

const CH = "!<>-_/[]{}=+*^?#";

type Props = {
  children: string;
  on?: "view" | "hover";
  as?: ElementType;
  className?: string;
} & Record<string, unknown>;

/** Text scramble effect, triggered on scroll into view or on hover */
export default function Scramble({ children, on = "view", as: Tag = "span", className, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const run = useCallback(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    clearInterval(timer.current);
    let i = 0;
    timer.current = setInterval(() => {
      el.textContent = children.split("").map((c, k) => (c === " " || k < i ? c : CH[(Math.random() * CH.length) | 0])).join("");
      i += 0.6;
      if (i >= children.length) { el.textContent = children; clearInterval(timer.current); }
    }, 30);
  }, [children]);

  useEffect(() => {
    const el = ref.current;
    if (on !== "view" || !el) return;
    const io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting) { run(); io.disconnect(); }
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [on, run]);

  useEffect(() => () => clearInterval(timer.current), []);

  return (
    <Tag ref={ref} className={className} onPointerEnter={on === "hover" ? run : undefined} {...rest}>
      {children}
    </Tag>
  );
}
