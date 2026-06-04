const SITE_URL = "https://www.theglamgaze.com";
const PAGE_URL = `${SITE_URL}/source-methodology`;
const SITE_NAME = "Glam Gaze";
const PAGE_TITLE = "Source Methodology - Glam Gaze";
const PAGE_DESCRIPTION =
  "Learn how GLAM GAZE researches, verifies, fact-checks and evaluates sources before publishing stories.";
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

export default function SourceMethodology() {
  const sources = [
    "Brand press releases and official announcements",
    "Company statements and disclosures",
    "Industry interviews",
    "Fashion shows and events",
    "Public records and regulatory filings",
    "Respected news organizations",
    "Trade publications",
    "Verified social media accounts",
    "Industry research and market data",
  ];

  const principles = [
    "Is it credible?",
    "Is it reliable?",
    "Is it relevant?",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://glamgaze.com/source-methodology#webpage",
        "url": "https://glamgaze.com/source-methodology",
        "name": "Source Methodology — GLAM GAZE",
        "description":
          "Learn how GLAM GAZE researches, verifies, fact-checks and evaluates sources before publishing stories.",
        "isPartOf": {
          "@id": "https://glamgaze.com/#website",
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://glamgaze.com",
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Source Methodology",
              "item": "https://glamgaze.com/source-methodology",
            },
          ],
        },
        "inLanguage": "en-US",
        "dateModified": new Date().toISOString().split("T")[0],
      },
      {
        "@type": "WebSite",
        "@id": "https://glamgaze.com/#website",
        "url": "https://glamgaze.com",
        "name": "GLAM GAZE",
        "description":
          "Fashion journalism and reporting built on evidence, verification and accountability.",
        "publisher": {
          "@id": "https://glamgaze.com/#organization",
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://glamgaze.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://glamgaze.com/#organization",
        "name": "GLAM GAZE",
        "url": "https://glamgaze.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://glamgaze.com/logo.png",
          "width": 200,
          "height": 60,
        },
        "sameAs": [
          "https://www.instagram.com/glamgaze",
          "https://www.twitter.com/glamgaze",
          "https://www.facebook.com/glamgaze",
        ],
      },
      {
        "@type": "NewsMediaOrganization",
        "@id": "https://glamgaze.com/#newsmediaorg",
        "name": "GLAM GAZE",
        "url": "https://glamgaze.com",
        "foundingDate": "2020",
        "description":
          "GLAM GAZE is a fashion journalism outlet committed to credible, fact-checked, and thoroughly sourced reporting.",
        "masthead": "https://glamgaze.com/about",
        "verificationFactCheckingPolicy":
          "https://glamgaze.com/source-methodology",
        "actionableFeedbackPolicy": "https://glamgaze.com/contact",
        "correctionsPolicy": "https://glamgaze.com/corrections",
        "ethicsPolicy": "https://glamgaze.com/ethics",
        "missionCoveragePrioritiesPolicy": "https://glamgaze.com/about",
        "noBylinesPolicy": "https://glamgaze.com/about",
        "logo": {
          "@type": "ImageObject",
          "url": "https://glamgaze.com/logo.png",
        },
      },
    ],
  };

  return (
    <>
      {/* ─── JSON-LD Structured Data ─── */}
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white text-black">
        {/* HERO */}
        <section className="px-6 md:px-16 py-24 border-b border-black">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              Source Methodology
            </p>

            <h1
              className="text-5xl md:text-7xl font-serif font-light leading-none"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Reporting Starts
              <br />
              With Research
            </h1>

            <div className="mt-8 w-12 h-px bg-[#b8972e]" />

            <p className="mt-8 text-lg text-neutral-600 leading-8 max-w-3xl">
              Good journalism depends on good sources. Every GLAM GAZE story
              begins with comprehensive reporting, fact-checking and vetting.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-6 md:px-16 py-20 border-b border-black">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed text-neutral-700 font-serif">
              Readers deserve reporting built on evidence, verification and
              accountability. Strong sourcing remains the foundation of every
              story we publish.
            </p>
          </div>
        </section>

        {/* SOURCES */}
        <section className="px-6 md:px-16 py-24 border-b border-black">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] font-medium mb-4">
                Sources We Use
              </p>

              <h2
                className="text-4xl md:text-5xl font-serif font-light"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Evidence Comes First
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sources.map((source) => (
                <div
                  key={source}
                  className="border border-neutral-200 p-6 hover:border-black transition-colors"
                >
                  <p className="leading-7 text-neutral-700">{source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="px-6 md:px-16 py-24 border-b border-black">
          <div className="max-w-5xl mx-auto space-y-20">
            <div className="grid md:grid-cols-[260px_1fr] gap-10">
              <h3
                className="text-3xl font-serif"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Fact-Checking
              </h3>

              <p className="text-neutral-600 text-lg leading-8">
                Editors and writers fact-check information such as names,
                dates, quotes, events and brand names prior to publication.
                Unsubstantiated claims are not presented as facts.
              </p>
            </div>

            <div className="grid md:grid-cols-[260px_1fr] gap-10">
              <h3
                className="text-3xl font-serif"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Anonymous Sources
              </h3>

              <p className="text-neutral-600 text-lg leading-8">
                We always favor using named sources. Anonymous sources may be
                considered when information serves the public interest and comes
                from individuals with direct knowledge of the matter. Such
                information undergoes additional editorial review.
              </p>
            </div>

            <div className="grid md:grid-cols-[260px_1fr] gap-10">
              <h3
                className="text-3xl font-serif"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Social Media Standards
              </h3>

              <p className="text-neutral-600 text-lg leading-8">
                Social media often drives fashion conversations. Not every post
                deserves credibility. We rely on confirmed accounts, official
                and reliable sources whenever possible. Rumors alone do not meet
                our standards for reporting.
              </p>
            </div>

            <div className="grid md:grid-cols-[260px_1fr] gap-10">
              <h3
                className="text-3xl font-serif"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Developing News
              </h3>

              <p className="text-neutral-600 text-lg leading-8">
                Some stories continue evolving after publication. We review
                credible new information and update coverage where necessary.
              </p>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="px-6 md:px-16 py-24 border-b border-black bg-neutral-50">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              Editorial Principles
            </p>

            <h2
              className="text-4xl md:text-5xl font-serif font-light mb-16"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Every Source Is Evaluated
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((item) => (
                <div
                  key={item}
                  className="bg-white border border-neutral-200 p-10"
                >
                  <p
                    className="text-2xl font-serif"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY SOURCING MATTERS */}
        <section className="px-6 md:px-16 py-28">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              Why Sourcing Matters
            </p>

            <h2
              className="text-4xl md:text-6xl font-serif font-light leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Trust Begins
              <br />
              With Verification
            </h2>

            <div className="w-12 h-px bg-[#b8972e] mx-auto my-10" />

            <p className="text-lg md:text-xl text-neutral-600 leading-9 max-w-3xl mx-auto">
              Readers deserve information they can trust. That's why sourcing
              remains at the center of our reporting process.
            </p>

            <p className="mt-10 text-neutral-700 text-lg leading-9 max-w-3xl mx-auto">
              At GLAM GAZE, good journalism starts with asking better
              questions—and verifying every answer.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}