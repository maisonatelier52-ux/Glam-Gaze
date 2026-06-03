import { PlayIcon } from "@/app/component/Icons";
import Image from "next/image";

export default function GridItem({ item, index, onClick }) {
  return (
    <div
      className={`relative overflow-hidden cursor-pointer group bg-neutral-100 ${item.span}`}
      style={{ minHeight: 220 }}
      onClick={() => onClick(index)}
    >
      {item.type === "video" ? (
        <>
          <Image
            src={item.poster}
            alt={item.alt}
            fill
            className="object-cover brightness-75 group-hover:brightness-90 group-hover:scale-[1.03] transition-all duration-700"
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-white/40 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-amber-700/60 transition-all duration-300">
              <PlayIcon />
            </div>
          </div>
          {/* Video label */}
          <span className="absolute bottom-4 left-4 text-[9px] tracking-[0.25em] uppercase text-white/60">
            Video
          </span>
        </>
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover brightness-90 group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-700"
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
  );
}