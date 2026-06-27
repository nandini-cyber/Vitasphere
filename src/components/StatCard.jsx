import React from "react";

export default function StatCard({
  title,
  value,
  unit,
  change,
  icon: Icon,
}) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-5
      border border-[#ECE8DD]
      shadow-sm
      hover:shadow-md
      transition-all
      duration-300
    "
    >
      {/* Top Section */}
      <div className="flex justify-between items-start">

        {/* Text */}
        <div>
          <p className="text-sm text-gray-400 font-medium">
            {title}
          </p>

          <h3 className="text-3xl font-bold text-[#222222] mt-3">
            {value}

            <span className="text-base font-medium text-gray-500 ml-1">
              {unit}
            </span>
          </h3>
        </div>

        {/* Icon Box */}
        <div
          className="
          w-12 h-12
          rounded-2xl
          bg-[#EEF6EA]
          flex items-center justify-center
        "
        >
          <Icon
            size={20}
            className="text-[#4F8A5B]"
          />
        </div>
      </div>

      {/* Bottom Change Info */}
      <div className="mt-5 pt-3 border-t border-[#F2EFE6]">
        <p className="text-xs text-gray-500 font-medium">
          {change}
        </p>
      </div>
    </div>
  );
}