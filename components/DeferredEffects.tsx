"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Effects = dynamic(() => import("./Effects"), { ssr: false });

export default function DeferredEffects() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return ready ? <Effects /> : null;
}
