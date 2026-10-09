"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { doc, increment, serverTimestamp, writeBatch } from "firebase/firestore";
import { getDb, utcDay } from "@/lib/firebase";

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
    const db = getDb();
    if (!db) return;
    const today = utcDay();
    try { if (localStorage.getItem(KEY) === today) return; } catch {}

    sending = true;
    (async () => {
      let country = "XX";
      try {
        const r = await fetch("https://api.country.is", { signal: AbortSignal.timeout(4000) });
        const j = (await r.json()) as { country?: string };
        if (j.country && /^[A-Z]{2}$/.test(j.country)) country = j.country;
      } catch {}

      try {
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
    })();
  }, [pathname]);

  return null;
}
