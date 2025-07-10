import React, { useState } from "react";

const timezones = [
    "GMT-12:00",
    "UTC-11:00",
    "IST-10:00",
];

export default function Signup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        timezone: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        alert("Signup submitted!");
    };

    const handleOAuth = (provider) => {
        // Redirect to OAuth provider
        alert(`Sign in with ${provider}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1e0033] text-white px-4">
            <div className="bg-white/10 rounded-2xl shadow-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-200"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-200"
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={form.username}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-200"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-200"
                    />
                    <select
                        name="timezone"
                        value={form.timezone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Select Timezone</option>
                        {timezones.map((tz) => (
                            <option key={tz} value={tz}>{tz}</option>
                        ))}
                    </select>
                    <button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 rounded transition-colors mt-2">Sign Up</button>
                </form>
                <div className="text-center my-4">
                    <span className="text-purple-200">or sign in with</span>
                    <div className="mt-2 flex justify-center gap-4">
                        <button onClick={() => handleOAuth("Google")} className="bg-white/20 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors font-semibold">Gmail</button>
                        <button onClick={() => handleOAuth("GitHub")} className="bg-white/20 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors font-semibold">GitHub</button>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <span className="text-purple-200">Already have an account? </span>
                    <a href="/login" className="text-purple-400 hover:underline font-semibold">Log in</a>
                </div>
            </div>
        </div>
    );
}