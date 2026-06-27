import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function GoalCard({
  id,
  title,
  description,
  icon: Icon,
  isSelected,
  onSelect,
}) {
  return (
    <div
      onClick={() => onSelect(id)}
      className={`
        relative
        cursor-pointer
        rounded-3xl
        p-6
        transition-all
        duration-300
        border
        group
        hover:scale-[1.02]
        ${
          isSelected
            ? `
              border-[#7DA06D]
              bg-[#f3f8f0]
              shadow-[0_8px_25px_rgba(125,160,109,0.18)]
              ring-1 ring-[#7DA06D]
            `
            : `
              border-gray-100
              bg-white/90
              hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)]
              hover:border-gray-200
            `
        }
      `}
    >
      {/* Selected Tick */}
      {isSelected && (
        <div className="absolute right-5 top-5 text-[#7DA06D]">

          <CheckCircle2 className="w-6 h-6 fill-green-100" />

        </div>
      )}

      {/* Icon */}
      <div
        className={`
          mb-5
          inline-flex
          rounded-2xl
          p-4
          transition-all
          ${
            isSelected
              ? "bg-[#7DA06D] text-white"
              : "bg-gray-50 text-gray-600 group-hover:bg-green-50 group-hover:text-[#7DA06D]"
          }
        `}
      >
        <Icon className="w-6 h-6" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-[#111827]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-7 text-gray-500">
        {description}
      </p>

      {/* Bottom selection line */}
      <div
        className={`
          mt-5
          h-1
          rounded-full
          transition-all
          ${
            isSelected
              ? "bg-[#7DA06D] w-full"
              : "bg-gray-100 w-12 group-hover:w-20"
          }
        `}
      ></div>
    </div>
  );
}