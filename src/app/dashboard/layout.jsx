"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiHome, FiPlusSquare, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { signOut } from "next-auth/react"; // Import signOut
import Swal from "sweetalert2"; // Import SweetAlert2

export default function DashboardLayout({ children }) {
    const pathname = usePathname();
    const router = useRouter(); // Router for manual redirect
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/", icon: <FiHome /> },
        { name: "Add Product", href: "/dashboard/add-product", icon: <FiPlusSquare /> },
    ];

    const handleLogout = async () => {
        // Prevent automatic redirect
        await signOut({ redirect: false });

        // Show SweetAlert2 success message
        Swal.fire({
            icon: "success",
            title: "Signed out successfully",
            showConfirmButton: false,
            timer: 1500,
        }).then(() => {
            // Redirect to homepage after alert closes
            router.push("/");
        });
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar for large screens */}
            <aside className="hidden lg:flex w-64 flex-col bg-gray-800 text-white p-4 space-y-4">
                <Link href="/" className="text-2xl font-bold mb-6 flex items-center gap-2">
                    Stockly
                </Link>

                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 ${pathname === item.href ? "bg-gray-700" : ""
                            }`}
                    >
                        {item.icon} {item.name}
                    </Link>
                ))}

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-3 py-2 mt-auto rounded hover:bg-red-600"
                >
                    <FiLogOut /> Logout
                </button>
            </aside>

            {/* Drawer toggle for mobile */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setDrawerOpen(!drawerOpen)}
                    className="bg-gray-800 text-white px-3 py-2 rounded"
                >
                    ☰
                </button>
            </div>

            {/* Mobile drawer */}
            {drawerOpen && (
                <aside className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col p-4 space-y-4 z-40 lg:hidden">
                    <Link href="/" className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <img src="/logo.png" alt="Stickly Logo" className="h-8 w-8" />
                        Stickly
                    </Link>

                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 ${pathname === item.href ? "bg-gray-700" : ""
                                }`}
                            onClick={() => setDrawerOpen(false)}
                        >
                            {item.icon} {item.name}
                        </Link>
                    ))}

                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-3 py-2 mt-auto rounded hover:bg-red-600"
                    >
                        <FiLogOut /> Logout
                    </button>

                    <button
                        onClick={() => setDrawerOpen(false)}
                        className="mt-4 underline text-sm"
                    >
                        Close
                    </button>
                </aside>
            )}

            {/* Main content */}
            <main className="flex-1 p-4">{children}</main>
        </div>
    );
}
