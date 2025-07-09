import { useState } from "react";

export default function Login() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    role: "Student",
    timezone: "",
    skillset: "",
    project: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleNext(e) {
    e.preventDefault();
    setStep(2);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Handle final submit (API call or state update)
    alert("Signed up! (Demo)");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e0033] text-white px-4">
      <div className="bg-white/10 rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{step === 1 ? "Login / Sign Up" : "Your Skills & Project"}</h2>
        {step === 1 ? (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full px-3 py-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Role</label>
              <select name="role" value={form.role} onChange={handleChange} className="w-full px-3 py-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Student</option>
                <option>Employed</option>
                <option>Learner</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Timezone</label>
              <input name="timezone" value={form.timezone} onChange={handleChange} required placeholder="e.g. GMT+5:30" className="w-full px-3 py-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 rounded transition-colors">Next</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Current Skillset</label>
              <textarea name="skillset" value={form.skillset} onChange={handleChange} required rows={2} placeholder="e.g. React, Python, UI Design" className="w-full px-3 py-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Project Description</label>
              <textarea name="project" value={form.project} onChange={handleChange} required rows={3} placeholder="Describe what you want to build..." className="w-full px-3 py-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 rounded transition-colors">Sign Up</button>
            <div className="text-center mt-2">
              <a href="#" className="text-purple-300 hover:underline text-sm">Not sure what to build? Let our AI help you</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
