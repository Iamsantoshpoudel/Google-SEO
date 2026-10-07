"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "preloader-shown";
let startedInThisDocument = false;

export default function Preloader() {
  const [n, setN] = useState(0);
  const [gone, setGone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let alreadyShown = document.documentElement.classList.contains("preloader-seen");
    try {
      alreadyShown ||= localStorage.getItem(STORAGE_KEY) === "1";
    } catch {}

    if (alreadyShown && !startedInThisDocument) {
      document.body.classList.add("ready");
      setRemoved(true);
      return;
    }

    startedInThisDocument = true;
    document.documentElement.classList.add("preloader-seen");
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}

    if (matchMedia("(prefers-reduced-motion:reduce)").matches) {
      document.body.classList.add("ready");
      setRemoved(true);
      return;
    }
    let raf = 0;
    let t1: ReturnType<typeof setTimeout> | undefined;
    let t2: ReturnType<typeof setTimeout> | undefined;
    const t0 = performance.now();
    const f = (t: number) => {
      const p = Math.min(1, (t - t0) / 1400);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(f);
      else
        t1 = setTimeout(() => {
          document.body.classList.add("ready");
          setGone(true);
          t2 = setTimeout(() => setRemoved(true), 1100);
        }, 150);
    };
    raf = requestAnimationFrame(f);
    return () => { cancelAnimationFrame(raf); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (removed) return null;
  return (
    <div id="pre" className={gone ? "gone" : ""} aria-hidden="true">
      <div><b>{n}</b><span>Santosh Poudel</span></div>
      <i style={{ width: `${n}%` }} />
    </div>
  );
}
