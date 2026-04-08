import { notFound } from "next/navigation";
import Image from "next/image";
import data from "@/data/data.json";
import AuthorBox from "@/app/component/AuthorBox";
import NewsletterSection from "@/app/component/NewsLetter";
import ReadMoreSection from "@/app/component/ReadMore";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const article = data.articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const author = data.authors.find((a) => a.id === article.authorId);

  const SITE_URL = "https://theglamgaze.com";

  const imageUrl = `${SITE_URL}/${article.image}`;

  return {
    metadataBase: new URL(SITE_URL),

    title: article.title,
    description: article.excerpt,

    alternates: {
      canonical: `${SITE_URL}/news/${slug}`,
    },

    keywords: [article.category, "news", "latest news"],

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${SITE_URL}/news/${slug}`,
      type: "article",
      siteName: "GLAM GAZE",
      locale: "en_US",
      publishedTime: article.date,
      authors: [author?.name || "Unknown"],
      section: article.category,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [imageUrl],
      creator: "@yourhandle",
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  // Find article first
  const article = data.articles.find((a) => a.slug === slug);

  if (!article) {
    return notFound();
  }

  // Now safe to access author
  const author = data.authors.find((a) => a.id === article.authorId);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [article.image],
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: author?.name || "Unknown",
    },
    publisher: {
      "@type": "Organization",
      name: "Your Website Name",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
      },
    },
  };

  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
  
      <section className="px-4 sm:px-6 lg:px-8 py-8">

        {/* HEADER */}
        <div className="text-left">

          <p className="text-xs uppercase tracking-[2px] text-gray-500 mb-3">
            {article.category}
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-4">
            {article.title}
          </h1>

          <Link href={`/author/${author?.slug}`}>
            <p className="text-xs sm:text-sm text-black uppercase tracking-wide">
              BY {author?.name || "Unknown"}
            </p>
          </Link>
          

          <p className="text-xs text-gray-600 mb-6 uppercase tracking-wide">
            {article?.date}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* ARTICLE */}
          <article className="lg:col-span-2 max-w-3xl mx-auto lg:mx-0">

            {/* HERO IMAGE */}
            <div className="w-full mb-6 sm:mb-8">
              <Image
                src={article.image}
                alt={article.title}
                width={1200}
                height={700}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* CONTENT SECTIONS */}
            <div className="prose max-w-none text-base sm:text-lg">

              {[1, 2, 3, 4, 5, 6].map((num) => {
                const section = article[`content_section_${num}`];
                const image = article[`image${num}`];
                const source = article[`image${num}_source`];

                return (
                  <div key={num} className="pl-15 pr-5 max-w-3xl">
                    
                    {/* SECTION */}
                    {section?.trim() && (
                      <div
                        className="prose max-w-none text-base sm:text-lg 

                          [&_h1]:pt-6 [&_h1]:pb-3 
                          [&_h2]:pt-5 [&_h2]:pb-2 
                          [&_h3]:pt-4 [&_h3]:pb-2
                          [&_h4]:pt-3 [&_h4]:pb-1

                          [&_h2]:font-bold [&_h2]:text-xl sm:[&_h2]:text-2xl
                          [&_h3]:font-bold [&_h3]:text-lg sm:[&_h3]:text-xl
                          [&_h4]:font-bold [&_h4]:text-base

                          [&_p]:pt-3 [&_p]:pb-2

                          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-4
                          [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-4
                          [&_li]:my-2 [&_li]:leading-relaxed

                          [&_u]:underline [&_u]:underline-offset-2
                        "
                        dangerouslySetInnerHTML={{ __html: section }}
                      />
                    )}

                    {/* IMAGE */}
                    {image?.trim() && (
                      <div className="w-full my-6">
                        <Image
                          src={image}
                          alt={`Article image ${num}`}
                          width={1000}
                          height={600}
                          className="w-full h-auto object-contain"
                        />

                        {source && (
                          <p className="text-xs text-gray-500 mt-2">
                            Credits: {source}
                          </p>
                        )}
                      </div>
                    )}

                  </div>
                );
              })}

            </div>

            {/* AUTHOR BOX */}
            <AuthorBox author={author} />

          </article>

          {/* ADVERTISEMENT */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 mt-10 lg:mt-0">

              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-[550px] overflow-hidden group">

                  <Image
                    src="/ads/signal-2025-12-12-143957-1.jpeg"
                    alt="Advertisement"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 uppercase tracking-wider">
                    Ad
                  </span>

                </div>
              </a>

            </div>
          </div>

        </div>

        {/* EXTRA SECTIONS */}
        <NewsletterSection />

        <div className="mt-12 sm:mt-16">
          <ReadMoreSection currentArticle={article} />
        </div>

      </section>
    </>
  );
}