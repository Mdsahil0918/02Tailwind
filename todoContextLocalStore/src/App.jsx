import './App.css';
import { TodoItem, TodoForm } from './components';
import { TodoProvider } from './context';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) => prev.map((pt) => (pt.id === id ? { ...pt, ...updatedTodo } : pt)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((pt) => pt.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((pt) => pt.id === id ? { ...pt, completed: !pt.completed } : pt));
  };

  // Note: localStorage is commented out as it's not supported in Claude artifacts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 animate-pulse">
              Every Sec Counts 🦾
            </h1>
            <p className="text-xl text-purple-200 opacity-80">
              Transform your productivity with style
            </p>
            {totalCount > 0 && (
              <div className="mt-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="text-purple-200">Progress:</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-500"
                      style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
                    ></div>
                  </div>
                  <span className="text-emerald-300 font-bold">
                    {completedCount}/{totalCount}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Todo Form */}
          <div className="mb-8">
            <TodoForm />
          </div>

          {/* Todos List */}
          <div className="space-y-4">
            {todos.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-8xl mb-4 animate-bounce">🚀</div>
                <p className="text-2xl text-purple-200 mb-2">Ready to be productive?</p>
                <p className="text-lg text-purple-300 opacity-70">Add your first todo above to get started!</p>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                {todos.map((todo, index) => (
                  <div 
                    key={todo.id} 
                    className="animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <TodoItem todo={todo} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </TodoProvider>
  );
}

export default App;
