"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-vercedo-blue/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-vercedo-blue/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
                    >
                        Join the <span className="text-vercedo-blue">Revolution</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-xl text-white/60 max-w-2xl mx-auto mb-12"
                    >
                        We&apos;re building the future of Real Estate intelligence.
                        Help us empower investors with data-driven insights.
                    </motion.p>
                </div>
            </section>

            {/* Open Positions Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Open Positions</h2>
                        <div className="h-1 w-20 bg-vercedo-blue rounded-full" />
                    </motion.div>

                    <div className="grid gap-6">
                        {/* Internship Opportunity Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-2xl font-semibold">Software Engineering Intern</h3>
                                        <span className="px-3 py-1 bg-vercedo-blue/20 text-vercedo-blue text-xs font-medium rounded-full border border-vercedo-blue/20">
                                            Internship
                                        </span>
                                    </div>
                                    <p className="text-white/60 mb-4 max-w-xl">
                                        Join our engineering team to build scalable systems and work on cutting-edge AI features.
                                        Perfect for students or recent graduates looking to make a real impact.
                                    </p>
                                    <div className="flex flex-wrap items-center gap-6 text-sm text-white/40">
                                        <div className="flex items-center gap-2">
                                            <Briefcase className="w-4 h-4" />
                                            Engineering
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            Remote / Hybrid
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            3-6 Months
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href="mailto:careers@vercedo.com?subject=Application for Software Engineering Intern"
                                    className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-vercedo-blue transition-colors group-hover:translate-x-2 duration-300"
                                >
                                    Apply Now
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Placeholder for no other roles */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center py-12 border border-dashed border-white/10 rounded-2xl"
                        >
                            <p className="text-white/40">
                                Don&apos;t see a role that fits? <Link href="mailto:careers@vercedo.com" className="text-vercedo-blue hover:underline">Email us</Link> your resume.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
