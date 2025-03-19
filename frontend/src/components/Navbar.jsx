import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 fixed w-full top-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link to="/" className="text-2xl font-extrabold tracking-tight hover:text-indigo-200 transition-colors duration-200 flex items-center">
          <span className="mr-2">✨</span> To-Do Pro
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 hover:text-indigo-100 transition-all duration-200 transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 hover:text-indigo-100 transition-all duration-200 transform hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 hover:text-indigo-100 transition-all duration-200 transform hover:scale-105"
          >
            Register
          </Link>
          <Link
            to="/todo"
            className="px-4 py-2 bg-purple-500 rounded-md text-sm font-medium hover:bg-purple-600 hover:text-white transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            My Tasks
          </Link>
        </div>
      </div>
    </nav>
  );
}