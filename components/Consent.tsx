"use client";
import { useEffect, useState } from "react";
import { getConsent, setConsent } from "@/lib/consent";

export default function Consent() {
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(getConsent() === null); }, []);
  if (!show) return null;

  const choose = (v: "ok" | "off") => { setConsent(v); setShow(false); };
  const btn = "px-4 py-2 text-[.9rem] font-semibold transition-colors";

  return (
    <div role="dialog" aria-label="Visit counting" className="clip-notch fixed bottom-4 left-4 right-4 z-[120] max-w-[420px] bg-ink p-5 text-bg">
      <p className="mb-4 text-[.92rem] leading-snug">
        This site counts visits anonymously (date and country only) and remembers your theme choice. Nothing is sold or shared.
      </p>
      <div className="flex gap-3">
        <button onClick={() => choose("ok")} className={`${btn} bg-hot text-white hover:bg-acc`}>Accept</button>
        <button onClick={() => choose("off")} className={`${btn} border border-bg/40 hover:border-hot hover:text-hot`}>Decline</button>
      </div>
    </div>
  );
}
