"use client";

import { useState } from "react";
import Link from "next/link";
import { FiX, FiChevronDown } from "react-icons/fi";

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

export default function MenuSidebar({ open, setOpen }) {
  const [openItem, setOpenItem] = useState(null);

  const toggleMenu = (name) => {
    setOpenItem(openItem === name ? null : name);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-[18px] flex justify-between items-center border-b border-gray-300">
          <h2 className="text-xl font-semibold">Menu</h2>

          <FiX
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* Menu */}
        <nav className="p-3 flex flex-col text-md font-semibold uppercase border-l border-gray-300">

          {menuItems.map((item) => (
            <div key={item.name} className="border-b border-gray-200">

              {/* If no children → direct link */}
              {!item.children ? (
                <Link
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-2 hover:bg-gray-100 transition"
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  {/* Parent with dropdown */}
                  <div
                    className="flex justify-between items-center py-3 cursor-pointer hover:bg-gray-50 px-2 transition"
                    onClick={() => toggleMenu(item.name)}
                  >
                    <span>{item.name}</span>

                    <FiChevronDown
                      className={`transition-transform duration-300 ${
                        openItem === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Dropdown */}
                  {openItem === item.name && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.link}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm hover:underline"
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
      </div>
    </>
  );
}