import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      if (response.ok) {
        navigate("/login");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 bg-opacity-90 rounded-2xl shadow-2xl p-8 transform transition-all hover:scale-105 duration-300">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Join AI To-Do
          </h2>
          <span className="ml-2 text-sm bg-indigo-700 text-cyan-200 px-2 py-1 rounded-full">AI</span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 peer"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="absolute left-4 -top-2 text-sm text-gray-300 bg-gray-800 px-1 transition-all duration-200 peer-focus:text-cyan-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500">
              Username
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 peer"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="absolute left-4 -top-2 text-sm text-gray-300 bg-gray-800 px-1 transition-all duration-200 peer-focus:text-cyan-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500">
              Email
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 peer"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="absolute left-4 -top-2 text-sm text-gray-300 bg-gray-800 px-1 transition-all duration-200 peer-focus:text-cyan-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500">
              Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 active:from-cyan-700 active:to-purple-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg"
          >
            Start Your AI Journey
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Already a member?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}