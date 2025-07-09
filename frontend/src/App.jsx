import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1e0033] text-white">
      {/* Floating Oval Header */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 bg-white text-black rounded-full shadow-lg px-6 py-3 flex items-center justify-between w-[90%] max-w-5xl z-50">
        {/* Logo */}
        <div className="text-xl font-bold">HelpMeMake</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#how-it-works" className="hover:text-purple-700 transition-colors">How it Works</a>
          <a href="#mentors" className="hover:text-purple-700 transition-colors">Find Mentors</a>
          <a href="#projects" className="hover:text-purple-700 transition-colors">Projects</a>
          <a href="#pricing" className="hover:text-purple-700 transition-colors">Pricing</a>
        </nav>

        {/* Login / Signup */}
        <div className="space-x-4">
          <button className="text-sm font-medium hover:text-purple-700 transition-colors">Login</button>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-800 transition-colors">
            Sign Up
          </button>
        </div>
      </header>

      {/* Placeholder content */}
      <main className="pt-32 px-6 md:px-12 lg:px-24">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Bring Your Ideas to Life</h1>
          <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto">
            Hire skilled mentors to guide you in building your dream projects. From coding to design, we’ve got you covered.
          </p>
        </section>
        <div className="h-[200vh]" /> {/* Simulate scrolling */}
      </main>
    </div>
  );
}
