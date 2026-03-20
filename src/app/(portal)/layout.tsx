import React from "react";
import Header from "@/components/Header";

export default function PortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1 flex w-full h-full relative">
                {children}
            </main>
        </div>
    );
}
