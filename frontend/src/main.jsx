import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import UserDashboard from "./userDashboard.jsx";
import MentorDashboard from "./mentorDashboard.jsx";
import Questions from "./Questions.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/mentordashboard" element={<MentorDashboard />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
