"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, Landmark, Circle, CircleDot, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RepaymentPage() {
    const router = useRouter();
    const [mode, setMode] = useState<"netbanking" | "upi">("netbanking");
    const [loading, setLoading] = useState(false);

    // Form inputs and consent
    const [authMode, setAuthMode] = useState<"debit" | "net">("debit");
    const [consentNetbanking, setConsentNetbanking] = useState(false);

    const [upiId, setUpiId] = useState("");
    const [consent1, setConsent1] = useState(false);
    const [consent2, setConsent2] = useState(false);

    const handleProceed = () => {
        setLoading(true);
        setTimeout(() => {
            router.push("/verify-identity");
        }, 1200);
    };

    return (
        <div className="flex w-full min-h-[calc(100vh-5rem)] bg-[#fcfcfc] items-center justify-center p-4 lg:p-12 relative overflow-hidden backdrop-blur-sm bg-black/10">
            {/* The modal container */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={mode}
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-[16px] shadow-2xl p-8 max-w-[540px] w-full relative z-10 mx-auto border border-gray-100"
                >
                    {mode === "netbanking" ? (
                        <>
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-[22px] font-bold text-gray-900 tracking-tight">EMI Repayment via NetBanking</h2>
                                <button
                                    onClick={() => setMode("upi")}
                                    className="text-[#007EA7] font-bold text-[14px] hover:underline whitespace-nowrap ml-4"
                                >
                                    Setup via UPI
                                </button>
                            </div>

                            {/* Bank Details Card */}
                            <div className="bg-[#f9f9f9] rounded-xl p-5 mb-8">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-[16px] text-gray-900">D****L</span>
                                    <div className="flex items-center gap-1.5 text-[#007EA7] font-bold text-[13px] tracking-tight">
                                        <Landmark className="w-4 h-4" /> THE ADARSH COO...
                                    </div>
                                </div>
                                <div className="flex justify-between items-end">
                                    <span className="text-[15px] text-gray-600 font-medium">XXXXX1361</span>
                                    <span className="text-[15px] text-gray-700 font-medium">Savings</span>
                                </div>
                            </div>

                            <h3 className="text-[17px] font-bold text-gray-900 mb-4 tracking-tight">Select Authentication Mode</h3>

                            {/* Radio Toggles */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <button
                                    onClick={() => setAuthMode('debit')}
                                    className={`relative flex items-center p-4 border rounded-xl gap-3 transition-colors ${authMode === 'debit' ? 'border-gray-200' : 'border-gray-200 hover:bg-gray-50'}`}
                                >
                                    {authMode === 'debit' ? (
                                        <CircleDot className="w-5 h-5 text-[#007EA7]" strokeWidth={3} />
                                    ) : (
                                        <Circle className="w-5 h-5 text-gray-300" strokeWidth={2} />
                                    )}
                                    <div className={`flex items-center gap-2 font-bold ${authMode === 'debit' ? 'text-black' : 'text-black'}`}>
                                        <CreditCard className="w-5 h-5 text-[#007EA7]" /> Debit Card
                                    </div>
                                </button>

                                <button
                                    onClick={() => setAuthMode('net')}
                                    className={`relative flex items-center p-4 border rounded-xl gap-3 transition-colors ${authMode === 'net' ? 'border-gray-200' : 'border-gray-200 hover:bg-gray-50'}`}
                                >
                                    {authMode === 'net' ? (
                                        <CircleDot className="w-5 h-5 text-[#007EA7]" strokeWidth={3} />
                                    ) : (
                                        <Circle className="w-5 h-5 text-gray-300" strokeWidth={2} />
                                    )}
                                    <div className={`flex items-center gap-2 font-bold ${authMode === 'net' ? 'text-black' : 'text-black'}`}>
                                        <Landmark className="w-5 h-5 text-[#007EA7]" /> Net Banking
                                    </div>
                                </button>
                            </div>

                            {/* Consent Checkbox */}
                            <label className="flex items-start gap-4 mb-8 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={consentNetbanking}
                                    onChange={e => setConsentNetbanking(e.target.checked)}
                                    className="mt-1 w-[18px] h-[18px] text-[#007EA7] border-gray-300 rounded shrink-0 cursor-pointer"
                                />
                                <span className="text-[13px] text-gray-500 font-medium leading-relaxed">
                                    I am authorising LotusPay, to debit my account based on the instructions... <a href="#" className="font-bold text-[#007EA7] hover:underline">Read More</a>
                                </span>
                            </label>

                            <p className="text-[13px] font-bold text-gray-700 mb-4">
                                Need Help? Email to <a href="mailto:test+support@lotuspay.com" className="text-[#007EA7] hover:underline">test+support@lotuspay.com</a>
                            </p>

                            <button
                                onClick={handleProceed}
                                disabled={!consentNetbanking || loading}
                                className="w-[180px] h-12 rounded bg-[#e1e2e3] text-[#999] text-[15px] font-bold flex justify-center items-center transition-all disabled:opacity-100 enabled:bg-[#007EA7] enabled:text-white enabled:hover:bg-[#006A8C] enabled:shadow-md"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin text-white" /> : "Proceed"}
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-[22px] font-bold text-gray-900 tracking-tight">EMI Repayment via UPI</h2>
                                <button
                                    onClick={() => setMode("netbanking")}
                                    className="text-[#007EA7] font-bold text-[14px] hover:underline whitespace-nowrap ml-4"
                                >
                                    Setup via NetBanking instead
                                </button>
                            </div>

                            <p className="text-[14px] text-gray-600 mb-3 font-medium">Enter UPI ID from which you wish to repay EMIs</p>

                            <div className="mb-8 rounded-[8px] overflow-hidden shadow-sm border border-gray-300 focus-within:border-[#007EA7] focus-within:ring-1 focus-within:ring-[#007EA7] transition-all">
                                <input
                                    type="text"
                                    placeholder="Enter UPI ID"
                                    value={upiId}
                                    onChange={(e) => setUpiId(e.target.value)}
                                    className="w-full text-lg h-14 px-4 font-bold text-gray-900 outline-none placeholder:font-bold placeholder:text-gray-400"
                                />
                                <div className="bg-[#0b7ea4] p-3 px-4 text-white text-[13px] font-medium leading-relaxed">
                                    Should be linked to HDFC Bank account xxxx xxxx xx8273
                                </div>
                            </div>

                            {/* Consents */}
                            <div className="flex flex-col gap-4 mb-8">
                                <label className="flex items-start gap-4 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={consent1}
                                        onChange={e => setConsent1(e.target.checked)}
                                        className="mt-1 w-[18px] h-[18px] text-[#007EA7] border-gray-300 rounded shrink-0 cursor-pointer"
                                    />
                                    <span className="text-[13px] text-gray-500 font-medium leading-relaxed pt-[2px]">
                                        Monitoring + Auto deduction consent + I hereby authorize <a href="#" className="font-bold text-[#007EA7] hover:underline">L&T Finance Limited</a> to my bank account, as per the mentioned ... <a href="#" className="font-bold text-[#007EA7] hover:underline">Read More</a>
                                    </span>
                                </label>

                                <label className="flex items-start gap-4 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={consent2}
                                        onChange={e => setConsent2(e.target.checked)}
                                        className="mt-0.5 w-[18px] h-[18px] text-[#007EA7] border-gray-300 rounded shrink-0 cursor-pointer"
                                    />
                                    <span className="text-[13px] text-gray-500 font-medium leading-relaxed">
                                        Consent for deduction at source
                                    </span>
                                </label>
                            </div>

                            <button
                                onClick={handleProceed}
                                disabled={!consent1 || !consent2 || !upiId.trim() || loading}
                                className="w-full sm:w-[220px] h-12 rounded bg-[#e1e2e3] text-[#999] text-[15px] font-bold flex justify-center items-center transition-all disabled:cursor-not-allowed enabled:bg-[#007EA7] enabled:text-white enabled:hover:bg-[#006A8C] enabled:shadow-md"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin text-white" /> : "Setup Mandate"}
                            </button>
                        </>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
