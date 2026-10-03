"use client";

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const current = root.dataset.theme ?? (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    dispatchEvent(new Event("resize")); // lets the particle canvas pick up the new color
  };
  return (
    <button onClick={toggle} aria-label="Toggle light and dark theme"
      className="grid size-9 place-items-center rounded-full border border-line text-[1rem] transition-colors hover:border-hot hover:text-hot">
      &#9680;
    </button>
  );
}
