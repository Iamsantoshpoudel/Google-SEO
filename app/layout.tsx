import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import DeferredEffects from "@/components/DeferredEffects";
import Header from "@/components/Header";
import VisitTracker from "@/components/VisitTracker";
import ServiceWorker from "@/components/ServiceWorker";
import PageTransition from "@/components/PageTransition";
import { SITE, LINKS, social } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://santosh2.com.np"),
  title: {
    default: "Santosh Poudel | AI & Web Developer in Nepal",
    template: "%s | Santosh Poudel",
  },
  description:
    "Official portfolio of Santosh Poudel, a computer engineer and AI and web developer from Nepal. Explore projects, work with VerifiAI, and writing.",
  applicationName: "Santosh Poudel Portfolio",
  authors: [{ name: "Santosh Poudel" }],
  robots: { index: true, follow: true, "max-image-preview": "large" },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  alternates: { canonical: "/", types: { "application/rss+xml": `${SITE}/rss.xml` } },
  openGraph: {
    type: "profile",
    siteName: "Santosh Poudel Portfolio",
    locale: "en_US",
    url: SITE,
    title: "Santosh Poudel | AI & Web Developer in Nepal",
    description:
      "Official portfolio of Santosh Poudel, a computer engineer and AI and web developer from Nepal. Explore projects, work with VerifiAI, and writing.",
    firstName: "Santosh",
    lastName: "Poudel",
    images: [{ url: "/opengraph-image", alt: "Santosh Poudel, AI developer and full stack developer from Nepal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santosh Poudel | AI & Web Developer in Nepal",
    description: "Official portfolio of Santosh Poudel, a computer engineer and AI and web developer from Nepal. Explore projects, work with VerifiAI, and writing.",
    images: ["/opengraph-image"],
  },
  other: { "geo.region": "NP", "geo.placename": "Nepal" },
};

export const viewport: Viewport = {
  width: "device-width", initialScale: 1, viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef0f5" },
    { media: "(prefers-color-scheme: dark)", color: "#08090d" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
            <script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}" }} />
        <link rel="me" href={LINKS.github} />
        <link rel="me" href={LINKS.youtube} />
        <link rel="me" href={LINKS.facebook} />
      </head>
      <body suppressHydrationWarning>
        <DeferredEffects />
        <VisitTracker />
        <ServiceWorker />
        <Header />
        <aside aria-label="Quick links" className="fixed right-0 top-1/2 z-[85] flex -translate-y-1/2 flex-col gap-0.5">
          <a href={LINKS.verifiai} target="_blank" rel="me noopener noreferrer"
            className="clip-tab bg-ink px-2.5 py-[18px] text-[.85rem] font-semibold text-bg no-underline transition-all [writing-mode:vertical-rl] hover:bg-hot hover:pr-[18px] hover:text-white">
            Visit VerifiAI
          </a>
          <a href={LINKS.github} target="_blank" rel="me noopener noreferrer"
            className="clip-tab bg-acc px-2.5 py-[18px] text-[.85rem] font-semibold text-white no-underline transition-all [writing-mode:vertical-rl] hover:bg-hot hover:pr-[18px]">
            GitHub
          </a>
        </aside>
        <PageTransition>{children}</PageTransition>
        <footer className="flex flex-col gap-6 px-[clamp(18px,4vw,48px)] pb-[70px] pt-[30px] text-[.9rem] text-mute">
          <div className="mq overflow-hidden whitespace-nowrap border-y border-line py-[18px]" aria-label="Social profiles">
            <nav className="mq-track" aria-label="Social profile links">
              {[...social, ...social].map((item, index) => {
                const duplicate = index >= social.length;
                return (
                  <a key={`${item.label}-${index}`} className="mq-link"
                    href={item.href} target="_blank" rel="me noopener noreferrer"
                    aria-hidden={duplicate || undefined} tabIndex={duplicate ? -1 : undefined}>
                    {[...item.label].map((character, characterIndex) => (
                      <span key={characterIndex}>{character}</span>
                    ))}
                  </a>
                );
              })}
            </nav>
          </div>
          <div className="flex flex-wrap justify-between gap-3">
            <span>&copy; {new Date().getFullYear()} Santosh Poudel</span>
            <span>Made With ❤️</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
