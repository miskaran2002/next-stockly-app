"use client";

import { motion } from "framer-motion";

export default function DashboardPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto mt-10"
        >
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
                Welcome to Your Dashboard
            </h1>
            <p className="text-gray-600 mb-2">
                Here you can manage all your products, track your orders, and view
                important statistics at a glance.
            </p>
            <p className="text-gray-600 mb-2">
                Add new products easily, update existing ones, and stay organized with
                a modern dashboard interface.
            </p>
            <p className="text-gray-600 mb-2">
                Monitor your inventory, analyze trends, and make smarter decisions
                effortlessly.
            </p>
            <p className="text-gray-600">
                Let's make your management experience faster, cleaner, and more
                enjoyable!
            </p>
        </motion.div>
    );
}
