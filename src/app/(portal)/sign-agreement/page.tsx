"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Check, Lock, Loader2, Feather } from "lucide-react";

export default function SignAgreementPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [signed, setSigned] = useState(false);

    const handleSign = () => {
        setSigned(true);
    };

    const handleGetMoney = () => {
        setLoading(true);
        setTimeout(() => {
            router.push("/success");
        }, 2000);
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
                        </div>
                    </div>

                    <div className="relative flex items-start gap-4 mb-16 z-10 opacity-100">
                        <div className="flex w-7 h-7 sm:w-8 sm:h-8 shrink-0 items-center justify-center rounded-full bg-green-500 font-bold text-white border border-green-600 shadow-sm text-sm z-10">
                            <Check className="w-5 h-5 text-white" strokeWidth={3} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-[15px] mb-1 leading-none pt-1">Loan Offer</p>
                        </div>
                    </div>

                    <div className="relative flex items-start gap-4 mb-16 z-10">
                        <div className="flex w-7 h-7 sm:w-8 sm:h-8 shrink-0 items-center justify-center rounded-full bg-green-500 font-bold text-white border border-green-600 shadow-sm text-sm">
                            <Check className="w-5 h-5 text-white" strokeWidth={3} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-[15px] mb-1 leading-none pt-1">Verification</p>
                        </div>
                    </div>

                    <div className="relative flex items-start gap-4 z-10">
                        <div className="flex w-7 h-7 sm:w-8 sm:h-8 shrink-0 items-center justify-center rounded-full bg-white font-bold text-gray-900 border border-gray-300 shadow-sm text-sm">4</div>
                        <div>
                            <p className="font-bold text-gray-900 text-[15px] mb-1 leading-none pt-1">Get Your Money</p>
                            <p className="text-[12px] text-gray-700 mt-2 leading-relaxed opacity-90">e-Sign the documents (KFS, Loan Agreement) & money gets disbursed</p>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 px-8 lg:px-14 py-10 bg-white flex flex-col items-start relative overflow-y-auto">
                    {/* Header */}
                    <div className="mb-2 w-full flex items-center gap-4">
                        <button onClick={() => router.back()} className="hover:bg-gray-100 p-1.5 rounded-full transition">
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                        <div>
                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">STEP 4</span>
                            <h2 className="text-[20px] font-bold text-gray-900 tracking-tight">E-Sign Loan Agreement</h2>
                        </div>
                    </div>

                    <div className="w-full mt-10">
                        <div className="flex flex-col xl:flex-row gap-10">

                            <div className="flex-1">
                                <h3 className="text-[22px] font-bold text-gray-900 tracking-tight mb-6">Review & Sign Your Agreement</h3>

                                <p className="text-[14px] text-gray-600 mb-8 font-medium leading-relaxed">
                                    Please review the final loan agreement below carefully before proceeding with the digital signature. Once signed, the funds will be initiated for transfer to your linked bank account.
                                </p>

                                <div className="space-y-6">
                                    <div className="p-6 bg-[#f9f9f9] rounded-xl border border-gray-100 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-2 bg-blue-100 rounded-lg">
                                                <Lock className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <span className="font-bold text-gray-900 text-[15px]">Secure E-Sign Facility</span>
                                        </div>
                                        <p className="text-[12.5px] text-gray-600 leading-relaxed font-medium">
                                            We use Aadhaar-based e-Sign to securely validate your signature. This is legally equivalent to a handwritten signature as per the Information Technology Act.
                                        </p>
                                    </div>

                                    {!signed ? (
                                        <div className="w-full border-2 border-dashed border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center bg-gray-50 group hover:border-blue-400 transition-all cursor-pointer" onClick={handleSign}>
                                            <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <Feather className="w-7 h-7 text-gray-400 group-hover:text-blue-500" />
                                            </div>
                                            <p className="text-[15px] font-bold text-gray-700">Click to E-Sign Agreement</p>
                                            <p className="text-[11px] text-gray-400 mt-2">Verified via Aadhaar OTP (Demo Mode)</p>
                                        </div>
                                    ) : (
                                        <div className="w-full border-2 border-solid border-green-500 rounded-2xl p-10 flex flex-col items-center justify-center bg-green-50 shadow-inner animate-in zoom-in duration-300">
                                            <div className="w-16 h-16 bg-green-500 rounded-full shadow-md flex items-center justify-center mb-4 scale-110">
                                                <Check className="w-8 h-8 text-white" strokeWidth={4} />
                                            </div>
                                            <p className="text-[15px] font-bold text-green-700 tracking-tight">Agreement Successfully Signed</p>
                                            <p className="text-[11px] text-green-600 mt-1 font-bold">Signed Digitally on March 20, 2026</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Info Card */}
                            <div className="xl:w-[320px] shrink-0">
                                <div className="bg-[#0b7ea4] rounded-2xl p-6 text-white shadow-xl">
                                    <h4 className="text-[18px] font-bold mb-5 tracking-tight">Payment Summary</h4>
                                    <div className="space-y-4 text-[14px]">
                                        <div className="flex justify-between border-b border-white/20 pb-2">
                                            <span className="opacity-80">Principal</span>
                                            <span className="font-bold">₹15,00,000</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/20 pb-2">
                                            <span className="opacity-80">EMI</span>
                                            <span className="font-bold">₹10,000</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-y-1">
                                            <span className="opacity-80">Bank</span>
                                            <span className="text-right font-bold">HDFC Bank</span>
                                            <span className="opacity-80">A/C Number</span>
                                            <span className="text-right font-bold">****8273</span>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-4 border-t border-white/30 flex flex-col items-center">
                                        <p className="text-[11px] opacity-70 mb-2">DISBURSAL AMOUNT</p>
                                        <p className="text-3xl font-bold tracking-tight">₹15,15,432</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="mt-14 w-full flex justify-center pb-10">
                        <button
                            onClick={handleGetMoney}
                            disabled={!signed || loading}
                            className="bg-black text-white px-14 h-14 rounded-lg font-bold text-[16px] hover:bg-gray-800 transition shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign loan agreement and get your money"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
