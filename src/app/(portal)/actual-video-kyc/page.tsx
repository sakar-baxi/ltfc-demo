"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Check, Smartphone, Camera, Loader2 } from "lucide-react";

export default function ActualVideoKycPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);

    useEffect(() => {
        async function startCamera() {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
                setStream(mediaStream);
                if (videoRef.current) {
                    videoRef.current.srcObject = mediaStream;
                }
            } catch (err) {
                console.error("Error accessing camera:", err);
            }
        }
        startCamera();
        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const handleStartCall = () => {
        setLoading(true);
        setTimeout(() => {
            // After call, show loader and go to KFS
            router.push("/loader?next=/kfs");
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

                    <div className="w-full mt-12">
                        <div className="flex flex-col xl:flex-row gap-10">

                            <div className="flex-1">
                                <h3 className="text-[22px] font-bold text-gray-900 tracking-tight mb-8">Just a Quick Video Verification</h3>

                                <p className="text-[15px] font-bold text-gray-800 mb-6">Please keep following documents handy</p>

                                <ul className="space-y-6">
                                    <li className="flex items-center gap-3">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 shrink-0">
                                            <Check className="h-3.5 w-3.5 text-white" strokeWidth={4} />
                                        </div>
                                        <span className="text-[14px] font-medium text-gray-700">Your PAN Card</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 shrink-0">
                                            <Check className="h-3.5 w-3.5 text-white" strokeWidth={4} />
                                        </div>
                                        <span className="text-[14px] font-medium text-gray-700">Your Aadhaar Card</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 shrink-0 mt-0.5">
                                            <Check className="h-3.5 w-3.5 text-white" strokeWidth={4} />
                                        </div>
                                        <div>
                                            <span className="text-[14px] font-medium text-gray-700">Any <span className="text-[#007EA7] underline font-bold cursor-pointer">1 of 8 documents</span> as address proof for your following address:</span>
                                            <div className="bg-[#f2f8f9] border border-[#dceef1] rounded-lg p-4 mt-3">
                                                <p className="text-[12.5px] font-medium text-gray-700 leading-relaxed">
                                                    A241, Supertech Apartments, Wave City, Ghaziabad, <span className="font-bold">Uttar Pradesh - 201016</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className="mt-8 flex items-center gap-3">
                                    <input type="checkbox" checked readOnly className="w-5 h-5 rounded border-gray-300 accent-blue-600" />
                                    <span className="text-[13px] font-medium text-gray-700">Consent text to be put up here</span>
                                </div>
                            </div>

                            {/* Camera View */}
                            <div className="xl:w-[350px] w-full shrink-0">
                                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-black border-[6px] border-[#e9ecef] shadow-lg">
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        playsInline
                                        className="h-full w-full object-cover grayscale-[0.2]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-bottom p-6 flex-col justify-end">
                                        <div className="bg-black/40 backdrop-blur-md rounded-lg p-3 flex items-center gap-3 border border-white/20">
                                            <div className="h-5 w-5 flex items-center justify-center rounded-full bg-green-500 shrink-0 border border-white/40">
                                                <Check className="h-3 w-3 text-white" strokeWidth={5} />
                                            </div>
                                            <span className="text-white text-[12px] font-bold tracking-tight">You look great & video KYC ready!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Buttons */}
                    <div className="mt-auto pt-10 flex flex-col sm:flex-row gap-4 w-full xl:w-auto">
                        <button
                            onClick={handleStartCall}
                            className="bg-black text-white px-10 h-[56px] rounded-[6px] font-bold text-[15px] hover:bg-gray-800 transition shadow-md flex items-center justify-center gap-2"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Start Video Call"}
                        </button>
                        <button
                            className="bg-white text-gray-900 border border-gray-300 px-8 h-[56px] rounded-[6px] font-bold text-[15px] hover:bg-gray-50 transition flex items-center justify-center gap-2"
                        >
                            Send vKYC link on SMS
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
