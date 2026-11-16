import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { CONTACT_EMAIL, LINK, SITE } from "@/lib/data";

const pageTitle = "Privacy Policy";
const title = `${pageTitle} | Santosh Poudel`;
const description =
  "Learn how the Santosh Poudel portfolio uses browser storage, processes aggregate visit statistics, and handles privacy questions.";

export const metadata: Metadata = {
  title: pageTitle,
  description,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Santosh Poudel",
    locale: "en_US",
    url: `${SITE}/privacy-policy`,
    title,
    description,
    images: [{ url: "/img/santosh-poudel-og.jpg", width: 1200, height: 630, alt: "Santosh Poudel" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/img/santosh-poudel-og.jpg"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell title={pageTitle} crumbs={[{ name: pageTitle, path: "/privacy-policy" }]}>
      <p>Last updated: <time dateTime="2026-11-16">November 16, 2026</time></p>

      <section>
        <h2>About this policy</h2>
        <p>
          This policy describes how the Santosh Poudel portfolio at santosh2.com.np handles information when you visit
          the site. It does not cover third-party websites you choose to visit through external links.
        </p>
      </section>

      <section>
        <h2>Information and site statistics</h2>
        <p>
          When Firebase is configured, the site runs a basic visitor counter. It attempts to count a visit once per
          browser per UTC day by saving that date in your browser&apos;s local storage. The counter stores aggregate
          totals by date and country code, plus a timestamp. It does not store a raw IP address or a visitor-specific
          identifier in its Firestore records. These aggregate totals are readable by the site&apos;s visitor dashboard.
        </p>
        <p>
          To estimate a country code, the browser may request country.is. That service can receive your IP address as
          part of the request and return a two-letter country code; if the lookup fails, the counter uses
          <code> XX</code>. The country lookup is not a request for precise location.
        </p>
        <p>
          The portfolio does not currently use Google Analytics or advertising pixels. It has no account registration
          or contact form; if you email <a className={LINK} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, you
          choose what to include in that message and your email provider handles its delivery.
        </p>
      </section>

      <section>
        <h2>Browser storage</h2>
        <p>The site uses browser storage for these functions:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><code>localStorage</code> saves your theme preference, whether the preloader has been shown, and the date used to limit repeat visit counts.</li>
          <li><code>sessionStorage</code> keeps the blog post slugs you have read in the current browser session so the site can recommend other posts. This reading history is not sent to the visitor counter.</li>
          <li>A service worker caches the offline page and same-site static assets so they can be available when you are offline.</li>
        </ul>
        <p>
          These features do not use an app-managed tracking cookie. You can clear browser storage or site data in your
          browser settings; doing so may reset your theme, preloader, reading recommendations, or visit-count marker.
          The visitor counter currently has no in-page opt-out. Clearing its date marker may cause a later visit to be
          counted again, and blocking local storage does not necessarily disable counting.
        </p>
      </section>

      <section>
        <h2>Service providers and external links</h2>
        <p>
          The site uses Vercel for hosting and, when configured, Google Firebase/Cloud Firestore for aggregate visit
          statistics. The country lookup is provided by country.is. These providers may process technical information
          such as connection data to operate and secure their services, under their own terms and privacy practices.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><a className={LINK} href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a></li>
          <li><a className={LINK} href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy and Security</a></li>
        </ul>
        <p>
          Links to social networks, project sites, and other services are ordinary external links. If you follow one,
          that service&apos;s privacy policy applies to your visit there.
        </p>
      </section>

      <section>
        <h2>Retention and privacy requests</h2>
        <p>
          Browser storage remains until it expires with the session or you clear it. No automatic deletion period is
          currently configured for the aggregate Firestore statistics; they may remain until manually deleted. Since
          those statistics do not identify individual visitors, a particular visit cannot be located or removed from
          the aggregate totals.
        </p>
        <p>
          For questions about this policy or a privacy request, email{" "}
          <a className={LINK} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Hosting and service-provider logs
          may have separate retention periods governed by those providers.
        </p>
      </section>

      <section>
        <h2>Updates</h2>
        <p>
          This policy may be updated when the site&apos;s data practices change. The latest revision date is shown at
          the top of this page.
        </p>
      </section>
    </PageShell>
  );
}
