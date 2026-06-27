import React from 'react';

export default function ProgressBar({ current, total, color = "bg-emerald-600" }) {
  const percentage = Math.min(Math.round((current / total) * 100), 100);
  
  return (
    <div className="w-full">
      <div className="mb-1.5 flex justify-between text-xs font-medium text-stone-500">
        <span>Progress</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-stone-100 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-500 ease-out ${color}`} 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}