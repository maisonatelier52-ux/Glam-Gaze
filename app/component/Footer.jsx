"use client";

import Link from "next/link";
import { FaTwitter, FaInstagram, FaTiktok, FaMedium } from "react-icons/fa";

export default function Footer() {
  const moreFromFashion = [
    { label: "Fashion", href: "/fashion" },
    { label: "Teen", href: "/teen" },
    { label: "Style", href: "/style" },
    { label: "Business", href: "/business" },
    { label: "Actress", href: "/actress" },
    { label: "Culture", href: "/culture" },
    { label: "Living", href: "/living" },
  ];

  const seeMoreStories = [
    { label: "About Us", href: "/about" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { label: "User Agreement", href: "/user-agreement" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Your California Privacy Rights", href: "/california-privacy" },
    { label: "Accessibility Help", href: "/accessibility" },
    { label: "Masthead", href: "/masthead" },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">

      {/* TOP */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LEFT */}
        <div className="space-y-4 md:col-span-2">
          <Link href="/" className="block">
            <span className="text-3xl sm:text-4xl font-bold tracking-wide">
              FASHION
            </span>
          </Link>

          <p className="text-sm text-gray-300 max-w-md">
            The latest fashion news, celebrity style, fashion week updates, culture reviews, and videos on FASHION.com.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-5 pt-2">
            {[
              { Icon: FaTwitter, link: "#" },
              { Icon: FaInstagram, link: "#" },
              { Icon: FaTiktok, link: "#" },
              { Icon: FaMedium, link: "#" },
            ].map(({ Icon, link }, i) => (
              <Link
                key={i}
                href={link}
                target="_blank"
                className="text-gray-300 hover:text-white hover:scale-110 transition"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT LINKS */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 md:col-span-2">

          {/* COLUMN 1 */}
          <div>
            <h3 className="text-sm font-semibold mb-3 tracking-wide">
              MORE FROM FASHION
            </h3>
            <ul className="space-y-2 uppercase text-[11px] font-semibold">
              {moreFromFashion.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-sm font-semibold mb-3 tracking-wide">
              SEE MORE STORIES
            </h3>
            <ul className="space-y-2 uppercase text-[11px] font-semibold">
              {seeMoreStories.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

      {/* LEGAL */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-gray-400 text-center">
        {legalLinks.map(({ label, href }) => (
          <Link key={label} href={href} className="hover:text-white transition">
            {label}
          </Link>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 pb-8 text-center text-xs sm:text-sm text-gray-400 space-y-3">
        <p className="text-white">
          © {new Date().getFullYear()} Glam Gaze. All rights reserved.
        </p>
      </div>
    </footer>
  );
}