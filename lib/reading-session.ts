const STORAGE_KEY = "reading-history:v1";
const UPDATE_EVENT = "reading-history-update";

export function getSessionReadSlugs(validSlugs: string[]): string[] | null {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];
    const valid = new Set(validSlugs);
    return parsed.filter((slug): slug is string => typeof slug === "string" && valid.has(slug));
  } catch {
    return null;
  }
}

export function recordSessionRead(slug: string, validSlugs: string[]): boolean {
  const current = getSessionReadSlugs(validSlugs);
  if (current === null) return false;
  try {
    if (current.includes(slug)) return true;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...current, slug]));
    window.dispatchEvent(new Event(UPDATE_EVENT));
    return true;
  } catch {
    return false;
  }
}

export function subscribeToReadingUpdates(callback: () => void) {
  window.addEventListener(UPDATE_EVENT, callback);
  return () => window.removeEventListener(UPDATE_EVENT, callback);
}
