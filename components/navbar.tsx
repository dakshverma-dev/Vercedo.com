"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Navbar() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view", "theme": "dark" });
        })();
    }, [])

    return (
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

                <button
                    data-cal-namespace="30min"
                    data-cal-link="vercedo/30min"
                    data-cal-config='{"layout":"month_view", "theme":"dark"}'
                    className="group flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-vercedo-blue transition-colors"
                >
                    Book Demo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </motion.nav>
    );
}
