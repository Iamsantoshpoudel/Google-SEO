import {
  BIO_LONG,
  CONTACT_EMAIL,
  featuredProjects,
  faq,
  posts,
  SITE,
  social,
} from "@/lib/data";

type FeaturedProject = (typeof featuredProjects)[number];

function documentResponse(
  path: string,
  title: string,
  description: string,
  body: string,
  status = 200,
  heading = title,
): Response {
  const frontmatter = [
    "---",
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
    `url: ${new URL(path, SITE).toString()}`,
    "---",
  ].join("\n");

  return new Response(`${frontmatter}\n\n# ${heading}\n\n${body.trim()}\n`, {
    status,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "public, max-age=0, must-revalidate",
      Vary: "Accept",
    },
  });
}

function projectMarkdown(project: FeaturedProject): string {
  const parts = [
    project.description,
    `[Visit ${project.title}](${project.url})`,
  ];

  for (const section of project.sections ?? []) {
    parts.push(`## ${section.heading}`, ...section.paragraphs);
  }

  parts.push(
    "## Highlights",
    ...project.highlights.map((highlight) => `- ${highlight}`),
    `## ${project.slug === "dexbotx" ? "Project capabilities" : "Tech stack and project areas"}`,
    ...project.tech.map((item) => `- ${item}`),
  );

  if (project.faqs?.length) {
    parts.push("## Frequently asked questions");
    for (const faqItem of project.faqs) {
      parts.push(`### ${faqItem.question}`, faqItem.answer);
    }
  }

  return parts.join("\n\n");
}

function postMarkdown(post: (typeof posts)[number]): string {
  const parts = [
    `Published: ${post.date}`,
    `Topics: ${post.topics.join(", ")}`,
    ...post.body,
  ];

  for (const section of post.sections ?? []) {
    parts.push(`## ${section.heading}`, ...section.paragraphs);
  }

  if (post.references?.length) {
    parts.push(
      "## References",
      ...post.references.map((reference) => `- [${reference.label}](${reference.url})`),
    );
  }

  if (post.related?.length) {
    parts.push(
      "## Related",
      ...post.related.map((reference) => `- [${reference.label}](${reference.url})`),
    );
  }

  return parts.join("\n\n");
}

function notFound(path: string): Response {
  return documentResponse(path, "Page not found", "The requested page was not found.", "", 404);
}

export function acceptsMarkdown(accept: string | null): boolean {
  if (!accept) return false;

  const markdownRange = accept
    .split(",")
    .map((range) => range.trim().split(";"))
    .find(([mediaType]) => mediaType.trim().toLowerCase() === "text/markdown");

  if (!markdownRange) return false;

  const qualityParameter = markdownRange
    .slice(1)
    .map((parameter) => parameter.trim())
    .find((parameter) => /^q\s*=/i.test(parameter));

  if (!qualityParameter) return true;

  const quality = Number(qualityParameter.split("=")[1]);
  return Number.isFinite(quality) && quality > 0 && quality <= 1;
}

