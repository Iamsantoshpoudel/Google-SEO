export const SITE = "https://santosh2.com.np";
// TODO: move this contact address to the santosh2.com.np domain when one is available.
export const CONTACT_EMAIL = "hi@santoshpoudel06.com.np";

export const LINKS = {
  verifiai: "https://santoshpoudel06.com.np",
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
];

export const gallery = [
  { src: "/img/santosh-poudel-portrait.jpg", alt: "Portrait of Santosh Poudel, computer engineer from Nepal", cap: "Portrait" },
  { src: "/img/santosh-poudel-natural-light.jpg", alt: "Santosh Poudel photographed in natural light", cap: "Natural light" },
  { src: "/img/santosh-poudel-close-up.jpg", alt: "Close-up portrait of web developer Santosh Poudel", cap: "Close-up" },
];

export const projects = [
  { n: "VerifiAI", title: "VerifiAI: AI content detector", desc: "I’m building VerifiAI to explore practical ways to assess AI-generated and manipulated content.", href: LINKS.verifiai },
  { n: "Code", title: "GitHub projects", desc: "Web experiments and open source work under @iamsantoshpoudel.", href: LINKS.github },
  { n: "Video", title: "YouTube channel", desc: "Videos and tutorials on the @dexgamex1 channel.", href: LINKS.youtube },
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
  related?: BlogReference[];
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
  { date: "2026-09-29", label: "29 Sep", slug: "how-to-check-if-text-or-image-is-ai-generated", title: "How to check if text or an image is AI-generated", image: "/img/santosh-poudel-close-up.jpg", imageAlt: "Close-up portrait of web developer Santosh Poudel", topics: ["AI", "VerifiAI"], body: [
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
  { date: "2026-09-10", label: "10 Sep", slug: "starting-with-a-computer-engineering-diploma", title: "Starting with a computer engineering diploma", image: "/img/santosh-poudel-natural-light.jpg", imageAlt: "Santosh Poudel photographed in natural light", topics: ["computer engineering", "Nepal", "web development"], body: [
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
];

export const social = [
  { label: "VerifiAI", href: LINKS.verifiai },
  { label: "GitHub", href: LINKS.github },
  { label: "Facebook", href: LINKS.facebook },
  { label: "YouTube", href: LINKS.youtube },
];

// TODO: add the verified LinkedIn profile URL when provided.

export const faq = [
  { q: "Who is Santosh Poudel?", a: "Santosh Poudel is an AI developer from Nepal and the founder of VerifiAI, a platform that helps individuals and organizations identify AI-generated content, detect manipulated media and verify digital trust." },
  { q: "What does Santosh Poudel work on?", a: "His work includes AI content detection, image verification, developer tools and digital platforms that make online content safer and easier to understand for creators, educators, journalists and businesses." },
];

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#site`,
  url: `${SITE}/`,
  name: "Santosh Poudel",
  inLanguage: "en",
};

export const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE}/#person`,
  name: "Santosh Poudel",
  url: `${SITE}/`,
  image: `${SITE}/img/santosh-poudel-web-developer-nepal.jpg`,
  jobTitle: "Computer Engineer, AI Developer and Web Developer",
  description: "Santosh Poudel is a computer engineer, AI developer and web developer from Nepal and the founder of VerifiAI.",
  address: { "@type": "PostalAddress", addressCountry: "NP" },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Diploma",
    name: "Computer Engineering diploma",
  },
  // TODO: add the educational institution to alumniOf when its name is confirmed.
  sameAs: [LINKS.github, LINKS.youtube, LINKS.facebook],
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
export const S = "mx-auto max-w-[1400px] border-t border-line px-[clamp(18px,4vw,48px)] py-[clamp(80px,14vh,170px)]";
export const LAB = "mb-7 flex items-center gap-3.5 font-semibold text-hot before:h-[1.5px] before:w-[46px] before:bg-hot before:content-['']";
export const BIG = "font-display text-[clamp(1.7rem,4.6vw,4rem)] font-extrabold leading-[1.12] tracking-[-.025em]";

export const PAGE = "mx-auto max-w-[900px] px-[clamp(18px,4vw,48px)] pb-24 pt-32";
export const LINK = "text-hot underline underline-offset-4";
