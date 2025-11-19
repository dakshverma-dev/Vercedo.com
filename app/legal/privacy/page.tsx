"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-vercedo-black text-zinc-400 selection:bg-vercedo-blue/30 pt-32 pb-24 px-4">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl font-semibold text-white mb-8">Privacy Policy</h1>

                    <div className="space-y-8 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-medium text-white mb-4">1. Introduction</h2>
                            <p>
                                Vercedo (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI voice services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-white mb-4">2. Information We Collect</h2>
                            <p>
                                We collect information that you provide directly to us, such as when you create an account, request a demo, or communicate with us. This may include your name, email address, phone number, and company information.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-medium text-white mb-4">AI Voice Disclosure</h2>
                            <p className="mb-4">
                                Vercedo utilizes advanced Artificial Intelligence (AI) technologies to generate voice interactions. By using our services, you acknowledge and agree that:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Interactions may be conducted by an AI agent, not a human.</li>
                                <li>Calls may be recorded and transcribed for quality assurance and model training purposes.</li>
                                <li>We do not use your proprietary data to train public models without your explicit consent.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-white mb-4">3. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-white mb-4">4. Contact Us</h2>
                            <p>
                                If you have questions or comments about this Privacy Policy, please contact us at: <br />
                                <a href="mailto:privacy@vercedo.ai" className="text-vercedo-blue hover:underline">privacy@vercedo.ai</a>
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
