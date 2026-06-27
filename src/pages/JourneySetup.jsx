import React, { useState } from "react";
import {
  ArrowLeft,
  Check,
  Target,
  Dumbbell,
  Droplets,
  Moon,
  Footprints,
} from "lucide-react";
import Logo from "../components/Logo";

export default function JourneySetup({
  formData = {},
  setFormData,
  onNext,
  onBack,
}) {
  const [weightUnit, setWeightUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("cm");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectValue = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    if (!formData.name || formData.name.trim() === "") {
      alert("Please enter your name first");
      return;
    }

    if (onNext) onNext();
  };

  const activities = [
    {
      id: "Sedentary",
      label: "Sedentary",
      desc: "Little or no exercise",
      emoji: "🛋️",
    },
    {
      id: "Lightly Active",
      label: "Lightly Active",
      desc: "Exercise 1-3 times/week",
      emoji: "🚶",
    },
    {
      id: "Moderately Active",
      label: "Moderately Active",
      desc: "Exercise 3-5 times/week",
      emoji: "🏃",
    },
    {
      id: "Very Active",
      label: "Very Active",
      desc: "Exercise 6-7 times/week",
      emoji: "🏋️",
    },
    {
      id: "Athlete",
      label: "Athlete",
      desc: "Intense training",
      emoji: "🔥",
    },
  ];

  return (
    <div className="min-h-screen relative bg-[#f8f7f3] overflow-hidden px-6 py-10 font-sans">

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

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col min-h-screen">

        {/* HEADER */}
        <header className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 rounded-full hover:bg-gray-100 transition text-gray-600"
            >
              <ArrowLeft size={20} />
            </button>
            <Logo />
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">
              Almost Done
            </span>

            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                <div className="w-14 h-2 rounded-full bg-[#7DA06D]"></div>
              </div>

              <span className="text-sm text-gray-400 font-medium">
                Step 3 of 3
              </span>
            </div>
          </div>
        </header>

        {/* MAIN LAYOUT WRAPPER BOX */}
        <div className="relative flex-1 bg-white/95 backdrop-blur-xl rounded-[35px] p-10 border-2 border-[#E9C46A] shadow-[0_12px_40px_rgba(233,196,106,0.28)] flex flex-col justify-between">
          
          {/* GOLD ACCENT DOT */}
          <div className="absolute top-5 right-5 w-3 h-3 rounded-full bg-[#E9C46A]"></div>

          <div>
            {/* TITLE CONTAINER */}
            <div className="text-center mb-10">
              <div className="text-3xl mb-3">🧘</div>
              <h1 className="text-4xl font-bold text-[#1D2A22] drop-shadow-sm">
                Tell us a little about yourself
              </h1>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                We'll personalize your VitaSphere dashboard based on your lifestyle.
              </p>
            </div>

            {/* MAIN GRID BLOCK */}
            <div className="grid lg:grid-cols-3 gap-8 items-start mb-10">

              {/* LEFT COLUMN: INTERACTIVE FORM CONTAINER CARDS */}
              <div className="lg:col-span-2 space-y-6">

                {/* CARD 1: BASIC REGISTRATION DATA */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-7 h-7 rounded-full bg-[#7DA06D] text-white text-xs font-bold flex items-center justify-center">
                      1
                    </div>
                    <h3 className="font-bold text-[#1D2A22]">Basic Information</h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name || ""}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full mt-2 p-3 rounded-xl border border-gray-200 outline-none focus:border-[#7DA06D] font-medium text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                        Age
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age || ""}
                        onChange={handleChange}
                        placeholder="20"
                        className="w-full mt-2 p-3 rounded-xl border border-gray-200 outline-none focus:border-[#7DA06D] font-medium text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Gender Selector Block */}
                  <div>
                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                      Gender
                    </label>
                    <div className="grid grid-cols-3 gap-3 mt-3">
                      {["Female", "Male", "Prefer Not To Say"].map((g) => {
                        const selected = formData.gender === g;
                        return (
                          <button
                            key={g}
                            type="button"
                            onClick={() => handleSelectValue("gender", g)}
                            className={`py-3 rounded-xl border text-sm font-semibold transition-all ${
                              selected
                                ? "bg-[#FAFBF7] border-[#7DA06D] text-[#4A6B3A] font-bold shadow-xs"
                                : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            {g}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* CARD 2: BODY STAT METRICS */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-7 h-7 rounded-full bg-[#7DA06D] text-white text-xs font-bold flex items-center justify-center">
                      2
                    </div>
                    <h3 className="font-bold text-[#1D2A22]">Body Metrics</h3>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                        Height
                      </label>
                      <input
                        type="number"
                        name="height"
                        value={formData.height || ""}
                        onChange={handleChange}
                        placeholder="170"
                        className="w-full mt-2 p-3 rounded-xl border border-gray-200 outline-none focus:border-[#7DA06D] font-medium text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                        Current Weight
                      </label>
                      <input
                        type="number"
                        name="weight"
                        value={formData.weight || ""}
                        onChange={handleChange}
                        placeholder="65"
                        className="w-full mt-2 p-3 rounded-xl border border-gray-200 outline-none focus:border-[#7DA06D] font-medium text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                        Target Weight
                      </label>
                      <input
                        type="number"
                        name="targetWeight"
                        value={formData.targetWeight || ""}
                        onChange={handleChange}
                        placeholder="72"
                        className="w-full mt-2 p-3 rounded-xl border border-gray-200 outline-none focus:border-[#7DA06D] font-medium text-sm transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* CARD 3: LIFESTYLE LOAD SELECTORS */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-7 h-7 rounded-full bg-[#7DA06D] text-white text-xs font-bold flex items-center justify-center">
                      3
                    </div>
                    <h3 className="font-bold text-[#1D2A22]">Lifestyle Information</h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {activities.map((act) => {
                      const selected = formData.lifestyle === act.id;
                      return (
                        <button
                          key={act.id}
                          type="button"
                          onClick={() => handleSelectValue("lifestyle", act.id)}
                          className={`p-4 rounded-2xl border transition-all h-40 flex flex-col justify-center items-center ${
                            selected
                              ? "bg-[#FAFBF7] border-[#7DA06D] shadow-xs scale-[1.02]"
                              : "bg-white border-gray-200 hover:bg-gray-50"
                          }`}
                        >
                          <div className="text-2xl mb-3">{act.emoji}</div>
                          <span className="text-xs font-bold text-center text-gray-800">
                            {act.label}
                          </span>
                          <span className="text-[10px] text-gray-400 mt-2 text-center leading-normal">
                            {act.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* CARD 4: DAILY STATIONS WATER / TARGET INPUT SELECTIONS */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-7 h-7 rounded-full bg-[#7DA06D] text-white text-xs font-bold flex items-center justify-center">
                      4
                    </div>
                    <h3 className="font-bold text-[#1D2A22]">Daily Targets</h3>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <select
                      name="waterGoal"
                      value={formData.waterGoal || "2"}
                      onChange={handleChange}
                      className="p-3 rounded-xl border border-gray-200 bg-white font-medium text-sm outline-none focus:border-[#7DA06D] text-gray-700 cursor-pointer"
                    >
                      <option value="2">2 Liters</option>
                      <option value="3">3 Liters</option>
                      <option value="4">4 Liters</option>
                      <option value="5">5 Liters</option>
                    </select>

                    <select
                      name="sleepGoal"
                      value={formData.sleepGoal || "8"}
                      onChange={handleChange}
                      className="p-3 rounded-xl border border-gray-200 bg-white font-medium text-sm outline-none focus:border-[#7DA06D] text-gray-700 cursor-pointer"
                    >
                      <option value="6">6 Hours</option>
                      <option value="7">7 Hours</option>
                      <option value="8">8 Hours</option>
                      <option value="9">9 Hours</option>
                    </select>

                    <select
                      name="stepGoal"
                      value={formData.stepGoal || "8000"}
                      onChange={handleChange}
                      className="p-3 rounded-xl border border-gray-200 bg-white font-medium text-sm outline-none focus:border-[#7DA06D] text-gray-700 cursor-pointer"
                    >
                      <option value="5000">5000 Steps</option>
                      <option value="8000">8000 Steps</option>
                      <option value="10000">10000 Steps</option>
                      <option value="12000">12000 Steps</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* RIGHT STICKY LAYOUT SIDE COLUMN: REAL-TIME SUMMARY COMPONENT CARD */}
              <div className="w-full lg:col-span-1 lg:sticky lg:top-8 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm min-h-[520px] flex flex-col justify-between overflow-hidden">
                <div>
                  <div className="flex flex-col items-center mb-5">
                    <div className="w-16 h-16 rounded-full bg-[#FAFBF7] border-2 border-dashed border-[#7DA06D]/40 flex items-center justify-center mb-3">
                      <Target size={26} className="text-[#7DA06D]" />
                    </div>
                    <h4 className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                      Your Journey
                    </h4>
                    <h2 className="text-lg font-black text-[#1D2A22]">
                      Summary
                    </h2>
                  </div>

                  {/* Summary Metric Items */}
                  <div className="space-y-4 border-y border-gray-100 py-4">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-400">Full Name</span>
                      <span className="text-[#1D2A22]">
                        {formData.name || "---"}
                      </span>
                    </div>

                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-400">Current Weight</span>
                      <span className="flex items-center gap-1 text-gray-700">
                        <Dumbbell size={12} className="text-gray-400" />
                        {formData.weight
                          ? `${formData.weight} ${weightUnit}`
                          : "---"}
                      </span>
                    </div>

                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-400">Target Weight</span>
                      <span className="text-gray-700">
                        {formData.targetWeight
                          ? `${formData.targetWeight} ${weightUnit}`
                          : "---"}
                      </span>
                    </div>

                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-400">Height</span>
                      <span className="text-gray-700">
                        {formData.height
                          ? `${formData.height} ${heightUnit}`
                          : "---"}
                      </span>
                    </div>

                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-400">Lifestyle</span>
                      <span className="text-gray-700">
                        {formData.lifestyle || "---"}
                      </span>
                    </div>
                  </div>

                  {/* Target Values Grid View */}
                  <div className="grid grid-cols-3 gap-2 pt-5 text-center text-[9px] font-bold">
                    <div className="bg-[#FAFBF7] p-2 rounded-xl border border-gray-50">
                      <Droplets size={12} className="text-blue-400 mx-auto mb-1" />
                      <span className="block text-gray-400 font-medium">Water</span>
                      <strong className="text-gray-700">{formData.waterGoal || "2"}L</strong>
                    </div>

                    <div className="bg-[#FAFBF7] p-2 rounded-xl border border-gray-50">
                      <Moon size={12} className="text-indigo-400 mx-auto mb-1" />
                      <span className="block text-gray-400 font-medium">Sleep</span>
                      <strong className="text-gray-700">{formData.sleepGoal || "8"}h</strong>
                    </div>

                    <div className="bg-[#FAFBF7] p-2 rounded-xl border border-gray-50">
                      <Footprints size={12} className="text-[#7DA06D] mx-auto mb-1" />
                      <span className="block text-gray-400 font-medium">Steps</span>
                      <strong className="text-gray-700">{formData.stepGoal || "8000"}</strong>
                    </div>
                  </div>
                </div>

                {/* Dynamic Card Motivation Block */}
                <div className="pt-5 border-t border-gray-100 text-center">
                  <span className="text-xl text-gray-300 font-serif">“</span>
                  <p className="text-[10px] italic text-gray-400 mt-1 max-w-[180px] mx-auto leading-normal">
                    Every step you take today brings you closer to your strongest self.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* MASTER FOOTER ACTION CONTROLS */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
            <button
              type="button"
              onClick={onBack}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 font-semibold transition-all"
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              className="px-8 py-3.5 bg-[#7DA06D] hover:bg-[#6d8e5e] text-white font-semibold rounded-2xl shadow-md flex items-center gap-2 transition-all"
            >
              Complete Setup
              <Check size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}