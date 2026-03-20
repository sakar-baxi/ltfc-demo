import React from "react";

export default function Header() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center justify-between bg-[#005C8A] px-8 text-white z-50 relative shadow-md">
      {/* LTIMindtree side */}
      <div className="flex items-center gap-3 relative">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-transparent">
          <span className="text-xl font-bold italic tracking-tighter">L</span>
        </div>
        <span className="text-2xl font-semibold tracking-tight">LTIMindtree</span>
      </div>

      {/* L&T Finance side */}
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold italic text-[#FFC72C] tracking-wide">
          Lending Partner L&T Finance
        </span>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFC72C] text-black">
          <div className="flex flex-col items-center justify-center font-bold text-sm leading-none pt-0.5">
            <span>L</span>
            <span>&</span>
            <span>T</span>
          </div>
        </div>
      </div>
    </header>
  );
}
