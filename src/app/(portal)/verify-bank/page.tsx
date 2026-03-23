"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Info } from "lucide-react";

export default function VerifyBankPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleProceed = () => {
        setLoading(true);
        setTimeout(() => router.push("/loader"), 1000);
    };

    return (
        <div className="flex flex-col w-full h-full bg-[#fcfcfc] px-8 lg:px-24 py-10 relative">
            <div className="mb-6">
                <h1 className="text-3xl font-semibold text-gray-900 mb-2">Welcome Amit,</h1>
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

                {/* Right Content */}
                <div className="flex-1 p-8 lg:p-12 pb-4 overflow-y-auto w-full">
                    <h2 className="text-[26px] font-bold text-gray-800 mb-8 tracking-tight">Verify Loan & Bank Details</h2>

                    <div className="flex flex-col lg:flex-row gap-6 mb-12">

                        {/* Loan Details Card */}
                        <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Loan Details</h3>
                            <p className="text-sm text-gray-600 font-medium mb-8">Your loan amount will be disbursed & EMIs will be deducted from this account</p>

                            <div className="grid grid-cols-2 gap-y-10">
                                <div>
                                    <p className="text-sm text-gray-500 font-medium flex items-center gap-1 mb-2">Loan to be disbursed <Info className="h-3 w-3 text-blue-500" /></p>
                                    <p className="text-[22px] font-bold text-gray-900">₹ 15,45,000</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium mb-2">Monthly EMI</p>
                                    <p className="text-[22px] font-bold text-gray-900">₹9,735</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium mb-2">Total EMIs</p>
                                    <p className="text-[22px] font-bold text-gray-900">48</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium mb-2">1st EMI Due On</p>
                                    <p className="text-[22px] font-bold text-gray-900">15 Dec, 2025</p>
                                </div>
                            </div>
                        </div>

                        {/* Bank Details Card */}
                        <div className="w-[320px] shrink-0 bg-[#E8F6FC] border border-[#008BB4]/60 rounded-2xl p-8 shadow-sm flex flex-col justify-start">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Bank Details</h3>
                            <p className="text-sm text-gray-600 font-medium mb-8">For loan disbursement & EMIs deduction</p>

                            <div className="mb-8">
                                <p className="text-sm text-gray-500 font-medium mb-2">Bank Name</p>
                                <p className="text-[20px] font-bold text-gray-900">HDFC Bank</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 font-medium flex items-center gap-1 mb-2">Saving Account Number <Info className="h-3 w-3 text-blue-500" /></p>
                                <p className="text-[20px] font-bold text-gray-900 bg-white/50 px-3 py-1 -ml-3 rounded">XXXX XXXX 5249 87</p>
                            </div>
                        </div>

                    </div>

                    <button
                        onClick={handleProceed}
                        disabled={loading}
                        className="w-[280px] h-14 bg-black text-white font-semibold rounded hover:bg-gray-800 transition shadow-lg flex justify-center items-center gap-2"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : "Proceed to Verify"}
                    </button>

                </div>
            </div>
        </div>
    );
}
