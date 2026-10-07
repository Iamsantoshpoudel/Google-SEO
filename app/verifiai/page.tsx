import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { LINK, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "VerifiAI | AI Content Verification by Santosh Poudel",
  description: "VerifiAI helps people identify AI-generated text and images, detect manipulated media and verify digital trust. Founded by Santosh Poudel.",
  alternates: { canonical: "/verifiai" },
  openGraph: {
    type: "website",
    url: `${SITE}/verifiai`,
    title: "VerifiAI | AI Content Verification by Santosh Poudel",
    description: "Learn about VerifiAI, a content-authenticity project founded by Nepal-based AI developer Santosh Poudel.",
    images: [{ url: "/img/santosh-poudel.jpg", alt: "Santosh Poudel, founder of VerifiAI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VerifiAI | AI Content Verification by Santosh Poudel",
    description: "A content-authenticity project founded by AI developer Santosh Poudel.",
    images: ["/img/santosh-poudel.jpg"],
  },
};

export default function VerifiAI() {
  const pageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "VerifiAI",
    description: "An AI content-authenticity project founded by Santosh Poudel.",
    url: `${SITE}/verifiai`,
    about: { "@id": `${SITE}/#person` },
    isPartOf: { "@id": `${SITE}/#site` },
  };
  return (
    <PageShell title="VerifiAI" crumbs={[{ name: "VerifiAI", path: "/verifiai" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <p>VerifiAI is a platform that helps individuals and organizations identify AI-generated content, detect manipulated media and verify digital trust. It was founded by Santosh Poudel, an AI developer from Nepal.</p>
      <h2>Why VerifiAI exists</h2>
      <p>VerifiAI was created for the growing need for trustworthy AI detection and media verification. The goal is practical tools that show whether content is human-made or AI-generated, especially as AI media becomes more common.</p>
      <h2>What it helps with</h2>
      <ul className="list-disc pl-5">
        <li>Detecting AI-generated text, images and other synthetic content</li>
        <li>Checking whether media has been manipulated</li>
        <li>Giving creators, educators, journalists and businesses a quick way to check what they read or share</li>
      </ul>
      <h2>Learn more</h2>
      <p>Read <a className={LINK} href="/blog/what-is-verifiai">What is VerifiAI and why I built it</a> and <a className={LINK} href="/blog/how-to-check-if-text-or-image-is-ai-generated">how to check if text or an image is AI-generated</a>, or see the <a className={LINK} href="/#about">founder&apos;s profile</a>.</p>
    </PageShell>
  );
}
