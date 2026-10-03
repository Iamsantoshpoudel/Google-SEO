"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { BIG } from "@/lib/data";

/** Large statement whose words light up as you scroll */
export default function BigText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [n, setN] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    const f = () => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      const p = Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.4)));
      setN(Math.round(p * words.length));
    };
    f();
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, [words.length]);

  return (
    <p ref={ref} className={`${BIG} max-w-[22ch]`}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className={`big-w ${i < n ? "on" : ""}`}>{w}</span>{" "}
        </Fragment>
      ))}
    </p>
  );
}
