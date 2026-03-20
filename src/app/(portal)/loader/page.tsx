"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

import { Suspense } from "react";

function LoaderContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [progress, setProgress] = useState(0);

    const nextPath = searchParams.get("next") || "/repayment";

    useEffect(() => {
        let timer = setInterval(() => {
            setProgress((old: number) => {
                if (old >= 100) {
                    clearInterval(timer);
                    setTimeout(() => router.push(nextPath), 500);
                    return 100;
                }
                return Math.min(old + Math.floor(Math.random() * 10) + 10, 100);
            });
        }, 300);

        return () => clearInterval(timer);
    }, [router, nextPath]);

    return (
        <div className="flex w-full min-h-[calc(100vh-5rem)] bg-white flex-col items-center justify-center relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
                className="z-10 flex flex-col items-center justify-center p-12 bg-white/80 backdrop-blur-sm rounded-3xl"
            >
                <div className="relative mb-8">
                    <Loader2 className="w-16 h-16 text-[#005187] animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center font-bold text-[#005187]">L&T</div>
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-gray-800 mb-4 text-center">
                    Processing Your Application...
                </h2>

                <p className="text-sm text-gray-500 max-w-sm text-center font-medium">
                    We're securely preparing your final loan agreement and validating the bank account via penny drop.
                </p>

                {/* Progress bar */}
                <div className="w-full h-2 bg-gray-100 rounded-full mt-10 overflow-hidden relative">
                    <div className="h-full bg-yellow-400 absolute left-0 ease-linear rounded-r-full" style={{ width: `${progress}%` }}></div>
                </div>
            </motion.div>
        </div>
    );
}

export default function LoaderPage() {
    return (
        <Suspense fallback={
            <div className="flex w-full min-h-[calc(100vh-5rem)] items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
            </div>
        }>
            <LoaderContent />
        </Suspense>
    );
}
