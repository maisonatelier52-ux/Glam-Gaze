import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import data from "@/data/data.json";

// ─── Metadata ───────────────────────────────────────────────────────────────
export async function generateMetadata() {
  const url = "https://www.theglamgaze.com/our-team";
  const title = "Our Team - Glam Gaze";
  const description =
    "Meet the editors, writers, and contributors behind GLAM GAZE. Learn about our mission, editorial standards, and the team covering fashion, beauty, culture, celebrity news, and lifestyle.";
  const image = "https://www.theglamgaze.com/glam_gaze.png";

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Glam Gaze",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Our Team - Glam Gaze",
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

// ─── JSON-LD ─────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.theglamgaze.com/our-team#webpage",
      "url": "https://www.theglamgaze.com/our-team",
      "name": "Our Team - Glam Gaze",
      "description":
        "Meet the editors, writers, and contributors behind GLAM GAZE covering fashion, beauty, culture, celebrity news, and lifestyle.",
      "isPartOf": { "@id": "https://www.theglamgaze.com/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.theglamgaze.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Our Team",
            "item": "https://www.theglamgaze.com/our-team",
          },
        ],
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.theglamgaze.com/#website",
      "url": "https://www.theglamgaze.com",
      "name": "Glam Gaze",
      "description":
        "Fashion, beauty, culture, celebrity news, and lifestyle — reported with curiosity and credibility.",
      "publisher": { "@id": "https://www.theglamgaze.com/#organization" },
      "inLanguage": "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://www.theglamgaze.com/#organization",
      "name": "Glam Gaze",
      "url": "https://www.theglamgaze.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.theglamgaze.com/glam_gaze.png",
        "width": 200,
        "height": 60,
      },
      "sameAs": [
        "https://www.instagram.com/theglamgaze",
        "https://www.twitter.com/theglamgaze",
        "https://www.facebook.com/theglamgaze",
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.theglamgaze.com/our-team#aboutpage",
      "url": "https://www.theglamgaze.com/our-team",
      "name": "Our Team - Glam Gaze",
      "description":
        "The editors, writers, and contributors who power GLAM GAZE's coverage of fashion, beauty, culture, and lifestyle.",
      "publisher": { "@id": "https://www.theglamgaze.com/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://www.theglamgaze.com/author/sophia-rodriguez#person",
      "name": "Sophia Rodriguez",
      "jobTitle": "Senior Fashion Editor",
      "url": "https://www.theglamgaze.com/author/sophia-rodriguez",
      "worksFor": { "@id": "https://www.theglamgaze.com/#organization" },
      "image": "https://www.theglamgaze.com/author/Sophia-Rodriguez.webp",
      "description":
        "Sophia tracks the global fashion landscape with a sharp eye for emerging talent and runway innovation.",
    },
    {
      "@type": "Person",
      "name": "Ava Miller",
      "jobTitle": "Youth Culture Writer",
      "worksFor": { "@id": "https://www.theglamgaze.com/#organization" },
      "image": "https://www.theglamgaze.com/author/Ava-Miller.webp",
      "description":
        "Ava follows the trends shaping digital culture, viral aesthetics, social media movements, and new creative voices.",
    },
    {
      "@type": "Person",
      "name": "Elizabeth Carter",
      "jobTitle": "Style Editor",
      "worksFor": { "@id": "https://www.theglamgaze.com/#organization" },
      "image": "https://www.theglamgaze.com/author/Elizabeth-Carter.webp",
      "description":
        "Elizabeth approaches fashion with a practical perspective, focusing on timeless dressing and modern essentials.",
    },
    {
      "@type": "Person",
      "name": "Scarlett Hayes",
      "jobTitle": "Fashion Business Writer",
      "worksFor": { "@id": "https://www.theglamgaze.com/#organization" },
      "image": "https://www.theglamgaze.com/author/Scarlett-Hayes.webp",
      "description":
        "Scarlett reports on the industry's power players, retail shifts, and market trends.",
    },
    {
      "@type": "Person",
      "name": "Eleanor Vance",
      "jobTitle": "Celebrity Style Writer",
      "worksFor": { "@id": "https://www.theglamgaze.com/#organization" },
      "image": "https://www.theglamgaze.com/author/Eleanor-Vance.webp",
      "description":
        "Eleanor tracks the fashion moments that dominate headlines — red carpets, street style, and celebrity wardrobes.",
    },
    {
      "@type": "Person",
      "name": "Lily Adam",
      "jobTitle": "Lifestyle Writer",
      "worksFor": { "@id": "https://www.theglamgaze.com/#organization" },
      "image": "https://www.theglamgaze.com/author/Lily-Adam.webp",
      "description":
        "Lily covers travel, wellness, home inspiration, and modern living.",
    },
    {
      "@type": "Person",
      "name": "Isabella Rossi",
      "jobTitle": "Culture Editor",
      "worksFor": { "@id": "https://www.theglamgaze.com/#organization" },
      "image": "https://www.theglamgaze.com/author/Isabella-Rossi.webp",
      "description":
        "Isabella explores where fashion intersects with art, entertainment, and society.",
    },
  ],
};

