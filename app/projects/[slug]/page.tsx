import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { featuredProjects, SITE, verifiaiOrganizationLd } from "@/lib/data";
import { fitMetaDescription, serializeJsonLd } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => featuredProjects.map((project) => ({ slug: project.slug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);
  if (!project) return {};
  const title = `${project.title} | Santosh Poudel`;
  const description = fitMetaDescription(project.description);

  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "website",
      siteName: "Santosh Poudel",
      locale: "en_US",
      title,
      description,
      url: `${SITE}/projects/${project.slug}`,
      images: [{ url: `/projects/${project.slug}/opengraph-image`, width: 1200, height: 630, alt: project.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: `/projects/${project.slug}/opengraph-image`, alt: project.alt }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);

  if (!project) notFound();

  const projectLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${SITE}/#project-${project.slug}`,
    name: project.title,
    description: project.description,
    applicationCategory: project.slug === "verifai" ? "UtilitiesApplication" : "DeveloperApplication",
    operatingSystem: "Web",
    url: project.url,
    mainEntityOfPage: `${SITE}/projects/${project.slug}`,
    image: `${SITE}${project.image}`,
    author: { "@id": `${SITE}/#person` },
    creator: { "@id": `${SITE}/#person` },
    keywords: project.tech,
    featureList: project.highlights,
  };
  const projectFaqLd = project.faqs && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: project.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <PageShell title={project.title} crumbs={[{ name: "Projects", path: "/projects" }, { name: project.title, path: `/projects/${project.slug}` }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd([projectLd, ...(project.slug === "verifai" ? [verifiaiOrganizationLd] : []), ...(projectFaqLd ? [projectFaqLd] : [])]) }} />
      <p className="max-w-[65ch] text-mute">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-hot px-5 py-2.5 font-semibold text-white no-underline">Visit project</Link>
        <Link href="/projects" className="inline-block rounded-full border border-line px-5 py-2.5 font-semibold text-ink no-underline">Back to projects</Link>
      </div>
      <div className="relative mt-8 aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-white/2">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 768px) 100vw, 896px"
          priority
          fetchPriority="high"
          className="object-contain p-3"
        />
      </div>
      {project.slug === "dexbotx" && <h2>Santosh&apos;s DexBotX Discord bot</h2>}
      <section>
        <h2>About the project</h2>
        {project.sections?.map((section) => (
          <div key={section.heading}>
            <h3 className="mt-5 text-[1.15rem] leading-tight text-ink">{section.heading}</h3>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-2 max-w-[70ch]">{paragraph}</p>
            ))}
          </div>
        ))}
      </section>
      <section>
        <h2>Highlights</h2>
        <ul className="list-disc pl-5">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>{project.slug === "dexbotx" ? "Project capabilities" : "Tech stack and project areas"}</h2>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <li key={item} className="rounded-full border border-line px-2.5 py-1 text-[0.75rem] text-mute">{item}</li>
          ))}
        </ul>
      </section>
      {project.slug === "verifai" && (
        <p className="text-mute">
          Read <Link href="/blog/what-is-verifiai" className="text-hot underline underline-offset-4">why I built VerifiAI</Link> and <Link href="/blog/ai-blockchain-and-digital-content-provenance" className="text-hot underline underline-offset-4">how provenance relates to AI content</Link>.
        </p>
      )}
      {project.faqs && (
        <section>
          <h2>Frequently asked questions</h2>
          <div className="grid gap-5">
            {project.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg text-ink">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </PageShell>
  );
}
