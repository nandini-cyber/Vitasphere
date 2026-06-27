import React from "react";
import { 
  Dumbbell, 
  Moon, 
  Droplets, 
  LineChart, 
  ShieldCheck, 
  Activity, 
  Heart, 
  ArrowRight,
  Mail,
  MessageSquare,
  User
} from "lucide-react";
import Logo from "../components/Logo";

export default function Home({ onNext }) {
  
  // Natively handles smooth scrolling straight down to specific sections
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen relative bg-[#f8f7f3] overflow-y-auto px-6 py-10 font-sans scroll-smooth">

      {/* BACKGROUND EFFECTS */}
      <img
        src="/loginbg.jpeg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none fixed"
      />
      <div className="absolute inset-0 bg-white/45 pointer-events-none fixed"></div>

      <img src="/leaf1.jpeg" alt="leaf" className="absolute top-8 left-8 w-32 opacity-40 pointer-events-none" />
      <img src="/leaf2.jpeg" alt="leaf" className="absolute bottom-12 right-12 w-48 opacity-30 pointer-events-none" />

      {/* ===== MAIN CONTAINER ===== */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-24">

        {/* HERO SECTION CONTAINER */}
        <div className="w-full bg-white/95 backdrop-blur-xl rounded-[35px] border-2 border-[#E9C46A] shadow-[0_12px_40px_rgba(233,196,106,0.25)] px-16 py-12 min-h-[85vh] flex flex-col justify-between relative">
          <div className="absolute top-5 right-5 w-3 h-3 rounded-full bg-[#E9C46A]"></div>

          {/* NAVBAR */}
          <nav className="flex justify-between items-center mb-12">
            <Logo />
            <div className="hidden md:flex gap-10 text-sm text-gray-600 font-semibold tracking-wide">
              <button onClick={() => handleScrollToSection("features-section")} className="hover:text-[#7DA06D] transition cursor-pointer outline-none">Features</button>
              <button onClick={() => handleScrollToSection("benefits-section")} className="hover:text-[#7DA06D] transition cursor-pointer outline-none">Benefits</button>
              <button onClick={() => handleScrollToSection("about-section")} className="hover:text-[#7DA06D] transition cursor-pointer outline-none">About</button>
              <button onClick={() => handleScrollToSection("contact-section")} className="hover:text-[#7DA06D] transition cursor-pointer outline-none">Contact</button>
            </div>
            <button onClick={onNext} className="px-7 py-3 rounded-2xl bg-[#7DA06D] hover:bg-[#6d8e5e] text-white font-semibold shadow-md transition active:scale-97 cursor-pointer">
              Get Started
            </button>
          </nav>

          {/* HERO BODY */}
          <div className="grid lg:grid-cols-2 gap-10 items-center my-auto">
            <div>
              <div className="inline-block px-5 py-2 rounded-full bg-[#EDF5EA] text-[#2E7D4F] text-sm mb-6 font-semibold">Your Health. Your Journey.</div>
              <h1 className="text-6xl font-black leading-tight text-[#1D2A22]">A Healthier You,</h1>
              <h1 className="text-6xl font-black leading-tight text-[#2E7D4F] mt-2">Every Day</h1>
              <p className="text-gray-500 text-lg leading-8 mt-8 max-w-xl font-medium">VitaSphere helps you track workouts, hydration, sleep, calories and build a healthier lifestyle with smart daily wellness insights.</p>
              
              <div className="flex gap-5 mt-10">
                <button onClick={onNext} className="px-9 py-4 bg-[#7DA06D] text-white rounded-2xl font-bold shadow-md hover:bg-[#6d8e5e] transition active:scale-97 flex items-center gap-2 cursor-pointer">Start Journey <ArrowRight size={18} /></button>
                <button onClick={() => handleScrollToSection("features-section")} className="px-9 py-4 border border-gray-300 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 transition active:scale-97 cursor-pointer">Learn More</button>
              </div>

              {/* STATS */}
              <div className="flex gap-6 mt-14">
                <div className="bg-white rounded-2xl shadow-xs px-6 py-4 border border-gray-100">
                  <h3 className="text-3xl font-black text-[#2E7D4F]">10K+</h3>
                  <p className="text-xs text-gray-400 font-bold mt-0.5 uppercase tracking-wide">Active Users</p>
                </div>
                <div className="bg-white rounded-2xl shadow-xs px-6 py-4 border border-gray-100">
                  <h3 className="text-3xl font-black text-[#2E7D4F]">24/7</h3>
                  <p className="text-xs text-gray-400 font-bold mt-0.5 uppercase tracking-wide">Tracking</p>
                </div>
                <div className="bg-white rounded-2xl shadow-xs px-6 py-4 border border-gray-100">
                  <h3 className="text-3xl font-black text-[#2E7D4F]">100%</h3>
                  <p className="text-xs text-gray-400 font-bold mt-0.5 uppercase tracking-wide">Wellness</p>
                </div>
              </div>
            </div>

            {/* ART WORKSPACE */}
            <div className="relative flex justify-center items-center">
              <div className="absolute w-[450px] h-[450px] rounded-full bg-[#EAF5E7] blur-3xl opacity-60"></div>
              <div className="absolute w-[430px] h-[430px] border border-dashed border-[#A9C9AE]/70 rounded-full"></div>
              <img src="/meditate.jpeg" alt="Meditation" className="relative z-10 w-[410px] object-contain drop-shadow-2xl rounded-full" />
            </div>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <section id="features-section" className="pt-12 scroll-mt-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#2E7D4F] bg-[#EDF5EA] px-3 py-1 rounded-full">Features</span>
            <h2 className="text-4xl font-black text-[#1D2A22] mt-3">Platform Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Dumbbell, title: "Workout Tracking", desc: "Monitor exercises and calories burned." },
              { icon: Moon, title: "Sleep Monitor", desc: "Improve sleep quality every night." },
              { icon: Droplets, title: "Hydration Goals", desc: "Maintain healthy daily water intake." },
              { icon: LineChart, title: "Progress Analytics", desc: "View insights and personal growth trends." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition">
                <div className="w-12 h-12 rounded-2xl bg-[#EDF5EA] text-[#2E7D4F] flex items-center justify-center mb-5"><item.icon size={22} /></div>
                <h3 className="font-bold text-[#1D2A22] text-lg">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY SECTION */}
        <section id="benefits-section" className="bg-white/80 backdrop-blur-md rounded-[35px] border-2 border-[#E9C46A] p-12 shadow-sm grid lg:grid-cols-12 gap-8 items-center scroll-mt-6">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#2E7D4F] bg-[#EDF5EA] px-3 py-1 rounded-full">Benefits</span>
            <h2 className="text-4xl font-black text-[#1D2A22]">Why VitaSphere?</h2>
            <p className="text-gray-600 text-sm leading-relaxed">We offer a unified health framework built around sustainable habit building.</p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4 text-xs font-semibold text-gray-700">
              <div className="flex items-center gap-2.5"><ShieldCheck className="text-[#7DA06D]" size={18} /> Encrypted Data</div>
              <div className="flex items-center gap-2.5"><Activity className="text-[#7DA06D]" size={18} /> Automated Targets</div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-[#FAFBF7] rounded-2xl p-6 border border-gray-100 text-center shadow-2xs">
             <LineChart size={40} className="mx-auto text-[#7DA06D] mb-4" />
             <h4 className="text-lg font-black text-[#1D2A22]">Consistency Index</h4>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about-section" className="text-center scroll-mt-6">
          <h2 className="text-4xl font-black text-[#1D2A22] mb-12">About Our Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["The Vision", "The Philosophy", "The Engine"].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold text-[#1D2A22] text-sm uppercase">{t}</h4>
                <p className="text-xs text-gray-500 mt-2">Engineered to bridge the gap between hard numbers and human lifestyles.</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact-section" className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border border-gray-100 shadow-xs scroll-mt-6 pb-16">
          <h3 className="text-2xl font-black text-[#1D2A22] text-center mb-8">Connect With Us</h3>
          <form onSubmit={(e) => { e.preventDefault(); alert("Sent!"); }} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full p-3 bg-[#FAFBF7] rounded-xl border border-gray-100 outline-none text-xs" />
              <input type="email" placeholder="Email" className="w-full p-3 bg-[#FAFBF7] rounded-xl border border-gray-100 outline-none text-xs" />
            </div>
            <textarea placeholder="Message" rows={4} className="w-full p-3 bg-[#FAFBF7] rounded-xl border border-gray-100 outline-none text-xs" />
            <button type="submit" className="w-full py-3 bg-[#7DA06D] text-white font-bold text-xs rounded-xl hover:bg-[#6d8e5e]">Send Message</button>
          </form>
        </section>

      </div>
    </div>
  );
}