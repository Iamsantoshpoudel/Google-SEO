"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Particles from "./Particles";
import Magnetic from "./Magnetic";
import { LINKS } from "@/lib/data";

export default function Hero() {
  const frame = useRef<HTMLElement>(null);
  const h1 = useRef<HTMLHeadingElement>(null);
  const [broken, setBroken] = useState(false);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const fr = frame.current!;
    const hs = h1.current!.querySelectorAll<HTMLElement>(".hero-line");
    let tk = false;
    const move = (e: PointerEvent) => {
      fr.style.setProperty("--fx", (e.clientX / innerWidth - 0.5) * -28 + "px");
      fr.style.setProperty("--fy", (e.clientY / innerHeight - 0.5) * -28 + "px");
    };
    const par = () => {
      tk = false;
      const s = scrollY;
      fr.style.setProperty("--sy", -s * 0.14 + "px");
      hs[0].style.setProperty("--hx", -s * 0.18 + "px");
      hs[1].style.setProperty("--hx", s * 0.18 + "px");
    };
    const onScroll = () => { if (!tk) { tk = true; requestAnimationFrame(par); } };
    addEventListener("pointermove", move, { passive: true });
    addEventListener("scroll", onScroll, { passive: true });
    return () => { removeEventListener("pointermove", move); removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <section className="relative grid min-h-svh content-end overflow-hidden px-[clamp(18px,4vw,48px)] pb-[7vh]">
      <Particles />
      <figure ref={frame} className="frame absolute right-[clamp(18px,4vw,48px)] top-[13vh] z-[2] aspect-[3/4] w-[34vw] md:top-[16vh] md:w-[min(26vw,300px)]">
        {broken ? (
          <svg viewBox="0 0 120 160" role="img" aria-label="Abstract portrait placeholder">
            <circle cx="60" cy="62" r="24" fill="none" stroke="var(--a)" strokeWidth="2" />
            <path d="M18 150c4-40 26-52 42-52s38 12 42 52" fill="none" stroke="var(--a)" strokeWidth="2" />
          </svg>
        ) : (
          <Image src="/img/santosh-poudel.jpg" alt="Santosh Poudel, developer from Nepal" width={600} height={800} priority onError={() => setBroken(true)} />
        )}
        <b />
      </figure>

      <h1 ref={h1} className="relative -ml-[.04em] text-[clamp(3.6rem,15.5vw,14rem)] uppercase">
        <span className="hero-line"><i className="hero-i">Santosh</i></span>
        <span className="hero-line"><i className="hero-i">Poudel</i></span>
      </h1>

      <div className="relative mt-[4vh] flex flex-wrap items-end justify-between gap-6 border-t border-line pt-[22px]">
        <p className="max-w-[46ch] text-mute">
          Computer engineer and web developer from Nepal. I build fast websites and AI tools, and share the work on YouTube and GitHub.
        </p>
        <Magnetic
          href={LINKS.portfolio} target="_blank" rel="me noopener"
          className="clip-notch inline-block bg-ink px-7 py-3.5 font-semibold text-bg no-underline transition-[background,transform] duration-300 hover:translate-x-1.5 hover:bg-acc hover:text-white"
        >
          Open my main portfolio
        </Magnetic>
      </div>
    </section>
  );
}
