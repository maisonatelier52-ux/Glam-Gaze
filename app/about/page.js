
// SEO Metadata
export async function generateMetadata() {
  return {
    title: "About Us - Your Brand",
    description:
      "Learn more about our mission, vision, and the stories shaping fashion, culture, and modern lifestyle.",
    openGraph: {
      title: "About Us - Your Brand",
      description:
        "Explore our story, values, and what we cover across fashion, culture, and lifestyle.",
      url: "https://yourdomain.com/about",
      type: "website",
    },
  };
}


import Image from "next/image";
import NewsletterSection from "../component/NewsLetter";
import Link from "next/link";

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us",
    url: "https://yourdomain.com/about",
    description:
      "Learn about our platform, our mission, and what we cover in fashion, culture, and lifestyle.",
  };

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO (Modern with overlay) */}
      <section className="relative mb-20 rounded-2xl overflow-hidden">
        <Image
          src="/about.webp"
          alt="Fashion editorial"
          width={1400}
          height={700}
          className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold mb-4">
            About Us
          </h1>
          <p className="text-gray-200 max-w-2xl text-sm sm:text-base lg:text-lg">
            A global destination for fashion, culture, and modern storytelling.
          </p>
        </div>
      </section>

      {/* INTRO CARD (Glass Effect) */}
      <section className="mb-20 -mt-28 relative z-10">
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-10 max-w-3xl mx-auto text-center">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We are a digital-first platform exploring the intersection of{" "}
            <span className="font-medium">fashion, identity, and culture</span>.
            From runway to street style, we bring you stories that inspire,
            inform, and shape global conversations.
          </p>
        </div>
      </section>

      {/* OUR STORY (Better layout) */}
      <section className="grid lg:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded with a passion for storytelling and style, our platform
            celebrates creativity across fashion and culture. We spotlight
            emerging voices while bringing global trends to the forefront.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to redefine modern luxury through meaningful
            narratives and a forward-thinking editorial vision.
          </p>
        </div>

        <div className="relative">
          <Image
            src="/about_1.webp"
            alt="Fashion team"
            width={600}
            height={500}
            className="w-full h-[320px] sm:h-[400px] object-cover rounded-xl"
          />
        </div>
      </section>

      {/* WHAT WE COVER (Modern Cards) */}
      <section className="mb-24">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
          What We Cover
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Fashion", "Style", "Culture", "Living"].map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-gray-200 hover:shadow-xl transition duration-300 bg-white"
            >
              <Link href={`/${item.toLowerCase()}`} title={`View ${item} articles`}>
              <h3 className="font-semibold text-lg mb-2 group-hover:underline">
                {item}
              </h3>
              </Link>
              <p className="text-sm text-gray-600">
                Discover curated insights and stories shaping{" "}
                {item.toLowerCase()} today.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <NewsletterSection />

    </main>
  );
}