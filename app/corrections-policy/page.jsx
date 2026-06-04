import { FaEnvelope } from "react-icons/fa";

const SITE_URL = "https://www.theglamgaze.com";
const PAGE_URL = `${SITE_URL}/corrections-policy`;
const SITE_NAME = "GLAM GAZE";
const PAGE_TITLE = "Corrections Policy — GLAM GAZE";
const PAGE_DESCRIPTION =
  "Learn how GLAM GAZE handles corrections, updates, reader feedback, and editorial accountability.";

const IMAGE = `${SITE_URL}/glam_gaze.png`;

export async function generateMetadata() {
  return {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: PAGE_URL,
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      type: "website",
      siteName: SITE_NAME,
      images: [
        {
          url: IMAGE,
          width: 1200,
          height: 630,
          alt: PAGE_TITLE,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@theglamgaze",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      images: [IMAGE],
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      inLanguage: "en-US",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      about: {
        "@type": "Thing",
        name: "Corrections Policy",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Corrections Policy",
            item: PAGE_URL,
          },
        ],
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      contactPoint: {
        "@type": "ContactPoint",
        email: "corrections@theglamgaze.com",
        contactType: "corrections",
        availableLanguage: "English",
      },
    },
  ],
};

export default function CorrectionsPolicy() {
  const correctionItems = [
    "Names",
    "Dates",
    "Locations",
    "Quotes",
    "Brand information",
    "Product details",
    "Context and reporting inaccuracies",
  ];

  return (
    <>
        {/* ── JSON-LD Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

      <main className="min-h-screen bg-white text-black">
        {/* HERO */}
        <section className="px-6 md:px-16 py-24 border-b border-black">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              Corrections Policy
            </p>

            <h1
              className="text-5xl md:text-7xl font-serif font-light leading-none"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Accountability
              <br />
              Matters
            </h1>

            <div className="mt-8 w-12 h-px bg-[#b8972e]" />

            <p className="mt-8 text-lg text-neutral-600 leading-8 max-w-3xl">
              Accuracy is not optional. We aim to make sure every article is
              factually accurate and up to date. If we make a mistake, we
              correct it quickly and transparently.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-6 md:px-16 py-24 border-b border-black">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[250px_1fr] gap-12">
              <div>
                <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] font-medium">
                  Our Process
                </p>

                <h2
                  className="mt-4 text-4xl font-serif"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  How Corrections
                  <br />
                  Are Handled
                </h2>
              </div>

              <div>
                <p className="text-neutral-600 text-lg leading-8">
                  Confirmed factual errors are updated as soon as possible.
                  Every correction is reviewed by our editorial team to ensure
                  accuracy and clarity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORRECTIONS LIST */}
        <section className="px-6 md:px-16 py-24 border-b border-black">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              Corrections May Include
            </p>

            <h2
              className="text-4xl md:text-5xl font-serif font-light mb-16"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Details Matter
            </h2>

            <ul className="list-disc space-y-4">
              {correctionItems.map((item) => (
                <li key={item}>
                  <p className="text-xl">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* POLICY SECTIONS */}
        <section className="px-6 md:px-16 py-24">
          <div className="max-w-5xl mx-auto space-y-20">
            <div className="grid md:grid-cols-[240px_1fr] gap-10">
              <h3
                className="text-3xl font-serif"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Updating Stories
              </h3>

              <p className="text-neutral-600 text-lg leading-8">
                Fashion and entertainment stories can change rapidly. When there
                is new major information, stories may be updated to reflect the
                latest developments.
              </p>
            </div>

            <div className="grid md:grid-cols-[240px_1fr] gap-10">
              <h3
                className="text-3xl font-serif"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Reader Feedback
              </h3>

              <p className="text-neutral-600 text-lg leading-8">
                Readers help strengthen our journalism. If you believe an
                article contains an error, we encourage you to contact our
                editorial team for review.
              </p>
            </div>

            <div className="grid md:grid-cols-[240px_1fr] gap-10">
              <h3
                className="text-3xl font-serif"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Transparency
              </h3>

              <p className="text-neutral-600 text-lg leading-8">
                We do not quietly alter major factual mistakes. When meaningful
                corrections are made, we aim to ensure readers understand what
                changed and why.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL STATEMENT */}
        <section className="border-t border-black px-6 md:px-16 py-28">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              Keeping Trust
            </p>

            <h2
              className="text-4xl md:text-6xl font-serif font-light leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Trust Isn't Built
              <br />
              Through Perfection.
            </h2>

            <div className="w-12 h-px bg-[#b8972e] mx-auto my-10" />

            <p className="text-lg md:text-xl text-neutral-600 leading-9 max-w-3xl mx-auto">
              It's built through accountability.
            </p>

            <div className="mt-12 max-w-2xl mx-auto">
              <p className="text-neutral-700 text-lg leading-9">
                Our job is straightforward: report the truth, and correct it
                when that truth is revealed.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="border-t border-black px-6 md:px-16 py-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              Report an Error
            </p>

            <h2
              className="text-3xl md:text-4xl font-serif font-light mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Corrections Enquiries
            </h2>

            <p className="text-neutral-600 leading-8 text-lg max-w-2xl mb-8">
              Spotted something that doesn't look right? Reach our corrections
              team directly and we'll review it promptly.
            </p>

            <a
              href="mailto:corrections@theglamgaze.com"
              className="inline-flex items-center gap-3 text-black border border-black px-6 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-black hover:text-white transition-colors duration-300"
            >
              <FaEnvelope className="text-[#b8972e] text-base flex-shrink-0" />
              corrections@theglamgaze.com
            </a>
          </div>
        </section>
      </main>
    </>
  );
}