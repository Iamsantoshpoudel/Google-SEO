"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import ThemeToggle from "./ThemeToggle";
import { LINKS, nav } from "@/lib/data";

const icons: Record<string, ReactNode> = {
  About: <><circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
  VerifiAI: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" /><path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z" /></>,
  Gallery: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9" r="1.5" /><path d="m21 15-5-5L5 20" /></>,
  Projects: <><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></>,
  Blog: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h8" /></>,
  Connect: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
};

export default function Header() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateScrollState = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setCompact(window.scrollY >= 40));
    };
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      const matchingLink = nav.find((item) => item.href === pathname);
      setActive(matchingLink?.label ?? "");
      return;
    }

    const sections = nav
      .map((item) => {
        if (item.label === "VerifiAI") return "verifiai";
        if (item.label === "Blog") return "blog";
        return item.href.match(/^\/#(.+)$/)?.[1];
      })
      .filter((id): id is string => Boolean(id))
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) return;

    const observer = new IntersectionObserver(() => {
      const current = sections
        .map((section) => ({ section, top: section.getBoundingClientRect().top }))
        .filter(({ top }) => top <= 180)
        .sort((a, b) => b.top - a.top)[0]?.section;
      setActive(current ? nav.find((item) => item.href === `/#${current.id}`)?.label ?? "" : "");
    }, { rootMargin: "-180px 0px -70% 0px", threshold: [0, 1] });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    const closeOnScroll = () => setMenuOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    window.addEventListener("scroll", closeOnScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      window.removeEventListener("scroll", closeOnScroll);
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef} className={`floating-nav-shell${menuOpen ? " mobile-menu-open" : ""}`}>
      <nav aria-label="Main" className={`floating-nav ${compact ? "is-compact" : "is-expanded"}`}>
        <a href="/" aria-label="Santosh Poudel home" className="nav-avatar">
          <Image
            src="/img/santosh-poudel-web-developer-nepal.jpg"
            alt="Santosh Poudel"
            width={36}
            height={36}
          />
        </a>
        <div className="nav-links">
          {nav.map((item) => {
            const selected = active === item.label;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                aria-current={selected ? "location" : undefined}
                data-tooltip={item.label}
                className={`nav-link${selected ? " is-active" : ""}`}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {icons[item.label]}
                </svg>
                <span aria-hidden="true" className="nav-link-label">{item.label}</span>
                <span className="sr-only">{item.label}</span>
              </a>
            );
          })}
        </div>
        <div className="nav-actions">
          <a
            href={LINKS.github}
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="nav-icon-button nav-github"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.62 1.22 3.26.94.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.06-1.15 3.06-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.02.76 2.06v3.11c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>
          <ThemeToggle />
          <a href="/#find" aria-label="Contact" className="nav-contact">
            <svg className="nav-contact-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              {icons.Connect}
            </svg>
            <span className="nav-contact-label">Contact</span>
          </a>
          <button
            type="button"
            className="nav-menu-button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {menuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M5 7h14M5 12h14M5 17h14" />}
            </svg>
          </button>
        </div>
      </nav>
      <nav id="mobile-navigation-menu" aria-label="Mobile navigation" className="mobile-menu-panel" hidden={!menuOpen}>
        <div className="mobile-menu-links">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.label ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                {icons[item.label]}
              </svg>
              {item.label}
            </a>
          ))}
        </div>
        <div className="mobile-menu-actions">
          <a href={LINKS.github} target="_blank" rel="me noopener noreferrer" onClick={() => setMenuOpen(false)}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.62 1.22 3.26.94.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.06-1.15 3.06-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.02.76 2.06v3.11c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
