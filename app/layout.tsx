import type { Metadata, Viewport } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Effects from "@/components/Effects";
import Header from "@/components/Header";
import VisitTracker from "@/components/VisitTracker";
import ServiceWorker from "@/components/ServiceWorker";
import PageTransition from "@/components/PageTransition";
import { SITE, LINKS, CONTACT_EMAIL, social } from "@/lib/data";

const syne = Syne({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-syne", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-manrope", display: "swap" });

const title = "Santosh Poudel | AI Developer & Web Developer in Nepal";
const description =
  "Santosh Poudel is a computer engineer, AI developer and web developer from Nepal. Explore his projects, work on VerifiAI and writing.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title,
  description,
  authors: [{ name: "Santosh Poudel" }],
  robots: { index: true, follow: true, "max-image-preview": "large" },
  manifest: "/site.webmanifest",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%2308090d'/%3E%3Cpath d='M12 12h40v12H24v6h28v22H12V40h28v-6H12z' fill='%233d5afe'/%3E%3C/svg%3E",
  },
  openGraph: {
    type: "profile", siteName: "Santosh Poudel", locale: "en_US", url: SITE,
    title,
    description,
    firstName: "Santosh", lastName: "Poudel",
    images: [{ url: "/img/santosh-poudel-web-developer-nepal.jpg", alt: "Santosh Poudel, computer engineer and developer from Nepal" }],
  },
  twitter: {
    card: "summary_large_image", title,
    description: "Portfolio, projects and blog of Santosh Poudel, AI developer from Nepal.",
    images: ["/img/santosh-poudel-web-developer-nepal.jpg"],
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
        <script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;if(localStorage.getItem('preloader-shown')==='1')document.documentElement.classList.add('preloader-seen')}catch(e){}" }} />
        <link rel="me" href={LINKS.github} />
        <link rel="me" href={LINKS.youtube} />
        <link rel="me" href={LINKS.facebook} />
      </head>
      <body suppressHydrationWarning>
        <Preloader />
        <Effects />
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
