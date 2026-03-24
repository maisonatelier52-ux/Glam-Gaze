"use client";

import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json"

export default function HomeGridCategory({ articles = [] }) {
  // Ensure it's always an array
  const article = Array.isArray(articles) ? articles : [];

  const leftArticles = article.slice(0, 2);
  const centerArticle = article[2] || null;
  const rightArticles = article.slice(3, 5);

  const authors = data.authors;

  const getAuthorName = (id) => {
    const author = authors.find((a) => a.id === id);
    return author ? author.name : "Unknown";
  };

  return (
    <section className="max-w-7xl mx-auto pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT COLUMN (1) */}
        <div className="lg:col-span-1 flex flex-col justify-between h-full">
            {leftArticles.map((article) => (
                <Link key={article.slug} href={`/${article.category}/${article.slug}`}>
                <article className="group cursor-pointer">
                    <Image
                    src={article.image}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="w-full h-80 object-cover"
                    />

                    <div className="text-center">
                        <p className="text-md font-semibold uppercase text-gray-500 pt-2">{article.category}</p>

                        <h3 className="mt-1 text-lg font-semibold hover:underline">
                        {article.title}

                        </h3>
                        <p className=" text-xs py-2 font-semibold uppercase tracking-wide text-center">
                            {getAuthorName(article.authorId)}
                        </p>
                    </div>
                </article>
                </Link>
            ))}
        </div>

        {/* CENTER COLUMN (2) */}
        <div className="lg:col-span-2">
        {centerArticle && (
            <Link href={`/${centerArticle.category}/${centerArticle.slug}`}>
            <article className="group cursor-pointer">
                <Image
                src={centerArticle.image}
                alt={centerArticle.title}
                width={900}
                height={500}
                className="w-full h-[840px] object-cover"
                />
                <p className="text-md font-semibold text-center uppercase text-gray-500 pt-2">{centerArticle.category}</p>

                <h2 className="mt-2 text-2xl font-bold hover:underline text-center">
                {centerArticle.title}
                </h2>

                <p className="mt-2 text-sm py-2 font-semibold uppercase tracking-wide text-center">
                {getAuthorName(centerArticle.authorId)}
                </p>
            </article>
            </Link>
        )}
        </div>

        {/* RIGHT COLUMN (3) */}
        <div className="lg:col-span-1 flex flex-col justify-between h-full">
            {rightArticles.map((article) => (
                <Link key={article.slug} href={`/${article.category}/${article.slug}`}>
                <article className="group cursor-pointer">
                    <Image
                    src={article.image}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="w-full h-80 object-cover"
                    />

                    <div className="text-center">
                        <p className="text-md font-semibold uppercase text-gray-500 pt-2">{article.category}</p>

                        <h3 className="mt-3 text-lg font-semibold hover:underline">
                        {article.title}

                        </h3>
                        <p className="text-xs pt-1 font-semibold uppercase tracking-wide text-center">
                            {getAuthorName(article.authorId)}
                        </p>
                    </div>
                </article>
                </Link>
            ))}
        </div>
    </div>
    </section>
  );
}