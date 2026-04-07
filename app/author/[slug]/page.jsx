import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

export default async function AuthorPage({ params }) {
  const { slug } = await params;  

  const author = data.authors.find((a) => a.slug === slug);

  if (!author) return notFound();

  const articles = data.articles
    .filter((a) => a.authorId === author.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-6xl mx-auto">

      {/* AUTHOR HEADER */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-12 border-b pb-8">

        <Image
          src={author.photo || "/author.jpg"}
          alt={author.name}
          width={120}
          height={120}
          className="w-28 h-28 rounded-full object-cover"
        />

        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-serif font-semibold mb-2">
            {author.name}
          </h1>

          <p className="text-gray-600 text-sm sm:text-base max-w-xl">
            {author.bio || "Fashion writer at Glam Gaze."}
          </p>

          <p className="text-xs uppercase tracking-wide text-gray-500 mt-2">
            {articles.length} Articles
          </p>
        </div>
      </div>

      {/* ARTICLES GRID */}
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.category}/${article.slug}`}
            >
              <article className="group cursor-pointer">

                <div className="overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="mt-3">
                  <p className="text-[10px] uppercase text-gray-500 mb-1">
                    {article.category}
                  </p>

                  <h3 className="text-base sm:text-lg font-semibold group-hover:underline leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {article.date}
                  </p>
                </div>

              </article>
            </Link>
          ))}

        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10">
          No articles published yet.
        </p>
      )}
    </section>
  );
}