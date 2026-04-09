import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

export default function ReadMore({ articles }) {
  const authors = data.authors;

  const getAuthorName = (id) => {
    const author = authors.find((a) => a.id === id);
    return author ? author.name : "Unknown";
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pb-14">

      {/* HEADER */}
      <div className="text-center border-y border-gray-300 py-5 mb-10">
        <h2 className="text-3xl font-bold tracking-wide">
          READ MORE
        </h2>
      </div>

      {/* LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT (2/3) */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            
            {articles.map((item, index) => (
              <Link href={`/${item.category}/${item.slug}`} key={index} title={`View ${item.title}`}>
                <article className="group cursor-pointer">

                  {/* IMAGE */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    loading="lazy"
                    className="w-full h-44 object-cover"
                  />

                  {/* TEXT */}
                  <p className="text-[11px] font-bold uppercase mt-3 tracking-wider text-gray-500">
                    {item.category}
                  </p>

                  <h3 className="text-lg font-semibold mt-1 group-hover:underline leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[11px] uppercase text-gray-500 mt-2">
                    BY {getAuthorName(item.authorId)}
                  </p>

                </article>
              </Link>
            ))}

          </div>
        </div>

        {/* RIGHT (1/3) → AD */}
        <div className="lg:col-span-1">
            <div className="sticky top-24">

                <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                title="View Advertisement"
                className="block group"
                >
                    <div className="relative w-full h-[600px] overflow-hidden border border-gray-300">
                        
                        {/* AD IMAGE */}
                        <Image
                        src="/ads/signal-2025-12-12-143957-1.jpeg"
                        alt="Advertisement"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* OPTIONAL LABEL */}
                        <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 uppercase tracking-wider">
                        Ad
                        </span>

                    </div>
                </Link>

            </div>
        </div>

      </div>

    </section>
  );
}