import CelebrityStyleSection from "./component/CelebrityStyle";
import HomeGrid from "./component/HomeGrid";
import MustRead from "./component/MustRead";
import OscarsSection from "./component/OscarSection";
import data from "@/data/data.json";
import Latest from "./component/Latest";
import NewsletterModal from "./component/NewsLetterModal";

export async function generateMetadata() {
  const title = "GLAM GAZE | Latest Fashion, Style, Business News";
  const description =
    "Discover the latest trends in fashion, celebrity style, business and living. Stay updated with fresh stories and insights.";

  return {
    title,
    description,
    keywords: [
      "fashion news",
      "celebrity style",
      "business trends",
      "culture",
      "lifestyle",
    ],
    openGraph: {
      title,
      description,
      url: "https://yourdomain.com",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function Home() {
  const sortedDate = [...data.articles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const used = new Set();

  const getArticles = (filterFn, limit) => {
    const result = [];

    for (const article of sortedDate) {
      if (!used.has(article.slug) && filterFn(article)) {
        result.push(article);
        used.add(article.slug);
      }
      if (result.length === limit) break;
    }

    return result;
  };

  const homeGrid = getArticles(() => true, 7);
  const fashionStyle = getArticles(
    (a) => ["fashion", "style"].includes(a.category),
    8
  );
  const celebrity = getArticles((a) => a.category === "actress", 4);
  const trendingNow = getArticles(() => true, 6);
  const mustRead = getArticles(() => true, 3);
  const nextGen = getArticles((a) => a.category === "teen", 6);
  const businessSection = getArticles(
    (a) => a.category === "business",
    6
  );
  const cultureLiving = getArticles(
    (a) => ["culture", "living"].includes(a.category),
    9
  );
  const latestStories = sortedDate.slice(30, 39);

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Your Website Name",
    url: "https://yourdomain.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://yourdomain.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sortedDate.slice(0, 10).map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://yourdomain.com/${article.category}/${article.slug}`,
        name: article.title,
      })),
    },
  };

  return (
    <div className="px-8">
      {/* ✅ JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


      {/* ✅ SEO INTRO */}
      <section className="sr-only mx-auto max-w-4xl py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
          Latest Fashion, Celebrity Style & Business News
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Stay ahead with <strong>GLAM GAZE</strong>, your go-to destination for the
          latest in fashion trends, celebrity style, business insights, and modern
          lifestyle. Explore curated stories covering runway highlights, industry
          movements, cultural shifts, and next-gen trends shaping the future.
        </p>
      </section>

      <HomeGrid articles={homeGrid} />

      <OscarsSection title={"FASHION & STYLE"} articles={fashionStyle} />

      <CelebrityStyleSection
        title={"CELEBRITY STYLE"}
        articles={celebrity}
      />

      <OscarsSection title={"TRENDING NOW"} articles={trendingNow} />

      <MustRead title={"MUST READ"} articles={mustRead} />

      <OscarsSection title={"NEXT GEN"} articles={nextGen} />

      <OscarsSection title={"BUSINESS & POWER"} articles={businessSection} />

      <OscarsSection
        title={"CULTURE & LIVING"}
        articles={cultureLiving}
      />

      <Latest articles={latestStories} />
      <NewsletterModal />

    </div>
  );
}