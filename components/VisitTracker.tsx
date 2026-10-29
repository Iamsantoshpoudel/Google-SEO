"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const KEY = "visit-counted-on";
let sending = false; // guards against React strict-mode double effects

/**
 * Counts one visit per browser per UTC day. Stores only a date and a 2-letter
 * country code, never an IP address.
 */
export default function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/dashboard") || sending) return;
    let cancelled = false;
    let idleHandle: number | undefined;
    let timeoutHandle: number | undefined;

    const countVisit = async () => {
      if (sending) return;
      const today = new Date().toISOString().slice(0, 10);
      try { if (localStorage.getItem(KEY) === today) return; } catch {}
      if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY || !process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) return;

      sending = true;
      try {
        const [{ doc, increment, serverTimestamp, writeBatch }, { getDb }] = await Promise.all([
          import("firebase/firestore"),
          import("@/lib/firebase"),
        ]);
        const db = getDb();
        if (!db) return;

        let country = "XX";
        try {
          const r = await fetch("https://api.country.is", { signal: AbortSignal.timeout(4000) });
          const j = (await r.json()) as { country?: string };
          if (j.country && /^[A-Z]{2}$/.test(j.country)) country = j.country;
        } catch {}

        const batch = writeBatch(db);
        batch.set(doc(db, "daily", today),
          { date: today, count: increment(1), countries: { [country]: increment(1) }, updatedAt: serverTimestamp() },
          { merge: true });
        batch.set(doc(db, "meta", "totals"),
          { count: increment(1), countries: { [country]: increment(1) }, updatedAt: serverTimestamp() },
          { merge: true });
        await batch.commit();
        try { localStorage.setItem(KEY, today); } catch {}
      } catch (e) {
        console.error("Visit tracking failed", e);
      } finally {
        sending = false;
      }
    };

    const run = () => {
      if (!cancelled) void countVisit();
    };

    if (typeof window.requestIdleCallback === "function") {
      idleHandle = window.requestIdleCallback(run, { timeout: 5000 });
    } else {
      timeoutHandle = window.setTimeout(run, 2000);
    }

    return () => {
      cancelled = true;
      if (idleHandle !== undefined) window.cancelIdleCallback(idleHandle);
      if (timeoutHandle !== undefined) window.clearTimeout(timeoutHandle);
    };
  }, [pathname]);

  return null;
}
