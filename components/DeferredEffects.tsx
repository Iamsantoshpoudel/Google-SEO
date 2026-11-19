"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ComponentType } from "react";

const Effects = dynamic(() => import("./Effects"), { ssr: false });

export default function DeferredEffects() {
  const [ready, setReady] = useState(false);
  const [VisitTracker, setVisitTracker] = useState<ComponentType | null>(null);

  useEffect(() => {
    let cancelled = false;
    let idleHandle: number | undefined;
    let timeoutHandle: number | undefined;
    let trackerTimeoutHandle: number | undefined;

    const loadTracker = async () => {
      try {
        const trackerModule = await import("./VisitTracker");
        if (!cancelled) setVisitTracker(() => trackerModule.default);
      } catch (error) {
        console.error("Unable to load visit tracking", error);
      }
    };

    const loadEnhancements = () => {
      if (cancelled) return;
      setReady(true);
      trackerTimeoutHandle = window.setTimeout(() => void loadTracker(), 10_000);
    };

    if (typeof window.requestIdleCallback === "function") {
      idleHandle = window.requestIdleCallback(loadEnhancements, { timeout: 2000 });
    } else {
      timeoutHandle = window.setTimeout(loadEnhancements, 1500);
    }

    return () => {
      cancelled = true;
      if (idleHandle !== undefined) window.cancelIdleCallback(idleHandle);
      if (timeoutHandle !== undefined) window.clearTimeout(timeoutHandle);
      if (trackerTimeoutHandle !== undefined) window.clearTimeout(trackerTimeoutHandle);
    };
  }, []);

  return (
    <>
      {ready && <Effects />}
      {VisitTracker && <VisitTracker />}
    </>
  );
}
