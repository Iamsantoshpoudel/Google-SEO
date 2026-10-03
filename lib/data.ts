export const SITE = "https://santosh2.com.np";

export const LINKS = {
  portfolio: "https://santoshpoudel06.com.np",
  github: "https://github.com/iamsantoshpoudel",
  facebook: "https://www.facebook.com/sant0shpoudel",
  youtube: "https://www.youtube.com/@dexgamex1",
};

export const nav = [
  { href: "/#about", label: "About" },
  { href: "/#verifiai", label: "VerifiAI" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#work", label: "Projects" },
  { href: "/#blog", label: "Blog" },
  { href: "/#find", label: "Connect" },
];

export const gallery = [
  { src: "/img/santosh-poudel.jpg", alt: "Santosh Poudel profile photo", cap: "Santosh Poudel profile photo" },
  { src: "/img/Santosh-poudelai.JPG", alt: "Santosh Poudel another profile image", cap: "Santosh Poudel" },
  { src: "/img/Santoshpoudel.jpg", alt: "Santosh Poudel portrait", cap: "Portrait" },
  { src: "/img/Santosh.JPG", alt: "Santosh Poudel portrait in natural light", cap: "Portrait in natural light" },
  { src: "/img/santoshp.JPG", alt: "Santosh Poudel close-up profile", cap: "Close-up" },
];

export const projects = [
  { n: "Portfolio", title: "Main portfolio", desc: "Case studies, skills and contact details at santoshpoudel06.com.np.", href: LINKS.portfolio },
  { n: "Code", title: "GitHub projects", desc: "Web experiments and open source work under @iamsantoshpoudel.", href: LINKS.github },
  { n: "Video", title: "YouTube channel", desc: "Videos and tutorials on the @dexgamex1 channel.", href: LINKS.youtube },
  { n: "Startup", title: "VerifiAI", desc: "An AI content detector for creators, teachers and businesses." },
];

export const posts = [
  { date: "2026-10-01", label: "1 Oct", title: "What is VerifiAI and why I built it", body: [
    "VerifiAI is a platform that helps people identify AI-generated content, detect manipulated media and verify digital trust.",
    "I built it for creators, educators, journalists and businesses who need a quick way to check what they are reading or sharing."] },
  { date: "2026-09-29", label: "29 Sep", title: "How to check if text or an image is AI-generated", body: [
    "Look at the source first, then run the content through a detector. Treat the result as a signal and not as proof.",
    "For images, also check for odd details such as warped hands, unreadable text and inconsistent lighting."] },
  { date: "2026-09-27", label: "27 Sep", title: "Web design tips for beginners in Nepal", body: [
    "Start with semantic HTML, make every page mobile friendly and compress your images. A fast, clear site beats a flashy slow one.",
    "Then add small touches such as hover effects and scroll animations that help people understand the page."] },
  { date: "2026-09-18", label: "18 Sep", title: "Why AI content detection matters", body: [
    "AI can write essays and make photos in seconds. Readers, teachers and editors need ways to check what they are looking at.",
    "Detection tools give a signal, not a verdict, so combine them with human judgement."] },
  { date: "2026-09-10", label: "10 Sep", title: "Starting with a computer engineering diploma", body: [
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
  { "@context": "https://schema.org", "@type": "ProfilePage", "@id": `${SITE}/#profile`, url: `${SITE}/`,
    name: "Santosh Poudel", dateModified: new Date().toISOString().slice(0, 10),
    mainEntity: { "@id": `${SITE}/#person` } },
  { "@context": "https://schema.org", "@graph": [
    { "@type": "WebSite", "@id": `${SITE}/#site`, url: `${SITE}/`, name: "Santosh Poudel", inLanguage: "en" },
    { "@type": "Person", "@id": `${SITE}/#person`, name: "Santosh Poudel", url: `${SITE}/`, image: `${SITE}/img/santosh-poudel.jpg`,
      alternateName: ["santoshpoudel", "sant0shpoudel"], jobTitle: "AI Developer and Founder of VerifiAI",
      worksFor: { "@type": "Organization", name: "VerifiAI" },
      description: "Santosh Poudel is an AI developer from Nepal and the founder of VerifiAI.",
      nationality: "Nepali", address: { "@type": "PostalAddress", addressCountry: "NP" },
      alumniOf: "Diploma in Computer Engineering",
      knowsAbout: ["Web development", "Artificial intelligence", "Computer engineering", "JavaScript"],
      sameAs: Object.values(LINKS) },
  ] },
  { "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
];

// Shared class strings
export const S = "mx-auto max-w-[1400px] border-t border-line px-[clamp(18px,4vw,48px)] py-[clamp(80px,14vh,170px)]";
export const LAB = "mb-7 flex items-center gap-3.5 font-semibold text-hot before:h-[1.5px] before:w-[46px] before:bg-hot before:content-['']";
export const BIG = "font-display text-[clamp(1.7rem,4.6vw,4rem)] font-extrabold leading-[1.12] tracking-[-.025em]";
