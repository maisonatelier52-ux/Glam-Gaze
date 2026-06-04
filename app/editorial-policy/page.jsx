import Contact from "../component/Contact";

// ─── Constants ────────────────────────────────────────────────────────────────
const SITE_URL = "https://www.theglamgaze.com";
const PAGE_URL = `${SITE_URL}/editorial-policy`;
const SITE_NAME = "Glam Gaze";
const PAGE_TITLE = "Editorial Policy - Glam Gaze";
const PAGE_DESCRIPTION =
  "Learn about GLAM GAZE's editorial standards, reporting practices, fact-checking process, independence, and commitment to accuracy.";
const IMAGE = `${SITE_URL}/glam_gaze.png`;

// ─── Metadata ─────────────────────────────────────────────────────────────────
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

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
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
        name: "Editorial Policy",
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
            name: "Editorial Policy",
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
        email: "editorial@theglamgaze.com",
        contactType: "editorial",
        availableLanguage: "English",
      },
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function EditorialPolicy() {
  const sections = [
    {
      title: "Our Standard",
      content:
        "Every article begins with a simple goal: earn the reader's trust. GLAM GAZE covers fashion, beauty, celebrity style, culture, lifestyle, and industry news. We aim to make every story accurate, clear, and meaningful.",
    },
    {
      title: "How We Report",
      content:
        "Fashion moves quickly. Information moves even faster. Our team follows industry developments, official announcements, interviews, public records, and firsthand reporting whenever available. Every story undergoes editorial review before publication.",
    },
    {
      title: "Accuracy First",
      content:
        "Names matter. Dates matter. Facts matter. We verify information before publishing and review details carefully. If information cannot be independently confirmed, we say so.",
    },
    {
      title: "Editorial Independence",
      content:
        "Our coverage is determined by editors and writers. Advertisers, brands, and commercial partners do not direct editorial decisions. Sponsored content is clearly identified.",
    },
    {
      title: "Research and Sources",
      content:
        "Our reporting is based on official statements, interviews, public documents, industry research and trusted publications. News develops. Stories evolve. We update coverage as new information comes to light.",
    },
    {
      title: "Fairness and Representation",
      content:
        "Fashion is a global industry shaped by many voices and experiences. We seek fairness, context and respect in all the stories we tell.",
    },
    {
      title: "Reviews and Recommendations",
      content:
        "Products and services are evaluated through research, experience, and editorial judgment. Coverage cannot be purchased. Positive reviews are never guaranteed.",
    },
    {
      title: "Corrections",
      content:
        "Mistakes happen. Ignoring them isn't an option. When a significant error is identified, we correct it promptly and responsibly.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white text-black">
        {/* HERO */}
        <section className="px-6 md:px-16 py-24 border-b border-black">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              Editorial Policy
            </p>

            <h1
              className="text-5xl md:text-7xl font-serif font-light leading-none"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Our Standard
            </h1>

            <div className="mt-8 w-12 h-px bg-[#b8972e]" />

            <p className="mt-8 text-lg text-neutral-600 leading-8 max-w-3xl">
              Every article begins with a simple goal: earn the reader's trust.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-6 md:px-16 py-20 border-b border-black">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed text-neutral-700 font-serif">
              GLAM GAZE covers fashion, beauty, celebrity style, culture,
              lifestyle, and industry news. We aim to make every story accurate,
              clear, and meaningful.
            </p>
          </div>
        </section>

        {/* POLICY SECTIONS */}
        <section className="px-6 md:px-16 py-24">
          <div className="max-w-5xl mx-auto">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className={`grid md:grid-cols-[220px_1fr] gap-8 md:gap-16 py-12 ${
                  index !== sections.length - 1
                    ? "border-b border-neutral-200"
                    : ""
                }`}
              >
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-serif"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {section.title}
                  </h2>
                </div>

                <div>
                  <p className="text-neutral-600 leading-8 text-lg">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROMISE */}
        <section className="border-t border-black px-6 md:px-16 py-28">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              Our Promise
            </p>

            <h2
              className="text-4xl md:text-6xl font-serif font-light leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Readers Come First.
            </h2>

            <div className="w-12 h-px bg-[#b8972e] mx-auto my-10" />

            <p className="text-lg md:text-xl text-neutral-600 leading-9 max-w-3xl mx-auto">
              GLAM GAZE exists to inform, inspire and connect our readers to the
              world of fashion and culture.
            </p>

            <div className="mt-12 space-y-4">
              <p
                className="text-2xl md:text-3xl font-serif"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Accuracy matters.
              </p>

              <p
                className="text-2xl md:text-3xl font-serif"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Curiosity matters.
              </p>

              <p
                className="text-2xl md:text-3xl font-serif"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Readers come first.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <Contact />
      </main>
    </>
  );
}