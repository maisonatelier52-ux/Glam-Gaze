"use client";

import Image from "next/image";
import NewsletterSection from "../component/NewsLetter";

export default function AboutPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold mb-6">
          About Us
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
          We are a global fashion destination covering style, culture, style, and luxury living—bringing you the stories shaping the world of fashion.
        </p>
      </section>

      {/* HERO IMAGE */}
      <div className="mb-16">
        <Image
          src="/dims-apnews.webp"
          alt="Fashion editorial"
          width={1200}
          height={700}
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
        />
      </div>

      {/* OUR STORY */}
      <section className="grid lg:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded with a passion for storytelling and style, our platform explores the intersection of fashion, culture, and identity. From runway trends to street style, we curate content that inspires and informs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to celebrate creativity, spotlight emerging voices, and redefine modern luxury through a digital-first lens.
          </p>
        </div>

        <Image
          src="/dims-apnews.webp"
          alt="Fashion team"
          width={600}
          height={500}
          className="w-full h-[300px] sm:h-[350px] object-cover"
        />
      </section>

      {/* WHAT WE COVER */}
      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
          What We Cover
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Fashion", "Style", "Culture", "Living"].map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 p-6 text-center hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{item}</h3>
              <p className="text-sm text-gray-600">
                Discover the latest in {item.toLowerCase()} trends, insights, and stories.
              </p>
            </div>
          ))}
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}