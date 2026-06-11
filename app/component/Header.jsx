"use client";
import { useEffect, useState, useRef } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import MenuSidebar from "./MenuSidebar";
import Link from "next/link";
import articlesData from "@/data/data.json";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const openSearch = () => {
    setSearchOpen(true);
    setQuery("");
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  const articles = articlesData.articles;

  const results = query.trim()
    ? articles.filter((a) =>
        a.title.toLowerCase().includes(query.trim().toLowerCase())
      )
    : [];

  const highlight = (text, q) => {
    if (!q.trim()) return text;
    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = text.split(new RegExp(`(${escaped})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === q.toLowerCase() ? (
        <mark key={i} style={{ background: "#fef3e8", color: "#b08d6e" }}>
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const hideCategories = scrollY > screenHeight * 2;
  const hideTop = scrollY > screenHeight * 4;

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-50" style={{ borderBottom: "1px solid #e8d5c4" }}>

        {/* TOP TICKER */}
        <div
          className={`transition-all duration-500 overflow-hidden ${hideTop ? "h-0" : "h-10 sm:h-7"}`}
          style={{ background: "#1a1a1a" }}
        >
          <p className="text-center text-white tracking-widest uppercase h-full flex items-center justify-center"
            style={{ fontSize: "10px", letterSpacing: "0.2em" }}>
            Style is a way to say who you are without having to speak
          </p>
        </div>

        {/* ROW 1 — LOGO + ICONS */}
        <div className={`transition-all duration-300 ${hideTop ? "h-0 overflow-hidden" : "h-16 sm:h-20"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-full">

            {/* LEFT — MENU (mobile) */}
            <div className="flex items-center gap-4">
              <FiMenu
                className="cursor-pointer lg:hidden"
                style={{ fontSize: "18px", color: "#1a1a1a" }}
                onClick={() => setMenuOpen(true)}
              />
            </div>

            {/* CENTER — LOGO */}
            <div className="flex flex-col items-center leading-none">
              <Link href="/" title="Glam Gaze - Home" className="group flex flex-col items-center no-underline">
                <span className="block mb-1" style={{ width: "32px", height: "1px", background: "linear-gradient(to right, transparent, #b08d6e, transparent)" }} />
                <div className="tracking-widest uppercase" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(22px, 4vw, 36px)", fontWeight: "400", letterSpacing: "0.25em", color: "#1a1a1a" }}>
                  Glam <span style={{ color: "#b08d6e" }}>Gaze</span>
                </div>
                <span className="tracking-widest uppercase" style={{ fontSize: "9px", letterSpacing: "0.3em", color: "#b08d6e", marginTop: "2px" }}>
                  Fashion &middot; Beauty &middot; Culture
                </span>
                <span className="block mt-1" style={{ width: "32px", height: "1px", background: "linear-gradient(to right, transparent, #b08d6e, transparent)" }} />
              </Link>
            </div>

            {/* RIGHT — SEARCH + MENU (desktop) */}
            <div className="flex items-center gap-5">
              <button
                className="p-1 cursor-pointer bg-transparent border-none"
                style={{ color: "#1a1a1a" }}
                aria-label="Search"
                onClick={openSearch}
              >
                <FiSearch style={{ fontSize: "18px" }} />
              </button>
              <button
                className="cursor-pointer bg-transparent border-none hidden lg:block p-1"
                style={{ color: "#1a1a1a" }}
                aria-label="Menu"
                onClick={() => setMenuOpen(true)}
              >
                <FiMenu style={{ fontSize: "18px" }} />
              </button>
            </div>
          </div>
        </div>

        {/* ROW 2 — MAIN NAV */}
        <div
          className={`transition-all duration-300 ${hideCategories ? "h-0 overflow-hidden" : "hidden lg:block h-10"}`}
          style={{ borderTop: "1px solid #e8d5c4" }}
        >
          <nav className="max-w-7xl mx-auto flex justify-center items-center h-full gap-8 xl:gap-12 uppercase font-semibold tracking-wide text-sm" style={{ color: "#1a1a1a" }}>
            {[
              { slug: "fashion", label: "fashion" },
              { slug: "teen", label: "teen" },
              { slug: "style", label: "style" },
              { slug: "business", label: "business" },
              { slug: "actress", label: "actress" },
              { slug: "celebrity-wedding", label: "celebrity wedding" },
              { slug: "culture", label: "culture" },
              { slug: "living", label: "living" },
            ].map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} title={`View ${item.label} articles`} className="relative group">
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>

        {/* SEARCH OVERLAY */}
        {searchOpen && (
          <div
            className="absolute top-0 left-0 w-full bg-white z-50"
            style={{ borderBottom: "1px solid #e8d5c4", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
          >
            {/* Search input bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex items-center gap-3" style={{ borderBottom: "1.5px solid #1a1a1a", paddingBottom: "10px" }}>
                <FiSearch style={{ fontSize: "20px", color: "#b08d6e", flexShrink: 0 }} />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles…"
                  className="flex-1 border-none outline-none bg-transparent"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "18px", color: "#1a1a1a" }}
                />
                <button
                  onClick={closeSearch}
                  className="bg-transparent border-none cursor-pointer p-1"
                  style={{ color: "#1a1a1a" }}
                  aria-label="Close search"
                >
                  <FiX style={{ fontSize: "20px" }} />
                </button>
              </div>

              {/* Results */}
              {query.trim() && (
                <div className="mt-3 max-h-96 overflow-y-auto">
                  {results.length === 0 ? (
                    <p className="py-4 text-sm" style={{ color: "#888", fontFamily: "sans-serif" }}>
                      No articles found for "{query}"
                    </p>
                  ) : (
                    <>
                      <p className="mb-2 text-xs uppercase tracking-widest" style={{ color: "#b08d6e", fontFamily: "sans-serif" }}>
                        {results.length} result{results.length !== 1 ? "s" : ""}
                      </p>
                      {results.map((article) => (
                        <Link
                          key={article.slug}
                          href={`/${article.category}/${article.slug}`}
                          onClick={closeSearch}
                          className="block py-3 no-underline hover:bg-[#f5f5f5]"
                          style={{ borderBottom: "0.5px solid #e8d5c4" }}
                        >
                          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#b08d6e", fontFamily: "sans-serif" }}>
                            {article.category}
                          </p>
                          <p className="text-sm group-hover:text-[#b08d6e] transition-colors" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1a1a1a" }}>
                            {highlight(article.title, query.trim())}
                          </p>
                        </Link>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      <MenuSidebar open={menuOpen} setOpen={setMenuOpen} />
    </>
  );
}