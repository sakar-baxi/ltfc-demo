"use client";

import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Info } from "lucide-react";
import { motion } from "framer-motion";

export default function SuccessPage() {
    const [rating, setRating] = useState<number | null>(null);

    useEffect(() => {
        // Trigger confetti
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);

        return () => clearInterval(interval);
    }, []);

    const emojis = [
        { label: "Excellent", id: 5, bg: "bg-green-500", icon: "😄" },
        { label: "Good", id: 4, bg: "bg-green-400", icon: "🙂" },
        { label: "Neutral", id: 3, bg: "bg-yellow-400", icon: "😐" },
        { label: "Poor", id: 2, bg: "bg-orange-400", icon: "🙁" },
        { label: "Bad", id: 1, bg: "bg-red-500", icon: "😠" }
    ];

    return (
        <div className="flex-1 w-full h-full min-h-[calc(100vh-5rem)] flex items-center justify-center bg-white relative overflow-hidden">

            {/* Success Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                className="w-full max-w-2xl bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-10 flex flex-col overflow-hidden border border-gray-100"
            >

                {/* Blue Top Half */}
                <div className="bg-[#008BB4] text-white p-12 flex flex-col items-center text-center relative overflow-hidden">
                    {/* subtle decorative background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>

                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-4 tracking-wide">Congratulations Manish!</h2>
                        <h1 className="text-7xl font-bold tracking-tighter mb-6 relative">
                            <span className="font-sans font-light mr-1">₹</span> 15,45,000
                        </h1>
                        <p className="text-[15px] font-medium opacity-90 mb-10 w-4/5 mx-auto">
                            Approved and will be disbursed to <span className="font-bold">XX0578 (HDFC Bank)</span> within 30 mins.
                        </p>

                        <button className="bg-[#f0f9fb] w-full text-gray-800 text-sm font-semibold rounded-lg py-3 px-6 flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-sm">
                            <Info className="h-5 w-5 text-gray-600 shrink-0" />
                            <span>For any assistance please reach out to <a href="mailto:help@ltfs.com" className="text-blue-600 underline underline-offset-2">help@ltfs.com</a></span>
                        </button>
                    </div>
                </div>

                {/* Bottom Feedback Half */}
                <div className="p-10 flex items-center justify-between">
                    <div>
                        <h3 className="text-[19px] font-bold text-gray-800 mb-1 tracking-tight">Please rate your experience</h3>
                        <p className="text-[13px] text-gray-500 font-medium">We respect your opinion and are eager to improve our services</p>
                    </div>

                    <div className="flex gap-4">
                        {emojis.map((emoji) => (
                            <button
                                key={emoji.id}
                                onClick={() => setRating(emoji.id)}
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-3xl shadow-sm transition-transform hover:scale-110 border-4 border-white ${emoji.bg} ${rating === emoji.id ? 'scale-110 shadow-md ring-2 ring-gray-200' : 'opacity-80 saturate-[0.85]'}`}
                                title={emoji.label}
                            >
                                {emoji.icon}
                            </button>
                        ))}
                    </div>
                </div>

            </motion.div>

        </div>
    );
}
