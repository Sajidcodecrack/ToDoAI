import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white flex flex-col">
      {/* Header Section */}
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            AI To-Do
          </span>
          <span className="text-sm bg-indigo-700 text-cyan-200 px-2 py-1 rounded-full">Powered by AI</span>
        </div>
        <div className="space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-sm font-medium rounded-md bg-cyan-500 hover:bg-cyan-600 transition-all duration-200 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Your <span className="text-cyan-400">AI-Powered</span> Task Companion
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Let artificial intelligence streamline your tasks, suggest priorities, and keep you on track—all in one sleek app.
        </p>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mt-8">
          <div className="p-6 bg-gray-800 bg-opacity-80 rounded-xl hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105">
            <span className="text-3xl mb-2 block">🤖</span>
            <h3 className="text-xl font-semibold text-cyan-300">Smart Suggestions</h3>
            <p className="text-gray-400 mt-2">AI analyzes your tasks and suggests what’s next.</p>
          </div>
          <div className="p-6 bg-gray-800 bg-opacity-80 rounded-xl hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105">
            <span className="text-3xl mb-2 block">⚡</span>
            <h3 className="text-xl font-semibold text-cyan-300">Instant Sync</h3>
            <p className="text-gray-400 mt-2">Access your todos anywhere, anytime.</p>
          </div>
          <div className="p-6 bg-gray-800 bg-opacity-80 rounded-xl hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105">
            <span className="text-3xl mb-2 block">📊</span>
            <h3 className="text-xl font-semibold text-cyan-300">Task Insights</h3>
            <p className="text-gray-400 mt-2">Get analytics to boost productivity.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <Link
            to="/register"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
          >
            Start Organizing Now
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-400 text-sm">
        © 2025 AI To-Do. All rights reserved.
      </footer>
    </div>
  );
}