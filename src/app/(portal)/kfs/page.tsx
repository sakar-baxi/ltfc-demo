"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Check, Download, ExternalLink, Loader2 } from "lucide-react";

export default function KFSPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleAccept = () => {
        setLoading(true);
        setTimeout(() => {
            router.push("/sign-agreement");
        }, 1500);
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
                        <div className="flex w-7 h-7 sm:w-8 sm:h-8 shrink-0 items-center justify-center rounded-full bg-green-500 font-bold text-white border border-green-600 shadow-sm text-sm">
                            <Check className="w-5 h-5 text-white" strokeWidth={3} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-[15px] mb-1 leading-none pt-1">Verification</p>
                            <p className="text-[12px] text-gray-700 mt-2 leading-relaxed opacity-90">A quick verification of the details you provided in step 1</p>
                        </div>
                    </div>

                    <div className="relative flex items-start gap-4 z-10 opacity-100">
                        <div className="flex w-7 h-7 sm:w-8 sm:h-8 shrink-0 items-center justify-center rounded-full bg-white font-bold text-gray-900 border border-gray-300 shadow-sm text-sm">4</div>
                        <div>
                            <p className="font-bold text-gray-900 text-[15px] mb-1 leading-none pt-1">Get Your Money</p>
                            <p className="text-[12px] text-gray-700 mt-2 leading-relaxed opacity-90">e-Sign the documents (KFS, Loan Agreement) & money gets disbursed</p>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 px-8 lg:px-14 py-10 bg-white flex flex-col items-start relative max-h-[90vh] overflow-y-auto">
                    {/* Header */}
                    <div className="mb-2 w-full flex items-center gap-4">
                        <button onClick={() => router.back()} className="hover:bg-gray-100 p-1.5 rounded-full transition">
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                        <div>
                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">STEP 4</span>
                            <h2 className="text-[20px] font-bold text-gray-900 tracking-tight">Get Your Money</h2>
                        </div>
                    </div>

                    <div className="w-full mt-10 flex flex-col items-start">
                        <h3 className="text-[22px] font-bold text-gray-900 tracking-tight mb-8">Review & Accept Your KFS</h3>

                        {/* Document Viewer Area */}
                        <div className="w-full bg-gray-50 rounded-xl border border-gray-200 p-4 md:p-8 flex flex-col items-center">
                            <div className="w-full max-w-[800px] bg-white shadow-2xl border border-gray-100 p-8 md:p-14 relative font-serif text-[#333] leading-normal min-h-[1000px]">
                                {/* Document Header */}
                                <div className="flex justify-end mb-8">
                                    <div className="flex items-center gap-2">
                                        <div className="text-right">
                                            <span className="block text-[16px] font-bold text-gray-800">L&T Finance</span>
                                        </div>
                                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                                            <div className="w-5 h-5 bg-black rounded-sm transform rotate-45"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mb-10 border-b-2 border-blue-400 pb-4">
                                    <h4 className="text-[18px] font-bold uppercase tracking-widest text-[#1a365d]">SANCTION LETTER</h4>
                                    <p className="text-[10px] font-sans font-bold text-gray-500 mt-1 uppercase tracking-tighter">LOAN APPLICATION NUMBER: C02509045670468012</p>
                                </div>

                                <div className="space-y-6 text-[12px] font-sans text-gray-800">
                                    <p className="font-bold">Date: 4/9/2025</p>

                                    <div>
                                        <p>To,</p>
                                        <p className="font-bold">MANISH SHARMA</p>
                                        <p>Current Address: Near Navnath Mandir, Navnath Nagar, Garkheda, Aurangabad</p>
                                        <p>Aurangabad, Maharashtra - 431001</p>
                                        <p>Permanent Address: S/O Dhanasing Lavhale, NAVNATH NAGAR GARKHEDA PARISAR, NEAR NAVNATH MANDIR</p>
                                        <p>Aurangabad, Maharashtra (MH)</p>
                                        <p>431005 Aurangbad Maharashtra</p>
                                        <p>Email id: manish.sharma@example.com</p>
                                        <p>Mobile Number: 98****5678</p>
                                    </div>

                                    <p>Dear Sir / Madam,</p>

                                    <p className="leading-relaxed">
                                        We are pleased to inform you that your loan application has been approved by L&T Finance Limited (formerly known as <span className="font-bold">L&T Finance Holdings Limited</span>), and hereinafter referred as ("<span className="font-bold">LTF/Lender</span>"), subject to the following:
                                    </p>

                                    <div>
                                        <p className="font-bold mb-2">1) <span className="underline">Key Facts Statement</span>: Please find attached Annexure 1 which comprises of Key Facts Statement ("<span className="font-bold">KFS</span>"). Annexure 1 further comprises of Schedule A i.e. Computation of Annual Percentage Rate (APR) and Schedule B i.e. Repayment Schedule.</p>
                                    </div>

                                    <div>
                                        <p className="font-bold mb-2">2) <span className="underline">Terms and Conditions</span> - Please find attached Annexure 2 which comprises of Terms of Sanction.</p>
                                        <p className="leading-relaxed">
                                            We look forward to a mutually beneficial and long-term relationship. We believe that our partnership will be built on the principles of trust, transparency, and understanding. We are committed to providing you with the best possible service and support to ensure that your loan experience is smooth and hassle-free.
                                        </p>
                                        <p className="leading-relaxed">
                                            By consenting to this sanction letter, you acknowledge that you have read, understood, and agreed to the terms and conditions outlined above and in the Annexures. You also confirm that you have provided all necessary information and documentation to facilitate the disbursement of the loan.
                                        </p>
                                        <p className="leading-relaxed">
                                            We encourage you to reach out to us if you have any questions or concerns regarding your loan or any other services. Our dedicated customer service team is available at 1800-268-0000 or <a href="mailto:customercare@ltfs.com" className="text-[#007EA7] underline">customercare@ltfs.com</a> to assist you at all times.
                                        </p>
                                        <p>If you're agreeable to the above terms and conditions, please sign and accept this sanction letter.</p>
                                    </div>

                                    <p className="pt-4 font-bold">Date: 4/9/2025 3:22 PM</p>
                                </div>

                                <div className="absolute bottom-10 right-14 opacity-10">
                                    <div className="w-32 h-32 border-8 border-blue-900 rounded-full flex items-center justify-center text-blue-900 font-bold transform -rotate-12 border-dashed">
                                        LOAN SEAL
                                    </div>
                                </div>
                            </div>

                            {/* Tool buttons above footer */}
                            <div className="mt-8 flex gap-4">
                                <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 shadow-sm">
                                    <Download className="w-4 h-4" /> Download KFS
                                </button>
                                <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 shadow-sm">
                                    <ExternalLink className="w-4 h-4" /> View Annexures
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="mt-10 mb-20 w-full flex justify-center">
                        <button
                            onClick={handleAccept}
                            disabled={loading}
                            className="bg-black text-white px-16 h-14 rounded-lg font-bold text-[16px] hover:bg-gray-800 transition shadow-lg flex items-center justify-center"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Accept & Continue"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
