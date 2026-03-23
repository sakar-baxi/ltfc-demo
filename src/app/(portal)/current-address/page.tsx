"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Check, Loader2 } from "lucide-react";

export default function CurrentAddressPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        addressLine1: "Flat 901, Tower 8, Godrej Prime",
        addressLine2: "Sahakar Nagar Vibhag -2, CHSL, Chembur (E)",
        landmark: "Tilak Nagar Station"
    });

    const handleConfirm = () => {
        setLoading(true);
        setTimeout(() => {
            // Save address locally or just pass back via state if needed
            // For this demo, we'll just navigate back
            router.push("/actual-video-kyc?updated=true");
        }, 1200);
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
                        <div className="flex w-7 h-7 sm:w-8 sm:h-8 shrink-0 items-center justify-center rounded-full bg-green-500 font-bold text-white shadow-sm border border-green-600 text-sm">
                            <Check className="w-5 h-5 text-white" strokeWidth={3} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-[15px] mb-1 leading-none pt-1">Your Details</p>
                            <p className="text-[12px] text-gray-700 mt-2 leading-relaxed opacity-90">Review & confirm details received from your HR portal to make sure we generate best offer for you</p>
                        </div>
                    </div>

                    <div className="relative flex items-start gap-4 mb-16 z-10 opacity-100">
                        <div className="flex w-7 h-7 sm:w-8 sm:h-8 shrink-0 items-center justify-center rounded-full bg-green-500 font-bold text-white border border-green-600 shadow-sm text-sm z-10">
                            <Check className="w-5 h-5 text-white" strokeWidth={3} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-[15px] mb-1 leading-none pt-1">Loan Offer</p>
                            <p className="text-[12px] text-gray-700 mt-2 leading-relaxed">Basis your details provided above, we will present the best loan offer for you</p>
                        </div>
                    </div>

                    <div className="relative flex items-start gap-4 mb-16 z-10">
                        <div className="flex w-7 h-7 sm:w-8 sm:h-8 shrink-0 items-center justify-center rounded-full bg-white font-bold text-gray-900 border border-gray-300 shadow-sm text-sm">3</div>
                        <div>
                            <p className="font-bold text-gray-900 text-[15px] mb-1 leading-none pt-1">Verification</p>
                            <p className="text-[12px] text-gray-700 mt-2 leading-relaxed opacity-90">A quick verification of the details you provided in step 1</p>
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

                {/* Right Content */}
                <div className="flex-1 px-8 lg:px-14 py-10 overflow-y-auto bg-white flex flex-col items-start relative">
                    {/* Header */}
                    <div className="mb-2 w-full flex items-center gap-4">
                        <button onClick={() => router.back()} className="hover:bg-gray-100 p-1.5 rounded-full transition">
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                        <div>
                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">STEP 3</span>
                            <h2 className="text-[20px] font-bold text-gray-900 tracking-tight">Verification</h2>
                        </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="absolute top-[100px] left-14 right-14 h-[3px] bg-gray-200 overflow-hidden mb-6">
                        <div className="h-full bg-yellow-400 w-[85%]"></div>
                    </div>

                    <div className="w-full mt-14">
                        <h3 className="text-[22px] font-bold text-gray-900 tracking-tight mb-8">Add Your Current Address</h3>

                        <div className="bg-[#fff9e6] border border-[#ffeeba] rounded-lg p-3 px-4 mb-8 flex items-center justify-between">
                            <p className="text-[12px] text-gray-800 font-medium">
                                Enter your address details having <span className="font-bold">pin code 400017 (Chembur East, Mumbai, Maharashtra)</span>. Please <span className="text-blue-600 underline font-bold cursor-pointer">valid address proof</span> handy for further steps.
                            </p>
                            <button className="text-blue-600 text-[12px] font-bold underline whitespace-nowrap ml-4">Change PIN Code</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 w-full max-w-4xl">
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-bold text-gray-500 ml-1">Address Line 1*</label>
                                <input
                                    type="text"
                                    value={formData.addressLine1}
                                    onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                                    className="w-full h-14 px-4 rounded-lg border border-gray-200 bg-[#fcfcfc] font-bold text-gray-900 focus:border-blue-400 focus:ring-1 focus:ring-blue-100 outline-none transition-all"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-bold text-gray-500 ml-1">Address Line 2</label>
                                <input
                                    type="text"
                                    value={formData.addressLine2}
                                    onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                                    className="w-full h-14 px-4 rounded-lg border border-gray-200 bg-[#fcfcfc] font-bold text-gray-900 focus:border-blue-400 focus:ring-1 focus:ring-blue-100 outline-none transition-all"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-bold text-gray-500 ml-1">Landmark</label>
                                <input
                                    type="text"
                                    value={formData.landmark}
                                    onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                                    className="w-full h-14 px-4 rounded-lg border border-gray-200 bg-[#fcfcfc] font-bold text-gray-900 focus:border-blue-400 focus:ring-1 focus:ring-blue-100 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleConfirm}
                            disabled={loading}
                            className="bg-black text-white px-12 h-14 rounded font-bold text-[15px] hover:bg-gray-800 transition shadow-lg flex items-center justify-center gap-2"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Confirm Current Address"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
