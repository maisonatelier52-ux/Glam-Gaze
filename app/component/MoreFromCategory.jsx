import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

export default function MoreFromCategory({ currentArticle }) {
  const related = data.articles
    .filter(
      (a) =>
        a.category === currentArticle.category &&
        a.slug !== currentArticle.slug
    )
    .slice(0, 5);

  if (related.length === 0) return null;

  return (
    <aside className="w-full">
      {/* Header */}
      <div className="border-y border-gray-300 py-3 mb-6">
        <p className="text-[10px] uppercase tracking-[3px] text-gray-400 mb-0.5">
          More From
        </p>
        <h3 className="text-base font-bold uppercase tracking-widest">
          {currentArticle.category}
        </h3>
      </div>

      {/* Article List */}
      <ul className="flex flex-col divide-y divide-gray-100">
        {related.map((item, index) => (
          <li key={index}>
            <Link
              href={`/${item.category}/${item.slug}`}
              title={item.title}
              className="group flex gap-4 py-4 items-start"
            >
              {/* Thumbnail */}
              <div className="relative w-20 h-20 shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold leading-snug group-hover:underline line-clamp-3">
                  {item.title}
                </h4>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 mt-2">
                  {item.date}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* View All */}
      <Link
        href={`/${currentArticle.category}`}
        className="mt-6 flex items-center justify-between w-full border border-black px-4 py-3 group hover:bg-black hover:text-white transition-colors duration-200"
      >
        <span className="text-[11px] uppercase tracking-[2px] font-semibold">
          View All {currentArticle.category}
        </span>
        <span className="text-lg leading-none group-hover:translate-x-1 transition-transform duration-200">
          →
        </span>
      </Link>
    </aside>
  );
}