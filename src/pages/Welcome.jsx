import React from "react";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import Logo from "../components/Logo";

export default function Welcome({ onNext, onSkipToDashboard }) {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#f8f7f3] overflow-hidden px-6">

      {/* BACKGROUND IMAGE */}
      <img
        src="/loginbg.jpeg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />

      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-white/45"></div>

      {/* LEFT LEAF */}
      <img
        src="/leaf1.jpeg"
        alt="leaf"
        className="absolute top-8 left-8 w-32 opacity-70"
      />

      {/* RIGHT LEAF */}
      <img
        src="/leaf2.jpeg"
        alt="leaf"
        className="absolute bottom-8 right-8 w-36 opacity-70"
      />

      {/* DECORATIVE RED LINE / ACCENT */}
      <div className="absolute top-20 right-20 w-52 h-52 rounded-full border border-[#B85C38]/20"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full border border-[#B85C38]/15"></div>

      {/* FLOATING HEALTH STATUS CARD */}
      <div className="absolute top-16 left-12 hidden xl:flex bg-white px-5 py-4 rounded-2xl shadow-lg border border-gray-100 items-center gap-3 z-20">

        <div className="p-3 bg-green-50 rounded-xl text-[#7DA06D]">
          <Heart className="w-5 h-5" />
        </div>

        <div>
          <p className="text-[10px] uppercase text-gray-400 font-semibold">
            Health Status
          </p>
          <p className="font-semibold text-gray-700">
            Stable & Balanced
          </p>
        </div>
      </div>

      {/* MAIN PREMIUM CARD */}
      <div
        className="
          relative z-10
          w-full
          max-w-3xl
          bg-white/95
          backdrop-blur-xl
          rounded-[35px]
          p-14
          text-center
          border-2 border-[#E9C46A]
          shadow-[0_12px_40px_rgba(233,196,106,0.28)]
          transition-all duration-300
        "
      >
        {/* GOLD DOT ACCENT */}
        <div className="absolute top-5 right-5 w-3 h-3 rounded-full bg-[#E9C46A]"></div>

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <Logo className="h-14 w-14" showText={false} />
        </div>

        {/* BADGE */}
        <span className="inline-block text-xs font-bold uppercase tracking-widest bg-green-50 text-[#7DA06D] px-4 py-2 rounded-full">
          Welcome to VitaSphere
        </span>

        {/* HEADING */}
        <h1 className="mt-8 text-6xl font-bold leading-tight text-[#1D2A22] drop-shadow-sm">
          Your wellness journey
          <br />
          starts today 🌱
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-5 text-gray-500 max-w-lg mx-auto leading-8">
          Build healthier habits, monitor daily progress, improve sleep,
          hydration and physical balance with one beautifully designed
          wellness platform created for your growth.
        </p>

        {/* STEP INDICATOR */}
        <div className="flex justify-center items-center gap-3 mt-8">

          <div className="w-14 h-2 rounded-full bg-[#7DA06D]" />

          <div className="w-3 h-3 rounded-full bg-gray-200" />

          <div className="w-3 h-3 rounded-full bg-gray-200" />

          <span className="text-sm text-gray-400 ml-2">
            Step 1 of 3
          </span>
        </div>

        {/* BUTTON */}
        <div className="mt-10">

          <button
            onClick={onNext}
            className="
              px-10
              py-4
              rounded-2xl
              bg-[#7DA06D]
              text-white
              font-semibold
              hover:bg-[#6d8e5e]
              transition
            "
          >
            <span className="flex items-center gap-2">
              Start Your Journey
              <ArrowRight size={18} />
            </span>
          </button>
        </div>

        {/* SKIP */}
        <button
          onClick={onSkipToDashboard}
          className="mt-6 text-sm text-gray-400 hover:text-gray-600 transition block mx-auto font-medium"
        >
          Skip for now
        </button>

        {/* QUOTE */}
        <div className="mt-10 flex justify-center">

          <div className="flex items-center gap-2 text-gray-400 text-sm italic">
            <Sparkles size={16} />
            Small habits create extraordinary change.
          </div>
        </div>
      </div>
    </div>
  );
}