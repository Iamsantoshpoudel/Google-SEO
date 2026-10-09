import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { CONTACT_EMAIL, LINK, SITE } from "@/lib/data";

const title = "About Santosh Poudel | AI and Web Developer";
const description = "Learn about Santosh Poudel, a Nepal-based AI and web developer, his computer engineering background, projects, technical interests and public profiles.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: `${SITE}/about`,
    title,
    description,
    images: [{ url: "/img/santosh-poudel.jpg", alt: "Santosh Poudel" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/img/santosh-poudel.jpg"],
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
    <PageShell title="About" crumbs={[{ name: "About", path: "/about" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileLd) }} />
      <p>Santosh Poudel is an AI developer and web developer from Nepal with a diploma in computer engineering. He builds websites and works on VerifiAI, a project focused on helping people assess AI-generated content and manipulated media.</p>
      <h2>Technical work and interests</h2>
      <p>This portfolio is built with Next.js, React, TypeScript and Tailwind CSS. Its projects and writing reflect interests in web development, artificial intelligence and content authenticity. Read about <a className={LINK} href="/verifiai">VerifiAI</a>, browse the <a className={LINK} href="/#work">projects</a>, or explore the <a className={LINK} href="/blog">blog</a>.</p>
      <h2>Background</h2>
      <p>His computer engineering studies provide the foundation for his development work. The portfolio and blog document selected projects, technical interests and ongoing learning.</p>
      <h2>Contact</h2>
      <p>Email <a className={LINK} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, or use the public social profiles linked on the <a className={LINK} href="/#find">contact section</a>.</p>
    </PageShell>
  );
}
