import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import { CONTACT_EMAIL, LINKS, LINK, personLd, verifiaiOrganizationLd, SITE } from "@/lib/data";

const title = "About Santosh Poudel: Developer and VerifiAI Founder";
const description = "Meet Santosh Poudel, a computer engineer, AI developer and web developer from Nepal. Read about his background, work and VerifiAI.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: `${SITE}/about`,
    title,
    description,
    images: [{ url: "/img/santosh-poudel-web-developer-nepal.jpg", alt: "Santosh Poudel, computer engineer and developer from Nepal" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/img/santosh-poudel-web-developer-nepal.jpg"],
  },
};

export default function About() {
  const profileLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE}/about#profile`,
    url: `${SITE}/about`,
    name: "About Santosh Poudel",
    mainEntity: { "@id": `${SITE}/#person` },
  };

  return (
    <PageShell title="About Santosh Poudel" crumbs={[{ name: "About", path: "/about" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([personLd, verifiaiOrganizationLd, profileLd]) }} />
      <section className="grid items-start gap-7 sm:grid-cols-[minmax(180px,280px)_1fr]">
        <Image
          src="/img/santosh-poudel-web-developer-nepal.jpg"
          alt="Santosh Poudel, computer engineer and web developer from Nepal"
          width={600}
          height={800}
          sizes="(max-width: 640px) 100vw, 280px"
          className="w-full object-cover"
        />
        <p className="text-ink">Santosh Poudel is a computer engineer, AI developer and web developer from Nepal and the founder of VerifiAI.</p>
      </section>

      <section>
        <h2>Background</h2>
        <p>I completed a diploma in computer engineering. This site documents my continuing interests in web development, artificial intelligence and practical digital tools.</p>
      </section>

      <section>
        <h2>Work</h2>
        <p>My work includes building websites and exploring ways software can help people assess digital content. This site is built with Next.js, React, TypeScript and Tailwind CSS. I share code and project work through my <a className={LINK} href={LINKS.github} target="_blank" rel="me noopener noreferrer">GitHub</a> and videos on <a className={LINK} href={LINKS.youtube} target="_blank" rel="me noopener noreferrer">YouTube</a>.</p>
      </section>

      <section>
        <h2>VerifiAI</h2>
        <p>I started VerifiAI to work on content-authenticity tools. The product has its own site at <a className={LINK} href={LINKS.verifiai} target="_blank" rel="me noopener noreferrer">VerifiAI</a>; this portfolio remains the home for my biography, projects and writing.</p>
        <p>Read <a className={LINK} href="/verifiai">why I built VerifiAI</a> or browse the <a className={LINK} href="/blog">blog</a>.</p>
      </section>

      <section>
        <h2>Links</h2>
        <ul className="list-disc pl-5">
          <li><a className={LINK} href={LINKS.github} target="_blank" rel="me noopener noreferrer">Santosh Poudel on GitHub</a></li>
          <li><a className={LINK} href={LINKS.youtube} target="_blank" rel="me noopener noreferrer">Santosh Poudel on YouTube</a></li>
          <li><a className={LINK} href={LINKS.facebook} target="_blank" rel="me noopener noreferrer">Santosh Poudel on Facebook</a></li>
          <li><a className={LINK} href={LINKS.verifiai} target="_blank" rel="me noopener noreferrer">VerifiAI</a></li>
          <li><a className={LINK} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
        </ul>
      </section>
    </PageShell>
  );
}
