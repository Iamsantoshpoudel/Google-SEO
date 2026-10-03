"use client";
import { useEffect, useMemo, useState } from "react";
import { collection, doc, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { getDb, utcDay } from "@/lib/firebase";

type Counts = Record<string, number>;
type Day = { date: string; count: number; countries?: Counts };
type Totals = { count: number; countries?: Counts };

const names = typeof Intl !== "undefined" && "DisplayNames" in Intl ? new Intl.DisplayNames(["en"], { type: "region" }) : null;
const countryName = (c: string) => {
  if (c === "XX") return "Unknown";
  try { return names?.of(c) ?? c; } catch { return c; }
};
const flag = (c: string) =>
  c === "XX" ? "\u{1F310}" : String.fromCodePoint(...c.split("").map((ch) => 127397 + ch.charCodeAt(0)));
const sorted = (m: Counts = {}) => Object.entries(m).sort((a, b) => b[1] - a[1]);

export default function Dashboard() {
  const db = useMemo(() => getDb(), []);
  const [days, setDays] = useState<Day[] | null>(null);
  const [totals, setTotals] = useState<Totals | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!db) return;
    const fail = (e: Error) => setError(e.message);
    const u1 = onSnapshot(query(collection(db, "daily"), orderBy("date", "desc"), limit(90)),
      (s) => setDays(s.docs.map((d) => d.data() as Day)), fail);
    const u2 = onSnapshot(doc(db, "meta", "totals"),
      (s) => setTotals((s.data() as Totals) ?? { count: 0 }), fail);
    return () => { u1(); u2(); };
  }, [db]);

  const today = utcDay();
  const byDate = useMemo(() => new Map((days ?? []).map((d) => [d.date, d])), [days]);
  const last30 = useMemo(
    () => Array.from({ length: 30 }, (_, i) => {
      const date = utcDay(new Date(Date.now() - (29 - i) * 864e5));
      return { date, count: byDate.get(date)?.count ?? 0 };
    }),
    [byDate],
  );
  const max = Math.max(1, ...last30.map((d) => d.count));
  const week = last30.slice(-7).reduce((a, d) => a + d.count, 0);
  const countries = sorted(totals?.countries);
  const topCount = countries[0]?.[1] ?? 1;

  const card = "clip-notch border border-line bg-pan p-5";

  return (
    <main className="mx-auto max-w-[1100px] px-[clamp(18px,4vw,48px)] pb-24 pt-28">
      <a href="/" className="text-[.92rem] text-mute no-underline hover:text-hot">&larr; Back to site</a>
      <h1 className="mb-2 mt-6 text-[clamp(2.4rem,7vw,5rem)] uppercase">Visitors</h1>
      <p className="mb-10 max-w-[60ch] text-mute">
        Live numbers from this website. One visit is counted per browser per day (UTC). Dates are UTC.
      </p>

      {!db && (
        <p className={card}>Firebase is not configured. Copy <code>.env.example</code> to <code>.env.local</code> and fill in your project values.</p>
      )}
      {error && <p className={`${card} text-hot`}>Could not load data: {error}</p>}

      {db && !error && (days === null || totals === null) && <p className="text-mute">Loading…</p>}

      {db && days && totals && (
        <>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["Total visitors", totals.count ?? 0],
              ["Today", byDate.get(today)?.count ?? 0],
              ["Last 7 days", week],
              ["Countries", countries.length],
            ].map(([label, v]) => (
              <div key={label} className={card}>
                <div className="text-[.85rem] text-mute">{label}</div>
                <div className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-none tracking-[-.03em]">{v}</div>
              </div>
            ))}
          </div>

          <h2 className="mb-5 mt-14 text-[clamp(1.5rem,3vw,2.2rem)]">Last 30 days</h2>
          <div className={`${card} overflow-x-auto`}>
            <div className="flex h-40 min-w-[560px] items-end gap-1" role="img" aria-label="Visitors per day for the last 30 days">
              {last30.map((d) => (
                <div key={d.date} className="group flex h-full flex-1 flex-col justify-end" title={`${d.date}: ${d.count}`}>
                  <div className="w-full bg-acc transition-colors group-hover:bg-hot"
                    style={{ height: `${d.count ? Math.max(4, (d.count / max) * 100) : 1}%`, opacity: d.count ? 1 : 0.25 }} />
                </div>
              ))}
            </div>
            <div className="mt-2 flex min-w-[560px] justify-between text-[.8rem] text-mute">
              <span>{last30[0].date}</span><span>{last30[29].date}</span>
            </div>
          </div>

          <h2 className="mb-5 mt-14 text-[clamp(1.5rem,3vw,2.2rem)]">Countries</h2>
          {countries.length === 0 ? (
            <p className="text-mute">No visits recorded yet.</p>
          ) : (
            <ul className="grid gap-3">
              {countries.map(([c, n]) => (
                <li key={c} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line pb-3">
                  <span className="text-[1.4rem]" aria-hidden="true">{flag(c)}</span>
                  <div>
                    <div className="font-semibold">{countryName(c)}</div>
                    <div className="mt-1 h-1.5 bg-line"><div className="h-full bg-hot" style={{ width: `${(n / topCount) * 100}%` }} /></div>
                  </div>
                  <span className="tabular-nums">{n}</span>
                </li>
              ))}
            </ul>
          )}

          <h2 className="mb-5 mt-14 text-[clamp(1.5rem,3vw,2.2rem)]">Daily breakdown</h2>
          {days.length === 0 ? (
            <p className="text-mute">No visits recorded yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-left">
                <thead className="text-[.85rem] text-mute">
                  <tr className="border-b border-line">
                    <th className="py-2 pr-4 font-semibold">Date</th>
                    <th className="py-2 pr-4 font-semibold">Visitors</th>
                    <th className="py-2 font-semibold">From</th>
                  </tr>
                </thead>
                <tbody>
                  {days.map((d) => (
                    <tr key={d.date} className="border-b border-line align-top">
                      <td className="py-3 pr-4 tabular-nums">{d.date}</td>
                      <td className="py-3 pr-4 tabular-nums">{d.count}</td>
                      <td className="py-3">
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {sorted(d.countries).map(([c, n]) => (
                            <span key={c} className="whitespace-nowrap text-mute">
                              <span aria-hidden="true">{flag(c)}</span> {countryName(c)} <b className="text-ink">{n}</b>
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </main>
  );
}
