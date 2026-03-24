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

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hideCategories = scrollY > screenHeight * 2;
  const hideTop = scrollY > screenHeight * 4;

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-300 z-50">

        {/* ROW 1 → LOGO + ICONS */}
        <div
          className={`transition-all duration-300 ${
            hideTop ? "h-0 overflow-hidden" : "h-14 sm:h-16"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-full">

            {/* LEFT → MENU (mobile) */}
            <div className="flex items-center gap-4">
              <FiMenu
                className="text-xl cursor-pointer lg:hidden"
                onClick={() => setMenuOpen(true)}
              />
            </div>

            {/* CENTER → LOGO */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold scale-y-110 tracking-wide">
              <Link href="/">Glam Gaze</Link>
            </h1>

            {/* RIGHT → SEARCH + MENU (desktop) */}
            <div className="flex items-center gap-4 sm:gap-6 text-lg sm:text-xl">
              <FiSearch className="cursor-pointer" />
              <FiMenu
                className="cursor-pointer hidden lg:block"
                onClick={() => setMenuOpen(true)}
              />
            </div>
          </div>
        </div>

        {/* ROW 2 → MAIN NAV (HIDDEN ON MOBILE) */}
        <div
          className={`transition-all duration-300 border-t border-gray-300 ${
            hideCategories ? "h-0 overflow-hidden" : "hidden lg:block h-10"
          }`}
        >
          <nav className="max-w-7xl mx-auto flex justify-center items-center h-full gap-6 xl:gap-10 uppercase text-sm font-semibold">
            <Link href="/fashion">Fashion</Link>
            <Link href="/teen">Teen</Link>
            <Link href="/style">Style</Link>
            <Link href="/business">Business</Link>
            <Link href="/actress">Actress</Link>
            <Link href="/culture">Culture</Link>
            <Link href="/living">Living</Link>
          </nav>
        </div>

        {/* ROW 3 → SUB NAV (SCROLLABLE ON MOBILE) */}
        <div className="border-t border-gray-300">
          <div className="flex lg:justify-center gap-6 px-4 overflow-x-auto whitespace-nowrap h-8 items-center text-sm">
            <Link href="#">Red Carpet</Link>
            <Link href="#">Winners List</Link>
            <Link href="#">Best Dressed</Link>
          </div>
        </div>
      </header>

      {/* SIDEBAR */}
      <MenuSidebar open={menuOpen} setOpen={setMenuOpen} />
    </>
  );
}