import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

export default function ReadMoreSection({ currentArticle }) {
  const authors = data.authors;

  const getAuthorName = (id) => {
    const author = authors.find((a) => a.id === id);
    return author ? author.name : "Unknown";
  };

  // Filter same category & exclude current article
  const relatedArticles = data.articles
    .filter(
      (a) =>
        a.category === currentArticle.category &&
        a.slug !== currentArticle.slug
    )
    .slice(0, 3); // only 3 articles

  if (relatedArticles.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6">

      {/* HEADING */}
      <div className="text-center border-y border-gray-300 py-5 mb-10">
        <h2 className="text-2xl font-semibold tracking-wide">
          Read More
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {relatedArticles.map((item, index) => (
          <Link href={`/${item.category}/${item.slug}`} key={index}>
            <article className="relative group cursor-pointer overflow-hidden">

              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* TEXT OVER IMAGE */}
              <div className="absolute bottom-0 p-5 text-white">

                <p className="text-[11px] uppercase tracking-widest mb-1">
                  {item.category}
                </p>

                <h3 className="text-lg font-semibold leading-snug group-hover:underline">
                  {item.title}
                </h3>

                <p className="text-[11px] uppercase mt-2 opacity-80">
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