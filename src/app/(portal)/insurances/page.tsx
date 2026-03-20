"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Info, Check, ThumbsUp, X, Calendar, ChevronDown } from "lucide-react";

export default function InsurancesPage() {
    const router = useRouter();
    const [insurances, setInsurances] = useState({
        life: true,
        daily: true,
        health: true,
    });
    const [showNomineeModal, setShowNomineeModal] = useState(false);
    const [nominee, setNominee] = useState({
        name: "Gopal Jain",
        dob: "24/03/1967",
        mobile: "9136878325",
        relation: "Father"
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const calculatePremium = () => {
        let premium = 0;
        if (insurances.life) premium += 9000;
        if (insurances.daily) premium += 2500;
        if (insurances.health) premium += 3500;
        return premium;
    };

    const handleProceed = () => {
        setShowNomineeModal(true);
    };

    const handleNomineeSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            router.push("/loader");
        }, 1000);
    };

    const loanAmount = 1500000;
    const premium = calculatePremium(); // ~15000
    const processingFee = 5000;
    const disbursed = loanAmount + premium + processingFee;

    const formatRupees = (val: number) => {
        return new Intl.NumberFormat('en-IN').format(val);
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
                        <div className="flex w-7 h-7 sm:w-8 sm:h-8 shrink-0 items-center justify-center rounded-full bg-white font-bold text-gray-900 border border-gray-300 shadow-sm text-sm z-10">2</div>
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
                <div className="flex-1 px-8 lg:px-12 py-10 overflow-y-auto bg-white flex flex-col items-start gap-6 relative">
                    {/* Header */}
                    <div className="mb-2 w-full flex items-center gap-4 border-b border-gray-200 pb-5">
                        <button onClick={() => router.back()} className="hover:bg-gray-100 p-1.5 rounded-full transition">
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                        <div>
                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">STEP 2</span>
                            <h2 className="text-[22px] font-bold text-gray-900">Loan Offer & Requirements</h2>
                        </div>
                    </div>
                    {/* Progress Bar inside right section */}
                    <div className="absolute top-[108px] left-12 right-12 h-1 overflow-hidden">
                        <div className="h-full bg-yellow-400 w-[90%] rounded-r-full shadow-sm"></div>
                    </div>
                    <div className="w-full flex flex-col xl:flex-row gap-10 mt-6 lg:mt-8 items-start">

                        {/* Exclusives Left Col */}
                        <div className="flex-1 w-full bg-white rounded-2xl border border-gray-100/50 shadow-sm p-6 pt-4 min-w-[320px]">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Exclusive Insurances For You!</h3>

                            {/* Product 1 */}
                            <div className="rounded-[16px] overflow-hidden border border-[#2A659B]/20 mb-6 shadow-sm group">
                                <div className="bg-[#2A659B] text-white p-5 pr-40 relative flex items-start gap-4">
                                    <input
                                        type="checkbox"
                                        checked={insurances.life}
                                        onChange={(e) => setInsurances({ ...insurances, life: e.target.checked })}
                                        className="mt-1 w-[18px] h-[18px] rounded cursor-pointer accent-white"
                                    />
                                    <div>
                                        <p className="text-[13px] font-medium text-white/90 tracking-wide mb-1">Secure yourself for 5 years at just</p>
                                        <h4 className="text-3xl font-bold mb-1 tracking-tight">₹6/day</h4>
                                        <p className="text-[12px] text-white/90 tracking-wide">Pay once to get ₹3,50,000 Life Cover</p>
                                    </div>
                                    <div className="absolute top-0 right-6 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-b shadow-sm">
                                        Insurance Provider Logo
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=200&auto=format&fit=crop" alt="People" className="absolute bottom-0 right-4 h-24 w-auto drop-shadow-lg mix-blend-luminosity grayscale-[30%] opacity-90 object-contain rounded-full" />
                                </div>
                                <div className="bg-[#E9F0F7] px-5 py-2.5 flex justify-between items-center">
                                    <p className="text-[12px] text-[#2A659B] font-semibold flex items-center gap-1">
                                        <ThumbsUp className="w-3.5 h-3.5 fill-[#d1a337] text-transparent" /> 1.8L+ customers benefitted
                                    </p>
                                    <a href="#" className="text-[12px] text-gray-700 font-semibold underline hover:text-black">View Plan Details</a>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="rounded-[16px] overflow-hidden border border-[#A42571]/20 mb-6 shadow-sm group">
                                <div className="bg-[#A42571] text-white p-5 pr-40 relative flex items-start gap-4">
                                    <input
                                        type="checkbox"
                                        checked={insurances.daily}
                                        onChange={(e) => setInsurances({ ...insurances, daily: e.target.checked })}
                                        className="mt-1 w-[18px] h-[18px] rounded cursor-pointer accent-white"
                                    />
                                    <div>
                                        <p className="text-[13px] font-medium text-white/90 tracking-wide mb-1">Get <span className="font-bold">₹2,000 daily</span> at just</p>
                                        <h4 className="text-3xl font-bold mb-1 tracking-tight flex items-end">
                                            ₹1/day <span className="text-[9px] font-medium bg-white/20 px-1 py-0.5 rounded ml-2 relative -top-1.5 uppercase">paid annually</span>
                                        </h4>
                                        <p className="text-[12px] text-white/90 tracking-wide">In case of hospitalisation, for max. 30 days</p>
                                    </div>
                                    <div className="absolute top-0 right-6 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-b shadow-sm">
                                        Insurance Provider Logo
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop" alt="Person" className="absolute bottom-0 right-4 h-24 w-auto drop-shadow-lg mix-blend-luminosity grayscale-[30%] opacity-90 object-contain rounded-full" />
                                </div>
                                <div className="bg-[#FAF0F5] px-5 py-2.5 flex justify-between items-center">
                                    <p className="text-[12px] text-[#A42571] font-semibold flex items-center gap-1">
                                        <ThumbsUp className="w-3.5 h-3.5 fill-[#d1a337] text-transparent" /> 1.8L+ customers benefitted
                                    </p>
                                    <a href="#" className="text-[12px] text-gray-700 font-semibold underline hover:text-black">View Plan Details</a>
                                </div>
                            </div>

                            {/* Product 3 */}
                            <div className="rounded-[16px] overflow-hidden border border-[#532693]/20 shadow-sm group">
                                <div className="bg-[#532693] text-white p-5 pr-40 relative flex items-start gap-4">
                                    <input
                                        type="checkbox"
                                        checked={insurances.health}
                                        onChange={(e) => setInsurances({ ...insurances, health: e.target.checked })}
                                        className="mt-1 w-[18px] h-[18px] rounded cursor-pointer accent-white"
                                    />
                                    <div>
                                        <p className="text-[13px] font-medium text-white/90 tracking-wide mb-1">Comprehensive health cover at just</p>
                                        <h4 className="text-3xl font-bold mb-1 tracking-tight flex items-end">
                                            ₹2/day <span className="text-[9px] font-medium bg-white/20 px-1 py-0.5 rounded ml-2 relative -top-1.5 uppercase">paid annually</span>
                                        </h4>
                                        <p className="text-[12px] text-white/90 tracking-wide">Annual medical cover of ₹22,000</p>
                                    </div>
                                    <div className="absolute top-0 right-6 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-b shadow-sm">
                                        Insurance Provider Logo
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Person" className="absolute bottom-0 right-4 h-24 w-auto drop-shadow-lg mix-blend-luminosity grayscale-[30%] opacity-90 object-cover rounded-full" />
                                </div>
                                <div className="bg-[#F4EDFC] px-5 py-2.5 flex justify-between items-center">
                                    <p className="text-[12px] text-[#532693] font-semibold flex items-center gap-1">
                                        <ThumbsUp className="w-3.5 h-3.5 fill-[#d1a337] text-transparent" /> 1.8L+ customers benefitted
                                    </p>
                                    <a href="#" className="text-[12px] text-gray-700 font-semibold underline hover:text-black">View Plan Details</a>
                                </div>
                            </div>
                        </div>

                        {/* Summary Right Col */}
                        <div className="w-[330px] shrink-0 xl:sticky xl:top-[128px]">
                            <div className="bg-white border text-gray-900 border-gray-200 shadow-md rounded-2xl p-6 relative overflow-hidden">
                                <h3 className="text-[20px] font-bold text-gray-900 tracking-tight mb-5">Loan Summary</h3>

                                <div className="space-y-4 text-[14px] font-medium text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Loan Amount</span>
                                        <span className="font-bold text-gray-900 tracking-tight">₹{formatRupees(loanAmount)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Insurance Premium</span>
                                        <span className="font-bold text-gray-900 tracking-tight">+ ₹{formatRupees(premium)}</span>
                                    </div>
                                    <div className="flex justify-between bg-white">
                                        <span>Processing Fee</span>
                                        <span className="font-bold text-gray-900 tracking-tight">+ ₹{formatRupees(processingFee)}</span>
                                    </div>

                                    <div className="flex justify-between items-center bg-[#fdf8e6] -mx-6 px-6 py-3 border-y border-[#fae2a1]/30">
                                        <span className="flex items-center gap-1 text-[13.5px] text-gray-800">
                                            Loan to be disbursed <Info className="w-3.5 h-3.5 text-[#007EA7] mb-0.5" />
                                        </span>
                                        <span className="font-bold text-[16px] text-gray-900 tracking-tight">₹{formatRupees(disbursed)}</span>
                                    </div>

                                    <div className="flex justify-between pt-2">
                                        <span>Your EMI</span>
                                        <span className="font-bold text-gray-900 tracking-tight">₹10,000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Rate of Interest</span>
                                        <span className="font-bold text-gray-900 tracking-tight">10.25%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Loan Tenure (in months)</span>
                                        <span className="font-bold text-gray-900 tracking-tight">48</span>
                                    </div>
                                </div>

                                <div className="mt-8 text-center text-[11.5px] text-gray-500 font-medium">
                                    Your final <a href="#" className="text-[#007EA7] font-bold underline">APR</a> (basis loan to be disbursed) is <span className="font-bold">11.34%</span>
                                </div>
                            </div>

                            <button
                                onClick={handleProceed}
                                className="w-full mt-6 h-14 bg-black text-white text-[15px] font-semibold rounded hover:bg-gray-800 transition shadow-md flex justify-center items-center"
                            >
                                Proceed
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Nominee Modal */}
            {showNomineeModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-[450px] w-full relative animate-in fade-in zoom-in duration-200">
                        <button onClick={() => setShowNomineeModal(false)} className="absolute top-6 right-6 hover:bg-gray-100 p-1 rounded-full transition">
                            <X className="w-5 h-5 text-gray-900" />
                        </button>

                        <h3 className="text-[22px] font-bold text-black mb-1 tracking-tight">Nominee Details</h3>
                        <p className="text-[14px] text-gray-800 mb-6 font-medium">Please Enter nominee details for loan insurance</p>

                        <div className="flex flex-col gap-5">
                            <div>
                                <label className="block text-[14px] text-gray-500 mb-1 font-medium">Name</label>
                                <input
                                    type="text"
                                    value={nominee.name}
                                    onChange={e => setNominee({ ...nominee, name: e.target.value })}
                                    className="w-full border border-gray-300 rounded h-12 px-4 text-[15px] font-bold text-black focus:outline-none focus:border-black transition"
                                />
                            </div>

                            <div>
                                <label className="block text-[14px] text-gray-500 mb-1 font-medium">Date of Birth</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={nominee.dob}
                                        onChange={e => setNominee({ ...nominee, dob: e.target.value })}
                                        className="w-full border border-gray-300 rounded h-12 pl-4 pr-10 text-[15px] font-bold text-black focus:outline-none focus:border-black transition"
                                    />
                                    <Calendar className="absolute right-3 top-3.5 w-5 h-5 text-[#007EA7] pointer-events-none" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[14px] text-gray-500 mb-1 font-medium">Mobile Number</label>
                                <div className="flex border border-gray-300 rounded h-12 focus-within:border-black transition overflow-hidden">
                                    <div className="h-full bg-white flex items-center justify-center pl-4 pr-2 text-black font-bold text-[15px]">
                                        +91 <span className="text-gray-300 mx-2">|</span>
                                    </div>
                                    <input
                                        type="text"
                                        value={nominee.mobile}
                                        onChange={e => setNominee({ ...nominee, mobile: e.target.value })}
                                        className="w-full h-full pr-4 text-[15px] font-bold text-black outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[14px] text-gray-500 mb-1 font-medium">Relationship with applicant</label>
                                <div className="relative">
                                    <select
                                        value={nominee.relation}
                                        onChange={e => setNominee({ ...nominee, relation: e.target.value })}
                                        className="w-full border border-gray-300 rounded h-12 pl-4 pr-10 text-[15px] font-bold text-black focus:outline-none focus:border-black transition appearance-none bg-white"
                                    >
                                        <option value="Father">Father</option>
                                        <option value="Mother">Mother</option>
                                        <option value="Spouse">Spouse</option>
                                        <option value="Brother">Brother</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-[#007EA7] pointer-events-none transition-transform" />
                                </div>
                            </div>

                            <button
                                onClick={handleNomineeSubmit}
                                disabled={isSubmitting}
                                className="w-full mt-4 h-12 bg-black text-white text-[15px] font-bold rounded hover:bg-gray-800 transition flex justify-center items-center"
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
