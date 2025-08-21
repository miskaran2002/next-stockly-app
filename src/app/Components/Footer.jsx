// app/components/Footer.jsx
"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaGlobe } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 dark:text-gray-400 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* 1. Logo + Description */}
                <div className="flex flex-col space-y-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <img
                            src="https://i.ibb.co/sJWDqXrQ/Chat-GPT-Image-Aug-21-2025-02-05-18-AM.png"
                            alt="Stickly Logo"
                            className="h-10 w-10 object-contain"
                        />
                        <span className="text-xl font-bold text-white">Stockly</span>
                    </Link>
                    <p className="max-w-xs text-gray-400">
                        Stockly is your go-to platform for discovering and managing amazing products seamlessly. Browse, explore, and add your favorite products with ease.
                    </p>
                </div>

                {/* 2. Quick Links */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-white font-semibold">Quick Links</h3>
                    <Link href="/" className="hover:text-white transition">Home</Link>
                    <Link href="/products" className="hover:text-white transition">Products</Link>
                    <Link href="/dashboard/add-product" className="hover:text-white transition">Add Product</Link>
                    <Link href="/login" className="hover:text-white transition">Login</Link>
                </div>

                {/* 3. Social Links */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-white font-semibold">Connect With Us</h3>
                    <div className="flex space-x-4">
                        <Link href="https://github.com/miskaran2002" target="_blank" className="hover:text-white transition">
                            <FaGithub size={24} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/md-raihan-uddin-cse8/" target="_blank" className="hover:text-white transition">
                            <FaLinkedin size={24} />
                        </Link>
                        <Link href="https://www.facebook.com/miskatujjaman.raihan" target="_blank" className="hover:text-white transition">
                            <FaFacebook size={24} />
                        </Link>
                        <Link href="https://www.instagram.com/miskatujjaman?fbclid=IwY2xjawMTuqxleHRuA2FlbQIxMABicmlkETF5eXlIQzZLU2tPckRNRHc2AR4FDVEH-jOQGno_I_3WTem_OijtpCJ5UDMv-4xyczBaM76HRLmPKAakbcWU7Q_aem_vs_XnPtK_xnA1M9F0hnvdA" target="_blank" className="hover:text-white transition">
                            <FaInstagram size={24} />
                        </Link>
                        <Link href="https://its-me-mdraihanuddin.netlify.app/" target="_blank" className="hover:text-white transition">
                            <FaGlobe size={24} />
                        </Link>
                    </div>
                </div>

                {/* 4. Contact Info */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-white font-semibold">Contact</h3>
                    <p>Phone: +8801608822137</p>
                    <p>Email: raihanuddin.cse8.bu@gmail.com</p>
                    <p>Portfolio: <Link href="https://its-me-mdraihanuddin.netlify.app/" className="hover:text-white transition" target="_blank">Visit</Link></p>
                </div>

            </div>

            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Stickly. All rights reserved.
            </div>
        </footer>
    );
}
