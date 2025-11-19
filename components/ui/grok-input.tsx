"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function GrokInput() {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState("");

    return (
        <motion.div
            animate={{ scale: isFocused ? 1.02 : 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative w-full max-w-lg mx-auto group`}
        >
            {/* Glow Effect */}
            <div
                className={`absolute -inset-0.5 bg-gradient-to-r from-vercedo-blue/50 to-purple-500/50 rounded-2xl blur opacity-0 transition duration-500 group-hover:opacity-30 ${isFocused ? "opacity-50" : ""
                    }`}
            />

            <div className="relative flex items-center">
                <input
                    type="email"
                    placeholder="Enter your work email..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="w-full h-16 pl-6 pr-16 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl text-lg text-white placeholder:text-white/20 focus:outline-none focus:border-vercedo-blue/50 transition-colors"
                />

                <div className="absolute right-2">
                    <AnimatePresence>
                        {value.length > 0 && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center hover:bg-vercedo-blue hover:text-white transition-colors"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
