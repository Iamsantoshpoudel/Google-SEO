import type { Metadata } from "next";
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

  return (
    <PageShell title={project.title} crumbs={[{ name: "Projects", path: "/projects" }, { name: project.title, path: `/projects/${project.slug}` }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(project.slug === "verifai" ? [projectLd, verifiaiOrganizationLd] : projectLd) }} />
      <p className="max-w-[65ch] text-mute">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-hot px-5 py-2.5 font-semibold text-white no-underline">Visit project</Link>
        <Link href="/projects" className="inline-block rounded-full border border-line px-5 py-2.5 font-semibold text-ink no-underline">Back to projects</Link>
      </div>
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
        <h2>Tech stack</h2>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <li key={item} className="rounded-full border border-line px-2.5 py-1 text-[0.75rem] text-mute">{item}</li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
