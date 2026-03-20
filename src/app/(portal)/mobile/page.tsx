"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function MobilePage() {
    const [loading, setLoading] = useState(false);
    const [consent, setConsent] = useState(false);
    const router = useRouter();

    const handleProceed = () => {
        if (!consent) {
            alert("Please accept the terms and conditions.");
            return;
        }
        setLoading(true);
        setTimeout(() => router.push("/otp"), 600);
    };

    return (
        <div className="flex w-full h-full min-h-[calc(100vh-4rem)]">
            {/* Left Form Side */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex-[1.2] flex flex-col pt-24 px-12 lg:px-24 bg-white relative"
            >
                <h1 className="text-3xl font-bold text-gray-900 mb-16 tracking-tight">
                    Welcome to Personal Loan Portal
                </h1>

                <div className="w-full max-w-md mt-6">
                    <p className="text-base font-bold text-gray-800 mb-4">
                        Enter mobile number registered with LTIMindtree
                    </p>

                    <div className="flex border-2 border-sky-400 rounded overflow-hidden mb-6 transition-shadow focus-within:border-sky-500">
                        <div className="bg-white text-gray-400 px-4 py-3 sm:py-4 flex items-center justify-center">
                            +91 <span className="ml-2 border-r border-gray-300 h-6"></span>
                        </div>
                        <input
                            type="text"
                            defaultValue="91729 83746"
                            className="w-full px-4 py-3 sm:py-4 outline-none text-gray-900 font-bold text-lg tracking-wider"
                        />
                    </div>

                    <label className="flex items-start gap-3 mb-8 cursor-pointer group mt-4">
                        <input
                            type="checkbox"
                            className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                        />
                        <span className="text-sm text-gray-500 leading-relaxed font-medium">
                            Consent text with hyperlinked <a href="#" className="text-blue-600 font-bold hover:underline">T&Cs</a>
                        </span>
                    </label>

                    <button
                        onClick={handleProceed}
                        disabled={loading}
                        className="w-full bg-black text-white font-semibold py-4 rounded hover:bg-gray-800 transition shadow-lg flex justify-center items-center gap-2 relative overflow-hidden text-lg"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : "Proceed"}
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
                className="hidden lg:flex flex-1 bg-[#DAB23C] flex-col justify-end items-center relative overflow-hidden"
            >
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-[#E2B93D] to-[#C9A02B] z-0"></div>
                <div className="absolute w-[800px] h-[800px] bg-white/20 rounded-full blur-3xl mix-blend-overlay pointer-events-none z-0" />

                {/* Main Hero Person representing 1.png */}
                <img
                    src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Man with Phone"
                    className="w-[85%] h-[75%] object-cover object-top z-10 drop-shadow-2xl mt-auto mix-blend-luminosity brightness-110 sepia-[.3]"
                    style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
                />

                <div className="absolute bottom-16 w-full text-center z-20 px-8 flex flex-col items-center">
                    <h2 className="text-4xl font-extrabold text-[#002B49] mb-3 tracking-tight">Instant Personal Loans</h2>
                    <p className="text-lg text-gray-800 font-medium mb-6">Up to ₹30 Lakhs for rates as low as 10% p.a.</p>

                    <div className="flex gap-2 justify-center">
                        <div className="w-8 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
