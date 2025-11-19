"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, BarChart, Shield } from "lucide-react";

const cards = [
    {
        title: "Speed",
        description: "Latency so low it feels like a live conversation. Sub-500ms response times ensure natural flow.",
        icon: Zap,
        color: "from-vercedo-blue/20 to-vercedo-blue/5",
        borderColor: "border-vercedo-blue/20",
        textColor: "text-vercedo-blue",
    },
    {
        title: "Precision",
        description: "Fine-tuned on millions of real estate calls. It understands context, slang, and objection handling.",
        icon: Target,
        color: "from-vercedo-orange/20 to-vercedo-orange/5",
        borderColor: "border-vercedo-orange/20",
        textColor: "text-vercedo-orange",
    },
    {
        title: "Scale",
        description: "Make 10,000 calls in parallel. Scale your outreach instantly without hiring a single new agent.",
        icon: BarChart,
        color: "from-purple-500/20 to-purple-500/5",
        borderColor: "border-purple-500/20",
        textColor: "text-purple-500",
    },
    {
        title: "Security",
        description: "Enterprise-grade encryption and compliance. Your data is safe, and your calls are private.",
        icon: Shield,
        color: "from-green-500/20 to-green-500/5",
        borderColor: "border-green-500/20",
        textColor: "text-green-500",
    },
];

interface CardProps {
    card: {
        title: string;
        description: string;
        icon: React.ElementType;
        color: string;
        borderColor: string;
        textColor: string;
    };
    index: number;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
}

const Card = ({ card, index, progress, range, targetScale }: CardProps) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
                className={`relative flex flex-col w-[1000px] h-[500px] rounded-[30px] p-12 border ${card.borderColor} bg-vercedo-black origin-top`}
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-50 rounded-[30px]`} />

                <div className="relative z-10 flex h-full">
                    <div className="w-1/2 flex flex-col justify-center gap-8">
                        <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${card.textColor}`}>
                            <card.icon className="w-8 h-8" />
                        </div>
                        <h2 className="text-5xl font-semibold">{card.title}</h2>
                        <p className="text-xl text-white/60 leading-relaxed">{card.description}</p>
                    </div>

                    <div className="w-1/2 flex items-center justify-center">
                        {/* Abstract Visual for each card */}
                        <div className="w-full h-full rounded-2xl bg-black/20 border border-white/5 overflow-hidden relative">
                            <div className="absolute inset-0 bg-grid-white/[0.05]" />
                            <motion.div
                                style={{ scale: imageScale }}
                                className={`absolute inset-0 bg-gradient-to-tr ${card.color} opacity-30 blur-3xl`}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function StickyCards() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={container} className="relative mt-[20vh]">
            {cards.map((card, i) => {
                const targetScale = 1 - (cards.length - i) * 0.05;
                return (
                    <Card
                        key={i}
                        index={i}
                        card={card}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </section>
    );
}
