// FAQ.jsx
import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
    {
        question: "How can I create an account?",
        answer:
            "You can create an account by clicking the Sign Up button on the top right corner and filling out the registration form.",
    },
    {
        question: "What payment methods are accepted?",
        answer:
            "We accept all major credit/debit cards, PayPal, and Stripe for secure transactions.",
    },
    {
        question: "Can I upgrade my plan later?",
        answer:
            "Yes, you can upgrade or change your plan at any time from your account settings.",
    },
    {
        question: "Is my personal information safe?",
        answer:
            "Absolutely! We use encryption and secure servers to protect your personal data.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-white">
                                    {faq.question}
                                </h3>
                                {openIndex === index ? (
                                    <FiMinus className="w-6 h-6 text-blue-900" />
                                ) : (
                                    <FiPlus className="w-6 h-6 text-blue-900" />
                                )}
                            </div>
                            {openIndex === index && (
                                <p className="mt-4 text-gray-600 dark:text-gray-300">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
