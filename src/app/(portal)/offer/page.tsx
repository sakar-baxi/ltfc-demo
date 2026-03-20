"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OfferPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // State for interactive elements
    const [amount, setAmount] = useState(1500000);
    const [emiOpen, setEmiOpen] = useState(false);

    const [selectedEmi, setSelectedEmi] = useState({ emi: 9735, months: 48, recommended: true });
    const [motherMaidenName, setMotherMaidenName] = useState("");

    const emiOptions = [
        { emi: 9735, months: 48, recommended: true },
        { emi: 12450, months: 36, recommended: false },
        { emi: 17800, months: 24, recommended: false },
    ];

    const handleProceed = () => {
        if (!motherMaidenName.trim()) {
            alert("Please enter mother's maiden name.");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            router.push("/insurances");
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
        <div className="flex flex-col w-full min-h-[calc(100vh-5rem)] bg-[#fcfcfc] px-4 md:px-8 lg:px-24 py-10 relative">

            <div className="flex flex-col lg:flex-row w-full max-w-[1300px] bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.05)] mx-auto min-h-[700px]">

                {/* Left Nav */}
                <div className="hidden lg:flex w-[300px] bg-[#fbe76a] p-10 flex-col relative shrink-0">
                    <div className="mb-10">
                        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Welcome Manish,</h1>
                        <p className="text-sm text-gray-800 font-medium leading-relaxed">Your loan is just couple of steps away!</p>
                    </div>

                    <div className="absolute left-[3.35rem] top-[180px] bottom-32 w-px border-l-2 border-dashed border-[#c5b441]/50"></div>

                    <div className="relative flex items-start gap-4 mb-16 z-10">
                        <div className="flex w-7 h-7 sm:w-8 sm:h-8 shrink-0 items-center justify-center rounded-full bg-green-500 font-bold text-white shadow-sm border border-green-600 text-sm">
                            <Check className="w-5 h-5 text-white" strokeWidth={3} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-[15px] mb-1 leading-none pt-1">Your Details</p>
                            <p className="text-[12px] text-gray-700 mt-2 leading-relaxed opacity-90">Review & confirm details received from your HR portal to make sure we generate best offer for you</p>
                        </div>
                    </div>

                    <div className="relative flex items-start gap-4 mb-16 z-10 opacity-100">
                        <div className="flex w-7 h-7 sm:w-8 sm:h-8 shrink-0 items-center justify-center rounded-full bg-white font-bold text-gray-900 border border-gray-300 shadow-sm text-sm z-10">2</div>
                        <div>
                            <p className="font-bold text-gray-900 text-[15px] mb-1 leading-none pt-1">Loan Offer</p>
                            <p className="text-[12px] text-gray-700 mt-2 leading-relaxed">Basis your details provided above, we will present the best loan offer for you</p>
                        </div>
                    </div>

                    <div className="relative flex items-start gap-4 mb-16 z-10 opacity-60">
                        <div className="flex w-7 h-7 sm:w-8 sm:h-8 shrink-0 items-center justify-center rounded-full bg-[#fbe76a] font-bold text-gray-900 border-2 border-yellow-500 text-sm">3</div>
                        <div>
                            <p className="font-bold text-gray-900 text-[15px] mb-1 leading-none pt-1">Verification</p>
                            <p className="text-[12px] text-gray-700 mt-2 leading-relaxed">A quick verification of the details you provided in step 1</p>
                        </div>
                    </div>

                    <div className="relative flex items-start gap-4 z-10 opacity-60">
                        <div className="flex w-7 h-7 sm:w-8 sm:h-8 shrink-0 items-center justify-center rounded-full bg-[#fbe76a] font-bold text-gray-900 border-2 border-yellow-500 text-sm">4</div>
                        <div>
                            <p className="font-bold text-gray-900 text-[15px] mb-1 leading-none pt-1">Get Your Money</p>
                            <p className="text-[12px] text-gray-700 mt-2 leading-relaxed">e-Sign the documents (KFS, Loan Agreement) & money gets disbursed</p>
                        </div>
                    </div>
                </div>

                {/* Right Content Form */}
                <div className="flex-1 px-8 lg:px-14 py-10 overflow-y-auto bg-gray-50/10 flex flex-col items-start gap-6">
                    <div className="mb-2 w-full">
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">STEP 2</span>
                        <h2 className="text-2xl font-bold text-gray-900">Loan Offer & Requirements</h2>
                        <div className="w-full flex h-[2px] mt-4 mb-2">
                            <div className="w-1/2 bg-yellow-400"></div>
                            <div className="w-1/2 bg-gray-200"></div>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 mt-2 items-start">
                        {/* Blue Card */}
                        <div className="bg-[#0b7ea4] rounded-[24px] text-white p-10 pt-16 flex flex-col justify-end min-h-[480px] w-[350px] shrink-0 shadow-lg relative overflow-hidden">
                            <div className="absolute top-10 w-full flex justify-center left-0 px-8">
                                <img
                                    src="https://cdn3d.iconscout.com/3d/premium/thumb/money-bag-3d-icon-download-in-png-blend-fbx-gltf-formats--coin-sack-dollar-finance-pack-business-icons-4889602.png?f=webp"
                                    className="w-44 h-auto drop-shadow-2xl"
                                    alt="Money Bag"
                                    loading="lazy"
                                />
                            </div>

                            <div className="relative z-10 mt-auto drop-shadow-md">
                                <p className="text-[15px] font-bold text-white/90 mb-1 tracking-wide">
                                    Congratulations Manish!
                                </p>
                                <p className="text-[15px] font-bold text-white mb-4 tracking-wide">
                                    You can instantly get
                                </p>
                                <h3 className="text-5xl font-extrabold tracking-tight mb-3">
                                    ₹15,00,000<span className="text-4xl">*</span>
                                </h3>
                                <p className="text-[13px] text-white/90 leading-relaxed max-w-[95%]">
                                    @11.75%* p.a. for a tenure of up to 60 months
                                </p>
                            </div>
                        </div>

                        {/* Form Fields */}
                        <div className="flex flex-col gap-10 bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm grow min-h-[480px]">
                            {/* Amount Input */}
                            <div>
                                <label className="block text-xl md:text-[22px] font-bold text-gray-900 mb-4 tracking-tight">
                                    How much amount do you need?
                                </label>
                                <div className="relative group shadow-sm rounded-lg">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                        <span className="text-[17px] font-bold text-gray-900 px-1">₹</span>
                                    </div>
                                    <input
                                        type="text"
                                        value={amount > 0 ? formatRupees(amount) : ""}
                                        onChange={handleAmountChange}
                                        className="w-full border border-gray-200 rounded-lg h-16 pl-8 pr-28 text-[17px] font-bold text-gray-900 focus:outline-none focus:border-[#007EA7] focus:ring-1 focus:ring-[#007EA7] transition-all hover:border-gray-300"
                                    />
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-6 text-[14px] font-medium text-gray-400 pointer-events-none">
                                        / ₹15,00,000
                                    </span>
                                </div>
                            </div>

                            {/* EMI Dropdown */}
                            <div>
                                <label className="block text-xl md:text-[22px] font-bold text-gray-900 mb-4 tracking-tight">
                                    Select your EMI plan
                                </label>
                                <div className="relative shadow-sm rounded-lg">
                                    <div
                                        className="w-full border border-gray-200 rounded-lg h-16 px-5 flex items-center justify-between cursor-pointer hover:border-gray-300 transition-all focus-within:ring-1 focus-within:ring-[#007EA7] focus-within:border-[#007EA7]"
                                        onClick={() => setEmiOpen(!emiOpen)}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-[17px] font-bold text-gray-900">
                                                ₹{formatRupees(selectedEmi.emi)}
                                                <span className="text-[14px] text-gray-500 font-medium ml-1">x {selectedEmi.months} months</span>
                                            </span>
                                            {selectedEmi.recommended && (
                                                <span className="text-[10px] font-bold text-[#14b8a6] tracking-widest bg-teal-50 px-2 py-0.5 rounded ml-2 uppercase border border-teal-100/50 hidden sm:inline-block">RECOMMENDED</span>
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
                                                        className="px-5 py-4 hover:bg-gray-50 cursor-pointer flex items-center justify-between border-b border-gray-100 last:border-0"
                                                        onClick={() => { setSelectedEmi(opt); setEmiOpen(false); }}
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[16px] font-bold text-gray-900">₹{formatRupees(opt.emi)} <span className="text-[13px] text-gray-500 font-medium">x {opt.months} months</span></span>
                                                            {opt.recommended && (
                                                                <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded ml-2 uppercase border border-teal-100/50">RECOMMENDED</span>
                                                            )}
                                                        </div>
                                                        {opt.months === selectedEmi.months && <Check className="w-5 h-5 text-[#007EA7]" />}
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Mother's Maiden Name Textfield */}
                            <div>
                                <label className="block text-xl md:text-[22px] font-bold text-gray-900 mb-4 tracking-tight">
                                    Mother's Maiden Name
                                </label>
                                <div className="relative shadow-sm rounded-lg">
                                    <input
                                        type="text"
                                        placeholder="Enter your mother's maiden name"
                                        value={motherMaidenName}
                                        onChange={(e) => setMotherMaidenName(e.target.value)}
                                        className="w-full border border-gray-200 rounded-lg h-16 px-5 text-[16px] text-gray-900 focus:outline-none focus:border-[#007EA7] focus:ring-1 focus:ring-[#007EA7] transition-all hover:border-gray-300 placeholder:text-gray-400 placeholder:font-medium"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="w-full mt-auto pt-6 flex justify-start">
                        <button
                            onClick={handleProceed}
                            disabled={loading}
                            className="w-full sm:w-[350px] h-[55px] bg-black text-white text-[16px] font-semibold rounded hover:bg-gray-800 transition shadow-md flex justify-center items-center gap-2"
                        >
                            {loading ? <Loader2 className="animate-spin text-white" /> : "Proceed"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
