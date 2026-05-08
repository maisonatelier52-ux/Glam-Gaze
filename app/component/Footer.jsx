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
  ];

  const socialLinks = [
    {
      icon: FaTwitter,
      href: "",
      label: "Twitter",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/the_glamgaze/",
      label: "Instagram",
    },
    {
      icon: FaTiktok,
      href: "",
      label: "TikTok",
    },
    {
      icon: FaMedium,
      href: "",
      label: "Medium",
    },
  ]

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-gray-800">

      {/* MASTHEAD */}
      <div className="border-b border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col items-center gap-4 text-center">

          <span className="w-10 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

          <Link href="/" title="Glam Gaze - Home">
            <h2 className="font-serif text-3xl sm:text-5xl tracking-[0.3em] uppercase">
              Glam <span className="text-gray-400">Gaze</span>
            </h2>
          </Link>

          <span className="text-[10px] tracking-[0.35em] text-gray-400 uppercase">
            Fashion · Beauty · Culture
          </span>

          <span className="w-10 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

          <p className="text-sm text-gray-300 max-w-md leading-relaxed">
            The latest fashion news, celebrity style, fashion week updates, culture reviews, and videos on glam-gaze.com.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-6 mt-3">
            {socialLinks.map(({ icon: Icon, href, label }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Follow us on ${label}`}
                className="text-gray-400 hover:text-white transition hover:scale-110"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* NAV */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center sm:text-left">

        {/* VIEW MORE */}
        <div>
          <h3 className="text-sm sm:text-base tracking-[0.25em] text-gray-300 uppercase mb-6 font-semibold underline underline-offset-4">
            View More
          </h3>

          <ul className="space-y-3">
            {moreFromFashion.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  title={`View ${label} articles`}
                  className="text-sm tracking-wide uppercase text-gray-300 hover:text-white transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PAGES */}
        <div>
          <h3 className="text-sm sm:text-base tracking-[0.25em] text-gray-300 uppercase mb-6 font-semibold underline underline-offset-4">
            Pages
          </h3>

          <ul className="space-y-3">
            {seeMoreStories.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  title={`View ${label} page`}
                  className="text-sm tracking-wide uppercase text-gray-300 hover:text-white transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="max-w-xs mx-auto sm:mx-0">
          <h3 className="text-sm sm:text-base tracking-[0.25em] text-gray-300 uppercase mb-6 font-semibold underline underline-offset-4">
            Newsletter
          </h3>

          <p className="text-sm text-gray-300 mb-5">
            Weekly style edits, straight to your inbox.
          </p>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-transparent border border-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-white placeholder:text-gray-500"
            />

            <button
              className="bg-white text-black py-3 text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-white hover:border hover:border-white transition"
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 py-6 text-center">
        <p className="text-xs tracking-[0.2em] text-gray-400 uppercase">
          © {new Date().getFullYear()} Glam Gaze. All rights reserved.
        </p>
      </div>

    </footer>
  );
}