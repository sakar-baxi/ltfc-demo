"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Check, EyeOff, ShieldCheck, Loader2 } from "lucide-react";

export default function VerifyIdentityPage() {
    const router = useRouter();
    const [pin, setPin] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [loading, setLoading] = useState(false);
    const [verifying, setVerifying] = useState(false);

    const handlePinChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !pin[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleProceed = () => {
        setLoading(true);
        setTimeout(() => {
            router.push("/video-kyc");
        }, 1000);
    };

    const handleVerify = () => {
        setVerifying(true);
        setTimeout(() => {
            setVerifying(false);
            // Pretend Verified
        }, 1200);
    };

    const allEntered = pin.every(d => d !== "");

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
                        <div className="h-full bg-yellow-400 w-[50%]"></div>
                    </div>

                    <div className="w-full mt-10">
                        <h3 className="text-[24px] font-bold text-gray-900 tracking-tight mb-2">Verify Your Identify</h3>
                        <p className="text-[14px] text-gray-700 font-medium mb-6">We may send link to your registered phone number</p>

                        {/* Digilocker Block */}
                        <div className="w-full rounded-2xl border border-gray-200 overflow-hidden shadow-sm h-[400px] flex flex-col items-center">
                            {/* Logo top bar */}
                            <div className="w-full h-[60px] flex items-center border-b border-gray-200 px-6 gap-3 shrink-0">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/250px-Emblem_of_India.svg.png" alt="India Emblem" className="h-10 w-auto opacity-70" />
                                <div className="h-8 border-l border-gray-300 ml-2"></div>
                                <div className="flex items-center gap-2 ml-2">
                                    <div className="w-10 h-10 rounded bg-[#5A29B0] flex items-center justify-center">
                                        <div className="text-white text-[12px] font-bold">DL</div>
                                    </div>
                                    <div>
                                        <span className="text-xl font-bold text-[#5A29B0] leading-none tracking-tight">DigiLocker</span>
                                        <span className="text-[8px] text-gray-500 block">Document Wallet to Empower Citizens</span>
                                    </div>
                                </div>
                            </div>

                            {/* Purplish background container */}
                            <div className="w-full flex-1 bg-[#F5F1FD] flex justify-center items-center py-8">
                                <div className="bg-white p-8 rounded-[16px] shadow-lg border border-[#E9E1F5] w-[400px]">

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-[45px] h-[45px] bg-[#5A29B0] text-white flex items-center justify-center font-bold text-lg rounded-md shadow-sm border border-[#48208c]">
                                            PV
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-gray-900 tracking-tight text-[16px]">Pr***** ***ma</span>
                                            <span className="text-[11px] font-bold text-green-600 flex items-center gap-1">
                                                Verified <ShieldCheck className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    </div>

                                    <h4 className="text-[18px] font-bold text-gray-900 mb-5 tracking-tight">Enter 6 digit security PIN</h4>

                                    <div className="flex items-center gap-2 sm:gap-3 mb-3">
                                        {pin.map((digit, i) => (
                                            <input
                                                key={i}
                                                ref={(el) => { inputRefs.current[i] = el; }}
                                                type="password"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                maxLength={1}
                                                value={digit}
                                                onChange={(e) => handlePinChange(i, e.target.value)}
                                                onKeyDown={(e) => handleKeyDown(i, e)}
                                                className={`w-[45px] h-[50px] text-center text-xl font-bold rounded-lg border focus:outline-none transition ${digit ? 'border-[#5A29B0] ring-1 ring-[#5A29B0]' : 'border-gray-300'}`}
                                            />
                                        ))}
                                        <button className="text-[#5A29B0] ml-1 opacity-70 hover:opacity-100">
                                            <EyeOff className="w-5 h-5" strokeWidth={2.5} />
                                        </button>
                                    </div>

                                    <a href="#" className="text-[11.5px] font-bold text-[#5A29B0] hover:underline block mb-6">Forgot security PIN?</a>

                                    <button
                                        onClick={handleVerify}
                                        disabled={!allEntered || verifying}
                                        className="w-full h-[45px] rounded border-none text-[15px] font-bold flex justify-center items-center transition-all disabled:bg-[#D4C3F3] disabled:text-white enabled:bg-[#5A29B0] enabled:text-white enabled:hover:bg-[#48208c]"
                                    >
                                        {verifying ? <Loader2 className="w-5 h-5 animate-spin text-white" /> : "Verify"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex w-full">
                        <button
                            onClick={handleProceed}
                            disabled={loading}
                            className="bg-black text-white text-[15px] font-semibold rounded hover:bg-gray-800 transition shadow-md flex justify-center items-center px-10 h-14"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Proceed"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
