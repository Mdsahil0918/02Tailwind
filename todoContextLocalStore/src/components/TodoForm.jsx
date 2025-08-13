import React, { useState } from 'react';
import { useTodo } from '../context';

function TodoForm() {
    const [todo, setTodo] = useState('');
    const { addTodo } = useTodo();
 const [isAnimating, setIsAnimating] = useState(false);
    const add = (e) => {
        e.preventDefault();
        if (!todo.trim()) return;
        addTodo({ todo, completed: false });
        setTodo('');
    };

return (
    <form onSubmit={add} className="flex group relative">
      {/* Glowing background effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-xl opacity-30 group-hover:opacity-50 blur transition-opacity duration-500"></div>
      
      <div className="relative flex w-full">
        <input 
          type="text" 
          placeholder="✨ What needs to be done?"
          className="w-full border-2 border-transparent bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-l-xl px-6 py-4 outline-none duration-300 text-white placeholder-purple-200 focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/25 focus:scale-[1.02] transform transition-all"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button 
          type="submit"
          className={`relative overflow-hidden rounded-r-xl px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold shrink-0 transition-all duration-300 hover:from-emerald-600 hover:to-teal-700 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 ${isAnimating ? 'animate-pulse' : ''}`}
        >
          <span className={`transition-transform duration-300 ${isAnimating ? 'scale-110' : ''}`}>
            {isAnimating ? '🚀' : '➕ Add'}
          </span>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
