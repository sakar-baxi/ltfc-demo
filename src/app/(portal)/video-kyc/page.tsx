"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Check, Loader2 } from "lucide-react";

export default function VideoKycPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleProceed = () => {
        setLoading(true);
        setTimeout(() => {
            router.push("/actual-video-kyc");
        }, 1000);
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

                {/* Right Content Form */}
                <div className="flex-1 px-8 lg:px-14 py-10 overflow-y-auto bg-white flex flex-col items-start relative">
                    {/* Header */}
                    <div className="mb-2 w-full flex items-center gap-4">
                        <button onClick={() => router.back()} className="hover:bg-gray-100 p-1.5 rounded-full transition">
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                        <div>
                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">STEP 3</span>
                            <h2 className="text-[20px] font-bold text-gray-900">Verification</h2>
                        </div>
                    </div>
                    {/* Progress Bar inside right section */}
                    <div className="absolute top-[100px] left-14 right-14 h-[3px] bg-gray-200 overflow-hidden mb-6">
                        <div className="h-full bg-yellow-400 w-[70%]"></div>
                    </div>

                    <div className="w-full mt-10">
                        <h3 className="text-[22px] font-bold text-gray-900 tracking-tight mb-8 mt-1">Just a Quick Video Verification</h3>

                        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-12 w-full mt-2">
                            {/* Text List */}
                            <div className="flex-1 space-y-7 max-w-xl">
                                <p className="text-[14.5px] text-gray-900 font-bold leading-relaxed pr-10 tracking-tight">
                                    You will receive SMS from L&T Finance with a link to perform your vKYC. Before starting that, please make sure you have following handy:
                                </p>

                                <ul className="space-y-6 pt-2">
                                    <li className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#34a853] shrink-0">
                                            <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                                        </div>
                                        <span className="text-[14px] font-medium text-gray-800">Your PAN Card</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#34a853] shrink-0">
                                            <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                                        </div>
                                        <span className="text-[14px] font-medium text-gray-800">Your Aadhaar Card</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#34a853] shrink-0 mt-0.5">
                                            <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <span className="text-[14px] font-medium text-gray-800 leading-snug">
                                                <span className="relative group cursor-pointer text-[#007EA7] font-bold underline outline-offset-4">
                                                    1 of 8 documents
                                                    <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block w-64 bg-gray-900 text-white text-xs rounded shadow-lg p-3 z-50 animate-in fade-in zoom-in duration-200">
                                                        <ul className="list-disc pl-4 space-y-1">
                                                            <li>Passport</li>
                                                            <li>Voter ID Card</li>
                                                            <li>Driving License</li>
                                                            <li>NREGA Job Card</li>
                                                            <li>Letter by Nat. Pop. Register</li>
                                                            <li>Utility Bill (Water/Electricity/Gas)</li>
                                                            <li>Postpaid Mobile Bill</li>
                                                            <li>Bank Statement/Passbook</li>
                                                        </ul>
                                                    </div>
                                                </span> as address proof for your following address:
                                            </span>
                                            <div className="bg-[#f0f9fa] rounded-md px-4 py-3 border border-[#d8eff3] shadow-sm">
                                                <p className="text-[12.5px] text-gray-700 leading-relaxed font-medium">
                                                    Flat 901, Tower 8, Godrej Prime, Sahakar Nagar Vibhag -2, CHSL, Chembur (E), Mumbai, Maharashtra - 400071
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Graphic */}
                            <div className="w-[300px] shrink-0 flex justify-center xl:justify-end xl:mt-0 xl:mr-10 items-center">
                                {/* Synthetic illustration replacing the graphic in screenshot */}
                                <div className="relative w-full aspect-square bg-gray-50 rounded-full border border-gray-100 shadow-inner flex items-center justify-center">
                                    <div className="absolute inset-0 bg-blue-50/50 rounded-full scale-[0.8] blur-xl z-0"></div>
                                    <img src="https://img.icons8.com/color/256/video-call.png" alt="Video KYC Illustration" className="w-[180px] h-auto object-contain drop-shadow-2xl z-10 mix-blend-multiply" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-10 flex w-full">
                        <button
                            onClick={handleProceed}
                            disabled={loading}
                            className="bg-black text-white text-[15px] font-semibold rounded hover:bg-gray-800 transition shadow-md flex justify-center items-center px-10 h-[52px]"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Continue"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
