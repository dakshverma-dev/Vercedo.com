"use client";

import { motion } from "framer-motion";
import StickyCards from "@/components/sticky-cards";
import { Linkedin, Twitter } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-vercedo-black text-white selection:bg-vercedo-blue/30 pt-24">
            {/* Hero Section */}
            <section className="h-[70vh] flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter mb-8">
                        Engineered in India. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-vercedo-blue to-vercedo-orange">
                            Deployed Globally.
                        </span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                        We are a team of engineers, researchers, and problem solvers dedicated to eliminating the inefficiency of human-powered outreach.
                    </p>
                </motion.div>
            </section>

            {/* Founder Section */}
            <section className="py-32 px-4 bg-vercedo-dark-gray/30">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Founder Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        {/* Placeholder for Headshot */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/20 text-lg font-medium">
                            [Daksh Verma Headshot]
                        </div>

                        <div className="absolute bottom-8 left-8 z-20">
                            <h2 className="text-3xl font-semibold mb-1">Daksh Verma</h2>
                            <p className="text-vercedo-blue font-medium mb-4">Founder & Lead Architect | IIT Madras Alum</p>
                            <div className="flex gap-4">
                                <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Founder Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-4xl font-semibold mb-8">The Origin Story</h3>
                        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                            <p>
                                It started with a simple observation: Real estate professionals were spending 80% of their time chasing leads that weren&apos;t ready to buy, and only 20% closing deals. The inefficiency was staggering.
                            </p>
                            <p>
                                Daksh Verma, an IIT Madras alumnus with a background in high-frequency trading systems, saw a parallel. Just as algorithms revolutionized trading by removing human latency, AI could revolutionize sales by removing human hesitation.
                            </p>
                            <p>
                                He didn&apos;t just want to build a chatbot. He wanted to build a voice that could listen, understand, and persuade. After months of fine-tuning LLMs on thousands of hours of sales calls, Vercedo was born.
                            </p>
                            <p>
                                Today, Vercedo isn&apos;t just software. It&apos;s the engine behind some of the fastest-growing real estate wholesalers and brokerages in the world.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Sticky Cards Animation */}
            <div className="px-4">
                <StickyCards />
            </div>

            {/* Bottom Spacer */}
            <div className="h-[20vh]" />
        </main>
    );
}
