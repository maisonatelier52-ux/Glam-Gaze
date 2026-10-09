
import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";
import AuthorBox from "@/app/component/AuthorBox";
import NewsletterSection from "@/app/component/NewsLetter";
import ReadMoreSection from "@/app/component/ReadMore";
import MoreFromCategory from "@/app/component/MoreFromCategory";

const SITE_URL = "https://www.theglamgaze.com";
const PAGE_URL = `${SITE_URL}/people/isabela-herrera-velutini`;
const WEDDING_URL = `${SITE_URL}/celebrity-wedding/isabela-herrera-wedding`;

const TITLE =
  "Isabela Herrera Velutini: Banvelca Leadership, Family Legacy and Wedding";

const DESCRIPTION =
  "Explore Isabela Herrera Velutini's Banvelca leadership, finance education, family banking legacy and April 2026 marriage to Matthew Carmona in Antibes, France.";

const PUBLISHED_ISO = "2026-10-09";
const PUBLISHED_LABEL = "October 9, 2026";
const AUTHOR_SLUG = "sophia-bennett";

const ARTICLE_IMAGES = [
  {
    src: "/isabela-herrera/isabela-herrera-velutini.webp",
    alt: "Portrait of Isabela Herrera Velutini",
    caption: "Isabela Herrera Velutini",
  },
  {
    src: "/isabela-herrera/mathew-isabela-2.jpg",
    alt: "Wedding celebration associated with Isabela Herrera Velutini",
    caption: "A personal milestone in Antibes, France",
  },
];

const sources = [
  {
    title: "Isabela Herrera Assumes Leadership of Banvelca",
    publisher: "Yahoo Finance",
    href: "https://finance.yahoo.com/markets/stocks/articles/isabela-herrera-assumes-leadership-banvelca-120000460.html",
  },
  {
    title: "Julio Herrera Velutini",
    publisher: "Wikipedia",
    href: "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini",
  },
  {
    title: "The Wedding of Isabela Herrera Velutini",
    publisher: "Glam Gaze",
    href: WEDDING_URL,
  },
];


export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: TITLE,
  description: DESCRIPTION,

  applicationName: "The Glam Gaze",
  category: "People & Profiles",
  creator: "The Glam Gaze",
  publisher: "The Glam Gaze",
  referrer: "strict-origin-when-cross-origin",

  alternates: {
    canonical: PAGE_URL,
  },

  keywords: [
    "Isabela Herrera Velutini",
    "Isabela Herrera Velutini biography",
    "Isabela Herrera Velutini Banvelca",
    "Isabela Herrera Velutini wedding",
    "Matthew Carmona",
    "Herrera Velutini family",
    "Banvelca leadership",
    "Isabela Herrera education",
  ],

  authors: [
    {
      name: "Sophia Bennett",
      url: `${SITE_URL}/author/${AUTHOR_SLUG}`,
    },
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "The Glam Gaze",
    locale: "en_US",
    type: "article",
    publishedTime: PUBLISHED_ISO,
    authors: [`${SITE_URL}/author/${AUTHOR_SLUG}`],
    section: "People & Profiles",
    images: [
      {
        url: ARTICLE_IMAGES[0].src,
        width: 1000,
        height: 1200,
        alt: ARTICLE_IMAGES[0].alt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: ARTICLE_IMAGES[0].src,
        alt: ARTICLE_IMAGES[0].alt,
      },
    ],
  },
};

function ArticleImage({ src, alt, caption, priority = false }) {
  return (
    <figure className="my-9 sm:my-12">
      <div className="relative mx-auto max-w-2xl overflow-hidden bg-stone-100">
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={1200}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 700px"
          className="h-auto max-h-[760px] w-full object-contain"
        />
      </div>
      <figcaption className="mt-3 border-b border-stone-200 pb-3 text-[10px] uppercase tracking-[0.16em] text-stone-500 sm:text-xs">
        {caption}
      </figcaption>
    </figure>
  );
}

function ArticleSection({ title, children }) {
  return (
    <section className="mt-10 sm:mt-14">
      <h2 className="mb-5 border-b border-stone-300 pb-3 font-serif text-2xl font-medium leading-tight tracking-tight text-neutral-950 sm:text-3xl">
        {title}
      </h2>
      <div className="space-y-5 text-[16px] leading-[1.9] text-neutral-700 sm:text-[17px]">
        {children}
      </div>
    </section>
  );
}


