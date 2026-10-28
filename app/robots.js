const SITE = "https://www.theglamgaze.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: [
      `${SITE}/sitemap.xml`,
      `${SITE}/news-sitemap.xml`,
    ],
    host: SITE,
  };
}