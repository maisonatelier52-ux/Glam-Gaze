import Link from "next/link";

export async function generateMetadata() {
  const url = "https://www.theglamgaze.com/ownership-funding";
  const title = "Ownership & Funding | GLAM GAZE";
  const description =
    "Learn about GLAM GAZE's ownership, editorial independence, funding sources, sponsored content policies, affiliate relationships, and commitment to transparency.";

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
          alt: "GLAM GAZE Ownership and Funding",
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

export default function OwnershipFundingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Ownership & Funding",
    url: "https://www.theglamgaze.com/ownership-funding",
    description:
      "Information about GLAM GAZE's ownership, editorial independence, funding model, sponsored content policies, affiliate relationships, and transparency commitments.",
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
        "An independent digital publication covering fashion, beauty, culture, lifestyle, celebrity style, and fashion business news.",
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
              Transparency & Trust
            </p>

            <h1 className="text-5xl md:text-7xl font-serif font-light leading-none">
              Ownership &
              <br />
              Funding
            </h1>

            <div className="w-16 h-px bg-[#b8972e] mt-8 mb-8" />

            <p className="max-w-3xl text-lg text-neutral-600 leading-relaxed">
              We believe readers should understand who we are, how we operate,
              and how our journalism is funded. Transparency helps build trust,
              and trust remains at the center of everything we publish.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="space-y-20">
            {/* WHO WE ARE */}
            <section>
              <span className="text-xs tracking-[0.3em] uppercase text-[#b8972e] font-medium">
                01
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Who We Are
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                GLAM GAZE is an independent digital publication focused on
                fashion, beauty, culture, lifestyle, celebrity style, and
                fashion business news.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                Our goal is simple: create engaging, trustworthy content that
                helps readers stay connected to the stories, trends, and people
                shaping today's world.
              </p>
            </section>

            {/* EDITORIAL INDEPENDENCE */}
            <section>
              <span className="text-xs tracking-[0.3em] uppercase text-[#b8972e] font-medium">
                02
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Editorial Independence
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                Our editorial team makes all decisions about what we cover and
                how we cover it.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                Brands, advertisers, sponsors, and outside partners do not
                influence our news reporting, editorial opinions, or story
                selection. We believe readers deserve content guided by
                editorial judgment rather than commercial interests.
              </p>
            </section>

            {/* FUNDING */}
            <section>
              <span className="text-xs tracking-[0.3em] uppercase text-[#b8972e] font-medium">
                03
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                How We Are Funded
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                GLAM GAZE may generate revenue through advertising, sponsored
                content, affiliate partnerships, and other business activities
                that support the operation of the website.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                These revenue sources help us continue producing fashion,
                lifestyle, culture, and entertainment journalism for our
                readers.
              </p>
            </section>

            {/* SPONSORED CONTENT */}
            <section>
              <span className="text-xs tracking-[0.3em] uppercase text-[#b8972e] font-medium">
                04
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Sponsored Content
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                From time to time, we may publish sponsored content or partner
                with brands on special projects.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                Whenever this occurs, the content will be clearly labeled so
                readers can easily distinguish sponsored material from our
                independent editorial coverage.
              </p>
            </section>

            {/* AFFILIATE */}
            <section>
              <span className="text-xs tracking-[0.3em] uppercase text-[#b8972e] font-medium">
                05
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Affiliate Relationships
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                Some articles may contain affiliate links. If a reader purchases
                a product or service through one of these links, GLAM GAZE may
                earn a commission at no additional cost to the reader.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                Affiliate partnerships do not affect our editorial standards and
                do not influence our reviews, recommendations, or reporting.
              </p>
            </section>

            {/* TRANSPARENCY */}
            <section>
              <span className="text-xs tracking-[0.3em] uppercase text-[#b8972e] font-medium">
                06
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Transparency Matters
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                We believe readers should know who is behind the content they
                consume and how a publication operates.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                That is why we are committed to being open about our ownership,
                funding practices, and business relationships.
              </p>
            </section>

            {/* COMMITMENT */}
            <section className="border-l-2 border-[#b8972e] pl-8">
              <span className="text-xs tracking-[0.3em] uppercase text-[#b8972e] font-medium">
                Our Commitment
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Readers Come First
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                No matter how GLAM GAZE is funded, our responsibility remains
                the same: to provide readers with content that is accurate,
                engaging, and created with integrity.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                The trust of our audience will always come first. Every story we
                publish is guided by our commitment to editorial quality,
                transparency, and respect for our readers.
              </p>
            </section>
          </div>
        </section>

        {/* RELATED PAGES */}
        <section className="border-t border-neutral-200">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-sm tracking-[0.3em] uppercase text-[#b8972e] mb-8">
              Learn More
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/about"
                className="border border-neutral-200 p-6 hover:border-[#b8972e] transition-colors"
              >
                <h3 className="font-medium mb-2">About Us</h3>
                <p className="text-sm text-neutral-600">
                  Learn about our mission and what we cover.
                </p>
              </Link>

              <Link
                href="/editorial-policy"
                className="border border-neutral-200 p-6 hover:border-[#b8972e] transition-colors"
              >
                <h3 className="font-medium mb-2">Editorial Policy</h3>
                <p className="text-sm text-neutral-600">
                  Read our editorial standards and practices.
                </p>
              </Link>

              <Link
                href="/our-team"
                className="border border-neutral-200 p-6 hover:border-[#b8972e] transition-colors"
              >
                <h3 className="font-medium mb-2">Meet The Team</h3>
                <p className="text-sm text-neutral-600">
                  Get to know the people behind GLAM GAZE.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}