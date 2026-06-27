import React, { useState } from "react";
import {
  TrendingDown,
  TrendingUp,
  Shield,
  Activity,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import Logo from "../components/Logo";
import GoalCard from "../components/GoalCard";

export default function GoalSelection({ onNext, onBack }) {
  const [selectedGoal, setSelectedGoal] = useState("lose");

  const goals = [
    {
      id: "lose",
      title: "Lose Weight",
      description:
        "Reduce body fat with healthy nutrition and sustainable routines.",
      icon: TrendingDown,
    },
    {
      id: "gain",
      title: "Gain Weight",
      description:
        "Increase healthy body mass using balanced calorie planning.",
      icon: TrendingUp,
    },
    {
      id: "muscle",
      title: "Build Muscle",
      description:
        "Develop strength and muscle growth through structured workouts.",
      icon: Shield,
    },
    {
      id: "fitness",
      title: "General Fitness",
      description:
        "Improve stamina, flexibility and daily health performance.",
      icon: Activity,
    },
    {
      id: "consistent",
      title: "Stay Consistent",
      description:
        "Build long-term discipline and healthy everyday habits.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen relative bg-[#f8f7f3] overflow-hidden px-6 py-10">

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

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col min-h-screen">

        {/* HEADER */}
        <header className="flex justify-between items-center mb-10">

          <Logo showText={false} className="h-10 w-10" />

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-gray-200"></div>

            <div className="w-14 h-2 rounded-full bg-[#7DA06D]"></div>

            <div className="w-3 h-3 rounded-full bg-gray-200"></div>

            <span className="text-sm text-gray-400">
              Step 2 of 3
            </span>
          </div>
        </header>

        {/* MAIN PREMIUM CARD */}
        <div
          className="
            relative
            flex-1
            bg-white/95
            backdrop-blur-xl
            rounded-[35px]
            p-10
            border-2 border-[#E9C46A]
            shadow-[0_12px_40px_rgba(233,196,106,0.28)]
            transition-all duration-300
          "
        >
          {/* GOLD ACCENT DOT */}
          <div className="absolute top-5 right-5 w-3 h-3 rounded-full bg-[#E9C46A]"></div>

          {/* HEADING */}
          <div className="text-center">

            <h1 className="text-5xl font-bold text-[#1D2A22] drop-shadow-sm">
              Choose your main goal 🎯
            </h1>

            <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-7">
              Select the wellness goal you want VitaSphere to focus on first.
              You can always update this later as your journey evolves and grows.
            </p>
          </div>

          {/* GOAL CARDS */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

            {goals.map((g) => (
              <GoalCard
                key={g.id}
                id={g.id}
                title={g.title}
                description={g.description}
                icon={g.icon}
                isSelected={selectedGoal === g.id}
                onSelect={setSelectedGoal}
              />
            ))}
          </div>

          {/* FOOTER */}
          <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center">

            <button
              onClick={onBack}
              className="
                flex items-center gap-2
                text-gray-500
                hover:text-gray-700
                transition
                font-medium
              "
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <button
              onClick={onNext}
              className="
                px-8
                py-3
                rounded-2xl
                bg-[#7DA06D]
                text-white
                font-semibold
                hover:bg-[#6d8e5e]
                transition
              "
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}