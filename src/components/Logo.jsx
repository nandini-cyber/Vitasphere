import React from "react";

export default function Logo() {
  // Exact color matches sampled from your new yoga emblem
  const orangeGold = "#E07A1B"; // Upper body gradient tone
  const lotusPurple = "#8F1451"; // Lower lotus legs tone
  const wellnessGray = "#6B7280"; // Clean, readable gray for the subtitle

  return (
    <div className="flex items-center gap-3 select-none py-1">
      {/* Colorful Yoga Logo Asset */}
      <img 
        src="/logo.jpeg" 
        alt="VitaSphere Icon" 
        className="h-11 w-auto object-contain mix-blend-multiply"
      />

      {/* Brand Typography matched to the emblem's palette */}
      <div className="flex flex-col justify-center">
        <span 
          className="font-black text-sm tracking-wide uppercase leading-none"
          style={{ fontFamily: "sans-serif" }}
        >
          <span style={{ color: orangeGold }}>Vita</span>
          <span style={{ color: lotusPurple }}>Sphere</span>
        </span>
        <span 
          className="text-[8px] font-bold tracking-widest uppercase mt-1 opacity-90" 
          style={{ color: wellnessGray }}
        >
          Wellness Platform
        </span>
      </div>
    </div>
  );
}