"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import data from "@/data/data.json";

export default function OscarsSection({ title, articles }) {
  const scrollRef = useRef(null);

  const authors = data.authors;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerScroll, setItemsPerScroll] = useState(3);

  const getAuthorName = (id) => {
    const author = authors.find((a) => a.id === id);
    return author ? author.name : "Unknown";
  };

  // RESPONSIVE ITEMS COUNT
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsPerScroll(1); // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerScroll(2); // tablet
      } else {
        setItemsPerScroll(3); // desktop
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const totalPages = Math.ceil(articles.length / itemsPerScroll);

  // SCROLL
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth;

    if (direction === "right" && currentIndex < totalPages - 1) {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    if (direction === "left" && currentIndex > 0) {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  // TRACK SCROLL
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(
        container.scrollLeft / container.offsetWidth
      );
      setCurrentIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 pt-3">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6 border-y border-gray-300">

        <div className="w-10 sm:w-16"></div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center py-4">
          {title}
        </h2>

        {/* CONTROLS */}
        <div className="flex items-center gap-2 sm:gap-3">

          <button
            onClick={() => scroll("left")}
            disabled={currentIndex === 0}
            className={`p-2 ${
              currentIndex === 0
                ? "text-gray-300 cursor-not-allowed"
                : "hover:opacity-70"
            }`}
          >
            <FiChevronLeft size={22} />
          </button>

          <span className="text-xs sm:text-sm font-semibold min-w-[45px] text-center">
            {currentIndex + 1} / {totalPages}
          </span>

          <button
            onClick={() => scroll("right")}
            disabled={currentIndex >= totalPages - 1}
            className={`p-2 ${
              currentIndex >= totalPages - 1
                ? "text-gray-300 cursor-not-allowed"
                : "hover:opacity-70"
            }`}
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* SCROLL AREA */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1"
      >
        {articles.map((item, index) => (
          <Link
            href={`/${item.category}/${item.slug}`}
            key={index}
            className={`
              snap-start flex-shrink-0 px-3
              w-full
              sm:w-1/2
              lg:w-1/3
            `}
          >
            <article className="group cursor-pointer">

              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="w-full h-56 sm:h-60 lg:h-64 object-cover"
              />

              <p className="text-[11px] sm:text-[12px] font-bold uppercase mt-3 tracking-wider">
                {item.category}
              </p>

              <h3 className="font-semibold text-base sm:text-lg mt-1 group-hover:underline">
                {item.title}
              </h3>

              <p className="text-[11px] sm:text-[12px] font-bold uppercase mt-2 tracking-wider">
                BY {getAuthorName(item.authorId)}
              </p>

            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}