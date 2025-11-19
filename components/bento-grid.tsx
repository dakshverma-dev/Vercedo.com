"use client";

import { motion } from "framer-motion";
import { Zap, Database, Clock, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Human-like Latency",
        description: "Responses in under 500ms. Faster than a blink.",
        icon: Zap,
        className: "md:col-span-2",
        gradient: "from-vercedo-blue/20 to-transparent",
    },
    {
        title: "CRM Integration",
        description: "Seamlessly syncs with Salesforce, HubSpot, and more.",
        icon: Database,
        className: "md:col-span-1",
        gradient: "from-vercedo-orange/20 to-transparent",
    },
    {
        title: "24/7 Availability",
        description: "Never miss a call. Always on, always ready.",
        icon: Clock,
        className: "md:col-span-1",
        gradient: "from-purple-500/20 to-transparent",
    },
    {
        title: "Enterprise Security",
        description: "SOC2 Type II compliant. Your data is safe.",
        icon: Shield,
        className: "md:col-span-2",
        gradient: "from-green-500/20 to-transparent",
    },
];

export default function BentoGrid() {
    return (
        <section className="py-24 px-4 bg-vercedo-black relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">Capabilities</h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Built for performance, designed for scale.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={cn(
                                "relative group overflow-hidden rounded-3xl bg-vercedo-dark-gray border border-white/5 p-8 hover:border-white/10 transition-colors",
                                feature.className
                            )}
                        >
                            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", feature.gradient)} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors border border-white/5">
                                    <feature.icon className="w-6 h-6 text-white/80" />
                                </div>
                                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