export function renderMarkdown(path: string): Response | null {
  if (path === "/") {
    const body = [
      BIO_LONG,
      "## Featured projects",
      ...featuredProjects.map(
        (project) => `- [${project.title}](/projects/${project.slug}): ${project.description}`,
      ),
      "## Articles",
      ...posts.map((post) => `- [${post.title}](/blog/${post.slug}) (${post.date})`),
      "## Frequently asked questions",
      ...faq.map((item) => `### ${item.q}\n\n${item.a}`),
      "## Contact and profiles",
      `- Email: [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL})`,
      ...social.map((item) => `- [${item.label}](${item.href})`),
    ].join("\n\n");

    return documentResponse(
      path,
      "Santosh Poudel | Full Stack & AI Developer from Nepal",
      BIO_LONG,
      body,
    );
  }

  if (path === "/me") {
    const body = [
      "Santosh Poudel is a computer engineer, AI developer and web developer from Nepal. He builds websites, web applications and practical software products, with interests in artificial intelligence, digital content authenticity and online community tools.",
      "He founded VerifiAI, a project exploring tools for assessing digital content, and builds DexBotX, a Discord bot for moderation, automation and community updates.",
      "## What I do",
      "- **Web development:** Responsive websites and web applications, from clear page structure to interactive product experiences.",
      "- **AI and content tools:** Practical AI workflows and tools for reviewing digital content with appropriate context and care.",
      "- **Automation:** Software for recurring tasks, including moderation, member onboarding and notifications for online communities.",
      "## Projects",
      ...featuredProjects.map(
        (project) => `- [${project.title}](/projects/${project.slug}): ${project.description}`,
      ),
      "## Background",
      "Santosh completed a diploma in computer engineering and continues to build on that foundation through hands-on projects. He is based in Nepal. This portfolio is built with Next.js, React, TypeScript and Tailwind CSS.",
      "## Find me online",
      ...social.map((item) => `- [${item.label}](${item.href})`),
      `- [Email ${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL})`,
      "## Recent articles",
      ...[...posts]
        .sort((first, second) => second.date.localeCompare(first.date))
        .slice(0, 3)
        .map((post) => `- [${post.title}](/blog/${post.slug}) (${post.date})`),
    ].join("\n\n");

    return documentResponse(
      path,
      "AI Developer and Web Developer in Nepal | Santosh Poudel",
      "Profile, background, projects and articles by Santosh Poudel, a computer engineer, AI developer and web developer from Nepal.",
      body,
      200,
      "Santosh Poudel",
    );
  }

  if (path === "/privacy-policy") {
    const body = [
      "Last updated: November 16, 2026",
      "## About this policy",
      "This policy describes how the Santosh Poudel portfolio at santosh2.com.np handles information when you visit the site. It does not cover third-party websites you choose to visit through external links.",
      "## Information and site statistics",
      "When Firebase is configured, the site runs a basic visitor counter. It attempts to count a visit once per browser per UTC day by saving that date in your browser's local storage. The counter stores aggregate totals by date and country code, plus a timestamp. It does not store a raw IP address or a visitor-specific identifier in its Firestore records. These aggregate totals are readable by the site's visitor dashboard.",
      "To estimate a country code, the browser may request country.is. That service can receive your IP address as part of the request and return a two-letter country code; if the lookup fails, the counter uses XX. The country lookup is not a request for precise location.",
      `The portfolio does not currently use Google Analytics or advertising pixels. It has no account registration or contact form. If you email [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL}), you choose what to include in that message and your email provider handles its delivery.`,
      "## Browser storage",
      "The site uses localStorage for your theme preference, whether the preloader has been shown, and the date used to limit repeat visit counts. sessionStorage keeps blog post slugs read in the current browser session for recommendations; this reading history is not sent to the visitor counter. A service worker caches the offline page and same-site static assets for offline availability.",
      "These features do not use an app-managed tracking cookie. You can clear browser storage or site data in your browser settings; doing so may reset your theme, preloader, reading recommendations, or visit-count marker. The visitor counter currently has no in-page opt-out.",
      "## Service providers and external links",
      "The site uses Vercel for hosting and, when configured, Google Firebase/Cloud Firestore for aggregate visit statistics. The country lookup is provided by country.is. These providers may process technical information such as connection data to operate and secure their services, under their own terms and privacy practices.",
      "- [Vercel Privacy Policy](https://vercel.com/legal/privacy-policy)",
      "- [Firebase Privacy and Security](https://firebase.google.com/support/privacy)",
      "Links to social networks, project sites, and other services are ordinary external links. If you follow one, that service's privacy policy applies to your visit there.",
      "## Retention and privacy requests",
      "Browser storage remains until it expires with the session or you clear it. No automatic deletion period is currently configured for aggregate Firestore statistics; they may remain until manually deleted. Since those statistics do not identify individual visitors, a particular visit cannot be located or removed from the aggregate totals.",
      `For questions about this policy or a privacy request, email [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL}). Hosting and service-provider logs may have separate retention periods governed by those providers.`,
      "## Updates",
      "This policy may be updated when the site's data practices change. The latest revision date is shown at the top of this page.",
    ].join("\n\n");

    return documentResponse(
      path,
      "Privacy Policy | Santosh Poudel",
      "Learn how the Santosh Poudel portfolio uses browser storage, processes aggregate visit statistics, and handles privacy questions.",
      body,
      200,
      "Privacy Policy",
    );
  }

  if (path === "/projects") {
    const body = featuredProjects
      .map((project) => `## [${project.title}](/projects/${project.slug})\n\n${project.description}\n\nAreas: ${project.tech.join(", ")}`)
      .join("\n\n");

    return documentResponse(
      path,
      "AI Projects | Santosh Poudel",
      "Explore Santosh Poudel's featured projects, including VerifiAI and DexBotX, built for AI workflows and web products.",
      body,
      200,
      "Projects",
    );
  }

  if (path.startsWith("/projects/")) {
    const slug = path.slice("/projects/".length);
    if (!slug || slug.includes("/")) return null;
    const project = featuredProjects.find((item) => item.slug === slug);
    if (!project) return notFound(path);

    return documentResponse(
      path,
      `${project.title} | Santosh Poudel`,
      project.description,
      projectMarkdown(project),
      200,
      project.title,
    );
  }

  if (path === "/blog") {
    const body = posts
      .map((post) => `## [${post.title}](/blog/${post.slug})\n\nPublished: ${post.date}\n\n${post.body[0]}`)
      .join("\n\n");

    return documentResponse(
      path,
      "AI, Web Development & VerifiAI Articles | Santosh Poudel",
      "Read articles by Santosh Poudel about artificial intelligence, VerifiAI, blockchain, content authenticity and web development.",
      body,
      200,
      "Blog",
    );
  }

  if (path.startsWith("/blog/")) {
    const slug = path.slice("/blog/".length);
    if (!slug || slug.includes("/")) return null;
    const post = posts.find((item) => item.slug === slug);
    if (!post) return notFound(path);

    return documentResponse(
      path,
      `${post.metaTitle ?? post.title} | Santosh Poudel`,
      post.body[0],
      postMarkdown(post),
      200,
      post.title,
    );
  }

  return null;
}
