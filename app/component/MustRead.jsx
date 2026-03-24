"use client";

import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

export default function MustRead({ title, articles }) {
  const authors = data.authors;

  const getAuthorName = (id) => {
    const author = authors.find((a) => a.id === id);
    return author ? author.name : "Unknown";
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pb-14 bg-gray-100">

      {/* HEADER */}
      <div className="text-center border-y border-gray-300 py-5 mb-10">
        <h2 className="text-3xl font-bold tracking-wide">
          MUST READ
        </h2>
      </div>

      {/* 3 COLUMN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {articles.map((item, index) => (
          <Link href={`/${item.category}/${item.slug}`} key={index}>
            <article className="flex gap-4 group cursor-pointer">

              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                width={160}
                height={120}
                className="w-32 h-28 object-cover flex-shrink-0"
              />

              {/* TEXT */}
              <div className="flex flex-col justify-between">
                
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                    {item.category}
                  </p>

                  <h3 className="text-sm font-semibold mt-1 group-hover:underline leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[11px] uppercase text-gray-500 mt-2">
                  BY {getAuthorName(item.authorId)}
                </p>

              </div>

            </article>
          </Link>
        ))}

      </div>

    </section>
  );
}