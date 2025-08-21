// src/app/register/page.jsx
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("Check console for submitted data!");
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Image Section */}
            <div className="md:w-1/2 bg-gray-200 flex items-center justify-center p-4">
                <motion.img
                    src="https://i.ibb.co/V0zVW4vk/pexels-apgpotr-702251.jpg"
                    alt="Register"
                    className="rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                />
            </div>

            {/* Right Form Section */}
            <div className="md:w-1/2 flex items-center justify-center p-6 bg-white">
                <motion.div
                    className="w-full max-w-md"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Register</h2>

                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="block text-gray-700">Full Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                {...register("fullName", { required: "Full Name is required" })}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                                })}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } })}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Register
                        </button>
                    </form>

                    <p className="mt-4 text-gray-600 text-center">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-900 hover:underline">
                            Login
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
