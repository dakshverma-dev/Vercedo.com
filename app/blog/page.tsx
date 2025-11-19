"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";


const articles = [
    {
        title: "Why Cold Calling is Dead (And What Replaces It)",
        excerpt: "The era of manual dialing is over. AI agents are not just faster; they are more consistent, more resilient, and infinitely scalable. Here is why the top 1% of wholesalers have already switched.",
        date: "Nov 18, 2025",
        readTime: "8 min read",
        category: "Strategy",
        span: "col-span-1 md:col-span-2 row-span-2",
        imageColor: "from-vercedo-blue/20 to-purple-500/20",
    },
    {
        title: "The 500ms Latency Benchmark",
        excerpt: "Human conversation happens in milliseconds. If your AI lags, trust is broken. We dive deep into the websocket architecture that makes Vercedo feel real.",
        date: "Nov 15, 2025",
        readTime: "5 min read",
        category: "Engineering",
        span: "col-span-1",
        imageColor: "from-vercedo-orange/20 to-red-500/20",
    },
    {
        title: "How Wholesalers Scale in 2025",
        excerpt: "A case study on how a Miami-based team went from 5 deals a month to 50 without hiring a single new acquisition manager.",
        date: "Nov 10, 2025",
        readTime: "6 min read",
        category: "Case Study",
        span: "col-span-1",
        imageColor: "from-green-500/20 to-emerald-500/20",
    },
    {
        title: "Objection Handling 101: AI vs Human",
        excerpt: "Humans get tired. Humans get discouraged. AI treats every 'No' as just another data point to navigate. Analyzing 1M+ calls.",
        date: "Nov 05, 2025",
        readTime: "7 min read",
        category: "Data",
        span: "col-span-1 md:col-span-2",
        imageColor: "from-blue-500/20 to-cyan-500/20",
    },
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-vercedo-black text-white selection:bg-vercedo-blue/30 pt-24 pb-24">
            {/* Hero */}
            <section className="py-24 px-4 text-center border-b border-white/5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6">
                        The Signal.
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Insights on Voice AI, Real Estate Automation, and the future of sales.
                    </p>
                </motion.div>
            </section>

            {/* Articles Grid */}
            <section className="max-w-6xl mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                    {articles.map((article, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`group relative rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden p-8 flex flex-col justify-between hover:border-white/20 transition-colors ${article.span}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${article.imageColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium uppercase tracking-wider">
                                        {article.category}
                                    </span>
                                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>

                                <h2 className={`${article.span.includes("col-span-2") ? "text-4xl" : "text-2xl"} font-semibold mb-4 group-hover:text-vercedo-blue transition-colors`}>
                                    {article.title}
                                </h2>
                                <p className="text-white/60 leading-relaxed line-clamp-3">
                                    {article.excerpt}
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center gap-6 text-sm text-white/40 pt-8 border-t border-white/5 mt-auto">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {article.date}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {article.readTime}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
