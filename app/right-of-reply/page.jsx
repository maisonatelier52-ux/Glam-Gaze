export async function generateMetadata() {
  const url = "https://www.theglamgaze.com/right-of-reply-policy";
  const title = "Right of Reply Policy | GLAM GAZE";
  const description =
    "Learn about GLAM GAZE's Right of Reply Policy, including how individuals, brands, and organizations can respond to information published in our coverage.";

  const image = "https://www.theglamgaze.com/glam_gaze.png";

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "GLAM GAZE",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "GLAM GAZE Right of Reply Policy",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      site: "@theglamgaze",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RightOfReplyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Right of Reply Policy",
    url: "https://www.theglamgaze.com/right-of-reply-policy",
    description:
      "GLAM GAZE's Right of Reply Policy explaining how individuals, brands, companies, and organizations can respond to information published in our reporting.",
    publisher: {
      "@type": "Organization",
      name: "GLAM GAZE",
      url: "https://www.theglamgaze.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.theglamgaze.com/glam_gaze.png",
      },
    },
    mainEntity: {
      "@type": "Organization",
      name: "GLAM GAZE",
      description:
        "Independent digital publication covering fashion, beauty, culture, lifestyle, celebrity style, entertainment, and fashion business news.",
      url: "https://www.theglamgaze.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="min-h-screen bg-white text-neutral-900">
        {/* HERO */}
        <section className="border-b border-neutral-200">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] font-medium mb-5">
              Fairness & Accountability
            </p>

            <h1 className="text-5xl md:text-7xl font-serif font-light leading-none">
              Right of
              <br />
              Reply Policy
            </h1>

            <div className="w-16 h-px bg-[#b8972e] mt-8 mb-8" />

            <p className="max-w-3xl text-lg text-neutral-600 leading-relaxed">
              We believe responsible journalism involves listening as well as
              reporting. Individuals, brands, companies, and organizations
              should have the opportunity to respond to information that
              directly concerns them.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="space-y-20">
            {/* FAIRNESS */}
            <section>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                We Believe in Fairness
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                At GLAM GAZE, we aim to report on fashion, culture, beauty,
                lifestyle, entertainment, and business stories in a fair and
                responsible way.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                Sometimes our reporting may involve individuals, brands,
                companies, or organizations. When that happens, we believe
                people should have the opportunity to respond to information
                that directly concerns them.
              </p>
            </section>

            {/* APPROACH */}
            <section>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Our Approach
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                When a story includes criticism, allegations, or information
                that could affect a person&apos;s or organization&apos;s
                reputation, we make reasonable efforts to seek comment before
                publication whenever possible.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                We believe hearing different perspectives helps create more
                complete, accurate, and balanced reporting.
              </p>
            </section>

            {/* REQUESTING RESPONSE */}
            <section>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Requesting a Response
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                If you believe a GLAM GAZE article contains information about
                you, your brand, or your organization that requires clarification
                or a response, you are welcome to contact our editorial team.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                We review all legitimate requests carefully and consider any
                additional information provided before determining the
                appropriate editorial action.
              </p>
            </section>

            {/* AFTER PUBLICATION */}
            <section>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                After Publication
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                Not every response arrives before a story is published.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                If new information, clarification, or an official statement
                becomes available after publication, our editorial team may
                update the article or add the response when appropriate,
                relevant, and supported by available evidence.
              </p>
            </section>

            {/* REQUIREMENTS */}
            <section>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                What We Ask From You
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                When submitting a request for a right of reply, please include:
              </p>

              <ul className="mt-6 space-y-4 text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-[#b8972e]">•</span>
                  <span>Your name and contact information</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#b8972e]">•</span>
                  <span>The article in question</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#b8972e]">•</span>
                  <span>
                    The specific information you are responding to
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#b8972e]">•</span>
                  <span>
                    Any supporting documents or evidence you would like us to
                    review
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-neutral-700 leading-8">
                Providing clear and complete information helps us assess the
                request more efficiently and accurately.
              </p>
            </section>

            {/* EDITORIAL JUDGMENT */}
            <section>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Editorial Judgment
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                While we take all right of reply requests seriously, the
                decision to publish, update, edit, or include a response remains
                with our editorial team.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                Each request is reviewed based on accuracy, relevance, public
                interest, available evidence, and the overall context of the
                story.
              </p>
            </section>

            {/* COMMITMENT */}
            <section className="border-l-2 border-[#b8972e] pl-8">
              <span className="text-xs tracking-[0.3em] uppercase text-[#b8972e] font-medium">
                Our Commitment
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Listening Matters
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                Good journalism involves listening as well as reporting.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                At GLAM GAZE, we are committed to fairness, transparency, and
                responsible storytelling. We welcome constructive dialogue and
                believe that giving people an opportunity to respond helps build
                trust with both our sources and our readers.
              </p>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}