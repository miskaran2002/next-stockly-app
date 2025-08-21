// OurServices.jsx
import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt, FaServer } from 'react-icons/fa';

const services = [
    {
        icon: <FaCode className="text-blue-900 w-12 h-12" />,
        title: 'Web Development',
        description: 'Build fast, modern, and responsive websites tailored to your needs.',
    },
    {
        icon: <FaPaintBrush className="text-blue-900 w-12 h-12" />,
        title: 'UI/UX Design',
        description: 'Create visually appealing and user-friendly interfaces for all devices.',
    },
    {
        icon: <FaMobileAlt className="text-blue-900 w-12 h-12" />,
        title: 'Mobile App Development',
        description: 'Design and develop mobile apps with smooth performance and modern features.',
    },
    {
        icon: <FaServer className="text-blue-900 w-12 h-12" />,
        title: 'Backend & API',
        description: 'Reliable server-side solutions and APIs to support your applications.',
    },
];

const OurServices = () => {
    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    Our Services
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-12">
                    Explore the wide range of services we offer to help your business grow.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-start gap-4 hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex items-center justify-center">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
