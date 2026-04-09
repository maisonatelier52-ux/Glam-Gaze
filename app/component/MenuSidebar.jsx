"use client";
import { useState } from "react";
import Link from "next/link";
import { FiX, FiChevronDown } from "react-icons/fi";
import { FaTwitter, FaInstagram, FaTiktok, FaMedium } from "react-icons/fa";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Fashion", link: "/fashion" },
  { name: "Teen", link: "/teen" },
  { name: "Style", link: "/style" },
  { name: "Business", link: "/business" },
  { name: "Actress", link: "/actress" },
  { name: "Culture", link: "/culture" },
  { name: "Living", link: "/living" },
  { name: "About", link: "/about" },
];

const socials = [
  { Icon: FaTwitter, link: "#" },
  { Icon: FaInstagram, link: "#" },
  { Icon: FaTiktok, link: "#" },
  { Icon: FaMedium, link: "#" },
];

export default function MenuSidebar({ open, setOpen }) {
  const [openItem, setOpenItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = (name) => {
    setOpenItem(openItem === name ? null : name);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ background: "rgba(0,0,0,0.65)" }}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full z-50 transform transition-transform duration-500 overflow-y-auto flex flex-col`}
        style={{
          width: "320px",
          background: "#0a0a0a",
          color: "#fff",
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header */}
        <div style={{
          padding: "20px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #1f1f1f",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "22px",
              fontWeight: "400",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}>
              Glam <span style={{ color: "#aaa" }}>Gaze</span>
            </span>
            <span style={{
              fontSize: "8px",
              letterSpacing: "0.3em",
              color: "#666666",
              textTransform: "uppercase",
            }}>
              Fashion &middot; Beauty &middot; Culture
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{
              background: "transparent",
              border: "1px solid #2a2a2a",
              color: "#888",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#888"; }}
          >
            <FiX size={16} />
          </button>
        </div>

        {/* Decorative label */}
        <div style={{ padding: "20px 24px 8px" }}>
          <span style={{
            fontSize: "12px",
            letterSpacing: "0.3em",
            color: "#aaa",
            textTransform: "uppercase",
          }} className="font-semibold">
            Navigate
          </span>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "0 24px" }}>
          {menuItems.map((item, i) => (
            <div
              key={item.name}
              style={{ borderBottom: "1px solid #141414" }}
            >
              {!item.children ? (
                <Link
                  href={item.link}
                  title={`View ${item.name} articles`}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 0",
                    fontSize: "11px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    fontWeight: "500",
                    textDecoration: "none",
                    color: hoveredItem === item.name ? "#fff" : "#999",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span>{item.name}</span>
                  <span style={{
                    fontSize: "8px",
                    color: "#222",
                    letterSpacing: "0",
                  }}>
                    0{i + 1}
                  </span>
                </Link>
              ) : (
                <>
                  <div
                    onClick={() => toggleMenu(item.name)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 0",
                      fontSize: "11px",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      fontWeight: "500",
                      cursor: "pointer",
                      color: openItem === item.name ? "#fff" : "#666",
                      transition: "color 0.2s",
                    }}
                  >
                    <span>{item.name}</span>
                    <FiChevronDown
                      size={14}
                      style={{
                        transition: "transform 0.3s",
                        transform: openItem === item.name ? "rotate(180deg)" : "rotate(0deg)",
                        color: "#444",
                      }}
                    />
                  </div>
                  {openItem === item.name && (
                    <div style={{ paddingBottom: "12px", paddingLeft: "12px" }}>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.link}
                          title={`View ${child.name} articles`}
                          onClick={() => setOpen(false)}
                          style={{
                            display: "block",
                            padding: "8px 0",
                            fontSize: "10px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "#555",
                            textDecoration: "none",
                            transition: "color 0.2s",
                          }}
                          onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                          onMouseLeave={e => e.currentTarget.style.color = "#555"}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div style={{
          padding: "24px",
          borderTop: "1px solid #1a1a1a",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          <span style={{
            fontSize: "8px",
            letterSpacing: "0.3em",
            color: "#777",
            textTransform: "uppercase",
          }}>
            Follow Us
          </span>
          <div style={{ display: "flex", gap: "20px" }}>
            {socials.map(({ Icon, link }, i) => (
              <Link
                key={i}
                href={link}
                title={`Follow us on ${Icon.displayName.replace("Fa", "")}`}
                target="_blank"
                style={{ color: "#444", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "#444"}
              >
                <Icon size={15} />
              </Link>
            ))}
          </div>
          <p style={{
            fontSize: "9px",
            color: "#aaa",
            letterSpacing: "0.1em",
            margin: 0,
          }}>
            &copy; {new Date().getFullYear()} Glam Gaze. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}