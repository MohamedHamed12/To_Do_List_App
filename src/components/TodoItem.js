import React from 'react';

function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <span
        className={`flex-grow ${todo.completed ? 'line-through' : ''}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.task}
      </span>
      <button onClick={() => removeTodo(todo.id)} className="bg-red-600 text-white p-1 rounded">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
