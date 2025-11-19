"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const useCases = [
    {
        id: "inbound",
        title: "Inbound Lead",
        description: "Qualify leads instantly.",
        duration: "0:45",
    },
    {
        id: "outbound",
        title: "Cold Outbound",
        description: "Scale your outreach.",
        duration: "1:12",
    },
    {
        id: "appointment",
        title: "Appointment Setting",
        description: "Book meetings 24/7.",
        duration: "0:58",
    },
];

export default function AudioShowcase() {
    const [activeCase, setActiveCase] = useState(useCases[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-24 px-4 bg-vercedo-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-vercedo-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">
                        Sounds like a human. <br />
                        <span className="text-white/40">Works like a machine.</span>
                    </h2>
                    <p className="text-lg text-white/60 mb-12 max-w-md leading-relaxed">
                        Listen to how Vercedo handles complex conversations with natural pauses, interruptions, and empathy.
                    </p>

                    <div className="space-y-4">
                        {useCases.map((useCase) => (
                            <button
                                key={useCase.id}
                                onClick={() => {
                                    setActiveCase(useCase);
                                    setIsPlaying(false);
                                }}
                                className={cn(
                                    "w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group",
                                    activeCase.id === useCase.id
                                        ? "bg-white/10 border-vercedo-blue/50 shadow-[0_0_20px_-5px_rgba(0,240,255,0.1)]"
                                        : "bg-white/5 border-white/5 hover:bg-white/8 hover:border-white/10"
                                )}
                            >
                                <div>
                                    <h3 className={cn("font-medium transition-colors", activeCase.id === useCase.id ? "text-white" : "text-white/80")}>
                                        {useCase.title}
                                    </h3>
                                    <p className="text-sm text-white/40">{useCase.description}</p>
                                </div>
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                                    activeCase.id === useCase.id ? "bg-vercedo-blue text-black" : "bg-white/10 text-white/40"
                                )}>
                                    <Play className="w-3 h-3 fill-current" />
                                </div>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Player Interface */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 bg-vercedo-dark-gray border border-white/10 rounded-3xl p-8 overflow-hidden backdrop-blur-xl">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vercedo-blue to-vercedo-blue/50 flex items-center justify-center shadow-lg shadow-vercedo-blue/20">
                                    <Phone className="w-5 h-5 text-black" />
                                </div>
                                <div>
                                    <div className="text-sm text-white/40 uppercase tracking-wider font-medium">Now Playing</div>
                                    <div className="text-xl font-semibold">{activeCase.title}</div>
                                </div>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-medium flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Connected
                            </div>
                        </div>

                        {/* Visualizer */}
                        <div className="h-32 flex items-center justify-center gap-1 mb-12">
                            {Array.from({ length: 40 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-1.5 bg-gradient-to-t from-vercedo-blue/20 to-vercedo-blue rounded-full"
                                    animate={isPlaying ? {
                                        height: [
                                            "20%",
                                            `${Math.random() * 80 + 20}%`,
                                            "20%"
                                        ]
                                    } : { height: "10%" }}
                                    transition={{
                                        duration: 0.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.05,
                                    }}
                                    style={{ opacity: isPlaying ? 1 : 0.3 }}
                                />
                            ))}
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-white/40 font-mono">00:00</div>
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform duration-200 shadow-lg shadow-white/10"
                            >
                                {isPlaying ? (
                                    <Pause className="w-6 h-6 fill-current" />
                                ) : (
                                    <Play className="w-6 h-6 fill-current ml-1" />
                                )}
                            </button>
                            <div className="text-sm text-white/40 font-mono">{activeCase.duration}</div>
                        </div>
                    </div>

                    {/* Decorative Elements behind player */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-vercedo-orange/20 rounded-full blur-[40px] animate-pulse-slow" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-vercedo-blue/20 rounded-full blur-[40px] animate-pulse-slow delay-700" />
                </motion.div>
            </div>
        </section>
    );
}
