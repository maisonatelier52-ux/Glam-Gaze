import { notFound } from "next/navigation";
import CelebrityStyleSection from "../component/CelebrityStyle";
import HomeGridCategory from "../component/HomeGridCategory";
import ReadMore from "../component/Latest";
import data from "@/data/data.json";

// ✅ Generate SEO Metadata
export async function generateMetadata({ params }) {
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
    return {};
  }

  const title = `${category.toUpperCase()} News, Trends & Latest Updates`;
  const description = `Explore the latest ${category} news, trends, and insights. Stay updated with fresh stories and highlights in ${category}.`;

  return {
    title,
    description,
    keywords: [category, `${category} news`, `${category} trends`],
    openGraph: {
      title,
      description,
      url: `https://yourdomain.com/${category}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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

  // ✅ JSON-LD Structured Data (ItemList)
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

      {/* ✅ JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADING */}
      <div className="text-center py-6 mb-10 mt-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide uppercase">
          {category}
        </h1>
      </div>

      <HomeGridCategory articles={articles} />
      <CelebrityStyleSection title={"LATEST STORIES"} articles={celebrity} />
      {latest.length >= 6 && <ReadMore articles={latest} />}

    </div>
  );
}