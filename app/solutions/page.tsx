"use client";

import { motion } from "framer-motion";
import { Building2, Briefcase, Quote } from "lucide-react";
import FAQ from "@/components/faq";

export default function SolutionsPage() {
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
                        Tailored for <br /> Real Estate.
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Whether you&apos;re wholesaling or brokering, Vercedo adapts to your workflow.
                    </p>
                </motion.div>
            </section>

            {/* Split Cards */}
            <section className="py-24 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Investors/Wholesalers */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden min-h-[500px] flex flex-col"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-vercedo-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex-1 flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-vercedo-orange/20 flex items-center justify-center mb-8">
                                <Building2 className="w-7 h-7 text-vercedo-orange" />
                            </div>
                            <h2 className="text-3xl font-semibold mb-4">For Investors & Wholesalers</h2>
                            <p className="text-white/60 text-lg mb-8">
                                High-volume outbound calling to qualify distressed leads. Vercedo filters the noise so you only talk to motivated sellers.
                            </p>

                            <div className="mt-auto space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="text-sm text-white/40">Capacity</div>
                                    <div className="text-xl font-medium">10,000+ calls/day</div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="text-sm text-white/40">Feature</div>
                                    <div className="text-xl font-medium">Objection Handling</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Brokers/Agents */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden min-h-[500px] flex flex-col"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-vercedo-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex-1 flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-vercedo-blue/20 flex items-center justify-center mb-8">
                                <Briefcase className="w-7 h-7 text-vercedo-blue" />
                            </div>
                            <h2 className="text-3xl font-semibold mb-4">For Brokers & Agents</h2>
                            <p className="text-white/60 text-lg mb-8">
                                White-glove inbound reception. Never miss a listing inquiry or buyer lead. Vercedo schedules appointments directly to your calendar.
                            </p>

                            <div className="mt-auto space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="text-sm text-white/40">Response Time</div>
                                    <div className="text-xl font-medium">Instant (0s hold)</div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="text-sm text-white/40">Feature</div>
                                    <div className="text-xl font-medium">Calendar Sync</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-4 bg-vercedo-dark-gray/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-16 text-center">Trusted by Top Performers</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Vercedo doubled our lead qualification speed overnight. It's like hiring 10 ISAs instantly.",
                                author: "Sarah Jenkins",
                                role: "CEO, Jenkins Realty",
                            },
                            {
                                quote: "The latency is undetectable. My clients have no idea they're talking to an AI.",
                                author: "Michael Ross",
                                role: "Wholesaler, Miami",
                            },
                            {
                                quote: "Finally, an AI that understands real estate jargon. It handles objections better than my new hires.",
                                author: "David Chen",
                                role: "Broker Owner, ReMax",
                            },
                        ].map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-8 rounded-2xl bg-vercedo-black border border-white/5 relative"
                            >
                                <Quote className="w-8 h-8 text-vercedo-blue/20 mb-6" />
                                <p className="text-lg text-white/80 mb-6 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                                <div>
                                    <div className="font-medium text-white">{testimonial.author}</div>
                                    <div className="text-sm text-white/40">{testimonial.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* FAQ */}
            <FAQ items={[
                {
                    question: "Is this legal in my state?",
                    answer: "Vercedo is compliant with federal TCPA regulations. However, laws vary by state regarding recording consent and automated dialing. We recommend consulting with your legal counsel to ensure compliance in your specific target markets."
                },
                {
                    question: "What happens if the AI doesn't know the answer?",
                    answer: "You can configure a 'fallback' protocol. If the AI encounters a query it cannot handle with high confidence, it can gracefully transfer the call to a human agent or take a message for follow-up."
                },
                {
                    question: "How many calls can it make per day?",
                    answer: "There is virtually no limit. Our infrastructure scales elastically. Whether you need 100 calls or 100,000 calls per day, Vercedo handles the load without degradation in quality."
                }
            ]} />
        </main>
    );
}
