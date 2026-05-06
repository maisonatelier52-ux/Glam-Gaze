import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

const fashionQuotes = [
  {
    text: "Fashion is the armor to survive the reality of everyday life.",
    author: "Bill Cunningham",
  },
  {
    text: "Elegance is not about being noticed, it's about being remembered.",
    author: "Giorgio Armani",
  },
  {
    text: "Style is a way to say who you are without having to speak.",
    author: "Rachel Zoe",
  },
  {
    text: "Fashions fade, style is eternal.",
    author: "Yves Saint Laurent",
  },
  {
    text: "The beauty of dressing is to find what works for you and then own it completely.",
    author: "Diane von Furstenberg",
  },
];

export default function ReadMore({ articles }) {
  const authors = data.authors;

  const getAuthorName = (id) => {
    const author = authors.find((a) => a.id === id);
    return author ? author.name : "Unknown";
  };

  const quote = fashionQuotes[Math.floor(Math.random() * fashionQuotes.length)];
  return (
    <section className="max-w-7xl mx-auto px-6 pb-14">
      {/* HEADER */}
      <div className="text-center border-y border-gray-300 py-5 mb-10">
        <h2 className="text-3xl font-bold tracking-wide">READ MORE</h2>
      </div>

      {/* LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT (2/3) */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {articles.map((item, index) => (
              <Link
                href={`/${item.category}/${item.slug}`}
                key={index}
                title={`View ${item.title}`}
              >
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

        {/* RIGHT (1/3) → FASHION QUOTE */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="relative w-full h-[600px] bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center px-10 py-12">

              {/* Top ornament */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                <div className="w-px h-8 bg-[#c9a96e]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
              </div>

              {/* Corner accents */}
              <span className="absolute top-5 left-5 w-6 h-6 border-t border-l border-[#c9a96e] opacity-60" />
              <span className="absolute top-5 right-5 w-6 h-6 border-t border-r border-[#c9a96e] opacity-60" />
              <span className="absolute bottom-5 left-5 w-6 h-6 border-b border-l border-[#c9a96e] opacity-60" />
              <span className="absolute bottom-5 right-5 w-6 h-6 border-b border-r border-[#c9a96e] opacity-60" />

              {/* Subtle background texture overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
                  backgroundSize: "12px 12px",
                }}
              />

              {/* Large decorative quotation mark */}
              <span
                className="absolute top-14 left-8 text-[100px] leading-none text-[#c9a96e] opacity-20 select-none font-serif"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <blockquote className="relative z-10 text-center">
                <p
                  className="text-white text-xl leading-relaxed font-light tracking-wide"
                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                  &ldquo;{quote.text}&rdquo;
                </p>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mt-8">
                  <span className="flex-1 h-px bg-[#c9a96e] opacity-40 max-w-[40px]" />
                  <span className="w-1 h-1 rounded-full bg-[#c9a96e]" />
                  <span className="flex-1 h-px bg-[#c9a96e] opacity-40 max-w-[40px]" />
                </div>

                {/* Author */}
                <footer className="mt-5">
                  <cite
                    className="not-italic text-[#c9a96e] text-[11px] uppercase tracking-[0.25em] font-medium"
                  >
                    {quote.author}
                  </cite>
                </footer>
              </blockquote>

              {/* Bottom ornament */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                <div className="w-px h-8 bg-[#c9a96e]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}