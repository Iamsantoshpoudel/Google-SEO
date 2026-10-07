import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | Santosh Poudel",
  description: "This page wandered off. Head back to the homepage or explore the blog.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-[80svh] max-w-[900px] content-center px-[clamp(18px,4vw,48px)] py-32">
      <div className="not-found-float mb-4 select-none font-display text-[clamp(7rem,30vw,16rem)] font-extrabold leading-[.8] tracking-[-.08em] text-hot" aria-hidden="true">
        404
      </div>
      <p className="mb-3 font-semibold uppercase tracking-[.16em] text-hot">Page not found</p>
      <h1 className="max-w-[15ch] text-[clamp(2.2rem,7vw,5rem)] leading-[1.02]">
        Looks like this page took a wrong turn.
      </h1>
      <p className="mt-5 max-w-[52ch] text-mute">
        We checked behind the pixels. No page. Maybe it went out for coffee and forgot to leave a forwarding address.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="clip-notch bg-hot px-6 py-3 font-semibold text-white no-underline transition-transform hover:-translate-y-1">
          Back to home
        </Link>
        <Link href="/blog" className="clip-notch border border-line px-6 py-3 font-semibold text-ink no-underline transition-colors hover:border-hot hover:text-hot">
          Explore the blog
        </Link>
      </div>
      <div className="not-found-orbit pointer-events-none absolute right-[10%] top-[24%] hidden size-28 rounded-full border border-acc/40 sm:block" aria-hidden="true">
        <span className="absolute -right-2 top-1/2 size-4 rounded-full bg-acc shadow-[0_0_24px_var(--a)]" />
      </div>
    </main>
  );
}
