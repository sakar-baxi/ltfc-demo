"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function OTPPage() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) return; // Only allow 1 char

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleProceed = async () => {
        // Check if OTP is fully entered
        if (otp.some(digit => digit === "")) {
            alert("Please enter a valid 6-digit OTP.");
            return;
        }

        setLoading(true);

        // Call mock Node.js backend
        try {
            const res = await fetch("/api/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ otp: otp.join("") }),
            });

            const data = await res.json();
            if (data.success) {
                // Wait a slight moment for smooth transition
                setTimeout(() => router.push("/review-details"), 500);
            } else {
                alert("Invalid OTP");
                setLoading(false);
            }
        } catch (e) {
            setLoading(false);
            alert("Error verifying OTP");
        }
    };

    return (
        <div className="flex w-full h-full min-h-[calc(100vh-5rem)]">
            {/* Left Form Side */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex-1 flex flex-col pt-12 px-12 lg:px-24 bg-white relative"
            >
                <h1 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">
                    Welcome to Personal Loan Portal
                </h1>

                <div className="w-full max-w-md">
                    <p className="text-base font-bold text-gray-800 mb-6">
                        Enter 6 digit OTP shared on your number +91 - xxxxxx7283
                    </p>

                    <div className="flex justify-between gap-3 sm:gap-4 mb-4">
                        {otp.map((digit, i) => (
                            <input
                                key={i}
                                ref={(el) => { inputRefs.current[i] = el; }}
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(i, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(i, e)}
                                className="w-12 h-14 sm:w-14 sm:h-16 text-center text-xl font-semibold border-2 border-gray-300 rounded focus:border-[#005187] focus:ring-1 focus:ring-[#005187] outline-none transition-all shadow-sm shadow-inner"
                            />
                        ))}
                    </div>

                    <div className="flex justify-between text-[11px] sm:text-xs text-gray-500 mb-10">
                        <span>Resend OTP in <span className="text-gray-900 font-semibold">30s</span></span>
                        <span className="cursor-pointer hover:underline">Incorrect number? Click Here</span>
                    </div>

                    <button
                        onClick={handleProceed}
                        disabled={loading}
                        className="w-full bg-black text-white font-semibold py-4 rounded hover:bg-gray-800 transition shadow-lg flex justify-center items-center gap-2 group relative overflow-hidden text-lg"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : "Proceed"}
                        {!loading && <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 mix-blend-overlay"></div>}
                    </button>
                </div>

                {/* Powered By Bottom */}
                <div className="absolute bottom-6 left-12 lg:left-24 flex items-center gap-2 mt-auto">
                    <span className="text-xs text-gray-500 font-medium italic">Powered by L&T Finance</span>
                    {/* small logo mark */}
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFC72C] text-black">
                        <div className="flex flex-col items-center justify-center font-bold text-[8px] leading-none pt-0.5">
                            <span>L</span><span>&</span><span>T</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Image Side */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="hidden lg:flex flex-1 bg-[#F4C01C] flex-col justify-end items-center relative overflow-hidden"
            >
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-yellow-400 to-amber-500 z-0"></div>
                <div className="absolute w-[800px] h-[800px] bg-white/20 rounded-full blur-3xl mix-blend-overlay pointer-events-none z-0" />

                <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Happy professional"
                    className="w-[85%] h-[75%] object-cover object-top z-10 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] drop-shadow-2xl rounded-t-full mt-auto"
                />

                <div className="absolute bottom-12 w-full text-center z-20 px-8">
                    <div className="bg-white/90 backdrop-blur pb-6 pt-5 px-8 rounded-3xl shadow-xl border border-white/50 transform transition hover:scale-105">
                        <h2 className="text-3xl font-extrabold text-[#005187] mb-2 tracking-tight">Instant Personal Loans</h2>
                        <p className="text-base text-gray-800 font-bold">Up to ₹30 Lakhs • Rates as low as 10% p.a.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
