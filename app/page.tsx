import type { Metadata } from "next";
import Hero from "@/components/Hero";
import BigText from "@/components/BigText";
import Gallery from "@/components/Gallery";
import ProjectRow from "@/components/ProjectRow";
import Reveal from "@/components/Reveal";
import Scramble from "@/components/Scramble";
import { BIG, LAB, SITE, S, faq, posts, projects, social } from "@/lib/data";

export const metadata: Metadata = {
  title: "Santosh Poudel | AI Developer and Web Developer in Nepal",
  description: "Official website of Santosh Poudel, a Nepal-based AI developer, web developer and computer engineer. Explore his work, VerifiAI, projects and articles.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE,
    title: "Santosh Poudel | AI Developer and Web Developer in Nepal",
    description: "Official website of Santosh Poudel, a Nepal-based AI developer, web developer and computer engineer. Explore his work, VerifiAI, projects and articles.",
    images: [{ url: "/img/santosh-poudel.jpg", alt: "Santosh Poudel, AI and web developer from Nepal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santosh Poudel | AI Developer and Web Developer in Nepal",
    description: "Explore Santosh Poudel's work in web development, AI and VerifiAI.",
    images: ["/img/santosh-poudel.jpg"],
  },
};

export default function Home() {
  const marquee = [...social, ...social];
  const profileLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE}/#profile`,
    url: `${SITE}/`,
    name: "Santosh Poudel",
    mainEntity: { "@id": `${SITE}/#person` },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <main id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([profileLd, faqLd]) }} />
      <Hero />

      <section id="about" className={S}>
        <Scramble as="div" className={LAB}>About</Scramble>
        <BigText text="Santosh Poudel is an AI developer and web developer from Nepal with a diploma in computer engineering. He builds websites and AI content tools, and he is the founder of VerifiAI." />
        <Reveal as="div" className="mt-[60px] grid grid-cols-1 gap-[clamp(24px,5vw,80px)] md:grid-cols-2">
          {faq.map((f) => (
            <div key={f.q} className="rv-c">
              <h3 className="mb-3.5 text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.05]">{f.q}</h3>
              <p className="text-mute">{f.a}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <Reveal id="verifiai" className={S}>
        <Scramble as="div" className={LAB}>Santosh Poudel and VerifiAI</Scramble>
        <p className={`${BIG} max-w-[26ch]`}>Making it easier to tell human work from AI-made content.</p>
        <div className="mt-[34px] max-w-[62ch] text-mute [&>p+p]:mt-3.5">
          <p className="rv-c">Santosh Poudel works at the meeting point of technology, content authenticity and user safety. Through VerifiAI he builds tools that help people detect AI-generated text, images and other synthetic content.</p>
          <p className="rv-c">VerifiAI was created for the growing need for trustworthy AI detection and media verification. The goal is practical tools that show whether content is human-made or AI-generated, especially as AI media becomes more common.</p>
        </div>
      </Reveal>

      <Reveal id="gallery" className={S}>
        <Scramble as="div" className={LAB}>Gallery</Scramble>
        <Gallery />
      </Reveal>

      <Reveal id="work" className={S}>
        <Scramble as="div" className={LAB}>Projects</Scramble>
        {projects.map((p) => <ProjectRow key={p.title} {...p} />)}
      </Reveal>

      <Reveal id="blog" className={S}>
        <Scramble as="div" className={LAB}>Blog</Scramble>
        {posts.map((p) => (
          <details key={p.slug} className="group rv-c relative block border-b border-line py-[30px]">
            <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-5 after:justify-self-end after:text-[1.8rem] after:transition-transform after:content-['+'] group-open:after:rotate-45 group-open:after:text-hot max-md:after:col-start-2 max-md:after:row-span-2 max-md:after:row-start-1 md:grid-cols-[90px_1fr_40px] [&::-webkit-details-marker]:hidden">
              <time className="col-start-1 text-mute md:col-auto" dateTime={p.date}>{p.label}</time>
              <h3 className="col-start-1 text-[clamp(1.5rem,3.4vw,2.8rem)] md:col-auto">{p.title}</h3>
            </summary>
            <div className="mt-[18px] max-w-[60ch] text-mute md:ml-[110px] [&>p+p]:mt-2.5">
              {p.body.map((t, i) => <p key={i}>{t}</p>)}
              <a href={`/blog/${p.slug}`} className="mt-4 inline-block text-hot underline underline-offset-4">Read the full article</a>
            </div>
          </details>
        ))}
      </Reveal>

      <Reveal id="find" className={`${S} pb-[60px]!`}>
        <Scramble as="div" className={LAB}>Find Santosh Poudel online</Scramble>
      </Reveal>
      <div className="mq overflow-hidden whitespace-nowrap border-y border-line py-[22px]" aria-label="Social profiles">
        <div className="mq-track">
          {marquee.map((s, i) => (
            <a key={i} className="mq-link" href={s.href} target="_blank" rel="me noopener">{s.label}</a>
          ))}
        </div>
      </div>
    </main>
  );
}
