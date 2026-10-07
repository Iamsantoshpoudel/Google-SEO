export const SITE = "https://santosh2.com.np";

export const LINKS = {
  portfolio: "https://santoshpoudel06.com.np",
  github: "https://github.com/iamsantoshpoudel",
  facebook: "https://www.facebook.com/sant0shpoudel",
  youtube: "https://www.youtube.com/@dexgamex1",
};

export const nav = [
  { href: "/#about", label: "About" },
  { href: "/verifiai", label: "VerifiAI" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#work", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#find", label: "Connect" },
];

export const gallery = [
  { src: "/img/santosh-poudel.jpg", alt: "Santosh Poudel profile photo", cap: "Santosh Poudel profile photo" },
  { src: "/img/Santosh-poudelai.JPG", alt: "Santosh Poudel another profile image", cap: "Santosh Poudel" },
  { src: "/img/Santoshpoudel.JPG", alt: "Santosh Poudel portrait", cap: "Portrait" },
  { src: "/img/Santosh.JPG", alt: "Santosh Poudel portrait in natural light", cap: "Portrait in natural light" },
  { src: "/img/santoshp.JPG", alt: "Santosh Poudel close-up profile", cap: "Close-up" },
];

export const projects = [
  { n: "Portfolio", title: "Main portfolio", desc: "Case studies, skills and contact details at santoshpoudel06.com.np.", href: LINKS.portfolio },
  { n: "Code", title: "GitHub projects", desc: "Web experiments and open source work under @iamsantoshpoudel.", href: LINKS.github },
  { n: "Video", title: "YouTube channel", desc: "Videos and tutorials on the @dexgamex1 channel.", href: LINKS.youtube },
  { n: "Startup", title: "VerifiAI", desc: "An AI content detector for creators, teachers and businesses." },
];

type BlogSection = { heading: string; paragraphs: string[] };
type BlogReference = { label: string; url: string };
export type BlogPost = {
  date: string;
  label: string;
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  topics: string[];
  body: string[];
  sections?: BlogSection[];
  references?: BlogReference[];
};

export const posts: BlogPost[] = [
  { date: "2026-10-07", label: "7 Oct", slug: "future-of-artificial-intelligence", title: "The future of AI: useful assistants, better tools and new responsibilities", image: "/img/ai-future.svg", imageAlt: "Original illustration of a human working with an artificial intelligence assistant", topics: ["AI", "technology"], body: [
    "Artificial intelligence is moving from a novelty feature into everyday software. My view as a developer is that its most useful future is not about replacing every person, but helping people handle repetitive work, explore ideas and make better-informed decisions.",
  ], sections: [
    { heading: "AI will become part of ordinary workflows", paragraphs: [
      "People will increasingly use AI inside the tools they already rely on: to draft, summarise, search, translate, write code and work with images or audio. The best products will make those capabilities helpful without making the interface harder to understand.",
      "That shift changes what developers build. Instead of adding a chatbot just to say a product uses AI, teams need to identify a real user problem, measure whether the feature helps and keep a usable path for people who prefer not to use it.",
    ] },
    { heading: "Human judgement and trust still matter", paragraphs: [
      "AI systems can produce confident answers that are incomplete or wrong. High-impact decisions need appropriate human review, transparent limitations and ways to correct mistakes. Sensitive information should not be sent to a tool without understanding how it is handled.",
      "For AI-generated media, detection tools should be treated as one signal rather than proof. Source history, context and provenance can help people assess content more responsibly.",
    ] },
    { heading: "The opportunity for developers", paragraphs: [
      "Developers can make AI more useful by building focused features, protecting user data, testing with real tasks and communicating uncertainty honestly. In Nepal and elsewhere, strong fundamentals—accessible websites, reliable software and clear communication—remain valuable alongside new AI capabilities.",
      "The future of AI will be shaped not only by more capable models, but by the choices people make about where to use them and how to keep them accountable.",
    ] },
  ], references: [
    { label: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
    { label: "Stanford Institute for Human-Centered AI: AI Index", url: "https://hai.stanford.edu/ai-index" },
  ] },
  { date: "2026-10-07", label: "7 Oct", slug: "why-work-with-santosh-poudel-web-development", title: "Choosing a web developer: how Santosh Poudel approaches a project", image: "/img/web-development.svg", imageAlt: "Original illustration of a responsive website being designed for desktop and mobile", topics: ["web development", "Nepal", "Santosh Poudel"], body: [
    "There is no honest reason to claim that everyone should choose one particular developer. The right choice depends on the project, communication, evidence of relevant work and whether the proposed solution fits the people who will use it. Here is how I think about building for the web.",
  ], sections: [
    { heading: "Start with the problem, not the effects", paragraphs: [
      "A website should help its audience do something: understand a service, explore a portfolio, read useful information or get in touch. Before choosing animations or colours, clarify the goal, the content and the most important user journeys.",
      "That keeps design decisions grounded. A visual effect is worthwhile when it supports understanding and remains comfortable to use—not simply because it looks impressive in a demo.",
    ] },
    { heading: "Build for speed, accessibility and mobile", paragraphs: [
      "A professional site needs to work on small screens, load efficiently and remain usable with a keyboard and assistive technology. Semantic HTML, thoughtful image sizes, readable contrast and clear navigation are part of the product, not finishing touches.",
      "For this portfolio, I use Next.js, React, TypeScript and Tailwind CSS. The code and live pages provide concrete examples of my approach; project requirements may call for a different stack.",
    ] },
    { heading: "Look for evidence and a good working fit", paragraphs: [
      "When evaluating any developer, review relevant live work, ask how the project will be maintained, agree on scope and milestones, and make sure ownership and ongoing costs are clear. A good working relationship includes honest communication about trade-offs and limits.",
      "My portfolio and public GitHub are the best places to review my work. If the style and technical approach fit your project, use the contact or social links on this site to start a conversation.",
    ] },
  ], references: [
    { label: "W3C Web Content Accessibility Guidelines (WCAG) 2.2", url: "https://www.w3.org/TR/WCAG22/" },
    { label: "web.dev: Web Vitals", url: "https://web.dev/articles/vitals" },
  ] },
  { date: "2026-10-07", label: "7 Oct", slug: "future-of-blockchain-beyond-cryptocurrency", title: "The future of blockchain: practical uses beyond cryptocurrency", image: "/img/blockchain-future.svg", imageAlt: "Original illustration of connected blocks in a distributed ledger", topics: ["blockchain", "technology"], body: [
    "Blockchain is often discussed through cryptocurrency prices, but the underlying idea is a shared ledger that multiple participants can verify. Its future depends on whether that shared record solves a real coordination problem better than a conventional database.",
  ], sections: [
    { heading: "Where a shared ledger may help", paragraphs: [
      "A blockchain can be useful when independent organisations need to agree on the order or integrity of records and do not want one participant to control the only copy. Potential applications include tracking assets across organisations, coordinating digital credentials and recording selected supply-chain events.",
      "These examples are not automatic wins. A conventional database is usually simpler when one trusted organisation can manage the records. The system also needs a credible way to connect real-world events to its digital entries.",
    ] },
    { heading: "The hard problems are still important", paragraphs: [
      "Public blockchains vary in throughput, fees, governance and energy use. Privacy is another concern: data written to a widely replicated ledger may be difficult or impossible to remove. Teams need to decide what belongs on-chain and what should remain private or off-chain.",
      "Users also need safe recovery, understandable interfaces and clear accountability when something goes wrong. A technically immutable record does not guarantee that the original information was true.",
    ] },
    { heading: "A practical way to evaluate the technology", paragraphs: [
      "Start by mapping who needs to write, read and verify records. Compare a shared ledger with a normal database, define privacy and recovery requirements, and test the system with a small real workflow before making broad claims.",
      "The most useful future for blockchain may be selective: apply it where shared verification creates measurable value, and use simpler tools everywhere else.",
    ] },
  ], references: [
    { label: "NIST Interagency Report 8202: Blockchain Technology Overview", url: "https://csrc.nist.gov/pubs/ir/8202/final" },
  ] },
  { date: "2026-10-07", label: "7 Oct", slug: "ai-blockchain-and-digital-content-provenance", title: "AI, blockchain and content provenance: what can actually be verified?", image: "/img/content-provenance.svg", imageAlt: "Original illustration showing a media file with a verifiable provenance trail", topics: ["AI", "blockchain", "VerifiAI"], body: [
    "As AI-generated images and text become easier to make, people need better ways to understand where digital content came from. AI detection and blockchain are often proposed as solutions, but neither one alone proves who created a file or whether its claims are true.",
  ], sections: [
    { heading: "Detection is not the same as provenance", paragraphs: [
      "An AI detector estimates whether content resembles examples produced by a model. Results can be uncertain and may change as tools and editing methods evolve. A detector cannot reliably reconstruct the full history of a file from appearance alone.",
      "Provenance records information about origin and edits. Cryptographic signatures can help show that recorded information has not changed since it was signed, but they still depend on trustworthy signing keys and accurate claims at the point of capture.",
    ] },
    { heading: "Where a blockchain might fit", paragraphs: [
      "A distributed ledger could timestamp or anchor a content record when several parties need to verify a shared history. It does not need to store the full image or video, and putting personal or sensitive data directly on a public chain can create serious privacy and deletion problems.",
      "Standards such as C2PA describe ways to attach signed provenance information to media. These credentials can be useful evidence when present, but missing credentials do not prove that content is fake, and credentials do not certify that the content itself is truthful.",
    ] },
    { heading: "Use multiple signals", paragraphs: [
      "For a careful assessment, check the original publisher, look for a verifiable content history, compare independent reporting and treat automated detection as one limited signal. Keep uncertainty visible rather than turning a score into a verdict.",
      "This is the problem space behind my work on VerifiAI: making content checks easier to use while being clear about what a tool can—and cannot—establish.",
    ] },
  ], references: [
    { label: "C2PA: Content Provenance and Authenticity Specifications", url: "https://c2pa.org/specifications/" },
    { label: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
  ] },
  { date: "2026-10-07", label: "7 Oct", slug: "who-is-santosh-poudel", title: "Who is Santosh Poudel? Developer and VerifiAI founder from Nepal", image: "/img/santosh-poudel-developer.JPG", imageAlt: "Santosh Poudel, developer from Nepal", topics: ["Santosh Poudel", "Nepal", "VerifiAI"], body: [
    "Santosh Poudel is a computer engineer and web developer from Nepal. He is also the founder of VerifiAI, a project focused on helping people assess AI-generated and manipulated content.",
    "His work brings together website development and practical AI tools. He builds digital experiences and explores ways to make online information easier to evaluate for creators, educators, journalists and businesses.",
    "Poudel shares his work through his portfolio, GitHub and YouTube. Those first-party profiles are the best places to explore his projects and follow what he publishes.",
    "This website is his personal portfolio and blog. It covers his work, VerifiAI, web development and ideas about checking digital content."] },
  { date: "2026-10-06", label: "6 Oct", slug: "what-does-santosh-poudel-do", title: "What does Santosh Poudel do? Web development and AI tools", image: "/img/Santosh-poudelai.JPG", imageAlt: "Portrait of Santosh Poudel", topics: ["Santosh Poudel", "web development", "AI", "Nepal"], body: [
    "Santosh Poudel works on web development and AI-related products. He is a developer from Nepal with a diploma in computer engineering and the founder of VerifiAI.",
    "His web work includes building websites and digital projects. His AI work centres on content authenticity: VerifiAI is being developed to help people check AI-generated text, images and other synthetic media.",
    "AI detection is not a perfect verdict. Poudel’s articles encourage readers to consider a detector’s result alongside the source, context and other evidence rather than treating a score as proof.",
    "Explore the Projects section for links to his portfolio, GitHub and YouTube, or read more about VerifiAI and how content checks can be used thoughtfully."] },
  { date: "2026-10-05", label: "5 Oct", slug: "santosh-poudel-and-verifiai", title: "Santosh Poudel and VerifiAI: building tools for content authenticity", image: "/img/Santoshpoudel.JPG", imageAlt: "Santosh Poudel portrait", topics: ["Santosh Poudel", "VerifiAI", "AI"], body: [
    "VerifiAI is a project founded by Santosh Poudel to help people examine whether digital content may have been generated by AI or manipulated.",
    "The need is growing as synthetic text and images become easier to create. Readers, teachers, creators and organisations need practical ways to ask questions about what they see online.",
    "A detector can provide a useful signal, but it cannot establish authorship with certainty on its own. Checking the original source and considering context are important parts of responsible verification.",
    "Poudel writes about these questions on this site and continues to develop VerifiAI. Read the dedicated VerifiAI page for an overview of the project."] },
  { date: "2026-10-04", label: "4 Oct", slug: "web-development-work-of-santosh-poudel", title: "Web development by Santosh Poudel: projects and priorities", image: "/img/Santosh.JPG", imageAlt: "Santosh Poudel in a portrait photo", topics: ["Santosh Poudel", "web development", "Nepal"], body: [
    "Santosh Poudel is a web developer from Nepal whose work includes personal websites and digital products. His background in computer engineering informs his interest in building useful technology.",
    "A good website should make its purpose clear, work across screen sizes and help visitors find what they need. Performance, readable content and accessibility matter alongside visual design.",
    "Poudel’s portfolio and GitHub provide first-hand information about his projects. This site brings together selected work, writing and updates about VerifiAI.",
    "For more about his AI-related work, see the articles on VerifiAI and responsible ways to check AI-generated content."] },
  { date: "2026-10-01", label: "1 Oct", slug: "what-is-verifiai", title: "What is VerifiAI and why I built it", image: "/img/santosh-poudel.jpg", imageAlt: "Santosh Poudel profile photo", topics: ["VerifiAI", "AI"], body: [
    "VerifiAI is a platform that helps people identify AI-generated content, detect manipulated media and verify digital trust.",
    "I built it for creators, educators, journalists and businesses who need a quick way to check what they are reading or sharing."] },
  { date: "2026-09-29", label: "29 Sep", slug: "how-to-check-if-text-or-image-is-ai-generated", title: "How to check if text or an image is AI-generated", image: "/img/santoshp.JPG", imageAlt: "Santosh Poudel close-up portrait", topics: ["AI", "VerifiAI"], body: [
    "Look at the source first, then run the content through a detector. Treat the result as a signal and not as proof.",
    "For images, also check for odd details such as warped hands, unreadable text and inconsistent lighting."] },
  { date: "2026-09-27", label: "27 Sep", slug: "web-design-tips-for-beginners-in-nepal", title: "Web design tips for beginners in Nepal", image: "/img/santosh-poudel-close-up.png", imageAlt: "Portrait photo from Santosh Poudel's gallery", topics: ["web development", "Nepal"], body: [
    "Start with semantic HTML, make every page mobile friendly and compress your images. A fast, clear site beats a flashy slow one.",
    "Then add small touches such as hover effects and scroll animations that help people understand the page."] },
  { date: "2026-09-18", label: "18 Sep", slug: "why-ai-content-detection-matters", title: "Why AI content detection matters", image: "/img/Santosh-poudelai.JPG", imageAlt: "Santosh Poudel portrait", topics: ["AI", "VerifiAI"], body: [
    "AI can write essays and make photos in seconds. Readers, teachers and editors need ways to check what they are looking at.",
    "Detection tools give a signal, not a verdict, so combine them with human judgement."] },
  { date: "2026-09-10", label: "10 Sep", slug: "starting-with-a-computer-engineering-diploma", title: "Starting with a computer engineering diploma", image: "/img/Santosh.JPG", imageAlt: "Santosh Poudel portrait photo", topics: ["computer engineering", "Nepal", "web development"], body: [
    "A diploma in computer engineering in Nepal mixes theory with hands-on labs covering programming, electronics, networks and databases.",
    "The best learning came from building small projects alongside classes."] },
];

export const social = [
  { label: "Portfolio", href: LINKS.portfolio },
  { label: "GitHub", href: LINKS.github },
  { label: "Facebook", href: LINKS.facebook },
  { label: "YouTube", href: LINKS.youtube },
];

export const faq = [
  { q: "Who is Santosh Poudel?", a: "Santosh Poudel is an AI developer from Nepal and the founder of VerifiAI, a platform that helps individuals and organizations identify AI-generated content, detect manipulated media and verify digital trust." },
  { q: "What does Santosh Poudel work on?", a: "His work includes AI content detection, image verification, developer tools and digital platforms that make online content safer and easier to understand for creators, educators, journalists and businesses." },
];

export const jsonLd = [
  { "@context": "https://schema.org", "@graph": [
    { "@type": "WebSite", "@id": `${SITE}/#site`, url: `${SITE}/`, name: "Santosh Poudel", inLanguage: "en" },
    { "@type": "Person", "@id": `${SITE}/#person`, name: "Santosh Poudel", url: `${SITE}/`, image: `${SITE}/img/santosh-poudel.jpg`,
      alternateName: ["santoshpoudel", "sant0shpoudel"], jobTitle: "AI Developer and Founder of VerifiAI",
      worksFor: { "@type": "Organization", name: "VerifiAI" },
      description: "Santosh Poudel is an AI developer from Nepal and the founder of VerifiAI.",
      nationality: { "@type": "Country", name: "Nepal" },
      address: { "@type": "PostalAddress", addressCountry: "NP" },
      knowsAbout: ["Web development", "Artificial intelligence", "Computer engineering", "JavaScript"],
      sameAs: [SITE, ...Object.values(LINKS)] },
  ] },
];

// Shared class strings
export const S = "mx-auto max-w-[1400px] border-t border-line px-[clamp(18px,4vw,48px)] py-[clamp(80px,14vh,170px)]";
export const LAB = "mb-7 flex items-center gap-3.5 font-semibold text-hot before:h-[1.5px] before:w-[46px] before:bg-hot before:content-['']";
export const BIG = "font-display text-[clamp(1.7rem,4.6vw,4rem)] font-extrabold leading-[1.12] tracking-[-.025em]";

export const PAGE = "mx-auto max-w-[900px] px-[clamp(18px,4vw,48px)] pb-24 pt-32";
export const LINK = "text-hot underline underline-offset-4";
