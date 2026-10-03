export type Consent = "ok" | "off" | null;

export function getConsent(): Consent {
  const m = document.cookie.match(/(?:^|; )analytics=(ok|off)/);
  return (m?.[1] as Consent) ?? null;
}
export function setConsent(v: "ok" | "off") {
  document.cookie = `analytics=${v}; max-age=31536000; path=/; SameSite=Lax`;
}
