"use client";
import { useEffect, useState } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
import MenuSidebar from "./MenuSidebar";
import Link from "next/link";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hideCategories = scrollY > screenHeight * 2;
  const hideTop = scrollY > screenHeight * 4;

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-50" style={{ borderBottom: "1px solid #e8d5c4" }}>

        {/* TOP TICKER — decorative fashion tagline */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            hideTop ? "h-0" : "h-7"
          }`}
          style={{ background: "#1a1a1a" }}
        >
          <p className="text-center text-white tracking-widest uppercase h-full flex items-center justify-center"
            style={{ fontSize: "10px", letterSpacing: "0.2em" }}>
            Style is a way to say who you are without having to speak
          </p>
        </div>

        {/* ROW 1 — LOGO + ICONS */}
        <div
          className={`transition-all duration-300 ${
            hideTop ? "h-0 overflow-hidden" : "h-16 sm:h-20"
          }`}
        >
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
              <Link href="/" className="group flex flex-col items-center no-underline">
                {/* Decorative rule above logo */}
                <span
                  className="block mb-1"
                  style={{
                    width: "32px",
                    height: "1px",
                    background: "linear-gradient(to right, transparent, #b08d6e, transparent)",
                  }}
                />
                <h1
                  className="tracking-widest uppercase"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "clamp(22px, 4vw, 36px)",
                    fontWeight: "400",
                    letterSpacing: "0.25em",
                    color: "#1a1a1a",
                  }}
                >
                  Glam{" "}
                  <span style={{ color: "#b08d6e" }}>Gaze</span>
                </h1>
                {/* Tagline */}
                <span
                  className="tracking-widest uppercase"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    color: "#b08d6e",
                    marginTop: "2px",
                  }}
                >
                  Fashion &middot; Beauty &middot; Culture
                </span>
                {/* Decorative rule below logo */}
                <span
                  className="block mt-1"
                  style={{
                    width: "32px",
                    height: "1px",
                    background: "linear-gradient(to right, transparent, #b08d6e, transparent)",
                  }}
                />
              </Link>
            </div>

            {/* RIGHT — SEARCH + MENU (desktop) */}
            <div className="flex items-center gap-5">
              <button
                className="p-1 cursor-pointer bg-transparent border-none"
                style={{ color: "#1a1a1a" }}
                aria-label="Search"
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
          className={`transition-all duration-300 ${
            hideCategories ? "h-0 overflow-hidden" : "hidden lg:block h-10"
          }`}
          style={{ borderTop: "1px solid #e8d5c4" }}
        >
          <nav className="max-w-7xl mx-auto flex justify-center items-center h-full gap-8 xl:gap-12 uppercase font-semibold tracking-wide text-sm" style={{ color: "#1a1a1a" }}>
            {[
              "fashion",
              "teen",
              "style",
              "business",
              "actress",
              "culture",
              "living",
            ].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className="relative group"
              >
                {item}

                {/* UNDERLINE HOVER EFFECT */}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <MenuSidebar open={menuOpen} setOpen={setMenuOpen} />
    </>
  );
}