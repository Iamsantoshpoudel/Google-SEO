export const SITE = "https://santosh2.com.np";
export const SEO_CONTENT_LAST_MODIFIED = "2026-11-19";
export const PRIVACY_POLICY_LAST_MODIFIED = {
  date: "2026-11-16",
  label: "November 16, 2026",
} as const;
// TODO: move this contact address to the santosh2.com.np domain when one is available.
export const CONTACT_EMAIL = "hi@santoshpoudel06.com.np";
export const BIO_SHORT = "Santosh Poudel (Santosh) is a Nepal-based full-stack web and AI developer building SaaS products, web applications, Discord bots, and AI tools while learning blockchain development.";
export const BIO_LONG = "Santosh Poudel (Santosh) is a full-stack web developer and AI developer from Nepal. He builds SaaS products and web applications, and creates Discord bots such as DexBotX, a self-managing moderation bot. He founded VerifiAI, an AI content-detection project, and is learning Ethereum, Sui, and Solana. He shares his work on GitHub, YouTube, and other public social profiles.";

export const LINKS = {
  verifiai: "https://santoshpoudel06.com.np",
  dexbotx: "https://dexbotx.vercel.app",
  github: "https://github.com/santoshpoudelx",
  facebook: "https://www.facebook.com/santoshpoudelx",
  youtube: "https://www.youtube.com/@dexgamex1",
  brave: "https://santoshpoudel.brave",
};

