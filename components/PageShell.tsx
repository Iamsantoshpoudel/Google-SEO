import type { ReactNode } from "react";
import { PAGE, SITE } from "@/lib/data";

type Crumb = { name: string; path: string };

/** Shared layout for inner pages, with a breadcrumb trail and BreadcrumbList JSON-LD */
export default function PageShell({ title, crumbs, children }: { title: string; crumbs: Crumb[]; children: ReactNode }) {
  const ld = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem", position: i + 1, name: c.name, item: `${SITE}${c.path}`,
    })),
  };
  return (
    <main className={PAGE}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <nav aria-label="Breadcrumb" className="mb-6 text-[.92rem] text-mute">
        <a href="/" className="no-underline hover:text-hot">Home</a>
        {crumbs.map((c) => (
          <span key={c.path}> / <a href={c.path} className="no-underline hover:text-hot">{c.name}</a></span>
        ))}
      </nav>
      <h1 className="mb-10 text-[clamp(2.2rem,6vw,4.5rem)] leading-[1] uppercase">{title}</h1>
      <div className="grid gap-5 text-mute [&_h2]:mt-8 [&_h2]:text-[clamp(1.4rem,3vw,2.1rem)] [&_h2]:leading-[1.05] [&_h2]:text-ink">
        {children}
      </div>
    </main>
  );
}
