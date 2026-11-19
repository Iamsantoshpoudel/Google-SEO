"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Particles = dynamic(() => import("./Particles"), { ssr: false });

export default function Hero() {
  const frame = useRef<HTMLElement>(null);
  const h1 = useRef<HTMLHeadingElement>(null);
  const [broken, setBroken] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    const particleFrame = requestAnimationFrame(() => setParticlesReady(true));
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) {
      return () => cancelAnimationFrame(particleFrame);
    }
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
    };
    const onScroll = () => { if (!tk) { tk = true; requestAnimationFrame(par); } };
    addEventListener("pointermove", move, { passive: true });
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(particleFrame);
      removeEventListener("pointermove", move);
      removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="hero-section relative grid min-h-[65svh] content-end overflow-hidden px-[clamp(18px,4vw,48px)] pb-[7svh] md:min-h-svh">
      {particlesReady && <Particles />}
      <figure ref={frame} className="frame absolute right-[clamp(18px,4vw,48px)] top-[13vh] z-[2] aspect-[3/4] w-[34vw] md:top-[16vh] md:w-[min(26vw,300px)]">
        {broken ? (
          <svg viewBox="0 0 120 160" role="img" aria-label="Abstract portrait placeholder">
            <circle cx="60" cy="62" r="24" fill="none" stroke="var(--a)" strokeWidth="2" />
            <path d="M18 150c4-40 26-52 42-52s38 12 42 52" fill="none" stroke="var(--a)" strokeWidth="2" />
          </svg>
        ) : (
          <Image
            src="/img/santosh-poudel-web-developer-nepal.jpg"
            alt="Santosh Poudel, computer engineer and web developer from Nepal"
            title="Santosh Poudel, computer engineer and web developer from Nepal"
            width={600}
            height={800}
            sizes="(max-width: 767px) 34vw, (max-width: 1153px) 26vw, 300px"
            loading="eager"
            fetchPriority="high"
            priority
            onError={() => setBroken(true)}
          />
        )}
        <span className="scan-line" aria-hidden="true" />
      </figure>

      <h1 ref={h1} className="relative -ml-[.04em] text-[clamp(3.6rem,15.5vw,14rem)] uppercase md:max-w-[68%] md:text-[clamp(3.6rem,12vw,12rem)]">
        <span className="hero-line"><i className="hero-i">Santosh Poudel</i></span>
        <span className="mt-4 block text-[clamp(1rem,3vw,2rem)] font-semibold normal-case tracking-normal text-mute">
          Full-stack &amp; AI developer from Nepal
        </span>
      </h1>
    </section>
  );
}
