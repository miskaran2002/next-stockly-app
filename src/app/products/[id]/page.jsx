// src/app/products/[id]/page.jsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CustomLoader from "@/app/Components/CustomLoader";

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products/${id}`);
                if (!res.ok) throw new Error("Failed to fetch product");
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <CustomLoader />;

    if (!product)
        return (
            <p className="text-center mt-10 text-red-500 font-semibold">
                Product not found
            </p>
        );

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 lg:pt-24 pb-12">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-900">
                Product Details
            </h1>

            {/* Intro Paragraph */}
            <p className="text-gray-700 mb-8 mt-8 lg:mt-20 text-base sm:text-lg leading-relaxed">
                Discover the exceptional features of <strong>{product.name}</strong>.{' '}
                {product.description} This product is crafted to provide both quality
                and convenience, ensuring you get the best experience possible.
            </p>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Product Image */}
                {product.image && (
                    <div className="w-full md:w-1/2 h-64 md:h-auto">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Product Details */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl sm:text-4xl font-bold mb-3">{product.name}</h2>
                        <p className="text-gray-500 mb-2">
                            Category: <span className="font-medium">{product.category}</span>
                        </p>
                        <p className="text-gray-700 mb-6">{product.description}</p>
                    </div>

                    <div>
                        <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
                            ${product.price?.$numberInt || product.price}
                        </p>
                        <p className="text-sm text-gray-400">
                            Product ID: {product._id?.$oid || product._id}
                        </p>
                    </div>
                </div>
            </div>
        </div>


    );
}
