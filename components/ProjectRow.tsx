"use client";
import type { MouseEvent } from "react";

type Props = { n: string; title: string; desc: string; href?: string };

const base =
  "relative grid grid-cols-[1fr_30px] items-center gap-5 border-b border-line py-[30px] no-underline md:grid-cols-[90px_1fr_1.2fr_40px] rv-c";

export default function ProjectRow({ n, title, desc, href }: Props) {
  const inner = (
    <>
      <span className="n col-start-1 text-mute md:col-auto">{n}</span>
      <h3 className="col-start-1 text-[clamp(1.5rem,3.4vw,2.8rem)] md:col-auto">{title}</h3>
      <p className="col-start-1 text-mute md:col-auto">{desc}</p>
      {href ? (
        <span className="arr text-[1.6rem] max-md:col-start-2 max-md:row-span-3 max-md:row-start-1">&#8599;</span>
      ) : (
        <span />
      )}
    </>
  );

  if (!href) return <div className={base}>{inner}</div>;

  const spot = (e: MouseEvent<HTMLAnchorElement>) => {
    const b = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", e.clientX - b.left + "px");
    e.currentTarget.style.setProperty("--my", e.clientY - b.top + "px");
  };

  return (
    <a href={href} target="_blank" rel="me noopener" onPointerMove={spot}
      className={`${base} row-link hover:pl-[18px] hover:text-white`}>
      {inner}
    </a>
  );
}
