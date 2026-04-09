"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ShopSection({ title, articles }) {
  const scrollRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerScroll = 3;
  const totalPages = Math.ceil(articles.length / itemsPerScroll);

  // HANDLE ARROW SCROLL
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector("article");
    if (!card) return;

    const gap = 24;
    const cardWidth = card.offsetWidth + gap;
    const scrollAmount = cardWidth * itemsPerScroll;

    if (direction === "right" && currentIndex < totalPages - 1) {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    if (direction === "left" && currentIndex > 0) {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  // HANDLE MANUAL SCROLL
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const card = container.querySelector("article");
      if (!card) return;

      const gap = 24;
      const cardWidth = card.offsetWidth + gap;

      const index = Math.round(
        container.scrollLeft / (cardWidth * itemsPerScroll)
      );

      setCurrentIndex(index);
    };

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 pb-14">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8 border-y border-gray-300">
        
        <div className="w-16"></div>

        <h2 className="text-3xl font-bold tracking-wide text-center py-5 uppercase">
          {title}
        </h2>

        {/* ARROWS + COUNTER */}
        <div className="flex items-center gap-3">
          
          {/* LEFT */}
          <button
            onClick={() => scroll("left")}
            disabled={currentIndex === 0}
            className={`p-2 transition ${
              currentIndex === 0
                ? "text-gray-300 cursor-not-allowed"
                : "text-black hover:opacity-70 cursor-pointer"
            }`}
          >
            <FiChevronLeft size={25} />
          </button>

          {/* COUNTER */}
          <span className="text-sm font-semibold min-w-[50px] text-center">
            {currentIndex + 1} / {totalPages}
          </span>

          {/* RIGHT */}
          <button
            onClick={() => scroll("right")}
            disabled={currentIndex >= totalPages - 1}
            className={`p-2 transition ${
              currentIndex >= totalPages - 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-black hover:opacity-70 cursor-pointer"
            }`}
          >
            <FiChevronRight size={25} />
          </button>
        </div>
      </div>

      {/* SCROLL AREA */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
      >
        {articles.map((item, index) => (
          <Link href="#" key={index} title={`View ${item.title}`}>
            <article className="min-w-[340px] max-w-[340px] snap-start group cursor-pointer">
              
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />

              <p className="text-[12px] font-bold uppercase mt-3 tracking-wider">
                {item.category}
              </p>

            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}