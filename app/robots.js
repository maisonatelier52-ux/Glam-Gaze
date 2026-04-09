export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.theglamgaze.com/sitemap.xml",
    host: "https://www.theglamgaze.com",
  };
}
