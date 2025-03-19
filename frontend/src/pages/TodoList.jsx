import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/todos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setTodos(data);
        } else {
          console.error("Failed to fetch todos:", data.error || "Unknown error");
          if (response.status === 401) {
            navigate("/login");
          }
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchTodos();
  }, [navigate]);

  const addTodo = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    if (newTodo.trim() !== "") {
      try {
        const response = await fetch("http://localhost:5000/api/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ text: newTodo }),
        });
        const data = await response.json();
        if (response.ok) {
          setTodos([...todos, data]);
          setNewTodo("");
        } else {
          console.error("Failed to add todo:", data.error || "Unknown error");
          if (response.status === 401) {
            navigate("/login");
          }
        }
      } catch (error) {
        console.error("Add todo error:", error);
      }
    }
  };

  const deleteTodo = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setTodos(todos.filter((todo) => todo._id !== id));
      } else {
        console.error("Failed to delete todo:", await response.json());
        if (response.status === 401) {
          navigate("/login");
        }
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAIChatRedirect = () => {
    navigate("/chat"); // Redirect to chat page (to be implemented later)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 flex flex-col items-center">
      <div className="max-w-4xl w-full pt-12 pb-8 px-4 relative">
        <div className="bg-gray-800 bg-opacity-90 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              AI To-Do Dashboard
            </h2>
            <span className="ml-2 text-sm bg-indigo-700 text-cyan-200 px-2 py-1 rounded-full">AI</span>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search your todos..."
              className="w-full p-4 pl-12 bg-gray-700 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
          </div>

          {/* Add Todo Section */}
          <div className="flex items-center mb-6 gap-3">
            <input
              type="text"
              placeholder="Add a smart task..."
              className="flex-1 p-4 bg-gray-700 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTodo()}
            />
            <button
              onClick={addTodo}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              Add
            </button>
          </div>

          {/* Todo List */}
          <div className="space-y-3">
            {filteredTodos.length > 0 ? (
              filteredTodos.map((todo) => (
                <div
                  key={todo._id}
                  className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-200 group"
                >
                  <span className="text-white flex-1">{todo.text}</span>
                  <button
                    onClick={() => deleteTodo(todo._id)}
                    className="text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-500 transition-all duration-200"
                  >
                    🗑️
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center py-6">
                No todos yet—let AI help you start! 🤖
              </p>
            )}
          </div>
        </div>

        {/* AI Chat Button */}
        <button
          onClick={handleAIChatRedirect}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-400 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:from-cyan-500 hover:to-indigo-700 transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          title="Chat with AI Assistant"
        >
          <span className="text-2xl">🤖</span>
          <span className="ml-2 font-semibold">AI Help</span>
        </button>
      </div>
    </div>
  );
}