// ─── Page ────────────────────────────────────────────────────────────────────
export default function OurTeam() {
  return (
    <>
      {/* JSON-LD injected via Next.js script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white text-black">
        {/* HERO */}
        <section className="px-6 md:px-16 py-24 border-b border-black">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              Meet The Team
            </p>

            <h1
              className="text-5xl md:text-7xl font-serif font-light leading-none"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Every Story Starts
              <br />
              With Curiosity.
            </h1>

            <div className="mt-8 w-12 h-px bg-[#b8972e]" />

            <p className="mt-8 text-lg text-neutral-600 leading-8 max-w-3xl">
              Our newsroom follows fashion, beauty, culture, lifestyle,
              celebrity style, and the business forces moving the industry
              forward. We chase trends. We question them too.
            </p>
          </div>
        </section>

        {/* FEATURED EDITOR */}
        <section className="px-6 md:px-16 py-20 border-b border-black">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
                Senior Fashion Editor
              </p>

              <h2
                className="text-5xl font-serif mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Sophia Rodriguez
              </h2>

              <p className="text-neutral-600 leading-8">
                Sophia tracks the global fashion landscape with a sharp eye for
                emerging talent and runway innovation. She's all about the ideas
                shaping what's next, from the world's biggest fashion capitals
                to the up-and-coming designers.
              </p>
            </div>

            <div className="max-w-sm">
              <AuthorCard
                author={data.authors.find((a) => a.name === "Sophia Rodriguez")}
              />
            </div>
          </div>
        </section>

        {/* TEAM MEMBERS */}
        <section className="px-6 md:px-16 py-20 border-b border-black">
          <div className="mb-14">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] font-medium">
              Editorial Team
            </p>

            <h2
              className="mt-4 text-4xl md:text-5xl font-serif font-light"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              The Voices Behind GLAM GAZE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <TeamBio
              name="Ava Miller"
              role="Youth Culture Writer"
              image="/author/Ava-Miller.webp"
              description="Ava follows the trends shaping digital culture. Viral aesthetics, social media movements, and new creative voices are all part of her beat."
            />
            <TeamBio
              name="Elizabeth Carter"
              role="Style Editor"
              image="/author/Elizabeth-Carter.webp"
              description="Elizabeth approaches fashion with a practical perspective. She looks at timeless dressing, modern essentials, and styling choices that feel personal rather than prescribed."
            />
            <TeamBio
              name="Scarlett Hayes"
              role="Fashion Business Writer"
              image="/author/Scarlett-Hayes.webp"
              description="Scarlett reports on the industry's power players, retail shifts, and market trends. Her reporting dives into the business decisions influencing fashion behind the scenes."
            />
            <TeamBio
              name="Eleanor Vance"
              role="Celebrity Style Writer"
              image="/author/Eleanor-Vance.webp"
              description="Eleanor tracks the fashion moments that dominate headlines. Red carpets, street style, and celebrity wardrobes all fall within her lens."
            />
            <TeamBio
              name="Lily Adam"
              role="Lifestyle Writer"
              image="/author/Lily-Adam.webp"
              description="Lily covers travel, wellness, home inspiration, and modern living. Her stories combine useful ideas with a polished sense of style."
            />
            <TeamBio
              name="Isabella Rossi"
              role="Culture Editor"
              image="/author/Isabella-Rossi.webp"
              description="Isabella explores where fashion intersects with art, entertainment, and society. She adds depth to trends that often move faster than the conversations surrounding them."
            />
          </div>
        </section>

        {/* WHAT CONNECTS US */}
        <section className="px-6 md:px-16 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-[#b8972e] mb-4 font-medium">
              What Connects Us
            </p>

            <h2
              className="text-4xl md:text-6xl font-serif font-light mb-10"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Different Backgrounds.
              <br />
              Different Perspectives.
            </h2>

            <div className="w-12 h-px bg-[#b8972e] mx-auto mb-10" />

            <p className="text-xl font-serif mb-8">A shared belief.</p>

            <p className="text-neutral-600 leading-8 text-lg">
              Fashion is never just clothing. It's about culture, creativity,
              influence, and how people express themselves. Our team works to
              deliver stories that inform, inspire and give a clearer view of
              the world shaping today's style landscape.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function AuthorCard({ author }) {
  return (
    <article className="group bg-white p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-neutral-50">
      <Link href={`/author/${author.slug}`}>
        <div className="relative w-24 h-28 md:w-32 md:h-40 overflow-hidden rounded-sm border border-neutral-200">
          <Image
            src={author.photo}
            alt={author.name}
            fill
            className="object-cover object-top group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            sizes="128px"
          />
        </div>
      </Link>

      <Link
        href={`/author/${author.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-medium text-black hover:text-[#b8972e] transition-colors"
      >
        View Profile
        <FiArrowRight className="w-3 h-3" />
      </Link>
    </article>
  );
}

function TeamBio({ name, role, description, image }) {
  return (
    <div className="border-t border-neutral-200 pt-6">
      <div className="relative w-16 h-16 mb-5 overflow-hidden rounded-full border border-neutral-200">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>

      <p className="text-[10px] tracking-[0.3em] uppercase text-[#b8972e] font-medium">
        {role}
      </p>

      <h3
        className="mt-3 text-2xl font-serif"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {name}
      </h3>

      <p className="mt-4 text-neutral-600 leading-7">{description}</p>
    </div>
  );
}