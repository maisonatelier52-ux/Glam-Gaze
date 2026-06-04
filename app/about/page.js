import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
  const url = "https://www.theglamgaze.com/about";
  const title = "About GLAM GAZE | Fashion, Culture & Lifestyle";
  const description =
    "GLAM GAZE explores fashion, celebrity style, beauty, culture, and lifestyle through thoughtful storytelling, industry insight, and modern editorial coverage.";

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
          alt: "About GLAM GAZE",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@theglamgaze",
      title,
      description,
      images: [image],
    },
  };
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About GLAM GAZE",
    url: "https://www.theglamgaze.com/about",
    description:
      "Learn about GLAM GAZE, an independent fashion, beauty, culture and lifestyle publication covering the stories behind trends and the people shaping modern style.",
    publisher: {
      "@type": "Organization",
      name: "GLAM GAZE",
      url: "https://www.theglamgaze.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.theglamgaze.com/glam_gaze.png",
      },
    },
  };

  const categories = [
    {
      title: "Fashion News",
      href: "/fashion",
      desc: "Breaking stories, runway highlights, industry developments, and global fashion coverage.",
    },
    {
      title: "Designer Spotlights",
      href: "/fashion",
      desc: "Profiles of established and emerging designers shaping the future of fashion.",
    },
    {
      title: "Celebrity Style",
      href: "/celebrity-style",
      desc: "The looks, trends, and fashion moments driving conversations worldwide.",
    },
    {
      title: "Fashion Business",
      href: "/business",
      desc: "Insights into brands, retail, strategy, innovation, and industry leadership.",
    },
    {
      title: "Beauty Trends",
      href: "/beauty",
      desc: "Emerging beauty movements, products, and the voices influencing them.",
    },
    {
      title: "Culture & Lifestyle",
      href: "/lifestyle",
      desc: "Stories exploring creativity, identity, travel, entertainment, and modern living.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-5 md:px-8 py-12">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl mb-24">
        <Image
          src="/about.webp"
          alt="About GLAM GAZE"
          width={1400}
          height={800}
          priority
          className="w-full h-[450px] md:h-[650px] object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-6 max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-white/80 text-xs mb-5">
              ABOUT GLAM GAZE
            </p>

            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif mb-6">
              More Than Fashion.
            </h1>

            <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Exploring the people, ideas, and cultural moments shaping fashion,
              beauty, celebrity style, and modern lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="max-w-4xl mx-auto mb-24">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
          More Than The Trend Cycle
        </p>

        <h2 className="text-3xl md:text-5xl font-serif mb-8">
          Fashion never stands still. Neither do we.
        </h2>

        <div className="space-y-6 text-neutral-700 leading-8">
          <p>
            At GLAM GAZE, fashion is more than a headline, a viral look, or a
            front-row moment. It is a conversation happening across runways,
            social feeds, boardrooms, and city streets.
          </p>

          <p>
            We follow the stories people are talking about now. We pay equal
            attention to the ones they'll be talking about next.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="grid lg:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <Image
            src="/about_1.webp"
            alt="Fashion industry storytelling"
            width={700}
            height={700}
            className="rounded-2xl object-cover w-full h-[450px]"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
            Looking Beyond The Look
          </p>

          <h2 className="text-3xl md:text-5xl font-serif mb-8">
            The real story takes longer to find.
          </h2>

          <div className="space-y-5 text-neutral-700 leading-8">
            <p>
              A runway show can generate thousands of photos in minutes. The
              real story usually takes longer to find.
            </p>

            <p>
              Behind every collection sits a creative vision. Behind every
              trend is a shift in culture, taste, or influence.
            </p>

            <p>
              We focus on the people, decisions, and moments shaping fashion's
              direction.
            </p>

            <p className="font-medium">
              The clothes matter. The context matters more.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="mb-24">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
            What We Cover
          </p>

          <h2 className="text-4xl md:text-5xl font-serif">
            Stories Across Fashion & Culture
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="border border-neutral-200 rounded-2xl p-8 hover:border-amber-600/60 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-medium text-xl mb-3">{item.title}</h3>

              <p className="text-neutral-600 leading-7 text-sm">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FASHION FOR EVERYONE */}
      <section className="max-w-4xl mx-auto mb-24">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
          Fashion For Everyone
        </p>

        <h2 className="text-3xl md:text-5xl font-serif mb-8">
          Style belongs to everyone.
        </h2>

        <div className="space-y-6 text-neutral-700 leading-8">
          <p>
            You don't need an invitation to Fashion Week to enjoy great style.
          </p>

          <p>
            Some readers follow every runway. Others simply want to discover a
            new brand, understand a trend, or find inspiration for everyday
            life.
          </p>

          <p>
            GLAM GAZE is built for both.
          </p>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="bg-neutral-100 rounded-3xl p-8 md:p-14 mb-24">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
          Why We Exist
        </p>

        <h2 className="text-3xl md:text-5xl font-serif mb-8">
          Fashion influences more than wardrobes.
        </h2>

        <div className="max-w-3xl text-neutral-700 leading-8 space-y-5">
          <p>
            Fashion influences culture. It reflects identity. It shapes
            conversations.
          </p>

          <p>
            GLAM GAZE was created to make those stories accessible, engaging,
            and worth reading.
          </p>

          <p>
            Through thoughtful reporting and modern editorial storytelling, we
            help readers understand not just what is happening in fashion—but
            why it matters.
          </p>
        </div>
      </section>
    </main>
  );
}