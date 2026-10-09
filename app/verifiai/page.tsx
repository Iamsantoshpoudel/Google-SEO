import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { LINK, LINKS, SITE } from "@/lib/data";

const title = "VerifiAI: Why Santosh Poudel Built an AI Content Detector";
const description = "Santosh Poudel explains why he started VerifiAI and links to the separate product site for current project information.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/verifiai" },
  openGraph: {
    type: "article",
    url: `${SITE}/verifiai`,
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

export default function VerifiAI() {
  const pageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE}/verifiai`,
    about: { "@id": `${SITE}/#person` },
    isPartOf: { "@id": `${SITE}/#site` },
  };

  return (
    <PageShell title="Why I built VerifiAI" crumbs={[{ name: "VerifiAI", path: "/verifiai" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <p>I started working on VerifiAI because I wanted to explore how software can help people examine digital content as synthetic media becomes easier to create. Content checks can offer clues, but they cannot by themselves prove who made something or whether it is true.</p>
      <p>My aim is to build with that uncertainty in mind: make the project useful while being clear that automated results need context and human judgement. This page is the founder story, not the product documentation.</p>
      <p>For information about the separate product, visit <a className={LINK} href={LINKS.verifiai} target="_blank" rel="me noopener noreferrer">VerifiAI</a>.</p>
    </PageShell>
  );
}
