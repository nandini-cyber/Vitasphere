import React from "react";
import {
  LayoutDashboard,
  Dumbbell,
  Scale,
  HeartPulse,
  Trophy,
  User,
  Settings,
  Bell,
  LogOut,
  Crown,
} from "lucide-react";
import Logo from "./Logo";

export default function Sidebar({
  currentPage,
  setCurrentPage,
  onLogout,
}) {
  const menu = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Workouts", icon: Dumbbell },
    { name: "Weight", icon: Scale },
    { name: "Habits", icon: HeartPulse },
    { name: "Achievements", icon: Trophy },
    { name: "Profile", icon: User },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-[#FAF8F2] border-r border-[#E8E4D8] flex flex-col px-5 py-6">

      {/* LOGO */}
      <div className="mb-8">
        <Logo />
      </div>

      {/* MENU */}
      <div className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => setCurrentPage(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                currentPage === item.name
                  ? "bg-[#E6F0E2] text-[#2E5E3E]"
                  : "text-gray-500 hover:bg-white"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </button>
          );
        })}
      </div>

      {/* BOTTOM */}
      <div className="mt-auto space-y-3">

        <button
          onClick={() => setCurrentPage("Settings")}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-500 hover:bg-white rounded-xl"
        >
          <Settings size={18} />
          Settings
        </button>

        <button
          onClick={() => setCurrentPage("Notifications")}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-500 hover:bg-white rounded-xl"
        >
          <Bell size={18} />
          Notifications
        </button>

        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 rounded-xl"
        >
          <LogOut size={18} />
          Logout
        </button>

        <div className="bg-white rounded-2xl p-4 border shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Crown className="text-yellow-500" size={18} />
            <h3 className="text-sm font-semibold">Premium Plan</h3>
          </div>

          <p className="text-xs text-gray-500">
            Unlock AI tracking features
          </p>

          <button
            onClick={() => setCurrentPage("Premium")}
            className="w-full mt-3 bg-[#E6F0E2] text-[#2E5E3E] py-2 rounded-xl"
          >
            View Plan
          </button>
        </div>

      </div>
    </aside>
  );
}