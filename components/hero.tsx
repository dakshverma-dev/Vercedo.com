"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-vercedo-black">
            {/* Background Gradient Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vercedo-blue/20 rounded-full blur-[120px] animate-breathing opacity-50" />

            {/* Secondary Orb for depth */}
            <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-vercedo-orange/10 rounded-full blur-[100px] animate-pulse-slow opacity-30" />

            <div className="z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-8">
                        The Voice of <br className="hidden md:block" /> Your Business.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-12 leading-relaxed"
                >
                    Experience the future of customer interaction. Vercedo delivers human-like AI voice agents with sub-500ms latency.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <button
                        className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-full overflow-hidden backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-vercedo-blue/50 hover:shadow-[0_0_40px_-10px_rgba(0,240,255,0.3)]"
                    >
                        <span className="relative z-10 flex items-center gap-2 text-white font-medium tracking-wide">
                            Get Started <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-vercedo-blue/0 via-vercedo-blue/10 to-vercedo-blue/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
            </motion.div>
        </section>
    );
}
