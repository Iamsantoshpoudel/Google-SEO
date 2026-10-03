"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gallery } from "@/lib/data";

export default function Gallery() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const figs = wrap.current!.querySelectorAll<HTMLElement>("figure");
    let tk = false;
    const par = () => {
      tk = false;
      figs.forEach((f, i) => {
        const r = f.getBoundingClientRect();
        f.style.setProperty("--py", (r.top + r.height / 2 - innerHeight / 2) * (i % 2 ? -0.09 : 0.09) + "px");
      });
    };
    const onScroll = () => { if (!tk) { tk = true; requestAnimationFrame(par); } };
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrap} className="mt-2.5 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[18px]">
      {gallery.map((g) => (
        <figure
          key={g.src}
          className="gal-fig rv-c clip-corner group relative aspect-[4/5] overflow-hidden bg-pan even:mt-[46px]"
          onPointerMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            const im = e.currentTarget.querySelector("img");
            if (im) im.style.objectPosition = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
          }}
          onPointerLeave={(e) => {
            const im = e.currentTarget.querySelector("img");
            if (im) im.style.objectPosition = "";
          }}
        >
          <Image src={g.src} alt={g.alt} width={600} height={750}
            className="size-full scale-[1.04] object-cover transition-[filter,transform] duration-[800ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.12]" />
          <figcaption className="sr-only">{g.cap}</figcaption>
        </figure>
      ))}
    </div>
  );
}
