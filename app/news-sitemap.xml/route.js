import details from "../../data/data.json";

const SITE_URL = "https://www.theglamgaze.com";
const PUBLICATION_NAME = "GLAM GAZE";
const PUBLICATION_LANGUAGE = "en";

// Escape special XML characters so titles don't break the feed
function escapeXml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const now = new Date();
  const twoDaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);

  const recentArticles = details.articles
    .filter((article) => {
      if (!article.date) return false;
      const articleDate = new Date(article.date);
      return articleDate >= twoDaysAgo && articleDate <= now;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 100);

  const urlEntries = recentArticles
    .map((article) => {
      const categorySlug = article.category.toLowerCase().replace(/\s+/g, "-");
      const loc = `${SITE_URL}/${categorySlug}/${article.slug}`;
      const pubDate = new Date(article.date).toISOString();

      return `
  <url>
    <loc>${loc}</loc>
    <news:news>
      <news:publication>
        <news:name>${escapeXml(PUBLICATION_NAME)}</news:name>
        <news:language>${PUBLICATION_LANGUAGE}</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title>${escapeXml(article.title)}</news:title>
    </news:news>
  </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  });
}