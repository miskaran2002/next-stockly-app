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

    if (!product) return <p className="text-center mt-10 text-red-500 font-semibold">Product not found</p>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Product Image */}
                {product.image && (
                    <div className="md:w-1/2">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Product Details */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                        <p className="text-gray-500 mb-2">Category: <span className="font-medium">{product.category}</span></p>
                        <p className="text-gray-700 mb-4">{product.description}</p>
                    </div>

                    <div className="mt-4">
                        <p className="text-2xl font-bold text-green-600 mb-2">${product.price?.$numberInt || product.price}</p>
                        <p className="text-sm text-gray-400">Product ID: {product._id?.$oid || product._id}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
