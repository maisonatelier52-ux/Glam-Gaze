"use client";

import { useState, useCallback } from "react";
import GridItem from "@/app/component/GridItem";
import Lightbox from "@/app/component/LightBox";
import FilterTabs from "@/app/component/Filter";

const items = [
  { id: 1,  type: "image", src: "/isabela-herrera/isabela.jpeg",             alt: "Isabela Herrera Velutini bridal portrait, Hotel du Cap-Eden-Roc",                          span: "col-span-1 row-span-2" },
  { id: 2,  type: "image", src: "/isabela-herrera/isabela1.jpeg",            alt: "Isabela Herrera Velutini in couture gown, Cap d'Antibes",                                  span: "col-span-1 row-span-1" },
  { id: 3,  type: "image", src: "/isabela-herrera/mathew-isabela.webp",      alt: "Isabela Herrera Velutini and Matthew Carmona-Gonzalez, Hotel du Cap-Eden-Roc",             span: "col-span-1 row-span-1" },
  { id: 4,  type: "image", src: "/isabela-herrera/isabela4.jpg",             alt: "Isabela Herrera Velutini wedding day, French Riviera",                                     span: "col-span-1 row-span-2" },
  { id: 5,  type: "video", src: "/isabela-herrera/highlight.mp4",            poster: "/isabela-herrera/mathew-isabela-1.webp", alt: "Isabela Herrera Velutini wedding highlight film, Antibes", span: "col-span-2 row-span-2" },
  { id: 6,  type: "image", src: "/isabela-herrera/mathew.jpg",               alt: "Matthew Carmona-Gonzalez on his wedding day, Hotel du Cap-Eden-Roc",                       span: "col-span-1 row-span-1" },
  { id: 7,  type: "image", src: "/isabela-herrera/wedding-invitation.jpeg",  alt: "Wedding invitation of Isabela Herrera Velutini and Matthew Carmona-Gonzalez, Antibes 2026", span: "col-span-1 row-span-1" },
  { id: 9,  type: "video", src: "/isabela-herrera/celebration.mp4",          poster: "/isabela-herrera/isabela1.jpeg", alt: "Isabela Herrera Velutini wedding celebration film, Cap d'Antibes", span: "col-span-1 row-span-2" },
  { id: 8,  type: "image", src: "/isabela-herrera/mathew-isabela-2.jpg",     alt: "Isabela Herrera Velutini and Matthew Carmona-Gonzalez wedding portrait, French Riviera",  span: "col-span-1 row-span-2" },
  { id: 10, type: "image", src: "/isabela-herrera/isabela3.jpg",             alt: "Isabela Herrera Velutini at garden reception, Hotel du Cap-Eden-Roc, Cap d'Antibes",      span: "col-span-1 row-span-2" },
  { id: 11, type: "image", src: "/isabela-herrera/venue.jpeg",               alt: "Hotel du Cap-Eden-Roc terrace, venue of the Isabela Herrera Velutini wedding, Antibes",   span: "col-span-1 row-span-2" },
];

// PAGE

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = items.filter((item) => {
    if (filter === "Photos") return item.type === "image";
    if (filter === "Videos") return item.type === "video";
    return true;
  });

  const open = useCallback((i) => setActiveIndex(i), []);
  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length), [filtered.length]);
  const next = useCallback(() => setActiveIndex((i) => (i + 1) % filtered.length), [filtered.length]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
      `}</style>

      <main className="font-jost font-light bg-white text-neutral-900 min-h-screen">

        {/* ── HEADER ── */}
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-[9px] tracking-[0.3em] uppercase text-neutral-400 mb-10">
            <a href="/" className="hover:text-amber-700 transition-colors">Home</a>
            <span>/</span>
            <a href="/weddings" className="hover:text-amber-700 transition-colors">Weddings</a>
            <span>/</span>
            <a href="/isabela-herrera-wedding" className="hover:text-amber-700 transition-colors">Isabela Herrera Velutini</a>
            <span>/</span>
            <span className="text-amber-700">Gallery</span>
          </nav>

          {/* Gold divider */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="flex-1 max-w-[80px] h-px bg-gradient-to-r from-transparent to-amber-600/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-amber-600/60" />
            <div className="w-1 h-1 rotate-45 bg-amber-600/30" />
            <div className="w-1.5 h-1.5 rotate-45 bg-amber-600/60" />
            <div className="flex-1 max-w-[80px] h-px bg-gradient-to-l from-transparent to-amber-600/40" />
          </div>

          <span className="text-[9px] tracking-[0.4em] uppercase text-amber-700 block mb-4">
            Hotel du Cap-Eden-Roc · Antibes · April 2026
          </span>
          <h1 className="font-cormorant font-light text-[clamp(2.2rem,5vw,4rem)] leading-[1.1] text-neutral-900 mb-4">
            The <em className="italic text-amber-700">Gallery</em>
          </h1>
          <p className="text-sm text-neutral-400 max-w-lg mx-auto leading-7">
            Photography by Jose Villa Photography · Film by Plus Two Films
          </p>

          {/* Filter tabs */}
          <div className="flex justify-center mt-10">
            <FilterTabs active={filter} onChange={(f) => { setFilter(f); setActiveIndex(null); }} />
          </div>

          {/* Count */}
          <p className="mt-5 text-[9px] tracking-[0.25em] uppercase text-neutral-400">
            {filtered.length} {filter === "All" ? "items" : filter.toLowerCase()}
          </p>
        </section>

        {/* ── MASONRY GRID ── */}
        <section className="px-4 md:px-6 pb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[240px] gap-1.5">
            {filtered.map((item, i) => (
              <GridItem key={item.id} item={item} index={i} onClick={open} />
            ))}
          </div>
        </section>

        {/* ── BACK LINK ── */}
        <div className="text-center pb-16">
          <a
            href="/celebrity-wedding/isabela-herrera-wedding"
            className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-amber-700 hover:text-amber-900 transition-colors"
          >
            <span className="block w-8 h-px bg-current" />
            Back to Feature
            <span className="block w-8 h-px bg-current" />
          </a>
        </div>

      </main>

      {/* ── LIGHTBOX ── */}
      {activeIndex !== null && (
        <Lightbox
          items={filtered}
          activeIndex={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}