import React, { useState } from "react";
import { 
  TrendingUp, 
  Flame, 
  CheckCircle2, 
  Droplets, 
  Compass, 
  User, 
  Settings, 
  LogOut, 
  Sparkles,
  Bell,
  Calendar,
  Dumbbell,
  Moon,
  Footprints,
  Check,
  Camera,
  Image as ImageIcon
} from "lucide-react";
import Logo from "../components/Logo";

export default function Dashboard({ userProfile = {}, onboardingData = {}, onNavigate, currentTab = "dashboard" }) {
  const user = onboardingData.name ? onboardingData : userProfile;
  const displayName = user.name || "Google Explorer";
  
  const dailyGoals = [
    { id: 1, text: "Drink 2L Water", completed: true },
    { id: 2, text: "Complete Workout", completed: true },
    { id: 3, text: "Sleep 8 Hours", completed: true },
    { id: 4, text: "Walk 8000 Steps", completed: false },
  ];

  // Local state for the editable profile fields
  const [localProfile, setLocalProfile] = useState({
    name: user.name || "Google Explorer",
    email: user.email || "googleexplorer@gmail.com",
    age: user.age || "25",
    gender: user.gender || "Male",
    height: user.height || "170",
    targetWeight: user.targetWeight || "72",
    lifestyle: user.lifestyle || "Moderately Active"
  });

  // State to toggle the image upload dropdown overlay
  const [showPhotoDropdown, setShowPhotoDropdown] = useState(false);

  const clickRouteHandler = (destination) => {
    console.log(`Sidebar link selected: ${destination}`);
    if (onNavigate) {
      onNavigate(destination);
    }
  };

  const getNavClass = (tabName) => {
    const base = "w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 relative z-10 ";
    if (currentTab === tabName) {
      return base + "bg-[#7DA06D] text-white shadow-md shadow-[#7DA06D]/20 border border-[#7DA06D]";
    }
    return base + "text-gray-600 hover:bg-[#7DA06D]/10 hover:text-[#4A6B3A]";
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setLocalProfile(prev => ({ ...prev, [name]: value }));
  };

  const saveProfileChanges = (e) => {
    e.preventDefault();
    alert("Profile information saved successfully!");
  };

  // Safe gender/name check with optional chaining to prevent undefined/null crashes
  const isFemaleUser = () => {
    const genderLower = String(localProfile.gender || "").toLowerCase();
    const nameLower = String(localProfile.name || "").toLowerCase();
    return genderLower === "female" || nameLower.includes("girl") || nameLower.includes("her") || nameLower.includes("she");
  };

  const renderSubViewContent = () => {
    switch (currentTab) {
      case "dashboard":
        return (
          <>
            {/* ================= HERO DAILY INSIGHT BANNER ================= */}
            <div className="bg-gradient-to-br from-[#E3EDD9]/90 to-[#CAEDD3]/80 backdrop-blur-md rounded-3xl p-8 relative overflow-hidden flex justify-between items-center border border-[#EAD9A0]/30 mb-8 shadow-sm">
              <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-40">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M-4.22,85.36 C173.53,161.34 266.64,-34.03 501.41,92.27 L500.00,150.00 L0.00,150.00 Z" fill="#4E7A53" opacity="0.12"></path>
                  <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" fill="#4E7A53" opacity="0.06"></path>
                </svg>
              </div>

              <div className="relative z-10 max-w-2xl">
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#4E7A53] bg-white/70 px-2.5 py-0.5 rounded-full">
                  Your Daily Insight
                </span>
                <h2 className="text-2xl font-extrabold text-[#2C332E] mt-3 leading-tight">
                  You completed <span className="text-[#4E7A53]">85%</span> of your habits this week.
                </h2>
                <p className="text-sm text-[#727973] mt-1.5 leading-relaxed">
                  Try increasing your water intake today to stay on track.
                </p>
                <button 
                  onClick={() => clickRouteHandler("recommendations")}
                  className="mt-5 px-6 py-3 bg-[#4E7A53] hover:bg-[#3D6141] text-white font-bold text-xs rounded-xl shadow-xs transition-all active:scale-97"
                >
                  View Recommendations
                </button>
              </div>

              <div className="relative z-10 w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-xs shrink-0 border border-white">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle cx="48" cy="48" r="42" stroke="#F4F6F0" strokeWidth="8" fill="transparent" />
                  <circle cx="48" cy="48" r="42" stroke="#4E7A53" strokeWidth="8" fill="transparent" strokeDasharray="263.8" strokeDashoffset="39.5" strokeLinecap="round" />
                </svg>
                <span className="absolute text-xl font-black text-[#2C332E]">85%</span>
              </div>
            </div>

            {/* ================= METRIC CARDS ROW ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              
              <div onClick={() => clickRouteHandler("weight")} className="bg-white/90 backdrop-blur-xs p-6 rounded-3xl border-2 border-[#E9C46A] shadow-[0_4px_20px_rgba(233,196,106,0.08)] flex gap-4 items-start cursor-pointer hover:scale-[1.02] hover:shadow-[0_6px_24px_rgba(233,196,106,0.14)] transition-all">
                <div className="p-3 bg-[#FAFBF7] rounded-xl text-[#4E7A53] border border-gray-100"><Compass size={22} /></div>
                <div>
                  <span className="text-xs font-bold text-[#727973] block uppercase tracking-wider">Current Weight</span>
                  <div className="flex items-baseline gap-1.5 mt-1.5">
                    <span className="text-3xl font-black text-[#2C332E]">{user.weight || "62"}</span>
                    <span className="text-sm font-semibold text-gray-500">kg</span>
                  </div>
                  <span className="text-[11px] text-green-600 font-bold block mt-1.5 flex items-center gap-0.5">
                    ⬇ 1.2 kg this month
                  </span>
                </div>
              </div>

              <div onClick={() => clickRouteHandler("workouts")} className="bg-white/90 backdrop-blur-xs p-6 rounded-3xl border-2 border-[#E9C46A] shadow-[0_4px_20px_rgba(233,196,106,0.08)] flex gap-4 items-start cursor-pointer hover:scale-[1.02] hover:shadow-[0_6px_24px_rgba(233,196,106,0.14)] transition-all">
                <div className="p-3 bg-[#FAFBF7] rounded-xl text-orange-500 border border-gray-100"><Flame size={22} /></div>
                <div>
                  <span className="text-xs font-bold text-[#727973] block uppercase tracking-wider">Workout Streak</span>
                  <div className="flex items-baseline gap-1.5 mt-1.5">
                    <span className="text-3xl font-black text-[#2C332E]">7</span>
                    <span className="text-sm font-semibold text-gray-500">Days</span>
                  </div>
                  <span className="text-[11px] text-[#727973] font-medium block mt-1.5">Keep it up!</span>
                </div>
              </div>

              <div onClick={() => clickRouteHandler("habits")} className="bg-white/90 backdrop-blur-xs p-6 rounded-3xl border-2 border-[#E9C46A] shadow-[0_4px_20px_rgba(233,196,106,0.08)] flex gap-4 items-start cursor-pointer hover:scale-[1.02] hover:shadow-[0_6px_24px_rgba(233,196,106,0.14)] transition-all">
                <div className="p-3 bg-[#FAFBF7] rounded-xl text-[#4E7A53] border border-gray-100"><CheckCircle2 size={22} /></div>
                <div>
                  <span className="text-xs font-bold text-[#727973] block uppercase tracking-wider">Habit Completion</span>
                  <div className="flex items-baseline gap-1.5 mt-1.5">
                    <span className="text-2xl font-black text-[#2C332E]">85%</span>
                  </div>
                  <span className="text-[11px] text-green-600 font-bold block mt-1.5">▲ 12% vs last week</span>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-xs p-6 rounded-3xl border-2 border-[#E9C46A] shadow-[0_4px_20px_rgba(233,196,106,0.08)] flex gap-4 items-start">
                <div className="p-3 bg-[#FAFBF7] rounded-xl text-blue-500 border border-gray-100"><Droplets size={22} /></div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-[#727973] block uppercase tracking-wider">Water Intake</span>
                  <div className="flex items-baseline gap-1.5 mt-1.5">
                    <span className="text-3xl font-black text-[#2C332E]">{user.waterGoal || "6"} / 8</span>
                    <span className="text-sm font-medium text-[#727973] pl-0.5">Glasses</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full mt-3.5 overflow-hidden">
                    <div className="bg-blue-400 h-full rounded-full" style={{ width: `${((user.waterGoal || 6) / 8) * 100}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= LOWER PANEL GRIDS ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
              
              <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-8 border-2 border-[#E9C46A] shadow-[0_12px_40px_rgba(233,196,106,0.15)] lg:col-span-2">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#2C332E]">Progress Overview</h3>
                    <p className="text-xs text-[#727973] mt-1">Weight Trend over the past weeks</p>
                  </div>
                  <select className="text-sm p-2 border border-gray-200 rounded-lg outline-none bg-white text-gray-600 font-medium cursor-pointer">
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>

                <div className="h-56 w-full relative pt-4 flex gap-5">
                  <div className="flex flex-col justify-between text-[11px] text-gray-400 font-bold h-[82%] pt-1">
                    <span>68</span><span>64</span><span>60</span><span>56</span>
                  </div>
                  
                  <div className="flex-1 h-full relative">
                    <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="w-full h-[85%] overflow-visible">
                      <path d="M0,65 Q75,45 150,75 T300,50 T420,35 T500,60 L500,100 L0,100 Z" fill="url(#greenGrad)" opacity="0.08" />
                      <path d="M0,65 Q75,45 150,75 T300,50 T420,35 T500,60" fill="none" stroke="#4E7A53" strokeWidth="2.5" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4E7A53" />
                          <stop offset="100%" stopColor="#4E7A53" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <circle cx="420" cy="35" r="5" fill="#4E7A53" stroke="white" strokeWidth="2" />
                    </svg>

                    <div className="absolute top-0 left-[76%] transform -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-md shadow-md z-30 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-gray-900">
                      62 kg <span className="font-medium text-gray-300 block text-center text-[8px] mt-0.5">June 27</span>
                    </div>

                    <div className="flex justify-between text-[11px] font-bold text-[#727973] mt-5 border-t pt-4 border-gray-100">
                      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-8 border-2 border-[#E9C46A] shadow-[0_12px_40px_rgba(233,196,106,0.15)] lg:col-span-1 min-h-[300px]">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#2C332E]">Today's Goals</h3>
                    <p className="text-[11px] text-green-600 font-bold mt-1">3 of 4 Completed</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {dailyGoals.map((g) => (
                    <div key={g.id} className="flex items-center gap-3 p-3.5 bg-[#FAFBF7]/80 border border-gray-100 rounded-xl">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${g.completed ? "bg-green-600 text-white border-green-600" : "bg-white border-gray-300"}`}>
                        {g.completed && <CheckCircle2 size={13} className="stroke-[3]" />}
                      </div>
                      <span className={`text-sm font-bold ${g.completed ? "text-[#727973] line-through" : "text-[#2C332E]"}`}>{g.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-8 border-2 border-[#E9C46A] shadow-[0_12px_40px_rgba(233,196,106,0.15)] lg:col-span-1 flex flex-col justify-between min-h-[300px]">
                <h3 className="text-lg font-extrabold text-[#2C332E]">Today's Workout</h3>
                <div className="flex flex-col items-center justify-center py-2 text-center my-auto">
                  <div className="w-16 h-16 rounded-full bg-[#EAF5E7] text-[#4E7A53] flex items-center justify-center mb-3 border border-green-100 shadow-sm"><Dumbbell size={28} /></div>
                  <div>
                    <h4 className="text-lg font-black text-[#2C332E]">Push Day</h4>
                    <p className="text-xs text-[#727973] mt-1 font-medium">45 Minutes</p>
                  </div>
                </div>
                <button onClick={() => clickRouteHandler("workouts")} className="w-full py-3.5 bg-[#4E7A53] hover:bg-[#3D6141] text-white text-sm font-bold rounded-xl shadow-xs transition-all">
                  Start Workout
                </button>
              </div>
            </div>
          </>
        );

      case "workouts":
        return (
          <div className="bg-white/95 backdrop-blur-md border-2 border-[#E9C46A] rounded-[30px] p-8 shadow-[0_12px_40px_rgba(233,196,106,0.15)]">
            <button onClick={() => clickRouteHandler("dashboard")} className="mb-4 text-xs font-bold text-[#4E7A53] hover:underline">← Back to Dashboard</button>
            <h2 className="text-xl font-black text-[#2C332E] mb-2">Active Training Routines</h2>
            <p className="text-xs text-gray-500 mb-6">Access your customized dynamic training programs.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 border border-gray-100 rounded-2xl bg-[#FAFBF7]">
                <span className="text-[10px] uppercase font-extrabold text-[#4E7A53]">Recommended Strength</span>
                <h3 className="text-base font-black text-[#2C332E] mt-1">Full Body Hypertrophy</h3>
                <p className="text-xs text-[#727973] mt-1">45 mins • Intermediate</p>
                <button className="mt-4 px-4 py-2 bg-[#4E7A53] text-white font-bold text-xs rounded-xl">Launch Guide</button>
              </div>
              <div className="p-5 border border-gray-100 rounded-2xl bg-[#FAFBF7]">
                <span className="text-[10px] uppercase font-extrabold text-blue-500">Cardio Endurance</span>
                <h3 className="text-base font-black text-[#2C332E] mt-1">HIIT Aerobic Blast</h3>
                <p className="text-xs text-[#727973] mt-1">25 mins • All Levels</p>
                <button className="mt-4 px-4 py-2 bg-gray-200 text-[#2C332E] font-bold text-xs rounded-xl">Start Workout</button>
              </div>
            </div>
          </div>
        );

      case "weight":
        return (
          <div className="bg-white/95 backdrop-blur-md border-2 border-[#E9C46A] rounded-[30px] p-8 shadow-[0_12px_40px_rgba(233,196,106,0.15)]">
            <button onClick={() => clickRouteHandler("dashboard")} className="mb-4 text-xs font-bold text-[#4E7A53] hover:underline">← Back to Dashboard</button>
            <h2 className="text-xl font-black text-[#2C332E] mb-2">Weight Transformation Log</h2>
            <p className="text-xs text-[#727973] mb-6">Track your weight targets and weekly biometric changes.</p>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6 flex justify-around text-center">
              <div>
                <span className="text-xs text-[#727973]">Starting</span>
                <p className="text-xl font-black text-[#2C332E] mt-0.5">{user.weight || "62"} kg</p>
              </div>
              <div className="border-r border-gray-200 my-1" />
              <div>
                <span className="text-xs text-[#727973]">Current</span>
                <p className="text-xl font-black text-[#4E7A53] mt-0.5">{user.weight || "62"} kg</p>
              </div>
              <div className="border-r border-gray-200 my-1" />
              <div>
                <span className="text-xs text-[#727973]">Target Goal</span>
                <p className="text-xl font-black text-blue-600 mt-0.5">{user.targetWeight || "58"} kg</p>
              </div>
            </div>
            <div className="flex gap-3">
              <input type="number" placeholder="62.4" className="px-4 py-2.5 border rounded-xl text-xs max-w-[120px] bg-white outline-none focus:border-[#7DA06D]" />
              <button className="px-5 py-2.5 bg-[#4E7A53] text-white font-bold text-xs rounded-xl shadow-sm">Log Weight</button>
            </div>
          </div>
        );

      case "habits":
        return (
          <div className="bg-white/95 backdrop-blur-md border-2 border-[#E9C46A] rounded-[30px] p-8 shadow-[0_12px_40px_rgba(233,196,106,0.15)]">
            <button onClick={() => clickRouteHandler("dashboard")} className="mb-4 text-xs font-bold text-[#4E7A53] hover:underline">← Back to Dashboard</button>
            <h2 className="text-xl font-black text-[#2C332E] mb-4">Habit Tracker</h2>
            <div className="space-y-3">
              {[
                { name: "Morning Meditation", streak: "12 Day Streak", time: "8:00 AM" },
                { name: "Hydration Check (250ml)", streak: "4 Day Streak", time: "Every 2 Hours" },
                { name: "Read 10 Pages", streak: "0 Day Streak", time: "10:00 PM" }
              ].map((habit, idx) => (
                <div key={idx} className="p-4 border border-gray-100 rounded-xl flex justify-between items-center bg-[#FAFBF7]">
                  <div>
                    <h4 className="text-sm font-bold text-[#2C332E]">{habit.name}</h4>
                    <p className="text-[11px] text-[#727973]">{habit.time} • <span className="text-[#4E7A53] font-semibold">{habit.streak}</span></p>
                  </div>
                  <button className="px-4 py-1.5 border border-[#4E7A53] text-[#4E7A53] hover:bg-[#4E7A53] hover:text-white transition-all text-xs font-bold rounded-lg">Check Off</button>
                </div>
              ))}
            </div>
          </div>
        );

      case "achievements":
        return (
          <div className="bg-white/95 backdrop-blur-md border-2 border-[#E9C46A] rounded-[30px] p-8 shadow-[0_12px_40px_rgba(233,196,106,0.15)]">
            <button onClick={() => clickRouteHandler("dashboard")} className="mb-4 text-xs font-bold text-[#4E7A53] hover:underline">← Back to Dashboard</button>
            <h2 className="text-xl font-black text-[#2C332E] mb-4">Milestones & Badges</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-100 rounded-2xl text-center bg-gradient-to-b from-amber-50 to-white">
                <span className="text-2xl">🔥</span>
                <h4 className="text-xs font-black text-[#2C332E] mt-2">7-Day Streak Club</h4>
                <p className="text-[10px] text-[#727973] mt-0.5">Unlocked Today</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-2xl text-center bg-gradient-to-b from-blue-50 to-white">
                <span className="text-2xl">💧</span>
                <h4 className="text-xs font-black text-[#2C332E] mt-2">Hydro Master</h4>
                <p className="text-[10px] text-[#727973] mt-0.5">Logged 8 glasses</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-2xl text-center bg-gray-50 opacity-60">
                <span className="text-2xl opacity-40">🏋️‍♀️</span>
                <h4 className="text-xs font-black text-[#2C332E] mt-2">Iron Warrior</h4>
                <p className="text-[10px] text-[#727973] mt-0.5">Complete 30 Workouts</p>
              </div>
            </div>
          </div>
        );

      // ================= FIXED PROFILE SECTION (No more .includes() number crashes) =================
      case "profile":
        return (
          <div className="bg-white/95 backdrop-blur-md border-2 border-[#E9C46A] rounded-[35px] p-10 shadow-[0_12px_40px_rgba(233,196,106,0.15)] max-w-xl mx-auto relative overflow-hidden">
            <div className="absolute top-5 right-5 w-3 h-3 rounded-full bg-[#E9C46A]"></div>
            
            <button onClick={() => clickRouteHandler("dashboard")} className="mb-6 text-xs font-bold text-[#7DA06D] hover:underline block">
              ← Back to Dashboard
            </button>
            
            <h2 className="text-xl font-black text-[#1D2A22] mb-8 text-center">Profile Information</h2>
            
            <form onSubmit={saveProfileChanges} className="space-y-5">
              
              <div className="flex flex-col items-center mb-6">
                <div className="relative group">
                  <div className="w-28 h-28 rounded-full bg-[#EAF5E7] border-2 border-[#7DA06D]/30 flex items-center justify-center overflow-hidden shadow-xs">
                    {isFemaleUser() ? (
                      <svg className="w-20 h-24 text-pink-600/70 translate-y-1.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2c1.1 0 2 .9 2 2v.18C16.2 4.54 18 6.56 18 9v2c0 2.21-1.79 4-4 4h-4c-2.21 0-4-1.79-4-4V9c0-2.44 1.8-4.46 4-4.82V4c0-1.1.9-2 2-2zm0 15c3.31 0 6 2.69 6 6H6c0-3.31 2.69-6 6-6z" />
                      </svg>
                    ) : (
                      <svg className="w-20 h-24 text-[#4A6B3A] translate-y-1.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    )}
                  </div>
                  
                  <div className="absolute bottom-0 right-0">
                    <button 
                      type="button" 
                      onClick={() => setShowPhotoDropdown(!showPhotoDropdown)}
                      className="p-2 bg-white border border-gray-100 shadow-md rounded-full text-gray-600 hover:text-[#7DA06D] transition-all relative z-30"
                    >
                      <Camera size={14} />
                    </button>

                    {showPhotoDropdown && (
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 w-40 z-50">
                        <button 
                          type="button" 
                          onClick={() => { alert("Launching camera input stream..."); setShowPhotoDropdown(false); }}
                          className="w-full px-3 py-2 text-left text-[11px] font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                        >
                          <Camera size={12} className="text-gray-400" />
                          Take Photo (Camera)
                        </button>
                        <button 
                          type="button" 
                          onClick={() => { alert("Launching gallery file system exploration..."); setShowPhotoDropdown(false); }}
                          className="w-full px-3 py-2 text-left text-[11px] font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                        >
                          <ImageIcon size={12} className="text-gray-400" />
                          Upload from Gallery
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={localProfile.name} 
                  onChange={handleProfileChange}
                  className="w-full mt-1.5 p-3 border border-gray-100 bg-[#FAFBF7]/60 rounded-xl outline-none text-xs font-bold text-[#1D2A22]" 
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={localProfile.email} 
                  onChange={handleProfileChange}
                  className="w-full mt-1.5 p-3 border border-gray-100 bg-[#FAFBF7]/60 rounded-xl outline-none text-xs font-bold text-[#1D2A22]" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">Age</label>
                  <input 
                    type="number" 
                    name="age" 
                    value={localProfile.age} 
                    onChange={handleProfileChange}
                    className="w-full mt-1.5 p-3 border border-gray-100 bg-[#FAFBF7]/60 rounded-xl outline-none text-xs font-bold text-[#1D2A22]" 
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">Gender</label>
                  <select 
                    name="gender" 
                    value={localProfile.gender} 
                    onChange={handleProfileChange}
                    className="w-full mt-1.5 p-3 border border-gray-100 bg-[#FAFBF7]/60 rounded-xl outline-none text-xs font-bold text-gray-700 cursor-pointer"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer Not To Say">Prefer Not To Say</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">Height</label>
                  <input 
                    type="text" 
                    name="height" 
                    value={String(localProfile.height || "").includes("cm") ? localProfile.height : `${localProfile.height} cm`} 
                    onChange={handleProfileChange}
                    className="w-full mt-1.5 p-3 border border-gray-100 bg-[#FAFBF7]/60 rounded-xl outline-none text-xs font-bold text-[#1D2A22]" 
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">Target Weight</label>
                  <input 
                    type="text" 
                    name="targetWeight" 
                    value={String(localProfile.targetWeight || "").includes("kg") ? localProfile.targetWeight : `${localProfile.targetWeight} kg`} 
                    onChange={handleProfileChange}
                    className="w-full mt-1.5 p-3 border border-gray-100 bg-[#FAFBF7]/60 rounded-xl outline-none text-xs font-bold text-[#1D2A22]" 
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">Activity Level</label>
                <select 
                  name="lifestyle" 
                  value={localProfile.lifestyle} 
                  onChange={handleProfileChange}
                  className="w-full mt-1.5 p-3 border border-gray-100 bg-[#FAFBF7]/60 rounded-xl outline-none text-xs font-bold text-gray-700 cursor-pointer"
                >
                  <option value="Sedentary">Sedentary</option>
                  <option value="Lightly Active">Lightly Active</option>
                  <option value="Moderately Active">Moderately Active</option>
                  <option value="Very Active">Very Active</option>
                  <option value="Athlete">Athlete</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full mt-6 py-3.5 bg-[#4E7A53] text-white text-xs font-bold rounded-xl shadow-xs transition-all hover:bg-[#3D6141]"
              >
                Save Changes
              </button>
            </form>
          </div>
        );

      case "notifications":
        return (
          <div className="bg-white/95 backdrop-blur-md border-2 border-[#E9C46A] rounded-3xl p-8 shadow-sm">
            <button onClick={() => clickRouteHandler("dashboard")} className="mb-4 text-xs font-bold text-[#4E7A53] hover:underline">← Back to Dashboard</button>
            <h2 className="text-xl font-black text-[#2C332E] mb-4">Inbox Alerts</h2>
            <div className="space-y-2">
              <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-xl text-xs text-blue-900">
                <strong>System Notice:</strong> Don't forget to lock in your bedtime goals before 10:00 PM!
              </div>
              <div className="p-3 bg-[#FAFBF7] border border-gray-100 rounded-xl text-xs text-[#2C332E]">
                <strong>Achievement Alert:</strong> You completed your daily steps milestone. Nice work!
              </div>
            </div>
          </div>
        );

      case "premium-plan":
        return (
          <div className="bg-white/95 backdrop-blur-md border-2 border-[#E9C46A] rounded-[35px] p-10 shadow-[0_12px_40px_rgba(233,196,106,0.20)] relative">
            <button onClick={() => clickRouteHandler("dashboard")} className="mb-6 text-xs font-bold text-[#4E7A53] hover:underline flex items-center gap-1">
              ← Back to Dashboard
            </button>
            
            <div className="text-center mb-10">
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#4E7A53] bg-[#E2EBD9] px-3 py-1 rounded-full">
                Pricing Tiers
              </span>
              <h2 className="text-3xl font-black text-[#1D2A22] mt-3">Choose Your Wellness Plan</h2>
              <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">Unlock deeper biometrics, tailored health schedules, or dedicated human guidance.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="bg-[#FAFBF7]/60 border border-gray-100 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-gray-800">Version 1</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Core Tracking Essentials</p>
                  <div className="my-4">
                    <span className="text-2xl font-black text-gray-800">Free</span>
                    <span className="text-[10px] text-gray-400 font-semibold pl-1">/ ongoing</span>
                  </div>
                  <ul className="space-y-2.5 text-xs font-medium text-gray-600 border-t pt-4 border-gray-100">
                    <li className="flex items-center gap-2 text-gray-500"><Check size={14} className="text-[#7DA06D]" /> Basic Metric Logging</li>
                    <li className="flex items-center gap-2 text-gray-500"><Check size={14} className="text-[#7DA06D]" /> Active Target Reminders</li>
                    <li className="flex items-center gap-2 text-gray-500"><Check size={14} className="text-[#7DA06D]" /> Biometric Health Charts</li>
                  </ul>
                </div>
                <button className="w-full mt-6 py-2.5 bg-gray-100 text-gray-500 text-xs font-bold rounded-xl cursor-not-allowed" disabled>
                  Current Active Plan
                </button>
              </div>

              <div className="bg-white border-2 border-[#7DA06D] rounded-2xl p-6 flex flex-col justify-between relative shadow-md">
                <div className="absolute top-3 right-4 bg-[#7DA06D] text-white text-[8px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full">
                  Popular
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-800">Version 2</h4>
                  <p className="text-[11px] text-[#4E7A53] font-bold mt-0.5">Paid Plan</p>
                  <div className="my-4">
                    <span className="text-2xl font-black text-gray-800">$19</span>
                    <span className="text-[10px] text-gray-400 font-semibold pl-1">/ month</span>
                  </div>
                  <ul className="space-y-2.5 text-xs font-medium text-gray-700 border-t pt-4 border-gray-100">
                    <li className="flex items-start gap-2 text-gray-800 font-semibold"><Check size={14} className="text-[#7DA06D] mt-0.5 shrink-0" /> Diet charts according to your health</li>
                    <li className="flex items-start gap-2 text-gray-800 font-semibold"><Check size={14} className="text-[#7DA06D] mt-0.5 shrink-0" /> Custom exercise planning calendars</li>
                    <li className="flex items-start gap-2 text-gray-500"><Check size={14} className="text-[#7DA06D] mt-0.5 shrink-0" /> Extended historic graph analytics</li>
                  </ul>
                </div>
                <button className="w-full mt-6 py-2.5 bg-[#7DA06D] hover:bg-[#6d8e5e] text-white text-xs font-bold shadow-sm">Upgrade to Pro</button>
              </div>

              <div className="bg-[#FAFBF7]/60 border border-gray-100 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-gray-800">Version 3</h4>
                  <p className="text-[11px] text-indigo-600 font-bold mt-0.5">Paid Elite Plan</p>
                  <div className="my-4">
                    <span className="text-2xl font-black text-gray-800">$49</span>
                    <span className="text-[10px] text-gray-400 font-semibold pl-1">/ month</span>
                  </div>
                  <ul className="space-y-2.5 text-xs font-medium text-gray-600 border-t pt-4 border-gray-100">
                    <li className="flex items-start gap-2 text-gray-800 font-semibold"><Check size={14} className="text-[#7DA06D] mt-0.5 shrink-0" /> Personal experienced trainer</li>
                    <li className="flex items-start gap-2 text-gray-800 font-semibold"><Check size={14} className="text-[#7DA06D] mt-0.5 shrink-0" /> Tailored entirely to your requirements</li>
                    <li className="flex items-start gap-2 text-gray-500"><Check size={14} className="text-[#7DA06D] mt-0.5 shrink-0" /> 1-on-1 weekly text consultations</li>
                  </ul>
                </div>
                <button className="w-full mt-6 py-2.5 bg-gray-800 hover:bg-gray-900 text-white text-xs font-bold rounded-xl shadow-sm">Go Elite</button>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="bg-white/95 backdrop-blur-md border-2 border-[#E9C46A] rounded-[30px] p-10 shadow-[0_12px_40px_rgba(233,196,106,0.15)]">
            <button onClick={() => clickRouteHandler("dashboard")} className="mb-4 text-xs font-bold text-[#4E7A53] hover:underline">← Back to Dashboard</button>
            <h2 className="text-2xl font-black text-[#2C332E] tracking-tight capitalize mb-2">{currentTab} Panel</h2>
            <p className="text-xs text-[#727973]">The {currentTab} page module loaded successfully.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#fafbf7] text-[#2C332E] font-sans flex w-screen relative overflow-hidden">
      
      {/* BACKGROUND IMAGE AND MASK SETUP */}
      <img
        src="/loginbg.jpeg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-25 z-0"
      />
      <div className="absolute inset-0 bg-white/45 z-0"></div>

      {/* ================= LEFT SIDEBAR PANEL ================= */}
      <aside className="w-[260px] border-r border-[#EEF1EB] bg-white flex flex-col p-6 shrink-0 sticky top-0 h-screen z-20 shadow-sm relative overflow-hidden">
        
        {/* TOP NAVIGATION SEGMENT */}
        <div className="space-y-8 relative z-10">
          <div className="flex items-center gap-2 pl-2">
            <Logo />
          </div>

          <nav className="space-y-2">
            <button onClick={() => clickRouteHandler("dashboard")} className={getNavClass("dashboard")}>
              <Compass size={18} /> Dashboard
            </button>
            <button onClick={() => clickRouteHandler("workouts")} className={getNavClass("workouts")}>
              <Flame size={18} /> Workouts
            </button>
            <button onClick={() => clickRouteHandler("weight")} className={getNavClass("weight")}>
              <TrendingUp size={18} /> Weight
            </button>
            <button onClick={() => clickRouteHandler("habits")} className={getNavClass("habits")}>
              <CheckCircle2 size={18} /> Habits
            </button>
            <button onClick={() => clickRouteHandler("achievements")} className={getNavClass("achievements")}>
              <Sparkles size={18} /> Achievements
            </button>
            <button onClick={() => clickRouteHandler("profile")} className={getNavClass("profile")}>
              <User size={18} /> Profile
            </button>
          </nav>
        </div>

        {/* SIDEBAR ORGANIC LEAF DECORATION */}
        <div className="flex-1 relative w-full opacity-[0.35] mix-blend-multiply pointer-events-none my-4">
          <img 
            src="/leaf1.jpeg" 
            alt="Decorative brand leaf trail" 
            className="absolute inset-0 w-full h-full object-contain object-left scale-125"
          />
        </div>

        {/* BOTTOM UTILITY ACTIONS & PREMIUM BRAND FOOTER */}
        <div className="space-y-5 relative z-10 bg-white pt-2">
          <div className="border-t border-gray-100 pt-5 space-y-2">
            <button onClick={() => clickRouteHandler("settings")} className={getNavClass("settings")}>
              <Settings size={16} /> Settings
            </button>
            <button onClick={() => clickRouteHandler("logout")} className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-bold tracking-wide text-red-500 hover:bg-red-50 transition-all duration-200">
              <LogOut size={16} /> Logout
            </button>
          </div>

          <div className="bg-[#FAFBF7] border-2 border-[#E9C46A]/50 p-4 rounded-2xl shadow-xs relative overflow-hidden">
            <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-[#4E7A53] uppercase tracking-wider mb-1.5">
              <Sparkles size={12} className="text-[#E9C46A]" /> Premium Plan
            </div>
            <p className="text-[11px] font-medium text-gray-500 mb-4 leading-normal">Enjoy full access to biometric health charts.</p>
            <button 
              onClick={() => clickRouteHandler("premium-plan")} 
              className="w-full py-2.5 bg-white border border-gray-200 text-[#4E7A53] hover:border-[#7DA06D] text-[11px] font-bold rounded-xl transition-all duration-200 shadow-2xs hover:bg-gray-50"
            >
              View Plan
            </button>
          </div>
        </div>
      </aside>

      {/* ================= CONTAINER CONTENT INTERFACE WORKSPACE ================= */}
      <main className="flex-1 w-full max-w-none overflow-y-auto h-screen px-12 py-10 relative z-10 flex flex-col justify-between">
        <div className="w-full">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-[#1D2A22]">
                Good Morning, {displayName}! 👋
              </h1>
              <p className="text-sm text-[#727973] mt-1 font-medium">Let's make today count.</p>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 bg-white border border-[#EEF1EB] rounded-xl px-5 py-2.5 shadow-sm text-xs font-bold text-[#727973]">
                <Calendar size={16} className="text-[#4E7A53]" /> 
                {new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
              <button onClick={() => clickRouteHandler("notifications")} className="p-3 bg-white border border-[#EEF1EB] rounded-xl text-[#727973] hover:text-gray-800 shadow-sm relative transition-all hover:scale-105">
                <Bell size={18} />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
              </button>
            </div>
          </header>

          {renderSubViewContent()}
        </div>

        {/* BOTTOM DECORATIVE ACCENT LEAF LAYERS */}
        {currentTab === "dashboard" && (
          <div className="w-full h-28 mt-12 pointer-events-none select-none opacity-15 mix-blend-multiply">
            <img 
              src="/leaf2.jpeg" 
              alt="Horizontal brand aesthetic vine accent" 
              className="w-full h-full object-contain object-center" 
            />
          </div>
        )}
      </main>

    </div>
  );
}