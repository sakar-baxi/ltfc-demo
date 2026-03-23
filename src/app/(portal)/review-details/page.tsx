"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Info, Plus, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReviewDetailsPage() {
    const router = useRouter();
    const [consent, setConsent] = useState(true);
    const [showModal, setShowModal] = useState(false);

    // Modal OTP state
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [verifying, setVerifying] = useState(false);

    const handleOpenModal = () => {
        if (!consent) {
            alert("Please accept the consent to continue.");
            return;
        }
        setShowModal(true);
    };

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }

        if (newOtp.every(d => d !== "")) {
            verifyOtp();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const verifyOtp = () => {
        setVerifying(true);
        setTimeout(() => {
            router.push("/offer");
        }, 1000);
    };

    return (
        <div className="flex flex-col w-full min-h-[calc(100vh-5rem)] bg-[#fcfcfc] px-4 md:px-8 lg:px-24 py-10 relative">
            <div className="flex flex-col lg:flex-row w-full max-w-[1300px] bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.05)] mx-auto min-h-[700px]">

                {/* Left Nav */}
                <div className="hidden lg:flex w-[300px] bg-[#fbe76a] p-10 flex-col relative shrink-0">
                    <div className="mb-10">
                        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Welcome Amit,</h1>
                        <p className="text-sm text-gray-800 font-medium leading-relaxed">Your loan is just couple of steps away!</p>
                    </div>

                    <div className="absolute left-[3.35rem] top-[180px] bottom-32 w-px border-l-2 border-dashed border-[#c5b441]/50"></div>

                    <div className="relative flex items-start gap-4 mb-16 z-10">
                        <div className="flex w-7 h-7 sm:w-8 sm:h-8 shrink-0 items-center justify-center rounded-full bg-white font-bold text-gray-800 shadow-sm border border-gray-300 text-sm">1</div>
                        <div>
                            <p className="font-bold text-gray-900 text-[15px] mb-1 leading-none pt-1">Your Details</p>
                            <p className="text-[12px] text-gray-700 mt-2 leading-relaxed opacity-90">Review & confirm details received from your HR portal to make sure we generate best offer for you</p>
                        </div>
                    </div>

                    <div className="relative flex items-start gap-4 mb-16 z-10 opacity-60">
                        <div className="flex w-7 h-7 sm:w-8 sm:h-8 shrink-0 items-center justify-center rounded-full bg-[#fbe76a] font-bold text-gray-900 border-2 border-yellow-500 text-sm">2</div>
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
                <div className="flex-1 px-8 lg:px-16 py-10 overflow-y-auto bg-gray-50/30 flex flex-col">
                    <div className="mb-6">
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">STEP 1</span>
                        <h2 className="text-2xl font-bold text-gray-900">Review Your Details</h2>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex-1 flex flex-col">
                        <div className="bg-[#007EA7] text-white px-6 py-4">
                            <p className="text-[14px] leading-relaxed">
                                Your loan <span className="font-bold">offer will be generated basis these details & cannot be changed later</span> in the journey. Please make sure these details are correct
                            </p>
                        </div>

                        <div className="p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Details</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-6 mb-8">
                                <div>
                                    <p className="text-[13px] text-gray-500 mb-1">Name (as per PAN)</p>
                                    <p className="text-[16px] font-bold text-gray-900">Amit Sharma</p>
                                </div>
                                <div>
                                    <p className="text-[13px] text-gray-500 mb-1">PAN</p>
                                    <p className="text-[16px] font-bold text-gray-900 uppercase">APWHR5237B</p>
                                </div>
                                <div>
                                    <p className="text-[13px] text-gray-500 mb-1">Date of Birth</p>
                                    <p className="text-[16px] font-bold text-gray-900">22 Feb, 2001</p>
                                </div>
                                <div>
                                    <p className="text-[13px] text-gray-500 mb-1">Gender</p>
                                    <p className="text-[16px] font-bold text-gray-900">Male</p>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="text-[13px] text-gray-500 mb-1">Current Address</p>
                                    <p className="text-[16px] font-bold text-gray-900 leading-snug">
                                        A-1201, M3M Apartments, Noida Sector 52, U.P -201016 <button className="text-[#007EA7] font-bold ml-2 text-sm hover:underline">Change</button>
                                    </p>
                                    <div className="mt-3 bg-[#f0f9fa] border border-[#d8eff3] rounded-md px-3 py-2 flex items-start gap-2 w-max max-w-full">
                                        <Info className="w-4 h-4 text-[#007EA7] mt-0.5 shrink-0" />
                                        <p className="text-[12px] text-gray-700">Keep <a href="#" className="font-bold text-[#007EA7] underline">valid address proof</a> handy for verification in further steps</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-t border-dashed border-gray-300 my-8" />

                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-gray-900">Bank Details</h3>
                                <button className="text-[#007EA7] font-bold text-sm hover:underline flex items-center gap-1">
                                    <Plus className="w-4 h-4" /> Add Another Bank
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-6 mb-8">
                                <div>
                                    <p className="text-[13px] text-gray-500 mb-1">Bank Name</p>
                                    <p className="text-[16px] font-bold text-gray-900">ICICI Bank</p>
                                </div>
                                <div>
                                    <p className="text-[13px] text-gray-500 mb-1">Savings Account Number</p>
                                    <p className="text-[16px] font-bold text-gray-900">0627 8172 9273</p>
                                </div>
                                <div>
                                    <p className="text-[13px] text-gray-500 mb-1">IFSC Code</p>
                                    <p className="text-[16px] font-bold text-gray-900">ICIC00002639</p>
                                </div>
                            </div>

                            <div className="bg-[#fdfaef] border border-[#f5ebc5] rounded-md px-4 py-3 flex items-start gap-3">
                                <Info className="w-5 h-5 text-yellow-600 mt-0.5 shrink-0" />
                                <p className="text-[13px] text-gray-700 leading-relaxed">
                                    Above details are as per your company HR records, in case you wish to change the account, please update in your company's HRMS portal
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-4">
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                className="mt-1 w-5 h-5 text-[#007EA7] border-gray-300 rounded focus:ring-[#007EA7]"
                                checked={consent}
                                onChange={(e) => setConsent(e.target.checked)}
                            />
                            <span className="text-[13px] md:text-[14px] text-gray-600 font-medium pt-0.5">
                                I allow L&T Finance to fetch my balance & transactions regularly for insights. <a href="#" className="font-bold text-[#007EA7] hover:underline">Know More</a>
                            </span>
                        </label>

                        <button
                            onClick={handleOpenModal}
                            className="w-full md:w-auto px-10 h-14 bg-black text-white text-[15px] font-semibold rounded hover:bg-gray-800 transition shadow-md flex justify-center items-center gap-2 group shrink-0"
                        >
                            Proceed
                        </button>
                    </div>
                </div>
            </div>

            {/* OTP Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-2xl shadow-2xl p-10 max-w-[480px] w-full relative"
                        >
                            <h3 className="text-[22px] font-bold text-gray-900 mb-1 tracking-tight">
                                Enter OTP sent from ICICI Bank
                            </h3>
                            <p className="text-[14px] text-gray-500 mb-10 font-medium">OTP is required to verify your bank account</p>

                            <div className="flex justify-between gap-3 mb-4">
                                {otp.map((digit, i) => (
                                    <div key={i} className="relative">
                                        <input
                                            ref={(el) => { inputRefs.current[i] = el; }}
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            maxLength={1}
                                            value={digit}
                                            onChange={(e) => handleOtpChange(i, e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(i, e)}
                                            className={`w-12 h-14 sm:w-[3.6rem] sm:h-[4rem] text-center text-3xl font-bold border rounded-lg outline-none transition-all shadow-sm ${digit ? 'border-sky-500 ring-1 ring-sky-500 text-transparent' : 'border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'}`}
                                        />
                                        {digit && (
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-2xl font-bold text-gray-800">
                                                {i === 5 ? digit : '•'}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <p className="text-[13px] text-gray-500 mb-10 font-medium">
                                Resend OTP in <span className="text-gray-900 font-bold">30s</span>
                            </p>

                            <button
                                disabled={true}
                                className="w-full h-[60px] bg-[#e5e7eb] text-[#9ca3af] font-bold rounded-lg text-lg flex justify-center items-center shadow-sm transition tracking-tight"
                            >
                                {verifying ? <Loader2 className="animate-spin text-gray-400" /> : "Verifying OTP"}
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
