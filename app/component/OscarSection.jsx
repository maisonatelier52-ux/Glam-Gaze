import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

export default function OscarsSection({ title, articles }) {
  const authors = data.authors;
  const getAuthorName = (id) => {
    const author = authors.find((a) => a.id === id);
    return author ? author.name : "Unknown";
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">

      {/* HEADER */}
      <div className="flex items-center gap-5 mb-10">
        <div className="flex-1 h-px bg-gray-200" />
        <h2 className="text-2xl font-semibold tracking-[0.2em] uppercase text-gray-500 whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* 4 ARTICLES LAYOUT */}
      {articles.length === 4 && (
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT — featured */}
          <Link href={`/${articles[0].category}/${articles[0].slug}`} className="group" title={`View ${articles[0].title}`}>
            <div className="relative h-[400px] overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                fill
                loading="lazy"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-xl font-semibold leading-snug group-hover:underline underline-offset-2">
                {articles[0].title}
              </h3>
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                By {getAuthorName(articles[0].authorId)}
              </p>
            </div>
          </Link>

          {/* RIGHT — stacked list */}
          <div className="divide-y divide-gray-100">
            {articles.slice(1).map((item, i) => (
              <Link
                key={i}
                href={`/${item.category}/${item.slug}`}
                title={`View ${item.title}`}
                className="flex gap-4 py-4 group"
              >
                <div className="relative w-40 h-28 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <h4 className="text-sm font-semibold leading-snug group-hover:underline underline-offset-2 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    By {getAuthorName(item.authorId)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 6 ARTICLES LAYOUT */}
      {articles.length === 6 && (
        <div className="grid lg:grid-cols-3 gap-10">
          {/* SIDE LIST */}
          <div className="divide-y divide-gray-100">
            {articles.slice(1, 4).map((item, i) => (
              <Link
                key={i}
                href={`/${item.category}/${item.slug}`}
                title={`View ${item.title}`}
                className="flex items-start gap-4 py-4 group"
              >
                {/* IMAGE */}
                <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes="96px"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                {/* TEXT */}
                <div className="flex-1">
                  <div className="text-lg font-semibold leading-snug group-hover:underline underline-offset-2 line-clamp-3">
                    {item.title}
                  </div>

                  <p className="text-xs text-gray-400 uppercase tracking-wide mt-2">
                    By {getAuthorName(item.authorId)}
                  </p>
                </div>

              </Link>
            ))}
          </div>

          {/* BIG FEATURE */}
          <Link
            href={`/${articles[0].category}/${articles[0].slug}`}
            className="lg:col-span-2 group"
            title={`View ${articles[0].title}`}
          >
            <div className="relative h-[420px] overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                fill
                loading="lazy"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-xl font-semibold leading-snug group-hover:underline underline-offset-2">
                {articles[0].title}
              </h3>
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                By {getAuthorName(articles[0].authorId)}
              </p>
            </div>
          </Link>

          

          {/* BOTTOM GRID */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-3 pt-2 border-t border-gray-100">
            {articles.slice(4).map((item, i) => (
              <Link key={i} href={`/${item.category}/${item.slug}`} className="group" title={`View ${item.title}`}>
                <div className="relative h-44 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <h4 className="text-sm font-semibold mt-3 leading-snug group-hover:underline underline-offset-2 line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                  By {getAuthorName(item.authorId)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* DEFAULT GRID */}
      {articles.length !== 4 && articles.length !== 6 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item, index) => (
            <Link key={index} href={`/${item.category}/${item.slug}`} className="group" title={`View ${item.title}`}>
              <div className="relative h-56 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="lazy"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="text-base font-semibold leading-snug group-hover:underline underline-offset-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  By {getAuthorName(item.authorId)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}