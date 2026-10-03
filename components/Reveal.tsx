"use client";
import { useCallback, useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type Props = { as?: "section" | "div"; id?: string; className?: string; style?: CSSProperties; children: ReactNode };

/** Blur-in reveal when scrolled into view. Children with `rv-c` get a staggered reveal. */
export default function Reveal({ as = "section", className = "", children, ...rest }: Props) {
  const Tag: ElementType = as;
  const ref = useRef<HTMLElement>(null);
  const setRef = useCallback((el: HTMLElement | null) => { ref.current = el; }, []);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting) { setOn(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={setRef} className={`rv ${on ? "in" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
