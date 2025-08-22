"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {  signIn } from "next-auth/react";

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        console.log("Login Data:", data); // log the submitted form data
        
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Image Section */}
            <div className="md:w-1/2 bg-gray-200 flex items-center justify-center p-4">
                <motion.img
                    src="https://i.ibb.co/Y4vRykwJ/pexels-cottonbro-5082561.jpg"
                    alt="Login"
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
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>

                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                {...register("email", { required: "Email is required" })}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                {...register("password", { required: "Password is required" })}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <p className="mt-4 text-gray-600 text-center">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-blue-600 hover:underline">
                            Register
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
