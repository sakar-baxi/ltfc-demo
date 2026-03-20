"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, FileText, Download, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function SignDocumentsPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSign = () => {
        setLoading(true);
        setTimeout(() => router.push("/success"), 2000); // Redirect to success
    };

    return (
        <div className="flex w-full min-h-[calc(100vh-5rem)] bg-gray-100 flex-col items-center py-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="w-full max-w-4xl bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-200"
            >
                <div className="p-8 border-b border-gray-100 bg-white flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight mb-2 text-gray-900">Sign Your Loan Agreement</h1>
                        <p className="text-gray-500 font-medium">Please review the Master Loan Agreement below before proceeding with Aadhaar e-Sign.</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row shadow-inner max-h-[600px] overflow-hidden">
                    {/* Fake Document viewer side */}
                    <div className="flex-1 bg-gray-200/50 p-6 flex flex-col overflow-y-auto">
                        <div className="w-full bg-white min-h-[800px] shadow-sm p-12 text-gray-800 border border-gray-300 relative font-serif mx-auto max-w-xl text-[10px] leading-relaxed">
                            <h2 className="font-bold text-center text-lg mb-8 uppercase">Master Loan Agreement</h2>
                            <p className="mb-4">This Loan Agreement ("Agreement") is made and entered into primarily by and between L&T Finance Limited and Mr. Manish.</p>
                            <p className="mb-4">1. Loan Amount: ₹15,00,000</p>
                            <p className="mb-4">2. Interest Rate: 10% p.a. fixed for the tenor.</p>
                            <p className="mb-4">3. Monthly EMI: ₹9,735</p>
                            <p className="mb-4">4. Repayment Tenor: 48 Months.</p>
                            <div className="opacity-40">
                                <p className="mb-4 font-bold">Standard Terms and Conditions</p>
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <p key={i} className="mb-2 w-full bg-gray-200 rounded h-2"></p>
                                ))}
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <p key={i + 20} className="mb-2 w-3/4 bg-gray-200 rounded h-2"></p>
                                ))}
                            </div>

                            <div className="mt-20 border-t border-dashed border-gray-400 pt-6 flex justify-between items-end italic">
                                <div>
                                    <p>Digitally Signed By</p>
                                    <p className="opacity-0">L&T Finance Authorized</p>
                                </div>
                                <div className="text-right">
                                    <p>Applicant Signature</p>
                                    <p className="font-bold border border-red-500 text-red-500 p-2 mt-2 not-italic cursor-pointer hover:bg-red-50 flex items-center justify-center">Click To Sign Here</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action pane side */}
                    <div className="w-full md:w-80 bg-white border-l border-gray-200 p-8 flex flex-col shrink-0">
                        <div className="mb-auto">
                            <h3 className="font-bold text-xl text-gray-900 mb-6 drop-shadow-sm">Summary</h3>

                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center text-sm border-b pb-2">
                                    <span className="text-gray-500">Document Name</span>
                                    <span className="font-bold">ML_AGR_19488.pdf</span>
                                </div>
                                <div className="flex justify-between items-center text-sm border-b pb-2">
                                    <span className="text-gray-500">Pages</span>
                                    <span className="font-bold">14</span>
                                </div>
                                <button className="flex items-center gap-2 text-blue-600 font-semibold hover:underline mt-2">
                                    <Download className="w-4 h-4" /> Download Draft copy
                                </button>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100 flex items-start gap-3">
                            <CheckCircle2 className="text-green-500 w-8 h-8 shrink-0 border border-green-200 p-1 rounded-full bg-green-50 mt-0.5" />
                            <p className="text-xs text-gray-500 leading-relaxed font-medium">By clicking E-Sign below, you agree to the Terms & Conditions and Aadhaar based verification.</p>
                        </div>

                        <button
                            onClick={handleSign} disabled={loading}
                            className="w-full mt-6 bg-[#005187] text-white font-semibold py-4 rounded hover:bg-[#003d68] transition shadow-lg flex justify-center items-center gap-2"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : "Aadhaar e-Sign"}
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