export const nav = [
  { href: "/me", label: "Me" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export const gallery = [
  { src: "/img/santosh-poudel-portrait.jpg", alt: "Portrait of Santosh Poudel, computer engineer from Nepal", cap: "Portrait" },
  { src: "/img/santosh-poudel-natural-light.jpg", alt: "Santosh Poudel photographed in natural light", cap: "Natural light" },
  { src: "/img/santosh-poudel-web-developer-nepal.jpg", alt: "Close-up portrait of web developer Santosh Poudel", cap: "Close-up" },
];

export const profileGallery = [
  ...gallery,
  { src: "/img/santosh-poudel-developer.jpg", alt: "Santosh Poudel in a computer engineering college uniform", cap: "Engineering student" },
  { src: "/img/santosh-poudel-ai-developer-verifiai-founder.jpg", alt: "Santosh Poudel outdoors, AI developer and VerifiAI founder", cap: "VerifiAI founder" },
  { src: "/img/santosh-poudel-close-up.png", alt: "Stylized digital illustration of Santosh Poudel", cap: "Illustrated portrait" },
  { src: "/img/santosh-poudel-og.jpg", alt: "Santosh Poudel, full-stack and AI developer from Nepal", cap: "Open Graph image" },
];

export const projects = [
  { n: "01", title: "VerifiAI", desc: "AI content verification tooling and research for spotting synthetic media and assessing source context.", href: "/projects/verifai" },
  { n: "02", title: "DexBotX Discord Bot", desc: "A modular Discord automation bot with moderation, auto-role, AI chat, and social notifications.", href: "/projects/dexbotx" },
  { n: "03", title: "GitHub projects", desc: "Open-source experiments and code samples built with Next.js, TypeScript, and AI-focused tooling.", href: LINKS.github },
];

export const featuredProjects = [
  {
    slug: "verifai",
    modified: SEO_CONTENT_LAST_MODIFIED,
    title: "VerifiAI",
    kicker: "AI detection and trust tooling",
    description: "VerifiAI explores how people can assess AI-generated content more responsibly by combining source review, provenance context, and careful product design.",
    url: LINKS.verifiai,
    image: "/img/santosh-poudel-ai-developer-verifiai-founder.jpg",
    alt: "Santosh Poudel, founder of VerifiAI, in a portrait for the project",
    tech: ["Next.js", "AI workflows", "Content verification", "Web tooling"],
    highlights: [
      "Practical AI content review workflow",
      "Focus on transparency and limitations",
      "Built for creators, educators, and teams evaluating digital trust",
    ],
    faqs: [
      {
        question: "What is VerifiAI?",
        answer: "VerifiAI is a project founded by Santosh Poudel that explores assessing AI-generated and manipulated digital content using source review and provenance context.",
      },
      {
        question: "Can a VerifiAI result prove who created content?",
        answer: "No. AI detection can be uncertain, and a detector result is one signal rather than conclusive proof of authorship, authenticity, or truth.",
      },
      {
        question: "Does this page explain VerifiAI's detection implementation?",
        answer: "No. This portfolio page does not document the detector's model, training data, thresholds, or evaluation results, so those details are not inferred here.",
      },
    ],
    sections: [
      {
        heading: "Review content with context",
        paragraphs: [
          "VerifiAI explores ways to assess AI-generated and manipulated digital content using source review and provenance context. The project is designed around the idea that a detector result is one signal to consider, not a substitute for checking where content came from.",
          "A missing provenance record does not prove that content is false or AI-generated. Platform uploads can remove metadata, and many creators do not attach credentials.",
        ],
      },
      {
        heading: "Be clear about what detection can establish",
        paragraphs: [
          "AI detection can be uncertain. A tool's result should not be treated as conclusive proof of authorship, authenticity, or truth. Source context and other available evidence matter when evaluating digital content.",
          "VerifiAI is an ongoing project founded by Santosh Poudel. Its project page documents the goals and limitations, while the separate product site describes the current product.",
        ],
      },
    ],
  },
  {
    slug: "dexbotx",
    modified: SEO_CONTENT_LAST_MODIFIED,
    title: "DexBotX Discord Bot",
    kicker: "Discord automation and moderation",
    description: "DexBotX is a Discord bot project that brings moderation, welcome flows, role automation, AI chat, and social notifications together with an admin dashboard for managing server tools.",
    url: LINKS.dexbotx,
    image: "/img/dexbotx-discord-automation.png",
    alt: "Screenshot of the DexBotX Discord dashboard showing server controls and welcome-message setup",
    tech: ["Discord bot", "Automation", "Moderation", "Web dashboard"],
    highlights: [
      "Anti-spam and role automation",
      "YouTube and Kick notifications",
      "AI chat and admin web dashboard",
    ],
    faqs: [
      {
        question: "What is DexBotX?",
        answer: "DexBotX is a Discord bot project for self-managing moderation, welcome flows, role automation, AI chat, creator notifications, and server administration.",
      },
      {
        question: "Does DexBotX replace server administrators?",
        answer: "No. DexBotX automates recurring tasks, while community rules and important moderation decisions remain with the people responsible for the server.",
      },
      {
        question: "What programming stack does DexBotX use?",
        answer: "The public project details in this portfolio do not list DexBotX's programming languages or framework, so no specific stack is claimed here.",
      },
    ],
    sections: [
      {
        heading: "One bot for everyday server operations",
        paragraphs: [
          "DexBotX brings common community tasks into one Discord bot: moderation tools for keeping conversations manageable, welcome flows for new members, and role automation for routine server setup. The goal is to reduce repetitive admin work while keeping the main community experience inside Discord.",
          "Its feature set also includes AI chat and notifications for YouTube and Kick activity, so server owners can combine community interaction with updates about creators their members follow.",
        ],
      },
      {
        heading: "A dashboard for configuration",
        paragraphs: [
          "The web dashboard provides an administrative surface for managing the bot, alongside its Discord-facing workflows. Keeping configuration in a dedicated interface makes the project more approachable than relying on chat commands for every setting.",
          "The project is organized around practical server needs: moderation, member onboarding, roles, AI chat, and social notifications. Each capability has a distinct job, while the bot brings them together in one place.",
        ],
      },
      {
        heading: "Built around useful automation",
        paragraphs: [
          "Automation is most valuable when it handles predictable tasks without taking control away from server administrators. DexBotX focuses on that balance: automate routine actions, keep moderation tools available to admins, and make community updates easier to follow.",
          "Visit DexBotX to explore the current project and its available features. The accompanying article shares more about the product goals and the decisions behind bringing these workflows together.",
        ],
      },
    ],
  },
];

type BlogSection = { heading: string; paragraphs: string[] };
type BlogReference = { label: string; url: string };
export type BlogPost = {
  date: string;
  modified?: string;
  label: string;
  slug: string;
  title: string;
  metaTitle?: string;
  image: string;
  imageAlt: string;
  topics: string[];
  body: string[];
  sections?: BlogSection[];
  references?: BlogReference[];
  related?: BlogReference[];
};

export const posts: BlogPost[] = [
  {
    date: "2026-11-19",
    label: "19 Nov",
    slug: "gta-6-launch-day-confirmed-details",
    title: "GTA 6 Launch Day: Release Date, Platforms and Confirmed Details",
    metaTitle: "GTA 6 Release Date and Confirmed Details",
    image: "/img/gta-6-launch-day.jpg",
    imageAlt: "Original illustration of a neon city, road and car for a GTA VI launch-day explainer",
    topics: ["GTA 6", "Grand Theft Auto VI", "Rockstar Games", "video games"],
    body: [
      "Rockstar's official Grand Theft Auto VI page lists November 19, 2026 as the release date and PlayStation 5 and Xbox Series X|S as platforms. This launch-day guide separates those confirmed details from speculation about gameplay, editions and future platforms.",
    ],
    sections: [
      {
        heading: "What Rockstar has confirmed",
        paragraphs: [
          "The official page places the story in Vice City and the wider state of Leonida, and introduces Jason and Lucia as its central characters. It describes a criminal conspiracy and a relationship at the center of the story, but it does not confirm every plot detail circulating online.",
          "Rockstar's page is the best place to check for updated release information, trailers and platform details. Retailer listings and social posts can be useful leads, but they should not replace a publisher announcement.",
        ],
      },
      {
        heading: "Platforms and release timing",
        paragraphs: [
          "The platform list on Rockstar's page names PlayStation 5 and Xbox Series X|S. It does not list a PC release date, so a PC launch timeline should not be presented as confirmed unless Rockstar publishes one.",
          "Release timing can vary by region and storefront. Players should check their own platform's store and the publisher's current page for local availability, editions and download information.",
        ],
      },
      {
        heading: "Why the launch attracts so much attention",
        paragraphs: [
          "A large game release is also a software, distribution and community event. Players follow official trailers, platform compatibility, accessibility information and updates while creators and developers discuss how the game is made and experienced.",
          "Those conversations are most useful when they distinguish a verified feature from a fan theory. That habit applies to technology news more broadly: trace a claim to the organization that can confirm it.",
        ],
      },
      {
        heading: "Avoid launch-day scams",
        paragraphs: [
          "Use official stores and publisher links when checking pre-orders, updates or support information. Be cautious with unsolicited downloads, account-recovery offers and giveaways that ask for a password, payment details or a one-time code.",
          "This article reports the details on Rockstar's page; it is not a review based on playing the game. I will update factual release information if the publisher changes it.",
        ],
      },
    ],
    references: [
      { label: "Grand Theft Auto VI official page — Rockstar Games", url: "https://www.rockstargames.com/VI" },
    ],
    related: [
      { label: "Future of AI: useful tools and responsibilities", url: "/blog/future-of-artificial-intelligence" },
      { label: "Browse all articles", url: "/blog" },
    ],
  },
  {
    date: "2026-11-19",
    label: "19 Nov",
    slug: "anthropic-ipo-what-it-means-for-ai",
    title: "Anthropic IPO 2026: What a Record AI Listing Signals",
    metaTitle: "Anthropic IPO 2026: AI Market Context",
    image: "/img/anthropic-ipo-ai-markets.png",
    imageAlt: "Original illustration of an AI network and rising market chart for an Anthropic IPO explainer",
    topics: ["Anthropic IPO", "artificial intelligence", "AI business", "technology"],
    body: [
      "Anthropic's IPO is one of 2026's biggest AI business stories. CNN reported on November 18 that the company priced 980 million shares at $83 each and was scheduled to begin trading on Nasdaq as ANT on November 19; an offer price is not a promise of future performance.",
    ],
    sections: [
      {
        heading: "What the reported offer tells us",
        paragraphs: [
          "The reported share count and offer price describe the terms announced ahead of trading. CNN also reported that the offering would raise $81.3 billion before any additional share-sale options, making it a notable public-market event for the AI sector.",
          "Those numbers should be read with their date and source attached. IPO terms, share counts and market prices can change, and the price after trading begins is determined by the market rather than by a headline.",
        ],
      },
      {
        heading: "Why an AI company going public matters",
        paragraphs: [
          "A public listing can give investors more regular financial disclosures than were available while a company was private. For technology readers, that makes it easier to follow how revenue, infrastructure spending and operating costs develop over time.",
          "It also puts a spotlight on the economics behind frontier AI: expensive computing capacity must support products customers are willing to pay for. A large valuation alone does not demonstrate that those products will become profitable.",
        ],
      },
      {
        heading: "Questions worth following",
        paragraphs: [
          "Useful questions include how the company reports recurring revenue, how much it spends to train and serve models, whether customers renew, and how competition affects prices. These indicators help explain the business more clearly than a single first-day price move.",
          "The same questions apply to any AI product: identify the user problem, the cost of delivering the service, and the evidence that people continue to find it valuable.",
        ],
      },
      {
        heading: "Not investment advice",
        paragraphs: [
          "This is a technology and business explainer, not a recommendation to buy or sell a security. Readers considering financial decisions should consult current regulatory filings and qualified financial professionals rather than relying on a news summary.",
          "The figures above are attributed to CNN's November 18 report, published before the scheduled trading date. Check later company filings and market reporting for any subsequent updates.",
        ],
      },
    ],
    references: [
      { label: "Anthropic's Wall Street debut — CNN, November 18, 2026", url: "https://www.cnn.com/2026/11/18/investing/anthropic-ipo-wall-street-ai" },
      { label: "Anthropic company news", url: "https://www.anthropic.com/news" },
    ],
    related: [
      { label: "How VerifiAI approaches AI-generated content detection", url: "/blog/how-verifiai-approaches-ai-content-detection" },
      { label: "The future of AI: useful assistants and new responsibilities", url: "/blog/future-of-artificial-intelligence" },
    ],
  },
  {
    date: "2026-11-19",
    label: "19 Nov",
    slug: "blockchain-in-nepal-beyond-crypto",
    title: "Blockchain in Nepal: Use Cases Beyond Cryptocurrency",
    metaTitle: "Blockchain in Nepal: Uses, Risks and Rules",
    image: "/img/blockchain-nepal-use-cases.png",
    imageAlt: "Original illustration of connected ledger blocks against a Himalayan landscape",
    topics: ["blockchain in Nepal", "cryptocurrency", "distributed ledger", "technology"],
    body: [
      "Blockchain and cryptocurrency are related but not interchangeable. This Nepal-focused explainer looks at what a shared ledger can do, where a conventional database may be better, and why financial activity must be checked against current local rules.",
    ],
    sections: [
      {
        heading: "Separate the ledger from the token",
        paragraphs: [
          "A blockchain is a way for a network to maintain an ordered record of transactions or state changes. A cryptocurrency is a digital asset that may use a blockchain; building or studying ledger software does not require promoting or trading that asset.",
          "That distinction matters when evaluating a pitch. Ask what information is shared, who needs to verify it, and why a signed database record or an established service would not solve the same problem more simply.",
        ],
      },
      {
        heading: "Possible uses and real limitations",
        paragraphs: [
          "Shared records can be worth exploring when several independent organizations need to verify the same history. Examples to evaluate include document attestations, supply-chain events or audit trails, but naming a use case does not prove that a blockchain deployment is necessary or operating in Nepal.",
          "A ledger cannot make false input true, guarantee that a person controls an identity, or prevent every software bug. Privacy, transaction fees, governance, recovery and the ability to correct mistakes all need to be considered before a product is built.",
        ],
      },
      {
        heading: "Check Nepal's financial rules separately",
        paragraphs: [
          "Nepal Rastra Bank's published 2022 notice describes virtual-currency and cryptocurrency transactions as illegal. That notice concerns financial activity; it should not be treated as a general explanation of every software or research project that uses distributed-ledger ideas.",
          "Rules can change and this article is not legal advice. Before handling tokens, payments or investment offers, check the latest notices from Nepal Rastra Bank and consult a qualified local professional.",
        ],
      },
      {
        heading: "A measured way to learn",
        paragraphs: [
          "Start with network, wallet, transaction and smart-contract fundamentals, then use a development network for experiments. Ethereum's developer documentation is one starting point for understanding the components without assuming that every application needs a chain.",
          "I am learning about blockchain ecosystems from Nepal, so I prefer small, verifiable exercises and clear statements about their limits over claims that a technology will solve every trust problem.",
        ],
      },
    ],
    references: [
      { label: "Nepal Rastra Bank notice on virtual currency and cryptocurrency", url: "https://www.nrb.org.np/contents/uploads/2022/08/FXMD-Notice-2_207980_Cryptocurrecy.pdf" },
      { label: "Ethereum developer documentation", url: "https://ethereum.org/en/developers/docs/" },
    ],
    related: [
      { label: "Learning Ethereum, Sui and Solana as a developer from Nepal", url: "/blog/learning-ethereum-sui-solana-from-nepal" },
      { label: "The future of blockchain beyond cryptocurrency", url: "/blog/future-of-blockchain-beyond-cryptocurrency" },
    ],
  },
  {
    date: "2026-11-19",
    label: "19 Nov",
    slug: "nepal-digital-payments-2026-qr-wallets",
    title: "Nepal's Digital Payments in 2026: QR, Wallets and Trust",
    metaTitle: "Digital Payments in Nepal: QR, Wallets and Trust",
    image: "/img/nepal-digital-payments-2026.png",
    imageAlt: "Original illustration of a smartphone scanning a QR code for a digital payment",
    topics: ["digital payments Nepal", "QR payments", "mobile wallets", "fintech"],
    body: [
      "Digital payments in Nepal are an active policy and product topic: Nepal Rastra Bank publishes payment-system indicators and recent notices through its Payment Systems Department. Here is how to evaluate QR and wallet experiences through usability, safety and reliable data.",
    ],
    sections: [
      {
        heading: "Use current indicators, not anecdotes",
        paragraphs: [
          "The central bank's Payment Systems Department publishes periodic indicators, including a Bhadra 2083 report in October 2026. Those official series are a better place to verify transaction trends than a social post or a single shop's experience.",
          "Payment metrics can count different things: transactions, values, active accounts or installed terminals. A useful comparison names the measure, reporting period and source instead of combining unlike totals.",
        ],
      },
      {
        heading: "Make the payment flow understandable",
        paragraphs: [
          "A good QR payment flow should show the recipient and amount clearly before a customer confirms. The receipt should make it easy to understand whether the transfer completed, is pending or needs help from the provider.",
          "Businesses benefit when a digital option works alongside clear instructions and a practical fallback. Payment technology should reduce friction without making it harder for customers to ask questions or resolve a mistake.",
        ],
      },
      {
        heading: "Protect accounts and customers",
        paragraphs: [
          "Check the merchant name and amount before confirming, and avoid scanning a replacement QR code unless the business verifies it. Never share a password, PIN or one-time code with someone who contacts you unexpectedly.",
          "Use services licensed for the activity in question and follow the provider's current support and dispute process. This article is general information, not financial or regulatory advice.",
        ],
      },
      {
        heading: "What builders can learn",
        paragraphs: [
          "For product teams, trust is part of the interface: show meaningful confirmation, avoid ambiguous payment states, and make customer support discoverable. These details matter as much as the code that connects an app to a payment rail.",
          "I follow Nepal's fintech development as a software builder because it shows how local products must balance convenience, reliability and clear user protection.",
        ],
      },
    ],
    references: [
      { label: "Nepal Rastra Bank Payment Systems Department and indicators", url: "https://www.nrb.org.np/psd/" },
      { label: "Payment Systems Indicators of 2083 Bhadra", url: "https://www.nrb.org.np/contents/uploads/2026/10/PS-Bhadra-2083_.pdf" },
    ],
    related: [
      { label: "Building a SaaS as a developer in Nepal", url: "/blog/building-a-saas-as-a-developer-in-nepal" },
      { label: "Building trusted fintech in Nepal", url: "/blog/nepal-fintech-innovation-2026" },
    ],
  },
  {
    date: "2026-11-19",
    label: "19 Nov",
    slug: "nepal-ai-tourism-digital-resilience",
    title: "AI and Digital Tourism in Nepal: Useful Tools, Real Safety",
    metaTitle: "AI and Digital Tourism in Nepal",
    image: "/img/nepal-ai-tourism-2026.png",
    imageAlt: "Original illustration of a visitor using a digital guide among Himalayan peaks",
    topics: ["AI tourism Nepal", "digital tourism", "tourism safety", "artificial intelligence"],
    body: [
      "Nepal Tourism Board's 2026 World Tourism Day program put digital transformation and AI at the center of tourism discussions. The Board highlighted verified visitor information, early warnings and coordination as practical priorities for a resilient travel experience.",
    ],
    sections: [
      {
        heading: "A current Nepal tourism priority",
        paragraphs: [
          "The September 2026 program used the theme \"Digital Agenda and AI to Redesign Tourism.\" The Nepal Tourism Board connected digital tools with visitor communication and preparedness, particularly after floods affected tourism infrastructure in the Bhote Koshi area.",
          "This is an official policy and industry discussion, not evidence that every destination already has an AI service or real-time alert system. Visitors should still rely on current information from local authorities and tourism operators.",
        ],
      },
      {
        heading: "Where digital tools can help",
        paragraphs: [
          "Well-maintained digital services can make route information, opening hours, transport updates and emergency contacts easier to find. Translation and itinerary tools may help visitors plan, but they need reliable source data and clear dates.",
          "For safety, a useful system should communicate uncertainty, update delays and official instructions in a language travelers can understand. A chatbot is not a substitute for emergency services or local guides.",
        ],
      },
      {
        heading: "Keep people and communities in the loop",
        paragraphs: [
          "Tourism depends on residents, guides, transport workers and small businesses as much as on websites. Digital products should make local knowledge easier to reach and avoid presenting a community as a static attraction or a single data point.",
          "Nepal's terrain and weather can change quickly. Preparedness requires coordination between institutions and local people, with digital channels supporting rather than replacing that work.",
        ],
      },
      {
        heading: "A product-design lesson from Nepal",
        paragraphs: [
          "For developers, the opportunity is to solve a specific information problem: help a visitor find a verified update, understand a route change or contact the right service. Good source attribution and a clear last-updated time are more useful than an AI label by itself.",
          "This is the kind of practical technology question I follow as a web and AI developer from Nepal: build tools around dependable information, state their limits and keep people responsible for important decisions.",
        ],
      },
    ],
    references: [
      { label: "Nepal Tourism Board: World Tourism Day and digital tourism resilience", url: "https://trade.ntb.gov.np/nepal-celebrates-47th-world-tourism-day-highlighting-digital-transformation-and-tourism-resilience/" },
    ],
    related: [
      { label: "How VerifiAI approaches AI-generated content detection", url: "/blog/how-verifiai-approaches-ai-content-detection" },
      { label: "Nepal Wellness Year 2027", url: "/blog/nepal-wellness-year-2027-tourism" },
    ],
  },
  {
    date: "2026-11-19",
    label: "19 Nov",
    slug: "nepal-wellness-year-2027-tourism",
    title: "Nepal Wellness Year 2027: Turning a Campaign Into Better Travel",
    metaTitle: "Nepal Wellness Year 2027: Tourism Guide",
    image: "/img/nepal-wellness-tourism-2027.png",
    imageAlt: "Original illustration of a sunrise over the Himalayas and a person practicing meditation",
    topics: ["Nepal Wellness Year 2027", "Nepal tourism", "sustainable tourism", "wellness travel"],
    body: [
      "Nepal Tourism Board highlighted Nepal Wellness Year 2027 during the country's participation at WTM London in November 2026. The campaign connects wellness, adventure, culture and sustainable travel; its value will depend on visitor experiences and local communities, not promotion alone.",
    ],
    sections: [
      {
        heading: "What the campaign is promoting",
        paragraphs: [
          "The Nepal Tourism Board described wellness, yoga, meditation and spiritual rejuvenation alongside Himalayan trekking, cultural heritage, wildlife and community-based tourism. The message positions wellness as part of a wider range of travel experiences rather than a replacement for them.",
          "The Board also used WTM London to build international travel-trade relationships. That event is a promotional milestone, not a guarantee of future visitor numbers or a complete measure of local tourism outcomes.",
        ],
      },
      {
        heading: "Make the promise match the experience",
        paragraphs: [
          "Travelers need clear details about location, access, season, services and responsible visitor behavior. Operators should describe what is actually included and avoid presenting a short activity as a medical treatment or making unsupported health claims.",
          "A sustainable offer should account for local livelihoods, environmental limits and cultural context. Communities should have a meaningful role in deciding how visitors engage with places and traditions.",
        ],
      },
      {
        heading: "Digital discovery should stay accurate",
        paragraphs: [
          "Search listings, maps and booking pages can help travelers compare routes and services, but outdated hours or copied descriptions create real costs. Providers should keep practical details current and point to official guidance when conditions change.",
          "Digital marketing can introduce a destination; reliable transport, respectful hosting and transparent information shape what visitors experience after arrival.",
        ],
      },
      {
        heading: "A developing tourism story",
        paragraphs: [
          "Nepal Wellness Year 2027 is an upcoming national campaign, so its program and results may evolve. Travelers and businesses should check updated guidance from Nepal Tourism Board and local providers as the year approaches.",
          "As a developer from Nepal, I find this shift interesting because tourism is also an information-design challenge: make local experiences discoverable without losing the detail and human relationships that make them meaningful.",
        ],
      },
    ],
    references: [
      { label: "Nepal Tourism Board: WTM London 2026 and Nepal Wellness Year 2027", url: "https://trade.ntb.gov.np/culture-and-sustainable-tourism-at-wtm-london-2026/" },
    ],
    related: [
      { label: "AI and digital tourism in Nepal", url: "/blog/nepal-ai-tourism-digital-resilience" },
      { label: "Pokhara's direct Dubai connection", url: "/blog/pokhara-dubai-direct-flight-nepal" },
    ],
  },
  {
    date: "2026-11-19",
    label: "19 Nov",
    slug: "pokhara-dubai-direct-flight-nepal",
    title: "Pokhara to Dubai: What a Direct Flight Could Change",
    metaTitle: "Pokhara to Dubai Direct Flight: Nepal Travel",
    image: "/img/pokhara-dubai-direct-flight.png",
    imageAlt: "Original illustration of a flight route linking Himalayan peaks with a modern city skyline",
    topics: ["Pokhara Dubai flight", "Nepal tourism", "air connectivity", "Pokhara"],
    body: [
      "Nepal Tourism Board reported that flydubai began a daily scheduled Dubai–Pokhara–Dubai service on September 23, 2026. The route is a notable connectivity story for Pokhara, while schedules and onward connections should always be checked with the airline.",
    ],
    sections: [
      {
        heading: "What changed in September 2026",
        paragraphs: [
          "The Nepal Tourism Board reported the inaugural service at Pokhara International Airport and described Dubai as a major aviation hub. It also noted the flydubai and Emirates codeshare partnership as a way to connect onward to other destinations.",
          "An inaugural flight is a dated event, not a promise that every future departure will run on the same schedule. Travelers should verify current routes, operating days, fares and connection rules directly before making plans.",
        ],
      },
      {
        heading: "Why connectivity matters to local tourism",
        paragraphs: [
          "A direct international connection can make a destination easier to consider, but flights are only one part of a visitor's journey. Ground transport, accommodation, accurate attraction information and access to local services also affect whether a trip works smoothly.",
          "For Pokhara businesses, clear digital information can help turn interest into a well-planned visit. Reliable hours, current transport details and honest descriptions are more useful than broad claims about what a route will deliver.",
        ],
      },
      {
        heading: "Plan with up-to-date information",
        paragraphs: [
          "Flight operations and codeshare arrangements can change. Check the airline's booking system, confirm baggage and transit terms, and allow time for connections rather than relying on a promotional announcement alone.",
          "Visitors should also consult current local advisories for road conditions and weather, especially when planning onward travel into mountain areas.",
        ],
      },
      {
        heading: "A digital opportunity for Nepal",
        paragraphs: [
          "New routes create a useful test for tourism websites: can a traveler quickly find accurate arrival, transfer and destination information? The best answer combines official sources with practical details from providers on the ground.",
          "I follow developments like this as a Nepal-based developer because better digital experiences can help local destinations communicate clearly while leaving the actual travel experience in the hands of local people.",
        ],
      },
    ],
    references: [
      { label: "Nepal Tourism Board: Pokhara connects directly to Dubai", url: "https://trade.ntb.gov.np/pokhara-connects-directly-to-dubai/" },
    ],
    related: [
      { label: "Nepal Wellness Year 2027", url: "/blog/nepal-wellness-year-2027-tourism" },
      { label: "AI and digital tourism in Nepal", url: "/blog/nepal-ai-tourism-digital-resilience" },
    ],
  },
  {
    date: "2026-11-19",
    label: "19 Nov",
    slug: "nepal-hydropower-digital-grid",
    title: "Nepal's Hydropower Story Needs a Smarter Grid",
    metaTitle: "Nepal Hydropower Exports and the Digital Grid",
    image: "/img/nepal-hydropower-digital-grid.png",
    imageAlt: "Original illustration of a Himalayan hydropower dam connected to a data and transmission network",
    topics: ["Nepal hydropower", "electricity exports", "energy data", "digital infrastructure"],
    body: [
      "Nepal's hydropower discussion is also a grid and information challenge. The Nepal Electricity Authority publishes demand, supply and export snapshots; understanding the energy system means looking at how those changing flows are measured and coordinated, not only how much a plant can generate.",
    ],
    sections: [
      {
        heading: "Generation is only one part of the system",
        paragraphs: [
          "Electricity has to be balanced across producers, transmission lines and demand. Hydropower output varies with water availability, while consumers need a dependable supply throughout the year.",
          "The Nepal Electricity Authority's public energy dashboard makes demand and export measures visible. Such snapshots change over time, so readers should use the current dashboard rather than repeat a number without its date and unit.",
        ],
      },
      {
        heading: "Why data quality matters",
        paragraphs: [
          "Planning depends on measurements that are timely, comparable and clearly defined. Operators need to distinguish installed capacity from energy produced, and domestic demand from electricity moved across a border.",
          "Digital systems can help organize forecasts, equipment status and operational reporting, but they cannot replace transmission capacity, maintenance, policy decisions or coordination with neighboring grids.",
        ],
      },
      {
        heading: "Consider the full development question",
        paragraphs: [
          "A responsible energy conversation includes reliability, affordability, environmental and community impacts, and the infrastructure required to deliver power. Export opportunities are one part of that conversation, not an automatic benefit for every project.",
          "Public dashboards are useful starting points, but project-level decisions need current technical, financial and environmental information from the responsible authorities.",
        ],
      },
      {
        heading: "Where software builders fit",
        paragraphs: [
          "Energy technology has ordinary software problems with high consequences: reliable data collection, access control, monitoring, clear incident reporting and resilient communications. Small improvements in these workflows can be more useful than adding a fashionable technology without a defined need.",
          "I am interested in how Nepal's software community can contribute to practical infrastructure tools while being careful not to claim expertise in power engineering without the relevant evidence.",
        ],
      },
    ],
    references: [
      { label: "Nepal Electricity Authority", url: "https://nea.org.np/en" },
    ],
    related: [
      { label: "Digital payments and trusted fintech in Nepal", url: "/blog/nepal-digital-payments-2026-qr-wallets" },
      { label: "Building a SaaS as a developer in Nepal", url: "/blog/building-a-saas-as-a-developer-in-nepal" },
    ],
  },
  {
    date: "2026-11-19",
    label: "19 Nov",
    slug: "nepal-fintech-innovation-2026",
    title: "Nepal Fintech Innovation in 2026: Build Trust Before Features",
    metaTitle: "Nepal Fintech Innovation: Trust Before Features",
    image: "/img/nepal-fintech-innovation-2026.png",
    imageAlt: "Original illustration of a mobile finance interface connected to a secure fintech network",
    topics: ["Nepal fintech", "fintech innovation", "digital finance", "financial technology"],
    body: [
      "Nepal Rastra Bank's Payment Systems Department published information about its 2026 Fintech Innovation Showcase and a Digital Finance Innovation Hub impact report. These current initiatives make a useful starting point for discussing how financial products can innovate while keeping trust and user protection central.",
    ],
    sections: [
      {
        heading: "Innovation needs evidence",
        paragraphs: [
          "A showcase can introduce new ideas, but a product still has to demonstrate that it solves a real user problem. Builders should explain who the service is for, how it works, what data it needs and what happens when something goes wrong.",
          "The central bank's published materials are useful context for Nepal's fintech landscape. For the latest programs and payment indicators, consult the Payment Systems Department directly rather than relying on an old event announcement.",
        ],
      },
      {
        heading: "Trust belongs in the product design",
        paragraphs: [
          "People need to understand fees, permissions, payment status and support options before relying on a financial app. Plain-language confirmations and a workable dispute process are core product features, not finishing touches.",
          "Security and privacy also have to be considered early. Collect only information needed for the service, protect account recovery, and make it clear which organization is responsible for a customer's data and funds.",
        ],
      },
      {
        heading: "Build for the local context",
        paragraphs: [
          "A product designed for Nepal should account for local languages, device and network conditions, customer support expectations and the rules that apply to its financial activity. Copying a feature from another market does not guarantee that it will work well here.",
          "Financial products are regulated. Teams should confirm requirements with the relevant authorities and qualified professionals before launching a service or making claims about licensing.",
        ],
      },
      {
        heading: "A practical developer checklist",
        paragraphs: [
          "Before adding a feature, test whether users can complete the main task, understand the result and recover from common errors. Measure reliability and support outcomes alongside growth.",
          "As a web developer from Nepal, I see fintech as a strong example of software where clarity matters as much as implementation. Trust grows when a product is useful, predictable and honest about its limits.",
        ],
      },
    ],
    references: [
      { label: "Nepal Rastra Bank Payment Systems Department", url: "https://www.nrb.org.np/psd/" },
      { label: "Digital Finance Innovation Hub impact report", url: "https://www.nrb.org.np/psd/digital-finance-innovation-hub-difi-hub-impact-report/" },
      { label: "Nepal Rastra Bank Fintech Innovation Showcase 2026 notice", url: "https://www.nrb.org.np/contents/uploads/2026/10/Nepal-Rastra-Bank_Event-Flyer.pdf" },
    ],
    related: [
      { label: "Digital payments in Nepal: QR, wallets and trust", url: "/blog/nepal-digital-payments-2026-qr-wallets" },
      { label: "Building a SaaS as a developer in Nepal", url: "/blog/building-a-saas-as-a-developer-in-nepal" },
    ],
  },
  { date: "2026-11-16", label: "16 Nov", slug: "learning-ethereum-sui-solana-from-nepal", title: "Learning Ethereum, Sui and Solana as a developer from Nepal", metaTitle: "Learning Ethereum, Sui & Solana in Nepal", image: "/img/blockchain-future.png", imageAlt: "Original illustration of connected blocks in a distributed ledger", topics: ["blockchain", "Ethereum", "Sui", "Solana", "Nepal"], body: [
    "I am learning about Ethereum, Sui, and Solana as part of my wider interest in software development. This is a learning journey, not a claim of professional blockchain experience or a list of completed deployments. I want to understand what each ecosystem is designed to do before deciding whether a blockchain is the right tool for a particular problem.",
  ], sections: [
    { heading: "Start with the fundamentals", paragraphs: [
      "I am approaching blockchain by learning the basic ideas behind wallets, transactions, smart contracts, networks, and on-chain data. Understanding what users sign, what a transaction changes, and what information becomes public is more useful than starting with a list of tools.",
      "A distributed ledger is not automatically the best place to store data. Public visibility, transaction fees, latency, and irreversible actions all affect how a product should be designed. I want to understand those trade-offs before choosing an implementation.",
    ] },
    { heading: "Compare ecosystems without assuming they are interchangeable", paragraphs: [
      "Ethereum, Sui, and Solana are separate ecosystems with different designs and developer experiences. I am learning how their documentation, programming models, tools, and networks differ rather than treating one tutorial as transferable to all three.",
      "The comparison should start with a concrete requirement: what needs to be shared, who needs to verify it, and why an ordinary database or signed record would not be enough. A blockchain is only useful when its properties address a real need.",
    ] },
    { heading: "Build small experiments and record what I learn", paragraphs: [
      "My next step is to follow official beginner materials and make small, clearly labeled learning exercises. Before describing any exercise as complete, I will be able to link to its code and explain what it does, what network it uses, and what it does not demonstrate.",
      "I am not presenting this article as a tutorial with tested deployment steps. It records my current learning direction; as I gain hands-on experience, I can publish separate guides with reproducible code and precise setup details.",
    ] },
    { heading: "When blockchain may not be the right choice", paragraphs: [
      "A shared ledger can make sense when independent participants need to consult a common record and no single operator should control the only copy. It may add unnecessary complexity when a conventional database already meets the trust, privacy, and performance requirements.",
      "For content authenticity, a timestamp or provenance record does not prove that a claim is true or that a creator is trustworthy. My related writing on digital content provenance explains why records and evidence should be interpreted carefully.",
    ] },
    { heading: "A learning journey, not a credential claim", paragraphs: [
      "I am learning Ethereum, Sui, and Solana; I do not claim expertise or professional blockchain work. I will update this page when I have verified projects or practical lessons to share.",
      "For my existing work, see the VerifiAI and DexBotX project pages, or follow my code and learning on GitHub.",
    ] },
  ], related: [
    { label: "AI, blockchain and content provenance", url: "/blog/ai-blockchain-and-digital-content-provenance" },
    { label: "View projects by Santosh Poudel", url: "/projects" },
    { label: "Santosh Poudel on GitHub", url: LINKS.github },
  ] },
  { date: "2026-11-16", label: "16 Nov", slug: "how-verifiai-approaches-ai-content-detection", title: "How VerifiAI approaches AI-generated content detection", metaTitle: "How VerifiAI Approaches AI Content Detection", image: "/img/content-provenance.svg", imageAlt: "Original illustration showing a media file with a verifiable provenance trail", topics: ["VerifiAI", "AI detection", "content authenticity"], body: [
    "VerifiAI is a project I founded to explore tools for assessing AI-generated and manipulated digital content. Its public project description focuses on source review and provenance context. This article describes that stated approach; it does not claim a particular model, dataset, scoring method, or detector accuracy that has not been published.",
  ], sections: [
    { heading: "Treat detection as one signal, not a verdict", paragraphs: [
      "AI content detectors can be uncertain. A result should be treated as one signal to consider, not conclusive proof of who created a piece of content or whether a statement is true. Context, original sources, and the circumstances in which a file was created can all matter.",
      "A responsible review should avoid turning a score into an accusation. False positives and false negatives are possible, and a cautious conclusion is more useful than overstating what a tool can establish.",
    ] },
    { heading: "Look at source context and provenance", paragraphs: [
      "VerifiAI's stated project direction combines content review with source context and provenance. When trustworthy provenance information is available, it can help explain where a file came from or how it was handled. It still cannot prove that the content itself is accurate.",
      "The absence of provenance is not proof of manipulation. Social platforms and ordinary editing workflows can remove metadata, and many authentic files have no attached credentials. Reviewers should avoid treating missing information as evidence of wrongdoing.",
    ] },
    { heading: "Separate what is documented from what is not", paragraphs: [
      "The public portfolio describes VerifiAI as an AI content verification project and summarizes its focus on synthetic media, source review, and provenance context. It does not document the detector's implementation, training data, thresholds, or evaluation results, so I will not invent those details here.",
      "For the product's current capabilities, visit the separate VerifiAI product site. The portfolio's VerifiAI project page explains the goals and limitations, and the article on digital content provenance discusses what records can and cannot establish.",
    ] },
    { heading: "Use a careful review process", paragraphs: [
      "A careful review starts with the original source when it can be found, checks whether context or provenance records are available, and treats automated results as fallible. It records uncertainty and avoids claiming that a single signal proves authorship or truth.",
      "This is the principle behind how I describe VerifiAI: make content review more informed while being clear about its limits. As the project evolves, descriptions should be updated only when its public features and evidence support them.",
    ] },
  ], related: [
    { label: "Explore the VerifiAI project", url: "/projects/verifai" },
    { label: "AI, blockchain and content provenance", url: "/blog/ai-blockchain-and-digital-content-provenance" },
    { label: "How to check if text or an image is AI-generated", url: "/blog/how-to-check-if-text-or-image-is-ai-generated" },
  ] },
  { date: "2026-11-16", label: "16 Nov", slug: "building-a-saas-as-a-developer-in-nepal", title: "Building a SaaS as a developer in Nepal", image: "/img/santosh-poudel-web-developer-nepal.jpg", imageAlt: "Santosh Poudel, full-stack and AI developer from Nepal", topics: ["SaaS", "web development", "Nepal"], body: [
    "Building a SaaS product means more than putting a website online. It means shaping a useful service around a real problem, making its main workflow understandable, and continuing to improve it as the product grows. As a developer from Nepal who builds complete SaaS products, I think about those fundamentals before choosing features or adding complexity.",
  ], sections: [
    { heading: "Start with the problem and the person using the product", paragraphs: [
      "A product idea becomes easier to evaluate when it is described as a task someone needs to complete. Who is the user, what are they trying to do, and what currently makes that task difficult? Clear answers help keep the first version focused and make it possible to explain the product in plain language.",
      "This does not require guessing at a large market or making claims about demand. It is a practical way to decide what a first useful workflow should do and what can wait until there is evidence that users need it.",
    ] },
    { heading: "Build a small, complete first workflow", paragraphs: [
      "A narrow feature that works from beginning to end is more useful than a long list of unfinished capabilities. A person should be able to understand where to start, complete the main task, and see a clear result. The interface, application logic and stored information all need to support that same path.",
      "For a web product, this means paying attention to form states, validation, loading and error messages as well as the successful path. These details help people understand what the service is doing and what they can do next.",
    ] },
    { heading: "Treat reliability and clarity as product features", paragraphs: [
      "People need to know what a service does with their information, what its results mean and where its limitations are. Clear labels, helpful feedback and consistent behaviour build more confidence than an impressive feature list. When a system uses AI, it is especially important to describe generated results as assistance rather than certainty.",
      "Security and privacy also belong in the product design from the start. Keep access limited to what a feature needs, protect credentials, and avoid collecting information that does not serve the product's purpose.",
    ] },
    { heading: "Choose technology to support the product", paragraphs: [
      "Frameworks and services can make development faster, but a technology choice should solve a concrete need. I build across full-stack web development and AI tools, and I try to keep the implementation understandable enough to maintain as the product changes.",
      "A straightforward architecture is a useful starting point. Add infrastructure or automation when the product's real requirements call for it, rather than assuming that a larger stack will make the service more valuable.",
    ] },
    { heading: "Learn through shipping and iteration", paragraphs: [
      "A SaaS product is not finished when its first version is published. Fixing confusing steps, addressing errors and improving the most important workflow are part of building the service. Keeping notes about decisions and limitations helps make those improvements deliberate.",
      "I share my work and learning through GitHub and YouTube. You can also explore my projects, including DexBotX, or read about my background on the about page.",
    ] },
  ], related: [
    { label: "Building DexBotX: a Discord bot for server automation", url: "/blog/building-dexbotx-discord-bot" },
    { label: "Explore my projects", url: "/projects" },
    { label: "Santosh Poudel on GitHub", url: LINKS.github },
    { label: "Santosh Poudel on YouTube", url: LINKS.youtube },
  ] },
  { date: "2026-10-07", label: "7 Oct", slug: "future-of-artificial-intelligence", title: "The future of AI: useful assistants, better tools and new responsibilities", metaTitle: "The Future of AI: Useful Tools", image: "/img/ai-future.png", imageAlt: "Original illustration of a human working with an artificial intelligence assistant", topics: ["AI", "technology"], body: [
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
    { heading: "Good AI features begin with a specific task", paragraphs: [
      "A useful product decision starts with a narrow question: what is taking a person too long, or what information is difficult to organise? For example, an assistant that turns a long set of notes into a draft outline can save time while leaving the writer responsible for checking the facts and voice. The feature has a clear purpose, and its output is easy to review.",
      "By contrast, a generic assistant added to every screen may create more work than it removes. People have to learn when to trust it, correct irrelevant suggestions and work around an interface that interrupts their task. Product teams should compare the AI-assisted path with the existing workflow and keep the simpler route available if it performs better.",
    ] },
    { heading: "Measure usefulness, not novelty", paragraphs: [
      "A demo can make a model look impressive, but a product needs evidence from ordinary use. A team might measure how often users finish a task, how much editing an AI draft needs, how frequently answers contain unsupported details and whether people return to the feature voluntarily. These measures reveal different trade-offs; speed alone does not establish quality.",
      "Testing should include varied inputs and users who are likely to encounter edge cases. A summariser, for instance, should be checked on short and long documents, clear and ambiguous writing, and material with tables or named entities. When a system cannot answer confidently, a useful product should say so rather than inventing certainty.",
    ] },
    { heading: "Design for review and correction", paragraphs: [
      "People need a practical way to inspect and change AI output. Show the source material where possible, distinguish generated suggestions from verified facts, and make it easy to edit or undo an action. For higher-impact tasks, route uncertain cases to a qualified person and record enough context to understand how a recommendation was produced.",
      "This is especially important for content assessment. A detector may help prioritise a closer look, but it should not decide authorship or intent by itself. The companion article on checking whether text or an image is AI-generated describes a more careful sequence of source review, context checks and limited use of automated signals.",
    ] },
    { heading: "Privacy and security belong in the product plan", paragraphs: [
      "Before sending a user's content to a model, a product should explain what data is processed, where it goes, how long it is retained and whether it may be used to improve a service. Teams should minimise what they collect, avoid sending secrets unnecessarily and apply access controls to both prompts and results. A convenient feature is not worth exposing private records.",
      "Security review should consider prompt injection, unsafe generated code, data leakage and misuse of connected tools. A model's fluent response is not a security boundary. Keep permissions narrow, validate outputs before taking consequential actions and provide a safe fallback when a service is unavailable.",
    ] },
    { heading: "A practical adoption checklist", paragraphs: [
      "Start with one well-defined task and a baseline measurement. Test a small set of representative examples, including difficult cases; ask users to review the output; document known limitations; and decide in advance what would count as success or a reason to stop. Make the feature optional when possible and give users a clear way to report errors.",
      "The broader debate about accountability connects to AI, blockchain and digital content provenance, where the key question is what evidence a tool can really establish. Thoughtful AI development is less about attaching a model to everything and more about making a bounded capability understandable, useful and safe.",
    ] },
  ], references: [
    { label: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
    { label: "Stanford Institute for Human-Centered AI: AI Index", url: "https://hai.stanford.edu/ai-index" },
  ], related: [
    { label: "How to check if text or an image is AI-generated", url: "/blog/how-to-check-if-text-or-image-is-ai-generated" },
    { label: "AI, blockchain and content provenance", url: "/blog/ai-blockchain-and-digital-content-provenance" },
  ] },
  { date: "2026-10-07", label: "7 Oct", slug: "future-of-blockchain-beyond-cryptocurrency", title: "The future of blockchain: practical uses beyond cryptocurrency", metaTitle: "The Future of Blockchain: Practical Uses", image: "/img/blockchain-future.png", imageAlt: "Original illustration of connected blocks in a distributed ledger", topics: ["blockchain", "technology"], body: [
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
      "The most useful future for blockchain may be selective: apply it where shared verification creates measurable value, and use simpler tools everywhere else. In a pilot, define a baseline for time, error rates and reconciliation effort so the team can tell whether the ledger improves the process enough to justify operating it.",
    ] },
    { heading: "Understand the trust model before choosing a chain", paragraphs: [
      "A design should explain who operates the network, who can submit records, who validates them and how disagreements are handled. In a public network, participation and governance differ from a permissioned ledger run by a defined group. Neither model removes trust; it changes which people, software and processes need to be trusted.",
      "Write down the assumptions plainly. If a consortium controls most validators, that may be appropriate for its use case, but it is not the same as a system with broad independent participation. A clear trust model helps users understand what the ledger guarantees and what remains a policy or operational promise.",
    ] },
    { heading: "Keep personal and business data off public ledgers", paragraphs: [
      "Replicated records can be visible to many participants and difficult to remove. Putting names, account details, private documents or sensitive business information directly on a public chain can create risks that are hard to undo. Even a hash can reveal information if an attacker can guess the original value or connect it to other public data.",
      "A safer architecture often keeps the underlying data in a suitable controlled store and records only a carefully chosen commitment or event reference on the ledger. That still requires a threat model: decide who can resolve the reference, what happens when access must be withdrawn and how long associated records should remain available.",
    ] },
    { heading: "Make cost, speed and recovery part of the comparison", paragraphs: [
      "A proof of concept can hide costs that become important at scale: transaction fees, infrastructure, monitoring, key management, upgrades and support for users who lose access. Estimate peak and ordinary workloads, test delays and failures, and consider whether the system can recover from a compromised key or a software defect.",
      "Compare those costs with a conventional database and signed audit logs. If one organisation is already the accepted authority, a database with well-designed permissions and backups may be cheaper, faster and easier to operate. The right question is not whether a chain is novel, but whether its shared verification is worth its additional complexity.",
    ] },
    { heading: "A worked example: tracking a shared shipment", paragraphs: [
      "Imagine a shipment that passes through a producer, carrier, warehouse and retailer. Each organisation may need to confirm hand-offs without allowing one participant to quietly rewrite the shared timeline. A ledger could help preserve a common sequence of signed events, while sensors and staff remain responsible for reporting what physically happened.",
      "The system would still need to validate identities, handle late or incorrect reports, protect commercial details and provide a process for correcting mistakes. If every participant already trusts one logistics platform to keep the record, a shared database may solve the same problem with less overhead. A pilot should compare both approaches using real workflow requirements.",
    ] },
    { heading: "Use a decision checklist", paragraphs: [
      "Before building, answer these questions: Are there multiple independent writers? Do they need a shared record? Is there a reason none should control it alone? Can the data be made public or safely represented by a limited proof? Who pays for operation, governs upgrades and resolves disputes? If the answers are vague, more discovery is needed before selecting a technology.",
      "The distinction between a record and proof of truth also matters in media systems. Content provenance and AI detection explain why a tamper-evident history does not automatically prove that a photograph or claim is accurate. Use a blockchain only for the part of the workflow where its properties solve a defined problem.",
    ] },
  ], references: [
    { label: "NIST Interagency Report 8202: Blockchain Technology Overview", url: "https://csrc.nist.gov/pubs/ir/8202/final" },
  ], related: [
    { label: "AI, blockchain and content provenance", url: "/blog/ai-blockchain-and-digital-content-provenance" },
    { label: "The future of AI", url: "/blog/future-of-artificial-intelligence" },
  ] },
  { date: "2026-10-07", label: "7 Oct", slug: "ai-blockchain-and-digital-content-provenance", title: "AI, blockchain and content provenance: what can actually be verified?", metaTitle: "AI, Blockchain & Content Provenance", image: "/img/content-provenance.png", imageAlt: "Original illustration showing a media file with a verifiable provenance trail", topics: ["AI", "blockchain", "VerifiAI"], body: [
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
    { heading: "What a detector can and cannot tell you", paragraphs: [
      "Most detectors classify features of the submitted material against patterns learned from examples. Their result is an estimate, not access to a complete record of how a file was made. Editing, compression, translation, paraphrasing and new generation tools can all change the material a detector sees, so performance can vary across formats and populations.",
      "A score should therefore be read with its method and uncertainty in mind. It should not be treated as a reliable way to identify a particular author, prove misconduct or decide whether a person deserves trust. The practical guide on checking whether text or an image is AI-generated focuses on corroboration rather than one score.",
    ] },
    { heading: "How provenance records add context", paragraphs: [
      "A provenance record can document a file's origin or subsequent edits, often using signed statements that make unauthorised changes easier to detect. This is different from inferring origin from the pixels or wording alone. When a trusted creator or publisher signs a record, a viewer has another piece of evidence to consider.",
      "There are important limits. A valid signature shows that a particular key signed a record; it does not prove that the signer witnessed the original event or that every statement is correct. Records can also be stripped when content is copied, and people may publish media without credentials. Missing provenance is not proof of manipulation.",
    ] },
    { heading: "A newsroom or classroom workflow", paragraphs: [
      "Consider a teacher reviewing an image submitted with an assignment. A responsible process begins by checking where the student says it came from, whether the source page is credible and whether the image appears elsewhere in a different context. If provenance information exists, the teacher can examine it as supporting context; if a detector is used, its result should prompt a conversation, not become the sole evidence.",
      "A newsroom can use a similar sequence: preserve the original file, document who supplied it, seek independent confirmation and separate verified facts from uncertainty in reporting. That process protects both accuracy and people who might otherwise be wrongly accused by an automated classification.",
    ] },
    { heading: "Design systems to communicate uncertainty", paragraphs: [
      "Interfaces should avoid labels that turn a probability into a categorical verdict. Explain what was analysed, indicate when the method has limitations and show users what additional evidence could help. Where a system cannot produce a useful assessment, saying that it is inconclusive is more responsible than forcing a confident result.",
      "For product teams, this calls for evaluation across formats, languages and realistic transformations. Measure false positives as well as false negatives, since incorrectly labelling human work can cause real harm. Make it possible to challenge a result and revisit it as detection methods and content formats change.",
    ] },
    { heading: "Where blockchain fits—and where it does not", paragraphs: [
      "A blockchain may provide a shared timestamp or tamper-evident reference when several organisations need to consult the same event history. It cannot tell whether the camera captured a real event, whether a source lied or whether a published statement is accurate. Those questions depend on people, process and other evidence.",
      "Keeping sensitive media off public ledgers is also important. A system can store a limited cryptographic commitment while retaining the original content under appropriate access controls, but even that approach requires a privacy review. The related overview of practical blockchain uses beyond cryptocurrency discusses when a shared ledger is worth its trade-offs.",
    ] },
    { heading: "A careful checklist for readers and builders", paragraphs: [
      "Readers can preserve the original, identify the earliest credible source, compare independent accounts, inspect available provenance and treat detector results as one clue. Builders can make those checks easier by presenting the origin of a result, protecting submitted files, setting realistic expectations and avoiding claims that exceed what the system measures.",
      "This balanced approach is relevant to my work on VerifiAI: helping people examine digital content while keeping the distinction between a useful signal and proof clear. Trust grows when tools state their boundaries, provide context and leave room for informed human judgement.",
    ] },
  ], references: [
    { label: "C2PA: Content Provenance and Authenticity Specifications", url: "https://c2pa.org/specifications/" },
    { label: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
  ], related: [
    { label: "How to check if text or an image is AI-generated", url: "/blog/how-to-check-if-text-or-image-is-ai-generated" },
    { label: "What is VerifiAI and why I built it", url: "/blog/what-is-verifiai" },
    { label: "The future of blockchain", url: "/blog/future-of-blockchain-beyond-cryptocurrency" },
  ] },
  { date: "2026-10-01", label: "1 Oct", slug: "what-is-verifiai", title: "What is VerifiAI and why I built it", image: "/img/santosh-poudel-web-developer-nepal.jpg", imageAlt: "Santosh Poudel, computer engineer and developer from Nepal", topics: ["VerifiAI", "AI"], body: [
    "VerifiAI is a platform that helps people identify AI-generated content, detect manipulated media and verify digital trust. I built it for creators, educators, journalists and businesses who need a quick way to examine what they are reading or sharing."
  ], sections: [
    { heading: "The problem I wanted to explore", paragraphs: [
      "Digital content can now be generated, edited and reshared quickly. A reader may see a striking image or a polished passage without knowing who first published it, what context was removed or whether it has been altered. That uncertainty does not mean every unfamiliar item is false; it means people need practical ways to examine the evidence before relying on it.",
      "I started VerifiAI to explore this problem through a product rather than treating it only as an abstract debate about artificial intelligence. The aim is to make content assessment more approachable for people who have a real reason to check an item, while staying clear that no automated service can reconstruct every part of a file's history."
    ] },
    { heading: "Who the product is for", paragraphs: [
      "A teacher might want to discuss the origin of an image used in a lesson. A journalist may need to organise questions about a photo received from a source. A creator may want to understand how an automated tool evaluates a piece of work. A business may need a repeatable first step when reviewing material that will be shared publicly.",
      "These situations are different, so the product should not imply that one score answers every question. The user needs context about what was checked and a sensible next step. Human review, the source of the material and the stakes of the decision all affect what a result should mean."
    ] },
    { heading: "What a responsible check can do", paragraphs: [
      "A content-checking service can help organise a review and offer signals that deserve attention. It can make an unfamiliar workflow easier to start, and it can remind users to look at source, context and available evidence rather than relying on a first impression. That can be useful even when the final answer remains uncertain.",
      "The result should be treated as one part of a larger assessment. A detector's estimate is not proof of authorship, intent or truth. A signed provenance record may provide information about origin or edits, but it does not certify that a claim in the content is accurate. This distinction is central to the article on content provenance and verification."
    ] },
    { heading: "Why clarity matters more than a bold score", paragraphs: [
      "People often want a simple yes-or-no answer, especially when they are under time pressure. But a confident label can create harm if the underlying method is uncertain or the material has been changed in ways the system does not handle well. An interface should explain the scope of a check and leave space for a user to consider other evidence.",
      "That principle also affects how a service describes itself. A tool can support careful assessment without claiming to be an authority on who made something. The practical guide on checking whether text or an image is AI-generated offers a step-by-step approach that does not treat any single signal as conclusive."
    ] },
    { heading: "Building for different kinds of content", paragraphs: [
      "Text, still images and other media have different properties. A method that looks for patterns in one format cannot automatically be assumed to work for another. Even within a format, edits, compression, translation or a change in the generation tools can alter what an assessment sees. Product teams need to define the material their system is intended to handle and test the boundaries.",
      "The same care applies to accessibility and usability. Instructions should use clear language, work on small screens and tell users what information they are being asked to provide. If people cannot understand the process or its limitations, a technically sophisticated result will not create trustworthy use."
    ] },
    { heading: "Privacy and responsible use", paragraphs: [
      "Content can contain private details even when a user is mainly interested in whether it was generated or altered. Before submitting a document or image to any online service, consider whether it includes personal information, confidential work or material the user does not have permission to share. A product should explain its data handling in language people can find and understand.",
      "The stakes matter too. A casual curiosity check is different from a decision that could affect someone's education, employment, reputation or safety. Automated results should not be used as the sole basis for serious accusations or penalties. The more consequential the decision, the more important it is to verify context and seek appropriate human review."
    ] },
    { heading: "What I want the project to teach me", paragraphs: [
      "Working on VerifiAI is a way to explore how software can make a complicated technical topic more usable. The challenge is not just presenting a model output; it is designing a complete experience around expectations, uncertainty, privacy and the user's next action. Those product questions are as important as the underlying technology.",
      "I will continue to treat these ideas as a learning and building process rather than claiming that one tool solves misinformation. For broader context, see the article on why AI content detection matters and the discussion of responsible AI product design."
    ] },
    { heading: "Explore the project", paragraphs: [
      "VerifiAI is a separate product site from this personal portfolio. Visit the VerifiAI product site at santoshpoudel06.com.np to explore the project itself. This site remains the place for my background, other projects and writing about software and technology.",
      "The purpose of this article is to explain why I chose to work in this problem space, not to promise a particular detection outcome. If you use any content-analysis tool, combine it with source checking, independent context and your own careful judgement."
    ] },
  ], related: [
    { label: "AI, blockchain and content provenance", url: "/blog/ai-blockchain-and-digital-content-provenance" },
    { label: "Why AI content detection matters", url: "/blog/why-ai-content-detection-matters" },
    { label: "How to check if text or an image is AI-generated", url: "/blog/how-to-check-if-text-or-image-is-ai-generated" },
    { label: "VerifiAI", url: LINKS.verifiai },
  ] },
  { date: "2026-09-29", label: "29 Sep", slug: "how-to-check-if-text-or-image-is-ai-generated", title: "How to check if text or an image is AI-generated", metaTitle: "How to Check Text or Images for AI", image: "/img/santosh-poudel-close-up.jpg", imageAlt: "Close-up portrait of web developer Santosh Poudel", topics: ["AI", "VerifiAI"], body: [
    "Look at the source first, then examine context and available provenance. A detector can be one signal, but its result is not proof of who created the content or whether it is true."
  ], sections: [
    { heading: "Start with the source and the claim", paragraphs: [
      "Before opening a detector, write down what you are trying to establish. Are you checking whether a named publisher released an image, whether a quote appears in its original context, or whether a file may have been generated or edited? Those are different questions and need different evidence. A tool cannot answer a question it was not designed to test.",
      "Find the earliest credible source you can. Follow links back to the publisher, check the date and read surrounding material rather than relying on a cropped screenshot. If the content makes a factual claim, look for independent reporting or primary documents that support that claim. A generated image can illustrate a true story, and an authentic photograph can be paired with a false caption."
    ] },
    { heading: "Review text carefully", paragraphs: [
      "For a passage of text, examine its source, author information and publication context. Search distinctive phrases to see whether the same wording appeared earlier, and compare cited references with the claims they are meant to support. A bibliography can look plausible while linking to unrelated or nonexistent material, so check a few sources directly.",
      "Writing style alone is weak evidence. Human writers may use regular structure or polished grammar, while generated text can be edited to sound personal. If the question concerns school or workplace rules, follow the organisation's stated review process and discuss concerns with the author. Do not treat a detector score as a reliable identity test."
    ] },
    { heading: "Inspect an image without overinterpreting artifacts", paragraphs: [
      "Look at the whole image and then examine details that matter to the claim: signs, reflections, shadows, edges, text and the relationship between people and objects. Inconsistent details can be a reason to investigate further, but they are not decisive. Compression, resizing, unusual lighting and image editing can create artifacts in genuine photographs.",
      "A reverse-image search can help find earlier appearances or a different caption. Compare the result with the original source and note whether the file was cropped or altered. If the image is important, seek another photograph, a video, a witness or a statement from the publisher rather than relying on one visual clue."
    ] },
    { heading: "Check metadata and provenance when available", paragraphs: [
      "Some files retain camera details, timestamps or signed provenance credentials. These may help explain how a file was created or edited, but metadata can be removed or changed and does not automatically prove that a scene is genuine. A valid signature can show that a particular key signed a record; it cannot confirm every factual statement in that record.",
      "If no provenance information is present, do not infer that the item is fake. Platforms often strip metadata during upload, and many ordinary creators do not attach credentials. The overview of AI, blockchain and content provenance explains how these records complement, rather than replace, source verification."
    ] },
    { heading: "Use automated detectors as a limited signal", paragraphs: [
      "If you choose to use a detector, check what kind of content it accepts, whether it explains uncertainty and whether the service describes relevant limitations. Avoid submitting confidential documents or private images to a service unless you understand its data handling and have permission to share the material.",
      "Interpret the output as a prompt for further review, not a verdict. Different systems can disagree, and performance can change with language, editing, compression and newer generation methods. A low score does not establish that content is human-made; a high score does not identify the person who generated it."
    ] },
    { heading: "A practical example: a viral disaster photo", paragraphs: [
      "Suppose a dramatic image is shared with a claim that it shows a current event in Nepal. First locate the account that posted it and preserve the exact claim and date. Search for the image or distinctive details to see whether it appeared in an older article, another country or a different event. Compare the landscape, signage and weather with reliable coverage.",
      "Then look for original reporting, statements from people at the scene or additional images from independent sources. A detector might flag the picture for closer inspection, but it cannot establish where or when it was taken. Keep a note of what you confirmed, what remains uncertain and why you reached your conclusion."
    ] },
    { heading: "Match the evidence to the stakes", paragraphs: [
      "A quick personal check and a decision about someone's reputation require different levels of care. If a result could affect a student's grade, a worker's job or a public allegation, do not rely on one automated signal. Preserve relevant material, follow a fair process, allow the person to respond and consult an appropriate expert when needed.",
      "For publishers, a correction can be as important as the initial verification. If later evidence changes the assessment, update the conclusion and explain what changed. Responsible verification is a repeatable method, not a promise that every ambiguous file can be classified."
    ] },
    { heading: "A concise checklist", paragraphs: [
      "Identify the exact question; trace the source; read the context; compare independent evidence; inspect available provenance; use a detector only if it is suitable; protect private data; and communicate uncertainty. Save a record of the original item and its source when the matter is important, since links and copies can change or disappear.",
      "These principles guide the problem area behind VerifiAI and the broader discussion of why AI content detection matters. The goal is not to label everything quickly; it is to make a careful, proportionate judgement using evidence that fits the question."
    ] },
  ], related: [
    { label: "Why AI content detection matters", url: "/blog/why-ai-content-detection-matters" },
    { label: "AI, blockchain and content provenance", url: "/blog/ai-blockchain-and-digital-content-provenance" },
    { label: "What is VerifiAI and why I built it", url: "/blog/what-is-verifiai" },
  ] },
  { date: "2026-09-27", label: "27 Sep", slug: "web-design-tips-for-beginners-in-nepal", title: "Web design tips for beginners in Nepal", image: "/img/santosh-poudel-close-up.png", imageAlt: "Portrait photo from Santosh Poudel's gallery", topics: ["web development", "Nepal"], body: [
    "Start with a clear purpose, semantic HTML, and a layout that works on a phone. A fast, understandable site is more useful than a flashy interface that hides its content or makes basic tasks difficult."
  ], sections: [
    { heading: "Begin with a real user and a clear goal", paragraphs: [
      "Before choosing colours or animation, decide what a visitor should be able to do. A portfolio might help someone understand your work and contact you; a small shop might make products and delivery details easy to compare. Write down the main audience, their likely questions and the one or two actions the page should support.",
      "This small planning step keeps a beginner project focused. A landing page does not need every feature found on a large platform. Build the shortest useful path first, then add only the information and interactions that make that path clearer. Ask someone unfamiliar with the project to try it and note where they hesitate."
    ] },
    { heading: "Use semantic structure and readable content", paragraphs: [
      "HTML gives content meaning as well as appearance. Use headings in a logical order, navigation for site links, buttons for actions and links for destinations. A page with a clear heading structure is easier to scan, navigate with assistive technology and maintain than one made from generic containers with styling alone.",
      "Write labels that explain what a control does. Replace vague link text such as “click here” with a destination or action, and provide useful alternative text for meaningful images. If an image is purely decorative, do not force screen-reader users through a description that adds no information."
    ] },
    { heading: "Design for small screens first", paragraphs: [
      "A responsive layout should remain usable at narrow widths, not simply shrink a desktop design. Start with one column, comfortable text size and controls that can be tapped without precision. Then add wider-screen layouts where they improve the experience. Check long headings, navigation, forms and image crops rather than reviewing only the first screen.",
      "People access websites in varied network conditions and on different devices. Avoid making essential information depend on a hover state, since touch users may not have one. Test the page with the browser width reduced, zoomed text and keyboard navigation so problems are caught before launch."
    ] },
    { heading: "Make performance a design decision", paragraphs: [
      "Large images, unnecessary scripts and too many custom fonts can delay the first useful view. Resize images to the largest size they will actually be displayed, choose a suitable modern format where supported and load below-the-fold images only when they are needed. Keep the number of third-party widgets low, since each one adds code and can introduce another failure point.",
      "Measure rather than guessing. Use browser developer tools or a web performance report to identify the slow resource, then test one change at a time. A smaller image may help more than a complex code optimisation, while a script that blocks rendering may deserve attention before decorative details."
    ] },
    { heading: "Make navigation and interaction predictable", paragraphs: [
      "Visitors should be able to find the main pages and understand where each link leads. Use a consistent header and footer, descriptive labels and a visible focus style. Forms should say which fields are required, explain errors near the relevant input and preserve values when a submission needs correction.",
      "Motion can add feedback, but it should not be required to understand the page. Keep transitions brief, avoid flashing effects and respect reduced-motion preferences. A hover animation should have an equivalent focus treatment for keyboard users, and touch users should still be able to reach the same information."
    ] },
    { heading: "Build a basic search-friendly foundation", paragraphs: [
      "Give every important page a distinct title and a concise description that accurately summarises its content. Use one clear H1, descriptive internal links and a canonical URL when the framework supports it. Search engines need crawlable links and accessible page content; metadata cannot compensate for a page that is empty, confusing or difficult to navigate.",
      "Write for the visitor first. A service page should explain the service, audience and next step, while an article should answer a particular question with useful detail. Avoid repeating a keyword in every heading or publishing nearly identical pages for small wording variations."
    ] },
    { heading: "Test with realistic content and devices", paragraphs: [
      "A layout that looks correct with short placeholder text can break when a real title wraps onto three lines or a form displays an error. Test long names, missing images, empty results and unusually long links. Check contrast, keyboard access, headings and form labels, and make sure the page still has a clear purpose if a decorative asset fails to load.",
      "Ask another person to complete a simple task without instructions. Watch where they look and what they try; do not explain the interface while they are testing. Their confusion points to a content or design issue you can improve before release."
    ] },
    { heading: "Publish carefully and keep learning", paragraphs: [
      "Before deployment, check internal links, page titles, image loading, mobile navigation and the production build. Keep a copy of important content and know how to roll back a broken release. After publishing, review real feedback and measurements rather than assuming the first version is finished.",
      "For an example of learning software foundations through practical projects, read the article on starting with a computer engineering diploma. The best beginner workflow is incremental: make one improvement, test it with a real user and keep the parts that make the site clearer and more dependable."
    ] },
  ], related: [
    { label: "Starting with a computer engineering diploma", url: "/blog/starting-with-a-computer-engineering-diploma" },
    { label: "The future of AI", url: "/blog/future-of-artificial-intelligence" },
  ] },
  { date: "2026-09-18", label: "18 Sep", slug: "why-ai-content-detection-matters", title: "Why AI content detection matters", image: "/img/santosh-poudel-ai-developer-verifiai-founder.jpg", imageAlt: "Santosh Poudel, AI developer and founder of VerifiAI", topics: ["AI", "VerifiAI"], body: [
    "AI can generate essays, images and other media quickly. Readers, teachers and editors need ways to assess what they are looking at, but detection tools provide signals rather than definitive proof and should be combined with context and human judgement."
  ], sections: [
    { heading: "More content means more questions about origin", paragraphs: [
      "Generative tools make it easier to produce text and images, and content can be copied or edited many times before a reader encounters it. People may reasonably want to know whether a source is authentic, whether an image has been changed or whether a passage reflects a writer's own work. Those questions affect classrooms, publishing, media and everyday online conversations.",
      "The challenge is that origin is not always visible from the final file. A polished paragraph does not prove that a model wrote it, and an image artifact does not prove that the whole picture is fabricated. Detection can be one part of a review, but it cannot replace evidence about source, context and process."
    ] },
    { heading: "Different settings have different needs", paragraphs: [
      "A reader checking a viral image may need to find its earliest appearance and compare credible reporting. A teacher may need to explain assignment expectations and ask a student about their drafting process. An editor may need to verify sources and retain a record of how a claim was checked. A single detector score does not answer all of these distinct questions.",
      "The person making a decision should identify the stakes before choosing a method. A low-consequence curiosity check may call for a quick source search. An allegation that could damage someone's reputation requires a fair, documented process and evidence beyond automated classification."
    ] },
    { heading: "False positives can cause real harm", paragraphs: [
      "A false positive labels human-created work as AI-generated. It can undermine a student's effort, damage a creator's credibility or encourage a publisher to reject authentic reporting. A false negative can also mislead users by suggesting that generated material is human-made. Both error types matter, and their rates can vary with language, genre, editing and the system being used.",
      "This is why a tool's output should not be presented as certainty. People need to know what was analysed, what the method can miss and how to challenge a result. When a decision affects a person's opportunities, an independent review and an opportunity to respond are more responsible than an automatic penalty."
    ] },
    { heading: "Detection and provenance answer different questions", paragraphs: [
      "Detection estimates whether content resembles patterns associated with generated material. Provenance records information about origin or edits, often through signed credentials. Neither provides a complete guarantee: detection can be uncertain, while a signed record depends on the credibility of the signer and the accuracy of the information supplied.",
      "A provenance record can still be useful when it is present and verifiable. Its absence is not proof of deception, since ordinary publishing and social platforms may strip metadata. The article on AI, blockchain and content provenance explains why these methods should be treated as complementary evidence."
    ] },
    { heading: "A careful assessment is a sequence, not a button", paragraphs: [
      "Start with the original source and the claim being made. Check surrounding context, date and author information; look for independent confirmation; inspect available provenance; and use an appropriate detector only as one limited signal. Keep a record of what was checked if the conclusion matters to other people.",
      "The practical guide on checking whether text or an image is AI-generated walks through those steps in more detail. Its central lesson is to match the evidence to the question rather than expecting a tool to deliver an answer it cannot support."
    ] },
    { heading: "Privacy and proportionality matter", paragraphs: [
      "Submitting a file to an online service may expose personal or confidential material. Before uploading, check whether the content includes private information, whether you have permission and how the service handles it. For an organisation, establish a policy for retention, access and acceptable use before employees or students are asked to submit work.",
      "Use the least intrusive method that can answer the question. A public source search may be enough to identify an old image; a private document should not be sent to an unknown service simply because it is available. If the evidence remains uncertain, saying so is a valid outcome."
    ] },
    { heading: "What responsible tools should communicate", paragraphs: [
      "A helpful product explains its purpose, input requirements, uncertainty and limitations in plain language. It should not imply that a score proves authorship, truthfulness or intent. It should also give people a route to review or question results, particularly when they are used in an important decision.",
      "Builders can evaluate performance on varied real-world material, measure false positives and negatives, and revisit results as content and generation methods change. These responsibilities are part of designing a product, not optional disclaimers added after launch."
    ] },
    { heading: "The goal is better judgement", paragraphs: [
      "Content assessment is not about distrusting every image or treating every writer as suspicious. It is about having a sound process for cases where origin matters, and being honest when evidence is incomplete. People can make better decisions when tools support investigation rather than replacing it.",
      "This is the problem space behind VerifiAI, a project I founded to explore content checks and digital trust. The broader discussion of responsible AI development also applies: useful systems should clarify uncertainty, protect people and remain accountable for their limits."
    ] },
  ], related: [
    { label: "How to check if text or an image is AI-generated", url: "/blog/how-to-check-if-text-or-image-is-ai-generated" },
    { label: "What is VerifiAI and why I built it", url: "/blog/what-is-verifiai" },
    { label: "AI, blockchain and content provenance", url: "/blog/ai-blockchain-and-digital-content-provenance" },
  ] },
  { date: "2026-09-10", label: "10 Sep", slug: "starting-with-a-computer-engineering-diploma", title: "Starting with a computer engineering diploma", metaTitle: "Computer Engineering Diploma Journey", image: "/img/santosh-poudel-natural-light.jpg", imageAlt: "Santosh Poudel photographed in natural light", topics: ["computer engineering", "Nepal", "web development"], body: [
    "A computer engineering diploma can combine theory with practical work across programming, electronics, networks and databases. Building small projects alongside coursework helps connect those subjects and makes it easier to see how technical ideas become working systems."
  ], sections: [
    { heading: "Start with fundamentals and curiosity", paragraphs: [
      "A broad technical course introduces concepts that may not appear connected at first. Programming teaches how to express a process precisely; electronics helps explain how physical components behave; networks show how systems exchange information; and databases organise records so an application can use them. Understanding the basics makes it easier to learn a new tool later.",
      "It is normal for some subjects to feel abstract before they have a practical context. Keep a list of questions as you study and look for a small experiment that makes one idea visible. A short program, a simple circuit simulation or a local database can turn a definition into something you can test."
    ] },
    { heading: "Use projects to connect ideas", paragraphs: [
      "A small project gives a learner a reason to combine concepts. For example, a basic inventory application can involve a form, input validation, a data model and a clear screen for reviewing saved records. The purpose is not to make a production system on the first attempt; it is to understand the path from a user's action to the information stored and displayed.",
      "Keep the scope small enough to finish. Write down what the project should do, build one useful feature, test it with sample data and note what you would improve. Completing a modest project teaches planning and debugging, while an oversized unfinished idea often leaves fewer concrete lessons."
    ] },
    { heading: "Practise programming by explaining your choices", paragraphs: [
      "When learning a language, do more than copy a working example. Change an input, predict what the program should do, run it and compare the result. Read error messages carefully and reduce a bug to the smallest example that still reproduces it. This habit builds problem-solving skills that transfer between frameworks and programming languages.",
      "Comments and documentation should explain intent rather than repeat the syntax. A short note about why a validation rule exists can help a future reader; a comment that simply restates the next line usually adds little. Clear names, small functions and a basic test make a beginner project easier to extend."
    ] },
    { heading: "Learn the supporting engineering habits", paragraphs: [
      "Software work includes more than writing code. Version control helps track changes and recover from mistakes; a README explains how another person can run a project; and a simple test checks that an important behaviour still works after an edit. These habits can be introduced on a small personal project before they are needed in a larger team.",
      "Keep your work organised and avoid putting passwords, private keys or personal data into a public repository. If you use a library or tutorial, understand the licence and acknowledge the source where appropriate. Responsible habits are easier to maintain when they are part of the first project rather than something added under pressure."
    ] },
    { heading: "Balance coursework with independent practice", paragraphs: [
      "Classes provide structure and a path through core topics, while independent projects give you room to follow questions that interest you. A realistic weekly routine might set aside a short period to review class notes, another to practise a skill and a separate session to improve one project feature. Regular progress is more sustainable than waiting for a perfect block of free time.",
      "Keep a learning log with the problem, what you tried, the result and the next question. This makes it easier to return after a break and helps you see how your understanding changes. It can also become a useful record when you describe a project, because you can explain the problem and decisions rather than listing technologies alone."
    ] },
    { heading: "Develop a web project step by step", paragraphs: [
      "A beginner website is a practical way to combine programming, design and communication. Begin with semantic HTML and meaningful content, add styles for a clear reading order, then make the layout work on a narrow screen. Add interactions only when they help a visitor complete a task, and test navigation with both a keyboard and a touch device.",
      "The companion article on web design tips for beginners in Nepal covers responsive layouts, accessibility and performance. Together, these skills show why a website is not just a visual page: it is a system that must communicate well, load reliably and work for different people."
    ] },
    { heading: "Ask for feedback and improve deliberately", paragraphs: [
      "A project can seem obvious to its creator because they know how it is meant to work. Ask another person to use it without coaching and observe where they pause, choose the wrong control or misunderstand a label. Treat that behaviour as useful evidence about the interface, not as a failure by the person testing it.",
      "Prioritise fixes that block the main task, then address clarity, accessibility and polish. Keep a record of what changed and why. This creates a thoughtful development process and makes it easier to explain your work to classmates, collaborators or future reviewers."
    ] },
    { heading: "Build a portfolio of evidence, not claims", paragraphs: [
      "A small portfolio can show projects, source code, screenshots and concise notes about decisions and limitations. Be accurate about your role, list what works and identify what is still a learning project. A clear demonstration is more credible than a broad statement that cannot be checked.",
      "Public repositories and project write-ups can also help you learn from feedback. Protect credentials, review what information is visible and keep descriptions current. The goal is to make your learning legible to others, not to imply professional experience or results you have not earned."
    ] },
    { heading: "Keep the learning process sustainable", paragraphs: [
      "Technology changes quickly, but foundational skills remain useful: breaking down problems, reading documentation, testing assumptions and explaining trade-offs. You do not need to learn every framework at once. Choose a tool for a project, understand its basic model and finish a small piece of work before adding another layer.",
      "My own interest in web development and AI grows from this habit of learning by building. For a related look at how technical ideas become usable products, read the article on what VerifiAI is and why I built it. A diploma is one part of a longer journey; steady practice and honest reflection help turn its foundations into useful work."
    ] },
  ], related: [
    { label: "Web design tips for beginners in Nepal", url: "/blog/web-design-tips-for-beginners-in-nepal" },
    { label: "What is VerifiAI and why I built it", url: "/blog/what-is-verifiai" },
  ] },
  { date: "2026-10-29", label: "29 Oct", slug: "building-dexbotx-discord-bot", title: "Building DexBotX: a Discord bot for server automation", metaTitle: "Building DexBotX: Discord Automation", image: "/img/dexbotx-discord-automation.png", imageAlt: "Screenshot of the DexBotX Discord dashboard with welcome-message settings and a live preview", topics: ["DexBotX", "Discord", "automation", "web development"], body: [
    "DexBotX is a Discord bot project built around a practical idea: community teams should be able to handle common server tasks without juggling a separate tool for every job. It brings moderation, welcome flows, role automation, AI chat and creator notifications together with an admin dashboard.",
  ], sections: [
    { heading: "Start with the work community admins repeat", paragraphs: [
      "Running a Discord community involves a steady stream of small tasks. Administrators welcome new people, keep conversations healthy, assign roles and help members find the right information. When those jobs are handled through separate tools or repeated manually, routine maintenance can take attention away from the community itself.",
      "DexBotX brings several of these workflows into one bot. The aim is not to automate every decision, but to make recurring tasks easier to manage while leaving community rules and important moderation choices in the hands of the people responsible for the server.",
    ] },
    { heading: "Moderation and onboarding", paragraphs: [
      "Moderation tools and anti-spam support help administrators respond to unwanted activity. Welcome flows give new members a more consistent introduction, while role automation can reduce repetitive setup for people joining or participating in a server.",
      "These features work best when they support clear community rules. Automation can handle predictable cases, but admins still need visibility and control when context matters. A bot should help a team maintain its space, not make every community decision on its behalf.",
    ] },
    { heading: "Keep the community connected to creator updates", paragraphs: [
      "DexBotX includes notifications for YouTube and Kick activity. That gives a server a way to surface updates from creators its members care about without requiring everyone to monitor each platform separately.",
      "Notifications are most useful when they are relevant and configured for the community. The broader product goal is to bring these updates into the space where members already talk, while keeping them distinct from moderation and member-management tools.",
    ] },
    { heading: "AI chat as one feature, not the whole product", paragraphs: [
      "AI chat is part of DexBotX, but the project is not just a chatbot. It combines that interaction with server administration features such as moderation, onboarding and role automation, plus social notifications.",
      "Keeping AI chat alongside these workflows makes it one optional capability within a wider community tool. As with any AI feature, responses should be treated as generated assistance rather than guaranteed facts, and server owners should decide how it fits their community.",
    ] },
    { heading: "A dashboard for the people running the server", paragraphs: [
      "The admin web dashboard gives server owners a place to manage the bot beyond the Discord conversation itself. A dedicated configuration surface can make settings easier to find and helps separate administration from the messages members see every day.",
      "This division reflects a simple product principle: member-facing interactions and administrative controls serve different audiences. The bot handles community workflows in Discord, while the dashboard supports the people configuring those workflows.",
    ] },
    { heading: "What I learned from bringing the pieces together", paragraphs: [
      "A multi-purpose bot needs a clear structure so each capability remains understandable. Moderation, onboarding, notifications and AI chat solve different problems; grouping them under one product is useful only when people can still find the right tool and understand what it does.",
      "DexBotX is an ongoing product project, and its feature set can evolve. You can visit the project site to see its current state, or read more about my other work on the projects page.",
    ] },
  ], related: [
    { label: "Explore the DexBotX project", url: "/projects/dexbotx" },
    { label: "Browse all projects", url: "/projects" },
    { label: "The future of AI", url: "/blog/future-of-artificial-intelligence" },
  ] },
];

export const social = [
  { label: "VerifiAI", href: LINKS.verifiai },
  { label: "DexbotX", href: LINKS.dexbotx },
  { label: "GitHub", href: LINKS.github },
  { label: "Facebook", href: LINKS.facebook },
  { label: "YouTube", href: LINKS.youtube },
  { label: "Web3", href: LINKS.brave },
];

export const BLOG_CONTENT_LAST_MODIFIED = posts
  .map(({ date, modified }) => modified ?? date)
  .sort()
  .at(-1);

// TODO: add the verified LinkedIn profile URL when provided.

export const faq = [
  { q: "Who is Santosh Poudel?", a: "Santosh Poudel is a full-stack web and AI developer from Nepal. He builds SaaS products, AI tools, and Discord applications including DexBotX." },
  { q: "What does Santosh Poudel do?", a: "He builds full-stack web products, SaaS services, AI tools such as VerifiAI, and Discord bots such as DexBotX. He is also learning blockchain development with Ethereum, Sui, and Solana." },
  { q: "Where is Santosh Poudel from?", a: "Santosh Poudel is a full-stack web and AI developer from Nepal." },
  { q: "Where does Santosh Poudel live?", a: "Santosh Poudel is based in Kathmandu, Nepal." },
  { q: "Where does Santosh Poudel work?", a: "His published profile does not name a current employer. It describes his work building web products, SaaS services, AI tools, and Discord bots." },
  { q: "What is VerifiAI?", a: "VerifiAI is a project founded by Santosh Poudel that explores ways to assess digital content using source context and provenance. Detector results are not conclusive proof of authorship or truth." },
  { q: "What is DexBotX?", a: "DexBotX is a Discord bot project with moderation, welcome flows, role automation, AI chat, creator notifications, and an admin dashboard." },
  { q: "What is Santosh Poudel's GitHub?", a: "Find Santosh Poudel's code and projects on GitHub.", href: LINKS.github, linkText: "Visit GitHub" },
];

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "Santosh Poudel",
  alternateName: ["Santosh Poudel Portfolio", "Santosh", "santosh2.com.np"],
  inLanguage: "en",
  publisher: { "@id": `${SITE}/#person` },
};

export const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE}/#person`,
  name: "Santosh Poudel",
  givenName: "Santosh",
  familyName: "Poudel",
  url: SITE,
  image: `${SITE}/img/santosh-poudel-web-developer-nepal.jpg`,
  alternateName: [
    "Santosh",
    "santoshpoudel",
    "सन्तोष पौडेल",
    "Santosh Paudel",
    "Santosh Poudle",
    "Santosh Podul",
    "Santosh Poudell",
    "Santosh Pouydal",
    "Santos Powdel",
    "Santosh Paudyal",
  ],
  jobTitle: "Full-stack Web Developer and AI Developer",
  description: BIO_LONG,
  nationality: { "@type": "Country", name: "Nepal" },
  homeLocation: { "@type": "Place", name: "Kathmandu, Nepal" },
  knowsAbout: ["Web development", "Full-stack development", "SaaS development", "Artificial intelligence", "AI tools", "Discord bots", "Blockchain development", "Ethereum", "Sui", "Solana", "Next.js", "React"],
  address: { "@type": "PostalAddress", addressLocality: "Kathmandu", addressCountry: "NP" },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Diploma",
    name: "Computer Engineering diploma",
  },
  // TODO: add the educational institution to alumniOf when its name is confirmed.
  // TODO: add an employer to worksFor when confirmed.
  // TODO: add other verified profile URLs to sameAs when provided.
  sameAs: [LINKS.github, LINKS.youtube, LINKS.facebook, LINKS.verifiai, LINKS.brave],
};

export const verifiaiOrganizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${LINKS.verifiai}/#organization`,
  name: "VerifiAI",
  url: LINKS.verifiai,
  founder: { "@id": `${SITE}/#person` },
};

// Shared class strings
export const S = "mx-auto max-w-[1400px] border-t border-line px-[clamp(18px,4vw,48px)] py-[clamp(80px,14vh,170px)] max-md:py-[clamp(36px,6vh,64px)]";
export const LAB = "mb-7 flex items-center gap-3.5 font-semibold text-hot before:h-[1.5px] before:w-[46px] before:bg-hot before:content-['']";
export const BIG = "font-display text-[clamp(1.7rem,4.6vw,4rem)] font-extrabold leading-[1.12] tracking-[-.025em]";

export const PAGE = "mx-auto w-full px-[clamp(18px,4vw,48px)] pb-24 pt-32";
export const LINK = "text-hot underline underline-offset-4";
