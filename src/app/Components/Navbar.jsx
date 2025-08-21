// app/components/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiHome, FiBox, FiPlusSquare, FiLogIn, FiGrid } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Current route

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const menuItems = [
    { name: "Home", href: "/", icon: <FiHome /> },
    { name: "Products", href: "/products", icon: <FiBox /> },
    { name: "Dashboard", href: "/dashboard", icon: <FiGrid /> },
    { name: "Login", href: "/login", icon: <FiLogIn />, isButton: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2"
        >
          <img
            src="https://i.ibb.co/sJWDqXrQ/Chat-GPT-Image-Aug-21-2025-02-05-18-AM.png"
            alt="Stickly Logo"
            className="h-20 w-20 object-contain" // Adjust size to fit navbar
          />
         
        </Link>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center space-x-1 px-2 py-1 transition
                  ${pathname === item.href
                    ? "text-blue-900 border-b-2 border-blue-900"
                    : "text-gray-700 dark:text-gray-200 hover:text-blue-900"
                  } rounded`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <ul className="flex flex-col space-y-4 px-4 py-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-2 px-2 py-2 transition w-full
                    ${pathname === item.href
                      ? "text-blue-900 border-l-4 border-blue-900"
                      : "text-gray-700 dark:text-gray-200 hover:text-blue-900"
                    } rounded`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
