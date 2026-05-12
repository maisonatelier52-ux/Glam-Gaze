import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

import {
  FaReddit,
  FaMedium,
  FaQuora,
} from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const author = data.authors.find((a) => a.slug === slug);

  if (!author) return {};

  return {
    title: `${author.name} - GLAM GAZE`,
    description:
      author.meta_description ||
      `Read articles and insights by ${author.name} on GLAM GAZE.`,

    openGraph: {
      title: author.name,
      description: author.meta_description,
      url: `https://www.theglamgaze.com/author/${slug}`,
      type: "profile",
      siteName: "GLAM GAZE",
      images: [
        {
          url: `https://www.theglamgaze.com${author.photo || "/author.jpg"}`,
          width: 800,
          height: 800,
          alt: author.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: author.name,
      description: author.meta_description,
      images: [`https://www.theglamgaze.com${author.photo || "/author.jpg"}`],
    },
  };
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;

  const author = data.authors.find((a) => a.slug === slug);
  if (!author) return notFound();

  const articles = data.articles
    .filter((a) => a.authorId === author.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    description: author.meta_description,
    url: `https://www.theglamgaze.com/author/${slug}`,
    image: `https://www.theglamgaze.com${author.photo || "/author.jpg"}`,
    sameAs: [
      author.reddit,
      author.medium,
      author.quora,
    ].filter(Boolean),
    worksFor: {
      "@type": "Organization",
      name: "GLAM GAZE",
      url: "https://www.theglamgaze.com",
    },
  };

  return (
    <main className="bg-white text-black">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO (Editorial Style) */}
      <section className="border-b border-black/10 py-16 text-center px-4">
        <div className="max-w-3xl mx-auto">

          <Image
            src={author.photo || "/author.jpg"}
            alt={author.name}
            width={140}
            height={140}
            className="mx-auto w-28 h-28 rounded-full object-cover mb-6"
          />

          <h1 className="text-4xl sm:text-5xl font-serif font-semibold tracking-tight mb-4">
            {author.name}
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {author.bio || "Writer at GLAM GAZE covering fashion and culture."}
          </p>

          {/* SOCIAL MEDIA */}
          <div className="flex items-center justify-center gap-5 mt-6">

            {author.reddit && (
              <Link
                href={author.reddit}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${author.name} Reddit`}
                className="text-gray-500 hover:text-black transition"
              >
                <FaReddit className="w-5 h-5" />
              </Link>
            )}

            {author.medium && (
              <Link
                href={author.medium}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${author.name} Medium`}
                className="text-gray-500 hover:text-black transition"
              >
                <FaMedium className="w-5 h-5" />
              </Link>
            )}

            {author.quora && (
              <Link
                href={author.quora}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${author.name} Quora`}
                className="text-gray-500 hover:text-black transition"
              >
                <FaQuora className="w-5 h-5" />
              </Link>
            )}

          </div>

          <p className="mt-6 text-xs tracking-[0.2em] uppercase text-gray-500">
            {articles.length} Articles
          </p>
        </div>
      </section>

      {/* SECTION TITLE */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-10">
        <h2 className="text-lg tracking-[0.3em] uppercase text-gray-500">
          Latest Articles
        </h2>
      </div>

      {/* ARTICLES GRID */}
      {articles.length > 0 ? (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/${article.category}/${article.slug}`}
                title={`Read "${article.title}"`}
                className="group"
              >
                <article>

                  {/* IMAGE */}
                  <div className="overflow-hidden bg-black">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={500}
                      height={300}
                      className="w-full h-[240px] object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="mt-4">

                    <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">
                      {article.category}
                    </p>

                    <h3 className="text-lg font-medium leading-snug group-hover:underline">
                      {article.title}
                    </h3>

                    <p className="text-xs text-gray-400 mt-2">
                      {article.date}
                    </p>

                  </div>
                </article>
              </Link>
            ))}

          </div>
        </section>
      ) : (
        <p className="text-center text-gray-400 py-20">
          No articles published yet.
        </p>
      )}
    </main>
  );
}