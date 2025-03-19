import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      const response = await fetch("http://localhost:5000/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      setResponse(data.response);
    } catch (error) {
      setResponse("Oops! Something went wrong.");
    }
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 flex flex-col items-center p-4">
      <div className="max-w-3xl w-full bg-gray-800 bg-opacity-95 rounded-2xl shadow-2xl p-6 mt-12 flex flex-col h-[80vh] transform transition-all hover:shadow-3xl duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            AI Task Assistant
          </h2>
          <span className="text-sm bg-indigo-700 text-cyan-200 px-3 py-1 rounded-full animate-pulse">
            Online
          </span>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-900 rounded-xl shadow-inner">
          <div className="space-y-4">
            {response ? (
              <div className="max-w-[80%] bg-gradient-to-r from-cyan-600 to-purple-600 text-white p-4 rounded-lg shadow-md animate-fade-in">
                <p className="text-sm leading-relaxed">{response}</p>
              </div>
            ) : (
              <div className="text-center text-gray-400 italic">
                <p>Type a message to get started—I’m here to assist!</p>
              </div>
            )}
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mt-6 flex items-center gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 pr-12"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">✨</span>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-3 rounded-full hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-md flex items-center justify-center w-12 h-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </form>

        {/* Back Button */}
        <button
          onClick={() => navigate("/todo")}
          className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Todo List
        </button>
      </div>
    </div>
  );
}