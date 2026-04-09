"use client";

import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

export default function HomeGrid({ articles = [] }) {
  const leftArticles = articles.slice(0, 2);
  const centerArticle = articles[2];
  const rightArticles = articles.slice(3, 7);

  const authors = data.authors;

  const getAuthorName = (id) => {
    const author = authors.find((a) => a.id === id);
    return author ? author.name : "Unknown";
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {leftArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.category}/${article.slug}`}
              title={`View ${article.title}`}
            >
              <article className="group cursor-pointer">
                
                <div className="overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="w-full h-[180px] sm:h-[220px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <p className="mt-3 text-base sm:text-lg font-semibold group-hover:underline">
                  {article.title}
                </p>
              </article>
            </Link>
          ))}
        </div>

        {/* CENTER COLUMN */}
        <div className="md:col-span-2 lg:col-span-2">
          {centerArticle && (
            <Link
              href={`/${centerArticle.category}/${centerArticle.slug}`}
              title={`View ${centerArticle.title}`}
            >
              <article className="group cursor-pointer text-center">
                
                <div className="overflow-hidden">
                  <Image
                    src={centerArticle.image}
                    alt={centerArticle.title}
                    width={900}
                    height={500}
                    className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold group-hover:underline">
                  {centerArticle.title}
                </h2>

                <p className="mt-2 text-xs sm:text-sm py-2 font-semibold uppercase tracking-wide">
                  BY {getAuthorName(centerArticle.authorId)}
                </p>
              </article>
            </Link>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col divide-y divide-gray-200">
          {rightArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.category}/${article.slug}`}
              title={`View ${article.title}`}
              className="py-3 first:pt-0 last:pb-0"
            >
              <article className="flex gap-2 items-start group cursor-pointer">
                
                {/* TEXT */}
                <div className="flex-1 pr-1">
                  <p className="text-[12px] sm:text-[10px] font-semibold uppercase text-gray-500 pb-2">
                    {article.category}
                  </p>

                  <p className="text-sm sm:text-base font-semibold leading-tight group-hover:underline pb-2">
                    {article.title}
                  </p>

                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase">
                    BY {getAuthorName(article.authorId)}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={300}
                    height={300}
                    className="w-24 h-36 sm:w-28 sm:h-36 object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

              </article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}