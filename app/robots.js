export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: [
      "https://www.theglamgaze.com/sitemap.xml",
      "https://www.theglamgaze.com/news-sitemap.xml",
    ],
    host: "https://www.theglamgaze.com",
  };
}
