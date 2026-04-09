import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

export default function CelebrityStyleSection({ title, articles }) {
  const authors = data.authors;

  const getAuthorName = (id) => {
    const author = authors.find((a) => a.id === id);
    return author ? author.name : "Unknown";
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pb-14">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8 border-y border-gray-300">
        <div className="w-16"></div>

        <h2 className="text-3xl font-bold tracking-wide text-center py-5">
          {title}
        </h2>

        <div className="w-16"></div>
      </div>

      {/* GRID (4 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {articles.slice(0, 4).map((item, index) => (
          <Link href={`/${item.category}/${item.slug}`} key={index} title={`View ${item.title}`}>
            <article className="group cursor-pointer">
              
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="w-full h-48 object-cover"
              />

              <p className="text-[12px] font-bold uppercase mt-3 tracking-wider text-gray-500">
                {item.category}
              </p>

              <h3 className="font-semibold text-lg mt-1 group-hover:underline">
                {item.title}
              </h3>

              <p className="text-[12px] font-bold uppercase mt-3 tracking-wider">
                BY {getAuthorName(item.authorId)}
              </p>

            </article>
          </Link>
        ))}
      </div>

    </section>
  );
}