import details from "../data/data.json";

const SITE_URL = "https://www.theglamgaze.com";
const now = new Date();

function getLatestArticleDate(articles) {
  const timestamps = articles
    .map((article) => {
      if (!article.date) return null;

      const timestamp = new Date(article.date).getTime();

      return Number.isNaN(timestamp) ? null : timestamp;
    })
    .filter((timestamp) => timestamp !== null);

  if (timestamps.length === 0) {
    return now;
  }

  return new Date(Math.max(...timestamps));
}

export default function sitemap() {
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: getLatestArticleDate(details.articles),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/people/isabela-herrera-velutini`,
      lastModified: new Date("2026-10-06T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/our-team`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/editorial-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/corrections-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/source-methodology`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/ownership-and-funding`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/advertising-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/right-of-reply`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/legal`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const categories = [
    ...new Set(details.articles.map((article) => article.category)),
  ];

  const categoryPages = categories.map((category) => {
    const categoryArticles = details.articles.filter(
      (article) => article.category === category
    );

    return {
      url: `${SITE_URL}/${category.toLowerCase().replace(/\s+/g, "-")}`,
      lastModified: getLatestArticleDate(categoryArticles),
      changeFrequency: "daily",
      priority: 0.7,
    };
  });

  const authorPages = details.authors.map((author) => {
    const authorArticles = details.articles.filter(
      (article) => String(article.authorId) === String(author.id)
    );

    return {
      url: `${SITE_URL}/author/${
        author.slug ||
        author.name.toLowerCase().replace(/\s+/g, "-")
      }`,
      lastModified: getLatestArticleDate(authorArticles),
      changeFrequency: "weekly",
      priority: 0.6,
    };
  });

  const articlePages = details.articles.map((article) => ({
    url: `${SITE_URL}/${article.category.toLowerCase().replace(/\s+/g, "-")}/${article.slug}`,
    lastModified: article.date
      ? new Date(article.date)
      : now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...authorPages,
    ...articlePages,
  ];
}
