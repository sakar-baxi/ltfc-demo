"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function SummaryPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleProceed = () => {
        setLoading(true);
        setTimeout(() => {
            router.push("/verify-identity");
        }, 1000);
    };

    return (
        <div className="flex flex-col w-full h-full bg-[#fcfcfc] px-8 lg:px-24 py-10 relative">
            <div className="mb-6">
                <h1 className="text-3xl font-semibold text-gray-900 mb-2">Welcome Manish,</h1>
                <p className="text-xl text-gray-700">Your loan offer is just couple of steps away!</p>
            </div>

            <div className="flex flex-col lg:flex-row w-full max-w-[1200px] bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.05)] h-[850px]">

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
                <div className="flex-1 p-8 lg:p-12 pb-4 overflow-y-auto w-full">
                    <h2 className="text-[26px] font-bold text-gray-800 mb-8 tracking-tight">Exclusive Insurances For You!</h2>

                    <div className="flex flex-col xl:flex-row gap-8">
                        {/* Insurance Cards List */}
                        <div className="flex-1 flex flex-col gap-8 max-w-[550px]">
                            {/* Card 1 */}
                            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-[#2D60CD] px-6 py-3 flex justify-between items-center text-white">
                                    <span className="font-semibold text-[15px]">Credit Linked Insurance</span>
                                    <span className="text-xs text-blue-100 italic">powered by HDFC Life</span>
                                </div>
                                <div className="p-6 pb-8 bg-white">
                                    <h3 className="text-4xl font-bold text-[#007EA7] mb-1">₹5,00,000</h3>
                                    <p className="text-[15px] font-bold text-gray-800 mb-4">insurance cover @ ₹30/day* only!</p>
                                    <p className="text-[13px] text-gray-600 leading-relaxed mb-6">
                                        Policy that pays off your outstanding loan balance if you pass away or become disabled. It acts as a safety net that settles your debt directly with the lender, ensuring your famil... <span className="text-[#007EA7] font-semibold cursor-pointer">More</span>
                                    </p>
                                    <button className="border-2 border-gray-800 text-gray-900 font-bold px-6 py-2.5 rounded-md text-sm hover:bg-gray-50 transition-colors">
                                        Add This Insurance
                                    </button>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-[#2D60CD] px-6 py-3 flex justify-between items-center text-white">
                                    <span className="font-semibold text-[15px]">Hospicash</span>
                                    <span className="text-xs text-blue-100 italic">powered by HDFC Ergo</span>
                                </div>
                                <div className="p-6 pb-8 bg-white">
                                    <p className="text-[15px] font-bold text-gray-800 mb-1">Receive fixed payout of</p>
                                    <h3 className="text-4xl font-bold text-[#007EA7] mb-1">₹2,000<span className="text-2xl font-bold text-[#007EA7]">/day*</span></h3>
                                    <p className="text-[15px] font-bold text-gray-800 mb-4">@just ₹3/day</p>
                                    <p className="text-[13px] text-gray-600 leading-relaxed mb-6">
                                        Policy that pays off your outstanding loan balance if you pass away or become disabled. It acts as a safety net that settles your debt directly with the lender, ensuring your famil... <span className="text-[#007EA7] font-semibold cursor-pointer">More</span>
                                    </p>
                                    <button className="border-2 border-gray-800 text-gray-900 font-bold px-6 py-2.5 rounded-md text-sm hover:bg-gray-50 transition-colors">
                                        Add This Insurance
                                    </button>
                                </div>
                            </div>

                            <p className="text-xs font-semibold text-gray-800">*Premium paid annually</p>

                            <button
                                onClick={handleProceed}
                                disabled={loading}
                                className="w-[300px] mt-4 h-14 bg-black text-white font-semibold rounded hover:bg-gray-800 transition shadow-lg flex justify-center items-center gap-2"
                            >
                                {loading ? <Loader2 className="animate-spin" /> : "Proceed"}
                            </button>
                        </div>

                        {/* Right Sticky Summary Card */}
                        <div className="w-[380px] shrink-0">
                            <div className="border border-gray-200 rounded-xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] bg-white sticky top-0">
                                <h3 className="text-[20px] font-bold text-gray-900 mb-6">Loan Summary</h3>

                                <div className="flex flex-col text-[14px]">
                                    <div className="flex justify-between py-3">
                                        <span className="text-gray-600">Loan Amount</span>
                                        <span className="font-bold text-gray-900">₹15,00,000</span>
                                    </div>
                                    <div className="flex justify-between py-3">
                                        <span className="text-gray-600">Insurance Premium</span>
                                        <span className="font-bold text-gray-900">- ₹15,000</span>
                                    </div>
                                    <div className="flex justify-between py-3">
                                        <span className="text-gray-600">Processing Fee</span>
                                        <span className="font-bold text-gray-900">- ₹5,000</span>
                                    </div>

                                    <div className="flex justify-between py-4 my-2 px-3 -mx-3 border-y border-dashed border-[#d8c347] bg-yellow-50/50">
                                        <span className="text-gray-700 flex items-center gap-1">Loan to be disbursed <Info className="h-3 w-3 text-blue-500" /></span>
                                        <span className="font-bold text-lg text-gray-900">₹14,80,000</span>
                                    </div>

                                    <div className="flex justify-between py-3">
                                        <span className="text-gray-600">Your EMI</span>
                                        <span className="font-bold text-gray-900">₹10,000</span>
                                    </div>
                                    <div className="flex justify-between py-3">
                                        <span className="text-gray-600">Rate of Interest</span>
                                        <span className="font-bold text-gray-900">10.25%</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-gray-100">
                                        <span className="text-gray-600">Loan Tenure (in months)</span>
                                        <span className="font-bold text-gray-900">48</span>
                                    </div>

                                    <div className="text-center mt-5 text-[12px] text-gray-700">
                                        Your final <span className="font-bold text-blue-600 underline decoration-blue-300">APR</span> (basis loan to be disbursed) <span className="font-bold text-gray-900">is 11.34%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
