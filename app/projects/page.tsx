import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { featuredProjects, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects | Santosh Poudel",
  description: "Explore Santosh Poudel's featured projects, including VerifiAI and DexBotX, built for AI workflows and web products.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: `${SITE}/projects`,
    title: "Projects | Santosh Poudel",
    description: "Featured projects from Santosh Poudel, including AI tools, developer experiments, and a Discord automation product.",
    images: [{ url: "/img/santosh-poudel-web-developer-nepal.jpg", alt: "Santosh Poudel, AI developer and full stack developer from Nepal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Santosh Poudel",
    description: "Featured portfolio projects from Santosh Poudel, AI developer from Nepal.",
    images: ["/img/santosh-poudel-web-developer-nepal.jpg"],
  },
};

export default function ProjectsPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured projects by Santosh Poudel",
    itemListElement: featuredProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        description: project.description,
        url: `${SITE}/projects/${project.slug}`,
        image: `${SITE}${project.image}`,
      },
    })),
  };

  return (
    <PageShell title="Projects" crumbs={[{ name: "Projects", path: "/projects" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <p className="max-w-[60ch] text-mute">
        These are the projects I am actively building or documenting as part of my work in AI tools, automation, and practical web products.
      </p>
      <div className="grid gap-6">
        {featuredProjects.map((project) => (
          <article key={project.slug} className="rounded-2xl border border-line bg-white/2 p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-hot">{project.kicker}</span>
              <Link href={`/projects/${project.slug}`} className="text-hot underline underline-offset-4">View project</Link>
            </div>
            <h2 className="mb-3 text-[clamp(1.8rem,3vw,2.6rem)] leading-tight">{project.title}</h2>
            <p className="max-w-[60ch] text-mute">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li key={tech} className="rounded-full border border-line px-2.5 py-1 text-[0.75rem] text-mute">{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
