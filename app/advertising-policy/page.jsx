import Link from "next/link";

export async function generateMetadata() {
  const url = "https://www.theglamgaze.com/advertising-policy";
  const title = "Advertising Policy | GLAM GAZE";
  const description =
    "Learn about GLAM GAZE's advertising policy, sponsored content guidelines, affiliate partnerships, editorial independence, and commitment to reader trust.";

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
          alt: "GLAM GAZE Advertising Policy",
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

export default function AdvertisingPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Advertising Policy",
    url: "https://www.theglamgaze.com/advertising-policy",
    description:
      "GLAM GAZE advertising policy outlining sponsored content, affiliate partnerships, editorial independence, advertising standards, and reader transparency.",
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
        "Independent digital publication covering fashion, beauty, culture, lifestyle, celebrity style, and fashion business news.",
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
              Transparency & Reader Trust
            </p>

            <h1 className="text-5xl md:text-7xl font-serif font-light leading-none">
              Advertising
              <br />
              Policy
            </h1>

            <div className="w-16 h-px bg-[#b8972e] mt-8 mb-8" />

            <p className="max-w-3xl text-lg text-neutral-600 leading-relaxed">
              We believe readers should always know the difference between
              advertising and editorial content. Transparency, honesty, and
              trust guide every advertising relationship at GLAM GAZE.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="space-y-20">
            {/* INTRO */}
            <section>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Keeping Things Clear
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                Advertising helps support GLAM GAZE and allows us to continue
                creating content about fashion, beauty, culture, lifestyle, and
                entertainment.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                We believe readers should always know the difference between
                advertising and editorial content. That's why we are committed
                to being transparent about our advertising practices.
              </p>
            </section>

            {/* EDITORIAL INDEPENDENCE */}
            <section>

              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Our Editorial Team Works Independently
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                The stories, features, and news articles published by GLAM GAZE
                are chosen and created by our editorial team.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                Advertisers do not decide what we cover, how we cover it, or the
                opinions expressed in our editorial content.
              </p>
            </section>

            {/* SPONSORED CONTENT */}
            <section>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Sponsored Content
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                From time to time, we may work with brands on sponsored
                articles, campaigns, or special projects.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                Whenever content is sponsored, it will be clearly labeled so
                readers can easily recognize it and distinguish it from our
                independent editorial coverage.
              </p>
            </section>

            {/* ADVERTISING STANDARDS */}
            <section>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Advertising Standards
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                We aim to work with advertisers whose products, services, and
                values are relevant to our audience.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                We reserve the right to reject, remove, or refuse advertising
                that we believe is misleading, deceptive, offensive, harmful, or
                inconsistent with our editorial standards.
              </p>
            </section>

            {/* AFFILIATE */}
            <section>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Affiliate Partnerships
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                Some content may include affiliate links. If readers make a
                purchase through these links, GLAM GAZE may receive a
                commission.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                These partnerships help support our publication and do not
                influence our editorial decisions, recommendations, or coverage.
              </p>
            </section>

            {/* TRUST */}
            <section>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Accuracy and Trust
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                Advertising relationships do not guarantee positive coverage,
                reviews, mentions, or editorial consideration.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                Our responsibility is to our readers first, and we strive to
                maintain the trust they place in our content.
              </p>
            </section>

            {/* POLICY UPDATES */}
            <section>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Changes to This Policy
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                As our business and advertising practices evolve, this policy
                may be updated from time to time.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                Any changes will be reflected on this page so readers can remain
                informed about our current advertising standards and practices.
              </p>
            </section>

            {/* PROMISE */}
            <section className="border-l-2 border-[#b8972e] pl-8">
              <span className="text-xs tracking-[0.3em] uppercase text-[#b8972e] font-medium">
                Our Promise
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                Transparency Comes First
              </h2>

              <p className="mt-6 text-neutral-700 leading-8">
                We want GLAM GAZE to be a place where readers can discover new
                ideas, brands, and trends while feeling confident about the
                content they consume.
              </p>

              <p className="mt-4 text-neutral-700 leading-8">
                Transparency, honesty, and reader trust will always guide the
                way we approach advertising and commercial relationships.
              </p>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}