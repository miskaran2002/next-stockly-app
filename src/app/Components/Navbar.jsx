"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiHome, FiBox, FiGrid, FiLogIn, FiLogOut } from "react-icons/fi";
import { useSession, signOut } from "next-auth/react";
import Swal from "sweetalert2";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession(); // Session check

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    Swal.fire({
      icon: "success",
      title: "Logout Successful",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const menuItems = [
    { name: "Home", href: "/", icon: <FiHome /> },
    { name: "Products", href: "/products", icon: <FiBox /> },
    { name: "Dashboard", href: "/dashboard", icon: <FiGrid /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co/sJWDqXrQ/Chat-GPT-Image-Aug-21-2025-02-05-18-AM.png"
            alt="Stickly Logo"
            className="h-20 w-20 object-contain"
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

          {/* Conditional Login / Logout */}
          {!session ? (
            <li>
              <Link
                href="/login"
                className="flex items-center space-x-1 px-2 py-1 text-gray-700 dark:text-gray-200 hover:text-blue-900 rounded"
              >
                <FiLogIn />
                <span>Login</span>
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 px-2 py-1 text-gray-700 dark:text-gray-200 hover:text-red-500 rounded"
              >
                <FiLogOut />
                <span>Logout</span>
              </button>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 dark:text-gray-200 focus:outline-none">
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

            {/* Mobile Login / Logout */}
            {!session ? (
              <li>
                <Link
                  href="/login"
                  className="flex items-center space-x-2 px-2 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-900 rounded"
                >
                  <FiLogIn />
                  <span>Login</span>
                </Link>
              </li>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-2 py-2 text-gray-700 dark:text-gray-200 hover:text-red-500 rounded w-full"
                >
                  <FiLogOut />
                  <span>Logout</span>
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
