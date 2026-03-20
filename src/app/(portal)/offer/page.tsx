"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OfferPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // State for interactive elements
    const [amount, setAmount] = useState(1500000);
    const [emiOpen, setEmiOpen] = useState(false);
    const [purposeOpen, setPurposeOpen] = useState(false);

    const [selectedEmi, setSelectedEmi] = useState({ emi: 9735, months: 48, recommended: true });
    const [selectedPurpose, setSelectedPurpose] = useState("");

    const emiOptions = [
        { emi: 9735, months: 48, recommended: true },
        { emi: 12450, months: 36, recommended: false },
        { emi: 17800, months: 24, recommended: false },
    ];

    const purposeOptions = [
        "Home Renovation",
        "Medical Emergency",
        "Wedding",
        "Debt Consolidation",
        "Education",
        "Travel",
        "Other"
    ];

    const handleProceed = () => {
        if (!selectedPurpose) {
            alert("Please select a purpose of loan.");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            router.push("/summary");
        }, 800);
    };

    const formatRupees = (val: number) => {
        return new Intl.NumberFormat('en-IN').format(val);
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value.replace(/[^0-9]/g, ''));
        if (!isNaN(val)) {
            setAmount(Math.min(val, 1500000));
        } else {
            setAmount(0);
        }
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
                    <div className="absolute left-[3.35rem] top-16 bottom-20 w-px border-l-2 border-dashed border-[#c5b441]"></div>

                    <div className="relative flex items-start gap-4 mb-24 z-10">
                        <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-full bg-white font-bold text-gray-800 shadow-sm border border-gray-300">1</div>
                        <div>
                            <p className="font-bold text-gray-900 text-[17px] mb-1 leading-none pt-1">Your Offer</p>
                            <p className="text-[13px] text-gray-700 mt-1">Some explainer text</p>
                        </div>
                    </div>

                    <div className="relative flex items-start gap-4 mb-24 z-10 opacity-70 grayscale-[20%]">
                        <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-full bg-[#fbe76a] font-bold text-gray-900 border-2 border-yellow-500">2</div>
                        <div>
                            <p className="font-bold text-gray-900 text-[17px] mb-1 leading-none pt-1">Verification</p>
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
                    {/* Blue Hero Banner */}
                    <div className="bg-[#007EA7] rounded-xl text-white p-6 relative overflow-hidden mb-10 shadow-lg shadow-blue-900/10 h-40">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <p className="text-[15px] font-medium opacity-90 tracking-wide">
                                Congratulations Manish! We've got an amazing loan offer ONLY FOR YOU!
                            </p>
                            <h2 className="text-4xl font-bold tracking-tight flex items-start -mt-2">
                                ₹15,00,000<span className="text-xl mt-1">*</span>
                            </h2>

                            <div className="bg-white rounded-md p-2.5 px-4 flex items-center justify-between text-[11px] text-gray-800 shadow-sm">
                                <p>
                                    *Confirm <span className="font-bold">your current residential PIN Code is 201016</span>. Your address will be verified using any <a href="#" className="font-bold text-[#007EA7] underline underline-offset-2 hover:text-blue-700">1 of 8 OVDs</a> to process your loan.
                                </p>
                                <button className="text-[#007EA7] font-bold shrink-0 ml-6 hover:underline">
                                    Change PIN Code
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Form Layout matching the newly attached screenshot exactly */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-10">

                        {/* Amount Input */}
                        <div>
                            <label className="block text-[17px] font-bold text-gray-900 mb-3">
                                How much amount do you need?
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <span className="text-[17px] font-bold text-gray-900 px-1">₹</span>
                                </div>
                                <input
                                    type="text"
                                    value={amount > 0 ? formatRupees(amount) : ""}
                                    onChange={handleAmountChange}
                                    className="w-full border border-gray-300 rounded-lg h-14 pl-8 pr-28 text-[17px] font-bold text-gray-900 focus:outline-none focus:border-[#007EA7] focus:ring-1 focus:ring-[#007EA7] transition-all hover:border-gray-400"
                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-[13px] font-medium text-gray-400 pointer-events-none">
                                    / ₹15,00,000
                                </span>
                            </div>
                        </div>

                        {/* EMI Dropdown */}
                        <div>
                            <label className="block text-[17px] font-bold text-gray-900 mb-3">
                                Select your EMI plan
                            </label>
                            <div className="relative">
                                <div
                                    className="w-full border border-gray-300 rounded-lg h-14 px-4 flex items-center justify-between cursor-pointer hover:border-gray-400 transition-all focus-within:ring-1 focus-within:ring-[#007EA7] focus-within:border-[#007EA7]"
                                    onClick={() => setEmiOpen(!emiOpen)}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="text-[17px] font-bold text-gray-900">₹{formatRupees(selectedEmi.emi)} <span className="text-[13px] text-gray-500 font-medium">x {selectedEmi.months} months</span></span>
                                        {selectedEmi.recommended && (
                                            <span className="text-[9px] font-bold text-green-600 tracking-wide bg-green-50 px-1.5 py-0.5 rounded ml-1 uppercase border border-green-200">RECOMMENDED</span>
                                        )}
                                    </div>
                                    <ChevronDown className={`h-5 w-5 text-[#007EA7] transition-transform ${emiOpen ? 'rotate-180' : ''}`} />
                                </div>

                                <AnimatePresence>
                                    {emiOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.15 }}
                                            className="absolute top-[calc(100%+4px)] left-0 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden"
                                        >
                                            {emiOptions.map((opt, i) => (
                                                <div
                                                    key={i}
                                                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between border-b border-gray-100 last:border-0"
                                                    onClick={() => { setSelectedEmi(opt); setEmiOpen(false); }}
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[15px] font-bold text-gray-900">₹{formatRupees(opt.emi)} <span className="text-[12px] text-gray-500 font-medium">x {opt.months} months</span></span>
                                                        {opt.recommended && (
                                                            <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded ml-1 uppercase border border-green-200">RECOMMENDED</span>
                                                        )}
                                                    </div>
                                                    {opt.months === selectedEmi.months && <Check className="w-4 h-4 text-[#007EA7]" />}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Purpose Dropdown */}
                        <div className="md:col-span-2">
                            <label className="block text-[17px] font-bold text-gray-900 mb-3">
                                Purpose of loan
                            </label>
                            <div className="relative max-w-[48%]">
                                <div
                                    className="w-full border border-gray-300 rounded-lg h-14 px-4 flex items-center justify-between cursor-pointer hover:border-gray-400 transition-all focus-within:ring-1 focus-within:ring-[#007EA7] focus-within:border-[#007EA7]"
                                    onClick={() => setPurposeOpen(!purposeOpen)}
                                >
                                    <span className={`text-[17px] font-medium ${selectedPurpose ? 'text-gray-900' : 'text-gray-400'}`}>
                                        {selectedPurpose || "Select One"}
                                    </span>
                                    <ChevronDown className={`h-5 w-5 text-[#007EA7] transition-transform ${purposeOpen ? 'rotate-180' : ''}`} />
                                </div>

                                <AnimatePresence>
                                    {purposeOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.15 }}
                                            className="absolute top-[calc(100%+4px)] left-0 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-[200px] overflow-y-auto"
                                        >
                                            {purposeOptions.map((opt, i) => (
                                                <div
                                                    key={i}
                                                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between border-b border-gray-50 last:border-0"
                                                    onClick={() => { setSelectedPurpose(opt); setPurposeOpen(false); }}
                                                >
                                                    <span className="text-[15px] text-gray-800 font-medium">{opt}</span>
                                                    {opt === selectedPurpose && <Check className="w-4 h-4 text-[#007EA7]" />}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleProceed}
                        disabled={loading}
                        className="w-[220px] h-14 bg-black text-white text-[15px] font-semibold rounded hover:bg-gray-800 transition shadow-md flex justify-center items-center gap-2 group overflow-hidden mt-6"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : "Proceed"}
                    </button>
                </div>
            </div>
        </div>
    );
}
