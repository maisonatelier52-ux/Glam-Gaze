import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

export default function MustRead({ articles }) {
  const authors = data.authors;

  const getAuthorName = (id) => {
    const author = authors.find((a) => a.id === id);
    return author ? author.name : "Unknown";
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-8 bg-black text-white">

      {/* HEADER */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <span className="h-px w-10 bg-gray-700"></span>

        <h2 className="text-2xl md:text-3xl font-serif tracking-[0.25em] uppercase text-white">
          {"Must Read"}
        </h2>

        <span className="h-px w-10 bg-gray-700"></span>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">

        {articles.map((item, index) => (
          <Link href={`/${item.category}/${item.slug}`} key={index} title={`View ${item.title}`}>
            <article className="flex gap-4 group cursor-pointer transition-all duration-300 pb-5 border-b border-gray-800 hover:border-gray-500">

              {/* IMAGE */}
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={160}
                  height={120}
                  className="w-32 h-28 object-cover flex-shrink-0 
                             transition-all duration-500 
                             grayscale group-hover:grayscale-0 
                             group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col justify-between">

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                    {item.category}
                  </p>

                  <h3 className="text-sm md:text-base font-medium mt-1 leading-snug text-gray-200 
                                 group-hover:text-white 
                                 group-hover:underline decoration-2 underline-offset-4">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[10px] uppercase text-gray-500 mt-3 tracking-wider">
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