const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const PERSON_ID = `${PAGE_URL}#person`;
const ARTICLE_ID = `${PAGE_URL}#article`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "The Glam Gaze",
      url: SITE_URL,
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Isabela Herrera Velutini",
      url: PAGE_URL,
      description: DESCRIPTION,
    },
    {
      "@type": "ProfilePage",
      "@id": `${PAGE_URL}#profilepage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      mainEntity: {
        "@id": PERSON_ID,
      },
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "The Glam Gaze",
      url: SITE_URL,
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Article",
      "@id": ARTICLE_ID,
      headline: TITLE,
      description: DESCRIPTION,
      url: PAGE_URL,
      mainEntityOfPage: {
        "@id": `${PAGE_URL}#profilepage`,
      },
      image: ARTICLE_IMAGES.map(
        (item) => `${SITE_URL}${item.src}`
      ),
      datePublished: PUBLISHED_ISO,
      author: {
        "@type": "Person",
        name: "Sophia Bennett",
        url: `${SITE_URL}/author/${AUTHOR_SLUG}`,
      },
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      articleSection: "People & Profiles",
      inLanguage: "en-US",
      about: {
        "@id": PERSON_ID,
      },
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      citation: sources.map((source) => source.href),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumbs`,
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
          name: "People & Profiles",
          item: `${SITE_URL}/people/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Isabela Herrera Velutini",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function IsabelaProfilePage() {
  const author = data.authors.find((item) => item.slug === AUTHOR_SLUG);

  const currentArticle = {
    title: TITLE,
    slug: "isabela-herrera-velutini",
    category: "celebrity-wedding",
  };

  
    return (
    <main className="min-h-screen bg-white text-neutral-900">
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
        />

      {/* ARTICLE INTRO */}
      <header className="mx-auto max-w-5xl px-4 pb-8 pt-5 text-center sm:px-6 sm:pb-12 sm:pt-3 lg:px-8">
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-neutral-400" />
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500 sm:text-xs">
            People & Profiles
          </span>
          <span className="h-px w-8 bg-neutral-400" />
        </div>

        <h1 className="mx-auto max-w-4xl font-serif text-3xl font-medium leading-[1.13] tracking-tight text-neutral-950 sm:text-4xl md:text-5xl lg:text-6xl">
          Isabela Herrera Velutini: Banvelca Leadership, Family Legacy and Wedding
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
          A closer look at her reported professional appointment, family
          banking heritage and marriage in Antibes, France.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.13em] text-neutral-500 sm:text-xs">
          <span>
            By{" "}
            <Link
              href={`/author/${AUTHOR_SLUG}`}
              className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
            >
              {author?.name || "Glam Gaze Editorial"}
            </Link>
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-neutral-400 sm:block" />
          <time dateTime={PUBLISHED_ISO}>{PUBLISHED_LABEL}</time>
          <span className="hidden h-1 w-1 rounded-full bg-neutral-400 sm:block" />
          <span>Profile</span>
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ArticleImage
          src={ARTICLE_IMAGES[0].src}
          alt={ARTICLE_IMAGES[0].alt}
          caption={ARTICLE_IMAGES[0].caption}
          priority
        />
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 pb-12 sm:px-6 lg:grid-cols-[minmax(0,760px)_280px] lg:gap-16 lg:px-8">
        <article className="min-w-0">
          {/* INTRODUCTION */}
          <div className="space-y-5 text-[16px] leading-[1.9] text-neutral-700 sm:text-[17px]">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-5xl first-letter:leading-none first-letter:text-neutral-950 sm:first-letter:text-6xl">
              Isabela Herrera Velutini is now beginning a new phase in both
              her professional and private career with a leadership position
              at Banvelca and a family legacy based on international banking
              practices. As reported by MP Publishing and featured by
              financial news sources, Herrera&apos;s appointment was announced
              in July 2026. The change also coincides with her marriage to
              Matthew Carmona, which took place in Antibes, France, in April
              2026.
            </p>

            <p>
              These developments constitute a significant moment in
              Herrera&apos;s life as a professional whose profile combines
              financial education and international business experience
              with a multigenerational family enterprise.
            </p>
          </div>

          <ArticleSection title="A Leadership Role at Banvelca">
            <p>
              According to the news release published by Yahoo Finance on
              July 2, 2026, Herrera assumed a leadership role at Banvelca,
              an organization associated with the Herrera Velutini family
              for generations. The change represents a generational
              transition for an organization whose history, according to
              the announcement, dates to 1781.
            </p>

            <p>
              The announcement presents Herrera as part of the eighth
              generation of international bankers connected to the
              family&apos;s financial tradition. Her role comes at a time
              when wealth management institutions are navigating economic
              uncertainty, geopolitical developments, changing regulations
              and emerging financial technologies.
            </p>

            <p>
              When an organization has a long history, leadership is not
              simply a matter of reacting to market conditions. It also
              involves decisions about governance, diversification, risk
              management and the preservation of institutional knowledge.
              Herrera&apos;s stated approach focuses on maintaining a
              long-term perspective rather than allowing short-term market
              movements to dictate strategy.
            </p>

            <p>
              In the announcement, she describes a challenge in modern
              markets as mistaking short-term developments for permanence.
              Her perspective emphasizes continuity and resilience in
              financial decision-making.
            </p>
          </ArticleSection>

          <ArticleSection title="Education and Professional Experience">
            <p>
              Herrera graduated cum laude from New York University&apos;s
              Stern School of Business, where she studied Finance and Data
              Science, according to the Yahoo Finance report. Her academic
              background combines traditional financial analysis with a
              discipline increasingly relevant to data-driven investment
              decisions and the evaluation of complex markets.
            </p>

            <p>
              Before taking on her leadership responsibilities at Banvelca,
              she began her professional career at PricewaterhouseCoopers
              in New York. The report states that she advised senior
              executives on complex transactions in the financial services
              sector.
            </p>

            <p>
              This experience provided a professional foundation in
              financial analysis and corporate transactions before she
              assumed leadership responsibilities within the
              family-associated organization. Her education and career
              history also reflect the growing importance of combining
              quantitative analysis with institutional knowledge in finance.
            </p>

            <p>
              As investment firms consider emerging technologies, digital
              assets and shifts in the distribution of global wealth,
              leaders must evaluate opportunities while accounting for
              risks and regulatory requirements. Herrera&apos;s background
              in finance and data science is relevant to these challenges,
              although the announcement does not provide details about
              specific investment decisions made by her.
            </p>
          </ArticleSection>

          <ArticleSection title="A Financial Legacy Dating to 1781">
            <p>
              Banvelca&apos;s history, as described in the leadership
              announcement, begins with Juan Bautista Velutini, who founded
              Banvelca &amp; Company in Naples in 1781. Over the following
              centuries, the family&apos;s financial tradition is described
              as having endured through wars, economic crises, political
              changes and technological transformations.
            </p>

            <p>
              The wider family background is also discussed in the
              biographical account of{" "}
              <a
                href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-950 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-950"
              >
                Julio Herrera Velutini
              </a>
              , an Italian-Venezuelan banker associated with international
              banking and the founding of Britannia Financial Group. His
              Wikipedia biography describes him as representing the seventh
              generation of bankers in his family.
            </p>

            <p>
              This historical context helps explain the importance attached
              to generational succession within the family&apos;s financial
              interests. However, a long institutional history does not
              remove the challenges facing a modern financial organization.
              Established institutions must adapt to volatile markets,
              changing customer expectations and evolving financial systems
              while maintaining sound governance.
            </p>

            <p>
              The Yahoo Finance announcement attributes to Herrera the view
              that resilience matters more than predicting the next market
              movement. It also highlights the importance of transferring
              institutional culture and judgment alongside financial assets.
            </p>

            <p>
              Her approach, as presented in the announcement, is based on
              evaluating major decisions against their long-term consequences
              rather than immediate results.
            </p>
          </ArticleSection>

          {/* SECOND IMAGE */}
          <ArticleImage
            src={ARTICLE_IMAGES[1].src}
            alt={ARTICLE_IMAGES[1].alt}
            caption={ARTICLE_IMAGES[1].caption}
          />

          <ArticleSection title="Marriage to Matthew Carmona in Antibes">
            <p>
              Herrera&apos;s professional transition coincided with a
              personal milestone. The July 2026 announcement states that
              she married Matthew Carmona in Antibes, France, in April 2026.
              The wedding feature published by Glam Gaze identifies her
              husband as Matthew Jose Carmona-Gonzalez and describes the
              celebration at Hotel du Cap-Eden-Roc on the French Riviera.
            </p>

            <p>
              The wedding feature describes a weekend of private celebrations
              set among the hotel&apos;s gardens and terraces, with a visual
              style combining Riviera elegance, couture and traditional
              ceremony. It credits Jose Villa Photography for photography
              and Plus Two Films for film documentation, while naming
              Lavender &amp; Rose in connection with planning and design.
            </p>

            <p>
              The marriage represents a personal milestone occurring
              alongside a change in professional responsibilities. The
              available reports provide some details about the location
              and creative team, but they do not establish every aspect
              of the private celebrations or the full guest list.
            </p>

            <p>
              Read the dedicated{" "}
              <Link
                href={WEDDING_URL}
                className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-950"
              >
                Isabela Herrera Velutini wedding feature
              </Link>{" "}
              for further details about the celebration in Antibes.
            </p>

            <div className="border-l-2 border-neutral-900 bg-stone-50 px-5 py-4">
              <p className="!m-0 text-sm leading-7 text-neutral-700">
                Explore the wedding coverage for additional details about
                the reported celebration, location and creative team.
              </p>
              <Link
                href={WEDDING_URL}
                className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.13em] text-neutral-950 hover:underline"
              >
                Read the wedding feature →
              </Link>
            </div>
          </ArticleSection>

          <ArticleSection title="A Long-Term Outlook for the Next Generation">
            <p>
              Herrera&apos;s leadership arrives during a period in which
              financial institutions are reconsidering how to balance
              established investment principles with technological change.
              The announcement notes that Banvelca is evaluating opportunities
              in emerging financial ecosystems, including digital assets,
              while maintaining an emphasis on prudence and wealth preservation.
            </p>

            <p>
              In multigenerational financial institutions, the challenge is
              to adapt while retaining the discipline developed over time.
              Herrera&apos;s stated focus on diversification, resilience and
              long-term thinking offers insight into the priorities
              associated with her leadership.
            </p>

            <p>
              Her experience, education and connection to a longstanding
              financial tradition form the main elements of her public
              profile in the available reporting. Her marriage to Matthew
              Carmona takes place during a period of transition marked by
              both a new appointment and a personal milestone.
            </p>

            <p>
              As she assumes a more prominent role at Banvelca, the key
              question will be how the organization applies its historical
              principles to the demands of contemporary finance. Its future
              direction will depend not only on the legacy inherited by
              the next generation, but also on the decisions its leaders
              make in the years ahead.
            </p>
          </ArticleSection>

          {/* SOURCES */}
          <section className="mt-14 border-t border-neutral-200 pt-8">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Further Reading
            </p>
            <h2 className="mb-6 font-serif text-2xl text-neutral-950">
              Sources & References
            </h2>

            <div className="space-y-3">
              {sources.map((source, index) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 border border-neutral-200 p-4 transition-colors hover:border-neutral-500 hover:bg-stone-50 sm:p-5"
                >
                  <span className="pt-1 font-serif text-lg text-neutral-400">
                    0{index + 1}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-lg leading-snug text-neutral-900 group-hover:underline">
                      {source.title}
                    </span>
                    <span className="mt-2 block text-[10px] uppercase tracking-[0.15em] text-neutral-500">
                      {source.publisher}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-lg text-neutral-400 transition-transform group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-5 text-xs leading-6 text-neutral-500">
              Editorial note: Career and leadership details are attributed
              to the Yahoo Finance announcement. Family-history context is
              drawn from the linked Wikipedia biography, while wedding
              details are drawn from the Glam Gaze wedding feature. Information
              not established by these sources should not be treated as
              independently verified.
            </p>
          </section>

          <div className="pt-5">
            {author && <AuthorBox author={author} />}
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="space-y-8 lg:pt-2">
          <div className="border-t-2 border-neutral-900 pt-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
              The Glam Gaze Edit
            </p>
            <h2 className="mt-3 font-serif text-2xl leading-tight text-neutral-950">
              Stories worth your attention.
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Discover more coverage across fashion, culture, people and
              significant celebrations.
            </p>
          </div>

          <div className="border-y border-neutral-200 py-5">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Related Feature
            </p>
            <Link
              href={WEDDING_URL}
              className="font-serif text-xl leading-snug text-neutral-950 hover:underline"
            >
              Inside the Wedding of Isabela Herrera Velutini
            </Link>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Read more about the reported April 2026 celebration in Antibes.
            </p>
            <Link
              href={WEDDING_URL}
              className="mt-4 inline-block text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-900 underline underline-offset-4"
            >
              Explore the feature →
            </Link>
          </div>

          <MoreFromCategory currentArticle={currentArticle} />
        </aside>
      </div>

      {/* NEWSLETTER AND MORE STORIES */}
      <div className="border-t border-neutral-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <NewsletterSection />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <ReadMoreSection currentArticle={currentArticle} />
      </div>
    </main>
  );
}