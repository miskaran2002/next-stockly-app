"use client";
import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

export default function AddProductPage() {
    const handleAddProduct = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const description = form.description.value;
        const price = parseFloat(form.price.value);
        const category = form.category.value;
        const image = form.image.value;

        const product = { name, description, price, category, image };

        try {
            console.log("Sending product:", product);

            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(product),
            });

            const data = await res.json();
            console.log("Response:", data);

            if (!res.ok) throw new Error(data.error || "Failed to add product");

            Swal.fire({
                icon: "success",
                title: "Product Added!",
                text: "✅ Your product has been added successfully!",
                timer: 2500,
                showConfirmButton: false,
            });

            form.reset();
        } catch (err) {
            console.error("❌ Error:", err.message);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "❌ Error adding product: " + err.message,
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8"
            >
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Add a New Product
                </h1>

                <form onSubmit={handleAddProduct} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 mb-1 font-medium">
                            Product Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter product name"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1 font-medium">
                            Description
                        </label>
                        <textarea
                            name="description"
                            required
                            placeholder="Enter product description"
                            rows="3"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1 font-medium">Price</label>
                        <input
                            type="number"
                            name="price"
                            step="0.01"
                            required
                            placeholder="Enter price"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1 font-medium">Category</label>
                        <input
                            type="text"
                            name="category"
                            required
                            placeholder="e.g. Electronics"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1 font-medium">Image URL</label>
                        <input
                            type="url"
                            name="image"
                            required
                            placeholder="Enter image URL"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-indigo-900 text-white py-2 rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition"
                    >
                        Add Product
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}
