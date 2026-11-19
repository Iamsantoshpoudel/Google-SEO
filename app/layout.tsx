import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Preloader from "@/components/Preloader";
import DeferredEffects from "@/components/DeferredEffects";
import Header from "@/components/Header";
import ServiceWorker from "@/components/ServiceWorker";
import PageTransition from "@/components/PageTransition";
import { SITE, LINKS, social } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Santosh Poudel | Full Stack & AI Developer from Nepal",
    template: "%s | Santosh Poudel",
  },
  description: "Santosh Poudel, full-stack & AI developer from Nepal, builds SaaS products and DexBotX (a Discord bot), learns blockchain and shares work on GitHub and YouTube.",
  applicationName: "Santosh Poudel Portfolio",
  authors: [{ name: "Santosh Poudel" }],
  robots: { index: true, follow: true, "max-image-preview": "large" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: { canonical: "/", types: { "application/rss+xml": `${SITE}/rss.xml` } },
  openGraph: {
    type: "profile",
    siteName: "Santosh Poudel",
    locale: "en_US",
    url: SITE,
    title: "Santosh Poudel | AI Developer & Full Stack Developer from Nepal",
    description:
      "Santosh Poudel is an AI developer and full stack developer from Nepal building practical products, blogs, and digital tools.",
    firstName: "Santosh",
    lastName: "Poudel",
    images: [{ url: "/img/santosh-poudel-og-image.jpg", type: "image/jpeg", width: 1200, height: 630, alt: "Santosh Poudel, full-stack, AI, and on-chain developer from Nepal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santosh Poudel | AI Developer & Full Stack Developer from Nepal",
    description: "Portfolio, projects and blog of Santosh Poudel, an AI developer from Nepal.",
    images: ["/img/santosh-poudel-og-image.jpg"],
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
        <link rel="shortcut icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;if(localStorage.getItem('preloader-shown')==='1')document.documentElement.classList.add('preloader-seen')}catch(e){}" }} />
        <link rel="me" href={LINKS.github} />
        <link rel="me" href={LINKS.youtube} />
        <link rel="me" href={LINKS.facebook} />
        <link rel="me" href={LINKS.brave} />
      </head>
      <body suppressHydrationWarning>
        <Preloader />
        <DeferredEffects />
        <ServiceWorker />
        <Header />
        <aside aria-label="Quick links" className="fixed right-0 top-1/2 z-[85] hidden -translate-y-1/2 flex-col gap-0.5 md:flex">
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
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="/" className="hover:text-hot">Home</a>
            <a href="/me" className="hover:text-hot">About / Profile</a>
            <a href="/projects" className="hover:text-hot">Projects</a>
            <a href="/blog" className="hover:text-hot">Blog</a>
            <a href="/#find" className="hover:text-hot">Contact</a>
            <a href="/privacy-policy" className="hover:text-hot">Privacy Policy</a>
          </nav>
          <div className="flex flex-wrap justify-between gap-3">
            <span>&copy; {new Date().getFullYear()} Santosh Poudel</span>
            <span>Made With ❤️</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
