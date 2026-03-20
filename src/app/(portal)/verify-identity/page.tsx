"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Loader2, EyeOff, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function VerifyIdentityPage() {
    const [pin, setPin] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);
        if (value && index < 5) inputRefs.current[index + 1]?.focus();
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !pin[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        setLoading(true);
        setTimeout(() => router.push("/verify-bank"), 1000);
    };

    return (
        <div className="flex flex-col w-full h-full bg-[#fcfcfc] px-8 lg:px-24 py-10 relative">
            <div className="mb-6">
                <h1 className="text-3xl font-semibold text-gray-900 mb-2">Welcome Manish,</h1>
                <p className="text-xl text-gray-700">Your loan offer is just couple of steps away!</p>
            </div>

            <div className="flex flex-col lg:flex-row w-full max-w-[1200px] bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.05)] h-[650px]">

                {/* Left Nav */}
                <div className="w-full lg:w-[280px] bg-[#fbe76a] p-10 flex flex-col relative shrink-0">
                    <div className="absolute left-[3.35rem] top-16 bottom-[13rem] z-0 w-px border-l-2 border-dashed border-gray-600"></div>
                    <div className="absolute left-[3.35rem] top-[14rem] bottom-16 z-0 w-px border-l-2 border-dashed border-[#c5b441]"></div>

                    <div className="relative flex items-start gap-4 mb-24 z-10">
                        <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-full bg-[#3CA751] text-white shadow-sm border border-[#3CA751]">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-[17px] mb-1 leading-none pt-1.5">Your Offer</p>
                            <p className="text-[13px] text-gray-700 mt-1">Some explainer text</p>
                        </div>
                    </div>

                    <div className="relative flex items-start gap-4 mb-24 z-10">
                        <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-full bg-white font-bold text-gray-800 shadow-sm border border-gray-300">2</div>
                        <div>
                            <p className="font-bold text-gray-900 text-[17px] mb-1 leading-none pt-1.5">Verification</p>
                            <p className="text-[13px] text-gray-700 mt-1">Some explainer text</p>
                        </div>
                    </div>

                    <div className="relative flex items-start gap-4 z-10 opacity-70 grayscale-[20%]">
                        <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-full bg-[#fbe76a] font-bold text-gray-900 border-2 border-yellow-500">3</div>
                        <div>
                            <p className="font-bold text-gray-900 text-[17px] mb-1 leading-none pt-1">Get Your Money</p>
                            <p className="text-[13px] text-gray-700 mt-1">Some explainer text</p>
                        </div>
                    </div>
                </div>

                {/* Right Content Form */}
                <div className="flex-1 p-8 lg:p-12 pb-4 overflow-y-auto">
                    <h2 className="text-[26px] font-bold text-gray-800 mb-2 tracking-tight">Verify Your Identify</h2>
                    <p className="text-gray-600 font-medium mb-10 text-[15px]">We may send link to your registered phone number</p>

                    {/* DigiLocker iFrame Box */}
                    <div className="w-full border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">

                        {/* DigiLocker Header */}
                        <div className="flex items-center gap-3 p-4 px-6 border-b border-gray-100">
                            {/* Indian Emblem placeholder */}
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Emblem" className="h-8 opacity-80" />
                            {/* DigiLocker Logo */}
                            <div className="flex items-center gap-2">
                                <div className="text-[#3A1E97] font-bold text-xl tracking-tight flex items-center">
                                    <span className="bg-[#3A1E97] text-white p-0.5 rounded mr-1 leading-none">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19 10h-1a1 1 0 0 1 0-2h1V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2h1a1 1 0 0 1 0 2H5v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10zM12 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" /></svg>
                                    </span>
                                    DigiLocker
                                </div>
                                <div className="flex flex-col text-[7px] text-gray-500 font-bold uppercase leading-tight pt-1">
                                    <span>Document Wallet To Empower Citizens</span>
                                </div>
                            </div>
                        </div>

                        {/* DigiLocker Content */}
                        <div className="bg-[#F5F2FE] w-full h-[400px] flex items-center justify-center relative">

                            {/* Inner white card */}
                            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 w-[400px]">

                                {/* User Profile section */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#5628F5] text-white flex items-center justify-center font-bold text-lg">
                                        PV
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-[15px]">Pr***** ***ma</p>
                                        <p className="text-[#3CA751] text-[11px] font-bold flex items-center gap-1">
                                            Verified <CheckCircle2 className="w-3 h-3 fill-current text-white" />
                                        </p>
                                    </div>
                                </div>

                                <h3 className="font-bold text-[17px] text-gray-900 mb-4">Enter 6 digit security PIN</h3>

                                <div className="flex gap-2.5 mb-2 relative">
                                    {pin.map((digit, i) => (
                                        <input
                                            key={i} ref={(el) => { inputRefs.current[i] = el; }}
                                            type="password" inputMode="numeric" pattern="[0-9]*" maxLength={1} value={digit}
                                            onChange={(e) => handleChange(i, e.target.value)} onKeyDown={(e) => handleKeyDown(i, e)}
                                            className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-200 rounded-lg text-gray-800 focus:border-[#5628F5] focus:ring-0 outline-none transition-colors"
                                            style={{ borderColor: i === 0 && !digit ? '#8B6BFF' : '' }} // Highlight first box 
                                        />
                                    ))}
                                    <EyeOff className="w-4 h-4 text-[#5628F5] absolute -right-6 top-1/2 -translate-y-1/2 cursor-pointer" />
                                </div>

                                <p className="text-[#5628F5] text-[11px] font-bold mt-3 mb-6 hover:underline cursor-pointer inline-block">
                                    Forgot security PIN?
                                </p>

                                <button
                                    onClick={handleVerify}
                                    className="w-full bg-[#C2AAFF] text-white font-bold py-3.5 rounded-xl hover:bg-[#A989FF] transition-colors flex items-center justify-center"
                                >
                                    {loading ? <Loader2 className="animate-spin" /> : "Verify"}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
