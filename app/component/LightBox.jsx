import { useEffect } from "react";
import Image from "next/image";
import { CloseIcon, ArrowIcon } from "@/app/component/Icons";
export default function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  const item = items[activeIndex];

  // keyboard nav
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95" onClick={onClose}>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10"
        aria-label="Close"
      >
        <CloseIcon />
      </button>

      {/* Counter */}
      <span className="absolute top-5 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-white/40">
        {activeIndex + 1} / {items.length}
      </span>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 text-white/50 hover:text-white transition-colors z-10 p-2"
        aria-label="Previous"
      >
        <ArrowIcon direction="left" />
      </button>

      {/* Media */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full mx-16 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            key={item.src}
            src={item.src}
            poster={item.poster}
            controls
            autoPlay
            className="max-h-[85vh] max-w-full rounded-sm"
          />
        ) : (
          <div className="relative w-full" style={{ maxHeight: "85vh" }}>
            <Image
              src={item.src}
              alt={item.alt}
              width={1400}
              height={900}
              className="object-contain max-h-[85vh] w-auto mx-auto rounded-sm"
              priority
            />
          </div>
        )}
      </div>

      {/* Caption */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.25em] uppercase text-white/35 whitespace-nowrap">
        {item.alt}
      </p>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 text-white/50 hover:text-white transition-colors z-10 p-2"
        aria-label="Next"
      >
        <ArrowIcon direction="right" />
      </button>
    </div>
  );
}