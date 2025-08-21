// src/components/CustomLoader.jsx
import React from "react";

export default function CustomLoader() {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div
                className="relative w-24 h-24 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"
                style={{ animationDuration: "2s" }}
            ></div>
            <div className="absolute text-gray-700 font-semibold text-sm">
                Loading...
            </div>
        </div>
    );
}
