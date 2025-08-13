import React, { useState } from 'react';
import { useTodo } from '../context';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    setIsUpdating(true);
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
    setTimeout(() => setIsUpdating(false), 300);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => deleteTodo(todo.id), 300);
  };

  return (
    <div
      className={`group relative transform transition-all duration-500 hover:scale-[1.02] ${
        isDeleting ? 'scale-75 opacity-0 rotate-12' : 'scale-100 opacity-100'
      } ${isUpdating ? 'animate-pulse' : ''}`}
    >
      {/* Glowing border effect */}
      <div className={`absolute -inset-1 rounded-2xl transition-all duration-300 ${
        todo.completed 
          ? 'bg-gradient-to-r from-emerald-400 to-teal-500 opacity-50' 
          : 'bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 opacity-30 group-hover:opacity-60'
      } blur-sm`}></div>
      
      <div
        className={`relative flex items-center border-2 border-transparent rounded-2xl px-6 py-4 gap-x-4 backdrop-blur-sm transition-all duration-500 ${
          todo.completed 
            ? 'bg-gradient-to-r from-emerald-400/20 to-teal-500/20 text-emerald-100' 
            : 'bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 text-white hover:shadow-lg hover:shadow-purple-500/25'
        }`}
      >
        {/* Custom Checkbox */}
        <div className="relative">
          <input 
            type="checkbox" 
            className="sr-only"
            checked={todo.completed}
            onChange={toggleCompleted}
            id={`todo-${todo.id}`}
          />
          <label 
            htmlFor={`todo-${todo.id}`}
            className={`flex items-center justify-center w-6 h-6 rounded-full border-2 cursor-pointer transition-all duration-300 ${
              todo.completed 
                ? 'bg-gradient-to-r from-emerald-400 to-teal-500 border-emerald-400 scale-110' 
                : 'border-purple-400 hover:border-purple-300 hover:bg-purple-500/20'
            }`}
          >
            {todo.completed && (
              <svg className="w-4 h-4 text-white animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </label>
        </div>

        {/* Todo Text Input */}
        <input 
          type="text" 
          className={`flex-1 bg-transparent border-2 rounded-xl px-4 py-2 outline-none transition-all duration-300 ${
            isTodoEditable 
              ? 'border-amber-400 bg-amber-400/10 shadow-lg shadow-amber-500/20' 
              : 'border-transparent'
          } ${
            todo.completed 
              ? 'line-through text-emerald-200' 
              : 'text-white'
          }`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />

        {/* Action Buttons */}
        <div className="flex gap-2">
          {/* Edit Button */}
          <button
            className={`group/btn relative w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-300 overflow-hidden ${
              todo.completed 
                ? 'opacity-50 cursor-not-allowed border-gray-500' 
                : 'border-amber-400 bg-amber-400/20 hover:bg-amber-400 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/25'
            }`}
            onClick={() => {
              if (todo.completed) return;
              if (isTodoEditable) {
                editTodo();
              } else {
                setIsTodoEditable(true);
              }
            }}
            disabled={todo.completed}
          >
            <span className={`text-lg transition-transform duration-300 ${
              todo.completed ? 'text-gray-400' : 'text-amber-300 group-hover/btn:scale-110'
            }`}>
              {isTodoEditable ? '💾' : '✏️'}
            </span>
            
            {!todo.completed && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"></div>
            )}
          </button>

          {/* Delete Button */}
          <button
            className="group/btn relative w-10 h-10 rounded-xl border-2 border-red-400 bg-red-400/20 hover:bg-red-500 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 flex items-center justify-center transition-all duration-300 overflow-hidden"
            onClick={handleDelete}
          >
            <span className="text-lg text-red-300 group-hover/btn:scale-110 transition-transform duration-300">
              🗑️
            </span>
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
