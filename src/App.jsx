import React, { useState } from "react";

// PAGES
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import Welcome from "./pages/Welcome";
import GoalSelection from "./pages/GoalSelection";
import JourneySetup from "./pages/JourneySetup";
import Dashboard from "./pages/Dashboard";

export default function App() {
  // WEBSITE FLOW STARTS FROM LANDING PAGE
  const [step, setStep] = useState("home");

  // DASHBOARD ACTIVE TAB
  const [currentPage, setCurrentPage] = useState("dashboard");

  // USER DATA
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    height: "",
    weight: "",
    targetWeight: "",
    lifestyle: "Sedentary",
    waterGoal: "2",
    sleepGoal: "8",
    stepGoal: "8000",
  });

  // DASHBOARD NAVIGATION
  const handleDashboardNavigation = (destination) => {
    console.log("Routing to:", destination);

    if (destination === "logout") {
      handleLogout();
      return;
    }

    setCurrentPage(destination.toLowerCase());
  };

  // LOGOUT FUNCTION
  const handleLogout = () => {
    // reset form
    setFormData({
      name: "",
      age: "",
      gender: "Male",
      height: "",
      weight: "",
      targetWeight: "",
      lifestyle: "Sedentary",
      waterGoal: "2",
      sleepGoal: "8",
      stepGoal: "8000",
    });

    // reset dashboard tab
    setCurrentPage("dashboard");

    // go back to landing page
    setStep("home");
  };

  // PAGE ROUTER
  const renderPage = () => {
    switch (step) {
      // LANDING PAGE
      case "home":
        return <Home onNext={() => setStep("login")} />;

      // LOGIN / REGISTER
      case "login":
        return (
          <LoginRegister
            onNext={() => setStep("welcome")}
            formData={formData}
            setFormData={setFormData}
          />
        );

      // WELCOME PAGE
      case "welcome":
        return (
          <Welcome
            onNext={() => setStep("goals")}
            onSkipToDashboard={() => setStep("dashboard")}
          />
        );

      // GOAL SELECTION
      case "goals":
        return (
          <GoalSelection
            onNext={() => setStep("setup")}
            onBack={() => setStep("welcome")}
          />
        );

      // JOURNEY SETUP
      case "setup":
        return (
          <JourneySetup
            formData={formData}
            setFormData={setFormData}
            onNext={() => setStep("dashboard")}
            onBack={() => setStep("goals")}
          />
        );

      // DASHBOARD
      case "dashboard":
        return (
          <Dashboard
            onboardingData={formData}
            currentTab={currentPage}
            onNavigate={handleDashboardNavigation}
          />
        );

      // DEFAULT FALLBACK
      default:
        return <Home onNext={() => setStep("login")} />;
    }
  };

  return (
    <div
      className="min-h-screen font-sans relative overflow-hidden"
      style={{
        backgroundColor: "#FAFBF7",
      }}
    >
      {/* GLOBAL LEAF BACKGROUND */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* LEFT LEAF */}
        <img
          src="/leaf1.jpeg"
          alt="left leaves"
          className="absolute left-0 top-0 h-full w-[22%] object-cover opacity-90"
        />

        {/* RIGHT LEAF */}
        <img
          src="/leaf2.jpeg"
          alt="right leaves"
          className="absolute right-0 top-0 h-full w-[22%] object-cover opacity-90"
        />

        {/* CENTER SOFT TEXTURE */}
        <img
          src="/leafbg.jpeg"
          alt="background texture"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-[#FAFBF7]/70"></div>
      </div>

      {/* PAGE CONTENT */}
      <div className="relative z-10">{renderPage()}</div>
    </div>
  );
}