import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import Logo from "../components/Logo";

export default function LoginRegister({
  onNext,
  formData,
  setFormData,
}) {
  const [isRegister, setIsRegister] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister && !formData.name?.trim()) {
      alert("Please enter your full name");
      return;
    }

    onNext();
  };

  const handleGoogleSignIn = () => {
    setFormData((prev) => ({
      ...prev,
      name: "Google Explorer",
      email: "google.user@gmail.com",
    }));

    onNext();
  };

  const handleAppleSignIn = () => {
    setFormData((prev) => ({
      ...prev,
      name: "Apple Pioneer",
      email: "apple.user@icloud.com",
    }));

    onNext();
  };

  return (
    <div className="min-h-screen relative bg-[#f8f7f3] overflow-hidden px-6 py-10 font-sans flex items-center justify-center">

      {/* BACKGROUND IMAGE */}
      <img
        src="/loginbg.jpeg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/45"></div>

      {/* LEAF DECORATIONS */}
      <img
        src="/leaf1.jpeg"
        alt="leaf"
        className="absolute top-8 left-8 w-32 opacity-70"
      />

      <img
        src="/leaf2.jpeg"
        alt="leaf"
        className="absolute bottom-8 right-8 w-36 opacity-70"
      />

      {/* DECORATIVE ACCENT LINES */}
      <div className="absolute top-20 right-24 w-56 h-56 rounded-full border border-[#B85C38]/20"></div>
      <div className="absolute bottom-20 left-20 w-44 h-44 rounded-full border border-[#B85C38]/15"></div>

      {/* ===== MAIN CARD (UPDATED WITH PREMIUM MATCHING BORDER & SHADOW) ===== */}
      <div className="relative z-10 w-full max-w-6xl bg-white/95 backdrop-blur-xl rounded-[35px] border-2 border-[#E9C46A] shadow-[0_12px_40px_rgba(233,196,106,0.28)] grid lg:grid-cols-2 overflow-hidden relative">
        
        {/* GOLD ACCENT DOT */}
        <div className="absolute top-5 right-5 w-3 h-3 rounded-full bg-[#E9C46A] lg:block hidden"></div>

        {/* ===== LEFT SECTION ===== */}
        <div className="hidden lg:flex flex-col justify-center px-14 py-14 bg-gradient-to-br from-[#F8FAF6] to-[#EDF5EA]/40 relative">

          <div className="absolute top-10 left-10">
            <Logo />
          </div>

          <div className="mt-16">

            <div className="inline-block px-4 py-2 rounded-full bg-[#EAF5E7] text-[#2E7D4F] text-sm mb-6 font-semibold">
              Welcome to VitaSphere
            </div>

            <h1 className="text-5xl font-black leading-tight text-[#1D2A22]">
              Build Better
            </h1>

            <h1 className="text-5xl font-black leading-tight text-[#2E7D4F] mt-2">
              Healthy Habits
            </h1>

            <p className="mt-6 text-gray-500 leading-8 text-base max-w-md">
              Join thousands building better lifestyles with workout tracking,
              hydration goals, sleep monitoring and wellness insights.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4 mt-10 max-w-md">

              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 font-bold text-xs text-gray-700">
                🌱 Daily Wellness
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 font-bold text-xs text-gray-700">
                💧 Water Tracking
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 font-bold text-xs text-gray-700">
                🌙 Sleep Goals
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 font-bold text-xs text-gray-700">
                📈 Progress Insights
              </div>

            </div>
          </div>
        </div>

        {/* ===== RIGHT LOGIN CARD ===== */}
        <div className="flex items-center justify-center px-8 py-14 bg-white/40">

          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <div className="lg:hidden flex justify-center mb-8">
              <Logo />
            </div>

            {/* Header */}
            <div className="text-center mb-8">

              <div className="w-16 h-16 mx-auto rounded-full bg-[#EDF5EA] flex items-center justify-center mb-4 text-2xl">
                🌿
              </div>

              <h2 className="text-3xl font-bold text-[#1D2A22]">
                {isRegister ? "Create Account" : "Welcome Back"}
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                {isRegister
                  ? "Start your wellness journey today"
                  : "Continue tracking your healthy lifestyle"}
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {isRegister && (
                <div className="relative">
                  <User
                    size={17}
                    className="absolute left-4 top-4 text-gray-400"
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full py-3.5 pl-12 pr-4 rounded-2xl border border-gray-200 bg-white outline-none focus:border-[#7DA06D] font-medium text-sm"
                  />
                </div>
              )}

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-4 top-4 text-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full py-3.5 pl-12 pr-4 rounded-2xl border border-gray-200 bg-white outline-none focus:border-[#7DA06D] font-medium text-sm"
                />
              </div>

              <div className="relative">
                <Lock
                  size={17}
                  className="absolute left-4 top-4 text-gray-400"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password || ""}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full py-3.5 pl-12 pr-12 rounded-2xl border border-gray-200 bg-white outline-none focus:border-[#7DA06D] font-medium text-sm"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>

              {isRegister && (
                <div className="relative">
                  <Lock
                    size={17}
                    className="absolute left-4 top-4 text-gray-400"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full py-3.5 pl-12 pr-4 rounded-2xl border border-gray-200 bg-white outline-none focus:border-[#7DA06D] font-medium text-sm"
                  />
                </div>
              )}

              {/* MAIN BUTTON */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#7DA06D] text-white font-semibold hover:bg-[#6d8e5e] transition flex justify-center items-center gap-2 shadow-lg"
              >
                {isRegister ? "Create Account" : "Login"}
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-[1px] bg-gray-200"></div>
              <span className="px-3 text-[10px] tracking-wider text-gray-400 font-bold">
                OR CONTINUE WITH
              </span>
              <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>

            {/* SOCIAL BUTTONS */}
            <div className="grid grid-cols-2 gap-4">

              <button
                onClick={handleGoogleSignIn}
                className="py-3 px-4 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition flex items-center justify-center gap-2.5 text-sm font-semibold text-gray-700"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>

              <button
                onClick={handleAppleSignIn}
                className="py-3 px-4 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition flex items-center justify-center gap-2.5 text-sm font-semibold text-gray-700"
              >
                <svg className="h-4 w-4 text-black fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.58 2.95-1.39z" />
                </svg>
                Apple
              </button>

            </div>

            {/* TOGGLE */}
            <p className="text-center text-sm text-gray-500 mt-8">
              {isRegister
                ? "Already have an account?"
                : "New to VitaSphere?"}

              <button
                type="button"
                onClick={() => setIsRegister(!isRegister)}
                className="ml-2 text-[#7DA06D] font-semibold hover:underline"
              >
                {isRegister ? "Login" : "Register"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}