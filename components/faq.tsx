"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-vercedo-blue transition-colors"
            >
                <span className="text-lg font-medium">{question}</span>
                <Plus
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-45 text-vercedo-blue" : "text-white/40"
                        }`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-white/60 leading-relaxed">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQ({ items }: { items: { question: string; answer: string }[] }) {
    return (
        <section className="py-24 px-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
                <div className="space-y-2">
                    {items.map((item, i) => (
                        <FAQItem key={i} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
