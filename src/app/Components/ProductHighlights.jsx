// ProductHighlights.jsx
import React from 'react';
import { FaRocket, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';

const highlights = [
    {
        icon: <FaRocket className="text-blue-900 w-12 h-12" />,
        title: 'Fast Performance',
        description: 'Optimized for speed to deliver the best user experience.',
    },
    {
        icon: <FaShieldAlt className="text-blue-900 w-12 h-12" />,
        title: 'Secure & Reliable',
        description: 'Your data is safe with our advanced security measures.',
    },
    {
        icon: <FaMobileAlt className="text-blue-900 w-12 h-12" />,
        title: 'Responsive Design',
        description: 'Looks perfect on all devices: mobile, tablet, and desktop.',
    },
];

const ProductHighlights = () => {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    Product Highlights
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-12">
                    Discover what makes our platform unique and efficient for everyone.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-start gap-4 hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex items-center justify-center">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductHighlights;
