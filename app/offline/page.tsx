import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offline | Santosh Poudel",
  robots: { index: false, follow: false },
  alternates: { canonical: "/offline" },
};

export default function Offline() {
  return (
    <main className="mx-auto grid min-h-svh max-w-[900px] content-center px-[clamp(18px,4vw,48px)]">
      <h1 className="mb-4 text-[clamp(2.4rem,8vw,6rem)] uppercase">You are offline</h1>
      <p className="mb-6 max-w-[50ch] text-mute">This page could not load without a connection. Pages you have already opened still work.</p>
      <a href="/" className="clip-notch w-fit bg-ink px-7 py-3.5 font-semibold text-bg no-underline">Try again</a>
    </main>
  );
}
