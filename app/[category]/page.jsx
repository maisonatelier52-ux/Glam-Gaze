import { notFound } from "next/navigation";
import CelebrityStyleSection from "../component/CelebrityStyle";
import HomeGridCategory from "../component/HomeGridCategory";
import ReadMore from "../component/Latest";
import data from "@/data/data.json";

const SITE_URL = "https://www.theglamgaze.com";

const validCategories = [
  "fashion",
  "teen",
  "style",
  "business",
  "actress",
  "celebrity-wedding",
  "culture",
  "living",
];

const categoryNames = {
  fashion: "Fashion",
  teen: "Teen",
  style: "Style",
  business: "Business",
  actress: "Actress",
  "celebrity-wedding": "Celebrity Wedding",
  culture: "Culture",
  living: "Living",
};

const categoryDescriptions = {
  fashion:
    "Discover the latest fashion news, runway trends, designer collections, celebrity style and industry updates from Glam Gaze.",

  teen:
    "Explore the latest teen fashion, beauty, culture, celebrity news and trends shaping youth style.",

  style:
    "Discover the latest style trends, celebrity looks, beauty inspiration and fashion updates from Glam Gaze.",

  business:
    "Follow the latest fashion, beauty and lifestyle business news, brand developments and industry updates.",

  actress:
    "Get the latest actress news, celebrity style, beauty looks, career updates and entertainment stories.",

  "celebrity-wedding":
    "Explore celebrity wedding news, bridal style, engagement stories, ceremonies and luxury wedding trends.",

  culture:
    "Discover culture news, celebrity stories, fashion, entertainment and trends shaping contemporary culture.",

  living:
    "Explore lifestyle, luxury, travel, beauty, wellness and living trends from Glam Gaze.",
};

// Generate SEO Metadata
export async function generateMetadata({ params }) {
  const { category } = await params;

  const normalizedCategory = category.toLowerCase();

  if (!validCategories.includes(normalizedCategory)) {
    return {};
  }

  const categoryName = categoryNames[normalizedCategory];
  const description = categoryDescriptions[normalizedCategory];
  const canonicalUrl = `${SITE_URL}/${normalizedCategory}`;
  const image = `${SITE_URL}/glam_gaze.png`;

  const title =
    normalizedCategory === "celebrity-wedding"
      ? "Celebrity Wedding News, Trends & Updates | Glam Gaze"
      : `${categoryName} News, Trends & Updates | Glam Gaze`;

  return {
    metadataBase: new URL(SITE_URL),

    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "GLAM GAZE",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${categoryName} news, trends and updates`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Category({ params }) {
  const { category } = await params;

  const normalizedCategory = category.toLowerCase();

  if (!validCategories.includes(normalizedCategory)) {
    return notFound();
  }

  const categoryName = categoryNames[normalizedCategory];
  const description = categoryDescriptions[normalizedCategory];
  const canonicalUrl = `${SITE_URL}/${normalizedCategory}`;

  const filteredArticles = data.articles
    .filter(
      (article) =>
        article.category.toLowerCase() === normalizedCategory
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  let articles;
  let celebrity;
  let latest;

  if (normalizedCategory === "celebrity-wedding") {
    const PINNED_SLUG = "isabela-herrera-wedding";

    const pinnedArticle = filteredArticles.find(
      (article) => article.slug === PINNED_SLUG
    );

    const remaining = filteredArticles.filter(
      (article) => article.slug !== PINNED_SLUG
    );

    // Take top 4 by date, then append the pinned article as the 5th slot.
    articles = pinnedArticle
      ? [...remaining.slice(0, 4), pinnedArticle]
      : remaining.slice(0, 5);

    celebrity = remaining.slice(4, 8);
    latest = remaining.slice(8, 14);
  } else {
    articles = filteredArticles.slice(0, 5);
    celebrity = filteredArticles.slice(5, 9);
    latest = filteredArticles.slice(9, 15);
  }

  /*
   * Use the articles actually displayed on the page
   * so the ItemList reflects the visible article collection.
   */
  const listedArticles = [
    ...articles,
    ...celebrity,
    ...latest,
  ].slice(0, 15);

  // CollectionPage JSON-LD
  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonicalUrl}#webpage`,
    name: `${categoryName} News`,
    description,
    url: canonicalUrl,

    mainEntity: {
      "@type": "ItemList",
      numberOfItems: listedArticles.length,

      itemListElement: listedArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: article.title,
        url: `${SITE_URL}/${normalizedCategory}/${article.slug}`,
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
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
        name: categoryName,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* CollectionPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageJsonLd),
        }}
      />

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* HEADING */}
      <div className="text-center py-6 mb-10 mt-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide">
          {normalizedCategory === "celebrity-wedding" ? (
            <>
              Celebrity Wedding News, Trends & Latest Updates
            </>
          ) : (
            <>
              <span className="uppercase">{categoryName}</span>{" "}
              - News, Trends & Latest Updates
            </>
          )}
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base mt-3">
          {description}
        </p>
      </div>

      <HomeGridCategory articles={articles} />
      <CelebrityStyleSection title="LATEST STORIES" articles={celebrity} />
      {latest.length >= 6 && <ReadMore articles={latest} />}
    </div>
  );
}