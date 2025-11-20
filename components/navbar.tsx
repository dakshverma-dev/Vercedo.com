"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view", "theme": "dark" });
        })();
    }, [])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut" as const,
                when: "afterChildren" as const
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut" as const,
                when: "beforeChildren" as const,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-6 px-4"
            >
                <div className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg shadow-black/20">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white">
                        <Image src="/logo.png" alt="Vercedo Logo" width={32} height={32} className="w-8 h-8" />
                        Vercedo
                    </Link>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                        <Link href="/features" className="hover:text-white transition-colors">Product</Link>
                        <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
                        <Link href="/about" className="hover:text-white transition-colors">Company</Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            data-cal-namespace="30min"
                            data-cal-link="vercedo/30min"
                            data-cal-config='{"layout":"month_view", "theme":"dark"}'
                            className="hidden md:flex group items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-vercedo-blue transition-colors"
                        >
                            Book Demo
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>

                        {/* Hamburger Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-5 h-0.5 bg-white rounded-full mb-1"
                            />
                            <motion.span
                                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                className="w-5 h-0.5 bg-white rounded-full mb-1"
                            />
                            <motion.span
                                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-5 h-0.5 bg-white rounded-full"
                            />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            onClick={(e) => e.stopPropagation()}
                            className="absolute top-24 left-4 right-4 bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl shadow-black/40 overflow-hidden"
                        >
                            <div className="flex flex-col p-6 gap-2">
                                <motion.div variants={itemVariants}>
                                    <Link
                                        href="/features"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all text-base font-medium"
                                    >
                                        Product
                                    </Link>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <Link
                                        href="/solutions"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all text-base font-medium"
                                    >
                                        Solutions
                                    </Link>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <Link
                                        href="/about"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all text-base font-medium"
                                    >
                                        Company
                                    </Link>
                                </motion.div>

                                <motion.div variants={itemVariants} className="mt-4">
                                    <button
                                        data-cal-namespace="30min"
                                        data-cal-link="vercedo/30min"
                                        data-cal-config='{"layout":"month_view", "theme":"dark"}'
                                        onClick={() => setIsMenuOpen(false)}
                                        className="w-full group flex items-center justify-center gap-2 px-4 py-3 bg-white text-black rounded-xl text-base font-medium hover:bg-vercedo-blue transition-colors"
                                    >
                                        Book Demo
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
