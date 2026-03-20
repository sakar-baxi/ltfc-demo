"use client";

import React from "react";
import Link from "next/link";
import { Search, Settings, HelpCircle, Grid, Menu, Inbox, Star, Clock, Send, File, ChevronLeft, ChevronRight, Printer, ExternalLink, MoreVertical, PiggyBank, Home, Car, BadgeCheck, ChevronDown } from "lucide-react";

import { motion } from "framer-motion";

export default function EmailPage() {
  return (
    <div className="flex flex-col h-screen w-full bg-white text-gray-800 font-sans">
      {/* Gmail Header */}
      <header className="flex h-16 items-center justify-between border-b px-4 shrink-0">
        <div className="flex items-center gap-4">
          <Menu className="h-6 w-6 text-gray-600" />
          <img src="/gmail_icon.svg" alt="Gmail" className="h-8" />
          <span className="text-xl font-medium text-gray-600">Gmail</span>
        </div>
        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 hover:bg-white hover:shadow-md transition-all border border-transparent focus-within:bg-white focus-within:shadow-md focus-within:border-gray-200">
            <Search className="h-5 w-5 text-gray-600 mr-3" />
            <input type="text" placeholder="Search mail" className="bg-transparent outline-none w-full text-gray-800" />
            <Settings className="h-5 w-5 text-gray-600 ml-3" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-200">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm font-medium">Active</span>
          </div>
          <HelpCircle className="h-6 w-6 text-gray-600" />
          <Settings className="h-6 w-6 text-gray-600" />
          <Grid className="h-6 w-6 text-gray-600" />
          <div className="h-8 w-8 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold">P</div>
        </div>
      </header>

      {/* Gmail Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 flex flex-col pt-4 px-2 shrink-0">
          <button className="flex items-center gap-4 bg-teal-100/50 hover:bg-teal-100 text-teal-900 rounded-xl px-4 py-4 w-40 shadow-sm transition-colors mb-4">
            <div className="flex gap-1 justify-center items-center">
              <span className="h-6 w-6 inline-flex bg-[url('/compose_icon.svg')] bg-center bg-no-repeat" />
            </div>
            <span className="font-medium">Compose</span>
          </button>

          <nav className="flex flex-col gap-0.5 text-sm font-medium text-gray-700">
            <a href="#" className="flex items-center gap-4 bg-teal-100/50 hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-r-full font-bold">
              <Inbox className="h-5 w-5" />
              <span>Inbox</span>
              <span className="ml-auto text-xs bg-gray-200 px-1.5 rounded-full">47</span>
            </a>
            <a href="#" className="flex items-center gap-4 hover:bg-gray-100 px-4 py-2 rounded-r-full text-gray-700">
              <Star className="h-5 w-5" />
              <span>Starred</span>
            </a>
            <a href="#" className="flex items-center gap-4 hover:bg-gray-100 px-4 py-2 rounded-r-full text-gray-700">
              <Clock className="h-5 w-5" />
              <span>Snoozed</span>
            </a>
            <a href="#" className="flex items-center gap-4 hover:bg-gray-100 px-4 py-2 rounded-r-full text-gray-700">
              <Send className="h-5 w-5" />
              <span>Sent</span>
            </a>
            <a href="#" className="flex items-center gap-4 hover:bg-gray-100 px-4 py-2 rounded-r-full text-gray-700">
              <File className="h-5 w-5" />
              <span>Drafts</span>
            </a>
          </nav>
        </aside>

        {/* Main View */}
        <main className="flex-1 flex flex-col bg-white overflow-y-auto">
          {/* Email Toolbar */}
          <div className="flex items-center justify-between px-6 py-3 border-b sticky top-0 bg-white z-10 shrink-0">
            <div className="flex items-center gap-4 text-gray-600">
              <ChevronLeft className="h-5 w-5 cursor-pointer hover:bg-gray-100 rounded-full p-1" />
              <div className="flex items-center gap-4 mx-4">
                <File className="h-5 w-5" />
                <File className="h-5 w-5" />
                <File className="h-5 w-5" />
                <span className="border-l h-5 border-gray-300"></span>
                <File className="h-5 w-5" />
                <File className="h-5 w-5" />
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600 font-medium">
              <span>47 of 294</span>
              <ChevronLeft className="h-5 w-5 cursor-pointer" />
              <ChevronRight className="h-5 w-5 cursor-pointer" />
            </div>
          </div>

          {/* Email Subject */}
          <div className="px-8 py-6 mb-2">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-normal text-gray-800 flex items-center gap-3">
                Exclusive Employee Benefit | Instant Personal Loan
                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-medium">Inbox x</span>
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                <Printer className="h-5 w-5 cursor-pointer" />
                <ExternalLink className="h-5 w-5 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Email Sender Header */}
          <div className="px-8 flex items-start justify-between mb-6">
            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 border border-blue-200">
                <span className="text-xl font-bold tracking-tighter italic">L</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-800">HR For You</span>
                  <BadgeCheck className="w-4 h-4 text-blue-600 fill-blue-50 bg-blue-50 rounded-full" />
                  <span className="text-sm text-gray-500">&lt;hrforyou@ltfs.com&gt;</span>
                </div>
                <div className="text-sm text-gray-500 flex items-center gap-1 dropdown-hover cursor-pointer">
                  to bcc: allemployees <ChevronDown className="w-3 h-3" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>Fri, Nov 21, 2:10 PM (3 days ago)</span>
              <Star className="h-5 w-5 cursor-pointer" />
              <MoreVertical className="h-5 w-5 cursor-pointer" />
            </div>
          </div>

          {/* Email Body - L&T Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="px-8 pb-12 overflow-x-auto"
          >
            <Link href="/otp" className="block max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl transition hover:scale-[1.01] hover:shadow-3xl bg-gradient-to-br from-white to-blue-50 group cursor-pointer border border-gray-100">

              {/* Fake Email Image Area */}
              <div className="relative p-12 text-center pb-8 border-b border-gray-100">
                {/* Decorative background shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-bl-full -z-10 blur-3xl" />

                <h2 className="text-4xl font-extrabold text-teal-900 tracking-tight mb-2">
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">M</span>
                  <br />LTIMindtree
                </h2>

                <h3 className="text-4xl font-black text-gray-800 mt-8 mb-2">
                  EXCLUSIVE EMPLOYEE BENEFITS
                </h3>
                <p className="text-2xl text-blue-600 mb-10 font-medium">
                  Unlock Your Financial Potential
                </p>

                {/* Flow Diagram (Mocking the icons) */}
                <div className="flex justify-center items-center gap-6 mb-12 py-8 relative">
                  {/* Background connector line */}
                  <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-gray-300 -translate-y-10 -z-0"></div>

                  <div className="bg-rose-50 p-6 rounded-full shadow-xl border border-rose-100 z-10 relative bg-white text-rose-500 hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <PiggyBank className="w-14 h-14" strokeWidth={1.5} />
                  </div>
                  <div className="bg-amber-50 p-6 rounded-full shadow-xl border border-amber-100 z-10 relative bg-white mb-20 animate-bounce text-amber-500 hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Home className="w-14 h-14" strokeWidth={1.5} />
                  </div>
                  <div className="bg-sky-50 p-6 rounded-full shadow-xl border border-sky-100 z-10 relative bg-white text-sky-500 hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Car className="w-14 h-14" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Bottom blue CTA block */}
              <div className="bg-[#005187] text-white p-12 relative overflow-hidden text-center">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent"></div>

                <div className="relative z-10">
                  <h4 className="text-3xl font-bold mb-4">
                    INSTANT PERSONAL LOAN from L&T Finance
                  </h4>
                  <div className="w-16 h-1 bg-yellow-400 mx-auto my-6"></div>
                  <p className="text-2xl font-light tracking-wide mb-2 opacity-90">
                    Interest as low as <span className="font-bold text-yellow-300">10% p.a.</span>
                  </p>
                  <p className="text-3xl font-semibold mb-8">
                    Up to <span className="font-bold">₹30 Lakhs</span>
                  </p>

                  <span className="inline-block bg-yellow-400 text-[#005187] font-bold text-xl px-10 py-4 rounded-full shadow-xl hover:bg-yellow-300 hover:scale-105 transition-all outline outline-offset-4 outline-yellow-400/30 group-hover:animate-pulse">
                    Apply Now
                  </span>
                </div>
              </div>

            </Link>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
