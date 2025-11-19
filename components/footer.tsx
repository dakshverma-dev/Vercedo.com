"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GrokInput from "./ui/grok-input";

export default function Footer() {
    return (
        <footer className="relative pt-32 pb-8 px-4 overflow-hidden">
            {/* Pre-Footer CTA */}
            <div className="text-center mb-24 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-7xl font-semibold tracking-tighter mb-6"
                >
                    Ready to silence the noise?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-xl text-white/60 mb-12"
                >
                    Join the top 1% of Real Estate investors using Vercedo.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <GrokInput />
                </motion.div>
            </div>

            {/* Island Footer Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto bg-[#0A0A0A] rounded-[32px] border border-white/5 p-12 md:p-16 relative overflow-hidden"
            >
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-vercedo-blue/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                    {/* Brand Column */}
                    <div className="md:col-span-4 flex flex-col justify-between h-full">
                        <div>
                            <div className="flex items-center gap-2 text-2xl font-semibold tracking-tight mb-6">
                                <Image src="/logo.png" alt="Vercedo Logo" width={40} height={40} className="w-10 h-10" />
                                Vercedo
                            </div>
                            <p className="text-white/40 leading-relaxed max-w-sm">
                                Engineered in India. <br />
                                Global Standard.
                            </p>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-medium text-white">Product</h4>
                            <Link href="/features" className="text-white/40 hover:text-vercedo-blue transition-colors">Features</Link>
                            <Link href="/solutions" className="text-white/40 hover:text-vercedo-blue transition-colors">Solutions</Link>
                            <Link href="/pricing" className="text-white/40 hover:text-vercedo-blue transition-colors">Pricing</Link>
                            <Link href="/changelog" className="text-white/40 hover:text-vercedo-blue transition-colors">Changelog</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-medium text-white">Company</h4>
                            <Link href="/about" className="text-white/40 hover:text-vercedo-blue transition-colors">About</Link>
                            <Link href="/careers" className="text-white/40 hover:text-vercedo-blue transition-colors">Careers</Link>
                            <Link href="/blog" className="text-white/40 hover:text-vercedo-blue transition-colors">Blog</Link>
                            <Link href="/contact" className="text-white/40 hover:text-vercedo-blue transition-colors">Contact</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-medium text-white">Resources</h4>
                            <Link href="/docs" className="text-white/40 hover:text-vercedo-blue transition-colors">Documentation</Link>
                            <Link href="/api" className="text-white/40 hover:text-vercedo-blue transition-colors">API Reference</Link>
                            <Link href="/community" className="text-white/40 hover:text-vercedo-blue transition-colors">Community</Link>
                            <Link href="/status" className="text-white/40 hover:text-vercedo-blue transition-colors">System Status</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-medium text-white">Legal</h4>
                            <Link href="/legal/privacy" className="text-white/40 hover:text-vercedo-blue transition-colors">Privacy Policy</Link>
                            <Link href="/legal/terms" className="text-white/40 hover:text-vercedo-blue transition-colors">Terms of Service</Link>
                            <Link href="/legal/security" className="text-white/40 hover:text-vercedo-blue transition-colors">Security</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between pt-12 mt-12 border-t border-white/5 gap-6">
                    <p className="text-white/20 text-sm">
                        © 2025 Vercedo Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-white/40 hover:text-white transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-white/40 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-white/40 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-white/40 hover:text-white transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
