"use client";

import { motion } from "framer-motion";
import { X, Check, Clock, DollarSign, Brain } from "lucide-react";

export default function Comparison() {
    return (
        <section className="py-24 px-4 bg-vercedo-black relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">Why Vercedo?</h2>
                    <p className="text-white/60 text-lg">The smart choice for modern businesses.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* The Old Way */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-8 rounded-3xl bg-vercedo-dark-gray/50 border border-white/5 grayscale opacity-70 hover:opacity-100 transition-opacity"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <X className="w-5 h-5 text-white/40" />
                            </div>
                            <h3 className="text-xl font-medium text-white/60">The Old Way</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Clock className="w-5 h-5 text-white/20 mt-1" />
                                <div>
                                    <div className="text-white/40 font-medium">Limited Availability</div>
                                    <div className="text-sm text-white/20">Misses calls after hours and weekends.</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <DollarSign className="w-5 h-5 text-white/20 mt-1" />
                                <div>
                                    <div className="text-white/40 font-medium">High Cost</div>
                                    <div className="text-sm text-white/20">$3,000+/month per receptionist.</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Brain className="w-5 h-5 text-white/20 mt-1" />
                                <div>
                                    <div className="text-white/40 font-medium">Needs Training</div>
                                    <div className="text-sm text-white/20">Weeks of onboarding and constant management.</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* The Vercedo Way */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative p-8 rounded-3xl bg-gradient-to-b from-vercedo-dark-gray to-black border border-vercedo-blue/20 overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-vercedo-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-full bg-vercedo-blue/20 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                                    <Check className="w-5 h-5 text-vercedo-blue" />
                                </div>
                                <h3 className="text-xl font-medium text-white">The Vercedo Way</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Clock className="w-5 h-5 text-vercedo-blue mt-1 shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                                    <div>
                                        <div className="text-white font-medium">24/7 Availability</div>
                                        <div className="text-sm text-white/60">Instantly answers every single call.</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <DollarSign className="w-5 h-5 text-vercedo-blue mt-1 shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                                    <div>
                                        <div className="text-white font-medium">Cost Effective</div>
                                        <div className="text-sm text-white/60">A fraction of the cost of a human employee.</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Brain className="w-5 h-5 text-vercedo-blue mt-1 shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                                    <div>
                                        <div className="text-white font-medium">Perfect Memory</div>
                                        <div className="text-sm text-white/60">Instant access to your entire knowledge base.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
