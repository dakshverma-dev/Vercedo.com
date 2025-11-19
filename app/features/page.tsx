"use client";

import { motion } from "framer-motion";
import { Brain, Activity, BarChart3, Users, Phone } from "lucide-react";
import Image from "next/image";
import FAQ from "@/components/faq";

export default function FeaturesPage() {
    return (
        <main className="min-h-screen bg-vercedo-black text-white selection:bg-vercedo-blue/30 pt-24">
            {/* Header */}
            <section className="h-[50vh] flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6">
                        Under the Hood.
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Not just another wrapper. A custom fine-tuned intelligence.
                    </p>
                </motion.div>
            </section>

            {/* The Brain */}
            <section className="py-24 px-4 bg-vercedo-dark-gray/30 relative overflow-hidden">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-vercedo-blue/20 flex items-center justify-center">
                                <Brain className="w-6 h-6 text-vercedo-blue" />
                            </div>
                            <h2 className="text-3xl font-semibold">The Brain</h2>
                        </div>
                        <p className="text-lg text-white/60 leading-relaxed mb-8">
                            Vercedo isn&apos;t just prompting GPT-4. We train our own models on millions of sales conversations to understand nuance, objection handling, and persuasion.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Sub-500ms Latency",
                                "Context-Aware Memory",
                                "Sentiment Analysis",
                                "Custom Voice Cloning"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-vercedo-blue" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Neural Network Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] bg-black/50 rounded-3xl border border-white/10 p-8 flex items-center justify-center overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-grid-white/[0.02]" />
                        <div className="relative z-10 grid grid-cols-3 gap-12">
                            {[...Array(3)].map((_, colIndex) => (
                                <div key={colIndex} className="flex flex-col gap-8 justify-center">
                                    {[...Array(3)].map((_, nodeIndex) => (
                                        <motion.div
                                            key={nodeIndex}
                                            className="w-4 h-4 rounded-full bg-vercedo-blue shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.5, 1, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: colIndex * 0.5 + nodeIndex * 0.2,
                                            }}
                                        />
                                    ))}
                                </div>
                            ))}
                            {/* Connecting Lines (Simplified with CSS) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="#00f0ff" strokeWidth="1" />
                                <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="#00f0ff" strokeWidth="1" />
                                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#00f0ff" strokeWidth="1" />
                                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#00f0ff" strokeWidth="1" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Dashboard */}
            <section className="py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-semibold mb-4">Complete Control</h2>
                        <p className="text-white/60">Monitor every call, analyze performance, and scale instantly.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl"
                    >
                        {/* Mock Dashboard UI */}
                        <div className="flex h-[600px]">
                            {/* Sidebar */}
                            <div className="w-64 border-r border-white/5 p-6 hidden md:flex flex-col gap-6">
                                <div className="flex items-center gap-2 text-white font-semibold mb-4">
                                    <Image src="/logo.png" alt="Vercedo Logo" width={24} height={24} className="w-6 h-6" /> Vercedo
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-white">
                                        <Activity className="w-4 h-4" /> Overview
                                    </div>
                                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 hover:bg-white/5 transition-colors">
                                        <Phone className="w-4 h-4" /> Calls
                                    </div>
                                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 hover:bg-white/5 transition-colors">
                                        <Users className="w-4 h-4" /> Contacts
                                    </div>
                                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 hover:bg-white/5 transition-colors">
                                        <BarChart3 className="w-4 h-4" /> Analytics
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 p-8 bg-[#050505]">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-xl font-medium">Performance Overview</h3>
                                    <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">Live</div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-6 mb-8">
                                    {[
                                        { label: "Total Calls", value: "1,248", change: "+12%" },
                                        { label: "Avg. Duration", value: "4m 12s", change: "+5%" },
                                        { label: "Conversion Rate", value: "24.8%", change: "+2.4%" },
                                    ].map((stat, i) => (
                                        <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/5">
                                            <div className="text-sm text-white/40 mb-2">{stat.label}</div>
                                            <div className="text-2xl font-semibold mb-1">{stat.value}</div>
                                            <div className="text-xs text-green-500">{stat.change} vs last week</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Chart Area */}
                                <div className="h-64 rounded-xl bg-white/5 border border-white/5 flex items-end justify-between p-6 gap-2">
                                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                                        <div key={i} className="w-full bg-vercedo-blue/20 rounded-t-sm relative group">
                                            <div
                                                className="absolute bottom-0 left-0 right-0 bg-vercedo-blue transition-all duration-500 group-hover:bg-vercedo-blue/80"
                                                style={{ height: `${h}%` }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Technical Deep Dive */}
            <section className="py-24 px-4 bg-vercedo-dark-gray/30">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-semibold mb-8">Technical Deep Dive</h2>
                        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                            <p>
                                Achieving sub-500ms latency requires a complete reimagining of the voice stack. Traditional IVR systems rely on polling and HTTP requests, which introduce unacceptable delays. Vercedo utilizes a custom WebSocket architecture that streams audio packets in real-time.
                            </p>
                            <p>
                                We leverage Vapi for voice synthesis orchestration, but the core intelligence runs on our proprietary fine-tuned models. These models are trained on a dataset of high-performing sales calls, allowing the AI to recognize not just words, but tonality, hesitation, and intent.
                            </p>
                            <p>
                                Our telephony layer is built on top of Twilio&apos;s Global Network, ensuring carrier-grade reliability and crystal-clear audio quality. We implement jitter buffering and packet loss concealment algorithms to maintain conversation fluidity even under unstable network conditions.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <FAQ items={[
                {
                    question: "How does the AI handle interruptions?",
                    answer: "Vercedo uses full-duplex audio streaming. This means it can listen while speaking. If a prospect interrupts, the AI instantly stops speaking, processes the interruption, and responds appropriately, just like a human would."
                },
                {
                    question: "Can I clone my own voice?",
                    answer: "Yes. We offer custom voice cloning for enterprise clients. You can upload a 5-minute sample of your top sales rep, and Vercedo will mimic their tone, cadence, and accent."
                },
                {
                    question: "Does it integrate with my CRM?",
                    answer: "Absolutely. We have native integrations for Salesforce, HubSpot, GoHighLevel, and Podio. Calls are logged, transcripts are attached, and deal stages are updated automatically."
                }
            ]} />
        </main>
    );
}
