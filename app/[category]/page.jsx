import { notFound } from "next/navigation";
import CelebrityStyleSection from "../component/CelebrityStyle";
import HomeGridCategory from "../component/HomeGridCategory";
import ReadMore from "../component/Latest";
import data from "@/data/data.json";

// Generate SEO Metadata
export async function generateMetadata({ params }) {
  const { category } = await params;

  const SITE_URL = "https://www.theglamgaze.com";
  const image = `${SITE_URL}/glam_gaze.png`;

  const validCategories = [
    "fashion",
    "teen",
    "style",
    "business",
    "actress",
    "culture",
    "living",
  ];

  if (!validCategories.includes(category.toLowerCase())) {
    return {};
  }

  const title = `${category.toUpperCase()} News, Trends & Latest Updates`;
  const description = `Explore the latest ${category} news, trends, and updates. Discover breaking stories, insights, and highlights in ${category}.`;

  return {
    metadataBase: new URL(SITE_URL),

    title,
    description,

    keywords: [
      category,
      `${category} news`,
      `${category} trends`,
      "latest updates",
    ],

    alternates: {
      canonical: `${SITE_URL}/${category}`,
    },

    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${category}`,
      siteName: "GLAM GAZE", // FIXED
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image, // FIXED
          width: 1200,
          height: 630,
          alt: `${category} news and trends`,
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

  const validCategories = [
    "fashion",
    "teen",
    "style",
    "business",
    "actress",
    "culture",
    "living",
  ];

  if (!validCategories.includes(category.toLowerCase())) {
    return notFound();
  }

  const filteredArticles = data.articles
    .filter(
      (a) => a.category.toLowerCase() === category.toLowerCase()
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const articles = filteredArticles.slice(0, 5);
  const celebrity = filteredArticles.slice(5, 9);
  const latest = filteredArticles.slice(9, 15);

  // JSON-LD Structured Data (ItemList)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category} News`,
    description: `Latest updates and stories in ${category}`,
    url: `https://yourdomain.com/${category}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: filteredArticles.slice(0, 10).map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://yourdomain.com/${category}/${article.slug}`,
        name: article.title,
      })),
    },
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADING */}
      <div className="text-center py-6 mb-10 mt-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide">
          <span className="uppercase">{category} -</span> News, Trends & Latest Updates
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base mt-3">
          Stay updated with the latest {category} news, trends, and updates. 
          Discover breaking stories, expert insights, and highlights shaping the world of {category}.
        </p>
      </div>

      <HomeGridCategory articles={articles} />
      <CelebrityStyleSection title={"LATEST STORIES"} articles={celebrity} />
      {latest.length >= 6 && <ReadMore articles={latest} />}

    </div>
  );
}