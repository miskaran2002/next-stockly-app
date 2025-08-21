// src/app/products/page.jsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("/api/products");
                if (!res.ok) throw new Error("Failed to fetch products");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) return <p className="text-center mt-10">Loading products...</p>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <motion.div
                        key={product._id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
                    >
                        {product.image && (
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-6 flex flex-col justify-between flex-1">
                            <div>
                                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <p className="text-lg font-bold mb-4">${product.price}</p>
                            </div>
                            <button className="mt-auto bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                                Details
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
