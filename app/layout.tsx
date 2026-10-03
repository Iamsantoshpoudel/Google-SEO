import type { Metadata, Viewport } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Effects from "@/components/Effects";
import Header from "@/components/Header";
import VisitTracker from "@/components/VisitTracker";
import ServiceWorker from "@/components/ServiceWorker";
import Consent from "@/components/Consent";
import { SITE, LINKS, jsonLd } from "@/lib/data";

const syne = Syne({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-syne", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-manrope", display: "swap" });

const title = "Santosh Poudel (santoshpoudel) | AI Developer & VerifiAI Founder, Nepal";
const description =
  "Santosh Poudel is an AI developer from Nepal and the founder of VerifiAI, building AI detection tools and content verification for creators, businesses and educators.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title,
  description,
  authors: [{ name: "Santosh Poudel" }],
  keywords: ["Santosh Poudel", "santoshpoudel", "Santosh Poudel Nepal", "VerifiAI", "AI developer Nepal", "AI content detector"],
  alternates: { canonical: "/", languages: { en: "/", "x-default": "/" } },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  manifest: "/site.webmanifest",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%2308090d'/%3E%3Cpath d='M12 12h40v12H24v6h28v22H12V40h28v-6H12z' fill='%233d5afe'/%3E%3C/svg%3E",
  },
  openGraph: {
    type: "profile", siteName: "Santosh Poudel", locale: "en_US", url: SITE,
    title: "Santosh Poudel | Computer Engineer & Developer from Nepal",
    description: "Portfolio, projects and blog of Santosh Poudel, developer from Nepal.",
    firstName: "Santosh", lastName: "Poudel",
    images: [{ url: "/img/santosh-poudel.jpg", alt: "Santosh Poudel portrait" }],
  },
  twitter: {
    card: "summary_large_image", title,
    description: "Portfolio, projects and blog of Santosh Poudel, AI developer from Nepal.",
    images: ["/img/santosh-poudel.jpg"],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}" }} />
        <link rel="me" href={LINKS.portfolio} />
        <link rel="me" href={LINKS.github} />
        {jsonLd.map((d, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
        ))}
      </head>
      <body suppressHydrationWarning>
        <Preloader />
        <Effects />
        <VisitTracker />
        <ServiceWorker />
        <Consent />
        <Header />
        <aside aria-label="Quick links" className="fixed right-0 top-1/2 z-[85] flex -translate-y-1/2 flex-col gap-0.5">
          <a href={LINKS.portfolio} target="_blank" rel="me noopener"
            className="clip-tab bg-ink px-2.5 py-[18px] text-[.85rem] font-semibold text-bg no-underline transition-all [writing-mode:vertical-rl] hover:bg-hot hover:pr-[18px] hover:text-white">
            Visit Portfolio
          </a>
          <a href={LINKS.github} target="_blank" rel="me noopener"
            className="clip-tab bg-acc px-2.5 py-[18px] text-[.85rem] font-semibold text-white no-underline transition-all [writing-mode:vertical-rl] hover:bg-hot hover:pr-[18px]">
            GitHub
          </a>
        </aside>
        {children}
        <Wordmark />
        <footer className="flex flex-wrap justify-between gap-3 px-[clamp(18px,4vw,48px)] pb-[70px] pt-[50px] text-[.9rem] text-mute">
          <span>&copy; {new Date().getFullYear()} Santosh Poudel</span>
          <span>Made With ❤️</span>
        </footer>
      </body>
    </html>
  );
}

function Wordmark() {
  return (
    <div className="wm" aria-hidden="true">
      <div className="wm-track">
        {[0, 1, 2, 3].map((k) => (
          <b key={k}>
            {[..."Santosh Poudel"].map((c, i) => (
              <span key={i}>{c === " " ? "\u00a0" : c}</span>
            ))}
          </b>
        ))}
      </div>
    </div>
  );
}
