import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.username === "user" && form.password === "123") {
      navigate("/userdashboard");
    } else if (form.username === "mentor" && form.password === "123") {
      navigate("/mentordashboard");
    } else if (form.username === "admin" && form.password === "123") {
      window.open("https://help-me-make.vercel.app/", "_blank"); // opens in new tab
    } else {
      setError("Invalid username or password");
    }
  }

  function handleOAuth(provider) {
    // Redirect to OAuth provider
    alert(`Sign in with ${provider}`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e0033] text-white px-4">
      <div className="bg-white/10 rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          {error && (
            <div className="text-red-400 text-sm text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 rounded transition-colors"
          >
            Login
          </button>
        </form>
        <div className="text-center my-4">
          <span className="text-purple-200">or login with</span>
          <div className="mt-2 flex justify-center gap-4">
            <button
              onClick={() => handleOAuth("Google")}
              className="bg-white/20 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors font-semibold"
            >
              Gmail
            </button>
            <button
              onClick={() => handleOAuth("GitHub")}
              className="bg-white/20 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors font-semibold"
            >
              GitHub
            </button>
          </div>
        </div>
        <div className="text-center mt-4">
          <span className="text-purple-200">Don't have an account? </span>
          <a
            href="/signup"
            className="text-purple-400 hover:underline font-semibold"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
